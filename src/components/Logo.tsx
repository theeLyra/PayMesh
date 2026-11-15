import { useId } from 'react'

/**
 * PayMesh mark: a hexagonal network cell with a "P" drawn as a single payment route.
 * A pulse travels the route, three vertex nodes light in sequence, and a satellite orbits the cell.
 */
export function LogoMark({ size = 36, animated = true }: { size?: number; animated?: boolean }) {
  const id = useId()
  const grad = `${id}-g`
  const glow = `${id}-f`
  const run = animated ? '' : ' pm-still'
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      overflow="visible"
      className={`pm-logo${run}`}
      style={{ filter: 'drop-shadow(0 0 7px rgba(139, 92, 246, 0.55))' }}
    >
      <defs>
        <linearGradient id={grad} x1="6" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#b79cff" />
          <stop offset="0.55" stopColor="#7c6bff" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
        <filter id={glow} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Cell */}
      <path d="M24 3 42.2 13.5V34.5L24 45 5.8 34.5V13.5Z" fill="rgba(10,12,34,0.65)" stroke={`url(#${grad})`} strokeWidth="1.6" strokeLinejoin="round" />

      {/* Mesh spokes from three vertices into the route */}
      <g stroke={`url(#${grad})`} strokeWidth="0.9" opacity="0.5" strokeLinecap="round">
        <path d="M24 3 26 15" />
        <path d="M42.2 34.5 32.5 21.5" />
        <path d="M5.8 34.5 19 33" />
      </g>

      {/* The P route: base stroke, then a travelling pulse over it */}
      <path d="M19 34V15H26A6.5 6.5 0 0 1 26 28H19" stroke={`url(#${grad})`} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      <path
        className="pm-trace"
        d="M19 34V15H26A6.5 6.5 0 0 1 26 28H19"
        pathLength="100"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="12 88"
        filter={`url(#${glow})`}
      />

      {/* Vertex nodes light in sequence */}
      <g fill="#07081a" strokeWidth="1.4">
        <circle className="pm-node pm-n1" cx="24" cy="3" r="2.1" stroke="#b79cff" />
        <circle className="pm-node pm-n2" cx="42.2" cy="34.5" r="2.1" stroke="#7c6bff" />
        <circle className="pm-node pm-n3" cx="5.8" cy="34.5" r="2.1" stroke="#22d3ee" />
      </g>

      {/* Hub node on the bowl */}
      <circle cx="32.5" cy="21.5" r="2.6" fill={`url(#${grad})`} filter={`url(#${glow})`} />
      <circle className="pm-ping" cx="32.5" cy="21.5" r="2.6" stroke="#22d3ee" strokeWidth="1" />

      {/* Satellite orbiting the cell */}
      <g className="pm-orbit">
        <circle cx="24" cy="0.6" r="1.5" fill="#22d3ee" filter={`url(#${glow})`} />
      </g>
    </svg>
  )
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <LogoMark size={compact ? 32 : 46} />
      <div className="leading-none">
        <div className="pm-wordmark font-display text-[26px] font-bold tracking-[0.18em]" style={compact ? { fontSize: 20 } : undefined}>
          PAYMESH
        </div>
        {!compact && <div className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.3em] text-pm-muted">Programmable Payments</div>}
      </div>
    </div>
  )
}
