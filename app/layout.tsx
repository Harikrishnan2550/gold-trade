import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

import { Audiowide, Poppins, Outfit } from "next/font/google";

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-audiowide",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Zanora FZC | Institutional Gold Trading Sharjah & Dubai",
  description: "Premier physical gold trading and wealth preservation services based in SAIF Zone, Sharjah. Certified 24K bullion execution for institutional and private clients.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${audiowide.variable}
          ${poppins.variable}
          ${outfit.variable}
          bg-premium 
          text-white 
          font-body
          antialiased
          selection:bg-gold/30
          selection:text-gold-light
        `}
      >
        {/* The Live Ticker stays at the absolute top */}

        {/* Note: Ensure your Navbar has 'mt-11' or 'pt-11' 
            so it doesn't overlap with the fixed Marquee.
        */}
        <div className="relative flex flex-col min-h-screen">
          <Navbar />

          <main className="flex-grow">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}