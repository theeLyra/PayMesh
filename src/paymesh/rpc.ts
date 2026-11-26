import { RPC_URL } from './chain'
import { IS_MAINNET } from './network'

/**
 * Arc's public endpoints from docs.arc.io/arc/references/rpc-endpoints. They accept anonymous requests with open CORS.
 * The app tries the primary first and moves to the next one whenever it is rate limited or unreachable.
 */
const PROVIDERS = IS_MAINNET
  ? ['https://rpc.quicknode.mainnet.arc.io', 'https://rpc.drpc.mainnet.arc.io', 'https://rpc.blockdaemon.mainnet.arc.io']
  : ['https://rpc.quicknode.testnet.arc.io', 'https://rpc.drpc.testnet.arc.io', 'https://rpc.blockdaemon.testnet.arc.io']

export const RPC_URLS: string[] = [RPC_URL, ...PROVIDERS.filter((u) => u !== RPC_URL)]
