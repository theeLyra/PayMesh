import { useEffect, useRef, useState, type ReactNode } from 'react'
import { useAccount, useDisconnect, useSwitchChain } from 'wagmi'
import { ConnectKitButton } from 'connectkit'
import { toast } from 'sonner'
import { ChevronDown, Copy, ExternalLink, LogOut, Settings, Wallet } from 'lucide-react'
import { CHAIN_FACTS, CHAIN_ID, addressUrl } from '@/paymesh/chain'
import { shortAddress } from '@/paymesh/format'
import { Link, navigate } from '@/paymesh/router'
import { LogoMark, Wordmark } from './Logo'
import { ThemeToggle } from './ThemeToggle'
import { cx } from './ui'

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
        className={cx('flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-pm-line bg-pm-panel hover:bg-pm-text/5', triggerClassName)}
      >
        {trigger}
      </button>
      {open && (
        <div className="fixed inset-x-3 top-[68px] z-50 rounded-xl border border-pm-line bg-pm-deep p-2 shadow-lg sm:absolute sm:inset-x-auto sm:right-0 sm:top-[calc(100%+8px)] sm:w-[340px]" onClick={() => setOpen(false)}>
          {children}
        </div>
      )}
    </div>
  )
}

function ProfileMenu() {
  const { address, connector } = useAccount()
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
      trigger={
        <span className="flex items-center gap-2 px-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-pm-violet text-xs font-semibold text-[rgb(var(--pm-on-accent))]">{address.slice(2, 4).toUpperCase()}</span>
          <ChevronDown className="hidden h-4 w-4 text-pm-muted sm:block" />
        </span>
      }
    >
      <div className="px-3 py-2">
        <div className="label">Connected wallet</div>
        <div className="mt-1 break-all font-mono text-xs text-pm-text">{address}</div>
        {connector && <div className="mt-1 text-xs text-pm-muted">via {connector.name}</div>}
      </div>
      <button onClick={() => void copy()} className="flex min-h-[44px] w-full items-center gap-3 rounded-lg px-3 text-sm text-pm-text hover:bg-pm-text/5">
        <Copy className="h-4 w-4" /> Copy address
      </button>
      <a href={addressUrl(address)} target="_blank" rel="noopener noreferrer" className="flex min-h-[44px] items-center gap-3 rounded-lg px-3 text-sm text-pm-text hover:bg-pm-text/5">
        <ExternalLink className="h-4 w-4" /> View on explorer
      </a>
      <button onClick={() => navigate('/settings')} className="flex min-h-[44px] w-full items-center gap-3 rounded-lg px-3 text-sm text-pm-text hover:bg-pm-text/5">
        <Settings className="h-4 w-4" /> Settings
      </button>
      <button onClick={() => disconnect()} className="flex min-h-[44px] w-full items-center gap-3 rounded-lg px-3 text-sm text-pm-bad hover:bg-pm-bad/10">
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
        className="flex min-h-[44px] items-center gap-2 rounded-lg border border-pm-warn/50 bg-pm-warn/10 px-3 text-xs font-semibold text-pm-warn"
      >
        <span className="h-2 w-2 rounded-full bg-pm-warn" />
        Switch to {CHAIN_FACTS.name}
      </button>
    )
  }
  return (
    <div className="hidden min-h-[44px] items-center gap-2 rounded-lg border border-pm-line bg-pm-panel px-3 text-xs font-semibold text-pm-text sm:flex">
      <span className={cx('h-2 w-2 rounded-full', isConnected ? 'bg-pm-good' : 'bg-pm-muted')} />
      {CHAIN_FACTS.name}
    </div>
  )
}

export function TopBar() {
  return (
    <header className="sticky top-0 z-30 -mx-4 mb-5 flex items-center justify-between gap-3 border-b border-pm-line bg-pm-bg px-4 py-3 sm:-mx-6 sm:px-6 md:static md:mx-0 md:mb-6 md:border-0 md:p-0">
      <Link to="/" className="flex min-h-[44px] items-center gap-2 md:hidden" aria-label="PayMesh home">
        <LogoMark size={34} />
        <Wordmark className="hidden text-lg min-[380px]:inline" />
      </Link>
      <div className="hidden md:block" />
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <ConnectKitButton.Custom>
          {({ isConnected, isConnecting, show, address }) => (
            <button
              onClick={show}
              className={cx(
                'min-h-[44px] items-center gap-2 rounded-lg px-3 text-sm font-semibold',
                isConnected ? 'hidden border border-pm-line bg-pm-panel text-pm-text hover:bg-pm-text/5 sm:flex' : 'btn-primary flex',
              )}
            >
              <Wallet className="h-4 w-4" />
              <span className="hidden sm:inline">{isConnecting ? 'Connecting...' : isConnected && address ? shortAddress(address) : 'Connect wallet'}</span>
              {isConnected && <span className="hidden h-2 w-2 rounded-full bg-pm-good lg:block" />}
            </button>
          )}
        </ConnectKitButton.Custom>
        <NetworkPill />
        <ProfileMenu />
      </div>
    </header>
  )
}
