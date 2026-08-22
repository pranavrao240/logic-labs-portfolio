"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ValuesSection from "./ValuesSection";

export function AboutValues() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <div className="hidden md:block">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <ValuesSection />
      </motion.div>
    </div>
  );
}
