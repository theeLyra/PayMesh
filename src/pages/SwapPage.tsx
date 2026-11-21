import { useMemo, useState } from 'react'
import { AppKit, type SwapEstimate, type SwapResult } from '@circle-fin/app-kit'
import { createViemAdapterFromProvider } from '@circle-fin/adapter-viem-v2'
import { useQueryClient } from '@tanstack/react-query'
import { ArrowDownUp } from 'lucide-react'
import type { EIP1193Provider } from 'viem'
import { parseUnits } from 'viem'
import { useAccount, useSwitchChain } from 'wagmi'
import { toast } from 'sonner'
import { Badge, Button, Card, ExplorerLink, PageHeader, WalletGate, cx } from '@/components/ui'
import { CHAIN_FACTS, CHAIN_ID, txUrl } from '@/paymesh/chain'
import { IS_MAINNET, SWAP_CHAIN } from '@/paymesh/network'
import { WALLET_TOKENS, fmtToken, type WalletToken } from '@/paymesh/tokens'
import { useTokenBalances } from '@/paymesh/useTokenBalances'

const kit = new AppKit()

/** Swap Kit symbols for the three tokens Arc supports. */
const KIT_SYMBOL = { USDC: 'USDC', EURC: 'EURC', cirBTC: 'CIRBTC' } as const
type KitSymbol = (typeof KIT_SYMBOL)[keyof typeof KIT_SYMBOL]

const SLIPPAGE_CHOICES = [
  { bps: 50, label: '0.5%' },
  { bps: 100, label: '1%' },
  { bps: 300, label: '3%' },
]

/** Keeps a little USDC back so the swap can still pay network fees (USDC is the gas token on Arc). */
const GAS_RESERVE = 100_000n // 0.10 USDC

interface SwapRequest {
  tokenIn: KitSymbol
  tokenOut: KitSymbol
  amountIn: string
  slippageBps: number
}

interface Reviewed {
  estimate: SwapEstimate
  request: SwapRequest
  account: string | undefined
}

function tokenBySymbol(symbol: string): WalletToken {
  return WALLET_TOKENS.find((t) => t.symbol === symbol) ?? WALLET_TOKENS[0]
}

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
  const text = `${err?.shortMessage ?? ''} ${err?.message ?? ''}`
  const lower = text.toLowerCase()
  if (lower.includes('user rejected') || lower.includes('user denied') || err?.code === 4001) return 'Request cancelled in your wallet.'
  if (lower.includes('no route')) return 'No swap route is available for this pair and amount right now. Try a different amount or pair.'
  if (lower.includes('429') || lower.includes('rate limit') || lower.includes('too many')) return 'The swap service is busy. Wait a few seconds and try again.'
  if (lower.includes('insufficient')) return 'Insufficient balance for this swap or for network fees.'
  if (lower.includes('slippage') || lower.includes('stop limit') || lower.includes('price')) return 'The price moved beyond your slippage limit. Review a new quote and try again.'
  if (lower.includes('fetch') || lower.includes('network') || lower.includes('timeout')) return 'Network issue. Check your connection and retry.'
  return 'The swap could not be completed. Review a new quote and try again.'
}

function TokenSelect({ value, onChange, exclude }: { value: string; onChange: (symbol: string) => void; exclude?: string }) {
  return (
    <select aria-label="Token" value={value} onChange={(e) => onChange(e.target.value)} className="input !w-auto min-w-[110px] font-semibold">
      {WALLET_TOKENS.map((t) => (
        <option key={t.symbol} value={t.symbol} disabled={t.symbol === exclude}>
          {t.symbol}
        </option>
      ))}
    </select>
  )
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
  const queryClient = useQueryClient()
  const { balances } = useTokenBalances()

  const [tokenIn, setTokenIn] = useState('USDC')
  const [tokenOut, setTokenOut] = useState('EURC')
  const [amount, setAmount] = useState('')
  const [slippageBps, setSlippageBps] = useState(100)
  const [reviewed, setReviewed] = useState<Reviewed | null>(null)
  const [quoting, setQuoting] = useState(false)
  const [swapping, setSwapping] = useState(false)
  const [error, setError] = useState<string>()
  const [result, setResult] = useState<SwapResult | null>(null)

  const inToken = tokenBySymbol(tokenIn)
  const outToken = tokenBySymbol(tokenOut)
  const balanceOf = (symbol: string) => balances.find((b) => b.token.symbol === symbol)?.raw
  const inBalance = balanceOf(tokenIn)
  const outBalance = balanceOf(tokenOut)

  const raw = useMemo(() => parseAmount(amount, inToken), [amount, inToken])
  const amountProblem =
    amount.trim() === '' ? undefined : raw === undefined ? `Enter a positive amount with up to ${inToken.decimals} decimals.` : inBalance !== undefined && raw > inBalance ? `You only hold ${fmtToken(inBalance, inToken)} ${inToken.symbol}.` : undefined
  const canReview = Boolean(address) && raw !== undefined && !amountProblem && tokenIn !== tokenOut && !quoting && !swapping

  const request: SwapRequest | undefined = raw === undefined ? undefined : { tokenIn: KIT_SYMBOL[inToken.symbol as keyof typeof KIT_SYMBOL], tokenOut: KIT_SYMBOL[outToken.symbol as keyof typeof KIT_SYMBOL], amountIn: amount.trim().replace(/\.$/, ''), slippageBps }
  // A quote is only valid for the exact inputs and wallet account it was made for.
  const fresh = Boolean(
    reviewed && request && reviewed.account === address && reviewed.request.tokenIn === request.tokenIn && reviewed.request.tokenOut === request.tokenOut && reviewed.request.amountIn === request.amountIn && reviewed.request.slippageBps === request.slippageBps,
  )

  const resetQuote = () => {
    setReviewed(null)
    setError(undefined)
    setResult(null)
  }
  const changeAmount = (v: string) => {
    setAmount(v.replace(/[^0-9.]/g, ''))
    resetQuote()
  }
  const changeIn = (s: string) => {
    setTokenIn(s)
    if (s === tokenOut) setTokenOut(tokenIn)
    setAmount('')
    resetQuote()
  }
  const changeOut = (s: string) => {
    setTokenOut(s)
    if (s === tokenIn) setTokenIn(tokenOut)
    resetQuote()
  }
  const flip = () => {
    setTokenIn(tokenOut)
    setTokenOut(tokenIn)
    setAmount('')
    resetQuote()
  }
  const useMax = () => {
    if (inBalance === undefined) return
    const spendable = inToken.symbol === 'USDC' ? (inBalance > GAS_RESERVE ? inBalance - GAS_RESERVE : 0n) : inBalance
    const base = 10n ** BigInt(inToken.decimals)
    const whole = spendable / base
    const frac = (spendable % base).toString().padStart(inToken.decimals, '0').replace(/0+$/, '')
    changeAmount(spendable === 0n ? '' : frac ? `${whole}.${frac}` : `${whole}`)
  }

  const getAdapter = async () => {
    if (!connector) throw new Error('Wallet not connected')
    if (chainId !== CHAIN_ID) await switchChainAsync({ chainId: CHAIN_ID })
    const provider = (await connector.getProvider()) as EIP1193Provider
    return createViemAdapterFromProvider({ provider })
  }

  const reviewQuote = async () => {
    if (!request || !canReview) return
    setQuoting(true)
    setError(undefined)
    setResult(null)
    try {
      const adapter = await getAdapter()
      const estimate = await kit.estimateSwap({
        from: { adapter, chain: SWAP_CHAIN },
        tokenIn: request.tokenIn,
        tokenOut: request.tokenOut,
        amountIn: request.amountIn,
        config: { slippageBps: request.slippageBps },
      })
      setReviewed({ estimate, request, account: address })
    } catch (e) {
      setReviewed(null)
      setError(friendlyError(e))
    } finally {
      setQuoting(false)
    }
  }

  // The user's click on the Swap button is the confirmation. Nothing here runs automatically.
  const executeSwap = async () => {
    if (!reviewed || !fresh) return
    setSwapping(true)
    setError(undefined)
    try {
      const adapter = await getAdapter()
      const swapped = await kit.swap({
        from: { adapter, chain: SWAP_CHAIN },
        tokenIn: reviewed.request.tokenIn,
        tokenOut: reviewed.request.tokenOut,
        amountIn: reviewed.request.amountIn,
        config: { slippageBps: reviewed.request.slippageBps },
      })
      setResult(swapped)
      setReviewed(null)
      setAmount('')
      toast.success(`Swapped ${swapped.amountIn} ${swapped.tokenIn}`)
      void queryClient.invalidateQueries()
    } catch (e) {
      const message = friendlyError(e)
      setError(message)
      if (message !== 'Request cancelled in your wallet.') toast.error(message)
    } finally {
      setSwapping(false)
    }
  }

  const est = fresh ? reviewed?.estimate : undefined
  const rate = est && Number(est.amountIn) > 0 ? Number(est.estimatedOutput.amount) / Number(est.amountIn) : undefined
  const steps = est?.route?.steps ?? []

  return (
    <div>
      <PageHeader title="Swap" subtitle="Swap USDC, EURC and cirBTC on Arc with Circle's swap aggregator." action={<Badge tone="violet">{CHAIN_FACTS.name}</Badge>} />
      {IS_MAINNET && (
        <div role="note" className="mb-5 rounded-xl border border-pm-warn/50 bg-pm-warn/10 p-3 text-sm text-pm-text">
          <strong>Mainnet: swaps move real funds.</strong> Start with a small test amount.
          {Number(amount) > 100 && (tokenIn === 'USDC' || tokenIn === 'EURC') ? ' This amount is above 100, so double-check the quote and the minimum you receive before you confirm.' : ''}
        </div>
      )}
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="p-5">
          <WalletGate prompt="Connect your wallet to swap tokens.">
            <div className="space-y-3">
              <div className="rounded-xl border border-pm-line bg-pm-bg p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="label">You pay</span>
                  <span className="text-xs text-pm-muted">
                    Balance {inBalance === undefined ? '—' : fmtToken(inBalance, inToken)} {inToken.symbol}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <input aria-label="Amount to swap" inputMode="decimal" placeholder="0.00" value={amount} onChange={(e) => changeAmount(e.target.value)} className="tabular min-w-0 flex-1 bg-transparent text-3xl font-semibold text-pm-text outline-none placeholder:text-pm-muted/60" />
                  <button onClick={useMax} className="rounded-md border border-pm-line px-2 py-1 text-xs font-semibold text-pm-violet hover:bg-pm-violet/10">
                    Max
                  </button>
                  <TokenSelect value={tokenIn} onChange={changeIn} />
                </div>
              </div>

              <div className="flex justify-center">
                <button onClick={flip} aria-label="Swap the two tokens" className="-my-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-pm-line bg-pm-panel text-pm-text hover:bg-pm-text/5">
                  <ArrowDownUp className="h-4 w-4" />
                </button>
              </div>

              <div className="rounded-xl border border-pm-line bg-pm-bg p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="label">You receive (estimate)</span>
                  <span className="text-xs text-pm-muted">
                    Balance {outBalance === undefined ? '—' : fmtToken(outBalance, outToken)} {outToken.symbol}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="tabular min-w-0 flex-1 truncate text-3xl font-semibold text-pm-text">{est ? est.estimatedOutput.amount : <span className="text-pm-muted/60">0.00</span>}</div>
                  <TokenSelect value={tokenOut} onChange={changeOut} />
                </div>
              </div>

              <div>
                <div className="label mb-2">Slippage tolerance</div>
                <div className="flex gap-2" role="radiogroup" aria-label="Slippage tolerance">
                  {SLIPPAGE_CHOICES.map((s) => (
                    <button
                      key={s.bps}
                      role="radio"
                      aria-checked={slippageBps === s.bps}
                      onClick={() => {
                        setSlippageBps(s.bps)
                        resetQuote()
                      }}
                      className={cx('min-h-[40px] flex-1 rounded-lg border text-sm font-semibold', slippageBps === s.bps ? 'border-pm-violet bg-pm-violet/10 text-pm-violet' : 'border-pm-line bg-pm-panel text-pm-text hover:bg-pm-text/5')}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {amountProblem && <p className="text-sm text-pm-bad">{amountProblem}</p>}
              {error && (
                <p role="alert" className="rounded-lg border border-pm-bad/40 bg-pm-bad/10 px-3 py-2 text-sm text-pm-bad">
                  {error}
                </p>
              )}

              {fresh && est ? (
                <Button onClick={() => void executeSwap()} busy={swapping} disabled={swapping} className="w-full">
                  {swapping ? 'Confirm in your wallet…' : `Swap ${est.amountIn} ${inToken.symbol} for ${outToken.symbol}`}
                </Button>
              ) : (
                <Button onClick={() => void reviewQuote()} busy={quoting} disabled={!canReview} className="w-full">
                  {quoting ? 'Getting quote…' : reviewed && !fresh ? 'Inputs changed. Review a new quote' : 'Review quote'}
                </Button>
              )}
              {tokenIn === 'USDC' && <p className="text-xs text-pm-muted">USDC also pays network fees on Arc, so Max keeps 0.10 USDC back.</p>}
            </div>
          </WalletGate>
        </Card>

        <div className="space-y-5">
          {result ? (
            <Card className="p-5">
              <div className="mb-2 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-pm-text">Swap complete</h2>
                <Badge tone={result.progress.status === 'DONE' ? 'good' : 'warn'}>{result.progress.status === 'DONE' ? 'Confirmed' : result.progress.status}</Badge>
              </div>
              <Row label="Paid">
                {result.amountIn} {result.tokenIn}
              </Row>
              <Row label="Received">{result.amountOut ? `${result.amountOut} ${result.tokenOut}` : 'Pending'}</Row>
              <Row label="Transaction">
                <ExplorerLink href={result.explorerUrl ?? txUrl(result.txHash)}>
                  <span className="font-mono text-xs">{result.txHash.slice(0, 10)}…{result.txHash.slice(-6)}</span>
                </ExplorerLink>
              </Row>
            </Card>
          ) : (
            <Card className="p-5">
              <h2 className="text-sm font-semibold text-pm-text">{est ? 'Quote' : 'How it works'}</h2>
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
                  {rate !== undefined && (
                    <Row label="Rate">
                      1 {inToken.symbol} ≈ {rate.toLocaleString('en-US', { maximumFractionDigits: 6 })} {outToken.symbol}
                    </Row>
                  )}
                  <Row label="Fees">
                    {est.fees && est.fees.length > 0 ? (
                      <span className="block space-y-0.5">
                        {est.fees.map((f, i) => (
                          <span key={i} className="block">
                            {f.amount} {f.token} <span className="text-pm-muted">({f.type === 'gas' ? 'network' : f.type})</span>
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
                  <li>Review a live quote. Nothing is sent until you press the Swap button.</li>
                  <li>Your wallet signs the swap on {CHAIN_FACTS.name}. Fees are shown before you confirm.</li>
                </ul>
              )}
            </Card>
          )}

          <Card className="p-5 text-sm text-pm-muted">
            <h2 className="mb-2 text-sm font-semibold text-pm-text">Good to know</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>{IS_MAINNET ? `Swaps run through Circle's swap aggregator on ${CHAIN_FACTS.name} mainnet and move real funds.` : `Swaps run through Circle's swap aggregator on ${CHAIN_FACTS.name}, a testnet. Test tokens have no real value.`}</li>
              <li>Each swap is routed through a swap service provider, either a third-party aggregator such as LiFi or Circle. The provider can change by route, and you are subject to the aggregator's terms of service.</li>
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
