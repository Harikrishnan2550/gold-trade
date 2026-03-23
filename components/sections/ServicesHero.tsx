"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative pt-48 pb-24 text-center bg-white overflow-hidden">
      {/* Background Luxury Element: Subtle Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none" />
      
      <Container>
        {/* Animated Badge - Updated for Institutional Tone */}
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-gold font-audiowide tracking-[0.4em] text-[9px] uppercase mb-6 border border-gold/20 px-5 py-1.5 rounded-full bg-gold/5"
        >
          Institutional Execution
        </motion.span>

        {/* The Main Heading with Metallic Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-nasal text-6xl lg:text-8xl tracking-tighter leading-[1.05] text-[#1A1A1A]"
        >
          Bullion <br />
          <span className="text-gold-gradient italic">Solutions</span>
        </motion.h1>

        {/* Updated Description - Highlighting SAIF Zone and Asset Movement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-[#1A1A1A]/60 mt-8 max-w-3xl mx-auto text-lg lg:text-xl font-outfit leading-relaxed"
        >
          Leveraging the strategic infrastructure of the Sharjah Airport International Free Zone, 
          Zanora FZC provides institutional-grade physical gold trading and seamless 
          global asset movement designed for absolute security and transparency.
        </motion.p>

        {/* Premium Divider */}
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.4 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-20"
        />

        {/* Global Node Info - Subtle Technical Detail */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 flex justify-center gap-6 text-[#1A1A1A]/20 font-nasal text-[8px] uppercase tracking-[0.3em]"
        >
          <span>SAIF Node: 01</span>
          <span>•</span>
          <span>999.9 Purity Standard</span>
          <span>•</span>
          <span>Global Air-Side Access</span>
        </motion.div>
      </Container>
    </section>
  );
}