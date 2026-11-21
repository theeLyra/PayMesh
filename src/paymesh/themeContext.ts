import { createContext, useContext } from 'react'

export type ThemeChoice = 'light' | 'dark' | 'system'

export interface ThemeState {
  choice: ThemeChoice
  /** The theme actually shown right now. */
  resolved: 'light' | 'dark'
  setChoice: (choice: ThemeChoice) => void
  toggle: () => void
}

export const ThemeContext = createContext<ThemeState | null>(null)

export function useTheme(): ThemeState {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
  return ctx
}
