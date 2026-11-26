/**
 * Builds src/paymesh/snapshot.json: every PayMesh settlement from the contract's start block up to the
 * current head, with exact running totals. The app ships this file, so the dashboard shows all-time
 * volume at once and only reads the few blocks created since the snapshot.
 *
 * Run before each build:  bun run snapshot
 * Reads VITE_NETWORK, VITE_PAYMESH_ADDRESS(_MAINNET) and VITE_PAYMESH_START_BLOCK(_MAINNET) from .env.
 */
import { writeFileSync } from 'node:fs'
import { createPublicClient, http, type Address } from 'viem'
import { settledEvent } from '../src/paymesh/abis'
import { requireChain } from '../src/onchain-facts'

const MAINNET = process.env.VITE_NETWORK === 'mainnet'
const chainId = MAINNET ? 5042 : 5042002
const compassChain = MAINNET ? 'Arc' : 'Arc_Testnet'
const address = (MAINNET ? process.env.VITE_PAYMESH_ADDRESS_MAINNET : process.env.VITE_PAYMESH_ADDRESS) as Address | undefined
const startBlock = Number((MAINNET ? process.env.VITE_PAYMESH_START_BLOCK_MAINNET : process.env.VITE_PAYMESH_START_BLOCK) ?? 0)
const MAX_RECORDS = 1500

if (!address || !startBlock) {
  console.log('snapshot: no contract address or start block in .env, skipping.')
  process.exit(0)
}

// Prefer the provisioned RPC proxy (handles a whole-history read in one call), else the chain's public RPC.
const proxyChains = (process.env.RPC_PROXY_CHAINS || '').split(',')
const proxyUrl =
  process.env.RPC_PROXY_BASE_URL && proxyChains.includes(compassChain)
    ? `${process.env.RPC_PROXY_BASE_URL}/api/rpc/${compassChain}?_rpc_token=${process.env.RPC_PROXY_TOKEN}`
    : undefined
const rpcUrl = process.env[`RPC_URL_${compassChain}`] || proxyUrl || requireChain(chainId).rpcUrls[0]
const client = createPublicClient({ transport: http(rpcUrl, { retryCount: 4, retryDelay: 800 }) })
const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

const head = Number(await client.getBlockNumber())

type Log = Awaited<ReturnType<typeof getRange>>[number]
const getRange = (from: number, to: number) => client.getLogs({ address, event: settledEvent, fromBlock: BigInt(from), toBlock: BigInt(to) })

async function readAll(): Promise<Log[]> {
  try {
    return await getRange(startBlock, head)
  } catch {
    // The endpoint limits the block range: read in chunks instead.
    const out: Log[] = []
    let step = 10_000
    let cursor = startBlock
    let waits = 0
    while (cursor <= head) {
      const end = Math.min(cursor + step - 1, head)
      try {
        out.push(...(await getRange(cursor, end)))
        cursor = end + 1
        waits = 0
        await sleep(300)
      } catch (e) {
        if (/rate.?limit|429|too many/i.test(`${(e as Error).message} ${(e as { details?: string }).details ?? ''}`)) {
          if (++waits > 8) throw e
          await sleep(1500 * waits)
        } else if (step > 1000) step = Math.floor(step / 2)
        else throw e
      }
    }
    return out
  }
}

const logs = await readAll()
const records = logs
  .filter((l) => l.blockNumber !== null && l.logIndex !== null && l.transactionHash)
  .map((l) => ({
    id: `${l.transactionHash}-${l.logIndex}`,
    txHash: l.transactionHash,
    blockNumber: Number(l.blockNumber),
    logIndex: Number(l.logIndex),
    contract: l.address,
    from: l.args.from,
    to: l.args.to,
    amount: (l.args.amount as bigint).toString(),
    category: l.args.category,
    source: Number(l.args.source),
    ref: (l.args.ref as bigint).toString(),
  }))
  .sort((a, b) => b.blockNumber - a.blockNumber || b.logIndex - a.logIndex)

const totalVolume = records.reduce((sum, r) => sum + BigInt(r.amount), 0n)
const kept = records.slice(0, MAX_RECORDS)

const times: Record<string, number> = {}
const blocks = [...new Set(kept.map((r) => r.blockNumber))]
for (let i = 0; i < blocks.length; i += 6) {
  const batch = blocks.slice(i, i + 6)
  const got = await Promise.all(batch.map((n) => client.getBlock({ blockNumber: BigInt(n) })))
  got.forEach((b, idx) => {
    times[String(batch[idx])] = Number(b.timestamp)
  })
}

const snapshot = { chainId, address: address.toLowerCase(), startBlock, lastBlock: head, totalVolume: totalVolume.toString(), totalCount: records.length, records: kept, times }
writeFileSync(new URL('../src/paymesh/snapshot.json', import.meta.url), JSON.stringify(snapshot))
console.log(`snapshot: ${records.length} payments, ${Number(totalVolume) / 1e6} USDC, blocks ${startBlock} to ${head}`)
