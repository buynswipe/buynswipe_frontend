import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Editorial policy | BuyNswipe®",
  description: "How BuyNswipe® researches, updates, discloses, and corrects financial education and commerce content.",
  alternates: { canonical: "/editorial-policy" },
}

export default function EditorialPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">BuyNswipe®</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">Editorial policy</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">Our financial education and commerce content is designed to help readers understand options, compare assumptions, and make better questions—not to promise approval, returns, savings, or outcomes.</p>
        <div className="mt-10 space-y-8 text-[1.05rem] leading-8 text-slate-700">
          <section><h2 className="text-2xl font-semibold text-slate-950">How we create content</h2><p className="mt-3">We aim to explain concepts in plain language, identify assumptions, distinguish examples from verified facts, and link readers to relevant provider or official information where practical.</p></section>
          <section><h2 className="text-2xl font-semibold text-slate-950">Financial disclosures</h2><p className="mt-3">Rates, fees, eligibility, credit decisions, settlement terms, market figures, tax treatment, and product availability can change. Provider terms control. Our calculators and examples are educational estimates and are not financial advice or approvals.</p></section>
          <section><h2 className="text-2xl font-semibold text-slate-950">Commercial relationships</h2><p className="mt-3">Some pages may describe referrals, merchant services, affiliate products, or acquisition opportunities. We will identify commercial intent where relevant and do not treat a paid or referred placement as an independent endorsement.</p></section>
          <section><h2 className="text-2xl font-semibold text-slate-950">Updates and corrections</h2><p className="mt-3">We review important pages when product, provider, legal, or market information changes. If you find an error or outdated claim, contact us through our <Link href="/contact" className="font-semibold text-blue-700 underline">contact page</Link> with the page URL and supporting context.</p></section>
          <section><h2 className="text-2xl font-semibold text-slate-950">Ownership and privacy</h2><p className="mt-3">BuyNswipe® Technology Pvt. Ltd. publishes this site. Personal information is handled under our <Link href="/privacy-policy" className="font-semibold text-blue-700 underline">Privacy Policy</Link>. This policy was last updated in October 2026.</p></section>
        </div>
      </article>
    </main>
  )
}
