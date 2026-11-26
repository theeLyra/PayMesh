import { prefetchRoute } from './prefetch'
import { useSyncExternalStore, type AnchorHTMLAttributes, type ReactNode } from 'react'
import {
  Activity,
  ArrowLeftRight,
  BarChart3,
  CalendarClock,
  Code2,
  Globe,
  Link2,
  Send,
  Settings,
  ShieldCheck,
  Split,
  Users,
  Layers,
  type LucideIcon,
  Landmark,
  Waypoints,
} from 'lucide-react'

export interface NavItem {
  path: string
  label: string
  short: string
  icon: LucideIcon
}

export const NAV: NavItem[] = [
  { path: '/dashboard', label: 'Payment Network', short: 'Network', icon: Globe },
  { path: '/transfers', label: 'Transfers', short: 'Transfers', icon: Send },
  { path: '/swap', label: 'Swap', short: 'Swap', icon: ArrowLeftRight },
  { path: '/bridge', label: 'Cross-chain', short: 'Cross-chain', icon: Waypoints },
  { path: '/gateway', label: 'Gateway', short: 'Gateway', icon: Landmark },
  { path: '/recipients', label: 'Recipients', short: 'Recipients', icon: Users },
  { path: '/links', label: 'Payment Links', short: 'Links', icon: Link2 },
  { path: '/batch', label: 'Batch Payments', short: 'Batch', icon: Layers },
  { path: '/scheduled', label: 'Scheduled Payments', short: 'Scheduled', icon: CalendarClock },
  { path: '/split', label: 'Split Payments', short: 'Split', icon: Split },
  { path: '/escrow', label: 'Escrow', short: 'Escrow', icon: ShieldCheck },
  { path: '/analytics', label: 'Analytics', short: 'Analytics', icon: BarChart3 },
  { path: '/developers', label: 'Developer API', short: 'Developers', icon: Code2 },
  { path: '/activity', label: 'Activity', short: 'Activity', icon: Activity },
  { path: '/settings', label: 'Settings', short: 'Settings', icon: Settings },
]

const NAV_EVENT = 'paymesh:navigate'

function subscribe(cb: () => void) {
  window.addEventListener('popstate', cb)
  window.addEventListener(NAV_EVENT, cb)
  return () => {
    window.removeEventListener('popstate', cb)
    window.removeEventListener(NAV_EVENT, cb)
  }
}

export function usePath(): string {
  return useSyncExternalStore(subscribe, () => window.location.pathname.replace(/\/+$/, '') || '/')
}

export function useSearch(): URLSearchParams {
  const search = useSyncExternalStore(subscribe, () => window.location.search)
  return new URLSearchParams(search)
}

/** Landing page and documentation render without any wallet code. */
export const isPublicPath = (path: string) => path === '/' || path === '/docs' || path.startsWith('/docs/')

export function navigate(to: string) {
  if (to === window.location.pathname + window.location.search + window.location.hash) return
  const depth = (window.history.state as { pm?: number } | null)?.pm ?? 0
  window.history.pushState({ pm: depth + 1 }, '', to)
  window.dispatchEvent(new Event(NAV_EVENT))
  const hash = new URL(to, window.location.href).hash.slice(1)
  if (hash) requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView())
  else window.scrollTo({ top: 0 })
}

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string
  children: ReactNode
}

export function Link({ to, children, onClick, ...rest }: LinkProps) {
  return (
    <a
      {...rest}
      href={to}
      onPointerEnter={() => prefetchRoute(to)}
      onTouchStart={() => prefetchRoute(to)}
      onFocus={() => prefetchRoute(to)}
      onClick={(e) => {
        onClick?.(e)
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
        e.preventDefault()
        navigate(to)
      }}
    >
      {children}
    </a>
  )
}
