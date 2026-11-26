import { useEffect, useMemo } from 'react'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { erc20Abi } from 'viem'
import { useAccount, useReadContracts } from 'wagmi'
import { CHAIN_ID, USDC_ADDRESS, addressUrl } from './chain'
import { WALLET_TOKENS, type WalletToken } from './tokens'

export interface TokenBalance {
  token: WalletToken
  /** undefined when no source could read it */
  raw: bigint | undefined
}

const API_BASE = new URL(addressUrl('0x0000000000000000000000000000000000000000')).origin
const retryDelay = (attempt: number) => Math.min(800 * 2 ** attempt, 5000)

function readCache(key: string): Record<string, string> | undefined {
  if (!key) return undefined
  try {
    return JSON.parse(localStorage.getItem(key) ?? 'null') as Record<string, string> | undefined
  } catch {
    return undefined
  }
}

/**
 * Balances from the explorer's own index, used only while every RPC endpoint is unavailable. USDC comes from the
 * account's native balance (Arc keeps USDC as the native coin, 18 decimals, and the token index can lag behind it);
 * other tokens come from the token balance index.
 */
async function fetchExplorerBalances(address: string): Promise<Record<string, bigint>> {
  const [account, tokens] = await Promise.all([fetch(`${API_BASE}/api/v2/addresses/${address}`), fetch(`${API_BASE}/api/v2/addresses/${address}/token-balances`)])
  if (!account.ok) throw new Error(`explorer ${account.status}`)
  const out: Record<string, bigint> = {}
  if (tokens.ok) {
    const items = (await tokens.json()) as Array<{ token?: { address_hash?: string; address?: string }; value?: string }>
    for (const it of items) {
      const a = (it.token?.address_hash ?? it.token?.address ?? '').toLowerCase()
      if (a && it.value) out[a] = BigInt(it.value)
    }
  }
  const coin = ((await account.json()) as { coin_balance?: string | null }).coin_balance
  out[USDC_ADDRESS.toLowerCase()] = coin ? BigInt(coin) / 10n ** 12n : 0n
  return out
}

/**
 * The connected wallet's balance of every listed token. It reads the chain through several public RPC endpoints,
 * falls back to the explorer if they all fail, keeps the last good value on screen while it refreshes, and
 * remembers the last balances so the card never starts empty.
 */
export function useTokenBalances() {
  const { address } = useAccount()
  const cacheKey = address ? `paymesh:bal:v2:${CHAIN_ID}:${address.toLowerCase()}` : ''

  const rpc = useReadContracts({
    contracts: WALLET_TOKENS.map((t) => ({ address: t.address, abi: erc20Abi, functionName: 'balanceOf' as const, args: [address!] as const, chainId: CHAIN_ID })),
    query: { enabled: Boolean(address), refetchInterval: 10_000, staleTime: 4_000, retry: 3, retryDelay, placeholderData: keepPreviousData },
  })
  const rpcHas = Boolean(rpc.data?.some((r) => r.status === 'success'))

  const explorer = useQuery({
    queryKey: ['balances-explorer', CHAIN_ID, address?.toLowerCase()],
    enabled: Boolean(address) && !rpcHas && (rpc.isError || rpc.isFetched),
    queryFn: () => fetchExplorerBalances(address as string),
    refetchInterval: 15_000,
    retry: 1,
  })

  const cached = useMemo(() => readCache(cacheKey), [cacheKey])

  const balances: TokenBalance[] = WALLET_TOKENS.map((token, i) => {
    const r = rpc.data?.[i]
    let raw: bigint | undefined = r && r.status === 'success' ? (r.result) : undefined
    if (raw === undefined && !rpcHas) raw = explorer.data?.[token.address.toLowerCase()] ?? (explorer.isSuccess ? 0n : undefined)
    if (raw === undefined && cached?.[token.symbol] !== undefined) raw = BigInt(cached[token.symbol])
    return { token, raw }
  })

  // Remember the last good balances so the next visit shows them instantly.
  const fresh = rpcHas
  const snapshot = balances.map((b) => `${b.token.symbol}:${b.raw?.toString() ?? ''}`).join('|')
  useEffect(() => {
    if (!cacheKey || !fresh) return
    const next: Record<string, string> = {}
    for (const b of balances) if (b.raw !== undefined) next[b.token.symbol] = b.raw.toString()
    localStorage.setItem(cacheKey, JSON.stringify(next))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cacheKey, fresh, snapshot])

  const any = balances.some((b) => b.raw !== undefined)
  const settledFail = Boolean(address) && !any && (rpc.isError || rpc.isFetched) && !rpcHas && (explorer.isError || explorer.fetchStatus === 'idle')
  return { balances, isLoading: Boolean(address) && !any && !settledFail, isError: settledFail, isStale: !rpcHas && any }
}
