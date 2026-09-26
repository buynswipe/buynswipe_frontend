export const ADSENSE_PUBLISHER_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "ca-pub-7125756039287575"

export const adsenseConfig = {
  enabled: process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_ADSENSE_ENABLED !== "false",
  autoAds: process.env.NEXT_PUBLIC_ADSENSE_AUTO_ADS === "true",
  publisherId: ADSENSE_PUBLISHER_ID,
  allowedRoutePrefixes: ["/blog", "/resources", "/webinars", "/video", "/glossary", "/faq", "/case-studies"],
  excludedRoutePrefixes: ["/admin", "/auth", "/apply", "/account", "/dashboard", "/checkout", "/payment", "/onboarding", "/kyc", "/private", "/api"],
} as const

export function isAdsAllowed(pathname: string) {
  if (adsenseConfig.excludedRoutePrefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))) return false
  return adsenseConfig.allowedRoutePrefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))
}

declare global {
  interface Window {
    adsbygoogle?: unknown[]
  }
}
