import { Check, X } from 'lucide-react'
import { txUrl } from '@/paymesh/chain'
import { cx } from '@/lib/cx'
import type { SwapStep } from './swapTracker'

const STATE_TEXT: Record<SwapStep['state'], string> = {
  wallet: 'Waiting for your wallet',
  pending: 'Confirming onchain',
  done: 'Done',
  error: 'Failed',
}

function Marker({ state }: { state: SwapStep['state'] }) {
  if (state === 'done') {
    return (
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pm-good/15 text-pm-good">
        <Check className="h-4 w-4" />
      </span>
    )
  }
  if (state === 'error') {
    return (
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pm-bad/15 text-pm-bad">
        <X className="h-4 w-4" />
      </span>
    )
  }
  return (
    <span className={cx('flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2', state === 'wallet' ? 'border-pm-warn' : 'border-pm-violet')}>
      <span className={cx('h-2 w-2 rounded-full', state === 'wallet' ? 'bg-pm-warn' : 'bg-pm-violet')} />
    </span>
  )
}

/** Live status of a swap: every wallet prompt and onchain confirmation as it happens. */
export function SwapStatus({ steps, title }: { steps: SwapStep[]; title: string }) {
  if (steps.length === 0) return null
  return (
    <section className="glass rounded-xl p-5" aria-live="polite" aria-label="Swap status">
      <h2 className="text-sm font-semibold text-pm-text">{title}</h2>
      <ol className="mt-3">
        {steps.map((s, i) => (
          <li key={s.id} className="flex gap-3">
            <div className="flex flex-col items-center">
              <Marker state={s.state} />
              {i < steps.length - 1 && <span className="my-1 w-px flex-1 bg-pm-line" />}
            </div>
            <div className="min-w-0 flex-1 pb-4">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <span className="text-sm font-medium text-pm-text">{s.label}</span>
                <span className={cx('text-xs font-medium', s.state === 'done' ? 'text-pm-good' : s.state === 'error' ? 'text-pm-bad' : 'text-pm-muted')}>{s.id === 'prepare' && s.state === 'pending' ? 'Starting' : STATE_TEXT[s.state]}</span>
              </div>
              {s.detail && <div className="mt-0.5 text-xs text-pm-muted">{s.detail}</div>}
              {(s.hash || s.url) && (
                <a href={s.url ?? txUrl(s.hash as string)} target="_blank" rel="noopener noreferrer" className="mt-0.5 inline-flex min-h-[32px] items-center font-mono text-xs text-pm-violet hover:underline">
                  {s.hash ? `${s.hash.slice(0, 10)}…${s.hash.slice(-6)}` : 'View transaction'}
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
