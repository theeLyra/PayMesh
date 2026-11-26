import { useCallback, useRef, useState } from 'react'
import type { EIP1193Provider, PublicClient } from 'viem'
import { WALLET_TOKENS } from '@/paymesh/tokens'

export type StepState = 'wallet' | 'pending' | 'done' | 'error'

export interface SwapStep {
  id: string
  label: string
  state: StepState
  hash?: string
  /** Explorer link for steps on a chain other than Arc. Overrides the hash link. */
  url?: string
  detail?: string
}

type RequestArgs = { method: string; params?: unknown }

const APPROVE_SELECTOR = '0x095ea7b3'

function describeTx(params: unknown, txLabel: string): string {
  const tx = Array.isArray(params) ? (params[0] as { to?: string; data?: string } | undefined) : undefined
  if (tx?.data?.startsWith(APPROVE_SELECTOR)) {
    const token = WALLET_TOKENS.find((t) => t.address.toLowerCase() === tx.to?.toLowerCase())
    return token ? `Approve ${token.symbol}` : 'Approve token spending'
  }
  return txLabel
}

/**
 * Follows a swap while it runs. The swap kit drives the wallet through the provider, so wrapping the
 * provider shows each real step as it happens: permit signature, approval, swap transaction and its
 * onchain confirmation. Nothing here changes what is sent.
 */
export function useSwapTracker(publicClient: PublicClient | undefined, options: { txLabel?: string; trackHash?: boolean } = {}) {
  const { txLabel = 'Swap transaction', trackHash = true } = options
  const [steps, setSteps] = useState<SwapStep[]>([])
  const counter = useRef(0)

  const upsert = useCallback((id: string, patch: Partial<SwapStep> & { label?: string }) => {
    setSteps((list) => {
      const i = list.findIndex((s) => s.id === id)
      if (i === -1) return [...list, { id, label: patch.label ?? 'Step', state: 'wallet', ...patch }]
      const next = list.slice()
      next[i] = { ...next[i], ...patch }
      return next
    })
  }, [])

  const reset = useCallback((initial: SwapStep[] = []) => {
    counter.current = 0
    setSteps(initial)
  }, [])

  const wrapProvider = useCallback(
    (provider: EIP1193Provider): EIP1193Provider =>
      new Proxy(provider, {
        get(target, prop, receiver) {
          if (prop === 'request') {
            return async (args: RequestArgs) => {
              const method = args.method
              const tracked = method === 'eth_sendTransaction' || method === 'eth_signTypedData_v4' || method === 'wallet_sendCalls'
              if (!tracked) return (target.request as (a: RequestArgs) => Promise<unknown>)(args)

              const id = `step-${(counter.current += 1)}`
              upsert('prepare', { state: 'done' })
              const label = method === 'eth_signTypedData_v4' ? 'Sign the permit' : method === 'wallet_sendCalls' ? txLabel : describeTx(args.params, txLabel)
              upsert(id, { label, state: 'wallet' })
              try {
                const out = await (target.request as (a: RequestArgs) => Promise<unknown>)(args)
                if (method === 'eth_signTypedData_v4') {
                  upsert(id, { state: 'done' })
                } else if (method === 'eth_sendTransaction' && typeof out === 'string') {
                  upsert(id, { state: 'pending', hash: trackHash ? out : undefined })
                  if (publicClient) {
                    publicClient
                      .waitForTransactionReceipt({ hash: out as `0x${string}`, pollingInterval: 400 })
                      .then((r) => upsert(id, { state: r.status === 'success' ? 'done' : 'error', detail: r.status === 'success' ? undefined : 'The transaction reverted onchain.' }))
                      .catch(() => upsert(id, { state: 'pending' }))
                  }
                } else {
                  upsert(id, { state: 'pending' })
                }
                return out
              } catch (e) {
                upsert(id, { state: 'error', detail: 'Not confirmed in your wallet.' })
                throw e
              }
            }
          }
          const value = Reflect.get(target, prop, receiver) as unknown
          return typeof value === 'function' ? (value as (...a: unknown[]) => unknown).bind(target) : value
        },
      }),
    [publicClient, upsert, txLabel, trackHash],
  )

  /** Marks every running step done once the whole operation has finished successfully. */
  const finishAll = useCallback(() => {
    setSteps((list) => list.map((s) => (s.state === 'wallet' || s.state === 'pending' ? { ...s, state: 'done' as const } : s)))
  }, [])

  return { steps, upsert, reset, wrapProvider, finishAll }
}
