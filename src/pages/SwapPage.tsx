import { useEffect, useMemo, useRef, useState } from 'react'
import type { SwapEstimate } from '@circle-fin/app-kit'
import { loadAppKit, prefetchCircleKits } from '@/paymesh/circleKit'
import { useQueryClient } from '@tanstack/react-query'
import { ArrowDownUp } from 'lucide-react'
import type { EIP1193Provider, PublicClient } from 'viem'
import { parseUnits } from 'viem'
import { useAccount, usePublicClient, useSwitchChain } from 'wagmi'
import { toast } from 'sonner'
import { Badge, Button, Card, PageHeader, Skeleton, WalletGate, cx } from '@/components/ui'
import { CHAIN_FACTS, CHAIN_ID } from '@/paymesh/chain'
import { IS_MAINNET, SWAP_CHAIN } from '@/paymesh/network'
import { WALLET_TOKENS, fmtToken, type WalletToken } from '@/paymesh/tokens'
import { useTokenBalances } from '@/paymesh/useTokenBalances'
import { SwapStatus } from './swap/SwapStatus'
import { TokenPicker } from './swap/TokenPicker'
import { useSwapTracker } from './swap/swapTracker'


/** Swap Kit symbols for the three tokens Arc supports. */
const KIT_SYMBOL: Record<string, 'USDC' | 'EURC' | 'CIRBTC'> = { USDC: 'USDC', EURC: 'EURC', cirBTC: 'CIRBTC' }

const SLIPPAGE_CHOICES = [
  { bps: 50, label: '0.5%' },
  { bps: 100, label: '1%' },
  { bps: 300, label: '3%' },
]

/** Keeps a little USDC back so the swap can still pay network fees (USDC is the gas token on Arc). */
const GAS_RESERVE = 100_000n // 0.10 USDC
/** Quotes refresh in the background while the page is idle. */
const QUOTE_REFRESH_MS = 20_000

interface Inputs {
  tokenIn: string
  tokenOut: string
  amount: string
  slippageBps: number
}

interface Reviewed {
  estimate: SwapEstimate
  inputs: Inputs
  account: string | undefined
}

const tokenBySymbol = (symbol: string): WalletToken => WALLET_TOKENS.find((t) => t.symbol === symbol) ?? WALLET_TOKENS[0]

function parseAmount(value: string, token: WalletToken): bigint | undefined {
  const v = value.trim()
  if (!/^\d*\.?\d+$/.test(v) && !/^\d+\.$/.test(v)) return undefined
  const [, frac = ''] = v.split('.')
  if (frac.length > token.decimals) return undefined
  try {
    const raw = parseUnits(v.endsWith('.') ? v.slice(0, -1) : v, token.decimals)
    return raw > 0n ? raw : undefined
  } catch {
    return undefined
  }
}

function friendlyError(e: unknown): string {
  const err = e as { message?: string; shortMessage?: string; code?: number } | undefined
  const lower = `${err?.shortMessage ?? ''} ${err?.message ?? ''}`.toLowerCase()
  if (lower.includes('user rejected') || lower.includes('user denied') || err?.code === 4001) return 'Request cancelled in your wallet.'
  if (lower.includes('no route')) return 'No swap route is available for this pair and amount right now. Try a different amount or pair.'
  if (lower.includes('429') || lower.includes('rate limit') || lower.includes('too many')) return 'The swap service is busy. Wait a few seconds and try again.'
  if (lower.includes('insufficient')) return 'Insufficient balance for this swap or for network fees.'
  if (lower.includes('slippage') || lower.includes('stop limit') || lower.includes('price')) return 'The price moved beyond your slippage limit. A new quote is loading.'
  if (lower.includes('fetch') || lower.includes('network') || lower.includes('timeout')) return 'Network issue. Check your connection and retry.'
  return 'The swap could not be completed. Try again with a fresh quote.'
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2 text-sm">
      <span className="text-pm-muted">{label}</span>
      <span className="text-right font-medium text-pm-text">{children}</span>
    </div>
  )
}

export default function SwapPage() {
  const { address, connector, chainId } = useAccount()
  const { switchChainAsync } = useSwitchChain()
  const publicClient = usePublicClient({ chainId: CHAIN_ID }) as PublicClient | undefined
  const queryClient = useQueryClient()
  const { balances } = useTokenBalances()
  const tracker = useSwapTracker(publicClient)

  const [inputs, setInputs] = useState<Inputs>({ tokenIn: 'USDC', tokenOut: 'EURC', amount: '', slippageBps: 100 })
  const inputsRef = useRef(inputs)
  const [reviewed, setReviewed] = useState<Reviewed | null>(null)
  const [quoting, setQuoting] = useState(false)
  const [swapping, setSwapping] = useState(false)
  const [error, setError] = useState<string>()
  const [outcome, setOutcome] = useState<'success' | 'failed'>()
  const seq = useRef(0)
  const timer = useRef<number>(0)

  const { tokenIn, tokenOut, amount, slippageBps } = inputs
  const inToken = tokenBySymbol(tokenIn)
  const outToken = tokenBySymbol(tokenOut)
  const balanceMap = useMemo(() => Object.fromEntries(balances.map((b) => [b.token.symbol, b.raw])) as Record<string, bigint | undefined>, [balances])
  const inBalance = balanceMap[tokenIn]
  const outBalance = balanceMap[tokenOut]
  const wrongChain = Boolean(address) && chainId !== CHAIN_ID

  const raw = useMemo(() => parseAmount(amount, inToken), [amount, inToken])
  const amountProblem =
    amount.trim() === '' ? undefined : raw === undefined ? `Enter a positive amount with up to ${inToken.decimals} decimals.` : inBalance !== undefined && raw > inBalance ? `You only hold ${fmtToken(inBalance, inToken)} ${inToken.symbol}.` : undefined

  // A quote is only valid for the exact inputs and wallet account it was made for.
  const fresh = Boolean(reviewed && reviewed.account === address && reviewed.inputs.tokenIn === tokenIn && reviewed.inputs.tokenOut === tokenOut && reviewed.inputs.amount === amount && reviewed.inputs.slippageBps === slippageBps)
  const est = fresh ? reviewed?.estimate : undefined

  const getProvider = async () => {
    if (!connector) throw new Error('Wallet not connected')
    return (await connector.getProvider()) as EIP1193Provider
  }

  const runQuote = async (i: Inputs, id: number, silent: boolean) => {
    try {
      const { kit, createAdapter } = await loadAppKit()
      const adapter = await createAdapter({ provider: await getProvider() })
      const estimate = await kit.estimateSwap({
        from: { adapter, chain: SWAP_CHAIN },
        tokenIn: KIT_SYMBOL[i.tokenIn],
        tokenOut: KIT_SYMBOL[i.tokenOut],
        amountIn: i.amount.trim().replace(/\.$/, ''),
        config: { slippageBps: i.slippageBps },
      })
      if (id !== seq.current) return
      setReviewed({ estimate, inputs: i, account: address })
      setError(undefined)
    } catch (e) {
      if (id !== seq.current || silent) return
      setReviewed(null)
      setError(friendlyError(e))
    } finally {
      if (id === seq.current) setQuoting(false)
    }
  }

  /** Fetches a live price shortly after the inputs settle, so there is no separate review step. */
  const scheduleQuote = (i: Inputs, delay: number, silent = false) => {
    window.clearTimeout(timer.current)
    const id = (seq.current += 1)
    if (!silent) setReviewed(null)
    const amt = parseAmount(i.amount, tokenBySymbol(i.tokenIn))
    const bal = balanceMap[i.tokenIn]
    const ready = Boolean(address) && chainId === CHAIN_ID && amt !== undefined && i.tokenIn !== i.tokenOut && (bal === undefined || amt <= bal)
    if (!ready) {
      setQuoting(false)
      return
    }
    if (!silent) setQuoting(true)
    timer.current = window.setTimeout(() => void runQuote(i, id, silent), delay)
  }

  const update = (patch: Partial<Inputs>) => {
    const next = { ...inputsRef.current, ...patch }
    inputsRef.current = next
    setInputs(next)
    setError(undefined)
    setOutcome(undefined)
    if (!swapping) tracker.reset()
    scheduleQuote(next, 450)
  }

  const changeIn = (s: string) => update(s === tokenOut ? { tokenIn: s, tokenOut: tokenIn } : { tokenIn: s })
  const changeOut = (s: string) => update(s === tokenIn ? { tokenOut: s, tokenIn: tokenOut } : { tokenOut: s })
  const flip = () => update({ tokenIn: tokenOut, tokenOut: tokenIn, amount: '' })
  const useMax = () => {
    if (inBalance === undefined) return
    const spendable = inToken.symbol === 'USDC' ? (inBalance > GAS_RESERVE ? inBalance - GAS_RESERVE : 0n) : inBalance
    const base = 10n ** BigInt(inToken.decimals)
    const frac = (spendable % base).toString().padStart(inToken.decimals, '0').replace(/0+$/, '')
    update({ amount: spendable === 0n ? '' : frac ? `${spendable / base}.${frac}` : `${spendable / base}` })
  }

  // Keep the price current while the page sits idle, and stop while a swap is running.
  useEffect(() => {
    if (!reviewed || swapping) return
    const t = window.setInterval(() => scheduleQuote(inputsRef.current, 0, true), QUOTE_REFRESH_MS)
    return () => window.clearInterval(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reviewed, swapping, address, chainId])

  useEffect(() => () => window.clearTimeout(timer.current), [])
  // Start downloading Circle's SDK as the page opens, so the first quote is quick.
  useEffect(() => {
    prefetchCircleKits('app')
  }, [])

  // The user's click on the Swap button is the confirmation. Nothing here runs automatically.
  const executeSwap = async () => {
    if (!reviewed || !fresh || !connector) return
    const i = reviewed.inputs
    const quote = reviewed.estimate
    window.clearTimeout(timer.current)
    seq.current += 1
    setSwapping(true)
    setError(undefined)
    setOutcome(undefined)
    tracker.reset([{ id: 'prepare', label: 'Preparing your swap', state: 'pending' }])
    try {
      if (chainId !== CHAIN_ID) await switchChainAsync({ chainId: CHAIN_ID })
      const { kit, createAdapter } = await loadAppKit()
      const adapter = await createAdapter({ provider: tracker.wrapProvider(await getProvider()) })
      const swapped = await kit.swap({
        from: { adapter, chain: SWAP_CHAIN },
        tokenIn: KIT_SYMBOL[i.tokenIn],
        tokenOut: KIT_SYMBOL[i.tokenOut],
        amountIn: i.amount.trim().replace(/\.$/, ''),
        config: { slippageBps: i.slippageBps },
      })
      tracker.upsert('prepare', { state: 'done' })
      tracker.upsert('complete', { label: 'Swap complete', state: 'done', hash: swapped.txHash, detail: `${i.amount} ${i.tokenIn} for about ${quote.estimatedOutput.amount} ${i.tokenOut}` })
      setOutcome('success')
      setReviewed(null)
      const cleared = { ...inputsRef.current, amount: '' }
      inputsRef.current = cleared
      setInputs(cleared)
      toast.success(`Swapped ${i.amount} ${i.tokenIn} for ${i.tokenOut}`)
      void queryClient.invalidateQueries()
    } catch (e) {
      const message = friendlyError(e)
      setError(message)
      setOutcome('failed')
      tracker.upsert('prepare', { state: 'done' })
      if (message !== 'Request cancelled in your wallet.') toast.error(message)
      // The price may have moved, so show a fresh quote right away.
      scheduleQuote(inputsRef.current, 0)
    } finally {
      setSwapping(false)
    }
  }

  const rate = est && Number(est.amountIn) > 0 ? Number(est.estimatedOutput.amount) / Number(est.amountIn) : undefined
  const steps = est?.route?.steps ?? []
  const showLargeNote = IS_MAINNET && Number(amount) > 100 && (tokenIn === 'USDC' || tokenIn === 'EURC')

  let cta = 'Swap'
  let ctaDisabled = false
  let ctaAction: () => void = () => void executeSwap()
  if (wrongChain) {
    cta = `Switch to ${CHAIN_FACTS.name}`
    ctaAction = () => void switchChainAsync({ chainId: CHAIN_ID }).catch(() => undefined)
  } else if (swapping) {
    cta = 'Swapping…'
    ctaDisabled = true
  } else if (amount.trim() === '') {
    cta = 'Enter an amount'
    ctaDisabled = true
  } else if (amountProblem) {
    cta = raw !== undefined && inBalance !== undefined && raw > inBalance ? 'Insufficient balance' : 'Enter a valid amount'
    ctaDisabled = true
  } else if (quoting && !est) {
    cta = 'Getting the best price…'
    ctaDisabled = true
  } else if (!est) {
    cta = error ? 'No quote available' : 'Getting the best price…'
    ctaDisabled = true
  } else {
    cta = `Swap ${est.amountIn} ${inToken.symbol} for ${outToken.symbol}`
  }

  return (
    <div>
      <PageHeader title="Swap" subtitle="Swap USDC, EURC and cirBTC on Arc with Circle's swap aggregator." action={<Badge tone="violet">{CHAIN_FACTS.name}</Badge>} />
      <div className="grid gap-5 lg:grid-cols-[minmax(0,540px)_minmax(0,1fr)]">
        <div className="space-y-4">
          <Card className="p-4 sm:p-5">
            <WalletGate prompt="Connect your wallet to swap tokens.">
              <div>
                <div className="rounded-2xl border border-pm-line bg-pm-bg p-4">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <span className="label">You pay</span>
                    <span className="text-xs text-pm-muted">
                      Balance {inBalance === undefined ? '—' : fmtToken(inBalance, inToken)} {inToken.symbol}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      aria-label="Amount to swap"
                      inputMode="decimal"
                      placeholder="0.00"
                      autoComplete="off"
                      disabled={swapping}
                      value={amount}
                      onChange={(e) => update({ amount: e.target.value.replace(/[^0-9.]/g, '') })}
                      className="tabular min-w-0 flex-1 bg-transparent text-2xl font-semibold text-pm-text outline-none placeholder:text-pm-muted/50 sm:text-4xl"
                    />
                    <button type="button" onClick={useMax} disabled={swapping} className="min-h-[36px] rounded-md border border-pm-line px-3 text-xs font-semibold text-pm-violet hover:bg-pm-violet/10">
                      Max
                    </button>
                    <TokenPicker value={tokenIn} onChange={changeIn} balances={balanceMap} label="Token you pay" />
                  </div>
                </div>

                <div className="relative z-10 flex h-3 items-center justify-center">
                  <button type="button" onClick={flip} disabled={swapping} aria-label="Swap the two tokens" className="flex h-10 w-10 items-center justify-center rounded-full border border-pm-line bg-pm-panel text-pm-text hover:bg-pm-text/5">
                    <ArrowDownUp className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-3 rounded-2xl border border-pm-line bg-pm-bg p-4">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <span className="label">You receive</span>
                    <span className="text-xs text-pm-muted">
                      Balance {outBalance === undefined ? '—' : fmtToken(outBalance, outToken)} {outToken.symbol}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="tabular min-w-0 flex-1 truncate text-2xl font-semibold text-pm-text sm:text-4xl" aria-live="polite">
                      {est ? est.estimatedOutput.amount : quoting ? <Skeleton className="h-9 w-40" /> : <span className="text-pm-muted/50">0.00</span>}
                    </div>
                    <TokenPicker value={tokenOut} onChange={changeOut} balances={balanceMap} label="Token you receive" />
                  </div>
                  <div className="mt-2 flex min-h-[20px] items-center gap-2 text-xs text-pm-muted">
                    {est && rate !== undefined ? (
                      <>
                        <span className="inline-block h-2 w-2 rounded-full bg-pm-good" aria-hidden />
                        <span>
                          Live price: 1 {inToken.symbol} ≈ {rate.toLocaleString('en-US', { maximumFractionDigits: 6 })} {outToken.symbol}
                        </span>
                      </>
                    ) : quoting ? (
                      <span>Finding the best route…</span>
                    ) : null}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="label">Slippage</span>
                  <div className="flex gap-2" role="radiogroup" aria-label="Slippage tolerance">
                    {SLIPPAGE_CHOICES.map((s) => (
                      <button
                        key={s.bps}
                        type="button"
                        role="radio"
                        aria-checked={slippageBps === s.bps}
                        disabled={swapping}
                        onClick={() => update({ slippageBps: s.bps })}
                        className={cx('min-h-[40px] min-w-[56px] rounded-lg border px-3 text-sm font-semibold', slippageBps === s.bps ? 'border-pm-violet bg-pm-violet/10 text-pm-violet' : 'border-pm-line bg-pm-panel text-pm-text hover:bg-pm-text/5')}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                {amountProblem && <p className="mt-3 text-sm text-pm-bad">{amountProblem}</p>}
                {showLargeNote && <p className="mt-3 text-sm text-pm-warn">This is a large amount. Double-check the quote and the minimum you receive before you confirm.</p>}
                {error && (
                  <p role="alert" className="mt-3 rounded-lg border border-pm-bad/40 bg-pm-bad/10 px-3 py-2 text-sm text-pm-bad">
                    {error}
                  </p>
                )}

                <Button onClick={ctaAction} busy={swapping} disabled={ctaDisabled} className="mt-4 w-full !min-h-[52px] text-base">
                  {cta}
                </Button>
                {tokenIn === 'USDC' && <p className="mt-2 text-xs text-pm-muted">USDC also pays network fees on Arc, so Max keeps 0.10 USDC back.</p>}
              </div>
            </WalletGate>
          </Card>

          <SwapStatus steps={tracker.steps} title={swapping ? 'Swap in progress' : outcome === 'success' ? 'Swap complete' : outcome === 'failed' ? 'Swap not completed' : 'Swap status'} />
        </div>

        <div className="space-y-4">
          <Card className="p-5">
            <h2 className="text-sm font-semibold text-pm-text">{est ? 'Quote details' : 'How it works'}</h2>
            {est ? (
              <div className="mt-1 divide-y divide-pm-line">
                <Row label="You pay">
                  {est.amountIn} {inToken.symbol}
                </Row>
                <Row label="You receive (estimate)">
                  {est.estimatedOutput.amount} {est.estimatedOutput.token}
                </Row>
                <Row label={`Minimum you receive (${slippageBps / 100}% slippage)`}>
                  {est.stopLimit.amount} {est.stopLimit.token}
                </Row>
                <Row label="Fees">
                  {est.fees && est.fees.length > 0 ? (
                    <span className="block space-y-0.5">
                      {est.fees.map((f, i) => (
                        <span key={i} className="block">
                          {Number(f.amount).toLocaleString('en-US', { maximumFractionDigits: 6 })} {f.token} <span className="text-pm-muted">({f.type === 'gas' ? 'network' : f.type})</span>
                        </span>
                      ))}
                    </span>
                  ) : (
                    'None reported'
                  )}
                </Row>
                <Row label="Route">
                  {est.route?.provider ?? 'Circle'}
                  {steps.length > 0 && <span className="block text-xs font-normal text-pm-muted">{steps.map((s) => s.toolName ?? s.tool).join(' → ')}</span>}
                </Row>
              </div>
            ) : (
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-pm-muted">
                <li>Pick the token you pay with, the token you want, and an amount.</li>
                <li>The best price loads on its own and keeps refreshing. Nothing is sent until you press Swap.</li>
                <li>Your wallet signs the swap on {CHAIN_FACTS.name}, and you can follow each step live.</li>
              </ul>
            )}
          </Card>

          <Card className="p-5 text-sm text-pm-muted">
            <h2 className="mb-2 text-sm font-semibold text-pm-text">Good to know</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>{IS_MAINNET ? `Swaps run through Circle's swap aggregator on ${CHAIN_FACTS.name} mainnet.` : `Swaps run through Circle's swap aggregator on ${CHAIN_FACTS.name}, a testnet. Test tokens have no real value.`}</li>
              <li>Each swap is routed through a swap service provider, either a third-party aggregator such as LiFi or Circle. The provider can change by route, and you are subject to the aggregator&apos;s terms of service.</li>
              <li>Quotes are estimates. If the price moves past your slippage limit, the swap fails and nothing is spent besides network fees.</li>
              <li>Available pairs and liquidity change over time. If a pair has no route, try a smaller amount or another pair.</li>
              <li>PayMesh adds no fee to swaps. The provider fee and network fee shown in the quote are all you pay.</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  )
}
