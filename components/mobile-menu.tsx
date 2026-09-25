"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Credit", href: "/credit" },
    { label: "Payment Solutions", href: "/payment-solutions" },
    { label: "BuyNswipe® Go", href: "/go" },
    { label: "Solutions", href: "/solutions" },
    { label: "Resources", href: "/resources" },
    { label: "Blog", href: "/blog" },
    { label: "Search", href: "/search" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div id="mobile-navigation" className="absolute left-0 right-0 top-full z-40 border-b bg-white shadow-lg">
          <nav aria-label="Mobile navigation" className="flex flex-col divide-y">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 hover:bg-gray-50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 py-3">
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700"><Link href="/credit/affiliate-credit-cards">Explore credit offers</Link></Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
