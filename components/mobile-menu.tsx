"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { primaryNavigation } from "@/lib/site-navigation"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  return (
    <div ref={menuRef} className="relative lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        {isOpen ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
      </button>

      {isOpen ? (
        <div id="mobile-navigation" className="absolute right-0 top-full z-40 mt-2 w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-xl border bg-white shadow-xl">
          <nav aria-label="Mobile navigation" className="flex flex-col divide-y">
            {primaryNavigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="px-4 py-3 transition-colors hover:bg-gray-50 focus-visible:bg-gray-50 focus-visible:outline-none">
                {item.label}
              </Link>
            ))}
            <div className="px-4 py-3">
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link href="/credit/affiliate-credit-cards" onClick={() => setIsOpen(false)}>Explore credit offers</Link>
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  )
}
