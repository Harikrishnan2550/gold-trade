"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";

export default function MarketsHero() {
  return (
    <section className="relative pt-48 pb-32 text-center bg-white overflow-hidden">
      {/* Background Detail: Subtle Terminal Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <Container className="relative z-10">
        {/* Market Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[#1A1A1A]/60 font-nasal text-[10px] uppercase tracking-[0.2em]">
            Dubai Market: <span className="text-[#1A1A1A] font-bold">Open</span>
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-nasal text-6xl lg:text-8xl tracking-tighter leading-tight text-[#1A1A1A]"
        >
          Trading <br />
          <span className="text-gold-gradient italic">Markets</span>
        </motion.h1>

        {/* Body Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[#1A1A1A]/50 mt-10 max-w-2xl mx-auto text-lg lg:text-2xl font-inter leading-relaxed"
        >
          Access global precious metal liquidity and regional Dubai expertise 
          through our high-speed trading infrastructure and institutional networks.
        </motion.p>

        {/* Decorative Data Line */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ delay: 0.8, duration: 1 }}
          className="h-[1px] bg-gold mx-auto mt-16 opacity-30"
        />
      </Container>
    </section>
  );
}