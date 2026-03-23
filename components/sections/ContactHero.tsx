"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative pt-48 pb-24 text-center bg-white overflow-hidden">
      {/* Background Detail: Subtle Gold Radial to lift the heading */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.06),transparent_70%)] pointer-events-none" />

      <Container className="relative z-10">
        {/* Connection Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#F9F9F9] border border-black/5 shadow-sm mb-10"
        >
          <MessageCircle size={14} className="text-gold" />
          <span className="text-[#1A1A1A]/40 font-nasal text-[10px] uppercase tracking-[0.3em]">
            Zanora Desk: <span className="text-[#1A1A1A] font-bold uppercase">Online</span>
          </span>
        </motion.div>

        {/* Heading with Metallic Gold Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-nasal text-6xl lg:text-8xl tracking-tighter leading-tight text-[#1A1A1A]"
        >
          Get in <br />
          <span className="text-gold-gradient italic">Touch</span>
        </motion.h1>

        {/* Subtext with SAIF Zone focus */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[#1A1A1A]/50 mt-10 max-w-3xl mx-auto text-lg lg:text-2xl font-inter leading-relaxed"
        >
          Reach our SAIF Zone trading team for institutional consultation, 
          secure bullion settlements, and professional global market expertise.
        </motion.p>

        {/* Editorial Divider */}
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="w-[1px] h-20 bg-gradient-to-b from-gold via-gold/20 to-transparent mx-auto mt-16"
        />
      </Container>
    </section>
  );
}