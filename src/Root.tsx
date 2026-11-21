import { Suspense, lazy } from 'react'
import Landing from './pages/Landing'
import { isPublicPath, usePath } from './paymesh/router'

const Docs = lazy(() => import('./pages/Docs'))
const AppRoot = lazy(() => import('./AppRoot'))

/** Picks the surface by URL: landing at /, documentation at /docs, the wallet app everywhere else. */
export default function Root() {
  const path = usePath()
  if (path === '/') return <Landing />
  if (isPublicPath(path)) {
    return (
      <Suspense fallback={<div className="min-h-dvh" />}>
        <Docs />
      </Suspense>
    )
  }
  return (
    <Suspense fallback={<div className="min-h-dvh" />}>
      <AppRoot />
    </Suspense>
  )
}
