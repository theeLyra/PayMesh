import { Component, type ErrorInfo, type ReactNode } from 'react'

const RELOAD_FLAG = 'paymesh:reloaded-after-error'

/** True for the error a browser throws when a lazy page file from an older deploy no longer exists. */
export function isChunkError(error: unknown): boolean {
  const text = `${(error as Error | undefined)?.name ?? ''} ${(error as Error | undefined)?.message ?? ''}`
  return /ChunkLoadError|Loading chunk|dynamically imported module|Importing a module script failed|error loading dynamically/i.test(text)
}

interface State {
  error?: Error
}

/**
 * Catches a crash in any page and shows a way back instead of a blank screen. If the crash is a stale page file
 * after a new release, it reloads once to pick up the new version.
 */
export class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = {}

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('PayMesh page error', error, info.componentStack)
    if (isChunkError(error) && !sessionStorage.getItem(RELOAD_FLAG)) {
      sessionStorage.setItem(RELOAD_FLAG, '1')
      window.location.reload()
    }
  }

  render() {
    if (!this.state.error) return this.props.children
    return (
      <div className="mx-auto flex min-h-dvh max-w-md flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="text-2xl font-bold text-pm-text">Something went wrong</h1>
        <p className="text-sm text-pm-muted">This page hit an unexpected problem. Your funds are not affected. Reload to try again.</p>
        <div className="flex gap-3">
          <button className="btn-primary inline-flex min-h-[44px] items-center rounded-xl px-5 text-sm font-semibold" onClick={() => window.location.reload()}>
            Reload
          </button>
          <a href="/dashboard" className="inline-flex min-h-[44px] items-center rounded-xl border border-pm-line px-5 text-sm font-semibold text-pm-text hover:bg-pm-text/5">
            Go to Overview
          </a>
        </div>
      </div>
    )
  }
}
