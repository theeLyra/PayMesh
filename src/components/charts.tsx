interface SparkProps {
  values: number[]
  height?: number
  className?: string
}

/** Static line chart in the current text colour (set it with a text-* class). Renders an empty box for fewer than two points. */
export function Sparkline({ values, height = 40, className }: SparkProps) {
  const w = 200
  if (values.length < 2) return <div className={className} style={{ height }} />
  const max = Math.max(...values)
  const min = Math.min(...values)
  const range = max - min || 1
  const pts = values.map((v, i) => [(i / (values.length - 1)) * w, height - 4 - ((v - min) / range) * (height - 10)] as const)
  const line = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ')
  return (
    <svg viewBox={`0 0 ${w} ${height}`} preserveAspectRatio="none" className={className} style={{ height, width: '100%' }} aria-hidden="true">
      <path d={`${line} L${w},${height} L0,${height} Z`} fill="currentColor" opacity="0.1" />
      <path d={line} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

export function MiniBars({ values, height = 40, className }: { values: number[]; height?: number; className?: string }) {
  const max = Math.max(...values, 0)
  return (
    <div className={className} style={{ height }} aria-hidden="true">
      <div className="flex h-full items-end gap-[3px]">
        {values.map((v, i) => (
          <div
            key={i}
            className="flex-1 rounded-[2px] bg-pm-violet"
            style={{ height: `${max > 0 ? Math.max(v > 0 ? 8 : 3, (v / max) * 100) : 3}%`, opacity: v > 0 ? 1 : 0.2 }}
          />
        ))}
      </div>
    </div>
  )
}

export function BarChart({ values, labels, height = 180 }: { values: number[]; labels: string[]; height?: number }) {
  const max = Math.max(...values, 0)
  return (
    <div className="flex items-end gap-1.5" style={{ height }}>
      {values.map((v, i) => (
        <div key={i} className="group relative flex h-full flex-1 items-end">
          <div
            className="w-full rounded-t-[3px] bg-pm-violet"
            title={`${labels[i]}: ${v.toLocaleString('en-US', { maximumFractionDigits: 2 })}`}
            style={{ height: `${max > 0 ? Math.max(v > 0 ? 4 : 1, (v / max) * 100) : 1}%`, opacity: v > 0 ? 1 : 0.2 }}
          />
        </div>
      ))}
    </div>
  )
}
