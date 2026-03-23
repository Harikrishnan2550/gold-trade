"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";
import { ShieldCheck, BarChart4, Globe2, Briefcase } from "lucide-react";

const strengths = [
  { title: "Institutional Authority", icon: BarChart4 },
  { title: "SAIF Zone Clearing", icon: ShieldCheck },
  { title: "Transparent Spot Rates", icon: Globe2 },
  { title: "Professional Advisory", icon: Briefcase },
];

export default function Expertise() {
  return (
    <section className="py-32 bg-white relative">
      {/* Decorative background light trap */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-[#FAFAFA] -z-10" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* LEFT: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-gold font-nasal tracking-[0.4em] text-[10px] uppercase mb-6 block">
              The Zanora Mandate
            </span>
            
            <h2 className="font-nasal text-5xl lg:text-6xl text-[#1A1A1A] tracking-tighter leading-tight mb-8">
              Bullion Trade <br />
              <span className="text-gold-gradient italic">Expertise</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[#1A1A1A]/60 text-lg font-inter leading-relaxed">
                Our team provides a deep synthesis of bullion market dynamics, 
                leveraging Sharjah's strategic logistical infrastructure and 
                institutional-grade transaction security.
              </p>

              <p className="text-[#1A1A1A]/60 text-lg font-inter leading-relaxed border-l-2 border-gold/20 pl-6 italic">
                Focusing on institutional wealth preservation, we ensure every 
                physical asset movement is optimized for speed and compliant 
                with SAIF Zone regulatory standards.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Institutional Strength Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-white border border-black/5 p-10 lg:p-14 rounded-[3.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden group"
          >
            <h3 className="font-nasal text-2xl mb-10 text-[#1A1A1A] tracking-tight border-b border-black/5 pb-6">
              Our <span className="text-gold">Core Assets</span>
            </h3>

            <div className="space-y-8">
              {strengths.map((item, i) => (
                <div key={i} className="flex items-center gap-6 group/item">
                  <div className="w-12 h-12 bg-[#F9F9F9] rounded-xl flex items-center justify-center border border-black/5 group-hover/item:bg-gold group-hover/item:text-white transition-all duration-500">
                    <item.icon size={20} className="text-gold group-hover/item:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#1A1A1A] font-nasal text-sm tracking-widest uppercase mb-1">
                      {item.title}
                    </p>
                    <div className="w-full h-[2px] bg-black/5 overflow-hidden">
                      <motion.div 
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "0%" }}
                        transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                        className="w-full h-full bg-gold/30"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Background Watermark for Depth */}
            <span className="absolute -bottom-6 -right-6 text-8xl font-nasal text-black/[0.02] uppercase select-none pointer-events-none">
              ZNR
            </span>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}