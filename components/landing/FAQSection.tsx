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
              <div className="space-y-0">
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
                    Node Sentinel currently supports Ethereum and Gnosis.
                  </div>
                </Collapsible>

                <Collapsible title="How do I get started with Node Sentinel?">
                  <div className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    Getting started is simple! Just Talk to one of our bots on
                    Telegram, load your validator by validatorsId or withdrawal
                    address, and you&apos;re good to go.
                  </div>
                </Collapsible>

                <Collapsible title="Is Node Sentinel free to use?">
                  <div className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    Yes! Node Sentinel is free to use. But in the future, we
                    will transition to a paid model to cover R&D and
                    infrastructure costs.
                  </div>
                </Collapsible>

                <Collapsible title="Can I configure the alerts?">
                  <div className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    Yes! Alerts are fully configurable.
                    <br />
                    <br />
                    <strong>Performance thresholds:</strong> Pick the minimum
                    1-hour performance score that triggers a notification.
                    <br />
                    <br />
                    <strong>Missed attestations:</strong> Set how many
                    consecutive misses mark a validator “inactive.”
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
