import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

import { Audiowide, Poppins } from "next/font/google";

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-audiowide",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Dubai Gold Trading Company",
  description: "Professional gold trading services in Dubai.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
        ${audiowide.variable}
        ${poppins.variable}
        bg-premium 
        text-white 
        font-body
        antialiased
      `}
      >
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}