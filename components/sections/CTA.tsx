"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";
import { Phone, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative bg-gold rounded-[3rem] p-12 lg:p-24 text-center shadow-[0_40px_80px_-20px_rgba(212,175,55,0.3)] overflow-hidden"
        >
          {/* Decorative Texture/Pattern for the Gold Background */}
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 blur-[100px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/5 blur-[80px] rounded-full" />

          <div className="relative z-10">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-white/80 font-nasal tracking-[0.5em] text-[10px] uppercase mb-8 block"
            >
              Secure Your Future
            </motion.span>

            <h2 className="font-nasal text-5xl lg:text-7xl leading-tight text-white tracking-tighter mb-8">
              Execute Bullion With <br />
              <span className="text-[#1A1A1A] italic uppercase">Zanora FZC</span>
            </h2>

            <p className="text-white/80 mt-6 max-w-2xl mx-auto text-lg lg:text-xl font-inter leading-relaxed">
              Connect with our SAIF Zone institutional desk today. Protect your 
              wealth with investment-grade assets and transparent global execution.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-14">
              {/* Primary Contact Button */}
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#1A1A1A] text-white px-12 py-5 rounded-full font-nasal text-sm tracking-widest flex items-center justify-center gap-3 shadow-2xl transition-all ml-5 lg:ml-0"
                >
                  <MessageSquare size={18} />
                  GET IN TOUCH
                </motion.button>
              </Link>

              {/* Secondary Call Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-full font-nasal text-sm tracking-widest flex items-center justify-center gap-3 hover:bg-white hover:text-gold transition-all"
              >
                <Phone size={18} />
                CALL SPECIALIST
              </motion.button>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 text-white/40 text-[10px] uppercase tracking-[0.2em] font-nasal"
            >
              Licensed under SAIF Zone Authority • Regulated Operations
            </motion.p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}