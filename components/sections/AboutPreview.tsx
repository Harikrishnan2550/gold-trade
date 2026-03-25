"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Activity, Zap } from "lucide-react";
import Container from "../ui/Container";

export default function AboutPreview() {
  // Diverse Circuit Path Definitions for variety
  const circuitPaths = [
    { d: "M 200 0 V 300 H 0", dur: 5, delay: 0 },         // L-Shunt Top
    { d: "M 1400 900 V 600 H 1600", dur: 6, delay: 1 },  // L-Shunt Bottom
    { d: "M 0 450 H 300 L 450 600 H 1600", dur: 7, delay: 0.5 }, // Angular Path
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-[#050505] bg-floor-industrial">
      
      {/* ── 1. VARIETY CIRCUIT INFRASTRUCTURE ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <svg width="100%" height="100%" viewBox="0 0 1600 900" fill="none" preserveAspectRatio="none">
          {circuitPaths.map((path, i) => (
            <g key={i}>
              <path 
                d={path.d} 
                stroke="#D4AF37" 
                strokeWidth="1.5" 
                opacity="0.15" 
                className="drop-shadow-[0_0_8px_rgba(212,175,55,0.2)]"
              />
              <motion.path
                d={path.d}
                stroke="url(#aboutGridPulse)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0.1, pathOffset: 0 }}
                animate={{ pathOffset: [0, 1.5] }}
                transition={{ duration: path.dur, repeat: Infinity, ease: "linear", delay: path.delay }}
              />
            </g>
          ))}
          <defs>
            <linearGradient id="aboutGridPulse" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#F9E498" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ── 2. FLOATING ASSET ARTIFACT (Responsive sizing) ── */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-[5%] lg:right-[10%] z-1 opacity-40 mask-gold-nugget pointer-events-none blur-[1px]"
      >
        <Image 
          src="/gold-nugget.png" 
          alt="Floating Core" 
          width={100} 
          height={100} 
          className="lg:w-[150px] lg:h-[150px] object-contain"
        />
      </motion.div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* IMAGE SIDE - Responsive Glassmorphic Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-4 bg-gold/5 blur-3xl rounded-full" />
            
            <div className="relative p-2 lg:p-3 bg-white/[0.03] border border-white/10 rounded-[2.5rem] lg:rounded-[3.5rem] backdrop-blur-sm overflow-hidden group">
              <div className="relative aspect-square lg:aspect-[4/5] w-full overflow-hidden rounded-[2rem] lg:rounded-[3rem]">
                <Image
                  src="/hero-about.png"
                  alt="Gold Casting Process"
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent" />
              </div>
              
              <div className="absolute top-6 right-6 lg:top-8 lg:right-8 w-10 h-10 lg:w-12 lg:h-12 border-t-2 border-r-2 border-gold/40 rounded-tr-2xl" />
              <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8 w-10 h-10 lg:w-12 lg:h-12 border-b-2 border-l-2 border-gold/40 rounded-bl-2xl" />
            </div>
          </motion.div>

          {/* TEXT SIDE - Responsive Typography */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(15px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8 order-1 lg:order-2 text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className="font-audiowide text-[8px] lg:text-[10px] tracking-[0.4em] text-gold uppercase whitespace-nowrap">
                Established Excellence
              </span>
              <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-gold/40 to-transparent" />
            </div>

            <h2 className="font-audiowide text-4xl md:text-6xl lg:text-8xl leading-[1.1] lg:leading-[0.9] text-white uppercase tracking-tighter">
              About Our <br />
              <span className="text-gold-gradient animate-shimmer italic">Operation</span>
            </h2>

            <div className="space-y-4 lg:space-y-6">
              <p className="text-gray-400 text-base lg:text-xl font-body leading-relaxed max-w-xl mx-auto lg:mx-0">
                We are a Sharjah-based gold trading institution offering secure precious 
                metal execution, strategic investment consulting, and 
                unrivaled market expertise. 
              </p>

              <div className="relative pl-0 lg:pl-8 py-2 border-t border-white/5 lg:border-t-0">
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold via-gold/20 to-transparent" />
                <p className="text-gray-500 text-sm lg:text-base font-body leading-relaxed italic px-4 lg:px-0">
                  "Our focus is delivering the gold standard in transparency, 
                  facilitating high-value global transactions."
                </p>
              </div>
            </div>

            <div className="pt-4 lg:pt-8 flex justify-center lg:justify-start">
              <Link href="/about">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="inline-flex items-center gap-4 lg:gap-6 group cursor-pointer"
                >
                  <div className="relative w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-gold/20 animate-ping group-hover:border-gold/50" />
                    <div className="relative w-full h-full bg-[#111] border border-white/10 text-white rounded-full flex items-center justify-center group-hover:bg-gold group-hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                      <ArrowRight size={20} className="lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col text-left">
                    <span className="font-nasal text-[8px] lg:text-[10px] tracking-[0.3em] uppercase text-gray-500 group-hover:text-gold transition-colors">
                      Protocol Insight
                    </span>
                    <span className="font-audiowide text-base lg:text-lg text-white uppercase tracking-wider">
                      Discover Our Story
                    </span>
                  </div>
                </motion.div>
              </Link>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}