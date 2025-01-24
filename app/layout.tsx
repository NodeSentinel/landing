import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const nicoMoji = localFont({
  src: "./fonts/NicoMoji.ttf",
  variable: "--font-nico-moji",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Node Sentinel",
  description:
    "Equipping blockchain validators with advanced monitoring solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nicoMoji.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen text-primary">
          <Providers>
            <Header />
            <main className="flex-grow min-h-screen px-4 sm:px-2">
              {children}
            </main>
            <Footer />
            <Analytics />
          </Providers>
        </div>
      </body>
    </html>
  );
}
