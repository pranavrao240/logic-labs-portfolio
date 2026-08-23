"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const milestones = [
  {
    year: "2016",
    text: "Founded Logic Labs to provide custom academic & engineering projects.",
    highlight: true,
  },
  {
    year: "2017",
    text: "Expanded into Web Development project solutions.",
    highlight: false,
  },
  {
    year: "2018",
    text: "Introduced Embedded Systems & Robotics project support.",
    highlight: false,
  },
  {
    year: "2019",
    text: "Began Machine Learning and AI project guidance.",
    highlight: false,
  },
  {
    year: "2020",
    text: "Standardized project documentation support (SRS, UML).",
    highlight: true,
  },
  {
    year: "2021",
    text: "Reached milestone of 500+ projects successfully delivered.",
    highlight: true,
  },
  {
    year: "2022",
    text: "Added IoT & Cloud-integrated hardware systems.",
    highlight: false,
  },
  {
    year: "2023",
    text: "Expanded technologies support (React, Flutter, Python, ESP32).",
    highlight: true,
  },
  {
    year: "2024",
    text: "Introduced advanced AI, Computer Vision, and Deep Learning tracks.",
    highlight: false,
  },
  { year: "2025", text: "Achieved 98% student satisfaction & support rate.", highlight: false },
  {
    year: "2026",
    text: "A decade of enabling student innovation and building careers.",
    highlight: true,
  },
];

const patternStats = [
  { label: "Years active", value: "10+" },
  { label: "Milestones", value: "11" },
  { label: "Years skipped", value: "0" },
];

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });

  return (
    <section ref={ref} className="site-section w-full  md:px-8 py-20 md:py-28">
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
            OUR LEGACY
          </span>
          <span
            className="text-xs font-mono tracking-[0.2em] uppercase"
            style={{ color: "var(--text-page-muted)" }}
          >
            · 2016 – 2026
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="split-heading text-4xl md:text-6xl font-light tracking-tighter mb-12"
        >
          Ten years of enabling,{" "}
          <span className="heading-accent">student innovation.</span>
        </motion.h2>

        {/* Timeline card — sky blue bg */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="relative rounded-2xl px-8 py-10 mb-6"
          style={{
            background: "var(--background-card)",
            border: "1px solid rgba(57,125,187,0.12)",
            boxShadow: "0 2px 12px rgba(15,23,42,0.06)",
          }}
        >
          {/* Vertical spine — positioned to align with dot centers */}
          <div
            className="absolute top-10 bottom-10"
            style={{
              left: "calc(2rem + 7px)",
              width: "1px",
              background: "rgba(57,125,187,0.2)",
            }}
          />

          <div
            className="flex flex-col gap-9"
            style={{ paddingLeft: "2.5rem" }}
          >
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                transition={{ duration: 0.4, delay: 0.12 + i * 0.05 }}
                className="relative flex flex-col gap-1"
              >
                {/* Dot — centered on spine */}
                <span
                  className="absolute flex items-center justify-center"
                  style={{
                    left: "calc(-2.5rem + 0px)",
                    top: "0.25rem",
                    width: "15px",
                    height: "15px",
                    transform: "translateX(-50%)",
                    marginLeft: "7px",
                  }}
                >
                  {m.highlight ? (
                    <span
                      className="rounded-full"
                      style={{
                        width: 14,
                        height: 14,
                        background: "var(--primary-color)",
                        boxShadow: "0 0 0 4px rgba(57,125,187,0.18)",
                        display: "block",
                      }}
                    />
                  ) : (
                    <span
                      className="rounded-full"
                      style={{
                        width: 12,
                        height: 12,
                        background: "var(--primary-color)",
                        border: "1.5px solid rgba(57,125,187,0.18)",
                        display: "block",
                      }}
                    />
                  )}
                </span>

                {/* Year */}
                <p
                  className="font-mono tracking-[0.2em]"
                  style={{
                    fontSize: "0.78rem",
                    color: m.highlight
                      ? "var(--primary-color)"
                      : "var(--text-page-muted)",
                    fontWeight: m.highlight ? 700 : 400,
                  }}
                >
                  {m.year}
                </p>

                {/* Text */}
                <p
                  className="leading-relaxed"
                  style={{
                    fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)",
                    color: m.highlight
                      ? "var(--text-page-secondary)"
                      : "var(--text-page-muted)",
                    fontWeight: m.highlight ? 500 : 400,
                  }}
                >
                  {m.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pattern summary card — white */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="relative overflow-hidden rounded-2xl px-7 py-8 flex flex-col gap-4"
          style={{
            background: "#ffffff",
            border: "1px solid rgba(57,125,187,0.12)",
            boxShadow: "0 2px 12px rgba(15,23,42,0.06)",
          }}
        >
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
            ∞
          </span>

          <p
            className="text-xs font-mono tracking-[0.22em] uppercase"
            style={{ color: "var(--primary-color)" }}
          >
            THE PATTERN
          </p>

          <p
            className="font-black tracking-tight leading-tight relative z-10"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
              color: "var(--text-page-primary)",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Every single year, we added something
            <span style={{ color: "var(--primary-color)" }}>.</span>
          </p>

          <p
            className="leading-relaxed max-w-2xl relative z-10"
            style={{
              fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)",
              color: "var(--text-page-muted)",
            }}
          >
            A new technology, a new domain, a new framework, a new system — eleven
            consecutive years of enablement. That&apos;s not a streak we intend
            to break, and it&apos;s the surest evidence that we&apos;ll still be
            here for your next project, and the one after that.
          </p>

          {/*
            Grid instead of three independent flex-cols: all labels share
            row 1 and all values share row 2, so the value row lands on
            the same baseline across all three stats even when one label
            wraps to two lines and another doesn't. self-end on the
            labels keeps their last line close to the number above it,
            whether the label is one line or two — this holds at any
            viewport width, mobile included.
          */}
          <div className="grid grid-cols-3 gap-x-5 sm:gap-x-8 md:gap-x-10 gap-y-1 mt-2 relative z-10">
            {patternStats.map((stat) => (
              <span
                key={`${stat.label}-label`}
                className="self-end text-xs font-mono tracking-[0.16em]"
                style={{ color: "var(--text-page-muted)" }}
              >
                {stat.label}
              </span>
            ))}
            {patternStats.map((stat) => (
              <span
                key={`${stat.label}-value`}
                className="text-2xl font-black tracking-tight"
                style={{ color: "var(--text-page-primary)" }}
              >
                {stat.value}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}