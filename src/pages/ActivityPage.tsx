import { useMemo, useState } from 'react'
import { useAccount } from 'wagmi'
import { Download } from 'lucide-react'
import { useActivity } from '@/paymesh/activityContext'
import { SOURCE_LABELS } from '@/paymesh/contracts'
import { decodeCategory } from '@/paymesh/format'
import { formatUsdc } from '@/onchain-money'
import { FeedRow } from '@/components/TransactionFeed'
import { WalletTxRow } from '@/components/WalletTxRow'
import { addressUrl } from '@/paymesh/chain'
import { useNow } from '@/paymesh/useNow'
import { useWalletHistory, type WalletTx } from '@/paymesh/walletHistory'
import { Button, Card, EmptyState, NotDeployed, PageHeader, Skeleton } from '@/components/ui'

type Tab = 'mine' | 'network'
type Filter = 'all' | 'payments' | 'swaps' | 'sent' | 'received' | 'approvals'

const FILTERS: Array<{ value: Filter; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'payments', label: 'Payments' },
  { value: 'swaps', label: 'Swaps' },
  { value: 'sent', label: 'Sent' },
  { value: 'received', label: 'Received' },
  { value: 'approvals', label: 'Approvals' },
]

const matches = (tx: WalletTx, f: Filter) =>
  f === 'all' ||
  (f === 'payments' && tx.kind === 'payment') ||
  (f === 'swaps' && tx.kind === 'swap') ||
  (f === 'sent' && (tx.kind === 'sent' || tx.direction === 'out')) ||
  (f === 'received' && tx.kind === 'received') ||
  (f === 'approvals' && tx.kind === 'approval')

const tabClass = (on: boolean) =>
  `min-h-[40px] rounded-lg px-3 text-sm font-semibold ${on ? 'nav-active text-pm-text' : 'border border-transparent text-pm-muted hover:bg-pm-text/[0.05]'}`

/** Every transaction of the connected wallet, one row each, read from the Arc explorer. */
function MyTransactions({ address }: { address: `0x${string}` }) {
  const [pages, setPages] = useState(2)
  const [filter, setFilter] = useState<Filter>('all')
  const [hideDust, setHideDust] = useState(true)
  const { txs, isLoading, isFetching, error, hasMore } = useWalletHistory(address, pages, () => setPages((n) => n + 2))
  const now = useNow(5_000)
  const rows = useMemo(() => txs.filter((t) => matches(t, filter) && !(hideDust && t.dust)), [txs, filter, hideDust])
  const hiddenDust = txs.filter((t) => t.dust).length

  const exportCsv = () => {
    const header = 'time_utc,tx_hash,type,detail,amount,status\n'
    const lines = rows.map((t) => [new Date(t.time * 1000).toISOString(), t.hash, t.title, `"${t.detail}"`, `"${t.amount ?? ''}"`, t.ok ? 'success' : 'failed'].join(','))
    const url = URL.createObjectURL(new Blob([header + lines.join('\n')], { type: 'text/csv' }))
    const a = document.createElement('a')
    a.href = url
    a.download = 'paymesh-my-transactions.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <Card className="overflow-hidden">
      <div className="flex flex-wrap items-center gap-2 border-b border-pm-line/60 p-3">
        {FILTERS.map((f) => (
          <button key={f.value} onClick={() => setFilter(f.value)} className={tabClass(filter === f.value)}>
            {f.label}
          </button>
        ))}
        <Button variant="ghost" onClick={exportCsv} disabled={rows.length === 0} className="ml-auto !min-h-[40px]">
          <Download className="h-4 w-4" /> Export CSV
        </Button>
      </div>
      {isLoading ? (
        <div className="space-y-3 p-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-14 w-full" />
          ))}
        </div>
      ) : error && txs.length === 0 ? (
        <div className="p-6 text-center text-sm text-pm-muted">
          <div className="text-base font-semibold text-pm-text">Could not load your transactions</div>
          <p className="mt-1">The explorer did not answer. Retrying automatically.</p>
          <a href={addressUrl(address)} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-[44px] items-center font-medium text-pm-violet hover:underline">
            Open this wallet on the explorer
          </a>
        </div>
      ) : rows.length === 0 ? (
        <EmptyState title="Nothing here yet" body="Payments, swaps, approvals and transfers for this wallet appear here, each as its own row." />
      ) : (
        <>
          <ul className="divide-y divide-pm-line/60">
            {rows.map((t) => (
              <WalletTxRow key={t.hash} tx={t} now={now} />
            ))}
          </ul>
          {hasMore && (
            <div className="border-t border-pm-line/60 p-4 text-center">
              <Button variant="ghost" onClick={() => setPages((n) => n + 2)} busy={isFetching}>
                Load older transactions
              </Button>
            </div>
          )}
        </>
      )}
      <label className="flex cursor-pointer items-start gap-2 border-t border-pm-line/60 px-4 py-3 text-xs text-pm-muted">
        <input type="checkbox" checked={hideDust} onChange={(e) => setHideDust(e.target.checked)} className="mt-0.5 h-4 w-4 accent-[rgb(var(--pm-violet))]" />
        <span>
          Hide tiny incoming transfers (under 0.01){hiddenDust > 0 && hideDust ? `, ${hiddenDust} hidden` : ''}. Strangers sometimes send dust to imitate addresses you use. Never copy an address from your history without checking it.
        </span>
      </label>
    </Card>
  )
}

/** Every verified PayMesh payment on the network. */
function NetworkPayments({ address }: { address?: `0x${string}` }) {
  const { settlements, status, deployed, error } = useActivity()
  const now = useNow(5_000)
  const [source, setSource] = useState('all')
  const [shown, setShown] = useState(25)
  const rows = useMemo(() => settlements.filter((s) => source === 'all' || String(s.source) === source), [settlements, source])
  const loading = deployed && status !== 'ready' && status !== 'error' && settlements.length === 0

  const exportCsv = () => {
    const header = 'time_utc,tx_hash,from,to,amount_usdc,category,type\n'
    const lines = rows.map((s) => [s.timestamp ? new Date(s.timestamp * 1000).toISOString() : '', s.txHash, s.from, s.to, formatUsdc(s.amount), decodeCategory(s.category), SOURCE_LABELS[s.source] ?? s.source].join(','))
    const url = URL.createObjectURL(new Blob([header + lines.join('\n')], { type: 'text/csv' }))
    const a = document.createElement('a')
    a.href = url
    a.download = 'paymesh-network-payments.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <Card className="overflow-hidden">
      <div className="flex flex-wrap items-center gap-2 border-b border-pm-line/60 p-3">
        <select className="input !min-h-[40px] !w-auto" value={source} onChange={(e) => setSource(e.target.value)} aria-label="Filter by payment type">
          <option value="all" className="bg-pm-deep">
            All types
          </option>
          {SOURCE_LABELS.map((l, i) => (
            <option key={l} value={i} className="bg-pm-deep">
              {l}
            </option>
          ))}
        </select>
        <Button variant="ghost" onClick={exportCsv} disabled={rows.length === 0} className="ml-auto !min-h-[40px]">
          <Download className="h-4 w-4" /> Export CSV
        </Button>
      </div>
      {loading ? (
        <div className="space-y-3 p-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-16 w-full" />
          ))}
        </div>
      ) : rows.length === 0 ? (
        <EmptyState title={!deployed ? 'No contracts configured' : error && settlements.length === 0 ? 'Network unavailable' : 'Nothing matches yet'} body="Verified payments appear here as they settle." />
      ) : (
        <>
          <ul className="divide-y divide-pm-line/60">
            {rows.slice(0, shown).map((s) => (
              <FeedRow key={s.id} s={s} me={address} now={now} />
            ))}
          </ul>
          {shown < rows.length && (
            <div className="p-4 text-center">
              <Button variant="ghost" onClick={() => setShown((n) => n + 25)}>
                Load more ({rows.length - shown} remaining)
              </Button>
            </div>
          )}
        </>
      )}
    </Card>
  )
}

export default function ActivityPage() {
  const { address } = useAccount()
  const [tab, setTab] = useState<Tab | null>(null)
  const active: Tab = tab ?? (address ? 'mine' : 'network')

  return (
    <div>
      <PageHeader
        title="Activity"
        subtitle={active === 'mine' ? 'Every transaction of your connected wallet, each as its own row.' : 'Verified PayMesh payments from all wallets, read from onchain events.'}
      />
      <NotDeployed />
      <div className="mb-3 flex gap-2" role="tablist" aria-label="Activity view">
        <button role="tab" aria-selected={active === 'mine'} onClick={() => setTab('mine')} className={tabClass(active === 'mine')}>
          My transactions
        </button>
        <button role="tab" aria-selected={active === 'network'} onClick={() => setTab('network')} className={tabClass(active === 'network')}>
          Network payments
        </button>
      </div>
      {active === 'mine' ? (
        address ? (
          <MyTransactions address={address} />
        ) : (
          <EmptyState title="Connect your wallet" body="Connect a wallet to see all of its transactions: payments, swaps, approvals and transfers." />
        )
      ) : (
        <NetworkPayments address={address} />
      )}
    </div>
  )
}
