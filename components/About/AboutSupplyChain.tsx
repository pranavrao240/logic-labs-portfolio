"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FlaskConical, CircleDot, Printer, Box } from "lucide-react";

const chain = [
  {
    icon: <FlaskConical size={24} strokeWidth={1.5} />,
    title: "Founded",
    sub: "2016",
    highlight: false,
  },
  {
    icon: <CircleDot size={24} strokeWidth={1.5} />,
    title: "Software",
    sub: "Web & mobile code",
    highlight: true,
  },
  {
    icon: <Printer size={24} strokeWidth={1.5} />,
    title: "Hardware",
    sub: "Embedded systems",
    highlight: true,
  },
  {
    icon: <Box size={24} strokeWidth={1.5} />,
    title: "Base",
    sub: "Nashik, India",
    highlight: false,
  },
];

export function AboutSupplyChain() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.55 }}
      className="rounded-2xl p-6 md:p-8 flex flex-col gap-6 mb-12"
      style={{
        background: "#ffffff",
        border: "1px solid rgba(57,125,187,0.12)",
        boxShadow: "0 4px 24px rgba(15,23,42,0.07)",
      }}
    >
      {/* ── Timeline bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="flex items-center gap-3"
      >
        <span
          className="text-sm font-mono tracking-widest flex-shrink-0"
          style={{ color: "var(--text-page-muted)" }}
        >
          2016
        </span>

        <div
          className="relative flex-1 h-2.5 rounded-full overflow-hidden"
          style={{ background: "rgba(57,125,187,0.12)" }}
        >
          <motion.div
            initial={{ width: "0%" }}
            animate={inView ? { width: "100%" } : { width: "0%" }}
            transition={{
              duration: 1.1,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="absolute inset-y-0 left-0 rounded-full"
            style={{ background: "var(--primary-color)" }}
          />
        </div>

        <span
          className="text-sm font-mono tracking-widest flex-shrink-0"
          style={{ color: "var(--text-page-muted)" }}
        >
          2026
        </span>

        <motion.span
          initial={{ opacity: 0, x: 8 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 8 }}
          transition={{ duration: 0.4, delay: 1.1 }}
          className="hidden sm:inline-flex flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-mono tracking-wide"
          style={{
            background: "rgba(57,125,187,0.08)",
            border: "1px solid rgba(57,125,187,0.28)",
            color: "var(--primary-color)",
          }}
        >
          A decade of making
        </motion.span>
      </motion.div>

      {/* ── Supply chain boxes ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {chain.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.42, delay: 0.18 + i * 0.09 }}
            className="flex flex-col items-center text-center gap-3 px-4 py-6 rounded-xl"
            style={{
              background: item.highlight ? "#fff" : "rgba(247,250,255,0.7)",
              border: item.highlight
                ? "1.5px solid var(--primary-color)"
                : "1px solid rgba(15,23,42,0.09)",
              boxShadow: item.highlight
                ? "0 0 0 3px rgba(57,125,187,0.08), 0 4px 16px rgba(57,125,187,0.10)"
                : "0 1px 4px rgba(15,23,42,0.05)",
            }}
          >
            <div
              style={{
                color: item.highlight
                  ? "var(--primary-color)"
                  : "rgba(15,23,42,0.35)",
              }}
            >
              {item.icon}
            </div>
            <div>
              <p
                className="text-base font-semibold tracking-tight"
                style={{
                  color: item.highlight
                    ? "var(--text-page-primary)"
                    : "var(--text-page-secondary)",
                }}
              >
                {item.title}
              </p>
              <p
                className="text-sm mt-1 leading-snug"
                style={{ color: "var(--text-page-muted)" }}
              >
                {item.sub}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="text-center text-sm font-mono tracking-wide"
        style={{ color: "var(--text-page-muted)" }}
      >
        Every step under one roof — no resellers, no middlemen
      </motion.p>
    </motion.div>
  );
}
