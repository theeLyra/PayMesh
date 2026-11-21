import { Suspense, lazy, useEffect, useState, type ComponentType, type LazyExoticComponent } from 'react'
import { ActivityProvider } from '@/paymesh/ActivityProvider'
import { IS_MAINNET } from '@/paymesh/network'
import { usePath } from '@/paymesh/router'
import { Footer } from '@/components/Footer'
import { MobileNav, Sidebar } from '@/components/Sidebar'
import { TopBar } from '@/components/TopBar'
import { Skeleton } from '@/components/ui'

const loaders: Record<string, () => Promise<{ default: ComponentType }>> = {
  '/dashboard': () => import('@/pages/Dashboard'),
  '/transfers': () => import('@/pages/Transfers'),
  '/swap': () => import('@/pages/SwapPage'),
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

const pages = Object.fromEntries(Object.entries(loaders).map(([path, load]) => [path, lazy(load)])) as Record<string, LazyExoticComponent<ComponentType>>

/** Warm every page chunk once the first screen is idle so navigation feels instant. */
function usePrefetchPages() {
  useEffect(() => {
    // The swap page carries Circle's swap SDK, so it loads only when someone opens it.
    const warm = () => Object.entries(loaders).forEach(([path, load]) => path !== '/swap' && void load())
    const idle = (window as Window & { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback
    const handle = idle ? idle(warm) : window.setTimeout(warm, 1500)
    return () => {
      if (!idle) window.clearTimeout(handle)
    }
  }, [])
}

function Routes() {
  const path = usePath()
  const Page = pages[path] ?? pages['/dashboard']
  return (
    <Suspense fallback={<Skeleton className="h-[60dvh] w-full" />}>
      <Page />
    </Suspense>
  )
}

export default function App() {
  const [expanded, setExpanded] = useState(() => window.innerWidth >= 1100)
  const [moreOpen, setMoreOpen] = useState(false)
  usePrefetchPages()
  return (
    <ActivityProvider>
      <div className="flex min-h-dvh">
        <Sidebar expanded={expanded} onToggle={() => setExpanded((e) => !e)} />
        <div className="min-w-0 flex-1 px-4 pb-4 pt-0 sm:px-6 md:pt-5 lg:px-8">
          <div className="mx-auto max-w-[1280px]">
          <TopBar />
          {IS_MAINNET && (
            <div role="note" className="mb-5 rounded-xl border border-pm-warn/50 bg-pm-warn/10 px-4 py-2.5 text-sm text-pm-text">
              <strong>Arc mainnet.</strong> Transactions move real funds and cannot be undone. The contract has had an automated review, not a third-party audit.
            </div>
          )}
          <main>
            <Routes />
          </main>
          <Footer />
          </div>
        </div>
      </div>
      <MobileNav moreOpen={moreOpen} setMoreOpen={setMoreOpen} />
    </ActivityProvider>
  )
}
