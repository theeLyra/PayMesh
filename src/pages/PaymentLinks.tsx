import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import { Check, Copy, Link2, X } from 'lucide-react'
import { toast } from 'sonner'
import { buildShareLink } from '@/lib/share'
import { paymeshAbi } from '@/paymesh/abis'
import { PAYMESH } from '@/paymesh/contracts'
import { decodeCategory, encodeCategory, fmtUsdc, shortAddress, tryParseUsdc } from '@/paymesh/format'
import { useSearch } from '@/paymesh/router'
import type { LinkData } from '@/paymesh/types'
import { useOwned, useById } from '@/paymesh/useOwned'
import { useTransact, useUsdcBalance } from '@/paymesh/useTransact'
import { AmountInput, CategorySelect, FormError, amountError } from '@/components/forms'
import { Badge, Button, Card, EmptyState, Field, NotDeployed, PageHeader, Skeleton, WalletGate } from '@/components/ui'

function PayLinkCard({ id }: { id: bigint }) {
  const { address } = useAccount()
  const { balance } = useUsdcBalance()
  const { transact, approveIfNeeded, pending } = useTransact()
  const { data: link, isLoading, isError } = useById<LinkData>({ address: PAYMESH, abi: paymeshAbi, fn: 'getLink', id })
  const [amount, setAmount] = useState('')

  if (isLoading) return <Skeleton className="h-40 w-full" />
  if (isError || !link || link.creator === '0x0000000000000000000000000000000000000000') {
    return <p className="text-sm text-pm-bad">Payment link #{id.toString()} was not found.</p>
  }
  const fixed = link.amount > 0n
  const raw = fixed ? link.amount : tryParseUsdc(amount)
  const err = fixed ? (balance !== undefined && link.amount > balance ? 'Amount is higher than your USDC balance.' : undefined) : amountError(amount, balance)
  const own = address?.toLowerCase() === link.creator.toLowerCase()

  const pay = async () => {
    if (!PAYMESH || !raw) return
    if (!(await approveIfNeeded(PAYMESH, raw))) return
    const res = await transact('Payment link', { address: PAYMESH, abi: paymeshAbi, functionName: 'payLink', args: [id, raw] })
    if (res.ok) setAmount('')
  }

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-semibold text-pm-text">{link.title || `Payment link #${id.toString()}`}</h3>
          <Badge tone={link.active ? 'good' : 'muted'}>{link.active ? 'Active' : 'Closed'}</Badge>
        </div>
        <p className="mt-1 text-xs text-pm-muted">
          Pays <span className="font-mono">{shortAddress(link.creator)}</span> · {decodeCategory(link.category)}
        </p>
      </div>
      {fixed ? (
        <div className="tabular text-3xl font-bold text-pm-violet">{fmtUsdc(link.amount)} USDC</div>
      ) : (
        <AmountInput value={amount} onChange={setAmount} label="Amount to pay" />
      )}
      <FormError>{err}</FormError>
      <WalletGate prompt="Connect your wallet to pay this link.">
        {own && <p className="text-xs text-pm-warn">This is your own link. The contract does not allow paying yourself.</p>}
        <Button className="w-full" onClick={() => void pay()} disabled={!link.active || !raw || Boolean(err) || own || pending !== null} busy={pending !== null}>
          {pending ? `${pending}...` : 'Pay with USDC'}
        </Button>
      </WalletGate>
    </div>
  )
}

export default function PaymentLinks() {
  const { address } = useAccount()
  const search = useSearch()
  const { transact, pending } = useTransact()
  const [amount, setAmount] = useState('')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('General')
  const [openId, setOpenId] = useState(search.get('pay') ?? '')
  const [lookup, setLookup] = useState(search.get('pay') ?? '')
  const [base, setBase] = useState<string>()
  const { rows, isLoading } = useOwned<LinkData>({ address: PAYMESH, abi: paymeshAbi, listFn: 'linksOf', getFn: 'getLink', owner: address })

  useEffect(() => {
    void buildShareLink('/links').then((url) => setBase(url))
  }, [])

  const raw = amount.trim() ? tryParseUsdc(amount) : 0n
  const amtErr = amount.trim() && raw === undefined ? 'Enter an amount greater than 0, or leave it empty to let the payer choose.' : undefined
  const canCreate = Boolean(PAYMESH && title.trim() && raw !== undefined && pending === null)

  const create = async () => {
    if (!PAYMESH || raw === undefined) return
    const res = await transact('Create payment link', {
      address: PAYMESH,
      abi: paymeshAbi,
      functionName: 'createLink',
      args: [raw, encodeCategory(category), title.trim().slice(0, 100)],
    })
    if (res.ok) {
      setTitle('')
      setAmount('')
    }
  }

  const copy = async (id: bigint) => {
    if (!base) return
    try {
      await navigator.clipboard.writeText(`${base}?pay=${id.toString()}`)
      toast.success('Payment link copied')
    } catch {
      toast.error('Could not copy the link')
    }
  }

  const parsedId = /^\d+$/.test(openId) ? BigInt(openId) : undefined

  return (
    <div className="">
      <PageHeader title="Payment Links" subtitle="Create a reusable link anyone can pay in USDC. Funds go straight to your wallet." />
      <NotDeployed />
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="space-y-5">
          <Card className="p-5">
            <WalletGate prompt="Connect your wallet to create payment links.">
              <div className="space-y-4">
                <Field label="Title">
                  <input className="input" maxLength={100} placeholder="e.g. Logo design deposit" value={title} onChange={(e) => setTitle(e.target.value)} />
                </Field>
                <AmountInput value={amount} onChange={setAmount} label="Fixed amount (optional)" max={false} />
                <FormError>{amtErr}</FormError>
                <CategorySelect value={category} onChange={setCategory} />
                <Button className="w-full" onClick={() => void create()} disabled={!canCreate} busy={pending !== null}>
                  <Link2 className="h-4 w-4" /> {pending ? `${pending}...` : 'Create payment link'}
                </Button>
              </div>
            </WalletGate>
          </Card>

          <Card className="p-5">
            <div className="label mb-3">Pay a link</div>
            <div className="flex gap-2">
              <input className="input" inputMode="numeric" placeholder="Link number, e.g. 3" value={lookup} onChange={(e) => setLookup(e.target.value.replace(/\D/g, ''))} />
              <Button variant="ghost" onClick={() => setOpenId(lookup)} disabled={!lookup}>
                Open
              </Button>
            </div>
            {parsedId !== undefined && PAYMESH && (
              <div className="mt-5 border-t border-pm-line/60 pt-5">
                <PayLinkCard id={parsedId} />
              </div>
            )}
          </Card>
        </div>

        <Card className="overflow-hidden">
          <div className="border-b border-pm-line/60 px-4 py-3 label">Your links</div>
          {!address ? (
            <EmptyState title="Connect to see your links" body="Links you create are listed here with live payment totals." />
          ) : isLoading ? (
            <div className="space-y-3 p-4">
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full" />
            </div>
          ) : rows.length === 0 ? (
            <EmptyState title="No links yet" body="Create your first payment link on the left." />
          ) : (
            <ul className="divide-y divide-pm-line/60">
              {rows.map(({ id, data }) => (
                <li key={id.toString()} className="flex flex-wrap items-center gap-3 px-4 py-3.5">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="truncate font-semibold text-pm-text">{data?.title || `Link #${id.toString()}`}</span>
                      {data && <Badge tone={data.active ? 'good' : 'muted'}>{data.active ? 'Active' : 'Closed'}</Badge>}
                    </div>
                    <div className="tabular text-xs text-pm-muted">
                      #{id.toString()} · {data ? (data.amount > 0n ? `${fmtUsdc(data.amount)} USDC` : 'Any amount') : '...'} · {data?.payments ?? 0} payment
                      {data?.payments === 1 ? '' : 's'} · {fmtUsdc(data?.totalPaid ?? 0n)} USDC received
                    </div>
                  </div>
                  <Button variant="ghost" className="min-h-[40px] px-3" onClick={() => void copy(id)} disabled={!base} aria-label="Copy payment link">
                    <Copy className="h-4 w-4" />
                  </Button>
                  {data?.active && (
                    <Button
                      variant="danger"
                      className="min-h-[40px] px-3"
                      disabled={pending !== null}
                      onClick={() => void transact('Close link', { address: PAYMESH!, abi: paymeshAbi, functionName: 'closeLink', args: [id] })}
                    >
                      <X className="h-4 w-4" /> Close
                    </Button>
                  )}
                  {data && !data.active && <Check className="h-4 w-4 text-pm-muted" />}
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </div>
  )
}
