"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";
import { PhoneCall, Users, BarChart3, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "Institutional Inquiry",
    desc: "Connect with our SAIF Zone trading desk via secure, encrypted channels.",
    icon: PhoneCall,
  },
  {
    title: "Onboarding & KYC",
    desc: "Verified consultation to align with global AML and volume requirements.",
    icon: Users,
  },
  {
    title: "Market Execution",
    desc: "Real-time bullion trading at live Sharjah spot rates with zero slippage.",
    icon: BarChart3,
  },
  {
    title: "Secure Clearing",
    desc: "Fully insured physical settlement and global air-side asset transit.",
    icon: ShieldCheck,
  },
];

export default function Process() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Text - Institutional Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.015] select-none">
        <h2 className="text-[18vw] font-nasal whitespace-nowrap tracking-tighter uppercase italic">Zanora-Node</h2>
      </div>

      <Container>
        {/* Heading Section */}
        <div className="text-center mb-28">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-10 h-[1px] bg-gold/30" />
            <span className="text-gold font-audiowide tracking-[0.4em] text-[10px] uppercase">
              Operational Protocol
            </span>
            <div className="w-10 h-[1px] bg-gold/30" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="font-nasal text-5xl lg:text-7xl text-[#1A1A1A] tracking-tighter leading-[1.1]"
          >
            Execution <br />
            <span className="text-gold-gradient italic">Workflow</span>
          </motion.h2>

          <p className="text-[#1A1A1A]/50 mt-10 max-w-2xl mx-auto text-lg lg:text-xl font-outfit leading-relaxed">
            An institutional-grade framework designed for the secure and 
            efficient movement of high-value bullion assets.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connecting Line (Desktop Only) - Soft Gold Gradient */}
          <div className="absolute top-16 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  {/* Icon Container with Floating Number Badge */}
                  <div className="relative mb-10">
                    <motion.span 
                      whileHover={{ scale: 1.1 }}
                      className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-gold-light text-black text-[9px] font-audiowide flex items-center justify-center rounded-xl z-20 border border-white/10 shadow-2xl"
                    >
                      {index + 1}
                    </motion.span>
                    
                    <div className="w-32 h-32 bg-white border border-black/5 flex items-center justify-center mx-auto rounded-[3rem] shadow-sm group-hover:shadow-[0_40px_80px_-20px_rgba(212,175,55,0.15)] group-hover:border-gold/30 transition-all duration-700 relative z-10 overflow-hidden">
                      {/* Interactive Background Glow */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-gold/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      <Icon className="text-gold group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-1000 ease-in-out" size={36} strokeWidth={1.2} />
                    </div>
                  </div>

                  <h3 className="font-nasal text-xl mb-4 text-[#1A1A1A] tracking-widest uppercase group-hover:text-gold transition-colors duration-500">
                    {step.title}
                  </h3>

                  <p className="text-[#1A1A1A]/40 text-xs leading-relaxed max-w-[220px] mx-auto font-outfit px-2">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}