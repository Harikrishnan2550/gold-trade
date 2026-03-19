"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import { ArrowUpRight, ShieldCheck, Globe, Activity, Landmark } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 lg:pt-44 pb-12 lg:pb-20 bg-white overflow-hidden">
      <Container>
        {/* MAIN BENTO GRID: 1 column on mobile, 12 on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 auto-rows-min lg:auto-rows-[280px]">
          
          {/* 1. PRIMARY INSTITUTIONAL CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-1 lg:col-span-8 lg:row-span-2 bg-white border border-black/5 rounded-[2.5rem] lg:rounded-[3.5rem] relative overflow-hidden flex flex-col justify-center shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] min-h-[500px] lg:min-h-0"
          >
            {/* Background Watermark - Hidden on small mobile to avoid clutter */}
            <div className="absolute top-10 left-10 font-audiowide text-[60px] lg:text-[100px] text-black/[0.02] select-none leading-none pointer-events-none hidden sm:block">
              AU 79
            </div>

            <div className="relative z-20 p-8 lg:p-20 lg:pr-0 w-full lg:w-[65%]">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-6 lg:mb-8"
              >
                <span className="w-6 lg:w-8 h-[1px] bg-gold" />
                <span className="text-gold font-audiowide tracking-[0.3em] text-[9px] lg:text-[10px] uppercase">
                  Institutional Bullion Desk
                </span>
              </motion.div>

              <h1 className="font-nasal text-4xl sm:text-5xl lg:text-5xl leading-[1.1] lg:leading-[1.05] text-[#1A1A1A] mb-6 lg:mb-8 tracking-tighter font-semibold-nasal">
                PIONEERING <br />
                <span className="text-gold-gradient italic">THE GOLD STANDARD</span>
              </h1>

              <p className="text-[#1A1A1A]/50 text-sm lg:text-lg max-w-sm mb-10 lg:mb-12 font-inter leading-relaxed">
                Seamless physical gold execution and sophisticated wealth preservation 
                strategies for private offices and institutional mandates.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8">
                <Link href="/contact" className="w-full sm:w-auto group relative bg-[#0A0A0A] text-white px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-nasal text-[10px] lg:text-[11px] tracking-widest uppercase overflow-hidden transition-all shadow-2xl shadow-black/20 text-center">
                  <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10 group-hover:text-black transition-colors">Initialize Trade</span>
                </Link>
                
                <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-1">
                  <span className="font-audiowide text-[9px] lg:text-[10px] text-black/30 uppercase tracking-tighter">Market Status</span>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-nasal text-[11px] lg:text-[12px] text-black">DUBAI OPEN</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RESPONSIVE IMAGE STRATEGY */}
            <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[38%] opacity-10 lg:opacity-100 pointer-events-none lg:pointer-events-auto overflow-hidden border-l border-black/5">
              <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37] to-[#8A6D19] z-10 opacity-20 lg:opacity-10" />
              <Image 
                src="/gold-bar.png" 
                alt="24K Investment Grade Bullion" 
                fill 
                priority
                className="object-cover object-center scale-110 lg:scale-105 hover:scale-110 transition-transform duration-[3000ms]" 
              />
              <div className="absolute bottom-10 left-10 z-20 hidden lg:block">
                <p className="font-audiowide text-[9px] text-white/40 rotate-90 origin-left tracking-[0.5em] uppercase">
                  999.9 Fineness Certified
                </p>
              </div>
            </div>
          </motion.div>

          {/* 2. REGULATORY CARD - Stacks on mobile */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="col-span-1 lg:col-span-4 lg:row-span-1 bg-[#F9F9F9] border border-black/5 rounded-[2.5rem] lg:rounded-[3.5rem] p-8 lg:p-10 relative overflow-hidden group hover:shadow-xl transition-all duration-700 min-h-[220px] lg:min-h-0"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="w-12 lg:w-14 h-12 lg:h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-black/5 group-hover:border-gold/30 transition-colors">
                  <Landmark className="text-gold" size={20} />
                </div>
                <Activity className="text-black/5 group-hover:text-gold/20 transition-colors" size={32} />
              </div>
              <div>
                <h3 className="font-nasal text-base lg:text-lg text-[#1A1A1A] tracking-tight group-hover:text-gold transition-colors uppercase">DMCC COMPLIANT</h3>
                <p className="text-[#1A1A1A]/40 text-[9px] lg:text-[10px] mt-2 font-inter leading-relaxed uppercase tracking-[0.1em]">
                  Adhering to OECD due diligence standards for responsible sourcing.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 3. ASSET ALLOCATION CARD - Stacks on mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="col-span-1 lg:col-span-4 lg:row-span-1 bg-[#1A1A1A] rounded-[2.5rem] lg:rounded-[3.5rem] p-8 lg:p-10 relative overflow-hidden group cursor-pointer min-h-[220px] lg:min-h-0"
          >
            <div className="flex flex-col h-full justify-between relative z-10">
               <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="font-audiowide text-[8px] lg:text-[9px] text-gold/50 uppercase tracking-widest">Global Desk</p>
                    <h4 className="font-nasal text-lg lg:text-xl text-white tracking-tighter">PORTFOLIO</h4>
                  </div>
                  <div className="w-10 lg:w-12 h-10 lg:h-12 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-gold transition-all duration-500">
                    <ArrowUpRight size={18} className="text-white group-hover:text-black transition-transform" />
                  </div>
               </div>
               <div className="pt-6 lg:pt-8 border-t border-white/5 mt-4">
                  <p className="text-white/40 text-[10px] lg:text-[11px] font-inter uppercase tracking-widest leading-relaxed">
                    Access deep liquidity pools across Dubai & London hubs.
                  </p>
               </div>
            </div>
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-gold/10 blur-[60px] rounded-full" />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}