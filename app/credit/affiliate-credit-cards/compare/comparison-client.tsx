"use client"

import Link from "next/link"
import { ExternalLink, GitCompareArrows, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { creditCardProducts } from "@/lib/affiliate-products"

export default function ComparisonClient({ selectedIds }: { selectedIds: string[] }) {
  const offers = creditCardProducts.filter((card) => selectedIds.includes(card.id))
  const rows = [
    ["Category", (card: typeof offers[number]) => card.category],
    ["Offer type", (card: typeof offers[number]) => card.type],
    ["Annual fee", (card: typeof offers[number]) => card.fees],
    ["Rewards / cashback", (card: typeof offers[number]) => card.cashback],
    ["Benefits", (card: typeof offers[number]) => card.benefits.join(" • ")],
    ["Eligibility", (card: typeof offers[number]) => card.eligibility.join(" • ")],
  ] as const

  return <main className="min-h-screen bg-slate-50 px-4 py-12 md:py-20"><div className="mx-auto max-w-7xl"><Link href="/credit/affiliate-credit-cards" className="text-sm font-semibold text-emerald-700 hover:text-emerald-900">← Back to offers</Link><div className="mt-8 max-w-3xl"><Badge className="bg-emerald-100 text-emerald-800"><GitCompareArrows className="mr-2 size-4" />Side-by-side comparison</Badge><h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">Compare offers with confidence.</h1><p className="mt-4 text-lg leading-8 text-slate-600">Review fees, rewards, benefits, and eligibility in one clear view. Confirm current partner terms before applying.</p></div>{offers.length === 0 ? <div className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center"><h2 className="text-xl font-bold text-slate-950">Choose offers to compare</h2><p className="mt-2 text-slate-600">Select up to three offers from the marketplace to create a comparison.</p><Button asChild className="mt-6 bg-emerald-600 hover:bg-emerald-700"><Link href="/credit/affiliate-credit-cards">Browse offers</Link></Button></div> : <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><div className="overflow-x-auto"><table className="min-w-[760px] w-full border-collapse"><thead><tr className="bg-slate-950 text-white"><th className="w-40 p-5 text-left text-sm font-semibold">Compare</th>{offers.map((card) => <th key={card.id} className="min-w-56 border-l border-white/10 p-5 text-left align-top"><div className="flex items-start justify-between gap-3"><div><p className="text-lg font-bold">{card.name}</p><Badge className="mt-3 bg-emerald-400 text-emerald-950">{card.category}</Badge></div><Link href={`/credit/affiliate-credit-cards/${card.id}`} aria-label={`View ${card.name} details`}><X className="size-5 rotate-45 text-slate-300 hover:text-white" /></Link></div></th>)}</tr></thead><tbody>{rows.map(([label, getValue]) => <tr key={label} className="border-t border-slate-200 align-top"><th className="bg-slate-50 p-5 text-left text-sm font-semibold text-slate-700">{label}</th>{offers.map((card) => <td key={card.id} className="border-l border-slate-200 p-5 text-sm leading-6 text-slate-700">{getValue(card)}</td>)}</tr>)}</tbody><tfoot><tr className="border-t border-slate-200"><th className="p-5 text-left text-sm font-semibold text-slate-700">Apply</th>{offers.map((card) => <td key={card.id} className="border-l border-slate-200 p-5"><Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700"><a href={card.affiliateLink} target="_blank" rel="noopener noreferrer">Apply Now <ExternalLink className="ml-2 size-4" /></a></Button></td>)}</tr></tfoot></table></div></div>}<p className="mt-6 text-xs leading-5 text-slate-500">BuyNswipe may receive a referral fee when you apply. Fees, eligibility, rewards, and approval criteria are supplied by external partners and may change.</p></div></main>
}
