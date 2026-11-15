import type { Address, Hex } from 'viem'

export interface LinkData {
  creator: Address
  amount: bigint
  category: Hex
  active: boolean
  createdAt: bigint
  totalPaid: bigint
  payments: number
  title: string
}

export interface SplitData {
  creator: Address
  createdAt: bigint
  totalPaid: bigint
  name: string
  recipients: readonly Address[]
  shareBps: readonly number[]
}

export interface EscrowData {
  payer: Address
  payee: Address
  amount: bigint
  createdAt: bigint
  deadline: bigint
  status: number
  category: Hex
  description: string
}

export interface PlanData {
  payer: Address
  payee: Address
  amount: bigint
  interval: bigint
  nextPaymentAt: bigint
  paymentsMade: number
  maxPayments: number
  category: Hex
  active: boolean
}

export const ESCROW_STATUS = ['Active', 'Released', 'Refunded'] as const
