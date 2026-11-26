/** A smooth line and soft fill of real values. With fewer than two readings it draws a quiet flat baseline, never a made-up curve. */
export function Trend({ values, className = '', height = 56, stroke = 'currentColor' }: { values: number[]; className?: string; height?: number; stroke?: string }) {
  const W = 200
  const H = 60
  if (values.length < 2) {
    return (
      <svg aria-hidden viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className={className} style={{ height }}>
        <line x1="0" y1={H - 8} x2={W} y2={H - 8} stroke={stroke} strokeWidth="2" strokeDasharray="2 6" strokeLinecap="round" opacity="0.5" vectorEffect="non-scaling-stroke" />
      </svg>
    )
  }
  const min = Math.min(...values)
  const max = Math.max(...values)
  const span = max - min || 1
  const pts = values.map((v, i) => [(i / (values.length - 1)) * W, H - 8 - ((v - min) / span) * (H - 18)] as const)
  const line = pts.reduce((d, [x, y], i) => {
    if (i === 0) return `M${x.toFixed(1)} ${y.toFixed(1)}`
    const [px, py] = pts[i - 1]
    const cx = (px + x) / 2
    return `${d} C${cx.toFixed(1)} ${py.toFixed(1)} ${cx.toFixed(1)} ${y.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}`
  }, '')
  const id = `trend-${Math.round(values[values.length - 1] * 1000)}-${values.length}`
  return (
    <svg aria-hidden viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className={className} style={{ height }}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.28" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${line} L${W} ${H} L0 ${H} Z`} fill={`url(#${id})`} />
      <path d={line} fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}
