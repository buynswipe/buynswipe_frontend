import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, CircleAlert, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { validateAffiliateLinks } from "@/lib/affiliate-link-validation"

export const metadata: Metadata = {
  title: "Affiliate Link Report | BuyNswipe Credit",
  description: "Validation report for BuyNswipe partner finance offers.",
}

const statusCopy = { verified: "Verified", redirected: "Redirected", unavailable: "Unavailable", error: "Error" } as const

export default async function AffiliateLinkReportPage() {
  const report = await validateAffiliateLinks()
  const healthy = report.results.filter((result) => result.status === "verified" || result.status === "redirected").length
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <Link href="/credit/affiliate-credit-cards" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-emerald-700"><ArrowLeft className="size-4" /> Back to offers</Link>
        <div className="mt-10 flex flex-wrap items-end justify-between gap-5"><div><Badge className="bg-emerald-100 text-emerald-800">Validation report</Badge><h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Affiliate link health</h1><p className="mt-3 text-slate-600">Checked {report.total} partner offers at {new Date(report.checkedAt).toLocaleString("en-IN")}.</p></div><div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-right"><p className="text-sm text-emerald-800">Healthy destinations</p><p className="text-3xl font-black text-emerald-700">{healthy}/{report.total}</p></div></div>
        {report.duplicates.length > 0 && <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-900"><p className="font-bold">Duplicate affiliate URLs detected</p><p className="mt-1 text-sm">{report.duplicates.join(", ")}</p></div>}
        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"><div className="divide-y divide-slate-100">{report.results.map((result) => <div key={result.id} className="flex flex-col gap-3 p-5 md:flex-row md:items-center md:justify-between"><div className="flex items-start gap-3"><div className="mt-1">{result.status === "verified" || result.status === "redirected" ? <CheckCircle2 className="size-5 text-emerald-600" /> : <CircleAlert className="size-5 text-amber-600" />}</div><div><h2 className="font-bold text-slate-950">{result.name}</h2><p className="mt-1 max-w-2xl break-all text-xs text-slate-500">{result.url}</p></div></div><div className="flex items-center gap-3"><Badge variant="outline" className={result.status === "verified" ? "border-emerald-200 text-emerald-700" : result.status === "redirected" ? "border-blue-200 text-blue-700" : "border-amber-200 text-amber-700"}>{statusCopy[result.status]}{result.statusCode ? ` · ${result.statusCode}` : ""}</Badge><Button asChild size="sm" variant="outline"><a href={result.url} target="_blank" rel="noopener noreferrer">Open <ExternalLink className="ml-2 size-3" /></a></Button></div></div>)}</div></div>
      </div>
    </main>
  )
}
