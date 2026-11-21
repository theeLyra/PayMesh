import { useCallback, useEffect, useMemo, useState, useSyncExternalStore, type ReactNode } from 'react'
import { ThemeContext, type ThemeChoice, type ThemeState } from './themeContext'

const KEY = 'paymesh:theme'
const query = () => window.matchMedia('(prefers-color-scheme: dark)')

function subscribeSystem(cb: () => void) {
  const mq = query()
  mq.addEventListener('change', cb)
  return () => mq.removeEventListener('change', cb)
}

function readChoice(): ThemeChoice {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'light' || v === 'dark' || v === 'system' ? v : 'system'
  } catch {
    return 'system'
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [choice, setChoiceState] = useState<ThemeChoice>(readChoice)
  const systemDark = useSyncExternalStore(subscribeSystem, () => query().matches)
  const resolved: 'light' | 'dark' = choice === 'system' ? (systemDark ? 'dark' : 'light') : choice

  useEffect(() => {
    document.documentElement.classList.toggle('dark', resolved === 'dark')
  }, [resolved])

  const setChoice = useCallback((next: ThemeChoice) => {
    setChoiceState(next)
    try {
      localStorage.setItem(KEY, next)
    } catch {
      /* storage unavailable: the choice lasts for this visit */
    }
  }, [])

  const value = useMemo<ThemeState>(
    () => ({ choice, resolved, setChoice, toggle: () => setChoice(resolved === 'dark' ? 'light' : 'dark') }),
    [choice, resolved, setChoice],
  )
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
