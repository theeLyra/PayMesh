import { useEffect, useMemo, useRef, useState } from 'react'
import { Check, ChevronDown, Search } from 'lucide-react'
import { ChainLogo } from '@/components/ChainLogo'
import { cx } from '@/lib/cx'

export interface ChainOption {
  id: string
  name: string
}

interface Props {
  value: string
  options: ChainOption[]
  onChange: (id: string) => void
  label: string
  disabled?: boolean
}

/** A chain button with its official logo and a searchable list of every supported network. */
export function ChainPicker({ value, options, onChange, label, disabled }: Props) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const box = useRef<HTMLDivElement>(null)
  const current = options.find((o) => o.id === value) ?? options[0]
  const shown = useMemo(() => {
    const q = query.trim().toLowerCase()
    return q ? options.filter((o) => o.name.toLowerCase().includes(q)) : options
  }, [options, query])

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

  const toggle = () => {
    setQuery('')
    setOpen((o) => !o)
  }

  return (
    <div ref={box} className="relative">
      <button
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${label}: ${current?.name}. Change network`}
        onClick={toggle}
        className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-pm-line bg-pm-panel py-1.5 pl-2 pr-3 text-base font-semibold text-pm-text hover:bg-pm-text/5 disabled:opacity-60"
      >
        <ChainLogo id={current?.id ?? ''} name={current?.name} size={26} />
        {current?.name}
        <ChevronDown className="h-4 w-4 text-pm-muted" />
      </button>
      {open && <div aria-hidden className="fixed inset-0 z-[60] bg-black/40 sm:hidden" onClick={() => setOpen(false)} />}
      {open && (
        <div className="fixed inset-x-3 bottom-3 z-[70] overflow-hidden rounded-xl border border-pm-line bg-pm-deep shadow-lg sm:absolute sm:inset-auto sm:left-0 sm:z-30 sm:mt-2 sm:w-[300px]">
          <div className="relative border-b border-pm-line p-2">
            <Search className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-pm-muted" />
            <input autoFocus aria-label="Search networks" placeholder="Search networks" value={query} onChange={(e) => setQuery(e.target.value)} className="input !min-h-[40px] !pl-9" />
          </div>
          <ul role="listbox" aria-label={label} className="max-h-[50vh] overflow-y-auto p-1 sm:max-h-72">
            {shown.length === 0 && <li className="px-3 py-4 text-center text-sm text-pm-muted">No network matches.</li>}
            {shown.map((o) => {
              const selected = o.id === value
              return (
                <li key={o.id} role="option" aria-selected={selected}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(o.id)
                      setOpen(false)
                    }}
                    className={cx('flex min-h-[48px] w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium text-pm-text hover:bg-pm-text/5', selected && 'bg-pm-violet/10')}
                  >
                    <ChainLogo id={o.id} name={o.name} size={28} />
                    <span className="flex-1">{o.name}</span>
                    {selected && <Check className="h-4 w-4 text-pm-violet" />}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
