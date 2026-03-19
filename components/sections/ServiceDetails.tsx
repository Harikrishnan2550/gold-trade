"use client";

import Container from "../ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Spot Gold & Silver Trading",
  "Real-time Dubai Market Rates",
  "Institutional Physical Settlement",
  "Secure Vaulting Solutions",
];

export default function ServiceDetails() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* TEXT CONTENT - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-gold font-nasal tracking-[0.4em] text-[10px] uppercase mb-6 block">
              Our Core Expertise
            </span>

            <h2 className="font-nasal text-5xl lg:text-6xl text-[#1A1A1A] tracking-tighter leading-tight mb-8">
              Professional Gold <br />
              <span className="text-gold-gradient italic">Trading Floor</span>
            </h2>

            <p className="text-[#1A1A1A]/60 text-lg lg:text-xl font-inter leading-relaxed mb-10">
              We provide high-liquidity gold trading services powered by Sharjah's 
              logistical edge and global market transparency. Our desk handles 
              everything from private bullion accumulation to large-scale 
              institutional settlements.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-3 items-center group">
                  <CheckCircle2 size={18} className="text-gold/40 group-hover:text-gold transition-colors" />
                  <span className="text-[#1A1A1A] font-nasal text-[11px] uppercase tracking-widest">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* IMAGE CONTENT - Right Side with Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Soft Ambient Light behind image */}
            <div className="absolute inset-0 bg-gold/5 blur-[100px] rounded-full -z-10" />

            <div className="p-3 bg-[#FBFBFB] border border-black/5 rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.06)] relative overflow-hidden group">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem]">
                <Image
                  src="/gold-service.png"
                  alt="Professional Gold Trading Platform"
                  fill
                  className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
              </div>
              
              {/* Floating Stat Overlay */}
              <div className="absolute bottom-10 left-10 right-10 bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-white/40 shadow-xl">
                 <div className="flex justify-between items-center">
                    <div>
                       <p className="text-[10px] text-gold font-nasal uppercase tracking-widest mb-1">Execution Speed</p>
                       <p className="text-[#1A1A1A] font-nasal text-xl">INSTANT</p>
                    </div>
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center border border-gold/20">
                       <span className="w-3 h-3 bg-gold rounded-full animate-ping" />
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