import type { AppKit } from '@circle-fin/app-kit'
import type { UnifiedBalanceKit } from '@circle-fin/unified-balance-kit'

/** The wallet adapter factory's type, without loading the package. */
export type CreateAdapter = typeof import('@circle-fin/adapter-viem-v2').createViemAdapterFromProvider
export type Adapter = Awaited<ReturnType<CreateAdapter>>

/*
 * Circle's SDKs are large. They load on demand and are shared, so the swap, cross-chain and Gateway pages open at once
 * and only wait for the SDK when a quote or a transfer is actually requested. prefetchCircleKits() warms them early.
 */
let appKit: Promise<{ kit: AppKit; createAdapter: CreateAdapter }> | undefined
let unifiedKit: Promise<{ kit: UnifiedBalanceKit; createAdapter: CreateAdapter }> | undefined
let adapterFactory: Promise<CreateAdapter> | undefined

const loadAdapter = () => (adapterFactory ??= import('@circle-fin/adapter-viem-v2').then((m) => m.createViemAdapterFromProvider))

export function loadAppKit() {
  appKit ??= Promise.all([import('@circle-fin/app-kit'), loadAdapter()]).then(([m, createAdapter]) => ({ kit: new m.AppKit(), createAdapter }))
  return appKit
}

export function loadUnifiedKit() {
  unifiedKit ??= Promise.all([import('@circle-fin/unified-balance-kit'), loadAdapter()]).then(([m, createAdapter]) => ({ kit: new m.UnifiedBalanceKit(), createAdapter }))
  return unifiedKit
}

/** Start downloading the SDKs in the background. Safe to call many times. */
export function prefetchCircleKits(which: 'app' | 'unified' | 'both' = 'app') {
  if (which !== 'unified') void loadAppKit().catch(() => undefined)
  if (which !== 'app') void loadUnifiedKit().catch(() => undefined)
}
