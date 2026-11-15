import { useState } from 'react'
import { useAccount } from 'wagmi'
import { isAddress } from 'viem'
import { CalendarClock } from 'lucide-react'
import { paymeshAbi } from '@/paymesh/abis'
import { PAYMESH } from '@/paymesh/contracts'
import { decodeCategory, encodeCategory, fmtDateTime, fmtUsdc, shortAddress, tryParseUsdc } from '@/paymesh/format'
import type { PlanData } from '@/paymesh/types'
import { useOwned } from '@/paymesh/useOwned'
import { useTransact, useUsdcAllowance, useUsdcBalance } from '@/paymesh/useTransact'
import { AmountInput, CategorySelect, FormError, amountError } from '@/components/forms'
import { useNow } from '@/components/TransactionFeed'
import { Badge, Button, Card, EmptyState, Field, NotDeployed, PageHeader, Skeleton, WalletGate } from '@/components/ui'

const INTERVALS = [
  { label: 'Every 5 minutes', seconds: 300 },
  { label: 'Every hour', seconds: 3600 },
  { label: 'Daily', seconds: 86_400 },
  { label: 'Weekly', seconds: 604_800 },
  { label: 'Every 30 days', seconds: 2_592_000 },
]

const intervalLabel = (sec: number) => INTERVALS.find((i) => i.seconds === sec)?.label ?? `Every ${Math.round(sec / 60)} min`

export default function ScheduledPayments() {
  const { address } = useAccount()
  const { balance } = useUsdcBalance()
  const { transact, approveIfNeeded, pending } = useTransact()
  const allowance = useUsdcAllowance(PAYMESH)
  const now = useNow(1000)
  const [payee, setPayee] = useState('')
  const [amount, setAmount] = useState('')
  const [interval, setIntervalSec] = useState(86_400)
  const [count, setCount] = useState('4')
  const [start, setStart] = useState('')
  const [category, setCategory] = useState('Subscription')

  const { rows, isLoading } = useOwned<PlanData>({ address: PAYMESH, abi: paymeshAbi, listFn: 'plansOf', getFn: 'getPlan', owner: address })

  const outstanding = rows.reduce((sum, { data }) => {
    if (!data || !data.active || data.payer.toLowerCase() !== address?.toLowerCase()) return sum
    return sum + data.amount * BigInt(data.maxPayments - data.paymentsMade)
  }, 0n)

  const raw = tryParseUsdc(amount)
  const n = /^\d+$/.test(count) ? Number(count) : 0
  const amtErr = amountError(amount, balance)
  const payeeErr = payee && !isAddress(payee) ? 'Enter a valid wallet address.' : payee && address && payee.toLowerCase() === address.toLowerCase() ? 'You cannot schedule payments to yourself.' : undefined
  const countErr = count && (n < 1 || n > 1000) ? 'Choose between 1 and 1000 payments.' : undefined
  const total = raw && n > 0 ? raw * BigInt(n) : 0n
  const canCreate = Boolean(PAYMESH && raw && isAddress(payee) && !payeeErr && !amtErr && n >= 1 && n <= 1000 && pending === null)

  const create = async () => {
    const sched = PAYMESH
    if (!sched || !raw || !isAddress(payee)) return
    if (!(await approveIfNeeded(sched, outstanding + total))) return
    const startSec = start ? Math.floor(new Date(start).getTime() / 1000) : Math.floor(Date.now() / 1000)
    const res = await transact('Schedule payment', {
      address: sched,
      abi: paymeshAbi,
      functionName: 'createPlan',
      args: [payee, raw, BigInt(interval), BigInt(startSec), n, encodeCategory(category)],
    })
    if (res.ok) {
      setAmount('')
      setPayee('')
    }
  }

  const needsTopUp = allowance !== undefined && outstanding > allowance

  return (
    <div className="animate-rise">
      <PageHeader
        title="Scheduled Payments"
        subtitle="Recurring USDC payments that stay in your wallet until each one is due. Anyone can trigger a due payment, but only to the payee you set."
      />
      <NotDeployed />
      <div className="grid gap-5 lg:grid-cols-[minmax(0,460px)_1fr]">
        <Card className="h-fit p-5">
          <WalletGate prompt="Connect your wallet to schedule payments.">
            <div className="space-y-4">
              <Field label="Payee wallet">
                <input className="input font-mono text-sm" placeholder="0x..." value={payee} onChange={(e) => setPayee(e.target.value.trim())} spellCheck={false} />
              </Field>
              <FormError>{payeeErr}</FormError>
              <AmountInput value={amount} onChange={setAmount} label="Amount per payment" max={false} />
              <FormError>{amtErr}</FormError>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Repeat">
                  <select className="input" value={interval} onChange={(e) => setIntervalSec(Number(e.target.value))}>
                    {INTERVALS.map((i) => (
                      <option key={i.seconds} value={i.seconds} className="bg-pm-deep">
                        {i.label}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Number of payments">
                  <input className="input tabular" inputMode="numeric" value={count} onChange={(e) => setCount(e.target.value.replace(/\D/g, ''))} />
                </Field>
              </div>
              <FormError>{countErr}</FormError>
              <Field label="First payment (optional)" hint="Leave empty to start now.">
                <input className="input" type="datetime-local" value={start} onChange={(e) => setStart(e.target.value)} />
              </Field>
              <CategorySelect value={category} onChange={setCategory} />
              <div className="rounded-xl border border-pm-line bg-white/[0.03] p-3 text-xs text-pm-muted">
                Total commitment: <span className="tabular font-semibold text-white">{fmtUsdc(total)} USDC</span> over {n || 0} payments. You approve this much USDC once and it is
                pulled from your wallet only as each payment comes due.
              </div>
              <Button className="w-full" onClick={() => void create()} disabled={!canCreate} busy={pending !== null}>
                <CalendarClock className="h-4 w-4" /> {pending ? `${pending}...` : 'Schedule payments'}
              </Button>
            </div>
          </WalletGate>
        </Card>

        <div className="space-y-4">
          {needsTopUp && PAYMESH && (
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-pm-warn/30 bg-pm-warn/[0.07] p-4 text-sm">
              <span className="text-pm-text/90">
                Your USDC allowance ({fmtUsdc(allowance ?? 0n)}) is lower than your remaining scheduled payments ({fmtUsdc(outstanding)}). Payments will fail until you top it up.
              </span>
              <Button onClick={() => void approveIfNeeded(PAYMESH!, outstanding)} busy={pending !== null}>
                Approve {fmtUsdc(outstanding)} USDC
              </Button>
            </div>
          )}
          <Card className="overflow-hidden">
            <div className="border-b border-pm-line/60 px-4 py-3 label">Your payment plans</div>
            {!address ? (
              <EmptyState title="Connect to see your plans" body="Plans you pay or receive are listed here." />
            ) : isLoading ? (
              <div className="space-y-3 p-4">
                <Skeleton className="h-20 w-full" />
              </div>
            ) : rows.length === 0 ? (
              <EmptyState title="No scheduled payments" body="Create a plan on the left. It will appear here with its next payment date." />
            ) : (
              <ul className="divide-y divide-pm-line/60">
                {rows.map(({ id, data }) => {
                  if (!data) return <li key={id.toString()} className="px-4 py-4"><Skeleton className="h-12 w-full" /></li>
                  const isPayer = data.payer.toLowerCase() === address.toLowerCase()
                  const completed = data.paymentsMade >= data.maxPayments
                  const due = data.active && now / 1000 >= Number(data.nextPaymentAt)
                  return (
                    <li key={id.toString()} className="space-y-2 px-4 py-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="tabular font-display text-lg font-semibold text-white">{fmtUsdc(data.amount)} USDC</span>
                          <Badge tone={data.active ? 'good' : completed ? 'violet' : 'muted'}>{data.active ? 'Active' : completed ? 'Completed' : 'Cancelled'}</Badge>
                          <Badge>{isPayer ? 'You pay' : 'You receive'}</Badge>
                        </div>
                        <span className="text-xs text-pm-muted">#{id.toString()}</span>
                      </div>
                      <div className="text-xs text-pm-muted">
                        {isPayer ? 'to' : 'from'} <span className="font-mono text-pm-text">{shortAddress(isPayer ? data.payee : data.payer)}</span> · {intervalLabel(Number(data.interval))} ·{' '}
                        {decodeCategory(data.category)} · {data.paymentsMade}/{data.maxPayments} paid
                        {data.active && <> · next {fmtDateTime(Number(data.nextPaymentAt))}</>}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {due && (
                          <Button
                            className="min-h-[40px] px-4"
                            disabled={pending !== null}
                            onClick={() => void transact('Execute payment', { address: PAYMESH!, abi: paymeshAbi, functionName: 'execute', args: [id] })}
                          >
                            Execute due payment
                          </Button>
                        )}
                        {isPayer && data.active && (
                          <Button
                            variant="danger"
                            className="min-h-[40px] px-4"
                            disabled={pending !== null}
                            onClick={() => void transact('Cancel plan', { address: PAYMESH!, abi: paymeshAbi, functionName: 'cancel', args: [id] })}
                          >
                            Cancel plan
                          </Button>
                        )}
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
