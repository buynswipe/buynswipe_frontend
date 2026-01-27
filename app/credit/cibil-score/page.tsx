import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  ShieldCheck,
  ArrowLeft,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Star,
  Target,
  Zap,
  FileCheck,
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Check CIBIL Score Free Online | Credit Score Check India | BuyNswipe Credit",
  description:
    "Check your CIBIL score for free online instantly. Get free credit score, credit report, and personalized tips to improve your score. Check eligibility for loans and credit cards based on your CIBIL score.",
  keywords: [
    "cibil score",
    "check cibil score free",
    "credit score",
    "cibil score check",
    "free cibil score",
    "cibil score online",
    "credit score check",
    "cibil score free check online",
    "check credit score",
    "cibil login",
    "cibil score meaning",
    "how to check cibil score",
    "cibil score for loan",
    "cibil score for credit card",
    "improve cibil score",
    "cibil report",
    "credit report free",
    "experian score",
    "equifax score",
    "credit bureau india",
  ],
  openGraph: {
    title: "Check CIBIL Score Free Online - BuyNswipe Credit",
    description: "Get your free CIBIL score instantly. Check credit score, view report, and improve your score.",
    url: "https://buynswipe.com/credit/cibil-score",
    siteName: "BuyNswipe Credit",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "BuyNswipe Free CIBIL Score Check",
  description: "Check your CIBIL credit score for free online",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  provider: {
    "@type": "Organization",
    name: "BuyNswipe Technology Pvt. Ltd.",
  },
}

export default function CIBILScorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
        {/* Header */}
        <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/credit" className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Credit</span>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold text-gray-900">BuyNswipe</span>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          {/* Hero */}
          <div className="text-center mb-12">
            <Badge className="bg-emerald-100 text-emerald-700 mb-4">100% Free - No Hidden Charges</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Check Your CIBIL Score Free Online</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get your free credit score instantly. Understand your creditworthiness and get personalized tips to
              improve your CIBIL score for better loan and credit card approvals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Check Score Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                  Check Your CIBIL Score
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name (as per PAN)</Label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pan">PAN Card Number</Label>
                  <Input id="pan" placeholder="ABCDE1234F" maxLength={10} className="uppercase" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <Input id="mobile" type="tel" placeholder="Enter 10-digit mobile number" maxLength={10} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="consent" className="mt-1" />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I agree to the terms and authorize BuyNswipe to fetch my credit score from CIBIL/Credit Bureaus
                  </label>
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg">
                  Check CIBIL Score Free
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Your data is 256-bit SSL encrypted and secure. We never share your information.
                </p>
              </CardContent>
            </Card>

            {/* Score Display */}
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-lg font-semibold text-gray-600 mb-4">Your CIBIL Score</h3>
                  <div className="relative w-48 h-48 mx-auto">
                    <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
                    <div
                      className="absolute inset-0 rounded-full border-8 border-emerald-500"
                      style={{ clipPath: "polygon(0 0, 75% 0, 75% 100%, 0 100%)" }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div>
                        <p className="text-5xl font-bold text-emerald-600">750</p>
                        <p className="text-sm text-gray-500">out of 900</p>
                      </div>
                    </div>
                  </div>
                  <Badge className="mt-4 bg-emerald-100 text-emerald-700">Excellent Score</Badge>
                </div>

                {/* Score Ranges */}
                <div className="space-y-3">
                  <h4 className="font-semibold mb-3">CIBIL Score Ranges</h4>
                  {[
                    { range: "750-900", label: "Excellent", color: "bg-emerald-500", desc: "Best rates available" },
                    { range: "700-749", label: "Good", color: "bg-green-500", desc: "Good approval chances" },
                    { range: "650-699", label: "Fair", color: "bg-yellow-500", desc: "May get higher rates" },
                    { range: "300-649", label: "Poor", color: "bg-red-500", desc: "Limited options" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                      <span className="font-medium w-20">{item.range}</span>
                      <span className="text-gray-600">{item.label}</span>
                      <span className="text-sm text-gray-400 ml-auto">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What is CIBIL Score */}
          <section className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">What is CIBIL Score?</h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 mb-6">
                  CIBIL Score is a 3-digit number between 300-900 that represents your creditworthiness. It is
                  calculated by TransUnion CIBIL based on your credit history, repayment behavior, credit utilization,
                  and other factors. Banks and NBFCs use this score to evaluate loan and credit card applications.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { icon: TrendingUp, title: "Credit History", desc: "35% weightage - Your repayment track record" },
                    { icon: Target, title: "Credit Utilization", desc: "30% weightage - How much credit you use" },
                    {
                      icon: FileCheck,
                      title: "Credit Mix",
                      desc: "25% weightage - Types of credit accounts",
                    },
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <item.icon className="w-10 h-10 mx-auto text-emerald-600 mb-3" />
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Tips to Improve */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">How to Improve Your CIBIL Score</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: CheckCircle,
                  title: "Pay EMIs on Time",
                  desc: "Never miss or delay EMI payments. Set auto-debit for timely payments.",
                },
                {
                  icon: Target,
                  title: "Keep Credit Utilization Low",
                  desc: "Use less than 30% of your credit card limit.",
                },
                {
                  icon: AlertTriangle,
                  title: "Avoid Multiple Applications",
                  desc: "Don't apply for multiple loans/cards in short time.",
                },
                {
                  icon: Star,
                  title: "Maintain Credit Mix",
                  desc: "Have a healthy mix of secured and unsecured credit.",
                },
                {
                  icon: FileCheck,
                  title: "Check Report for Errors",
                  desc: "Dispute any incorrect entries in your credit report.",
                },
                {
                  icon: Zap,
                  title: "Keep Old Accounts Active",
                  desc: "Longer credit history improves your score.",
                },
              ].map((tip, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <tip.icon className="w-8 h-8 text-emerald-600 mb-4" />
                    <h3 className="font-semibold mb-2">{tip.title}</h3>
                    <p className="text-sm text-gray-600">{tip.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is checking CIBIL score free on BuyNswipe?",
                  a: "Yes, checking your CIBIL score on BuyNswipe is 100% free. There are no hidden charges.",
                },
                {
                  q: "Does checking CIBIL score affect my credit?",
                  a: "No, checking your own credit score is a soft inquiry and does not affect your CIBIL score.",
                },
                {
                  q: "What is a good CIBIL score for loan approval?",
                  a: "A CIBIL score of 750 or above is considered excellent and gives you the best chance of loan approval at lowest interest rates.",
                },
                {
                  q: "How often is CIBIL score updated?",
                  a: "CIBIL score is typically updated once a month when lenders report your payment data to the credit bureau.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center bg-emerald-600 rounded-2xl p-12 max-w-4xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-4">Get Personalized Loan Offers Based on Your Score</h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Once you know your CIBIL score, compare loan offers from 50+ banks tailored to your credit profile.
            </p>
            <Link href="/credit">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100">
                Explore Loan Offers
              </Button>
            </Link>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">
              BuyNswipe Technology Pvt. Ltd. | Check CIBIL Score Free | Credit Score Check Online India
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
