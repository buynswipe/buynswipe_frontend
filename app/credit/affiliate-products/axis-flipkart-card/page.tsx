import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, Gift, ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Axis Flipkart Credit Card | 7.5% Cashback | Instant Approval | BuyNswipe",
  description:
    "Apply for Axis Flipkart Credit Card with 7.5% Flipkart cashback, 5% Cleartrip, and ₹250 welcome voucher. ₹500 annual fee (waivable).",
  keywords: ["Axis Flipkart credit card", "Flipkart card", "shopping credit card"],
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  name: "Axis Flipkart Credit Card",
  provider: { "@type": "FinancialService", name: "Axis Bank" },
  offers: { "@type": "Offer", description: "7.5% Flipkart Cashback" },
}

export default function AxisFlipkartCardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <section className="py-16 md:py-24 bg-gradient-to-br from-orange-600 to-orange-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Badge className="bg-white text-orange-600 mb-4">Best for Flipkart Shopping</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Axis Flipkart Credit Card</h1>
              <p className="text-xl text-orange-100 mb-8">
                Earn up to 7.5% cashback on Flipkart and Myntra shopping. Get ₹250 welcome voucher and exclusive
                benefits.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-orange-200 text-sm">Annual Fee</p>
                  <p className="text-2xl font-bold">₹500</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-orange-200 text-sm">Flipkart CB</p>
                  <p className="text-2xl font-bold">7.5%</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-orange-200 text-sm">Welcome</p>
                  <p className="text-2xl font-bold">₹250</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-orange-200 text-sm">Approval</p>
                  <p className="text-2xl font-bold">Instant</p>
                </div>
              </div>

              <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-orange-600 text-lg px-8 font-bold">
                <Link href="https://bitli.in/bjbj87N" target="_blank" rel="noopener noreferrer">
                  Apply Now <ExternalLink className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-6">Cashback & Benefits</h2>
                <div className="space-y-4">
                  {[
                    "7.5% cashback on Flipkart & Myntra",
                    "5% cashback on Cleartrip",
                    "4% on Swiggy & Uber",
                    "₹250 Welcome voucher",
                    "Fee waived on ₹3.5L+ annual spend",
                    "Exclusive Flipkart offers",
                  ].map((benefit) => (
                    <div key={benefit} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Who Should Apply?</h2>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {[
                        { title: "Flipkart Shoppers", desc: "Maximum savings on Flipkart purchases" },
                        { title: "Fashion Buyers", desc: "7.5% on Myntra clothing & accessories" },
                        { title: "Travel Planners", desc: "5% cashback on Cleartrip bookings" },
                        { title: "Food Lovers", desc: "4% off on Swiggy & Uber orders" },
                      ].map((item) => (
                        <div key={item.title}>
                          <h3 className="font-bold text-gray-900">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="w-5 h-5" /> Eligibility & Application
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold mb-4">Eligibility</h3>
                    <ul className="space-y-2">
                      {[
                        "Age: 21-65 years",
                        "Income: ₹25,000+ monthly",
                        "CIBIL Score: 736+",
                        "Salaried/Self-employed",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-600" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4">Documents</h3>
                    <ul className="space-y-2">
                      {["PAN Card", "Aadhaar Card", "Salary Slips (3 months)", "Bank Statements (6 months)"].map(
                        (item) => (
                          <li key={item} className="flex items-center gap-2 text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-600" /> {item}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-orange-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Shop Smart, Save More</h2>
              <p className="text-gray-700 mb-6">
                Get 7.5% cashback on every Flipkart purchase with Axis Flipkart Credit Card.
              </p>
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Link href="https://bitli.in/bjbj87N" target="_blank" rel="noopener noreferrer">
                  Apply for Card <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
