export default function StatsSection() {
  const stats = [
    { value: "USD 16M+", label: "Value monitored", icon: "💰" },
    { value: "60k+", label: "Validators monitored", icon: "🔗" },
    { value: "100+", label: "Active users", icon: "👥" },
  ];

  return (
    <section className="py-32 relative">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Impact
            </span>
            <div className="w-8 h-1 bg-gradient-to-r from-primary/50 to-primary rounded-full"></div>
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Trusted by the Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of validators who trust Node Sentinel for their
            monitoring needs.
          </p>
        </div>

        {/* Enhanced stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              {/* Card background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"></div>

              <div className="relative p-8">
                {/* Icon */}
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>

                {/* Value with enhanced styling */}
                <div className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-lg md:text-xl text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        {/* <div className="flex justify-center mt-16">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent rounded-full"></div>
        </div> */}
      </div>
    </section>
  );
}
