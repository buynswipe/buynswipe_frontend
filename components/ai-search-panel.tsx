"use client"

import { FormEvent, useState } from "react"

export function AiSearchPanel() {
  const [query, setQuery] = useState("")
  const [answer, setAnswer] = useState("")
  const [sources, setSources] = useState<{ title: string; href: string }[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!query.trim()) return
    setLoading(true)
    setError("")
    setAnswer("")
    try {
      const response = await fetch("/api/ai-search", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ query }) })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || "AI search is unavailable.")
      setAnswer(result.answer)
      setSources(result.sources || [])
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "AI search is unavailable.")
    } finally {
      setLoading(false)
    }
  }

  return <section aria-labelledby="ai-search-heading" className="mt-12 rounded-3xl border border-blue-100 bg-blue-50/70 p-6 sm:p-8"><p className="text-xs font-bold uppercase tracking-[.16em] text-blue-700">Grounded AI search</p><h2 id="ai-search-heading" className="mt-2 text-2xl font-black tracking-tight">Ask about the BuyNswipe ecosystem.</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">Answers are grounded in approved BuyNswipe pages and include source links. For financial or regulatory decisions, verify the linked source pages.</p><form onSubmit={submit} className="mt-5 flex flex-col gap-3 sm:flex-row"><label htmlFor="ai-search-query" className="sr-only">Ask BuyNswipe a question</label><input id="ai-search-query" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="What is BuyNswipe Go?" className="min-h-12 min-w-0 flex-1 rounded-xl border border-blue-100 bg-white px-4 outline-none focus-visible:ring-2 focus-visible:ring-blue-600" /><button type="submit" disabled={loading || !query.trim()} className="min-h-12 rounded-xl bg-blue-700 px-5 font-bold text-white hover:bg-blue-800">{loading ? "Thinking…" : "Ask"}</button></form>{error ? <p role="alert" className="mt-4 text-sm font-semibold text-red-700">{error}</p> : null}{answer ? <div className="mt-6 rounded-2xl border border-blue-100 bg-white p-5"><p className="whitespace-pre-wrap text-sm leading-7 text-slate-700">{answer}</p>{sources.length ? <div className="mt-5 border-t border-slate-100 pt-4"><p className="text-xs font-bold uppercase tracking-wider text-slate-500">Sources</p><ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2">{sources.map((source) => <li key={source.href}><a href={source.href} className="text-sm font-semibold text-blue-700 underline underline-offset-2">{source.title}</a></li>)}</ul></div> : null}</div> : null}</section>
}
