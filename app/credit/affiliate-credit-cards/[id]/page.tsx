import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { creditCardProducts } from "@/lib/affiliate-products"

type Props = { params: Promise<{ id: string }> }

function getOffer(id: string) {
  return creditCardProducts.find((product) => product.id === id)
}

export async function generateStaticParams() {
  return creditCardProducts.map((product) => ({ id: product.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const offer = getOffer(id)
  if (!offer) return { title: "Offer not found | BuyNswipe Credit" }
  return {
    title: `${offer.name} | BuyNswipe Credit`,
    description: `${offer.description}. Review benefits, fees, eligibility, and apply through the partner link.`,
  }
}

export default async function OfferDetailPage({ params }: Props) {
  const { id } = await params
  const offer = getOffer(id)
  if (!offer) notFound()

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 px-4 py-12 text-white md:py-20">
        <div className="mx-auto max-w-5xl">
          <Link href="/credit/affiliate-credit-cards" className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"><ArrowLeft className="size-4" /> Back to all offers</Link>
          <div className="mt-12 flex flex-wrap items-center gap-3"><Badge className="bg-emerald-400 text-emerald-950">{offer.category}</Badge><Badge variant="outline" className="border-slate-600 text-slate-200">{offer.type}</Badge></div>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">{offer.name}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{offer.description}</p>
          <div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg" className="bg-emerald-500 text-emerald-950 hover:bg-emerald-400"><a href={offer.affiliateLink} target="_blank" rel="noopener noreferrer">Apply through partner <ExternalLink className="ml-2 size-4" /></a></Button><Button asChild size="lg" variant="outline" className="border-slate-600 bg-transparent text-white hover:bg-white/10"><Link href="/credit/affiliate-credit-cards">Compare other offers</Link></Button></div>
        </div>
      </section>
      <section className="px-4 py-12 md:py-16"><div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1.3fr_.7fr]">
        <div className="space-y-6"><section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-2xl font-bold text-slate-950">Why consider this offer</h2><ul className="mt-6 grid gap-4 sm:grid-cols-2">{offer.benefits.map((benefit) => <li key={benefit} className="flex gap-3 text-slate-700"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-600" />{benefit}</li>)}</ul></section><section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-2xl font-bold text-slate-950">Eligibility</h2><ul className="mt-5 space-y-3 text-slate-700">{offer.eligibility.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-500" />{item}</li>)}</ul></section></div>
        <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"><div className="flex items-center gap-2 text-sm font-semibold text-emerald-700"><ShieldCheck className="size-4" /> Partner link ready to check</div><dl className="mt-6 space-y-5"><div><dt className="text-sm text-slate-500">Annual fee</dt><dd className="mt-1 text-lg font-bold text-slate-950">{offer.fees}</dd></div><div><dt className="text-sm text-slate-500">Rewards / cashback</dt><dd className="mt-1 text-lg font-bold text-slate-950">{offer.cashback}</dd></div><div><dt className="text-sm text-slate-500">Offer type</dt><dd className="mt-1 text-lg font-bold text-slate-950">{offer.type}</dd></div></dl><p className="mt-7 border-t pt-5 text-xs leading-5 text-slate-500">BuyNswipe may receive a referral fee. Fees, rewards, eligibility, and approval criteria can change. Confirm the current details on the partner page before applying.</p><Button asChild className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700"><a href={offer.affiliateLink} target="_blank" rel="noopener noreferrer">Apply Now <ExternalLink className="ml-2 size-4" /></a></Button></aside>
      </div></section>
    </main>
  )
}
