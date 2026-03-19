"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";
import { PhoneCall, Users, BarChart, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "Contact Us",
    desc: "Reach our Dubai trading team via secure channels.",
    icon: PhoneCall,
  },
  {
    title: "Consultation",
    desc: "Discuss your volume and trading requirements with specialists.",
    icon: Users,
  },
  {
    title: "Market Execution",
    desc: "Real-time professional gold trading at live market rates.",
    icon: BarChart,
  },
  {
    title: "Secure Completion",
    desc: "Safe, transparent transaction with insured delivery.",
    icon: ShieldCheck,
  },
];

export default function Process() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Text - Luxury Watermark Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] select-none">
        <h2 className="text-[20vw] font-nasal whitespace-nowrap">WORKFLOW</h2>
      </div>

      <Container>
        {/* Heading */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-nasal tracking-[0.4em] text-[10px] uppercase mb-4 block"
          >
            Step-by-Step
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-nasal text-5xl lg:text-6xl text-[#1A1A1A] tracking-tighter"
          >
            Our Trading <br />
            <span className="text-gold-gradient italic">Process</span>
          </motion.h2>

          <p className="text-[#1A1A1A]/50 mt-8 max-w-xl mx-auto text-lg font-inter">
            A simple, institutional-grade workflow designed for 
            high-value gold transactions in Dubai.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="absolute top-14 left-0 right-0 h-[1px] bg-black/5 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  {/* Icon Container */}
                  <div className="relative mb-8">
                    {/* Step Number Badge */}
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-gold text-white text-[10px] font-nasal flex items-center justify-center rounded-full z-20 shadow-lg shadow-gold/20">
                      0{index + 1}
                    </span>
                    
                    <div className="w-28 h-28 bg-white border border-black/5 flex items-center justify-center mx-auto rounded-[2.5rem] shadow-sm group-hover:shadow-xl group-hover:border-gold/20 transition-all duration-500 relative z-10 overflow-hidden">
                      {/* Inner gold tint on hover */}
                      <div className="absolute inset-0 bg-gold opacity-0 group-hover:opacity-[0.03] transition-opacity" />
                      <Icon className="text-gold group-hover:scale-110 transition-transform duration-500" size={32} />
                    </div>
                  </div>

                  <h3 className="font-nasal text-xl mb-4 text-[#1A1A1A] tracking-tight group-hover:text-gold transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-[#1A1A1A]/50 text-sm leading-relaxed max-w-[200px] mx-auto font-inter">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}