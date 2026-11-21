/**
 * wagmi configuration
 * Built with Arc Studio — https://studio.arc.io
 */

import { http, createConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { arc, arcTestnet } from 'viem/chains'
import { injected } from 'wagmi/connectors'
import { registerChain } from './tracing'
import { requireChain } from './onchain-facts'
import { IS_MAINNET } from './paymesh/network'

// Pre-register chain RPC URLs so trace events show correct chain names immediately
// The app talks to one Arc network, chosen at build time (testnet unless VITE_NETWORK=mainnet).
const arcChain = IS_MAINNET ? arc : arcTestnet
registerChain(arcChain.id, requireChain(arcChain.id).rpcUrls[0])

export const config = createConfig({
  chains: [arcChain, mainnet], // mainnet needed for ENS resolution
  connectors: [injected()],
  transports: {
    // Both Arc networks get a transport so the types line up; only `arcChain` is in the chain list.
    [arcTestnet.id]: http(requireChain(arcTestnet.id).rpcUrls[0], { retryCount: 1, retryDelay: 700 }),
    [arc.id]: http(requireChain(arc.id).rpcUrls[0], { retryCount: 1, retryDelay: 700 }),
    [mainnet.id]: http(), // ENS resolution uses mainnet
  },
})
