"use client"

import { ArrowRight, CheckCircle2, Rocket, TrendingUp, Zap } from "lucide-react"

export default function StartupLoanClientPage() {
  const loanTypes = [
    {
      name: "Mudra Loan - Shishu",
      amount: "Up to ₹50,000",
      rate: "0-2% subsidy",
      tenure: "3-5 years",
      features: ["Zero collateral", "Government guarantee", "For micro businesses"],
    },
    {
      name: "Mudra Loan - Kishore",
      amount: "₹50,001 - ₹5 Lakh",
      rate: "0-2% subsidy",
      tenure: "3-5 years",
      features: ["Low collateral", "Government backed", "For growing startups"],
    },
    {
      name: "Mudra Loan - Tarun",
      amount: "₹5 Lakh - ₹10 Lakh",
      rate: "Regular rates + subsidy",
      tenure: "3-7 years",
      features: ["Minimal collateral", "For established startups", "Expansion ready"],
    },
    {
      name: "CGTMSE Guarantee",
      amount: "Up to ₹1 Crore",
      rate: "8-12% p.a.",
      tenure: "3-10 years",
      features: ["Government guarantee", "Collateral-free", "Working capital + fixed asset"],
    },
  ]

  const faqs = [
    {
      question: "What is Mudra Loan for startups?",
      answer:
        "Pradhan Mantri Mudra Yojana (PMMY) is a government scheme offering loans to entrepreneurs without collateral. It covers micro, small, and medium businesses with amounts up to ₹10 Lakh.",
    },
    {
      question: "Can I get startup loan without business plan?",
      answer:
        "Most lenders require a basic business plan or project report. However, Mudra loans are more flexible and may not require detailed documentation for smaller amounts.",
    },
    {
      question: "What is the interest rate for startup loans?",
      answer:
        "Mudra Loans: 0-2% subsidy available. Other startup loans: 8-12% p.a. depending on credit profile and collateral. CGTMSE guaranteed loans offer competitive rates with government guarantee.",
    },
    {
      question: "How long does startup loan approval take?",
      answer:
        "Mudra loans: 3-7 days. CGTMSE loans: 10-15 days. Private sector startups: 2-4 weeks. Online applications are processed faster.",
    },
    {
      question: "Can I get startup loan with bad CIBIL score?",
      answer:
        "Yes, Mudra loans don't require CIBIL score. CGTMSE and private lenders may approve with scores 600+. Government guarantee compensates for lower scores.",
    },
  ]

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance flex items-center gap-3">
            <Rocket className="w-10 h-10" />
            Startup Loans - Fuel Your Business Growth
          </h1>
          <p className="text-xl text-emerald-100 mb-8">
            Mudra loans, CGTMSE guarantee, government schemes • Zero to minimal collateral • Instant approval
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-emerald-600 font-semibold px-8 py-3 rounded-lg hover:bg-emerald-50 transition">
              Apply Now
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition">
              Explore Schemes
            </button>
          </div>
        </div>
      </section>

      {/* Loan Types Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Startup Loan Options</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {loanTypes.map((loan, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-emerald-300 transition"
              >
                <h3 className="text-xl font-bold mb-4 text-emerald-700">{loan.name}</h3>
                <div className="space-y-2 mb-6 text-sm">
                  <p>
                    <strong>Amount:</strong> {loan.amount}
                  </p>
                  <p>
                    <strong>Rate:</strong> {loan.rate}
                  </p>
                  <p>
                    <strong>Tenure:</strong> {loan.tenure}
                  </p>
                </div>
                <ul className="space-y-2">
                  {loan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Simple 4-Step Application Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Register", desc: "Create account and enter basic details" },
              { step: 2, title: "Submit Documents", desc: "Upload business plan and KYC docs" },
              { step: 3, title: "Get Approval", desc: "Receive approval within 3-7 days" },
              { step: 4, title: "Receive Funds", desc: "Funds disbursed to your account" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Startup Loan Eligibility</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6 text-emerald-600" />
                Basic Requirements
              </h3>
              <ul className="space-y-3">
                {[
                  "Age: 18-65 years",
                  "Indian citizen/registered entity",
                  "Minimum education: 8th pass",
                  "Business/MSME registered",
                  "Valid bank account",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
                For CGTMSE Guarantee
              </h3>
              <ul className="space-y-3">
                {[
                  "Micro/small/medium enterprise",
                  "Manufacturing/service sector",
                  "Loan limit up to ₹1 Crore",
                  "CIBIL score 600+",
                  "Business plan/project report",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Startup Loan FAQs</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-200 cursor-pointer group">
                <summary className="font-bold text-lg flex items-center justify-between">
                  {faq.question}
                  <ArrowRight className="w-5 h-5 transform group-open:rotate-90 transition" />
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Launch Your Startup Today</h2>
          <p className="text-xl text-emerald-100 mb-8">Government-backed financing with minimal barriers</p>
          <button className="bg-white text-emerald-600 font-bold px-8 py-3 rounded-lg hover:bg-emerald-50 transition inline-flex items-center gap-2">
            Apply for Startup Loan <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6">About Startup Loans in India</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            A <strong>startup loan</strong> is specialized financing designed to help entrepreneurs launch and grow new
            businesses. The <strong>Pradhan Mantri Mudra Yojana (PMMY)</strong> offers{" "}
            <strong>government-backed startup loans</strong> with zero collateral.{" "}
            <strong>Mudra loans for startups</strong> come in three categories: Shishu (up to ₹50,000), Kishore (₹50,001
            - ₹5 Lakh), and Tarun (₹5 Lakh - ₹10 Lakh).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Get <strong>startup financing without collateral</strong> through CGTMSE guarantee scheme offering up to ₹1
            Crore. The <strong>Credit Guarantee Trustee Scheme for MSMEs</strong> provides government guarantee, making
            it easier for startups to secure funding. <strong>Startup loan interest rates</strong> range from 0-2%
            subsidy on Mudra loans to 8-12% p.a. on conventional startup loans.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Apply for <strong>startup loan online</strong> with BuyNswipe and compare rates from multiple lenders. Get{" "}
            <strong>instant startup loan approval</strong> within 3-7 days with minimal documentation. Whether you need
            a <strong>business loan for new venture</strong> or <strong>expansion capital</strong>, our platform helps
            connect you with the right funding options.
          </p>
        </div>
      </section>
    </main>
  )
}
