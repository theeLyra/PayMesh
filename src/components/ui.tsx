import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { AlertTriangle, ExternalLink, PlugZap } from 'lucide-react'
import { ConnectKitButton } from 'connectkit'
import { useAccount } from 'wagmi'
import { PAYMESH } from '@/paymesh/contracts'
import { IS_MAINNET } from '@/paymesh/network'
import { BackButton } from './BackButton'

import { cx } from '@/lib/cx'
export { cx }

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return <section className={cx('glass rounded-xl', className)}>{children}</section>
}

export function PageHeader({ title, subtitle, action }: { title: string; subtitle: string; action?: ReactNode }) {
  return (
    <div className="mb-6">
      <BackButton fallback="/dashboard" className="mb-4" />
      <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-pm-text text-balance sm:text-3xl">{title}</h1>
        <p className="mt-1 max-w-xl text-pretty text-sm text-pm-muted">{subtitle}</p>
      </div>
      {action}
      </div>
    </div>
  )
}

type Variant = 'primary' | 'ghost' | 'danger'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  busy?: boolean
}

export function Button({ variant = 'primary', busy, className, children, disabled, ...rest }: ButtonProps) {
  const styles: Record<Variant, string> = {
    primary: 'btn-primary',
    ghost: 'border border-pm-line bg-pm-panel text-pm-text hover:bg-pm-text/5',
    danger: 'border border-pm-bad/40 bg-pm-bad/10 text-pm-bad hover:bg-pm-bad/20',
  }
  return (
    <button
      {...rest}
      disabled={disabled || busy}
      className={cx(
        'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-50',
        styles[variant],
        className,
      )}
    >
      {busy && <span aria-hidden="true" className="h-2 w-2 rounded-full bg-current opacity-70" />}
      {children}
    </button>
  )
}

export function Field({ label, hint, children }: { label: string; hint?: ReactNode; children: ReactNode }) {
  return (
    <label className="block">
      <span className="label mb-1.5 block">{label}</span>
      {children}
      {hint && <span className="mt-1.5 block text-xs text-pm-muted">{hint}</span>}
    </label>
  )
}

export function Badge({ tone = 'muted', children }: { tone?: 'good' | 'warn' | 'bad' | 'violet' | 'muted'; children: ReactNode }) {
  const tones = {
    good: 'border-pm-good/40 bg-pm-good/10 text-pm-good',
    warn: 'border-pm-warn/40 bg-pm-warn/10 text-pm-warn',
    bad: 'border-pm-bad/40 bg-pm-bad/10 text-pm-bad',
    violet: 'border-pm-violet/40 bg-pm-violet/10 text-pm-violet',
    muted: 'border-pm-line bg-pm-text/[0.05] text-pm-muted',
  }
  return <span className={cx('inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider', tones[tone])}>{children}</span>
}

export function EmptyState({ title, body, action }: { title: string; body: string; action?: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-6 py-12 text-center">
      <div className="text-lg font-semibold text-pm-text">{title}</div>
      <p className="max-w-sm text-pretty text-sm text-pm-muted">{body}</p>
      {action && <div className="mt-3">{action}</div>}
    </div>
  )
}

export function Skeleton({ className }: { className?: string }) {
  return <div className={cx('rounded-md bg-pm-text/[0.07]', className)} />
}

export function ExplorerLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-pm-cyan hover:underline">
      {children}
      <ExternalLink className="h-3 w-3" />
    </a>
  )
}

/** Banner shown on any page when the PayMesh contract address is not configured. */
export function NotDeployed() {
  if (PAYMESH) return null
  return (
    <div className="mb-5 flex items-start gap-3 rounded-xl border border-pm-warn/40 bg-pm-warn/10 p-4 text-sm">
      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-pm-warn" />
      <div className="text-pretty text-pm-text/90">
        <span className="font-semibold text-pm-warn">Contract not deployed yet.</span> The PayMesh contract has no address configured, so this page shows no live data and sending is
        disabled. Deploy it and set <span className="font-mono text-xs">{IS_MAINNET ? 'VITE_PAYMESH_ADDRESS_MAINNET' : 'VITE_PAYMESH_ADDRESS'}</span> in <span className="font-mono text-xs">.env</span>.
      </div>
    </div>
  )
}

/** Wraps a write action: shows a connect prompt until a wallet is connected. */
export function WalletGate({ children, prompt = 'Connect your wallet to continue.' }: { children: ReactNode; prompt?: string }) {
  const { isConnected } = useAccount()
  if (isConnected) return <>{children}</>
  return (
    <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-pm-line p-6 text-center">
      <PlugZap className="h-6 w-6 text-pm-violet" />
      <p className="text-sm text-pm-muted">{prompt}</p>
      <ConnectKitButton.Custom>
        {({ show }) => (
          <Button onClick={show} className="px-6">
            Connect wallet
          </Button>
        )}
      </ConnectKitButton.Custom>
    </div>
  )
}
