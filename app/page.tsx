import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import AboutPreview from "@/components/sections/AboutPreview";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />

      <Trust />

      <AboutPreview />

      <Services />

      <WhyChoose />

      <Process />

      <CTA />
    </main>
  );
}
