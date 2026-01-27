import type { Metadata } from "next"
import GlossaryClientPage from "./glossary-client"

export const metadata: Metadata = {
  title: "Financial Glossary | 120+ Terms Explained | BuyNswipe",
  description:
    "Comprehensive financial glossary with 120+ terms explained simply. Learn about credit cards, loans, EMI, CIBIL, interest rates, and more.",
  keywords: [
    "financial glossary",
    "credit card terms",
    "loan terminology",
    "finance dictionary",
    "what is EMI",
    "what is CIBIL",
  ],
}

export default function GlossaryPage() {
  return <GlossaryClientPage />
}
