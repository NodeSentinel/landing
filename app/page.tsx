import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import StatsSection from "@/components/landing/StatsSection";
import SupportUsSection from "@/components/landing/SupportUsSection";
import SupportedBySection from "@/components/landing/SupportedBySection";
import PriceSimulator from "@/components/landing/PriceSimulator";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      {/* <BlockchainSection /> */}
      {/* <PricingSection /> */}
      <PriceSimulator />
      <SupportUsSection />
      <SupportedBySection />
    </>
  );
}
