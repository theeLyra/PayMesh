import type { CSSProperties, SVGProps } from 'react'

/**
 * Custom glyphs for the four main actions, drawn on a 24px grid. Each has its own silhouette
 * (paper plane, tray, opposing arrows, suspension bridge) so they read at a glance, even at a quick look.
 * Bold shapes in the accent color carry the meaning; faint secondary strokes add depth.
 */
const base: SVGProps<SVGSVGElement> = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

/** Used for details cut out of a solid shape, so they match the tile behind them. */
const cut: CSSProperties = { stroke: 'rgb(var(--pm-panel))' }

export function SendGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M20.8 3.2 3.6 9.8c-.8.3-.8 1.4 0 1.7l6.2 2.7 2.7 6.2c.3.8 1.4.8 1.7 0l6.6-17.2z" fill="currentColor" strokeWidth="1.4" />
      <path d="M20.8 3.2 9.9 14.1" style={cut} strokeWidth="1.8" opacity="0.7" />
    </svg>
  )
}

export function ReceiveGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.8v10.4" />
      <path d="m7.6 10 4.4 4.4 4.4-4.4" />
      <path d="M4.4 15v2c0 1.7 1.3 3 3 3h9.2c1.7 0 3-1.3 3-3v-2" opacity="0.6" />
    </svg>
  )
}

export function SwapGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8.2h12" />
      <path d="M20.4 8.2 14.6 4v8.4z" fill="currentColor" strokeWidth="1.5" />
      <path d="M20 15.8H8" opacity="0.6" />
      <path d="M3.6 15.8 9.4 11.6V20z" fill="currentColor" strokeWidth="1.5" opacity="0.6" />
    </svg>
  )
}

export function BridgeGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M2.8 17.4h18.4" />
      <path d="M7 17.4V6.6M17 17.4V6.6" />
      <path d="M2.8 14.2 7 6.6M21.2 14.2 17 6.6" opacity="0.6" />
      <path d="M7 6.6c1.6 5.6 8.4 5.6 10 0" />
      <path d="M10 11.2v6.2M12 12.4v5M14 11.2v6.2" strokeWidth="1.6" opacity="0.6" />
    </svg>
  )
}
