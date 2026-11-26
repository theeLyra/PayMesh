/**
 * wagmi configuration
 * Built with Arc Studio — https://studio.arc.io
 */

import { createConfig, fallback, http } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { arc, arcTestnet } from 'viem/chains'
import { injected } from 'wagmi/connectors'
import { registerChain } from './tracing'
import { requireChain } from './onchain-facts'
import { IS_MAINNET } from './paymesh/network'
import { RPC_URLS } from './paymesh/rpc'

// Pre-register chain RPC URLs so trace events show correct chain names immediately
// The app talks to one Arc network, chosen at build time (testnet unless VITE_NETWORK=mainnet).
const arcChain = IS_MAINNET ? arc : arcTestnet
registerChain(arcChain.id, requireChain(arcChain.id).rpcUrls[0])

function arcTransport() {
  return fallback(RPC_URLS.map((url) => http(url, { retryCount: 0, timeout: 10_000 })), { rank: false, retryCount: 1, retryDelay: 400 })
}

export const config = createConfig({
  chains: [arcChain, mainnet], // mainnet needed for ENS resolution
  connectors: [injected()],
  transports: {
    // Both Arc networks get a transport so the types line up; only `arcChain` is in the chain list.
    // The active Arc network tries Circle's endpoint first, then the other public providers, so one rate limit never blanks the app.
    [arcTestnet.id]: IS_MAINNET ? http(requireChain(arcTestnet.id).rpcUrls[0]) : arcTransport(),
    [arc.id]: IS_MAINNET ? arcTransport() : http(requireChain(arc.id).rpcUrls[0]),
    [mainnet.id]: http(), // ENS resolution uses mainnet
  },
})
