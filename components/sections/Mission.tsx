"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function Mission() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Decorative Element: Subtle Gold Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 relative">
          
          {/* 1. MISSION CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white border border-black/5 p-12 lg:p-16 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] group hover:shadow-[0_40px_80px_-15px_rgba(212,175,55,0.1)] transition-all duration-700"
          >
            <div className="w-16 h-16 bg-gold/5 rounded-2xl flex items-center justify-center mb-10 border border-gold/10 group-hover:bg-gold group-hover:text-white transition-all duration-500">
              <Target size={32} className="text-gold group-hover:text-white group-hover:scale-110 transition-transform duration-500" />
            </div>

            <h3 className="font-nasal text-3xl mb-6 text-[#1A1A1A] tracking-tighter">
              Our <span className="text-gold-gradient italic font-normal">Mission</span>
            </h3>

            <p className="text-[#1A1A1A]/50 text-lg leading-relaxed font-inter">
              To deliver institution-grade gold trading services anchored in 
              professional advisory, transparent pricing, and the highest 
              standards of security for every transaction.
            </p>
          </motion.div>

          {/* 2. VISION CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#F9F9F9] border border-black/5 p-12 lg:p-16 rounded-[3rem] group hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] transition-all duration-700"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm border border-black/5 group-hover:bg-gold group-hover:text-white transition-all duration-500">
              <Eye size={32} className="text-gold group-hover:text-white group-hover:scale-110 transition-transform duration-500" />
            </div>

            <h3 className="font-nasal text-3xl mb-6 text-[#1A1A1A] tracking-tighter">
              Our <span className="text-gold-gradient italic font-normal">Vision</span>
            </h3>

            <p className="text-[#1A1A1A]/50 text-lg leading-relaxed font-inter">
              To become the global benchmark for trusted gold trading, bridging 
              Dubai's historic gold legacy with modern, international investment 
              strategies for a digital age.
            </p>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}