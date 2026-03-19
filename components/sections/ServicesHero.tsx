"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative pt-48 pb-24 text-center bg-white overflow-hidden">
      {/* Background Luxury Element: Subtle Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none" />
      
      <Container>
        {/* Animated Badge */}
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-gold font-nasal tracking-[0.4em] text-[10px] uppercase mb-6 border border-gold/20 px-4 py-1 rounded-full bg-gold/5"
        >
          Our Expertise
        </motion.span>

        {/* The Main Heading with Metallic Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-nasal text-6xl lg:text-8xl tracking-tighter leading-[1.1] text-[#1A1A1A]"
        >
          Trading <br />
          <span className="text-gold-gradient italic">Services</span>
        </motion.h1>

        {/* Description with improved Obsidian/Charcoal color */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-[#1A1A1A]/60 mt-8 max-w-2xl mx-auto text-lg lg:text-xl font-inter leading-relaxed"
        >
          Institutional-grade gold trading solutions and strategic investment 
          advisory designed for secure, high-value transactions in the Dubai market.
        </motion.p>

        {/* Premium Scroll Indicator or Divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-16 opacity-50"
        />
      </Container>
    </section>
  );
}