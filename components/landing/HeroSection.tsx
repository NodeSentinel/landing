import Link from "next/link";
import NodeSentinelIcon from "@/components/icons/NodeSentinel";
import { Button } from "@/components/ui/button";
import { GnosisIcon } from "@/components/icons/Gnosis";
import { EthereumIcon } from "@/components/icons/Ethereum";

export default function HeroSection() {
  return (
    <section
      className="pt-32 pb-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/futuristic-eye-bg.jpg')" }}
    >
      <div className="container mx-auto px-4 text-center flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary font-nico-moji">
          Node Sentinel
        </h1>
        <NodeSentinelIcon width={150} height={150} viewBox="0 0 250 284" />
        <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
          Advanced monitoring for blockchain validators. Keep your nodes secure
          and efficient.
        </p>
        {/* <Link
          href="#"
          className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition duration-300 inline-block"
        >
          Start Monitoring
        </Link> */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button className="px-8 py-6">
            <Link
              href="https://t.me/gbc_validators_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-row items-center space-x-2">
                <GnosisIcon width={16} height={16} />
                <span>Gnosis (beta)</span>
              </div>
            </Link>
          </Button>

          <Button className="px-8 py-6" disabled>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <div className="flex flex-row items-center space-x-2">
                <EthereumIcon width={16} height={16} />
                <span>Ethereum (coming soon)</span>
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
