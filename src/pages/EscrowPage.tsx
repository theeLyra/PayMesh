import { useState } from 'react'
import { useAccount } from 'wagmi'
import { isAddress } from 'viem'
import { ShieldCheck } from 'lucide-react'
import { paymeshAbi } from '@/paymesh/abis'
import { PAYMESH } from '@/paymesh/contracts'
import { decodeCategory, encodeCategory, fmtDateTime, fmtUsdc, shortAddress, tryParseUsdc } from '@/paymesh/format'
import { ESCROW_STATUS, type EscrowData } from '@/paymesh/types'
import { useOwned } from '@/paymesh/useOwned'
import { useTransact, useUsdcBalance } from '@/paymesh/useTransact'
import { AmountInput, CategorySelect, FormError, amountError } from '@/components/forms'
import { useNow } from '@/paymesh/useNow'
import { Badge, Button, Card, EmptyState, Field, NotDeployed, PageHeader, Skeleton, WalletGate } from '@/components/ui'

const DURATIONS = [
  { label: '10 minutes', seconds: 600 },
  { label: '1 day', seconds: 86_400 },
  { label: '3 days', seconds: 259_200 },
  { label: '7 days', seconds: 604_800 },
  { label: '30 days', seconds: 2_592_000 },
]

export default function EscrowPage() {
  const { address } = useAccount()
  const { balance } = useUsdcBalance()
  const { transact, approveIfNeeded, pending } = useTransact()
  const now = useNow(1000)
  const [payee, setPayee] = useState('')
  const [amount, setAmount] = useState('')
  const [duration, setDuration] = useState(604_800)
  const [category, setCategory] = useState('Services')
  const [description, setDescription] = useState('')
  const { rows, isLoading } = useOwned<EscrowData>({ address: PAYMESH, abi: paymeshAbi, listFn: 'escrowsOf', getFn: 'getEscrow', owner: address })

  const raw = tryParseUsdc(amount)
  const amtErr = amountError(amount, balance)
  const payeeErr = payee && !isAddress(payee) ? 'Enter a valid wallet address.' : payee && address && payee.toLowerCase() === address.toLowerCase() ? 'The payee must be a different wallet.' : undefined
  const canCreate = Boolean(PAYMESH && raw && isAddress(payee) && !payeeErr && !amtErr && pending === null)

  const create = async () => {
    const escrow = PAYMESH
    if (!escrow || !raw || !isAddress(payee)) return
    if (!(await approveIfNeeded(escrow, raw))) return
    const deadline = BigInt(Math.floor(Date.now() / 1000) + duration)
    const res = await transact('Create escrow', {
      address: escrow,
      abi: paymeshAbi,
      functionName: 'createEscrow',
      args: [payee, raw, deadline, encodeCategory(category), description.trim().slice(0, 140)],
    })
    if (res.ok) {
      setAmount('')
      setPayee('')
      setDescription('')
    }
  }

  const act = (label: string, fn: 'release' | 'refund', id: bigint) =>
    transact(label, { address: PAYMESH!, abi: paymeshAbi, functionName: fn, args: [id] })

  return (
    <div className="animate-rise">
      <PageHeader
        title="Escrow"
        subtitle="Lock USDC for a payee. You release it when the work is done. If it is never released, the payee can return it, or you can reclaim it after the deadline."
      />
      <NotDeployed />
      <div className="grid gap-5 lg:grid-cols-[minmax(0,460px)_1fr]">
        <Card className="h-fit p-5">
          <WalletGate prompt="Connect your wallet to open an escrow.">
            <div className="space-y-4">
              <Field label="Payee wallet">
                <input className="input font-mono text-sm" placeholder="0x..." value={payee} onChange={(e) => setPayee(e.target.value.trim())} spellCheck={false} />
              </Field>
              <FormError>{payeeErr}</FormError>
              <AmountInput value={amount} onChange={setAmount} label="Amount to lock" />
              <FormError>{amtErr}</FormError>
              <Field label="Reclaimable by you after">
                <select className="input" value={duration} onChange={(e) => setDuration(Number(e.target.value))}>
                  {DURATIONS.map((d) => (
                    <option key={d.seconds} value={d.seconds} className="bg-pm-deep">
                      {d.label}
                    </option>
                  ))}
                </select>
              </Field>
              <CategorySelect value={category} onChange={setCategory} />
              <Field label="What is this for?">
                <input className="input" maxLength={140} placeholder="e.g. Website build, milestone 1" value={description} onChange={(e) => setDescription(e.target.value)} />
              </Field>
              <Button className="w-full" onClick={() => void create()} disabled={!canCreate} busy={pending !== null}>
                <ShieldCheck className="h-4 w-4" /> {pending ? `${pending}...` : 'Lock USDC in escrow'}
              </Button>
              <p className="text-xs text-pm-muted text-pretty">This escrow has no arbiter: you decide when to release, and the payee can always hand the funds back.</p>
            </div>
          </WalletGate>
        </Card>

        <Card className="overflow-hidden">
          <div className="border-b border-pm-line/60 px-4 py-3 label">Your escrow agreements</div>
          {!address ? (
            <EmptyState title="Connect to see your escrows" body="Agreements where you are payer or payee are listed here." />
          ) : isLoading ? (
            <div className="p-4">
              <Skeleton className="h-24 w-full" />
            </div>
          ) : rows.length === 0 ? (
            <EmptyState title="No escrows yet" body="Open an escrow on the left to lock USDC for a payee." />
          ) : (
            <ul className="divide-y divide-pm-line/60">
              {rows.map(({ id, data }) => {
                if (!data) return <li key={id.toString()} className="p-4"><Skeleton className="h-16 w-full" /></li>
                const isPayer = data.payer.toLowerCase() === address.toLowerCase()
                const active = data.status === 0
                const expired = now / 1000 > Number(data.deadline)
                return (
                  <li key={id.toString()} className="space-y-2 px-4 py-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="tabular font-display text-lg font-semibold text-white">{fmtUsdc(data.amount)} USDC</span>
                        <Badge tone={active ? 'warn' : data.status === 1 ? 'good' : 'muted'}>{ESCROW_STATUS[data.status] ?? 'Unknown'}</Badge>
                        <Badge>{isPayer ? 'You are payer' : 'You are payee'}</Badge>
                      </div>
                      <span className="text-xs text-pm-muted">#{id.toString()}</span>
                    </div>
                    <div className="text-xs text-pm-muted">
                      {isPayer ? 'to' : 'from'} <span className="font-mono text-pm-text">{shortAddress(isPayer ? data.payee : data.payer)}</span> · {decodeCategory(data.category)} · reclaimable{' '}
                      {fmtDateTime(Number(data.deadline))}
                      {data.description && <> · {data.description}</>}
                    </div>
                    {active && (
                      <div className="flex flex-wrap gap-2">
                        {isPayer && (
                          <Button className="min-h-[40px] px-4" disabled={pending !== null} onClick={() => void act('Release escrow', 'release', id)}>
                            Release to payee
                          </Button>
                        )}
                        {isPayer && expired && (
                          <Button variant="ghost" className="min-h-[40px] px-4" disabled={pending !== null} onClick={() => void act('Reclaim escrow', 'refund', id)}>
                            Reclaim funds
                          </Button>
                        )}
                        {!isPayer && (
                          <Button variant="ghost" className="min-h-[40px] px-4" disabled={pending !== null} onClick={() => void act('Return escrow', 'refund', id)}>
                            Return to payer
                          </Button>
                        )}
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          )}
        </Card>
      </div>
    </div>
  )
}
