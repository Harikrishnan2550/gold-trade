import MarketsHero from "@/components/sections/MarketsHero";
import MarketsGrid from "@/components/sections/MarketsGrid";
import Expertise from "@/components/sections/Expertise";
import TradeWhy from "@/components/sections/TradeWhy";
import CTA from "@/components/sections/CTA";

export default function Markets() {
  return (
    <main>
      <MarketsHero />

      <MarketsGrid />

      <Expertise />

      <TradeWhy />

      <CTA />
    </main>
  );
}
