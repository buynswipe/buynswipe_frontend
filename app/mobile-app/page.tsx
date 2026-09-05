import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Apple, Smartphone, Star, Users, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "BuyNswipe Mobile App | iOS & Android | Download Now",
  description:
    "Download BuyNswipe mobile app for instant access to credit cards, personal loans, and payment solutions. Available on iOS and Android.",
  keywords: ["BuyNswipe app", "mobile app download", "iOS app", "Android app", "financial app", "credit card app"],
}

export default function MobileAppPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">BuyNswipe Mobile App</h1>
          <p className="text-2xl text-blue-100 mb-8">Financial services in your pocket</p>
          <Smartphone className="w-32 h-32 mx-auto text-blue-200 mb-8" />
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Download BuyNswipe</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2">
              <CardHeader>
                <Apple className="w-12 h-12 text-gray-900 mb-2" />
                <CardTitle>iPhone & iPad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">Download from Apple App Store</p>
                <a
                  href="https://apps.apple.com/in/app/buynswipe-credit/id1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 font-semibold transition-colors"
                >
                  Download on App Store
                </a>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Smartphone className="w-12 h-12 text-green-600 mb-2" />
                <CardTitle>Android Phones</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">Download from Google Play Store</p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.buynswipe.credit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold transition-colors"
                >
                  Get on Google Play
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">App Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "⚡", title: "Instant Loan Application", desc: "Apply for loans in 5 minutes" },
                { icon: "💳", title: "Credit Card Discovery", desc: "Find the perfect card for you" },
                { icon: "💰", title: "Smart Calculators", desc: "EMI, affordability, and ROI tools" },
                { icon: "📊", title: "Financial Dashboard", desc: "Track all your financial data" },
                { icon: "🔐", title: "Secure Transactions", desc: "Bank-level security features" },
                { icon: "📱", title: "Easy Navigation", desc: "Intuitive and user-friendly design" },
              ].map((feature, idx) => (
                <Card key={idx}>
                  <CardContent className="pt-6">
                    <p className="text-3xl mb-2">{feature.icon}</p>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                <p className="text-3xl font-bold text-yellow-500 mb-2">4.8★</p>
                <p className="text-gray-600">Average Rating</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="text-3xl font-bold text-blue-600 mb-2">100K+</p>
                <p className="text-gray-600">Active Users</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Zap className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <p className="text-3xl font-bold text-green-600 mb-2">1M+</p>
                <p className="text-gray-600">Downloads</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get Started Today</h2>
          <p className="text-xl text-blue-100 mb-8">Download BuyNswipe and manage your finances on the go</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://play.google.com/store/apps/details?id=com.buynswipe.credit"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 flex items-center gap-2 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Now
            </a>
            <Link
              href="/"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
