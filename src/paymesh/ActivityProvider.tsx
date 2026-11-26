import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { usePublicClient } from 'wagmi'
import type { Address, Hex } from 'viem'
import { settledEvent } from './abis'
import { ActivityContext, type ActivityState, type IndexProgress, type Settlement } from './activityContext'
import { CHAIN_ID } from './chain'
import { ANY_DEPLOYED, DEPLOYED_ADDRESSES, PAYMESH, START_BLOCK } from './contracts'
import snapshotJson from './snapshot.json'

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
  v: 2
  lastBlock: number
  records: StoredRecord[]
  times: Record<string, number>
  /** Running totals over every settlement since the start block. They never shrink when old records are trimmed. */
  totalVolume: string
  totalCount: number
}

/** Only used when no start block is configured. With a start block the whole history is read. */
const LOOKBACK_BLOCKS = 200_000
const MAX_RECORDS = 5000
const MAX_TIME_FETCH_PER_RUN = 120
const POLL_MS = 5000
// The start block is part of the key, so moving it forward discards every older cached payment.
const storeKey = () => `paymesh:index:v2:${CHAIN_ID}:${START_BLOCK ?? 0}:${DEPLOYED_ADDRESSES.join('').toLowerCase().slice(0, 400)}`

/**
 * A snapshot of the whole history is built into the app (see scripts/snapshot.ts). It is used only when it
 * belongs to this exact contract and start block, so a wrong or stale file can never show another contract's volume.
 */
function snapshotStore(): Store | undefined {
  const snap = snapshotJson
  if (!PAYMESH || snap.chainId !== CHAIN_ID || snap.address !== PAYMESH.toLowerCase() || snap.startBlock !== (START_BLOCK ?? 0) || snap.lastBlock <= 0) return undefined
  return { v: 2, lastBlock: snap.lastBlock, records: snap.records as unknown as StoredRecord[], times: snap.times, totalVolume: snap.totalVolume, totalCount: snap.totalCount }
}

function loadStore(): Store {
  const snap = snapshotStore()
  try {
    const raw = localStorage.getItem(storeKey())
    if (raw) {
      const parsed = JSON.parse(raw) as Store
      // A saved copy that is already past the snapshot is newer, so it wins.
      if (parsed.v === 2 && (!snap || parsed.lastBlock >= snap.lastBlock)) return parsed
    }
  } catch {
    /* corrupted cache is simply rebuilt */
  }
  return snap ?? { v: 2, lastBlock: 0, records: [], times: {}, totalVolume: '0', totalCount: 0 }
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
const totalsOf = (store: Store) => ({ volume: BigInt(store.totalVolume), count: store.totalCount })
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
  const [allTime, setAllTime] = useState(() => totalsOf(initialStore))
  // True from the first paint when the totals already cover every block up to the snapshot.
  const [seeded] = useState(() => {
    const snap = snapshotStore()
    return snap !== undefined && initialStore.lastBlock >= snap.lastBlock
  })
  const [status, setStatus] = useState<ActivityState['status']>('idle')
  const [error, setError] = useState<string>()
  const [head, setHead] = useState<number>()
  const [progress, setProgress] = useState<IndexProgress>()
  const [windowStart, setWindowStart] = useState<number>()
  const [blockTimeSec, setBlockTimeSec] = useState<number>()
  const [updatedAt, setUpdatedAt] = useState<number>()

  const backoffUntil = useRef(0)

  const run = useCallback(async () => {
    if (!client || !ANY_DEPLOYED || running.current || Date.now() < backoffUntil.current) return
    running.current = true
    try {
      const store = storeRef.current
      const chainHead = Number(await client.getBlockNumber())
      setHead((h) => (h === chainHead ? h : chainHead))
      const floor = START_BLOCK ?? Math.max(chainHead - LOOKBACK_BLOCKS, 0)
      const from = Math.max(store.lastBlock + 1, floor)
      setWindowStart((w) => (w === floor ? w : floor))
      const flags = { changed: false }

      if (from <= chainHead) {
        if (chainHead - from > 2000) setStatus('indexing')
        await scanRange(client, from, chainHead, (found, nextCursor) => {
          if (found.length > 0) {
            const known = new Set(store.records.map((r) => r.id))
            let volume = BigInt(store.totalVolume)
            for (const rec of found) {
              if (known.has(rec.id)) continue
              store.records.push(rec)
              volume += BigInt(rec.amount)
              store.totalCount += 1
            }
            store.totalVolume = volume.toString()
            store.records = store.records.filter((r) => r.blockNumber >= floor).sort(byNewestStored).slice(0, MAX_RECORDS)
            flags.changed = true
            setAllTime(totalsOf(store))
          }
          // Remember how far we got, so a failure or reload resumes here instead of starting over.
          store.lastBlock = nextCursor - 1
          saveStore(store)
          if (chainHead - from > 2000) setProgress({ from, current: nextCursor, head: chainHead })
        })
        store.lastBlock = chainHead
      }

      if (await fillTimestamps(client, store)) flags.changed = true
      if (Date.now() - lastBlockTimeAt.current > 60_000) {
        lastBlockTimeAt.current = Date.now()
        setBlockTimeSec(await measureBlockTime(client, chainHead))
      }
      // Only touch storage and React state when something actually changed.
      if (flags.changed) {
        saveStore(store)
        setSettlements(buildList(store))
        setAllTime(totalsOf(store))
      } else if (from <= chainHead) {
        saveStore(store)
      }
      setProgress(undefined)
      setError(undefined)
      setStatus('ready')
      setUpdatedAt(Date.now())
    } catch (e) {
      saveStore(storeRef.current)
      backoffUntil.current = Date.now() + (isRateLimited(e) ? 20_000 : 6_000)
      setError(isRateLimited(e) ? 'The public RPC is rate limiting requests. Retrying shortly.' : e instanceof Error ? e.message.split('\n')[0] : 'Could not read the network')
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
    () => ({ deployed: ANY_DEPLOYED, settlements, allTime, historyReady: seeded || status === 'ready', status, error, head, progress, windowStart, blockTimeSec, timesPartial, updatedAt, refresh }),
    [settlements, allTime, seeded, status, error, head, progress, windowStart, blockTimeSec, timesPartial, updatedAt, refresh],
  )

  return <ActivityContext.Provider value={value}>{children}</ActivityContext.Provider>
}

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))

function isRateLimited(e: unknown): boolean {
  const status = (e as { status?: number } | null)?.status
  const text = e instanceof Error ? `${e.message} ${(e as { details?: string }).details ?? ''}` : String(e)
  return status === 429 || /429|too many requests|rate.?limit/i.test(text)
}

/**
 * Scans in large chunks. A provider's block-range limit shrinks the step; a rate limit (HTTP 429) only waits
 * and retries the same chunk, so throttling never snowballs into thousands of tiny requests.
 */
async function scanRange(client: Client, from: number, to: number, onChunk: (records: StoredRecord[], nextCursor: number) => void): Promise<void> {
  let step = 10_000  // the public RPC rejects ranges much larger than this
  let cursor = from
  let waits = 0
  while (cursor <= to) {
    const end = Math.min(cursor + step - 1, to)
    try {
      const logs = await client.getLogs({
        address: DEPLOYED_ADDRESSES,
        event: settledEvent,
        fromBlock: BigInt(cursor),
        toBlock: BigInt(end),
      })
      const chunk: StoredRecord[] = []
      for (const log of logs) {
        const args = log.args
        if (!args.from || !args.to || args.amount === undefined || !args.category || args.source === undefined || args.ref === undefined) continue
        if (log.blockNumber === null || log.logIndex === null || !log.transactionHash) continue
        chunk.push({
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
      waits = 0
      onChunk(chunk, cursor)
      if (cursor <= to) await sleep(260)  // stay under the public RPC rate limit
    } catch (e) {
      if (isRateLimited(e)) {
        if (waits >= 5) throw e
        waits += 1
        await sleep(1000 * 2 ** (waits - 1))
        continue
      }
      if (step <= 1000) throw e
      step = Math.max(1000, Math.floor(step / 2))
    }
  }
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
  for (let i = 0; i < missing.length; i += 6) {
    const batch = missing.slice(i, i + 6)
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
