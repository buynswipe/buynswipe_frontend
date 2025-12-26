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
    { label: "Solutions", href: "/solutions" },
    { label: "Resources", href: "/resources" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b shadow-lg z-40">
          <nav className="flex flex-col divide-y">
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
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Now</Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
