import { ArrowDownLeft, ArrowLeftRight, ArrowUpRight, ExternalLink, FileText, ShieldCheck } from 'lucide-react'
import type { WalletTx, WalletTxKind } from '@/paymesh/walletHistory'
import { txUrl } from '@/paymesh/chain'
import { timeAgo } from '@/paymesh/format'
import { cx } from '@/lib/cx'

const ICONS: Record<WalletTxKind, typeof ArrowUpRight> = {
  sent: ArrowUpRight,
  payment: ArrowUpRight,
  received: ArrowDownLeft,
  swap: ArrowLeftRight,
  approval: ShieldCheck,
  contract: FileText,
  deploy: FileText,
}

/** One onchain transaction, one row. */
export function WalletTxRow({ tx, now }: { tx: WalletTx; now: number }) {
  const Icon = ICONS[tx.kind]
  const incoming = tx.direction === 'in'
  return (
    <li className="flex items-center gap-3 px-4 py-3 hover:bg-pm-text/[0.03]">
      <div className={cx('flex h-9 w-9 shrink-0 items-center justify-center rounded-lg', incoming ? 'bg-pm-good/10 text-pm-good' : 'bg-pm-violet/10 text-pm-violet')}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="truncate text-sm font-medium text-pm-text">{tx.title}</span>
          {!tx.ok && <span className="shrink-0 rounded-md bg-pm-bad/10 px-1.5 py-0.5 text-[11px] font-semibold text-pm-bad">Failed</span>}
        </div>
        <div className="truncate text-xs text-pm-muted">{tx.detail || '\u00a0'}</div>
      </div>
      <div className="max-w-[60%] shrink-0 text-right">
        {tx.amount && (
          <div className={cx('tabular break-words text-sm font-bold', incoming ? 'text-pm-good' : 'text-pm-text', !tx.ok && 'line-through opacity-60')}>{tx.amount}</div>
        )}
        <div className="flex items-center justify-end gap-1.5 text-xs text-pm-muted">
          <span>{timeAgo(tx.time, now)}</span>
          <a
            href={txUrl(tx.hash)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View this transaction on the Arc explorer"
            className="-m-2 inline-flex h-10 w-10 items-center justify-center rounded-lg text-pm-muted hover:text-pm-text"
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </li>
  )
}
