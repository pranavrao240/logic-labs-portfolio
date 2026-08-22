"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { stats } from "@/data";
import { cardStyle } from "./AboutShared";

export function AboutStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center text-center"
        >
          <div
            className="mb-4 w-14 h-14 rounded-full flex items-center justify-center"
            style={cardStyle}
          >
            <stat.icon
              className="w-6 h-6"
              style={{ color: "var(--text-secondary)" }}
            />
          </div>
          <div
            className="text-4xl font-light tracking-tighter mb-1"
            style={{ color: "var(--text-page-primary)" }}
          >
            {stat.value}
          </div>
          <div
            className="text-xs uppercase tracking-widest"
            style={{ color: "var(--text-page-muted)" }}
          >
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
