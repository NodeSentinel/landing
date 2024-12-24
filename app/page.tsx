import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GnosisIcon } from "@/components/icons/Gnosis";
import { EthereumIcon } from "@/components/icons/Ethereum";
import { OptimismIcon } from "@/components/icons/Optimism";
import { ArbitrumIcon } from "@/components/icons/Arbitrum";
import { BaseIcon } from "@/components/icons/Base";
import NodeSentinelIcon from "@/components/icons/NodeSentinel";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <section className="pt-32 pb-20">
        <div className="mx-auto text-center text-primary">
          <div className="flex flex-col items-center space-x-4">
            <NodeSentinelIcon width={200} height={200} viewBox="0 0 250 284" />

            <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
              Empowering blockchain validators with advanced monitoring
              solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Button className="bg-primary text-primary-foreground">
          <Link
            href="https://t.me/devBeaconValidator_bot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-row items-center space-x-2">
              <GnosisIcon width={16} height={16} />
              <span>Gnosis (beta)</span>
            </div>
          </Link>
        </Button>

        <Button className="bg-primary text-primary-foreground" disabled>
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-row items-center space-x-2">
              <EthereumIcon width={16} height={16} />
              <span>Ethereum (coming soon)</span>
            </div>
          </Link>
        </Button>
      </section>

      <section className="py-20 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold mb-0">Find this tool useful?</h1>
        <h2 className="text-xl mb-4">Support us!</h2>
        <div className="flex justify-center space-x-2 mb-4">
          <EthereumIcon width={24} height={24} />
          <GnosisIcon width={24} height={24} />
          <OptimismIcon width={24} height={24} />
          <ArbitrumIcon width={24} height={24} />
          <BaseIcon width={24} height={24} />
        </div>
        <span className="text-md text-muted-foreground break-all">
          0xDA74B77BA4BE36619b248088214D807A581292C4
        </span>
      </section>
    </div>
  );
}
