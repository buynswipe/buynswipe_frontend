"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const money = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 })

export default function ROICalculatorPage() {
  const [principal, setPrincipal] = useState(100000)
  const [rate, setRate] = useState(12)
  const [years, setYears] = useState(5)
  const result = useMemo(() => {
    const finalAmount = principal * Math.pow(1 + rate / 100, years)
    return { finalAmount, profit: finalAmount - principal, roi: principal ? ((finalAmount - principal) / principal) * 100 : 0 }
  }, [principal, rate, years])

  return <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white"><header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm"><div className="container mx-auto px-4 py-4"><Link href="/resources" className="text-blue-600 hover:underline">← Back</Link></div></header><main className="container mx-auto px-4 py-12"><div className="mb-12 text-center"><h1 className="mb-4 text-4xl font-bold text-gray-900">Investment ROI Calculator</h1><p className="text-xl text-gray-600">Calculate returns from your investments with compounding</p></div><div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2"><Card><CardHeader><CardTitle>Investment Details</CardTitle></CardHeader><CardContent className="space-y-6"><label className="block text-sm font-semibold">Initial Investment (₹)<input aria-label="Initial investment" type="number" min="0" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className="mt-2 w-full rounded border px-3 py-2" /></label><label className="block text-sm font-semibold">Annual Return Rate (%)<input aria-label="Annual return rate" type="number" min="0" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="mt-2 w-full rounded border px-3 py-2" /></label><label className="block text-sm font-semibold">Investment Period (Years)<input aria-label="Investment period" type="number" min="1" value={years} onChange={(e) => setYears(Number(e.target.value))} className="mt-2 w-full rounded border px-3 py-2" /></label><p className="text-xs text-gray-500">Illustration only. Actual returns vary by product and market conditions.</p></CardContent></Card><Card className="bg-purple-600 text-white"><CardHeader><CardTitle>Your Returns</CardTitle></CardHeader><CardContent className="space-y-6"><div className="rounded-lg bg-white/10 p-6"><p className="mb-2 text-purple-200">Final Amount</p><p className="text-5xl font-bold">{money.format(result.finalAmount)}</p></div><div className="grid grid-cols-2 gap-4"><div className="rounded bg-white/10 p-4"><p className="text-sm text-purple-200">Profit Gained</p><p className="text-2xl font-bold">{money.format(result.profit)}</p></div><div className="rounded bg-white/10 p-4"><p className="text-sm text-purple-200">ROI %</p><p className="text-2xl font-bold">{result.roi.toFixed(2)}%</p></div></div></CardContent></Card></div></main></div>
}
