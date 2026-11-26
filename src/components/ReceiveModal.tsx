import { useEffect, useState } from 'react'
import type { Address } from 'viem'
import { toast } from 'sonner'
import { Check, Copy, Share2, X } from 'lucide-react'
import { buildShareLink } from '@/lib/share'
import { CHAIN_FACTS } from '@/paymesh/chain'
import { shortAddress } from '@/paymesh/format'
import { cx } from '@/lib/cx'

type Mode = 'link' | 'address'

/** Builds the link a payer's phone opens: the PayMesh transfer page with this wallet (and optionally an amount) filled in. */
function payUrl(base: string, address: Address, amount: string): string {
  const url = new URL(base)
  url.searchParams.set('to', address)
  if (amount) url.searchParams.set('amount', amount)
  return url.toString()
}

/**
 * Receive: a QR code others scan to pay this wallet. Scanning the payment link with a phone camera opens PayMesh
 * with the recipient filled in. The address tab gives a plain address QR for wallet apps.
 */
export function ReceiveModal({ address, onClose }: { address: Address; onClose: () => void }) {
  const [mode, setMode] = useState<Mode>('link')
  const [amount, setAmount] = useState('')
  const [base, setBase] = useState<string>()
  const [qr, setQr] = useState<string>()
  const [copied, setCopied] = useState(false)

  const validAmount = /^\d*\.?\d{0,6}$/.test(amount) && Number(amount) >= 0
  const link = base ? payUrl(base, address, validAmount ? amount : '') : undefined
  const text = mode === 'address' ? address : link

  useEffect(() => {
    void buildShareLink('/transfers').then(setBase)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  useEffect(() => {
    if (!text) return
    let cancelled = false
    void import('qrcode').then(async ({ default: QRCode }) => {
      const svg = await QRCode.toString(text, { type: 'svg', margin: 1, errorCorrectionLevel: 'M', color: { dark: '#111111', light: '#ffffff' } })
      if (!cancelled) setQr(`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`)
    })
    return () => {
      cancelled = true
    }
  }, [text])

  const copy = async () => {
    if (!text) return
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      toast.success(mode === 'address' ? 'Address copied' : 'Payment link copied')
      setTimeout(() => setCopied(false), 1500)
    } catch {
      toast.error('Could not copy')
    }
  }

  const share = async () => {
    if (!link) return
    try {
      await navigator.share({ title: 'Pay me with PayMesh', text: 'Pay me in USDC with PayMesh', url: link })
    } catch {
      /* cancelled */
    }
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center" role="dialog" aria-modal="true" aria-label="Receive USDC">
      <button className="absolute inset-0 bg-black/50" aria-label="Close" onClick={onClose} />
      <div className="relative max-h-[92dvh] w-full overflow-y-auto rounded-t-2xl border border-pm-line bg-pm-panel p-5 sm:max-w-sm sm:rounded-2xl sm:p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-pm-text">Receive USDC</h2>
          <button onClick={onClose} aria-label="Close" className="flex h-11 w-11 items-center justify-center rounded-lg text-pm-muted hover:bg-pm-text/5">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-1 rounded-xl border border-pm-line bg-pm-bg p-1" role="tablist">
          {(['link', 'address'] as Mode[]).map((m) => (
            <button
              key={m}
              role="tab"
              aria-selected={mode === m}
              onClick={() => setMode(m)}
              className={cx('min-h-[40px] rounded-lg text-sm font-semibold', mode === m ? 'bg-pm-panel text-pm-text shadow-sm' : 'text-pm-muted hover:text-pm-text')}
            >
              {m === 'link' ? 'Payment link' : 'Wallet address'}
            </button>
          ))}
        </div>

        <div className="mt-4 flex justify-center">
          <div className="flex h-60 w-60 items-center justify-center rounded-2xl bg-white p-2">
            {qr ? <img src={qr} alt="QR code" width={224} height={224} className="h-56 w-56" /> : <div className="h-56 w-56 animate-none rounded-lg bg-black/5" aria-hidden />}
          </div>
        </div>

        <p className="mt-3 text-center font-mono text-xs text-pm-muted">{shortAddress(address)}</p>

        {mode === 'link' && (
          <label className="mt-4 block">
            <span className="label">Amount (optional)</span>
            <input
              className="input mt-1.5"
              inputMode="decimal"
              placeholder="Any amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ''))}
              aria-label="Requested amount in USDC"
            />
            {!validAmount && <span className="mt-1 block text-xs text-pm-bad">Use up to 6 decimals.</span>}
          </label>
        )}

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button onClick={() => void copy()} className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-pm-line bg-pm-panel px-3 text-sm font-semibold text-pm-text hover:bg-pm-text/5">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {mode === 'address' ? 'Copy address' : 'Copy link'}
          </button>
          {typeof navigator.share === 'function' && mode === 'link' ? (
            <button onClick={() => void share()} className="btn-primary inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg px-3 text-sm font-semibold">
              <Share2 className="h-4 w-4" /> Share
            </button>
          ) : (
            <button onClick={onClose} className="btn-primary inline-flex min-h-[44px] items-center justify-center rounded-lg px-3 text-sm font-semibold">
              Done
            </button>
          )}
        </div>

        <p className="mt-4 text-pretty text-center text-xs leading-relaxed text-pm-muted">
          {mode === 'link' ? 'Anyone can scan this with their phone camera. It opens PayMesh with your address filled in.' : 'For wallet apps that scan an address.'} Only send on {CHAIN_FACTS.name}.
        </p>
      </div>
    </div>
  )
}
