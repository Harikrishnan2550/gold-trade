"use client";

import Container from "../ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";

const features = [
  "Spot Gold & Silver Execution",
  "Institutional Physical Settlement",
  "SAIF Zone Air-Side Logistics",
  "Secure Custodial Vaulting",
];

export default function ServiceDetails() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* TEXT CONTENT - Strategic Execution */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-gold font-audiowide tracking-[0.4em] text-[10px] uppercase">
                Core Execution
              </span>
              <div className="h-[1px] w-12 bg-gold/20" />
            </div>

            <h2 className="font-nasal text-5xl lg:text-6xl text-[#1A1A1A] tracking-tighter leading-[1.05] mb-8">
              Institutional <br />
              <span className="text-gold-gradient italic">Trading Desk</span>
            </h2>

            <p className="text-[#1A1A1A]/60 text-lg lg:text-xl font-outfit leading-relaxed mb-10">
              Zanora FZC provides high-liquidity bullion services powered by the 
              Sharjah Airport International Free Zone's logistical infrastructure. 
              Our desk facilitates everything from private capital preservation 
              to large-scale global physical settlements.
            </p>

            {/* Feature List - Technical Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 border-t border-black/5 pt-10">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-3 items-center group">
                  <div className="w-5 h-5 rounded-full bg-gold/5 flex items-center justify-center border border-gold/10 group-hover:bg-gold/10 transition-colors">
                    <CheckCircle2 size={12} className="text-gold" />
                  </div>
                  <span className="text-[#1A1A1A] font-nasal text-[10px] uppercase tracking-[0.15em]">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* IMAGE CONTENT - High-End Presentation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Soft Ambient Light behind image */}
            <div className="absolute inset-0 bg-gold/5 blur-[100px] rounded-full -z-10" />

            <div className="p-3 bg-[#FBFBFB] border border-black/5 rounded-[3.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.06)] relative overflow-hidden group">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.8rem]">
                <Image
                  src="/gold-service.png"
                  alt="Zanora FZC Trading Terminal"
                  fill
                  className="object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
              </div>
              
              {/* Floating Stat Overlay - Technical Focus */}
              <div className="absolute bottom-5  left-10 right-10 bg-[#0A0A0A]/90 backdrop-blur-2xl p-4 rounded-2xl border border-white/10 shadow-2xl">
                 <div className="flex justify-between items-center">
                    <div className="space-y-1">
                       <div className="flex items-center gap-2">
                          <ShieldCheck size={12} className="text-gold" />
                          <p className="text-[9px] text-white/40 font-audiowide uppercase tracking-widest">Global Status</p>
                       </div>
                       <p className="text-white font-nasal text-xl tracking-wider">ACTIVE SYNC</p>
                    </div>
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-gold/30 transition-colors">
                       <span className="w-2.5 h-2.5 bg-gold rounded-full animate-pulse shadow-[0_0_10px_rgba(212,175,55,1)]" />
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </Container>
    </section>
  );
}