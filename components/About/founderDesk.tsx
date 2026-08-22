"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export function FoundersDesk() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });

  return (
    <section ref={ref} className="site-section w-full md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="split-heading text-4xl md:text-6xl font-light tracking-tighter mb-12"
        >
          Founder's <span className="heading-accent">Desk</span>
        </motion.h2>

        {/* Outer card — row on desktop, column on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl flex flex-col md:flex-row"
          style={{
            background: "white",
            border: "1px solid rgba(57,125,187,0.12)",
            boxShadow: "0 2px 12px rgba(15,23,42,0.06)",
          }}
        >
          {/* Image  */}
          <div
            className="relative w-full md:w-1/2 flex-shrink-0"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src="/rever/frame-192.webp"
              alt="Founder — Rever Industries"
              fill
              className="object-cover"
              priority
            />

            {/* Dark gradient overlay */}
            <div
              className="absolute inset-x-0 bottom-0 h-32"
              style={{
                background:
                  "linear-gradient(to top, rgba(15,23,42,0.55) 0%, transparent 100%)",
              }}
            />

            {/* Name tag on image */}
            <div className="absolute bottom-0 left-0 px-7 py-6">
              <p
                className="text-xs font-mono tracking-[0.22em] uppercase mb-1"
                style={{ color: "var(--primary-color)" }}
              >
                FOUNDER · REVER INDUSTRIES
              </p>
              <p
                className="font-black tracking-tight"
                style={{
                  fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
                  color: "#ffffff",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                [Founder name]
              </p>
            </div>
          </div>

          {/* Quote section  */}
          <div className="flex flex-1 items-center p-4 md:p-8">
            <div
              className="w-full rounded-xl px-7 py-7 flex flex-col gap-3 h-full justify-center"
              style={{
                background: "var(--background-card)",
                border: "1px solid rgba(57,125,187,0.1)",
              }}
            >
              <p
                className="font-bold leading-snug tracking-tight"
                style={{
                  fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                  color: "var(--text-page-primary)",
                }}
              >
                "In 2016, India relied entirely on imported filament. We started
                Rever Industries to prove that materials made here could stand
                beside — and outlast — anything shipped in."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
