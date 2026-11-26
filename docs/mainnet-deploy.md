# Deploying PayMesh to Arc mainnet

Arc Studio does not deploy to, sign for or fund mainnet. These are the steps **you** run yourself, from your own machine and your own wallet. Mainnet transactions move real funds and cannot be undone.

## Before you start

- Get an independent security audit of `contracts/PayMesh.sol`. The contract has had an automated review only. The escrow feature holds user funds, so this matters most.
- Test every flow on Arc Testnet first. The testnet app is unchanged and stays available.
- Decide which wallet deploys. PayMesh has no owner or admin, so the deployer has no special rights after deployment, but it pays the gas (in USDC).
- Never paste a private key into chat, code or a file in the repository. Prefer a Foundry keystore (`cast wallet import`) and `--account`. If you use an environment variable, keep it out of shell history and never commit it.

## Network facts (check them against the official Arc docs)

| Item | Value |
| --- | --- |
| Chain ID | 5042 |
| RPC | `https://rpc.mainnet.arc.io` |
| Explorer | `https://explorer.arc.io` |
| USDC (ERC-20 interface, 6 decimals) | `0x3600000000000000000000000000000000000000` |
| EURC | `0xbEf5f6d51CB62b58e6A8f77868681825C6fe21c1` |
| cirBTC (8 decimals) | `0x171A4217b86A807A64eB94757Db6849fb4bDbAA0` |

Arc's gas token is USDC, so the deploying wallet needs a little USDC on Arc mainnet.

## 1. Build

```bash
forge build
```

## 2. Deploy

The only constructor argument is the USDC address. `PRIVATE_KEY` is read from your environment; never type the key into the command.

```bash
forge create contracts/PayMesh.sol:PayMesh \
  --rpc-url https://rpc.mainnet.arc.io \
  --private-key "$PRIVATE_KEY" \
  --broadcast \
  --constructor-args 0x3600000000000000000000000000000000000000
```

Note the **Deployed to** address and the transaction hash.

## 3. Find the deployment block

```bash
cast receipt <TX_HASH> blockNumber --rpc-url https://rpc.mainnet.arc.io
```

## 4. Verify the source on the explorer

```bash
forge verify-contract <DEPLOYED_ADDRESS> contracts/PayMesh.sol:PayMesh \
  --verifier blockscout \
  --verifier-url https://explorer.arc.io/api/ \
  --chain 5042 \
  --constructor-args "$(cast abi-encode 'constructor(address)' 0x3600000000000000000000000000000000000000)" \
  --watch
```

## 5. Point the app at mainnet

Set these when you build the app. They are public values.

```bash
VITE_NETWORK=mainnet
VITE_PAYMESH_ADDRESS_MAINNET=<DEPLOYED_ADDRESS>
VITE_PAYMESH_START_BLOCK_MAINNET=<DEPLOYMENT_BLOCK>
```

Then build and host the result:

```bash
bunx vite build
```

The testnet addresses (`VITE_PAYMESH_ADDRESS`, `VITE_PAYMESH_START_BLOCK`) are never used on mainnet, and the mainnet ones are never used on testnet.

## 6. First checks

- Read `usdc()` on the deployed contract and confirm it returns `0x3600000000000000000000000000000000000000`.
- Send a very small transfer between two wallets you control and confirm it shows in the app and on the explorer.
- Try one of each feature with tiny amounts before sharing the app.
- Keep the in-app mainnet banner. It reminds users that transactions are real and that the contract has not had a third-party audit.

## Your Remix deployment

The mainnet contract deployed from Remix is `0xcE3D1b30A337679330dBfF9017D1eCE07FcEd803`, first present at block 32561301. Its runtime code matches `contracts/PayMesh.sol` compiled with Solidity 0.8.28, EVM `cancun` and the optimizer OFF (Remix default), apart from the nine bytes where the USDC address is embedded. Its USDC address is the mainnet USDC at `0x3600000000000000000000000000000000000000`.

To verify the source on the explorer, use the same settings Remix used: compiler 0.8.28, EVM version cancun, optimizer disabled, constructor argument `0x0000000000000000000000003600000000000000000000000000000000000000`. Using 200 optimizer runs will fail verification.

To run the app against it, build with `VITE_NETWORK=mainnet`. `VITE_PAYMESH_ADDRESS_MAINNET` and `VITE_PAYMESH_START_BLOCK_MAINNET` are already set in `.env`.
