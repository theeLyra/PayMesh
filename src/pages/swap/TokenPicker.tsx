import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import { TokenLogo } from '@/components/TokenLogo'
import { cx } from '@/lib/cx'
import { WALLET_TOKENS, fmtToken } from '@/paymesh/tokens'

interface Props {
  value: string
  onChange: (symbol: string) => void
  balances: Record<string, bigint | undefined>
  label: string
}

/** A token button with its logo and a list that shows each token's logo, name and your balance. */
export function TokenPicker({ value, onChange, balances, label }: Props) {
  const [open, setOpen] = useState(false)
  const box = useRef<HTMLDivElement>(null)
  const current = WALLET_TOKENS.find((t) => t.symbol === value) ?? WALLET_TOKENS[0]

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (box.current && !box.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={box} className="relative shrink-0">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${label}: ${current.symbol}. Change token`}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-pm-line bg-pm-panel py-1.5 pl-2 pr-3 text-base font-semibold text-pm-text hover:bg-pm-text/5"
      >
        <TokenLogo symbol={current.symbol} size={28} />
        {current.symbol}
        <ChevronDown className="h-4 w-4 text-pm-muted" />
      </button>
      {open && (
        <ul role="listbox" aria-label={label} className="absolute right-0 z-30 mt-2 w-[280px] max-w-[85vw] overflow-hidden rounded-xl border border-pm-line bg-pm-deep p-1 shadow-lg">
          {WALLET_TOKENS.map((t) => {
            const bal = balances[t.symbol]
            const selected = t.symbol === value
            return (
              <li key={t.symbol} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(t.symbol)
                    setOpen(false)
                  }}
                  className={cx('flex min-h-[52px] w-full items-center gap-3 rounded-lg px-3 py-2 text-left hover:bg-pm-text/5', selected && 'bg-pm-violet/10')}
                >
                  <TokenLogo symbol={t.symbol} size={32} />
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-pm-text">{t.symbol}</span>
                    <span className="block truncate text-xs text-pm-muted">{t.name}</span>
                  </span>
                  <span className="text-right text-xs tabular text-pm-muted">{bal === undefined ? '—' : fmtToken(bal, t)}</span>
                  {selected && <Check className="h-4 w-4 text-pm-violet" />}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
