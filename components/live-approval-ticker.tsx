"use client"

import { useEffect, useState } from "react"
import { CheckCircle } from "lucide-react"

interface Approval {
  id: string
  name: string
  product: string
}

const approvals: Approval[] = [
  { id: "1", name: "Amit K.", product: "Personal Loan ₹5L" },
  { id: "2", name: "Priya M.", product: "Credit Card - Cashback" },
  { id: "3", name: "Rajesh P.", product: "Home Loan ₹25L" },
  { id: "4", name: "Neha S.", product: "BNPL ₹50K" },
  { id: "5", name: "Vikram D.", product: "Business Loan ₹10L" },
]

export function LiveApprovalTicker() {
  const [displayApprovals, setDisplayApprovals] = useState(approvals)

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayApprovals((prev) => {
        const newList = [...prev]
        newList.shift()
        newList.push({
          id: Math.random().toString(),
          name: "New User",
          product: "Product Approved",
        })
        return newList
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 border-t border-green-200 py-3 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-sm">
          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
          <span className="text-gray-600 font-semibold">Live Approvals:</span>
          <div className="flex gap-4 overflow-hidden flex-1">
            {displayApprovals.map((approval) => (
              <span key={approval.id} className="text-gray-700 whitespace-nowrap animate-pulse">
                {approval.name} approved for {approval.product}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
