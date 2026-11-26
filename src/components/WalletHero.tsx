import { lazy, Suspense, useState, type ReactNode } from 'react'
import { useAccount, useSwitchChain } from 'wagmi'
import { ConnectKitButton } from 'connectkit'
import { toast } from 'sonner'
import { ArrowLeftRight, ArrowUpRight, Copy, QrCode, Waypoints, Wallet } from 'lucide-react'
import { CHAIN_FACTS, CHAIN_ID } from '@/paymesh/chain'
import { shortAddress } from '@/paymesh/format'
import { IS_MAINNET } from '@/paymesh/network'
import { Link } from '@/paymesh/router'
import { WALLET_TOKENS, fmtToken } from '@/paymesh/tokens'
import { useTokenBalances } from '@/paymesh/useTokenBalances'
import { LogoMark } from './Logo'
import { TokenLogo } from './TokenLogo'
import { Skeleton } from './ui'

// The QR code library only loads when someone opens Receive.
const ReceiveModal = lazy(() => import('./ReceiveModal').then((m) => ({ default: m.ReceiveModal })))

/** The card face: deep indigo into teal, with a soft light and the PayMesh mesh motif. */
const FACE = {
  backgroundColor: '#272373',
  backgroundImage:
    'radial-gradient(110% 100% at 100% 0%, rgba(45,212,191,0.38) 0%, rgba(45,212,191,0) 55%), radial-gradient(100% 110% at 0% 100%, rgba(129,140,248,0.5) 0%, rgba(129,140,248,0) 60%), linear-gradient(135deg, #1e1b4b 0%, #3730a3 55%, #4338ca 100%)',
} as const

/** Nodes and links in the brand's mesh style. Decorative only. */
function MeshMotif() {
  const nodes: Array<[number, number]> = [[20, 24], [92, 14], [150, 58], [70, 74], [128, 112], [30, 120]]
  const links: Array<[number, number]> = [[0, 1], [1, 2], [0, 3], [3, 2], [2, 4], [3, 5], [4, 3]]
  return (
    <svg aria-hidden viewBox="0 0 170 140" className="pointer-events-none absolute -right-2 -top-2 h-[150px] w-[180px] text-white opacity-30">
      {links.map(([a, b]) => (
        <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="currentColor" strokeWidth="1" />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 4 : 2.6} fill="currentColor" />
      ))}
    </svg>
  )
}

function ActionOrb({ icon, label, to, onClick }: { icon: ReactNode; label: string; to?: string; onClick?: () => void }) {
  const orb = (
    <>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-pm-violet/10 text-pm-violet ring-1 ring-pm-violet/20 group-hover:bg-pm-violet group-hover:text-pm-on-accent">{icon}</span>
      <span className="text-xs font-semibold text-pm-text">{label}</span>
    </>
  )
  const cls = 'group flex min-h-[44px] flex-col items-center gap-2 rounded-xl p-1'
  return to ? (
    <Link to={to} className={cls}>
      {orb}
    </Link>
  ) : (
    <button type="button" onClick={onClick} className={cls}>
      {orb}
    </button>
  )
}

/** The first thing on the Overview: a wallet card with your balance, and your holdings with one-tap actions. */
export function WalletHero() {
  const { address, isConnected, chainId } = useAccount()
  const { switchChain, isPending } = useSwitchChain()
  const { balances, isLoading, isError } = useTokenBalances()
  const [receiving, setReceiving] = useState(false)
  const wrong = isConnected && chainId !== CHAIN_ID

  const usdc = balances.find((b) => b.token.symbol === 'USDC')
  const others = balances.filter((b) => b.token.symbol !== 'USDC' && b.raw !== undefined && b.raw > 0n)
  const failed = isError || balances.every((b) => b.raw === undefined)
  const empty = !isLoading && !failed && balances.every((b) => !b.raw)
  const holdings = [usdc, ...others].filter((b): b is NonNullable<typeof usdc> => Boolean(b))

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
      <section style={FACE} className="relative mb-5 flex flex-col gap-5 overflow-hidden rounded-3xl p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <MeshMotif />
        <div className="relative flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15">
            <Wallet className="h-6 w-6" />
          </span>
          <div>
            <h2 className="text-lg font-semibold">Connect your wallet</h2>
            <p className="text-sm text-white/70">See your balance, send USDC and receive payments by QR code.</p>
          </div>
        </div>
        <ConnectKitButton.Custom>
          {({ show }) => (
            <button onClick={show} className="relative inline-flex min-h-[48px] items-center justify-center rounded-xl bg-white px-6 text-base font-semibold text-indigo-950 hover:bg-indigo-50">
              Connect wallet
            </button>
          )}
        </ConnectKitButton.Custom>
      </section>
    )
  }

  return (
    <section className="mb-5 grid gap-5 lg:grid-cols-[minmax(0,470px)_minmax(0,1fr)]">
      <div style={FACE} className="relative flex min-h-[230px] flex-col justify-between overflow-hidden rounded-3xl p-6 text-white shadow-lg sm:aspect-[1.75/1] sm:p-7 lg:aspect-auto lg:h-full lg:min-h-[270px]">
        <MeshMotif />
        <span aria-hidden className="pointer-events-none absolute -bottom-8 -right-6 opacity-[0.09]">
          <LogoMark size={190} mono />
        </span>
        <div className="relative flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2">
            <LogoMark size={22} mono />
            <span className="text-sm font-semibold tracking-tight">PayMesh</span>
          </span>
          {wrong ? (
            <button onClick={() => switchChain({ chainId: CHAIN_ID })} disabled={isPending} className="inline-flex min-h-[32px] items-center rounded-full border border-amber-300/60 bg-amber-300/15 px-3 text-xs font-semibold text-amber-100">
              Switch to {CHAIN_FACTS.name}
            </button>
          ) : (
            <span className="inline-flex min-h-[32px] items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 text-xs font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              {CHAIN_FACTS.name}
            </span>
          )}
        </div>

        <div className="relative">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/65">Total balance</div>
          {isLoading ? (
            <Skeleton className="mt-2 h-12 w-48 !bg-white/15" />
          ) : failed ? (
            <div className="mt-1 text-xl font-semibold text-white/70">Balance unavailable</div>
          ) : (
            <div className="mt-1 flex items-baseline gap-2">
              <span className="tabular text-5xl font-extrabold tracking-tight sm:text-6xl">{usdc?.raw === undefined ? '—' : fmtToken(usdc.raw, usdc.token)}</span>
              <span className="text-lg font-semibold text-white/70">USDC</span>
            </div>
          )}
        </div>

        <div className="relative flex items-center justify-between gap-3">
          <span className="font-mono text-sm tracking-wide text-white/85">{shortAddress(address)}</span>
          <button onClick={() => void copy()} aria-label="Copy wallet address" title="Copy wallet address" className="inline-flex min-h-[36px] items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 text-xs font-semibold hover:bg-white/20">
            <Copy className="h-3.5 w-3.5" /> Copy
          </button>
        </div>
      </div>

      <div className="glass flex flex-col rounded-3xl p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <h2 className="label">Holdings</h2>
          <span className="text-xs text-pm-muted">{holdings.length} {holdings.length === 1 ? 'token' : 'tokens'}</span>
        </div>
        <ul className="mt-3 divide-y divide-pm-line">
          {(isLoading ? WALLET_TOKENS.slice(0, 1).map((t) => ({ token: t, raw: undefined as bigint | undefined })) : holdings).map(({ token, raw }) => (
            <li key={token.symbol} className="flex items-center gap-3 py-3">
              <TokenLogo symbol={token.symbol} size={36} />
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold text-pm-text">{token.symbol}</div>
                <div className="truncate text-xs text-pm-muted">{token.name}</div>
              </div>
              {isLoading ? <Skeleton className="h-5 w-20" /> : <div className="tabular text-base font-bold text-pm-text">{raw === undefined ? '—' : fmtToken(raw, token)}</div>}
            </li>
          ))}
        </ul>
        {others.length === 0 && !isLoading && (
          <p className="text-xs text-pm-muted">
            {empty && !IS_MAINNET ? (
              <>
                No tokens yet. Get test USDC or EURC at{' '}
                <a href="https://faucet.circle.com" target="_blank" rel="noopener noreferrer" className="font-medium text-pm-violet hover:underline">
                  faucet.circle.com
                </a>
                .
              </>
            ) : empty ? (
              'No tokens in this wallet yet. Add USDC on Arc to start sending.'
            ) : (
              'EURC and cirBTC appear here when you hold them.'
            )}
          </p>
        )}
        <div className="mt-auto grid grid-cols-4 gap-2 pt-5">
          <ActionOrb to="/transfers" label="Send" icon={<ArrowUpRight className="h-6 w-6" />} />
          <ActionOrb label="Receive" icon={<QrCode className="h-6 w-6" />} onClick={() => setReceiving(true)} />
          <ActionOrb to="/swap" label="Swap" icon={<ArrowLeftRight className="h-6 w-6" />} />
          <ActionOrb to="/bridge" label="Bridge" icon={<Waypoints className="h-6 w-6" />} />
        </div>
      </div>

      {receiving && (
        <Suspense fallback={null}>
          <ReceiveModal address={address} onClose={() => setReceiving(false)} />
        </Suspense>
      )}
    </section>
  )
}
