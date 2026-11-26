import { useMemo } from 'react'
import { useAccount } from 'wagmi'
import { useActivity } from '@/paymesh/activityContext'
import { ActionTiles } from '@/components/overview/ActionTiles'
import { AssetsCard } from '@/components/overview/AssetsCard'
import { BalanceHero } from '@/components/overview/BalanceHero'
import { IntegrationHub } from '@/components/overview/IntegrationHub'
import { StatCards } from '@/components/StatCards'
import { MyTransactionsCard } from '@/components/MyTransactions'
import { TransactionFeed } from '@/components/TransactionFeed'
import { AreaChart } from '@/components/charts'
import { NotDeployed } from '@/components/ui'
import { fmtCompactUsdc } from '@/paymesh/format'
import { ChevronRight } from 'lucide-react'
import { DAY, bucketize, totalsBetween } from '@/paymesh/metrics'
import { NAV, Link } from '@/paymesh/router'
import { useNow } from '@/paymesh/useNow'

const ACTIONS: Array<{ to: string; title: string; desc: string }> = [
  { to: '/links', title: 'Payment links', desc: 'Share a link or QR to get paid' },
  { to: '/batch', title: 'Batch payment', desc: 'Pay many wallets at once' },
  { to: '/split', title: 'Split payment', desc: 'Divide one payment by shares' },
  { to: '/escrow', title: 'Escrow', desc: 'Hold funds until released' },
  { to: '/scheduled', title: 'Scheduled', desc: 'Recurring payments on a plan' },
]

export default function Dashboard() {
  const { address } = useAccount()
  const { settlements, status, deployed, error, progress, windowStart } = useActivity()
  const nowSec = Math.floor(useNow(15_000) / 1000)
  const loading = deployed && status !== 'ready' && status !== 'error' && settlements.length === 0

  const day = useMemo(() => {
    const cur = totalsBetween(settlements, nowSec - DAY, nowSec + 60)
    const buckets = bucketize(settlements, nowSec - DAY, nowSec + 60, 24)
    const labels = buckets.volume.map((_, i) => `${String(new Date((nowSec - DAY + i * 3600) * 1000).getHours()).padStart(2, '0')}:00`)
    return { cur, buckets, labels }
  }, [settlements, nowSec])

  return (
    <div>
      <h1 className="sr-only">Overview</h1>

      <div className="space-y-4">
        <BalanceHero />
        <ActionTiles />
        <AssetsCard />
        <IntegrationHub />
      </div>

      <NotDeployed />
      {progress && (
        <div className="mb-4 rounded-xl border border-pm-line bg-pm-panel px-4 py-3 text-sm text-pm-muted">
          Reading payment history: block {progress.current.toLocaleString('en-US')} of {progress.head.toLocaleString('en-US')} ({(progress.head - progress.current).toLocaleString('en-US')} remaining)
        </div>
      )}
      {error && <div className="mb-4 rounded-xl border border-pm-bad/40 bg-pm-bad/10 px-4 py-3 text-sm text-pm-bad">Reconnecting to the network</div>}

      <div className="mt-6">
        <StatCards />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_380px]">
        <div className="space-y-4">
          <section className="glass rounded-2xl p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="label">Volume, last 24 hours</h2>
                <div className="tabular mt-1 text-3xl font-bold tracking-tight text-pm-text">${fmtCompactUsdc(day.cur.volume)}</div>
              </div>
              <span className="rounded-full border border-pm-line bg-pm-bg px-3 py-1.5 text-xs font-medium text-pm-muted">
                <span className="font-semibold text-pm-text">{day.cur.count.toLocaleString('en-US')}</span> verified payments
              </span>
            </div>
            <div className="mt-4">
              {deployed ? <AreaChart values={day.buckets.volume} height={190} className="text-pm-violet" /> : <div className="h-[190px]" />}
              <div className="mt-2 flex justify-between text-[11px] text-pm-muted">
                <span>{day.labels[0]}</span>
                <span>{day.labels[12]}</span>
                <span>Now</span>
              </div>
            </div>
            {windowStart !== undefined && !progress && <p className="mt-3 text-xs text-pm-muted">Verified onchain payments from block {windowStart.toLocaleString('en-US')}.</p>}
          </section>

          <section>
            <h2 className="label mb-3">More tools</h2>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {ACTIONS.map((a) => {
                const Icon = NAV.find((n) => n.path === a.to)?.icon
                return (
                  <Link key={a.to} to={a.to} className="glass flex items-center gap-3 rounded-2xl p-4 hover:border-pm-violet/50 hover:bg-pm-text/[0.03]">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pm-violet/10 text-pm-violet">{Icon && <Icon className="h-5 w-5" />}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-pm-text">{a.title}</span>
                      <span className="block text-pretty text-xs leading-snug text-pm-muted">{a.desc}</span>
                    </span>
                    <ChevronRight className="h-4 w-4 shrink-0 text-pm-muted" />
                  </Link>
                )
              })}
            </div>
          </section>
        </div>

        <div className="space-y-4">
          {address ? <MyTransactionsCard address={address} limit={6} /> : <TransactionFeed settlements={settlements} me={address} loading={loading} deployed={deployed} error={error} limit={6} />}
        </div>
      </div>
    </div>
  )
}
