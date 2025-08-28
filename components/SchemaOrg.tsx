"use client";

// Import constants from the centralized constants file
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export default function SchemaOrg() {
  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE_NAME,
            description:
              "Blockchain validator monitoring platform providing real-time alerts and performance tracking",
            url: SITE_URL,
            logo: `${SITE_URL}/images/logo.png`,
            sameAs: ["https://t.me/node_sentinel"],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              availableLanguage: "English",
            },
            areaServed: "Worldwide",
            serviceType: "Blockchain Validator Monitoring",
          }),
        }}
      />

      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: SITE_NAME,
            description: "Blockchain validator monitoring platform",
            url: SITE_URL,
            potentialAction: {
              "@type": "SearchAction",
              target: `${SITE_URL}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* SoftwareApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: SITE_NAME,
            applicationCategory: "Blockchain Tool",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              description: "Free tier available",
            },
            featureList: [
              "Real-time validator monitoring",
              "Missed attestation alerts",
              "Multi-chain support",
              "Performance analytics",
              "Customizable notifications",
              "Telegram integration",
            ],
          }),
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: SITE_URL,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Ethereum Monitoring",
                item: `${SITE_URL}/ethereum-monitoring`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Gnosis Monitoring",
                item: `${SITE_URL}/gnosis-monitoring`,
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Features",
                item: `${SITE_URL}/features`,
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "FAQ",
                item: `${SITE_URL}/faq`,
              },
            ],
          }),
        }}
      />

      {/* FAQPage Schema */}
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
              {
                "@type": "Question",
                name: "Which blockchain networks does Node Sentinel support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Currently, Node Sentinel supports Ethereum mainnet and Gnosis Chain, with plans to expand to more networks.",
                },
              },
              {
                "@type": "Question",
                name: "How does the monitoring system work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Node Sentinel connects to blockchain nodes and beacon chains to collect real-time data about validators, tracking performance metrics and sending alerts.",
                },
              },
              {
                "@type": "Question",
                name: "What types of alerts can I receive?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can receive alerts for missed attestations, validator going offline, performance degradation, and custom threshold-based notifications via Telegram, email, or webhooks.",
                },
              },
              {
                "@type": "Question",
                name: "Is Node Sentinel free to use?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Node Sentinel offers a free tier with basic monitoring features, plus premium plans with advanced features and priority support.",
                },
              },
            ],
          }),
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Blockchain Validator Monitoring",
            description:
              "Professional monitoring service for blockchain validators with real-time alerts and performance tracking",
            provider: {
              "@type": "Organization",
              name: SITE_NAME,
            },
            areaServed: "Worldwide",
            serviceType: "Blockchain Infrastructure Monitoring",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Monitoring Plans",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Free Tier",
                    description:
                      "Basic monitoring features for individual validators",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Premium Plan",
                    description:
                      "Advanced features with higher limits and priority support",
                  },
                },
              ],
            },
          }),
        }}
      />
    </>
  );
}
