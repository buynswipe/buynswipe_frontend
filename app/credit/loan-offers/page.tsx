import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gift, TrendingUp, CheckCircle, ArrowRight, Zap, Star, Clock, DollarSign } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Exclusive Loan Offers India - Latest Personal Loan Deals & Promotions",
  description:
    "Browse exclusive loan offers, personal loan deals, and special promotions. Get cashback, zero processing fee, balance transfer offers, and limited time discounts from top lenders.",
  keywords: [
    "loan offers",
    "personal loan offers",
    "loan deals",
    "loan promotions",
    "special loan offers",
    "cashback loan",
    "zero processing fee loan",
    "personal loan discount",
    "limited time loan offer",
    "best loan offers",
    "current loan offers",
    "latest loan deals",
    "loan interest rate offers",
    "festival loan offers",
    "loan cashback",
  ],
  openGraph: {
    title: "Exclusive Loan Offers - Best Deals Today",
    description: "Get latest exclusive loan offers with cashback, zero processing fee, and special discounts.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function LoanOffersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Loan Offers",
            url: "https://buynswipe.com/credit/loan-offers",
            description: "Exclusive loan offers and special promotions from top lenders",
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-pink-50">
        <header className="border-b bg-white/90 backdrop-blur-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/credit" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Gift className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900">BuyNswipe</span>
            </Link>
          </div>
        </header>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
                <Zap className="w-4 h-4 mr-1" />
                Limited Time Offers
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
                Exclusive Loan Offers & Deals - Limited Time Only
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Get cashback, zero processing fee, and special discounts on personal loans, credit cards, and business
                loans today.
              </p>
            </div>

            {/* Featured Offers */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Offer 1 */}
              <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-600 to-indigo-700 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <CardContent className="p-8 relative">
                  <Badge className="mb-4 bg-white/20 text-white border-0">
                    <Star className="w-3 h-3 mr-1" />
                    Featured Offer
                  </Badge>
                  <h3 className="text-2xl font-bold mb-2">Personal Loan with 0% Processing Fee</h3>
                  <p className="text-purple-100 mb-6">
                    Get instant personal loan up to Rs 50 Lakhs with ZERO processing fees + 5% cashback on disbursal
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Interest from 10.5% p.a.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Instant approval in 2 minutes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>No hidden charges</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-white text-purple-700 hover:bg-gray-100">
                    Apply Now - Limited Offer
                  </Button>
                </CardContent>
              </Card>

              {/* Offer 2 */}
              <Card className="border-2 border-pink-200 bg-gradient-to-br from-pink-600 to-rose-700 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <CardContent className="p-8 relative">
                  <Badge className="mb-4 bg-white/20 text-white border-0">
                    <Clock className="w-3 h-3 mr-1" />
                    24 Hrs Only
                  </Badge>
                  <h3 className="text-2xl font-bold mb-2">Flat Rs 5000 Cashback</h3>
                  <p className="text-pink-100 mb-6">
                    Get Rs 5000 cashback on every business loan + 3 months loan moratorium period
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Business loan up to Rs 2 Crore</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>24hr approval guaranteed</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>No guarantor required</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-white text-pink-700 hover:bg-gray-100">Claim Cashback Now</Button>
                </CardContent>
              </Card>
            </div>

            {/* More Offers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">More Exclusive Offers</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <DollarSign className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Credit Card Offer</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Get Rs 2000 welcome bonus + 1.5% cashback on all purchases
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Valid till Dec 31</span>
                      <ArrowRight className="w-4 h-4 text-emerald-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Balance Transfer Offer</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Transfer existing loan @ 0.5% lower interest rate + Rs 1000 cashback
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Valid till Dec 31</span>
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <Gift className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Gold Loan Offer</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Gold loan at 0.5% monthly interest + free insurance + instant approval
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Valid till Dec 31</span>
                      <ArrowRight className="w-4 h-4 text-orange-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* How to Get Offers */}
            <Card className="bg-gradient-to-r from-purple-100 to-pink-100 border-0 mb-12">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">How to Get These Exclusive Offers?</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">1</div>
                    <p className="font-medium text-gray-900">Check Your Eligibility</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
                    <p className="font-medium text-gray-900">Choose Best Offer</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                    <p className="font-medium text-gray-900">Apply Online</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
                    <p className="font-medium text-gray-900">Get Instant Approval</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Don't Miss These Limited Time Offers!</h2>
              <p className="text-lg text-purple-100 mb-6">
                Offers valid for limited time only. Apply today to claim your exclusive deal.
              </p>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Explore All Offers Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
