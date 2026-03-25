"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowUpRight, Zap } from "lucide-react";
import Container from "../ui/Container";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true); 
    } else {
      setHidden(false); 
    }
    setScrolled(latest > 20);
  });

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Markets", href: "/markets" },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] pt-4 lg:pt-8"
    >
      <Container>
        <div 
          className={`
            relative flex items-center justify-between px-6 lg:px-10 py-3 lg:py-4 rounded-full border transition-all duration-700 ease-in-out
            ${scrolled 
              ? "bg-[#050505]/80 backdrop-blur-2xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] scale-[0.98]" 
              : "bg-[#050505]/20 backdrop-blur-md border-white/5 shadow-sm"}
          `}
        >
          {/* 1. LOGO: Zanora Terminal */}
          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <motion.div 
              whileHover={{ rotate: 180 }}
              className="w-10 h-10 bg-[#1A1A1A] rounded-2xl flex items-center justify-center border border-gold/40 shadow-lg"
            >
              <Zap size={18} className="text-gold" />
            </motion.div>
            <div className="font-audiowide text-xl lg:text-2xl tracking-tighter text-white uppercase overflow-visible">
              Zanora <span className="relative inline-flex items-center overflow-visible">
                <span className="text-gold-gradient italic pr-2 -mr-2 block">FZC</span>
              </span>
            </div>
          </Link>

          {/* 2. CENTERED DOCK */}
          <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/5 backdrop-blur-md">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-6 py-2 text-[10px] font-audiowide uppercase tracking-[0.2em] transition-all duration-300 rounded-full
                  ${pathname === link.href ? "text-white" : "text-white/40 hover:text-white"}
                `}
              >
                <span className="relative z-10">{link.name}</span>
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav_pill"
                    className="absolute inset-0 bg-gold/10 border border-gold/20 rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* 3. PRIMARY ACTION */}
          <div className="hidden lg:block">
            <Link 
              href="/contact" 
              className="group/btn flex items-center gap-3 bg-gold text-black pl-8 pr-3 py-3 rounded-full font-audiowide text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-all duration-500 shadow-xl shadow-gold/10"
            >
              Contact Us
              <div className="w-8 h-8 bg-black/10 rounded-full flex items-center justify-center group-hover/btn:bg-black group-hover/btn:text-white transition-colors">
                <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            className="lg:hidden p-3 bg-white/5 rounded-full text-white" 
            onClick={() => setIsOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </Container>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[120] bg-[#050505] lg:hidden flex flex-col p-10 overflow-hidden"
          >
            {/* VARIETY CIRCUIT FOR MOBILE MENU BG */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
              <svg width="100%" height="100%" viewBox="0 0 400 800" fill="none">
                <path d="M 50 0 V 800" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="10 10" />
                <path d="M 350 0 V 800" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="10 10" />
                <motion.circle r="2" fill="#F9E498">
                  <animateMotion dur="4s" repeatCount="indefinite" path="M 50 0 V 800" />
                </motion.circle>
              </svg>
            </div>

            <div className="relative z-10 flex justify-between items-center mb-20">
              <div className="font-audiowide text-2xl text-white uppercase">Zanora <span className="text-gold italic">Terminal</span></div>
              <button onClick={() => setIsOpen(false)} className="p-4 bg-white/5 rounded-full text-white"><X size={24} /></button>
            </div>
            
            <div className="relative z-10 flex flex-col gap-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className={`text-5xl font-audiowide tracking-tighter uppercase ${pathname === link.href ? "text-gold" : "text-white"}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 pt-12 border-t border-white/10"
              >
                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="bg-gold text-black p-8 font-audiowide rounded-[2.5rem] flex items-center justify-between text-xl uppercase tracking-tighter"
                >
                  Connect to Node
                  <ArrowUpRight size={32} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}