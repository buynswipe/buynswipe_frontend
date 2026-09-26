"use client"

import { FormEvent, useState } from "react"

export function WebinarSignup() {
  const [email, setEmail] = useState("")
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState("loading")
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "webinar" }),
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
      <form onSubmit={handleSubmit} className="mx-auto mb-4 flex max-w-md gap-2">
        <label htmlFor="webinar-email" className="sr-only">Email address</label>
        <input id="webinar-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email" className="min-w-0 flex-1 rounded-lg px-4 py-3 text-gray-900" required />
        <button type="submit" disabled={state === "loading"} className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 disabled:opacity-60">
          {state === "loading" ? "Saving..." : "Subscribe"}
        </button>
      </form>
      <p aria-live="polite" className="text-sm text-blue-100">
        {state === "success" ? "You’re subscribed to webinar updates." : state === "error" ? "We couldn’t save your request. Please try again." : "We send updates only for new webinars, no spam."}
      </p>
    </>
  )
}
