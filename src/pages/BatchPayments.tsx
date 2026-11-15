import { useMemo, useState } from 'react'
import { useAccount } from 'wagmi'
import { getAddress, isAddress, type Address } from 'viem'
import { Layers } from 'lucide-react'
import { paymeshAbi } from '@/paymesh/abis'
import { PAYMESH } from '@/paymesh/contracts'
import { encodeCategory, fmtUsdc, shortAddress, tryParseUsdc } from '@/paymesh/format'
import { useTransact, useUsdcBalance } from '@/paymesh/useTransact'
import { CategorySelect } from '@/components/forms'
import { Button, Card, Field, NotDeployed, PageHeader, WalletGate } from '@/components/ui'

interface Row {
  line: number
  address?: Address
  amount?: bigint
  error?: string
}

const MAX_ROWS = 200

function parseRows(text: string, me?: string): Row[] {
  const rows: Row[] = []
  text.split('\n').forEach((raw, i) => {
    const line = raw.trim()
    if (!line) return
    const parts = line.split(/[\s,;]+/).filter(Boolean)
    const [a, v] = parts
    const amount = v ? tryParseUsdc(v) : undefined
    if (parts.length < 2 || !a || !isAddress(a)) rows.push({ line: i + 1, error: 'Expected "address, amount"' })
    else if (amount === undefined) rows.push({ line: i + 1, error: 'Invalid amount (max 6 decimals, greater than 0)' })
    else if (me && a.toLowerCase() === me.toLowerCase()) rows.push({ line: i + 1, error: 'Cannot pay your own wallet' })
    else rows.push({ line: i + 1, address: getAddress(a), amount })
  })
  return rows
}

export default function BatchPayments() {
  const { address } = useAccount()
  const { balance } = useUsdcBalance()
  const { transact, approveIfNeeded, pending } = useTransact()
  const [text, setText] = useState('')
  const [category, setCategory] = useState('Payroll')

  const rows = useMemo(() => parseRows(text, address), [text, address])
  const good = rows.filter((r) => r.address && r.amount !== undefined)
  const bad = rows.filter((r) => r.error)
  const total = good.reduce((sum, r) => sum + (r.amount ?? 0n), 0n)
  const tooMany = good.length > MAX_ROWS
  const insufficient = balance !== undefined && total > balance
  const canSend = Boolean(PAYMESH && good.length > 0 && bad.length === 0 && !tooMany && !insufficient && pending === null)

  const send = async () => {
    const batch = PAYMESH
    if (!batch) return
    if (!(await approveIfNeeded(batch, total))) return
    const res = await transact('Batch payment', {
      address: batch,
      abi: paymeshAbi,
      functionName: 'batchPay',
      args: [good.map((r) => r.address), good.map((r) => r.amount), encodeCategory(category)],
    })
    if (res.ok) setText('')
  }

  return (
    <div className="animate-rise">
      <PageHeader title="Batch Payments" subtitle="Pay up to 200 wallets in one transaction. Paste one payment per line as: address, amount." />
      <NotDeployed />
      <div className="grid gap-5 lg:grid-cols-2">
        <Card className="p-5">
          <WalletGate prompt="Connect your wallet to send a batch.">
            <div className="space-y-4">
              <Field label="Payments" hint="Example: 0xAbc...123, 25.50">
                <textarea
                  className="input min-h-[220px] resize-y py-3 font-mono text-[13px] leading-6"
                  placeholder={'0x..., 25.00\n0x..., 100.00'}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  spellCheck={false}
                />
              </Field>
              <CategorySelect value={category} onChange={setCategory} />
              {tooMany && <p className="text-xs text-pm-bad">A batch is limited to {MAX_ROWS} payments.</p>}
              {insufficient && <p className="text-xs text-pm-bad">Total is higher than your USDC balance.</p>}
              <Button className="w-full" onClick={() => void send()} disabled={!canSend} busy={pending !== null}>
                <Layers className="h-4 w-4" />
                {pending ? `${pending}...` : `Send ${good.length || ''} payment${good.length === 1 ? '' : 's'}`}
              </Button>
              <p className="text-xs text-pm-muted text-pretty">The first batch asks you to approve the batch total, then sends every payment in a single transaction.</p>
            </div>
          </WalletGate>
        </Card>

        <Card className="overflow-hidden">
          <div className="flex items-center justify-between border-b border-pm-line/60 px-4 py-3">
            <span className="label">Preview</span>
            <span className="tabular text-sm font-semibold text-white">{fmtUsdc(total)} USDC total</span>
          </div>
          {rows.length === 0 ? (
            <p className="px-6 py-12 text-center text-sm text-pm-muted">Your validated payments appear here before anything is sent.</p>
          ) : (
            <ul className="max-h-[440px] divide-y divide-pm-line/60 overflow-y-auto">
              {rows.map((r) => (
                <li key={r.line} className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm">
                  <span className="w-8 text-xs text-pm-muted">#{r.line}</span>
                  {r.error ? (
                    <span className="flex-1 text-xs text-pm-bad">{r.error}</span>
                  ) : (
                    <>
                      <span className="flex-1 font-mono text-xs text-pm-text">{r.address && shortAddress(r.address)}</span>
                      <span className="tabular font-semibold text-white">{fmtUsdc(r.amount ?? 0n)} USDC</span>
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </div>
  )
}
