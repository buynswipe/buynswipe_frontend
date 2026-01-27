"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { loanProducts, creditCardProducts } from "@/lib/affiliate-products"

export default function ClientAffiliateComparisonPage() {
  const [selectedLoans, setSelectedLoans] = useState<string[]>([])
  const [selectedCards, setSelectedCards] = useState<string[]>([])
  const [comparisonType, setComparisonType] = useState<"loans" | "cards">("loans")

  const toggleLoan = (id: string) => {
    setSelectedLoans((prev) => (prev.includes(id) ? prev.filter((l) => l !== id) : [...prev, id].slice(-4)))
  }

  const toggleCard = (id: string) => {
    setSelectedCards((prev) => (prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id].slice(-4)))
  }

  const getLoansToCompare = () => loanProducts.filter((l) => selectedLoans.includes(l.id))
  const getCardsToCompare = () => creditCardProducts.filter((c) => selectedCards.includes(c.id))

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Compare Financial Products</h1>
          <p className="text-xl text-gray-600">
            Side-by-side comparison of loans and credit cards to find the perfect fit
          </p>
        </div>

        {/* Type Selector */}
        <div className="flex gap-4 justify-center mb-12">
          <Button
            onClick={() => setComparisonType("loans")}
            variant={comparisonType === "loans" ? "default" : "outline"}
            className={comparisonType === "loans" ? "bg-blue-600" : ""}
          >
            Compare Loans
          </Button>
          <Button
            onClick={() => setComparisonType("cards")}
            variant={comparisonType === "cards" ? "default" : "outline"}
            className={comparisonType === "cards" ? "bg-purple-600" : ""}
          >
            Compare Cards
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Selector Panel */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>Select {comparisonType === "loans" ? "Loans" : "Cards"} to Compare</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {comparisonType === "loans"
                    ? loanProducts.map((loan) => (
                        <label
                          key={loan.id}
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedLoans.includes(loan.id)}
                            onChange={() => toggleLoan(loan.id)}
                            className="w-4 h-4"
                          />
                          <span className="text-sm">{loan.name}</span>
                        </label>
                      ))
                    : creditCardProducts.map((card) => (
                        <label
                          key={card.id}
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedCards.includes(card.id)}
                            onChange={() => toggleCard(card.id)}
                            className="w-4 h-4"
                          />
                          <span className="text-sm">{card.name}</span>
                        </label>
                      ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Comparison Table */}
          <div className="lg:col-span-2">
            {comparisonType === "loans" ? (
              <div className="space-y-4">
                {selectedLoans.length === 0 ? (
                  <Card className="p-8 text-center">
                    <p className="text-gray-600">Select loans to compare them side-by-side</p>
                  </Card>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-blue-100">
                          <th className="border p-3 text-left font-bold">Feature</th>
                          {getLoansToCompare().map((loan) => (
                            <th key={loan.id} className="border p-3 text-left font-bold">
                              <div className="flex justify-between items-start gap-2">
                                <span className="text-sm">{loan.name}</span>
                                <button onClick={() => toggleLoan(loan.id)} className="text-red-600 hover:text-red-800">
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-gray-50">
                          <td className="border p-3 font-medium">Amount</td>
                          {getLoansToCompare().map((loan) => (
                            <td key={loan.id} className="border p-3">
                              {loan.amount}
                            </td>
                          ))}
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="border p-3 font-medium">Interest Rate</td>
                          {getLoansToCompare().map((loan) => (
                            <td key={loan.id} className="border p-3 text-blue-600 font-bold">
                              {loan.rate}
                            </td>
                          ))}
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="border p-3 font-medium">Tenure</td>
                          {getLoansToCompare().map((loan) => (
                            <td key={loan.id} className="border p-3">
                              {loan.tenure}
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                {selectedCards.length === 0 ? (
                  <Card className="p-8 text-center">
                    <p className="text-gray-600">Select credit cards to compare them side-by-side</p>
                  </Card>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-purple-100">
                          <th className="border p-3 text-left font-bold">Feature</th>
                          {getCardsToCompare().map((card) => (
                            <th key={card.id} className="border p-3 text-left font-bold">
                              <div className="flex justify-between items-start gap-2">
                                <span className="text-sm">{card.name}</span>
                                <button onClick={() => toggleCard(card.id)} className="text-red-600 hover:text-red-800">
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-gray-50">
                          <td className="border p-3 font-medium">Annual Fee</td>
                          {getCardsToCompare().map((card) => (
                            <td key={card.id} className="border p-3">
                              {card.fees}
                            </td>
                          ))}
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="border p-3 font-medium">Cashback</td>
                          {getCardsToCompare().map((card) => (
                            <td key={card.id} className="border p-3 text-purple-600 font-bold">
                              {card.cashback}
                            </td>
                          ))}
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="border p-3 font-medium">Card Type</td>
                          {getCardsToCompare().map((card) => (
                            <td key={card.id} className="border p-3">
                              <Badge>{card.type}</Badge>
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
