import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { TrendingUp, Users, DollarSign, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Financial Metrics | BuyNswipe Investor Relations | Growth Dashboard",
  description:
    "View BuyNswipe's financial metrics, transaction volume, user growth, and key performance indicators. Investment opportunity with proven business metrics.",
  keywords: ["BuyNswipe metrics", "financial performance", "investor metrics", "fintech growth", "transaction volume"],
}

const transactionData = [
  { month: "Jan", volume: 2400, users: 4000, revenue: 240 },
  { month: "Feb", volume: 3398, users: 5200, revenue: 339 },
  { month: "Mar", volume: 2800, users: 6800, revenue: 280 },
  { month: "Apr", volume: 3908, users: 8200, revenue: 391 },
  { month: "May", volume: 4800, users: 10200, revenue: 480 },
  { month: "Jun", volume: 5300, users: 12800, revenue: 530 },
]

const metricData = [
  { label: "Total Transaction Volume", value: "$2.5B+", icon: DollarSign },
  { label: "Active Users", value: "500K+", icon: Users },
  { label: "Monthly Growth Rate", value: "18%", icon: TrendingUp },
  { label: "Platform Uptime", value: "99.9%", icon: Zap },
]

export default function FinancialMetricsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Financial Metrics & KPIs</h1>
          <p className="text-xl text-blue-100">Proven growth trajectory and strong market fundamentals</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Performance Indicators</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metricData.map((metric) => {
              const Icon = metric.icon
              return (
                <Card key={metric.label}>
                  <CardContent className="pt-6">
                    <Icon className="w-8 h-8 text-blue-600 mb-4" />
                    <p className="text-sm text-gray-600 mb-2">{metric.label}</p>
                    <p className="text-3xl font-bold text-blue-600">{metric.value}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Transaction Volume Growth</h2>
          <Card>
            <CardContent className="pt-6">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={transactionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="volume"
                    stroke="#2563eb"
                    strokeWidth={2}
                    name="Transaction Volume ($M)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">User & Revenue Growth</h2>
          <Card>
            <CardContent className="pt-6">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={transactionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="users" fill="#2563eb" name="Active Users (thousands)" />
                  <Bar dataKey="revenue" fill="#1e40af" name="Revenue ($M)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Revenue Breakdown</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Payment Processing", value: "₹12.5 Cr", percentage: 45 },
              { name: "Credit Marketplace", value: "₹10.2 Cr", percentage: 35 },
              { name: "Merchant Services", value: "₹6.8 Cr", percentage: 20 },
            ].map((revenue) => (
              <Card key={revenue.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{revenue.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-blue-600 mb-2">{revenue.value}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${revenue.percentage}%` }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{revenue.percentage}% of total revenue</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Market Opportunity</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Indian Fintech Market Size</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-blue-600 mb-4">$200B+</p>
                <p className="text-gray-700">
                  The Indian fintech market is growing at 25% CAGR. Digital payments alone represent a $150B opportunity
                  with only 40% penetration in tier 2-3 cities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>BuyNswipe's TAM</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-blue-600 mb-4">$5B+</p>
                <p className="text-gray-700">
                  Total addressable market focuses on digital payments, micro-lending, and credit marketplace in Tier
                  2-3 cities. Current penetration is &lt; 5%, representing massive runway for growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Strategic Acquisition</h2>
          <p className="text-xl mb-8 text-blue-100">
            BuyNswipe's proven metrics, growth trajectory, and market opportunity make it an attractive investment for
            strategic acquirers
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 font-semibold">
            Download Full Pitch Deck
          </button>
        </div>
      </section>
    </main>
  )
}
