import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { usePublicClient } from 'wagmi'
import type { Address, Hex } from 'viem'
import { settledEvent } from './abis'
import { CHAIN_ID } from './chain'
import { ANY_DEPLOYED, DEPLOYED_ADDRESSES, START_BLOCK } from './contracts'

/** One verified USDC settlement, read from a Settled log emitted by a PayMesh contract. */
export interface Settlement {
  id: string
  txHash: Hex
  blockNumber: number
  logIndex: number
  contract: Address
  from: Address
  to: Address
  amount: bigint
  category: Hex
  source: number
  ref: bigint
  /** Block timestamp in seconds. Undefined until the block has been fetched. */
  timestamp?: number
}

interface StoredRecord {
  id: string
  txHash: Hex
  blockNumber: number
  logIndex: number
  contract: Address
  from: Address
  to: Address
  amount: string
  category: Hex
  source: number
  ref: string
}

interface Store {
  v: 1
  lastBlock: number
  records: StoredRecord[]
  times: Record<string, number>
}

export interface IndexProgress {
  from: number
  current: number
  head: number
}

interface ActivityState {
  deployed: boolean
  settlements: Settlement[]
  status: 'idle' | 'indexing' | 'ready' | 'error'
  error?: string
  head?: number
  progress?: IndexProgress
  /** First block of the window that has been indexed. */
  windowStart?: number
  /** Measured average block interval over the last blocks, in seconds. */
  blockTimeSec?: number
  /** True when some settlements still lack a block timestamp, so time-windowed totals may be partial. */
  timesPartial: boolean
  updatedAt?: number
  refresh: () => void
}

const LOOKBACK_BLOCKS = 300_000
const MAX_RECORDS = 3000
const MAX_TIME_FETCH_PER_RUN = 120
const POLL_MS = 8000
const storeKey = () => `paymesh:index:v1:${CHAIN_ID}:${DEPLOYED_ADDRESSES.join('').toLowerCase().slice(0, 400)}`

function loadStore(): Store {
  try {
    const raw = localStorage.getItem(storeKey())
    if (raw) {
      const parsed = JSON.parse(raw) as Store
      if (parsed.v === 1) return parsed
    }
  } catch {
    /* corrupted cache is simply rebuilt */
  }
  return { v: 1, lastBlock: 0, records: [], times: {} }
}

function saveStore(store: Store) {
  try {
    localStorage.setItem(storeKey(), JSON.stringify(store))
  } catch {
    /* storage full: index stays in memory only */
  }
}

const toSettlement = (r: StoredRecord, times: Record<string, number>): Settlement => ({
  ...r,
  amount: BigInt(r.amount),
  ref: BigInt(r.ref),
  timestamp: times[String(r.blockNumber)],
})

type Client = NonNullable<ReturnType<typeof usePublicClient>>

const ActivityContext = createContext<ActivityState | null>(null)

export function ActivityProvider({ children }: { children: ReactNode }) {
  const client = usePublicClient({ chainId: CHAIN_ID })
  const running = useRef(false)
  const lastBlockTimeAt = useRef(0)
  const [settlements, setSettlements] = useState<Settlement[]>(() => {
    const s = loadStore()
    return s.records.map((r) => toSettlement(r, s.times)).sort(byNewest)
  })
  const [status, setStatus] = useState<ActivityState['status']>('idle')
  const [error, setError] = useState<string>()
  const [head, setHead] = useState<number>()
  const [progress, setProgress] = useState<IndexProgress>()
  const [windowStart, setWindowStart] = useState<number>()
  const [blockTimeSec, setBlockTimeSec] = useState<number>()
  const [updatedAt, setUpdatedAt] = useState<number>()

  const run = useCallback(async () => {
    if (!client || !ANY_DEPLOYED || running.current) return
    running.current = true
    try {
      const store = loadStore()
      const chainHead = Number(await client.getBlockNumber())
      setHead(chainHead)
      const floor = Math.max(START_BLOCK ?? 0, chainHead - LOOKBACK_BLOCKS, 0)
      const from = Math.max(store.lastBlock + 1, floor)
      setWindowStart(floor)

      if (from <= chainHead) {
        if (chainHead - from > 2000) setStatus('indexing')
        const found = await scanRange(client, from, chainHead, (current) => setProgress({ from, current, head: chainHead }))
        const known = new Set(store.records.map((r) => r.id))
        for (const rec of found) if (!known.has(rec.id)) store.records.push(rec)
        store.records = store.records.filter((r) => r.blockNumber >= floor).sort(byNewestStored).slice(0, MAX_RECORDS)
        store.lastBlock = chainHead
      }

      await fillTimestamps(client, store)
      if (Date.now() - lastBlockTimeAt.current > 60_000) {
        lastBlockTimeAt.current = Date.now()
        setBlockTimeSec(await measureBlockTime(client, chainHead))
      }
      saveStore(store)
      setSettlements(store.records.map((r) => toSettlement(r, store.times)).sort(byNewest))
      setProgress(undefined)
      setError(undefined)
      setStatus('ready')
      setUpdatedAt(Date.now())
    } catch (e) {
      setError(e instanceof Error ? e.message.split('\n')[0] : 'Could not read the network')
      setStatus('error')
    } finally {
      running.current = false
    }
  }, [client])

  useEffect(() => {
    if (!ANY_DEPLOYED) return
    const first = setTimeout(() => void run(), 0)
    const timer = setInterval(() => void run(), POLL_MS)
    return () => {
      clearTimeout(first)
      clearInterval(timer)
    }
  }, [run])

  const value = useMemo<ActivityState>(
    () => ({
      deployed: ANY_DEPLOYED,
      settlements,
      status,
      error,
      head,
      progress,
      windowStart,
      blockTimeSec,
      timesPartial: settlements.some((s) => s.timestamp === undefined),
      updatedAt,
      refresh: () => void run(),
    }),
    [settlements, status, error, head, progress, windowStart, blockTimeSec, updatedAt, run],
  )

  return <ActivityContext.Provider value={value}>{children}</ActivityContext.Provider>
}

export function useActivity(): ActivityState {
  const ctx = useContext(ActivityContext)
  if (!ctx) throw new Error('useActivity must be used inside ActivityProvider')
  return ctx
}

const byNewest = (a: Settlement, b: Settlement) => b.blockNumber - a.blockNumber || b.logIndex - a.logIndex
const byNewestStored = (a: StoredRecord, b: StoredRecord) => b.blockNumber - a.blockNumber || b.logIndex - a.logIndex

/** Scans in adaptive chunks so a provider's block-range limit shrinks the step instead of failing. */
async function scanRange(client: Client, from: number, to: number, onProgress: (current: number) => void): Promise<StoredRecord[]> {
  const out: StoredRecord[] = []
  let step = 5000
  let cursor = from
  while (cursor <= to) {
    const end = Math.min(cursor + step - 1, to)
    try {
      const logs = await client.getLogs({
        address: DEPLOYED_ADDRESSES,
        event: settledEvent,
        fromBlock: BigInt(cursor),
        toBlock: BigInt(end),
      })
      for (const log of logs) {
        const args = log.args
        if (!args.from || !args.to || args.amount === undefined || !args.category || args.source === undefined || args.ref === undefined) continue
        if (log.blockNumber === null || log.logIndex === null || !log.transactionHash) continue
        out.push({
          id: `${log.transactionHash}-${log.logIndex}`,
          txHash: log.transactionHash,
          blockNumber: Number(log.blockNumber),
          logIndex: Number(log.logIndex),
          contract: log.address,
          from: args.from,
          to: args.to,
          amount: args.amount.toString(),
          category: args.category,
          source: Number(args.source),
          ref: args.ref.toString(),
        })
      }
      cursor = end + 1
      onProgress(cursor)
      step = Math.min(step * 2, 20_000)
    } catch (e) {
      if (step <= 200) throw e
      step = Math.max(200, Math.floor(step / 2))
    }
  }
  return out
}

async function fillTimestamps(client: Client, store: Store) {
  const missing: number[] = []
  const seen = new Set<number>()
  for (const r of store.records) {
    if (store.times[String(r.blockNumber)] === undefined && !seen.has(r.blockNumber)) {
      seen.add(r.blockNumber)
      missing.push(r.blockNumber)
      if (missing.length >= MAX_TIME_FETCH_PER_RUN) break
    }
  }
  for (let i = 0; i < missing.length; i += 8) {
    const batch = missing.slice(i, i + 8)
    const blocks = await Promise.all(batch.map((n) => client.getBlock({ blockNumber: BigInt(n) }).catch(() => undefined)))
    blocks.forEach((b, idx) => {
      if (b) store.times[String(batch[idx])] = Number(b.timestamp)
    })
  }
}

async function measureBlockTime(client: Client, head: number): Promise<number | undefined> {
  const span = Math.min(50, head)
  if (span < 2) return undefined
  try {
    const [a, b] = await Promise.all([client.getBlock({ blockNumber: BigInt(head) }), client.getBlock({ blockNumber: BigInt(head - span) })])
    const seconds = Number(a.timestamp - b.timestamp) / span
    return seconds > 0 ? seconds : undefined
  } catch {
    return undefined
  }
}
