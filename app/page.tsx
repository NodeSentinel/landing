import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import StatsSection from "@/components/landing/StatsSection";
// import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import SupportUsSection from "@/components/landing/SupportUsSection";
// import SupportedBySection from "@/components/landing/SupportedBySection";
// import PriceSimulator from "@/components/landing/PriceSimulator";
import { PageContainer } from "@/components/ui/page-container";
import SchemaOrg from "@/components/SchemaOrg";
import {
  SITE_NAME,
  SITE_URL,
  HOME_DESCRIPTION,
  HOME_KEYWORDS,
  HOME_OG_DESCRIPTION,
  HOME_TWITTER_DESCRIPTION,
} from "@/lib/constants";

export default function Home() {
  return (
    <>
      <SchemaOrg />
      <PageContainer>
        {/* Hero Section with full background */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
          <div className="relative">
            <HeroSection />
          </div>
        </div>

        {/* Features Section with alternating background */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background"></div>
          <div className="relative">
            <FeaturesSection />
          </div>
        </div>

        {/* Stats Section with subtle background */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5"></div>
          <div className="relative">
            <StatsSection />
          </div>
        </div>

        {/* Testimonials Section with warm background */}
        {/* <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-muted/30"></div>
          <div className="relative">
            <TestimonialsSection />
          </div>
        </div> */}

        {/* FAQ Section with clean background */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background"></div>
          <div className="relative">
            <FAQSection />
          </div>
        </div>

        {/* Support Us Section with accent background */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/10"></div>
          <div className="relative">
            <SupportUsSection />
          </div>
        </div>
      </PageContainer>
    </>
  );
}

export const metadata = {
  title: "Node Sentinel - Your Go-To Tool for Blockchain Validator Monitoring",
  description: HOME_DESCRIPTION,
  keywords: HOME_KEYWORDS,
  authors: [{ name: "Node Sentinel Team" }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: "hello@node-sentinel.xyz",
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Node Sentinel - Blockchain Validator Monitoring Platform",
    description: HOME_OG_DESCRIPTION,
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Node Sentinel - Blockchain Validator Monitoring Dashboard",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Node Sentinel - Blockchain Validator Monitoring Platform",
    description: HOME_TWITTER_DESCRIPTION,
    images: ["/images/og-image.png"],
    creator: "@node_sentinel",
    site: "@node_sentinel",
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Technology",
  classification: "Blockchain Infrastructure",
};
