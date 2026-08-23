"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function LocationCard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.45, delay: 0.17 }}
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
        N
      </span>

      {/* Eyebrow */}
      <p
        className="text-xs font-mono tracking-[0.22em] uppercase"
        style={{ color: "var(--text-page-muted)" }}
      >
        WHERE WE ARE
      </p>

      {/* Location name */}
      <p
        className="font-black tracking-tight leading-none relative z-10"
        style={{
          fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
          color: "var(--text-page-primary)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        Ambad MIDC, Nashik
        <span style={{ color: "var(--primary-color)" }}>.</span>
      </p>

      {/* Body */}
      <p
        className="text-sm leading-relaxed relative z-10"
        style={{ color: "var(--text-page-muted)" }}
      >
        Project design, development, documentation, hardware testing, and student guidance
        — all from our facility in Nashik,{" "}
        <span
          className="font-semibold"
          style={{ color: "var(--primary-color)" }}
        >
          three hours from Mumbai.
        </span>
      </p>
    </motion.div>
  );
}
