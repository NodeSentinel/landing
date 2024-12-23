import Image from 'next/image'

export default function SupportedBySection() {
  const supporters = [
    { name: 'TechCorp', logo: '/placeholder.svg' },
    { name: 'InnovateX', logo: '/placeholder.svg' },
    { name: 'BlockFund', logo: '/placeholder.svg' },
    { name: 'CryptoVentures', logo: '/placeholder.svg' },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Supported By</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {supporters.map((supporter, index) => (
            <div key={index} className="flex justify-center">
              <Image src={supporter.logo} alt={supporter.name} width={150} height={75} className="max-w-full h-auto opacity-70 hover:opacity-100 transition duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

