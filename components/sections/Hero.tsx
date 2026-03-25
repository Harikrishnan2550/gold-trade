"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  // Animation Variants for the "Lens Blur Resolve" effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    filter: "blur(20px)",
  },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)",
    transition: { 
      duration: 1.2, 
      // The "as any" is the critical fix for the Vercel Build worker
      ease: [0.22, 1, 0.36, 1] as any
    } 
  },
};

  return (
    <section
      style={{
        background: "#060605",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.016) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.016) 1px, transparent 1px)
        `,
        backgroundSize: "28px 28px",
      }}
      className="relative min-h-screen w-full flex flex-col lg:flex-row items-center pt-40 overflow-hidden"
    >
      {/* ── CIRCUIT BACKGROUND SVG ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" fill="none">
          <path d="M1100 140 H1380 L1480 50" stroke="#D4AF37" strokeWidth="0.9" opacity="0.45" />
          <path d="M1380 140 V240 H1600" stroke="#D4AF37" strokeWidth="0.5" opacity="0.28" />
          <circle cx="1380" cy="140" r="4" fill="#D4AF37" opacity="0.55" />
          <circle cx="1480" cy="50" r="2.5" fill="#D4AF37" opacity="0.4" />
          <path d="M1480 80 V340" stroke="#D4AF37" strokeWidth="0.5" opacity="0.18" strokeDasharray="4 8" />
          <path d="M0 480 H180 L260 400 H420" stroke="#D4AF37" strokeWidth="0.9" opacity="0.42" />
          <path d="M180 480 V640 L110 720 H0" stroke="#D4AF37" strokeWidth="0.5" opacity="0.28" />
          <circle cx="180" cy="480" r="4" fill="#D4AF37" opacity="0.55" />
          <circle cx="260" cy="400" r="2.5" fill="#D4AF37" opacity="0.4" />
          <path d="M950 820 H1200 L1340 690 H1600" stroke="#D4AF37" strokeWidth="0.9" opacity="0.4" />
          <path d="M1200 820 V940" stroke="#D4AF37" strokeWidth="0.5" opacity="0.22" />
          <circle cx="1200" cy="820" r="4" fill="#D4AF37" opacity="0.5" />
          <path d="M0 480 H180 L260 400 H420" stroke="#F9E498" strokeWidth="2" opacity="0.7" strokeDasharray="10 160">
            <animate attributeName="stroke-dashoffset" from="0" to="-220" dur="3s" repeatCount="indefinite" />
          </path>
          <path d="M1100 140 H1380 L1480 50" stroke="#F9E498" strokeWidth="2" opacity="0.6" strokeDasharray="9 120">
            <animate attributeName="stroke-dashoffset" from="0" to="-180" dur="4s" repeatCount="indefinite" begin="1s" />
          </path>
          <path d="M950 820 H1200 L1340 690 H1600" stroke="#F9E498" strokeWidth="2" opacity="0.5" strokeDasharray="12 180">
            <animate attributeName="stroke-dashoffset" from="0" to="-260" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
          </path>
        </svg>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col px-6 lg:px-16 lg:py-0 lg:flex-1 lg:max-w-[62%]"
      >
        <motion.h1
          variants={itemVariants}
          style={{
            fontFamily: "var(--font-audiowide), sans-serif",
            fontSize: "clamp(48px, 11vw, 92px)",
            fontWeight: 900,
            lineHeight: 0.88,
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
          }}
          className="overflow-visible"
        >
          <span style={{ color: "#ffffff", display: "block" }}>QUANTUM</span>
          <span className="relative inline-flex items-center overflow-visible">
            <span
              style={{
                display: "block",
                fontStyle: "italic",
                background: "linear-gradient(90deg, #AA8A22 0%, #F9E498 45%, #AA8A22 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "goldShimmer 6s linear infinite",
              }}
              className="pr-4 py-2 -mr-4 block overflow-visible"
            >
              LIQUIDITY
            </span>
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-md"
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "clamp(13px, 1.8vw, 15px)",
            fontWeight: 300,
            color: "rgba(255,255,255,0.48)",
            lineHeight: 1.75,
          }}
        >
          Advanced digital trading infrastructure and real-time market analytics at your fingertips.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-10">
          <button
            className="flex items-center gap-2 group"
            style={{
              fontFamily: "var(--font-nasal), sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.13em",
              color: "#1a1500",
              background: "linear-gradient(135deg, #F9E498 0%, #D4AF37 55%, #AA8A22 100%)",
              border: "none",
              borderRadius: "6px",
              padding: "13px 26px",
              cursor: "pointer",
            }}
          >
            INITIALIZE PROTOCOL
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3, delay: 0.7 }}
        className="relative z-10 flex justify-center items-center flex-1 w-full py-12 lg:py-0"
      >
        <motion.div
          animate={{ y: [0, -22, 0] }}
          transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
          className="relative z-10 w-[340px] lg:w-[500px]"
        >
          <Image
            src="/gold-cube-v2.png"
            alt="Core"
            width={520}
            height={520}
            priority
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @keyframes goldShimmer {
          from { background-position: -200% center; }
          to   { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
}