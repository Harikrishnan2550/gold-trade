"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight, Zap } from "lucide-react";
import Container from "../ui/Container";

const contactDetails = [
  {
    title: "Global Headquarters",
    value: "SAIF Zone, Sharjah International Airport, U.A.E.",
    sub: "Free Zone Authority Jurisdiction",
    icon: MapPin,
    link: "#",
  },
  {
    title: "Institutional Desk",
    value: "+971 55 637 0424",
    sub: "Mon - Fri, 9:00 AM - 6:00 PM GST",
    icon: Phone,
    link: "tel:+971556370424",
  },
  {
    title: "Digital Inquiries",
    value: "info@zanora.ae",
    sub: "Secure Institutional Support",
    icon: Mail,
    link: "mailto:info@zanora.ae",
  },
];

export default function ContactInfo() {
  // Diverse Circuit Path Definitions for Variety
  const circuitPaths = [
    { d: "M 100 0 V 200 H 600 V 800", dur: 5, delay: 0 },         // L-Shunt Vertical
    { d: "M 1600 150 H 1200 L 1050 300 V 900", dur: 6, delay: 1 }, // Angular Drop Right
    { d: "M -100 650 H 1700", dur: 4, delay: 0.5 },              // Parallel Bottom 1
    { d: "M -100 680 H 1700", dur: 5, delay: 1.5 },              // Parallel Bottom 2
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#050505] relative overflow-hidden bg-floor-industrial border-t border-white/5">
      
      {/* ── 1. VARIETY CIRCUIT INFRASTRUCTURE ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 1600 800" fill="none" preserveAspectRatio="none">
          {circuitPaths.map((path, i) => (
            <g key={i}>
              <path d={path.d} stroke="#D4AF37" strokeWidth="1.5" opacity="0.1" />
              <motion.path
                d={path.d}
                stroke="url(#contactGlow)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0.1, pathOffset: 0 }}
                animate={{ pathOffset: [0, 1.5] }}
                transition={{ duration: path.dur, repeat: Infinity, ease: "linear", delay: path.delay }}
              />
            </g>
          ))}

          <defs>
            <linearGradient id="contactGlow" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#F9E498" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Container className="relative z-10">
        
        {/* ── 2. FLOATING ARTIFACT (Responsive sizing) ── */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotateY: [0, 10, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 right-0 z-0 opacity-10 blur-[1px] pointer-events-none"
        >
          <Image src="/gold-nugget.png" alt="Bullion Asset" width={150} height={150} className="lg:w-[200px]" />
        </motion.div>

        {/* ── 3. CONTACT GRID (Fully Responsive) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                initial={{ opacity: 0, filter: "blur(15px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="group relative bg-[#080808]/90 backdrop-blur-2xl p-8 lg:p-12 rounded-[2rem] lg:rounded-[2.5rem] border border-white/5 text-center hover:border-gold transition-all duration-700 shadow-2xl overflow-hidden"
              >
                {/* HUD Corner Accent */}
                <div className="absolute top-4 right-6 lg:top-6 lg:right-8 text-white/10 group-hover:text-gold transition-colors">
                  <ArrowUpRight size={18} />
                </div>

                {/* Robotic Icon Node */}
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/5 rounded-[1.5rem] lg:rounded-[2rem] flex items-center justify-center mx-auto mb-8 lg:mb-10 border border-white/10 group-hover:bg-gold transition-all duration-500 shadow-xl overflow-hidden shrink-0">
                  <Icon className="text-gold group-hover:text-black group-hover:scale-110 transition-all duration-500 relative z-10 w-7 h-7 lg:w-8 lg:h-8" />
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </div>

                <div className="relative z-10">
                  <h3 className="font-heading text-[8px] lg:text-[10px] tracking-[0.4em] uppercase text-gold mb-3 lg:mb-4">
                    {item.title}
                  </h3>

                  <p className="text-white font-heading text-lg lg:text-xl mb-3 lg:mb-4 leading-tight tracking-tighter uppercase px-2">
                    {item.value}
                  </p>

                  <p className="text-gray-500 text-[8px] lg:text-[10px] uppercase tracking-widest font-nasal">
                    {item.sub}
                  </p>
                </div>

                {/* Internal Scanline Sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/[0.04] to-transparent -translate-x-full group-hover:animate-[sweep_2.5s_linear_infinite] pointer-events-none" />

                {/* Active Connection Pulse */}
                <div className="mt-6 lg:mt-8 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                   <Zap size={10} className="text-gold animate-pulse" />
                   <span className="text-[7px] lg:text-[8px] text-gold font-nasal tracking-widest uppercase">Direct Node Link</span>
                </div>

                {/* Glow Bottom Anchor */}
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gold shadow-[0_0_20px_#D4AF37] group-hover:w-full transition-all duration-1000" />
              </motion.a>
            );
          })}
        </div>
      </Container>

      <style jsx global>{`
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
}