import { useMemo } from 'react'
import { useAccount } from 'wagmi'
import { useActivity } from '@/paymesh/activityContext'
import { BackButton } from '@/components/BackButton'
import { WalletHero } from '@/components/WalletHero'
import { StatCards } from '@/components/StatCards'
import { TransactionFeed } from '@/components/TransactionFeed'
import { BarChart } from '@/components/charts'
import { NotDeployed, cx } from '@/components/ui'
import { fmtCompactUsdc } from '@/paymesh/format'
import { DAY, bucketize, totalsBetween } from '@/paymesh/metrics'
import { NAV, Link } from '@/paymesh/router'
import { useNow } from '@/paymesh/useNow'

function SystemStatus() {
  const { status, deployed, head } = useActivity()
  const state = !deployed ? 'warn' : status === 'error' ? 'bad' : status === 'ready' ? 'good' : 'warn'
  const text = !deployed ? 'Contract not deployed' : status === 'error' ? 'Network unreachable' : status === 'ready' ? 'All systems operational' : 'Indexing payments'
  return (
    <span
      title={head ? `Latest block ${head.toLocaleString('en-US')}` : undefined}
      className="inline-flex items-center gap-2 rounded-full border border-pm-line bg-pm-panel px-3 py-1.5 text-xs font-medium text-pm-text"
    >
      <span className={cx('h-2 w-2 rounded-full', state === 'good' ? 'bg-pm-good' : state === 'warn' ? 'bg-pm-warn' : 'bg-pm-bad')} />
      {text}
    </span>
  )
}

const ACTIONS: Array<{ to: string; title: string; desc: string }> = [
  { to: '/transfers', title: 'Send USDC', desc: 'Pay any wallet with a category' },
  { to: '/links', title: 'Payment link', desc: 'Get paid with a shareable link' },
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
      <BackButton fallback="/" className="mb-4" />
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-pm-text sm:text-3xl">Overview</h1>
          <p className="mt-1 text-sm text-pm-muted">One network. Limitless USDC possibilities.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <SystemStatus />
        </div>
      </div>

      <WalletHero />

      <NotDeployed />
      {progress && (
        <div className="mb-4 rounded-xl border border-pm-line bg-pm-panel px-4 py-3 text-sm text-pm-muted">
          Reading payment history: block {progress.current.toLocaleString('en-US')} of {progress.head.toLocaleString('en-US')} ({(progress.head - progress.current).toLocaleString('en-US')} remaining)
        </div>
      )}
      {error && <div className="mb-4 rounded-xl border border-pm-bad/40 bg-pm-bad/10 px-4 py-3 text-sm text-pm-bad">Reconnecting to the network</div>}

      <StatCards />

      <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_380px]">
        <div className="space-y-4">
          <section className="glass rounded-xl p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-sm font-semibold text-pm-text">Volume, last 24 hours</h2>
              <span className="tabular text-sm text-pm-muted">
                <span className="font-semibold text-pm-text">${fmtCompactUsdc(day.cur.volume)}</span> across {day.cur.count.toLocaleString('en-US')} payments
              </span>
            </div>
            <div className="mt-4">
              {deployed ? <BarChart values={day.buckets.volume} labels={day.labels} height={170} /> : <div className="h-[170px]" />}
              <div className="mt-2 flex justify-between text-[11px] text-pm-muted">
                <span>{day.labels[0]}</span>
                <span>{day.labels[12]}</span>
                <span>Now</span>
              </div>
            </div>
            {windowStart !== undefined && !progress && (
              <p className="mt-3 text-xs text-pm-muted">Verified onchain payments from block {windowStart.toLocaleString('en-US')}.</p>
            )}
          </section>

          <section>
            <h2 className="mb-2 text-sm font-semibold text-pm-text">Quick actions</h2>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {ACTIONS.map((a) => {
                const Icon = NAV.find((n) => n.path === a.to)?.icon
                return (
                  <Link key={a.to} to={a.to} className="glass flex items-center gap-3 rounded-xl p-3.5 hover:bg-pm-text/[0.03]">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pm-violet/10 text-pm-violet">{Icon && <Icon className="h-5 w-5" />}</span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-pm-text">{a.title}</span>
                      <span className="block truncate text-xs text-pm-muted">{a.desc}</span>
                    </span>
                  </Link>
                )
              })}
            </div>
          </section>
        </div>

        <div className="space-y-4">
          <TransactionFeed settlements={settlements} me={address} loading={loading} deployed={deployed} error={error} limit={6} />
        </div>
      </div>
    </div>
  )
}
