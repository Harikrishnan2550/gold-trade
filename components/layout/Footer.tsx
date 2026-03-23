"use client";

import Container from "../ui/Container";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, ExternalLink } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-white  pb-10 overflow-hidden">
      <Container>
        {/* THE ZANORA FZC WATERMARK */}
        <div className="relative h-40 lg:h-64 mt-[-4rem] lg:mt-[-1rem] z-0 select-none pointer-events-none flex justify-center items-center ">
          <h1 className="text-[9vw] font-nasal text-black/[0.05] tracking-tighter leading-none uppercase">
            Zanora Fzc
          </h1>
        </div>

        {/* THE FLOATING DOCK CARD */}
        <div className="bg-white border border-black/5 rounded-[3.5rem] p-10 lg:p-16 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* BRANDING SECTION */}
            <div className="lg:col-span-4">
              <Link href="/" className="flex items-center gap-2 mb-8 group">
                <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center border border-gold/30 group-hover:border-gold transition-colors">
                  <span className="text-gold font-nasal text-sm">Z</span>
                </div>
                <h2 className="font-nasal text-2xl tracking-tighter text-[#1A1A1A]">
                  ZANORA <span className="text-gold-gradient italic font-normal">FZC</span>
                </h2>
              </Link>
              <p className="text-[#1A1A1A]/50 text-sm leading-relaxed max-w-xs mb-10 font-inter">
                Institutional grade bullion trading and wealth preservation 
                strategies powered by physical 24K gold assets.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <Link 
                    key={i} 
                    href={social.href} 
                    className="w-11 h-11 bg-[#F9F9F9] rounded-full flex items-center justify-center text-[#1A1A1A]/40 hover:bg-gold hover:text-white transition-all duration-500 border border-black/5"
                  >
                    <social.icon size={18} />
                  </Link>
                ))}
              </div>
            </div>

            {/* NAV LINKS SECTION */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-audiowide text-[9px] tracking-[0.4em] uppercase text-[#1A1A1A] mb-8">Solutions</h3>
                <ul className="flex flex-col gap-5 text-sm text-[#1A1A1A]/50 font-inter">
                  <Link href="/services" className="hover:text-gold transition-colors">Physical Trading</Link>
                  <Link href="/services" className="hover:text-gold transition-colors">Vault Storage</Link>
                  <Link href="/markets" className="hover:text-gold transition-colors">Market Data</Link>
                </ul>
              </div>
              <div>
                <h3 className="font-audiowide text-[9px] tracking-[0.4em] uppercase text-[#1A1A1A] mb-8">Institutional</h3>
                <ul className="flex flex-col gap-5 text-sm text-[#1A1A1A]/50 font-inter">
                  <Link href="/about" className="hover:text-gold transition-colors">Compliance</Link>
                  <Link href="/contact" className="hover:text-gold transition-colors">Corporate Desk</Link>
                  <Link href="/markets" className="hover:text-gold transition-colors">Our Ethos</Link>
                </ul>
              </div>
            </div>

            {/* CONTACT SECTION */}
            <div className="lg:col-span-4 lg:pl-12 border-t lg:border-t-0 lg:border-l border-black/5 pt-12 lg:pt-0">
              <h3 className="font-audiowide text-[9px] tracking-[0.4em] uppercase text-[#1A1A1A] mb-8">Headquarters</h3>
              <div className="space-y-8">
                <div className="flex gap-5 items-start">
                  <div className="w-10 h-10 bg-gold/5 rounded-xl flex items-center justify-center border border-gold/10">
                    <MapPin size={18} className="text-gold" />
                  </div>
                  <p className="text-sm text-[#1A1A1A]/60 leading-relaxed font-inter">
                    <strong className="text-[#1A1A1A] block mb-1 font-nasal tracking-tight">ZANORA FZC</strong>
                    SAIF Zone, Sharjah Airport <br /> 
                    International Free Zone Authority, UAE
                  </p>
                </div>
                <div className="flex gap-5 items-center">
                  <div className="w-10 h-10 bg-gold/5 rounded-xl flex items-center justify-center border border-gold/10">
                    <Phone size={18} className="text-gold" />
                  </div>
                  <p className="text-sm text-[#1A1A1A]/60 font-inter font-medium">+971 55 637 0424</p>
                </div>
                <div className="flex gap-5 items-center">
                  <div className="w-10 h-10 bg-gold/5 rounded-xl flex items-center justify-center border border-gold/10">
                    <Mail size={18} className="text-gold" />
                  </div>
                  <p className="text-sm text-[#1A1A1A]/60 font-inter font-medium">trade@zanora.ae</p>
                </div>
              </div>
            </div>
          </div>

          {/* LOWER BAR */}
          <div className="mt-20 pt-10 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-[10px] text-[#1A1A1A]/30 font-nasal tracking-[0.2em] uppercase">
                © 2026 ZANORA FZC. ALL RIGHTS RESERVED.
              </p>
              {/* DEVELOPER CREDIT */}
              
            </div>

            <div className="flex gap-10 text-[10px] text-[#1A1A1A]/40 font-nasal tracking-[0.3em] uppercase">
              <Link href="#" className="hover:text-gold transition-colors">Terms & Conditions</Link>
              <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}