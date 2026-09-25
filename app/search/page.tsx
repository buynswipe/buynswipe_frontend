import type { Metadata } from "next"
import Link from "next/link"
import { Search } from "lucide-react"
import { searchSite } from "@/lib/site-search"

export const metadata: Metadata = {
  title: "Search BuyNswipe",
  description: "Search BuyNswipe products, services, tools, resources and ShopNdeal offers.",
  alternates: { canonical: "/search" },
}

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const params = await searchParams
  const query = params.q?.trim() || ""
  const results = searchSite(query)
  return <main className="min-h-screen bg-slate-50 px-5 py-12 text-slate-950"><div className="mx-auto max-w-5xl"><Link href="/" className="text-sm font-bold text-blue-600">← Back to BuyNswipe</Link><div className="mt-10 max-w-3xl"><p className="text-sm font-bold uppercase tracking-[.16em] text-blue-600">Ecosystem search</p><h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Find your next step.</h1><p className="mt-4 text-lg leading-8 text-slate-600">Search products, solutions, tools and ShopNdeal discovery pages.</p><form method="get" className="mt-8 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm"><Search className="ml-3 size-5 text-slate-400" aria-hidden="true" /><label htmlFor="site-search" className="sr-only">Search BuyNswipe</label><input id="site-search" name="q" defaultValue={query} placeholder="Try credit cards, NCMC, cashback or payments" className="min-w-0 flex-1 bg-transparent px-2 py-3 outline-none" autoComplete="off" /><button type="submit" className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700">Search</button></form></div><div className="mt-12"><p className="text-sm font-semibold text-slate-500">{query ? `${results.length} result${results.length === 1 ? "" : "s"} for “${query}”` : "Popular starting points"}</p>{results.length ? <div className="mt-4 grid gap-4 sm:grid-cols-2">{results.map((result) => <Link key={result.href} href={result.href} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"><span className="text-xs font-bold uppercase tracking-wider text-blue-600">{result.type}</span><h2 className="mt-2 text-lg font-black">{result.title}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{result.description}</p><span className="mt-4 inline-block text-sm font-bold text-blue-600">Explore →</span></Link>)}</div> : <div className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-white p-8"><h2 className="text-lg font-bold">No matching results</h2><p className="mt-2 text-sm text-slate-600">Try a broader term such as credit, payments, shopping or transit.</p><Link href="/contact" className="mt-5 inline-block text-sm font-bold text-blue-600">Talk to BuyNswipe →</Link></div>}</div></div></main>
}
