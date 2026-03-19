"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";
import { MapPin, Globe, Zap } from "lucide-react";

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
            <span className="text-gold font-nasal tracking-[0.4em] text-[10px] uppercase mb-6 block font-medium">
              Regional Operations
            </span>
            
            <h2 className="font-nasal text-5xl lg:text-6xl text-[#1A1A1A] tracking-tighter leading-tight mb-8">
              Strategically Positioned <br />
              <span className="text-gold-gradient italic">In Sharjah, UAE</span>
            </h2>

            <p className="text-[#1A1A1A]/60 text-lg font-inter leading-relaxed mb-10">
              Operating from our headquarters in **Sharjah**, we leverage the UAE's 
              premier logistics and trading infrastructure. Our location provides 
              unrivaled connectivity between the historic Sharjah Gold Souq and 
              the global trading hubs of Dubai.
            </p>

            {/* Hub Benefits List */}
            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-gold/5 rounded-xl flex items-center justify-center border border-gold/10">
                  <Zap size={18} className="text-gold" />
                </div>
                <p className="text-[#1A1A1A] font-nasal text-sm tracking-wide">Rapid Physical Settlement</p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-gold/5 rounded-xl flex items-center justify-center border border-gold/10">
                  <Globe size={18} className="text-gold" />
                </div>
                <p className="text-[#1A1A1A] font-nasal text-sm tracking-wide">International Trade Corridor</p>
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
            <div className="bg-[#F9F9F9] border border-black/5 p-12 rounded-[3rem] relative overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-700">
               <MapPin className="text-gold mb-8 group-hover:bounce transition-transform" size={48} />
               <h3 className="font-nasal text-3xl text-[#1A1A1A] mb-4">The UAE Edge</h3>
               <p className="text-[#1A1A1A]/40 text-sm font-inter leading-relaxed italic">
                 "Sharjah serves as a critical gateway for the precious metals 
                 industry, combining tradition with institutional-grade efficiency."
               </p>
               
               {/* Aesthetic Location Tag */}
               <div className="mt-12 pt-8 border-t border-black/5 flex justify-between items-center">
                  <span className="text-[10px] font-nasal text-gold tracking-widest uppercase">SHJ — HQ</span>
                  <span className="text-[10px] font-nasal text-[#1A1A1A]/20 tracking-widest uppercase">GLOBAL REACH</span>
               </div>

               {/* Large Background Watermark inside the card */}
               <span className="absolute -bottom-4 -right-4 text-7xl font-nasal text-black/[0.02] uppercase pointer-events-none">
                 SHJ
               </span>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}