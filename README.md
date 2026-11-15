# PayMesh

PayMesh is a USDC payment dashboard for Arc: send transfers, share payment links, pay many wallets at once, split revenue, schedule recurring payments and hold funds in escrow. Everything shown comes from the connected wallet and verified onchain events.

Built with [Arc Studio](https://studio.arc.io)

## Features

- Live payment network view and transaction feed built from verified USDC settlements
- Transfers, saved recipients, payment links, batch payments, split payments, scheduled payments and escrow
- Analytics for volume, payment counts, categories and top recipients
- Developer page with contract addresses, ABIs and integration snippets
- Responsive layout with a sidebar on desktop and tablet and bottom navigation on mobile

## Tech stack

React, Vite, TypeScript, Tailwind CSS, wagmi, viem, ConnectKit, Solidity (Foundry), OpenZeppelin.

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

Until the address is set, each page shows a "contract not deployed" notice and sending is disabled.

## Network

PayMesh targets Arc Testnet and Circle USDC. Native gas on Arc is USDC, so one balance covers payments and fees.
