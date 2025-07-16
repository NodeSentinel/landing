import Link from "next/link";
import NodeSentinelIcon from "@/components/icons/NodeSentinel";
import { Button } from "@/components/ui/button";
import { GnosisIcon } from "@/components/icons/Gnosis";
import { EthereumIcon } from "@/components/icons/Ethereum";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-primary/8 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 text-center flex flex-col items-center relative z-10">
        {/* Main heading with enhanced styling */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary font-nico-moji gradient-text">
            Node Sentinel
          </h1>
        </div>

        {/* Icon with enhanced effects */}
        <div className="mb-8 transform hover:scale-110 transition-transform duration-500 animate-float">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-slow"></div>
            <NodeSentinelIcon
              width={150}
              height={150}
              viewBox="0 0 250 284"
              className="relative z-10"
            />
          </div>
        </div>

        {/* Enhanced description */}
        <div className="space-y-4 mb-12 max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl mb-4 text-muted-foreground font-medium">
            Advanced monitoring for blockchain validators
          </p>
          <p className="text-lg md:text-xl text-muted-foreground/80 italic">
            Keep your nodes running efficiently with real-time insights and
            intelligent alerts.
          </p>
        </div>

        {/* Enhanced buttons with better styling */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button className="px-8 py-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover-lift">
            <Link
              href="https://t.me/ethereum_nodeSentinel_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center space-x-3"
            >
              <EthereumIcon width={20} height={20} />
              <span className="font-semibold">Ethereum</span>
            </Link>
          </Button>

          <Button className="px-8 py-6 bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary/80 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover-lift">
            <Link
              href="https://t.me/gbc_validators_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center space-x-3"
            >
              <GnosisIcon width={20} height={20} />
              <span className="font-semibold">Gnosis Chain</span>
            </Link>
          </Button>
        </div>

        {/* Decorative elements */}
        {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-1 h-16 bg-gradient-to-b from-primary/50 to-transparent mx-auto animate-bounce-slow"></div>
        </div> */}
      </div>
    </section>
  );
}
