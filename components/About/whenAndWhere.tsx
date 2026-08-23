"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  {
    need: "Reliability?",
    word: "RELIABLE",
    highlight: "On-time delivery",
    rest: ", your deadline, our priority.",
    letter: "R",
  },
  {
    need: "Tailored to need?",
    word: "CUSTOM",
    highlight: "Designed for you",
    rest: " — custom features, hardware sensors, custom layout.",
    letter: "C",
  },
  {
    need: "Originality?",
    word: "UNIQUE",
    highlight: "100% Original",
    rest: " — custom-developed code, zero copy.",
    letter: "U",
  },
  {
    need: "Documentation?",
    word: "COMPLETE",
    highlight: "Full Reports",
    rest: " — SRS, UML diagrams, user guides, modules.",
    letter: "D",
  },
  {
    need: "Support?",
    word: "SUPPORTED",
    highlight: "Handoff & Guidance",
    rest: " — technical handover, deployment assistance, and viva guidance.",
    letter: "S",
  },
  {
    need: "Pricing?",
    word: "AFFORDABLE",
    highlight: "Competitive rates",
    rest: " — high-quality results at student & startup friendly prices.",
    letter: "A",
  },
];

function Card({
  card,
  index,
  inView,
}: {
  card: (typeof cards)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.45, delay: 0.1 + index * 0.07 }}
      className="relative overflow-hidden rounded-2xl px-7 py-4 flex flex-col gap-3"
      style={{
        background: "#ffffff",
        border: "1px solid rgba(57,125,187,0.12)",
        boxShadow: "0 2px 12px rgba(15,23,42,0.06)",
      }}
    >
      {/* Faded letter watermark */}
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
        {card.letter}
      </span>

      {/* NEED label */}
      <p
        className="text-xs font-mono tracking-[0.22em] uppercase"
        style={{ color: "var(--text-page-muted)" }}
      >
        NEED{" "}
        <span
          className="font-semibold"
          style={{ color: "var(--text-page-secondary)" }}
        >
          {card.need.toUpperCase()}
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
        {card.word}
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
          {card.highlight}
        </span>
        {card.rest}
      </p>
    </motion.div>
  );
}

export function WhenAndWhere() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="whenAndWhere"
      className="site-section w-full px-6 md:px-8 md:pt-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-6"
        >
          <span
            className="w-6 h-px"
            style={{ background: "var(--primary-color)" }}
          />
          <span
            className="text-xs font-mono tracking-[0.28em] uppercase"
            style={{ color: "var(--primary-color)" }}
          >
            04
          </span>
          <span
            className="text-xs font-mono tracking-[0.2em] uppercase"
            style={{ color: "var(--text-page-muted)" }}
          >
            / WHEN &amp; WHERE
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="split-heading text-4xl md:text-6xl font-light tracking-tighter mb-4"
        >
          Whenever you need it,{" "}
          <span className="heading-accent">we are it.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="text-base mb-12 max-w-xl"
          style={{ color: "var(--text-page-muted)" }}
        >
          Whatever brings you here — one word says when to come to Logic Labs.
          And below it, exactly where to find us.
        </motion.p>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <Card key={card.word} card={card} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
