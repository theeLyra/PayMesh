/**
 * Which Arc network the app talks to. Testnet is the default.
 * Set `VITE_NETWORK=mainnet` at build time to point the whole app at Arc mainnet, where transactions move real funds.
 * This file has no runtime imports so the landing page and docs can use it without loading wallet code.
 */
export type NetworkName = 'testnet' | 'mainnet'

export const NETWORK: NetworkName = import.meta.env.VITE_NETWORK === 'mainnet' ? 'mainnet' : 'testnet'
export const IS_MAINNET = NETWORK === 'mainnet'

export const ARC_CHAIN_ID = IS_MAINNET ? 5042 : 5042002

/** Chain name the Circle swap kit uses for this network. */
export const SWAP_CHAIN = IS_MAINNET ? 'Arc' : 'Arc_Testnet'
