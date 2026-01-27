import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, Mail, Phone, Clock, Headphones, AlertCircle } from "lucide-react"

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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Support</h1>
          <p className="text-xl text-blue-100">We're here to help. Connect with our team anytime.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">How Can We Help?</h2>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageSquare className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Chat with our support team in real-time
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Available 9 AM - 9 PM IST
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Send us an email for detailed inquiries
                </p>
                <p className="text-sm font-semibold text-blue-600 mb-4">
                  support@buynswipe.com
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Phone Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Speak with our team over the phone
                </p>
                <p className="text-sm font-semibold text-blue-600 mb-4">
                  1800-123-4567
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Chat: 2-5 minutes</li>
                  <li>Email: 2-4 hours</li>
                  <li>Phone: Immediate</li>
                </ul>
                <p className="text-xs text-gray-500 mt-4">
                  During business hours
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mb-16">
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3">Loans</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <a href="/faq/loans" className="hover:text-blue-600">
                      Personal Loan FAQ
                    </a>
                  </li>
                  <li>
                    <a href="/blog/how-to-apply-personal-loan" className="hover:text-blue-600">
                      Loan Application Process
                    </a>
                  </li>
                  <li>
                    <a href="/tools/emi-calculator" className="hover:text-blue-600">
                      EMI Calculator
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Credit Cards</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <a href="/faq/credit-cards" className="hover:text-blue-600">
                      Credit Card FAQ
                    </a>
                  </li>
                  <li>
                    <a href="/blog/how-to-apply-credit-card" className="hover:text-blue-600">
                      How to Apply
                    </a>
                  </li>
                  <li>
                    <a href="/comparisons/credit-cards" className="hover:text-blue-600">
                      Compare Cards
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Tools</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <a href="/tools/interest-rate-comparison" className="hover:text-blue-600">
                      Interest Rate Comparison
                    </a>
                  </li>
                  <li>
                    <a href="/glossary" className="hover:text-blue-600">
                      Financial Glossary
                    </a>
                  </li>
                  <li>
                    <a href="/reviews" className="hover:text-blue-600">
                      Customer Reviews
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Common Issues & Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <p className="font-semibold text-gray-900">Can't reset password?</p>
                    <p className="text-sm text-gray-600">
                      Check your email spam folder. If still not received, contact support.
                    </p>
                  </li>
                  <li>
                    <p className="font-semibold text-gray-900">Application rejected?</p>
                    <p className="text-sm text-gray-600">
                      We'll email you the reason. Improve your profile and reapply after 30 days.
                    </p>
                  </li>
                  <li>
                    <p className="font-semibold text-gray-900">Payment issues?</p>
                    <p className="text-sm text-gray-600">
                      Try a different payment method or contact your bank.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Support Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900">Live Chat & Phone</p>
                    <p className="text-sm text-gray-600">
                      Monday - Friday: 9 AM - 9 PM IST
                    </p>
                    <p className="text-sm text-gray-600">
                      Saturday - Sunday: 10 AM - 6 PM IST
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email Support</p>
                    <p className="text-sm text-gray-600">
                      Available 24/7, responded within 4 hours
                    </p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded text-sm text-gray-700">
                    Holidays: We may have extended response times during national holidays
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-50">
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
                <a href="/blog" className="text-blue-600 hover:underline font-semibold">
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
                <a href="/blog" className="text-blue-600 hover:underline font-semibold">
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
                <a href="/blog" className="text-blue-600 hover:underline font-semibold">
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
                <a href="/blog" className="text-blue-600 hover:underline font-semibold">
                  Read Article →
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button className="bg-blue-600 hover:bg-blue-700">View All Articles</Button>
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
              <Card key={tier.tier} className={tier.popular ? "border-2 border-blue-600" : ""}>
                <CardHeader>
                  <CardTitle>{tier.tier}</CardTitle>
                  <p className="text-2xl font-bold text-blue-600 mt-2">{tier.price}</p>
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

      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-xl mb-8 text-blue-100">Our support team is available 24/7 to assist you</p>
          <Button className="bg-white text-blue-600 hover:bg-blue-50">Contact Support</Button>
        </div>
      </section>
    </main>
  )
}
