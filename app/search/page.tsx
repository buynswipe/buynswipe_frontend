import type { Metadata } from "next"
import Link from "next/link"
import { AiSearchPanel } from "@/components/ai-search-panel"
import { SearchBox } from "@/components/search-box"
import { searchSite, searchTypes, getSearchSuggestions } from "@/lib/site-search"

export const metadata: Metadata = {
  title: "Search BuyNswipe",
  description: "Search BuyNswipe products, services, tools, resources and ShopNdeal offers.",
  alternates: { canonical: "/search" },
}

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string; type?: string }> }) {
  const params = await searchParams
  const query = params.q?.trim() || ""
  const type = searchTypes.includes(params.type as (typeof searchTypes)[number]) ? params.type! : "All"
  const results = searchSite(query, type)
  return <main className="min-h-screen bg-slate-50 px-5 py-12 text-slate-950"><div className="mx-auto max-w-5xl"><Link href="/" className="text-sm font-bold text-blue-600">← Back to BuyNswipe</Link><div className="mt-10 max-w-3xl"><p className="text-sm font-bold uppercase tracking-[.16em] text-blue-600">Ecosystem search</p><h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Find your next step.</h1><p className="mt-4 text-lg leading-8 text-slate-600">Search products, solutions, tools and ShopNdeal discovery pages.</p><SearchBox query={query} suggestions={getSearchSuggestions()} /><AiSearchPanel /><nav aria-label="Filter search results" className="mt-5 flex flex-wrap gap-2">{searchTypes.map((option) => <Link key={option} href={`/search?${new URLSearchParams({ ...(query ? { q: query } : {}), ...(option !== "All" ? { type: option } : {}) }).toString()}`} aria-current={type === option ? "page" : undefined} className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${type === option ? "border-blue-600 bg-blue-600 text-white" : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700"}`}>{option}</Link>)}</nav></div><div className="mt-12"><p className="text-sm font-semibold text-slate-500">{query ? `${results.length} result${results.length === 1 ? "" : "s"} for “${query}”` : "Popular starting points"}</p>{results.length ? <div className="mt-4 grid gap-4 sm:grid-cols-2">{results.map((result) => <Link key={result.href} href={result.href} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"><span className="text-xs font-bold uppercase tracking-wider text-blue-600">{result.type}</span><h2 className="mt-2 text-lg font-black">{result.title}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{result.description}</p><span className="mt-4 inline-block text-sm font-bold text-blue-600">Explore →</span></Link>)}</div> : <div className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-white p-8"><h2 className="text-lg font-bold">No matching results</h2><p className="mt-2 text-sm text-slate-600">Try a broader term such as credit, payments, shopping or transit.</p><Link href="/contact" className="mt-5 inline-block text-sm font-bold text-blue-600">Talk to BuyNswipe →</Link></div>}</div></div></main>
}
