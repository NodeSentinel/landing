import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black bg-opacity-80 backdrop-blur-md fixed w-full z-10">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-cyan-400">
          Node Sentinel
        </Link>
        <div className="space-x-6">
          <Link
            href="/"
            className="text-gray-300 hover:text-cyan-400 transition duration-300"
          >
            Home
          </Link>
          {/* <Link href="/landing" className="text-gray-300 hover:text-cyan-400 transition duration-300">Landing</Link>
          <Link href="/gnosis/incident/abc123" className="text-gray-300 hover:text-cyan-400 transition duration-300">Sample Incident</Link>
          <Link href="#features" className="text-gray-300 hover:text-cyan-400 transition duration-300">Features</Link>
          <Link href="#blockchains" className="text-gray-300 hover:text-cyan-400 transition duration-300">Blockchains</Link>
          <Link href="#pricing" className="text-gray-300 hover:text-cyan-400 transition duration-300">Pricing</Link> */}
        </div>
      </nav>
    </header>
  );
}
