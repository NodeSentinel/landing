import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import StatsSection from "@/components/landing/StatsSection";
import SupportUsSection from "@/components/landing/SupportUsSection";
import SupportedBySection from "@/components/landing/SupportedBySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <SupportUsSection />
      {/* <BlockchainSection /> */}
      {/* <PricingSection /> */}
      <SupportedBySection />
    </>
  );
}
