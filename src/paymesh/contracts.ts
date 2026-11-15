import { isAddress, getAddress, type Address } from 'viem'

/** The single PayMesh contract. Comes from .env (public VITE_ value). Undefined when missing or malformed. */
function readAddress(raw: unknown): Address | undefined {
  if (typeof raw !== 'string' || !isAddress(raw)) return undefined
  return getAddress(raw)
}

export const PAYMESH: Address | undefined = readAddress(import.meta.env.VITE_PAYMESH_ADDRESS)

/** Block the PayMesh contract was deployed at. History is never scanned from before it. */
const rawStart = Number(import.meta.env.VITE_PAYMESH_START_BLOCK)
export const START_BLOCK: number | undefined = Number.isFinite(rawStart) && rawStart > 0 ? rawStart : undefined

export const DEPLOYED_ADDRESSES: Address[] = PAYMESH ? [PAYMESH] : []
export const ANY_DEPLOYED = PAYMESH !== undefined

export const SOURCE_LABELS = ['Direct', 'Payment link', 'Batch', 'Split', 'Escrow release', 'Scheduled'] as const

export const CATEGORIES = ['General', 'Payroll', 'Invoice', 'Rent', 'Subscription', 'Services', 'Donation', 'Other'] as const
