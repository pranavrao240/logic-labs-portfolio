"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const nodes = [
  {
    num: "01",
    label: "Engineer",
    sub: "Materials, colours, spools",
    pos: "top",
  },
  { num: "02", label: "Manufacture", sub: "±0.03 mm extrusion", pos: "bottom" },
  { num: "03", label: "Print & mould", sub: "50+ machine fleet", pos: "top" },
  { num: "04", label: "Customise", sub: "OEM & branding", pos: "bottom" },
  {
    num: "05",
    label: "Supply & export",
    sub: "5 export markets",
    pos: "top",
    active: true,
  },
];

const brands = [
  {
    name: "FibReel",
    tagline: "Filament & materials",
    src: "https://www.fibreel.com/cdn/shop/files/fibreel-logo_page-0001_1.png?height=90&v=1768200228",
    accentBg: "rgba(57,125,187,0.07)",
    accentBorder: "rgba(57,125,187,0.28)",
  },
  {
    name: "Imprime3D",
    tagline: "Print, scan, mould",
    src: "/imprime3d_logo.png",
    accentBg: "rgba(57,125,187,0.07)",
    accentBorder: "rgba(57,125,187,0.28)",
  },
];

export function WhatWeDo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });

  return (
    <section ref={ref} className="w-full pb-10">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
        transition={{ duration: 0.45 }}
        className="flex items-center gap-3 mb-5"
      >
        <span
          className="text-md md:text-xl font-mono tracking-[0.25em] uppercase font-semibold"
          style={{ color: "var(--text-page-primary)" }}
        >
          WHAT WE DO
        </span>
        <span style={{ color: "var(--text-page-muted)", fontSize: "1rem" }}>
          →
        </span>
      </motion.div>

      {/* ── Pipeline card ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-2xl px-6 py-8 flex flex-col gap-6"
        style={{
          background: "var(--background-card)",
          border: "1px solid rgba(57,125,187,0.12)",
          boxShadow: "0 2px 12px rgba(15,23,42,0.06)",
        }}
      >
        {/* ── Desktop pipeline (single unified grid) ── */}
        <div className="hidden md:grid grid-cols-5 gap-0 items-stretch">
          {nodes.map((n, i) => (
            <div key={n.num} className="flex flex-col items-center">
              {/* Top label slot — fixed height so all rows align */}
              <div className="flex flex-col items-center justify-end h-16 pb-0">
                {n.pos === "top" ? (
                  <>
                    <p
                      className="text-sm font-semibold tracking-tight text-center"
                      style={{ color: "var(--text-page-primary)" }}
                    >
                      {n.label}
                    </p>
                    <p
                      className="text-xs mt-1 text-center"
                      style={{ color: "var(--text-page-muted)" }}
                    >
                      {n.sub}
                    </p>
                  </>
                ) : null}
              </div>

              {/* Connector line above circle (only for top-label nodes) */}
              <div className="flex flex-col items-center">
                <div
                  className="w-px"
                  style={{
                    height: 20,
                    background: n.pos === "top"
                      ? "rgba(57,125,187,0.22)"
                      : "transparent",
                  }}
                />
              </div>

              {/* Circle row — circle + horizontal lines */}
              <div className="flex items-center w-full">
                {/* Left connector line */}
                <div
                  className="flex-1 h-0.5"
                  style={{
                    background: i === 0 ? "transparent" : "rgba(57,125,187,0.45)",
                  }}
                />

                {/* Circle */}
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={
                    inView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0.7, opacity: 0 }
                  }
                  transition={{ duration: 0.35, delay: 0.25 + i * 0.1 }}
                  className="relative flex-shrink-0 rounded-full flex items-center justify-center font-mono font-semibold tracking-wider z-10"
                  style={
                    n.active
                      ? {
                          width: 52,
                          height: 52,
                          fontSize: "0.85rem",
                          background: "var(--primary-color)",
                          color: "#fff",
                          boxShadow: "0 0 0 5px rgba(57,125,187,0.18)",
                        }
                      : {
                          width: 52,
                          height: 52,
                          fontSize: "0.85rem",
                          background: "rgba(57,125,187,0.22)",
                          border: "1.5px solid rgba(57,125,187,0.35)",
                          color: "var(--text-page-secondary)",
                        }
                  }
                >
                  {n.num}
                </motion.div>

                {/* Right connector line + arrow on last node */}
                {i < nodes.length - 1 ? (
                  <div
                    className="flex-1 h-0.5"
                    style={{ background: "rgba(57,125,187,0.45)" }}
                  />
                ) : (
                  <motion.span
                    initial={{ opacity: 0, x: -4 }}
                    animate={
                      inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -4 }
                    }
                    transition={{ duration: 0.3, delay: 0.75 }}
                    className="ml-1 flex-shrink-0"
                    style={{ color: "var(--primary-color)", fontSize: "1.1rem" }}
                  >
                    →
                  </motion.span>
                )}
              </div>

              {/* Connector line below circle (only for bottom-label nodes) */}
              <div className="flex flex-col items-center">
                <div
                  className="w-px"
                  style={{
                    height: 20,
                    background: n.pos === "bottom"
                      ? "rgba(57,125,187,0.22)"
                      : "transparent",
                  }}
                />
              </div>

              {/* Bottom label slot — fixed height */}
              <div className="flex flex-col items-center justify-start h-16 pt-0">
                {n.pos === "bottom" ? (
                  <>
                    <p
                      className="text-sm font-semibold tracking-tight text-center"
                      style={{ color: "var(--text-page-primary)" }}
                    >
                      {n.label}
                    </p>
                    <p
                      className="text-xs mt-1 text-center"
                      style={{ color: "var(--text-page-muted)" }}
                    >
                      {n.sub}
                    </p>
                  </>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile list */}
        <div className="md:hidden flex flex-col gap-3 mt-1">
          {nodes.map((n, i) => (
            <motion.div
              key={n.num}
              initial={{ opacity: 0, x: -8 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
              className="flex items-center gap-3"
            >
              <span
                className="flex-shrink-0 rounded-full flex items-center justify-center text-xs font-mono font-semibold"
                style={
                  n.active
                    ? {
                        width: 40,
                        height: 40,
                        background: "var(--primary-color)",
                        color: "#fff",
                      }
                    : {
                        width: 40,
                        height: 40,
                        background: "rgba(247,250,255,0.9)",
                        border: "1.5px solid rgba(57,125,187,0.35)",
                        color: "var(--text-page-secondary)",
                      }
                }
              >
                {n.num}
              </span>
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "var(--text-page-primary)" }}
                >
                  {n.label}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "var(--text-page-muted)" }}
                >
                  {n.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="w-full h-px"
          style={{ background: "rgba(57,125,187,0.10)" }}
        />

        {/* Sub-label */}
        <p
          className="text-center text-sm font-mono tracking-wide"
          style={{ color: "var(--text-page-muted)" }}
        >
          Delivered under two operating names
        </p>

        {/* Brand cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {brands.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.38, delay: 0.55 + i * 0.08 }}
              className="flex flex-col items-center justify-center gap-3 py-7 rounded-xl"
              style={{
                background: b.accentBg,
                border: `1.5px solid ${b.accentBorder}`,
              }}
            >
              <Image
                src={b.src}
                alt={b.name}
                width={140}
                height={36}
                style={{ objectFit: "contain" }}
              />
              <span
                className="text-sm font-mono tracking-wide"
                style={{ color: "var(--text-page-muted)" }}
              >
                {b.tagline}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Footer tagline */}
        <p
          className="text-center text-sm"
          style={{ color: "var(--text-page-muted)" }}
        >
          Both engineered, made and backed by Rever Industries
        </p>
      </motion.div>
    </section>
  );
}