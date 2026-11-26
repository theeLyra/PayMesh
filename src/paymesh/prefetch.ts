import type { ComponentType } from 'react'
import { prefetchCircleKits } from './circleKit'

/** Every app page, loaded on demand. Shared by the router and the prefetcher so each page file is requested once. */
export const pageLoaders: Record<string, () => Promise<{ default: ComponentType }>> = {
  '/dashboard': () => import('@/pages/Dashboard'),
  '/transfers': () => import('@/pages/Transfers'),
  '/swap': () => import('@/pages/SwapPage'),
  '/bridge': () => import('@/pages/BridgePage'),
  '/gateway': () => import('@/pages/GatewayPage'),
  '/recipients': () => import('@/pages/Recipients'),
  '/links': () => import('@/pages/PaymentLinks'),
  '/batch': () => import('@/pages/BatchPayments'),
  '/scheduled': () => import('@/pages/ScheduledPayments'),
  '/split': () => import('@/pages/SplitPayments'),
  '/escrow': () => import('@/pages/EscrowPage'),
  '/analytics': () => import('@/pages/Analytics'),
  '/developers': () => import('@/pages/Developers'),
  '/activity': () => import('@/pages/ActivityPage'),
  '/settings': () => import('@/pages/SettingsPage'),
}

const KITS: Record<string, 'app' | 'unified'> = { '/swap': 'app', '/bridge': 'app', '/gateway': 'unified' }
const done = new Set<string>()

/** Warm a page (and the Circle SDK it uses) the moment someone points at or touches a link to it. */
export function prefetchRoute(to: string) {
  const path = to.split(/[?#]/)[0]
  if (done.has(path)) return
  const load = pageLoaders[path]
  if (!load) return
  done.add(path)
  void load().catch(() => done.delete(path))
  const kit = KITS[path]
  if (kit) prefetchCircleKits(kit)
}
