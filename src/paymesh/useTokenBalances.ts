import { erc20Abi } from 'viem'
import { useAccount, useReadContracts } from 'wagmi'
import { CHAIN_ID } from './chain'
import { WALLET_TOKENS, type WalletToken } from './tokens'

export interface TokenBalance {
  token: WalletToken
  /** undefined when the read failed */
  raw: bigint | undefined
}

/** Reads the connected wallet's balance of every listed token in one batched call. */
export function useTokenBalances() {
  const { address } = useAccount()
  const query = useReadContracts({
    contracts: WALLET_TOKENS.map((t) => ({ address: t.address, abi: erc20Abi, functionName: 'balanceOf' as const, args: [address!] as const, chainId: CHAIN_ID })),
    query: { enabled: Boolean(address), refetchInterval: 8000 },
  })
  const balances: TokenBalance[] = WALLET_TOKENS.map((token, i) => {
    const r = query.data?.[i]
    return { token, raw: r && r.status === 'success' ? (r.result) : undefined }
  })
  return { balances, isLoading: query.isLoading, isError: query.isError }
}
