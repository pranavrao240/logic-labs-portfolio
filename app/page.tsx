"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import {
  motion,
  useMotionValue,
  useTransform,
  useMotionValueEvent,
  Variants,
} from "framer-motion";
import FilamentCanvas from "@/components/FilamentCanvas";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/footer";
import { ArrowUpRight } from "lucide-react";

const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const ProjectsSection = dynamic(() => import("@/components/Projects/page"));
const AboutSection = dynamic(() => import("@/components/About/page"));
const LegacySection = dynamic(() => import("@/components/legacySection"));
const Testimonials = dynamic(() =>
  import("@/components/Testimonials").then((mod) => mod.Testimonials),
);
const Contact = dynamic(() =>
  import("@/components/Contact").then((mod) => mod.Contact),
);

interface TypewriterProps {
  text: string;
  isVisible: boolean;
  delayMs?: number;
  cursorColor?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  isVisible,
  delayMs = 500,
  cursorColor = "#f57c20",
}) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    if (isVisible) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplayText("");
      timeoutId = setTimeout(() => {
        let currentIndex = 0;
        intervalId = setInterval(() => {
          if (currentIndex < text.length) {
            setDisplayText((prev) => prev + text.charAt(currentIndex));
            currentIndex++;
          } else {
            clearInterval(intervalId);
          }
        }, 55);
      }, delayMs);
    } else {
      setDisplayText("");
    }

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [isVisible, text, delayMs]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="inline-flex items-center">
      <span>{displayText}</span>
      <span
        style={{
          display: "inline-block",
          width: "4px",
          height: "12px",
          backgroundColor: cursorColor,
          marginLeft: "3px",
          opacity: showCursor ? 1 : 0,
          transition: "opacity 0.1s ease",
        }}
      />
    </span>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const heroProgress = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      const spacerHeight = window.innerHeight * 9;
      const progress = Math.min(Math.max(window.scrollY / spacerHeight, 0), 1);
      heroProgress.set(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroProgress]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  const section1Opacity = useTransform(
    heroProgress,
    [0, 0.1, 0.25, 0.33],
    [1, 1, 0, 0],
  );
  const section1Y = useTransform(heroProgress, [0, 0.25], [0, -50]);

  const section2Opacity = useTransform(
    heroProgress,
    [0, 0.33, 0.4, 0.62, 0.7],
    [0, 0, 1, 1, 0],
  );
  const section2X = useTransform(heroProgress, [0.33, 0.4], [-100, 0]);

  const [isSection2Visible, setIsSection2Visible] = useState(false);

  useMotionValueEvent(section2Opacity, "change", (latest) => {
    setIsSection2Visible(latest > 0.1);
  });

  const section3Opacity = useTransform(
    heroProgress,
    [0, 0.58, 0.65, 0.88, 0.97],
    [0, 0, 1, 1, 0],
  );
  const section3Scale = useTransform(heroProgress, [0.66, 0.75], [0.8, 1]);

  const [isSection3Visible, setIsSection3Visible] = useState(false);

  useMotionValueEvent(section3Opacity, "change", (latest) => {
    setIsSection3Visible(latest > 0.1);
  });

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  if (isLoading) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          background: "#050505",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
        }}
      >
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: 300,
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.88)",
            animation: "pulse 2s ease-in-out infinite",
          }}
        >
          REVER INDUSTRIES
        </div>
      </div>
    );
  }

  return (
    <div className="relative" style={{ background: "var(--background)" }}>
      <Navbar />
      <FilamentCanvas scrollYProgress={heroProgress} />

      {/* Mobile canvas dark overlay — improves text contrast on small screens */}
      <div className="fixed inset-0 bg-black/25 md:bg-transparent z-10 pointer-events-none" />

      <div className="text-overlay">
        {/* ── Section 1: Two brands. One foundation. ── */}
        {/* UNCHANGED — no modifications to this section */}
        <motion.div
          style={{
            opacity: section1Opacity,
            y: section1Y,
            pointerEvents: "none",
          }}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20 w-full max-w-4xl px-6"
        >
          <div
            className="relative inline-block rounded-2xl px-12 py-10
              [background:linear-gradient(to_bottom,rgba(55,65,81,0.55),rgba(31,41,55,0.55))]
              shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),_0_4px_8px_#00000052]"
          >
            <motion.h2
              className="text-3xl md:text-5xl font-light tracking-tighter mb-6"
              style={{ color: "rgba(255,255,255,0.96)" }}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Built in India.
              <br />
              <span style={{ color: "rgba(255,255,255,0.96)" }}>
                Proven for a decade.
              </span>
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl tracking-tight font-light leading-relaxed max-w-2xl mx-auto"
              style={{ color: "rgba(255,255,255,0.82)" }}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              Two brands, one roof — Rever Industries, since 2016. FibReel
              spools the filament. Imprime3D makes the part: printed, moulded,
              or scanned on demand. Tell us what you're making!
            </motion.p>
          </div>
        </motion.div>

        {/* ── Section 2: FibReel CTA ── */}
        <motion.div
          style={{
            opacity: section2Opacity,
            x: section2X,
            pointerEvents: "none",
          }}
          className="
            fixed z-20 text-left
            top-1/2 -translate-y-1/2
            left-1/2 -translate-x-1/2 md:translate-x-0
            md:left-[5vw] md:left-10
            w-[88vw] md:w-auto md:max-w-md
          "
        >
          <div
            className="
              relative rounded-2xl
              border border-white/20 md:border-[rgba(147,210,255,0.35)]
              backdrop-blur-xl
              bg-[hsl(215_28%_88%/0.7)] md:bg-[var(--background-card)]
              shadow-[0_6px_32px_rgba(57,125,187,0.12)]
              p-6 md:p-8
            "
          >
            {/* Mobile: dark text. Desktop: keep dark navy text (bg is light-ish on both) */}
            {/* <motion.p
              className="text-[11px] font-mono tracking-[0.25em] uppercase mb-3"
              style={{ color: "rgba(30,80,140,0.85)" }}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              FibReel
            </motion.p> */}
            <motion.div
              className="mb-4"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <img
                src="https://www.fibreel.com/cdn/shop/files/fibreel-logo_page-0001_1.png?height=90&v=1768200228"
                alt="FibReel"
                style={{ height: "36px", width: "auto", objectFit: "contain" }}
              />
            </motion.div>
            <motion.h1
              className="text-xs font-mono tracking-[0.25em] uppercase mb-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f57c20]/10 border border-[#f57c20]/20 text-[#d86008] font-medium"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.05 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#f57c20] animate-pulse" />
              <Typewriter
                text=" I'm looking for filament"
                isVisible={isSection2Visible}
                delayMs={2000}
              />
            </motion.h1>
            <motion.h2
              className="text-3xl md:text-4xl font-light tracking-tighter mb-3"
              style={{ color: "rgba(10,30,60,0.96)" }}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              Premium filament,<br></br>
              made in India
            </motion.h2>
            <motion.p
              className="text-sm md:text-base tracking-tight font-light leading-relaxed mb-6"
              style={{ color: "rgba(20,50,90,0.78)" }}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              From everyday PLA to engineering-grade Carbon FibReel, spools
              built for clean, reliable prints.
            </motion.p>
            <motion.a
              href="https://www.fibreel.com/"
              className="cta-button cta-fibreel text-sm rounded-xl pointer-events-auto relative z-30"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.35 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="btn-label">Shop FibReel</span>
              <span className="btn-icon">
                <ArrowUpRight size={22} />
              </span>
            </motion.a>
            <p
              className="text-[11px] font-bold tracking-widest uppercase font-mono mt-2"
              style={{ color: "rgba(30,80,140,0.45)" }}
            >
              Building India&apos;s 3D future, layer by layer.
            </p>
          </div>
        </motion.div>

        {/* ── Section 3: Imprime3D CTA ── */}
        <motion.div
          style={{
            opacity: section3Opacity,
            scale: section3Scale,
            pointerEvents: "none",
          }}
          className="
            fixed z-20 text-left
            top-1/2 -translate-y-1/2 md:top-auto md:translate-y-0
            left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto
            md:bottom-[8vh] md:right-[5vw] md:right-16
            w-[88vw] md:w-auto md:max-w-md
          "
        >
          <div
            className="
              relative rounded-2xl
              border border-white/20 md:border-[rgba(147,210,255,0.35)]
              backdrop-blur-xl
             bg-[hsl(215_28%_88%/0.7)] md:bg-[var(--background-card)]
              shadow-[0_6px_32px_rgba(57,125,187,0.12)]
              p-6 md:p-8
            "
          >
            <motion.div
              className="mb-4"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <img
                src="/imprime3d_logo.png"
                alt="Imprime3D"
                style={{ height: "46px", width: "auto", objectFit: "contain" }}
              />
            </motion.div>
            <motion.h1
              className="text-xs font-mono tracking-[0.25em] uppercase mb-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a73e8]/10 border border-[#1a73e8]/20 text-[#1a73e8] font-medium"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.05 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] animate-pulse" />
              <Typewriter
                text=" I need something printed or scanned"
                isVisible={isSection3Visible}
                delayMs={2000}
                cursorColor="#1a73e8"
              />
            </motion.h1>
            <motion.h2
              className="text-3xl md:text-4xl font-light tracking-tighter mb-3"
              style={{ color: "rgba(10,30,60,0.96)" }}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              3D printing, scanning & Injection Molding done for you
            </motion.h2>
            <motion.p
              className="text-sm md:text-base tracking-tight font-light leading-relaxed mb-6"
              style={{ color: "rgba(20,50,90,0.78)" }}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              From a single prototype to a production run, plus 3D scanning.
              Send the idea, we deliver the part
            </motion.p>
            <motion.div
              className="flex flex-col items-start gap-2"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.35 }}
            >
              <motion.a
                href="https://imprime3d.in/"
                className="cta-button cta-imprime text-sm rounded-xl pointer-events-auto relative z-30"
                whileTap={{ scale: 0.95 }}
              >
                <span className="btn-label">Imprime3D</span>
                <span className="btn-icon">
                  <ArrowUpRight size={22} />
                </span>
              </motion.a>
              <p
                className="text-[11px] font-bold tracking-widest uppercase font-mono"
                style={{ color: "rgba(30,80,140,0.45)" }}
              >
                Building India&apos;s 3D future, layer by layer.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll spacer */}
      <div
        className="h-[900vh] relative"
        style={{ zIndex: 10, background: "transparent" }}
      />

      {/* <ServicesSection /> */}
      {/* <ProjectsSection /> */}
      <AboutSection />
      <LegacySection />
      <Testimonials />
      <Contact />

      <Footer />
    </div>
  );
}
