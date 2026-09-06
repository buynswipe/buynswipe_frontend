"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { CheckCircle2, ExternalLink, GitCompareArrows, Search, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { creditCardProducts } from "@/lib/affiliate-products"

type CreditCardProduct = (typeof creditCardProducts)[number]

const feeOptions = ["All fees", "Lifetime FREE", "Zero annual fees"]

function CardTile({ card, selected, onToggle }: { card: CreditCardProduct; selected: boolean; onToggle: () => void }) {
  return (
    <Card className="flex h-full flex-col border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <CardHeader className="gap-3">
        <div className="flex items-start justify-between gap-3">
          <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">{card.category}</Badge>
          <button type="button" onClick={onToggle} aria-pressed={selected} className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${selected ? "border-emerald-600 bg-emerald-600 text-white" : "border-slate-300 text-slate-600 hover:border-emerald-500"}`}>
            {selected ? "Selected" : "Compare"}
          </button>
        </div>
        <CardTitle className="text-xl leading-tight text-slate-950">{card.name}</CardTitle>
        <p className="text-sm leading-6 text-slate-600">{card.description}</p>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-5">
        <div className="grid grid-cols-2 gap-3 rounded-xl bg-slate-50 p-3 text-sm">
          <div><p className="text-slate-500">Annual fee</p><p className="mt-1 font-bold text-emerald-700">{card.fees}</p></div>
          <div><p className="text-slate-500">Rewards</p><p className="mt-1 font-bold text-slate-900">{card.cashback}</p></div>
        </div>
        <ul className="space-y-2 text-sm text-slate-700">
          {card.benefits.slice(0, 4).map((benefit) => <li key={benefit} className="flex gap-2"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" />{benefit}</li>)}
        </ul>
        <div className="mt-auto flex gap-2">
          <Button asChild className="flex-1 bg-emerald-600 hover:bg-emerald-700"><Link href={card.affiliateLink} target="_blank" rel="noopener noreferrer">Apply Now <ExternalLink className="ml-2 size-4" /></Link></Button>
        </div>
      </CardContent>
    </Card>
  )
}

export function CreditCardCatalog({ compact = false }: { compact?: boolean }) {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("All categories")
  const [fee, setFee] = useState("All fees")
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const categories = useMemo(() => ["All categories", ...Array.from(new Set(creditCardProducts.map((card) => card.category)))], [])
  const filteredCards = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    return creditCardProducts.filter((card) => {
      const matchesQuery = !normalized || [card.name, card.description, card.type, card.category, ...card.benefits].join(" ").toLowerCase().includes(normalized)
      const matchesCategory = category === "All categories" || card.category === category
      const matchesFee = fee === "All fees" || card.fees === fee
      return matchesQuery && matchesCategory && matchesFee
    }).slice(0, compact ? 6 : undefined)
  }, [category, compact, fee, query])
  const selectedCards = creditCardProducts.filter((card) => selectedIds.includes(card.id))
  const toggleSelection = (id: string) => setSelectedIds((current) => current.includes(id) ? current.filter((item) => item !== id) : current.length < 3 ? [...current, id] : current)

  return (
    <div className="space-y-8">
      {!compact && <div className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:grid-cols-[1.5fr_1fr_1fr_auto]">
        <label className="relative"><span className="sr-only">Search credit cards</span><Search className="absolute left-3 top-3 size-4 text-slate-400" /><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search cards, rewards, issuers..." className="pl-9" /></label>
        <select aria-label="Filter by category" value={category} onChange={(event) => setCategory(event.target.value)} className="h-10 rounded-md border border-input bg-background px-3 text-sm">{categories.map((item) => <option key={item}>{item}</option>)}</select>
        <select aria-label="Filter by annual fee" value={fee} onChange={(event) => setFee(event.target.value)} className="h-10 rounded-md border border-input bg-background px-3 text-sm">{feeOptions.map((item) => <option key={item}>{item}</option>)}</select>
        <Button variant="outline" onClick={() => { setQuery(""); setCategory("All categories"); setFee("All fees") }}>Reset</Button>
      </div>}

      <div className="flex flex-wrap items-center justify-between gap-3"><p className="text-sm text-slate-600">Showing <strong>{filteredCards.length}</strong> of {creditCardProducts.length} cards{!compact && " · Select up to 3 to compare"}</p>{compact && <Button asChild variant="outline"><Link href="/credit/affiliate-credit-cards">View all cards</Link></Button>}</div>
      {filteredCards.length ? <div className={`grid gap-6 ${compact ? "md:grid-cols-3" : "md:grid-cols-2 xl:grid-cols-3"}`}>{filteredCards.map((card) => <CardTile key={card.id} card={card} selected={selectedIds.includes(card.id)} onToggle={() => toggleSelection(card.id)} />)}</div> : <div className="rounded-2xl border border-dashed p-10 text-center"><p className="font-semibold">No cards match those filters.</p><Button variant="link" onClick={() => { setQuery(""); setCategory("All categories"); setFee("All fees") }}>Clear filters</Button></div>}

      {!compact && selectedCards.length > 0 && <section aria-labelledby="compare-heading" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5"><div className="flex flex-wrap items-center justify-between gap-3"><div><h2 id="compare-heading" className="flex items-center gap-2 text-xl font-bold text-slate-950"><GitCompareArrows className="size-5 text-emerald-700" />Compare selected cards</h2><p className="mt-1 text-sm text-slate-600">Comparing {selectedCards.length} of 3 available slots.</p></div><Button variant="ghost" onClick={() => setSelectedIds([])}>Clear comparison <X className="ml-2 size-4" /></Button></div><div className="mt-5 grid gap-3 md:grid-cols-3">{selectedCards.map((card) => <div key={card.id} className="rounded-xl bg-white p-4"><h3 className="font-bold text-slate-950">{card.name}</h3><dl className="mt-3 space-y-2 text-sm"><div className="flex justify-between gap-3"><dt className="text-slate-500">Fee</dt><dd className="text-right font-semibold">{card.fees}</dd></div><div className="flex justify-between gap-3"><dt className="text-slate-500">Rewards</dt><dd className="text-right font-semibold">{card.cashback}</dd></div><div className="flex justify-between gap-3"><dt className="text-slate-500">Type</dt><dd className="text-right font-semibold">{card.type}</dd></div></dl></div>)}</div></section>}
    </div>
  )
}

export function CreditCardCatalogSection() {
  return <section id="credit-card-catalog" className="bg-slate-50 px-4 py-16"><div className="mx-auto max-w-6xl"><div className="mb-10 max-w-2xl"><Badge className="mb-3 bg-emerald-100 text-emerald-800">Curated card marketplace</Badge><h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">Find the right credit card for your everyday.</h2><p className="mt-3 text-slate-600">Compare real card benefits and apply directly through BuyNswipe&apos;s partner links.</p></div><CreditCardCatalog compact /></div></section>
}

export function CreditCardCatalogPage() {
  return <main className="min-h-screen bg-white"><section className="bg-slate-950 px-4 py-16 text-white md:py-24"><div className="mx-auto max-w-6xl"><Badge className="mb-4 bg-emerald-400 text-emerald-950">{creditCardProducts.length} partner cards</Badge><h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">Compare cards built around how you spend.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Search cashback, lifestyle, shopping and premium cards, compare up to three options, then apply directly with the issuing partner.</p></div></section><section className="px-4 py-12 md:py-16"><div className="mx-auto max-w-6xl"><CreditCardCatalog /></div></section></main>
}
