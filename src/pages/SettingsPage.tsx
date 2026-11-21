import { useAccount, useDisconnect } from 'wagmi'
import { toast } from 'sonner'
import { useActivity } from '@/paymesh/activityContext'
import { CHAIN_FACTS, CHAIN_ID, RPC_URL, addressUrl } from '@/paymesh/chain'
import { PAYMESH } from '@/paymesh/contracts'
import { Badge, Button, Card, ExplorerLink, PageHeader } from '@/components/ui'
import { useTheme, type ThemeChoice } from '@/paymesh/themeContext'

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-pm-line/50 py-3 text-sm last:border-0">
      <span className="text-pm-muted">{label}</span>
      <span className="text-right text-pm-text">{children}</span>
    </div>
  )
}

const THEMES: Array<{ value: ThemeChoice; label: string }> = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System' },
]

export default function SettingsPage() {
  const { choice, setChoice } = useTheme()
  const { address, chainId, connector, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const { status, head, windowStart, blockTimeSec, settlements } = useActivity()

  const clearLocal = (prefix: string, label: string) => {
    Object.keys(localStorage)
      .filter((k) => k.startsWith(prefix))
      .forEach((k) => localStorage.removeItem(k))
    toast.success(`${label} cleared`)
    setTimeout(() => window.location.reload(), 600)
  }

  return (
    <div className="">
      <PageHeader title="Settings" subtitle="Wallet, network and local data for this browser." />
      <div className="grid gap-5 lg:grid-cols-2">
        <Card className="p-5 lg:col-span-2">
          <div className="label mb-2">Appearance</div>
          <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Theme">
            {THEMES.map((t) => (
              <Button key={t.value} variant={choice === t.value ? 'primary' : 'ghost'} role="radio" aria-checked={choice === t.value} onClick={() => setChoice(t.value)}>
                {t.label}
              </Button>
            ))}
          </div>
          <p className="mt-2 text-xs text-pm-muted">System follows your device setting. The choice is saved on this device.</p>
        </Card>

        <Card className="p-5">
          <div className="label mb-2">Wallet</div>
          <Row label="Status">{isConnected ? <Badge tone="good">Connected</Badge> : <Badge>Not connected</Badge>}</Row>
          <Row label="Address">{address ? <ExplorerLink href={addressUrl(address)}><span className="font-mono text-xs">{address}</span></ExplorerLink> : '—'}</Row>
          <Row label="Wallet app">{connector?.name ?? '—'}</Row>
          <Row label="Wallet network">{chainId === undefined ? '—' : chainId === CHAIN_ID ? CHAIN_FACTS.name : `Chain ${chainId} (switch to ${CHAIN_FACTS.name})`}</Row>
          {isConnected && (
            <Button variant="danger" className="mt-3" onClick={() => disconnect()}>
              Disconnect wallet
            </Button>
          )}
        </Card>

        <Card className="p-5">
          <div className="label mb-2">Network</div>
          <Row label="Network">{CHAIN_FACTS.name}</Row>
          <Row label="Chain ID">{CHAIN_ID}</Row>
          <Row label="RPC"><span className="break-all font-mono text-xs">{RPC_URL}</span></Row>
          <Row label="Index status">{status === 'ready' ? <Badge tone="good">Up to date</Badge> : status === 'error' ? <Badge tone="bad">Unreachable</Badge> : <Badge tone="warn">{status === 'indexing' ? 'Indexing' : 'Starting'}</Badge>}</Row>
          <Row label="Latest block">{head?.toLocaleString('en-US') ?? '—'}</Row>
          <Row label="History starts at block">{windowStart?.toLocaleString('en-US') ?? '—'}</Row>
          <Row label="Measured block time">{blockTimeSec ? `${blockTimeSec.toFixed(2)} sec` : '—'}</Row>
          <Row label="Settlements indexed">{settlements.length.toLocaleString('en-US')}</Row>
        </Card>

        <Card className="p-5">
          <div className="label mb-2">Contract</div>
          <Row label="PayMesh">
            {PAYMESH ? (
              <ExplorerLink href={addressUrl(PAYMESH)}>
                <span className="break-all font-mono text-xs">{PAYMESH}</span>
              </ExplorerLink>
            ) : (
              <Badge tone="warn">Not deployed</Badge>
            )}
          </Row>
        </Card>

        <Card className="p-5">
          <div className="label mb-2">Local data</div>
          <p className="mb-4 text-sm text-pm-muted text-pretty">
            PayMesh keeps a cache of indexed payments, your saved recipients and your transaction timings in this browser only. Clearing them never touches your funds or onchain records.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button variant="ghost" onClick={() => clearLocal('paymesh:index', 'Payment index')}>
              Rebuild payment index
            </Button>
            <Button variant="ghost" onClick={() => clearLocal('paymesh:txlog', 'Timing history')}>
              Clear timing history
            </Button>
            <Button variant="danger" onClick={() => clearLocal('paymesh:recipients', 'Recipients')}>
              Delete recipients
            </Button>
          </div>
          <div className="mt-5 rounded-xl border border-pm-line bg-pm-text/[0.03] p-3 text-xs text-pm-muted text-pretty">
            Security: PayMesh contracts have no owner and no admin keys. USDC approvals are exact amounts. These contracts have had an automated review but not a third-party audit, so use
            test funds until you have an independent audit.
          </div>
        </Card>
      </div>
    </div>
  )
}
