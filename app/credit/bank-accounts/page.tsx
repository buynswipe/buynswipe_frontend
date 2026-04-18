import type { Metadata } from "next"
import Link from "next/link"
import { Landmark, Zap, Lock, TrendingUp, CheckCircle, Phone, Mail, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Zero Balance Bank Account Online 2024 | Salary Account | Digital Bank | BuyNswipe",
  description:
    "Open zero balance bank account online in 5 minutes. Compare salary accounts, savings accounts, digital bank accounts from HDFC, ICICI, SBI, Axis, Kotak. No minimum balance required. Instant account opening.",
  keywords: [
    "zero balance bank account",
    "bank account online",
    "salary account",
    "digital bank account",
    "current account",
    "savings account",
    "zero balance account",
    "best bank account",
    "instant bank account opening",
    "HDFC bank account",
    "ICICI bank account",
    "SBI bank account",
    "Axis bank account",
    "Kotak bank account",
    "bank account for students",
    "bank account for beginners",
    "bank account features",
    "bank account benefits",
    "demat account",
  ],
  openGraph: {
    title: "Zero Balance Bank Account Online | Instant Opening | Best Banks | BuyNswipe",
    description:
      "Open bank account online with zero minimum balance. Compare accounts from top banks. Instant approval.",
    url: "https://buynswipe.com/credit/bank-accounts",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialProduct",
      "@id": "https://buynswipe.com/credit/bank-accounts#product",
      name: "BuyNswipe Bank Account Comparison",
      description:
        "Compare and open zero balance bank accounts online. Salary, savings, and digital accounts from top banks.",
      provider: {
        "@type": "FinancialService",
        name: "BuyNswipe",
        url: "https://buynswipe.com",
      },
      category: "Bank Account",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which is the best zero balance bank account?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Best zero balance accounts include HDFC Salary Account (unlimited free transfers), SBI YONO Salary Account (digital first), and ICICI Salary Account (free lounge access). Choice depends on bank availability and features needed.",
          },
        },
        {
          "@type": "Question",
          name: "Can I open bank account with zero balance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, most banks offer zero minimum balance accounts. Salary accounts have no minimum balance requirement. Savings accounts may have ₹0-₹1,000 minimum balance based on account type.",
          },
        },
        {
          "@type": "Question",
          name: "How to open bank account online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most banks allow online account opening in 5 minutes via mobile app or website. You need PAN, Aadhaar, GST number (for business), and ID proof. Video KYC completes the process instantly.",
          },
        },
        {
          "@type": "Question",
          name: "What documents required for bank account?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Basic documents: Aadhaar, PAN, ID proof (DL/Passport). For salary account: employment letter, recent salary slip. Video KYC allows account opening without visiting branch.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://buynswipe.com" },
        { "@type": "ListItem", position: 2, name: "Credit", item: "https://buynswipe.com/credit" },
        { "@type": "ListItem", position: 3, name: "Bank Accounts", item: "https://buynswipe.com/credit/bank-accounts" },
      ],
    },
  ],
}

const accountTypes = [
  {
    icon: Zap,
    title: "Salary Accounts",
    desc: "Zero balance, unlimited transfers, free benefits",
    examples: ["HDFC Salary Account", "SBI YONO Salary", "ICICI Salary Account"],
    highlight: "No Minimum Balance",
    color: "bg-blue-500",
  },
  {
    icon: TrendingUp,
    title: "Savings Accounts",
    desc: "Earn interest on deposits, access to credit products",
    examples: ["Premium Savings", "Digital Savings", "Student Account"],
    highlight: "Interest Up to 7%",
    color: "bg-green-500",
  },
  {
    icon: Landmark,
    title: "Current Accounts",
    desc: "For business, high transaction limits, overdraft facility",
    examples: ["Business Current", "Corporate Current", "MSME Current"],
    highlight: "Unlimited Transactions",
    color: "bg-orange-500",
  },
  {
    icon: Lock,
    title: "Digital Accounts",
    desc: "100% digital, instant approval, mobile-first banking",
    examples: ["RazorpayX Current", "Neo Salary Account", "Digital Savings"],
    highlight: "100% Digital",
    color: "bg-purple-500",
  },
]

const bankAccounts = [
  {
    name: "HDFC Salary Account",
    bank: "HDFC Bank",
    fee: "FREE",
    features: "Unlimited transfers, free IMPS, lounge access",
    rating: "4.8",
  },
  {
    name: "SBI YONO Salary",
    bank: "State Bank of India",
    fee: "FREE",
    features: "Digital first, cashback offers, insurance",
    rating: "4.6",
  },
  {
    name: "ICICI Salary Account",
    bank: "ICICI Bank",
    fee: "FREE",
    features: "Free lounge, health insurance, investment tools",
    rating: "4.7",
  },
  {
    name: "Axis Salary Account",
    bank: "Axis Bank",
    fee: "FREE",
    features: "Unlimited transfers, digital payment rewards",
    rating: "4.5",
  },
  {
    name: "Kotak 811 Digital",
    bank: "Kotak Mahindra Bank",
    fee: "FREE",
    features: "100% digital, instant opening, savings interest",
    rating: "4.6",
  },
  {
    name: "IndusInd Salary",
    bank: "IndusInd Bank",
    fee: "FREE",
    features: "Free investment tools, insurance, credit products",
    rating: "4.5",
  },
]

export default function BankAccountPage() {
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
              <Link href="/credit/personal-loan" className="text-gray-600 hover:text-blue-600">
                Personal Loan
              </Link>
              <Link href="/credit/credit-card" className="text-gray-600 hover:text-blue-600">
                Credit Card
              </Link>
              <Link href="/credit/bank-accounts" className="text-blue-600 font-medium">
                Bank Account
              </Link>
            </nav>
            <Button asChild>
              <Link href="#apply">Open Account</Link>
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-cyan-400 text-cyan-900 mb-4">Open in 5 Minutes</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Zero Balance Bank Account 2024
                <span className="block text-cyan-300 mt-2">100% Digital | Instant Approval</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Open <strong>salary account</strong> online with zero minimum balance. Compare accounts from HDFC, SBI,
                ICICI, Axis, Kotak. <strong>Instant account opening</strong> via video KYC.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {["5 Minute Process", "Zero Balance", "Free Account", "Video KYC"].map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-cyan-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-cyan-400 hover:bg-cyan-500 text-cyan-900 text-lg px-8">
                  Compare & Open Account
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg px-8 bg-transparent"
                >
                  View All Banks
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Account Types */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Types of Bank Accounts</h2>
              <p className="text-xl text-gray-600">Choose the account type that fits your needs</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {accountTypes.map((type) => (
                <Card key={type.title} className="hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
                  <div className={`${type.color} text-white p-4`}>
                    <div className="flex items-center justify-between">
                      <type.icon className="w-8 h-8" />
                      <Badge className="bg-white/20 text-white">{type.highlight}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                    <CardDescription>{type.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      {type.examples.map((ex) => (
                        <li key={ex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-blue-500" />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Top Bank Accounts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Top Bank Accounts 2024 - Compare & Open
              </h2>
              <p className="text-xl text-gray-600">Best salary and savings accounts with zero balance</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bankAccounts.map((account) => (
                <Card key={account.name} className="hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{account.bank}</Badge>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-medium">{account.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{account.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <span className="text-gray-500 text-sm">Account Fee</span>
                        <p className="font-medium text-green-600">{account.fee}</p>
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Features</span>
                        <p className="text-sm text-gray-600">{account.features}</p>
                      </div>
                    </div>
                    <Button className="w-full mt-4">Open Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How to Open Bank Account</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { step: "1", title: "Download App", desc: "Get bank app or use web" },
                { step: "2", title: "Fill Details", desc: "Enter your information" },
                { step: "3", title: "Video KYC", desc: "Complete identity verification" },
                { step: "4", title: "Digital Signing", desc: "E-sign documents" },
                { step: "5", title: "Account Active", desc: "Start banking instantly" },
              ].map((item) => (
                <div key={item.step} className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="apply" className="py-16 bg-gradient-to-r from-blue-600 to-cyan-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Your Bank Account Today</h2>
            <p className="text-xl text-blue-100 mb-8">Zero balance, zero hassle, zero charges</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cyan-400 hover:bg-cyan-500 text-cyan-900 text-lg px-8">
                Compare All Banks
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                <Phone className="w-5 h-5 mr-2" /> +91 8171169007
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Bank Account FAQs</h2>

            <div className="space-y-4">
              {[
                {
                  q: "Which bank has zero balance account in India?",
                  a: "Most banks offer zero balance accounts: HDFC Salary, SBI YONO, ICICI Salary, Axis Salary, Kotak 811, IndusInd Salary. All have zero minimum balance and no monthly charges.",
                },
                {
                  q: "How quickly can I open bank account online?",
                  a: "You can open a bank account in 5-10 minutes through mobile app or website. Video KYC completes instantly. Account becomes active within 24 hours for most banks.",
                },
                {
                  q: "What documents needed to open bank account?",
                  a: "You need: Aadhaar, PAN, and a valid photo ID (DL/Passport). For salary account, employer letter and recent salary slip. Video KYC eliminates the need to visit branch.",
                },
                {
                  q: "Can I open multiple bank accounts?",
                  a: "Yes, you can have multiple saving and salary accounts. However, one primary salary account per employer is recommended. Having multiple accounts helps diversify and earn better benefits.",
                },
                {
                  q: "Is online bank account opening safe?",
                  a: "Yes, online account opening is completely safe. Banks use encrypted connections, video KYC for verification, and biometric authentication. Your data is protected under bank security standards.",
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

        {/* SEO Content */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Bank Accounts in India 2024 - BuyNswipe</h2>
            <div className="prose prose-blue max-w-none text-gray-600 space-y-4">
              <p>
                <strong>BuyNswipe Bank Account</strong> platform helps you open and manage the{" "}
                <strong>best bank account in India</strong>. Compare <strong>zero balance accounts</strong>,{" "}
                <strong>salary accounts</strong>, <strong>digital bank accounts</strong>, and{" "}
                <strong>savings accounts</strong> from major banks. Get <strong>instant account opening</strong> online
                in just 5 minutes.
              </p>
              <p>
                Popular accounts include <strong>HDFC Salary Account</strong>, <strong>SBI YONO Salary</strong>,{" "}
                <strong>ICICI Salary Account</strong>, <strong>Axis Salary Account</strong>, and{" "}
                <strong>Kotak 811 Digital Account</strong>. All offering <strong>zero minimum balance</strong> and{" "}
                <strong>free account opening</strong> with instant digital KYC verification.
              </p>
              <p>
                Open <strong>bank account for salary</strong>, <strong>business current account</strong>, or{" "}
                <strong>digital savings account</strong>. Compare account features, benefits, and choose based on your
                banking needs. <strong>100% digital account opening</strong> with video KYC takes just 5 minutes.
              </p>
            </div>
          </div>
        </section>


      </div>
    </>
  )
}
