import { ArrowLeft } from 'lucide-react'
import { cx } from '@/lib/cx'
import { navigate } from '@/paymesh/router'

/**
 * Goes back one page inside PayMesh. When this page was opened directly (nothing to go back to),
 * it goes to `fallback` instead, so it never sends someone out of the app.
 */
export function BackButton({ fallback, label = 'Back', className, iconOnlyOnMobile = false }: { fallback: string; label?: string; className?: string; iconOnlyOnMobile?: boolean }) {
  const go = () => {
    const depth = (window.history.state as { pm?: number } | null)?.pm ?? 0
    if (depth > 0) window.history.back()
    else navigate(fallback)
  }
  return (
    <button
      onClick={go}
      aria-label={label}
      className={cx('inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border border-pm-line bg-pm-panel px-3 text-sm font-medium text-pm-text hover:bg-pm-text/5', className)}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className={iconOnlyOnMobile ? 'hidden sm:inline' : undefined}>{label}</span>
    </button>
  )
}
