import Image from "next/image";

export default function BlockchainSection() {
  const comingSoon = ["Solana", "Cardano", "Polkadot"];

  return (
    <section id="blockchains" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Supported Blockchains
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center bg-card p-6 rounded-lg border border-border">
            <Image
              src="/gnosis-chain-logo.svg"
              alt="Gnosis Chain Logo"
              width={200}
              height={200}
              className="max-w-full h-auto"
            />
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Coming Soon
            </h3>
            <ul className="space-y-2">
              {comingSoon.map((chain, index) => (
                <li key={index} className="flex items-center text-foreground">
                  <svg
                    className="w-5 h-5 text-primary mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {chain}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
