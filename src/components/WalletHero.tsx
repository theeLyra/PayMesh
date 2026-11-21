import { IS_MAINNET } from '@/paymesh/network'
import type { ReactNode } from 'react'
import { useAccount, useSwitchChain } from 'wagmi'
import { ConnectKitButton } from 'connectkit'
import { TokenBTC, TokenEURC, TokenUSDC } from '@web3icons/react'
import { toast } from 'sonner'
import { ArrowUpRight, Copy, Link2, Wallet } from 'lucide-react'
import { CHAIN_FACTS, CHAIN_ID } from '@/paymesh/chain'
import { shortAddress } from '@/paymesh/format'
import { Link } from '@/paymesh/router'
import { fmtToken } from '@/paymesh/tokens'
import { useTokenBalances } from '@/paymesh/useTokenBalances'
import { Skeleton, cx } from './ui'

const ICONS: Record<string, (size: number) => ReactNode> = {
  USDC: (size) => <TokenUSDC variant="branded" size={size} />,
  EURC: (size) => <TokenEURC variant="branded" size={size} />,
  cirBTC: (size) => <TokenBTC variant="branded" size={size} />,
}

const actionClass = 'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold'

/** The first thing on the Overview: the connected wallet's balances, with the main actions one tap away. */
export function WalletHero() {
  const { address, isConnected, chainId } = useAccount()
  const { switchChain, isPending } = useSwitchChain()
  const { balances, isLoading, isError } = useTokenBalances()
  const wrong = isConnected && chainId !== CHAIN_ID

  const usdc = balances.find((b) => b.token.symbol === 'USDC')
  const others = balances.filter((b) => b.token.symbol !== 'USDC' && b.raw !== undefined && b.raw > 0n)
  const failed = isError || balances.every((b) => b.raw === undefined)
  const empty = !isLoading && !failed && balances.every((b) => !b.raw)

  const copy = async () => {
    if (!address) return
    try {
      await navigator.clipboard.writeText(address)
      toast.success('Address copied')
    } catch {
      toast.error('Could not copy the address')
    }
  }

  if (!isConnected || !address) {
    return (
      <section className="glass mb-5 flex flex-col gap-4 rounded-2xl border-t-4 border-t-pm-violet p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pm-violet/15 text-pm-violet">
            <Wallet className="h-6 w-6" />
          </span>
          <div>
            <h2 className="text-lg font-semibold text-pm-text">Connect your wallet</h2>
            <p className="text-sm text-pm-muted">See your USDC, EURC and cirBTC balances and start sending.</p>
          </div>
        </div>
        <ConnectKitButton.Custom>
          {({ show }) => (
            <button onClick={show} className={cx(actionClass, 'btn-primary')}>
              Connect wallet
            </button>
          )}
        </ConnectKitButton.Custom>
      </section>
    )
  }

  return (
    <section className="glass mb-5 rounded-2xl border-t-4 border-t-pm-violet p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-medium text-pm-muted">
          <Wallet className="h-4 w-4" /> Wallet balance
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {wrong ? (
            <button
              onClick={() => switchChain({ chainId: CHAIN_ID })}
              disabled={isPending}
              className="inline-flex min-h-[36px] items-center gap-2 rounded-full border border-pm-warn/50 bg-pm-warn/10 px-3 text-xs font-semibold text-pm-warn"
            >
              Switch to {CHAIN_FACTS.name}
            </button>
          ) : (
            <span className="inline-flex min-h-[36px] items-center gap-2 rounded-full border border-pm-line px-3 text-xs font-semibold text-pm-text">
              <span className="h-2 w-2 rounded-full bg-pm-good" />
              {CHAIN_FACTS.name}
            </span>
          )}
          <button
            onClick={() => void copy()}
            aria-label="Copy wallet address"
            title="Copy wallet address"
            className="inline-flex min-h-[36px] items-center gap-2 rounded-full border border-pm-line px-3 font-mono text-xs text-pm-text hover:bg-pm-text/5"
          >
            {shortAddress(address)}
            <Copy className="h-3.5 w-3.5 text-pm-muted" />
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
        <div>
          {isLoading ? (
            <Skeleton className="h-12 w-48" />
          ) : failed ? (
            <div className="text-2xl font-semibold text-pm-muted">Balance unavailable</div>
          ) : (
            <div className="flex items-center gap-3">
              {ICONS.USDC(36)}
              <span className="tabular text-4xl font-semibold tracking-tight text-pm-text sm:text-5xl">{usdc?.raw === undefined ? '—' : fmtToken(usdc.raw, usdc.token)}</span>
              <span className="pt-2 text-lg font-medium text-pm-muted">USDC</span>
            </div>
          )}
          <p className="mt-2 text-xs text-pm-muted">USDC also pays network fees on Arc, so one balance covers payments and gas.</p>
        </div>

        <div className="flex w-full flex-wrap gap-2 sm:w-auto">
          <Link to="/transfers" className={cx(actionClass, 'btn-primary flex-1 sm:flex-none')}>
            <ArrowUpRight className="h-4 w-4" /> Send
          </Link>
          <Link to="/links" className={cx(actionClass, 'flex-1 border border-pm-line bg-pm-panel text-pm-text hover:bg-pm-text/5 sm:flex-none')}>
            <Link2 className="h-4 w-4" /> Request
          </Link>
        </div>
      </div>

      {others.length > 0 && (
        <ul className="mt-5 grid gap-2 border-t border-pm-line pt-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map(({ token, raw }) => (
            <li key={token.symbol} className="flex items-center gap-3 rounded-xl border border-pm-line bg-pm-bg px-3 py-2.5">
              {ICONS[token.symbol]?.(28)}
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold text-pm-text">{token.symbol}</div>
                <div className="truncate text-xs text-pm-muted">{token.name}</div>
              </div>
              <div className="tabular text-base font-semibold text-pm-text">{raw === undefined ? '—' : fmtToken(raw, token)}</div>
            </li>
          ))}
        </ul>
      )}

      {empty && (
        <p className="mt-4 text-sm text-pm-muted">
          {IS_MAINNET ? (
            'No tokens in this wallet yet. Add USDC on Arc to start sending.'
          ) : (
            <>
              No tokens in this wallet yet. Get test USDC or EURC at{' '}
              <a href="https://faucet.circle.com" target="_blank" rel="noopener noreferrer" className="font-medium text-pm-violet hover:underline">
                faucet.circle.com
              </a>
              .
            </>
          )}
        </p>
      )}
    </section>
  )
}
