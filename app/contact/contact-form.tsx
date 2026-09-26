"use client"

import { FormEvent, useState } from "react"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("submitting")
    const form = event.currentTarget
    const values = Object.fromEntries(new FormData(form).entries())
    const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) })
    setStatus(response.ok ? "success" : "error")
    if (response.ok) form.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div><label htmlFor="contact-name" className="block text-sm font-semibold mb-2">Full Name</label><input id="contact-name" name="name" required minLength={2} maxLength={120} className="w-full border border-gray-300 rounded-lg p-2" placeholder="Your name" /></div>
      <div><label htmlFor="contact-email" className="block text-sm font-semibold mb-2">Email</label><input id="contact-email" name="email" type="email" required className="w-full border border-gray-300 rounded-lg p-2" placeholder="your@email.com" /></div>
      <div><label htmlFor="contact-phone" className="block text-sm font-semibold mb-2">Phone (optional)</label><input id="contact-phone" name="phone" type="tel" className="w-full border border-gray-300 rounded-lg p-2" placeholder="+91" /></div>
      <div><label htmlFor="contact-subject" className="block text-sm font-semibold mb-2">Inquiry Type</label><select id="contact-subject" name="subject" className="w-full border border-gray-300 rounded-lg p-2"><option>Acquisition Inquiry</option><option>Partnership</option><option>Customer Support</option><option>General Question</option></select></div>
      <div><label htmlFor="contact-message" className="block text-sm font-semibold mb-2">Message</label><textarea id="contact-message" name="message" required minLength={10} maxLength={5000} className="w-full border border-gray-300 rounded-lg p-2 h-32" placeholder="Your message here..." /></div>
      <Button type="submit" disabled={status === "submitting"} className="w-full bg-blue-600 hover:bg-blue-700">{status === "submitting" ? "Sending…" : "Send Message"}</Button>
      {status === "success" && <p role="status" className="text-sm text-green-700">Thanks — your message was submitted successfully.</p>}
      {status === "error" && <p role="alert" className="text-sm text-red-700">We could not submit your message. Please try again.</p>}
    </form>
  )
}
