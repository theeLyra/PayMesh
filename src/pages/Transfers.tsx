import { useMemo, useState } from 'react'
import { useAccount } from 'wagmi'
import { isAddress } from 'viem'
import { ExternalLink, Send } from 'lucide-react'
import { paymeshAbi } from '@/paymesh/abis'
import { useActivity } from '@/paymesh/activityContext'
import { PAYMESH } from '@/paymesh/contracts'
import { addressUrl } from '@/paymesh/chain'
import { encodeCategory, shortAddress, tryParseUsdc } from '@/paymesh/format'
import { LogoMark } from '@/components/Logo'
import { useSearch } from '@/paymesh/router'
import { ScanLine } from 'lucide-react'
import { ScanModal } from '@/components/ScanModal'
import { useUsdcBalance, useTransact } from '@/paymesh/useTransact'
import { AmountInput, CategorySelect, FormError, amountError } from '@/components/forms'
import { FeedRow } from '@/components/TransactionFeed'
import { useNow } from '@/paymesh/useNow'
import { Button, Card, EmptyState, Field, NotDeployed, PageHeader, WalletGate } from '@/components/ui'

/** Shows which contract carries the payment: your own PayMesh router. */
function RouterBadge({ router }: { router: string | undefined }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-pm-line bg-pm-bg px-3 py-2.5">
      <LogoMark size={30} />
      <div className="min-w-0 flex-1">
        <div className="label">Payment router</div>
        <div className="truncate text-sm font-semibold text-pm-text">PayMesh {router && <span className="font-mono text-xs font-medium text-pm-muted">{shortAddress(router)}</span>}</div>
      </div>
      {router && (
        <a href={addressUrl(router)} target="_blank" rel="noopener noreferrer" aria-label="View the PayMesh router on the explorer" className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-pm-muted hover:bg-pm-text/5 hover:text-pm-text">
          <ExternalLink className="h-4 w-4" />
        </a>
      )}
    </div>
  )
}

export default function Transfers() {
  const search = useSearch()
  const { address } = useAccount()
  const { balance } = useUsdcBalance()
  const { settlements, status } = useActivity()
  const { transact, approveIfNeeded, pending } = useTransact()
  const now = useNow()

  const [to, setTo] = useState(() => {
    const preset = search.get('to') ?? ''
    return isAddress(preset) ? preset : ''
  })
  const [amount, setAmount] = useState(() => {
    const preset = search.get('amount') ?? ''
    return /^\d*\.?\d{0,6}$/.test(preset) ? preset : ''
  })
  const [scanning, setScanning] = useState(false)
  const [category, setCategory] = useState('General')
  const [memo, setMemo] = useState('')

  const raw = tryParseUsdc(amount)
  const amtErr = amountError(amount, balance)
  const toErr = to && !isAddress(to) ? 'Enter a valid wallet address.' : to && address && to.toLowerCase() === address.toLowerCase() ? 'You cannot send to yourself.' : undefined
  const router = PAYMESH
  const canSend = Boolean(router && raw && isAddress(to) && !amtErr && !toErr && pending === null)

  const mine = useMemo(
    () => (address ? settlements.filter((s) => s.from.toLowerCase() === address.toLowerCase() || s.to.toLowerCase() === address.toLowerCase()) : []),
    [settlements, address],
  )

  const send = async () => {
    if (!router || !raw || !isAddress(to)) return
    const approved = await approveIfNeeded(router, raw)
    if (!approved) return
    const res = await transact('Transfer', {
      address: router,
      abi: paymeshAbi,
      functionName: 'pay',
      args: [to, raw, encodeCategory(category), memo.trim().slice(0, 140)],
    })
    if (res.ok) {
      setAmount('')
      setMemo('')
    }
  }

  return (
    <div className="">
      {scanning && (
        <ScanModal
          onClose={() => setScanning(false)}
          onResult={(r) => {
            setTo(r.to)
            if (r.amount) setAmount(r.amount)
            setScanning(false)
          }}
        />
      )}
      <PageHeader title="Transfers" subtitle="Send USDC to any wallet through the PayMesh contract. Every transfer is recorded onchain with a category." />
      <NotDeployed />
      <div className="grid gap-5 lg:grid-cols-[minmax(0,460px)_1fr]">
        <Card className="p-5">
          <WalletGate prompt="Connect your wallet to send USDC.">
            <div className="space-y-4">
              <Field label="Recipient wallet">
                <div className="flex gap-2">
                  <input className="input font-mono text-sm" placeholder="0x..." value={to} onChange={(e) => setTo(e.target.value.trim())} spellCheck={false} />
                  <button
                    type="button"
                    onClick={() => setScanning(true)}
                    aria-label="Scan a payment QR code"
                    title="Scan a payment QR code"
                    className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-[10px] border border-pm-line bg-pm-panel text-pm-text hover:bg-pm-text/5"
                  >
                    <ScanLine className="h-5 w-5" />
                  </button>
                </div>
              </Field>
              <FormError>{toErr}</FormError>
              <AmountInput value={amount} onChange={setAmount} />
              <FormError>{amtErr}</FormError>
              <CategorySelect value={category} onChange={setCategory} />
              <Field label="Memo (optional)">
                <input className="input" maxLength={140} placeholder="What is this payment for?" value={memo} onChange={(e) => setMemo(e.target.value)} />
              </Field>
              <RouterBadge router={router} />
              <Button className="w-full" onClick={() => void send()} disabled={!canSend} busy={pending !== null}>
                <Send className="h-4 w-4" />
                {pending ? `${pending}...` : 'Send USDC'}
              </Button>
              <p className="text-xs text-pm-muted text-pretty">
                The first transfer asks you to approve exactly the amount you send, then sends it. Arc fees are paid in USDC.
              </p>
            </div>
          </WalletGate>
        </Card>

        <Card className="overflow-hidden">
          <div className="border-b border-pm-line/60 px-4 py-3 label">Your transfers</div>
          {!address ? (
            <EmptyState title="Connect to see your history" body="Payments you send and receive through PayMesh show up here." />
          ) : mine.length === 0 ? (
            <EmptyState
              title={status === 'ready' ? 'No transfers yet' : 'Reading the network'}
              body={status === 'ready' ? 'Your confirmed payments will appear here as soon as you send or receive one.' : 'Your history loads after the contracts are scanned.'}
            />
          ) : (
            <ul className="divide-y divide-pm-line/60">
              {mine.slice(0, 12).map((s) => (
                <FeedRow key={s.id} s={s} me={address} now={now} />
              ))}
            </ul>
          )}
        </Card>
      </div>
    </div>
  )
}
