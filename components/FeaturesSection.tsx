import Image from 'next/image'

export default function FeaturesSection() {
  const features = [
    { title: 'Real-time Monitoring', description: 'Track your nodes performance in real-time', image: '/placeholder.svg' },
    { title: 'Intelligent Alerts', description: 'Receive instant notifications on critical issues', image: '/placeholder.svg' },
    { title: 'Performance Analytics', description: 'Gain insights with advanced analytics', image: '/placeholder.svg' },
  ]

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-black rounded-lg overflow-hidden border border-cyan-800 hover:border-cyan-400 transition duration-300">
              <Image src={feature.image} alt={feature.title} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

