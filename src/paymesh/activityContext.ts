import { createContext, useContext } from 'react'
import type { Address, Hex } from 'viem'

/** One verified USDC settlement, read from a Settled log emitted by the PayMesh contract. */
export interface Settlement {
  id: string
  txHash: Hex
  blockNumber: number
  logIndex: number
  contract: Address
  from: Address
  to: Address
  amount: bigint
  category: Hex
  source: number
  ref: bigint
  /** Block timestamp in seconds. Undefined until the block has been fetched. */
  timestamp?: number
}

export interface IndexProgress {
  from: number
  current: number
  head: number
}

export interface ActivityState {
  deployed: boolean
  settlements: Settlement[]
  status: 'idle' | 'indexing' | 'ready' | 'error'
  error?: string
  head?: number
  progress?: IndexProgress
  /** First block of the window that has been indexed. */
  windowStart?: number
  /** Measured average block interval over the last blocks, in seconds. */
  blockTimeSec?: number
  /** True when some settlements still lack a block timestamp, so time-windowed totals may be partial. */
  timesPartial: boolean
  updatedAt?: number
  refresh: () => void
}

export const ActivityContext = createContext<ActivityState | null>(null)

export function useActivity(): ActivityState {
  const ctx = useContext(ActivityContext)
  if (!ctx) throw new Error('useActivity must be used inside ActivityProvider')
  return ctx
}
