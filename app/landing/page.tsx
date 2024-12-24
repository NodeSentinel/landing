import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
/* import BlockchainSection from "@/components/BlockchainSection";
import PricingSection from "@/components/PricingSection"; */
import SupportedBySection from "@/components/SupportedBySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      {/* <BlockchainSection /> */}
      {/* <PricingSection /> */}
      <SupportedBySection />
    </>
  );
}
