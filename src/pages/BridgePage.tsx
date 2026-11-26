import { useEffect, useMemo, useRef, useState } from 'react'
import { loadAppKit, prefetchCircleKits, type Adapter } from '@/paymesh/circleKit'
import { BRIDGE_CHAINS_MAINNET, BRIDGE_CHAINS_TESTNET } from '@/paymesh/circleChains'
import { useQueryClient } from '@tanstack/react-query'
import { ArrowDownUp } from 'lucide-react'
import { isAddress, parseUnits, type EIP1193Provider, type PublicClient } from 'viem'
import { useAccount, usePublicClient, useSwitchChain } from 'wagmi'
import { toast } from 'sonner'
import { Badge, Button, Card, PageHeader, WalletGate, cx } from '@/components/ui'
import { ChainLogo } from '@/components/ChainLogo'
import { TokenLogo } from '@/components/TokenLogo'
import { CHAIN_FACTS, CHAIN_ID } from '@/paymesh/chain'
import { IS_MAINNET, SWAP_CHAIN } from '@/paymesh/network'
import { WALLET_TOKENS, fmtToken } from '@/paymesh/tokens'
import { useTokenBalances } from '@/paymesh/useTokenBalances'
import { ChainPicker, type ChainOption } from './swap/ChainPicker'
import { SwapStatus } from './swap/SwapStatus'
import { useSwapTracker, type SwapStep } from './swap/swapTracker'

/** Chains Circle CCTP supports for this network (copied from the SDK so the page renders at once). Arc is listed first. */
const CHAINS: ChainOption[] = [...(IS_MAINNET ? BRIDGE_CHAINS_MAINNET : BRIDGE_CHAINS_TESTNET)].sort((a, b) => (a.id === SWAP_CHAIN ? -1 : b.id === SWAP_CHAIN ? 1 : a.name.localeCompare(b.name)))

const DEFAULT_OTHER = CHAINS.find((c) => c.id === (IS_MAINNET ? 'Base' : 'Base_Sepolia'))?.id ?? CHAINS.find((c) => c.id !== SWAP_CHAIN)?.id ?? SWAP_CHAIN

interface Inputs {
  from: string
  to: string
  amount: string
  recipient: string
  speed: 'FAST' | 'SLOW'
}

interface Quote {
  inputs: Inputs
  providerFee: number
  fees: Array<{ type: string; token: string; amount: string }>
  gas: Array<{ name: string; token: string; fees?: { fee: string } | null }>
}

const STEP_LABEL: Record<string, string> = {
  approve: 'Approve USDC',
  burn: 'Burn USDC on the source chain',
  fetchAttestation: 'Circle attestation',
  mint: 'Mint USDC on the destination chain',
}

const chainName = (id: string) => CHAINS.find((c) => c.id === id)?.name ?? id.replace(/_/g, ' ')

function friendlyError(e: unknown): string {
  const err = e as { message?: string; shortMessage?: string; code?: number } | undefined
  const lower = `${err?.shortMessage ?? ''} ${err?.message ?? ''}`.toLowerCase()
  if (lower.includes('user rejected') || lower.includes('user denied') || err?.code === 4001) return 'Request cancelled in your wallet.'
  if (lower.includes('insufficient')) return 'Insufficient USDC or gas on the source chain.'
  if (lower.includes('429') || lower.includes('rate limit')) return 'The service is busy. Wait a few seconds and try again.'
  if (lower.includes('not supported') || lower.includes('unsupported')) return 'This route is not supported right now. Try another chain.'
  if (lower.includes('fetch') || lower.includes('network') || lower.includes('timeout')) return 'Network issue. Check your connection and retry.'
  return 'The transfer could not be completed. Check the explorer links below before you retry.'
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2 text-sm">
      <span className="text-pm-muted">{label}</span>
      <span className="text-right font-medium text-pm-text">{children}</span>
    </div>
  )
}

export default function BridgePage() {
  const { address, connector } = useAccount()
  const { switchChainAsync } = useSwitchChain()
  const publicClient = usePublicClient({ chainId: CHAIN_ID }) as PublicClient | undefined
  const queryClient = useQueryClient()
  const { balances } = useTokenBalances()
  const tracker = useSwapTracker(publicClient, { txLabel: 'Burn USDC', trackHash: false })

  const [inputs, setInputs] = useState<Inputs>({ from: SWAP_CHAIN, to: DEFAULT_OTHER, amount: '', recipient: '', speed: 'FAST' })
  const inputsRef = useRef(inputs)
  const [quote, setQuote] = useState<Quote | null>(null)
  const [quoting, setQuoting] = useState(false)
  const [running, setRunning] = useState(false)
  const [error, setError] = useState<string>()
  const [outcome, setOutcome] = useState<'success' | 'failed'>()
  const seq = useRef(0)
  const timer = useRef<number>(0)

  const { from, to, amount, recipient, speed } = inputs
  const usdc = WALLET_TOKENS[0]
  const arcBalance = balances.find((b) => b.token.symbol === 'USDC')?.raw
  const fromBalance = from === SWAP_CHAIN ? arcBalance : undefined

  const raw = useMemo(() => {
    const v = amount.trim()
    if (!/^\d+(\.\d{1,6})?$/.test(v)) return undefined
    try {
      const n = parseUnits(v, 6)
      return n > 0n ? n : undefined
    } catch {
      return undefined
    }
  }, [amount])
  const recipientProblem = recipient.trim() !== '' && !isAddress(recipient.trim()) ? 'Enter a valid wallet address, or leave it empty to receive on your own wallet.' : undefined
  const amountProblem = amount.trim() === '' ? undefined : raw === undefined ? 'Enter a positive USDC amount with up to 6 decimals.' : fromBalance !== undefined && raw > fromBalance ? `You only hold ${fmtToken(fromBalance, usdc)} USDC on ${chainName(from)}.` : undefined
  const sameChain = from === to
  const fresh = Boolean(quote && quote.inputs.from === from && quote.inputs.to === to && quote.inputs.amount === amount && quote.inputs.recipient === recipient && quote.inputs.speed === speed)
  const est = fresh ? quote : null

  const getProvider = async () => {
    if (!connector) throw new Error('Wallet not connected')
    return (await connector.getProvider()) as EIP1193Provider
  }

  const buildParams = (i: Inputs, adapter: Adapter) => ({
    from: { adapter, chain: i.from as never },
    to: { adapter, chain: i.to as never, ...(i.recipient.trim() ? { recipientAddress: i.recipient.trim() } : {}) },
    amount: i.amount.trim(),
    ...(i.from !== SWAP_CHAIN ? { config: { transferSpeed: i.speed } } : {}),
  })

  const runQuote = async (i: Inputs, id: number, silent: boolean) => {
    try {
      const { kit, createAdapter } = await loadAppKit()
      const adapter = await createAdapter({ provider: await getProvider() })
      const res = await kit.estimateBridge(buildParams(i, adapter))
      if (id !== seq.current) return
      const fees = (res.fees ?? []) as Quote['fees']
      const providerFee = fees.filter((f) => f.token === 'USDC').reduce((sum, f) => sum + Number(f.amount), 0)
      setQuote({ inputs: i, providerFee, fees, gas: (res.gasFees ?? []) as unknown as Quote['gas'] })
      setError(undefined)
    } catch (e) {
      if (id !== seq.current || silent) return
      setQuote(null)
      setError(friendlyError(e))
    } finally {
      if (id === seq.current) setQuoting(false)
    }
  }

  const scheduleQuote = (i: Inputs, delay: number, silent = false) => {
    window.clearTimeout(timer.current)
    const id = (seq.current += 1)
    if (!silent) setQuote(null)
    const amt = parseUnits(/^\d+(\.\d{1,6})?$/.test(i.amount.trim()) ? i.amount.trim() : '0', 6)
    const bal = i.from === SWAP_CHAIN ? arcBalance : undefined
    const recipientOk = i.recipient.trim() === '' || isAddress(i.recipient.trim())
    const ready = Boolean(address) && amt > 0n && i.from !== i.to && recipientOk && (bal === undefined || amt <= bal)
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
    if (!running) tracker.reset()
    scheduleQuote(next, 500)
  }

  const useMax = () => {
    if (fromBalance === undefined) return
    const spendable = fromBalance > 100_000n ? fromBalance - 100_000n : 0n // keep 0.10 USDC for Arc gas
    const frac = (spendable % 1_000_000n).toString().padStart(6, '0').replace(/0+$/, '')
    update({ amount: spendable === 0n ? '' : frac ? `${spendable / 1_000_000n}.${frac}` : `${spendable / 1_000_000n}` })
  }

  useEffect(() => {
    if (!quote || running) return
    const t = window.setInterval(() => scheduleQuote(inputsRef.current, 0, true), 30_000)
    return () => window.clearInterval(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quote, running, address])
  useEffect(() => () => window.clearTimeout(timer.current), [])
  // Start downloading Circle's SDK as the page opens, so the first quote is quick.
  useEffect(() => {
    prefetchCircleKits('app')
  }, [])

  // The click on the Transfer button is the confirmation. Nothing here runs on its own.
  const execute = async () => {
    if (!quote || !fresh || !connector) return
    const i = quote.inputs
    window.clearTimeout(timer.current)
    seq.current += 1
    setRunning(true)
    setError(undefined)
    setOutcome(undefined)
    tracker.reset([{ id: 'prepare', label: 'Preparing your transfer', state: 'pending' }])
    try {
      const { kit, createAdapter } = await loadAppKit()
      const adapter = await createAdapter({ provider: tracker.wrapProvider(await getProvider()) })
      const result = await kit.bridge(buildParams(i, adapter))
      const steps: SwapStep[] = result.steps.map((s, n) => ({
        id: `r-${n}`,
        label: STEP_LABEL[s.name] ?? s.name,
        state: s.state === 'error' ? 'error' : s.state === 'pending' ? 'pending' : 'done',
        url: s.explorerUrl,
        detail: s.errorMessage,
      }))
      tracker.reset([...steps, { id: 'complete', label: result.state === 'success' ? 'Transfer complete' : 'Transfer not completed', state: result.state === 'success' ? 'done' : 'error', detail: `${result.amount} USDC from ${chainName(i.from)} to ${chainName(i.to)}` }])
      setOutcome(result.state === 'success' ? 'success' : 'failed')
      if (result.state === 'success') {
        toast.success(`Sent ${result.amount} USDC to ${chainName(i.to)}`)
        const cleared = { ...inputsRef.current, amount: '' }
        inputsRef.current = cleared
        setInputs(cleared)
        setQuote(null)
      } else {
        setError('The transfer did not finish. Open the links below to see where it stopped before you try again.')
      }
      void queryClient.invalidateQueries()
    } catch (e) {
      const message = friendlyError(e)
      setError(message)
      setOutcome('failed')
      tracker.upsert('prepare', { state: 'done' })
      if (message !== 'Request cancelled in your wallet.') toast.error(message)
    } finally {
      setRunning(false)
    }
  }

  let cta = 'Enter an amount'
  let disabled = true
  if (running) cta = 'Transferring…'
  else if (sameChain) cta = 'Choose two different chains'
  else if (recipientProblem) cta = 'Fix the recipient address'
  else if (amount.trim() === '') cta = 'Enter an amount'
  else if (amountProblem) cta = raw !== undefined && fromBalance !== undefined && raw > fromBalance ? 'Insufficient USDC' : 'Enter a valid amount'
  else if (quoting && !est) cta = 'Getting the fees…'
  else if (!est) cta = error ? 'No quote available' : 'Getting the fees…'
  else {
    cta = `Send ${est.inputs.amount} USDC to ${chainName(to)}`
    disabled = false
  }
  const receives = est && raw !== undefined ? Math.max(0, Number(est.inputs.amount) - est.providerFee) : undefined

  return (
    <div>
      <PageHeader title="Cross-chain" subtitle="Move USDC between Arc and other chains with Circle CCTP V2. Your wallet signs; Circle attests; USDC is minted natively on the destination." action={<Badge tone="violet">{CHAIN_FACTS.name}</Badge>} />
      <div className="grid gap-5 lg:grid-cols-[minmax(0,540px)_minmax(0,1fr)]">
        <div className="space-y-4">
          <Card className="p-4 sm:p-5">
            <WalletGate prompt="Connect your wallet to send USDC across chains.">
              <div>
                <div className="rounded-2xl border border-pm-line bg-pm-bg p-4">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <span className="label">From</span>
                    <span className="text-xs text-pm-muted">{fromBalance === undefined ? '' : `Balance ${fmtToken(fromBalance, usdc)} USDC`}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input aria-label="Amount of USDC to send" inputMode="decimal" placeholder="0.00" autoComplete="off" disabled={running} value={amount} onChange={(e) => update({ amount: e.target.value.replace(/[^0-9.]/g, '') })} className="tabular min-w-0 flex-1 bg-transparent text-2xl font-semibold text-pm-text outline-none placeholder:text-pm-muted/50 sm:text-4xl" />
                    {fromBalance !== undefined && (
                      <button type="button" onClick={useMax} disabled={running} className="min-h-[36px] rounded-md border border-pm-line px-3 text-xs font-semibold text-pm-violet hover:bg-pm-violet/10">
                        Max
                      </button>
                    )}
                    <TokenLogo symbol="USDC" size={28} />
                    <span className="font-semibold text-pm-text">USDC</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-sm text-pm-muted">
                    <span>On</span>
                    <ChainPicker value={from} options={CHAINS} label="Source network" disabled={running} onChange={(id) => update(id === to ? { from: id, to: from } : { from: id })} />
                  </div>
                </div>

                <div className="relative z-10 flex h-3 items-center justify-center">
                  <button type="button" onClick={() => update({ from: to, to: from })} disabled={running} aria-label="Swap source and destination chains" className="flex h-10 w-10 items-center justify-center rounded-full border border-pm-line bg-pm-panel text-pm-text hover:bg-pm-text/5">
                    <ArrowDownUp className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-3 rounded-2xl border border-pm-line bg-pm-bg p-4">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <span className="label">To</span>
                    <span className="text-xs text-pm-muted">Native USDC, not a wrapped copy</span>
                  </div>
                  <div className="tabular text-2xl font-semibold text-pm-text sm:text-4xl">{receives !== undefined ? receives.toLocaleString('en-US', { maximumFractionDigits: 6 }) : <span className="text-pm-muted/50">0.00</span>}</div>
                  <div className="mt-3 flex items-center gap-2 text-sm text-pm-muted">
                    <span>On</span>
                    <ChainPicker value={to} options={CHAINS} label="Destination network" disabled={running} onChange={(id) => update(id === from ? { to: id, from: to } : { to: id })} />
                  </div>
                </div>

                <label className="mt-4 block">
                  <span className="label">Recipient (optional)</span>
                  <input className="input mt-1 font-mono" placeholder="Leave empty to receive on your own wallet" value={recipient} disabled={running} onChange={(e) => update({ recipient: e.target.value })} autoComplete="off" spellCheck={false} />
                </label>
                {from !== SWAP_CHAIN && (
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="label">Speed</span>
                    <div className="flex gap-2" role="radiogroup" aria-label="Transfer speed">
                      {(['FAST', 'SLOW'] as const).map((s) => (
                        <button key={s} type="button" role="radio" aria-checked={speed === s} disabled={running} onClick={() => update({ speed: s })} className={cx('min-h-[40px] min-w-[84px] rounded-lg border px-3 text-sm font-semibold', speed === s ? 'border-pm-violet bg-pm-violet/10 text-pm-violet' : 'border-pm-line bg-pm-panel text-pm-text hover:bg-pm-text/5')}>
                          {s === 'FAST' ? 'Fast' : 'Standard'}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {amountProblem && <p className="mt-3 text-sm text-pm-bad">{amountProblem}</p>}
                {recipientProblem && <p className="mt-3 text-sm text-pm-bad">{recipientProblem}</p>}
                {error && (
                  <p role="alert" className="mt-3 rounded-lg border border-pm-bad/40 bg-pm-bad/10 px-3 py-2 text-sm text-pm-bad">
                    {error}
                  </p>
                )}
                <Button onClick={() => void execute()} busy={running} disabled={disabled} className="mt-4 w-full !min-h-[52px] text-base">
                  {cta}
                </Button>
                <button type="button" className="mt-2 text-xs text-pm-muted underline" onClick={() => void switchChainAsync({ chainId: CHAIN_ID }).catch(() => undefined)}>
                  Switch my wallet to {CHAIN_FACTS.name}
                </button>
              </div>
            </WalletGate>
          </Card>
          <SwapStatus steps={tracker.steps} title={running ? 'Transfer in progress' : outcome === 'success' ? 'Transfer complete' : outcome === 'failed' ? 'Transfer not completed' : 'Transfer status'} />
        </div>

        <div className="space-y-4">
          <Card className="p-5">
            <h2 className="text-sm font-semibold text-pm-text">{est ? 'Quote details' : 'How it works'}</h2>
            {est ? (
              <div className="mt-1 divide-y divide-pm-line">
                <div className="flex items-center justify-center gap-3 py-3 text-sm font-semibold text-pm-text">
                  <ChainLogo id={est.inputs.from} name={chainName(est.inputs.from)} size={28} />
                  {chainName(est.inputs.from)}
                  <span className="text-pm-muted">→</span>
                  <ChainLogo id={est.inputs.to} name={chainName(est.inputs.to)} size={28} />
                  {chainName(est.inputs.to)}
                </div>
                <Row label="You send">
                  {est.inputs.amount} USDC on {chainName(est.inputs.from)}
                </Row>
                <Row label="You receive (estimate)">
                  {receives?.toLocaleString('en-US', { maximumFractionDigits: 6 })} USDC on {chainName(est.inputs.to)}
                </Row>
                <Row label="Circle fee">
                  {est.fees.length === 0 ? 'None reported' : est.fees.map((f, i) => <span key={i} className="block">{Number(f.amount).toLocaleString('en-US', { maximumFractionDigits: 6 })} {f.token} <span className="text-pm-muted">({f.type})</span></span>)}
                </Row>
                <Row label="Network fees">
                  {est.gas.length === 0 ? 'Not reported' : est.gas.map((g, i) => <span key={i} className="block">{g.fees?.fee ? `${Number(g.fees.fee).toLocaleString('en-US', { maximumFractionDigits: 6 })} ${g.token}` : '—'} <span className="text-pm-muted">({g.name})</span></span>)}
                </Row>
              </div>
            ) : (
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-pm-muted">
                <li>Pick the source and destination chain, then enter an amount of USDC.</li>
                <li>The fees load on their own. Nothing is sent until you press the button.</li>
                <li>Your wallet signs the approval and the burn. Circle attests it, and native USDC is minted on the destination chain.</li>
              </ul>
            )}
          </Card>
          <Card className="p-5 text-sm text-pm-muted">
            <h2 className="mb-2 text-sm font-semibold text-pm-text">Good to know</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Transfers use Circle CCTP V2. USDC is burned on the source chain and minted natively on the destination, so there is no wrapped token.</li>
              <li>You need a little gas on the source chain. On Arc, gas is paid in USDC.</li>
              <li>Standard transfers can take several minutes while Circle attests the burn. Keep this tab open until it completes.</li>
              <li>{IS_MAINNET ? 'This moves real USDC. Start with a small first transfer.' : 'This is a testnet transfer with test USDC.'}</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  )
}
