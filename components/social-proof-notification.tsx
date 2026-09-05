"use client"

import { useState, useEffect } from "react"
import { X, CheckCircle } from "lucide-react"

interface Notification {
  id: string
  name: string
  action: string
  amount: string
  timeAgo: string
}

const notifications: Notification[] = [
  { id: "1", name: "John D.", action: "approved for", amount: "₹5L Personal Loan", timeAgo: "2 mins ago" },
  { id: "2", name: "Sarah M.", action: "got instant", amount: "₹50K BNPL", timeAgo: "5 mins ago" },
  { id: "3", name: "Raj K.", action: "approved for", amount: "₹25L Home Loan", timeAgo: "8 mins ago" },
  { id: "4", name: "Priya S.", action: "approved for", amount: "Premium Credit Card", timeAgo: "12 mins ago" },
  { id: "5", name: "Amit P.", action: "approved for", amount: "₹2L Business Loan", timeAgo: "15 mins ago" },
]

export function SocialProofNotification() {
  const [visible, setVisible] = useState(true)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % notifications.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  if (!visible) return null

  const notification = notifications[current]

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm border-l-4 border-green-500 animate-in">
      <div className="flex items-start gap-3">
        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-900">
            {notification.name} {notification.action}
          </p>
          <p className="text-sm text-gray-600">{notification.amount}</p>
          <p className="text-xs text-gray-500 mt-1">{notification.timeAgo}</p>
        </div>
        <button onClick={() => setVisible(false)} className="text-gray-400 hover:text-gray-600">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
