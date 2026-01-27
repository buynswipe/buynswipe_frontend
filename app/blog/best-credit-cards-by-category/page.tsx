import type { Metadata } from "next"
import Link from "next/link"
import { Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Best Credit Cards by Category - Top Picks in India | BuyNswipe",
  description:
    "Best credit cards in India by category - Premium, Cashback, Travel, Fuel, Student cards. Compare features, benefits, and apply online.",
  keywords: [
    "best credit cards",
    "best cashback credit cards",
    "best travel credit cards",
    "best fuel credit cards",
    "premium credit cards",
    "student credit cards",
    "best credit cards 2024",
    "top rated credit cards",
    "high reward credit cards",
  ],
}

export default function BestCreditCardsByCategoryPage() {
  const cardCategories = [
    {
      category: "Premium Credit Cards",
      description: "Exclusive benefits, lounge access, and premium services",
      cards: [
        {
          name: "HDFC Bank Diners Club Black",
          benefits: "Unlimited lounge access, priority booking, ₹10,000 annual benefit",
          fee: "₹10,000",
        },
        {
          name: "ICICI Bank Sapphiro",
          benefits: "Concierge service, golf benefits, dining privileges",
          fee: "₹10,000",
        },
        {
          name: "Axis Bank Reserve",
          benefits: "Travel insurance, concierge, priority customer service",
          fee: "₹10,000",
        },
      ],
    },
    {
      category: "Cashback Credit Cards",
      description: "Earn maximum cashback on everyday spending",
      cards: [
        { name: "SBI SimpliClick", benefits: "5% online cashback, 2.5% offline cashback, no annual fee", fee: "Free" },
        { name: "HDFC Bank MoneyBack", benefits: "1.5% unlimited cashback, ₹500 annual bonus", fee: "₹500" },
        { name: "Axis Bank Ace", benefits: "5% cashback on food & entertainment, 1% on others", fee: "Free" },
      ],
    },
    {
      category: "Travel Credit Cards",
      description: "Best for frequent travelers with airfare discounts",
      cards: [
        {
          name: "ICICI Bank Emeralde",
          benefits: "Airport lounge access, travel insurance, milestone benefits",
          fee: "₹4,999",
        },
        { name: "Axis Bank Magnus", benefits: "10% reward points on travel, 5X points on dining", fee: "₹7,500" },
        {
          name: "HDFC Bank Infinia",
          benefits: "Complimentary airport transfer, lounge access worldwide",
          fee: "₹10,000",
        },
      ],
    },
    {
      category: "Fuel Credit Cards",
      description: "Maximize savings on fuel purchases",
      cards: [
        { name: "SBI Fuel Rewards", benefits: "4% fuel surcharge waiver on fuel pumps", fee: "₹500" },
        { name: "HDFC Bank Pulse", benefits: "1.25% cashback on fuel, 0.5% on others", fee: "₹500" },
        { name: "ICICI Bank Fuel", benefits: "4% fuel surcharge waiver, 1% cashback on petrol", fee: "₹500" },
      ],
    },
    {
      category: "Shopping Credit Cards",
      description: "Best rewards on shopping and online purchases",
      cards: [
        { name: "Axis Bank Flipkart", benefits: "5% cashback on Flipkart & Amazon, 2.5% on others", fee: "Free" },
        { name: "SBI IRCTC", benefits: "5% cashback on IRCTC, lounge access", fee: "₹500" },
        { name: "HDFC Bank Swipeup", benefits: "5% cashback online, 1% offline, no annual fee", fee: "Free" },
      ],
    },
    {
      category: "Student Credit Cards",
      description: "Perfect for students with zero annual fee",
      cards: [
        { name: "HDFC Bank Student Plus", benefits: "No annual fee, cashback on online shopping", fee: "Free" },
        { name: "Axis Bank Youth", benefits: "No annual fee, cashback, movie offers", fee: "Free" },
        { name: "ICICI Bank Student", benefits: "Zero annual fee, reward points on spending", fee: "Free" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            BuyNswipe
          </Link>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Credit Card Guide</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Best Credit Cards by Category</h1>
          <p className="text-xl text-purple-100">
            Find the perfect credit card for your lifestyle and spending patterns
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Choose Your Perfect Credit Card</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With hundreds of credit cards available in India, choosing the right one depends on your lifestyle,
              spending patterns, and financial goals. Our comprehensive guide categorizes the best credit cards to help
              you make an informed decision.
            </p>
          </div>

          {cardCategories.map((category, idx) => (
            <div key={idx} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Award className="w-6 h-6 text-purple-600" />
                {category.category}
              </h3>
              <p className="text-gray-600 mb-6">{category.description}</p>
              <div className="space-y-4">
                {category.cards.map((card, cidx) => (
                  <div
                    key={cidx}
                    className="bg-gray-50 rounded-lg p-6 border-l-4 border-purple-600 hover:shadow-md transition"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-bold text-gray-900">{card.name}</h4>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {card.fee}
                      </span>
                    </div>
                    <p className="text-gray-700">{card.benefits}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-blue-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose the Right Credit Card</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Analyze Your Spending",
                  desc: "Identify where you spend the most - online, offline, travel, fuel, shopping",
                },
                {
                  title: "Compare Benefits",
                  desc: "Look beyond cashback - consider annual fees, joining benefits, insurance coverage",
                },
                { title: "Check Eligibility", desc: "Ensure you meet income requirements and credit score criteria" },
                {
                  title: "Review Fee Structure",
                  desc: "Calculate total fees against rewards to ensure net positive benefit",
                },
                {
                  title: "Loyalty Programs",
                  desc: "Consider brand loyalty benefits if you're aligned with specific merchants",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-white rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Compare All Credit Cards</h2>
            <p className="text-purple-100 mb-6">View detailed comparison of features, benefits, and apply instantly</p>
            <Link
              href="/credit/affiliate-credit-cards"
              className="inline-block bg-white text-purple-600 font-bold px-8 py-3 rounded-lg hover:bg-purple-50 transition"
            >
              View All Cards
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
