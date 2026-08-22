"use client";

import { motion } from "framer-motion";

const certRows = [
  { label: "GSTIN", value: "27AATFR9806L1Z9" },
  { label: "UDYAM / MSME", value: "UDYAM-MH-23-0054570" },
  { label: "IEC", value: "Registered importer & exporter" },
];

export function CertPanel({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
      transition={{ duration: 0.5, delay: 0.35 }}
      className="rounded-xl overflow-hidden font-mono"
      style={{
        background: "var(--background-card)",
        border: "1px solid rgba(57,125,187,0.18)",
        boxShadow: "0 4px 16px rgba(15,23,42,0.08)",
      }}
    >
      {/* Orange header row — ISO · CE · RoHS */}
      <div
        className="px-5 py-3 flex items-center gap-3 flex-wrap"
        style={{
          borderBottom: "1px solid rgba(57,125,187,0.12)",
          background: "rgba(57,125,187,0.06)",
        }}
      >
        {["ISO 9001:2015", "CE", "RoHS"].map((badge, i) => (
          <span key={badge} className="flex items-center gap-3">
            <span
              className="text-sm font-semibold tracking-widest"
              style={{ color: "#f97316" }}
            >
              {badge}
            </span>
            {i < 2 && (
              <span style={{ color: "rgba(249,115,22,0.4)", fontSize: "1rem" }}>
                ·
              </span>
            )}
          </span>
        ))}
      </div>

      {/* Data rows */}
      <div className="flex flex-col">
        {certRows.map((row, i) => (
          <motion.div
            key={row.label}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.35, delay: 0.5 + i * 0.08 }}
            className="flex items-baseline gap-6 px-5 py-3.5"
            style={{
              borderBottom:
                i < certRows.length - 1
                  ? "1px solid rgba(15,23,42,0.07)"
                  : "none",
            }}
          >
            {/* Label col — fixed width */}
            <span
              className="text-xs tracking-widest uppercase flex-shrink-0"
              style={{
                color: "var(--text-page-muted)",
                minWidth: "9rem",
              }}
            >
              {row.label}
            </span>
            {/* Value col */}
            <span
              className="text-sm tracking-wide"
              style={{ color: "var(--text-page-secondary)" }}
            >
              {row.value}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
