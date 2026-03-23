"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative pt-48 pb-32 text-center bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.06),transparent_70%)] pointer-events-none" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#F9F9F9] border border-black/5 mb-8 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-[#1A1A1A]/60 font-audiowide text-[9px] uppercase tracking-[0.3em]">
            Zanora FZC • SAIF Zone
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-nasal text-6xl lg:text-8xl tracking-tighter leading-[1.05] text-[#1A1A1A]"
        >
          Zanora <span className="text-gold-gradient italic">FZC</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[#1A1A1A]/60 mt-8 max-w-3xl mx-auto text-lg lg:text-xl font-outfit leading-relaxed"
        >
          Located in the Sharjah Airport International Free Zone, Zanora FZC 
          is a premier bullion house dedicated to high-volume physical gold 
          execution and institutional asset preservation.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
          <span className="text-gold/60 font-nasal text-[9px] uppercase tracking-[0.2em]">Our Methodology</span>
        </motion.div>
      </Container>
    </section>
  );
}