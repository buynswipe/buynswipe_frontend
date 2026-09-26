import { generateText } from "ai"
import { NextResponse } from "next/server"
import { searchSite } from "@/lib/site-search"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const query = typeof body?.query === "string" ? body.query.trim().slice(0, 240) : ""
    if (!query) return NextResponse.json({ error: "Enter a question." }, { status: 400 })

    const sources = searchSite(query, "All").slice(0, 8)
    const sourceText = sources.map((source) => `- ${source.title} (${source.href}): ${source.description}`).join("\n")
    const { text } = await generateText({
      model: "openai/o4-mini",
      system: "You are BuyNswipe's grounded ecosystem guide. Answer only from the supplied source pages. Never invent rates, approvals, partners, licenses, certifications, customer numbers, or regulatory claims. If the sources are insufficient, say so and direct the user to the most relevant source. Keep answers concise and include source links in markdown.",
      prompt: `Question: ${query}\n\nApproved source pages:\n${sourceText || "No matching approved source pages."}`,
      maxOutputTokens: 300,
    })
    return NextResponse.json({ answer: text, sources: sources.map(({ title, href }) => ({ title, href })) })
  } catch {
    return NextResponse.json({ error: "AI search is temporarily unavailable." }, { status: 503 })
  }
}
