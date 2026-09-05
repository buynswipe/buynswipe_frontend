import type { Metadata } from "next"
import Link from "next/link"
import {
  Building2,
  Factory,
  Store,
  Truck,
  Briefcase,
  TrendingUp,
  FileText,
  Shield,
  Clock,
  CheckCircle,
  IndianRupee,
  Users,
  ArrowRight,
  Phone,
  Mail,
  Percent,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Business Loan Online | MSME Loan | Startup Loan | Mudra Loan | Low Interest | BuyNswipe",
  description:
    "Apply for business loan online at lowest interest rate 11%. Get MSME loan up to ₹5 Crore, startup loan, Mudra loan, working capital loan. No collateral. Quick approval in 48 hours. Apply now on BuyNswipe.",
  keywords: [
    "business loan",
    "business loan online",
    "MSME loan",
    "startup loan",
    "Mudra loan",
    "working capital loan",
    "business loan without collateral",
    "business loan low interest",
    "business loan for new business",
    "small business loan",
    "SME loan",
    "business loan eligibility",
    "business loan ₹5 crore",
    "business loan instant approval",
    "MSME loan scheme",
    "government business loan",
    "business loan for women",
    "business loan without ITR",
    "term loan for business",
    "machinery loan",
    "equipment financing",
    "invoice financing",
    "business overdraft",
    "HDFC business loan",
    "SBI business loan",
  ],
  openGraph: {
    title: "Business Loan Online | MSME Loan ₹5 Crore | 11% Interest | BuyNswipe",
    description:
      "Get instant business loan for MSME, startup, working capital. Low interest rates, no collateral options. Apply now.",
    url: "https://buynswipe.com/credit/business-loan",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialProduct",
      name: "BuyNswipe Business Loan",
      description: "Business loan for MSME, startups, and SMEs. Loan amount from ₹1 Lakh to ₹5 Crore.",
      provider: {
        "@type": "FinancialService",
        name: "BuyNswipe",
        url: "https://buynswipe.com",
      },
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "100000",
        highPrice: "50000000",
        priceCurrency: "INR",
      },
      interestRate: {
        "@type": "QuantitativeValue",
        minValue: 11,
        maxValue: 24,
        unitText: "percent per annum",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the minimum turnover required for business loan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Minimum turnover requirements vary: Unsecured loans need ₹10-20 Lakh annual turnover. Mudra loans (up to ₹10 Lakh) have minimal turnover requirements. Higher loan amounts need ₹50 Lakh+ turnover.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get business loan without collateral?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, BuyNswipe offers unsecured business loans up to ₹50 Lakh without collateral for eligible businesses. Mudra loans up to ₹10 Lakh are also collateral-free under government scheme.",
          },
        },
        {
          "@type": "Question",
          name: "What is the interest rate for MSME loan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MSME loan interest rates start from 11% p.a. for secured loans and 14-18% for unsecured loans. Government subsidized schemes like CGTMSE can reduce effective rates further.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://buynswipe.com" },
        { "@type": "ListItem", position: 2, name: "Credit", item: "https://buynswipe.com/credit" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Business Loan",
          item: "https://buynswipe.com/credit/business-loan",
        },
      ],
    },
  ],
}

const loanTypes = [
  {
    icon: Store,
    title: "Mudra Loan (PMMY)",
    amount: "Up to ₹10 Lakh",
    rate: "12%",
    desc: "Government scheme for micro enterprises",
    features: ["Shishu: ₹50K", "Kishore: ₹5L", "Tarun: ₹10L"],
  },
  {
    icon: Building2,
    title: "MSME Business Loan",
    amount: "₹10L - ₹5 Crore",
    rate: "11%",
    desc: "For registered MSME enterprises",
    features: ["No collateral up to ₹50L", "CGTMSE coverage", "Flexible tenure"],
  },
  {
    icon: TrendingUp,
    title: "Working Capital Loan",
    amount: "₹5L - ₹2 Crore",
    rate: "13%",
    desc: "Fund daily business operations",
    features: ["Cash credit", "Overdraft", "Short-term loan"],
  },
  {
    icon: Factory,
    title: "Machinery & Equipment Loan",
    amount: "₹10L - ₹10 Crore",
    rate: "10.5%",
    desc: "Purchase or upgrade machinery",
    features: ["Up to 90% financing", "Tax benefits", "Long tenure"],
  },
  {
    icon: Briefcase,
    title: "Startup Loan",
    amount: "₹10L - ₹2 Crore",
    rate: "14%",
    desc: "For DPIIT registered startups",
    features: ["Startup India scheme", "Venture debt", "Revenue-based"],
  },
  {
    icon: Truck,
    title: "Invoice & Trade Finance",
    amount: "Up to ₹5 Crore",
    rate: "15%",
    desc: "Finance against invoices",
    features: ["Quick disbursal", "90% invoice value", "No collateral"],
  },
]

const lenders = [
  { name: "SBI", rate: "11.00%", amount: "₹5 Crore", type: "MSME Loan" },
  { name: "HDFC Bank", rate: "11.50%", amount: "₹3 Crore", type: "Business Loan" },
  { name: "ICICI Bank", rate: "12.00%", amount: "₹2 Crore", type: "Working Capital" },
  { name: "Bajaj Finserv", rate: "14.00%", amount: "₹50 Lakh", type: "Unsecured" },
  { name: "Tata Capital", rate: "13.00%", amount: "₹75 Lakh", type: "Term Loan" },
  { name: "Lendingkart", rate: "15.00%", amount: "₹2 Crore", type: "Quick Loan" },
]

const features = [
  { icon: Clock, title: "48 Hour Approval", desc: "Quick processing" },
  { icon: Shield, title: "No Collateral", desc: "Up to ₹50 Lakh" },
  { icon: Percent, title: "11% Interest", desc: "Lowest rates" },
  { icon: FileText, title: "Minimal Docs", desc: "Easy paperwork" },
  { icon: IndianRupee, title: "₹5 Crore Max", desc: "High loan limit" },
  { icon: Users, title: "20+ Lenders", desc: "Best options" },
]

export default function BusinessLoanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-yellow-400 text-yellow-900 mb-4">MSME & Startup Loans</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Business Loan Online
                <span className="block text-yellow-300 mt-2">₹1 Lakh to ₹5 Crore @ 11%</span>
              </h1>
              <p className="text-xl md:text-2xl text-emerald-100 mb-8">
                Get <strong>MSME loan</strong>, <strong>startup loan</strong>, <strong>Mudra loan</strong>, and{" "}
                <strong>working capital loan</strong> with quick approval. No collateral options available. Compare 20+
                lenders on BuyNswipe.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {["48 Hr Approval", "No Collateral", "Govt Schemes", "Flexible EMI"].map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 text-lg px-8">
                  Check Business Loan Eligibility
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg px-8 bg-transparent"
                >
                  Mudra Loan Apply
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 -mt-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {features.map((feature) => (
                <Card key={feature.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <feature.icon className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-500">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Loan Types */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Types of Business Loans Available</h2>
              <p className="text-xl text-gray-600">Choose the right funding for your business needs</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loanTypes.map((loan) => (
                <Card key={loan.title} className="hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-emerald-100 rounded-xl">
                        <loan.icon className="w-8 h-8 text-emerald-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{loan.title}</CardTitle>
                        <CardDescription>{loan.desc}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-sm text-gray-500">Amount</p>
                        <p className="font-bold text-emerald-600">{loan.amount}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">From</p>
                        <p className="font-bold text-green-600">{loan.rate} p.a.</p>
                      </div>
                    </div>
                    <div className="space-y-1 mb-4">
                      {loan.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-emerald-500" />
                          {f}
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Lenders Table */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Compare Business Loan Interest Rates 2024
              </h2>
              <p className="text-xl text-gray-600">Best rates from banks and NBFCs</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-emerald-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Lender</th>
                    <th className="px-6 py-4 text-left">Interest Rate</th>
                    <th className="px-6 py-4 text-left">Max Amount</th>
                    <th className="px-6 py-4 text-left">Loan Type</th>
                    <th className="px-6 py-4 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {lenders.map((lender, idx) => (
                    <tr key={lender.name} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-medium">{lender.name}</td>
                      <td className="px-6 py-4 text-green-600 font-bold">{lender.rate}</td>
                      <td className="px-6 py-4">{lender.amount}</td>
                      <td className="px-6 py-4">{lender.type}</td>
                      <td className="px-6 py-4">
                        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                          Apply
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-16 bg-emerald-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Business Loan Eligibility</h2>
                <div className="space-y-4">
                  {[
                    { label: "Business Age", value: "Minimum 1 year operational" },
                    { label: "Annual Turnover", value: "₹10 Lakh+ for unsecured" },
                    { label: "CIBIL Score", value: "650+ (Owner/Director)" },
                    { label: "Profitability", value: "At least 1 year profit" },
                    { label: "GST Registration", value: "Required for most loans" },
                    { label: "Business Type", value: "Proprietorship, Partnership, Pvt Ltd" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4 bg-white p-4 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-gray-900">{item.label}:</span>
                        <span className="text-gray-600 ml-2">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Documents Required</h2>
                <div className="space-y-4">
                  {[
                    "PAN Card of Business & Owner",
                    "GST Registration Certificate",
                    "Business Registration/Udyam",
                    "Last 2 years ITR with Computation",
                    "Last 12 months Bank Statements",
                    "Address Proof of Business",
                    "KYC of Directors/Partners",
                  ].map((doc) => (
                    <div key={doc} className="flex items-center gap-4 bg-white p-4 rounded-lg">
                      <FileText className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Business Loan FAQs</h2>

            <div className="space-y-4">
              {[
                {
                  q: "Can I get business loan without ITR?",
                  a: "Some lenders offer business loans based on GST returns and bank statements without ITR. Mudra loans up to ₹50,000 may not require ITR. However, larger loans typically need at least 1 year ITR.",
                },
                {
                  q: "What is Mudra loan eligibility?",
                  a: "Mudra loans are available for any Indian citizen with a business plan. No collateral required. Shishu (up to ₹50K), Kishore (₹50K-5L), Tarun (₹5L-10L). Business should be non-farm sector.",
                },
                {
                  q: "How much business loan can I get?",
                  a: "Loan amount depends on turnover, profitability, and collateral. Unsecured: up to ₹50 Lakh. Secured: up to ₹5 Crore or more. Typically 20-30% of annual turnover for unsecured loans.",
                },
                {
                  q: "What is the processing time for business loan?",
                  a: "Processing time varies: NBFCs/Fintechs: 48-72 hours. Banks: 7-15 days. Mudra loans: 7-10 days. Pre-approved customers may get faster processing.",
                },
              ].map((faq, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="text-lg text-emerald-900">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="apply" className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Grow Your Business with Right Funding</h2>
            <p className="text-xl text-emerald-100 mb-8">
              Check eligibility and get best loan offers for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 text-lg px-8">
                Apply for Business Loan
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                <Phone className="w-5 h-5 mr-2" /> Call +91 8171169007
              </Button>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Loan Guide 2024 - BuyNswipe</h2>
            <div className="prose prose-emerald max-w-none text-gray-600">
              <p>
                <strong>BuyNswipe Business Loan</strong> marketplace helps MSMEs, startups, and SMEs find the right{" "}
                <strong>business loan online</strong>. Compare <strong>MSME loan</strong>, <strong>Mudra loan</strong>,{" "}
                <strong>working capital loan</strong>, and <strong>startup loan</strong> from 20+ lenders at interest
                rates starting 11% p.a.
              </p>
              <p>
                Apply for <strong>business loan without collateral</strong> up to ₹50 Lakh. Get{" "}
                <strong>government business loan</strong> schemes like PMMY Mudra, <strong>CGTMSE covered loans</strong>
                , and <strong>Startup India funding</strong>. Our platform matches you with the best lender based on
                your business profile.
              </p>
              <p>
                Whether you need <strong>SBI business loan</strong>, <strong>HDFC business loan</strong>,{" "}
                <strong>machinery loan</strong>, or <strong>invoice financing</strong>, BuyNswipe provides instant
                eligibility check and quick approvals for your business funding needs.
              </p>
            </div>
          </div>
        </section>


      </div>
    </>
  )
}
