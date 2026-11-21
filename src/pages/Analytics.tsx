import { useMemo } from 'react'
import { useActivity } from '@/paymesh/activityContext'
import { SOURCE_LABELS } from '@/paymesh/contracts'
import { decodeCategory, fmtCompactUsdc, fmtUsdc, shortAddress } from '@/paymesh/format'
import { DAY, bucketize, sumBy, totalsBetween, uniqueWallets } from '@/paymesh/metrics'
import { BarChart } from '@/components/charts'
import { useNow } from '@/paymesh/useNow'
import { Card, EmptyState, NotDeployed, PageHeader, Skeleton } from '@/components/ui'

function Metric({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <Card className="p-4">
      <div className="label">{label}</div>
      <div className="tabular mt-1 text-3xl font-bold text-pm-violet">{value}</div>
      {sub && <div className="mt-0.5 text-xs text-pm-muted">{sub}</div>}
    </Card>
  )
}

function Breakdown({ title, items }: { title: string; items: Array<{ label: string; volume: bigint; count: number }> }) {
  const max = items.reduce((m, i) => (i.volume > m ? i.volume : m), 0n)
  return (
    <Card className="p-5">
      <div className="label mb-4">{title}</div>
      {items.length === 0 ? (
        <p className="text-sm text-pm-muted">No data in this period.</p>
      ) : (
        <ul className="space-y-3">
          {items.map((i) => (
            <li key={i.label}>
              <div className="mb-1 flex justify-between text-sm">
                <span className="text-pm-text">{i.label}</span>
                <span className="tabular text-pm-muted">
                  {fmtUsdc(i.volume)} USDC · {i.count}
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-pm-text/[0.06]">
                <div className="h-full rounded-full bg-pm-violet" style={{ width: `${max > 0n ? Math.max(3, Number((i.volume * 100n) / max)) : 0}%` }} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </Card>
  )
}

export default function Analytics() {
  const { settlements, status, deployed, timesPartial, windowStart, head } = useActivity()
  const nowSec = Math.floor(useNow(30_000) / 1000)

  const data = useMemo(() => {
    const start = nowSec - 7 * DAY
    const week = settlements.filter((s) => s.timestamp !== undefined && s.timestamp >= start)
    const totals = totalsBetween(settlements, start, nowSec + 60)
    const days = bucketize(settlements, start, nowSec + 60, 7)
    const labels = Array.from({ length: 7 }, (_, i) => new Date((start + (i + 0.5) * DAY) * 1000).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' }))
    const bySource = sumBy(week, (s) => SOURCE_LABELS[s.source] ?? 'Other').map((x) => ({ label: x.key, volume: x.volume, count: x.count }))
    const byCategory = sumBy(week, (s) => decodeCategory(s.category)).map((x) => ({ label: x.key, volume: x.volume, count: x.count }))
    const received = sumBy(week, (s) => s.to).slice(0, 5).map((x) => ({ label: shortAddress(x.key), volume: x.volume, count: x.count }))
    return { totals, days, labels, bySource, byCategory, received, wallets: uniqueWallets(week) }
  }, [settlements, nowSec])

  const loading = deployed && status !== 'ready' && settlements.length === 0
  const avg = data.totals.count > 0 ? data.totals.volume / BigInt(data.totals.count) : 0n

  return (
    <div className="">
      <PageHeader title="Analytics" subtitle="Seven days of verified USDC settlements across every PayMesh contract. Nothing here is estimated." />
      <NotDeployed />
      {!deployed ? (
        <Card>
          <EmptyState title="Analytics need deployed contracts" body="Once the PayMesh contracts are configured, volume and breakdowns appear here from onchain events." />
        </Card>
      ) : loading ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-24 w-full" />
          ))}
        </div>
      ) : (
        <div className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <Metric label="Volume (7 days)" value={`$${fmtCompactUsdc(data.totals.volume)}`} sub="USDC settled" />
            <Metric label="Payments (7 days)" value={data.totals.count.toLocaleString('en-US')} sub="confirmed settlements" />
            <Metric label="Average payment" value={data.totals.count ? `$${fmtCompactUsdc(avg)}` : '—'} sub="per settlement" />
            <Metric label="Active wallets" value={data.wallets.toLocaleString('en-US')} sub="senders and recipients" />
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <Card className="p-5">
              <div className="label mb-4">Daily volume (USDC)</div>
              <BarChart values={data.days.volume} labels={data.labels} />
              <div className="mt-2 flex justify-between text-[11px] text-pm-muted">
                <span>{data.labels[0]}</span>
                <span>{data.labels[6]}</span>
              </div>
            </Card>
            <Card className="p-5">
              <div className="label mb-4">Daily payments</div>
              <BarChart values={data.days.count} labels={data.labels} />
              <div className="mt-2 flex justify-between text-[11px] text-pm-muted">
                <span>{data.labels[0]}</span>
                <span>{data.labels[6]}</span>
              </div>
            </Card>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            <Breakdown title="By payment type" items={data.bySource} />
            <Breakdown title="By category" items={data.byCategory} />
            <Breakdown title="Top recipients" items={data.received} />
          </div>
          <p className="text-xs text-pm-muted">
            Indexed from block {windowStart?.toLocaleString('en-US') ?? '...'} to {head?.toLocaleString('en-US') ?? '...'}.
            {timesPartial ? ' Some block times are still loading, so recent totals may be partial.' : ''}
          </p>
        </div>
      )}
    </div>
  )
}
