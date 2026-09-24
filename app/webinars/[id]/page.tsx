import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { WebinarSignup } from "../webinar-signup"

const webinars = {
  "personal-loan-101": { title: "Personal Loan 101", description: "Understand eligibility, interest rates, documentation, and responsible repayment before applying.", date: "January 15, 2025", time: "7:00 PM IST", speaker: "Ratnesh Choubey" },
  "credit-card-mastery": { title: "Credit Card Mastery", description: "Learn how to compare rewards, fees, utilization, and repayment habits so your card works for you.", date: "January 22, 2025", time: "7:00 PM IST", speaker: "Financial Expert" },
} as const

type WebinarId = keyof typeof webinars

export function generateStaticParams() {
  return Object.keys(webinars).map((id) => ({ id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const webinar = webinars[id as WebinarId]
  return webinar ? { title: `${webinar.title} | BuyNswipe Webinars`, description: webinar.description } : { title: "Webinar not found | BuyNswipe" }
}

export default async function WebinarDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const webinar = webinars[id as WebinarId]
  if (!webinar) notFound()

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-blue-700 to-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-3xl">
          <Link href="/webinars" className="text-sm font-semibold text-blue-200 hover:text-white">← All webinars</Link>
          <p className="mt-10 text-sm font-bold uppercase tracking-[0.2em] text-blue-200">Live financial education</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">{webinar.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">{webinar.description}</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-3xl gap-6 px-5 py-12 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6"><p className="text-xs font-bold uppercase tracking-widest text-slate-500">Session details</p><dl className="mt-5 space-y-4 text-slate-700"><div><dt className="text-xs text-slate-500">Date and time</dt><dd className="font-bold">{webinar.date} · {webinar.time}</dd></div><div><dt className="text-xs text-slate-500">Speaker</dt><dd className="font-bold">{webinar.speaker}</dd></div></dl></div>
        <div className="rounded-2xl bg-blue-600 p-6 text-white"><h2 className="text-xl font-black">Reserve your seat</h2><p className="mt-2 text-sm leading-6 text-blue-100">Subscribe for registration updates and future learning sessions.</p><div className="mt-5"><WebinarSignup /></div></div>
      </section>
    </main>
  )
}
