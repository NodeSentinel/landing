import { PageContainer } from "@/components/ui/page-container";
import { Metadata } from "next";
import {
  SITE_NAME,
  SITE_URL,
  FAQ_DESCRIPTION,
  FAQ_KEYWORDS,
  FAQ_OG_DESCRIPTION,
  FAQ_TWITTER_DESCRIPTION,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions - Node Sentinel",
  description: FAQ_DESCRIPTION,
  keywords: FAQ_KEYWORDS,
  openGraph: {
    title: "FAQ - Frequently Asked Questions - Node Sentinel",
    description: FAQ_OG_DESCRIPTION,
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/faq`,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Node Sentinel FAQ",
      },
    ],
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - Frequently Asked Questions - Node Sentinel",
    description: FAQ_TWITTER_DESCRIPTION,
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: `${SITE_URL}/faq`,
  },
};

export default function FAQPage() {
  const faqs = [
    {
      question: "What is Node Sentinel?",
      answer:
        "Node Sentinel is a comprehensive monitoring platform for blockchain validators. It provides real-time tracking of validator performance, missed attestations, and instant alerts to help node operators maximize their staking rewards and maintain optimal validator health.",
    },
    {
      question: "Which blockchain networks does Node Sentinel support?",
      answer:
        "Currently, Node Sentinel supports Ethereum mainnet and Gnosis Chain. We're continuously expanding our network support to include more blockchain networks based on community demand.",
    },
    {
      question: "How does the monitoring system work?",
      answer:
        "Node Sentinel connects to blockchain nodes and beacon chains to collect real-time data about your validators. We track performance metrics, uptime, missed attestations, and other key indicators, then provide this information through our dashboard and alert system.",
    },
    {
      question: "What types of alerts can I receive?",
      answer:
        "You can receive alerts for missed attestations, validator going offline, performance degradation, and custom threshold-based notifications. Alerts are delivered via Telegram, email, or webhooks based on your preferences.",
    },
    {
      question: "Is Node Sentinel free to use?",
      answer:
        "Yes, Node Sentinel offers a free tier that includes basic monitoring features. We also provide premium plans with advanced features, higher alert limits, and priority support for professional users.",
    },
    {
      question: "How do I set up monitoring for my validators?",
      answer:
        "Setting up monitoring is simple: 1) Choose your blockchain network (Ethereum or Gnosis), 2) Enter your validator public keys, 3) Configure your alert preferences, 4) Start receiving real-time updates and notifications.",
    },
    {
      question: "Can I monitor multiple validators?",
      answer:
        "Absolutely! Node Sentinel is designed to handle multiple validators across different networks. You can monitor as many validators as you need, all from a single dashboard with organized views and filtering options.",
    },
    {
      question: "What performance metrics are tracked?",
      answer:
        "We track comprehensive metrics including attestation success rate, uptime percentage, missed attestations, performance efficiency, and historical trends. All data is presented in easy-to-understand charts and graphs.",
    },
    {
      question: "How secure is my validator data?",
      answer:
        "Security is our top priority. We only collect public blockchain data and never require access to your private keys or sensitive information. All data transmission is encrypted, and we follow industry best practices for data protection.",
    },
    {
      question: "Can I integrate Node Sentinel with other tools?",
      answer:
        "Yes! Node Sentinel provides a RESTful API that allows you to integrate monitoring data with your existing tools, dashboards, or automation systems. We also support webhook integrations for custom workflows.",
    },
    {
      question: "What happens if my validator goes offline?",
      answer:
        "When your validator goes offline, Node Sentinel immediately detects the issue and sends you an alert. You'll receive notifications through your configured channels (Telegram, email, webhooks) so you can take immediate action to resolve the problem.",
    },
    {
      question: "How accurate are the performance metrics?",
      answer:
        "Our metrics are sourced directly from blockchain nodes and beacon chains, ensuring high accuracy. We use multiple data sources and implement validation checks to provide reliable, real-time information about your validators.",
    },
  ];

  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Node Sentinel and blockchain
            validator monitoring.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {faq.question}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-muted/50 rounded-lg p-8 text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Can&apos;t find what you&apos;re looking for? Contact our support
            team for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/node_sentinel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Join Telegram
            </a>
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
