import { PageContainer } from "@/components/ui/page-container";
import { Metadata } from "next";
import {
  SITE_NAME,
  SITE_URL,
  ETHEREUM_MONITORING_DESCRIPTION,
  ETHEREUM_KEYWORDS,
  ETHEREUM_OG_DESCRIPTION,
  ETHEREUM_TWITTER_DESCRIPTION,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ethereum Validator Monitoring - Node Sentinel",
  description: ETHEREUM_MONITORING_DESCRIPTION,
  keywords: ETHEREUM_KEYWORDS,
  openGraph: {
    title: "Ethereum Validator Monitoring - Node Sentinel",
    description: ETHEREUM_OG_DESCRIPTION,
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/ethereum-monitoring`,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ethereum Validator Monitoring Dashboard",
      },
    ],
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethereum Validator Monitoring - Node Sentinel",
    description: ETHEREUM_TWITTER_DESCRIPTION,
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: `${SITE_URL}/ethereum-monitoring`,
  },
};

export default function EthereumMonitoringPage() {
  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto py-12 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">
            Ethereum Validator Monitoring
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Monitor your Ethereum validators in real-time with comprehensive
            performance tracking, missed attestation alerts, and detailed
            analytics to maximize your staking rewards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Real-Time Monitoring</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Live validator performance tracking</li>
              <li>• Instant missed attestation detection</li>
              <li>• Real-time uptime monitoring</li>
              <li>• Performance metrics and analytics</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Smart Alerts</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Customizable notification rules</li>
              <li>• Telegram and email alerts</li>
              <li>• Threshold-based monitoring</li>
              <li>• Incident response automation</li>
            </ul>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to monitor your Ethereum validators?
          </h3>
          <p className="text-muted-foreground mb-6">
            Get started with Node Sentinel and ensure your validators are
            performing optimally.
          </p>
          <a
            href="https://t.me/ethereum_nodeSentinel_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Start Monitoring
          </a>
        </div>
      </div>
    </PageContainer>
  );
}
