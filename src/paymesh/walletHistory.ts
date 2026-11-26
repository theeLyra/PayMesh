import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { addressUrl, CHAIN_ID } from '@/paymesh/chain'
import { START_BLOCK, PAYMESH } from '@/paymesh/contracts'
import { WALLET_TOKENS } from '@/paymesh/tokens'

/**
 * A wallet's own transaction history, read from the Arc block explorer's public API.
 * It covers everything the wallet did or received: PayMesh payments, swaps, approvals and plain transfers.
 * Each onchain transaction becomes exactly one row.
 */

interface Party {
  hash: string
  name?: string | null
}
interface RawTx {
  hash: string
  timestamp: string
  block_number?: number
  method?: string | null
  status?: string
  from?: Party | null
  to?: Party | null
  value?: string
  fee?: { value?: string } | null
  transaction_types?: string[]
}
interface RawTransfer {
  transaction_hash: string
  timestamp: string
  block_number?: number
  from?: Party | null
  to?: Party | null
  token?: { address_hash?: string; address?: string; symbol?: string } | null
  total?: { value?: string } | null
}
interface Page<T> {
  items: T[]
  next_page_params: Record<string, string | number | null> | null
}

export type WalletTxKind = 'sent' | 'received' | 'swap' | 'payment' | 'approval' | 'contract' | 'deploy'

export interface WalletTx {
  hash: string
  /** Unix seconds. */
  time: number
  ok: boolean
  kind: WalletTxKind
  title: string
  /** Counterparty or short description. */
  detail: string
  /** Signed amount text such as "-10.00 USDC", or "10.00 USDC to 14.48 EURC" for swaps. */
  amount?: string
  direction?: 'out' | 'in'
  fee?: string
  /** Tiny incoming transfers from other wallets, often address-poisoning attempts. */
  dust: boolean
}

const API_BASE = new URL(addressUrl('0x0000000000000000000000000000000000000000')).origin
const lower = (s: string | undefined | null) => (s ?? '').toLowerCase()

const TOKEN_BY_ADDRESS = new Map(WALLET_TOKENS.map((t) => [t.address.toLowerCase(), t]))

const PAYMESH_METHODS: Record<string, { title: string; kind: WalletTxKind }> = {
  pay: { title: 'Payment sent', kind: 'payment' },
  payLink: { title: 'Payment link paid', kind: 'payment' },
  createLink: { title: 'Payment link created', kind: 'contract' },
  closeLink: { title: 'Payment link closed', kind: 'contract' },
  batchPay: { title: 'Batch payment', kind: 'payment' },
  createSplit: { title: 'Split created', kind: 'contract' },
  paySplit: { title: 'Split payment', kind: 'payment' },
  createEscrow: { title: 'Escrow created', kind: 'payment' },
  release: { title: 'Escrow released', kind: 'payment' },
  refund: { title: 'Escrow refunded', kind: 'payment' },
  createPlan: { title: 'Schedule created', kind: 'contract' },
  execute: { title: 'Scheduled payment run', kind: 'payment' },
  cancel: { title: 'Schedule cancelled', kind: 'contract' },
}

const short = (a: string) => (a.length > 12 ? `${a.slice(0, 6)}...${a.slice(-4)}` : a)

/** Formats a raw integer amount with a token's decimals: at least 2, at most 6 fraction digits, trailing zeros trimmed. */
export function formatTokenAmount(raw: bigint, decimals: number): string {
  const base = 10n ** BigInt(decimals)
  const whole = raw / base
  let frac = (raw % base).toString().padStart(decimals, '0').slice(0, 6).replace(/0+$/, '')
  if (frac.length < 2) frac = frac.padEnd(2, '0')
  return `${whole.toLocaleString('en-US')}.${frac}`
}

async function fetchPages<T>(path: string, pages: number): Promise<{ items: T[]; hasMore: boolean }> {
  const items: T[] = []
  let params: Record<string, string | number | null> | null = null
  for (let i = 0; i < pages; i++) {
    const qs = params ? `?${new URLSearchParams(Object.entries(params).map(([k, v]) => [k, String(v ?? '')])).toString()}` : ''
    const res = await fetch(`${API_BASE}${path}${qs}`)
    if (!res.ok) throw new Error(res.status === 429 ? 'The explorer is busy. Try again in a moment.' : `Explorer returned ${res.status}`)
    const json = (await res.json()) as Page<T>
    items.push(...json.items)
    params = json.next_page_params
    if (!params) return { items, hasMore: false }
  }
  return { items, hasMore: true }
}

interface Sums {
  [symbol: string]: { raw: bigint; decimals: number }
}
const addTo = (sums: Sums, symbol: string, raw: bigint, decimals: number) => {
  sums[symbol] = { raw: (sums[symbol]?.raw ?? 0n) + raw, decimals }
}
const label = (s: Sums[string] | undefined, symbol: string) => (s ? `${formatTokenAmount(s.raw, s.decimals)} ${symbol}` : '')
const biggest = (sums: Sums): string | undefined => Object.entries(sums).sort((a, b) => (b[1].raw > a[1].raw ? 1 : -1))[0]?.[0]

/** Pure: turns the explorer's raw lists into one row per transaction. Exported for testing. */
export function buildWalletTxs(me: string, txs: RawTx[], transfers: RawTransfer[], paymesh: string | undefined): WalletTx[] {
  const meL = me.toLowerCase()
  const byHashTx = new Map(txs.map((t) => [t.hash, t]))
  const byHashTr = new Map<string, RawTransfer[]>()
  for (const t of transfers) {
    const known = TOKEN_BY_ADDRESS.get(lower(t.token?.address_hash ?? t.token?.address))
    if (!known || !t.total?.value) continue
    const list = byHashTr.get(t.transaction_hash) ?? []
    list.push(t)
    byHashTr.set(t.transaction_hash, list)
  }

  const rows: WalletTx[] = []
  const hashes = new Set([...byHashTx.keys(), ...byHashTr.keys()])
  for (const hash of hashes) {
    const meta = byHashTx.get(hash)
    const trs = byHashTr.get(hash) ?? []
    // History starts at the configured reset block, so earlier transactions are not shown.
    const block = meta?.block_number ?? trs[0]?.block_number
    if (START_BLOCK !== undefined && block !== undefined && block < START_BLOCK) continue
    const time = Math.floor(new Date(meta?.timestamp ?? trs[0]?.timestamp ?? 0).getTime() / 1000)
    const outs: Sums = {}
    const ins: Sums = {}
    const all: Sums = {}
    for (const t of trs) {
      const tok = TOKEN_BY_ADDRESS.get(lower(t.token?.address_hash ?? t.token?.address))
      if (!tok) continue
      const raw = BigInt(t.total?.value ?? '0')
      addTo(all, tok.symbol, raw, tok.decimals)
      if (lower(t.from?.hash) === meL) addTo(outs, tok.symbol, raw, tok.decimals)
      if (lower(t.to?.hash) === meL) addTo(ins, tok.symbol, raw, tok.decimals)
    }
    const iSent = lower(meta?.from?.hash) === meL
    const ok = meta ? meta.status !== 'error' : true
    // The native USDC value of a plain transfer, in case the explorer lists no token transfer for it.
    if (meta && trs.length === 0 && meta.value && meta.value !== '0') {
      const raw = BigInt(meta.value) / 10n ** 12n
      if (raw > 0n) {
        addTo(all, 'USDC', raw, 6)
        if (iSent) addTo(outs, 'USDC', raw, 6)
        else addTo(ins, 'USDC', raw, 6)
      }
    }

    const feeRaw = iSent && meta?.fee?.value ? BigInt(meta.fee.value) / 10n ** 12n : 0n
    const fee = feeRaw > 0n ? `${(Number(feeRaw) / 1e6).toFixed(4)} USDC` : undefined
    const toL = lower(meta?.to?.hash)
    const outSym = biggest(outs)
    const inSym = biggest(ins)
    const base = { hash, time, ok, fee, dust: false }

    // 1) A call to the PayMesh contract.
    if (paymesh && toL === paymesh.toLowerCase() && meta?.method && PAYMESH_METHODS[meta.method]) {
      const m = PAYMESH_METHODS[meta.method]
      const sym = outSym ?? biggest(all)
      const amount = sym ? label((outSym ? outs : all)[sym], sym) : undefined
      const to = trs.find((t) => lower(t.to?.hash) !== meL && lower(t.to?.hash) !== toL)?.to?.hash
      rows.push({ ...base, kind: m.kind, title: m.title, detail: to ? `To ${short(to)}` : 'PayMesh', amount: amount ? (outSym ? `-${amount}` : amount) : undefined, direction: outSym ? 'out' : undefined })
      continue
    }
    // 2) Something left and something different arrived in the same transaction: a swap.
    if (outSym && inSym && outSym !== inSym) {
      rows.push({ ...base, kind: 'swap', title: 'Swap', detail: `${outSym} to ${inSym}`, amount: `${label(outs[outSym], outSym)} to ${label(ins[inSym], inSym)}` })
      continue
    }
    // 3) Approvals.
    if (meta?.method === 'approve' || meta?.method === 'increaseAllowance' || meta?.method === 'permit') {
      const tok = TOKEN_BY_ADDRESS.get(toL)
      rows.push({ ...base, kind: 'approval', title: 'Approval', detail: tok ? `Allowed ${tok.symbol} spending` : `Allowed spending on ${short(meta.to?.hash ?? '')}` })
      continue
    }
    // 4) Plain sends and receipts.
    if (outSym) {
      const to = trs.find((t) => lower(t.from?.hash) === meL)?.to?.hash ?? meta?.to?.hash
      rows.push({ ...base, kind: 'sent', title: 'Sent', detail: to ? `To ${short(to)}` : '', amount: `-${label(outs[outSym], outSym)}`, direction: 'out' })
      continue
    }
    if (inSym) {
      const from = trs.find((t) => lower(t.to?.hash) === meL)?.from?.hash ?? meta?.from?.hash
      const raw = ins[inSym].raw
      // Under 0.01 of a dollar-priced token from someone else is treated as dust.
      const dust = inSym !== 'CIRBTC' && inSym !== 'cirBTC' && raw < 10_000n && lower(from) !== meL
      rows.push({ ...base, dust, kind: 'received', title: 'Received', detail: from ? `From ${short(from)}` : '', amount: `+${label(ins[inSym], inSym)}`, direction: 'in' })
      continue
    }
    // 5) Anything else the wallet did.
    if (meta && iSent) {
      const created = meta.transaction_types?.includes('contract_creation')
      rows.push({ ...base, kind: created ? 'deploy' : 'contract', title: created ? 'Contract deployed' : meta.method ? `Contract call: ${meta.method}` : 'Transaction', detail: meta.to?.name ?? (meta.to?.hash ? short(meta.to.hash) : '') })
    }
  }
  return rows.sort((a, b) => b.time - a.time)
}

export interface WalletHistory {
  txs: WalletTx[]
  isLoading: boolean
  isFetching: boolean
  error: Error | null
  hasMore: boolean
  loadMore: () => void
  pages: number
}

/** Loads `pages` explorer pages (50 each) per list. Call setPages via loadMore to go further back. */
export function useWalletHistory(address: string | undefined, pages: number, onMore: () => void): WalletHistory {
  const q = useQuery({
    queryKey: ['wallet-history', CHAIN_ID, address?.toLowerCase(), pages],
    enabled: Boolean(address),
    placeholderData: keepPreviousData,
    refetchInterval: 12_000,
    staleTime: 6_000,
    queryFn: async () => {
      const a = address as string
      const [tx, tr] = await Promise.all([
        fetchPages<RawTx>(`/api/v2/addresses/${a}/transactions`, pages),
        fetchPages<RawTransfer>(`/api/v2/addresses/${a}/token-transfers`, pages),
      ])
      // Only show rows newer than the oldest item of any list that has more pages, so nothing is half-built.
      const oldest = (items: Array<{ timestamp: string }>) => (items.length ? Math.floor(new Date(items[items.length - 1].timestamp).getTime() / 1000) : 0)
      const cutoff = Math.max(tx.hasMore ? oldest(tx.items) : 0, tr.hasMore ? oldest(tr.items) : 0)
      const rows = buildWalletTxs(a, tx.items, tr.items, PAYMESH).filter((r) => r.time >= cutoff)
      // Stop offering older pages once the lists have reached the reset block.
      const lastBlock = (items: Array<{ block_number?: number }>) => items[items.length - 1]?.block_number
      const start = START_BLOCK
      const reachedStart = start !== undefined && [lastBlock(tx.items), lastBlock(tr.items)].some((b) => b !== undefined && b < start)
      return { rows, hasMore: (tx.hasMore || tr.hasMore) && !reachedStart }
    },
  })
  return {
    txs: q.data?.rows ?? [],
    isLoading: q.isLoading,
    isFetching: q.isFetching,
    error: q.error,
    hasMore: q.data?.hasMore ?? false,
    loadMore: onMore,
    pages,
  }
}
