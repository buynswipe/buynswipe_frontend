'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MobileMenu } from '@/components/mobile-menu'
import { Zap, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const navigationItems = [
  {
    label: 'Credit',
    href: '/credit',
    submenu: [
      { label: 'Personal Loan', href: '/credit/personal-loan' },
      { label: 'Credit Card', href: '/credit/credit-card' },
      { label: 'Business Loan', href: '/credit/business-loan' },
      { label: 'Home Loan', href: '/credit/home-loan' },
      { label: 'CIBIL Score', href: '/credit/cibil-score' },
      { label: 'Eligibility Checker', href: '/credit/eligibility-checker' },
    ],
  },
  {
    label: 'Solutions',
    href: '/payment-solutions',
    submenu: [
      { label: 'POS Systems', href: '/payment-solutions/pos-systems' },
      { label: 'Digital Payments', href: '/payment-solutions/digital-payments' },
      { label: 'Money Transfer', href: '/solutions/money-transfer' },
      { label: 'Bill Payment', href: '/solutions/bill-payment' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  {
    label: 'Tools',
    href: '/tools',
    submenu: [
      { label: 'EMI Calculator', href: '/tools/emi-calculator' },
      { label: 'Affordability Calculator', href: '/tools/affordability-calculator' },
      { label: 'Interest Rate Comparison', href: '/tools/interest-rate-comparison' },
      { label: 'Eligibility Checker', href: '/credit/eligibility-checker' },
    ],
  },
  { label: 'Resources', href: '/resources' },
]

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-blue-600 hover:text-blue-700 transition-colors flex-shrink-0"
            aria-label="BuyNswipe - Home"
          >
            <Zap className="w-6 h-6" />
            <span className="hidden sm:inline">BuyNswipe</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200 text-sm px-3 py-2 rounded-md flex items-center gap-1"
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 ml-auto">
            <Link
              href="/contact"
              className="hidden md:inline text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200 text-sm"
            >
              Contact
            </Link>
            <Link href="/apply/quick-loan-assessment" className="hidden sm:inline-block">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6">
                Apply Now
              </Button>
            </Link>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
