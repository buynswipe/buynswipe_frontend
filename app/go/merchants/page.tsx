import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight, BarChart3, Gift, QrCode, Sparkles, Target, TrendingUp, Users, Wallet, Zap } from "lucide-react"

export const metadata: Metadata = { title: "For Merchants | BuyNswipe® Go", description: "Reach commuters with contextual offers and rewards through BuyNswipe® Go." }

export default function MerchantsPage() {
  return <main className="go-page min-h-screen bg-go-bg font-sans text-go-navy">
    <header className="sticky top-0 z-50 border-b border-go-navy/10 bg-go-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-4 lg:px-8">
        <Link href="/go" aria-label="Back to Go"><ArrowLeft className="size-5" /></Link>
        <h1 className="text-xl font-black text-go-navy">Merchants</h1>
      </div>
    </header>

    <section className="relative overflow-hidden bg-go-navy text-primary-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(0,199,242,.28),transparent_34%),radial-gradient(circle_at_30%_80%,rgba(0,110,255,.28),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <span className="go-kicker go-kicker-dark"><QrCode className="size-4" /> For merchants</span>
          <h2 className="mt-6 text-balance text-5xl font-black leading-[1.1] tracking-[-0.05em] sm:text-6xl">Reach commuters. Build loyalty.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-primary-foreground/80">Connect with millions of engaged customers through contextual offers and rewards in the BuyNswipe® Go ecosystem.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#benefits" className="inline-flex items-center gap-2 rounded-full bg-go-lime px-6 py-3.5 font-bold text-go-navy transition hover:bg-primary-foreground">Explore Opportunities <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </div>
    </section>

    <section id="benefits" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="mb-16">
        <span className="go-kicker">Why merchants partner with us</span>
        <h3 className="mt-5 text-4xl font-black tracking-tight">Smart offers. Real engagement.</h3>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: Users, title: "Millions of users", desc: "Access a highly engaged audience of commuters across major cities." },
          { icon: Target, title: "Contextual targeting", desc: "Reach customers at the right time and place with location and behavior insights." },
          { icon: Gift, title: "Rewards programs", desc: "Run loyalty programs, exclusive offers, and co-branded rewards seamlessly." },
          { icon: TrendingUp, title: "Foot traffic growth", desc: "Drive store visits and increase transaction frequency with timely incentives." },
          { icon: BarChart3, title: "Campaign analytics", desc: "Real-time insights into offer performance, customer response, and ROI." },
          { icon: Zap, title: "Easy integration", desc: "QR code-based offers, instant settlement, and minimal technical setup required." },
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
          <Wallet className="size-12 text-go-lime" />
          <h4 className="mt-6 text-2xl font-bold">Merchant Dashboard</h4>
          <p className="mt-3 text-primary-foreground/65">Launch, manage, and optimize offers directly. Track performance, redemptions, and customer behavior in real-time.</p>
        </div>
        <div>
          <h3 className="text-4xl font-black tracking-tight">Simple, effective merchant tools</h3>
          <p className="mt-5 leading-8 text-primary-foreground/75">No complex integrations or long-term commitments. Start with a single offer and scale as you see results.</p>
          <ul className="mt-8 flex flex-col gap-4">
            {["QR-based offers", "Instant settlements", "Customer insights", "Campaign templates", "Multi-location support"].map((item) => (
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
        <h3 className="mt-6 text-3xl font-black">Ready to reach new customers?</h3>
        <p className="mt-4 text-lg text-go-navy/65">Let&apos;s discuss how BuyNswipe® Go can help grow your business.</p>
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
