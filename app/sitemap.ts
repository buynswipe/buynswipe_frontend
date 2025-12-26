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
    { url: "/credit/loan-for-students", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/credit/loan-for-self-employed", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/credit/government-schemes", priority: 0.7, changeFrequency: "weekly" as const },
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
    { url: "/credit/comparison/banks-offering-personal-loans", priority: 0.5, changeFrequency: "monthly" as const },
    { url: "/credit/comparison/best-credit-cards", priority: 0.5, changeFrequency: "monthly" as const },
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

  const paymentPages = [
    { url: "/payment-solutions", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/payment-solutions/pos-systems", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/payment-solutions/digital-payments", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/payment-solutions/merchant-services", priority: 0.7, changeFrequency: "weekly" as const },
  ]

  const solutionPages = [
    { url: "/solutions", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/solutions/restaurants", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/solutions/retail", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/solutions/ecommerce", priority: 0.7, changeFrequency: "weekly" as const },
  ]

  const caseStudyPages = [
    { url: "/case-studies", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/case-studies/restaurant-success-story", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/case-studies/retail-store-success", priority: 0.7, changeFrequency: "monthly" as const },
  ]

  const companyPages = [
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/faq", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/blog/personal-finance-tips", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/pricing", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/security-compliance", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/api-docs", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/support", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/testimonials", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/press", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/partnerships", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/integrations", priority: 0.6, changeFrequency: "monthly" as const },
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
    ...paymentPages.map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...solutionPages.map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...caseStudyPages.map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...companyPages.map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
  ]

  return allPages
}
