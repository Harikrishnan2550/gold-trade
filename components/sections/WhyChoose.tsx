"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Award, Users, CheckCircle, Zap } from "lucide-react";
import Container from "../ui/Container";

const points = [
  {
    title: "Trusted Company",
    desc: "Reliable gold trading services with a proven track record of excellence in Sharjah & Dubai.",
    icon: Shield,
  },
  {
    title: "Professional Expertise",
    desc: "Our trading professionals bring decades of collective market knowledge to your portfolio.",
    icon: Award,
  },
  {
    title: "Strong Client Network",
    desc: "Serving a diverse range of private investors and global financial institutions.",
    icon: Users,
  },
  {
    title: "Transparent Process",
    desc: "Clear, secure, and fully audited trading operations for absolute peace of mind.",
    icon: CheckCircle,
  },
];

export default function WhyChoose() {
  // Diverse Circuit Paths for Variety
  const circuitPaths = [
    { d: "M 0 450 H 1600", dur: 5, delay: 0 },         // Main Horizontal
    { d: "M 400 0 V 200 L 250 350 V 900", dur: 7, delay: 1 }, // L-Shunt Left
    { d: "M 1200 0 V 150 L 1350 300 V 900", dur: 6, delay: 0.5 }, // L-Shunt Right
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-floor-industrial">
      
      {/* ── 1. VARIETY CIRCUIT BACKGROUND ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <svg width="100%" height="100%" viewBox="0 0 1600 900" fill="none" preserveAspectRatio="none">
          {circuitPaths.map((path, i) => (
            <g key={i}>
              <path 
                d={path.d} 
                stroke="#D4AF37" 
                strokeWidth="1.5" 
                opacity="0.1" 
              />
              <motion.path 
                d={path.d} 
                stroke="url(#choosePulse)" 
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0.1, pathOffset: 0 }}
                animate={{ pathOffset: [0, 1.5] }}
                transition={{ duration: path.dur, repeat: Infinity, ease: "linear", delay: path.delay }}
              />
            </g>
          ))}
          <defs>
            <linearGradient id="choosePulse" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#F9E498" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: Heading & Visuals */}
          <div className="space-y-8 lg:space-y-12">
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <Zap size={14} className="text-gold animate-pulse" />
                <span className="text-gold font-audiowide tracking-[0.4em] text-[8px] lg:text-[10px] uppercase">
                  Terminal Advantage
                </span>
              </div>
              
              <h2 className="font-audiowide text-4xl md:text-5xl lg:text-7xl text-white uppercase tracking-tighter leading-[1.2] lg:leading-[1.1] overflow-visible">
  Why Choose <br className="hidden sm:block" />
  <span className="relative inline-flex items-center overflow-visible"> 
    <span className="text-gold-gradient  italic pr-4 py-2 -mr-4 block overflow-visible">
      Our Platform
    </span>
  </span>
</h2>

              <p className="text-gray-500 mt-6 lg:mt-8 text-base lg:text-lg font-body leading-relaxed max-w-lg mx-auto lg:mx-0">
                We bridge the gap between physical bullion and digital precision, 
                leveraging a secure, institutional-grade mobile terminal for 
                real-time execution.
              </p>
            </motion.div>

            {/* THE PHONE IMAGE CONTAINER - Responsive Fluid Sizing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <div className="absolute inset-0 bg-gold/10 blur-[100px] rounded-full scale-75 z-0" />
              
              <div className="relative group cursor-pointer z-10 w-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px]">
                <Image 
                  src="/gold-phone-terminal.png" 
                  alt="Zanora FZC Mobile Terminal"
                  width={450}
                  height={800}
                  className="object-contain drop-shadow-[0_0_50px_rgba(212,175,55,0.2)] transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Stats Badge */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -right-2 lg:-right-4 top-1/4 bg-white/[0.03] backdrop-blur-xl border border-gold/30 p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-2xl"
                >
                  <p className="text-gold font-audiowide text-lg lg:text-xl">99.9%</p>
                  <p className="text-gray-400 text-[7px] lg:text-[8px] uppercase tracking-widest">Purity Verified</p>
                </motion.div>
              </div>

              {/* STONES (Responsive sizing) */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-[10%] opacity-40 blur-[1px] pointer-events-none"
              >
                <Image src="/gold-nugget.png" alt="Artifact" width={100} height={100} className="w-16 lg:w-32" />
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: List Items */}
          <div className="space-y-6 lg:space-y-10">
            {points.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="flex gap-5 lg:gap-8 group"
                >
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/5 border border-white/10 rounded-xl lg:rounded-2xl flex items-center justify-center group-hover:bg-gold transition-all duration-500">
                      <Icon className="text-gold group-hover:text-black transition-colors" size={24} />
                    </div>
                  </div>

                  <div className="flex-1 border-b border-white/5 pb-6 lg:pb-8 group-last:border-0">
                    <h3 className="font-audiowide text-lg lg:text-xl mb-2 text-white uppercase group-hover:text-gold transition-colors tracking-wider">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs lg:text-sm leading-relaxed max-w-sm group-hover:text-gray-300 transition-colors">
                      {item.desc}
                    </p>
                    <div className="mt-4 h-[1px] w-0 bg-gold group-hover:w-full transition-all duration-700" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}