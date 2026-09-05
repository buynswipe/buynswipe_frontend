import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  Clock,
  CreditCard,
  Gift,
  Percent,
  Shield,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Star,
  TrendingUp,
  Wallet,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Buy Now Pay Later (BNPL) | No Cost EMI | Pay Later Apps India - BuyNswipe",
  description:
    "Best Buy Now Pay Later (BNPL) apps in India 2024. Compare Simpl, LazyPay, ZestMoney, Paytm Postpaid, Amazon Pay Later. Instant credit line up to ₹5 Lakhs. No cost EMI on shopping. Zero interest pay later options.",
  keywords: [
    "buy now pay later",
    "bnpl",
    "bnpl apps india",
    "pay later",
    "no cost emi",
    "simpl pay later",
    "lazypay",
    "zestmoney",
    "paytm postpaid",
    "amazon pay later",
    "flipkart pay later",
    "instant credit line",
    "emi without credit card",
    "zero interest emi",
    "shop now pay later",
    "online shopping emi",
    "interest free emi",
    "deferred payment",
    "split payment",
    "pay in 3 installments",
  ].join(", "),
  openGraph: {
    title: "Buy Now Pay Later (BNPL) | Best Pay Later Apps India - BuyNswipe",
    description: "Compare best BNPL apps. Instant credit up to ₹5 Lakhs. No cost EMI. Zero interest options.",
    url: "https://buynswipe.com/credit/bnpl",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialProduct",
      name: "BuyNswipe BNPL Marketplace",
      description: "Compare and apply for best Buy Now Pay Later options in India",
      provider: {
        "@type": "Organization",
        name: "BuyNswipe Technology Pvt. Ltd.",
      },
      areaServed: "India",
      feesAndCommissionsSpecification: "0% interest on select purchases",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://buynswipe.com" },
        { "@type": "ListItem", position: 2, name: "Credit", item: "https://buynswipe.com/credit" },
        { "@type": "ListItem", position: 3, name: "BNPL", item: "https://buynswipe.com/credit/bnpl" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Buy Now Pay Later (BNPL)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Buy Now Pay Later (BNPL) is a short-term financing option that lets you purchase items immediately and pay for them later, either in full or in installments. Popular BNPL apps in India include Simpl, LazyPay, ZestMoney, and Paytm Postpaid.",
          },
        },
        {
          "@type": "Question",
          name: "Is BNPL better than credit card?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BNPL can be better for small purchases as it offers 0% interest and no annual fees. However, credit cards offer better rewards, purchase protection, and help build credit score. BNPL is ideal for those without credit cards or for no-cost EMI purchases.",
          },
        },
        {
          "@type": "Question",
          name: "What is the maximum limit on BNPL apps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BNPL limits vary by provider. Simpl offers up to ₹1 Lakh, LazyPay up to ₹1 Lakh, ZestMoney up to ₹5 Lakhs for EMI purchases, and Amazon Pay Later up to ₹60,000. Limits increase with good repayment history.",
          },
        },
        {
          "@type": "Question",
          name: "Does BNPL affect CIBIL score?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most BNPL providers do not report to credit bureaus for small purchases. However, EMI-based BNPL products like ZestMoney may report to CIBIL. Late payments on any BNPL can potentially affect your creditworthiness with that provider.",
          },
        },
        {
          "@type": "Question",
          name: "Which is the best BNPL app in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best BNPL app depends on your needs. Simpl is best for wide merchant acceptance, LazyPay for bill payments, Amazon Pay Later for Amazon shopping, Paytm Postpaid for Paytm ecosystem, and ZestMoney for high-value EMI purchases.",
          },
        },
      ],
    },
  ],
}

const bnplProviders = [
  {
    name: "Simpl",
    logo: "S",
    limit: "Up to ₹1 Lakh",
    interest: "0%",
    tenure: "Pay in 15 days / 3 EMIs",
    merchants: "10,000+ merchants",
    rating: 4.5,
    features: ["Wide merchant network", "Auto-debit option", "No hidden charges"],
    color: "from-orange-500 to-red-500",
  },
  {
    name: "LazyPay",
    logo: "LP",
    limit: "Up to ₹1 Lakh",
    interest: "0% to 18%",
    tenure: "Pay in 15 days / EMI",
    merchants: "5,000+ merchants",
    rating: 4.3,
    features: ["Bill payments", "UPI integration", "Cashback offers"],
    color: "from-purple-500 to-indigo-500",
  },
  {
    name: "ZestMoney",
    logo: "ZM",
    limit: "Up to ₹5 Lakhs",
    interest: "0% to 24%",
    tenure: "3-24 months EMI",
    merchants: "10,000+ merchants",
    rating: 4.2,
    features: ["High credit limit", "Long tenure", "Major brand partners"],
    color: "from-green-500 to-teal-500",
  },
  {
    name: "Amazon Pay Later",
    logo: "A",
    limit: "Up to ₹60,000",
    interest: "0% on select",
    tenure: "Next month / 3-12 EMI",
    merchants: "Amazon only",
    rating: 4.6,
    features: ["Amazon exclusive", "Easy approval", "No cost EMI"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Flipkart Pay Later",
    logo: "F",
    limit: "Up to ₹1 Lakh",
    interest: "0% on select",
    tenure: "Next month / EMI",
    merchants: "Flipkart only",
    rating: 4.4,
    features: ["Flipkart exclusive", "BBD offers", "Easy activation"],
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Paytm Postpaid",
    logo: "P",
    limit: "Up to ₹1 Lakh",
    interest: "0% to 3%",
    tenure: "Pay next month",
    merchants: "Paytm ecosystem",
    rating: 4.3,
    features: ["Wide acceptance", "Utility bills", "Movie tickets"],
    color: "from-cyan-500 to-blue-500",
  },
]

const useCases = [
  {
    icon: ShoppingBag,
    title: "Online Shopping",
    description: "Shop on Amazon, Flipkart, Myntra with no cost EMI",
    keywords: "online shopping emi, shop now pay later",
  },
  {
    icon: Smartphone,
    title: "Electronics & Gadgets",
    description: "Buy mobiles, laptops, appliances on easy EMI",
    keywords: "mobile on emi, laptop emi without credit card",
  },
  {
    icon: Gift,
    title: "Fashion & Lifestyle",
    description: "Upgrade your wardrobe with pay later options",
    keywords: "fashion pay later, clothing emi",
  },
  {
    icon: TrendingUp,
    title: "Travel & Experiences",
    description: "Book flights, hotels with BNPL payment",
    keywords: "travel bnpl, flight booking pay later",
  },
  {
    icon: CreditCard,
    title: "Bill Payments",
    description: "Pay electricity, mobile, broadband bills later",
    keywords: "bill payment bnpl, utility bnpl",
  },
  {
    icon: Wallet,
    title: "Emergency Expenses",
    description: "Handle unexpected expenses with instant credit",
    keywords: "emergency credit, instant pay later",
  },
]

export default function BNPLPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-pink-100 text-pink-700 border-pink-200">
                <Sparkles className="w-3 h-3 mr-1" />
                Buy Now Pay Later
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Shop Now,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                  Pay Later
                </span>
                <br />
                Zero Interest EMI
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Compare best <strong>Buy Now Pay Later (BNPL)</strong> apps in India. Get instant credit up to
                <strong> ₹5 Lakhs</strong>. No cost EMI on shopping. Zero interest pay later options from Simpl,
                LazyPay, ZestMoney, Amazon Pay Later & more.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-lg px-8"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Check BNPL Eligibility
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-pink-300 text-pink-600 hover:bg-pink-50 text-lg px-8 bg-transparent"
                >
                  Compare All Apps
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>100% Safe & Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>Instant Approval</span>
                </div>
                <div className="flex items-center gap-2">
                  <Percent className="w-4 h-4 text-pink-500" />
                  <span>0% Interest Options</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-purple-500" />
                  <span>No Credit Card Required</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is BNPL */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                What is <span className="text-pink-600">Buy Now Pay Later</span>?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center border-2 border-pink-100 hover:border-pink-300 transition-colors">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <ShoppingBag className="w-8 h-8 text-pink-600" />
                    </div>
                    <CardTitle>1. Shop Anywhere</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Shop online or offline at 10,000+ merchants. Select BNPL at checkout.
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center border-2 border-purple-100 hover:border-purple-300 transition-colors">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-purple-600" />
                    </div>
                    <CardTitle>2. Instant Approval</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Get approved in seconds. No documents. No credit card required.</p>
                  </CardContent>
                </Card>
                <Card className="text-center border-2 border-indigo-100 hover:border-indigo-300 transition-colors">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Wallet className="w-8 h-8 text-indigo-600" />
                    </div>
                    <CardTitle>3. Pay Later</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Pay next month or convert to 0% EMI. Flexible payment options.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* BNPL Providers Comparison */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Best <span className="text-pink-600">BNPL Apps</span> in India 2024
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Compare top <strong>Buy Now Pay Later</strong> apps. Find the best <strong>pay later</strong> option
                with instant credit, zero interest EMI, and wide merchant acceptance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {bnplProviders.map((provider) => (
                <Card key={provider.name} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className={`bg-gradient-to-r ${provider.color} text-white`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                          <span className="font-bold text-lg">{provider.logo}</span>
                        </div>
                        <div>
                          <CardTitle className="text-white">{provider.name}</CardTitle>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                            <span className="text-white/90 text-sm">{provider.rating}</span>
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-white/20 text-white border-white/30">{provider.interest} Interest</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Credit Limit</span>
                        <span className="font-semibold text-gray-900">{provider.limit}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Tenure</span>
                        <span className="font-medium text-gray-700">{provider.tenure}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Merchants</span>
                        <span className="font-medium text-gray-700">{provider.merchants}</span>
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <p className="text-xs text-gray-500 mb-2">Key Features:</p>
                      <div className="space-y-1">
                        {provider.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                            <Check className="w-3 h-3 text-green-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full mt-4 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                      Check Eligibility
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Where to Use <span className="text-purple-600">BNPL</span>?
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Use <strong>Buy Now Pay Later</strong> for everyday purchases. <strong>No cost EMI</strong> on
                electronics, fashion, travel, and more.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {useCases.map((useCase) => (
                <Card key={useCase.title} className="hover:shadow-lg transition-shadow group cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <useCase.icon className="w-7 h-7 text-pink-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{useCase.title}</h3>
                    <p className="text-gray-600 text-sm">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose BNPL Over Credit Cards?</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                  <div className="text-4xl font-bold mb-2">0%</div>
                  <p className="text-white/80">Interest on select purchases</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                  <div className="text-4xl font-bold mb-2">₹0</div>
                  <p className="text-white/80">Annual fees ever</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                  <div className="text-4xl font-bold mb-2">60s</div>
                  <p className="text-white/80">Instant approval</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                  <div className="text-4xl font-bold mb-2">No</div>
                  <p className="text-white/80">Credit card needed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Frequently Asked Questions about <span className="text-pink-600">BNPL</span>
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "What is Buy Now Pay Later (BNPL)?",
                    a: "Buy Now Pay Later (BNPL) is a short-term financing option that lets you purchase items immediately and pay for them later, either in full or in installments. Popular BNPL apps in India include Simpl, LazyPay, ZestMoney, and Paytm Postpaid.",
                  },
                  {
                    q: "Is BNPL better than credit card?",
                    a: "BNPL can be better for small purchases as it offers 0% interest and no annual fees. However, credit cards offer better rewards, purchase protection, and help build credit score. BNPL is ideal for those without credit cards or for no-cost EMI purchases.",
                  },
                  {
                    q: "What is the maximum limit on BNPL apps?",
                    a: "BNPL limits vary by provider. Simpl offers up to ₹1 Lakh, LazyPay up to ₹1 Lakh, ZestMoney up to ₹5 Lakhs for EMI purchases, and Amazon Pay Later up to ₹60,000. Limits increase with good repayment history.",
                  },
                  {
                    q: "Does BNPL affect CIBIL score?",
                    a: "Most BNPL providers do not report to credit bureaus for small purchases. However, EMI-based BNPL products like ZestMoney may report to CIBIL. Late payments on any BNPL can potentially affect your creditworthiness with that provider.",
                  },
                  {
                    q: "Which is the best BNPL app in India?",
                    a: "The best BNPL app depends on your needs. Simpl is best for wide merchant acceptance, LazyPay for bill payments, Amazon Pay Later for Amazon shopping, Paytm Postpaid for Paytm ecosystem, and ZestMoney for high-value EMI purchases.",
                  },
                ].map((faq, index) => (
                  <Card key={index} className="border-2 hover:border-pink-200 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.q}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{faq.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-pink-600 to-purple-600 text-white border-0">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Shop Now, Pay Later?</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Check your eligibility for Buy Now Pay Later apps in 60 seconds. No impact on credit score. Instant
                  approval.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-8">
                    <Zap className="w-5 h-5 mr-2" />
                    Check BNPL Eligibility
                  </Button>
                  <Link href="/credit">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white/10 text-lg px-8 bg-transparent"
                    >
                      Explore All Products
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SEO Content Footer */}
        <section className="py-12 bg-gray-50 border-t">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-sm text-gray-500">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Buy Now Pay Later (BNPL) - Complete Guide</h3>
              <p>
                <strong>BuyNswipe BNPL Marketplace</strong> helps you find the best <strong>Buy Now Pay Later</strong>{" "}
                apps in India. Compare <strong>Simpl</strong>, <strong>LazyPay</strong>, <strong>ZestMoney</strong>,
                <strong> Paytm Postpaid</strong>, <strong>Amazon Pay Later</strong>, and{" "}
                <strong>Flipkart Pay Later</strong>.
              </p>
              <p>
                Get <strong>instant credit line</strong> up to ₹5 Lakhs without credit card. Enjoy{" "}
                <strong>0% interest EMI</strong>,<strong> no cost EMI</strong>, and <strong>pay later</strong> options
                on shopping, electronics, travel, and more.
                <strong> EMI without credit card</strong> is now possible with top BNPL providers.
              </p>
              <p>
                Keywords:{" "}
                <em>
                  buy now pay later, bnpl apps india, pay later, no cost emi, simpl pay later, lazypay, zestmoney, paytm
                  postpaid, amazon pay later, flipkart pay later, instant credit line, emi without credit card, zero
                  interest emi, shop now pay later, online shopping emi
                </em>
              </p>
            </div>
          </div>
        </section>


      </div>
    </>
  )
}
