"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";
import { Shield, Scale, Users, BadgeCheck, Zap, Globe } from "lucide-react";

const values = [
  {
    title: "Sovereign Trust",
    icon: Shield,
    desc: "Maintaining the absolute security and confidentiality required for high-stakes bullion trade."
  },
  {
    title: "Market Integrity",
    icon: Scale,
    desc: "Rigorous adherence to international AML/KYC standards and ethical market execution."
  },
  {
    title: "Global Logistics",
    icon: Globe,
    desc: "Leveraging our SAIF Zone proximity to ensure seamless air-bridge connectivity worldwide."
  },
  {
    title: "Absolute Clarity",
    icon: BadgeCheck,
    desc: "Institutional-grade transparency with real-time Sharjah spot rates and zero hidden slippage."
  },
];

export default function Values() {
  return (
    <section className="py-32 bg-[#FAFAFA] overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-8 h-[1px] bg-gold/30" />
            <span className="text-gold font-audiowide tracking-[0.5em] text-[10px] uppercase">
              The Zanora Standard
            </span>
            <div className="w-8 h-[1px] bg-gold/30" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-nasal text-4xl lg:text-5xl text-[#1A1A1A] tracking-tighter"
          >
            Foundations of <span className="text-gold-gradient italic">Excellence</span>
          </motion.h2>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, index) => {
            const Icon = v.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="group relative bg-black p-12 rounded-[3rem] border border-black/5 text-center hover:border-gold/30 transition-all duration-1000 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] overflow-hidden"
              >
                {/* 3D Background Index */}
                <span className="absolute top-8 right-10 text-5xl font-nasal text-black/[0.02] group-hover:text-gold/5 transition-all duration-700 pointer-events-none">
                  0{index + 1}
                </span>

                {/* Animated Icon Container */}
                <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center mx-auto mb-10 border border-black/5 group-hover:bg-gold group-hover:text-white transition-all duration-700 shadow-sm">
                  <Icon 
                    className="text-gold group-hover:text-white group-hover:scale-110 transition-all duration-700 ease-out" 
                    size={32} 
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="font-nasal text-lg mb-4 text-white tracking-widest uppercase group-hover:text-gold transition-colors">
                  {v.title}
                </h3>
                
                <p className="text-white text-[13px] font-outfit leading-relaxed px-2">
                  {v.desc}
                </p>

                {/* Aesthetic Shine Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                {/* Animated Bottom Accent */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold group-hover:w-1/2 transition-all duration-700 ease-in-out" />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}