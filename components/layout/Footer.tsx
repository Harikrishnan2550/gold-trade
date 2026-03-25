"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Zap } from "lucide-react";
import Container from "../ui/Container";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "FB.Node" },
    { icon: Instagram, href: "#", label: "IG.Node" },
    { icon: Twitter, href: "#", label: "TW.Node" },
    { icon: Linkedin, href: "#", label: "LI.Node" },
  ];

  // Diverse Circuit Path Definitions for Variety
  const circuitPaths = [
    { d: "M 0 400 H 1600", dur: 5, delay: 0 },         // Main Horizontal
    { d: "M 200 0 V 300 L 50 450 V 900", dur: 7, delay: 1 }, // L-Shunt Drop
    { d: "M 1400 0 V 150 L 1550 300 V 900", dur: 6, delay: 0.5 }, // L-Shunt Right
    { d: "M 1600 500 H 1200 L 1000 700 H 0", dur: 8, delay: 2 }, // Angular Shunt
  ];

  return (
    <footer className="relative bg-[#050505] pt-20 pb-10 overflow-hidden border-t border-white/5">
      
      {/* ── 1. VARIETY CIRCUIT INFRASTRUCTURE ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <svg width="100%" height="100%" viewBox="0 0 1600 800" fill="none" preserveAspectRatio="none">
          {circuitPaths.map((path, i) => (
            <g key={i}>
              <path 
                d={path.d} 
                stroke="#D4AF37" 
                strokeWidth="1.5" 
                opacity="0.15" 
                className="drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]"
              />
              <motion.path 
                d={path.d} 
                stroke="url(#footerPulse)" 
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0.1, pathOffset: 0 }}
                animate={{ pathOffset: [0, 2] }}
                transition={{ duration: path.dur, repeat: Infinity, ease: "linear", delay: path.delay }}
              />
            </g>
          ))}
          <defs>
            <linearGradient id="footerPulse" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#F9E498" /> 
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ── 2. GOLDEN EMBERS ── */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="ember animate-ember"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${60 + Math.random() * 40}%`,
                width: '2px', height: '2px',
                // @ts-ignore
                "--duration": `${6 + Math.random() * 10}s`,
                "--delay": `${Math.random() * 5}s`,
              }}
            />
          ))}
      </div>

      <Container className="relative z-10">
        {/* THE ZANORA FZC WATERMARK - Responsive Font Sizing */}
        <div className="relative h-32 lg:h-64 mt-[-4rem] lg:mt-[-1rem] z-0 select-none pointer-events-none flex justify-center items-center overflow-hidden">
          <h1 className="text-[14vw] lg:text-[10vw] font-audiowide text-white/50 tracking-tighter leading-none uppercase italic whitespace-nowrap">
            Zanora Fzc
          </h1>
        </div>

        {/* THE FLOATING DOCK CARD - Responsive Padding */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#080808]/90 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] lg:rounded-[3rem] p-8 lg:p-16 shadow-2xl relative z-10 overflow-hidden group"
        >
          {/* Internal Scanline */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/[0.02] to-transparent -translate-x-full group-hover:animate-[scan_3s_linear_infinite] pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10 text-center lg:text-left">
            
            {/* BRANDING */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
              <Link href="/" className="flex items-center gap-3 mb-8 group/logo">
                <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center border border-gold/20 group-hover/logo:border-gold transition-colors">
                  <Zap size={18} className="text-gold" />
                </div>
                <h2 className="font-audiowide text-2xl lg:text-3xl tracking-tighter text-white uppercase leading-none">
                  ZANORA <br /> <span className="text-gold-gradient italic font-normal text-xl lg:text-2xl">Terminal FZC</span>
                </h2>
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-10 font-body">
                Institutional-grade bullion trading and wealth preservation 
                powered by physical 24K gold assets.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <Link key={i} href={social.href}>
                    <div className="w-11 h-11 bg-white/5 rounded-full flex items-center justify-center text-gray-600 hover:bg-gold hover:text-black transition-all duration-500 border border-white/10 group-hover:border-gold/50">
                        <social.icon size={18} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* NAV LINKS - Responsive Grid */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-audiowide text-[8px] lg:text-[9px] tracking-[0.4em] uppercase text-gray-600 mb-8">Solutions</h3>
                <ul className="flex flex-col gap-4 lg:gap-5 text-sm text-gray-400 font-body">
                  <Link href="/services" className="hover:text-gold transition-colors">Physical Trading</Link>
                  <Link href="/services" className="hover:text-gold transition-colors">Vault Storage</Link>
                  <Link href="/markets" className="hover:text-gold transition-colors">Market Data</Link>
                </ul>
              </div>
              <div>
                <h3 className="font-audiowide text-[8px] lg:text-[9px] tracking-[0.4em] uppercase text-gray-600 mb-8">Institutional</h3>
                <ul className="flex flex-col gap-4 lg:gap-5 text-sm text-gray-400 font-body">
                  <Link href="/about" className="hover:text-gold transition-colors">Compliance</Link>
                  <Link href="/contact" className="hover:text-gold transition-colors">Corporate Desk</Link>
                  <Link href="/markets" className="hover:text-gold transition-colors">Our Ethos</Link>
                </ul>
              </div>
            </div>

            {/* CONTACT SECTION - Responsive alignment */}
            <div className="lg:col-span-4 lg:pl-12 border-t lg:border-t-0 lg:border-l border-white/5 pt-12 lg:pt-0">
              <h3 className="font-audiowide text-[8px] lg:text-[9px] tracking-[0.4em] uppercase text-gray-600 mb-8">Verification Node</h3>
              <div className="space-y-8 flex flex-col items-center lg:items-start">
                <div className="flex flex-col lg:flex-row gap-5 items-center lg:items-start">
                  <div className="w-12 h-12 bg-gold/5 rounded-xl flex items-center justify-center border border-gold/10 group-hover:bg-gold group-hover:border-gold transition-all duration-500 shrink-0">
                    <MapPin size={20} className="text-gold group-hover:text-black transition-colors" />
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed font-body">
                    <strong className="text-white block mb-2 font-heading tracking-tight text-base uppercase">Zanora Fzc</strong>
                    SAIF Zone, Sharjah Airport <br /> 
                    International Free Zone Authority, UAE
                  </p>
                </div>
                <div className="flex gap-5 items-center">
                  <div className="w-12 h-12 bg-gold/5 rounded-xl flex items-center justify-center border border-gold/10 shrink-0">
                    <Phone size={20} className="text-gold" />
                  </div>
                  <p className="text-base text-gray-300 font-nasal">+971 55 637 0424</p>
                </div>
                <div className="flex gap-5 items-center">
                  <div className="w-12 h-12 bg-gold/5 rounded-xl flex items-center justify-center border border-gold/10 shrink-0">
                    <Mail size={20} className="text-gold" />
                  </div>
                  <p className="text-base text-gray-300 font-nasal">info@zanorafzc.ae</p>
                </div>
              </div>
            </div>
          </div>

          {/* LOWER BAR - Mobile optimized flex */}
          <div className="mt-16 lg:mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <p className="text-[8px] lg:text-[10px] text-gray-600 font-nasal tracking-[0.2em] uppercase text-center">
              © 2026 ZANORA FZC. SAIF ZONE AUTHORITY. NODE: ACTIVE
            </p>
            <div className="flex gap-8 lg:gap-10 text-[8px] lg:text-[10px] text-gray-600 font-nasal tracking-[0.3em] uppercase">
              <Link href="#" className="hover:text-gold transition-colors">Terms</Link>
              <Link href="#" className="hover:text-gold transition-colors">Privacy</Link>
            </div>
          </div>
        </motion.div>
      </Container>

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </footer>
  );
} 