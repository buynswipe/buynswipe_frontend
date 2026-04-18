import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Shield,
  Globe,
  Smartphone,
  Users,
  TrendingUp,
  CheckCircle,
  Download,
  Phone,
  Mail,
  Linkedin,
  Star,
  Award,
  Banknote,
  CreditCard,
  Wallet,
  HandCoins,
  Target,
  Zap,
  Network,
} from "lucide-react"
import Link from "next/link"

export default function BuyNswipeLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
            <Award className="w-4 h-4 mr-1" />
            Trusted by 500K+ Users
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-emerald-600">BuyNswipe Credit</span> – India's AI-Powered <span className="text-blue-600">Loan & Credit Card Marketplace</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Instant personal loans, credit cards, BNPL – Compare 50+ banks and get instant approval in minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/credit/personal-loan">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Zap className="w-5 h-5 mr-2" />
                Get Personal Loan
              </Button>
            </Link>
            <Link href="/credit/credit-card">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <CreditCard className="w-5 h-5 mr-2" />
                Compare Credit Cards
              </Button>
            </Link>
            <Link href="/apply/quick-loan-assessment">
              <Button size="lg" variant="outline">
                Check Eligibility
              </Button>
            </Link>
          </div>

          <div className="mt-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left flex-1">
                <Badge className="bg-white/20 text-white border-0 mb-3">Primary Platform</Badge>
                <h3 className="text-2xl font-bold mb-2">Full Access to BuyNswipe Credit</h3>
                <p className="text-emerald-50 text-base">Compare personal loans, credit cards, and BNPL options from India's top 50+ financial institutions. Get instant eligibility checks and apply in 2 minutes.</p>
              </div>
              <Link href="/credit" className="flex-shrink-0">
                <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 whitespace-nowrap font-semibold">
                  Explore Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose BuyNswipe Credit</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              India's most trusted AI-powered platform for instant loans and credit cards with 500K+ users
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Instant Approval</h3>
                    <p className="text-gray-600">Get instant eligibility checks and approvals in just 2 minutes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Compare 50+ Banks</h3>
                    <p className="text-gray-600">Access the largest marketplace of loans and credit cards in India</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Secure & Transparent</h3>
                    <p className="text-gray-600">RBI-regulated partners with complete transparency and data security</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl p-8 text-center">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Your Credit Journey Starts Here</h3>
                <p className="text-gray-600 text-sm mb-6">Fast approval, transparent pricing, trusted by hundreds of thousands</p>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-emerald-600">500K+</div>
                    <div className="text-xs text-gray-600 mt-1">Active Users</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">50+</div>
                    <div className="text-xs text-gray-600 mt-1">Banks & NBFCs</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-600">₹50Cr+</div>
                    <div className="text-xs text-gray-600 mt-1">Loans Disbursed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How BuyNswipe Credit Works</h2>
            <p className="text-lg text-gray-600">Simple, fast, and transparent credit solutions</p>
          </div>

          {/* Process Steps */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">3 Simple Steps to Get Your Loan</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-emerald-200 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-emerald-600">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Enter Your Details</h4>
                  <p className="text-gray-600 text-sm">Quick eligibility form with minimal information</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-blue-600">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Get Instant Approval</h4>
                  <p className="text-gray-600 text-sm">AI-powered eligibility check in 2 minutes</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-200 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-purple-600">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Receive Funds</h4>
                  <p className="text-gray-600 text-sm">Money disbursed directly to your account</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Top Loan Products */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Top Loan Products</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/credit/personal-loan">
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Banknote className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Personal Loan</h4>
                    <p className="text-sm text-gray-600">Up to ₹50 Lakhs at 10.5% p.a.</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/credit/credit-card">
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CreditCard className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Credit Cards</h4>
                    <p className="text-sm text-gray-600">Compare 50+ cards with instant approval</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/credit/business-loan">
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building2 className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Business Loan</h4>
                    <p className="text-sm text-gray-600">Up to ₹2 Crore for MSME</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/credit/home-loan">
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building2 className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Home Loan</h4>
                    <p className="text-sm text-gray-600">Flexible terms from top banks</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Have questions? We're here to help</p>
          </div>

          <div className="space-y-4">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">How long does approval take?</h3>
                <p className="text-gray-600">Most loan applications are approved within 2-5 minutes with instant eligibility checks.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">What documents do I need?</h3>
                <p className="text-gray-600">Minimal documentation - just your identity proof, address proof, and income details. No lengthy paperwork required.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">What are the interest rates?</h3>
                <p className="text-gray-600">Rates start from 10.5% p.a. and vary based on your credit profile. You can compare offers from 50+ lenders.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Do I need a good CIBIL score?</h3>
                <p className="text-gray-600">We work with lenders who consider alternative credit scoring. Even with low or no CIBIL, you can get approved.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Find Your Perfect Loan?</h2>
          <p className="text-emerald-50 text-lg mb-8">Apply now and get instant approval from India's top 50+ banks</p>
          <Link href="/credit/personal-loan">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
