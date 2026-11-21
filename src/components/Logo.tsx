import { useId } from 'react'

// The "P" is one ribbon: a slanted top edge, an open slot, a round bowl and a stem that sweeps down-left.
const P_SHAPE =
  'M13.8 19.9L20.4 10.6Q21.9 8.4 24.6 8.4H46.9C56.4 8.4 62.7 15.2 62.7 22.8C62.7 30.4 56.2 37.1 46.9 37.1H32.4L29.4 48.4C28 53.6 23 56.3 17.4 56.3H13.1Q12.2 56.3 12.5 55.4L20.2 32.2C21.6 28.4 25 25.9 29.6 25.9H48.1A3 3 0 0 0 48.1 19.9Z'
// Lower half of the ribbon sits in the stronger accent tone to give the P depth without gradients.
const P_SHADE = 'M64 19L50 25.8L29 26L20 33L10 36V60H64Z'
// Three small slanted blocks trailing from the stem, the "mesh" detail of the mark.
const PIXELS = ['M10.4 38.4H15.2L13.6 43.4H8.8Z', 'M3.2 44.4H7.8L6.2 49.2H1.6Z', 'M9.2 44.4H13.6L12 49.2H7.6Z']

/**
 * PayMesh mark: a slanted "P" ribbon with trailing blocks. Colours come from the dashboard theme tokens,
 * so it follows light and dark mode. `size` is the mark's height in pixels.
 */
export function LogoMark({ size = 32 }: { size?: number }) {
  // One clip id per instance: a shared id breaks when the first copy sits inside a hidden element (the desktop sidebar on phones).
  const clipId = `pm-p-${useId().replace(/[^a-zA-Z0-9]/g, '')}`
  return (
    <svg width={Math.round((size * 64) / 54)} height={size} viewBox="0 5 64 54" fill="none" aria-hidden="true" className="shrink-0">
      <defs>
        <clipPath id={clipId}>
          <path d={P_SHAPE} />
        </clipPath>
      </defs>
      <path d={P_SHAPE} className="fill-pm-violet" />
      <path d={P_SHADE} className="fill-pm-indigo" clipPath={`url(#${clipId})`} />
      <g className="fill-pm-violet stroke-pm-violet" strokeWidth="0.8" strokeLinejoin="round">
        {PIXELS.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
    </svg>
  )
}

/** "Pay" in the text colour, "Mesh" in the accent. */
export function Wordmark({ className = 'text-lg' }: { className?: string }) {
  return (
    <span className={`font-semibold tracking-tight ${className}`}>
      <span className="text-pm-text">Pay</span>
      <span className="text-pm-violet">Mesh</span>
    </span>
  )
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <LogoMark size={compact ? 28 : 34} />
      {!compact && <Wordmark className="text-[20px]" />}
    </div>
  )
}
