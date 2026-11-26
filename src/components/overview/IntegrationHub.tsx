import { ArrowRight, ChevronRight } from 'lucide-react'
import { Link } from '@/paymesh/router'
import { TokenLogo } from '../TokenLogo'

type Status = 'live' | 'beta'

interface Product {
  to: string
  name: string
  blurb: string
  status: Status
  label: string
  tokens: string[]
}

/** Each Circle product opens its working page. Status labels match the status table in the docs. */
const PRODUCTS: Product[] = [
  { to: '/swap', name: 'Circle swap aggregator', blurb: 'Swap USDC, EURC and cirBTC', status: 'live', label: 'Live', tokens: ['USDC', 'EURC', 'cirBTC'] },
  { to: '/bridge', name: 'CCTP V2 cross-chain USDC', blurb: 'Move USDC between chains', status: 'beta', label: 'Beta', tokens: ['USDC'] },
  { to: '/gateway', name: 'Circle Gateway', blurb: 'One USDC balance on many chains', status: 'beta', label: 'Beta', tokens: ['USDC'] },
]

/** The Circle logo file. To use Circle's own download instead, replace this file and keep the name. */
const LOGO_SRC = '/brand/circle-logo.svg'

/** A globe of connected points on the right edge. Decorative only. */
function Globe() {
  const nodes: Array<[number, number]> = [[235, 38], [300, 70], [345, 30], [380, 92], [290, 120], [350, 150], [250, 150], [400, 52]]
  const links: Array<[number, number]> = [[0, 1], [1, 2], [2, 7], [1, 3], [1, 4], [4, 5], [3, 5], [4, 6], [0, 6]]
  return (
    <svg aria-hidden viewBox="0 0 420 190" className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[62%] opacity-60 sm:block">
      <defs>
        <radialGradient id="hub-sphere" cx="70%" cy="85%" r="70%">
          <stop offset="0%" stopColor="#8b8dff" />
          <stop offset="55%" stopColor="#3b3fd8" />
          <stop offset="100%" stopColor="#1a1f7a" />
        </radialGradient>
      </defs>
      <circle cx="330" cy="215" r="120" fill="url(#hub-sphere)" opacity="0.95" />
      {links.map(([a, b]) => (
        <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="#a5b4fc" strokeOpacity="0.55" strokeWidth="1" />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 2 === 0 ? 3.5 : 2.5} fill="#c7d2fe" />
      ))}
    </svg>
  )
}

/** The Circle logo, shown unmodified from public/brand/circle-logo.svg. */
function CircleLogo() {
  return <img src={LOGO_SRC} alt="Circle" width={48} height={48} decoding="async" className="h-12 w-12 shrink-0 select-none" draggable={false} />
}

function ProductCard({ p }: { p: Product }) {
  return (
    <Link
      to={p.to}
      className="group flex min-h-[72px] min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.08] p-3.5 backdrop-blur-sm hover:border-white/30 hover:bg-white/[0.14] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70"
    >
      <span className="flex shrink-0 -space-x-2.5">
        {p.tokens.map((t) => (
          <span key={t} className="rounded-full ring-2 ring-[#0b1038]">
            <TokenLogo symbol={t} size={32} />
          </span>
        ))}
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
          <span className="text-[15px] font-bold leading-tight">{p.name}</span>
          <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-semibold ${p.status === 'live' ? 'bg-emerald-400/20 text-emerald-200' : 'bg-amber-300/20 text-amber-200'}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${p.status === 'live' ? 'bg-emerald-300' : 'bg-amber-300'}`} />
            {p.label}
          </span>
        </span>
        <span className="mt-0.5 block text-[13px] leading-snug text-white/65">{p.blurb}</span>
      </span>
      <ChevronRight className="h-5 w-5 shrink-0 text-white/60 group-hover:text-white" />
    </Link>
  )
}

/** The Circle integration summary. Every product opens its working page. */
export function IntegrationHub() {
  return (
    <section className="ov-hub relative overflow-hidden rounded-[26px] p-5 text-white sm:p-6">
      <Globe />
      <div className="relative flex flex-col gap-5">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
          <div className="flex min-w-0 items-center gap-4">
            <CircleLogo />
            <div className="min-w-0 border-l border-white/15 pl-4">
              <h2 className="text-lg font-bold leading-tight sm:text-xl">Integration Hub</h2>
              <p className="text-[13px] text-white/65 sm:text-sm">Powered by Circle&apos;s ecosystem</p>
            </div>
          </div>
          <Link to="/docs/circle-integrations" className="inline-flex min-h-[44px] items-center gap-2 rounded-2xl bg-white px-5 text-[15px] font-semibold text-[#0b1038] hover:bg-white/90">
            Status and docs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-2.5 md:grid-cols-3">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.to} p={p} />
          ))}
        </div>
        <p className="text-xs text-white/50">Programmable Wallets API needs a Circle key and a server, so it is not connected yet.</p>
      </div>
    </section>
  )
}
