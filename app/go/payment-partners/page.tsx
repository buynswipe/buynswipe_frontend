import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, CreditCard, DollarSign, Globe, Lock, Sparkles, Zap, BarChart3, Users } from "lucide-react"

export const metadata: Metadata = { title: "For Payment Partners | BuyNswipe® Go", description: "Connect acceptance, settlement, and customer value with BuyNswipe® Go." }

export default function PaymentPartnersPage() {
  return <main className="go-page min-h-screen bg-go-bg font-sans text-go-navy">
    <header className="sticky top-0 z-50 border-b border-go-navy/10 bg-go-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-4 lg:px-8">
        <Link href="/go" aria-label="Back to Go"><ArrowLeft className="size-5" /></Link>
        <h1 className="text-xl font-black text-go-navy">Payment Partners</h1>
      </div>
    </header>

    <section className="relative overflow-hidden bg-go-navy text-primary-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(0,199,242,.28),transparent_34%),radial-gradient(circle_at_30%_80%,rgba(0,110,255,.28),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <span className="go-kicker go-kicker-dark"><CreditCard className="size-4" /> For processors</span>
          <h2 className="mt-6 text-balance text-5xl font-black leading-[1.1] tracking-[-0.05em] sm:text-6xl">Connect acceptance. Grow settlement value.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-primary-foreground/80">Expand your acceptance network with BuyNswipe® Go and capture new transaction streams.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#value" className="inline-flex items-center gap-2 rounded-full bg-go-lime px-6 py-3.5 font-bold text-go-navy transition hover:bg-primary-foreground">Explore Value <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </div>
    </section>

    <section id="value" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="mb-16">
        <span className="go-kicker">Why payment partners join us</span>
        <h3 className="mt-5 text-4xl font-black tracking-tight">Volume. Velocity. Value.</h3>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: Zap, title: "High transaction volume", desc: "Millions of daily tap transactions across transit, retail, and services." },
          { icon: DollarSign, title: "Settlement value", desc: "Significant daily settlement volumes with attractive pricing models." },
          { icon: CheckCircle, title: "Pre-authenticated users", desc: "Tap payments don&apos;t require PIN entry — lower friction, higher acceptance." },
          { icon: BarChart3, title: "Transaction analytics", desc: "Deep insights into payment behavior and merchant performance." },
          { icon: Globe, title: "Multi-market reach", desc: "Expand across geographies through connected transit networks." },
          { icon: Lock, title: "Security & compliance", desc: "Enterprise-grade security, PCI compliance, and regulatory adherence built-in." },
        ].map(({ icon: Icon, title, desc }) => (
          <article key={title} className="rounded-3xl border border-go-navy/10 bg-primary-foreground p-7 shadow-sm">
            <div className="mb-12 flex size-12 items-center justify-center rounded-2xl bg-go-blue/10 text-go-blue"><Icon className="size-6" /></div>
            <h4 className="text-lg font-bold">{title}</h4>
            <p className="mt-3 text-sm leading-6 text-go-navy/60">{desc}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="bg-go-navy text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <h3 className="text-4xl font-black tracking-tight">Connected payment infrastructure</h3>
          <p className="mt-5 leading-8 text-primary-foreground/75">Our platform enables seamless payments across transit, shopping, dining, and services with consistent settlement and reporting.</p>
          <ul className="mt-8 flex flex-col gap-4">
            {["Omnichannel acceptance", "Real-time reporting", "Flexible settlement", "API-first approach", "Merchant portal"].map((item) => (
              <li key={item} className="flex items-center gap-3 font-semibold">
                <span className="flex size-6 items-center justify-center rounded-full bg-go-cyan/20 text-go-cyan">✓</span>{item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-primary-foreground/5 p-8 border border-primary-foreground/15">
          <Users className="size-12 text-go-lime" />
          <h4 className="mt-6 text-2xl font-bold">Settlement Hub</h4>
          <p className="mt-3 text-primary-foreground/65">Real-time settlement tracking, reconciliation, and reporting across all payment channels and merchant categories.</p>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="rounded-3xl border border-go-navy/10 bg-go-bg/50 p-8 text-center sm:p-12">
        <Sparkles className="mx-auto size-8 text-go-blue" />
        <h3 className="mt-6 text-3xl font-black">Ready to expand your network?</h3>
        <p className="mt-4 text-lg text-go-navy/65">Let&apos;s discuss partnership opportunities and integration timelines.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/go#partner" className="inline-flex items-center gap-2 rounded-full bg-go-blue px-6 py-3 font-bold text-primary-foreground hover:bg-go-navy transition">Contact our team <ArrowRight className="size-4" /></Link>
          <Link href="/go" className="inline-flex items-center gap-2 rounded-full border border-go-navy/20 px-6 py-3 font-bold text-go-navy hover:border-go-blue hover:text-go-blue transition">Back to Go <ArrowLeft className="size-4" /></Link>
        </div>
      </div>
    </section>

    <footer className="bg-go-navy px-5 py-8 text-primary-foreground/60 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs leading-6 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} BuyNswipe Technology Pvt. Ltd. All rights reserved.</span>
        <span>BuyNswipe® Go is a proposed platform. Availability varies by partner and regulations.</span>
      </div>
    </footer>
  </main>
}
