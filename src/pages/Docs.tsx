import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Menu, Search, X } from 'lucide-react'
import { Blocks, type DocPage } from '@/docs/blocks'
import { buildDocs, searchDocs } from '@/docs/content'
import { BackButton } from '@/components/BackButton'
import { LogoMark, Wordmark } from '@/components/Logo'
import { ThemeToggle } from '@/components/ThemeToggle'
import { cx } from '@/lib/cx'
import { Link, usePath } from '@/paymesh/router'

const GROUPS: Array<DocPage['group']> = ['Start', 'Payments', 'Circle', 'Reference']
const href = (slug: string) => (slug === 'overview' ? '/docs' : `/docs/${slug}`)

function NavList({ pages, current, onPick }: { pages: DocPage[]; current: string; onPick?: () => void }) {
  return (
    <nav aria-label="Documentation" className="space-y-5">
      {GROUPS.map((g) => (
        <div key={g}>
          <div className="mb-1.5 px-2 text-[11px] font-semibold uppercase tracking-wider text-pm-muted">{g}</div>
          <ul>
            {pages
              .filter((p) => p.group === g)
              .map((p) => (
                <li key={p.slug}>
                  <Link
                    to={href(p.slug)}
                    onClick={onPick}
                    aria-current={p.slug === current ? 'page' : undefined}
                    className={cx(
                      'block rounded-md px-2 py-1.5 text-sm',
                      p.slug === current ? 'bg-pm-violet/10 font-semibold text-pm-violet' : 'text-pm-muted hover:bg-pm-text/5 hover:text-pm-text',
                    )}
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}

export default function Docs() {
  const path = usePath()
  const pages = useMemo(() => buildDocs(), [])
  const slug = path === '/docs' ? 'overview' : path.slice('/docs/'.length)
  const index = pages.findIndex((p) => p.slug === slug)
  const page = index >= 0 ? pages[index] : undefined
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)
  const hits = useMemo(() => searchDocs(pages, query), [pages, query])
  const searching = query.trim().length > 0

  useEffect(() => {
    document.title = page ? `${page.title} | PayMesh docs` : 'Not found | PayMesh docs'
  }, [page])

  // Press "/" anywhere to jump to search.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement
      if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName)) {
        e.preventDefault()
        searchRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const searchBox = (
    <label className="relative block">
      <span className="sr-only">Search the docs</span>
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-pm-muted" />
      <input
        ref={searchRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search docs   /"
        className="input !pl-9"
        autoComplete="off"
        spellCheck={false}
      />
      {query && (
        <button onClick={() => setQuery('')} aria-label="Clear search" className="absolute right-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center text-pm-muted hover:text-pm-text">
          <X className="h-4 w-4" />
        </button>
      )}
    </label>
  )

  const prev = index > 0 ? pages[index - 1] : undefined
  const next = index >= 0 && index < pages.length - 1 ? pages[index + 1] : undefined

  return (
    <div className="min-h-dvh bg-pm-bg text-pm-text">
      <header className="sticky top-0 z-30 border-b border-pm-line bg-pm-bg">
        <div className="mx-auto flex h-16 max-w-[1240px] items-center gap-4 px-4 sm:px-6">
          <button onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle documentation menu" aria-expanded={menuOpen} className="flex h-11 w-11 items-center justify-center rounded-lg border border-pm-line bg-pm-panel lg:hidden">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <BackButton fallback="/" className="min-w-[44px] justify-center px-2.5 sm:px-3" iconOnlyOnMobile />
          <Link to="/" className="flex min-h-[44px] items-center gap-2.5" aria-label="PayMesh home">
            <LogoMark size={30} />
            <Wordmark className="hidden text-lg sm:inline" />
          </Link>
          <span className="hidden rounded-md border border-pm-line bg-pm-panel px-2 py-0.5 text-xs font-semibold text-pm-muted min-[400px]:inline">Docs</span>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <Link to="/dashboard" className="btn-primary inline-flex min-h-[44px] items-center rounded-lg px-4 text-sm font-semibold">
              Launch app
            </Link>
          </div>
        </div>
        {menuOpen && (
          <div className="max-h-[70dvh] overflow-y-auto border-t border-pm-line bg-pm-bg px-4 py-4 lg:hidden">
            <div className="mb-4">{searchBox}</div>
            <NavList pages={pages} current={slug} onPick={() => setMenuOpen(false)} />
          </div>
        )}
      </header>

      <div className="mx-auto grid max-w-[1240px] gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[230px_minmax(0,1fr)] xl:grid-cols-[230px_minmax(0,1fr)_190px]">
        <aside className="sticky top-24 hidden max-h-[calc(100dvh-7rem)] self-start overflow-y-auto lg:block">
          <div className="mb-4">{searchBox}</div>
          <NavList pages={pages} current={slug} />
        </aside>

        <main className="min-w-0">
          {searching ? (
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">Search results</h1>
              <p className="mt-1 text-sm text-pm-muted">
                {hits.length} {hits.length === 1 ? 'match' : 'matches'} for “{query.trim()}”
              </p>
              {hits.length === 0 ? (
                <p className="mt-6 text-pm-muted">Nothing found. Try a shorter word, such as “escrow”, “allowance” or “batch”.</p>
              ) : (
                <ul className="mt-5 divide-y divide-pm-line rounded-xl border border-pm-line">
                  {hits.map((h) => (
                    <li key={`${h.page.slug}-${h.sectionId}`}>
                      <Link to={`${href(h.page.slug)}#${h.sectionId}`} onClick={() => setQuery('')} className="block px-4 py-3 hover:bg-pm-text/[0.04]">
                        <div className="text-xs text-pm-muted">{h.page.title}</div>
                        <div className="text-sm font-semibold text-pm-text">{h.sectionTitle}</div>
                        <div className="mt-0.5 line-clamp-2 text-sm text-pm-muted">{h.snippet}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : !page ? (
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">Page not found</h1>
              <p className="mt-2 text-pm-muted">There is no documentation page at this address.</p>
              <Link to="/docs" className="mt-4 inline-flex font-semibold text-pm-violet hover:underline">
                Go to the docs home
              </Link>
            </div>
          ) : (
            <article>
              <div className="text-xs font-semibold uppercase tracking-wider text-pm-violet">{page.group}</div>
              <h1 className="mt-1 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{page.title}</h1>
              <p className="mt-2 text-pretty text-lg text-pm-muted">{page.summary}</p>
              {page.sections.map((s) => (
                <section key={s.id} id={s.id} className="mt-10 scroll-mt-24">
                  <h2 className="text-xl font-semibold tracking-tight">
                    <a href={`#${s.id}`} className="hover:text-pm-violet">
                      {s.title}
                    </a>
                  </h2>
                  <Blocks blocks={s.blocks} />
                </section>
              ))}
              <div className="mt-14 grid gap-3 border-t border-pm-line pt-6 sm:grid-cols-2">
                {prev ? (
                  <Link to={href(prev.slug)} className="rounded-xl border border-pm-line p-4 hover:bg-pm-text/[0.04]">
                    <div className="flex items-center gap-1.5 text-xs text-pm-muted">
                      <ArrowLeft className="h-3.5 w-3.5" /> Previous
                    </div>
                    <div className="mt-0.5 font-semibold">{prev.title}</div>
                  </Link>
                ) : (
                  <span />
                )}
                {next && (
                  <Link to={href(next.slug)} className="rounded-xl border border-pm-line p-4 text-right hover:bg-pm-text/[0.04]">
                    <div className="flex items-center justify-end gap-1.5 text-xs text-pm-muted">
                      Next <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                    <div className="mt-0.5 font-semibold">{next.title}</div>
                  </Link>
                )}
              </div>
            </article>
          )}
        </main>

        {page && !searching && (
          <aside className="sticky top-24 hidden max-h-[calc(100dvh-7rem)] self-start overflow-y-auto xl:block">
            <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-pm-muted">On this page</div>
            <ul className="space-y-1 border-l border-pm-line">
              {page.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="-ml-px block border-l border-transparent py-1 pl-3 text-sm text-pm-muted hover:border-pm-violet hover:text-pm-text">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </div>
  )
}
