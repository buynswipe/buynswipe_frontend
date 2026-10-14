import type { Metadata } from "next"
import { SiteFooter, SiteHeader } from "@/components/site-chrome"

export const metadata: Metadata = {
  title: "Privacy Notice | BuyNswipe®",
  description: "How BuyNswipe® handles information submitted through its website and contact forms.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader current="/privacy" />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <p className="text-sm font-semibold text-blue-700">Last updated: October 2026</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight">Privacy notice</h1>
          <p className="mt-4 text-slate-600">This notice explains how BuyNswipe® uses information you submit through this website.</p>
          <div className="mt-10 flex flex-col gap-8 text-slate-700">
            <section><h2 className="text-xl font-bold text-slate-900">Information we collect</h2><p className="mt-2">We may collect your name, email address, phone number, inquiry type, and message when you contact us or request information.</p></section>
            <section><h2 className="text-xl font-bold text-slate-900">How we use it</h2><p className="mt-2">We use submitted information to respond to requests, provide support, evaluate partnership or acquisition inquiries, and maintain appropriate business records. We do not treat this website as a loan approval service.</p></section>
            <section><h2 className="text-xl font-bold text-slate-900">Sharing and retention</h2><p className="mt-2">We limit access to people and service providers who need the information to operate the website or respond to you. We retain submissions only as long as reasonably necessary for the purpose collected or to meet legal obligations.</p></section>
            <section><h2 className="text-xl font-bold text-slate-900">Your choices</h2><p className="mt-2">To ask about, correct, or request deletion of a contact submission, email <a className="font-semibold text-blue-700 underline" href="mailto:buynswipe@gmail.com">buynswipe@gmail.com</a>.</p></section>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
