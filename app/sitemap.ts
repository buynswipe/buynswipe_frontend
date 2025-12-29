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

  const blogPages = [
    { url: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    // Credit Card Blog Posts
    { url: "/blog/what-is-credit-card", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/how-to-activate-credit-card", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/zero-percent-interest-credit-card", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/credit-card-advantages-disadvantages", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/credit-card-charges-and-fees", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/how-to-apply-credit-card", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/credit-card-eligibility-requirements", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/best-credit-cards-by-category", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/credit-card-vs-debit-card", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/how-to-increase-credit-card-limit", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/blog/credit-card-payment-methods", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/blog/credit-card-rewards-cashback", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/blog/how-to-use-credit-card-wisely", priority: 0.6, changeFrequency: "monthly" as const },
    // Loan Blog Posts
    { url: "/blog/personal-loan-complete-guide", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/how-to-apply-personal-loan", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/personal-loan-eligibility-criteria", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/types-of-personal-loans", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/business-loan-guide", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/home-loan-everything-you-need-to-know", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/education-loan-guide", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/credit-score-importance", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/blog/loan-vs-credit-card", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/blog/how-to-improve-credit-score-quickly", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/blog/auto-loan-guide", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/blog/two-wheeler-loan-guide", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/blog/loan-against-property-guide", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/blog/gold-loan-guide", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/blog/emi-calculator-guide", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/blog/loan-repayment-tips", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/blog/personal-finance-tips", priority: 0.6, changeFrequency: "monthly" as const },
  ]

  const toolPages = [
    { url: "/tools/emi-calculator", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/tools/affordability-calculator", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/tools/investment-roi-calculator", priority: 0.6, changeFrequency: "monthly" as const },
  ]

  const engagementPages = [
    { url: "/glossary", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/resources/free-credit-report-guide", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/resources/loan-application-checklist", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/resources/credit-card-comparison-guide", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/video/loan-application-tutorial", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/video/credit-card-benefits-explained", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/apply/quick-loan-assessment", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/mobile-app", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/webinars", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/webinars/personal-loan-101", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/webinars/credit-card-mastery", priority: 0.6, changeFrequency: "monthly" as const },
  ]

  const investorPages = [
    { url: "/investor-relations", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/investor-relations/financial-metrics", priority: 0.6, changeFrequency: "weekly" as const },
    { url: "/compliance/rbi-regulations", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/compliance/data-privacy", priority: 0.7, changeFrequency: "monthly" as const },
  ]

  const companyPages = [
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/faq", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/pricing", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/security-compliance", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/api-docs", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/support", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/testimonials", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/press", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/partnerships", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/integrations", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/privacy-policy", priority: 0.5, changeFrequency: "monthly" as const },
    { url: "/terms-of-service", priority: 0.5, changeFrequency: "monthly" as const },
    { url: "/cookie-policy", priority: 0.5, changeFrequency: "monthly" as const },
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
    ...blogPages.map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...toolPages.map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...engagementPages.map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...investorPages.map((page) => ({
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
