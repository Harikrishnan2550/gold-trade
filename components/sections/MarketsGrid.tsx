"use client";

import Container from "../ui/Container";
import { Globe, Landmark, TrendingUp, Building2, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const markets = [
  {
    title: "Dubai Gold Market",
    desc: "Unrivaled access to the Sharjah and Dubai gold trading corridors.",
    icon: Landmark,
    stat: "Local Hub"
  },
  {
    title: "International Markets",
    desc: "Seamless connectivity to London and New York precious metal exchanges.",
    icon: Globe,
    stat: "Global Reach"
  },
  {
    title: "Institutional Trading",
    desc: "High-volume execution desks for private banks and asset managers.",
    icon: Building2,
    stat: "Direct Access"
  },
  {
    title: "Market Analysis",
    desc: "Strategic technical and fundamental insights for gold investors.",
    icon: TrendingUp,
    stat: "Live Data"
  },
];

export default function MarketsGrid() {
  return (
    <section className="py-24 bg-[#FBFBFB]">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {markets.map((market, index) => {
            const Icon = market.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group relative bg-white p-10 rounded-[2.5rem] border border-black/5 hover:border-gold/30 transition-all duration-700 shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]"
              >
                {/* Floating Stat Badge (Top Right) */}
                <div className="absolute top-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[9px] font-nasal text-gold tracking-widest uppercase py-1 px-3 bg-gold/5 rounded-full border border-gold/10">
                    {market.stat}
                  </span>
                </div>

                {/* Icon Pod */}
                <div className="w-14 h-14 bg-[#FAFAFA] rounded-2xl flex items-center justify-center mb-8 border border-black/5 group-hover:bg-gold transition-all duration-500">
                  <Icon className="text-gold group-hover:text-white group-hover:scale-110 transition-all duration-500" size={26} />
                </div>

                <h3 className="font-nasal text-xl mb-4 text-[#1A1A1A] tracking-tight group-hover:text-gold transition-colors">
                  {market.title}
                </h3>

                <p className="text-[#1A1A1A]/50 text-sm leading-relaxed font-inter mb-6">
                  {market.desc}
                </p>

                {/* Micro-link */}
                <div className="flex items-center gap-2 text-[#1A1A1A]/20 group-hover:text-gold transition-all duration-500">
                  <span className="text-[10px] font-nasal uppercase tracking-[0.2em]">Explore</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}