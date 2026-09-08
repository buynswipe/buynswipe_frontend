import type { Metadata } from "next"
import { validateAffiliateLinks } from "@/lib/affiliate-link-validation"
import { LinkReportClient } from "./report-client"

export const metadata: Metadata = {
  title: "Affiliate Link Report | BuyNswipe Credit",
  description: "Validation report for BuyNswipe partner finance offers.",
}

export const dynamic = "force-dynamic"

export default async function AffiliateLinkReportPage() {
  const report = await validateAffiliateLinks()
  return <LinkReportClient initialReport={report} />
}
