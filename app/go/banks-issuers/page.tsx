import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Banknote, BarChart2, CreditCard, DollarSign, Lock, Sparkles, Target, Wallet, Zap } from "lucide-react"

export const metadata: Metadata = { title: "For Banks & Issuers | BuyNswipe® Go", description: "Build relevant card propositions around everyday movement with BuyNswipe® Go." }

export default function BanksIssuersPage() {
  return <main className="go-page min-h-screen bg-go-bg font-sans text-go-navy">
    <header className="sticky top-0 z-50 border-b border-go-navy/10 bg-go-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-4 lg:px-8">
        <Link href="/go" aria-label="Back to Go"><ArrowLeft className="size-5" /></Link>
        <h1 className="text-xl font-black text-go-navy">Banks & Issuers</h1>
      </div>
    </header>

    <section className="relative overflow-hidden bg-go-navy text-primary-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(0,199,242,.28),transparent_34%),radial-gradient(circle_at_30%_80%,rgba(0,110,255,.28),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <span className="go-kicker go-kicker-dark"><Banknote className="size-4" /> For issuers</span>
          <h2 className="mt-6 text-balance text-5xl font-black leading-[1.1] tracking-[-0.05em] sm:text-6xl">New card propositions for everyday movement.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-primary-foreground/80">Reach engaged users through BuyNswipe® Go and build card products that matter in their daily lives.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#opportunities" className="inline-flex items-center gap-2 rounded-full bg-go-lime px-6 py-3.5 font-bold text-go-navy transition hover:bg-primary-foreground">Explore Opportunities <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </div>
    </section>

    <section id="opportunities" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="mb-16">
        <span className="go-kicker">Why issuers partner with us</span>
        <h3 className="mt-5 text-4xl font-black tracking-tight">Cards that matter. Revenue that grows.</h3>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: Target, title: "Targeted audience", desc: "Reach a highly engaged community of commuters across metro, bus, rail, and shopping." },
          { icon: Wallet, title: "Card stickiness", desc: "Cards stay in daily use through transit, payments, and rewards integration." },
          { icon: Zap, title: "Transaction velocity", desc: "High frequency of card usage drives volume and recurring revenue." },
          { icon: DollarSign, title: "Co-branded programs", desc: "Create unique card offers, rewards, and loyalty programs with your brand." },
          { icon: BarChart2, title: "Usage insights", desc: "Rich data on cardholder behavior, spending patterns, and merchant preferences." },
          { icon: Lock, title: "Secure infrastructure", desc: "NCMC-enabled security, fraud protection, and regulatory compliance built-in." },
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
        <div className="rounded-3xl bg-primary-foreground/5 p-8 border border-primary-foreground/15">
          <CreditCard className="size-12 text-go-lime" />
          <h4 className="mt-6 text-2xl font-bold">Card Management Portal</h4>
          <p className="mt-3 text-primary-foreground/65">Issue, manage, and monitor cards across the BuyNswipe® Go ecosystem with full control over limits, programs, and offers.</p>
        </div>
        <div>
          <h3 className="text-4xl font-black tracking-tight">Seamless issuer integration</h3>
          <p className="mt-5 leading-8 text-primary-foreground/75">Our platform supports RuPay, international cards, and co-branded propositions with flexible integration options.</p>
          <ul className="mt-8 flex flex-col gap-4">
            {["Multi-product support", "Flexible co-branding", "Real-time settlement", "API integration", "Dedicated issuer portal"].map((item) => (
              <li key={item} className="flex items-center gap-3 font-semibold">
                <span className="flex size-6 items-center justify-center rounded-full bg-go-cyan/20 text-go-cyan">✓</span>{item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="rounded-3xl border border-go-navy/10 bg-go-bg/50 p-8 text-center sm:p-12">
        <Sparkles className="mx-auto size-8 text-go-blue" />
        <h3 className="mt-6 text-3xl font-black">Ready to launch your card with us?</h3>
        <p className="mt-4 text-lg text-go-navy/65">Let&apos;s design a proposition that drives engagement and growth.</p>
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
