export default function StatsSection() {
  const stats = [
    { value: '1M+', label: 'Nodes Monitored' },
    { value: '99.99%', label: 'Uptime' },
    { value: '50+', label: 'Blockchain Networks' },
    { value: '24/7', label: 'Support' },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-cyan-900 to-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold mb-2 text-white">{stat.value}</div>
              <div className="text-xl text-cyan-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

