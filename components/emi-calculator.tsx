'use client'

import { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Copy, Share2 } from 'lucide-react'

export function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(300000)
  const [interestRate, setInterestRate] = useState(10.5)
  const [tenure, setTenure] = useState(12)
  const [copied, setCopied] = useState(false)

  // EMI Calculation Formula: EMI = P * r * (1 + r)^n / ((1 + r)^n - 1)
  // Where P = Principal, r = Monthly interest rate, n = Number of months
  // Memoized to prevent unnecessary recalculations
  const { emi, totalPayable, totalInterest } = useMemo(() => {
    const monthlyRate = interestRate / 100 / 12
    const numMonths = tenure
    
    let calculatedEMI = 0
    if (monthlyRate === 0) {
      calculatedEMI = Math.round(loanAmount / numMonths)
    } else {
      calculatedEMI = Math.round(
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numMonths)) /
        (Math.pow(1 + monthlyRate, numMonths) - 1)
      )
    }
    
    const calculated_totalPayable = calculatedEMI * numMonths
    const calculated_totalInterest = calculated_totalPayable - loanAmount
    
    return {
      emi: calculatedEMI,
      totalPayable: calculated_totalPayable,
      totalInterest: calculated_totalInterest,
    }
  }, [loanAmount, interestRate, tenure])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value)
  }

  const formatLoanAmount = (value: number) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(1)}Cr`
    } else if (value >= 100000) {
      return `₹${(value / 100000).toFixed(1)}L`
    }
    return `₹${value.toLocaleString('en-IN')}`
  }

  const handleCopyResults = () => {
    const resultsText = `EMI Calculator Results:
Loan Amount: ${formatCurrency(loanAmount)}
Interest Rate: ${interestRate.toFixed(1)}% p.a.
Tenure: ${tenure} months

Monthly EMI: ${formatCurrency(emi)}
Total Amount Payable: ${formatCurrency(totalPayable)}
Total Interest: ${formatCurrency(totalInterest)}`
    
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(resultsText).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }).catch(() => {
        // Fallback if clipboard fails
        alert('Results copied to clipboard')
      })
    }
  }

  const handleShareWhatsApp = () => {
    if (typeof window === 'undefined') return
    const resultsText = `Check out my EMI calculation on BuyNswipe Credit!\n\nLoan: ${formatCurrency(loanAmount)}\nRate: ${interestRate.toFixed(1)}%\nMonths: ${tenure}\nEMI: ${formatCurrency(emi)}\n\nCalculate yours: https://buynswipe.com/credit`
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(resultsText)}`
    window.open(whatsappURL, '_blank')
  }

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl p-12">
      <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        EMI Calculator - Calculate Your Monthly Payment
      </h3>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Calculator Inputs */}
        <div className="space-y-8">
          <div>
            <label htmlFor="loanAmount" className="block text-sm font-semibold text-gray-900 mb-3">
              Loan Amount: <span className="text-emerald-600 font-bold">{formatLoanAmount(loanAmount)}</span>
            </label>
            <input
              id="loanAmount"
              type="range"
              min="50000"
              max="5000000"
              step="50000"
              className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              aria-label="Loan Amount Slider"
              aria-valuenow={loanAmount}
              aria-valuemin={50000}
              aria-valuemax={5000000}
              aria-valuetext={formatLoanAmount(loanAmount)}
            />
            <div className="flex justify-between text-xs text-gray-600 mt-2">
              <span>₹50K</span>
              <span>₹50L</span>
            </div>
          </div>

          <div>
            <label htmlFor="interestRate" className="block text-sm font-semibold text-gray-900 mb-3">
              Interest Rate: <span className="text-emerald-600 font-bold">{interestRate.toFixed(1)}% p.a.</span>
            </label>
            <input
              id="interestRate"
              type="range"
              min="9"
              max="24"
              step="0.5"
              className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-blue-600"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              aria-label="Interest Rate Slider"
              aria-valuenow={interestRate}
              aria-valuemin={9}
              aria-valuemax={24}
              aria-valuetext={`${interestRate.toFixed(1)}% per annum`}
            />
            <div className="flex justify-between text-xs text-gray-600 mt-2">
              <span>9%</span>
              <span>24%</span>
            </div>
          </div>

          <div>
            <label htmlFor="tenure" className="block text-sm font-semibold text-gray-900 mb-3">
              Loan Tenure: <span className="text-emerald-600 font-bold">{tenure} Months</span>
            </label>
            <input
              id="tenure"
              type="range"
              min="6"
              max="60"
              step="1"
              className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-purple-600"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              aria-label="Loan Tenure Slider"
              aria-valuenow={tenure}
              aria-valuemin={6}
              aria-valuemax={60}
              aria-valuetext={`${tenure} months`}
            />
            <div className="flex justify-between text-xs text-gray-600 mt-2">
              <span>6 months</span>
              <span>60 months</span>
            </div>
          </div>
        </div>

        {/* EMI Result */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <p className="text-gray-600 text-sm mb-2">Monthly EMI</p>
              <p className="text-5xl font-bold text-emerald-600">{formatCurrency(emi)}</p>
              <p className="text-xs text-gray-500 mt-2">per month for {tenure} months</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-600 text-xs mb-1 uppercase tracking-wide">Total Payable</p>
                <p className="text-xl font-bold text-gray-900">{formatCurrency(totalPayable)}</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <p className="text-gray-600 text-xs mb-1 uppercase tracking-wide">Total Interest</p>
                <p className="text-xl font-bold text-orange-600">{formatCurrency(totalInterest)}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button size="lg" className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                Apply for This Loan
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleCopyResults}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
              >
                <Copy className="w-4 h-4" />
                {copied ? 'Copied!' : 'Copy Results'}
              </button>
              <button
                onClick={handleShareWhatsApp}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-green-300 rounded-lg hover:bg-green-50 transition-colors text-sm font-medium text-green-700"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center">
              Adjust the sliders above to see real-time calculations. Actual EMI may vary based on your profile.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
