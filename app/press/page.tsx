import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "BuyNswipe Press Room | News & Media Kit | Brand Assets",
  description:
    "BuyNswipe Press Room with news, media coverage, brand kit, and press releases. Download logos, fact sheets, and investor information.",
  keywords: ["BuyNswipe press", "media kit", "press release", "brand assets", "investor relations", "news coverage"],
}

export default function PressPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Press Room</h1>
          <p className="text-xl text-slate-300">News, media kit, and brand resources</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Latest News</h2>

          <div className="space-y-6">
            {[
              {
                date: "December 2024",
                title: "BuyNswipe Launches Advanced POS Solution for SMEs",
                desc: "New cloud-based POS system helps small merchants scale their business with real-time analytics and multi-location support.",
              },
              {
                date: "November 2024",
                title: "BuyNswipe Secures ₹17L Seed Funding",
                desc: "Founded by Ratnesh Choubey, BuyNswipe raises seed funding from Startup India and two private investors to scale digital payments.",
              },
              {
                date: "October 2024",
                title: "Expands Credit Marketplace with 20+ Lending Partners",
                desc: "BuyNswipe now offers personal loans, credit cards, and BNPL from India's leading fintech and banking partners.",
              },
            ].map((news) => (
              <Card key={news.date}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-slate-600 mb-2">{news.date}</p>
                      <CardTitle>{news.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{news.desc}</p>
                  <a href="#" className="text-slate-700 hover:underline font-semibold">
                    Read Full Article →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Media Kit & Assets</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <Download className="w-8 h-8 text-slate-600 mb-2" />
                <CardTitle>Logo Pack</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Official BuyNswipe logos in multiple formats and colors</p>
                <button className="w-full bg-slate-700 text-white px-4 py-2 rounded hover:bg-slate-800">
                  Download (2.5 MB)
                </button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="w-8 h-8 text-slate-600 mb-2" />
                <CardTitle>Brand Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Complete brand guidelines and style specifications</p>
                <button className="w-full bg-slate-700 text-white px-4 py-2 rounded hover:bg-slate-800">
                  Download (1.8 MB)
                </button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Download className="w-8 h-8 text-slate-600 mb-2" />
                <CardTitle>Company Fact Sheet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">One-page company overview, founding story, and key metrics</p>
                <button className="w-full bg-slate-700 text-white px-4 py-2 rounded hover:bg-slate-800">
                  Download (500 KB)
                </button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="w-8 h-8 text-slate-600 mb-2" />
                <CardTitle>Executive Bios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Leadership team bios and high-resolution headshots</p>
                <button className="w-full bg-slate-700 text-white px-4 py-2 rounded hover:bg-slate-800">
                  Download (3.2 MB)
                </button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Download className="w-8 h-8 text-slate-600 mb-2" />
                <CardTitle>Product Screenshots</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">High-resolution product screenshots and demo images</p>
                <button className="w-full bg-slate-700 text-white px-4 py-2 rounded hover:bg-slate-800">
                  Download (15 MB)
                </button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="w-8 h-8 text-slate-600 mb-2" />
                <CardTitle>Investor Deck</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Investor presentation with market opportunity and financials</p>
                <button className="w-full bg-slate-700 text-white px-4 py-2 rounded hover:bg-slate-800">
                  Download (4.5 MB)
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured In</h2>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              "YourStory",
              "TechCrunch India",
              "Entrepreneur India",
              "Inc42",
              "Startup India",
              "Medium",
              "LinkedIn",
              "Forbes",
            ].map((publication) => (
              <Card key={publication}>
                <CardContent className="pt-6 text-center">
                  <p className="font-semibold text-slate-700">{publication}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Press Inquiries</h2>
          <p className="text-xl mb-8 text-slate-300">Contact our media relations team</p>
          <div className="space-y-2">
            <p>Email: press@buynswipe.com</p>
            <p>Phone: +91 8171169007</p>
            <button className="bg-white text-slate-700 px-8 py-3 rounded-lg hover:bg-slate-100 font-semibold mt-4">
              Send Press Inquiry
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
