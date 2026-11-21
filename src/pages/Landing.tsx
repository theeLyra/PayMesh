import { useEffect } from 'react'
import { ArrowLeftRight, ArrowRight, BookOpen, CalendarClock, Code2, Coins, Layers, Link2, Lock, Send, ShieldCheck, Split, type LucideIcon } from 'lucide-react'
import { LogoMark, Wordmark } from '@/components/Logo'
import { ThemeToggle } from '@/components/ThemeToggle'
import { addressUrl, CHAIN_FACTS } from '@/paymesh/chain'
import { PAYMESH } from '@/paymesh/contracts'
import { IS_MAINNET } from '@/paymesh/network'
import { Link } from '@/paymesh/router'

const TAGLINE = 'Powering the future of programmable payments'
const FOOTER_NOTE =
  'PayMesh is one contract for every way to move USDC: transfers, payment links, batch and split payments, escrow and schedules. No fees, no admin keys, every payment verifiable onchain.'
const SUBTAGLINE = 'One network. Limitless USDC possibilities.'

const FEATURES: Array<{ icon: LucideIcon; title: string; body: string; app: string; doc: string }> = [
  { icon: Send, title: 'Transfers', body: 'Send USDC to any wallet with a category and an optional note. Every transfer is recorded onchain.', app: '/transfers', doc: '/docs/transfers' },
  { icon: Link2, title: 'Payment links', body: 'Create a link for a fixed or open amount and share it. Funds go straight to your wallet.', app: '/links', doc: '/docs/payment-links' },
  { icon: Layers, title: 'Batch payments', body: 'Pay up to 200 wallets in one transaction. Enter rows or paste a list.', app: '/batch', doc: '/docs/batch-payments' },
  { icon: Split, title: 'Split payments', body: 'Define shares once. Every payment to the split is divided exactly, with no rounding loss.', app: '/split', doc: '/docs/split-payments' },
  { icon: ShieldCheck, title: 'Escrow', body: 'Lock USDC for a payee with a deadline. Release it when the work is done, or get it back after the deadline.', app: '/escrow', doc: '/docs/escrow' },
  { icon: CalendarClock, title: 'Scheduled payments', body: 'Recurring payments pulled from your allowance on schedule. Cancel any time.', app: '/scheduled', doc: '/docs/scheduled-payments' },
]

// Feature cards: the six contract payment types plus the built-in swap.
const FEATURE_CARDS: typeof FEATURES = [
  ...FEATURES,
  { icon: ArrowLeftRight, title: 'Swap', body: "Swap USDC, EURC and cirBTC with Circle's swap aggregator. Review a live quote, then confirm in your own wallet.", app: '/swap', doc: '/docs/swap' },
]

const FACTS: Array<{ icon: LucideIcon; title: string; body: string }> = [
  { icon: Coins, title: 'USDC for everything', body: 'On Arc, USDC is also the gas token, so one balance covers payments and fees.' },
  { icon: Lock, title: 'Non-custodial', body: 'PayMesh never holds your keys. Only escrow holds funds, and only until they are released or refunded.' },
  { icon: ShieldCheck, title: 'No fees, no admin', body: 'The contract takes no fee and has no owner, no admin and no upgrade keys.' },
  { icon: Code2, title: 'Open and verified', body: 'The contract source is published and verified on the Arc explorer.' },
]

const STEPS = [
  { title: 'Connect a wallet', body: IS_MAINNET ? 'Use any browser wallet on Arc. Mainnet moves real USDC, so start with a small amount.' : 'Use any browser wallet on Arc Testnet. Get test USDC from the faucet to try everything.' },
  { title: 'Choose a payment type', body: 'Pick transfers, links, batch, split, escrow or a schedule. Review the amounts before you sign.' },
  { title: 'Settle and verify', body: 'Payments confirm onchain in seconds. Every final delivery emits a Settled event you can read on the explorer.' },
]

const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#how', label: 'How it works' },
  { href: '#security', label: 'Security' },
]

/** Warm the app and docs chunks while the visitor reads, so opening them feels instant. */
function usePrefetch() {
  useEffect(() => {
    const warm = () => {
      void import('./Docs')
      void import('../AppRoot')
    }
    const idle = (window as Window & { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback
    const handle = idle ? idle(warm) : window.setTimeout(warm, 1200)
    return () => {
      if (!idle) window.clearTimeout(handle)
    }
  }, [])
}

const primaryBtn = 'btn-primary inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold'
const ghostBtn = 'inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-pm-line bg-pm-panel px-6 text-sm font-semibold text-pm-text hover:bg-pm-text/5'

export default function Landing() {
  usePrefetch()
  return (
    <div className="min-h-dvh bg-pm-bg text-pm-text">
      <header className="sticky top-0 z-30 border-b border-pm-line bg-pm-bg">
        <div className="mx-auto flex h-16 max-w-[1120px] items-center gap-6 px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5" aria-label="PayMesh home">
            <LogoMark size={32} />
            <Wordmark className="text-xl" />
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-pm-muted md:flex" aria-label="Sections">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-pm-text">
                {l.label}
              </a>
            ))}
            <Link to="/docs" className="hover:text-pm-text">
              Docs
            </Link>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <Link to="/dashboard" className={`${primaryBtn} !min-h-[44px] !px-4`}>
              Launch app
            </Link>
          </div>
        </div>
        <nav className="flex gap-5 overflow-x-auto border-t border-pm-line px-4 py-2 text-sm text-pm-muted md:hidden" aria-label="Sections">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="shrink-0 py-1.5 hover:text-pm-text">
              {l.label}
            </a>
          ))}
          <Link to="/docs" className="shrink-0 py-1.5 hover:text-pm-text">
            Docs
          </Link>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid max-w-[1120px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-pm-line bg-pm-panel px-3 py-1 text-xs font-medium text-pm-muted">
              <span className="h-2 w-2 rounded-full bg-pm-good" />
              Live on {CHAIN_FACTS.name}
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[56px]">{TAGLINE}</h1>
            <p className="mt-4 text-xl font-medium text-pm-violet sm:text-2xl">{SUBTAGLINE}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/dashboard" className={primaryBtn}>
                Launch app <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/docs" className={ghostBtn}>
                <BookOpen className="h-4 w-4" /> Read the docs
              </Link>
            </div>
            <p className="mt-4 text-xs text-pm-muted">{IS_MAINNET ? 'Live on mainnet: payments move real USDC. The contract has had an automated review, not a third-party audit.' : 'Testnet only. Use test USDC from the faucet; nothing here moves real funds.'}</p>
          </div>

          <div className="glass rounded-xl p-5">
            <div className="text-sm font-semibold">One contract, six ways to pay, plus swaps</div>
            <ul className="mt-3 divide-y divide-pm-line">
              {FEATURES.map((f) => (
                <li key={f.title}>
                  <Link to={f.app} className="flex items-center gap-3 py-3 hover:text-pm-violet">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-pm-violet/10 text-pm-violet">
                      <f.icon className="h-[18px] w-[18px]" />
                    </span>
                    <span className="text-sm font-medium">{f.title}</span>
                    <ArrowRight className="ml-auto h-4 w-4 text-pm-muted" />
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/swap" className="flex items-center gap-3 py-3 hover:text-pm-violet">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-pm-violet/10 text-pm-violet">
                    <ArrowLeftRight className="h-[18px] w-[18px]" />
                  </span>
                  <span className="text-sm font-medium">Swap tokens, built in</span>
                  <ArrowRight className="ml-auto h-4 w-4 text-pm-muted" />
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section className="border-y border-pm-line bg-pm-panel">
          <div className="mx-auto grid max-w-[1120px] gap-6 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
            {FACTS.map((f) => (
              <div key={f.title}>
                <f.icon className="h-5 w-5 text-pm-violet" />
                <div className="mt-3 text-sm font-semibold">{f.title}</div>
                <p className="mt-1 text-pretty text-sm leading-relaxed text-pm-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="mx-auto max-w-[1120px] scroll-mt-24 px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight">Everything you need to move USDC</h2>
          <p className="mt-2 max-w-2xl text-pretty text-pm-muted">Each payment type is a function of the same contract, so one approval and one history cover all of them.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURE_CARDS.map((f) => (
              <article key={f.title} className="glass flex flex-col rounded-xl p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-pm-violet/10 text-pm-violet">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-1.5 flex-1 text-pretty text-sm leading-relaxed text-pm-muted">{f.body}</p>
                <div className="mt-4 flex gap-4 text-sm font-semibold">
                  <Link to={f.app} className="text-pm-violet hover:underline">
                    Open
                  </Link>
                  <Link to={f.doc} className="text-pm-muted hover:text-pm-text">
                    Docs
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="how" className="scroll-mt-24 border-y border-pm-line bg-pm-panel">
          <div className="mx-auto max-w-[1120px] px-4 py-16 sm:px-6">
            <h2 className="text-3xl font-semibold tracking-tight">How it works</h2>
            <ol className="mt-8 grid gap-6 md:grid-cols-3">
              {STEPS.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pm-violet text-sm font-semibold text-[rgb(var(--pm-on-accent))]">{i + 1}</span>
                  <div>
                    <div className="font-semibold">{s.title}</div>
                    <p className="mt-1 text-pretty text-sm leading-relaxed text-pm-muted">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="security" className="mx-auto max-w-[1120px] scroll-mt-24 px-4 py-16 sm:px-6">
          <div className="glass mx-auto max-w-xl rounded-xl p-5">
            <div className="text-sm font-semibold">PayMesh contract</div>
            <div className="mt-3 text-xs text-pm-muted">Network</div>
            <div className="text-sm font-medium">{CHAIN_FACTS.name}</div>
            <div className="mt-3 text-xs text-pm-muted">Address</div>
            {PAYMESH ? (
              <>
                <div className="break-all font-mono text-xs">{PAYMESH}</div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href={addressUrl(PAYMESH)} target="_blank" rel="noopener noreferrer" className={`${ghostBtn} !min-h-[40px] !px-4`}>
                    View on explorer
                  </a>
                  <a href={`${addressUrl(PAYMESH)}?tab=contract`} target="_blank" rel="noopener noreferrer" className={`${ghostBtn} !min-h-[40px] !px-4`}>
                    Verified source
                  </a>
                </div>
              </>
            ) : (
              <div className="text-sm text-pm-muted">Not deployed yet.</div>
            )}
          </div>
        </section>

        <section className="border-t border-pm-line bg-pm-panel">
          <div className="mx-auto flex max-w-[1120px] justify-center px-4 py-10 sm:px-6">
            <Link to="/docs/developer-guide" className={ghostBtn}>
              <Code2 className="h-4 w-4" /> Developer guide
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-pm-line">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-3 px-4 py-8 sm:px-6 md:flex-row md:items-center md:gap-6">
          <div className="flex shrink-0 items-center gap-2.5">
            <LogoMark size={24} />
            <Wordmark className="text-base" />
          </div>
          <p className="max-w-3xl text-sm leading-relaxed text-pm-muted">{FOOTER_NOTE}</p>
        </div>
      </footer>
    </div>
  )
}
