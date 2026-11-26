# PayMesh

Powering the future of programmable payments. One network. Limitless USDC possibilities.

PayMesh is a USDC payment dashboard for Arc: send transfers, share payment links, pay many wallets at once, split revenue, schedule recurring payments and hold funds in escrow. Everything shown comes from the connected wallet and verified onchain events.

Built with [Arc Studio](https://studio.arc.io)

## Features

- Dashboard with 24 hour volume, payment counts, settlement time and a recent transactions list, all built from verified USDC settlements
- Landing page at `/` and full documentation at `/docs` with search, loading without any wallet code
- The app itself lives at `/dashboard` and the pages under it
- Light and dark theme, switchable from the header or Settings
- Built-in token swap for USDC, EURC and cirBTC on Arc, powered by Circle's swap aggregator (Circle App Kit), with live quotes, slippage control and wallet-signed execution
- Cross-chain USDC with Circle CCTP V2 (beta) and a Circle Gateway unified balance (beta)
- Your transactions: the connected wallet's full history (payments, swaps, approvals, transfers), one row each
- Receive by QR code (payment link or wallet address) and scan to pay, with the recipient and amount filled in
- Transfers, saved recipients, payment links, batch payments, split payments, scheduled payments and escrow
- Analytics for volume, payment counts, categories and top recipients
- Developer page with contract addresses, ABIs and integration snippets
- Simple, fast, animation-free layout with a sidebar on desktop and tablet and bottom navigation on mobile

## Tech stack

React, Vite, TypeScript, Tailwind CSS, wagmi, viem, ConnectKit, Circle App Kit (swap), Solidity (Foundry), OpenZeppelin.

## Development

Prerequisites: [Bun](https://bun.sh) and [Foundry](https://getfoundry.sh).

```bash
bun install
bun run dev          # start the app
bun run build        # production build
bun run check        # lint and typecheck
bun run contracts:build
bun run contracts:test
```

### Environment variables

Set these in `.env` after deploying the contracts. They are public values.

- `VITE_PAYMESH_ADDRESS`: the PayMesh contract address
- `VITE_PAYMESH_START_BLOCK`: block the PayMesh contract was deployed at, so history is never scanned from genesis
- `VITE_NETWORK`: `testnet` (default) or `mainnet`. Mainnet moves real funds; see `docs/mainnet-deploy.md`
- `VITE_PAYMESH_ADDRESS_MAINNET` and `VITE_PAYMESH_START_BLOCK_MAINNET`: the same two values for a mainnet deployment, used only when `VITE_NETWORK=mainnet`

Until the address is set, each page shows a "contract not deployed" notice and sending is disabled.

## Network

PayMesh targets Arc Testnet and Circle USDC. Native gas on Arc is USDC, so one balance covers payments and fees.
