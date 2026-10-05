import Link from "next/link"
import { Mail, Phone } from "lucide-react"

const primaryLinks = [
  { href: "/credit", label: "Products" },
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blog" },
  { href: "/solutions", label: "Solutions" },
  { href: "/contact", label: "Contact" },
]

const resourceLinks = [
  { href: "/credit", label: "Credit & Loans" },
  { href: "/shop", label: "Shop & Deals" },
  { href: "/tools/emi-calculator", label: "EMI Calculator" },
  { href: "/faq", label: "FAQs" },
]

export function SiteHeader({ current }: { current?: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold tracking-tight text-blue-600" aria-label="BuyNswipe home">
          BuyNswipe®
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
          {primaryLinks.map((link) => {
            const isCurrent = current === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isCurrent ? "page" : undefined}
                className={isCurrent ? "font-semibold text-blue-600" : "text-slate-700 transition-colors hover:text-blue-600"}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
        <Link
          href="/contact"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
        >
          Get in touch
        </Link>
      </div>
      <nav aria-label="Mobile navigation" className="flex gap-4 overflow-x-auto border-t border-slate-100 px-4 py-3 md:hidden">
        {primaryLinks.map((link) => (
          <Link key={link.href} href={link.href} className="shrink-0 text-sm font-medium text-slate-700 hover:text-blue-600">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="text-2xl font-bold text-white">BuyNswipe®</Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">Simple tools and practical guidance for better financial and business decisions.</p>
        </div>
        <div>
          <h2 className="font-semibold text-white">Explore</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {resourceLinks.map((link) => <li key={link.href}><Link href={link.href} className="hover:text-white">{link.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-white">Company</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link href="/about" className="hover:text-white">About us</Link></li>
            <li><Link href="/partnerships" className="hover:text-white">Partnerships</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-white">Terms of service</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li><a href="mailto:buynswipe@gmail.com" className="flex items-center gap-2 hover:text-white"><Mail className="size-4" aria-hidden="true" />buynswipe@gmail.com</a></li>
            <li><a href="tel:+918171169007" className="flex items-center gap-2 hover:text-white"><Phone className="size-4" aria-hidden="true" />+91 8171169007</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-5 text-center text-xs text-slate-500">© {new Date().getFullYear()} BuyNswipe® Technology Pvt. Ltd. All rights reserved.</div>
    </footer>
  )
}
