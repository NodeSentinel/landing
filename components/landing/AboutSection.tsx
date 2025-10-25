export default function AboutSection() {
  return (
    <section className="py-32 relative">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Why NodeSentinel?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Running a validator is simple — staying profitable and reliable
            isn&apos;t. NodeSentinel was built by node operators for node
            operators. We combine strong blockchain expertise with clear,
            actionable metrics for your validators. Join thousands already
            monitoring millions in staked value.
          </p>
        </div>

        {/* Trust Statistics */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Card background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/10 to-primary/5 rounded-3xl border border-primary/20 shadow-2xl"></div>

            <div className="relative p-12 text-center">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                  Trusted by the Community
                </h3>
                <p className="text-lg text-muted-foreground">
                  Trusted by operators monitoring $16M+ in stake and 60k+
                  validators.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center border border-primary/30 shadow-lg mx-auto mb-4">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-primary">
                    Built by Operators
                  </h4>
                  <p className="text-muted-foreground">
                    Created by node operators who understand the challenges of
                    validator management.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center border border-primary/30 shadow-lg mx-auto mb-4">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-primary">
                    Real-time Insights
                  </h4>
                  <p className="text-muted-foreground">
                    Get instant alerts and performance metrics to maximize your
                    staking rewards.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center border border-primary/30 shadow-lg mx-auto mb-4">
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
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-primary">
                    Secure & Reliable
                  </h4>
                  <p className="text-muted-foreground">
                    Your validator data is secure with enterprise-grade
                    monitoring infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
