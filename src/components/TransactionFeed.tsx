import { ArrowDownLeft, ArrowUpRight, ArrowLeftRight, ExternalLink } from 'lucide-react'
import type { Address } from 'viem'
import type { Settlement } from '@/paymesh/activityContext'
import { txUrl } from '@/paymesh/chain'
import { SOURCE_LABELS } from '@/paymesh/contracts'
import { decodeCategory, fmtUsdc, shortAddress, timeAgo } from '@/paymesh/format'
import { Link } from '@/paymesh/router'
import { useNow } from '@/paymesh/useNow'
import { Skeleton, cx } from './ui'

export function FeedRow({ s, me, now }: { s: Settlement; me?: Address; now: number }) {
  const mine = me?.toLowerCase()
  const sent = mine !== undefined && s.from.toLowerCase() === mine
  const received = mine !== undefined && s.to.toLowerCase() === mine
  const Icon = sent ? ArrowUpRight : received ? ArrowDownLeft : ArrowLeftRight
  const heading = sent ? 'You sent' : received ? 'You received' : 'Payment'
  return (
    <li className="flex items-center gap-3 px-4 py-3 hover:bg-pm-text/[0.03]">
      <div
        className={cx(
          'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg',
          sent && 'bg-pm-violet/12 text-pm-violet',
          received && 'bg-pm-cyan/12 text-pm-cyan',
          !sent && !received && 'bg-pm-text/[0.06] text-pm-muted',
        )}
      >
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-sm font-medium text-pm-text">{heading}</span>
          <span className={cx('tabular text-sm font-semibold', received ? 'text-pm-cyan' : 'text-pm-text')}>
            {sent ? '-' : received ? '+' : ''}
            {fmtUsdc(s.amount)} <span className="text-xs font-normal text-pm-muted">USDC</span>
          </span>
        </div>
        <div className="mt-0.5 flex items-center justify-between gap-2 text-xs text-pm-muted">
          <span className="truncate">
            <span className="font-mono">{shortAddress(s.from)}</span> to <span className="font-mono">{shortAddress(s.to)}</span> · {decodeCategory(s.category)} · {SOURCE_LABELS[s.source] ?? 'Payment'}
          </span>
          <a
            href={txUrl(s.txHash)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View transaction on the Arc explorer"
            className="inline-flex shrink-0 items-center gap-1 hover:text-pm-text"
          >
            {timeAgo(s.timestamp, now)}
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </li>
  )
}

interface FeedProps {
  settlements: Settlement[]
  me?: Address
  limit?: number
  loading: boolean
  deployed: boolean
  error?: string
}

export function TransactionFeed({ settlements, me, limit = 6, loading, deployed, error }: FeedProps) {
  const now = useNow(10_000)
  const rows = settlements.slice(0, limit)
  return (
    <section className="glass flex h-full min-h-[320px] flex-col rounded-xl">
      <div className="flex items-center justify-between border-b border-pm-line px-4 py-3">
        <h2 className="text-sm font-semibold text-pm-text">Recent transactions</h2>
        <Link to="/activity" className="text-xs font-semibold text-pm-violet hover:underline">
          View all
        </Link>
      </div>
      {loading && rows.length === 0 ? (
        <div className="space-y-3 p-4">
          {[0, 1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-12 w-full" />
          ))}
        </div>
      ) : rows.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-1 px-6 py-10 text-center">
          <div className="text-base font-semibold text-pm-text">{!deployed ? 'Contract not deployed' : error ? 'Network unavailable' : 'No payments yet'}</div>
          <p className="text-pretty text-sm text-pm-muted">
            {!deployed
              ? 'Add the PayMesh contract address to start reading verified payments.'
              : error
                ? 'The latest payments could not be read. Retrying automatically.'
                : 'Verified USDC payments from the PayMesh contract appear here.'}
          </p>
        </div>
      ) : (
        <ul className="divide-y divide-pm-line">
          {rows.map((s) => (
            <FeedRow key={s.id} s={s} me={me} now={now} />
          ))}
        </ul>
      )}
    </section>
  )
}
