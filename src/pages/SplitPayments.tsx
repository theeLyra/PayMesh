import { useState } from 'react'
import { useAccount } from 'wagmi'
import { getAddress, isAddress } from 'viem'
import { Plus, Split, Trash2 } from 'lucide-react'
import { paymeshAbi } from '@/paymesh/abis'
import { PAYMESH } from '@/paymesh/contracts'
import { fmtDateTime, fmtUsdc, shortAddress, tryParseUsdc } from '@/paymesh/format'
import type { SplitData } from '@/paymesh/types'
import { useById, useOwned } from '@/paymesh/useOwned'
import { useTransact, useUsdcBalance } from '@/paymesh/useTransact'
import { AmountInput, FormError, amountError } from '@/components/forms'
import { Button, Card, EmptyState, Field, NotDeployed, PageHeader, Skeleton, WalletGate } from '@/components/ui'

interface DraftRow {
  address: string
  percent: string
}

const bpsOf = (percent: string) => {
  const n = Number(percent)
  return Number.isFinite(n) ? Math.round(n * 100) : 0
}

function SplitCard({ id, data }: { id: bigint; data: SplitData }) {
  const { address } = useAccount()
  const { balance } = useUsdcBalance()
  const { transact, approveIfNeeded, pending } = useTransact()
  const [amount, setAmount] = useState('')
  const raw = tryParseUsdc(amount)
  const err = amountError(amount, balance)
  const includesMe = address ? data.recipients.some((r) => r.toLowerCase() === address.toLowerCase()) : false

  const pay = async () => {
    const split = PAYMESH
    if (!split || !raw) return
    if (!(await approveIfNeeded(split, raw))) return
    const res = await transact('Split payment', { address: split, abi: paymeshAbi, functionName: 'paySplit', args: [id, raw] })
    if (res.ok) setAmount('')
  }

  return (
    <li className="space-y-3 px-4 py-4">
      <div className="flex items-center justify-between gap-2">
        <div className="font-display text-lg font-semibold text-white">{data.name || `Split #${id.toString()}`}</div>
        <span className="text-xs text-pm-muted">
          #{id.toString()} · {fmtDateTime(Number(data.createdAt))}
        </span>
      </div>
      <ul className="space-y-1.5">
        {data.recipients.map((r, i) => (
          <li key={`${r}-${i}`} className="flex items-center justify-between text-xs">
            <span className="font-mono text-pm-text">{shortAddress(r)}</span>
            <span className="tabular font-semibold text-violet-200">{(data.shareBps[i] / 100).toFixed(2)}%</span>
          </li>
        ))}
      </ul>
      <div className="text-xs text-pm-muted">Total paid through this split: {fmtUsdc(data.totalPaid)} USDC</div>
      <div className="flex flex-wrap items-start gap-2">
        <div className="min-w-[180px] flex-1">
          <AmountInput value={amount} onChange={setAmount} label="Pay this split" max={false} />
        </div>
        <Button className="mt-[22px]" onClick={() => void pay()} disabled={!raw || Boolean(err) || includesMe || pending !== null} busy={pending !== null}>
          Pay
        </Button>
      </div>
      <FormError>{err}</FormError>
      {includesMe && <p className="text-xs text-pm-warn">Your wallet is one of the recipients, so you cannot pay this split from it.</p>}
    </li>
  )
}

function SplitById({ id }: { id: bigint }) {
  const { data, isLoading, isError } = useById<SplitData>({ address: PAYMESH, abi: paymeshAbi, fn: 'getSplit', id })
  if (isLoading) return <Skeleton className="mt-4 h-24 w-full" />
  if (isError || !data) return <p className="mt-4 text-sm text-pm-bad">Split #{id.toString()} was not found.</p>
  return (
    <ul className="mt-4 rounded-xl border border-pm-line">
      <SplitCard id={id} data={data} />
    </ul>
  )
}

export default function SplitPayments() {
  const { address } = useAccount()
  const { transact, pending } = useTransact()
  const [name, setName] = useState('')
  const [draft, setDraft] = useState<DraftRow[]>([
    { address: '', percent: '50' },
    { address: '', percent: '50' },
  ])
  const [lookup, setLookup] = useState('')
  const { rows, isLoading } = useOwned<SplitData>({ address: PAYMESH, abi: paymeshAbi, listFn: 'splitsOf', getFn: 'getSplit', owner: address })

  const totalBps = draft.reduce((s, r) => s + bpsOf(r.percent), 0)
  const addrOk = draft.every((r) => isAddress(r.address))
  const bpsOk = draft.every((r) => bpsOf(r.percent) > 0)
  const canCreate = Boolean(PAYMESH && name.trim() && addrOk && bpsOk && totalBps === 10_000 && draft.length <= 50 && pending === null)

  const update = (i: number, patch: Partial<DraftRow>) => setDraft((d) => d.map((r, idx) => (idx === i ? { ...r, ...patch } : r)))
  const even = () => {
    const base = Math.floor(10_000 / draft.length)
    const rem = 10_000 - base * draft.length
    setDraft((d) => d.map((r, i) => ({ ...r, percent: ((base + (i === d.length - 1 ? rem : 0)) / 100).toString() })))
  }

  const create = async () => {
    const split = PAYMESH
    if (!split) return
    const res = await transact('Create split', {
      address: split,
      abi: paymeshAbi,
      functionName: 'createSplit',
      args: [draft.map((r) => getAddress(r.address)), draft.map((r) => bpsOf(r.percent)), name.trim().slice(0, 100)],
    })
    if (res.ok) {
      setName('')
      setDraft([
        { address: '', percent: '50' },
        { address: '', percent: '50' },
      ])
    }
  }

  const lookupId = /^\d+$/.test(lookup) ? BigInt(lookup) : undefined

  return (
    <div className="animate-rise">
      <PageHeader title="Split Payments" subtitle="Define who gets what share once, then anyone can pay the split and each recipient is paid instantly in the same transaction." />
      <NotDeployed />
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="space-y-5">
          <Card className="p-5">
            <WalletGate prompt="Connect your wallet to create a split.">
              <div className="space-y-4">
                <Field label="Split name">
                  <input className="input" maxLength={100} placeholder="e.g. Band revenue" value={name} onChange={(e) => setName(e.target.value)} />
                </Field>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="label">Recipients</span>
                    <button onClick={even} className="text-xs font-semibold text-violet-300 hover:text-white">
                      Split evenly
                    </button>
                  </div>
                  {draft.map((r, i) => (
                    <div key={i} className="flex gap-2">
                      <input className="input font-mono text-xs" placeholder="0x..." value={r.address} onChange={(e) => update(i, { address: e.target.value.trim() })} spellCheck={false} />
                      <div className="relative w-28 shrink-0">
                        <input className="input tabular pr-7" inputMode="decimal" value={r.percent} onChange={(e) => update(i, { percent: e.target.value.replace(/[^0-9.]/g, '') })} />
                        <span className="absolute inset-y-0 right-3 flex items-center text-sm text-pm-muted">%</span>
                      </div>
                      <Button variant="ghost" className="px-3" aria-label="Remove recipient" disabled={draft.length <= 1} onClick={() => setDraft((d) => d.filter((_, idx) => idx !== i))}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button variant="ghost" className="w-full" onClick={() => setDraft((d) => [...d, { address: '', percent: '' }])} disabled={draft.length >= 50}>
                    <Plus className="h-4 w-4" /> Add recipient
                  </Button>
                </div>
                <div className={`text-xs ${totalBps === 10_000 ? 'text-pm-good' : 'text-pm-warn'}`}>Shares total {(totalBps / 100).toFixed(2)}% (must be exactly 100%)</div>
                <Button className="w-full" onClick={() => void create()} disabled={!canCreate} busy={pending !== null}>
                  <Split className="h-4 w-4" /> {pending ? `${pending}...` : 'Create split'}
                </Button>
              </div>
            </WalletGate>
          </Card>
          <Card className="p-5">
            <div className="label mb-3">Pay a split by number</div>
            <input className="input" inputMode="numeric" placeholder="Split number, e.g. 2" value={lookup} onChange={(e) => setLookup(e.target.value.replace(/\D/g, ''))} />
            {lookupId !== undefined && PAYMESH && <SplitById id={lookupId} />}
          </Card>
        </div>

        <Card className="h-fit overflow-hidden">
          <div className="border-b border-pm-line/60 px-4 py-3 label">Your splits</div>
          {!address ? (
            <EmptyState title="Connect to see your splits" body="Splits you create are listed here." />
          ) : isLoading ? (
            <div className="p-4">
              <Skeleton className="h-28 w-full" />
            </div>
          ) : rows.length === 0 ? (
            <EmptyState title="No splits yet" body="Create one on the left and share its number with the people who pay it." />
          ) : (
            <ul className="divide-y divide-pm-line/60">{rows.map(({ id, data }) => (data ? <SplitCard key={id.toString()} id={id} data={data} /> : <li key={id.toString()} className="p-4"><Skeleton className="h-16 w-full" /></li>))}</ul>
          )}
        </Card>
      </div>
    </div>
  )
}
