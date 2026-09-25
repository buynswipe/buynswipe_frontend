"use client"

import { Search } from "lucide-react"
import { useMemo, useState } from "react"
import type { SearchResult } from "@/lib/site-search"

export function SearchBox({ query, suggestions }: { query: string; suggestions: SearchResult[] }) {
  const [value, setValue] = useState(query)
  const [open, setOpen] = useState(false)
  const matches = useMemo(() => {
    const normalized = value.trim().toLowerCase()
    if (!normalized) return suggestions
    return suggestions.filter((item) => `${item.title} ${item.description} ${item.keywords.join(" ")}`.toLowerCase().includes(normalized)).slice(0, 5)
  }, [suggestions, value])

  return (
    <form method="get" className="relative mt-8 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm" onSubmit={() => setOpen(false)}>
      <Search className="ml-3 size-5 shrink-0 text-slate-400" aria-hidden="true" />
      <label htmlFor="site-search" className="sr-only">Search BuyNswipe</label>
      <input id="site-search" name="q" value={value} onChange={(event) => { setValue(event.target.value); setOpen(true) }} onFocus={() => setOpen(true)} placeholder="Try credit cards, NCMC, cashback or payments" className="min-w-0 flex-1 bg-transparent px-2 py-3 outline-none" autoComplete="off" role="combobox" aria-expanded={open && matches.length > 0} aria-controls="search-suggestions" />
      <button type="submit" className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700">Search</button>
      {open && matches.length > 0 ? <ul id="search-suggestions" role="listbox" className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">{matches.map((item) => <li key={item.href}><a href={`${item.href}`} role="option" aria-selected="false" className="block rounded-xl px-4 py-3 hover:bg-slate-50"><span className="block font-bold text-slate-900">{item.title}</span><span className="mt-1 block text-sm text-slate-500">{item.description}</span></a></li>)}</ul> : null}
    </form>
  )
}
