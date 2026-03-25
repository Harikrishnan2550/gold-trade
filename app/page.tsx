"use client";

import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import AboutPreview from "@/components/sections/AboutPreview";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";
import HeroMarketData from "@/components/sections/HeroMarketData";
import QuantumBackground from "@/components/ui/QuantumBackground"; // New import

export default function Home() {
  return (
    <main className="relative">
      {/* Global Robotic & Sparkle Layer */}
      <QuantumBackground />

      <Hero />

      <section className="relative z-10">
        <Trust />
      </section>

      <section className="relative z-10">
        <AboutPreview />
      </section>

      <section className="relative z-10">
        <HeroMarketData/>
      </section>

      <section className="relative z-10">
        <Services />
      </section>

      <section className="relative z-10">
        <WhyChoose />
      </section>

      <section className="relative z-10">
        <Process />
      </section>

      <section className="relative z-10">
        <CTA />
      </section>
    </main>
  );
}