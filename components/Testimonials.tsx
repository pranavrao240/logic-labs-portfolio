"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data";
import { PremiumCard } from "./PremiumCard";

const cardVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    y: -300,
    opacity: 1,
    rotate: dir > 0 ? 6 : -6,
    scale: 0.9,
  }),
  center: {
    x: 0,
    y: 0,
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -40 : 40,
    y: 300,
    opacity: 1,
    rotate: dir > 0 ? -5 : 5,
    scale: 0.9,
    transition: { duration: 0.4, ease: [0.55, 0, 1, 1] as const },
  }),
};

const cardStyle: React.CSSProperties = {
  background: "var(--background-card)",
  border: "1px solid var(--border-default)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  boxShadow: "0 10px 40px rgba(15,23,42,0.10), 0 2px 8px rgba(15,23,42,0.06)",
};

const SectionHeading: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="w-full max-w-4xl mx-auto text-center mb-16 md:mb-20"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <h2 className="split-heading text-5xl md:text-7xl font-light tracking-tighter mb-5">
        The proof <span className="heading-accent"> is on the print bed.</span>
      </h2>
      <p
        className="text-xl leading-relaxed max-w-2xl mx-auto"
        style={{ color: "var(--text-page-secondary)" }}
      >
        What our customers say after the spool arrives, the print finishes, or
        the prototype lands.
      </p>
    </motion.div>
  );
};

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-80px" });

  const go = (next: number, dir: number) => {
    setDirection(dir);
    setCurrentIndex(next);
  };
  const prev = () =>
    go(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1, -1);
  const next = () =>
    go(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1, 1);

  const t = testimonials[currentIndex];

  return (
    <section
      ref={sectionRef}
      className="site-section relative flex flex-col items-center px-6 md:px-8 py-16 md:py-28"
      id="testimonials"
    >
      <div className="section-divider mb-16 md:mb-20" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading />
        <div className="justify-center pb-10">
          {" "}
          <PremiumCard />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-5 items-stretch h-auto lg:h-[420px]">
          <div className="overflow-hidden rounded-2xl min-h-[240px] lg:min-h-0">
            <img
              src="/testimonial.png"
              alt="decorative artwork"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative" style={{ clipPath: "none" }}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={`card-${currentIndex}`}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative h-full rounded-2xl p-8 md:p-12 flex flex-col"
                style={cardStyle}
              >
                <motion.div
                  className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, var(--primary-color) 0%, transparent 70%)",
                    opacity: 0.07,
                  }}
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <Quote
                    className="w-10 h-10 mb-6"
                    style={{ color: "var(--primary-color)", opacity: 0.55 }}
                  />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.5 }}
                  className="text-xl md:text-2xl leading-relaxed mb-auto text-primary"
                  // style={{ color: "var(--text-secondary)" }}
                >
                  "{t.text}"
                </motion.p>

                <div
                  className="w-12 h-px my-8"
                  style={{ background: "var(--border-hover)" }}
                />

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.42, duration: 0.5 }}
                  className="flex items-center gap-5"
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                    style={{
                      border: "1px solid var(--border-default)",
                      opacity: 0.88,
                    }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        `https://picsum.photos/seed/${t.id}/200/200`;
                    }}
                  />
                  <div>
                    <h4 className="text-lg font-light tracking-tighter">
                      {t.name}
                    </h4>
                    <p
                      className="text-xs uppercase tracking-widest mt-0.5"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {t.role}
                    </p>
                  </div>
                  <span
                    className="ml-auto text-xs font-mono"
                    // style={{ color: "var(--text-faint)" }}
                  >
                    0{currentIndex + 1} / 0{testimonials.length}
                  </span>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          className="flex justify-start items-center gap-4 mt-6 lg:pl-[calc(41.666%)]"
          style={{}}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex gap-2 items-center">
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => go(i, i > currentIndex ? 1 : -1)}
                animate={{
                  width: i === currentIndex ? 32 : 8,
                  background:
                    i === currentIndex
                      ? "var(--primary-color)"
                      : "rgba(57,125,187,0.25)",
                }}
                transition={{ duration: 0.3 }}
                className="h-2 rounded-full"
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-3 ml-4">
            {[
              { fn: prev, Icon: ChevronLeft, label: "Previous" },
              { fn: next, Icon: ChevronRight, label: "Next" },
            ].map(({ fn, Icon, label }, i) => (
              <motion.button
                key={i}
                onClick={fn}
                whileHover={{ scale: 1.08, x: i === 0 ? -3 : 3 }}
                whileTap={{ scale: 0.94 }}
                className="w-11 h-11 rounded-full flex items-center justify-center"
                style={cardStyle}
                aria-label={label}
              >
                <Icon size={18} style={{ color: "var(--text-secondary)" }} />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
