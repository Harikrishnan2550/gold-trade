"use client";

import Container from "../ui/Container";
import {
  Coins,
  Briefcase,
  LineChart,
  BarChart3,
  Shield,
  Globe,
  ArrowUpRight
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Gold Trading",
    desc: "Institutional-grade spot gold and silver execution with deep market liquidity.",
    icon: Coins,
  },
  {
    title: "Investment Advisory",
    desc: "Bespoke consulting for precious metal asset allocation and wealth preservation.",
    icon: Briefcase,
  },
  {
    title: "Market Analysis",
    desc: "Strategic technical and fundamental insights across global gold trading hubs.",
    icon: LineChart,
  },
  {
    title: "Portfolio Management",
    desc: "Comprehensive oversight of physical and digital precious metal holdings.",
    icon: BarChart3,
  },
  {
    title: "Secure Transactions",
    desc: "Multi-layered security protocols for safe, transparent, and insured settlements.",
    icon: Shield,
  },
  {
    title: "Global Markets",
    desc: "Unrivaled connectivity between Dubai, Sharjah, and international trade networks.",
    icon: Globe,
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-white relative">
      {/* Background Detail: Extremely subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03),transparent_70%)] pointer-events-none" />

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
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group relative bg-white p-12 rounded-[3.5rem] border border-black/5 hover:border-gold/30 transition-all duration-700 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] overflow-hidden"
              >
                {/* Background Watermark Accent */}
                <span className="absolute -bottom-4 -right-4 text-7xl font-nasal text-black/[0.01] group-hover:text-gold/[0.03] transition-colors uppercase select-none">
                  ZNR
                </span>

                {/* Icon Pod */}
                <div className="w-16 h-16 bg-[#FBFBFB] rounded-2xl flex items-center justify-center mb-10 border border-black/5 group-hover:bg-gold group-hover:text-white transition-all duration-500 shadow-sm">
                  <Icon className="text-gold group-hover:text-white group-hover:scale-110 transition-all duration-500" size={30} />
                </div>

                <div className="relative z-10">
                  <h3 className="font-nasal text-2xl mb-4 text-[#1A1A1A] tracking-tighter group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-[#1A1A1A]/50 text-sm leading-relaxed font-inter mb-10">
                    {service.desc}
                  </p>

                  {/* Interactive Footer of the card */}
                  <div className="flex items-center justify-between border-t border-black/5 pt-6 group-hover:border-gold/20 transition-colors">
                    <span className="text-[10px] font-nasal text-[#1A1A1A]/30 uppercase tracking-[0.2em] group-hover:text-gold transition-colors">
                      Service Category 0{index + 1}
                    </span>
                    <ArrowUpRight size={14} className="text-black/10 group-hover:text-gold transition-colors" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}