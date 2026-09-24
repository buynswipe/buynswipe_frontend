const siteUrl = "https://buynswipe.com"

export function SiteStructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "BuyNswipe Technology Private Limited",
        alternateName: ["BuyNswipe", "ShopNdeal", "BuyNswipe Go"],
        url: siteUrl,
        logo: `${siteUrl}/icon.svg`,
        description: "Indian fintech and commerce technology company building credit, payments, mobility and shopping products.",
        areaServed: "IN",
        brand: [
          { "@type": "Brand", name: "BuyNswipe", "@id": `${siteUrl}/#buynswipe` },
          { "@type": "Brand", name: "ShopNdeal", "@id": `${siteUrl}/#shopndeal` },
          { "@type": "Brand", name: "BuyNswipe Go", "@id": `${siteUrl}/#buynswipe-go` },
        ],
        knowsAbout: ["credit cards", "personal loans", "digital payments", "merchant services", "shopping deals"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "BuyNswipe",
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en-IN",
        potentialAction: {
          "@type": "SearchAction",
          target: { "@type": "EntryPoint", urlTemplate: `${siteUrl}/shop/products?q={search_term_string}` },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
}
