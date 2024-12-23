import Link from "next/link";
import { Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">
              Node Sentinel
            </h3>
            <p className="text-sm text-gray-400">
              Empowering blockchain validators with advanced monitoring
              solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-cyan-400 transition duration-300"
                >
                  Home
                </Link>
              </li>
              {/* <li>
                <Link
                  href="#features"
                  className="text-sm text-gray-400 hover:text-cyan-400 transition duration-300"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-sm text-gray-400 hover:text-cyan-400 transition duration-300"
                >
                  Pricing
                </Link>
              </li> */}
              {/* <li>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-cyan-400 transition duration-300"
                >
                  Contact
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              {/* <Link
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition duration-300"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition duration-300"
              >
                <span className="sr-only">GitHub</span>
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition duration-300"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-6 h-6" />
              </Link> */}
              <Link
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition duration-300"
              >
                <span className="sr-only">Telegram</span>
                <Send className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Node Sentinel. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
