import { useMemo, useSyncExternalStore } from 'react'
import { CHAIN_ID } from './chain'

export interface BalanceSample {
  /** ms since epoch */
  t: number
  /** USDC balance */
  v: number
}

const MAX_SAMPLES = 240
const MAX_AGE = 7 * 24 * 60 * 60 * 1000
const MIN_GAP = 15 * 60 * 1000

const listeners = new Set<() => void>()
const keyOf = (address: string) => `paymesh:balhist:v1:${CHAIN_ID}:${address.toLowerCase()}`
const emit = () => listeners.forEach((l) => l())

function parse(raw: string): BalanceSample[] {
  try {
    const list = JSON.parse(raw || '[]') as BalanceSample[]
    return Array.isArray(list) ? list : []
  } catch {
    return []
  }
}

/**
 * Remembers real balance readings in this browser, so the Overview can chart how your balance actually moved.
 * It records when the balance changes, or every 15 minutes, and keeps a week.
 */
export function recordBalance(address: string, value: number) {
  const key = keyOf(address)
  const now = Date.now()
  const list = parse(localStorage.getItem(key) ?? '').filter((s) => now - s.t < MAX_AGE)
  const last = list[list.length - 1]
  if (last && last.v === value && now - last.t < MIN_GAP) return
  list.push({ t: now, v: value })
  localStorage.setItem(key, JSON.stringify(list.slice(-MAX_SAMPLES)))
  emit()
}

function subscribe(cb: () => void) {
  listeners.add(cb)
  window.addEventListener('storage', cb)
  return () => {
    listeners.delete(cb)
    window.removeEventListener('storage', cb)
  }
}

/** The recorded balance readings, oldest first, plus the move over the last 24 hours when there is enough history. */
export function useBalanceHistory(address: string | undefined) {
  const raw = useSyncExternalStore(subscribe, () => (address ? (localStorage.getItem(keyOf(address)) ?? '') : ''))
  return useMemo(() => {
    const samples = parse(raw)
    const latest = samples[samples.length - 1]
    const dayAgo = (latest?.t ?? 0) - 24 * 60 * 60 * 1000
    const window = samples.filter((s) => s.t >= dayAgo)
    const first = window[0]
    const hasMove = window.length >= 2 && first.t !== latest.t
    const change = hasMove ? latest.v - first.v : undefined
    const pct = hasMove && first.v > 0 ? ((latest.v - first.v) / first.v) * 100 : hasMove && latest.v === first.v ? 0 : undefined
    return { samples: window, change, pct }
  }, [raw])
}
