import { ArrowRight, BookOpen, ChevronsLeft, ChevronsRight, LifeBuoy, X } from 'lucide-react'
import { NAV, Link, navigate, usePath } from '@/paymesh/router'
import { Logo } from './Logo'
import { cx } from './ui'

function PromoCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-pm-violet/30 bg-gradient-to-br from-pm-violet/25 via-pm-indigo/10 to-transparent p-4">
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-pm-violet/30 blur-2xl" />
      <div className="relative">
        <span className="rounded-md bg-pm-cyan/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-pm-cyan">New</span>
        <div className="mt-2 font-display text-lg font-bold leading-tight text-white">Programmable Payments</div>
        <p className="mt-1 text-pretty text-xs leading-relaxed text-pm-muted">Automate, split, and manage USDC payments through one unified network.</p>
        <button
          onClick={() => navigate('/transfers')}
          className="btn-primary mt-3 inline-flex min-h-[40px] items-center gap-2 rounded-xl px-4 text-sm font-semibold text-white transition hover:brightness-110"
        >
          Explore PayMesh <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

function HelpCard() {
  return (
    <a
      href="https://docs.arc.io"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-2xl border border-pm-line bg-white/[0.03] p-3 transition hover:bg-white/[0.06]"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pm-violet/15 text-violet-200">
        <LifeBuoy className="h-5 w-5" />
      </div>
      <div className="text-sm leading-tight">
        <div className="font-semibold text-white">Need help?</div>
        <div className="text-xs text-pm-muted">Arc and Circle docs</div>
      </div>
      <BookOpen className="ml-auto h-4 w-4 text-pm-muted" />
    </a>
  )
}

interface SidebarProps {
  expanded: boolean
  onToggle: () => void
}

/** Persistent rail on tablet and desktop. Expanded shows labels and cards; collapsed shows icons only. */
export function Sidebar({ expanded, onToggle }: SidebarProps) {
  const path = usePath()
  return (
    <aside
      className={cx(
        'sticky top-0 z-30 hidden h-dvh shrink-0 flex-col border-r border-pm-line/70 bg-pm-bg/70 py-5 backdrop-blur-xl transition-[width] duration-200 md:flex',
        expanded ? 'w-[244px] px-4' : 'w-[76px] px-3',
      )}
    >
      <div className={cx('mb-6 flex items-center', expanded ? 'justify-between' : 'justify-center')}>
        {expanded ? <Logo /> : <Logo compact />}
      </div>
      {!expanded && <div className="-mt-4 mb-2" />}
      <nav className="flex flex-1 flex-col gap-1.5 overflow-y-auto" aria-label="Primary">
        {NAV.map((item) => {
          const active = item.path === path
          const Icon = item.icon
          return (
            <Link
              key={item.path}
              to={item.path}
              title={item.label}
              aria-current={active ? 'page' : undefined}
              className={cx(
                'flex min-h-[46px] items-center gap-3.5 rounded-xl border border-transparent px-3.5 text-[15px] font-medium transition',
                active ? 'nav-active text-white' : 'text-pm-muted hover:bg-white/[0.05] hover:text-white',
                !expanded && 'justify-center px-0',
              )}
            >
              <Icon className={cx('h-5 w-5 shrink-0', active && 'text-white')} />
              {expanded && <span className="truncate">{item.label}</span>}
            </Link>
          )
        })}
      </nav>
      {expanded && (
        <div className="mt-4 space-y-3">
          <PromoCard />
          <HelpCard />
        </div>
      )}
      <button
        onClick={onToggle}
        aria-label={expanded ? 'Collapse sidebar' : 'Expand sidebar'}
        className="mt-4 flex min-h-[40px] items-center justify-center gap-2 rounded-xl border border-pm-line text-xs text-pm-muted transition hover:bg-white/[0.05] hover:text-white"
      >
        {expanded ? (
          <>
            <ChevronsLeft className="h-4 w-4" /> Collapse
          </>
        ) : (
          <ChevronsRight className="h-4 w-4" />
        )}
      </button>
    </aside>
  )
}

/** Bottom navigation for phones: four primary destinations plus a sheet with everything else. */
export function MobileNav({ moreOpen, setMoreOpen }: { moreOpen: boolean; setMoreOpen: (v: boolean) => void }) {
  const path = usePath()
  const primary = NAV.filter((n) => ['/', '/transfers', '/links', '/escrow'].includes(n.path))
  const moreActive = !primary.some((n) => n.path === path)
  return (
    <>
      {moreOpen && (
        <div className="fixed inset-0 z-40 md:hidden" role="dialog" aria-modal="true" aria-label="All sections">
          <button className="absolute inset-0 bg-black/60" aria-label="Close menu" onClick={() => setMoreOpen(false)} />
          <div className="absolute inset-x-0 bottom-0 max-h-[80dvh] overflow-y-auto rounded-t-3xl border-t border-pm-line bg-pm-deep p-4 pb-24">
            <div className="mb-3 flex items-center justify-between">
              <Logo compact />
              <button onClick={() => setMoreOpen(false)} aria-label="Close" className="flex h-11 w-11 items-center justify-center rounded-xl text-pm-muted hover:bg-white/5">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {NAV.map((item) => {
                const Icon = item.icon
                const active = item.path === path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMoreOpen(false)}
                    className={cx(
                      'flex min-h-[76px] flex-col items-center justify-center gap-1.5 rounded-2xl border text-center text-[11px] font-medium',
                      active ? 'nav-active text-white' : 'border-pm-line bg-white/[0.03] text-pm-muted',
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {item.short}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      )}
      <nav
        className="fixed inset-x-0 bottom-0 z-50 flex border-t border-pm-line bg-pm-bg/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden"
        aria-label="Primary"
      >
        {primary.map((item) => {
          const Icon = item.icon
          const active = item.path === path && !moreOpen
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMoreOpen(false)}
              className={cx('flex min-h-[56px] flex-1 flex-col items-center justify-center gap-1 text-[10px] font-medium', active ? 'text-violet-200' : 'text-pm-muted')}
            >
              <Icon className="h-5 w-5" />
              {item.short}
            </Link>
          )
        })}
        <button
          onClick={() => setMoreOpen(!moreOpen)}
          className={cx('flex min-h-[56px] flex-1 flex-col items-center justify-center gap-1 text-[10px] font-medium', moreOpen || moreActive ? 'text-violet-200' : 'text-pm-muted')}
        >
          <span className="flex h-5 w-5 items-center justify-center text-lg leading-none">&#8943;</span>
          More
        </button>
      </nav>
    </>
  )
}
