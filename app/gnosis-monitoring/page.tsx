import { PageContainer } from "@/components/ui/page-container";
import { Metadata } from "next";
import { 
  SITE_NAME, 
  SITE_URL, 
  GNOSIS_MONITORING_DESCRIPTION,
  GNOSIS_KEYWORDS,
  GNOSIS_OG_DESCRIPTION,
  GNOSIS_TWITTER_DESCRIPTION
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gnosis Chain Validator Monitoring - Node Sentinel",
  description: GNOSIS_MONITORING_DESCRIPTION,
  keywords: GNOSIS_KEYWORDS,
  openGraph: {
    title: "Gnosis Chain Validator Monitoring - Node Sentinel",
    description: GNOSIS_OG_DESCRIPTION,
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/gnosis-monitoring`,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gnosis Chain Validator Monitoring Dashboard",
      },
    ],
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: "Gnosis Chain Validator Monitoring - Node Sentinel",
    description: GNOSIS_TWITTER_DESCRIPTION,
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: `${SITE_URL}/gnosis-monitoring`,
  },
};

export default function GnosisMonitoringPage() {
  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">
            Gnosis Chain Validator Monitoring
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Monitor your Gnosis Chain validators in real-time with comprehensive
            performance tracking, missed attestation alerts, and detailed
            analytics to maximize your xDAI staking rewards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Gnosis Chain Features</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• xDAI staking optimization</li>
              <li>• Gnosis beacon chain monitoring</li>
              <li>• Real-time validator performance</li>
              <li>• Cross-chain compatibility</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Advanced Monitoring</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Custom alert thresholds</li>
              <li>• Multi-channel notifications</li>
              <li>• Performance benchmarking</li>
              <li>• Historical data analysis</li>
            </ul>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to monitor your Gnosis Chain validators?
          </h3>
          <p className="text-muted-foreground mb-6">
            Get started with Node Sentinel and ensure your Gnosis validators are
            performing optimally.
          </p>
          <a
            href="/gnosis/dashboard/new"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Start Monitoring
          </a>
        </div>
      </div>
    </PageContainer>
  );
}
