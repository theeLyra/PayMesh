import { Suspense, lazy, useState, type ComponentType } from 'react'
import { ActivityProvider } from '@/paymesh/ActivityProvider'
import { usePath } from '@/paymesh/router'
import { Footer } from '@/components/Footer'
import { MobileNav, Sidebar } from '@/components/Sidebar'
import { TopBar } from '@/components/TopBar'
import { Skeleton } from '@/components/ui'

const pages: Record<string, ReturnType<typeof lazy<ComponentType>>> = {
  '/': lazy(() => import('@/pages/Dashboard')),
  '/transfers': lazy(() => import('@/pages/Transfers')),
  '/recipients': lazy(() => import('@/pages/Recipients')),
  '/links': lazy(() => import('@/pages/PaymentLinks')),
  '/batch': lazy(() => import('@/pages/BatchPayments')),
  '/scheduled': lazy(() => import('@/pages/ScheduledPayments')),
  '/split': lazy(() => import('@/pages/SplitPayments')),
  '/escrow': lazy(() => import('@/pages/EscrowPage')),
  '/analytics': lazy(() => import('@/pages/Analytics')),
  '/developers': lazy(() => import('@/pages/Developers')),
  '/activity': lazy(() => import('@/pages/ActivityPage')),
  '/settings': lazy(() => import('@/pages/SettingsPage')),
}

function Routes() {
  const path = usePath()
  const Page = pages[path] ?? pages['/']
  return (
    <Suspense fallback={<Skeleton className="h-[60dvh] w-full" />}>
      <Page />
    </Suspense>
  )
}

export default function App() {
  const [expanded, setExpanded] = useState(() => window.innerWidth >= 1100)
  const [moreOpen, setMoreOpen] = useState(false)
  const path = usePath()
  return (
    <ActivityProvider>
      <div className="flex min-h-dvh">
        <Sidebar expanded={expanded} onToggle={() => setExpanded((e) => !e)} />
        <div className="min-w-0 flex-1 px-4 pb-4 pt-0 sm:px-6 md:pt-5 lg:px-8">
          <TopBar className={path === '/' ? 'dash:hidden' : undefined} />
          <main>
            <Routes />
          </main>
          <Footer />
        </div>
      </div>
      <MobileNav moreOpen={moreOpen} setMoreOpen={setMoreOpen} />
    </ActivityProvider>
  )
}
