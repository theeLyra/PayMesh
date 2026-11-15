import { hexToString, isAddress, stringToHex, type Hex } from 'viem'
import { formatUsdc, parseUsdc } from '@/onchain-money'
import { USDC_DECIMAL_COUNT } from './chain'

export const shortAddress = (address: string) => (address.length > 12 ? `${address.slice(0, 6)}...${address.slice(-4)}` : address)

export const encodeCategory = (label: string): Hex => stringToHex(label.trim().slice(0, 31) || 'General', { size: 32 })

export function decodeCategory(hex: Hex): string {
  try {
    const text = hexToString(hex, { size: 32 }).replace(/\0/g, '').trim()
    if (!text) return 'General'
    return text.charAt(0).toUpperCase() + text.slice(1)
  } catch {
    return 'General'
  }
}

/** Exact USDC string (ERC-20 view, 6 decimals) trimmed to a readable number of decimals. */
export function fmtUsdc(raw: bigint, minFraction = 2, maxFraction = 2): string {
  const exact = formatUsdc(raw)
  const [whole, frac = ''] = exact.split('.')
  const wholeFmt = BigInt(whole).toLocaleString('en-US')
  const trimmed = frac.slice(0, maxFraction).padEnd(minFraction, '0')
  return trimmed ? `${wholeFmt}.${trimmed}` : wholeFmt
}

/** Display-only compact number (never used for money math). */
export function fmtCompactUsdc(raw: bigint): string {
  const value = Number(formatUsdc(raw))
  if (value >= 1000) return new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 2 }).format(value)
  return value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export function timeAgo(timestampSec: number | undefined, nowMs = Date.now()): string {
  if (!timestampSec) return 'time pending'
  const diff = Math.max(0, Math.floor(nowMs / 1000 - timestampSec))
  if (diff < 5) return 'just now'
  if (diff < 60) return `${diff} sec ago`
  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`
  if (diff < 86400) return `${Math.floor(diff / 3600)} hr ago`
  return `${Math.floor(diff / 86400)} d ago`
}

export const fmtDateTime = (timestampSec: number) =>
  new Date(timestampSec * 1000).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })

export const parseAddressList = (text: string) => text.split(/[\s,;]+/).filter((s) => isAddress(s))

export const usdcUnit = 10n ** BigInt(USDC_DECIMAL_COUNT)

export function parseOnchainError(error: unknown): string {
  const e = error as { message?: string; shortMessage?: string; code?: number } | undefined
  const message = (e?.shortMessage ?? e?.message ?? '').toLowerCase()
  if (message.includes('user rejected') || message.includes('user denied') || e?.code === 4001) return 'Transaction cancelled.'
  if (message.includes('insufficient funds') || message.includes('exceeds balance')) return 'Insufficient balance for this payment or for gas.'
  if (message.includes('selfpayment')) return 'You cannot pay yourself.'
  if (message.includes('allowance')) return 'USDC allowance is too low. Approve USDC and try again.'
  if (message.includes('reverted')) return 'The contract rejected this transaction. Check the inputs and try again.'
  if (message.includes('network') || message.includes('timeout') || message.includes('fetch')) return 'Network issue. Check your connection and retry.'
  return 'Something went wrong. Please try again.'
}


/** Parses a user-typed USDC amount. Returns undefined for empty, invalid, or non-positive input. */
export function tryParseUsdc(value: string): bigint | undefined {
  if (!value.trim()) return undefined
  try {
    const raw = parseUsdc(value.trim())
    return raw > 0n ? raw : undefined
  } catch {
    return undefined
  }
}
