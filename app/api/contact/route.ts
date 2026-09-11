import { NextResponse } from "next/server"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const name = typeof body.name === "string" ? body.name.trim() : ""
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : ""
    const subject = typeof body.subject === "string" ? body.subject.trim() : ""
    const message = typeof body.message === "string" ? body.message.trim() : ""
    const phone = typeof body.phone === "string" ? body.phone.trim() : null

    if (name.length < 2 || name.length > 120 || !emailPattern.test(email) || message.length < 10 || message.length > 5000) {
      return NextResponse.json({ error: "Please check your details and try again." }, { status: 400 })
    }

    const response = await fetch(`${process.env.SUPABASE_URL}/rest/v1/contact_submissions`, {
      method: "POST",
      headers: {
        apikey: process.env.SUPABASE_PUBLISHABLE_KEY ?? process.env.SUPABASE_ANON_KEY ?? "",
        Authorization: `Bearer ${process.env.SUPABASE_PUBLISHABLE_KEY ?? process.env.SUPABASE_ANON_KEY ?? ""}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ name, email, phone, subject, message, source: "contact", status: "new" }),
      signal: AbortSignal.timeout(8000),
    })

    if (!response.ok) {
      return NextResponse.json({ error: "We could not submit your message. Please try again." }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "We could not submit your message. Please try again." }, { status: 500 })
  }
}
