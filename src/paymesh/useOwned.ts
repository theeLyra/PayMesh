import type { Abi, Address } from 'viem'
import { useReadContract, useReadContracts } from 'wagmi'
import { CHAIN_ID } from './chain'

export interface OwnedRow<T> {
  id: bigint
  data: T | undefined
}

/** Reads an on-contract id list for `owner` (e.g. linksOf) and hydrates every id (e.g. getLink). Newest first. */
export function useOwned<T>(opts: { address?: Address; abi: Abi; listFn: string; getFn: string; owner?: Address }) {
  const { address, abi, listFn, getFn, owner } = opts
  const ids = useReadContract({
    address,
    abi,
    functionName: listFn,
    args: owner ? [owner] : undefined,
    chainId: CHAIN_ID,
    query: { enabled: Boolean(address && owner), refetchInterval: 10_000 },
  })
  const idList = ((ids.data as readonly bigint[] | undefined) ?? []).slice(-60)
  const items = useReadContracts({
    contracts: idList.map((id) => ({ address, abi, functionName: getFn, args: [id], chainId: CHAIN_ID })),
    query: { enabled: Boolean(address) && idList.length > 0, refetchInterval: 10_000 },
  })
  const rows: Array<OwnedRow<T>> = idList
    .map((id, i) => {
      const entry = items.data?.[i]
      return { id, data: entry && entry.status === 'success' ? (entry.result as T) : undefined }
    })
    .reverse()
  return { rows, isLoading: ids.isLoading || (idList.length > 0 && items.isLoading), isError: ids.isError || items.isError }
}

/** Reads one struct by id (e.g. getLink) and returns it typed. */
export function useById<T>(opts: { address?: Address; abi: Abi; fn: string; id?: bigint }) {
  const q = useReadContract({
    address: opts.address,
    abi: opts.abi,
    functionName: opts.fn,
    args: opts.id !== undefined ? [opts.id] : undefined,
    chainId: CHAIN_ID,
    query: { enabled: Boolean(opts.address) && opts.id !== undefined, refetchInterval: 10_000, retry: false },
  })
  return { data: q.data as T | undefined, isLoading: q.isLoading, isError: q.isError }
}
