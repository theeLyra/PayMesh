import { IS_MAINNET } from '@/paymesh/network'
import { Copy } from 'lucide-react'
import { toast } from 'sonner'
import { paymeshAbi, settledEvent, SETTLED_EVENT_SIGNATURE } from '@/paymesh/abis'
import { CHAIN_FACTS, CHAIN_ID, RPC_URL, USDC_ADDRESS, addressUrl } from '@/paymesh/chain'
import { PAYMESH } from '@/paymesh/contracts'
import { Link } from '@/paymesh/router'
import { Badge, Button, Card, ExplorerLink, NotDeployed, PageHeader } from '@/components/ui'

async function copy(text: string, label: string) {
  try {
    await navigator.clipboard.writeText(text)
    toast.success(`${label} copied`)
  } catch {
    toast.error('Could not copy')
  }
}

function Code({ children }: { children: string }) {
  return (
    <div className="relative">
      <pre className="overflow-x-auto rounded-xl border border-pm-line bg-pm-text/[0.05] p-4 pr-12 font-mono text-[12px] leading-6 text-pm-text">{children}</pre>
      <button onClick={() => void copy(children, 'Snippet')} aria-label="Copy snippet" className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-lg text-pm-muted hover:bg-pm-text/10 hover:text-pm-text">
        <Copy className="h-4 w-4" />
      </button>
    </div>
  )
}

export default function Developers() {
  const payAddress = PAYMESH ?? '0xYourPayMeshContract'
  const readSnippet = `import { createPublicClient, http, parseAbiItem } from 'viem'

const client = createPublicClient({ transport: http('${RPC_URL}') })

// Every USDC settlement from any PayMesh contract is this one event.
const logs = await client.getLogs({
  address: '${payAddress}',
  event: parseAbiItem('${SETTLED_EVENT_SIGNATURE}'),
  fromBlock: /* the block your contracts were deployed at */,
})`
  const paySnippet = `import { erc20Abi, parseAbi, stringToHex } from 'viem'

const USDC = '${USDC_ADDRESS}'
const paymesh = '${payAddress}'

// 1. Approve the exact amount, 2. pay.
await wallet.writeContract({ address: USDC, abi: erc20Abi, functionName: 'approve', args: [paymesh, 25_000000n] })
await wallet.writeContract({
  address: paymesh,
  abi: parseAbi(['function pay(address to, uint256 amount, bytes32 category, string memo)']),
  functionName: 'pay',
  args: [recipient, 25_000000n, stringToHex('Invoice', { size: 32 }), 'Invoice 1042'],
})`

  return (
    <div className="">
      <PageHeader
        title="Developer API"
        subtitle="PayMesh is one onchain contract. Integrate straight from your own app with any EVM library. There is no hosted REST service in between."
        action={
          <Link to="/docs/developer-guide" className="inline-flex min-h-[44px] items-center text-sm font-semibold text-pm-violet hover:underline">
            Read the developer guide
          </Link>
        }
      />
      <NotDeployed />
      <div className="space-y-5">
        <Card className="overflow-hidden">
          <div className="border-b border-pm-line/60 px-4 py-3 label">
            Contract on {CHAIN_FACTS.name} (chain {CHAIN_ID})
          </div>
          <ul className="divide-y divide-pm-line/60">
            <li className="flex flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3.5">
              <div className="w-40 font-semibold text-pm-text">PayMesh</div>
              {PAYMESH ? (
                <>
                  <ExplorerLink href={addressUrl(PAYMESH)}>
                    <span className="break-all font-mono text-xs">{PAYMESH}</span>
                  </ExplorerLink>
                  <ExplorerLink href={`${addressUrl(PAYMESH)}?tab=contract`}>Verified source</ExplorerLink>
                  <Button variant="ghost" className="ml-auto min-h-[36px] px-3 text-xs" onClick={() => void copy(JSON.stringify(paymeshAbi, null, 2), 'ABI')}>
                    <Copy className="h-3.5 w-3.5" /> ABI
                  </Button>
                </>
              ) : (
                <>
                  <Badge tone="warn">Not deployed</Badge>
                  <span className="font-mono text-[11px] text-pm-muted">{IS_MAINNET ? 'VITE_PAYMESH_ADDRESS_MAINNET' : 'VITE_PAYMESH_ADDRESS'}</span>
                </>
              )}
            </li>
            <li className="flex flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3.5">
              <div className="w-40 font-semibold text-pm-text">USDC (Circle)</div>
              <ExplorerLink href={addressUrl(USDC_ADDRESS)}>
                <span className="break-all font-mono text-xs">{USDC_ADDRESS}</span>
              </ExplorerLink>
              <span className="text-xs text-pm-muted">6 decimals, also the native gas asset on Arc</span>
            </li>
          </ul>
        </Card>

        <div className="grid gap-5 lg:grid-cols-2">
          <Card className="p-5">
            <div className="label mb-1">Send a payment</div>
            <p className="mb-3 text-sm text-pm-muted">Approve PayMesh for the exact amount, then call pay.</p>
            <Code>{paySnippet}</Code>
          </Card>
          <Card className="p-5">
            <div className="label mb-1">Read verified payments</div>
            <p className="mb-3 text-sm text-pm-muted">The contract emits one shared event whenever USDC reaches its final recipient.</p>
            <Code>{readSnippet}</Code>
          </Card>
        </div>

        <Card className="p-5">
          <div className="label mb-2">Settled event</div>
          <p className="mb-3 text-sm text-pm-muted">
            The <span className="font-mono">source</span> field says which contract paid: 0 direct, 1 payment link, 2 batch, 3 split, 4 escrow release, 5 scheduled. The{' '}
            <span className="font-mono">ref</span> field is the link, batch, split, escrow or plan number.
          </p>
          <Code>{SETTLED_EVENT_SIGNATURE}</Code>
          <p className="mt-3 text-xs text-pm-muted">Topic: {settledEvent.name} (from, to and category are indexed).</p>
        </Card>
      </div>
    </div>
  )
}
