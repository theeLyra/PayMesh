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

/** Concentric arcs in the corner. Decorative only. */
function Arcs() {
  return (
    <svg aria-hidden viewBox="0 0 220 180" className="pointer-events-none absolute -bottom-10 -right-10 h-[190px] w-[230px] sm:h-[230px] sm:w-[280px]">
      <circle cx="170" cy="150" r="120" className="fill-indigo-500/25 dark:fill-indigo-400/20" />
      <circle cx="170" cy="150" r="86" className="fill-indigo-500/35 dark:fill-indigo-400/30" />
      <circle cx="170" cy="150" r="52" className="fill-indigo-600/70 dark:fill-indigo-400/60" />
      <circle cx="170" cy="150" r="22" className="fill-white/70 dark:fill-white/30" />
    </svg>
  )
}

/** The top card of the Overview: total balance, how it moved, and the PayMesh promise. */
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
    <section className="ov-hero relative overflow-hidden rounded-[28px]">
      <Arcs />
      <div className="relative grid gap-4 p-5 sm:p-7 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:gap-0">
        <div className="min-w-0 md:pr-8">
          <div className="flex items-center gap-2 text-[17px] font-semibold text-pm-text">
            Total Balance
            <button type="button" onClick={toggle} aria-label={hidden ? 'Show balance' : 'Hide balance'} className="grid h-8 w-8 place-items-center rounded-full text-pm-violet hover:bg-pm-text/5">
              {hidden ? <EyeOff className="h-[18px] w-[18px]" /> : <Eye className="h-[18px] w-[18px]" />}
            </button>
          </div>

          {!address ? (
            <div className="mt-3">
              <p className="text-3xl font-extrabold tracking-tight text-pm-text sm:text-4xl">Connect a wallet</p>
              <p className="mt-1 text-sm text-pm-muted">See your balance, send, receive and swap USDC on Arc.</p>
              <ConnectKitButton.Custom>
                {({ show }) => (
                  <button type="button" onClick={show} className="btn-primary mt-4 inline-flex min-h-[44px] items-center rounded-2xl px-6 text-sm font-semibold">
                    Connect wallet
                  </button>
                )}
              </ConnectKitButton.Custom>
            </div>
          ) : isLoading ? (
            <Skeleton className="mt-3 h-14 w-56" />
          ) : isError || value === undefined ? (
            <p className="mt-3 text-2xl font-bold text-pm-text">Balance unavailable. Retrying…</p>
          ) : (
            <>
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="text-5xl font-extrabold tracking-tight text-pm-text tabular sm:text-6xl">{hidden ? '$••••' : money(value)}</span>
                <span className="flex items-center gap-2 text-lg font-semibold text-pm-text">
                  <TokenLogo symbol="USDC" size={36} />
                  USDC
                </span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-[15px] font-semibold">
                {pct !== undefined ? (
                  <>
                    <span className={`inline-flex items-center gap-1 ${up ? 'text-pm-good' : 'text-pm-bad'}`}>
                      {up ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                      {pct >= 0 ? '+' : ''}
                      {pct.toFixed(2)}%
                    </span>
                    <span className="text-pm-muted">•</span>
                    <span className="text-pm-text">{hidden ? '$••••' : money(value)}</span>
                    <span className="text-xs font-medium text-pm-muted">last 24h</span>
                  </>
                ) : (
                  <span className="text-sm font-medium text-pm-muted">Live balance on Arc. Your 24h change appears as it moves.</span>
                )}
              </div>
              <Trend values={samples.map((s) => s.v)} className="mt-3 w-full max-w-[420px] text-indigo-600 dark:text-indigo-300" stroke="currentColor" height={56} />
              <p className="mt-3 max-w-[60%] text-[13px] font-semibold leading-snug text-pm-text md:hidden">
                Send. Pay. Connect.
                <span className="block font-medium text-pm-violet">All in one place on Arc.</span>
              </p>
              <span className="sr-only">{raw === undefined ? '' : fmtToken(raw, usdc)} USDC</span>
            </>
          )}
        </div>

        <div className="relative hidden border-l border-pm-text/10 pl-8 md:flex md:flex-col md:justify-center">
          <p className="text-xl font-bold text-pm-text">Send. Pay. Connect.</p>
          <p className="mt-1 text-[15px] font-medium text-pm-violet">All in one place on Arc.</p>
        </div>
      </div>
    </section>
  )
}
