import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Headphones, Mail, Clock, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Support & Help Center | BuyNswipe Customer Support",
  description:
    "BuyNswipe Customer Support and Help Center. Live chat, email support, knowledge base articles, and troubleshooting guides.",
  keywords: [
    "BuyNswipe support",
    "customer support",
    "help center",
    "troubleshooting",
    "knowledge base",
    "technical support",
  ],
}

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Help & Support</h1>
          <p className="text-xl text-orange-100">We're here to help you succeed</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Support Options</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Headphones className="w-8 h-8 text-orange-600 mb-2" />
                <CardTitle>Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Chat with our support team in real-time</p>
                <Button size="sm" className="w-full">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Mail className="w-8 h-8 text-orange-600 mb-2" />
                <CardTitle>Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">support@buynswipe.com - Response within 24 hours</p>
                <Button size="sm" className="w-full">
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="w-8 h-8 text-orange-600 mb-2" />
                <CardTitle>Phone Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">+91 8171169007 - Mon-Sat 9AM-6PM IST</p>
                <Button size="sm" className="w-full">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <AlertCircle className="w-8 h-8 text-orange-600 mb-2" />
                <CardTitle>Status Page</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Check system status and incidents</p>
                <Button size="sm" variant="outline" className="w-full bg-transparent">
                  Check Status
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Knowledge Base</h2>

          <div className="space-y-4 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>How to Process Your First Payment?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Step-by-step guide to set up your payment processing and complete your first transaction.
                </p>
                <a href="#" className="text-orange-600 hover:underline font-semibold">
                  Read Article →
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Understanding Your Loan Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Comprehensive guide to different loan types and how to choose the right one for your needs.
                </p>
                <a href="#" className="text-orange-600 hover:underline font-semibold">
                  Read Article →
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>POS Terminal Setup & Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Complete setup guide for BuyNswipe POS terminals with software and hardware configuration.
                </p>
                <a href="#" className="text-orange-600 hover:underline font-semibold">
                  Read Article →
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Troubleshooting Payment Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Common payment issues and quick fixes to resolve transaction problems.
                </p>
                <a href="#" className="text-orange-600 hover:underline font-semibold">
                  Read Article →
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button className="bg-orange-600 hover:bg-orange-700">View All Articles</Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Support Tiers</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tier: "Standard",
                price: "Free",
                response: "24-48 hours",
                channels: ["Email", "Knowledge Base"],
              },
              {
                tier: "Priority",
                price: "₹999/mo",
                response: "4-6 hours",
                channels: ["Phone", "Email", "Chat"],
                popular: true,
              },
              {
                tier: "Premium",
                price: "₹4,999/mo",
                response: "30 minutes",
                channels: ["Dedicated Manager", "Phone", "Email", "Chat"],
              },
            ].map((tier) => (
              <Card key={tier.tier} className={tier.popular ? "border-2 border-orange-600" : ""}>
                <CardHeader>
                  <CardTitle>{tier.tier}</CardTitle>
                  <p className="text-2xl font-bold text-orange-600 mt-2">{tier.price}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Response Time</p>
                    <p className="font-semibold">{tier.response}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Channels</p>
                    <ul className="space-y-1">
                      {tier.channels.map((ch) => (
                        <li key={ch} className="text-sm">
                          ✓ {ch}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full mt-4" variant={tier.popular ? "default" : "outline"}>
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-xl mb-8 text-orange-100">Our support team is available 24/7 to assist you</p>
          <Button className="bg-white text-orange-600 hover:bg-orange-50">Contact Support</Button>
        </div>
      </section>
    </main>
  )
}
