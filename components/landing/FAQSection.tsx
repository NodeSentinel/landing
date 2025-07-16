import { Collapsible } from "@/components/ui/collapsible";

export default function FAQSection() {
  return (
    <section id="faq" className="py-32 relative">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          {/*  <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              FAQ
            </span>
            <div className="w-8 h-1 bg-gradient-to-r from-primary/50 to-primary rounded-full"></div>
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Common questions about Node Sentinel and how it can help your
            validator operations.
          </p>
        </div>

        {/* Enhanced FAQ Items with single wrapper */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Single card background for all FAQ items */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl border border-primary/20 shadow-2xl"></div>

            <div className="relative p-12">
              <div className="space-y-8">
                <Collapsible title="What is Node Sentinel?">
                  <div className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    Node Sentinel is a monitoring tool designed specifically for
                    blockchain validators. It provides real-time performance
                    tracking, customizable alerts, and detailed analytics to
                    help node operators maximize their validator rewards and
                    maintain optimal performance.
                  </div>
                </Collapsible>

                <Collapsible title="Which blockchains does Node Sentinel support?">
                  <div className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    Node Sentinel currently supports multiple Ethereum Layer 2
                    networks including Ethereum, Gnosis, Optimism, Arbitrum, and
                    Base. We&apos;re continuously expanding our support to include
                    more blockchain networks based on community demand.
                  </div>
                </Collapsible>

                <Collapsible title="How do I get started with Node Sentinel?">
                  <div className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    Getting started is simple! Just connect your wallet or
                    validator address to our platform. We&apos;ll automatically
                    detect your validators and start monitoring their
                    performance. You can then customize your alert preferences
                    and access detailed analytics through our intuitive
                    dashboard.
                  </div>
                </Collapsible>

                <Collapsible title="What types of alerts does Node Sentinel provide?">
                  <div className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    Node Sentinel provides comprehensive alerts for validator
                    performance issues, offline status changes, missed
                    attestations, and important beacon chain events. All alerts
                    are delivered via Telegram for instant notification and can
                    be customized based on your specific monitoring needs.
                  </div>
                </Collapsible>

                <Collapsible title="Is Node Sentinel free to use?">
                  <div className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    Yes! Node Sentinel is completely free to use. We believe in
                    making validator monitoring accessible to everyone in the
                    blockchain community. Our goal is to help validators
                    maintain optimal performance and maximize their rewards
                    through reliable monitoring tools.
                  </div>
                </Collapsible>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        {/* <div className="flex justify-center mt-16">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent rounded-full"></div>
        </div> */}
      </div>
    </section>
  );
}
