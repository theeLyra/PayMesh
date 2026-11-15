import { useId } from 'react'

interface SparkProps {
  values: number[]
  color?: string
  height?: number
  className?: string
}

/** Area sparkline. Renders nothing meaningful for fewer than two points. */
export function Sparkline({ values, color = '#22d3ee', height = 44, className }: SparkProps) {
  const id = useId()
  const w = 200
  if (values.length < 2) return <div className={className} style={{ height }} />
  const max = Math.max(...values)
  const min = Math.min(...values)
  const range = max - min || 1
  const pts = values.map((v, i) => [(i / (values.length - 1)) * w, height - 4 - ((v - min) / range) * (height - 10)] as const)
  const line = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ')
  return (
    <svg viewBox={`0 0 ${w} ${height}`} preserveAspectRatio="none" className={className} style={{ height, width: '100%' }} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.35" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${line} L${w},${height} L0,${height} Z`} fill={`url(#${id})`} />
      <path d={line} fill="none" stroke={color} strokeWidth="1.8" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

export function MiniBars({ values, height = 44, className }: { values: number[]; height?: number; className?: string }) {
  const max = Math.max(...values, 0)
  return (
    <div className={className} style={{ height }} aria-hidden="true">
      <div className="flex h-full items-end gap-[3px]">
        {values.map((v, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-pm-violet to-pm-indigo"
            style={{ height: `${max > 0 ? Math.max(v > 0 ? 8 : 3, (v / max) * 100) : 3}%`, opacity: v > 0 ? 1 : 0.25 }}
          />
        ))}
      </div>
    </div>
  )
}

export function BarChart({ values, labels, height = 180 }: { values: number[]; labels: string[]; height?: number }) {
  const max = Math.max(...values, 0)
  return (
    <div>
      <div className="flex items-end gap-1.5" style={{ height }}>
        {values.map((v, i) => (
          <div key={i} className="group relative flex h-full flex-1 items-end">
            <div
              className="w-full rounded-t-md bg-gradient-to-t from-pm-violet/80 to-pm-cyan/80 transition group-hover:brightness-125"
              style={{ height: `${max > 0 ? Math.max(v > 0 ? 4 : 1, (v / max) * 100) : 1}%`, opacity: v > 0 ? 1 : 0.2 }}
            />
            <div className="pointer-events-none absolute -top-7 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-[11px] text-white group-hover:block">
              {labels[i]}: {v.toLocaleString('en-US', { maximumFractionDigits: 2 })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
