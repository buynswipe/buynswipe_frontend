import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, TrendingUp } from "lucide-react"
import { trackEvent } from "@/lib/gtag"

export const metadata: Metadata = {
  title: "Analytics Setup | BuyNswipe | Conversion Tracking",
  description:
    "Setup conversion tracking and analytics for BuyNswipe. Monitor lead generation, application completions, and ROI with detailed dashboards.",
  keywords: ["analytics", "conversion tracking", "GA4", "event tracking", "performance metrics"],
}

export default function AnalyticsSetupPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Analytics Setup Guide</h1>
          <p className="text-xl text-orange-100">Monitor performance and optimize conversions</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Track Your Performance</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <BarChart3 className="w-8 h-8 text-orange-600 mb-2" />
                <CardTitle>Google Analytics 4</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">Track all user interactions and conversion events:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Form submissions</li>
                    <li>• Button clicks</li>
                    <li>• Page views</li>
                    <li>• Lead generation events</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="w-8 h-8 text-orange-600 mb-2" />
                <CardTitle>Conversion Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">Monitor key business metrics:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Lead captures per day</li>
                    <li>• Application completions</li>
                    <li>• Cost per lead</li>
                    <li>• Conversion rate</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Events to Track</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Lead Magnet Downloads</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Track PDF and guide downloads to measure content engagement:</p>
                <code className="bg-gray-100 p-3 rounded text-sm block">
                  {trackEvent("lead_magnet_download", { category: "pdf", value: "credit_report_guide" })}
                </code>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Form Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Monitor form completions across all pages:</p>
                <code className="bg-gray-100 p-3 rounded text-sm block">
                  {trackEvent("form_submit", { form_type: "loan_application", form_name: "quick_assessment" })}
                </code>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Product Views & Clicks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Track product engagement and CTAs:</p>
                <code className="bg-gray-100 p-3 rounded text-sm block">
                  {trackEvent("product_click", { product: "personal_loan", action: "apply_now" })}
                </code>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Video Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Monitor video watch time and completion:</p>
                <code className="bg-gray-100 p-3 rounded text-sm block">
                  {trackEvent("video_complete", { video_title: "loan_tutorial", duration: 300 })}
                </code>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Dashboard Setup</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-4">Core Metrics Dashboard</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded">
                      <p className="text-sm text-gray-600">Daily Lead Generation</p>
                      <p className="text-2xl font-bold text-blue-600">245</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded">
                      <p className="text-sm text-gray-600">Form Completion Rate</p>
                      <p className="text-2xl font-bold text-green-600">8.5%</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded">
                      <p className="text-sm text-gray-600">Cost Per Lead</p>
                      <p className="text-2xl font-bold text-orange-600">₹45</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded">
                      <p className="text-sm text-gray-600">Avg. Session Duration</p>
                      <p className="text-2xl font-bold text-purple-600">3m 25s</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Setup Support</h2>
          <p className="text-xl mb-8">Get help configuring analytics for your platform</p>
          <p className="text-orange-100">analytics@buynswipe.com</p>
        </div>
      </section>
    </main>
  )
}
