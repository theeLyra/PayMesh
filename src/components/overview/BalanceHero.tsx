import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import { ConnectKitButton } from 'connectkit'
import { ArrowDownRight, ArrowUpRight, Eye, EyeOff } from 'lucide-react'
import { recordBalance, useBalanceHistory } from '@/paymesh/balanceHistory'
import { WALLET_TOKENS, fmtToken } from '@/paymesh/tokens'
import { useTokenBalances } from '@/paymesh/useTokenBalances'
import { TokenLogo } from '../TokenLogo'
import { Skeleton } from '../ui'
import { Trend } from './Trend'

const HIDE_KEY = 'paymesh:hide-balance'
const usdc = WALLET_TOKENS[0]

/** The top of the Overview: your balance in bold, plain on the page with no card around it. */
export function BalanceHero() {
  const { address } = useAccount()
  const { balances, isLoading, isError, isStale } = useTokenBalances()
  const raw = balances[0].raw
  const value = raw === undefined ? undefined : Number(raw) / 10 ** usdc.decimals
  const { samples, change, pct } = useBalanceHistory(address)
  const [hidden, setHidden] = useState(() => localStorage.getItem(HIDE_KEY) === '1')

  // Only live readings are recorded, so the chart shows how the balance really moved.
  useEffect(() => {
    if (address && value !== undefined && !isStale) recordBalance(address, value)
  }, [address, value, isStale])

  const toggle = () => {
    setHidden((h) => {
      localStorage.setItem(HIDE_KEY, h ? '0' : '1')
      return !h
    })
  }
  const money = (n: number) => `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  const up = (change ?? 0) >= 0

  return (
    <section className="px-1 pb-1 pt-2">
      <div className="flex items-center gap-1.5">
        <h2 className="label">Total balance</h2>
        <button type="button" onClick={toggle} aria-label={hidden ? 'Show balance' : 'Hide balance'} className="grid h-9 w-9 place-items-center rounded-full text-pm-muted hover:bg-pm-text/5 hover:text-pm-text">
          {hidden ? <EyeOff className="h-[18px] w-[18px]" /> : <Eye className="h-[18px] w-[18px]" />}
        </button>
      </div>

      {!address ? (
        <div className="mt-1">
          <p className="text-3xl font-extrabold tracking-tight text-pm-text sm:text-4xl">Connect a wallet</p>
          <p className="mt-1.5 max-w-md text-pretty text-sm text-pm-muted">See your balance, send, receive and swap USDC on Arc.</p>
          <ConnectKitButton.Custom>
            {({ show }) => (
              <button type="button" onClick={show} className="btn-primary mt-4 inline-flex min-h-[48px] w-full items-center justify-center rounded-xl px-6 text-sm font-semibold sm:w-auto">
                Connect wallet
              </button>
            )}
          </ConnectKitButton.Custom>
        </div>
      ) : isLoading ? (
        <Skeleton className="mt-2 h-14 w-56" />
      ) : isError || value === undefined ? (
        <p className="mt-2 text-2xl font-bold text-pm-text">Balance unavailable. Retrying…</p>
      ) : (
        <>
          <div className="mt-1 flex items-center gap-3">
            <TokenLogo symbol="USDC" size={44} />
            <span className="tabular text-5xl font-extrabold tracking-tight text-pm-text sm:text-6xl">{hidden ? '$••••' : money(value)}</span>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-x-2 text-sm font-semibold">
            <span className="text-pm-muted">USDC on Arc</span>
            {pct !== undefined && (
              <>
                <span className="text-pm-muted">•</span>
                <span className={`inline-flex items-center gap-1 ${up ? 'text-pm-good' : 'text-pm-bad'}`}>
                  {up ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                  {pct >= 0 ? '+' : ''}
                  {pct.toFixed(2)}%
                  <span className="font-medium text-pm-muted">24h</span>
                </span>
              </>
            )}
          </div>
          <Trend values={samples.map((s) => s.v)} className="mt-3 w-full max-w-[420px] text-pm-violet" stroke="currentColor" height={48} />
          <span className="sr-only">{raw === undefined ? '' : fmtToken(raw, usdc)} USDC</span>
        </>
      )}
    </section>
  )
}
