'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Zap } from 'lucide-react'

const footerSections = [
  {
    title: 'Loan Products',
    links: [
      { label: 'Personal Loan', href: '/credit/personal-loan' },
      { label: 'Business Loan', href: '/credit/business-loan' },
      { label: 'Home Loan', href: '/credit/home-loan' },
      { label: 'Gold Loan', href: '/credit/gold-loan' },
      { label: 'Education Loan', href: '/credit/education-loan' },
    ],
  },
  {
    title: 'Credit Cards',
    links: [
      { label: 'Cashback Cards', href: '/credit/credit-card#cashback' },
      { label: 'Travel Cards', href: '/credit/credit-card#travel' },
      { label: 'Lifetime Free Cards', href: '/credit/credit-card#lifetime-free' },
      { label: 'Student Cards', href: '/credit/credit-card#student' },
      { label: 'Business Cards', href: '/credit/credit-card#business' },
    ],
  },
  {
    title: 'Tools & Resources',
    links: [
      { label: 'EMI Calculator', href: '/tools/emi-calculator' },
      { label: 'Eligibility Checker', href: '/credit/eligibility-checker' },
      { label: 'CIBIL Score Check', href: '/credit/cibil-score' },
      { label: 'Interest Rate Comparison', href: '/tools/interest-rate-comparison' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Support', href: '/support' },
      { label: 'Apply Now', href: '/apply/quick-loan-assessment' },
    ],
  },
]

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/buynswipe' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/buynswipe' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/buynswipe' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/buynswipe' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
]

const supportLinks = [
  { label: 'Customer Support', href: '/support' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
]

const complianceLinks = [
  { label: 'RBI Regulations', href: '/compliance/rbi-regulations' },
  { label: 'Data Privacy', href: '/compliance/data-privacy' },
  { label: 'Security', href: '/security-compliance' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section - Brand & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-white hover:text-blue-400 transition-colors mb-4">
              <Zap className="w-6 h-6" />
              BuyNswipe
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              India's trusted AI-powered marketplace for instant personal loans, business loans, credit cards, and financial tools. Compare 50+ banks and get approved in minutes.
            </p>
            <div className="flex gap-3" aria-label="Social media links">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Footer Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">{section.title}</h4>
              <ul className="space-y-3" role="list">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Get In Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="mailto:support@buynswipe.com"
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 group"
            >
              <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span className="text-sm group-hover:underline">support@buynswipe.com</span>
            </a>
            <a
              href="tel:+918171169007"
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 group"
            >
              <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span className="text-sm group-hover:underline">+91 8171169007</span>
            </a>
            <div className="flex items-center gap-3 text-gray-400">
              <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span className="text-sm">Delhi, India</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer Sections */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h5 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Legal</h5>
              <ul className="space-y-2" role="list">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Support</h5>
              <ul className="space-y-2" role="list">
                {supportLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Compliance</h5>
              <ul className="space-y-2" role="list">
                {complianceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright & Compliance Info */}
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-sm text-gray-400 mb-2">
              &copy; {currentYear} BuyNswipe Technology Pvt. Ltd. All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              DPIIT Recognized Startup | RBI Compliant | ISO 27001 Certified | CIN: U72900UP2017PTC096789
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
