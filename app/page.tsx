import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import StatsSection from "@/components/landing/StatsSection";
import SupportUsSection from "@/components/landing/SupportUsSection";
import SupportedBySection from "@/components/landing/SupportedBySection";
// import PriceSimulator from "@/components/landing/PriceSimulator";
import { PageContainer } from "@/components/ui/page-container";
import SchemaOrg from "@/components/SchemaOrg";

export default function Home() {
  return (
    <>
      <SchemaOrg />
      <PageContainer>
        <HeroSection />
        {/* <LiveDashboardSection /> */}
        <FeaturesSection />
        <StatsSection />
        {/* <BlockchainSection /> */}
        {/* <PricingSection /> */}
        {/* <PriceSimulator /> */}
        <SupportUsSection />
        <SupportedBySection />
      </PageContainer>
    </>
  );
}

export const metadata = {
  title: "Node Sentinel - Your Go-To Tool for Blockchain Validator Monitoring",
  description:
    "Node Sentinel is a monitoring tool for blockchain validators, designed for simplicity and practicality. It provides real-time customizable notifications and detailed performance stats, helping node operators track validator health and maximize rewards.",
  keywords:
    "Node Sentinel, Beacon Chain, beacon validators, Validator Monitoring, Ethereum, Gnosis, Blockchain, Validator Management",
  openGraph: {
    title: "Node Sentinel - Blockchain Validator Monitoring Platform",
    description: "Monitor and optimize your blockchain validators with ease",
    type: "website",
    locale: "en_US",
    url: "https://node-sentinel.xyz",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Node Sentinel Dashboard",
      },
    ],
    siteName: "Node Sentinel",
  },
  telegram: {
    channel: "t.me/node_sentinel",
    bot: "@gbc_validators_bot",
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
};
