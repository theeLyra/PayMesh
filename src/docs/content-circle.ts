import { CHAIN_FACTS } from '@/paymesh/chain'
import { IS_MAINNET } from '@/paymesh/network'
import type { DocPage } from './blocks'

/** Guides for the Circle products PayMesh builds on, written to match what is actually live. */
export function circleDocs(): DocPage[] {
  const net = CHAIN_FACTS.name
  return [
    {
      slug: 'cross-chain',
      title: 'Cross-chain transfers',
      group: 'Circle',
      summary: 'Move native USDC between Arc and other chains with Circle CCTP V2.',
      sections: [
        {
          id: 'what-it-is',
          title: 'What it does',
          blocks: [
            { t: 'p', text: `The [Cross-chain](/bridge) page sends USDC between ${net} and other chains with Circle CCTP V2. USDC is burned on the source chain and minted natively on the destination, so you receive real USDC and not a wrapped copy. Your wallet signs every transaction. PayMesh never holds the funds.` },
            { t: 'note', tone: 'warn', text: 'Status: Beta. Routes and fee quotes are read live from Circle for Arc to Base and Arc to Ethereum. The first full transfer on your wallet is what confirms it end to end, so start with a small amount.' },
          ],
        },
        {
          id: 'how-to',
          title: 'Send USDC to another chain',
          blocks: [
            { t: 'ol', items: ['Open [Cross-chain](/bridge) and connect your wallet.', 'Choose the source chain, the destination chain and an amount. The arrow button flips them.', 'Optionally enter a different recipient address. Leave it empty to receive on your own wallet.', 'Check the quote: what you receive, the Circle fee and the network fees.', 'Select the send button. Your wallet asks you to approve USDC and to burn it. The status panel then follows the Circle attestation and the mint on the destination.'] },
            { t: 'ul', items: ['You need a little gas on the source chain. On Arc, gas is paid in USDC.', 'Sending from another chain offers Fast and Standard speed. Arc as a source uses standard attestation.', 'Standard transfers can take several minutes. Keep the tab open until it says complete, and use the explorer links in the status panel if it stops.'] },
          ],
        },
        {
          id: 'safety',
          title: 'Safety notes',
          blocks: [{ t: 'ul', items: ['Check the destination chain and the recipient address before you confirm. A transfer cannot be reversed.', IS_MAINNET ? 'This deployment runs on mainnet, so transfers move real USDC.' : 'This deployment runs on a testnet, so transfers use test USDC.', 'PayMesh asks for exact approvals and shows the fees Circle quotes before you sign.'] }],
        },
      ],
    },
    {
      slug: 'gateway',
      title: 'Gateway',
      group: 'Circle',
      summary: 'One unified USDC balance across chains with Circle Gateway.',
      sections: [
        {
          id: 'what-it-is',
          title: 'What it does',
          blocks: [
            { t: 'p', text: 'The [Gateway](/gateway) page shows one unified USDC balance for your wallet across the chains Circle Gateway supports. You deposit USDC once, then spend from that balance on another chain. Circle verifies your signed intent and native USDC is minted on the destination.' },
            { t: 'note', tone: 'warn', text: `Status: Beta. Your unified balance and the deposit fee quote are read live from Circle. Deposits and spends run in your own wallet, so the first one you make confirms them end to end. Start with a small amount.` },
          ],
        },
        {
          id: 'use',
          title: 'Deposit and spend',
          blocks: [
            { t: 'ol', items: [`Open [Gateway](/gateway). The balance card lists your confirmed and pending USDC per chain.`, `Under Deposit, enter an amount from ${net} and confirm in your wallet.`, 'Under Spend on another chain, choose the destination, an amount and an optional recipient. Your wallet signs a burn intent.', 'The status panel follows each step until the USDC is minted on the destination.'] },
            { t: 'ul', items: ['Deposits count in the unified balance after they finalize onchain. Until then they show as pending.', 'Gateway covers a set of EVM chains, including Arc, Ethereum, Base, Arbitrum, Optimism, Avalanche, Polygon and Unichain. The page lists the exact set for this network.', 'Fees are quoted before you confirm.'] },
          ],
        },
      ],
    },
    {
      slug: 'circle-integrations',
      title: 'Circle integrations',
      group: 'Circle',
      summary: 'What is live, what is in beta and what is upcoming, with the requirement for each.',
      sections: [
        {
          id: 'status',
          title: 'Status at a glance',
          blocks: [
            { t: 'p', text: 'Something is called Live only after it has run end to end. Beta means live quotes work and the first transfer from your wallet confirms it. Upcoming means PayMesh does not offer it yet and the requirement is listed below.' },
            {
              t: 'table',
              head: ['Product', 'Status', 'What is verified'],
              rows: [
                ['Native USDC on Arc, PayMesh contract', 'Live', 'The contract is verified on the Arc explorer. The landing page shows which functions have real mainnet transactions.'],
                ['Circle swap aggregator', 'Live', 'Swaps run from PayMesh wallets and appear in wallet history.'],
                ['CCTP V2 cross-chain', 'Beta', 'Routes and fee quotes read live from Circle. First full transfer pending.'],
                ['Circle Gateway', 'Beta', 'Unified balance and deposit fee quote read live. First deposit and spend pending.'],
                ['Programmable Wallets', 'Upcoming', 'Not integrated.'],
                ['Paymaster', 'Upcoming', 'Not integrated.'],
                ['Merchant API, invoices, webhooks', 'Upcoming', 'Not built yet.'],
              ],
            },
          ],
        },
        {
          id: 'wallets',
          title: 'Programmable Wallets',
          blocks: [
            { t: 'p', text: 'Circle Programmable Wallets create and manage wallets through Circle servers. Developer-controlled wallets need a Circle API key and a registered entity secret, and both must live on a server you control. User-controlled wallets also need an app ID and a sign-in method. PayMesh is a browser app with no server, so it connects your own wallet today and holds no Circle secrets.' },
            { t: 'ul', items: ['Requirement: a Circle Console account, an API key and an entity secret with its recovery file backed up.', 'Requirement: a hosted server for wallet creation and signing calls.', 'Requirement: confirmation that Arc mainnet is available for the wallet type you choose.'] },
          ],
        },
        {
          id: 'paymaster',
          title: 'Paymaster',
          blocks: [{ t: 'p', text: `A paymaster sponsors gas or accepts USDC for gas in smart-account wallets. It needs Arc mainnet support to be confirmed and a smart-account wallet flow. ${net} already uses USDC as the gas token, so ordinary wallets pay gas in USDC without a paymaster.` }],
        },
        {
          id: 'merchant',
          title: 'Merchant checkout, invoices and API',
          blocks: [
            { t: 'p', text: 'Available now: payment links with a fixed or open amount, a receive QR code that fills in a payment, scheduled payments and a verified contract with a public event for every settlement. A hosted checkout, invoices with statuses, webhooks and a REST API are not built. They need a new contract version, a server and database, and an independent audit before real merchants rely on them.' },
            { t: 'ul', items: ['Contract: invoices and a merchant registry, deployed and verified by you.', 'Server: webhooks, an API and a database, with Circle keys kept in environment variables.', 'Audit: an independent review, because the contract holds or moves funds.'] },
          ],
        },
      ],
    },
  ]
}
