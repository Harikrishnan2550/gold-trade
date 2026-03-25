"use client";

import Container from "../ui/Container";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ShieldCheck, Zap } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Diverse Circuit Path Definitions for Variety
  const circuitPaths = [
    { d: "M 0 400 H 400 L 500 300 H 1100 L 1200 400 H 1600", dur: 5, delay: 0 }, 
    { d: "M 250 0 V 200 L 50 350 V 900", dur: 7, delay: 1 },             
    { d: "M 1350 0 V 150 L 1500 300 V 900", dur: 6, delay: 0.5 },       
    { d: "M 1600 500 H 1200 L 1050 650 H 0", dur: 8, delay: 1.5 },
  ];

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      if (numericValue.length <= 10) {
        setForm((prev) => ({ ...prev, [name]: numericValue }));
      }
      return;
    }
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Secure Transmission Initiated:", form);
  }

  const inputStyles = `
    w-full bg-[#0A0A0A] border border-white/10 p-4 lg:p-5 rounded-xl lg:rounded-2xl 
    outline-none transition-all duration-500 font-body text-sm
    placeholder:text-gray-700 text-white
    focus:border-gold focus:shadow-[0_0_30px_rgba(212,175,55,0.15)]
  `;

  return (
    <section className="py-20 lg:py-32 bg-[#050505] relative overflow-hidden bg-floor-industrial border-t border-white/5">
      
      {/* ── 1. VARIETY CIRCUIT INFRASTRUCTURE ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <svg width="100%" height="100%" viewBox="0 0 1600 800" fill="none" preserveAspectRatio="none">
          {circuitPaths.map((path, i) => (
            <g key={i}>
              <path d={path.d} stroke="#D4AF37" strokeWidth="1.5" opacity="0.1" />
              <motion.path
                d={path.d}
                stroke="url(#formPulse)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.1, pathOffset: 0 }}
                animate={{ pathOffset: [0, 1.5] }}
                transition={{ duration: path.dur, repeat: Infinity, ease: "linear", delay: path.delay }}
              />
            </g>
          ))}
          <defs>
            <linearGradient id="formPulse" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#F9E498" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Container className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[#080808]/90 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] lg:rounded-[4rem] p-6 lg:p-20 shadow-2xl relative overflow-hidden group"
        >
          {/* Corner HUD Accents */}
          <div className="absolute top-0 left-0 w-12 h-12 lg:w-16 lg:h-16 border-t-2 border-l-2 border-gold/30 rounded-tl-[2.5rem] lg:rounded-tl-[4rem] group-hover:border-gold transition-all duration-700" />
          <div className="absolute bottom-0 right-0 w-12 h-12 lg:w-16 lg:h-16 border-b-2 border-r-2 border-gold/30 rounded-br-[2.5rem] lg:rounded-br-[4rem] group-hover:border-gold transition-all duration-700" />

          {/* Header */}
          <div className="text-center mb-10 lg:mb-16">
            <motion.div className="flex items-center justify-center gap-3 mb-6">
               <Zap size={14} className="text-gold animate-pulse" />
               <span className="text-gold font-audiowide tracking-[0.4em] lg:tracking-[0.6em] text-[8px] lg:text-[10px] uppercase">
                 Secure Inquiry Protocol
               </span>
            </motion.div>
            <h2 className="font-audiowide text-3xl lg:text-6xl text-white uppercase tracking-tighter leading-tight lg:leading-none overflow-visible">
              Initialize <br className="lg:hidden" />
              <span className="relative inline-flex items-center overflow-visible">
                <span className="gold-specular italic  font-black pr-4 py-2 -mr-4 block overflow-visible">
                  Transmission
                </span>
              </span>
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div className="space-y-2 lg:space-y-3">
                <label className="font-nasal text-[9px] lg:text-[10px] uppercase tracking-[0.3em] text-gray-500 ml-4">Subject Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="IDENTIFY FULL NAME"
                  value={form.name}
                  onChange={handleChange}
                  className={inputStyles}
                  required
                />
              </div>

              <div className="space-y-2 lg:space-y-3">
                <label className="font-nasal text-[9px] lg:text-[10px] uppercase tracking-[0.3em] text-gray-500 ml-4">Communication Node</label>
                <input
                  name="email"
                  type="email"
                  placeholder="EMAIL_ADDRESS@SECURE.COM"
                  value={form.email}
                  onChange={handleChange}
                  className={inputStyles}
                  required
                />
              </div>
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label className="font-nasal text-[9px] lg:text-[10px] uppercase tracking-[0.3em] text-gray-500 ml-4">Terminal Contact</label>
              <input
                name="phone"
                type="tel"
                placeholder="+971 -- --- ----"
                value={form.phone}
                onChange={handleChange}
                className={inputStyles}
                required
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label className="font-nasal text-[9px] lg:text-[10px] uppercase tracking-[0.3em] text-gray-500 ml-4">Inquiry Metadata</label>
              <textarea
                name="message"
                placeholder="DESCRIBE REQUIRED TRADING PARAMETERS..."
                rows={4}
                value={form.message}
                onChange={handleChange}
                className={`${inputStyles} resize-none`}
                required
              />
            </div>

            <div className="pt-4 lg:pt-6">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(212,175,55,0.3)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-white text-black py-4 lg:py-6 rounded-xl lg:rounded-2xl font-heading tracking-[0.3em] lg:tracking-[0.4em] text-[10px] lg:text-xs uppercase hover:bg-gold transition-all duration-500 flex items-center justify-center gap-4"
              >
                <Send size={16} />
                Send Encrypted Inquiry
              </motion.button>
              
              <div className="flex items-center justify-center gap-3 lg:gap-4 mt-8 lg:mt-10">
                 <ShieldCheck size={14} className="text-gold/40" />
                 <p className="text-[8px] lg:text-[9px] text-gray-600 font-nasal uppercase tracking-[0.3em] lg:tracking-[0.4em] text-center">
                   End-to-End Sharjah Node Encryption
                 </p>
              </div>
            </div>
          </form>

          {/* Internal Scanline Sweep */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.03] to-transparent h-1/2 -translate-y-full group-hover:animate-[scan_4s_linear_infinite] pointer-events-none" />
        </motion.div>
      </Container>

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  );
}