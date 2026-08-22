"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function AboutHeader() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="text-center mb-20"
    >
      <h2 className="split-heading text-5xl md:text-7xl font-light tracking-tighter mb-6">
        About <span className="heading-accent">Us</span>
      </h2>
      <p
        className="text-xl max-w-2xl mx-auto leading-relaxed"
        style={{ color: "var(--text-page-secondary)" }}
      >
        Crafting precision materials that inspire, innovate, and elevate 3D
        printing to new heights
      </p>
    </motion.div>
  );
}
