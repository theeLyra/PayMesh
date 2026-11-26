import { ArrowRight } from 'lucide-react'
import { Link } from '@/paymesh/router'

type Status = 'beta' | 'setup'

/** What is really connected today. These match the status page in the docs. */
const ITEMS: Array<{ name: string; status: Status; label: string }> = [
  { name: 'CCTP V2', status: 'beta', label: 'Beta' },
  { name: 'Gateway', status: 'beta', label: 'Beta' },
  { name: 'Wallets API', status: 'setup', label: 'Needs setup' },
]

/** A globe of connected points on the right edge. Decorative only. */
function Globe() {
  const nodes: Array<[number, number]> = [[235, 38], [300, 70], [345, 30], [380, 92], [290, 120], [350, 150], [250, 150], [400, 52]]
  const links: Array<[number, number]> = [[0, 1], [1, 2], [2, 7], [1, 3], [1, 4], [4, 5], [3, 5], [4, 6], [0, 6]]
  return (
    <svg aria-hidden viewBox="0 0 420 190" className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[62%] sm:block">
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

/** Two interlocking rings in the Circle spirit: our own mark, not Circle's logo. */
function HubMark() {
  return (
    <svg aria-hidden viewBox="0 0 64 64" className="h-14 w-14 shrink-0">
      <defs>
        <linearGradient id="hub-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5eead4" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="24" fill="none" stroke="url(#hub-mark)" strokeWidth="7" strokeDasharray="110 41" strokeLinecap="round" />
      <circle cx="32" cy="32" r="11" fill="none" stroke="url(#hub-mark)" strokeWidth="7" strokeDasharray="38 31" strokeLinecap="round" transform="rotate(180 32 32)" />
    </svg>
  )
}

/** The Circle integration summary with honest status. Each item links to the full status page. */
export function IntegrationHub() {
  return (
    <section className="ov-hub relative overflow-hidden rounded-[26px] p-5 text-white sm:p-6">
      <Globe />
      <div className="relative flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <HubMark />
          <div className="min-w-0">
            <h2 className="text-xl font-bold leading-tight sm:text-2xl">Circle Integration Hub</h2>
            <p className="text-[15px] text-white/65">Powered by Circle&apos;s ecosystem</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          {ITEMS.map((i) => (
            <span key={i.name} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 py-1.5 pl-3 pr-3.5 text-[14px] font-semibold">
              <span className={`h-2.5 w-2.5 rounded-full ${i.status === 'beta' ? 'bg-amber-300' : 'bg-white/40'}`} />
              {i.name}
              <span className="text-xs font-medium text-white/60">{i.label}</span>
            </span>
          ))}
          <Link to="/docs/circle-integrations" className="ml-auto inline-flex min-h-[44px] items-center gap-2 rounded-2xl bg-white px-5 text-[15px] font-semibold text-[#0b1038] hover:bg-white/90 sm:absolute sm:bottom-0 sm:right-0 sm:ml-0">
            Explore
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
