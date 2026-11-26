import { CHAIN_FACTS, CHAIN_ID, USDC_ADDRESS } from '@/paymesh/chain'
import { CATEGORIES } from '@/paymesh/contracts'
import { IS_MAINNET } from '@/paymesh/network'
import type { DocPage } from './blocks'

/** Overview, getting started, and one guide per payment type. Every limit below matches the deployed contract. */
export function guideDocs(): DocPage[] {
  return [
    {
      slug: 'overview',
      title: 'Overview',
      group: 'Start',
      summary: 'What PayMesh is and what you can do with it.',
      sections: [
        {
          id: 'what-is-paymesh',
          title: 'What is PayMesh?',
          blocks: [
            { t: 'p', text: 'PayMesh is one smart contract and one app for moving USDC, with a built-in token swap. It covers transfers, payment links, batch payments, split payments, escrow and scheduled payments, all on Arc.' },
            { t: 'p', text: 'Powering the future of programmable payments. One network. Limitless USDC possibilities.' },
            { t: 'ul', items: ['No platform fee. The contract takes nothing from your payments.', 'No admin, owner or upgrade keys. Nobody can change the rules after deployment.', 'Non-custodial. Only escrow holds funds, and only until they are released or refunded.', 'Verifiable. Every final USDC delivery emits a `Settled` event you can read on the explorer.'] },
          ],
        },
        {
          id: 'payment-types',
          title: 'Payment types',
          blocks: [
            {
              t: 'table',
              head: ['Type', 'Use it to', 'Guide'],
              rows: [
                ['Transfer', 'Send USDC to one wallet with a category and note', '[Transfers](/docs/transfers)'],
                ['Payment link', 'Get paid through a shareable link', '[Payment links](/docs/payment-links)'],
                ['Batch', 'Pay up to 200 wallets in one transaction', '[Batch payments](/docs/batch-payments)'],
                ['Split', 'Divide each payment between wallets by fixed shares', '[Split payments](/docs/split-payments)'],
                ['Escrow', 'Hold funds for a payee until you release them', '[Escrow](/docs/escrow)'],
                ['Scheduled', 'Recurring payments pulled from your allowance', '[Scheduled payments](/docs/scheduled-payments)'],
                ['Swap', 'Exchange USDC, EURC and cirBTC with Circle\'s swap aggregator', '[Swap](/docs/swap)'],
              ],
            },
          ],
        },
        {
          id: 'where-to-start',
          title: 'Where to start',
          blocks: [
            { t: 'ol', items: ['Follow [Getting started](/docs/getting-started) to connect a wallet and get USDC.', 'Open the [app](/dashboard) and send a first transfer.', 'Read the [security notes](/docs/security) before you use real funds anywhere.'] },
            { t: 'note', tone: 'warn', text: IS_MAINNET ? 'This deployment runs on Arc mainnet, so payments move real USDC. The contract has had an automated review, not a third-party audit. Start with small amounts.' : 'This deployment runs on Arc Testnet. It uses test USDC with no real value.' },
          ],
        },
      ],
    },
    {
      slug: 'getting-started',
      title: 'Getting started',
      group: 'Start',
      summary: IS_MAINNET ? 'Connect a wallet, get USDC and send your first payment.' : 'Connect a wallet, get test USDC and send your first payment.',
      sections: [
        {
          id: 'network',
          title: 'Network details',
          blocks: [
            {
              t: 'table',
              head: ['Setting', 'Value'],
              rows: [
                ['Network', CHAIN_FACTS.name],
                ['Chain ID', String(CHAIN_ID)],
                ['RPC URL', `\`${CHAIN_FACTS.rpcUrls[0]}\``],
                ['Explorer', CHAIN_FACTS.explorerBase],
                ['USDC (ERC-20, 6 decimals)', `\`${USDC_ADDRESS}\``],
              ],
            },
            { t: 'p', text: 'On Arc, USDC is also the gas token. One USDC balance pays for both payments and network fees, so you never need a second token.' },
          ],
        },
        {
          id: 'connect',
          title: 'Connect your wallet',
          blocks: [
            { t: 'ol', items: ['Open the [app](/dashboard) and choose Connect wallet.', 'Pick your browser wallet and approve the connection.', `If your wallet is on another network, PayMesh shows a Switch to ${CHAIN_FACTS.name} button. Use it to move to the right network.`] },
          ],
        },
        {
          id: 'get-test-usdc',
          title: IS_MAINNET ? 'Get USDC' : 'Get test USDC',
          blocks: IS_MAINNET
            ? [
                { t: 'p', text: 'Mainnet payments use real USDC on Arc. Bring USDC to Arc from an exchange or bridge it with Circle\'s tools, and keep a little for network fees, which Arc takes in USDC too.' },
                { t: 'note', tone: 'warn', text: 'Mainnet transactions are irreversible. Check every address and amount before you sign.' },
              ]
            : [
                { t: 'p', text: 'Request test USDC from the [Circle faucet](https://faucet.circle.com). Choose Arc Testnet, paste your wallet address and request USDC. Your balance appears in the top bar within seconds.' },
                { t: 'note', text: 'Test USDC is free and has no value. Never send real funds to a testnet address.' },
              ],
        },
        {
          id: 'first-payment',
          title: 'Send your first payment',
          blocks: [
            { t: 'ol', items: ['Open [Transfers](/transfers).', 'Enter a recipient address and an amount in USDC. Pick a category.', 'Select Send. Your wallet asks you to approve the exact amount first, then to confirm the payment.', 'Watch the confirmation. The payment then appears in [Activity](/activity) and the dashboard feed, with a link to the explorer.'] },
            { t: 'p', text: 'You cannot send to your own address. Use a second wallet to test sending and receiving.' },
          ],
        },
      ],
    },
    {
      slug: 'transfers',
      title: 'Transfers',
      group: 'Payments',
      summary: 'Send USDC to any wallet with a category and note.',
      sections: [
        {
          id: 'send',
          title: 'Sending a transfer',
          blocks: [
            { t: 'p', text: 'A transfer moves USDC from your wallet straight to the recipient in one call to `pay`. PayMesh never holds the funds in between.' },
            { t: 'ul', items: ['Recipient: any valid address except your own.', 'Amount: greater than zero, up to your USDC balance.', `Category: a label for reporting. Built in: ${CATEGORIES.join(', ')}.`, 'Note: optional text up to 140 bytes, stored in a `PaymentMemo` event.'] },
          ],
        },
        {
          id: 'approval',
          title: 'Approvals',
          blocks: [{ t: 'p', text: 'Before the first payment the app asks you to approve exactly the amount you are sending. If your existing allowance already covers it, this step is skipped.' }],
        },
        {
          id: 'saved-recipients',
          title: 'Saved recipients',
          blocks: [{ t: 'p', text: 'The [Recipients](/recipients) page keeps an address book in your browser. Choose Send next to a saved recipient to prefill the transfer form. Saved recipients never leave your device.' }],
        },
        {
          id: 'receive-qr',
          title: 'Receive and scan to pay',
          blocks: [
            { t: 'p', text: 'On the Overview, select **Receive** to show a QR code for your wallet. Anyone can scan it with their phone camera. It opens PayMesh on the Transfers page with your address filled in, and an amount too if you entered one, so they only need to connect and confirm.'.replace(/\*\*/g, '') },
            { t: 'ul', items: [
              'The Payment link tab is the best choice for people paying you with PayMesh. You can add an optional amount.',
              'The Wallet address tab shows a plain address QR for wallet apps that scan addresses.',
              'To pay someone else, open Transfers and select the scan button next to Recipient wallet. Browsers that support QR reading scan inside the page. Otherwise use your phone camera app.',
              'Always check the recipient address and amount before you confirm. A QR code only fills in the form.',
            ] },
          ],
        },
      ],
    },
    {
      slug: 'payment-links',
      title: 'Payment links',
      group: 'Payments',
      summary: 'Create a shareable link and get paid directly to your wallet.',
      sections: [
        {
          id: 'create',
          title: 'Create a link',
          blocks: [
            { t: 'ol', items: ['Open [Payment links](/links).', 'Set an amount, or leave it empty so the payer chooses.', 'Add a title (up to 100 bytes) and a category, then create the link.', 'Copy the link and share it.'] },
            { t: 'p', text: 'A link looks like `/links?pay=3`. Opening it shows the title, amount and a pay button.' },
          ],
        },
        {
          id: 'paying',
          title: 'Paying a link',
          blocks: [
            { t: 'ul', items: ['Funds go from the payer straight to the link creator. PayMesh never holds them.', 'For a fixed amount link, the payer must pay exactly that amount.', 'You cannot pay a link you created.', 'A link can be paid any number of times until it is closed.'] },
          ],
        },
        {
          id: 'closing',
          title: 'Closing a link',
          blocks: [{ t: 'p', text: 'Only the creator can close a link. A closed link rejects payments. The link page shows total paid and the number of payments.' }],
        },
      ],
    },
    {
      slug: 'batch-payments',
      title: 'Batch payments',
      group: 'Payments',
      summary: 'Pay many wallets in a single transaction.',
      sections: [
        {
          id: 'rows',
          title: 'Enter recipients',
          blocks: [
            { t: 'p', text: 'Open [Batch payments](/batch). Each row has a wallet address and an amount in USDC. Use Add recipient for more rows, or Apply to all to give every row the same amount.' },
            { t: 'p', text: 'You can also choose Paste a list and paste lines like `0x..., 25.00`. They are added to the rows so you can review them.' },
          ],
        },
        {
          id: 'limits',
          title: 'Rules and limits',
          blocks: [
            { t: 'ul', items: ['1 to 200 recipients per batch.', 'Every address must be valid and different from yours, and every amount must be above zero.', 'The batch total must not exceed your USDC balance. The side panel shows your balance before and after.', 'You approve the total once, then all payments are sent in one transaction.'] },
          ],
        },
        {
          id: 'result',
          title: 'What gets recorded',
          blocks: [{ t: 'p', text: 'Each recipient gets its own `Settled` event with source `2`, plus one `BatchSent` event with the batch id, total and count.' }],
        },
      ],
    },
    {
      slug: 'split-payments',
      title: 'Split payments',
      group: 'Payments',
      summary: 'Define fixed shares once and divide every payment between wallets.',
      sections: [
        {
          id: 'create',
          title: 'Create a split',
          blocks: [
            { t: 'ul', items: ['1 to 50 recipients, each with a share greater than zero.', 'Shares are percentages and must add up to exactly 100. Two decimals are supported, for example 33.33.', 'Add a name (up to 100 bytes). A split cannot be edited after creation, so create a new one to change it.'] },
          ],
        },
        {
          id: 'pay',
          title: 'Paying a split',
          blocks: [
            { t: 'p', text: 'Anyone can pay a split. The amount is divided by the shares. Each recipient except the last gets their share rounded down, and the last recipient receives the remainder, so the total always adds up exactly.' },
            { t: 'note', tone: 'warn', text: 'USDC transfers to or from blocklisted addresses revert. If any recipient in a split is blocklisted, payments to that split fail for everyone. Check recipients before you create a split.' },
            { t: 'p', text: 'The payer cannot be one of the recipients of the split they are paying.' },
          ],
        },
      ],
    },
    {
      slug: 'escrow',
      title: 'Escrow',
      group: 'Payments',
      summary: 'Hold USDC for a payee until you release it or the deadline passes.',
      sections: [
        {
          id: 'create',
          title: 'Create an escrow',
          blocks: [
            { t: 'p', text: 'Creating an escrow moves the amount from your wallet into the PayMesh contract. Choose the payee, amount, a deadline and a short description (up to 140 bytes).' },
            { t: 'ul', items: ['The payee cannot be your own address.', 'The deadline must be in the future.', 'The funds stay in the contract until the escrow is released or refunded.'] },
          ],
        },
        {
          id: 'who-can-do-what',
          title: 'Who can do what',
          blocks: [
            {
              t: 'table',
              head: ['Action', 'Who', 'When'],
              rows: [
                ['Release', 'Payer', 'Any time while the escrow is active. Sends the funds to the payee.'],
                ['Refund', 'Payee', 'Any time while active. Returns the funds to the payer.'],
                ['Refund', 'Payer', 'Only after the deadline has passed.'],
              ],
            },
            { t: 'note', tone: 'warn', text: 'This is a payer-controlled escrow with no arbiter. If the payer never releases, the payee can only wait: the payer can reclaim after the deadline. Use it with parties who trust each other to act in good faith.' },
          ],
        },
        {
          id: 'volume',
          title: 'Escrow and volume',
          blocks: [{ t: 'p', text: 'Only a release counts as a settled payment. Creating or refunding an escrow does not add to verified volume.' }],
        },
      ],
    },
    {
      slug: 'scheduled-payments',
      title: 'Scheduled payments',
      group: 'Payments',
      summary: 'Recurring payments pulled from your allowance on a schedule.',
      sections: [
        {
          id: 'create',
          title: 'Create a plan',
          blocks: [
            { t: 'ul', items: ['Payee and amount for each payment.', 'Interval between payments, from 1 minute to 366 days.', 'Start time. Leave it empty to start now.', 'Number of payments, from 1 to 1,000.'] },
            { t: 'p', text: 'Your funds are not locked. Each payment is pulled from your wallet when it runs, using your USDC allowance, so keep enough balance and allowance for the remaining payments.' },
          ],
        },
        {
          id: 'executing',
          title: 'Running payments',
          blocks: [
            { t: 'p', text: 'Anyone can run a payment once it is due. One payment runs per call, and the next due time moves forward by one interval. In the app, a due plan shows an Execute due payment button.' },
            { t: 'p', text: 'If your balance or allowance is too low when a payment is due, the run fails and can be retried after you top up. When your allowance is lower than your remaining payments, the page shows an approval button for the missing amount.' },
          ],
        },
        {
          id: 'cancel',
          title: 'Cancelling',
          blocks: [{ t: 'p', text: 'The payer can cancel an active plan at any time. Payments already made are not reversed.' }],
        },
      ],
    },
    {
      slug: 'swap',
      title: 'Swap',
      group: 'Payments',
      summary: 'Swap USDC, EURC and cirBTC on Arc with Circle\'s swap aggregator, built into the app.',
      sections: [
        {
          id: 'what-it-does',
          title: 'What it does',
          blocks: [
            { t: 'p', text: 'The [Swap](/swap) page exchanges one token for another on Arc without leaving PayMesh. It uses Circle\'s swap aggregator through the Circle App Kit, so quotes come from a live route and your wallet signs the swap itself.' },
            { t: 'table', head: ['Token', 'Name', 'Decimals'], rows: [['USDC', 'USD Coin', '6'], ['EURC', 'Euro Coin', '6'], ['cirBTC', 'Circle Wrapped Bitcoin', '8']] },
            { t: 'note', text: `Swaps run on ${CHAIN_FACTS.name} only, and Arc supports these three tokens for swaps. Swaps are separate from PayMesh payments: they do not go through the PayMesh contract and do not appear in the dashboard volume.` },
          ],
        },
        {
          id: 'how-to-swap',
          title: 'How to swap',
          blocks: [
            {
              t: 'ol',
              items: [
                'Open [Swap](/swap) and connect your wallet.',
                'Choose the token you pay with and the token you want from the list with each token\'s logo and your balance. The arrow button flips the pair.',
                'Enter an amount, or select Max. Max for USDC keeps 0.10 USDC back, because USDC also pays network fees on Arc.',
                'Pick a slippage tolerance: 0.5%, 1% or 3%.',
                'The best price loads on its own as you type and keeps refreshing. You see the amount you receive, the live rate, the minimum after slippage, the fees and the route.',
                'Select the Swap button to confirm. The live status shows each step as it happens: any permit signature or approval, the swap transaction and its onchain confirmation, with explorer links.',
              ],
            },
            { t: 'p', text: 'Nothing is sent until you press the Swap button. If you change the amount, the pair or the slippage, a new quote loads. A quote is also tied to the connected wallet account.' },
          ],
        },
        {
          id: 'quotes-and-fees',
          title: 'Quotes, slippage and fees',
          blocks: [
            { t: 'ul', items: [
              'The quote is an estimate. Prices can move before the swap runs.',
              'The minimum you receive is the quote reduced by your slippage tolerance. If the price moves past it, the swap fails instead of filling at a worse price.',
              'The provider fee is 2 basis points (0.02%) of the amount you pay. A network fee, paid in USDC, is added for gas.',
              'PayMesh adds no fee of its own to swaps. The quote lists every fee before you confirm.',
            ] },
          ],
        },
        {
          id: 'providers',
          title: 'Providers and terms',
          blocks: [
            { t: 'p', text: 'Each swap is routed through a swap service provider, either a third-party aggregator such as LiFi or Circle. The provider can differ from route to route and is subject to change. The quote shows which provider and which steps it uses. By swapping, you are subject to the aggregator\'s terms of service.' },
          ],
        },
        {
          id: 'swap-history',
          title: 'Swap history',
          blocks: [
            { t: 'p', text: 'Swaps run through the swap aggregator, not the PayMesh contract. They still appear in your wallet history: on the [Activity](/activity) page, open My transactions and pick the Swaps filter. Every swap you ever made with this wallet is listed, each as its own row, including swaps made before you used PayMesh.' },
            { t: 'ul', items: [
              'The list is read from the Arc block explorer for your connected wallet, so it works on any device and survives clearing your browser.',
              'Swaps are not counted in PayMesh volume, payment counts or analytics, because they do not go through the PayMesh contract.',
              'A new swap can take a few seconds to show up while the explorer indexes it.',
            ] },
          ],
        },
        {
          id: 'availability',
          title: 'Availability and limits',
          blocks: [
            { t: 'ul', items: [
              'Liquidity changes over time. A pair can have a route for one amount and none for another.',
              'When no route exists, the page says so and nothing is sent. Try a smaller amount or another pair.',
              'You need some USDC for network fees, even when you swap EURC or cirBTC.',
              IS_MAINNET ? 'Mainnet swaps move real funds. Start with a small amount and check the minimum you receive.' : 'Test tokens have no real value. Get test USDC and EURC from the [faucet](https://faucet.circle.com).',
            ] },
          ],
        },
        {
          id: 'security-swap',
          title: 'Security',
          blocks: [
            { t: 'p', text: 'Swaps are non-custodial: your wallet signs every transaction and PayMesh never holds your tokens. The swap runs from your browser with no API key or secret, so there is nothing to leak. Approvals, when needed, are created by Circle\'s kit for the swap amount only. Review them in your wallet before you sign.' },
          ],
        },
      ],
    },
    {
      slug: 'dashboard-and-analytics',
      title: 'Dashboard and analytics',
      group: 'Payments',
      summary: 'What the numbers on the dashboard, activity and analytics pages mean.',
      sections: [
        {
          id: 'data-source',
          title: 'Where the data comes from',
          blocks: [
            { t: 'p', text: 'Volume, counts and the transaction feed are built from `Settled` events read from the chain. Nothing is estimated or simulated. The dashboard shows how far the app has read, and says so while it is still catching up.' },
            { t: 'p', text: 'When your wallet is connected, the Overview shows **Your transactions** and [Activity](/activity) opens on **My transactions**. That list is your own wallet history from the Arc block explorer: payments, swaps, approvals and plain transfers, each transaction as its own row, with filters, an export and a Load older button. Network payments, the second tab, shows verified PayMesh payments from every wallet. The bell in the top bar lists the same transactions for your wallet, newest first, and shows a count of new ones since you last opened it.'.replace(/\*\*/g, '') },
          ],
        },
        {
          id: 'cards',
          title: 'The stat cards',
          blocks: [
            {
              t: 'table',
              head: ['Card', 'Meaning'],
              rows: [
                ['Total volume (24H)', 'USDC delivered in the last 24 hours, compared with the 24 hours before.'],
                ['Successful payments', 'Confirmed payments in 24 hours. The success rate counts only transactions you sent from this browser.'],
                ['Average settlement', 'Time from broadcast to confirmation, measured in this browser for your own transactions.'],
                ['Payment operations', 'Active payment links, scheduled plans and open escrows across the contract.'],
              ],
            },
            { t: 'p', text: 'Failed transactions do not emit events, so success rate and settlement time cannot be read from the chain. They are measured locally and stay empty until you send a payment.' },
          ],
        },
        {
          id: 'history',
          title: 'History and local data',
          blocks: [{ t: 'p', text: 'The app only reads history from a configured start block. Cached history, saved recipients and timing records live in your browser. You can clear them in [Settings](/settings).' }],
        },
      ],
    },
  ]
}
