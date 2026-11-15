# PayMesh

> Built with Arc Studio - money-powered apps in minutes

This is the **project memory** - what Arc Studio remembers about building this app. It helps future agents (or humans) understand and extend the project.

---

## What This App Does

PayMesh: USDC payment dashboard on Arc Testnet. One contract, `contracts/PayMesh.sol` (payments, links, batch, split, escrow, scheduled), emits one shared `Settled` event that the app indexes for the feed, map and analytics. The address lives in `.env` as `VITE_PAYMESH_ADDRESS` (see README).

## Tech Stack

- Frontend: React 18, Vite, TypeScript, Tailwind CSS
- Web3: wagmi v2, viem v2, ConnectKit
- Contracts: Solidity 0.8.28 + Foundry. Sources in `contracts/`, unit tests in `contracts/test/*.t.sol`. Build with `bun run contracts:build` (`forge build`), test with `bun run contracts:test` (`forge test`).
- Wallet: injected (MetaMask, etc.)
- Chain: Arc Testnet (Chain ID: 5042002, imported from `viem/chains`)
- Token: USDC (6 decimals) (Address: 0x3600000000000000000000000000000000000000, Chain: Arc Testnet)
- Toasts: Sonner

## Key Files

- `src/App.tsx` - Shell and page routing
- `src/paymesh/` - ABIs, contract config, activity indexer (`ActivityProvider`), tx hook (`useTransact`), metrics
- `src/pages/` - one file per sidebar page
- `contracts/PayMesh.sol` - the single PayMesh contract
- `src/components/` - UI components
- `src/config.ts` - wagmi config (chains, connectors, transports)

## Share links

- Starter apps already ship `getShareBase`, `buildShareLink` and `installShareSync` in `src/lib/share.ts`; import them instead of rewriting them.
- Keep shareable state in the URL path or query, not in the `#fragment`.
- Never put a secret (private key, claim secret, seed phrase, session token, API key) in the URL path or query, encoded or not: every in-app path and query is mirrored to the visitor's studio.arc.io address bar and browser history and reaches servers. A bearer claim secret goes only in the `#fragment` appended to the share link (`` `${await buildShareLink('/claim')}#${secret}` ``) and is read from `location.hash` on load. A link to the app's own share URL shown inside the app must be copy-only or open in a new tab with `target="_blank" rel="noopener noreferrer"`.
- Build every link a user copies or sends with `buildShareLink()` from `src/lib/share.ts`.
- Keep the `installShareSync()` call in `src/main.tsx` when editing it; it keeps the Studio address bar in step with in-app navigation.
- Navigate inside the app with relative links.

## Deployed contracts

Arc Testnet (deployed via platform wallet, USDC `0x3600...0000` as constructor arg; start block 72413319):
- PayMesh `0x9663bc6b89612134548878e7d88b639255fb4b08`

Superseded (first split-contract version, not used by the app): PaymentRouter `0x4ee61a96...4395`, BatchPayment `0x18932964...8a95`, SplitPayment `0x785799d7...20f1`, PaymentEscrow `0x41e4d592...219c`, PaymentScheduler `0x2e0a7026...ff1a`.

## To Run

```bash
bun install
bun run dev
```
