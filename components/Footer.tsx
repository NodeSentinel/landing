import Link from "next/link";
import { Send, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">
              Node Sentinel
            </h3>
            <p className="text-sm text-muted-foreground">
              Equipping blockchain validators with advanced monitoring
              solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition duration-300"
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
            <h3 className="text-lg font-semibold mb-4 text-primary">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <Link
                href="mailto:hello@node-sentinel.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition duration-300"
              >
                <span className="sr-only">Email</span>
                <Mail className="w-4 h-4" />
              </Link>
              <Link
                href="https://t.me/+It8jmqe4k6s4ODAx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition duration-300"
              >
                <span className="sr-only">Telegram</span>
                <Send className="w-4 h-4" />
              </Link>
              <Link
                href="https://x.com/NodeSentnl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition duration-300"
              >
                <span className="sr-only">X (Twitter)</span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Node Sentinel. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
