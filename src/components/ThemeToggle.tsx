import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/paymesh/themeContext'
import { cx } from '@/lib/cx'

/** Switches between the light and dark theme. The choice is remembered on this device. */
export function ThemeToggle({ className, withLabel = false }: { className?: string; withLabel?: boolean }) {
  const { resolved, toggle } = useTheme()
  const dark = resolved === 'dark'
  return (
    <button
      onClick={toggle}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={cx('flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-lg border border-pm-line bg-pm-panel text-pm-text hover:bg-pm-text/5', className)}
    >
      {dark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
      {withLabel && <span className="text-sm font-medium">{dark ? 'Light theme' : 'Dark theme'}</span>}
    </button>
  )
}
