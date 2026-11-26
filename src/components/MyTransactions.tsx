import { useState } from 'react'
import type { Address } from 'viem'
import { Link } from '@/paymesh/router'
import { useNow } from '@/paymesh/useNow'
import { useWalletHistory } from '@/paymesh/walletHistory'
import { addressUrl } from '@/paymesh/chain'
import { Skeleton } from './ui'
import { WalletTxRow } from './WalletTxRow'

/** The connected wallet's latest transactions, one row each, for the Overview. */
export function MyTransactionsCard({ address, limit = 6 }: { address: Address; limit?: number }) {
  const [pages] = useState(1)
  const { txs, isLoading, error } = useWalletHistory(address, pages, () => undefined)
  const now = useNow(5_000)
  const rows = txs.filter((t) => !t.dust).slice(0, limit)

  return (
    <aside className="glass overflow-hidden rounded-2xl" aria-label="Your transactions">
      <div className="flex items-center justify-between border-b border-pm-line/60 px-4 py-3">
        <h2 className="label">Your transactions</h2>
        <Link to="/activity" className="-my-2 inline-flex min-h-[44px] items-center text-sm font-medium text-pm-violet hover:underline">
          View all
        </Link>
      </div>
      {isLoading ? (
        <div className="space-y-3 p-4">
          {[0, 1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-12 w-full" />
          ))}
        </div>
      ) : error && rows.length === 0 ? (
        <div className="p-5 text-sm text-pm-muted">
          Could not load your transactions right now.{' '}
          <a href={addressUrl(address)} target="_blank" rel="noopener noreferrer" className="font-medium text-pm-violet hover:underline">
            View them on the explorer
          </a>
          .
        </div>
      ) : rows.length === 0 ? (
        <div className="p-5 text-sm text-pm-muted">No transactions yet for this wallet. Payments, swaps and approvals you make will appear here.</div>
      ) : (
        <ul className="divide-y divide-pm-line/60">
          {rows.map((tx) => (
            <WalletTxRow key={tx.hash} tx={tx} now={now} />
          ))}
        </ul>
      )}
    </aside>
  )
}
