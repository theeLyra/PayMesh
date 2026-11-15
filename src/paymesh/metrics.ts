import { formatUsdc } from '@/onchain-money'
import type { Settlement } from './activityContext'

/** A settlement counts as "live" for this long after its block and gets the full light show. */
export const FRESH_SECONDS = 25
export const HOUR = 3600
export const DAY = 86400

export interface WindowTotals {
  volume: bigint
  count: number
}

/** Totals for settlements whose block timestamp falls in [startSec, endSec). Untimed settlements are skipped. */
export function totalsBetween(list: Settlement[], startSec: number, endSec: number): WindowTotals {
  let volume = 0n
  let count = 0
  for (const s of list) {
    if (s.timestamp === undefined || s.timestamp < startSec || s.timestamp >= endSec) continue
    volume += s.amount
    count += 1
  }
  return { volume, count }
}

export function bucketize(list: Settlement[], startSec: number, endSec: number, n: number): { volume: number[]; count: number[] } {
  const volume = new Array<number>(n).fill(0)
  const count = new Array<number>(n).fill(0)
  const span = (endSec - startSec) / n
  for (const s of list) {
    if (s.timestamp === undefined || s.timestamp < startSec || s.timestamp >= endSec) continue
    const i = Math.min(n - 1, Math.floor((s.timestamp - startSec) / span))
    volume[i] += Number(formatUsdc(s.amount))
    count[i] += 1
  }
  return { volume, count }
}

/** Percent change from previous to current, or undefined when there is nothing to compare with. */
export function pctChange(current: bigint | number, previous: bigint | number): number | undefined {
  const cur = Number(current)
  const prev = Number(previous)
  if (!Number.isFinite(cur) || !Number.isFinite(prev) || prev === 0) return undefined
  return ((cur - prev) / prev) * 100
}

export function uniqueWallets(list: Settlement[]): number {
  const set = new Set<string>()
  for (const s of list) {
    set.add(s.from.toLowerCase())
    set.add(s.to.toLowerCase())
  }
  return set.size
}

export function sumBy<K extends string>(list: Settlement[], key: (s: Settlement) => K): Array<{ key: K; volume: bigint; count: number }> {
  const map = new Map<K, { volume: bigint; count: number }>()
  for (const s of list) {
    const k = key(s)
    const cur = map.get(k) ?? { volume: 0n, count: 0 }
    cur.volume += s.amount
    cur.count += 1
    map.set(k, cur)
  }
  return [...map.entries()].map(([k, v]) => ({ key: k, ...v })).sort((a, b) => (a.volume < b.volume ? 1 : -1))
}

export const toNumber = (raw: bigint) => Number(formatUsdc(raw))
