import { Suspense, lazy, useState, type ReactNode } from 'react'
import { useAccount } from 'wagmi'
import { ConnectKitButton } from 'connectkit'
import { ArrowLeftRight, Download, Send, Share2 } from 'lucide-react'
import { Link } from '@/paymesh/router'

// The QR code library only loads when someone opens Receive.
const ReceiveModal = lazy(() => import('../ReceiveModal').then((m) => ({ default: m.ReceiveModal })))

const TILE = 'ov-tile flex min-h-[104px] flex-col items-center justify-center gap-2.5 rounded-[26px] px-2 py-4 text-[15px] font-semibold text-pm-text hover:brightness-[0.98] active:brightness-95 sm:min-h-[116px]'
const ICON = 'h-8 w-8 text-pm-violet'

function Tile({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <>
      {icon}
      <span>{label}</span>
    </>
  )
}

/** Send, Receive, Swap and Bridge: the four things people do most. */
export function ActionTiles() {
  const { address } = useAccount()
  const [receiving, setReceiving] = useState(false)
  return (
    <>
      <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
        <Link to="/transfers" className={TILE}>
          <Tile icon={<Send className={ICON} strokeWidth={2.2} />} label="Send" />
        </Link>
        {address ? (
          <button type="button" onClick={() => setReceiving(true)} className={TILE}>
            <Tile icon={<Download className={ICON} strokeWidth={2.2} />} label="Receive" />
          </button>
        ) : (
          <ConnectKitButton.Custom>
            {({ show }) => (
              <button type="button" onClick={show} className={TILE}>
                <Tile icon={<Download className={ICON} strokeWidth={2.2} />} label="Receive" />
              </button>
            )}
          </ConnectKitButton.Custom>
        )}
        <Link to="/swap" className={TILE}>
          <Tile icon={<ArrowLeftRight className={ICON} strokeWidth={2.2} />} label="Swap" />
        </Link>
        <Link to="/bridge" className={TILE}>
          <Tile icon={<Share2 className={ICON} strokeWidth={2.2} />} label="Bridge" />
        </Link>
      </div>
      {receiving && address && (
        <Suspense fallback={null}>
          <ReceiveModal address={address} onClose={() => setReceiving(false)} />
        </Suspense>
      )}
    </>
  )
}
