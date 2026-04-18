export interface NavLink {
  label: string
  href: string
  icon?: string
  description?: string
}

export interface NavSection {
  title: string
  links: NavLink[]
}

// Primary Navigation for Header
export const headerNavigation = [
  {
    label: 'Credit',
    href: '/credit',
    submenu: [
      { label: 'Personal Loan', href: '/credit/personal-loan', description: 'Quick personal loans' },
      { label: 'Credit Card', href: '/credit/credit-card', description: 'Best credit cards' },
      { label: 'Business Loan', href: '/credit/business-loan', description: 'Business financing' },
      { label: 'Home Loan', href: '/credit/home-loan', description: 'Home financing' },
      { label: 'CIBIL Score', href: '/credit/cibil-score', description: 'Credit score guide' },
      { label: 'Eligibility Checker', href: '/credit/eligibility-checker', description: 'Check eligibility' },
    ],
  },
  {
    label: 'Solutions',
    href: '/payment-solutions',
    submenu: [
      { label: 'POS Systems', href: '/payment-solutions/pos-systems' },
      { label: 'Digital Payments', href: '/payment-solutions/digital-payments' },
      { label: 'Money Transfer', href: '/solutions/money-transfer' },
      { label: 'Bill Payment', href: '/solutions/bill-payment' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  {
    label: 'Tools',
    href: '/tools',
    submenu: [
      { label: 'EMI Calculator', href: '/tools/emi-calculator' },
      { label: 'Affordability Calculator', href: '/tools/affordability-calculator' },
      { label: 'Interest Rate Comparison', href: '/tools/interest-rate-comparison' },
      { label: 'ROI Calculator', href: '/tools/investment-roi-calculator' },
    ],
  },
  { label: 'Resources', href: '/resources' },
]

// Footer Navigation Sections
export const footerNavigation: NavSection[] = [
  {
    title: 'Credit Products',
    links: [
      { label: 'Personal Loans', href: '/credit/personal-loan' },
      { label: 'Credit Cards', href: '/credit/credit-card' },
      { label: 'Business Loans', href: '/credit/business-loan' },
      { label: 'Home Loans', href: '/credit/home-loan' },
      { label: 'Gold Loans', href: '/credit/gold-loan' },
      { label: 'MSME Loans', href: '/credit/business-loan' },
    ],
  },
  {
    title: 'Payment Solutions',
    links: [
      { label: 'POS Systems', href: '/payment-solutions/pos-systems' },
      { label: 'Digital Payments', href: '/payment-solutions/digital-payments' },
      { label: 'Money Transfer', href: '/solutions/money-transfer' },
      { label: 'Bill Payment', href: '/solutions/bill-payment' },
      { label: 'Merchant Services', href: '/solutions' },
    ],
  },
  {
    title: 'Tools & Resources',
    links: [
      { label: 'EMI Calculator', href: '/tools/emi-calculator' },
      { label: 'Eligibility Checker', href: '/credit/eligibility-checker' },
      { label: 'Interest Rate Comparison', href: '/tools/interest-rate-comparison' },
      { label: 'Financial Glossary', href: '/glossary' },
      { label: 'Blog', href: '/blog' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Story', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Investor Relations', href: '/investor-relations' },
      { label: 'Support', href: '/support' },
    ],
  },
]

// Legal Links
export const legalLinks: NavLink[] = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
]

// Support Links
export const supportLinks: NavLink[] = [
  { label: 'Customer Support', href: '/support' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
]

// Compliance Links
export const complianceLinks: NavLink[] = [
  { label: 'RBI Regulations', href: '/compliance/rbi-regulations' },
  { label: 'Data Privacy', href: '/compliance/data-privacy' },
  { label: 'Security & Compliance', href: '/security-compliance' },
]

// Social Media Links
export const socialLinks = [
  { icon: 'facebook', label: 'Facebook', href: 'https://facebook.com/buynswipe' },
  { icon: 'twitter', label: 'Twitter', href: 'https://twitter.com/buynswipe' },
  { icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/company/buynswipe' },
  { icon: 'instagram', label: 'Instagram', href: 'https://instagram.com/buynswipe' },
]

// Company Info
export const companyInfo = {
  name: 'BuyNswipe Technology Pvt. Ltd.',
  email: 'support@buynswipe.com',
  phone: '+91 8171169007',
  location: 'Delhi, India',
  cin: 'U72900UP2017PTC096789',
  registeredYear: 2017,
  tagline: "India's trusted fintech marketplace for personal loans, credit cards, and digital payment solutions.",
  certifications: [
    'DPIIT Recognized Startup',
    'RBI Compliant',
    'ISO 27001 Certified',
    'Startup India Recognized',
  ],
}

// Mobile Navigation
export const mobileNavigation = [
  { label: 'Home', href: '/' },
  { label: 'Credit Products', href: '/credit' },
  { label: 'Personal Loan', href: '/credit/personal-loan' },
  { label: 'Credit Card', href: '/credit/credit-card' },
  { label: 'Payment Solutions', href: '/payment-solutions' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Tools', href: '/tools' },
  { label: 'Resources', href: '/resources' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Support', href: '/support' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]
