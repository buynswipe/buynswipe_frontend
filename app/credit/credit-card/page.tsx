import type { Metadata } from "next"
import Link from "next/link"
import {
  CreditCard,
  Plane,
  ShoppingBag,
  Fuel,
  Utensils,
  Film,
  Gift,
  Percent,
  Shield,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Best Credit Card Apply Online 2024 | Instant Approval | Cashback & Rewards | BuyNswipe",
  description:
    "Apply for best credit card online with instant approval. Compare 50+ credit cards - cashback credit card, travel credit card, fuel credit card, rewards credit card. Lifetime free credit cards available. Check eligibility on BuyNswipe.",
  keywords: [
    "credit card",
    "credit card apply online",
    "best credit card",
    "instant credit card",
    "credit card instant approval",
    "cashback credit card",
    "travel credit card",
    "fuel credit card",
    "rewards credit card",
    "lifetime free credit card",
    "credit card for students",
    "credit card for beginners",
    "HDFC credit card",
    "ICICI credit card",
    "SBI credit card",
    "Axis credit card",
    "Amazon Pay credit card",
    "Flipkart Axis credit card",
    "credit card eligibility",
    "credit card benefits",
    "credit card offers",
    "credit card welcome bonus",
    "no annual fee credit card",
    "premium credit card",
    "credit card for low income",
  ],
  openGraph: {
    title: "Best Credit Card Apply Online | Instant Approval | 50+ Cards | BuyNswipe",
    description:
      "Compare and apply for best credit cards online. Cashback, travel, fuel cards with instant approval. Lifetime free options available.",
    url: "https://buynswipe.com/credit/credit-card",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialProduct",
      "@id": "https://buynswipe.com/credit/credit-card#product",
      name: "BuyNswipe Credit Card Marketplace",
      description: "Compare and apply for best credit cards online with instant approval. 50+ cards from top banks.",
      provider: {
        "@type": "FinancialService",
        name: "BuyNswipe",
        url: "https://buynswipe.com",
      },
      category: "Credit Card",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which is the best credit card in India 2024?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best credit card depends on your spending pattern. For cashback: HDFC MoneyBack, Amazon Pay ICICI. For travel: Axis Atlas, HDFC Infinia. For fuel: IndianOil ICICI, BPCL SBI. For beginners: Amazon Pay ICICI (lifetime free).",
          },
        },
        {
          "@type": "Question",
          name: "What is the minimum salary for credit card?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Minimum salary requirements vary: Entry-level cards need ₹15,000-20,000/month, Premium cards need ₹50,000+/month, Super-premium cards need ₹1 Lakh+/month. Some cards are available for self-employed with ₹3 Lakh+ annual ITR.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get credit card with 650 CIBIL score?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, some banks offer credit cards with 650 CIBIL score. Secured credit cards (against FD) are available even for lower scores. For best cards and higher limits, maintain 750+ CIBIL score.",
          },
        },
        {
          "@type": "Question",
          name: "Which credit card gives instant approval?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HDFC, ICICI, Axis, and SBI offer instant credit card approval for pre-qualified customers. Amazon Pay ICICI, Flipkart Axis Bank give instant virtual cards. Approval typically happens within 60 seconds for eligible customers.",
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
          name: "Credit Card",
          item: "https://buynswipe.com/credit/credit-card",
        },
      ],
    },
  ],
}

const cardCategories = [
  {
    icon: ShoppingBag,
    title: "Cashback Credit Cards",
    desc: "Earn up to 5% cashback on all purchases",
    cards: ["HDFC MoneyBack+", "Amazon Pay ICICI", "Cashback SBI Card"],
    highlight: "5% Cashback",
    color: "bg-green-500",
  },
  {
    icon: Plane,
    title: "Travel Credit Cards",
    desc: "Free lounge access, air miles, travel insurance",
    cards: ["Axis Atlas", "HDFC Infinia", "Amex Platinum Travel"],
    highlight: "Free Lounge",
    color: "bg-blue-500",
  },
  {
    icon: Fuel,
    title: "Fuel Credit Cards",
    desc: "Save up to ₹500/month on fuel purchases",
    cards: ["IndianOil ICICI", "BPCL SBI Card", "HPCL Axis"],
    highlight: "1% Fuel Surcharge Waiver",
    color: "bg-orange-500",
  },
  {
    icon: Gift,
    title: "Rewards Credit Cards",
    desc: "Earn 10X reward points on select categories",
    cards: ["HDFC Regalia", "Axis Magnus", "ICICI Sapphiro"],
    highlight: "10X Rewards",
    color: "bg-purple-500",
  },
  {
    icon: Utensils,
    title: "Dining Credit Cards",
    desc: "Up to 20% off at restaurants",
    cards: ["HDFC Diner's Club", "ICICI Coral", "Axis Ace"],
    highlight: "20% Dining",
    color: "bg-red-500",
  },
  {
    icon: Film,
    title: "Entertainment Cards",
    desc: "Free movie tickets, streaming subscriptions",
    cards: ["BookMyShow Axis", "ICICI Platinum Chip", "SBI Elite"],
    highlight: "Buy 1 Get 1 Movies",
    color: "bg-pink-500",
  },
]

const topCards = [
  {
    name: "Amazon Pay ICICI Credit Card",
    bank: "ICICI Bank",
    fee: "Lifetime Free",
    reward: "5% Amazon, 2% Online, 1% Other",
    rating: 4.8,
    highlight: "Best for Amazon Shopping",
  },
  {
    name: "HDFC MoneyBack+ Credit Card",
    bank: "HDFC Bank",
    fee: "₹500 (Waivable)",
    reward: "2% Cashback on All Spends",
    rating: 4.7,
    highlight: "Best Overall Cashback",
  },
  {
    name: "Flipkart Axis Bank Credit Card",
    bank: "Axis Bank",
    fee: "₹500 (Waivable)",
    reward: "5% Flipkart, 4% Preferred Partners",
    rating: 4.6,
    highlight: "Best for Flipkart Shopping",
  },
  {
    name: "SBI SimplyCLICK Credit Card",
    bank: "SBI Card",
    fee: "₹499 (Waivable)",
    reward: "10X on Amazon, BookMyShow",
    rating: 4.5,
    highlight: "Best for Online Shopping",
  },
  {
    name: "HDFC Regalia Credit Card",
    bank: "HDFC Bank",
    fee: "₹2,500",
    reward: "4X Rewards, Lounge Access",
    rating: 4.7,
    highlight: "Best Premium Card",
  },
  {
    name: "Axis Atlas Credit Card",
    bank: "Axis Bank",
    fee: "₹5,000",
    reward: "5X on Travel, Unlimited Lounge",
    rating: 4.8,
    highlight: "Best Travel Card",
  },
]

const features = [
  { icon: Clock, title: "Instant Approval", desc: "Get approved in 60 seconds" },
  { icon: CreditCard, title: "50+ Cards", desc: "Compare all major banks" },
  { icon: Gift, title: "Welcome Bonus", desc: "Up to ₹5,000 value" },
  { icon: Percent, title: "0% EMI", desc: "On select purchases" },
  { icon: Shield, title: "Lifetime Free", desc: "No annual fee options" },
  { icon: Star, title: "Exclusive Offers", desc: "Special deals & discounts" },
]

export default function CreditCardPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
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
              <Link href="/credit/credit-card" className="text-blue-600 font-medium">
                Credit Card
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-yellow-400 text-yellow-900 mb-4">Compare 50+ Credit Cards</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Best Credit Card India 2024
                <span className="block text-yellow-300 mt-2">Instant Approval | Lifetime Free</span>
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8">
                Apply for <strong>best credit card online</strong> with instant approval. Cashback up to 5%, free lounge
                access, welcome bonus worth ₹5,000. Compare and choose on BuyNswipe.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {["60 Sec Approval", "Lifetime Free", "5% Cashback", "Free Lounge"].map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 text-lg px-8">
                  Check Best Card for You
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg px-8 bg-transparent"
                >
                  Compare All Cards
                </Button>
              </div>
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
                    <feature.icon className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-500">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Affiliate Credit Cards Section */}
        <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Top Rated Affiliate Credit Cards</h2>
              <p className="text-xl text-gray-600">Exclusive offers from our trusted credit card partners</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Axis Flipkart Credit Card",
                  bank: "Axis Bank",
                  fee: "₹500 (waivable)",
                  benefits: ["7.5% Flipkart Cashback", "5% Cleartrip", "4% Swiggy/Uber"],
                  cashback: "Up to 7.5%",
                  link: "https://bitli.in/bjbj87N",
                },
                {
                  name: "SBI Cashback Credit Card",
                  bank: "SBI Card",
                  fee: "₹999 (waivable)",
                  benefits: ["5% Online Cashback", "1% Offline", "Auto-credited"],
                  cashback: "Up to 5%",
                  link: "https://bitli.in/H1FTrl7",
                },
                {
                  name: "IDFC First Credit Card",
                  bank: "IDFC Bank",
                  fee: "Lifetime FREE",
                  benefits: ["Never Expiring Rewards", "Railway Lounge", "₹500 Welcome"],
                  cashback: "Never Expires",
                  link: "https://bitli.in/Jj79KD4",
                },
                {
                  name: "Axis MyZone Visa Card",
                  bank: "Axis Bank",
                  fee: "Lifetime FREE",
                  benefits: ["Buy 1 Get 1 Movies", "₹2,880 Swiggy", "Lounge Access"],
                  cashback: "4 Edge Points",
                  link: "https://bitli.in/F129erC",
                },
                {
                  name: "Axis IOCL Rupay Card",
                  bank: "Axis Bank",
                  fee: "₹500 (waivable)",
                  benefits: ["4% IOCL Fuel", "1% Surcharge Waiver", "15% Dining"],
                  cashback: "Up to 4%",
                  link: "https://bitli.in/jk4HHOI",
                },
                {
                  name: "IDFC First Power Card",
                  bank: "IDFC Bank",
                  fee: "₹199 (waivable)",
                  benefits: ["3.5% Fuel Savings", "Roadside Assistance", "₹250 Welcome"],
                  cashback: "Up to 3.5%",
                  link: "https://bitli.in/Wnh6FzN",
                },
              ].map((card) => (
                <Card key={card.name} className="hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <CardTitle className="text-lg">{card.name}</CardTitle>
                        <CardDescription>{card.bank}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 py-3 border-y">
                        <div>
                          <p className="text-sm text-gray-600">Annual Fee</p>
                          <p className="font-bold text-purple-600">{card.fee}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Cashback</p>
                          <p className="font-bold text-green-600">{card.cashback}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">Top Benefits:</p>
                        <ul className="space-y-1">
                          {card.benefits.map((benefit) => (
                            <li key={benefit} className="text-sm text-gray-600 flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                        <Link href={card.link} target="_blank" rel="noopener noreferrer">
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
                <Link href="/credit/affiliate-credit-cards">View All 15+ Credit Cards</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Card Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Credit Cards by Category</h2>
              <p className="text-xl text-gray-600">Find the perfect card matching your lifestyle</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cardCategories.map((category) => (
                <Card
                  key={category.title}
                  className="hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden"
                >
                  <div className={`${category.color} text-white p-4`}>
                    <div className="flex items-center justify-between">
                      <category.icon className="w-8 h-8" />
                      <Badge className="bg-white/20 text-white">{category.highlight}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription>{category.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 mb-2">Popular Cards:</p>
                    <ul className="space-y-1">
                      {category.cards.map((card) => (
                        <li key={card} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {card}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-4 bg-transparent" variant="outline">
                      View All <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Top Cards Comparison */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Top Credit Cards 2024 - Compare & Apply
              </h2>
              <p className="text-xl text-gray-600">Handpicked best credit cards with highest rewards</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topCards.map((card) => (
                <Card key={card.name} className="hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <CardTitle className="text-lg">{card.name}</CardTitle>
                        <CardDescription>{card.bank}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Annual Fee</span>
                        <span className="font-medium text-green-600">{card.fee}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Rewards</span>
                        <span className="font-medium text-sm">{card.reward}</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4">Apply Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Credit Card Eligibility</h2>
                <div className="space-y-4">
                  {[
                    { label: "Age", value: "21 to 60 years" },
                    { label: "Entry Cards", value: "₹15,000+ monthly salary" },
                    { label: "Premium Cards", value: "₹50,000+ monthly salary" },
                    { label: "Super Premium", value: "₹1 Lakh+ monthly salary" },
                    { label: "CIBIL Score", value: "700+ (Best at 750+)" },
                    { label: "Self-Employed", value: "₹3 Lakh+ annual ITR" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4 bg-white p-4 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-gray-900">{item.label}:</span>
                        <span className="text-gray-600 ml-2">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Apply</h2>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Check Eligibility", desc: "Free check, no CIBIL impact" },
                    { step: "2", title: "Compare Cards", desc: "Based on your spending" },
                    { step: "3", title: "Submit Application", desc: "Digital KYC, minimal docs" },
                    { step: "4", title: "Instant Approval", desc: "Get approved in 60 seconds" },
                    { step: "5", title: "Receive Card", desc: "Delivered in 7-10 days" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4 bg-white p-4 rounded-lg">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Credit Card FAQs</h2>

            <div className="space-y-4">
              {[
                {
                  q: "Which is the best credit card for beginners in India?",
                  a: "For beginners, we recommend Amazon Pay ICICI Credit Card (lifetime free, easy approval, 5% Amazon cashback) or HDFC MoneyBack+ (2% universal cashback). These have low eligibility requirements and great rewards.",
                },
                {
                  q: "What is the minimum CIBIL score for credit card?",
                  a: "Most banks require 700+ CIBIL score for unsecured credit cards. For scores 600-700, you can get secured credit cards against FD. Premium cards typically need 750+ score for approval.",
                },
                {
                  q: "How can I get instant credit card approval?",
                  a: "Banks offer instant approval to pre-qualified customers based on existing relationship, salary account, or high CIBIL score. Amazon Pay ICICI and Flipkart Axis provide instant virtual cards upon approval.",
                },
                {
                  q: "Which credit card has no annual fee for lifetime?",
                  a: "Amazon Pay ICICI, HDFC Millennia, ICICI Platinum Chip, and several co-branded cards offer lifetime free with no annual fee. Some cards waive fees on annual spending of ₹50,000-₹1,00,000.",
                },
                {
                  q: "What is the maximum credit limit I can get?",
                  a: "Credit limits range from ₹15,000 for entry-level cards to ₹10+ Lakh for super-premium cards. Limit depends on income, credit score, and banking relationship. Typically 2-3x monthly salary for new customers.",
                },
              ].map((faq, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-900">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Credit Cards from Top Banks */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                Featured Credit Cards from Top Banks
              </h2>
              <p className="text-gray-600 text-center max-w-2xl mx-auto">
                Apply for premium credit cards with exclusive benefits and rewards
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Axis Flipkart Card */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">AXIS</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Axis Flipkart Card</h3>
                    <p className="text-sm text-gray-500">Annual Fee: ₹0 (Lifetime)</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    5% cashback on Flipkart & Amazon
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    1% cashback on other purchases
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Instant activation
                  </div>
                </div>
                <a
                  href="https://www.axisbank.com/credit-cards/flipkart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg text-center transition"
                >
                  Apply Now →
                </a>
              </div>

              {/* SBI Cashback Card */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">SBI</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">SBI SimpliClick Card</h3>
                    <p className="text-sm text-gray-500">Annual Fee: ₹499</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    10% cashback on online shopping
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    5% cashback on utility bills
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    Fuel surcharge waiver
                  </div>
                </div>
                <a
                  href="https://www.sbicard.com/en/personal/cards/credit-cards/simplishopping.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg text-center transition"
                >
                  Apply Now →
                </a>
              </div>

              {/* HDFC MoneyBack Card */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">HDFC</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">HDFC MoneyBack Card</h3>
                    <p className="text-sm text-gray-500">Annual Fee: ₹500</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    5% cashback on grocery
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    2.5% on dining
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    Complimentary airport lounge
                  </div>
                </div>
                <a
                  href="https://www.hdfcbank.com/credit-cards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg text-center transition"
                >
                  Apply Now →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="apply" className="py-16 bg-gradient-to-r from-purple-600 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Perfect Credit Card</h2>
            <p className="text-xl text-purple-100 mb-8">
              Answer 5 simple questions to get personalized card recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 text-lg px-8">
                Get Card Recommendations
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Credit Card Guide 2024 - BuyNswipe</h2>
            <div className="prose prose-purple max-w-none text-gray-600">
              <p>
                <strong>BuyNswipe Credit Card</strong> marketplace helps you find and apply for the{" "}
                <strong>best credit card in India 2024</strong>. Compare 50+ credit cards from HDFC, ICICI, SBI, Axis,
                and other top banks. Get <strong>instant credit card approval</strong> with{" "}
                <strong>lifetime free options</strong> and rewards up to 5% cashback.
              </p>
              <p>
                Whether you need a <strong>cashback credit card</strong>, <strong>travel credit card</strong> with
                lounge access, <strong>fuel credit card</strong> with surcharge waiver, or{" "}
                <strong>rewards credit card</strong> with accelerated points, BuyNswipe matches you with the perfect
                card based on your spending pattern.
              </p>
              <p>
                Popular cards include <strong>Amazon Pay ICICI credit card</strong>,{" "}
                <strong>Flipkart Axis Bank credit card</strong>, <strong>HDFC Regalia credit card</strong>, and{" "}
                <strong>SBI SimplyCLICK credit card</strong>. Use our <strong>credit card eligibility checker</strong>{" "}
                and compare features before applying.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">BuyNswipe</h3>
                <p className="text-gray-400">
                  India's trusted credit card comparison platform. Find and apply for the best cards.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Credit Cards</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/credit/credit-card" className="hover:text-white">
                      Cashback Cards
                    </Link>
                  </li>
                  <li>
                    <Link href="/credit/credit-card" className="hover:text-white">
                      Travel Cards
                    </Link>
                  </li>
                  <li>
                    <Link href="/credit/credit-card" className="hover:text-white">
                      Fuel Cards
                    </Link>
                  </li>
                  <li>
                    <Link href="/credit/credit-card" className="hover:text-white">
                      Rewards Cards
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Products</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/credit/personal-loan" className="hover:text-white">
                      Personal Loan
                    </Link>
                  </li>
                  <li>
                    <Link href="/credit" className="hover:text-white">
                      Business Loan
                    </Link>
                  </li>
                  <li>
                    <Link href="/credit/emi-calculator" className="hover:text-white">
                      EMI Calculator
                    </Link>
                  </li>
                  <li>
                    <Link href="/credit/cibil-score" className="hover:text-white">
                      CIBIL Score
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <div className="space-y-2 text-gray-400">
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" /> +91 8171169007
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4" /> buynswipe@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
              <p>© 2025 BuyNswipe Technology Pvt. Ltd. | Startup India Recognized | All Rights Reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
