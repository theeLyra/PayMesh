import { useSyncExternalStore, type AnchorHTMLAttributes, type ReactNode } from 'react'
import {
  Activity,
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
} from 'lucide-react'

export interface NavItem {
  path: string
  label: string
  short: string
  icon: LucideIcon
}

export const NAV: NavItem[] = [
  { path: '/', label: 'Payment Network', short: 'Network', icon: Globe },
  { path: '/transfers', label: 'Transfers', short: 'Transfers', icon: Send },
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

export function navigate(to: string) {
  if (to === window.location.pathname + window.location.search) return
  window.history.pushState({}, '', to)
  window.dispatchEvent(new Event(NAV_EVENT))
  window.scrollTo({ top: 0 })
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
