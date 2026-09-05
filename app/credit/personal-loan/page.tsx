import type { Metadata } from "next"
import Link from "next/link"
import {
  CheckCircle,
  Clock,
  Percent,
  FileText,
  Shield,
  Zap,
  Users,
  Building,
  Briefcase,
  GraduationCap,
  Heart,
  Home,
  Car,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Instant Personal Loan Online | Get ₹50,000 to ₹40 Lakh | Low Interest Rate 10.49% | BuyNswipe",
  description:
    "Apply for instant personal loan online at lowest interest rate starting 10.49%. Get personal loan up to ₹40 lakh with minimal documentation. Instant approval in 2 minutes. No collateral required. Check eligibility & apply now on BuyNswipe.",
  keywords: [
    "personal loan",
    "instant personal loan",
    "personal loan online",
    "personal loan apply online",
    "personal loan low interest rate",
    "personal loan without documents",
    "personal loan instant approval",
    "personal loan for salaried",
    "personal loan for self employed",
    "personal loan eligibility",
    "personal loan EMI calculator",
    "personal loan 10.49 interest",
    "personal loan same day disbursal",
    "personal loan without CIBIL",
    "personal loan minimum salary",
    "personal loan ₹50000",
    "personal loan ₹1 lakh",
    "personal loan ₹5 lakh",
    "personal loan ₹10 lakh",
    "personal loan ₹40 lakh",
    "HDFC personal loan",
    "ICICI personal loan",
    "SBI personal loan",
    "Bajaj Finance personal loan",
    "Tata Capital personal loan",
  ],
  openGraph: {
    title: "Instant Personal Loan Online | ₹50K to ₹40 Lakh | 10.49% Interest | BuyNswipe",
    description:
      "Get instant personal loan with lowest interest rate. Apply online, instant approval, same day disbursal. Compare 30+ lenders on BuyNswipe.",
    url: "https://buynswipe.com/credit/personal-loan",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialProduct",
      name: "BuyNswipe Personal Loan",
      description:
        "Instant personal loan online with low interest rates starting 10.49%. Loan amount from ₹50,000 to ₹40 lakh.",
      provider: {
        "@type": "FinancialService",
        name: "BuyNswipe",
        url: "https://buynswipe.com",
      },
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "50000",
        highPrice: "4000000",
        priceCurrency: "INR",
      },
      interestRate: {
        "@type": "QuantitativeValue",
        minValue: 10.49,
        maxValue: 24,
        unitText: "percent per annum",
      },
      annualPercentageRate: 10.49,
      feesAndCommissionsSpecification: "Processing fee 0.5% to 3%",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the minimum salary required for personal loan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The minimum salary requirement varies by lender. Most banks require ₹15,000-₹25,000 monthly salary for salaried individuals. Some NBFCs offer personal loans with ₹12,000 minimum salary.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get a personal loan with low CIBIL score?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, some lenders on BuyNswipe offer personal loans for CIBIL scores as low as 600. However, interest rates may be higher. A CIBIL score of 750+ gets the best rates.",
          },
        },
        {
          "@type": "Question",
          name: "How fast can I get personal loan disbursal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "With BuyNswipe partner lenders, you can get instant approval in 2 minutes and same-day disbursal within 4 hours for pre-approved customers. New customers typically receive funds within 24-48 hours.",
          },
        },
        {
          "@type": "Question",
          name: "What documents are required for personal loan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Basic documents include PAN card, Aadhaar card, salary slips (last 3 months), bank statements (last 6 months), and address proof. Some digital lenders offer paperless personal loans with just PAN and Aadhaar.",
          },
        },
        {
          "@type": "Question",
          name: "What is the maximum personal loan amount I can get?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Personal loan amounts range from ₹50,000 to ₹40 lakh depending on your income, credit score, and lender. Typically, you can get up to 20-24 times your monthly salary as loan amount.",
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
          name: "Personal Loan",
          item: "https://buynswipe.com/credit/personal-loan",
        },
      ],
    },
  ],
}

const loanTypes = [
  {
    icon: Briefcase,
    title: "Salaried Personal Loan",
    amount: "₹50K - ₹40 Lakh",
    rate: "10.49%",
    desc: "For salaried employees with minimum ₹15,000 salary",
  },
  {
    icon: Building,
    title: "Self-Employed Loan",
    amount: "₹1L - ₹25 Lakh",
    rate: "12%",
    desc: "For business owners and professionals",
  },
  {
    icon: GraduationCap,
    title: "Education Loan",
    amount: "₹50K - ₹50 Lakh",
    rate: "8.5%",
    desc: "For higher education in India and abroad",
  },
  {
    icon: Heart,
    title: "Medical Emergency Loan",
    amount: "₹25K - ₹10 Lakh",
    rate: "11%",
    desc: "Instant funds for medical emergencies",
  },
  {
    icon: Home,
    title: "Home Renovation Loan",
    amount: "₹1L - ₹20 Lakh",
    rate: "11.5%",
    desc: "For home improvement and renovation",
  },
  {
    icon: Car,
    title: "Travel & Vacation Loan",
    amount: "₹25K - ₹5 Lakh",
    rate: "12%",
    desc: "Fund your dream vacation",
  },
]

const lenders = [
  { name: "HDFC Bank", rate: "10.50%", amount: "₹40 Lakh", tenure: "60 months" },
  { name: "ICICI Bank", rate: "10.65%", amount: "₹30 Lakh", tenure: "72 months" },
  { name: "SBI", rate: "11.00%", amount: "₹20 Lakh", tenure: "60 months" },
  { name: "Bajaj Finserv", rate: "11.00%", amount: "₹35 Lakh", tenure: "84 months" },
  { name: "Tata Capital", rate: "10.99%", amount: "₹25 Lakh", tenure: "72 months" },
  { name: "Axis Bank", rate: "10.49%", amount: "₹15 Lakh", tenure: "60 months" },
]

const features = [
  { icon: Zap, title: "Instant Approval", desc: "Get approved in 2 minutes" },
  { icon: Clock, title: "Same Day Disbursal", desc: "Funds in 4 hours" },
  { icon: FileText, title: "Minimal Documents", desc: "Just PAN & Aadhaar" },
  { icon: Shield, title: "No Collateral", desc: "100% unsecured loan" },
  { icon: Percent, title: "Low Interest", desc: "Starting 10.49% p.a." },
  { icon: Users, title: "30+ Lenders", desc: "Compare & choose best" },
]

export default function PersonalLoanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Header */}
        <header className="bg-white border-b sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              BuyNswipe
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/credit" className="text-gray-600 hover:text-blue-600">
                All Products
              </Link>
              <Link href="/credit/personal-loan" className="text-blue-600 font-medium">
                Personal Loan
              </Link>
              <Link href="/credit/emi-calculator" className="text-gray-600 hover:text-blue-600">
                EMI Calculator
              </Link>
              <Link href="/credit/cibil-score" className="text-gray-600 hover:text-blue-600">
                CIBIL Score
              </Link>
            </nav>
            <Button asChild>
              <Link href="#apply">Apply Now</Link>
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-yellow-400 text-yellow-900 mb-4">Lowest Interest Rate Guaranteed</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Instant Personal Loan Online
                <span className="block text-yellow-300 mt-2">Starting @ 10.49% p.a.</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Get <strong>₹50,000 to ₹40 Lakh</strong> personal loan with instant approval. No collateral required.
                Same day disbursal. Compare 30+ lenders on BuyNswipe.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {["2 Min Approval", "0% Processing Fee*", "Flexible EMI", "No Hidden Charges"].map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 text-lg px-8">
                  Check Eligibility Free
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg px-8 bg-transparent"
                >
                  Calculate EMI
                </Button>
              </div>

              <p className="text-sm text-blue-200 mt-6">Trusted by 5 Lakh+ customers | 4.7 Rating on Google</p>
            </div>
          </div>
        </section>

        {/* Featured Affiliate Loans Section */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Top Rated Affiliate Personal Loans</h2>
              <p className="text-xl text-gray-600">Exclusive offers from our trusted lending partners</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "HDFC Instant Loan",
                  amount: "₹15 Lakh",
                  rate: "10.88%",
                  benefits: ["Instant Disbursal", "100% Digital", "Pre-approved"],
                  link: "https://bitli.in/1PSoadc",
                },
                {
                  name: "Bajaj Finserv Personal Loan",
                  amount: "₹55 Lakh",
                  rate: "11%",
                  benefits: ["High Loan Amount", "Flexible Tenure", "Quick Approval"],
                  link: "https://bitli.in/l2EMs89",
                },
                {
                  name: "Axis Bank Personal Loan",
                  amount: "₹40 Lakh",
                  rate: "9.99%",
                  benefits: ["Lowest Rates", "Quick Disbursal", "Balance Transfer"],
                  link: "https://bitli.in/WYqqsOe",
                },
              ].map((loan) => (
                <Card key={loan.name} className="hover:shadow-xl transition-all">
                  <CardHeader>
                    <CardTitle>{loan.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Loan Amount</p>
                          <p className="font-bold text-blue-600">{loan.amount}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Interest Rate</p>
                          <p className="font-bold text-green-600">{loan.rate}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">Key Benefits:</p>
                        <ul className="space-y-1">
                          {loan.benefits.map((benefit) => (
                            <li key={benefit} className="text-sm text-gray-600 flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                        <Link href={loan.link} target="_blank" rel="noopener noreferrer">
                          Apply Now
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button asChild size="lg" variant="outline">
                <Link href="/credit/affiliate-loans">View All Affiliate Loans</Link>
              </Button>
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
                    <feature.icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Types of Personal Loans Available</h2>
              <p className="text-xl text-gray-600">Choose the right personal loan for your needs</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loanTypes.map((loan) => (
                <Card key={loan.title} className="hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-100 rounded-xl">
                        <loan.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{loan.title}</CardTitle>
                        <CardDescription>{loan.desc}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">Loan Amount</p>
                        <p className="font-bold text-blue-600">{loan.amount}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Interest</p>
                        <p className="font-bold text-green-600">{loan.rate} p.a.</p>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-transparent" variant="outline">
                      Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compare Lenders */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Compare Personal Loan Interest Rates 2024
              </h2>
              <p className="text-xl text-gray-600">Best personal loan rates from top banks and NBFCs</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Bank/NBFC</th>
                    <th className="px-6 py-4 text-left">Interest Rate</th>
                    <th className="px-6 py-4 text-left">Max Amount</th>
                    <th className="px-6 py-4 text-left">Max Tenure</th>
                    <th className="px-6 py-4 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {lenders.map((lender, idx) => (
                    <tr key={lender.name} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-medium">{lender.name}</td>
                      <td className="px-6 py-4 text-green-600 font-bold">{lender.rate}</td>
                      <td className="px-6 py-4">{lender.amount}</td>
                      <td className="px-6 py-4">{lender.tenure}</td>
                      <td className="px-6 py-4">
                        <Button size="sm">Apply</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Top Affiliate Personal Loan Products Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                Popular Personal Loans from Top Lenders
              </h2>
              <p className="text-gray-600 text-center max-w-2xl mx-auto">
                Compare and apply for personal loans from India's leading financial institutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* HDFC Instant Loan */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">HDFC</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">HDFC Bank Instant Loan</h3>
                    <p className="text-sm text-gray-500">Up to ₹25 Lakhs</p>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Interest Rate</span>
                    <span className="font-semibold">10.49% - 20% p.a.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tenure</span>
                    <span className="font-semibold">12-60 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Approval</span>
                    <span className="font-semibold">24-48 hours</span>
                  </div>
                </div>
                <a
                  href="https://www.hdfc.com/personal-loan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg text-center transition"
                >
                  Apply Now →
                </a>
              </div>

              {/* Bajaj Personal Loan */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">BAJ</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Bajaj Finance Personal Loan</h3>
                    <p className="text-sm text-gray-500">Up to ₹40 Lakhs</p>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Interest Rate</span>
                    <span className="font-semibold">11% - 19% p.a.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tenure</span>
                    <span className="font-semibold">12-60 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Approval</span>
                    <span className="font-semibold">Instant</span>
                  </div>
                </div>
                <a
                  href="https://www.bajajfinserv.in/personal-loan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg text-center transition"
                >
                  Apply Now →
                </a>
              </div>

              {/* ICICI Personal Loan */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">ICICI</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">ICICI Bank Personal Loan</h3>
                    <p className="text-sm text-gray-500">Up to ₹30 Lakhs</p>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Interest Rate</span>
                    <span className="font-semibold">10.75% - 18% p.a.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tenure</span>
                    <span className="font-semibold">12-60 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Approval</span>
                    <span className="font-semibold">30 minutes</span>
                  </div>
                </div>
                <a
                  href="https://www.icicibank.com/personal-loan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 rounded-lg text-center transition"
                >
                  Apply Now →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Personal Loan Eligibility Criteria</h2>
                <div className="space-y-4">
                  {[
                    { label: "Age", value: "21 to 60 years" },
                    { label: "Minimum Salary", value: "₹15,000/month (Salaried)" },
                    { label: "Minimum Income", value: "₹2.5 Lakh/year (Self-Employed)" },
                    { label: "Employment", value: "Minimum 1 year work experience" },
                    { label: "CIBIL Score", value: "650+ (Best rates at 750+)" },
                    { label: "Residence", value: "Indian citizen or resident" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4 bg-white p-4 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
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
                    "PAN Card (Mandatory)",
                    "Aadhaar Card / Passport / Voter ID",
                    "Last 3 months salary slips",
                    "Last 6 months bank statements",
                    "Address proof (Utility bill / Rent agreement)",
                    "Passport size photographs",
                  ].map((doc) => (
                    <div key={doc} className="flex items-center gap-4 bg-white p-4 rounded-lg">
                      <FileText className="w-6 h-6 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-700">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions - Personal Loan
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "What is the minimum salary required for personal loan?",
                  a: "Most banks and NBFCs require a minimum salary of ₹15,000 to ₹25,000 per month for salaried individuals. Some digital lenders offer personal loans with ₹12,000 minimum salary. Higher salary improves loan amount eligibility.",
                },
                {
                  q: "Can I get a personal loan with 600 CIBIL score?",
                  a: "Yes, some NBFCs and fintech lenders on BuyNswipe offer personal loans for CIBIL scores as low as 600. However, interest rates will be higher (18-24% p.a.). For best rates (10.49%), maintain a CIBIL score of 750+.",
                },
                {
                  q: "How quickly can I get personal loan approval?",
                  a: "With BuyNswipe, you can get instant approval within 2 minutes for pre-approved offers. New applicants typically receive approval within 24 hours. Disbursal happens within 4 hours to 48 hours depending on the lender.",
                },
                {
                  q: "What is the maximum personal loan amount I can get?",
                  a: "Personal loan amounts range from ₹50,000 to ₹40 lakh based on your income, credit score, and lender. Generally, you can get up to 20-24 times your monthly salary as loan amount.",
                },
                {
                  q: "Is personal loan available without income proof?",
                  a: "Most lenders require income proof. However, some digital lenders offer small personal loans (up to ₹1 lakh) based on bank statement analysis without traditional salary slips. These may have higher interest rates.",
                },
              ].map((faq, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-900">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="apply" className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Your Personal Loan?</h2>
            <p className="text-xl text-blue-100 mb-8">Check your eligibility in 2 minutes. No impact on CIBIL score.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 text-lg px-8">
                Apply for Personal Loan
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Personal Loan - Complete Guide 2024</h2>
            <div className="prose prose-blue max-w-none text-gray-600">
              <p>
                <strong>BuyNswipe Personal Loan</strong> marketplace helps you compare and apply for{" "}
                <strong>instant personal loan online</strong> from 30+ leading banks and NBFCs. Get{" "}
                <strong>personal loan at lowest interest rate</strong> starting 10.49% p.a. with{" "}
                <strong>same day disbursal</strong> and <strong>minimal documentation</strong>.
              </p>
              <p>
                Whether you need a <strong>personal loan for wedding</strong>, <strong>medical emergency loan</strong>,{" "}
                <strong>travel loan</strong>, or <strong>debt consolidation loan</strong>, BuyNswipe connects you with
                the right lender. Our AI-powered matching ensures you get the <strong>best personal loan offers</strong>{" "}
                based on your credit profile.
              </p>
              <p>
                Apply for <strong>HDFC personal loan</strong>, <strong>ICICI personal loan</strong>,{" "}
                <strong>SBI personal loan</strong>, <strong>Bajaj Finance personal loan</strong>, or{" "}
                <strong>Axis Bank personal loan</strong> through our platform. Use our{" "}
                <strong>personal loan EMI calculator</strong> to plan your repayments and{" "}
                <strong>check CIBIL score free</strong> before applying.
              </p>
            </div>
          </div>
        </section>


      </div>
    </>
  )
}
