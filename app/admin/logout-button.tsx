"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"

export function LogoutButton() {
  const router = useRouter()
  const [busy, setBusy] = useState(false)
  async function logout() {
    setBusy(true)
    await createClient().auth.signOut()
    router.replace("/auth/login?next=/admin")
    router.refresh()
  }
  return <button type="button" onClick={logout} disabled={busy} className="mt-3 text-xs font-bold text-slate-400 underline-offset-4 hover:text-white hover:underline disabled:opacity-50">{busy ? "Signing out…" : "Sign out"}</button>
}
