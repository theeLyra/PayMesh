import { BookOpen, ChevronsLeft, ChevronsRight, Ellipsis, X } from 'lucide-react'
import { NAV, Link, usePath } from '@/paymesh/router'
import { Logo } from './Logo'
import { ThemeToggle } from './ThemeToggle'
import { cx } from './ui'

interface SidebarProps {
  expanded: boolean
  onToggle: () => void
}

/** Persistent rail on tablet and desktop. Expanded shows labels; collapsed shows icons only. */
export function Sidebar({ expanded, onToggle }: SidebarProps) {
  const path = usePath()
  return (
    <aside
      className={cx(
        'sticky top-0 z-30 hidden h-dvh shrink-0 flex-col border-r border-pm-line bg-pm-panel py-5 md:flex',
        expanded ? 'w-[232px] px-3' : 'w-[68px] px-2',
      )}
    >
      <div className={cx('mb-6 flex items-center', expanded ? 'px-2' : 'justify-center')}>
        <Link to="/" aria-label="PayMesh home" className="flex min-h-[44px] items-center">
          <Logo compact={!expanded} />
        </Link>
      </div>
      <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto" aria-label="Primary">
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
                'flex min-h-[42px] items-center gap-3 rounded-lg px-3 text-sm font-medium',
                active ? 'nav-active' : 'text-pm-muted hover:bg-pm-text/5 hover:text-pm-text',
                !expanded && 'justify-center px-0',
              )}
            >
              <Icon className="h-[18px] w-[18px] shrink-0" />
              {expanded && <span className="truncate">{item.label}</span>}
            </Link>
          )
        })}
      </nav>
      <div className="mt-3 space-y-2 border-t border-pm-line pt-3">
        <Link
          to="/docs"
          title="PayMesh documentation"
          className={cx('flex min-h-[42px] items-center gap-3 rounded-lg px-3 text-sm text-pm-muted hover:bg-pm-text/5 hover:text-pm-text', !expanded && 'justify-center px-0')}
        >
          <BookOpen className="h-[18px] w-[18px] shrink-0" />
          {expanded && 'Documentation'}
        </Link>
        <ThemeToggle withLabel={expanded} className={cx('w-full', expanded && 'justify-start px-3')} />
        <button
          onClick={onToggle}
          aria-label={expanded ? 'Collapse sidebar' : 'Expand sidebar'}
          className="flex min-h-[40px] w-full items-center justify-center gap-2 rounded-lg text-xs text-pm-muted hover:bg-pm-text/5 hover:text-pm-text"
        >
          {expanded ? (
            <>
              <ChevronsLeft className="h-4 w-4" /> Collapse
            </>
          ) : (
            <ChevronsRight className="h-4 w-4" />
          )}
        </button>
      </div>
    </aside>
  )
}

/** Bottom navigation for phones: Network, Swap, Cross-chain and Escrow plus a sheet with everything else. */
export function MobileNav({ moreOpen, setMoreOpen }: { moreOpen: boolean; setMoreOpen: (v: boolean) => void }) {
  const path = usePath()
  const order = ['/dashboard', '/swap', '/bridge', '/escrow']
  const primary = order.map((p) => NAV.find((n) => n.path === p)).filter((n): n is (typeof NAV)[number] => Boolean(n))
  const moreActive = !primary.some((n) => n.path === path)
  return (
    <>
      {moreOpen && (
        <div className="fixed inset-0 z-40 md:hidden" role="dialog" aria-modal="true" aria-label="All sections">
          <button className="absolute inset-0 bg-black/50" aria-label="Close menu" onClick={() => setMoreOpen(false)} />
          <div className="absolute inset-x-0 bottom-0 max-h-[80dvh] overflow-y-auto rounded-t-2xl border-t border-pm-line bg-pm-panel p-4 pb-24">
            <div className="mb-3 flex items-center justify-between">
              <Logo />
              <button onClick={() => setMoreOpen(false)} aria-label="Close" className="flex h-11 w-11 items-center justify-center rounded-lg text-pm-muted hover:bg-pm-text/5">
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
                      'flex min-h-[72px] flex-col items-center justify-center gap-1.5 rounded-xl border text-center text-[11px] font-medium',
                      active ? 'border-pm-violet bg-pm-violet/10 text-pm-text' : 'border-pm-line bg-pm-bg text-pm-muted',
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {item.short}
                  </Link>
                )
              })}
            </div>
            <ThemeToggle withLabel className="mt-3 w-full" />
          </div>
        </div>
      )}
      <nav
        className="fixed inset-x-2 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 flex gap-0.5 rounded-2xl border border-pm-line bg-pm-panel p-1 shadow-lg md:hidden"
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
              aria-current={active ? 'page' : undefined}
              className={cx('flex min-h-[56px] min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-xl text-[11px] font-semibold', active ? 'bg-pm-violet/10 text-pm-violet' : 'text-pm-muted hover:bg-pm-text/5')}
            >
              <Icon className="h-[22px] w-[22px]" strokeWidth={active ? 2.4 : 1.9} />
              <span className="whitespace-nowrap tracking-tight">{item.short}</span>
            </Link>
          )
        })}
        <button
          onClick={() => setMoreOpen(!moreOpen)}
          aria-expanded={moreOpen}
          className={cx('flex min-h-[56px] min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-xl text-[11px] font-semibold', moreOpen || moreActive ? 'bg-pm-violet/10 text-pm-violet' : 'text-pm-muted hover:bg-pm-text/5')}
        >
          <Ellipsis className="h-[22px] w-[22px]" strokeWidth={moreOpen || moreActive ? 2.4 : 1.9} />
          More
        </button>
      </nav>
    </>
  )
}
