import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://buynswipe.com"

  const creditPages = [
    { url: "/credit", priority: 0.9, changeFrequency: "daily" as const },
    { url: "/credit/personal-loan", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/credit/business-loan", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/credit/credit-card", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/credit/home-loan", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/credit/bnpl", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/credit/gold-loan", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/credit/car-loan", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/credit/education-loan", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/credit/mudra-loan", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/credit/startup-loan", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/credit/cibil-score", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/credit/emi-calculator", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/credit/eligibility-checker", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/credit/instant-loan", priority: 0.6, changeFrequency: "weekly" as const },
    { url: "/credit/no-collateral-loan", priority: 0.6, changeFrequency: "weekly" as const },
    { url: "/credit/loan-against-property", priority: 0.6, changeFrequency: "weekly" as const },
    { url: "/credit/debt-consolidation", priority: 0.6, changeFrequency: "weekly" as const },
    { url: "/credit/loan-offers", priority: 0.6, changeFrequency: "weekly" as const },
    { url: "/credit/personal-loan-vs-credit-card", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/credit/bank-accounts", priority: 0.5, changeFrequency: "monthly" as const },
    { url: "/credit/money-transfer", priority: 0.5, changeFrequency: "monthly" as const },
    { url: "/credit/bill-payment", priority: 0.5, changeFrequency: "monthly" as const },
    { url: "/credit/balance-transfer", priority: 0.5, changeFrequency: "monthly" as const },
    { url: "/credit/aeps", priority: 0.5, changeFrequency: "monthly" as const },
    { url: "/credit/recharge", priority: 0.5, changeFrequency: "monthly" as const },
  ]

  const resourcePages = [
    { url: "/resources", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/resources/how-to-improve-credit-score", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/resources/guide-to-personal-loans", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/resources/credit-card-guide", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/resources/financial-planning-tips", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/resources/loan-repayment-strategies", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/resources/financial-literacy", priority: 0.6, changeFrequency: "monthly" as const },
  ]

  const allPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...creditPages.map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...resourcePages.map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
  ]

  return allPages
}
