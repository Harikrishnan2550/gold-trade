"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";
import { MapPin, Globe, PlaneTakeoff, ShieldCheck } from "lucide-react";

export default function DubaiMarket() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Subtle Map Texture or Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT: The Strategic Logic */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-gold font-audiowide tracking-[0.4em] text-[10px] uppercase mb-6 block font-medium">
              Jurisdictional Advantage
            </span>
            
            <h2 className="font-nasal text-5xl lg:text-6xl text-[#1A1A1A] tracking-tighter leading-[1.1] mb-8">
              Strategically Anchored <br />
              <span className="text-gold-gradient italic uppercase">In SAIF Zone, Sharjah</span>
            </h2>

            <p className="text-[#1A1A1A]/60 text-lg font-outfit leading-relaxed mb-10">
              Operating under the **Sharjah Airport International Free Zone Authority**, Zanora FZC leverages 
              unmatched proximity to Sharjah International Airport. This air-bridge connectivity allows 
              for the rapid, secure, and tax-efficient transit of physical bullion across 
              global markets.
            </p>

            {/* Hub Benefits List */}
            <div className="space-y-6">
              <div className="flex gap-4 items-center group">
                <div className="w-12 h-12 bg-gold/5 rounded-2xl flex items-center justify-center border border-gold/10 group-hover:bg-gold group-hover:text-white transition-all duration-500">
                  <PlaneTakeoff size={20} className="text-gold group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[#1A1A1A] font-nasal text-sm tracking-widest uppercase">Direct Air-Side Logistics</p>
                  <p className="text-[#1A1A1A]/40 text-[10px] font-outfit uppercase tracking-tighter mt-0.5">Instant gateway to international transit</p>
                </div>
              </div>
              <div className="flex gap-4 items-center group">
                <div className="w-12 h-12 bg-gold/5 rounded-2xl flex items-center justify-center border border-gold/10 group-hover:bg-gold group-hover:text-white transition-all duration-500">
                  <ShieldCheck size={20} className="text-gold group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[#1A1A1A] font-nasal text-sm tracking-widest uppercase">Regulated Secure Trade</p>
                  <p className="text-[#1A1A1A]/40 text-[10px] font-outfit uppercase tracking-tighter mt-0.5">Licensed by Sharjah Free Zone Authority</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: The Visual "Hub" Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Ambient Shadow Overlay */}
            <div className="absolute -inset-4 bg-gold/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="bg-[#0A0A0A] border border-white/5 p-12 lg:p-16 rounded-[3.5rem] relative overflow-hidden group shadow-2xl transition-all duration-700">
               <div className="flex justify-between items-start mb-12">
                 <MapPin className="text-gold group-hover:animate-bounce transition-transform" size={48} strokeWidth={1.5} />
                 <Globe size={24} className="text-white/10 group-hover:text-gold/40 transition-colors duration-700" />
               </div>

               <h3 className="font-nasal text-3xl text-white mb-6 uppercase tracking-tighter">The <span className="text-gold-gradient italic">SAIF Edge</span></h3>
               
               <p className="text-white/40 text-sm font-outfit leading-relaxed mb-8">
                 "Our presence within the SAIF Zone isn't just a location; it's a commitment to speed. 
                 By combining Sharjah's logistics with our institutional execution, we provide 
                 clients with the ultimate friction-free bullion gateway."
               </p>
               
               {/* Aesthetic Location Tag */}
               <div className="mt-12 pt-10 border-t border-white/5 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-audiowide text-gold tracking-[0.3em] uppercase mb-1">HQ Location</span>
                    <span className="text-[9px] font-nasal text-white/30 tracking-widest uppercase">SHJ — TERMINAL 01</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-audiowide text-white/50 tracking-[0.3em] uppercase mb-1">Jurisdiction</span>
                    <span className="text-[9px] font-nasal text-gold/60 tracking-widest uppercase">SAIF AUTHORITY</span>
                  </div>
               </div>

               {/* Large Background Watermark */}
               <span className="absolute -bottom-6 -right-8 text-9xl font-nasal text-white/[0.02] uppercase pointer-events-none select-none italic">
                 SAIF
               </span>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}