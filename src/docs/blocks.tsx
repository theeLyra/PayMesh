import { useState, type ReactNode } from 'react'
import { AlertTriangle, Check, Copy, Info } from 'lucide-react'
import { cx } from '@/lib/cx'
import { Link } from '@/paymesh/router'

export type Block =
  | { t: 'p'; text: string }
  | { t: 'ul'; items: string[] }
  | { t: 'ol'; items: string[] }
  | { t: 'code'; lang?: string; code: string }
  | { t: 'note'; tone?: 'info' | 'warn'; text: string }
  | { t: 'table'; head: string[]; rows: string[][] }

export interface DocSection {
  id: string
  title: string
  blocks: Block[]
}

export interface DocPage {
  slug: string
  title: string
  summary: string
  group: 'Start' | 'Payments' | 'Reference'
  sections: DocSection[]
}

const INLINE = /(`[^`]+`|\[[^\]]+\]\([^)]+\))/g

/** Tiny inline markup: `code` and [label](url). Anything else is plain text. */
export function Inline({ text }: { text: string }) {
  const parts = text.split(INLINE).filter(Boolean)
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('`') && part.endsWith('`')) {
          return (
            <code key={i} className="rounded bg-pm-text/[0.07] px-1.5 py-0.5 font-mono text-[0.85em] text-pm-text">
              {part.slice(1, -1)}
            </code>
          )
        }
        const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part)
        if (link) {
          const [, label, href] = link
          return /^https?:/.test(href) ? (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-pm-violet hover:underline">
              {label}
            </a>
          ) : (
            <Link key={i} to={href} className="font-medium text-pm-violet hover:underline">
              {label}
            </Link>
          )
        }
        return <span key={i}>{part}</span>
      })}
    </>
  )
}

function CodeBlock({ code, lang }: { code: string; lang?: string }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(code).then(
      () => {
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      },
      () => setCopied(false),
    )
  }
  return (
    <div className="my-4 overflow-hidden rounded-lg border border-pm-line bg-pm-panel">
      <div className="flex items-center justify-between border-b border-pm-line px-3 py-1.5 text-xs text-pm-muted">
        <span>{lang ?? 'code'}</span>
        <button onClick={copy} className="inline-flex min-h-[32px] items-center gap-1.5 rounded px-2 hover:bg-pm-text/5 hover:text-pm-text" aria-label="Copy code">
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="overflow-x-auto p-3 font-mono text-[12.5px] leading-relaxed text-pm-text">{code}</pre>
    </div>
  )
}

export function Blocks({ blocks }: { blocks: Block[] }): ReactNode {
  return blocks.map((b, i) => {
    switch (b.t) {
      case 'p':
        return (
          <p key={i} className="my-3 text-pretty leading-relaxed text-pm-text/90">
            <Inline text={b.text} />
          </p>
        )
      case 'ul':
        return (
          <ul key={i} className="my-3 list-disc space-y-1.5 pl-5 leading-relaxed text-pm-text/90 marker:text-pm-muted">
            {b.items.map((it, j) => (
              <li key={j}>
                <Inline text={it} />
              </li>
            ))}
          </ul>
        )
      case 'ol':
        return (
          <ol key={i} className="my-3 list-decimal space-y-1.5 pl-5 leading-relaxed text-pm-text/90 marker:font-semibold marker:text-pm-muted">
            {b.items.map((it, j) => (
              <li key={j}>
                <Inline text={it} />
              </li>
            ))}
          </ol>
        )
      case 'code':
        return <CodeBlock key={i} code={b.code} lang={b.lang} />
      case 'note': {
        const warn = b.tone === 'warn'
        const Icon = warn ? AlertTriangle : Info
        return (
          <div key={i} className={cx('my-4 flex gap-3 rounded-lg border p-3.5 text-sm leading-relaxed', warn ? 'border-pm-warn/40 bg-pm-warn/10' : 'border-pm-line bg-pm-panel')}>
            <Icon className={cx('mt-0.5 h-4 w-4 shrink-0', warn ? 'text-pm-warn' : 'text-pm-violet')} />
            <div className="text-pm-text/90">
              <Inline text={b.text} />
            </div>
          </div>
        )
      }
      case 'table':
        return (
          <div key={i} className="my-4 overflow-x-auto rounded-lg border border-pm-line">
            <table className="w-full min-w-[480px] border-collapse text-left text-sm">
              <thead className="bg-pm-panel text-xs uppercase tracking-wider text-pm-muted">
                <tr>
                  {b.head.map((h) => (
                    <th key={h} className="px-3 py-2 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-pm-line">
                {b.rows.map((row, r) => (
                  <tr key={r} className="align-top">
                    {row.map((cell, c) => (
                      <td key={c} className={cx('px-3 py-2 leading-relaxed', c === 0 ? 'font-medium text-pm-text' : 'text-pm-text/90')}>
                        <Inline text={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
    }
  })
}

/** Plain text of a block, used by search. */
export function blockText(b: Block): string {
  switch (b.t) {
    case 'p':
    case 'note':
      return b.text
    case 'ul':
    case 'ol':
      return b.items.join(' ')
    case 'code':
      return b.code
    case 'table':
      return [...b.head, ...b.rows.flat()].join(' ')
  }
}
