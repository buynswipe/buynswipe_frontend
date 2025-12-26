import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { creditCardProducts } from "@/lib/affiliate-products"

export const metadata: Metadata = {
  title: "Best Credit Cards 2025 | Compare 20+ Cards | Cashback & Rewards | BuyNswipe",
  description:
    "Compare and apply for the best credit cards from top banks. Get cashback, travel rewards, and exclusive benefits. Find the perfect card for your lifestyle.",
  keywords: [
    "credit cards",
    "best credit cards",
    "cashback credit cards",
    "travel credit cards",
    "lifetime free credit cards",
    "Axis credit cards",
    "SBI credit cards",
    "HDFC credit cards",
    "credit card comparison",
  ],
}

export default function AffiliateCardsPage() {
  const cardsByCategory = creditCardProducts.reduce(
    (acc, card) => {
      if (!acc[card.category]) acc[card.category] = []
      acc[card.category].push(card)
      return acc
    },
    {} as Record<string, typeof creditCardProducts>,
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-pink-400 text-pink-900 mb-4">Compare 20+ Cards</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Credit Cards from Top Banks</h1>
            <p className="text-xl text-purple-100 mb-8">
              Find the perfect credit card for your lifestyle. Get cashback, rewards, exclusive benefits, and more.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["Lifetime Free Options", "Up to 7.5% Cashback", "Travel Rewards", "Premium Benefits"].map((item) => (
                <div key={item} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-pink-400 hover:bg-pink-500 text-purple-900 text-lg px-8">
              Apply for Card
            </Button>
          </div>
        </div>
      </section>

      {/* Cards by Category */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {Object.entries(cardsByCategory).map(([category, cards]) => (
            <div key={category} className="mb-20">
              <h2 className="text-3xl font-bold mb-2 text-gray-900">{category} Credit Cards</h2>
              <p className="text-gray-600 mb-8">Best {category.toLowerCase()} credit cards with maximum benefits</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cards.map((card) => (
                  <Card key={card.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <CardTitle className="text-lg">{card.name}</CardTitle>
                          <CardDescription className="mt-2">{card.description}</CardDescription>
                        </div>
                        <Badge variant="outline">{card.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-y">
                        <div>
                          <p className="text-sm text-gray-600">Annual Fee</p>
                          <p className="text-lg font-bold text-purple-600">{card.fees}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Cashback</p>
                          <p className="text-lg font-bold text-purple-600">{card.cashback}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">Top Benefits:</p>
                        <ul className="space-y-1">
                          {card.benefits.slice(0, 4).map((benefit) => (
                            <li key={benefit} className="text-sm text-gray-600 flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                        <Link href={card.affiliateLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Apply Now
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
