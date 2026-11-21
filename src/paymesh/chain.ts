import type { Address } from 'viem'
import { ARC_CHAIN_ID } from './network'
import { buildAddressExplorerUrl, buildTxExplorerUrl, getUsdc, requireChain, USDC_DECIMALS } from '@/onchain-facts'

/**
 * The single network PayMesh talks to, chosen by VITE_NETWORK (testnet by default).
 * This file avoids runtime imports from viem so the landing page and docs stay small.
 */
export const CHAIN_ID = ARC_CHAIN_ID
export const CHAIN_FACTS = requireChain(CHAIN_ID)

const usdcFact = getUsdc(CHAIN_ID)
if (!usdcFact) throw new Error(`USDC is not registered for chain ${CHAIN_ID}`)

export const USDC_ADDRESS = usdcFact.address as Address
export const USDC_DECIMAL_COUNT: number = usdcFact.decimals ?? USDC_DECIMALS

export const RPC_URL: string = CHAIN_FACTS.rpcUrls[0]

export const txUrl = (hash: string) => buildTxExplorerUrl(CHAIN_ID, hash)
export const addressUrl = (address: string) => buildAddressExplorerUrl(CHAIN_ID, address)
