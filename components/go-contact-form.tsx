"use client"

import { useState } from "react"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"

export function GoContactForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="flex min-h-52 flex-col items-center justify-center gap-3 rounded-2xl border border-go-green/30 bg-go-green/5 p-6 text-center">
        <CheckCircle2 className="size-10 text-go-green" aria-hidden="true" />
        <h3 className="text-xl font-semibold text-go-navy">Thanks for reaching out.</h3>
        <p className="max-w-sm text-sm leading-6 text-muted-foreground">Our partnerships team will be in touch shortly.</p>
      </div>
    )
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-go-navy">Name<input required name="name" className="go-input" placeholder="Your name" /></label>
        <label className="flex flex-col gap-2 text-sm font-medium text-go-navy">Work email<input required type="email" name="email" className="go-input" placeholder="you@company.com" /></label>
      </div>
      <label className="flex flex-col gap-2 text-sm font-medium text-go-navy">I am a...<select name="type" className="go-input"><option>Transit operator</option><option>Bank or issuer</option><option>Payment company</option><option>Merchant</option><option>Strategic partner</option><option>Investor</option></select></label>
      <label className="flex flex-col gap-2 text-sm font-medium text-go-navy">Tell us a little more<textarea name="message" className="go-input min-h-28 resize-y" placeholder="How would you like to work with BuyNswipe® Go?" /></label>
      <button className="inline-flex items-center justify-center gap-2 rounded-full bg-go-blue px-6 py-3.5 text-sm font-bold text-primary-foreground transition hover:bg-go-navy">Start a conversation <ArrowUpRight className="size-4" aria-hidden="true" /></button>
    </form>
  )
}
