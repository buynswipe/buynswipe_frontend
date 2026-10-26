import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shopping savings analyzer | ShopNdeal",
  description: "Analyze a supported shopping link for potential savings routes. Results are estimates and merchant terms apply.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/shop/analyze" },
}

export default function AnalyzeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
