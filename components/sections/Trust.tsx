"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";
import { ShieldCheck, Landmark, Globe, Scale } from "lucide-react";

const trustItems = [
  {
    title: "Licensed Entity",
    desc: "Zanora FZC is a legally registered trading entity authorized by the Sharjah Airport International Free Zone Authority.",
    icon: Landmark,
    label: "Registration"
  },
  {
    title: "SAIF Zone HQ",
    desc: "Our operations are centralized in the Sharjah Airport International Free Zone (SAIF ZONE), ensuring global logistics efficiency.",
    icon: Globe,
    label: "Jurisdiction"
  },
  {
    title: "Security Protocols",
    desc: "All physical bullion movements are protected by Tier-1 insurance and verified chain-of-custody documentation.",
    icon: ShieldCheck,
    label: "Asset Protection"
  },
  {
    title: "Legal Compliance",
    desc: "Strict adherence to UAE AML/CFT regulations and international gold sourcing standards to ensure clean trade.",
    icon: Scale,
    label: "Oversight"
  },
];

export default function Trust() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Structural background line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-black/5" />
      
      <Container>
        {/* Trust Header */}
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gold font-audiowide tracking-[0.4em] text-[9px] uppercase block mb-4"
          >
            Regulatory Framework
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-nasal text-4xl text-[#1A1A1A] tracking-tighter font-semibold-nasal"
          >
            Trust & <span className="text-gold-gradient italic font-normal">Accountability</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group relative p-10 bg-white border border-black/5 rounded-[2.5rem] hover:border-gold/30 transition-all duration-500"
              >
                {/* Audiowide Label for Technical Context */}
                <span className="font-audiowide text-[8px] text-black/20 uppercase tracking-[0.2em] block mb-10 group-hover:text-gold transition-colors">
                  {item.label}
                </span>

                <div className="w-12 h-12 rounded-xl bg-[#FBFBFB] flex items-center justify-center mb-8 border border-black/5 group-hover:bg-gold transition-all duration-500">
                  <Icon className="text-gold group-hover:text-white transition-colors" size={24} />
                </div>

                <h3 className="font-nasal text-lg mb-4 text-[#1A1A1A] tracking-tight">
                  {item.title}
                </h3>

                {/* Switched to Inter / Normal Font for the paragraph */}
                <p className="text-[#1A1A1A]/60 text-sm leading-relaxed font-inter">
                  {item.desc}
                </p>

                <div className="mt-8 w-6 h-[1px] bg-gold/30 group-hover:w-full transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>

        {/* Corporate Address / Verification Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 pt-8 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <div className="text-center sm:text-left">
            <p className="font-audiowide text-[10px] text-black/40 uppercase tracking-widest">Registered Headquarters</p>
            <p className="font-inter text-[12px] text-black/70 mt-1">
              Zanora FZC, SAIF Zone, Sharjah Airport International Free Zone Authority, UAE
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gold/5 rounded-full border border-gold/10">
            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="font-nasal text-[9px] text-gold uppercase tracking-[0.2em]">Verified Entity</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}