"use client"

import { Search } from "lucide-react"
import { useState } from "react"
import { glossaryTerms } from "@/lib/glossary-terms"

export default function GlossaryClientPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTerms = glossaryTerms.filter(
    (term) =>
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Financial Glossary</h1>
          <p className="text-xl text-blue-100 mb-6">120+ financial terms explained simply</p>

          <div className="bg-white rounded-lg p-2 flex items-center max-w-md mx-auto">
            <Search className="w-5 h-5 text-gray-400 ml-3" />
            <input
              type="text"
              placeholder="Search terms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 text-gray-800 outline-none"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {filteredTerms.map((term, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-600 transition"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{term.term}</h3>
                <p className="text-gray-700 mb-3">{term.definition}</p>
                {term.example && (
                  <div className="bg-blue-50 rounded p-3 text-sm text-gray-700 mb-3">
                    <strong>Example:</strong> {term.example}
                  </div>
                )}
                {term.relatedTerms && (
                  <div className="text-sm">
                    <strong>Related:</strong> {term.relatedTerms.join(", ")}
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredTerms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No terms found. Try a different search.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
