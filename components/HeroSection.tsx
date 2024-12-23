import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/futuristic-eye-bg.jpg')"}}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-cyan-400">Node Sentinel</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
          Advanced monitoring for blockchain validators. Keep your nodes secure and efficient with our cutting-edge technology.
        </p>
        <Link href="#" className="bg-cyan-500 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-cyan-400 transition duration-300 inline-block">
          Start Monitoring
        </Link>
      </div>
    </section>
  )
}

