"use client"

import { FormEvent, useState } from "react"
import { createBrowserClient } from "@supabase/ssr"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setLoading(true); setError("")
    const supabase = createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!)
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password })
    if (signInError) { setError("Invalid email or password"); setLoading(false); return }
    window.location.href = "/admin"
  }
  return <main className="flex min-h-screen items-center justify-center bg-slate-950 px-5"><form onSubmit={submit} className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl"><p className="text-xs font-black uppercase tracking-[0.22em] text-blue-600">BuyNswipe Portal Admin</p><h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950">Sign in to continue</h1><p className="mt-2 text-sm text-slate-500">Use your approved admin account.</p><label className="mt-8 block text-sm font-bold text-slate-700">Email<input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3" /></label><label className="mt-4 block text-sm font-bold text-slate-700">Password<input required type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3" /></label>{error && <p role="alert" className="mt-4 text-sm font-semibold text-red-600">{error}</p>}<button disabled={loading} className="mt-6 w-full rounded-xl bg-blue-600 px-4 py-3 font-bold text-white disabled:opacity-60">{loading ? "Signing in..." : "Sign in"}</button></form></main>
}
