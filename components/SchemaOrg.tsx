"use client";

export default function SchemaOrg() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Node Sentinel",
            description: "Blockchain validator monitoring platform",
            url: "https://node-sentinel.xyz",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://node-sentinel.xyz/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Node Sentinel",
            applicationCategory: "Blockchain Tool",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              description: "Free tier available",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is Node Sentinel?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Node Sentinel is a monitoring platform for blockchain validators, providing real-time notifications and performance statistics.",
                },
              },
              // Agrega más FAQs relevantes aquí
            ],
          }),
        }}
      />
    </>
  );
}
