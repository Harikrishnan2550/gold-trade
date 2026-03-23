"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";

export default function Map() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] rounded-full -z-10" />
      
      <Container>
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative group"
        >
          {/* External Shadow/Glow Frame */}
          <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 via-transparent to-gold/20 rounded-[3.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative bg-[#FBFBFB] p-3 rounded-[3.5rem] border border-black/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)]">
            
            {/* Map Header Detail - Updated Content */}
            <div className="flex items-center justify-between px-8 py-4">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-gold/40" />
                <div className="w-2 h-2 rounded-full bg-black/5" />
                <div className="w-2 h-2 rounded-full bg-black/5" />
              </div>
              <span className="font-nasal text-[9px] uppercase tracking-[0.3em] text-[#1A1A1A]/30">
                SAIF Zone HQ • Logistics Corridor
              </span>
            </div>

            {/* The Map Container */}
            <div className="relative w-full h-[500px] overflow-hidden rounded-[2.5rem] border border-black/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.8206145326847!2d55.5085351!3d25.343818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f4f4f4f4f4f%3A0x0!2sSAIF%20Zone!5e0!3m2!1sen!2sae!4v1620000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zanora FZC SAIF Zone Location"
                className="grayscale-[0.8] contrast-[1.1] brightness-[1.05] hover:grayscale-0 transition-all duration-1000 ease-in-out"
              />
              
              {/* Overlay Gradient to soften edges */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(255,255,255,0.2)]" />
            </div>
          </div>

          {/* Location Badge - Updated Content */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white border border-black/5 px-8 py-4 rounded-2xl shadow-xl flex items-center gap-4">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
             <span className="font-nasal text-[10px] tracking-widest text-[#1A1A1A] uppercase">
                Visit our SAIF Zone Institutional Desk
             </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}