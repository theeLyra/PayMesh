import { useEffect, useRef, useState } from 'react'
import { isAddress } from 'viem'
import { X } from 'lucide-react'

export interface ScanResult {
  to: string
  amount?: string
}

interface BarcodeDetectorLike {
  detect(source: HTMLVideoElement): Promise<Array<{ rawValue: string }>>
}
type BarcodeDetectorCtor = new (options: { formats: string[] }) => BarcodeDetectorLike

/** Reads a PayMesh payment link, an `ethereum:` address or a plain wallet address out of scanned text. */
export function parseScan(raw: string): ScanResult | undefined {
  const text = raw.trim()
  if (isAddress(text)) return { to: text }
  const eth = /^ethereum:(0x[0-9a-fA-F]{40})/.exec(text)
  if (eth && isAddress(eth[1])) return { to: eth[1] }
  try {
    const url = new URL(text)
    const to = url.searchParams.get('to') ?? ''
    if (!isAddress(to)) return undefined
    const amount = url.searchParams.get('amount') ?? ''
    return { to, amount: /^\d*\.?\d{0,6}$/.test(amount) && amount ? amount : undefined }
  } catch {
    return undefined
  }
}

/** Camera scanner for payment QR codes. It uses the browser's built-in QR reader where one exists. */
export function ScanModal({ onResult, onClose }: { onResult: (r: ScanResult) => void; onClose: () => void }) {
  const video = useRef<HTMLVideoElement>(null)
  const [message, setMessage] = useState('Starting the camera…')
  const Detector = (window as unknown as { BarcodeDetector?: BarcodeDetectorCtor }).BarcodeDetector
  const supported = Boolean(Detector) && typeof navigator.mediaDevices?.getUserMedia === 'function'

  useEffect(() => {
    if (!Detector || !supported) return
    let stream: MediaStream | undefined
    // A ref-like object so the async loop can read the flag after cleanup flips it.
    const state: { stopped: boolean; timer?: ReturnType<typeof setTimeout> } = { stopped: false }
    const detector = new Detector({ formats: ['qr_code'] })

    const tick = async () => {
      const el = video.current
      if (state.stopped || !el) return
      try {
        if (el.readyState >= 2) {
          const found = await detector.detect(el)
          for (const code of found) {
            const parsed = parseScan(code.rawValue)
            if (parsed) {
              state.stopped = true
              onResult(parsed)
              return
            }
            setMessage('That QR code is not a payment code. Try another.')
          }
        }
      } catch {
        /* a frame failed to decode; try the next one */
      }
      state.timer = setTimeout(() => void tick(), 250)
    }

    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: 'environment' }, audio: false })
      .then((s) => {
        if (state.stopped) return s.getTracks().forEach((t) => t.stop())
        stream = s
        if (video.current) {
          video.current.srcObject = s
          void video.current.play()
        }
        setMessage('Point the camera at a PayMesh payment QR code.')
        void tick()
      })
      .catch(() => setMessage('Camera access was blocked. Allow the camera in your browser settings, or use your phone camera app to scan the code.'))

    return () => {
      state.stopped = true
      if (state.timer) clearTimeout(state.timer)
      stream?.getTracks().forEach((t) => t.stop())
    }
  }, [Detector, supported, onResult])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center" role="dialog" aria-modal="true" aria-label="Scan a payment QR code">
      <button className="absolute inset-0 bg-black/60" aria-label="Close" onClick={onClose} />
      <div className="relative w-full rounded-t-2xl border border-pm-line bg-pm-panel p-5 sm:max-w-sm sm:rounded-2xl sm:p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-pm-text">Scan to pay</h2>
          <button onClick={onClose} aria-label="Close" className="flex h-11 w-11 items-center justify-center rounded-lg text-pm-muted hover:bg-pm-text/5">
            <X className="h-5 w-5" />
          </button>
        </div>
        {supported ? (
          <div className="mt-3 overflow-hidden rounded-xl bg-black">
            <video ref={video} className="aspect-square w-full object-cover" playsInline muted />
          </div>
        ) : (
          <p className="mt-3 text-pretty text-sm text-pm-muted">
            This browser cannot scan inside the page. Open your phone camera app and scan the PayMesh QR code instead. It opens this payment page with the recipient filled in.
          </p>
        )}
        {supported && (
          <p className="mt-3 text-pretty text-center text-sm text-pm-muted" role="status">
            {message}
          </p>
        )}
      </div>
    </div>
  )
}
