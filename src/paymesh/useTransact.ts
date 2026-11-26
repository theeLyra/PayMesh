import { useTokenBalances } from './useTokenBalances'
import { useCallback, useState } from 'react'
import { useAccount, usePublicClient, useReadContract, useSwitchChain, useWriteContract } from 'wagmi'
import { useQueryClient } from '@tanstack/react-query'
import { erc20Abi, type Abi, type Address, type Hex } from 'viem'
import { toast } from 'sonner'
import { paymeshAbi } from './abis'
import { useActivity } from './activityContext'
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

  /** Runs one write. `hold` keeps the busy state on after success so a follow-up transaction in the same flow never lets the button flicker. */
  const runTx = useCallback(
    async (label: string, req: WriteRequest, hold: boolean): Promise<TxResult> => {
      if (!address) {
        toast.error('Connect your wallet first.')
        return { ok: false }
      }
      if (!publicClient) {
        toast.error('Network client is not ready yet.')
        return { ok: false }
      }
      setPending(label)
      let keepBusy = false
      try {
        if (chainId !== CHAIN_ID) await switchChainAsync({ chainId: CHAIN_ID })
        const hash = await writeContractAsync({ ...req, chainId: CHAIN_ID })
        recordSubmit(address, { hash, label, submittedAt: Date.now() })
        // Arc confirms in well under a second, so poll the receipt quickly instead of using the 4 second default.
        const receipt = await publicClient.waitForTransactionReceipt({ hash, pollingInterval: 400 })
        const ok = receipt.status === 'success'
        recordResult(address, hash, ok, Date.now())
        if (ok) toast.success(`${label} confirmed`)
        else toast.error(`${label} was reverted onchain`)
        // Refresh the feed and every read in the background; the UI does not wait for them.
        refresh()
        void queryClient.invalidateQueries()
        keepBusy = ok && hold
        return { ok, hash }
      } catch (e) {
        const message = parseOnchainError(e)
        if (message === 'Transaction cancelled.') toast(message)
        else toast.error(message)
        return { ok: false }
      } finally {
        if (!keepBusy) setPending(null)
      }
    },
    [address, chainId, publicClient, switchChainAsync, writeContractAsync, refresh, queryClient],
  )

  const transact = useCallback((label: string, req: WriteRequest) => runTx(label, req, false), [runTx])

  /**
   * Approves exactly `needed` USDC for `spender` when the current allowance is lower. Returns true when funds can be pulled.
   * By default the busy state stays on after a successful approval because the caller sends its own transaction next.
   * Pass `thenSend = false` when the approval is the whole action.
   */
  const approveIfNeeded = useCallback(
    async (spender: Address, needed: bigint, thenSend = true): Promise<boolean> => {
      if (!address || !publicClient) return false
      // Lock the button immediately so a fast double click cannot start two flows.
      setPending('Checking approval')
      let current: bigint
      try {
        current = await publicClient.readContract({
          address: USDC_ADDRESS,
          abi: erc20Abi,
          functionName: 'allowance',
          args: [address, spender],
        })
      } catch {
        setPending(null)
        toast.error('Network issue. Check your connection and retry.')
        return false
      }
      if (current >= needed) {
        if (!thenSend) setPending(null)
        return true
      }
      const res = await runTx(
        'USDC approval',
        { address: USDC_ADDRESS, abi: erc20Abi, functionName: 'approve', args: [spender, needed] },
        thenSend,
      )
      return res.ok
    },
    [address, publicClient, runTx],
  )

  return { transact, approveIfNeeded, pending }
}

/** Live USDC balance in the 6-decimal ERC-20 view (the same pool that pays gas on Arc). Shares one source with the balance card. */
export function useUsdcBalance() {
  const { balances, isLoading, isError } = useTokenBalances()
  const usdc = balances.find((b) => b.token.symbol === 'USDC')
  return { balance: usdc?.raw, isLoading, isError }
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
