"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function ContactSectionHeader() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="site-section w-full px-6 md:px-8 py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="split-heading text-4xl md:text-6xl font-light tracking-tighter mb-4"
        >
          Let&apos;s build the next{" "}
          <span className="heading-accent">decade together.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="text-base mb-10 max-w-3xl mx-auto"
          style={{ color: "var(--text-page-muted)" }}
        >
          Bulk filament, a private-label run with your own branded spools, or a
          part taken from prototype to mass production — talk to the company
          that makes all of it.
        </motion.p>

        {/*  keyword pills  */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="flex justify-center items-center gap-3 mb-10 flex-wrap"
        >
          {["RELIABLE", "TRUSTED", "PREMIUM"].map((word, i) => (
            <div key={word} className="flex items-center gap-3">
              <span
                className="text-xs font-mono tracking-[0.22em] font-semibold"
                style={{ color: "var(--text-page-secondary)" }}
              >
                {word}
              </span>
              {i < 2 && (
                <span
                  className="w-1 h-1 rounded-full"
                  style={{ background: "var(--primary-color)", opacity: 0.5 }}
                />
              )}
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        {/* <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          {/* Primary filled button */}
        {/* <a href="/contact" className="cta-button">
            <span className="btn-label">Start an OEM enquiry</span>
            <span className="btn-icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a> */}

        {/* Secondary outlined button */}
        {/* <a
            href="/contact"
            className="cta-button"
            style={{
              background: "transparent",
              border: "1px solid rgba(57,125,187,0.35)",
              color: "var(--text-page-primary)",
              boxShadow: "none",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "rgba(57,125,187,0.06)";
              el.style.borderColor = "var(--primary-color-border)";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 10px 30px rgba(57,125,187,0.12)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "transparent";
              el.style.borderColor = "rgba(57,125,187,0.35)";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            <span className="btn-label">Request a quote</span>
            <span
              className="btn-icon"
              style={{ color: "var(--primary-color)" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}
