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

/** A smooth static area chart with grid lines, used for the volume card. */
export function AreaChart({ values, height = 200, className }: { values: number[]; height?: number; className?: string }) {
  const w = 600
  const pad = { t: 12, b: 8 }
  const max = Math.max(...values, 0)
  const top = max > 0 ? max * 1.15 : 1
  const x = (i: number) => (values.length < 2 ? 0 : (i / (values.length - 1)) * w)
  const y = (v: number) => pad.t + (1 - v / top) * (height - pad.t - pad.b)
  const pts = values.map((v, i) => [x(i), y(v)] as const)
  // Catmull-Rom style smoothing through every point.
  const line = pts.reduce((d, [px, py], i) => {
    if (i === 0) return `M${px.toFixed(1)},${py.toFixed(1)}`
    const [x0, y0] = pts[i - 1]
    const cx = (x0 + px) / 2
    return `${d} C${cx.toFixed(1)},${y0.toFixed(1)} ${cx.toFixed(1)},${py.toFixed(1)} ${px.toFixed(1)},${py.toFixed(1)}`
  }, '')
  const last = pts[pts.length - 1]
  const id = 'area-fill'
  return (
    <svg viewBox={`0 0 ${w} ${height}`} preserveAspectRatio="none" className={className} style={{ height, width: '100%' }} role="img" aria-label="Volume over the last 24 hours">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(var(--pm-accent))" stopOpacity="0.32" />
          <stop offset="100%" stopColor="rgb(var(--pm-accent))" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((f) => (
        <line key={f} x1="0" x2={w} y1={pad.t + f * (height - pad.t - pad.b)} y2={pad.t + f * (height - pad.t - pad.b)} stroke="rgb(var(--pm-line))" strokeDasharray="3 5" vectorEffect="non-scaling-stroke" />
      ))}
      {pts.length >= 2 && (
        <>
          <path d={`${line} L${w},${height} L0,${height} Z`} fill={`url(#${id})`} />
          <path d={line} fill="none" stroke="rgb(var(--pm-accent))" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        </>
      )}
      {last && max > 0 && <circle cx={last[0]} cy={last[1]} r="4" fill="rgb(var(--pm-accent))" stroke="rgb(var(--pm-panel))" strokeWidth="2" vectorEffect="non-scaling-stroke" />}
    </svg>
  )
}
