import TelegramChatInstance from "@/components/landing/TelegramChatInstance";
// import TelegramChatCarousel from "./TelegramChatCarousel";

export default function FeaturesSection() {
  const gnosisMessage = [
    {
      id: "1",
      isBot: true,
      message:
        "🟢 170 | 🟡 0 | 🚫 0 | 🔚 9\n\nLast 1h performance: 99.74%\nBal: 170.03 GNO $21645\nClaimable: 0.91 GNO $116\nExtra stats: web dashboard \n━━━━━━━━━━━━━━━━━\n     APY%   GNO    xDAI    Total\nd:  5.305     0.02    0.01    $3.063\nw:  8.892     0.28    0.08    $35.36\nm:  8.420     1.13    0.52    $157.3\n\nGNO: $127.30\nUpdated: 06/11 11:32am UTC",
      timestamp: "12:05",
    },
  ];

  // Alert messages for both chains
  const alertMessages = [
    {
      id: "1",
      isBot: true,
      message: "⚠️ Some validators are not active!\n\n📊 Validators dashboard",
      timestamp: "5:25 PM",
      withButton: true,
      buttonText: "ok",
    },
    {
      id: "2",
      isBot: true,
      message:
        "⚠️ Your validators performance has fallen below the threshold of 90%! \n\n📊 Validators dashboard",
      timestamp: "5:25 PM",
      withButton: true,
      buttonText: "ok",
    },
  ];

  return (
    <section id="features" className="py-32 relative">
      {/* Section background with enhanced gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            What we do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We&apos;ve simplified validator monitoring to its maximum by
            integrating everything into a Telegram bot.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground/80 italic">
            Simple, powerful, and effective.
          </p>
        </div>

        {/* Features Grid with enhanced spacing */}
        <div className="space-y-32">
          {/* Performance Monitoring Feature */}
          <div className="relative">
            {/* Enhanced background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-primary/10 to-primary/5 rounded-3xl -z-10 border border-primary/20 shadow-2xl"></div>

            <div className="relative p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-4 text-primary">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center border border-primary/30 shadow-lg">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-4xl font-bold">
                        Real-time Dashboard
                      </h3>
                    </div>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Get comprehensive insights into your validator performance
                      with real-time tracking and detailed analytics.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-primary to-primary/70 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                      <p className="text-muted-foreground text-lg">
                        Last 1-Hour performance tracking
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-primary to-primary/70 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                      <p className="text-muted-foreground text-lg">
                        Web dashboard with detailed charts and analytics
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-primary to-primary/70 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                      <p className="text-muted-foreground text-lg">
                        APY summaries for daily, weekly, and monthly periods
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                  <TelegramChatInstance
                    chain="gnosis"
                    messages={gnosisMessage}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Intelligent Alerts Feature */}
          <div className="relative">
            {/* Enhanced background decoration */}
            <div className="absolute inset-0 bg-gradient-to-l from-primary/15 via-primary/10 to-primary/5 rounded-3xl -z-10 border border-primary/20 shadow-2xl"></div>

            <div className="relative p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                  <TelegramChatInstance
                    chain="ethereum"
                    messages={alertMessages}
                  />
                </div>

                <div className="space-y-8 order-1 lg:order-2">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-4 text-primary">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center border border-primary/30 shadow-lg">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-4xl font-bold">Alerting</h3>
                    </div>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Stay informed with instant notifications for critical
                      validator issues and performance changes.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-primary to-primary/70 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                      <p className="text-muted-foreground text-lg">
                        When your validators are not performing below a
                        customizable threshold
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-primary to-primary/70 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                      <p className="text-muted-foreground text-lg">
                        Instant alerts when validators go offline or change
                        status
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-primary to-primary/70 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                      <p className="text-muted-foreground text-lg">
                        Notifications for important beacon chain events
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
