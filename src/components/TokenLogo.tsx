import { TokenBTC, TokenEURC, TokenUSDC } from '@web3icons/react'

/**
 * Original brand logos for the three tokens PayMesh swaps. cirBTC is Circle's wrapped Bitcoin and
 * uses the Bitcoin mark, which is the logo the token itself is built on.
 */
export function TokenLogo({ symbol, size = 28 }: { symbol: string; size?: number }) {
  if (symbol === 'EURC') return <TokenEURC variant="branded" size={size} className="shrink-0" />
  if (symbol === 'cirBTC' || symbol === 'CIRBTC') return <TokenBTC variant="branded" size={size} className="shrink-0" />
  return <TokenUSDC variant="branded" size={size} className="shrink-0" />
}
