import type { Metadata } from "next"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Personal Loan FAQ | Eligibility, Documents, Interest Rates | BuyNswipe",
  description: "Comprehensive FAQ about personal loans. Find answers on eligibility, interest rates, processing time, documents needed, and loan approval process.",
  keywords: ["personal loan FAQ", "loan eligibility", "interest rates", "processing time", "loan documents"],
}

const loanFaqs = [
  {
    category: "Eligibility",
    questions: [
      {
        q: "Who is eligible for a personal loan?",
        a: "You need to be an Indian citizen aged 18-60, with a minimum monthly income of ₹15,000. A CIBIL score of 650+ and stable employment or business for 2+ years is required.",
      },
      {
        q: "What is the minimum CIBIL score for a personal loan?",
        a: "Most lenders require a CIBIL score of 650+. However, some lenders may approve with scores of 550-600 at higher interest rates.",
      },
    ],
  },
  {
    category: "Documents",
    questions: [
      {
        q: "What documents do I need for a personal loan application?",
        a: "Required documents: Identity proof (Aadhar/PAN/Passport), Address proof, Income proof (salary slips/ITR), Employment/business proof, and Bank statements (last 6 months).",
      },
    ],
  },
  {
    category: "Interest Rates",
    questions: [
      {
        q: "What is the typical interest rate range for personal loans?",
        a: "Personal loan interest rates in India range from 9% to 20% per annum, depending on CIBIL score, income, and lender.",
      },
    ],
  },
  {
    category: "Processing",
    questions: [
      {
        q: "How long does personal loan approval take?",
        a: "Approval typically takes 1-3 days. Disbursal happens within 24-48 hours of approval.",
      },
      {
        q: "Can I get a personal loan in 24 hours?",
        a: "Yes, some lenders offer instant personal loans with instant disbursal, but typically at higher interest rates.",
      },
    ],
  },
]

export default function LoansFAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Personal Loan FAQ</h1>
          <p className="text-xl text-blue-100">Find answers to common questions about personal loans</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          {loanFaqs.map((section) => (
            <div key={section.category}>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">{section.category}</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {section.questions.map((item, idx) => (
                  <AccordionItem key={idx} value={`${section.category}-${idx}`} className="border rounded-lg">
                    <AccordionTrigger className="px-4 py-3 hover:bg-blue-50">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 text-gray-700">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
