"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function PremiumCard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.45, delay: 0.1 }}
      className="relative overflow-hidden rounded-2xl px-6 md:px-8 py-8 flex flex-col gap-3"
      style={{
        background: "#ffffff",
        border: "1px solid rgba(57,125,187,0.12)",
        boxShadow: "0 2px 12px rgba(15,23,42,0.06)",
      }}
    >
      {/* Faded watermark letter */}
      <span
        aria-hidden
        className="absolute bottom-2 right-4 font-black select-none leading-none pointer-events-none"
        style={{
          fontSize: "clamp(5rem, 12vw, 8rem)",
          color: "var(--primary-color)",
          opacity: 0.055,
          fontFamily: "system-ui, sans-serif",
          letterSpacing: "-0.04em",
        }}
      >
        P
      </span>

      {/* Eyebrow */}
      <p
        className="text-xs font-mono tracking-[0.22em] uppercase"
        style={{ color: "var(--text-page-muted)" }}
      >
        NEED{" "}
        <span
          className="font-semibold"
          style={{ color: "var(--text-page-secondary)" }}
        >
          THE BEST?
        </span>
      </p>

      {/* Big word */}
      <p
        className="font-black tracking-tight leading-none relative z-10"
        style={{
          fontSize: "clamp(2rem, 5vw, 2.75rem)",
          color: "var(--text-page-primary)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        PREMIUM
        <span style={{ color: "var(--primary-color)" }}>.</span>
      </p>

      {/* Body */}
      <p
        className="text-sm leading-relaxed relative z-10"
        style={{ color: "var(--text-page-muted)" }}
      >
        <span
          className="font-semibold"
          style={{ color: "var(--primary-color)" }}
        >
          India&apos;s most loved project developer support
        </span>{" "}
        — 4.8★ rated, customized code, clear explanation, built like it matters.
      </p>
    </motion.div>
  );
}
