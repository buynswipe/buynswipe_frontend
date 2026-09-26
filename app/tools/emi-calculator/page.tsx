"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { ArrowLeft, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const formatCurrency = (value: number) => `₹${Math.round(value).toLocaleString("en-IN")}`

export default function EMICalculatorPage() {
  const [amount, setAmount] = useState(500000)
  const [rate, setRate] = useState(12)
  const [months, setMonths] = useState(36)
  const result = useMemo(() => {
    const monthlyRate = rate / 1200
    const emi = monthlyRate === 0 ? amount / months : amount * monthlyRate * (1 + monthlyRate) ** months / ((1 + monthlyRate) ** months - 1)
    return { emi, interest: emi * months - amount, total: emi * months }
  }, [amount, rate, months])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm"><div className="container mx-auto flex items-center justify-between px-4 py-4"><Link href="/credit" className="flex items-center gap-2 text-gray-600 hover:text-blue-600"><ArrowLeft className="size-5" />Back</Link><span className="text-xl font-bold">BuyNswipe</span></div></header>
      <main className="container mx-auto px-4 py-12"><div className="mx-auto mb-12 max-w-3xl text-center"><h1 className="text-4xl font-bold text-gray-900 md:text-5xl">Advanced EMI Calculator</h1><p className="mt-4 text-xl text-gray-600">Calculate your monthly payment, total interest, and repayment total instantly.</p></div>
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3"><Card className="shadow-xl"><CardHeader><CardTitle className="flex items-center gap-2"><Calculator className="size-6 text-blue-600" />Loan details</CardTitle></CardHeader><CardContent className="space-y-5"><label className="block text-sm font-semibold">Loan amount (₹)<input aria-label="Loan amount" type="number" min="1" value={amount} onChange={(event) => setAmount(Math.max(1, Number(event.target.value)))} className="mt-2 w-full rounded border px-3 py-2" /></label><label className="block text-sm font-semibold">Interest rate (% p.a.)<input aria-label="Interest rate" type="number" min="0" step="0.1" value={rate} onChange={(event) => setRate(Math.max(0, Number(event.target.value)))} className="mt-2 w-full rounded border px-3 py-2" /></label><label className="block text-sm font-semibold">Tenure (months)<input aria-label="Tenure" type="number" min="1" value={months} onChange={(event) => setMonths(Math.max(1, Number(event.target.value)))} className="mt-2 w-full rounded border px-3 py-2" /></label><p className="text-xs leading-5 text-gray-500">This estimate is for planning only. Actual rates, fees, and approval terms depend on the lender.</p></CardContent></Card>
          <Card className="bg-blue-600 text-white shadow-xl lg:col-span-2"><CardHeader><CardTitle>Estimated repayment</CardTitle></CardHeader><CardContent className="space-y-6"><div className="rounded-lg bg-white/10 p-6"><p className="text-blue-200">Monthly EMI</p><p className="mt-2 text-5xl font-bold">{formatCurrency(result.emi)}</p></div><div className="grid grid-cols-1 gap-4 sm:grid-cols-3"><div className="rounded bg-white/10 p-4"><p className="text-sm text-blue-200">Principal</p><p className="text-2xl font-bold">{formatCurrency(amount)}</p></div><div className="rounded bg-white/10 p-4"><p className="text-sm text-blue-200">Total interest</p><p className="text-2xl font-bold">{formatCurrency(result.interest)}</p></div><div className="rounded bg-white/10 p-4"><p className="text-sm text-blue-200">Total repayment</p><p className="text-2xl font-bold">{formatCurrency(result.total)}</p></div></div><Button asChild className="w-full bg-white text-blue-600 hover:bg-blue-50"><Link href="/credit/affiliate-credit-cards">Explore credit offers</Link></Button></CardContent></Card></div>
      </main>
    </div>
  )
}
