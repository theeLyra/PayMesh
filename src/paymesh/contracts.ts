import type { Address } from 'viem'
import { IS_MAINNET } from './network'

/** The single PayMesh contract. Comes from .env (public VITE_ value). Undefined when missing or malformed. */
function readAddress(raw: unknown): Address | undefined {
  return typeof raw === 'string' && /^0x[0-9a-fA-F]{40}$/.test(raw) ? (raw as Address) : undefined
}

// Each network has its own contract. A testnet address is never used on mainnet, or the other way round.
export const PAYMESH: Address | undefined = readAddress(IS_MAINNET ? import.meta.env.VITE_PAYMESH_ADDRESS_MAINNET : import.meta.env.VITE_PAYMESH_ADDRESS)

/** Block the PayMesh contract was deployed at. History is never scanned from before it. */
const rawStart = Number(IS_MAINNET ? import.meta.env.VITE_PAYMESH_START_BLOCK_MAINNET : import.meta.env.VITE_PAYMESH_START_BLOCK)
export const START_BLOCK: number | undefined = Number.isFinite(rawStart) && rawStart > 0 ? rawStart : undefined

export const DEPLOYED_ADDRESSES: Address[] = PAYMESH ? [PAYMESH] : []
export const ANY_DEPLOYED = PAYMESH !== undefined

export const SOURCE_LABELS = ['Direct', 'Payment link', 'Batch', 'Split', 'Escrow release', 'Scheduled'] as const

export const CATEGORIES = ['General', 'Payroll', 'Invoice', 'Rent', 'Subscription', 'Services', 'Donation', 'Other'] as const
