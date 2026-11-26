import { Suspense, lazy, useEffect, useState, type ComponentType, type LazyExoticComponent } from 'react'
import { ActivityProvider } from '@/paymesh/ActivityProvider'
import { prefetchCircleKits } from '@/paymesh/circleKit'
import { pageLoaders, prefetchRoute } from '@/paymesh/prefetch'
import { usePath } from '@/paymesh/router'
import { Footer } from '@/components/Footer'
import { MobileNav, Sidebar } from '@/components/Sidebar'
import { TopBar } from '@/components/TopBar'
import { Skeleton } from '@/components/ui'

const pages = Object.fromEntries(Object.entries(pageLoaders).map(([path, load]) => [path, lazy(load)])) as Record<string, LazyExoticComponent<ComponentType>>

/** Warm every page file once the first screen is idle, and Circle's SDKs too on a fast connection, so navigation feels instant. */
function usePrefetchPages() {
  useEffect(() => {
    const warm = () => {
      Object.keys(pageLoaders).forEach((path) => prefetchRoute(path))
      const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection
      if (!conn?.saveData && (!conn?.effectiveType || conn.effectiveType === '4g')) window.setTimeout(() => prefetchCircleKits('both'), 2500)
    }
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
        <div className="min-w-0 flex-1 px-4 pb-28 pt-0 sm:px-6 md:pb-4 md:pt-5 lg:px-8">
          <div className="mx-auto max-w-[1280px]">
          <TopBar />
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
