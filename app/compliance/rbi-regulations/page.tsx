import Link from "next/link"

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-950">
      <div className="mx-auto max-w-4xl">
        <Link href="/investor-relations" className="text-sm font-semibold text-blue-700 hover:underline">← Back to Investor Relations</Link>
        <h1 className="mt-8 text-4xl font-black tracking-tight">Regulatory and compliance disclosures</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">BuyNswipe provides comparison, education, and referral experiences. It does not present itself as an RBI-regulated bank, lender, or payment system.</p>
        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Scope and verification</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-600"><li>Financial products are provided by their respective regulated partners.</li><li>Users should review each partner&apos;s official terms, privacy notice, and regulatory disclosures.</li><li>Compliance statements on this site are informational and do not replace legal advice or partner documentation.</li></ul>
        </section>
      </div>
    </main>
  )
}

export const metadata = { title: "Regulatory Disclosures | BuyNswipe", description: "BuyNswipe regulatory scope and compliance disclosures." }
