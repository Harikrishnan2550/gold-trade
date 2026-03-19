"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative pt-48 pb-32 text-center bg-white overflow-hidden">
      {/* Background Polish: A soft gold ambient light at the top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.05),transparent_70%)] pointer-events-none" />

      <Container>
        {/* The Institutional Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#F9F9F9] border border-black/5 mb-8 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-[#1A1A1A]/40 font-nasal text-[10px] uppercase tracking-[0.3em]">
            Legacy of Trust
          </span>
        </motion.div>

        {/* The Main Heading with Metallic Finish */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-nasal text-6xl lg:text-8xl tracking-tighter leading-[1.1] text-[#1A1A1A]"
        >
          About Our <br />
          <span className="text-gold-gradient italic">Company</span>
        </motion.h1>

        {/* The Subtext with Obsidian Contrast */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[#1A1A1A]/50 mt-10 max-w-2xl mx-auto text-lg lg:text-2xl font-inter leading-relaxed"
        >
          Dubai-based gold trading specialists providing institutional-grade 
          precious metal execution and strategic investment advisory for the global market.
        </motion.p>

        {/* Decorative Scroll Hint */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
          <span className="text-gold/40 font-nasal text-[9px] uppercase tracking-widest">Our Story Below</span>
        </motion.div>
      </Container>
    </section>
  );
}