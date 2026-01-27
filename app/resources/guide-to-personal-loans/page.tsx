import type { Metadata } from "next"
import { CheckCircle, AlertCircle, FileCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Complete Guide to Personal Loans - Everything You Need to Know | BuyNswipe",
  description:
    "Comprehensive guide to personal loans. Learn about types, eligibility, interest rates, documents, and how to apply for personal loans online.",
  keywords: [
    "personal loan guide",
    "personal loan eligibility",
    "personal loan documents",
    "personal loan interest rates",
    "personal loan application",
    "personal loan pros and cons",
    "instant personal loan",
    "personal loan tips",
  ],
  openGraph: {
    title: "Complete Guide to Personal Loans - Everything You Need to Know",
    description: "Learn everything about personal loans, eligibility, documents, and how to apply.",
    url: "https://buynswipe.com/resources/guide-to-personal-loans",
  },
}

export default function PersonalLoanGuidePage() {
  const sections = [
    {
      title: "What is a Personal Loan?",
      content:
        "An unsecured loan provided by banks and financial institutions. No collateral required. Funds can be used for any personal purpose like medical emergencies, education, travel, or debt consolidation.",
    },
    {
      title: "Types of Personal Loans",
      content:
        "Instant personal loans (24-48 hour approval), traditional personal loans (5-7 day approval), salary-based loans, and gig worker loans. Each has different eligibility and documentation requirements.",
    },
  ]

  const eligibility = [
    { item: "Age", value: "21-60 years" },
    { item: "Income", value: "₹15,000+ monthly" },
    { item: "CIBIL Score", value: "650+ (some offer from 600)" },
    { item: "Employment", value: "Employed for 1+ year" },
    { item: "Credit History", value: "2+ years recommended" },
  ]

  const documents = [
    "PAN Card / Aadhar Card",
    "Proof of Address (Utility Bill, Rental Agreement)",
    "Proof of Income (Salary slip, ITR)",
    "Bank Statements (6-12 months)",
    "Employment Verification",
  ]

  const pros = [
    "No collateral required",
    "Quick disbursal (24-48 hours)",
    "Flexible usage",
    "Fixed interest rate",
    "Simple application",
  ]

  const cons = [
    "Higher interest rate than secured loans",
    "Credit score dependent",
    "Processing fee (0.5-1%)",
    "Prepayment penalties",
    "Income verification required",
  ]

  const steps = [
    { step: 1, title: "Check Eligibility", desc: "Verify salary, credit score, and employment status" },
    { step: 2, title: "Compare Offers", desc: "Check rates from multiple lenders" },
    { step: 3, title: "Submit Application", desc: "Fill online form with basic details" },
    { step: 4, title: "Document Verification", desc: "Submit required documents" },
    { step: 5, title: "Loan Approval", desc: "Get approval within 24-48 hours" },
    { step: 6, title: "Fund Disbursal", desc: "Money credited to your account" },
  ]

  const faqs = [
    {
      q: "Can I get personal loan with low credit score?",
      a: "Yes, some lenders offer loans for scores 600+. Higher rates apply. Co-signer may be required.",
    },
    {
      q: "How much can I borrow?",
      a: "Typically ₹1,000 to ₹40,00,000 based on income and credit profile.",
    },
    {
      q: "What is the processing time?",
      a: "24-48 hours for instant loans, 5-7 days for traditional loans.",
    },
    {
      q: "Can I repay loan early?",
      a: "Yes, most loans allow prepayment. Check for prepayment charges.",
    },
    {
      q: "Is personal loan safe?",
      a: "Yes, regulated by RBI. Check lender's license and security measures.",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Complete Guide to Personal Loans</h1>
          <p className="text-xl text-blue-100">
            Everything you need to know about personal loans, eligibility, and application
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {sections.map((sec, idx) => (
            <Card key={idx}>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">{sec.title}</h2>
                <p className="text-gray-700 text-lg">{sec.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Eligibility Criteria</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {eligibility.map((e, idx) => (
              <Card key={idx}>
                <CardContent className="p-6 flex gap-4">
                  <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">{e.item}</h3>
                    <p className="text-gray-600">{e.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Required Documents</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {documents.map((doc, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <FileCheck className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pros vs Cons */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Pros & Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-4 text-green-600">Advantages</h3>
              <div className="space-y-3">
                {pros.map((p, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-red-600">Disadvantages</h3>
              <div className="space-y-3">
                {cons.map((c, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">6-Step Application Process</h2>
          <div className="space-y-4">
            {steps.map((s) => (
              <Card key={s.step}>
                <CardContent className="p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">
                    {s.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{s.title}</h3>
                    <p className="text-gray-600">{s.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="bg-white p-4 rounded-lg cursor-pointer hover:bg-gray-50">
                <summary className="font-semibold flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">
                    +
                  </span>
                  {faq.q}
                </summary>
                <p className="mt-4 ml-8 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Personal Loan?</h2>
          <p className="text-lg mb-8">Check eligibility and apply for instant approval in minutes</p>
          <Button className="bg-white text-blue-600 hover:bg-blue-50">Apply Now</Button>
        </div>
      </section>
    </main>
  )
}
