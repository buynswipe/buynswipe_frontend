"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("[v0] Global application error", {
      message: error.message,
      digest: error.digest,
    })
  }, [error])

  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        <main className="grid min-h-screen place-items-center px-6 py-16">
          <section className="w-full max-w-lg text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">BuyNswipe</p>
            <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">We hit an unexpected error</h1>
            <p className="mt-4 text-base leading-7 text-slate-300">
              The application could not complete this request. Try again, or return home if the issue continues.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => reset()}
                className="rounded-xl bg-cyan-300 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                Try again
              </button>
              <Link
                href="/"
                className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-white transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                Return home
              </Link>
            </div>
          </section>
        </main>
      </body>
    </html>
  )
}
