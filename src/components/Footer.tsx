import { ShieldCheck } from 'lucide-react'
import { useActivity } from '@/paymesh/ActivityProvider'
import { CHAIN_FACTS } from '@/paymesh/chain'
import { Link } from '@/paymesh/router'
import { cx } from './ui'

export function Footer() {
  const { status, head, deployed } = useActivity()
  const online = deployed && (status === 'ready' || status === 'indexing')
  const label = !deployed ? 'Contracts not deployed' : status === 'error' ? 'Network unreachable' : head ? `Network online · block ${head.toLocaleString('en-US')}` : 'Connecting'
  return (
    <footer className="mt-5 border-t border-pm-line/60 pb-24 pt-4 text-xs text-pm-muted md:pb-4">
      <div className="grid items-center gap-4 lg:grid-cols-[1fr_1.1fr_1fr]">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-pm-violet/40 bg-pm-violet/10 text-violet-300">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div className="leading-snug">
            <div className="text-sm font-semibold text-white">Non-custodial by design</div>
            <div>No admin keys. Automated review, not a third-party audit.</div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 text-center">
          <span className="font-display text-4xl leading-none text-pm-violet" aria-hidden="true">
            &ldquo;
          </span>
          <div>
            <div className="text-sm text-white">Powering the future of programmable payments</div>
            <div>One network. Limitless USDC possibilities.</div>
          </div>
          <span className="font-display text-4xl leading-none text-pm-violet" aria-hidden="true">
            &rdquo;
          </span>
        </div>

        <div className="space-y-1.5 lg:text-right">
          <div>
            Built on <span className="font-semibold text-white">{CHAIN_FACTS.name}</span> · USDC by <span className="font-semibold text-white">Circle</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 lg:justify-end">
            <a href="https://docs.arc.io" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Documentation
            </a>
            <a href="https://developers.circle.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Support
            </a>
            <Link to="/settings" className="hover:text-white">
              Security
            </Link>
            <span className="inline-flex items-center gap-1.5 text-pm-text">
              <span className={cx('h-2 w-2 rounded-full', online ? 'bg-pm-good' : status === 'error' ? 'bg-pm-bad' : 'bg-pm-warn')} />
              {label}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
