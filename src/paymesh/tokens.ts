import type { Address } from 'viem'
import { USDC_ADDRESS } from './chain'
import { IS_MAINNET } from './network'

export interface WalletToken {
  symbol: string
  name: string
  address: Address
  decimals: number
  /** Decimals shown to the user. The token itself may carry more. */
  shown: number
}

/**
 * Tokens the dashboard lists when the connected wallet holds them. Addresses come from the Arc
 * contract-address reference (docs.arc.io), one set per network.
 */
export const WALLET_TOKENS: WalletToken[] = [
  { symbol: 'USDC', name: 'USD Coin', address: USDC_ADDRESS, decimals: 6, shown: 2 },
  { symbol: 'EURC', name: 'Euro Coin', address: IS_MAINNET ? '0xbEf5f6d51CB62b58e6A8f77868681825C6fe21c1' : '0x89B50855Aa3bE2F677cD6303Cec089B5F319D72a', decimals: 6, shown: 2 },
  { symbol: 'cirBTC', name: 'Circle Wrapped Bitcoin', address: IS_MAINNET ? '0x171A4217b86A807A64eB94757Db6849fb4bDbAA0' : '0xf0C4a4CE82A5746AbAAd9425360Ab04fbBA432BF', decimals: 8, shown: 6 },
]

/** Formats a raw token amount with grouping, trimming trailing zeros past the first two decimals. */
export function fmtToken(raw: bigint, token: WalletToken): string {
  const base = 10n ** BigInt(token.decimals)
  const whole = raw / base
  let frac = (raw % base).toString().padStart(token.decimals, '0').slice(0, token.shown)
  frac = frac.replace(/0+$/, '').padEnd(Math.min(2, token.shown), '0')
  return `${whole.toLocaleString('en-US')}${frac ? `.${frac}` : ''}`
}
