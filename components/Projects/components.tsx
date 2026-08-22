"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const CurvyUnderline: React.FC<{ inView: boolean; delay?: number }> = ({
  inView,
  delay = 0.5,
}) => (
  <span
    className="absolute left-0 right-0 pointer-events-none"
    style={{ bottom: "-10px", height: "14px" }}
    aria-hidden
  >
    <svg
      viewBox="0 0 300 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <motion.path
        d="M 4 10 C 40 10, 80 10, 120 6 C 160 2, 200 1, 240 4 C 265 6, 285 8, 296 9"
        stroke="var(--primary-color)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={
          inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }
        }
        transition={{
          pathLength: { duration: 0.75, delay, ease: [0.25, 0.1, 0.25, 1] },
          opacity: { duration: 0.01, delay },
        }}
      />
    </svg>
  </span>
);

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const scaleDimensions: [number, number] = isMobile ? [0.82, 0.97] : [1.04, 1];
  const rotate = useTransform(scrollYProgress, [0, 1], [14, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <div
      className="h-[42rem] md:h-[56rem] flex items-center justify-center relative px-4 md:px-12"
      ref={containerRef}
    >
      <div
        className="w-full max-w-5xl mx-auto relative"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          style={{ translateY: translate }}
          className="text-center mb-6 md:mb-10"
        >
          {titleComponent}
        </motion.div>

        <motion.div
          style={{
            rotateX: rotate,
            scale,
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.08), 0 20px 40px rgba(0,0,0,0.14), 0 60px 80px rgba(0,0,0,0.10)",
            border: "1px solid var(--border-default)",
          }}
          className="mx-auto h-[20rem] md:h-[30rem] w-full rounded-2xl overflow-hidden"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export const ProjectScrollItem: React.FC<{
  number: string;
  titlePlain: string;
  titleUnderlined: string;
  tag: string;
  description: string;
  image: string;
  link: string;
  stat: string;
  index: number;
}> = ({
  number,
  titlePlain,
  titleUnderlined,
  tag,
  description,
  image,
  link,
  stat,
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const inView = useInView(itemRef, { once: true, margin: "-60px" });

  const titleComponent = (
    <div ref={itemRef} className="flex flex-col items-center gap-4 px-2">
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.5, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-[11px] font-mono tracking-[0.22em] uppercase px-3 py-1 rounded-full"
        style={{
          background: "var(--primary-color-subtle, rgba(57,125,187,0.10))",
          border:
            "1px solid var(--primary-color-border, rgba(57,125,187,0.25))",
          color: "var(--primary-color)",
        }}
      >
        {tag}
      </motion.span>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tighter leading-tight"
        style={{ color: "var(--text-page-primary, #0f172a)" }}
      >
        {titlePlain}{" "}
        <span className="relative inline-block whitespace-nowrap pb-2">
          {titleUnderlined}
          <CurvyUnderline inView={inView} delay={0.45} />
        </span>
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.55, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto"
      >
        <p
          className="text-base md:text-lg leading-relaxed text-center sm:text-left flex-1"
          style={{ color: "var(--text-page-secondary, #64748b)" }}
        >
          {description}
        </p>
        <a
          href={link}
          className="cta-button shrink-0 text-[11px] font-mono tracking-widest uppercase rounded-full px-5 py-2.5"
        >
          <span className="btn-label">View Project</span>
          <span className="btn-icon">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.45, delay: 0.33, ease: [0.25, 0.1, 0.25, 1] }}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
        style={{
          background: "var(--background-card)",
          border: "1px solid var(--border-subtle, var(--border-default))",
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full shrink-0"
          style={{ background: "var(--primary-color)" }}
        />
        <span
          className="text-[11px] font-mono tracking-[0.15em] uppercase"
          style={{ color: "var(--text-faint)" }}
        >
          {stat}
        </span>
      </motion.div>
    </div>
  );

  return (
    <ContainerScroll titleComponent={titleComponent}>
      <div className="relative w-full h-full">
        <img
          src={image}
          alt={`${titlePlain} ${titleUnderlined}`}
          className="w-full h-full object-cover"
          draggable={false}
          loading="lazy"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(8,14,30,0.65) 0%, rgba(8,14,30,0.10) 50%, transparent 100%)",
          }}
        />
        <span
          className="absolute bottom-3 right-5 text-[4rem] md:text-[6rem] font-black leading-none select-none pointer-events-none"
          style={{ color: "rgba(255,255,255,0.06)" }}
        >
          {number}
        </span>
        <div
          className="absolute top-3 left-3 px-2.5 py-1 rounded-md"
          style={{
            background: "rgba(8,14,30,0.65)",
            border: "1px solid var(--border-default)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          <span
            className="text-[9px] font-mono tracking-[0.2em] uppercase"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            {number} / 04
          </span>
        </div>
      </div>
    </ContainerScroll>
  );
};
