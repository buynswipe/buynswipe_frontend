'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, BusFront, Check, ChevronRight, CreditCard, MapPin, Menu, Smartphone, Sparkles, TrainFront, TrendingUp, Users, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const highlights = [
  { icon: CreditCard, title: 'One card, every journey', text: 'Tap, ride, shop, and earn with a single connected payment experience.' },
  { icon: TrainFront, title: 'Transit, made lighter', text: 'Move across metros, buses, and the places in between without the friction.' },
  { icon: TrendingUp, title: 'Rewards that travel', text: 'Turn everyday movement into useful value for your next destination.' },
]

const steps = ['Pick your Go plan', 'Tap into your commute', 'Pay anywhere you land']

export default function GoPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  return (
    <div className="go-page overflow-hidden bg-[#07121f] text-white">
      <section className="relative min-h-[700px] border-b border-white/10 px-5 pb-20 pt-8 sm:px-8 lg:px-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight"><span className="grid size-8 place-items-center rounded-full bg-[#16d6d0] text-[#07121f]"><Zap className="size-4" /></span>BuyNswipe<span className="text-[#16d6d0]">Go</span></Link>
          <nav className="hidden items-center gap-8 text-sm text-white/65 md:flex"><a href="#experience">Experience</a><a href="#partners">Partners</a><a href="#contact">Contact</a><Link href="/" className="text-white">BuyNswipe.com <ArrowRight className="ml-1 inline size-3" /></Link></nav>
          <Button variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10 md:hidden" aria-label="Open navigation"><Menu /></Button>
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-14 pt-20 lg:grid-cols-[1.05fr_.95fr] lg:pt-28">
          <div className="relative z-10">
            <Badge className="mb-7 rounded-full border-[#16d6d0]/30 bg-[#16d6d0]/10 px-4 py-2 text-[#8df3ee]">THE NEXT WAY TO MOVE</Badge>
            <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[.98] tracking-[-.06em] sm:text-7xl lg:text-[6.8rem]">Move more.<br /><span className="go-gradient-text">Carry less.</span></h1>
            <p className="mt-8 max-w-xl text-pretty text-lg leading-8 text-white/60 sm:text-xl">BuyNswipe Go brings your card, commute, and city life together — so the best part of getting there is the journey.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row"><a href="#contact"><Button size="lg" className="w-full bg-[#16d6d0] px-7 font-semibold text-[#07121f] hover:bg-[#8df3ee] sm:w-auto">Get early access <ArrowRight data-icon="inline-end" /></Button></a><a href="#experience" className="flex items-center justify-center gap-2 px-5 text-sm font-medium text-white/70 hover:text-white">See how it works <ChevronRight className="size-4" /></a></div>
            <div className="mt-14 flex items-center gap-6 text-xs text-white/45"><span><strong className="block text-2xl font-medium text-white">01</strong>connected card</span><span className="h-8 w-px bg-white/15" /><span><strong className="block text-2xl font-medium text-white">∞</strong>ways to go</span></div>
          </div>
          <div className="go-hero-art relative mx-auto h-[450px] w-full max-w-[520px] lg:h-[520px]">
            <div className="go-route route-one" /><div className="go-route route-two" /><div className="go-route route-three" />
            <div className="absolute right-[12%] top-[8%] rounded-full border border-white/15 px-3 py-2 text-xs text-white/60"><MapPin className="mr-1 inline size-3 text-[#ff9e68]" />Delhi NCR</div>
            <div className="go-card absolute left-[18%] top-[20%] h-64 w-44 rotate-[-14deg] rounded-2xl border border-white/30 p-5 shadow-2xl shadow-[#16d6d0]/20 sm:h-72 sm:w-52"><div className="flex justify-between text-xs text-white/60"><span>BUYN</span><span>GO / 01</span></div><div className="mt-32 text-2xl font-semibold tracking-tight sm:mt-40">go<span className="text-[#16d6d0]">.</span></div><div className="mt-3 text-[10px] uppercase tracking-[.25em] text-white/45">tap into life</div></div>
            <div className="absolute bottom-[8%] right-[4%] w-52 rounded-2xl border border-white/15 bg-[#102334]/90 p-4 shadow-xl backdrop-blur sm:w-60"><div className="mb-5 flex items-center justify-between"><span className="text-xs text-white/50">TODAY</span><span className="rounded-full bg-[#16d6d0]/15 px-2 py-1 text-[10px] text-[#8df3ee]">LIVE</span></div><div className="flex items-end justify-between"><div><div className="text-3xl font-semibold">₹240</div><div className="mt-1 text-xs text-white/45">saved on your way</div></div><Smartphone className="size-7 text-[#ff9e68]" /></div></div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0d1d2b] px-5 py-5 sm:px-8 lg:px-16"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 text-xs uppercase tracking-[.2em] text-white/40"><span>Built for the everyday</span><span>Transit</span><span>Retail</span><span>Work</span><span>Weekend</span><span>Rewarded</span></div></section>

      <section id="experience" className="bg-[#f5f6f3] px-5 py-24 text-[#07121f] sm:px-8 lg:px-16 lg:py-36"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="mb-5 text-xs font-semibold uppercase tracking-[.22em] text-[#e46f3f]">One connected experience</p><h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-[-.05em] sm:text-6xl">Your city is a system.<br /><span className="text-[#16a7a3]">Go is the connective tissue.</span></h2><p className="mt-7 max-w-xl text-lg leading-8 text-[#07121f]/60">From the first mile to the final purchase, Go keeps your movement and money moving in the same direction.</p></div><div className="mt-16 grid gap-4 md:grid-cols-3">{highlights.map(({ icon: Icon, title, text }) => <Card key={title} className="border-[#07121f]/10 bg-transparent shadow-none"><CardContent className="flex h-full flex-col p-7"><Icon className="mb-16 size-7 text-[#e46f3f]" /><h3 className="text-xl font-semibold tracking-tight">{title}</h3><p className="mt-3 leading-7 text-[#07121f]/55">{text}</p><ArrowRight className="mt-8 size-5 text-[#16a7a3]" /></CardContent></Card>)}</div></div></section>

      <section className="bg-[#16d6d0] px-5 py-24 text-[#07121f] sm:px-8 lg:px-16"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="mb-5 text-xs font-bold uppercase tracking-[.22em] text-[#07121f]/55">The Go loop</p><h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-.05em] sm:text-6xl">Three taps between you and anywhere.</h2></div><div className="grid gap-5 sm:grid-cols-3">{steps.map((step, i) => <div key={step} className="border-t border-[#07121f]/25 pt-5"><span className="text-sm font-semibold">0{i + 1}</span><p className="mt-12 text-lg font-medium">{step}</p></div>)}</div></div></section>

      <section id="partners" className="bg-[#07121f] px-5 py-24 sm:px-8 lg:px-16 lg:py-36"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-8 border-b border-white/15 pb-12 md:flex-row md:items-end"><div><p className="mb-5 text-xs font-semibold uppercase tracking-[.22em] text-[#ff9e68]">For the ecosystem</p><h2 className="text-balance text-4xl font-semibold tracking-[-.05em] sm:text-6xl">Better journeys<br />need better partners.</h2></div><p className="max-w-sm leading-7 text-white/50">Go is designed to plug into the places people already move — with thoughtful infrastructure for the people building what comes next.</p></div><div className="grid gap-4 pt-12 md:grid-cols-3"><div className="md:col-span-2 rounded-3xl bg-[#102334] p-8 sm:p-12"><BusFront className="size-8 text-[#16d6d0]" /><h3 className="mt-24 max-w-md text-3xl font-medium tracking-tight">Transit operators</h3><p className="mt-4 max-w-md leading-7 text-white/50">Modernize the tap-in experience and make every route more useful.</p></div><div className="rounded-3xl border border-white/15 p-8 sm:p-10"><Users className="size-8 text-[#ff9e68]" /><h3 className="mt-24 text-2xl font-medium tracking-tight">Employers</h3><p className="mt-4 leading-7 text-white/50">Give your people a simpler way to get to work and beyond.</p></div></div></div></section>

      <section id="contact" className="bg-[#f5f6f3] px-5 py-24 text-[#07121f] sm:px-8 lg:px-16"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_.8fr] lg:items-center"><div><p className="mb-5 text-xs font-semibold uppercase tracking-[.22em] text-[#e46f3f]">Be first in line</p><h2 className="text-balance text-5xl font-semibold leading-[.98] tracking-[-.06em] sm:text-7xl">The city is<br /><span className="text-[#16a7a3]">calling.</span></h2><p className="mt-7 max-w-md text-lg leading-8 text-[#07121f]/60">Join the early access list for Go launches, partner drops, and the occasional shortcut.</p></div><form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="rounded-3xl bg-white p-7 shadow-sm sm:p-10"><Sparkles className="size-7 text-[#e46f3f]" /><h3 className="mt-10 text-2xl font-semibold tracking-tight">Get early access</h3><p className="mt-2 text-sm leading-6 text-[#07121f]/55">We&apos;ll only send the good stuff.</p><div className="mt-8 flex flex-col gap-3"><Input type="email" required placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="h-12 border-[#07121f]/15 bg-[#f5f6f3]" /><Button className="h-12 bg-[#07121f] text-white hover:bg-[#102334]">{submitted ? <><Check data-icon="inline-start" />You&apos;re on the list</> : <>Notify me <ArrowRight data-icon="inline-end" /></>}</Button></div></form></div></section>
      <footer className="flex flex-col gap-4 bg-[#07121f] px-5 py-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-16"><span>BuyNswipe Go — move more, carry less.</span><span>© {new Date().getFullYear()} BuyNswipe Technology Pvt. Ltd.</span></footer>
    </div>
  )
}

export { GoPage }
