import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, TrendingUp, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Partner Application | BuyNswipe | Merchant & Aggregator Partners",
  description:
    "Apply to become a BuyNswipe partner. Join our merchant and aggregator network, access APIs, and grow your business with our fintech solutions.",
  keywords: [
    "partner application",
    "merchant partner",
    "aggregator partner",
    "BuyNswipe partnership",
    "fintech partnership",
    "API integration",
  ],
}

export default function PartnerApplicationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Partner With BuyNswipe</h1>
          <p className="text-xl text-purple-100">Grow your business with our comprehensive fintech platform</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Partnership Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-purple-600 mb-2" />
                <CardTitle>Merchant Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    White-label solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Co-branded apps
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Revenue sharing model
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Dedicated support
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="w-8 h-8 text-purple-600 mb-2" />
                <CardTitle>Aggregator Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    API integration access
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Commission structure
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Technical documentation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Marketing materials
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-purple-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Partnership Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Fast Integration", description: "Get integrated in weeks, not months" },
              {
                icon: TrendingUp,
                title: "Revenue Growth",
                description: "Increase ARPU with new financial products",
              },
              { icon: Users, title: "Support Team", description: "Dedicated partner success manager" },
            ].map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <item.icon className="w-8 h-8 text-purple-600 mb-2" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Apply Now</h2>
          <Card>
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Company Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Contact Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    placeholder="contact@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Partnership Type</label>
                  <select className="w-full border border-gray-300 rounded-lg p-2">
                    <option>Merchant Partner</option>
                    <option>Aggregator Partner</option>
                    <option>Technology Partner</option>
                    <option>Distribution Partner</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Tell us about your business</label>
                  <textarea
                    className="w-full border border-gray-300 rounded-lg p-2 h-32"
                    placeholder="Describe your business and partnership interests..."
                  ></textarea>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Submit Application</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
