"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, Users, ArrowRight } from "lucide-react";

const points = [
  {
    title: "Secure Trading",
    desc: "Institutional-grade encryption and industry-compliant gold trading systems for every transaction.",
    icon: ShieldCheck,
  },
  {
    title: "Trusted Company",
    desc: "A legacy of reliability built on deep market trust and transparent Sharjah-based operations.",
    icon: BadgeCheck,
  },
  {
    title: "Professional Team",
    desc: "Our gold trading specialists bring decades of collective UAE market expertise to your portfolio.",
    icon: Users,
  },
];

export default function TradeWhy() {
  return (
    <section className="py-32 bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-nasal tracking-[0.5em] text-[10px] uppercase mb-4 block"
          >
            The Gold Standard
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-nasal text-5xl lg:text-6xl text-[#1A1A1A] tracking-tighter"
          >
            Why Trade <br />
            <span className="text-gold-gradient italic">With Us</span>
          </motion.h2>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {points.map((point, index) => {
            const Icon = point.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="group p-12 rounded-[3rem] border border-black/5 bg-white hover:border-gold/30 transition-all duration-700 shadow-sm hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] text-center relative overflow-hidden"
              >
                {/* Decorative Background Accent */}
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="w-16 h-16 bg-[#F9F9F9] rounded-2xl flex items-center justify-center mx-auto mb-10 border border-black/5 group-hover:bg-gold group-hover:text-white transition-all duration-500 shadow-sm">
                  <Icon className="text-gold group-hover:text-white group-hover:scale-110 transition-all duration-500" size={32} />
                </div>

                <h3 className="font-nasal text-2xl mb-5 text-[#1A1A1A] tracking-tight group-hover:text-gold transition-colors">
                  {point.title}
                </h3>

                <p className="text-[#1A1A1A]/50 text-sm leading-relaxed font-inter mb-8">
                  {point.desc}
                </p>

                {/* Micro-Link Accent */}
                <div className="inline-flex items-center gap-2 text-gold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-[10px] font-nasal uppercase tracking-widest">Learn More</span>
                  <ArrowRight size={14} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}