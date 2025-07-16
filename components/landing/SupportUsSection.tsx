"use client";

import { BaseIcon } from "@/components/icons/Base";
import { ArbitrumIcon } from "@/components/icons/Arbitrum";
import { OptimismIcon } from "@/components/icons/Optimism";
import { EthereumIcon } from "@/components/icons/Ethereum";
import { GnosisIcon } from "@/components/icons/Gnosis";
import { QRCodeCanvas } from "qrcode.react";

const address = "0xDA74B77BA4BE36619b248088214D807A581292C4";

export default function SupportUsSection() {
  return (
    <section className="py-32 relative">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Support
            </span>
            <div className="w-8 h-1 bg-gradient-to-r from-primary/50 to-primary rounded-full"></div>
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Find this tool useful?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Support the development of Node Sentinel and help us continue
            building better monitoring tools for the community.
          </p>
        </div>

        {/* Enhanced Support Content */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Card background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/10 to-primary/5 rounded-3xl border border-primary/20 shadow-2xl"></div>

            <div className="relative p-12 text-center">
              {/* Support message */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                  Support us!
                </h3>
                <p className="text-lg text-muted-foreground">
                  Your contributions help us maintain and improve Node Sentinel
                </p>
              </div>

              {/* Supported chains */}
              <div className="mb-8">
                <p className="text-muted-foreground mb-4 font-medium">
                  Supported Networks:
                </p>
                <div className="flex justify-center space-x-4 mb-6">
                  <div className="flex flex-col items-center space-y-2 p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <EthereumIcon width={32} height={32} />
                    <span className="text-xs text-muted-foreground">
                      Ethereum
                    </span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <GnosisIcon width={32} height={32} />
                    <span className="text-xs text-muted-foreground">
                      Gnosis
                    </span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <OptimismIcon width={32} height={32} />
                    <span className="text-xs text-muted-foreground">
                      Optimism
                    </span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <ArbitrumIcon width={32} height={32} />
                    <span className="text-xs text-muted-foreground">
                      Arbitrum
                    </span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <BaseIcon width={32} height={32} />
                    <span className="text-xs text-muted-foreground">Base</span>
                  </div>
                </div>
              </div>

              {/* Address section */}
              <div className="mb-8">
                <p className="text-muted-foreground mb-4 font-medium">
                  Donation Address:
                </p>
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-4 mb-4">
                  <span className="text-sm md:text-base font-mono text-primary break-all">
                    {address}
                  </span>
                </div>
              </div>

              {/* QR Code */}
              <div className="flex justify-center">
                <div className="bg-white rounded-2xl p-4 shadow-lg border border-primary/20">
                  <QRCodeCanvas
                    value={address}
                    size={120}
                    bgColor="transparent"
                    fgColor="rgb(27 39 59)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
