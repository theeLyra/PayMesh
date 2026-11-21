import { useMemo, useState } from 'react'
import { useAccount } from 'wagmi'
import { getAddress, isAddress } from 'viem'
import { Copy, Send, Trash2, UserPlus } from 'lucide-react'
import { toast } from 'sonner'
import { useActivity } from '@/paymesh/activityContext'
import { addressUrl } from '@/paymesh/chain'
import { fmtUsdc, shortAddress } from '@/paymesh/format'
import { navigate } from '@/paymesh/router'
import { Button, Card, EmptyState, ExplorerLink, Field, PageHeader } from '@/components/ui'

interface Recipient {
  name: string
  address: string
}

const KEY = 'paymesh:recipients:v1'

function load(): Recipient[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '[]') as Recipient[]
  } catch {
    return []
  }
}

export default function Recipients() {
  const { address: me } = useAccount()
  const { settlements } = useActivity()
  const [list, setList] = useState<Recipient[]>(load)
  const [name, setName] = useState('')
  const [addr, setAddr] = useState('')

  const save = (next: Recipient[]) => {
    setList(next)
    localStorage.setItem(KEY, JSON.stringify(next))
  }

  const copyAddress = (value: string) => {
    navigator.clipboard.writeText(value).then(
      () => toast.success('Address copied'),
      () => toast.error('Could not copy the address'),
    )
  }

  const valid = isAddress(addr) && name.trim().length > 0 && !list.some((r) => r.address.toLowerCase() === addr.toLowerCase())
  const add = () => {
    if (!valid) return
    save([{ name: name.trim().slice(0, 40), address: getAddress(addr) }, ...list])
    setName('')
    setAddr('')
  }

  const sentTo = useMemo(() => {
    const map = new Map<string, { total: bigint; count: number }>()
    if (!me) return map
    for (const s of settlements) {
      if (s.from.toLowerCase() !== me.toLowerCase()) continue
      const k = s.to.toLowerCase()
      const cur = map.get(k) ?? { total: 0n, count: 0 }
      cur.total += s.amount
      cur.count += 1
      map.set(k, cur)
    }
    return map
  }, [settlements, me])

  return (
    <div className="">
      <PageHeader title="Recipients" subtitle="Save the wallets you pay often. Names stay in this browser and are never sent anywhere." />
      <div className="grid gap-5 lg:grid-cols-[minmax(0,400px)_1fr]">
        <Card className="h-fit p-5">
          <div className="space-y-4">
            <Field label="Name">
              <input className="input" maxLength={40} placeholder="e.g. Design studio" value={name} onChange={(e) => setName(e.target.value)} />
            </Field>
            <Field label="Wallet address" hint={addr && !isAddress(addr) ? <span className="text-pm-bad">Enter a valid wallet address.</span> : undefined}>
              <input className="input font-mono text-sm" placeholder="0x..." value={addr} onChange={(e) => setAddr(e.target.value.trim())} spellCheck={false} />
            </Field>
            <Button className="w-full" onClick={add} disabled={!valid}>
              <UserPlus className="h-4 w-4" /> Save recipient
            </Button>
          </div>
        </Card>
        <Card className="overflow-hidden">
          <div className="border-b border-pm-line/60 px-4 py-3 label">Saved recipients ({list.length})</div>
          {list.length === 0 ? (
            <EmptyState title="No recipients saved" body="Add a wallet on the left. You can then send USDC to it in one click." />
          ) : (
            <ul className="divide-y divide-pm-line/60">
              {list.map((r) => {
                const stats = sentTo.get(r.address.toLowerCase())
                return (
                  <li key={r.address} className="flex flex-wrap items-center gap-3 px-4 py-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pm-violet/12 font-semibold text-pm-violet">
                      {r.name.slice(0, 1).toUpperCase()}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate font-semibold text-pm-text">{r.name}</div>
                      <div className="text-xs text-pm-muted">
                        <ExplorerLink href={addressUrl(r.address)}>
                          <span className="font-mono">{shortAddress(r.address)}</span>
                        </ExplorerLink>
                        {stats && (
                          <span className="ml-2 tabular">
                            · you sent {fmtUsdc(stats.total)} USDC in {stats.count} payment{stats.count === 1 ? '' : 's'}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button className="min-h-[40px] px-3" onClick={() => navigate(`/transfers?to=${r.address}`)}>
                        <Send className="h-4 w-4" /> Send
                      </Button>
                      <Button
                        variant="ghost"
                        className="min-h-[40px] px-3"
                        aria-label={`Copy ${r.name} address`}
                        onClick={() => copyAddress(r.address)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="danger" className="min-h-[40px] px-3" aria-label={`Remove ${r.name}`} onClick={() => save(list.filter((x) => x.address !== r.address))}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </Card>
      </div>
    </div>
  )
}
