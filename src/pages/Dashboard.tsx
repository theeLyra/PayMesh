import { useMemo } from 'react'
import { useAccount } from 'wagmi'
import { Globe } from 'lucide-react'
import { useActivity, type Settlement } from '@/paymesh/activityContext'
import { NetworkMap } from '@/components/NetworkMap'
import { StatCards } from '@/components/StatCards'
import { TransactionFeed } from '@/components/TransactionFeed'
import { useNow } from '@/paymesh/useNow'
import { NetworkPill, ProfileCard } from '@/components/TopBar'
import { Sparkline } from '@/components/charts'
import { NotDeployed, cx } from '@/components/ui'
import { FRESH_SECONDS, bucketize, uniqueWallets } from '@/paymesh/metrics'

function SystemStatus() {
  const { status, deployed, head } = useActivity()
  const state = !deployed ? 'warn' : status === 'error' ? 'bad' : status === 'ready' ? 'good' : 'warn'
  const text = !deployed ? 'Contracts not deployed' : status === 'error' ? 'Network unreachable' : status === 'ready' ? 'All systems operational' : 'Indexing payments'
  return (
    <div
      title={head ? `Latest block ${head.toLocaleString('en-US')}` : undefined}
      className={cx(
        'inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider',
        state === 'good' && 'text-pm-good',
        state === 'warn' && 'text-pm-warn',
        state === 'bad' && 'text-pm-bad',
      )}
    >
      <span className={cx('h-2 w-2 rounded-full', state === 'good' ? 'bg-pm-good shadow-[0_0_8px_#34d399]' : state === 'warn' ? 'bg-pm-warn' : 'bg-pm-bad')} />
      {text}
    </div>
  )
}

/** Owns the 1 second clock so the rest of the dashboard does not re-render every tick. */
function LiveTransfers({ settlements, deployed }: { settlements: Settlement[]; deployed: boolean }) {
  const nowSec = Math.floor(useNow(1000) / 1000)
  const live = useMemo(() => bucketize(settlements, nowSec - 3600, nowSec + 30, 12), [settlements, nowSec])
  const lastHour = live.count.reduce((a, b) => a + b, 0)
  const newest = settlements[0]?.timestamp
  const hot = newest !== undefined && nowSec - newest < FRESH_SECONDS
  return (
    <div key={hot ? newest : 'idle'} className={cx('glass rounded-2xl p-4', hot && 'pm-glow')}>
      <div className="label">Live transfers</div>
      <div className="mt-1 flex items-center justify-between gap-4">
        <div className="tabular font-display text-[32px] font-bold leading-none text-[#7dd3fc]">{deployed ? lastHour.toLocaleString('en-US') : '—'}</div>
        <div className="w-28">
          <Sparkline values={live.count} height={36} color="#a78bfa" />
        </div>
      </div>
      <div className="mt-1.5 text-xs text-pm-muted">Settled in the last 60 minutes</div>
    </div>
  )
}

function GlobeRing() {
  return (
    <div className="relative h-16 w-16 shrink-0" aria-hidden="true">
      <svg viewBox="0 0 64 64" className="absolute inset-0">
        <defs>
          <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#a78bfa" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="29" fill="rgba(8,10,26,0.7)" stroke="rgba(139,112,255,0.25)" strokeWidth="3" />
        <circle cx="32" cy="32" r="29" fill="none" stroke="url(#ring)" strokeWidth="3" strokeLinecap="round" strokeDasharray="120 182" transform="rotate(-70 32 32)" />
      </svg>
      <Globe className="absolute inset-0 m-auto h-6 w-6 text-violet-200" />
    </div>
  )
}

export default function Dashboard() {
  const { address } = useAccount()
  const { settlements, status, deployed, error, progress, windowStart } = useActivity()
  const loading = deployed && status !== 'ready' && status !== 'error' && settlements.length === 0

  const wallets = useMemo(() => uniqueWallets(settlements), [settlements])

  return (
    <div className="animate-rise relative dash:h-[max(730px,calc(100dvh-112px))]">
      <NotDeployed />

      {/* Headline */}
      <div className="mb-4 dash:absolute dash:left-2 dash:top-0 dash:z-10 dash:mb-0">
        <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white text-balance sm:text-5xl dash:text-[32px] min-[1500px]:dash:text-[40px]">
          The World. <span className="text-[#58cfe8]">Connected.</span> <span className="text-violet-400">Paid.</span>
        </h1>
        <p className="mt-2 text-base text-pm-muted dash:text-[15px] min-[1500px]:dash:text-[17px]">Programmable payments. Borderless possibilities.</p>
      </div>

      {/* System status and live transfers */}
      <div className="mb-4 dash:absolute dash:right-[326px] dash:top-0 dash:z-10 dash:mb-0 dash:w-[260px]">
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <SystemStatus />
          <NetworkPill />
        </div>
        <LiveTransfers settlements={settlements} deployed={deployed} />
      </div>

      {/* Map */}
      <div className="relative mb-4 dash:absolute dash:inset-y-0 dash:left-0 dash:right-[316px] dash:mb-0">
        <div className="dash:absolute dash:inset-x-0 dash:top-[96px]">
          <NetworkMap settlements={settlements} me={address} loading={loading} />
        </div>
        <div className="pointer-events-none absolute bottom-2 left-3 dash:bottom-[190px] dash:left-4">
          <div className="flex items-end gap-4">
            <div>
              <div className="tabular font-display text-6xl font-bold leading-none gradient-text dash:text-[88px]">{deployed ? wallets.toLocaleString('en-US') : '—'}</div>
              <div className="mt-2 font-display text-lg font-semibold uppercase tracking-[0.1em] text-white">Wallets</div>
              <div className="mt-0.5 max-w-[190px] text-xs text-pm-muted">Connected through verified PayMesh payments</div>
            </div>
            <GlobeRing />
          </div>
        </div>
        {progress && (
          <div className="absolute right-3 top-2 rounded-xl border border-pm-line bg-pm-deep/90 px-3 py-2 text-xs text-pm-muted dash:right-4 dash:top-[104px]">
            Indexing block {progress.current.toLocaleString('en-US')} of {progress.head.toLocaleString('en-US')} ({(progress.head - progress.current).toLocaleString('en-US')} remaining)
          </div>
        )}
        {error && <div className="absolute right-3 top-2 rounded-lg border border-pm-bad/40 bg-pm-bad/10 px-2 py-1 text-xs text-pm-bad dash:right-4 dash:top-[104px]">Reconnecting to the network</div>}
        <div className="pointer-events-none absolute bottom-2 right-3 hidden text-[10px] text-pm-muted/70 sm:block dash:bottom-[160px] dash:right-4">
          Wallet positions are illustrative, not geographic{windowStart !== undefined && !progress ? ` · history from block ${windowStart.toLocaleString('en-US')}` : ''}
        </div>
      </div>

      {/* Analytics cards */}
      <div className="mb-4 dash:absolute dash:bottom-0 dash:left-0 dash:right-[316px] dash:mb-0">
        <StatCards />
      </div>

      {/* Identity and live feed */}
      <div className="dash:absolute dash:bottom-0 dash:right-0 dash:top-0 dash:flex dash:w-[304px] dash:flex-col dash:gap-3">
        <div className="hidden dash:block">
          <ProfileCard />
        </div>
        <div className="dash:min-h-0 dash:flex-1">
          <TransactionFeed settlements={settlements} me={address} loading={loading} deployed={deployed} error={error} limit={5} />
        </div>
      </div>
    </div>
  )
}
