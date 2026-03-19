"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";
import { Shield, Scale, Users, BadgeCheck } from "lucide-react";

const values = [
  {
    title: "Trust",
    icon: Shield,
    desc: "The foundation of every gold trade."
  },
  {
    title: "Integrity",
    icon: Scale,
    desc: "Honesty in every market execution."
  },
  {
    title: "Client Focus",
    icon: Users,
    desc: "Your wealth growth is our priority."
  },
  {
    title: "Transparency",
    icon: BadgeCheck,
    desc: "Clear pricing with no hidden fees."
  },
];

export default function Values() {
  return (
    <section className="py-32 bg-[#FAFAFA]">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-nasal tracking-[0.5em] text-[10px] uppercase mb-4 block"
          >
            Our Principles
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-nasal text-4xl lg:text-5xl text-[#1A1A1A] tracking-tighter"
          >
            Company <span className="text-gold-gradient italic">Values</span>
          </motion.h2>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, index) => {
            const Icon = v.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="group relative bg-white p-10 rounded-[2.5rem] border border-black/5 text-center hover:border-gold/30 transition-all duration-700 shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden"
              >
                {/* Subtle Background Number */}
                <span className="absolute top-6 right-8 text-4xl font-nasal text-black/[0.02] group-hover:text-gold/5 transition-colors">
                  0{index + 1}
                </span>

                <div className="w-16 h-16 bg-[#FBFBFB] rounded-2xl flex items-center justify-center mx-auto mb-8 border border-black/5 group-hover:bg-gold group-hover:text-white transition-all duration-500">
                  <Icon className="text-gold group-hover:text-white group-hover:rotate-[360deg] transition-all duration-1000 ease-in-out" size={28} />
                </div>

                <h3 className="font-nasal text-xl mb-3 text-[#1A1A1A] tracking-tight group-hover:text-gold transition-colors">
                  {v.title}
                </h3>
                
                <p className="text-[#1A1A1A]/40 text-xs font-inter leading-relaxed px-4">
                  {v.desc}
                </p>

                {/* Corner Accent */}
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-gold opacity-0 group-hover:opacity-10 rounded-tl-[2rem] transition-opacity duration-700" />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}