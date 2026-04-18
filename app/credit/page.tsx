import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CreditCard,
  Banknote,
  Building2,
  Smartphone,
  Calculator,
  ShieldCheck,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  PiggyBank,
  Wallet,
  FileCheck,
  Globe,
  Sparkles,
  Target,
  Award,
  BarChart3,
  Phone,
  Mail,
  IndianRupee,
  Percent,
  Timer,
  Gift,
  Briefcase,
  GraduationCap,
  Car,
  Home,
  HeartPulse,
  ShoppingBag,
} from "lucide-react"
import Link from "next/link"
import { EMICalculator } from "@/components/emi-calculator"
import { EligibilityChecker } from "@/components/eligibility-checker"
import { ErrorBoundary } from "@/components/error-boundary"

export const metadata: Metadata = {
  title: "BuyNswipe Credit - Instant Personal Loan Online | Credit Card Apply | BNPL | Best Loan App India 2025",
  description:
    "Apply for instant personal loan online up to Rs 50 Lakh at lowest interest rates from 10.5%. Compare credit cards, get instant approval in 2 minutes. Best loan app India 2025. Check CIBIL score free. BNPL, UPI credit line, business loan for MSME. RBI regulated. 50+ bank partners.",
  keywords: [
    // Primary High-Volume Keywords
    "instant loan app",
    "personal loan online",
    "instant personal loan",
    "loan app",
    "instant loan without documents",
    "instant loan without CIBIL",
    "personal loan low interest",
    "credit card apply online",
    "credit card instant approval",
    "best credit card India",
    "credit card without income proof",
    "lifetime free credit card",
    "BNPL",
    "buy now pay later",
    "pay later apps India",
    "UPI credit line",
    "business loan",
    "MSME loan",
    "startup loan",
    "mudra loan online",
    "loan against property",
    "gold loan online",
    "home loan apply",
    "car loan EMI calculator",
    "education loan India",
    "CIBIL score check free",
    "credit score check online",
    "EMI calculator",
    "loan eligibility calculator",
    "instant cash loan",
    "salary advance loan",
    "emergency loan",
    "quick loan approval",
    "same day loan disbursal",
    "online loan application",
    "digital lending platform",
    "fintech loan app",
    "RBI approved loan app",
    "zero documentation loan",
    "Aadhaar loan online",
    "PAN card loan",
    "bank statement loan",
    "instant approval loan",
    "2 minute loan approval",
    "best loan app 2025",
    "top loan apps India",
    "compare loan rates",
    "lowest interest rate loan",
    "flexible EMI loan",
    "prepayment no charges loan",
    "unsecured personal loan",
    "collateral free business loan",
    "working capital loan",
    "invoice financing",
    "merchant cash advance",
    "shop loan without security",
    "kirana store loan",
    "retailer loan",
    "doctor loan",
    "CA loan",
    "professional loan",
    "self employed loan",
    "freelancer loan",
    "gig worker loan",
    "women entrepreneur loan",
    "SC ST loan scheme",
    "minority loan",
    "PMEGP loan",
    "stand up India loan",
    "CGTMSE loan",

    // Personal Loan Keywords
    "personal loan online apply",
    "instant personal loan without cibil check",
    "personal loan low interest rate",
    "personal loan 50000 instant",
    "personal loan without salary slip",
    "personal loan for low cibil score",
    "emergency personal loan",
    "same day personal loan",
    "personal loan instant approval",
    "personal loan without documents",

    // Business Loan Keywords
    "business loan for small shop",
    "msme loan online apply",
    "startup loan without collateral",
    "business loan without documents",
    "small business loan",
    "mudra loan online apply",
    "working capital loan",
    "business loan interest rate",
    "instant business loan",
    "shop loan",

    // Credit Card Keywords
    "credit card apply online",
    "best credit card in india",
    "credit card instant approval",
    "lifetime free credit card",
    "cashback credit card",
    "travel credit card",
    "fuel credit card",
    "student credit card",
    "credit card without income proof",
    "zero annual fee credit card",

    // BNPL Keywords
    "buy now pay later",
    "bnpl apps india",
    "pay later app",
    "emi without credit card",
    "no cost emi",
    "instant emi",
    "shop now pay later",
    "bnpl instant approval",

    // Bank Account Keywords
    "zero balance account",
    "savings account online",
    "current account for business",
    "digital bank account",
    "instant bank account",

    // Tool Keywords
    "emi calculator",
    "loan eligibility calculator",
    "cibil score check free",
    "credit score check",
    "interest rate calculator",
    "loan comparison",
    "credit card comparison",

    // Long-tail Keywords
    "best instant loan app without cibil",
    "loan app for low income",
    "instant loan 10000 to 50000",
    "instant loan aadhar card",
    "loan without pan card",
    "2 minute loan approval",
    "loan app without rejection",
    "guaranteed loan approval",
    "fintech loan app india",
    "digital lending platform",
  ],
  openGraph: {
    title: "BuyNswipe Credit - Best Instant Loan App | Credit Cards | BNPL India",
    description:
      "Apply for instant personal loan, business loan & credit cards online. Compare 50+ banks & NBFCs. Get lowest interest rates with instant approval. Trusted by 1 Crore+ Indians.",
    url: "https://buynswipe.com/credit",
    siteName: "BuyNswipe Credit",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://buynswipe.com/og-credit.jpg",
        width: 1200,
        height: 630,
        alt: "BuyNswipe Credit - Instant Loans & Credit Cards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BuyNswipe Credit - Instant Loan App India",
    description:
      "Get instant personal loan without documents, business loan, credit cards with instant approval. Compare & apply online.",
    site: "@buynswipe",
    creator: "@ratneshchoubey",
  },
  alternates: {
    canonical: "https://buynswipe.com/credit",
    languages: {
      "en-IN": "https://buynswipe.com/credit",
      "hi-IN": "https://buynswipe.com/hi/credit",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "Finance",
  creator: "BuyNswipe Technology Pvt. Ltd.",
  publisher: "BuyNswipe",
}

export default function BuyNswipeCreditPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-blue-50">
        {/* Hero Section - SEO Optimized with H1 */}
        <section className="py-20 md:py-32 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Text Content */}
              <div className="flex flex-col justify-center">
                <Badge className="mb-6 bg-emerald-100 text-emerald-700 border-emerald-200 w-fit text-sm">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Best Loan App in India 2025
                </Badge>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight text-balance">
                  Instant Personal Loan Online
                </h1>

                <p className="text-xl text-gray-600 mb-6 font-medium leading-relaxed">
                  Get loan without documents in 2 minutes. Compare 50+ banks and get approved instantly.
                </p>

                <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                  Apply for instant personal loan without CIBIL check, business loan for small shops, credit cards with instant approval, and BNPL. Check loan eligibility free. Trusted by 1 Crore+ Indians. Interest rates from 10.5% p.a.
                </p>

                {/* Primary CTA */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base h-14 px-8 rounded-lg">
                    Check Eligibility Free
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="text-gray-700 font-semibold text-base h-14 px-8 rounded-lg border-2 border-gray-300 hover:bg-gray-50">
                    Apply for Credit Card
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-6 border-t pt-10 border-gray-200">
                  <div>
                    <p className="text-3xl font-bold text-emerald-600">1 Cr+</p>
                    <p className="text-sm text-gray-600 mt-1">Happy Users</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">50+</p>
                    <p className="text-sm text-gray-600 mt-1">Bank Partners</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-emerald-600">10.5%</p>
                    <p className="text-sm text-gray-600 mt-1">Starting Interest</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">2 Min</p>
                    <p className="text-sm text-gray-600 mt-1">Approval Time</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Feature Cards */}
              <div className="relative">
                {/* Main Features Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Feature 1 */}
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
                      <IndianRupee className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-4xl font-bold text-gray-900 mb-2">₹50L+</p>
                    <p className="text-gray-700 font-medium">Max Loan Amount</p>
                  </div>

                  {/* Feature 2 */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-4xl font-bold text-gray-900 mb-2">2 Min</p>
                    <p className="text-gray-700 font-medium">Instant Approval</p>
                  </div>

                  {/* Feature 3 */}
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                      <Percent className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-4xl font-bold text-gray-900 mb-2">10.5%</p>
                    <p className="text-gray-700 font-medium">Starting Rate p.a.</p>
                  </div>

                  {/* Feature 4 */}
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                      <FileCheck className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-4xl font-bold text-gray-900 mb-2">0%</p>
                    <p className="text-gray-700 font-medium">Processing Fee</p>
                  </div>
                </div>

                {/* Limited Offer Badge */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-full p-4 shadow-xl flex flex-col items-center justify-center w-28 h-28">
                  <p className="text-xs font-semibold uppercase tracking-wide">Limited</p>
                  <p className="text-2xl font-bold">0%</p>
                  <p className="text-xs font-semibold">Fee</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why BuyNswipe vs Banks Comparison */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why BuyNswipe vs Traditional Banks?</h2>
              <p className="text-xl text-gray-600">Get loans 10x faster with zero hassle</p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="px-8 py-6 text-left font-bold text-gray-900">Criteria</th>
                      <th className="px-8 py-6 text-left">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
                          <span className="font-bold text-gray-900">BuyNswipe</span>
                        </div>
                      </th>
                      <th className="px-8 py-6 text-left">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                          <span className="font-bold text-gray-700">Traditional Banks</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-emerald-50 transition-colors">
                      <td className="px-8 py-5 font-medium text-gray-900">Approval Time</td>
                      <td className="px-8 py-5 text-emerald-600 font-semibold">2 minutes</td>
                      <td className="px-8 py-5 text-gray-600">3-7 days</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-emerald-50 transition-colors">
                      <td className="px-8 py-5 font-medium text-gray-900">Documents Required</td>
                      <td className="px-8 py-5 text-emerald-600 font-semibold">Minimal (Pan, Aadhaar)</td>
                      <td className="px-8 py-5 text-gray-600">10+ documents</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-emerald-50 transition-colors">
                      <td className="px-8 py-5 font-medium text-gray-900">Processing Fee</td>
                      <td className="px-8 py-5 text-emerald-600 font-semibold">0% (No fees)</td>
                      <td className="px-8 py-5 text-gray-600">1-3% of loan amount</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-emerald-50 transition-colors">
                      <td className="px-8 py-5 font-medium text-gray-900">CIBIL Score Required</td>
                      <td className="px-8 py-5 text-emerald-600 font-semibold">Not required</td>
                      <td className="px-8 py-5 text-gray-600">650+ mandatory</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-emerald-50 transition-colors">
                      <td className="px-8 py-5 font-medium text-gray-900">Interest Rates</td>
                      <td className="px-8 py-5 text-emerald-600 font-semibold">10.5% - 24% p.a.</td>
                      <td className="px-8 py-5 text-gray-600">12% - 28% p.a.</td>
                    </tr>
                    <tr className="hover:bg-emerald-50 transition-colors">
                      <td className="px-8 py-5 font-medium text-gray-900">Digital Process</td>
                      <td className="px-8 py-5 text-emerald-600 font-semibold">100% online</td>
                      <td className="px-8 py-5 text-gray-600">Offline visits needed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 px-4 bg-white border-y">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap justify-center gap-3">
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm cursor-pointer hover:bg-emerald-50 hover:border-emerald-300"
              >
                <Banknote className="w-4 h-4 mr-2" />
                Personal Loan
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm cursor-pointer hover:bg-blue-50 hover:border-blue-300"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Business Loan
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm cursor-pointer hover:bg-purple-50 hover:border-purple-300"
              >
                <Home className="w-4 h-4 mr-2" />
                Home Loan
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm cursor-pointer hover:bg-orange-50 hover:border-orange-300"
              >
                <Car className="w-4 h-4 mr-2" />
                Car Loan
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm cursor-pointer hover:bg-yellow-50 hover:border-yellow-300"
              >
                <Gift className="w-4 h-4 mr-2" />
                Gold Loan
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm cursor-pointer hover:bg-pink-50 hover:border-pink-300"
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Education Loan
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm cursor-pointer hover:bg-red-50 hover:border-red-300"
              >
                <HeartPulse className="w-4 h-4 mr-2" />
                Medical Loan
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm cursor-pointer hover:bg-teal-50 hover:border-teal-300"
              >
                <CreditCard className="w-4 h-4 mr-2" />
                Credit Cards
              </Badge>
            </div>
          </div>
        </section>

        {/* Instant Loan Section - Primary SEO Target */}
        <section id="loans" className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Instant Loan App - Personal Loan Online Without Documents
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Apply for instant personal loan without CIBIL check, business loan for small shop owners, MSME loan
                online, and startup loan without collateral. Get fast approval with lowest interest rates from India's
                top banks and NBFCs. Same day loan disbursal guaranteed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Personal Loan Card */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-200">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                    <Banknote className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Personal Loan</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Instant personal loan without CIBIL check. Get up to Rs 50 Lakhs with minimal documentation and same
                    day disbursal.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      Interest from 10.5% p.a.
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      No collateral required
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      2-minute approval
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      Loan without salary slip
                    </li>
                  </ul>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Apply Personal Loan</Button>
                </CardContent>
              </Card>

              {/* Business Loan Card */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <Building2 className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Business Loan</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Best business loan for small shop owners and MSMEs. Get working capital loan without collateral.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      Up to Rs 2 Crore
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      Flexible EMI options
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      Quick 24hr approval
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      No guarantor needed
                    </li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Business Loan</Button>
                </CardContent>
              </Card>

              {/* MSME Loan Card */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                    <Target className="w-7 h-7 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">MSME Loan</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    MSME loan online apply with instant approval. Government Mudra loan and CGTMSE scheme available.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      Mudra loan eligible
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      Low interest rates
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      Easy documentation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      Govt subsidy benefits
                    </li>
                  </ul>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Apply MSME Loan</Button>
                </CardContent>
              </Card>

              {/* Startup Loan Card */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                    <Zap className="w-7 h-7 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Startup Loan</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Startup loan without collateral for first-time entrepreneurs. Startup India scheme benefits
                    available.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      No guarantor needed
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      12-month moratorium
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      Flexible repayment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      Startup India benefits
                    </li>
                  </ul>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Apply Startup Loan</Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-10 p-6 bg-gray-50 rounded-2xl">
              <p className="text-center text-gray-700 font-medium mb-4">More Loan Types Available:</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100">
                  Gold Loan
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100">
                  Loan Against Property
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100">
                  Two Wheeler Loan
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100">
                  Used Car Loan
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100">
                  Education Loan
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100">
                  Daily EMI Loan
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100">
                  Medical Emergency Loan
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100">
                  Wedding Loan
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100">
                  Home Renovation Loan
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100">
                  Travel Loan
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Credit Cards Section */}
        <section id="credit-cards" className="py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Best Credit Cards in India 2025 - Apply Online with Instant Approval
              </h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                Compare and apply for lifetime free credit cards, cashback credit cards, travel credit cards, and fuel
                credit cards with instant approval from HDFC, ICICI, Axis, SBI, Kotak, and more. Get welcome bonus up to
                Rs 5000.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Cashback Card */}
              <Card id="cashback" className="bg-gradient-to-br from-emerald-500 to-emerald-700 border-0 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <CardContent className="p-6 relative">
                  <Badge className="bg-white/20 text-white border-0 mb-4">Most Popular</Badge>
                  <h3 className="text-xl font-bold mb-2">Cashback Credit Cards</h3>
                  <p className="text-emerald-100 text-sm mb-4">
                    Best cashback credit card in India 2025. Get up to 5% cashback on all purchases with zero annual
                    fee.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>Up to 5% unlimited cashback</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>Zero annual fee for life</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>Welcome bonus Rs 1000</span>
                    </div>
                  </div>
                  <Button className="w-full bg-white text-emerald-700 hover:bg-gray-100">Compare Cashback Cards</Button>
                </CardContent>
              </Card>

              {/* Travel Card */}
              <Card id="travel" className="bg-gradient-to-br from-blue-500 to-blue-700 border-0 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <CardContent className="p-6 relative">
                  <Badge className="bg-white/20 text-white border-0 mb-4">Best for Travel</Badge>
                  <h3 className="text-xl font-bold mb-2">Travel Credit Cards</h3>
                  <p className="text-blue-100 text-sm mb-4">
                    Best travel credit card with free airport lounge access, air miles rewards, and travel insurance.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>Free lounge access worldwide</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>10X air miles rewards</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>Rs 50L travel insurance</span>
                    </div>
                  </div>
                  <Button className="w-full bg-white text-blue-700 hover:bg-gray-100">Compare Travel Cards</Button>
                </CardContent>
              </Card>

              {/* Fuel Card */}
              <Card className="bg-gradient-to-br from-orange-500 to-red-600 border-0 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <CardContent className="p-6 relative">
                  <Badge className="bg-white/20 text-white border-0 mb-4">Save on Fuel</Badge>
                  <h3 className="text-xl font-bold mb-2">Fuel Credit Cards</h3>
                  <p className="text-orange-100 text-sm mb-4">
                    Best fuel credit card with surcharge waiver. Save up to Rs 3500/month on petrol and diesel.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>1% fuel surcharge waiver</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>5X reward points on fuel</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>HP, IOCL, BP partner</span>
                    </div>
                  </div>
                  <Button className="w-full bg-white text-orange-700 hover:bg-gray-100">Compare Fuel Cards</Button>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-4 text-center">
                  <ShoppingBag className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="font-bold">Shopping Cards</h4>
                  <p className="text-xs text-gray-300">Amazon, Flipkart rewards</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-4 text-center">
                  <GraduationCap className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="font-bold">Student Cards</h4>
                  <p className="text-xs text-gray-300">No income proof needed</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-4 text-center">
                  <Briefcase className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="font-bold">Business Cards</h4>
                  <p className="text-xs text-gray-300">High credit limit</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-4 text-center">
                  <Award className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="font-bold">Premium Cards</h4>
                  <p className="text-xs text-gray-300">Exclusive privileges</p>
                </CardContent>
              </Card>
            </div>

            {/* More Card Types */}
            <div className="flex flex-wrap justify-center gap-3">
              <Badge id="lifetime-free" className="bg-white/10 text-white border-white/20 px-4 py-2 text-sm cursor-pointer hover:bg-white/20">
                Lifetime Free Credit Cards
              </Badge>
              <Badge className="bg-white/10 text-white border-white/20 px-4 py-2 text-sm cursor-pointer hover:bg-white/20">
                Low Income Credit Cards
              </Badge>
              <Badge className="bg-white/10 text-white border-white/20 px-4 py-2 text-sm cursor-pointer hover:bg-white/20">
                Secured Credit Cards
              </Badge>
              <Badge className="bg-white/10 text-white border-white/20 px-4 py-2 text-sm cursor-pointer hover:bg-white/20">
                Co-branded Credit Cards
              </Badge>
              <Badge className="bg-white/10 text-white border-white/20 px-4 py-2 text-sm cursor-pointer hover:bg-white/20">
                EMI Credit Cards
              </Badge>
            </div>
          </div>
        </section>

        {/* BNPL Section */}
        <section id="bnpl" className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Buy Now Pay Later (BNPL) - Shop Now Pay Later India
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Get instant BNPL credit line for online shopping. Pay later in easy EMIs with 0% interest. Works on
                Amazon, Flipkart, Myntra, and 10,000+ partner stores. No credit card required.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* BNPL Card */}
              <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                      <Wallet className="w-8 h-8 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">BNPL - Pay Later</h3>
                      <p className="text-purple-600">0% Interest EMI Available</p>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500" />
                      <span className="text-gray-700">0% interest for 3 months</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500" />
                      <span className="text-gray-700">No cost EMI conversion</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500" />
                      <span className="text-gray-700">10,000+ partner merchants</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500" />
                      <span className="text-gray-700">Instant credit approval</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500" />
                      <span className="text-gray-700">Up to Rs 2 Lakh limit</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700" size="lg">
                    Get BNPL Credit Line
                  </Button>
                </CardContent>
              </Card>

              {/* UPI Credit Line */}
              <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <Smartphone className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">UPI Credit Line</h3>
                      <p className="text-blue-600">Credit on UPI Payments</p>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700">Pay via UPI using credit</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700">Up to Rs 5 Lakh limit</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700">45 days interest-free</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700">Works with GPay, PhonePe</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700">RBI approved credit line</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    Apply UPI Credit Line
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Bank Accounts Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Zero Balance Bank Account - Open Online Free
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Open zero balance savings account, salary account, or current account online with instant approval from
                top banks. No minimum balance required. 100% digital and paperless.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <PiggyBank className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Zero Balance Account</h3>
                  <p className="text-sm text-gray-600 mb-4">No minimum balance required</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Open Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Wallet className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Salary Account</h3>
                  <p className="text-sm text-gray-600 mb-4">Special benefits for salaried</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Open Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Building2 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Current Account</h3>
                  <p className="text-sm text-gray-600 mb-4">For businesses and traders</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Open Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Smartphone className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Digital Savings</h3>
                  <p className="text-sm text-gray-600 mb-4">100% digital banking</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Open Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Customer Testimonials Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-white to-emerald-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Trusted by 1 Crore+ Happy Customers</h2>
              <p className="text-xl text-gray-600">See what real users say about BuyNswipe Credit</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Review 1 */}
              <Card className="border border-gray-200 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-emerald-600">RK</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Rajesh Kumar</h4>
                      <p className="text-sm text-gray-600">Delhi | Approved ₹5 Lakh</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-5 h-5 bg-yellow-400 rounded-full" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    "Got approved in just 2 minutes! No documents hassle, just uploaded Pan and Aadhaar. Received money in my account within 24 hours. Best experience ever!"
                  </p>
                </CardContent>
              </Card>

              {/* Review 2 */}
              <Card className="border border-gray-200 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-blue-600">PM</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Priya Mishra</h4>
                      <p className="text-sm text-gray-600">Bangalore | Approved ₹3 Lakh</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-5 h-5 bg-yellow-400 rounded-full" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    "I was scared about my low CIBIL score, but BuyNswipe approved me! Compare feature helped me find the best rate. Very transparent and reliable!"
                  </p>
                </CardContent>
              </Card>

              {/* Review 3 */}
              <Card className="border border-gray-200 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-purple-600">AJ</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Amit Joshi</h4>
                      <p className="text-sm text-gray-600">Mumbai | Approved ₹8 Lakh</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-5 h-5 bg-yellow-400 rounded-full" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    "My business needed quick capital. Applied for business loan on BuyNswipe and got approved instantly. Zero processing fees saved me ₹24K!"
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                <span className="font-bold text-emerald-600">4.8/5</span> rating from 50,000+ reviews
              </p>
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Read More Reviews
              </Button>
            </div>
          </div>
        </section>

        {/* Financial Tools Section */}
        <section id="tools" className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Free Financial Tools - EMI Calculator, CIBIL Score Check & More
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Check loan eligibility free, calculate EMI online, compare interest rates, and get your free CIBIL
                credit score instantly. Make informed financial decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6">
                  <Calculator className="w-10 h-10 text-emerald-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-gray-900 mb-1">EMI Calculator</h3>
                  <p className="text-xs text-gray-600">Calculate monthly EMI</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6">
                  <FileCheck className="w-10 h-10 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-gray-900 mb-1">Eligibility Check</h3>
                  <p className="text-xs text-gray-600">Check loan eligibility</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6">
                  <BarChart3 className="w-10 h-10 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-gray-900 mb-1">CIBIL Score</h3>
                  <p className="text-xs text-gray-600">Check credit score free</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6">
                  <TrendingUp className="w-10 h-10 text-orange-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-gray-900 mb-1">Rate Comparison</h3>
                  <p className="text-xs text-gray-600">Compare interest rates</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6">
                  <CreditCard className="w-10 h-10 text-red-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-gray-900 mb-1">Card Comparison</h3>
                  <p className="text-xs text-gray-600">Compare credit cards</p>
                </CardContent>
              </Card>
            </div>

          </div>

          {/* EMI Calculator */}
          <div className="mt-16 max-w-6xl mx-auto">
            <ErrorBoundary fallback={<div className="p-6 text-center text-gray-600">EMI Calculator temporarily unavailable</div>}>
              <EMICalculator />
            </ErrorBoundary>
          </div>

          {/* Eligibility Checker */}
          <div className="mt-16 max-w-6xl mx-auto">
            <ErrorBoundary fallback={<div className="p-6 text-center text-gray-600">Eligibility Checker temporarily unavailable</div>}>
              <EligibilityChecker />
            </ErrorBoundary>
          </div>
        </section>

        {/* AI Features Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-emerald-600 to-blue-700 text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <Badge className="bg-white/20 text-white border-0 mb-4">
                <Sparkles className="w-4 h-4 mr-1" />
                AI-Powered Technology
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Smart AI Loan Matching - Get Best Loan Offers Instantly
              </h2>
              <p className="text-lg text-emerald-100 max-w-3xl mx-auto">
                Our AI-powered recommendation engine analyzes your profile to match you with the best loan offers and
                credit cards with highest approval probability. Compare 50+ banks in seconds.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="font-bold mb-2">AI Loan Matching</h3>
                <p className="text-emerald-100 text-sm">
                  Personalized loan recommendations based on your income and credit profile
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="font-bold mb-2">Risk Assessment</h3>
                <p className="text-emerald-100 text-sm">AI-based credit scoring and loan approval prediction</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="font-bold mb-2">Instant Eligibility</h3>
                <p className="text-emerald-100 text-sm">Real-time eligibility check across 50+ lenders in 2 minutes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="font-bold mb-2">Best Rates</h3>
                <p className="text-emerald-100 text-sm">Compare and get lowest interest rates automatically</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions - Instant Loan & Credit Card
              </h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about instant loans, credit cards, BNPL, and more.
              </p>
            </div>

            <div className="space-y-4">
              {/* FAQ Items */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    How to get instant personal loan without CIBIL check?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    BuyNswipe Credit partners with NBFCs that offer loans based on alternative credit scoring using bank
                    statements, UPI transactions, and income proof. You can get instant loans from Rs 10,000 to Rs 5
                    Lakhs even with low or no CIBIL score. Simply apply online, upload documents, and get approval in 2
                    minutes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Which is the best instant loan app in India 2025?</h3>
                  <p className="text-gray-600 text-sm">
                    BuyNswipe Credit is one of the best instant loan apps in India, offering loans from 50+
                    RBI-regulated banks and NBFCs with interest rates starting at 10.5% p.a. Features include 2-minute
                    approval, instant disbursal, zero paperwork, and loan amounts up to Rs 50 Lakhs. Trusted by 1 Crore+
                    Indians.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    How to apply for credit card online with instant approval?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    On BuyNswipe Credit, you can compare and apply for credit cards from top banks like HDFC, ICICI,
                    Axis, SBI, and Kotak. Simply enter your details, check eligibility instantly, and get approval
                    within 2 minutes. Lifetime free credit cards and cards for low income individuals also available.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    What is BNPL (Buy Now Pay Later) and how does it work?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    BNPL (Buy Now Pay Later) allows you to purchase products and pay later in easy EMIs or full amount
                    after a grace period. BuyNswipe Credit offers BNPL with 0% interest for up to 3 months, instant
                    approval, and acceptance at 10,000+ partner merchants including Amazon, Flipkart, and Myntra.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">How to check CIBIL score for free online?</h3>
                  <p className="text-gray-600 text-sm">
                    Check your CIBIL credit score for free on BuyNswipe Credit. Simply enter your PAN card number and
                    mobile number to get your credit score instantly. We also provide personalized tips to improve your
                    score and loan recommendations based on your credit profile.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    What documents are required for instant personal loan?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    For instant personal loan on BuyNswipe Credit, you need: Aadhaar card, PAN card, last 3 months bank
                    statement, and salary slips (for salaried). Self-employed individuals need ITR or GST returns. Some
                    NBFCs offer loans without salary slip using UPI transaction history.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    How to get business loan for small shop without collateral?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    BuyNswipe Credit offers unsecured business loans for small shop owners and MSMEs up to Rs 2 Crore
                    without collateral. Requirements include 2+ years business vintage, GST registration, and last 12
                    months bank statement. Mudra loan and CGTMSE scheme benefits also available.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">What is UPI credit line and how to apply?</h3>
                  <p className="text-gray-600 text-sm">
                    UPI credit line is an RBI-approved feature that allows you to make UPI payments using credit instead
                    of your bank balance. Get up to Rs 5 Lakh limit with 45 days interest-free period. Works with Google
                    Pay, PhonePe, and other UPI apps. Apply on BuyNswipe Credit with instant approval.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Trust BuyNswipe Credit?</h2>
              <p className="text-lg text-gray-600">Secure, RBI-compliant, and trusted by millions of Indians</p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="text-center">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="w-7 h-7 text-emerald-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">RBI Regulated</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-7 h-7 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">256-bit SSL</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Building2 className="w-7 h-7 text-purple-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">50+ Bank Partners</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileCheck className="w-7 h-7 text-orange-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">ISO 27001</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-7 h-7 text-red-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">1Cr+ Users</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-7 h-7 text-teal-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">DPIIT Recognized</p>
              </div>
            </div>

            {/* Partner Logos */}
            <div className="mt-12 pt-12 border-t">
              <p className="text-center text-gray-500 mb-6">Trusted Banking and NBFC Partners</p>
              <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
                <span className="font-bold text-xl text-gray-400">HDFC Bank</span>
                <span className="font-bold text-xl text-gray-400">ICICI Bank</span>
                <span className="font-bold text-xl text-gray-400">Axis Bank</span>
                <span className="font-bold text-xl text-gray-400">SBI</span>
                <span className="font-bold text-xl text-gray-400">Yes Bank</span>
                <span className="font-bold text-xl text-gray-400">Kotak</span>
                <span className="font-bold text-xl text-gray-400">IndusInd</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Instant Loan or Credit Card?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Apply now and get instant approval in 2 minutes. Compare rates from 50+ banks, check eligibility free, and
              get the best financial products tailored for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8">
                Apply for Instant Loan
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white/10 bg-transparent"
              >
                Check CIBIL Score Free
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About BuyNswipe Technology</h2>
                <p className="text-gray-600 mb-6">
                  BuyNswipe Credit is a product of BuyNswipe Technology Pvt. Ltd., a DPIIT-recognized fintech startup
                  incorporated in 2017. We are building India's most trusted AI-driven digital credit marketplace for
                  instant loans, credit cards, BNPL, and smart financial tools.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-700">+91 8171169007</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-700">buynswipe@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-700">buynswipe.com</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Check Loan Eligibility Free</h3>
                <p className="text-gray-600 mb-6">
                  Enter your details to check loan eligibility and get personalized offers instantly.
                </p>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-600">
                    <option>Select Loan Type</option>
                    <option>Personal Loan</option>
                    <option>Business Loan</option>
                    <option>Credit Card</option>
                    <option>BNPL / Pay Later</option>
                    <option>Home Loan</option>
                    <option>Car Loan</option>
                  </select>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg">
                    Check Eligibility Free
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
