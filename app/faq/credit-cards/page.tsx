import type { Metadata } from "next"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Credit Card FAQ | Benefits, Eligibility, How to Apply | BuyNswipe",
  description: "Comprehensive FAQ about credit cards. Learn about benefits, eligibility, application process, interest rates, and reward points.",
  keywords: ["credit card FAQ", "eligibility", "benefits", "how to apply", "interest rates", "rewards"],
}

const creditCardFaqs = [
  {
    category: "Eligibility",
    questions: [
      {
        q: "Who can apply for a credit card?",
        a: "You must be an Indian citizen aged 18-70 with a minimum monthly income of ₹25,000 and a CIBIL score of 700+.",
      },
      {
        q: "Do I need to be a salary account holder to apply?",
        a: "Not necessarily. Self-employed individuals and business owners can apply with business income proof and recent ITRs.",
      },
    ],
  },
  {
    category: "Benefits",
    questions: [
      {
        q: "What are the main benefits of having a credit card?",
        a: "Benefits include reward points/cashback, interest-free EMI options, purchase protection, travel insurance, and building credit score.",
      },
      {
        q: "What is cashback on credit cards?",
        a: "Cashback is a percentage of your spending returned as cash or points. For example, 1% cashback means ₹1 back for every ₹100 spent.",
      },
    ],
  },
  {
    category: "Charges & Fees",
    questions: [
      {
        q: "What is the annual fee for credit cards?",
        a: "Annual fees range from ₹0 (free cards) to ₹2,500+. Premium cards may have higher annual fees but offer better benefits.",
      },
      {
        q: "What is a late payment fee?",
        a: "If you don't pay your minimum due by the due date, a penalty of ₹100-1,000 is charged depending on the card and amount due.",
      },
    ],
  },
  {
    category: "Application",
    questions: [
      {
        q: "How do I apply for a credit card?",
        a: "You can apply online through bank websites, credit card comparison websites like BuyNswipe, or visit bank branches. You'll need to provide basic information and documents.",
      },
      {
        q: "How long does credit card approval take?",
        a: "Typically 5-10 days. Some banks offer instant approval with instant activation.",
      },
    ],
  },
]

export default function CreditCardsFAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Credit Card FAQ</h1>
          <p className="text-xl text-blue-100">Everything you need to know about credit cards</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          {creditCardFaqs.map((section) => (
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
