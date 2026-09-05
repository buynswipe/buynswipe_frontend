import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, Percent, DollarSign, ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "SBI Cashback Credit Card | 5% Online Cashback | Instant Approval | BuyNswipe",
  description:
    "Apply for SBI Cashback Credit Card with 5% cashback on online purchases and 1% on offline. Auto-credited rewards. ₹999 annual fee (waivable).",
  keywords: ["SBI cashback card", "SBI credit card cashback", "online cashback card"],
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  name: "SBI Cashback Credit Card",
  provider: { "@type": "FinancialService", name: "SBI Card" },
  offers: { "@type": "Offer", description: "5% Online Cashback" },
}

export default function SBICashbackCardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-teal-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Badge className="bg-white text-blue-600 mb-4">Best for Online Shopping</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">SBI Cashback Credit Card</h1>
              <p className="text-xl text-blue-100 mb-8">
                Earn 5% cashback on online purchases and 1% on offline spends. Auto-credited rewards, no hassle.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-blue-200 text-sm">Annual Fee</p>
                  <p className="text-2xl font-bold">₹999</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-blue-200 text-sm">Online CB</p>
                  <p className="text-2xl font-bold">5%</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-blue-200 text-sm">Offline CB</p>
                  <p className="text-2xl font-bold">1%</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-blue-200 text-sm">Approval</p>
                  <p className="text-2xl font-bold">Instant</p>
                </div>
              </div>

              <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-blue-600 text-lg px-8 font-bold">
                <Link href="https://bitli.in/H1FTrl7" target="_blank" rel="noopener noreferrer">
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
                <h2 className="text-2xl font-bold mb-6">Cashback Features</h2>
                <div className="space-y-4">
                  {[
                    "5% cashback on all online purchases",
                    "1% cashback on offline transactions",
                    "Auto-credited cashback to account",
                    "No redemption required",
                    "Fuel surcharge waiver 1%",
                    "Fee waivable on ₹2L+ annual spend",
                  ].map((feature) => (
                    <div key={feature} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Best For</h2>
                <Card>
                  <CardContent className="pt-6 space-y-4">
                    {[
                      { title: "Online Shoppers", desc: "5% on Amazon, Flipkart, others" },
                      { title: "Bill Payments", desc: "Utilities, insurance, subscriptions" },
                      { title: "Travel Booking", desc: "Flights, hotels, train tickets" },
                      { title: "Regular Users", desc: "Simple, auto-credited rewards" },
                    ].map((item) => (
                      <div key={item.title}>
                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold mb-6">Eligibility & How to Apply</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Percent className="w-5 h-5" /> Eligibility
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Age: 21-65 years",
                      "Monthly Income: ₹30,000+",
                      "CIBIL Score: 650+",
                      "1+ year work experience",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5" /> Documents
                  </h3>
                  <ul className="space-y-3">
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
            </div>

            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Earn Cashback on Every Purchase</h2>
              <p className="text-gray-700 mb-6">
                Get 5% cashback on online purchases automatically credited to your account.
              </p>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="https://bitli.in/H1FTrl7" target="_blank" rel="noopener noreferrer">
                  Apply for SBI Card <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
