import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { usePublicClient } from 'wagmi'
import type { Address, Hex } from 'viem'
import { settledEvent } from './abis'
import { ActivityContext, type ActivityState, type IndexProgress, type Settlement } from './activityContext'
import { CHAIN_ID } from './chain'
import { ANY_DEPLOYED, DEPLOYED_ADDRESSES, START_BLOCK } from './contracts'

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

const LOOKBACK_BLOCKS = 300_000
const MAX_RECORDS = 3000
const MAX_TIME_FETCH_PER_RUN = 120
const POLL_MS = 3000
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

const byNewest = (a: Settlement, b: Settlement) => b.blockNumber - a.blockNumber || b.logIndex - a.logIndex
const byNewestStored = (a: StoredRecord, b: StoredRecord) => b.blockNumber - a.blockNumber || b.logIndex - a.logIndex
const buildList = (store: Store) => store.records.map((r) => toSettlement(r, store.times)).sort(byNewest)

type Client = NonNullable<ReturnType<typeof usePublicClient>>

export function ActivityProvider({ children }: { children: ReactNode }) {
  const client = usePublicClient({ chainId: CHAIN_ID })
  const running = useRef(false)
  const lastBlockTimeAt = useRef(0)
  /** The index lives in memory between polls so nothing is re-parsed from storage each time. */
  const [initialStore] = useState(loadStore)
  const storeRef = useRef<Store>(initialStore)
  const [settlements, setSettlements] = useState<Settlement[]>(() => buildList(initialStore))
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
      const store = storeRef.current
      const chainHead = Number(await client.getBlockNumber())
      setHead((h) => (h === chainHead ? h : chainHead))
      const floor = Math.max(START_BLOCK ?? 0, chainHead - LOOKBACK_BLOCKS, 0)
      const from = Math.max(store.lastBlock + 1, floor)
      setWindowStart((w) => (w === floor ? w : floor))
      let changed = false

      if (from <= chainHead) {
        if (chainHead - from > 2000) setStatus('indexing')
        const found = await scanRange(client, from, chainHead, (current) => setProgress({ from, current, head: chainHead }))
        if (found.length > 0) {
          const known = new Set(store.records.map((r) => r.id))
          for (const rec of found) if (!known.has(rec.id)) store.records.push(rec)
          store.records = store.records.filter((r) => r.blockNumber >= floor).sort(byNewestStored).slice(0, MAX_RECORDS)
          changed = true
        }
        store.lastBlock = chainHead
      }

      if (await fillTimestamps(client, store)) changed = true
      if (Date.now() - lastBlockTimeAt.current > 60_000) {
        lastBlockTimeAt.current = Date.now()
        setBlockTimeSec(await measureBlockTime(client, chainHead))
      }
      // Only touch storage and React state when something actually changed.
      if (changed) {
        saveStore(store)
        setSettlements(buildList(store))
      } else if (from <= chainHead) {
        saveStore(store)
      }
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
    // Poll quickly while the tab is visible and pause entirely while it is hidden.
    const timer = setInterval(() => {
      if (!document.hidden) void run()
    }, POLL_MS)
    const onVisible = () => {
      if (!document.hidden) void run()
    }
    document.addEventListener('visibilitychange', onVisible)
    return () => {
      clearTimeout(first)
      clearInterval(timer)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [run])

  const refresh = useCallback(() => void run(), [run])
  const timesPartial = useMemo(() => settlements.some((s) => s.timestamp === undefined), [settlements])

  const value = useMemo<ActivityState>(
    () => ({ deployed: ANY_DEPLOYED, settlements, status, error, head, progress, windowStart, blockTimeSec, timesPartial, updatedAt, refresh }),
    [settlements, status, error, head, progress, windowStart, blockTimeSec, timesPartial, updatedAt, refresh],
  )

  return <ActivityContext.Provider value={value}>{children}</ActivityContext.Provider>
}

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
      if (to - from > 2000) onProgress(cursor)
      step = Math.min(step * 2, 20_000)
    } catch (e) {
      if (step <= 200) throw e
      step = Math.max(200, Math.floor(step / 2))
    }
  }
  return out
}

/** Fetches missing block timestamps (newest first). Returns true when any were added. */
async function fillTimestamps(client: Client, store: Store): Promise<boolean> {
  const missing: number[] = []
  const seen = new Set<number>()
  for (const r of store.records) {
    if (store.times[String(r.blockNumber)] === undefined && !seen.has(r.blockNumber)) {
      seen.add(r.blockNumber)
      missing.push(r.blockNumber)
      if (missing.length >= MAX_TIME_FETCH_PER_RUN) break
    }
  }
  let added = false
  for (let i = 0; i < missing.length; i += 12) {
    const batch = missing.slice(i, i + 12)
    const blocks = await Promise.all(batch.map((n) => client.getBlock({ blockNumber: BigInt(n) }).catch(() => undefined)))
    blocks.forEach((b, idx) => {
      if (b) {
        store.times[String(batch[idx])] = Number(b.timestamp)
        added = true
      }
    })
  }
  return added
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
