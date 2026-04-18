'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, AlertCircle, ArrowRight } from 'lucide-react'

type EmploymentType = 'salaried' | 'self-employed' | 'business'

interface EligibilityResult {
  percentage: number
  eligible: boolean
  products: string[]
  criteria: {
    passed: string[]
    failed: string[]
  }
  maxLoanAmount: number
  interestRateRange: string
}

export function EligibilityChecker() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    employmentType: 'salaried' as EmploymentType,
    monthlyIncome: 30000,
    age: 30,
    existingLoans: false,
    cibilScore: null as number | null,
  })

  const [result, setResult] = useState<EligibilityResult | null>(null)
  const [loading, setLoading] = useState(false)

  // Real-time eligibility calculation based on criteria
  const calculateEligibility = (data: typeof formData): EligibilityResult => {
    const criteria = {
      passed: [] as string[],
      failed: [] as string[],
    }

    let score = 0
    const maxScore = 6

    // Age check: 21-65 years
    if (data.age >= 21 && data.age <= 65) {
      criteria.passed.push('Age between 21-65 years')
      score += 1
    } else {
      criteria.failed.push('Age must be between 21-65 years')
    }

    // Income check: Minimum ₹15,000/month for salaried, ₹25,000 for self-employed
    const minIncome = data.employmentType === 'salaried' ? 15000 : 25000
    if (data.monthlyIncome >= minIncome) {
      criteria.passed.push(`Monthly income above ₹${minIncome.toLocaleString('en-IN')}`)
      score += 1
    } else {
      criteria.failed.push(`Minimum monthly income required: ₹${minIncome.toLocaleString('en-IN')}`)
    }

    // Employment stability
    if (data.employmentType === 'salaried') {
      criteria.passed.push('Salaried employment (stable)')
      score += 1
    } else if (data.employmentType === 'business') {
      criteria.passed.push('Business owner (2+ years required)')
      score += 0.8
    } else {
      criteria.passed.push('Self-employed professional')
      score += 0.6
    }

    // Existing loans (no loans = better)
    if (!data.existingLoans) {
      criteria.passed.push('No existing loans')
      score += 1
    } else {
      criteria.failed.push('Existing loans may affect approval')
      score += 0.5
    }

    // CIBIL score (if provided)
    if (data.cibilScore !== null) {
      if (data.cibilScore >= 700) {
        criteria.passed.push(`Excellent CIBIL score: ${data.cibilScore}`)
        score += 1
      } else if (data.cibilScore >= 600) {
        criteria.passed.push(`Good CIBIL score: ${data.cibilScore}`)
        score += 0.8
      } else {
        criteria.failed.push(`Low CIBIL score: ${data.cibilScore}. Approval uncertain.`)
        score += 0.3
      }
    } else {
      criteria.passed.push('CIBIL check available without score')
      score += 0.7
    }

    // Phone validation
    if (data.phone.length === 10 && /^\d+$/.test(data.phone)) {
      criteria.passed.push('Valid phone number')
      score += 0.5
    } else {
      criteria.failed.push('Enter valid 10-digit phone number')
    }

    // Calculate eligibility percentage
    const percentage = Math.round((score / maxScore) * 100)

    // Determine eligible products based on score
    const products: string[] = []
    if (score >= 4) {
      products.push('Personal Loan')
      if (data.employmentType !== 'salaried') {
        products.push('Business Loan')
      }
      products.push('Credit Card')
      products.push('BNPL')
      if (data.monthlyIncome >= 50000) {
        products.push('Home Loan')
      }
    } else if (score >= 2.5) {
      products.push('Personal Loan')
      if (data.employmentType !== 'salaried') {
        products.push('Business Loan')
      }
      products.push('Credit Card')
    } else {
      products.push('Personal Loan (Limited Amount)')
    }

    // Calculate max loan amount
    let maxLoanAmount = data.monthlyIncome * 6 // 6 months salary
    if (score >= 5) {
      maxLoanAmount = Math.min(data.monthlyIncome * 24, 5000000) // Up to 24 months, max ₹50L
    } else if (score >= 3) {
      maxLoanAmount = Math.min(data.monthlyIncome * 12, 2500000)
    } else {
      maxLoanAmount = Math.min(data.monthlyIncome * 6, 500000)
    }

    // Interest rate range based on CIBIL and score
    let interestRateRange = '18% - 24% p.a.'
    if (data.cibilScore && data.cibilScore >= 750) {
      interestRateRange = '10.5% - 15% p.a.'
    } else if (data.cibilScore && data.cibilScore >= 700) {
      interestRateRange = '12% - 18% p.a.'
    } else if (data.cibilScore && data.cibilScore >= 600) {
      interestRateRange = '15% - 21% p.a.'
    }

    return {
      percentage,
      eligible: percentage >= 50,
      products,
      criteria,
      maxLoanAmount,
      interestRateRange,
    }
  }

  const handleInputChange = (field: string, value: any) => {
    const updated = { ...formData, [field]: value }
    setFormData(updated)

    // Real-time calculation
    const newResult = calculateEligibility(updated)
    setResult(newResult)
  }

  const handleSubmit = () => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      const finalResult = calculateEligibility(formData)
      setResult(finalResult)
    }, 500)
  }

  const handleApply = () => {
    // In real app, this would redirect to application
    if (typeof window !== 'undefined') {
      window.location.href = '/credit/personal-loan'
    }
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl p-12">
      <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Check Loan Eligibility - Free & Instant</h3>
      <p className="text-center text-gray-600 mb-8">Answer a few questions to see which loans you're eligible for</p>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Form Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="John Doe"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="9876543210"
              maxLength="10"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            {formData.phone && (formData.phone.length !== 10 || !/^\d+$/.test(formData.phone)) && (
              <p className="text-xs text-red-500 mt-1">Enter valid 10-digit phone number</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Employment Type</label>
            <select
              value={formData.employmentType}
              onChange={(e) => handleInputChange('employmentType', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="salaried">Salaried Employee</option>
              <option value="self-employed">Self-Employed Professional</option>
              <option value="business">Business Owner</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Monthly Income: <span className="text-emerald-600">₹{formData.monthlyIncome.toLocaleString('en-IN')}</span>
            </label>
            <input
              type="range"
              min="10000"
              max="500000"
              step="5000"
              value={formData.monthlyIncome}
              onChange={(e) => handleInputChange('monthlyIncome', Number(e.target.value))}
              className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="flex justify-between text-xs text-gray-600 mt-1">
              <span>₹10K</span>
              <span>₹5L+</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Age: {formData.age}</label>
            <input
              type="range"
              min="18"
              max="65"
              value={formData.age}
              onChange={(e) => handleInputChange('age', Number(e.target.value))}
              className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.existingLoans}
                onChange={(e) => handleInputChange('existingLoans', e.target.checked)}
                className="w-5 h-5 text-emerald-600 rounded focus:ring-2 focus:ring-emerald-500"
              />
              <span className="text-sm font-medium text-gray-900">I have existing loans</span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              CIBIL Score <span className="text-gray-500 font-normal">(Optional)</span>
            </label>
            <input
              type="number"
              value={formData.cibilScore || ''}
              onChange={(e) => handleInputChange('cibilScore', e.target.value ? Number(e.target.value) : null)}
              placeholder="300 - 900"
              min="300"
              max="900"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <p className="text-xs text-gray-500 mt-1">Leave blank to skip. We'll check it for you.</p>
          </div>

          <Button
            type="button"
            onClick={handleSubmit}
            disabled={!formData.name || !formData.phone || formData.phone.length !== 10}
            size="lg"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold"
          >
            {loading ? 'Checking...' : 'Check Eligibility'}
          </Button>
        </div>

        {/* Results Section */}
        <div>
          {result ? (
            <div className="space-y-6">
              <Card className="border-2 bg-white">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <div className={`absolute inset-0 rounded-full flex items-center justify-center text-4xl font-bold ${result.eligible ? 'text-emerald-600' : 'text-orange-600'}`}>
                          <div className={`w-28 h-28 rounded-full border-8 flex items-center justify-center ${result.eligible ? 'border-emerald-600 bg-emerald-50' : 'border-orange-600 bg-orange-50'}`}>
                            {result.percentage}%
                          </div>
                        </div>
                      </div>
                    </div>

                    <h4 className={`text-xl font-bold mb-2 ${result.eligible ? 'text-emerald-600' : 'text-orange-600'}`}>
                      {result.eligible ? 'Good News! Eligible for Loans' : 'Improve Your Profile'}
                    </h4>
                    <p className="text-gray-600">
                      {result.eligible
                        ? `You're eligible for ${result.products.length} loan products`
                        : 'Try increasing income or clearing existing loans'}
                    </p>
                  </div>

                  {/* Eligible Products */}
                  {result.products.length > 0 && (
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-3">Eligible Products</h5>
                      <div className="space-y-2">
                        {result.products.map((product) => (
                          <div key={product} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                            <span className="text-gray-700">{product}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Loan Details */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-3">
                    <div>
                      <p className="text-xs text-gray-600 uppercase tracking-wide">Max Loan Amount</p>
                      <p className="text-xl font-bold text-gray-900">₹{(result.maxLoanAmount / 100000).toFixed(1)}L</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 uppercase tracking-wide">Interest Rate Range</p>
                      <p className="text-lg font-semibold text-emerald-600">{result.interestRateRange}</p>
                    </div>
                  </div>

                  {/* Eligibility Criteria */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Eligibility Criteria</h5>
                    <div className="space-y-2 text-sm">
                      {result.criteria.passed.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                      {result.criteria.failed.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button type="button" onClick={handleApply} size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                    Apply Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    This is an indicative check. Final approval depends on document verification.
                  </p>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card className="border-2 bg-white/50 flex items-center justify-center h-full">
              <CardContent className="text-center p-8">
                <p className="text-gray-500">Fill in your details and click "Check Eligibility"</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
