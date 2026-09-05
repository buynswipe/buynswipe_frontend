import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Best Banks Offering Personal Loans 2024 | Compare Interest Rates | BuyNswipe",
  description:
    "Compare personal loan interest rates from HDFC, ICICI, SBI, Axis, Kotak, IndusInd, Yes Bank, and IDBI. Get best personal loan rates starting 9.5%. Compare features, eligibility, and apply online.",
  keywords: [
    "banks offering personal loans",
    "best banks for personal loan",
    "HDFC personal loan",
    "ICICI personal loan",
    "SBI personal loan",
    "Axis Bank personal loan",
    "Kotak Bank personal loan",
    "personal loan interest rates comparison",
    "lowest personal loan rate",
    "personal loan EMI calculator",
  ],
  openGraph: {
    title: "Best Banks Offering Personal Loans 2024 | Compare Rates",
    description: "Compare personal loan rates from top 8 banks. Get lowest rates starting 9.5% p.a.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ComparisonChart",
  name: "Personal Loan Comparison - Banks in India",
  description: "Compare personal loan rates and features from major Indian banks",
  itemListElement: [
    {
      "@type": "Product",
      name: "HDFC Personal Loan",
      offers: { "@type": "Offer", price: "10.50", priceCurrency: "INR" },
    },
    {
      "@type": "Product",
      name: "ICICI Personal Loan",
      offers: { "@type": "Offer", price: "10.65", priceCurrency: "INR" },
    },
  ],
}

const banks = [
  {
    name: "HDFC Bank",
    rate: "9.5% - 12.5%",
    amount: "₹25K - ₹40 Lakh",
    tenure: "12-72 months",
    salary: "₹15,000/month",
    days: "3-5 days",
    processing: "0.5% - 2.5%",
    best: "Best overall rates and customer service",
  },
  {
    name: "ICICI Bank",
    rate: "10.65% - 13.5%",
    amount: "₹10K - ₹30 Lakh",
    tenure: "12-60 months",
    salary: "₹15,000/month",
    days: "2-3 days",
    processing: "0.5% - 2%",
    best: "Fastest disbursal",
  },
  {
    name: "SBI",
    rate: "11% - 14%",
    amount: "₹50K - ₹20 Lakh",
    tenure: "12-60 months",
    salary: "₹15,000/month",
    days: "4-7 days",
    processing: "0.5% - 1.5%",
    best: "Lowest processing fee",
  },
  {
    name: "Axis Bank",
    rate: "10.49% - 12.5%",
    amount: "₹15K - ₹25 Lakh",
    tenure: "12-72 months",
    salary: "₹12,000/month",
    days: "3-4 days",
    processing: "1% - 2%",
    best: "Flexible eligibility",
  },
  {
    name: "Kotak Bank",
    rate: "10.99% - 13.5%",
    amount: "₹25K - ₹35 Lakh",
    tenure: "12-72 months",
    salary: "₹15,000/month",
    days: "2-4 days",
    processing: "1% - 2.5%",
    best: "Quick approval process",
  },
  {
    name: "IndusInd Bank",
    rate: "11.49% - 15%",
    amount: "₹20K - ₹30 Lakh",
    tenure: "12-60 months",
    salary: "₹12,000/month",
    days: "3-5 days",
    processing: "0.5% - 2%",
    best: "Multiple disbursement options",
  },
  {
    name: "Yes Bank",
    rate: "11.25% - 14%",
    amount: "₹25K - ₹35 Lakh",
    tenure: "12-60 months",
    salary: "₹15,000/month",
    days: "2-3 days",
    processing: "1% - 2.5%",
    best: "Digital-first approach",
  },
  {
    name: "IDBI Bank",
    rate: "10.75% - 13.25%",
    amount: "₹10K - ₹25 Lakh",
    tenure: "12-72 months",
    salary: "₹12,000/month",
    days: "5-7 days",
    processing: "0.5% - 1.5%",
    best: "Competitive rates for salaried",
  },
]

export default function BanksPersonalLoanPage() {
  return (
    <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white border-b sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              BuyNswipe
            </Link>
            <Button asChild>
              <Link href="#compare">Compare Now</Link>
            </Button>
          </div>
        </header>

        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <Badge className="bg-yellow-400 text-yellow-900 mb-4">Updated 2024</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Best Banks Offering Personal Loans
              <span className="block text-yellow-300 mt-2">Compare Rates & Features</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Compare personal loan interest rates from 8 major banks. Find the best rates starting 9.5% p.a. with
              fastest disbursal.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section id="compare" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-4 py-4 text-left">Bank Name</th>
                    <th className="px-4 py-4 text-left">Interest Rate</th>
                    <th className="px-4 py-4 text-left">Loan Amount</th>
                    <th className="px-4 py-4 text-left">Tenure</th>
                    <th className="px-4 py-4 text-left">Processing Fee</th>
                    <th className="px-4 py-4 text-left">Disbursal Days</th>
                    <th className="px-4 py-4 text-left">Apply</th>
                  </tr>
                </thead>
                <tbody>
                  {banks.map((bank, idx) => (
                    <tr key={bank.name} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-4 font-semibold text-gray-900">{bank.name}</td>
                      <td className="px-4 py-4 text-green-600 font-bold">{bank.rate}</td>
                      <td className="px-4 py-4">{bank.amount}</td>
                      <td className="px-4 py-4">{bank.tenure}</td>
                      <td className="px-4 py-4">{bank.processing}</td>
                      <td className="px-4 py-4">{bank.days}</td>
                      <td className="px-4 py-4">
                        <Button size="sm">Apply</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Detailed Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Detailed Bank Comparison</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {banks.map((bank) => (
                <Card key={bank.name} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{bank.name}</h3>
                      <Badge className="bg-blue-100 text-blue-800">{bank.best}</Badge>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Interest Rate:</span>
                        <span className="font-bold text-green-600">{bank.rate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Loan Amount:</span>
                        <span className="font-bold">{bank.amount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tenure:</span>
                        <span className="font-bold">{bank.tenure}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Min Salary:</span>
                        <span className="font-bold">{bank.salary}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Processing Fee:</span>
                        <span className="font-bold">{bank.processing}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Disbursal Time:</span>
                        <span className="font-bold text-blue-600">{bank.days}</span>
                      </div>
                    </div>
                    <Button className="w-full">
                      Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">FAQs - Personal Loan Comparison</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Which bank offers the lowest personal loan interest rate?",
                  a: "HDFC Bank currently offers the lowest personal loan rates starting 9.5% p.a. for salaried individuals with good credit scores. However, rates vary based on CIBIL score and income.",
                },
                {
                  q: "Which bank disburses personal loan fastest?",
                  a: "ICICI Bank and Yes Bank offer the fastest disbursal with 2-3 days. Most banks process within 3-5 days for pre-approved customers.",
                },
              ].map((faq, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
