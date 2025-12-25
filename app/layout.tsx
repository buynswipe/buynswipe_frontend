import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BuyNswipe - Pre-Funded Fintech Startup for Sale | DPIIT Recognized | Acquisition Opportunity",
  description:
    "BuyNswipe Technology Pvt. Ltd. - Government recognized fintech SaaS startup for sale. Registered since 2017, trademarked brand, premium domains, ₹17L seed funded. Ideal for fintech entrepreneurs and strategic acquirers. POS integration ready, co-branded cards potential.",
  keywords: [
    "fintech startup for sale",
    "buy fintech company India",
    "startup acquisition India",
    "DPIIT startup for sale",
    "digital payment startup",
    "POS company acquisition",
    "fintech SaaS acquisition",
    "BuyNswipe",
    "payment gateway startup",
    "Startup India company for sale",
    "registered fintech company",
    "trademarked fintech brand",
    "instant loan app",
    "credit card marketplace",
    "BNPL platform",
  ],
  generator: "v0.app",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "BuyNswipe - Pre-Funded Fintech Startup for Sale",
    description:
      "Govt-recognized fintech startup with 7+ years history, trademarked brand, premium domains. ₹17L seed funded. Ready for acquisition.",
    url: "https://buynswipe.com",
    siteName: "BuyNswipe",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuyNswipe - Fintech Startup Acquisition Opportunity",
    description:
      "Pre-funded, govt-recognized fintech SaaS startup for sale. 7+ years registered company with trademarked brand.",
    site: "@buynswipe",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "Finance",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
