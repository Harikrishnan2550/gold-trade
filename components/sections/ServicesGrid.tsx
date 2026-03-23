"use client";

import Container from "../ui/Container";
import {
  Coins,
  Briefcase,
  LineChart,
  ShieldCheck,
  PlaneTakeoff,
  Globe,
  ArrowUpRight
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Bullion Execution",
    desc: "Institutional-grade physical gold and silver trading with deep market liquidity and rapid spot settlement.",
    icon: Coins,
  },
  {
    title: "Asset Preservation",
    desc: "Bespoke consulting for precious metal allocation, focused on long-term capital stability and wealth security.",
    icon: Briefcase,
  },
  {
    title: "Market Intelligence",
    desc: "Strategic technical insights and fundamental analysis across the UAE and global bullion trading circuits.",
    icon: LineChart,
  },
  {
    title: "Physical Logistics",
    desc: "Direct air-side access via the SAIF Zone for secure, high-speed transit and global movement of bullion.",
    icon: PlaneTakeoff,
  },
  {
    title: "Vaulting & Security",
    desc: "Licensed custodial services featuring multi-layered security protocols and fully insured physical storage.",
    icon: ShieldCheck,
  },
  {
    title: "Trade Corridors",
    desc: "Unrivaled connectivity bridging Sharjah's logistical hub with the international bullion trade networks.",
    icon: Globe,
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Detail: Extremely subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04),transparent_70%)] pointer-events-none" />

      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group relative bg-white p-12 rounded-[3.5rem] border border-black/5 hover:border-gold/30 transition-all duration-700 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] overflow-hidden"
              >
                {/* Background Watermark Accent - Institutional Branding */}
                <span className="absolute -bottom-4 -right-4 text-8xl font-nasal text-black/[0.01] group-hover:text-gold/[0.04] transition-all duration-700 uppercase select-none italic">
                  ZNR
                </span>

                {/* Icon Pod - Premium Shadow */}
                <div className="w-16 h-16 bg-[#FBFBFB] rounded-2xl flex items-center justify-center mb-10 border border-black/5 group-hover:bg-gold group-hover:text-white transition-all duration-700 shadow-sm">
                  <Icon className="text-gold group-hover:text-white group-hover:scale-110 transition-all duration-500" size={28} strokeWidth={1.5} />
                </div>

                <div className="relative z-10">
                  <h3 className="font-nasal text-xl mb-4 text-[#1A1A1A] tracking-widest uppercase group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-[#1A1A1A]/50 text-[13px] leading-relaxed font-outfit mb-10">
                    {service.desc}
                  </p>

                  {/* Interactive Footer - Card Logic */}
                  <div className="flex items-center justify-between border-t border-black/5 pt-6 group-hover:border-gold/20 transition-colors">
                    <span className="text-[9px] font-audiowide text-gold tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">
                      ZNR-NODE 0{index + 1}
                    </span>
                    <ArrowUpRight size={14} className="text-black/10 group-hover:text-gold transition-all duration-500" />
                  </div>
                </div>

                {/* Subtle Hover Glow Line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}