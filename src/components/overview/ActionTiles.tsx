import { Suspense, lazy, useEffect, useState, type ReactNode } from 'react'
import { useAccount } from 'wagmi'
import { ConnectKitButton } from 'connectkit'
import { Link } from '@/paymesh/router'
import { prefetchRoute } from '@/paymesh/prefetch'
import { BridgeGlyph, ReceiveGlyph, SendGlyph, SwapGlyph } from './ActionIcons'

// The QR code library is its own chunk. It is fetched while the browser is idle, so Receive opens at once.
const loadReceive = () => import('../ReceiveModal').then((m) => ({ default: m.ReceiveModal }))
const ReceiveModal = lazy(loadReceive)

const ACTION_ROUTES = ['/transfers', '/swap', '/bridge']

/** Warm every action target once the page has settled, so a tap never waits on a download. */
function useWarmActions() {
  useEffect(() => {
    const run = () => {
      ACTION_ROUTES.forEach(prefetchRoute)
      void loadReceive()
    }
    const t = setTimeout(run, 400)
    return () => clearTimeout(t)
  }, [])
}

interface TileProps {
  icon: ReactNode
  label: string
  hint: string
}

/** One action: a flat icon square, the label, and (on wide screens) a one-line hint. */
function TileBody({ icon, label, hint }: TileProps) {
  return (
    <>
      <span className="act-badge">{icon}</span>
      <span className="flex min-w-0 flex-col items-center xl:items-start">
        <span className="text-[14px] font-bold leading-tight text-pm-text sm:text-[15px]">{label}</span>
        <span className="mt-0.5 hidden truncate text-xs font-medium text-pm-muted xl:block">{hint}</span>
      </span>
    </>
  )
}

/** Send, Receive, Swap and Bridge: the four things people do most. */
export function ActionTiles() {
  const { address } = useAccount()
  const [receiving, setReceiving] = useState(false)
  useWarmActions()

  const receive: TileProps = { icon: <ReceiveGlyph className="h-[30px] w-[30px]" />, label: 'Receive', hint: 'Share your QR' }

  return (
    <>
      <nav aria-label="Quick actions" className="grid grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
        <Link to="/transfers" className="act-tile">
          <TileBody icon={<SendGlyph className="h-[30px] w-[30px]" />} label="Send" hint="Pay any wallet" />
        </Link>
        {address ? (
          <button type="button" onClick={() => setReceiving(true)} className="act-tile">
            <TileBody {...receive} />
          </button>
        ) : (
          <ConnectKitButton.Custom>
            {({ show }) => (
              <button type="button" onClick={show} className="act-tile">
                <TileBody {...receive} />
              </button>
            )}
          </ConnectKitButton.Custom>
        )}
        <Link to="/swap" className="act-tile">
          <TileBody icon={<SwapGlyph className="h-[30px] w-[30px]" />} label="Swap" hint="USDC, EURC, cirBTC" />
        </Link>
        <Link to="/bridge" className="act-tile">
          <TileBody icon={<BridgeGlyph className="h-[30px] w-[30px]" />} label="Bridge" hint="Move USDC across chains" />
        </Link>
      </nav>
      {receiving && address && (
        <Suspense fallback={null}>
          <ReceiveModal address={address} onClose={() => setReceiving(false)} />
        </Suspense>
      )}
    </>
  )
}
