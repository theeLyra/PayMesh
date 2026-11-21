import { useMemo, useState } from 'react'
import { useAccount } from 'wagmi'
import { Download } from 'lucide-react'
import { useActivity } from '@/paymesh/activityContext'
import { SOURCE_LABELS } from '@/paymesh/contracts'
import { decodeCategory } from '@/paymesh/format'
import { formatUsdc } from '@/onchain-money'
import { FeedRow } from '@/components/TransactionFeed'
import { useNow } from '@/paymesh/useNow'
import { Button, Card, EmptyState, NotDeployed, PageHeader, Skeleton } from '@/components/ui'

type Scope = 'all' | 'mine' | 'sent' | 'received'

export default function ActivityPage() {
  const { address } = useAccount()
  const { settlements, status, deployed, error } = useActivity()
  const now = useNow()
  const [scope, setScope] = useState<Scope>('all')
  const [source, setSource] = useState('all')
  const [shown, setShown] = useState(25)

  const filtered = useMemo(() => {
    const me = address?.toLowerCase()
    return settlements.filter((s) => {
      if (source !== 'all' && String(s.source) !== source) return false
      if (scope === 'all') return true
      if (!me) return false
      const sent = s.from.toLowerCase() === me
      const received = s.to.toLowerCase() === me
      if (scope === 'sent') return sent
      if (scope === 'received') return received
      return sent || received
    })
  }, [settlements, scope, source, address])

  const exportCsv = () => {
    const header = 'time_utc,tx_hash,from,to,amount_usdc,category,type\n'
    const lines = filtered.map((s) =>
      [s.timestamp ? new Date(s.timestamp * 1000).toISOString() : '', s.txHash, s.from, s.to, formatUsdc(s.amount), decodeCategory(s.category), SOURCE_LABELS[s.source] ?? s.source].join(','),
    )
    const url = URL.createObjectURL(new Blob([header + lines.join('\n')], { type: 'text/csv' }))
    const a = document.createElement('a')
    a.href = url
    a.download = 'paymesh-activity.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  const loading = deployed && status !== 'ready' && status !== 'error' && settlements.length === 0

  return (
    <div className="">
      <PageHeader
        title="Activity"
        subtitle="Every verified payment settled by PayMesh contracts, straight from onchain events."
        action={
          <Button variant="ghost" onClick={exportCsv} disabled={filtered.length === 0}>
            <Download className="h-4 w-4" /> Export CSV
          </Button>
        }
      />
      <NotDeployed />
      <Card className="overflow-hidden">
        <div className="flex flex-wrap items-center gap-2 border-b border-pm-line/60 p-3">
          {(['all', 'mine', 'sent', 'received'] as Scope[]).map((s) => (
            <button
              key={s}
              onClick={() => {
                setScope(s)
                setShown(25)
              }}
              className={`min-h-[40px] rounded-lg px-3 text-sm font-semibold capitalize  ${scope === s ? 'nav-active text-pm-text' : 'border border-transparent text-pm-muted hover:bg-pm-text/[0.05]'}`}
            >
              {s === 'mine' ? 'My activity' : s}
            </button>
          ))}
          <select className="input ml-auto !min-h-[40px] !w-auto" value={source} onChange={(e) => setSource(e.target.value)} aria-label="Filter by payment type">
            <option value="all" className="bg-pm-deep">
              All types
            </option>
            {SOURCE_LABELS.map((l, i) => (
              <option key={l} value={i} className="bg-pm-deep">
                {l}
              </option>
            ))}
          </select>
        </div>
        {loading ? (
          <div className="space-y-3 p-4">
            {[0, 1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-16 w-full" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <EmptyState
            title={!deployed ? 'No contracts configured' : error && settlements.length === 0 ? 'Network unavailable' : 'No matching payments'}
            body={scope !== 'all' && !address ? 'Connect your wallet to filter by your own activity.' : 'Verified payments will appear here as they settle.'}
          />
        ) : (
          <>
            <ul className="divide-y divide-pm-line/60">
              {filtered.slice(0, shown).map((s) => (
                <FeedRow key={s.id} s={s} me={address} now={now} />
              ))}
            </ul>
            {shown < filtered.length && (
              <div className="p-4 text-center">
                <Button variant="ghost" onClick={() => setShown((n) => n + 25)}>
                  Load more ({filtered.length - shown} remaining)
                </Button>
              </div>
            )}
          </>
        )}
      </Card>
    </div>
  )
}
