import { useCallback, useState } from 'react'
import { useAccount, usePublicClient, useReadContract, useSwitchChain, useWriteContract } from 'wagmi'
import { useQueryClient } from '@tanstack/react-query'
import { erc20Abi, type Abi, type Address, type Hex } from 'viem'
import { toast } from 'sonner'
import { paymeshAbi } from './abis'
import { useActivity } from './ActivityProvider'
import { CHAIN_ID, USDC_ADDRESS } from './chain'
import { PAYMESH } from './contracts'
import { parseOnchainError } from './format'
import { recordResult, recordSubmit } from './txlog'

export interface WriteRequest {
  address: Address
  abi: Abi
  functionName: string
  args?: readonly unknown[]
}

export interface TxResult {
  ok: boolean
  hash?: Hex
}

/** Sends one contract write on the PayMesh chain, waits for the real receipt, and logs the measured timing. */
export function useTransact() {
  const { address, chainId } = useAccount()
  const { switchChainAsync } = useSwitchChain()
  const { writeContractAsync } = useWriteContract()
  const publicClient = usePublicClient({ chainId: CHAIN_ID })
  const { refresh } = useActivity()
  const queryClient = useQueryClient()
  const [pending, setPending] = useState<string | null>(null)

  const transact = useCallback(
    async (label: string, req: WriteRequest): Promise<TxResult> => {
      if (!address) {
        toast.error('Connect your wallet first.')
        return { ok: false }
      }
      if (!publicClient) {
        toast.error('Network client is not ready yet.')
        return { ok: false }
      }
      setPending(label)
      try {
        if (chainId !== CHAIN_ID) await switchChainAsync({ chainId: CHAIN_ID })
        const hash = await writeContractAsync({ ...req, chainId: CHAIN_ID })
        recordSubmit(address, { hash, label, submittedAt: Date.now() })
        const receipt = await publicClient.waitForTransactionReceipt({ hash })
        const ok = receipt.status === 'success'
        recordResult(address, hash, ok, Date.now())
        if (ok) toast.success(`${label} confirmed`)
        else toast.error(`${label} was reverted onchain`)
        refresh()
        await queryClient.invalidateQueries()
        return { ok, hash }
      } catch (e) {
        const message = parseOnchainError(e)
        if (message === 'Transaction cancelled.') toast(message)
        else toast.error(message)
        return { ok: false }
      } finally {
        setPending(null)
      }
    },
    [address, chainId, publicClient, switchChainAsync, writeContractAsync, refresh, queryClient],
  )

  /** Approves exactly `needed` USDC for `spender` when the current allowance is lower. Returns true when funds can be pulled. */
  const approveIfNeeded = useCallback(
    async (spender: Address, needed: bigint): Promise<boolean> => {
      if (!address || !publicClient) return false
      const current = await publicClient.readContract({
        address: USDC_ADDRESS,
        abi: erc20Abi,
        functionName: 'allowance',
        args: [address, spender],
      })
      if (current >= needed) return true
      const res = await transact('USDC approval', {
        address: USDC_ADDRESS,
        abi: erc20Abi,
        functionName: 'approve',
        args: [spender, needed],
      })
      return res.ok
    },
    [address, publicClient, transact],
  )

  return { transact, approveIfNeeded, pending }
}

/** Live USDC balance in the 6-decimal ERC-20 view (the same pool that pays gas on Arc). */
export function useUsdcBalance() {
  const { address } = useAccount()
  const query = useReadContract({
    address: USDC_ADDRESS,
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    chainId: CHAIN_ID,
    query: { enabled: Boolean(address), refetchInterval: 8000 },
  })
  return { balance: query.data, isLoading: query.isLoading, isError: query.isError }
}

export function useUsdcAllowance(spender: Address | undefined) {
  const { address } = useAccount()
  const query = useReadContract({
    address: USDC_ADDRESS,
    abi: erc20Abi,
    functionName: 'allowance',
    args: address && spender ? [address, spender] : undefined,
    chainId: CHAIN_ID,
    query: { enabled: Boolean(address && spender), refetchInterval: 10_000 },
  })
  return query.data
}

/** Network-wide counters read directly from the contracts. */
export function useOperations() {
  const links = useReadContract({
    address: PAYMESH,
    abi: paymeshAbi,
    functionName: 'activeLinks',
    chainId: CHAIN_ID,
    query: { enabled: Boolean(PAYMESH), refetchInterval: 15_000 },
  })
  const plans = useReadContract({
    address: PAYMESH,
    abi: paymeshAbi,
    functionName: 'activePlans',
    chainId: CHAIN_ID,
    query: { enabled: Boolean(PAYMESH), refetchInterval: 15_000 },
  })
  const escrows = useReadContract({
    address: PAYMESH,
    abi: paymeshAbi,
    functionName: 'activeEscrows',
    chainId: CHAIN_ID,
    query: { enabled: Boolean(PAYMESH), refetchInterval: 15_000 },
  })
  return {
    links: links.data,
    plans: plans.data,
    escrows: escrows.data,
    isLoading: links.isLoading || plans.isLoading || escrows.isLoading,
    isError: links.isError || plans.isError || escrows.isError,
  }
}
