import { useMemo, useSyncExternalStore } from 'react'
import type { Hex } from 'viem'
import { START_BLOCK } from './contracts'

/**
 * Transactions submitted from this browser through PayMesh. Used only for
 * measured settlement time and success rate, never for payment volume.
 */
export interface TxRecord {
  hash: Hex
  label: string
  /** ms epoch when the signed transaction was broadcast. */
  submittedAt: number
  confirmedAt?: number
  status: 'pending' | 'success' | 'reverted'
}

const MAX_RECORDS = 200
const listeners = new Set<() => void>()
// Tied to the start block so a history reset also clears this browser's timing and success-rate records.
const keyFor = (address: string) => `paymesh:txlog:v1:${START_BLOCK ?? 0}:${address.toLowerCase()}`

function read(address: string): TxRecord[] {
  try {
    const raw = localStorage.getItem(keyFor(address))
    return raw ? (JSON.parse(raw) as TxRecord[]) : []
  } catch {
    return []
  }
}

function write(address: string, records: TxRecord[]) {
  try {
    localStorage.setItem(keyFor(address), JSON.stringify(records.slice(0, MAX_RECORDS)))
  } catch {
    /* storage unavailable */
  }
  listeners.forEach((l) => l())
}

export function recordSubmit(address: string, record: Pick<TxRecord, 'hash' | 'label' | 'submittedAt'>) {
  write(address, [{ ...record, status: 'pending' }, ...read(address)])
}

export function recordResult(address: string, hash: Hex, success: boolean, confirmedAt: number) {
  write(
    address,
    read(address).map((r) => (r.hash === hash ? { ...r, status: success ? 'success' : 'reverted', confirmedAt } : r)),
  )
}

function subscribe(cb: () => void) {
  listeners.add(cb)
  window.addEventListener('storage', cb)
  return () => {
    listeners.delete(cb)
    window.removeEventListener('storage', cb)
  }
}

export function useTxLog(address: string | undefined): TxRecord[] {
  const snapshot = useSyncExternalStore(subscribe, () => (address ? (localStorage.getItem(keyFor(address)) ?? '') : ''))
  return useMemo(() => {
    if (!snapshot) return []
    try {
      return JSON.parse(snapshot) as TxRecord[]
    } catch {
      return []
    }
  }, [snapshot])
}
