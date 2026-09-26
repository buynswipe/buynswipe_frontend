"use client"

import { useEffect } from "react"

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("[v0] Global route error", { message: error.message, digest: error.digest })
  }, [error])

  return <main className="grid min-h-screen place-items-center bg-slate-50 px-6 text-slate-950"><div className="max-w-lg text-center"><p className="text-sm font-bold uppercase tracking-widest text-cyan-700">Something went wrong</p><h1 className="mt-3 text-3xl font-black">This page could not load</h1><p className="mt-4 text-slate-600">Please try again. If the problem continues, contact support with the page URL.</p><button type="button" onClick={() => reset()} className="mt-7 rounded-xl bg-slate-950 px-5 py-3 font-bold text-white hover:bg-slate-800">Try again</button></div></main>
}
