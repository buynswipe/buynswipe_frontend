import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { SiteStructuredData } from "@/components/site-structured-data"
import { adsenseConfig } from "@/lib/adsense"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.buynswipe.com"),
  title: "BuyNswipe® | Fintech and commerce technology",
  description:
    "BuyNswipe® is a fintech and commerce technology platform covering credit education, merchant solutions, shopping tools, and an acquisition opportunity.",
  keywords: [
    "fintech startup for sale",
    "buy fintech company India",
    "startup acquisition India",
    "digital payments",
    "merchant solutions",
    "fintech technology",
    "BuyNswipe®",
    "credit education",
    "shopping tools",
    "acquisition opportunity",
  ],
  generator: "v0.app",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "BuyNswipe® | Fintech and commerce technology",
    description:
      "Explore BuyNswipe® credit education, merchant solutions, shopping tools, and company information.",
    url: "https://www.buynswipe.com",
    siteName: "BuyNswipe®",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuyNswipe® - Fintech Startup Acquisition Opportunity",
    description:
      "Pre-funded, govt-recognized fintech SaaS startup for sale. 7+ years registered company with trademarked brand.",
    site: "@buynswipe",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "Finance",
  other: {
    "google-adsense-account": "ca-pub-7125756039287575",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${_geist.className} font-sans antialiased`}>
        <SiteStructuredData />
        {adsenseConfig.enabled ? <Script id="google-adsense" async strategy="afterInteractive" src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseConfig.publisherId}`} crossOrigin="anonymous" /> : null}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-slate-950 focus:px-4 focus:py-3 focus:text-white">Skip to main content</a>
        <div id="main-content">{children}</div>
        <Analytics />
      </body>
    </html>
  )
}
