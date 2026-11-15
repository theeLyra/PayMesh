import { useMemo, type ReactNode } from 'react'
import { useAccount } from 'wagmi'
import { ArrowDown, ArrowUp } from 'lucide-react'
import { useActivity } from '@/paymesh/activityContext'
import { fmtCompactUsdc } from '@/paymesh/format'
import { DAY, bucketize, pctChange, totalsBetween } from '@/paymesh/metrics'
import { useTxLog } from '@/paymesh/txlog'
import { useOperations } from '@/paymesh/useTransact'
import { Link } from '@/paymesh/router'
import { MiniBars, Sparkline } from './charts'
import { useNow } from '@/paymesh/useNow'
import { Skeleton, cx } from './ui'

function StatShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="glass flex min-h-[150px] flex-col rounded-2xl p-3.5 dash:h-[152px]">
      <div className="label">{title}</div>
      {children}
    </div>
  )
}

function Delta({ pct, suffix }: { pct: number | undefined; suffix: string }) {
  if (pct === undefined) return <span className="text-[11px] text-pm-muted">No prior period to compare</span>
  const up = pct >= 0
  const Icon = up ? ArrowUp : ArrowDown
  return (
    <span className={cx('inline-flex items-center gap-1 text-[11px]', up ? 'text-pm-good' : 'text-pm-bad')}>
      <Icon className="h-3 w-3" />
      {Math.abs(pct).toFixed(1)}% <span className="text-pm-muted">{suffix}</span>
    </span>
  )
}

function Unavailable({ text }: { text: string }) {
  return <p className="mt-2 flex flex-1 items-center text-pretty text-xs text-pm-muted">{text}</p>
}

function OpRow({ label, value, loading, to }: { label: string; value: bigint | undefined; loading: boolean; to: string }) {
  return (
    <li>
      <Link to={to} className="flex items-center justify-between rounded-md px-1.5 py-1 text-xs transition hover:bg-white/[0.05]">
        <span className="text-pm-muted">{label}</span>
        {loading ? <Skeleton className="h-4 w-6" /> : <span className="tabular font-display text-base font-semibold text-white">{value === undefined ? '—' : value.toString()}</span>}
      </Link>
    </li>
  )
}

export function StatCards() {
  const { settlements, status, deployed, timesPartial, blockTimeSec } = useActivity()
  const { address } = useAccount()
  const txLog = useTxLog(address)
  const ops = useOperations()
  const nowSec = Math.floor(useNow(15_000) / 1000)
  const ready = status === 'ready'

  const volume = useMemo(() => {
    const cur = totalsBetween(settlements, nowSec - DAY, nowSec + 60)
    const prev = totalsBetween(settlements, nowSec - 2 * DAY, nowSec - DAY)
    const buckets = bucketize(settlements, nowSec - DAY, nowSec + 60, 24)
    return { cur, prev, buckets }
  }, [settlements, nowSec])

  const finals = txLog.filter((t) => t.status !== 'pending')
  const successes = finals.filter((t) => t.status === 'success')
  const successRate = finals.length > 0 ? (successes.length / finals.length) * 100 : undefined
  const timings = successes
    .filter((t) => t.confirmedAt !== undefined)
    .slice(0, 20)
    .map((t) => ((t.confirmedAt as number) - t.submittedAt) / 1000)
    .reverse()
  const avg = (xs: number[]) => xs.reduce((a, b) => a + b, 0) / xs.length
  const avgSettle = timings.length > 0 ? avg(timings) : undefined
  const earlier = timings.slice(0, Math.floor(timings.length / 2))
  const later = timings.slice(Math.floor(timings.length / 2))
  const settleDelta = earlier.length > 0 && later.length > 0 ? avg(later) - avg(earlier) : undefined
  const loadingData = deployed && !ready && settlements.length === 0

  return (
    <div className="grid gap-3 sm:grid-cols-2 dash:grid-cols-4">
      <StatShell title="Total volume (24H)">
        {!deployed ? (
          <Unavailable text="Contracts not deployed" />
        ) : loadingData ? (
          <Skeleton className="mt-3 h-20 w-full" />
        ) : (
          <>
            <div className="tabular mt-1 font-display text-[28px] font-bold leading-tight text-violet-300">${fmtCompactUsdc(volume.cur.volume)}</div>
            <Delta pct={pctChange(volume.cur.volume, volume.prev.volume)} suffix="vs previous 24h" />
            <MiniBars values={volume.buckets.volume} height={34} className="mt-auto" />
            {timesPartial && <div className="text-[10px] text-pm-warn">Partial: block times still loading</div>}
          </>
        )}
      </StatShell>

      <StatShell title="Successful payments">
        {!deployed ? (
          <Unavailable text="Contracts not deployed" />
        ) : loadingData ? (
          <Skeleton className="mt-3 h-20 w-full" />
        ) : (
          <>
            <div className="tabular mt-1 font-display text-[28px] font-bold leading-tight text-[#58cfe8]">{volume.cur.count.toLocaleString('en-US')}</div>
            <span className="text-[11px] text-pm-muted">
              confirmed in 24h
              {successRate !== undefined && (
                <>
                  {' · '}
                  <span className="text-pm-good">{successRate.toFixed(1)}%</span> of your {finals.length}
                </>
              )}
            </span>
            <Sparkline values={volume.buckets.count} height={34} className="mt-auto" />
          </>
        )}
      </StatShell>

      <StatShell title="Average settlement">
        {avgSettle === undefined ? (
          <Unavailable text="No measurements yet. Send a payment and its confirmation time is measured here." />
        ) : (
          <>
            <div className="tabular mt-1 font-display text-[28px] font-bold leading-tight text-violet-300">{avgSettle.toFixed(1)} sec</div>
            {settleDelta !== undefined ? (
              <span className={cx('inline-flex items-center gap-1 text-[11px]', settleDelta <= 0 ? 'text-pm-good' : 'text-pm-warn')}>
                {settleDelta <= 0 ? <ArrowDown className="h-3 w-3" /> : <ArrowUp className="h-3 w-3" />}
                {Math.abs(settleDelta).toFixed(1)} sec <span className="text-pm-muted">vs earlier</span>
              </span>
            ) : (
              <span className="text-[11px] text-pm-muted">{timings.length} measured here</span>
            )}
            <Sparkline values={timings} color="#a78bfa" height={34} className="mt-auto" />
          </>
        )}
        {avgSettle === undefined && blockTimeSec !== undefined && <div className="text-[10px] text-pm-muted">Block time {blockTimeSec.toFixed(2)} sec</div>}
      </StatShell>

      <StatShell title="Payment operations">
        {!deployed ? (
          <Unavailable text="Contracts not deployed" />
        ) : (
          <ul className="mt-1.5 flex flex-1 flex-col justify-around">
            <OpRow label="Active payment links" value={ops.links} loading={ops.isLoading} to="/links" />
            <OpRow label="Scheduled plans" value={ops.plans} loading={ops.isLoading} to="/scheduled" />
            <OpRow label="Escrow agreements" value={ops.escrows} loading={ops.isLoading} to="/escrow" />
          </ul>
        )}
      </StatShell>
    </div>
  )
}
