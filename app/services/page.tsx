import ServicesHero from "@/components/sections/ServicesHero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ServiceDetails from "@/components/sections/ServiceDetails";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <ServicesHero />
      
      {/* Services Grid with subtle white cards */}
      <div className="bg-[#FBFBFB] ">
        <ServicesGrid />
      </div>

      <ServiceDetails />
      
      {/* Process section with a light gold tint */}
      <div className="bg-gold/5">
        <Process />
      </div>

      <CTA />
    </main>
  );
}