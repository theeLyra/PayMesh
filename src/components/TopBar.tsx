import { useEffect, useRef, useState, type ReactNode } from 'react'
import { useAccount, useDisconnect, useSwitchChain } from 'wagmi'
import { ConnectKitButton } from 'connectkit'
import { TokenUSDC } from '@web3icons/react'
import { toast } from 'sonner'
import { Bell, ChevronDown, Copy, ExternalLink, LogOut, Settings, Wallet } from 'lucide-react'
import { useActivity } from '@/paymesh/activityContext'
import { CHAIN_FACTS, CHAIN_ID, addressUrl, txUrl } from '@/paymesh/chain'
import { fmtUsdc, shortAddress, timeAgo } from '@/paymesh/format'
import { Link, navigate } from '@/paymesh/router'
import { useUsdcBalance } from '@/paymesh/useTransact'
import { LogoMark } from './Logo'
import { Skeleton, cx } from './ui'

function useOutside(onOutside: () => void) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onOutside()
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [onOutside])
  return ref
}

function Menu({ trigger, children, label, triggerClassName, className }: { trigger: ReactNode; children: ReactNode; label: string; triggerClassName?: string; className?: string }) {
  const [open, setOpen] = useState(false)
  const ref = useOutside(() => setOpen(false))
  return (
    <div ref={ref} className={cx('relative', className)}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={label}
        aria-expanded={open}
        className={cx('flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-pm-line bg-white/[0.03] transition hover:bg-white/[0.07]', triggerClassName)}
      >
        {trigger}
      </button>
      {open && (
        <div className="absolute right-0 top-[calc(100%+8px)] z-50 w-[min(340px,calc(100vw-24px))] animate-rise rounded-2xl border border-pm-line bg-pm-deep/95 p-2 shadow-card backdrop-blur-xl" onClick={() => setOpen(false)}>
          {children}
        </div>
      )}
    </div>
  )
}

function Notifications() {
  const { address } = useAccount()
  const { settlements } = useActivity()
  const key = address ? `paymesh:seen:${address.toLowerCase()}` : ''
  const [seenOverride, setSeen] = useState<Record<string, number>>({})
  const seen = key ? (seenOverride[key] ?? Number(localStorage.getItem(key) ?? 0)) : 0
  const incoming = address ? settlements.filter((s) => s.to.toLowerCase() === address.toLowerCase()).slice(0, 8) : []
  const unread = incoming.filter((s) => s.blockNumber > seen).length
  const markSeen = () => {
    const top = incoming[0]?.blockNumber
    if (key && top) {
      localStorage.setItem(key, String(top))
      setSeen((s) => ({ ...s, [key]: top }))
    }
  }
  return (
    <div onClickCapture={markSeen} className="relative">
      <Menu
        label="Notifications"
        trigger={
          <span className="relative">
            <Bell className="h-[18px] w-[18px] text-pm-text" />
            {unread > 0 && <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-pm-cyan px-1 text-[10px] font-bold text-black">{unread}</span>}
          </span>
        }
      >
        <div className="px-3 pb-2 pt-2 label">Incoming payments</div>
        {!address ? (
          <p className="px-3 pb-3 text-sm text-pm-muted">Connect a wallet to see payments you receive.</p>
        ) : incoming.length === 0 ? (
          <p className="px-3 pb-3 text-sm text-pm-muted">No incoming payments yet.</p>
        ) : (
          <ul>
            {incoming.map((s) => (
              <li key={s.id}>
                <a href={txUrl(s.txHash)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 hover:bg-white/[0.05]">
                  <div>
                    <div className="tabular text-sm font-semibold text-pm-cyan">+{fmtUsdc(s.amount)} USDC</div>
                    <div className="font-mono text-[11px] text-pm-muted">from {shortAddress(s.from)}</div>
                  </div>
                  <div className="text-[11px] text-pm-muted">{timeAgo(s.timestamp)}</div>
                </a>
              </li>
            ))}
          </ul>
        )}
      </Menu>
    </div>
  )
}

function ProfileMenu({ card = false }: { card?: boolean }) {
  const { address, connector } = useAccount()
  const { balance, isLoading } = useUsdcBalance()
  const { disconnect } = useDisconnect()
  if (!address) return null
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(address)
      toast.success('Address copied')
    } catch {
      toast.error('Could not copy the address')
    }
  }
  return (
    <Menu
      label="Profile menu"
      className={card ? 'min-w-0 flex-1' : undefined}
      triggerClassName={card ? 'glass w-full justify-start gap-3 !rounded-2xl px-3 py-2' : undefined}
      trigger={
        card ? (
          <>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-pm-violet/40 bg-pm-bg/60">
              <LogoMark size={26} />
            </span>
            <span className="min-w-0 flex-1 text-left leading-tight">
              <span className="block truncate font-mono text-sm font-semibold text-white">{shortAddress(address)}</span>
              <span className="tabular block truncate text-xs text-pm-muted">
                {isLoading || balance === undefined ? 'Balance loading' : `${fmtUsdc(balance)} USDC`}
              </span>
            </span>
            <ChevronDown className="h-4 w-4 shrink-0 text-pm-muted" />
          </>
        ) : (
          <span className="flex items-center gap-2 px-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-pm-violet to-pm-cyan font-display text-xs font-bold text-white">{address.slice(2, 4).toUpperCase()}</span>
            <ChevronDown className="hidden h-4 w-4 text-pm-muted sm:block" />
          </span>
        )
      }
    >
      <div className="px-3 py-2">
        <div className="label">Connected wallet</div>
        <div className="mt-1 break-all font-mono text-xs text-white">{address}</div>
        {connector && <div className="mt-1 text-xs text-pm-muted">via {connector.name}</div>}
      </div>
      <button onClick={() => void copy()} className="flex min-h-[44px] w-full items-center gap-3 rounded-xl px-3 text-sm text-pm-text hover:bg-white/[0.05]">
        <Copy className="h-4 w-4" /> Copy address
      </button>
      <a href={addressUrl(address)} target="_blank" rel="noopener noreferrer" className="flex min-h-[44px] items-center gap-3 rounded-xl px-3 text-sm text-pm-text hover:bg-white/[0.05]">
        <ExternalLink className="h-4 w-4" /> View on explorer
      </a>
      <button onClick={() => navigate('/settings')} className="flex min-h-[44px] w-full items-center gap-3 rounded-xl px-3 text-sm text-pm-text hover:bg-white/[0.05]">
        <Settings className="h-4 w-4" /> Settings
      </button>
      <button onClick={() => disconnect()} className="flex min-h-[44px] w-full items-center gap-3 rounded-xl px-3 text-sm text-pm-bad hover:bg-pm-bad/10">
        <LogOut className="h-4 w-4" /> Disconnect
      </button>
    </Menu>
  )
}

export function NetworkPill() {
  const { isConnected, chainId } = useAccount()
  const { switchChain, isPending } = useSwitchChain()
  const wrong = isConnected && chainId !== CHAIN_ID
  if (wrong) {
    return (
      <button
        onClick={() => switchChain({ chainId: CHAIN_ID })}
        disabled={isPending}
        className="flex min-h-[44px] items-center gap-2 rounded-xl border border-pm-warn/50 bg-pm-warn/10 px-3 text-xs font-semibold text-pm-warn"
      >
        <span className="h-2 w-2 rounded-full bg-pm-warn" />
        Switch to {CHAIN_FACTS.name}
      </button>
    )
  }
  return (
    <div className="hidden min-h-[44px] items-center gap-2 rounded-xl border border-pm-line bg-white/[0.03] px-3 text-xs font-semibold text-pm-text sm:flex">
      <span className={cx('h-2 w-2 rounded-full', isConnected ? 'bg-pm-good shadow-[0_0_8px_#34d399]' : 'bg-pm-muted')} />
      {CHAIN_FACTS.name}
    </div>
  )
}

export function BalanceChip() {
  const { isConnected } = useAccount()
  const { balance, isLoading, isError } = useUsdcBalance()
  return (
    <div className="flex min-h-[44px] items-center gap-2 rounded-xl border border-pm-line bg-white/[0.03] px-3" title="USDC balance (ERC-20 view, same pool that pays gas on Arc)">
      <TokenUSDC variant="branded" size={20} />
      {!isConnected ? (
        <span className="text-sm text-pm-muted">— USDC</span>
      ) : isLoading ? (
        <Skeleton className="h-4 w-16" />
      ) : isError || balance === undefined ? (
        <span className="text-sm text-pm-muted">Unavailable</span>
      ) : (
        <span className="tabular text-sm font-semibold text-white">{fmtUsdc(balance)} <span className="text-pm-muted">USDC</span></span>
      )}
    </div>
  )
}

export function TopBar({ className }: { className?: string }) {
  return (
    <header className={cx("sticky top-0 z-30 -mx-4 mb-5 flex items-center justify-between gap-3 border-b border-pm-line/50 bg-pm-bg/75 px-4 py-3 backdrop-blur-xl sm:-mx-6 sm:px-6 md:static md:mx-0 md:mb-6 md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none", className)}>
      <Link to="/" className="flex items-center gap-2 md:hidden" aria-label="PayMesh home">
        <LogoMark size={30} />
        <span className="font-display text-lg font-bold tracking-[0.12em]">PAYMESH</span>
      </Link>
      <div className="hidden md:block" />
      <div className="flex items-center gap-2">
        <NetworkPill />
        <BalanceChip />
        <ConnectKitButton.Custom>
          {({ isConnected, isConnecting, show, address }) => (
            <button
              onClick={show}
              className={cx(
                'flex min-h-[44px] items-center gap-2 rounded-xl px-3 text-sm font-semibold transition',
                isConnected ? 'border border-pm-line bg-white/[0.03] text-white hover:bg-white/[0.07]' : 'btn-primary text-white hover:brightness-110',
              )}
            >
              <Wallet className="h-4 w-4" />
              <span className="hidden sm:inline">{isConnecting ? 'Connecting...' : isConnected && address ? shortAddress(address) : 'Connect wallet'}</span>
              {isConnected && <span className="hidden h-2 w-2 rounded-full bg-pm-good lg:block" />}
            </button>
          )}
        </ConnectKitButton.Custom>
        <Notifications />
        <ProfileMenu />
      </div>
    </header>
  )
}

/** Desktop dashboard identity block: notifications plus a wallet card with live USDC balance. */
export function ProfileCard() {
  const { isConnected, isConnecting } = useAccount()
  return (
    <div className="flex items-center gap-2">
      <Notifications />
      {isConnected ? (
        <ProfileMenu card />
      ) : (
        <ConnectKitButton.Custom>
          {({ show }) => (
            <button onClick={show} className="glass flex min-h-[60px] min-w-0 flex-1 items-center gap-3 rounded-2xl px-3 py-2 text-left transition hover:brightness-125">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-pm-violet/40 bg-pm-bg/60">
                <LogoMark size={26} />
              </span>
              <span className="min-w-0 flex-1 leading-tight">
                <span className="block text-sm font-semibold text-white">{isConnecting ? 'Connecting...' : 'Connect wallet'}</span>
                <span className="block text-xs text-pm-muted">Not connected</span>
              </span>
              <ChevronDown className="h-4 w-4 shrink-0 text-pm-muted" />
            </button>
          )}
        </ConnectKitButton.Custom>
      )}
    </div>
  )
}
