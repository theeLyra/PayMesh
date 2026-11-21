import { useMemo, useState } from 'react'
import { useAccount } from 'wagmi'
import { getAddress, isAddress, type Address } from 'viem'
import { ClipboardPaste, Layers, Plus, Trash2 } from 'lucide-react'
import { paymeshAbi } from '@/paymesh/abis'
import { PAYMESH } from '@/paymesh/contracts'
import { encodeCategory, fmtUsdc, shortAddress, tryParseUsdc } from '@/paymesh/format'
import { useTransact, useUsdcBalance } from '@/paymesh/useTransact'
import { CategorySelect } from '@/components/forms'
import { Button, Card, Field, NotDeployed, PageHeader, WalletGate } from '@/components/ui'

interface DraftRow {
  address: string
  amount: string
}

interface Checked {
  index: number
  address?: Address
  amount?: bigint
  error?: string
}

const MAX_ROWS = 200
const emptyRow = (): DraftRow => ({ address: '', amount: '' })

/** Validates one row. Fully empty rows are ignored by the caller. */
function checkRow(row: DraftRow, index: number, me?: string): Checked {
  const address = row.address.trim()
  const amount = tryParseUsdc(row.amount)
  if (!isAddress(address)) return { index, error: address ? 'Enter a valid wallet address' : 'Wallet address is required' }
  if (amount === undefined) return { index, error: 'Enter an amount above 0 (max 6 decimals)' }
  if (me && address.toLowerCase() === me.toLowerCase()) return { index, error: 'You cannot pay your own wallet' }
  return { index, address: getAddress(address), amount }
}

function parsePasted(text: string): DraftRow[] {
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [address = '', amount = ''] = line.split(/[\s,;]+/).filter(Boolean)
      return { address, amount }
    })
}

export default function BatchPayments() {
  const { address: me } = useAccount()
  const { balance } = useUsdcBalance()
  const { transact, approveIfNeeded, pending } = useTransact()
  const [rows, setRows] = useState<DraftRow[]>([emptyRow(), emptyRow()])
  const [category, setCategory] = useState('Payroll')
  const [sameAmount, setSameAmount] = useState('')
  const [pasteOpen, setPasteOpen] = useState(false)
  const [pasted, setPasted] = useState('')

  const update = (i: number, patch: Partial<DraftRow>) => setRows((r) => r.map((row, idx) => (idx === i ? { ...row, ...patch } : row)))

  const checked = useMemo(
    () => rows.map((row, i) => ({ row, result: checkRow(row, i, me) })).filter(({ row }) => row.address.trim() || row.amount.trim()),
    [rows, me],
  )
  const good = checked.map((c) => c.result).filter((r) => r.address && r.amount !== undefined)
  const bad = checked.filter((c) => c.result.error)
  const total = good.reduce((sum, r) => sum + (r.amount ?? 0n), 0n)
  const tooMany = good.length > MAX_ROWS
  const insufficient = balance !== undefined && total > balance
  const canSend = Boolean(PAYMESH && good.length > 0 && bad.length === 0 && !tooMany && !insufficient && pending === null)
  const sameRaw = tryParseUsdc(sameAmount)

  const applySame = () => {
    if (sameRaw === undefined) return
    setRows((r) => r.map((row) => ({ ...row, amount: sameAmount })))
  }

  const importPasted = () => {
    const parsed = parsePasted(pasted)
    if (parsed.length === 0) return
    setRows((r) => [...r.filter((row) => row.address.trim() || row.amount.trim()), ...parsed])
    setPasted('')
    setPasteOpen(false)
  }

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
    if (res.ok) setRows([emptyRow(), emptyRow()])
  }

  return (
    <div className="">
      <PageHeader title="Batch Payments" subtitle="Pay up to 200 wallets in one transaction. Add each wallet with its own amount, or set one amount for everyone." />
      <NotDeployed />
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
        <Card className="p-5">
          <WalletGate prompt="Connect your wallet to send a batch.">
            <div className="space-y-4">
              <div className="flex items-end gap-2">
                <div className="flex-1">
                  <Field label="Same amount for everyone (optional)">
                    <input className="input tabular" inputMode="decimal" placeholder="e.g. 25.00" value={sameAmount} onChange={(e) => setSameAmount(e.target.value.replace(/[^0-9.]/g, ''))} />
                  </Field>
                </div>
                <Button variant="ghost" onClick={applySame} disabled={sameRaw === undefined}>
                  Apply to all
                </Button>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="label">Recipients ({rows.length})</span>
                  <button onClick={() => setPasteOpen((o) => !o)} className="inline-flex items-center gap-1.5 text-xs font-semibold text-pm-violet hover:text-pm-text">
                    <ClipboardPaste className="h-3.5 w-3.5" /> Paste a list
                  </button>
                </div>

                {pasteOpen && (
                  <div className="space-y-2 rounded-xl border border-pm-line bg-pm-text/[0.03] p-3">
                    <textarea
                      className="input min-h-[110px] resize-y py-3 font-mono text-[13px] leading-6"
                      placeholder={'0x..., 25.00\n0x..., 100.00'}
                      value={pasted}
                      onChange={(e) => setPasted(e.target.value)}
                      spellCheck={false}
                    />
                    <Button variant="ghost" className="w-full" onClick={importPasted} disabled={!pasted.trim()}>
                      Add pasted wallets to the list
                    </Button>
                  </div>
                )}

                {rows.map((row, i) => {
                  const result = checked.find((c) => c.result.index === i)?.result
                  return (
                    <div key={i} className="space-y-1">
                      <div className="flex gap-2">
                        <input
                          className="input min-w-0 flex-1 font-mono text-xs"
                          placeholder="Wallet address 0x..."
                          aria-label={`Recipient ${i + 1} address`}
                          value={row.address}
                          onChange={(e) => update(i, { address: e.target.value.trim() })}
                          spellCheck={false}
                        />
                        <div className="relative w-32 shrink-0">
                          <input
                            className="input tabular pr-14"
                            inputMode="decimal"
                            placeholder="Amount"
                            aria-label={`Recipient ${i + 1} amount`}
                            value={row.amount}
                            onChange={(e) => update(i, { amount: e.target.value.replace(/[^0-9.]/g, '') })}
                          />
                          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[11px] font-semibold text-pm-muted">USDC</span>
                        </div>
                        <Button variant="ghost" className="px-3" aria-label={`Remove recipient ${i + 1}`} disabled={rows.length <= 1} onClick={() => setRows((r) => r.filter((_, idx) => idx !== i))}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      {result?.error && <p className="text-xs text-pm-bad">{result.error}</p>}
                    </div>
                  )
                })}

                <Button variant="ghost" className="w-full" onClick={() => setRows((r) => [...r, emptyRow()])} disabled={rows.length >= MAX_ROWS}>
                  <Plus className="h-4 w-4" /> Add recipient
                </Button>
              </div>

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

        <Card className="h-fit overflow-hidden">
          <div className="flex items-center justify-between border-b border-pm-line/60 px-4 py-3">
            <span className="label">Summary</span>
            <span className="tabular text-sm font-semibold text-pm-text">{fmtUsdc(total)} USDC total</span>
          </div>
          {good.length === 0 ? (
            <p className="px-6 py-12 text-center text-sm text-pm-muted">Valid recipients appear here with the batch total before anything is sent.</p>
          ) : (
            <ul className="max-h-[440px] divide-y divide-pm-line/60 overflow-y-auto">
              {good.map((r) => (
                <li key={r.index} className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm">
                  <span className="w-8 text-xs text-pm-muted">#{r.index + 1}</span>
                  <span className="flex-1 font-mono text-xs text-pm-text">{r.address && shortAddress(r.address)}</span>
                  <span className="tabular font-semibold text-pm-text">{fmtUsdc(r.amount ?? 0n)} USDC</span>
                </li>
              ))}
            </ul>
          )}
          {balance !== undefined && (
            <div className="border-t border-pm-line/60 px-4 py-3 text-xs text-pm-muted">
              Your balance: <span className="tabular text-pm-text">{fmtUsdc(balance)} USDC</span>
              {good.length > 0 && !insufficient && (
                <>
                  {' · '}after sending: <span className="tabular text-pm-text">{fmtUsdc(balance - total)} USDC</span>
                </>
              )}
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
