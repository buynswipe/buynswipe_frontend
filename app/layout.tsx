import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BuyNswipe Credit - Personal Loans, Credit Cards, BNPL | Compare 50+ Banks Online",
  description:
    "BuyNswipe Credit - India's AI-powered loan and credit card marketplace. Get instant personal loans, compare credit cards, BNPL options from 50+ banks. Instant eligibility check and quick approval in minutes.",
  keywords: [
    "personal loan online",
    "instant personal loan",
    "credit card application",
    "best credit cards",
    "BNPL",
    "compare loans",
    "low interest rates",
    "instant approval",
    "eligibility checker",
    "EMI calculator",
    "CIBIL score",
    "financial loans",
    "credit marketplace",
    "digital lending",
    "fintech platform",
  ],
  generator: "v0.app",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "BuyNswipe Credit - Instant Personal Loans & Credit Cards",
    description:
      "Compare and apply for personal loans, credit cards, and BNPL from India's top 50+ banks. Instant eligibility check and approval.",
    url: "https://buynswipe.com",
    siteName: "BuyNswipe Credit",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuyNswipe Credit - Personal Loans & Credit Cards",
    description:
      "Instant personal loans, credit cards & BNPL. Compare rates from 50+ banks and apply online with instant approval.",
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
      <body className={`font-sans antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
