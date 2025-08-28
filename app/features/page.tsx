import { PageContainer } from "@/components/ui/page-container";
import { Metadata } from "next";
import {
  SITE_NAME,
  SITE_URL,
  FEATURES_DESCRIPTION,
  FEATURES_KEYWORDS,
  FEATURES_OG_DESCRIPTION,
  FEATURES_TWITTER_DESCRIPTION,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Features - Node Sentinel Blockchain Validator Monitoring",
  description: FEATURES_DESCRIPTION,
  keywords: FEATURES_KEYWORDS,
  openGraph: {
    title: "Features - Node Sentinel Blockchain Validator Monitoring",
    description: FEATURES_OG_DESCRIPTION,
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/features`,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Node Sentinel Features Overview",
      },
    ],
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: "Features - Node Sentinel Blockchain Validator Monitoring",
    description: FEATURES_TWITTER_DESCRIPTION,
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: `${SITE_URL}/features`,
  },
};

export default function FeaturesPage() {
  return (
    <PageContainer>
      <div className="max-w-6xl mx-auto py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">
            Powerful Features for Validator Monitoring
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Node Sentinel provides comprehensive tools and features to ensure
            your blockchain validators are performing optimally and maximizing
            your staking rewards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Real-Time Monitoring */}
          <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Real-Time Monitoring</h3>
            <p className="text-muted-foreground">
              Live tracking of validator performance, uptime, and missed
              attestations with instant updates.
            </p>
          </div>

          {/* Smart Alerts */}
          <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-5 5v-5zM4.5 19.5L9 15m0 0V9m0 6H3"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Smart Alerts</h3>
            <p className="text-muted-foreground">
              Customizable notification rules with Telegram, email, and webhook
              support for instant incident response.
            </p>
          </div>

          {/* Multi-Chain Support */}
          <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Multi-Chain Support</h3>
            <p className="text-muted-foreground">
              Monitor validators across Ethereum, Gnosis Chain, and other
              supported blockchain networks.
            </p>
          </div>

          {/* Performance Analytics */}
          <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Performance Analytics
            </h3>
            <p className="text-muted-foreground">
              Detailed performance metrics, historical data analysis, and
              benchmarking tools for optimization.
            </p>
          </div>

          {/* Dashboard Customization */}
          <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Dashboard Customization
            </h3>
            <p className="text-muted-foreground">
              Personalized dashboards with customizable widgets and layouts for
              your monitoring needs.
            </p>
          </div>

          {/* API Access */}
          <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">API Access</h3>
            <p className="text-muted-foreground">
              RESTful API for integrating validator monitoring data into your
              existing systems and workflows.
            </p>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to experience these features?
          </h3>
          <p className="text-muted-foreground mb-6">
            Start monitoring your validators with Node Sentinel&apos;s powerful
            features today.
          </p>
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </PageContainer>
  );
}
