import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact BuyNswipe | Get in Touch | Founder & Support",
  description:
    "Contact BuyNswipe for acquisition inquiries, partnerships, customer support, or general questions. Reach out to founder Ratnesh Choubey directly.",
  keywords: [
    "contact BuyNswipe",
    "BuyNswipe founder",
    "customer support",
    "partnership inquiry",
    "acquisition contact",
    "BuyNswipe contact",
  ],
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-blue-100">Have questions? We'd love to hear from you.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-blue-600" />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold">+91 8171169007</p>
                    <p className="text-sm text-gray-600">Available Mon-Sat, 9 AM - 6 PM IST</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-blue-600" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold">buynswipe@gmail.com</p>
                    <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Linkedin className="w-5 h-5 text-blue-600" />
                      LinkedIn
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="https://www.linkedin.com/in/ratneshchoubey"
                      className="text-lg font-semibold text-blue-600 hover:underline"
                    >
                      Ratnesh Choubey
                    </a>
                    <p className="text-sm text-gray-600">Connect for professional inquiries</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold">Noida, NCR</p>
                    <p className="text-sm text-gray-600">India</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Full Name</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-2"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full border border-gray-300 rounded-lg p-2"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Inquiry Type</label>
                      <select className="w-full border border-gray-300 rounded-lg p-2">
                        <option>Acquisition Inquiry</option>
                        <option>Partnership</option>
                        <option>Customer Support</option>
                        <option>General Question</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Message</label>
                      <textarea
                        className="w-full border border-gray-300 rounded-lg p-2 h-32"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Founder Contact</h2>
          <p className="text-xl mb-8">For acquisition inquiries and strategic discussions</p>
          <div className="space-y-4">
            <p className="text-lg">Ratnesh Choubey</p>
            <p>Founder & CEO, BuyNswipe Technology Pvt. Ltd.</p>
            <div className="flex justify-center gap-8 text-sm">
              <div>
                <p className="font-semibold">Phone</p>
                <p>+91 8171169007</p>
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p>buynswipe@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
