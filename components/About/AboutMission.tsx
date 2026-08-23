"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function AboutMission() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="grid md:grid-cols-2 gap-16 items-center mb-24"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h3 className="split-heading text-4xl md:text-5xl font-light tracking-tighter mb-3">
          Made in Nashik.{" "}
          <span className="heading-accent">Trusted across continents.</span>
        </h3>
        <div
          className="w-12 h-px mb-6"
          style={{ background: "var(--divider-mid)" }}
        />
        <p
          className="leading-relaxed mb-4"
          style={{ color: "var(--text-page-secondary)" }}
        >
          Since 2016, Logic Labs has delivered high-quality, fully customized
          software and hardware engineering solutions for startups, external clients, and students.
          We design the architecture, write original code, integrate embedded sensors, and provide
          comprehensive documentation and technical handover guidance. A decade of enabling innovation
          and building robust tech.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-6 pl-4 border-l-2 py-3.5 pr-4 rounded-r-xl bg-slate-500/5"
          style={{ borderColor: "var(--primary-color)" }}
        >
          <p
            className="italic font-medium text-[15px] md:text-base leading-relaxed"
            style={{ color: "var(--text-page-primary)" }}
          >
            "It takes a bit of courage to bet on new technology. We'd like you
            to bet on it with us."
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
        className="relative h-80 rounded-2xl overflow-hidden"
        style={{ border: "1px solid var(--border-default)" }}
      >
        <img
          src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=600&fit=crop"
          alt="Workspace"
          className="w-full h-full object-cover"
          style={{ opacity: 0.65 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(15,23,42,0.18)" }}
        />
      </motion.div>
    </motion.div>
  );
}
