import { useMemo, useState } from 'react'
import type { Address } from 'viem'
import type { Settlement } from '@/paymesh/ActivityProvider'
import { fmtUsdc, shortAddress } from '@/paymesh/format'
import { MAP_CELL, MAP_COLS, MAP_H, MAP_ROW_HEX, MAP_W } from './worldMask'

interface Node {
  address: Address
  x: number
  y: number
  sent: bigint
  received: bigint
  count: number
}

/** Land cells decoded once from the world mask. Decorative backdrop only. */
const { CELLS, BASE, GLOW, BRIGHT } = (() => {
  const cells: Array<[number, number]> = []
  const base: string[] = []
  const glow: string[] = []
  const bright: string[] = []
  MAP_ROW_HEX.forEach((hex, r) => {
    for (let c = 0; c < MAP_COLS; c++) {
      const nibble = parseInt(hex[c >> 2] ?? '0', 16)
      if (((nibble >> (3 - (c & 3))) & 1) === 0) continue
      const x = +(c * MAP_CELL + MAP_CELL / 2).toFixed(1)
      const y = +(r * MAP_CELL + MAP_CELL / 2).toFixed(1)
      cells.push([x, y])
      const seg = `M${x} ${y}h0`
      base.push(seg)
      const h = ((c * 73856093) ^ (r * 19349663)) >>> 0
      if (h % 7 === 0) glow.push(seg)
      if (h % 31 === 0) bright.push(seg)
    }
  })
  return { CELLS: cells, BASE: base.join(''), GLOW: glow.join(''), BRIGHT: bright.join('') }
})()

function place(address: string): { x: number; y: number } {
  const h = parseInt(address.toLowerCase().replace('0x', '').slice(0, 8), 16)
  const [x, y] = CELLS[h % CELLS.length]
  return { x, y }
}

export function NetworkMap({ settlements, me, loading }: { settlements: Settlement[]; me?: Address; loading: boolean }) {
  const [hover, setHover] = useState<Address | null>(null)

  const { nodes, edges } = useMemo(() => {
    const recent = settlements.filter((s) => s.from.toLowerCase() !== s.to.toLowerCase()).slice(0, 40)
    const map = new Map<string, Node>()
    const touch = (addr: Address) => {
      const key = addr.toLowerCase()
      let n = map.get(key)
      if (!n) {
        n = { address: addr, ...place(addr), sent: 0n, received: 0n, count: 0 }
        map.set(key, n)
      }
      return n
    }
    for (const s of recent) {
      const a = touch(s.from)
      const b = touch(s.to)
      a.sent += s.amount
      a.count += 1
      b.received += s.amount
      b.count += 1
    }
    const edgeList = recent.map((s) => {
      const a = map.get(s.from.toLowerCase())!
      const b = map.get(s.to.toLowerCase())!
      const dist = Math.hypot(b.x - a.x, b.y - a.y)
      const mx = (a.x + b.x) / 2
      const my = (a.y + b.y) / 2 - Math.min(150, dist * 0.42)
      return {
        id: s.id,
        d: `M${a.x} ${a.y} Q${mx.toFixed(1)} ${my.toFixed(1)} ${b.x} ${b.y}`,
        mine: Boolean(me) && s.from.toLowerCase() === me?.toLowerCase(),
        from: s.from,
        to: s.to,
      }
    })
    return { nodes: [...map.values()], edges: edgeList }
  }, [settlements, me])

  const hovered = nodes.find((n) => n.address === hover)
  const labelled = new Set([...nodes].sort((a, b) => b.count - a.count).slice(0, 8).map((n) => n.address))

  return (
    <div className="relative w-full" style={{ aspectRatio: `${MAP_W} / ${MAP_H}` }}>
      <svg
        viewBox={`0 0 ${MAP_W} ${MAP_H}`}
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="PayMesh payment network. Nodes are wallets and routes are verified USDC payments. Positions are illustrative, not geographic."
      >
        <defs>
          <radialGradient id="mapFade" cx="50%" cy="50%" r="62%">
            <stop offset="0.55" stopColor="#fff" />
            <stop offset="1" stopColor="#000" />
          </radialGradient>
          <mask id="mapMask">
            <rect width={MAP_W} height={MAP_H} fill="url(#mapFade)" />
          </mask>
          <linearGradient id="route" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#a78bfa" />
            <stop offset="1" stopColor="#7dd3fc" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g mask="url(#mapMask)">
          <path d={BASE} stroke="#4c3fb0" strokeOpacity="0.62" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d={GLOW} stroke="#8f7dff" strokeOpacity="0.8" strokeWidth="2.3" strokeLinecap="round" fill="none" />
          <path d={BRIGHT} stroke="#e4ddff" strokeOpacity="0.95" strokeWidth="2.6" strokeLinecap="round" fill="none" filter="url(#glow)" />
        </g>

        {edges.map((e) => (
          <g key={e.id}>
            <path d={e.d} fill="none" stroke={e.mine ? '#22d3ee' : 'url(#route)'} strokeOpacity="0.4" strokeWidth="1.2" />
            <path d={e.d} fill="none" stroke={e.mine ? '#67e8f9' : '#d8ccff'} strokeWidth="1.8" strokeLinecap="round" strokeDasharray="10 38" className="animate-flow" filter="url(#glow)">
              <title>{`${shortAddress(e.from)} to ${shortAddress(e.to)}`}</title>
            </path>
          </g>
        ))}

        {nodes.map((n) => {
          const isMe = Boolean(me) && n.address.toLowerCase() === me?.toLowerCase()
          const r = 3.2 + Math.min(4, n.count * 0.6)
          return (
            <g key={n.address} onMouseEnter={() => setHover(n.address)} onMouseLeave={() => setHover(null)} style={{ cursor: 'pointer' }}>
              <circle cx={n.x} cy={n.y} r={r + 7} fill={isMe ? '#22d3ee' : '#8b5cf6'} opacity="0.16" />
              <circle cx={n.x} cy={n.y} r={r} fill={isMe ? '#22d3ee' : '#b9a6ff'} filter="url(#glow)" />
              <circle cx={n.x} cy={n.y} r={Math.max(1.2, r - 2)} fill="#fff" />
              {(labelled.has(n.address) || isMe) && (
                <text x={n.x} y={n.y - r - 6} textAnchor="middle" fontSize="9.5" fontWeight="600" fill="#f1f0ff" stroke="#04050d" strokeWidth="2.4" style={{ paintOrder: 'stroke' }}>
                  {isMe ? 'You' : shortAddress(n.address)}
                </text>
              )}
            </g>
          )
        })}
      </svg>

      {hovered && (
        <div
          className="pointer-events-none absolute z-10 min-w-[190px] -translate-x-1/2 -translate-y-full rounded-xl border border-pm-line bg-pm-deep/95 p-3 text-xs shadow-card"
          style={{ left: `${(hovered.x / MAP_W) * 100}%`, top: `${(hovered.y / MAP_H) * 100 - 3}%` }}
        >
          <div className="mb-1.5 font-mono text-[11px] text-white">{shortAddress(hovered.address)}</div>
          <div className="flex justify-between gap-4 text-pm-muted">
            <span>Sent</span>
            <span className="tabular text-white">{fmtUsdc(hovered.sent)} USDC</span>
          </div>
          <div className="flex justify-between gap-4 text-pm-muted">
            <span>Received</span>
            <span className="tabular text-white">{fmtUsdc(hovered.received)} USDC</span>
          </div>
          <div className="flex justify-between gap-4 text-pm-muted">
            <span>Payments</span>
            <span className="tabular text-white">{hovered.count}</span>
          </div>
        </div>
      )}

      {nodes.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <div className="max-w-xs rounded-2xl border border-pm-line bg-pm-deep/80 px-5 py-4 backdrop-blur">
            <div className="font-display text-base font-semibold text-white">{loading ? 'Reading the network' : 'No payments indexed yet'}</div>
            <p className="mt-1 text-pretty text-xs text-pm-muted">
              {loading ? 'Verified payments appear here as soon as the contracts have been scanned.' : 'Wallets and routes light up here as real PayMesh payments settle onchain.'}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
