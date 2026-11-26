import { useAccount } from 'wagmi'
import { ArrowRight, Plus, Sparkles } from 'lucide-react'
import { addressUrl } from '@/paymesh/chain'
import { useBalanceHistory } from '@/paymesh/balanceHistory'
import { Link } from '@/paymesh/router'
import { WALLET_TOKENS, fmtToken, type WalletToken } from '@/paymesh/tokens'
import { useTokenBalances } from '@/paymesh/useTokenBalances'
import { TokenLogo } from '../TokenLogo'
import { Skeleton } from '../ui'
import { Trend } from './Trend'

/** One token row: logo, balance, and either its real trend or an Add button when you do not hold it. */
function Asset({ token, raw, loading, trend }: { token: WalletToken; raw: bigint | undefined; loading: boolean; trend?: number[] }) {
  const held = raw !== undefined && raw > 0n
  return (
    <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
      <TokenLogo symbol={token.symbol} size={52} />
      <div className="min-w-0">
        <p className="text-[15px] font-semibold text-pm-text">{token.symbol}</p>
        {loading ? (
          <Skeleton className="mt-1 h-6 w-16" />
        ) : held ? (
          <>
            <p className="text-2xl font-extrabold leading-tight tracking-tight text-pm-text tabular">{fmtToken(raw, token)}</p>
            {token.symbol !== 'cirBTC' && <p className="text-[13px] text-pm-muted">≈ {token.symbol === 'EURC' ? '€' : '$'}{fmtToken(raw, token)}</p>}
          </>
        ) : (
          <p className="text-[15px] text-pm-muted">Not held</p>
        )}
      </div>
      {held && trend ? (
        <Trend values={trend} className="ml-auto hidden w-28 shrink-0 text-emerald-500 sm:block" height={44} />
      ) : !held && !loading ? (
        <Link to={`/swap?to=${token.symbol}`} className="ml-auto inline-flex min-h-[44px] shrink-0 items-center gap-1.5 rounded-2xl bg-pm-violet/10 px-4 text-[15px] font-semibold text-pm-violet hover:bg-pm-violet/15">
          <Plus className="h-4 w-4" />
          Add
        </Link>
      ) : null}
    </div>
  )
}

/** Your Assets: USDC first, then EURC and cirBTC, each with its real balance. */
export function AssetsCard() {
  const { address } = useAccount()
  const { balances, isLoading } = useTokenBalances()
  const { samples } = useBalanceHistory(address)
  const [usdc, eurc, btc] = balances
  const loading = Boolean(address) && isLoading
  return (
    <section className="ov-tile rounded-[26px] p-5 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2.5 text-[17px] font-bold text-pm-text">
          <Sparkles className="h-5 w-5 fill-pm-violet text-pm-violet" />
          Your Assets
        </h2>
        {address && (
          <a href={addressUrl(address)} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center gap-1.5 text-[15px] font-semibold text-pm-violet">
            View All
            <ArrowRight className="h-4 w-4" />
          </a>
        )}
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-0">
        <div className="md:pr-6">
          <Asset token={WALLET_TOKENS[0]} raw={address ? usdc.raw : undefined} loading={loading} trend={samples.length >= 2 ? samples.map((s) => s.v) : undefined} />
        </div>
        <div className="space-y-4 border-pm-text/10 md:border-l md:pl-6">
          <Asset token={WALLET_TOKENS[1]} raw={address ? eurc.raw : undefined} loading={loading} />
          {btc.raw !== undefined && btc.raw > 0n && <Asset token={WALLET_TOKENS[2]} raw={btc.raw} loading={false} />}
        </div>
      </div>
    </section>
  )
}
