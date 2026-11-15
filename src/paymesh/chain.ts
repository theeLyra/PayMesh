import { getAddress, type Address } from 'viem'
import { arcTestnet } from 'viem/chains'
import { buildAddressExplorerUrl, buildTxExplorerUrl, getUsdc, requireChain, USDC_DECIMALS } from '@/onchain-facts'

/** The single network PayMesh talks to. Change here to retarget the whole app. */
export const CHAIN = arcTestnet
export const CHAIN_ID: number = arcTestnet.id
export const CHAIN_FACTS = requireChain(CHAIN_ID)

const usdcFact = getUsdc(CHAIN_ID)
if (!usdcFact) throw new Error(`USDC is not registered for chain ${CHAIN_ID}`)

export const USDC_ADDRESS: Address = getAddress(usdcFact.address)
export const USDC_DECIMAL_COUNT: number = usdcFact.decimals ?? USDC_DECIMALS

export const RPC_URL: string = CHAIN_FACTS.rpcUrls[0] ?? arcTestnet.rpcUrls.default.http[0]

export const txUrl = (hash: string) => buildTxExplorerUrl(CHAIN_ID, hash)
export const addressUrl = (address: string) => buildAddressExplorerUrl(CHAIN_ID, address)
