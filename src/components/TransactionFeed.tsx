import { useEffect, useState } from 'react'
import { ArrowDownLeft, ArrowUpRight, ArrowLeftRight, ExternalLink } from 'lucide-react'
import type { Address } from 'viem'
import type { Settlement } from '@/paymesh/ActivityProvider'
import { txUrl } from '@/paymesh/chain'
import { SOURCE_LABELS } from '@/paymesh/contracts'
import { decodeCategory, fmtUsdc, shortAddress, timeAgo } from '@/paymesh/format'
import { Link } from '@/paymesh/router'
import { Skeleton, cx } from './ui'

export function useNow(intervalMs = 5000) {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), intervalMs)
    return () => clearInterval(t)
  }, [intervalMs])
  return now
}

export function FeedRow({ s, me, now }: { s: Settlement; me?: Address; now: number }) {
  const mine = me?.toLowerCase()
  const sent = mine !== undefined && s.from.toLowerCase() === mine
  const received = mine !== undefined && s.to.toLowerCase() === mine
  const Icon = sent ? ArrowUpRight : received ? ArrowDownLeft : ArrowLeftRight
  const counterparty = sent ? s.to : s.from
  const heading = sent ? 'You sent' : received ? 'Received' : 'Network payment'
  return (
    <li className="group flex items-start gap-3 px-4 py-3 transition hover:bg-white/[0.03]">
      <div
        className={cx(
          'flex h-11 w-11 shrink-0 items-center justify-center rounded-full border',
          sent && 'border-pm-violet/70 bg-pm-violet/15 text-violet-200 shadow-[0_0_18px_-4px_rgba(139,92,246,0.8)]',
          received && 'border-[#58cfe8]/70 bg-[#58cfe8]/10 text-[#58cfe8] shadow-[0_0_18px_-4px_rgba(88,207,232,0.7)]',
          !sent && !received && 'border-pm-line bg-white/[0.04] text-pm-muted',
        )}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className={cx('text-[11px] font-medium', received ? 'text-[#58cfe8]' : 'text-pm-muted')}>{heading}</div>
        <div className="tabular font-display text-[19px] font-semibold leading-tight text-white">{fmtUsdc(s.amount)} USDC</div>
        <div className="mt-0.5 truncate text-[11px] text-pm-muted">
          {sent ? 'to' : 'from'} <span className="font-mono text-pm-text/90">{shortAddress(counterparty)}</span>
          {!sent && !received && (
            <>
              {' '}
              to <span className="font-mono text-pm-text/90">{shortAddress(s.to)}</span>
            </>
          )}
        </div>
        <div className="mt-0.5 truncate text-[10px] text-pm-muted/80">
          {decodeCategory(s.category)} · {SOURCE_LABELS[s.source] ?? 'Payment'}
        </div>
      </div>
      <div className="flex shrink-0 flex-col items-end gap-1.5">
        <span className="rounded border border-pm-good/50 bg-pm-good/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-pm-good">Confirmed</span>
        <a
          href={txUrl(s.txHash)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View transaction on the Arc explorer"
          className="inline-flex items-center gap-1 text-[10px] text-pm-muted hover:text-pm-cyan"
        >
          {timeAgo(s.timestamp, now)}
          <ExternalLink className="h-3 w-3" />
        </a>
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
  const now = useNow()
  const rows = settlements.slice(0, limit)
  return (
    <aside className="glass flex h-full min-h-[360px] flex-col overflow-hidden rounded-2xl">
      <div className="flex items-center justify-between px-4 pb-2 pt-4">
        <h2 className="label !text-white/90">Live transaction feed</h2>
        <Link to="/activity" className="text-xs font-semibold text-violet-400 hover:text-white">
          View all
        </Link>
      </div>
      {loading && rows.length === 0 ? (
        <div className="space-y-4 p-4">
          {[0, 1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-16 w-full" />
          ))}
        </div>
      ) : rows.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-1 px-6 py-10 text-center">
          <div className="font-display text-base font-semibold text-white">
            {!deployed ? 'Contracts not deployed' : error ? 'Network unavailable' : 'No payments yet'}
          </div>
          <p className="text-pretty text-xs text-pm-muted">
            {!deployed
              ? 'Add the PayMesh contract addresses to start reading verified payments.'
              : error
                ? 'The latest payments could not be read. Retrying automatically.'
                : 'Verified USDC payments from PayMesh contracts will stream in here.'}
          </p>
        </div>
      ) : (
        <ul className="divide-y divide-pm-line/50 overflow-hidden">
          {rows.map((s) => (
            <FeedRow key={s.id} s={s} me={me} now={now} />
          ))}
        </ul>
      )}
      <div className="mt-auto p-3">
        <div className="flex items-center gap-2 rounded-xl border border-pm-line bg-white/[0.03] px-3 py-2 text-xs text-pm-muted">
          <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-pm-cyan" />
          Live updates from Arc contract events
        </div>
      </div>
    </aside>
  )
}
