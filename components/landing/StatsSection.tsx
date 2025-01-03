export default function StatsSection() {
  const stats = [
    { value: "USD 16M+", label: "Value monitored" },
    { value: "60k+", label: "Validators monitored" },
    { value: "100+", label: "Users" },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Our Impact
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl text-primary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
