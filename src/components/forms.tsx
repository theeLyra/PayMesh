import { TokenUSDC } from '@web3icons/react'
import { useAccount } from 'wagmi'
import { CATEGORIES } from '@/paymesh/contracts'
import { fmtUsdc, tryParseUsdc } from '@/paymesh/format'
import { formatUsdc } from '@/onchain-money'
import { useUsdcBalance } from '@/paymesh/useTransact'
import { Field } from './ui'

export function CategorySelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <Field label="Category">
      <select className="input" value={value} onChange={(e) => onChange(e.target.value)}>
        {CATEGORIES.map((c) => (
          <option key={c} value={c} className="bg-pm-deep">
            {c}
          </option>
        ))}
      </select>
    </Field>
  )
}

/** USDC amount input showing the live wallet balance and a Max shortcut. Validation errors are returned by `amountError`. */
export function AmountInput({ value, onChange, label = 'Amount', max = true }: { value: string; onChange: (v: string) => void; label?: string; max?: boolean }) {
  const { isConnected } = useAccount()
  const { balance } = useUsdcBalance()
  return (
    <Field
      label={label}
      hint={
        isConnected && balance !== undefined ? (
          <span>
            Balance: <span className="tabular text-pm-text">{fmtUsdc(balance)} USDC</span>
          </span>
        ) : undefined
      }
    >
      <div className="relative">
        <input
          className="input tabular pr-28 text-lg"
          inputMode="decimal"
          placeholder="0.00"
          value={value}
          onChange={(e) => onChange(e.target.value.replace(/[^0-9.]/g, ''))}
        />
        <div className="absolute inset-y-0 right-3 flex items-center gap-2">
          {max && balance !== undefined && balance > 0n && (
            <button type="button" onClick={() => onChange(formatUsdc(balance))} className="min-h-[36px] rounded-md bg-pm-violet/20 px-2.5 py-1 text-[11px] font-bold text-pm-violet hover:bg-pm-violet/30">
              MAX
            </button>
          )}
          <span className="flex items-center gap-1 text-sm font-semibold text-pm-muted">
            <TokenUSDC variant="branded" size={16} /> USDC
          </span>
        </div>
      </div>
    </Field>
  )
}

/** Returns a user-facing problem with an amount (or undefined when it is fine). */
export function amountError(value: string, balance: bigint | undefined): string | undefined {
  if (!value.trim()) return undefined
  const raw = tryParseUsdc(value)
  if (raw === undefined) return 'Enter an amount greater than 0 with up to 6 decimals.'
  if (balance !== undefined && raw > balance) return 'Amount is higher than your USDC balance.'
  return undefined
}

export function FormError({ children }: { children?: string }) {
  if (!children) return null
  return <p className="text-xs text-pm-bad">{children}</p>
}
