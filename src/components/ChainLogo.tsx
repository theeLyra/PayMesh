import type { ComponentType } from 'react'
import {
  NetworkArbitrumOne,
  NetworkArc,
  NetworkAvalanche,
  NetworkBase,
  NetworkCodex,
  NetworkCronos,
  NetworkEthereum,
  NetworkHyperEvm,
  NetworkInjective,
  NetworkInk,
  NetworkLinea,
  NetworkMonad,
  NetworkOptimism,
  NetworkPlasma,
  NetworkPlume,
  NetworkPolygon,
  NetworkSeiNetwork,
  NetworkSonic,
  NetworkUnichain,
  NetworkWorld,
  NetworkXLayer,
  NetworkXdc,
} from '@web3icons/react'

type Icon = ComponentType<{ variant?: 'branded' | 'mono' | 'background'; size?: number | string; className?: string }>

/** Official network marks, keyed by the Circle chain id. Testnets reuse their mainnet mark. */
const LOGOS: Record<string, Icon> = {
  Arbitrum: NetworkArbitrumOne,
  Arc: NetworkArc,
  Avalanche: NetworkAvalanche,
  Base: NetworkBase,
  Codex: NetworkCodex,
  Cronos: NetworkCronos,
  Ethereum: NetworkEthereum,
  HyperEVM: NetworkHyperEvm,
  Injective: NetworkInjective,
  Ink: NetworkInk,
  Linea: NetworkLinea,
  Monad: NetworkMonad,
  Optimism: NetworkOptimism,
  Plasma: NetworkPlasma,
  Plume: NetworkPlume,
  Polygon: NetworkPolygon,
  Sei: NetworkSeiNetwork,
  Sonic: NetworkSonic,
  Unichain: NetworkUnichain,
  World_Chain: NetworkWorld,
  X_Layer: NetworkXLayer,
  XDC: NetworkXdc,
}

/** Logos for networks the icon library does not cover, taken from each project's official brand assets. */
const LOCAL: Record<string, string> = { Edge: '/chains/edge.png', Morph: '/chains/morph.png', Pharos: '/chains/pharos.png' }

const baseId = (id: string) => id.replace(/_(Testnet|Sepolia|Fuji|Amoy|Devnet|Hoodi|Atlantic)$/, '')

/** A network's official logo. Chains without a published mark get a neutral initial. */
export function ChainLogo({ id, name, size = 24 }: { id: string; name?: string; size?: number }) {
  const Logo = LOGOS[baseId(id)]
  if (Logo) return <Logo variant="branded" size={size} className="shrink-0" />
  const local = LOCAL[baseId(id)]
  if (local) return <img src={local} alt="" width={size} height={size} loading="lazy" decoding="async" className="shrink-0 rounded-full border border-pm-line/60 bg-white object-cover" style={{ width: size, height: size }} />
  const initial = (name ?? id).trim().charAt(0).toUpperCase()
  return (
    <span aria-hidden className="inline-flex shrink-0 items-center justify-center rounded-full bg-pm-violet/15 font-semibold text-pm-violet" style={{ width: size, height: size, fontSize: size * 0.5 }}>
      {initial}
    </span>
  )
}
