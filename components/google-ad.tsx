"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { ADSENSE_PUBLISHER_ID, adsenseConfig, isAdsAllowed } from "@/lib/adsense"

type GoogleAdProps = {
  slot?: string
  format?: "auto" | "fluid" | "rectangle"
  responsive?: boolean
  className?: string
}

export function GoogleAd({ slot, format = "auto", responsive = true, className = "" }: GoogleAdProps) {
  const pathname = usePathname()
  const adRef = useRef<HTMLModElement>(null)
  const allowed = pathname ? isAdsAllowed(pathname) : false

  useEffect(() => {
    if (!adsenseConfig.enabled || !allowed || !slot || !adRef.current || adRef.current.dataset.loaded === "true") return
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      adRef.current.dataset.loaded = "true"
    } catch {
      // AdSense failure must never affect the surrounding page.
    }
  }, [allowed, slot])

  if (!adsenseConfig.enabled || !allowed || !slot) return null

  return (
    <aside className={`adsense-container min-h-[90px] w-full overflow-hidden ${className}`} aria-label="Advertisement">
      <span className="mb-2 block text-center text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Advertisement</span>
      <ins
        ref={adRef}
        className="adsbygoogle block min-h-[60px] w-full"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_PUBLISHER_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </aside>
  )
}
