"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const money = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 })

export default function AffordabilityCalculatorPage() {
  const [income, setIncome] = useState(50000)
  const [existingEmi, setExistingEmi] = useState(10000)
  const [emiPercent, setEmiPercent] = useState(30)
  const result = useMemo(() => { const affordableEmi = Math.max(0, income * (emiPercent / 100) - existingEmi); return { affordableEmi, loan: affordableEmi * 60 } }, [income, existingEmi, emiPercent])
  return <div className="min-h-screen bg-gradient-to-b from-green-50 to-white"><header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm"><div className="container mx-auto px-4 py-4"><Link href="/credit" className="text-blue-600 hover:underline">← Back to Credit</Link></div></header><main className="container mx-auto px-4 py-12"><div className="mb-12 text-center"><h1 className="mb-4 text-4xl font-bold text-gray-900">Loan Affordability Calculator</h1><p className="text-xl text-gray-600">Find out how much you can borrow based on your income</p></div><div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2"><Card><CardHeader><CardTitle>Your Financial Details</CardTitle></CardHeader><CardContent className="space-y-6"><label className="block text-sm font-semibold">Monthly Income (₹)<input aria-label="Monthly income" type="number" min="0" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="mt-2 w-full rounded border px-3 py-2" /></label><label className="block text-sm font-semibold">Existing Loan EMI (₹)<input aria-label="Existing loan EMI" type="number" min="0" value={existingEmi} onChange={(e) => setExistingEmi(Number(e.target.value))} className="mt-2 w-full rounded border px-3 py-2" /></label><label className="block text-sm font-semibold">Preferred EMI % of Income<input aria-label="Preferred EMI percentage" type="number" min="1" max="80" value={emiPercent} onChange={(e) => setEmiPercent(Number(e.target.value))} className="mt-2 w-full rounded border px-3 py-2" /></label><p className="text-xs text-gray-500">Estimate uses 60 months and does not represent a lender approval.</p></CardContent></Card><Card className="bg-green-600 text-white"><CardHeader><CardTitle>Your Affordability</CardTitle></CardHeader><CardContent className="space-y-6"><div className="rounded-lg bg-white/10 p-6"><p className="mb-2 text-green-200">Estimated Affordable Loan</p><p className="text-5xl font-bold">{money.format(result.loan)}</p></div><p className="text-sm text-green-200">Estimated monthly EMI: {money.format(result.affordableEmi)}</p><Link href="/credit/affiliate-loans" className="block"><span className="block rounded bg-white px-4 py-3 text-center font-semibold text-green-600">Explore Loan Options</span></Link></CardContent></Card></div></main></div>
}
