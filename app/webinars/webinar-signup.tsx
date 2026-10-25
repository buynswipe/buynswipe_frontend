"use client"

import { FormEvent, useState } from "react"

export function WebinarSignup() {
  const [email, setEmail] = useState("")
  const [consent, setConsent] = useState(false)
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState("loading")
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "webinar", consent: consent ? "yes" : "" }),
      })
      if (!response.ok) throw new Error("Unable to subscribe")
      setEmail("")
      setState("success")
    } catch {
      setState("error")
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="mx-auto mb-4 flex max-w-md flex-col gap-2 sm:flex-row">
        <label htmlFor="webinar-email" className="sr-only">Email address</label>
        <input id="webinar-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email" className="min-w-0 flex-1 rounded-lg px-4 py-3 text-gray-900" required />
        <button type="submit" disabled={state === "loading"} className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 disabled:opacity-60">
          {state === "loading" ? "Saving..." : "Subscribe"}
        </button>
      </form>
      <label className="mx-auto mb-3 flex max-w-md items-start gap-2 text-left text-xs text-blue-100"><input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} required className="mt-0.5 size-4" /><span>I agree to receive webinar updates and have read the <a href="/privacy-policy" className="underline">privacy notice</a>.</span></label>
      <p role={state === "error" ? "alert" : "status"} aria-live="polite" className="text-sm text-blue-100">
        {state === "success" ? "You’re subscribed to webinar updates." : state === "error" ? "We couldn’t save your request. Please try again." : "We send updates only for new webinars, no spam."}
      </p>
    </>
  )
}
