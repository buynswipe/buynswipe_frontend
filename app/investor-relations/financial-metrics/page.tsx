import Link from "next/link"

export default function FinancialMetricsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-950">
      <div className="mx-auto max-w-4xl">
        <Link href="/investor-relations" className="text-sm font-semibold text-blue-700 hover:underline">← Back to Investor Relations</Link>
        <h1 className="mt-8 text-4xl font-black tracking-tight">Financial metrics</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">Selected operating indicators are provided for discussion and are not audited financial statements or a solicitation to invest.</p>
        <section className="mt-10 grid gap-4 sm:grid-cols-3" aria-label="Operating indicators">
          {[['Monthly growth','15–20%'],['Affiliate links','35+'],['Available products','36+']].map(([label, value]) => <div key={label} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><p className="text-sm text-slate-500">{label}</p><p className="mt-2 text-3xl font-black text-blue-700">{value}</p></div>)}
        </section>
        <p className="mt-8 text-sm leading-7 text-slate-500">Figures are directional product metrics and should be independently verified during any diligence process.</p>
      </div>
    </main>
  )
}

export const metadata = { title: "Financial Metrics | BuyNswipe", description: "Directional operating metrics and disclosures for BuyNswipe." }
