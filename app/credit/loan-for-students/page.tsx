import type { Metadata } from "next"
import Link from "next/link"
import { GraduationCap, Globe, BookOpen, CheckCircle, FileText, ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Student Loan | Education Loan for Higher Studies | Study Abroad | BuyNswipe",
  description:
    "Apply for education loan for higher studies in India and abroad. Get instant approval for engineering, MBA, medical, PG courses. Low interest from 7% p.a. No collateral options. BuyNswipe.",
  keywords: [
    "education loan",
    "student loan",
    "education loan for abroad",
    "study abroad loan",
    "higher education loan",
    "engineering loan",
    "MBA loan",
    "medical education loan",
    "education loan interest rate",
    "education loan eligibility",
    "education loan without collateral",
    "government education loan",
    "education loan CIBIL",
    "education loan banks",
    "education loan documents",
    "college education loan",
    "overseas education loan",
    "education loan for abroad studies",
    "lowest education loan rate",
    "instant education loan approval",
  ],
  openGraph: {
    title: "Education Loan for Higher Studies | 7% Interest | BuyNswipe",
    description: "Get instant education loan for studies in India or abroad. Quick approval in 48 hours.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialProduct",
      name: "BuyNswipe Education Loan",
      description: "Education loan for students pursuing higher education in India and abroad.",
      provider: {
        "@type": "FinancialService",
        name: "BuyNswipe",
        url: "https://buynswipe.com",
      },
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "100000",
        highPrice: "10000000",
        priceCurrency: "INR",
      },
      interestRate: {
        "@type": "QuantitativeValue",
        minValue: 7,
        maxValue: 14,
        unitText: "percent per annum",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the maximum education loan amount?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Maximum education loan for studies in India: ₹10-15 Lakh. For abroad studies: ₹20-50 Lakh depending on course and lender. Additional collateral may be needed for loans above ₹15 Lakh.",
          },
        },
        {
          "@type": "Question",
          name: "What is the interest rate for education loan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Education loan interest rates start from 7% p.a. for secured loans. Unsecured loans range from 10-14% p.a. Government schemes like student credit cards offer subsidized rates.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get education loan without collateral?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, education loans up to ₹7-10 Lakh are available without collateral. For larger amounts, collateral or a co-applicant is typically required.",
          },
        },
        {
          "@type": "Question",
          name: "What is the repayment period for education loan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Repayment usually starts 6 months after course completion. Total tenure: 7-15 years. EMIs depend on loan amount and interest rate.",
          },
        },
      ],
    },
  ],
}

const loanTypes = [
  {
    icon: BookOpen,
    title: "Engineering & Tech Courses",
    amount: "Up to ₹15 Lakh",
    rate: "8%",
    desc: "BTech, MTech, MCA, Computer Science",
  },
  {
    icon: GraduationCap,
    title: "MBA & Management",
    amount: "Up to ₹20 Lakh",
    rate: "8.5%",
    desc: "MBA, PGDM, Executive programs",
  },
  {
    icon: Globe,
    title: "Study Abroad",
    amount: "Up to ₹50 Lakh",
    rate: "9%",
    desc: "USA, UK, Canada, Australia, EU",
  },
  {
    icon: FileText,
    title: "Medical Education",
    amount: "Up to ₹25 Lakh",
    rate: "8.5%",
    desc: "MBBS, BDS, nursing courses",
  },
]

export default function StudentLoanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Header */}
        <header className="bg-white border-b sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              BuyNswipe
            </Link>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="#apply">Apply Now</Link>
            </Button>
          </div>
        </header>

        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-yellow-400 text-yellow-900 mb-4">Education Loans</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Student Loan Online
                <span className="block text-blue-200 mt-2">Up to ₹50 Lakh @ 7% Interest</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Get instant <strong>education loan</strong> for <strong>higher studies</strong> in India or abroad.
                Quick approval. No collateral up to ₹10 Lakh.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 text-lg px-8">
                  Check Eligibility
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Phone className="w-5 h-5 mr-2" /> Call Expert
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Types */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Types of Education Loans</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {loanTypes.map((loan) => (
                <Card key={loan.title} className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-100 rounded-xl">
                        <loan.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle>{loan.title}</CardTitle>
                        <CardDescription>{loan.desc}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between mb-4">
                      <div>
                        <p className="text-sm text-gray-500">Max Amount</p>
                        <p className="font-bold text-blue-600">{loan.amount}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Interest Rate</p>
                        <p className="font-bold text-green-600">{loan.rate} p.a.</p>
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Apply <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Education Loan Eligibility</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">For India Studies</h3>
                <ul className="space-y-3">
                  {[
                    "Admission to recognized institution",
                    "Class 12 pass minimum",
                    "Age 18-35 years",
                    "Parent/Sponsor CIBIL 650+",
                    "Decent household income",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">For Abroad Studies</h3>
                <ul className="space-y-3">
                  {[
                    "University acceptance letter",
                    "Valid passport",
                    "IELTS/TOEFL score",
                    "Parents' financial credentials",
                    "Age 18-45 years",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Education Loan FAQs</h2>
            <div className="space-y-4">
              {[
                {
                  q: "When does education loan repayment start?",
                  a: "Repayment typically starts 6 months after course completion. Interest may be paid during study period in some plans.",
                },
                {
                  q: "Can parents co-apply for education loan?",
                  a: "Yes, parents often co-apply as co-applicants. Their income and credit score help in loan approval.",
                },
                {
                  q: "Are education loans tax-deductible?",
                  a: "Yes! Education loan interest up to ₹1.5 Lakh per annum is tax-deductible under Section 80E of Income Tax Act.",
                },
              ].map((faq, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-900">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="apply" className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Invest in Your Future Education</h2>
            <p className="text-xl mb-8">Get instant education loan approval for your dream course</p>
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 text-lg px-8">
              Apply for Education Loan
            </Button>
          </div>
        </section>


      </div>
    </>
  )
}
