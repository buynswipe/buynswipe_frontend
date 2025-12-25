import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Shield,
  Globe,
  Smartphone,
  Users,
  TrendingUp,
  CheckCircle,
  Download,
  Phone,
  Mail,
  Linkedin,
  Star,
  Award,
  Banknote,
  CreditCard,
  Wallet,
  HandCoins,
  Target,
  Zap,
  Network,
} from "lucide-react"
import Link from "next/link"

export default function BuyNswipeLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold text-gray-900">BuyNswipe</span>
            <Badge variant="secondary" className="ml-2">
              For Sale
            </Badge>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#assets" className="text-gray-600 hover:text-blue-600 transition-colors">
              Assets
            </Link>
            <Link href="/credit" className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors">
              BuyNswipe Credit
            </Link>
            <Link href="#funding" className="text-gray-600 hover:text-blue-600 transition-colors">
              Funding
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
            <Award className="w-4 h-4 mr-1" />
            Government Recognized Startup
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            BuyNswipe – Pre-Funded, Govt-Recognized <span className="text-blue-600">Fintech SaaS Startup</span> for Sale
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Registered company (2017) • Trademarked • Premium domains • ₹17 L seed-funded • Clean and compliant
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Download className="w-5 h-5 mr-2" />
              Download Teaser
            </Button>
            <Button size="lg" variant="outline">
              Request Brochure
            </Button>
            <Button size="lg" variant="outline">
              <Phone className="w-5 h-5 mr-2" />
              Contact Founder
            </Button>
          </div>

          <div className="mt-12 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl p-6 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <Badge className="bg-white/20 text-white border-0 mb-2">Featured Product</Badge>
                <h3 className="text-xl font-bold">BuyNswipe Credit - AI-Powered Loan & Credit Card Marketplace</h3>
                <p className="text-emerald-100 text-sm mt-1">Instant loans, credit cards, BNPL - Compare 50+ banks</p>
              </div>
              <Link href="/credit">
                <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 whitespace-nowrap">
                  Explore BuyNswipe Credit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About BuyNswipe</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive digital payment solutions platform with 7+ years of market presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Building2 className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Incorporated in 2017</h3>
                    <p className="text-gray-600">Registered in Noida/NCR under Startup India (DPIIT)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Banknote className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Digital Payment Solutions</h3>
                    <p className="text-gray-600">AEPS, Aadhaar ATM, micro-ATM, recharge, BBPS, money transfer</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Mission</h3>
                    <p className="text-gray-600 italic">
                      "Make digital payments so easy, safe & universally accepted that people never feel the need to
                      carry cash."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 text-center">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">BuyNswipe Platform & POS Integration</h3>
                  <p className="text-gray-600 text-sm">Future payment infrastructure</p>
                </div>

                {/* POS System Mockup */}
                <div className="relative bg-white rounded-xl p-6 shadow-lg mb-4">
                  <div className="flex items-center justify-center space-x-4">
                    {/* POS Terminal Mockup */}
                    <div className="bg-gray-900 rounded-lg p-4 w-48 h-32 flex flex-col justify-between">
                      <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded text-center font-bold">
                        BuyNswipe POS
                      </div>
                      <div className="bg-green-400 text-black text-xs px-2 py-1 rounded text-center">
                        ₹1,250.00 - APPROVED
                      </div>
                      <div className="flex justify-between text-white text-xs">
                        <span>Card: ****1234</span>
                        <span>✓ Success</span>
                      </div>
                    </div>

                    {/* Credit Card Mockup */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 w-40 h-24 text-white relative overflow-hidden">
                      <div className="absolute top-2 right-2 w-8 h-6 bg-white/20 rounded"></div>
                      <div className="absolute bottom-2 left-4">
                        <div className="text-xs opacity-80">BuyNswipe Card</div>
                        <div className="text-sm font-mono">**** 1234</div>
                      </div>
                      <div className="absolute top-2 left-4 text-xs font-bold">BuyNswipe™</div>
                    </div>
                  </div>

                  {/* Integration Benefits */}
                  <div className="grid grid-cols-3 gap-4 mt-6 text-center">
                    <div>
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-xs text-gray-600">Multi-payment acceptance</p>
                    </div>
                    <div>
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <CreditCard className="w-4 h-4 text-blue-600" />
                      </div>
                      <p className="text-xs text-gray-600">Co-branded cards</p>
                    </div>
                    <div>
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <TrendingUp className="w-4 h-4 text-purple-600" />
                      </div>
                      <p className="text-xs text-gray-600">Revenue growth</p>
                    </div>
                  </div>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/50 rounded-lg p-3">
                    <div className="text-lg font-bold text-blue-600">₹2,500+ Cr</div>
                    <div className="text-xs text-gray-600">POS Market Size</div>
                  </div>
                  <div className="bg-white/50 rounded-lg p-3">
                    <div className="text-lg font-bold text-green-600">50M+</div>
                    <div className="text-xs text-gray-600">Target Merchants</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Why BuyNswipe Section */}
      <section id="assets" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why BuyNswipe? – Complete Growth-Ready Package</h2>
            <p className="text-lg text-gray-600">Comprehensive digital assets + untapped market potential</p>
          </div>

          {/* Existing Assets */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Included Digital Assets</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardContent className="p-6 text-center">
                  <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Registered Company</h4>
                  <p className="text-gray-600 text-sm">7+ years of existence, clean ROC records</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Trademarked Brand</h4>
                  <p className="text-gray-600 text-sm">BuyNswipe™ registered trademark</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardContent className="p-6 text-center">
                  <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Premium Domains</h4>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Social Media Profiles</h4>
                  <p className="text-gray-600 text-sm">Active handles across all major platforms</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardContent className="p-6 text-center">
                  <Smartphone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Mobile App</h4>
                  <p className="text-gray-600 text-sm">N/A</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Govt Recognition</h4>
                  <p className="text-gray-600 text-sm">Startup India certified</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Growth Potential */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Untapped Growth Potential</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">POS Market Entry</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Future payment infrastructure plan for POS integration</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">AEPS & micro-ATM experience translates to POS expertise</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Established merchant relationships for rapid deployment</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Future Revenue Diversification</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span className="text-gray-700">Multiple revenue streams: transaction fees, hardware, SaaS</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span className="text-gray-700">Recurring revenue model with merchant subscriptions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span className="text-gray-700">Value-added services: analytics, inventory, loyalty programs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity & POS Potential */}
      {/* Enhanced Market Opportunity & Strategic Value */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Opportunity & Strategic Value Proposition</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Positioned to capitalize on India's rapidly expanding digital payments, POS, and card issuance markets
            </p>
          </div>

          {/* Market Size Overview */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-8 text-center">
                <TrendingUp className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-800 mb-2">₹2,500+ Cr</h3>
                <p className="text-blue-700 font-medium">POS Terminal Market</p>
                <p className="text-sm text-blue-600 mt-2">15% CAGR through 2027</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="p-8 text-center">
                <CreditCard className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-800 mb-2">₹1,200+ Cr</h3>
                <p className="text-green-700 font-medium">Prepaid Card Market</p>
                <p className="text-sm text-green-600 mt-2">22% CAGR growth rate</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-8 text-center">
                <Wallet className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-purple-800 mb-2">₹8,500+ Cr</h3>
                <p className="text-purple-700 font-medium">Digital Payments TAM</p>
                <p className="text-sm text-purple-600 mt-2">Combined addressable market</p>
              </CardContent>
            </Card>
          </div>

          {/* POS Integration Potential */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Future POS Integration Plan Infrastructure</h3>
              <p className="text-blue-100 max-w-3xl mx-auto">
                BuyNswipe's existing payment infrastructure provides the perfect foundation for comprehensive POS
                solutions
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2">mPOS Solutions</h4>
                <p className="text-blue-100 text-sm">Transform smartphones into POS terminals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2">Traditional POS</h4>
                <p className="text-blue-100 text-sm">Hardware-based POS for established businesses</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2">Cloud POS</h4>
                <p className="text-blue-100 text-sm">Web-based POS with real-time analytics</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2">Integrated Cards</h4>
                <p className="text-blue-100 text-sm">Co-branded card acceptance & issuance</p>
              </div>
            </div>
          </div>

          {/* Target Market Segments */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-semibold mb-2">Retail Stores</h4>
                <p className="text-sm text-gray-600">15M+ small retail outlets</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Restaurants</h4>
                <p className="text-sm text-gray-600">2M+ food service businesses</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Service Providers</h4>
                <p className="text-sm text-gray-600">5M+ service businesses</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold mb-2">E-commerce</h4>
                <p className="text-sm text-gray-600">Growing online-to-offline integration</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Co-branded Cards Opportunity */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Co-branded Credit & Prepaid Cards Opportunity</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leverage future infrastructure to launch co-branded card programs with strategic partners
            </p>
          </div>

          {/* Card Market Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Card Issuance Market Potential</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">₹1,200+ Crore Prepaid Market</h4>
                    <p className="text-gray-600">Growing at 22% CAGR with corporate adoption</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Wallet className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">85M+ Credit Card Users</h4>
                    <p className="text-gray-600">Expanding co-branded card partnerships</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <HandCoins className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Corporate Expense Cards</h4>
                    <p className="text-gray-600">High-margin B2B segment opportunity</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Revenue Potential per Card Program</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Interchange Revenue</span>
                    <span className="font-bold text-green-600">₹50-150/txn</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Annual Fees</span>
                    <span className="font-bold text-blue-600">₹500-5,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Partner Commission</span>
                    <span className="font-bold text-purple-600">2-5% of spend</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 font-medium">Potential ARR per 10K cards</span>
                      <span className="font-bold text-orange-600">₹2-8 Crore</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Card Program Types */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <CreditCard className="w-16 h-16 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-4">Corporate Prepaid Cards</h3>
                <ul className="text-blue-100 text-sm space-y-2">
                  <li>Employee expense management</li>
                  <li>Vendor payment solutions</li>
                  <li>Travel & entertainment cards</li>
                  <li>Real-time spend controls</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardContent className="p-8 text-center">
                <Wallet className="w-16 h-16 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-4">Co-branded Credit Cards</h3>
                <ul className="text-green-100 text-sm space-y-2">
                  <li>Retail partner programs</li>
                  <li>Cashback & rewards</li>
                  <li>Brand loyalty integration</li>
                  <li>Cross-selling opportunities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <CardContent className="p-8 text-center">
                <HandCoins className="w-16 h-16 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-4">Gift & Incentive Cards</h3>
                <ul className="text-purple-100 text-sm space-y-2">
                  <li>Corporate gifting programs</li>
                  <li>Employee incentives</li>
                  <li>Customer rewards</li>
                  <li>Bulk issuance solutions</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Target Segments for Cards */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Target Segments for Card Programs</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">SME Businesses</h4>
                <p className="text-sm text-gray-600">50M+ small businesses needing expense management</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Retail Chains</h4>
                <p className="text-sm text-gray-600">Co-branded loyalty card programs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold mb-2">Corporates</h4>
                <p className="text-sm text-gray-600">Employee expense & travel cards</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-semibold mb-2">Startups</h4>
                <p className="text-sm text-gray-600">Modern expense management solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partnership Readiness */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategic Partnership & Acquisition Readiness</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pre-built infrastructure and compliance framework ready for immediate strategic partnerships
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Partnership Ecosystem Potential</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Network className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Banking Partners</h4>
                    <p className="text-gray-600">
                      Partnerships opportunity with banks for card issuance and POS deployment
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Corporate Clients</h4>
                    <p className="text-gray-600">Opportunity for enterprise expense management solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Retail Partners</h4>
                    <p className="text-gray-600">
                      Merchant network foundation for co-branded card acceptance and loyalty programs
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technology Integrators</h4>
                    <p className="text-gray-600">
                      Opportunity to build API-ready platform for seamless integration with ERP and accounting systems
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Acquisition Value Drivers</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Regulatory Compliance</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Government Recognition</span>
                    <Badge className="bg-green-100 text-green-800">✓ DPIIT Certified</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Intellectual Property</span>
                    <Badge className="bg-green-100 text-green-800">✓ Trademarked</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Technical Infrastructure</span>
                    <Badge className="bg-green-100 text-green-800">✓ API Ready</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Market Position(Non ops)</span>
                    <Badge className="bg-green-100 text-green-800">✓ Established</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Funding History</span>
                    <Badge className="bg-green-100 text-green-800">✓ ₹17L Raised</Badge>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white text-center">
                  <p className="font-semibold">Ready for Immediate Strategic Partnership</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Partnership Revenue Model */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Multi-Stream Revenue Model</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Transaction Fees</h4>
                <p className="text-sm text-gray-600">POS & card processing revenue</p>
                <p className="text-lg font-bold text-blue-600 mt-2">₹2-5 Cr/year</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wallet className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Card Programs</h4>
                <p className="text-sm text-gray-600">Co-branded card issuance</p>
                <p className="text-lg font-bold text-green-600 mt-2">₹3-8 Cr/year</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">SaaS Subscriptions</h4>
                <p className="text-sm text-gray-600">Monthly recurring revenue</p>
                <p className="text-lg font-bold text-purple-600 mt-2">₹1-3 Cr/year</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Value-Added Services</h4>
                <p className="text-sm text-gray-600">Analytics, lending, insurance</p>
                <p className="text-lg font-bold text-orange-600 mt-2">₹2-6 Cr/year</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg">
                <p className="text-sm opacity-90">Total Revenue Potential</p>
                <p className="text-3xl font-bold">₹8-22 Crore/year</p>
                <p className="text-sm opacity-90">At scale with strategic partnerships</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Opportunities */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Expansion Opportunities</h2>
            <p className="text-lg text-gray-600">Multiple pathways for rapid growth and market expansion</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Geographic Expansion</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Tier 2 & 3 cities penetration</li>
                  <li>Rural market opportunities</li>
                  <li>Regional language support</li>
                  <li>State-specific compliance ready</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Product Diversification</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>QR code payment solutions</li>
                  <li>Digital lending platform</li>
                  <li>Merchant cash advances</li>
                  <li>Business analytics dashboard</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Market Segments</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Healthcare payment solutions</li>
                  <li>Education sector integration</li>
                  <li>Government payment gateway</li>
                  <li>Enterprise B2B solutions</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* ROI Projections */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Enhanced Revenue Potential with Cards & POS
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">₹8-12 Cr</div>
                <p className="text-gray-600 font-medium">Year 1 Revenue Potential</p>
                <p className="text-sm text-gray-500 mt-1">POS + Card programs</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">₹18-30 Cr</div>
                <p className="text-gray-600 font-medium">Year 3 Revenue Target</p>
                <p className="text-sm text-gray-500 mt-1">Full product portfolio</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">30-40%</div>
                <p className="text-gray-600 font-medium">Projected EBITDA Margin</p>
                <p className="text-sm text-gray-500 mt-1">At scale operations</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">₹50+ Cr</div>
                <p className="text-gray-600 font-medium">5-Year Revenue Potential</p>
                <p className="text-sm text-gray-500 mt-1">With strategic partnerships</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Buyers */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Should Buy?</h2>
            <p className="text-lg text-gray-600">Ideal acquisition opportunity for:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Fintech / SaaS Entrepreneurs</h3>
                <p className="text-gray-600">Seeking instant brand + legal infrastructure</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">ERP Solution Builders</h3>
                <p className="text-gray-600">Building embedded finance solutions</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Strategic Acquirers</h3>
                <p className="text-gray-600">Investor-backed, clean entities ready to relaunch</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Brand Investors</h3>
                <p className="text-gray-600">High-value digital assets portfolio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Asking Price</h2>
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardContent className="p-12">
              <div className="text-5xl font-bold mb-4">₹1.6 Crore</div>
              <p className="text-blue-100 text-lg">Open to negotiation with qualified, serious buyers</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What's Next?</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Download className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">View Teaser PDF</h3>
                <p className="text-sm text-gray-600">Detailed overview document</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Access Brochure</h3>
                <p className="text-sm text-gray-600">Complete asset breakdown</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Due Diligence</h3>
                <p className="text-sm text-gray-600">Review documents & records</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Meet Founder</h3>
                <p className="text-sm text-gray-600">Direct introduction</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Founder Contact</h2>
            <p className="text-blue-100">Ready to discuss this opportunity?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ratnesh Choubey</h3>
              <p className="text-blue-100 mb-6">Founder & CEO, BuyNswipe Technology Pvt. Ltd.</p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>+91 8171169007</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>buynswipe@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5" />
                  <Link href="https://www.linkedin.com/in/ratneshchoubey" className="hover:underline">
                    LinkedIn Profile
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-gray-100">
                <Download className="w-5 h-5 mr-2" />
                Download Teaser PDF
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Request Full Brochure
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-gray-300">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            BuyNswipe Technology Pvt. Ltd. | Registered in India (2017) | DPIIT & Startup India Officially Recognized
          </p>
          <p className="text-xs mt-2 text-gray-400">
            All trademarks, domains, and digital assets included in asset sale.
          </p>
        </div>
      </footer>
    </div>
  )
}
