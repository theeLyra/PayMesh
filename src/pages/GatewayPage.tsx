import { useMemo, useRef, useState } from 'react'
import { UnifiedBalanceKit } from '@circle-fin/unified-balance-kit'
import { createViemAdapterFromProvider } from '@circle-fin/adapter-viem-v2'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { isAddress, parseUnits, type EIP1193Provider, type PublicClient } from 'viem'
import { useAccount, usePublicClient } from 'wagmi'
import { toast } from 'sonner'
import { Badge, Button, Card, PageHeader, Skeleton, WalletGate } from '@/components/ui'
import { ChainLogo } from '@/components/ChainLogo'
import { TokenLogo } from '@/components/TokenLogo'
import { CHAIN_FACTS, CHAIN_ID } from '@/paymesh/chain'
import { IS_MAINNET, SWAP_CHAIN } from '@/paymesh/network'
import { WALLET_TOKENS, fmtToken } from '@/paymesh/tokens'
import { useTokenBalances } from '@/paymesh/useTokenBalances'
import { ChainPicker } from './swap/ChainPicker'
import { SwapStatus } from './swap/SwapStatus'
import { useSwapTracker } from './swap/swapTracker'

const kit = new UnifiedBalanceKit()
const NETWORK = IS_MAINNET ? 'mainnet' : 'testnet'

/** Chains Circle Gateway supports for USDC on this network, read from the kit. */
const CHAINS = kit
  .getSupportedChains('USDC')
  .filter((c) => Boolean(c.isTestnet) === !IS_MAINNET && c.type === 'evm')
  .map((c) => ({ id: c.chain as string, name: c.name }))
  .sort((a, b) => a.name.localeCompare(b.name))
const SPEND_TARGETS = CHAINS.filter((c) => c.id !== SWAP_CHAIN)
const chainName = (id: string) => CHAINS.find((c) => c.id === id)?.name ?? id.replace(/_/g, ' ')

const parse6 = (v: string): bigint | undefined => {
  const t = v.trim()
  if (!/^\d+(\.\d{1,6})?$/.test(t)) return undefined
  const n = parseUnits(t, 6)
  return n > 0n ? n : undefined
}

function friendlyError(e: unknown): string {
  const err = e as { message?: string; shortMessage?: string; code?: number } | undefined
  const lower = `${err?.shortMessage ?? ''} ${err?.message ?? ''}`.toLowerCase()
  if (lower.includes('user rejected') || lower.includes('user denied') || err?.code === 4001) return 'Request cancelled in your wallet.'
  if (lower.includes('insufficient')) return 'Insufficient balance for this amount or for fees.'
  if (lower.includes('429') || lower.includes('rate limit')) return 'The service is busy. Wait a few seconds and try again.'
  if (lower.includes('fetch') || lower.includes('network') || lower.includes('timeout')) return 'Network issue. Check your connection and retry.'
  return 'The request could not be completed. Check the status below and try again.'
}

interface FeeLine {
  type: string
  token: string
  amount: string
}
const feeText = (fees: FeeLine[]) => (fees.length === 0 ? 'None reported' : fees.map((f, i) => <span key={i} className="block">{Number(f.amount).toLocaleString('en-US', { maximumFractionDigits: 6 })} {f.token} <span className="text-pm-muted">({f.type})</span></span>))

export default function GatewayPage() {
  const { address, connector } = useAccount()
  const publicClient = usePublicClient({ chainId: CHAIN_ID }) as PublicClient | undefined
  const queryClient = useQueryClient()
  const { balances } = useTokenBalances()
  const tracker = useSwapTracker(publicClient, { txLabel: 'Gateway transaction', trackHash: false })
  const usdc = WALLET_TOKENS[0]
  const arcBalance = balances.find((b) => b.token.symbol === 'USDC')?.raw

  const [depositAmount, setDepositAmount] = useState('')
  const [spendAmount, setSpendAmount] = useState('')
  const [target, setTarget] = useState(SPEND_TARGETS.find((c) => c.id === 'Base')?.id ?? SPEND_TARGETS[0]?.id ?? '')
  const [recipient, setRecipient] = useState('')
  const [busy, setBusy] = useState<'deposit' | 'spend' | null>(null)
  const [error, setError] = useState<string>()
  const [fees, setFees] = useState<{ kind: 'deposit' | 'spend'; lines: FeeLine[] } | null>(null)
  const [outcome, setOutcome] = useState<'success' | 'failed'>()
  const estimateTimer = useRef<number>(0)

  const balance = useQuery({
    queryKey: ['gateway-balance', NETWORK, address?.toLowerCase()],
    enabled: Boolean(address),
    refetchInterval: 20_000,
    staleTime: 10_000,
    queryFn: async () => {
      const res = await kit.getBalances({ token: 'USDC', sources: { address: address as string }, networkType: NETWORK })
      const rows = res.breakdown.flatMap((b) => b.breakdown).map((r) => ({ chain: String(r.chain), amount: Number(r.confirmedBalance) }))
      return { total: Number(res.totalConfirmedBalance), pending: Number(res.totalPendingBalance ?? 0), rows }
    },
  })

  const depositRaw = parse6(depositAmount)
  const spendRaw = parse6(spendAmount)
  const depositProblem = depositAmount.trim() === '' ? undefined : depositRaw === undefined ? 'Enter a positive USDC amount with up to 6 decimals.' : arcBalance !== undefined && depositRaw > arcBalance ? `You only hold ${fmtToken(arcBalance, usdc)} USDC on ${CHAIN_FACTS.name}.` : undefined
  const spendProblem = spendAmount.trim() === '' ? undefined : spendRaw === undefined ? 'Enter a positive USDC amount with up to 6 decimals.' : balance.data && Number(spendAmount) > balance.data.total ? `Your unified balance is ${balance.data.total.toLocaleString('en-US', { maximumFractionDigits: 6 })} USDC.` : undefined
  const recipientProblem = recipient.trim() !== '' && !isAddress(recipient.trim()) ? 'Enter a valid wallet address, or leave it empty.' : undefined
  const available = useMemo(() => (balance.data?.rows ?? []).filter((r) => r.amount > 0), [balance.data])

  const getAdapter = async (wrap: boolean) => {
    if (!connector) throw new Error('Wallet not connected')
    const provider = (await connector.getProvider()) as EIP1193Provider
    return createViemAdapterFromProvider({ provider: wrap ? tracker.wrapProvider(provider) : provider })
  }

  const showFees = (kind: 'deposit' | 'spend', delay: number, fn: () => Promise<FeeLine[]>) => {
    window.clearTimeout(estimateTimer.current)
    setFees(null)
    estimateTimer.current = window.setTimeout(() => {
      fn().then((lines) => setFees({ kind, lines })).catch(() => setFees(null))
    }, delay)
  }

  const onDepositChange = (v: string) => {
    const value = v.replace(/[^0-9.]/g, '')
    setDepositAmount(value)
    setError(undefined)
    const amt = parse6(value)
    if (!address || amt === undefined || (arcBalance !== undefined && amt > arcBalance)) return setFees(null)
    showFees('deposit', 600, async () => {
      const adapter = await getAdapter(false)
      const res = await kit.estimateDeposit({ from: { adapter, chain: SWAP_CHAIN }, amount: value.trim(), token: 'USDC' })
      return res.fees
    })
  }

  const onSpendChange = (v: string, chain = target, to = recipient) => {
    const value = v.replace(/[^0-9.]/g, '')
    setSpendAmount(value)
    setError(undefined)
    const amt = parse6(value)
    if (!address || amt === undefined || (to.trim() !== '' && !isAddress(to.trim())) || (balance.data && Number(value) > balance.data.total)) return setFees(null)
    showFees('spend', 600, async () => {
      const adapter = await getAdapter(false)
      const res = await kit.estimateSpend({ from: { adapter }, to: { adapter, chain: chain as never, ...(to.trim() ? { recipientAddress: to.trim() } : {}) }, amount: value.trim(), token: 'USDC' })
      return res.fees
    })
  }

  const run = async (kind: 'deposit' | 'spend') => {
    if (!connector) return
    setBusy(kind)
    setError(undefined)
    setOutcome(undefined)
    tracker.reset([{ id: 'prepare', label: kind === 'deposit' ? 'Preparing your deposit' : 'Preparing your transfer', state: 'pending' }])
    try {
      const adapter = await getAdapter(true)
      if (kind === 'deposit') {
        const res = await kit.deposit({ from: { adapter, chain: SWAP_CHAIN }, amount: depositAmount.trim(), token: 'USDC' })
        tracker.upsert('complete', { label: 'Deposit complete', state: 'done', detail: `${res.amount} USDC added to your Gateway balance from ${CHAIN_FACTS.name}` })
        setDepositAmount('')
      } else {
        const res = await kit.spend({ from: { adapter }, to: { adapter, chain: target as never, ...(recipient.trim() ? { recipientAddress: recipient.trim() } : {}) }, amount: spendAmount.trim(), token: 'USDC' })
        tracker.upsert('complete', { label: 'Transfer complete', state: 'done', detail: `${spendAmount} USDC minted on ${chainName(String(res.destinationChain))}` })
        setSpendAmount('')
      }
      tracker.finishAll()
      setOutcome('success')
      setFees(null)
      toast.success(kind === 'deposit' ? 'Deposit confirmed' : 'Cross-chain transfer complete')
      void queryClient.invalidateQueries()
    } catch (e) {
      const message = friendlyError(e)
      setError(message)
      setOutcome('failed')
      tracker.upsert('prepare', { state: 'done' })
      if (message !== 'Request cancelled in your wallet.') toast.error(message)
    } finally {
      setBusy(null)
    }
  }

  return (
    <div>
      <PageHeader title="Gateway" subtitle="One unified USDC balance across chains with Circle Gateway. Deposit once, then mint on any supported chain." action={<Badge tone="violet">{CHAIN_FACTS.name}</Badge>} />
      <WalletGate prompt="Connect your wallet to see your unified USDC balance.">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,540px)_minmax(0,1fr)]">
          <div className="space-y-4">
            <Card className="p-5">
              <div className="label">Unified USDC balance</div>
              {balance.isLoading ? (
                <Skeleton className="mt-2 h-10 w-48" />
              ) : balance.error ? (
                <p className="mt-2 text-sm text-pm-muted">Could not read your Gateway balance right now. Retrying automatically.</p>
              ) : (
                <>
                  <div className="mt-1 flex items-center gap-2">
                    <TokenLogo symbol="USDC" size={32} />
                    <span className="tabular text-4xl font-extrabold tracking-tight text-pm-text">{(balance.data?.total ?? 0).toLocaleString('en-US', { maximumFractionDigits: 6, minimumFractionDigits: 2 })}</span>
                    <span className="text-lg font-semibold text-pm-muted">USDC</span>
                  </div>
                  {balance.data && balance.data.pending > 0 && <p className="mt-1 text-xs text-pm-muted">Pending: {balance.data.pending.toLocaleString('en-US', { maximumFractionDigits: 6 })} USDC</p>}
                  {available.length > 0 ? (
                    <ul className="mt-3 divide-y divide-pm-line text-sm">
                      {available.map((r) => (
                        <li key={r.chain} className="flex items-center justify-between py-2">
                          <span className="flex items-center gap-2 text-pm-muted"><ChainLogo id={r.chain} name={chainName(r.chain)} size={22} />{chainName(r.chain)}</span>
                          <span className="tabular font-medium text-pm-text">{r.amount.toLocaleString('en-US', { maximumFractionDigits: 6 })} USDC</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-sm text-pm-muted">Nothing deposited yet. Deposit USDC from {CHAIN_FACTS.name} to start a unified balance.</p>
                  )}
                </>
              )}
            </Card>

            <Card className="p-5">
              <h2 className="text-sm font-semibold text-pm-text">Deposit from {CHAIN_FACTS.name}</h2>
              <div className="mt-3 flex items-center gap-2">
                <input aria-label="USDC amount to deposit" className="input tabular" inputMode="decimal" placeholder="0.00" autoComplete="off" disabled={busy !== null} value={depositAmount} onChange={(e) => onDepositChange(e.target.value)} />
                <span className="shrink-0 text-xs text-pm-muted">{arcBalance === undefined ? '' : `Balance ${fmtToken(arcBalance, usdc)}`}</span>
              </div>
              {depositProblem && <p className="mt-2 text-sm text-pm-bad">{depositProblem}</p>}
              {fees?.kind === 'deposit' && <div className="mt-2 text-sm text-pm-muted">Fees: {feeText(fees.lines)}</div>}
              <Button className="mt-3 w-full" busy={busy === 'deposit'} disabled={busy !== null || depositRaw === undefined || Boolean(depositProblem)} onClick={() => void run('deposit')}>
                {busy === 'deposit' ? 'Depositing…' : depositRaw === undefined ? 'Enter an amount' : `Deposit ${depositAmount} USDC`}
              </Button>
            </Card>

            <Card className="p-5">
              <h2 className="text-sm font-semibold text-pm-text">Spend on another chain</h2>
              <p className="mt-1 text-xs text-pm-muted">Mints native USDC on the destination from your unified balance. Your wallet signs a burn intent.</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-[1fr_auto]">
                <input aria-label="USDC amount to spend" className="input tabular" inputMode="decimal" placeholder="0.00" autoComplete="off" disabled={busy !== null} value={spendAmount} onChange={(e) => onSpendChange(e.target.value)} />
                <ChainPicker value={target} options={SPEND_TARGETS} label="Destination network" disabled={busy !== null} onChange={(id) => { setTarget(id); onSpendChange(spendAmount, id) }} />
              </div>
              <input aria-label="Recipient address (optional)" className="input mt-2 font-mono" placeholder="Recipient (optional, defaults to your wallet)" autoComplete="off" spellCheck={false} disabled={busy !== null} value={recipient} onChange={(e) => { setRecipient(e.target.value); onSpendChange(spendAmount, target, e.target.value) }} />
              {spendProblem && <p className="mt-2 text-sm text-pm-bad">{spendProblem}</p>}
              {recipientProblem && <p className="mt-2 text-sm text-pm-bad">{recipientProblem}</p>}
              {fees?.kind === 'spend' && <div className="mt-2 text-sm text-pm-muted">Fees: {feeText(fees.lines)}</div>}
              <Button className="mt-3 w-full" busy={busy === 'spend'} disabled={busy !== null || spendRaw === undefined || Boolean(spendProblem) || Boolean(recipientProblem)} onClick={() => void run('spend')}>
                {busy === 'spend' ? 'Transferring…' : spendRaw === undefined ? 'Enter an amount' : `Spend ${spendAmount} USDC on ${chainName(target)}`}
              </Button>
              {error && <p role="alert" className="mt-3 rounded-lg border border-pm-bad/40 bg-pm-bad/10 px-3 py-2 text-sm text-pm-bad">{error}</p>}
            </Card>
            <SwapStatus steps={tracker.steps} title={busy ? 'In progress' : outcome === 'success' ? 'Complete' : outcome === 'failed' ? 'Not completed' : 'Status'} />
          </div>

          <div className="space-y-4">
            <Card className="p-5 text-sm text-pm-muted">
              <h2 className="mb-2 text-sm font-semibold text-pm-text">How Gateway works</h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>Deposit USDC into the Gateway wallet contract on {CHAIN_FACTS.name}. It is added to one balance you control.</li>
                <li>Spend from that balance on any supported chain. Circle verifies your signed intent, and native USDC is minted on the destination.</li>
                <li>Deposits count after they finalize onchain. Pending deposits show in the balance until then.</li>
                <li>Gateway covers {CHAINS.length} EVM chains on this network: {CHAINS.map((c) => c.name).join(', ')}.</li>
                <li>{IS_MAINNET ? 'This moves real USDC. Start with a small amount.' : 'This is a testnet with test USDC.'}</li>
              </ul>
            </Card>
          </div>
        </div>
      </WalletGate>
    </div>
  )
}
