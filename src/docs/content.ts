import { paymeshAbi } from '@/paymesh/abis'
import { CHAIN_FACTS, CHAIN_ID, USDC_ADDRESS, addressUrl } from '@/paymesh/chain'
import { PAYMESH, SOURCE_LABELS, START_BLOCK } from '@/paymesh/contracts'
import { IS_MAINNET } from '@/paymesh/network'
import { blockText, type DocPage } from './blocks'
import { circleDocs } from './content-circle'
import { guideDocs } from './content-guides'

/** viem's export name for the Arc network this deployment uses. */
const ARC_VIEM = IS_MAINNET ? 'arc' : 'arcTestnet'

const FN_NOTES: Record<string, string> = {
  pay: 'Send USDC to a wallet. Emits Settled (source 0) and PaymentMemo when a note is given.',
  createLink: 'Create a payment link. Amount 0 lets the payer choose.',
  payLink: 'Pay a link. Funds go straight to the creator. Emits Settled (source 1).',
  closeLink: 'Creator only. Stops a link from accepting payments.',
  batchPay: 'Pay 1 to 200 recipients in one transaction. Emits Settled (source 2) per recipient and BatchSent.',
  createSplit: 'Create an immutable split. Shares are in basis points and sum to 10,000.',
  paySplit: 'Pay a split. Emits Settled (source 3) per recipient.',
  createEscrow: 'Move USDC into escrow for a payee until the deadline.',
  release: 'Payer only. Sends escrowed funds to the payee. Emits Settled (source 4).',
  refund: 'Payee any time, or payer after the deadline. Returns funds to the payer.',
  createPlan: 'Create a recurring plan funded from the payer allowance.',
  execute: 'Anyone. Runs one due payment of a plan. Emits Settled (source 5).',
  cancel: 'Payer only. Cancels an active plan.',
}

const VIEW_NOTES: Record<string, string> = {
  getLink: 'Read a payment link.',
  linksOf: 'Link ids created by an address.',
  getSplit: 'Read a split.',
  splitsOf: 'Split ids created by an address.',
  getEscrow: 'Read an escrow.',
  escrowsOf: 'Escrow ids where an address is payer or payee.',
  getPlan: 'Read a plan.',
  plansOf: 'Plan ids where an address is payer or payee.',
  isDue: 'Whether a plan can run now.',
  activeLinks: 'Number of open payment links.',
  activeEscrows: 'Number of active escrows.',
  activePlans: 'Number of active plans.',
  linkCount: 'Links ever created.',
  splitCount: 'Splits ever created.',
  escrowCount: 'Escrows ever created.',
  planCount: 'Plans ever created.',
  batchCount: 'Batches ever sent.',
}

type AbiFn = { type: 'function'; name: string; inputs: ReadonlyArray<{ type: string; name?: string }> }

function sig(fn: AbiFn): string {
  return `${fn.name}(${fn.inputs.map((i) => (i.name ? `${i.type} ${i.name}` : i.type)).join(', ')})`
}

function referenceDocs(): DocPage[] {
  const fns = paymeshAbi.filter((i): i is AbiFn & (typeof paymeshAbi)[number] => i.type === 'function') as unknown as Array<AbiFn>
  const writes = fns.filter((f) => FN_NOTES[f.name])
  const reads = fns.filter((f) => VIEW_NOTES[f.name])
  const address = PAYMESH ? `\`${PAYMESH}\`` : 'Not deployed'
  return [
    {
      slug: 'smart-contract',
      title: 'Smart contract',
      group: 'Reference',
      summary: 'Address, functions, events and rules of the PayMesh contract.',
      sections: [
        {
          id: 'deployment',
          title: 'Deployment',
          blocks: [
            {
              t: 'table',
              head: ['Field', 'Value'],
              rows: [
                ['Network', `${CHAIN_FACTS.name} (chain ${CHAIN_ID})`],
                ['Contract', address],
                ['Explorer', PAYMESH ? `[Open on the explorer](${addressUrl(PAYMESH)})` : 'n/a'],
                ['USDC', `\`${USDC_ADDRESS}\``],
                ['History starts at block', START_BLOCK ? START_BLOCK.toLocaleString('en-US') : 'n/a'],
              ],
            },
            { t: 'p', text: 'The contract takes the USDC token address in its constructor and has no owner, admin or upgrade path. Source code is verified on the explorer.' },
          ],
        },
        {
          id: 'settled',
          title: 'The Settled event',
          blocks: [
            { t: 'p', text: 'Every time USDC reaches its final recipient, the contract emits one shared event. This is what the dashboard, feed and analytics read.' },
            { t: 'code', lang: 'solidity', code: 'event Settled(\n  address indexed from,\n  address indexed to,\n  uint256 amount,\n  bytes32 indexed category,\n  uint8 source,\n  uint256 ref\n);' },
            {
              t: 'table',
              head: ['source', 'Meaning', 'ref'],
              rows: SOURCE_LABELS.map((label, i) => [String(i), label, i === 0 ? '0' : ['link id', 'batch id', 'split id', 'escrow id', 'plan id'][i - 1]]),
            },
            { t: 'p', text: '`category` is text stored as a 32-byte value. Escrow creation and refunds do not emit `Settled` because no payment has reached a final recipient.' },
          ],
        },
        {
          id: 'write-functions',
          title: 'Write functions',
          blocks: [{ t: 'table', head: ['Function', 'What it does'], rows: writes.map((f) => [`\`${sig(f)}\``, FN_NOTES[f.name]]) }],
        },
        {
          id: 'read-functions',
          title: 'Read functions',
          blocks: [{ t: 'table', head: ['Function', 'Returns'], rows: reads.map((f) => [`\`${sig(f)}\``, VIEW_NOTES[f.name]]) }],
        },
        {
          id: 'limits',
          title: 'Limits',
          blocks: [
            {
              t: 'table',
              head: ['Item', 'Limit'],
              rows: [
                ['Batch recipients', '1 to 200'],
                ['Split recipients', '1 to 50, shares must total 10,000 basis points'],
                ['Plan interval', '60 seconds to 366 days'],
                ['Plan payments', '1 to 1,000'],
                ['Note, escrow description', '140 bytes'],
                ['Link title, split name', '100 bytes'],
              ],
            },
          ],
        },
      ],
    },
    {
      slug: 'developer-guide',
      title: 'Developer guide',
      group: 'Reference',
      summary: 'Call PayMesh and read settlements with viem.',
      sections: [
        {
          id: 'setup',
          title: 'Setup',
          blocks: [
            { t: 'p', text: 'PayMesh works with any EVM library. These examples use [viem](https://viem.sh). Amounts are USDC in 6 decimals, so 25 USDC is `25_000000n`.' },
            { t: 'code', lang: 'typescript', code: `import { createPublicClient, createWalletClient, custom, http, parseAbi, stringToHex } from 'viem'\nimport { ${ARC_VIEM} } from 'viem/chains'\n\nconst PAYMESH = '${PAYMESH ?? '0xYourPayMeshContract'}'\nconst USDC = '${USDC_ADDRESS}'\n\nconst client = createPublicClient({ chain: ${ARC_VIEM}, transport: http('${CHAIN_FACTS.rpcUrls[0]}') })` },
          ],
        },
        {
          id: 'send',
          title: 'Send a payment',
          blocks: [
            { t: 'p', text: 'Approve the exact amount, then call `pay`. Categories are text packed into 32 bytes.' },
            { t: 'code', lang: 'typescript', code: `const wallet = createWalletClient({ chain: ${ARC_VIEM}, transport: custom(window.ethereum) })\nconst [account] = await wallet.getAddresses()\n\nawait wallet.writeContract({\n  account, address: USDC,\n  abi: parseAbi(['function approve(address spender, uint256 amount) returns (bool)']),\n  functionName: 'approve', args: [PAYMESH, 25_000000n],\n})\n\nawait wallet.writeContract({\n  account, address: PAYMESH,\n  abi: parseAbi(['function pay(address to, uint256 amount, bytes32 category, string memo)']),\n  functionName: 'pay',\n  args: ['0xRecipient...', 25_000000n, stringToHex('Invoice', { size: 32 }), 'Invoice #42'],\n})` },
          ],
        },
        {
          id: 'read-settlements',
          title: 'Read settlements',
          blocks: [
            { t: 'p', text: 'Start from the block the contract was deployed at, never from block 0, and read in bounded ranges.' },
            { t: 'code', lang: 'typescript', code: `const logs = await client.getLogs({\n  address: PAYMESH,\n  event: parseAbi(['event Settled(address indexed from, address indexed to, uint256 amount, bytes32 indexed category, uint8 source, uint256 ref)'])[0],\n  fromBlock: ${START_BLOCK ?? 'DEPLOY_BLOCK'}n,\n  toBlock: 'latest',\n})\n\nfor (const log of logs) {\n  const { from, to, amount, source } = log.args\n  console.log(from, to, Number(amount) / 1e6, 'USDC, source', source)\n}` },
            { t: 'note', text: 'Public RPC endpoints may limit how many blocks one `getLogs` call can cover. If a call fails, retry with a smaller range.' },
          ],
        },
        {
          id: 'read-state',
          title: 'Read lists and counters',
          blocks: [
            { t: 'code', lang: 'typescript', code: `const abi = parseAbi([\n  'function linksOf(address) view returns (uint256[])',\n  'function activeEscrows() view returns (uint256)',\n])\n\nconst ids = await client.readContract({ address: PAYMESH, abi, functionName: 'linksOf', args: ['0xCreator...'] })\nconst open = await client.readContract({ address: PAYMESH, abi, functionName: 'activeEscrows' })` },
            { t: 'p', text: 'The [Developer API](/developers) page in the app lists the full ABI with a copy button.' },
          ],
        },
      ],
    },
    {
      slug: 'security',
      title: 'Security',
      group: 'Reference',
      summary: 'How funds are protected, and what is not guaranteed.',
      sections: [
        {
          id: 'design',
          title: 'Design',
          blocks: [
            { t: 'ul', items: ['Non-custodial. Transfers, links, batch and split payments move USDC directly from payer to recipient. Escrow is the only feature that holds funds.', 'No owner, admin, pause switch or upgrade keys. The code you read is the code that runs.', 'Reentrancy protection on every state-changing function.', 'Self-payments are rejected, so verified volume reflects transfers between different wallets.', 'The app approves only the exact amount you are about to send.'] },
          ],
        },
        {
          id: 'review',
          title: 'Review status',
          blocks: [
            { t: 'note', tone: 'warn', text: 'The contract has had an automated security review. That is not a third-party audit. Keep amounts small until you have commissioned an independent audit.' },
          ],
        },
        {
          id: 'known-limits',
          title: 'Known limits',
          blocks: [
            { t: 'ul', items: ['Escrow has no arbiter. The payer decides when to release, and can reclaim after the deadline.', 'USDC is a regulated stablecoin. Transfers to or from blocklisted addresses revert, which can block a split that includes one.', 'Scheduled payments depend on your balance and allowance at run time. They do not lock funds.', 'Success rate and settlement time on the dashboard are measured in your browser, not read from the chain.'] },
          ],
        },
        {
          id: 'your-safety',
          title: 'Keeping yourself safe',
          blocks: [
            { t: 'ul', items: ['Check the contract address in your wallet prompt against the address in these docs.', 'Never share your seed phrase. PayMesh never asks for it.', 'Revoke old approvals in your wallet if you stop using the app.'] },
          ],
        },
      ],
    },
    {
      slug: 'faq',
      title: 'FAQ and troubleshooting',
      group: 'Reference',
      summary: 'Answers to common questions and fixes for common problems.',
      sections: [
        {
          id: 'faq-general',
          title: 'Common questions',
          blocks: [
            { t: 'table', head: ['Question', 'Answer'], rows: [
              ['Does PayMesh charge a fee?', 'No. The contract takes nothing. You only pay network gas, in USDC. Swaps carry the swap provider\'s fee, shown in the quote.'],
              ['Why does Swap say there is no route?', 'Liquidity changes over time. Try a smaller amount or another pair. See [Swap](/docs/swap).'],
              ['Do swaps show in my dashboard?', 'Your swaps appear in Your transactions on the Overview and in Activity under My transactions, with a Swaps filter. They do not count in PayMesh volume because they do not go through the PayMesh contract. See [Swap](/docs/swap).'],
              ['Which network does it use?', IS_MAINNET ? `${CHAIN_FACTS.name} mainnet. Payments move real USDC.` : `${CHAIN_FACTS.name}. This deployment is testnet only.`],
              ['Why can I not pay myself?', 'Self-payments are rejected so volume is not inflated by moving funds between your own address.'],
              ['Can I undo a payment?', 'No. Confirmed onchain payments are final. Only an escrow can be released or refunded before it settles.'],
              ['Why are earlier transactions missing?', 'The app reads history from a fixed start block. Older transactions still exist on the explorer.'],
            ] },
          ],
        },
        {
          id: 'troubleshooting',
          title: 'Troubleshooting',
          blocks: [
            { t: 'table', head: ['Problem', 'Fix'], rows: [
              ['Wallet will not connect', 'Unlock the wallet, reload the page and try again. Use a browser with a wallet extension installed.'],
              [`"Switch to ${CHAIN_FACTS.name}" is shown`, `Your wallet is on another chain. Select the button to move to ${CHAIN_FACTS.name}.`],
              ['Insufficient balance', IS_MAINNET ? 'Add USDC on Arc. The same balance pays for gas.' : 'Get test USDC from the [faucet](https://faucet.circle.com). The same balance pays for gas.'],
              ['Transaction was reverted', 'Check the amount, the recipient and, for escrow or plans, the deadline and allowance. The toast names the cause when the wallet reports one.'],
              ['A payment link says not found', 'The link id does not exist on this contract, or the contract address is not configured.'],
              ['The dashboard shows no data', 'No payments have settled since the history start block, or the network is unreachable. A banner explains which.'],
              ['Numbers look stale', 'Reload the page. Open [Settings](/settings) and clear cached history to rebuild it.'],
            ] },
          ],
        },
        {
          id: 'help',
          title: 'More help',
          blocks: [{ t: 'p', text: 'Network and USDC questions are answered in the [Arc docs](https://docs.arc.io) and [Circle developer docs](https://developers.circle.com).' }],
        },
      ],
    },
  ]
}

export function buildDocs(): DocPage[] {
  return [...guideDocs(), ...circleDocs(), ...referenceDocs()]
}

export interface SearchHit {
  page: DocPage
  sectionId: string
  sectionTitle: string
  snippet: string
}

/** Case-insensitive search across page titles, section titles and body text. Every word must match. */
export function searchDocs(pages: DocPage[], query: string): SearchHit[] {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean)
  if (words.length === 0) return []
  const hits: SearchHit[] = []
  for (const page of pages) {
    for (const s of page.sections) {
      const body = s.blocks.map(blockText).join(' ')
      const haystack = `${page.title} ${s.title} ${body}`.toLowerCase()
      if (!words.every((w) => haystack.includes(w))) continue
      const idx = body.toLowerCase().indexOf(words[0])
      const start = Math.max(0, idx - 40)
      const snippet = idx >= 0 ? `${start > 0 ? '…' : ''}${body.slice(start, start + 140).replace(/[`*[\]]/g, '')}…` : page.summary
      hits.push({ page, sectionId: s.id, sectionTitle: s.title, snippet })
      if (hits.length >= 20) return hits
    }
  }
  return hits
}
