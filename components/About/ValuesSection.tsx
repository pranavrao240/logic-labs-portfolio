// "use client";

// import { useState, useRef } from "react";
// import { motion, useInView } from "framer-motion";

// const values = [
//   {
//     number: "01",
//     title: "Made in India, for the world",
//     desc: "Made locally, exported globally.",
//     explode: "top" as const,
//   },
//   {
//     number: "02",
//     title: "Quality without compromise",
//     desc: "±0.03 mm, every batch tested.",
//     explode: "left" as const,
//   },
//   {
//     number: "03",
//     title: "Premium, made accessible",
//     desc: "Top-tier, honestly priced.",
//     explode: "right" as const,
//   },
//   {
//     number: "04",
//     title: "Customer-first partnership",
//     desc: "Built around what you need.",
//     explode: "right" as const,
//   },
//   {
//     number: "05",
//     title: "Innovation as a habit",
//     desc: "Something new, every year.",
//     explode: "left" as const,
//   },
//   {
//     number: "06",
//     title: "Sustainable by design",
//     desc: "100% recycled spools.",
//     explode: "top" as const,
//   },
// ];

// type ExplodeDir = "left" | "right" | "top";

// function ExplodingCube({ active, dir }: { active: boolean; dir: ExplodeDir }) {
//   const blue = "#38bdf8";
//   const dimStroke = "#2a3a4e";
//   const darkFill = "#4d6282ff";
//   const ease = [0.22, 1, 0.36, 1] as const;
//   const dur = 0.48;

//   const stroke = active ? blue : dimStroke;
//   const sw = active ? 2 : 1.1;
//   const ribOp = active ? 0.65 : 0.2;
//   const glow = active
//     ? "drop-shadow(0 0 6px rgba(56,189,248,0.6)) drop-shadow(0 0 14px rgba(56,189,248,0.25))"
//     : "none";

//   const leftOff = active && dir === "left" ? { x: -11, y: 5 } : { x: 0, y: 0 };
//   const rightOff = active && dir === "right" ? { x: 11, y: 5 } : { x: 0, y: 0 };
//   const topOff = active && dir === "top" ? { x: 0, y: -12 } : { x: 0, y: 0 };

//   const leftRibs = [0.22, 0.44, 0.66, 0.88].map((t) => ({
//     x1: 18 + t * 32,
//     y1: 36 + t * 16,
//     x2: 18 + t * 32,
//     y2: 62 + t * 16,
//   }));
//   const rightRibs = [0.22, 0.44, 0.66, 0.88].map((t) => ({
//     x1: 50 + t * 32,
//     y1: 52 - t * 16,
//     x2: 50 + t * 32,
//     y2: 78 - t * 16,
//   }));

//   return (
//     <svg
//       viewBox="0 0 100 92"
//       width={90}
//       height={83}
//       style={{ overflow: "visible" }}
//     >
//       {/* LEFT */}
//       <motion.g
//         animate={leftOff}
//         transition={{ duration: dur, ease }}
//         style={{ filter: glow }}
//       >
//         <polygon points="18,36 50,52 50,78 18,62" fill={darkFill} />
//         <polygon
//           points="18,36 50,52 50,78 18,62"
//           fill="none"
//           stroke={stroke}
//           strokeWidth={sw}
//           strokeLinejoin="round"
//         />
//         {leftRibs.map((r, i) => (
//           <line
//             key={i}
//             x1={r.x1}
//             y1={r.y1}
//             x2={r.x2}
//             y2={r.y2}
//             stroke={stroke}
//             strokeWidth={active ? 0.9 : 0.6}
//             strokeDasharray="4 3"
//             opacity={ribOp}
//           />
//         ))}
//       </motion.g>

//       {/* RIGHT */}
//       <motion.g
//         animate={rightOff}
//         transition={{ duration: dur, ease }}
//         style={{ filter: glow }}
//       >
//         <polygon points="50,52 82,36 82,62 50,78" fill={darkFill} />
//         <polygon
//           points="50,52 82,36 82,62 50,78"
//           fill="none"
//           stroke={stroke}
//           strokeWidth={sw}
//           strokeLinejoin="round"
//         />
//         {rightRibs.map((r, i) => (
//           <line
//             key={i}
//             x1={r.x1}
//             y1={r.y1}
//             x2={r.x2}
//             y2={r.y2}
//             stroke={stroke}
//             strokeWidth={active ? 0.9 : 0.6}
//             strokeDasharray="4 3"
//             opacity={ribOp}
//           />
//         ))}
//       </motion.g>

//       {/* TOP */}
//       <motion.g
//         animate={topOff}
//         transition={{ duration: dur, ease }}
//         style={{ filter: glow }}
//       >
//         <polygon points="18,36 50,20 82,36 50,52" fill={darkFill} />
//         <polygon
//           points="18,36 50,20 82,36 50,52"
//           fill="none"
//           stroke={stroke}
//           strokeWidth={sw}
//           strokeLinejoin="round"
//         />
//         <polygon
//           points="30,36 50,26 70,36 50,46"
//           fill="none"
//           stroke={stroke}
//           strokeWidth={active ? 1.1 : 0.6}
//           strokeLinejoin="round"
//           opacity={active ? 0.5 : 0.18}
//         />
//       </motion.g>
//     </svg>
//   );
// }

// function ValueCard({
//   value,
//   delay,
// }: {
//   value: (typeof values)[0];
//   delay: number;
// }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <motion.div
//       variants={{
//         hidden: { opacity: 0, scale: 0.94, y: 16 },
//         visible: {
//           opacity: 1,
//           scale: 1,
//           y: 0,
//           transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
//         },
//       }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="relative rounded-xl overflow-hidden cursor-default flex flex-col items-center text-center px-5 pt-6 pb-8"
//       style={{
//         background: "white",
//         border: `1px solid ${hovered ? "rgba(56,189,248,0.32)" : "rgba(255,255,255,0.07)"}`,
//         boxShadow: hovered
//           ? "0 0 0 1px rgba(56,189,248,0.10), 0 12px 36px rgba(10,16,30,0.45)"
//           : "0 2px 10px rgba(10,16,30,0.2)",
//         transition:
//           "background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
//       }}
//     >
//       {/* top glow line */}
//       <div
//         className="absolute top-0 left-0 right-0 h-px transition-opacity duration-300"
//         style={{
//           background:
//             "linear-gradient(to right, transparent 5%, rgba(56,189,248,0.65) 50%, transparent 95%)",
//           opacity: hovered ? 1 : 0,
//         }}
//       />

//       {/* number */}
//       <span
//         className="absolute top-4 left-5 text-xs font-mono tracking-widest"
//         style={{ color: "rgba(56,189,248,0.5)" }}
//       >
//         {value.number}
//       </span>

//       {/* cube */}
//       <div className="mb-4 mt-2" style={{ height: 83 }}>
//         <ExplodingCube active={hovered} dir={value.explode} />
//       </div>

//       {/* title */}
//       <h3
//         className="text-base font-semibold tracking-tight mb-1.5 leading-snug"
//         style={{ color: "#0f172a" }}
//       >
//         {value.title}
//       </h3>

//       {/* divider */}
//       <div
//         className="w-5 h-px mb-2.5 mx-auto"
//         style={{
//           background: hovered ? "rgba(56,189,248,0.7)" : "rgba(0,0,0,0.12)",
//           transition: "background 0.3s ease",
//         }}
//       />

//       {/* desc */}
//       <p
//         className="text-sm leading-relaxed"
//         style={{ color: "rgba(0,0,0,0.45)" }}
//       >
//         {value.desc}
//       </p>
//     </motion.div>
//   );
// }

// export default function ValuesSection() {
//   const ref = useRef<HTMLDivElement>(null);
//   const inView = useInView(ref, { once: false });

//   return (
//     <div ref={ref}>
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
//         transition={{ duration: 0.75 }}
//         className="text-center mb-10"
//       >
//         <h2 className="split-heading text-5xl md:text-7xl font-light tracking-tighter">
//           Our <span className="heading-accent">Values</span>
//         </h2>
//         <p
//           className="text-xl font-bold tracking-widest uppercase font-mono mt-2 inline-flex justify-center items-center overflow-hidden"
//           style={{ color: "rgba(30,80,140,0.45)" }}
//         >
//           <motion.span
//             variants={{
//               hidden: { opacity: 0, width: 0, marginRight: 0 },
//               visible: {
//                 opacity: [0, 1, 1, 0, 0, 0],
//                 width: ["0px", "auto", "auto", "0px", "0px", "0px"],
//                 marginRight: ["0px", "6px", "6px", "0px", "0px", "0px"],
//                 transition: {
//                   times: [0, 0.1, 0.45, 0.55, 0.9, 1],
//                   duration: 6,
//                   ease: "easeInOut",
//                   repeat: Infinity,
//                 },
//               },
//             }}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//             className="inline-block overflow-hidden whitespace-nowrap"
//           >
//             What
//           </motion.span>
//           <span className="inline-block whitespace-nowrap">we build</span>
//           <motion.span
//             variants={{
//               hidden: { opacity: 0, width: 0, marginLeft: 0 },
//               visible: {
//                 opacity: [0, 0, 0, 1, 1, 0],
//                 width: ["0px", "0px", "0px", "auto", "auto", "0px"],
//                 marginLeft: ["0px", "0px", "0px", "6px", "6px", "0px"],
//                 transition: {
//                   times: [0, 0.45, 0.55, 0.65, 0.9, 1],
//                   duration: 6,
//                   ease: "easeInOut",
//                   repeat: Infinity,
//                 },
//               },
//             }}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//             className="inline-block overflow-hidden whitespace-nowrap"
//           >
//             on these.
//           </motion.span>
//         </p>
//       </motion.div>

//       <motion.div
//         initial="hidden"
//         animate={inView ? "visible" : "hidden"}
//         variants={{
//           hidden: {},
//           visible: { transition: { staggerChildren: 0.07 } },
//         }}
//         className="flex flex-col gap-3"
//       >
//         {/* Top row */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
//           {values.slice(0, 3).map((value, i) => (
//             <ValueCard key={value.title} value={value} delay={i * 0.06} />
//           ))}
//         </div>

//         {/* Bottom row */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pb-5">
//           {values.slice(3).map((value, i) => (
//             <ValueCard key={value.title} value={value} delay={(i + 3) * 0.06} />
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }
"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe,
  ShieldCheck,
  Lightbulb,
  HandHeart,
  Gem,
  Recycle,
  MapPin,
} from "lucide-react";

const values = [
  {
    number: "01",
    title: "Make in India, for the world",
    desc: "Made locally, exported globally.",
    icon: Globe,
    barOpacity: 0.15,
  },
  {
    number: "02",
    title: "Quality without compromise",
    desc: "±0.03 mm, every batch tested.",
    icon: ShieldCheck,
    barOpacity: 0.28,
  },
  {
    number: "03",
    title: "Premium, made accessible",
    desc: "Top-tier, honestly priced.",
    icon: Gem,
    barOpacity: 0.45,
  },
  {
    number: "04",
    title: "Customer-first partnership",
    desc: "Built around what you need.",
    icon: HandHeart,
    barOpacity: 0.62,
  },
  {
    number: "05",
    title: "Innovation as a habit",
    desc: "Something new, every year.",
    icon: Lightbulb,
    barOpacity: 0.8,
  },
  {
    number: "06",
    title: "Sustainable by design",
    desc: "100% recycled spools.",
    icon: Recycle,
    barOpacity: 1,
  },
];

function FunnelSVG() {
  return (
    <svg width="56" height="68" viewBox="0 0 56 68" fill="none">
      {/* top bar */}
      <rect
        x="2"
        y="1"
        width="52"
        height="8"
        rx="2.5"
        fill="rgba(150,150,150,0.4)"
      />
      {/* left panel */}
      <path
        d="M6 9 L28 40 L28 56 L19 51 L19 40 L2 9 Z"
        fill="rgba(110,110,110,0.28)"
      />
      {/* right panel — darker */}
      <path
        d="M50 9 L28 40 L28 56 L37 51 L37 40 L54 9 Z"
        fill="rgba(80,80,80,0.45)"
      />
      {/* drip stem */}
      <line
        x1="28"
        y1="56"
        x2="28"
        y2="65"
        stroke="rgba(57,125,187,0.75)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* drip drop */}
      <circle cx="28" cy="67" r="2.5" fill="rgba(57,125,187,0.75)" />
    </svg>
  );
}

function ValueCard({
  value,
  delay,
}: {
  value: (typeof values)[0];
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = value.icon;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 12 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, delay, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col rounded-xl px-4 pt-5 pb-6 cursor-default overflow-hidden"
      style={{
        background: hovered ? "#ffffff" : "rgba(255,255,255,0.7)",
        border: `1px solid ${hovered ? "rgba(57,125,187,0.25)" : "rgba(57,125,187,0.08)"}`,
        boxShadow: hovered ? "0 6px 24px rgba(57,125,187,0.10)" : "none",
        transition: "background 0.25s, border-color 0.25s, box-shadow 0.25s",
      }}
    >
      {/* top accent bar */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "3px",
          background: `rgba(57,125,187,${value.barOpacity})`,
        }}
      />

      {/* number */}
      <span
        className="text-sm font-mono tracking-widest mb-4 block"
        style={{ color: "rgba(57,125,187,0.45)" }}
      >
        {value.number}
      </span>

      {/* icon */}
      <div
        className="mb-4 transition-colors duration-300"
        style={{
          color: hovered ? "var(--primary-color)" : "rgba(57,125,187,0.4)",
        }}
      >
        <Icon size={22} strokeWidth={1.5} />
      </div>

      {/* title */}
      <h3
        className="text-md font-bold tracking-tight mb-2 leading-snug"
        style={{ color: "var(--text-page-primary)" }}
      >
        {value.title}
      </h3>

      {/* desc */}
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--text-page-muted)" }}
      >
        {value.desc}
      </p>
    </motion.div>
  );
}

export default function ValuesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false });

  return (
    <div ref={ref}>
      {/* heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.75 }}
        className="text-center mb-10"
      >
        <h2 className="split-heading text-5xl md:text-7xl font-light tracking-tighter">
          Our <span className="heading-accent">Values</span>
        </h2>
        <p
          className="text-xl font-bold tracking-widest uppercase font-mono mt-2 inline-flex justify-center items-center overflow-hidden"
          style={{ color: "rgba(30,80,140,0.45)" }}
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, width: 0, marginRight: 0 },
              visible: {
                opacity: [0, 1, 1, 0, 0, 0],
                width: ["0px", "auto", "auto", "0px", "0px", "0px"],
                marginRight: ["0px", "6px", "6px", "0px", "0px", "0px"],
                transition: {
                  times: [0, 0.1, 0.45, 0.55, 0.9, 1],
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                },
              },
            }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="inline-block overflow-hidden whitespace-nowrap"
          >
            What
          </motion.span>
          <span className="inline-block whitespace-nowrap">we build</span>
          <motion.span
            variants={{
              hidden: { opacity: 0, width: 0, marginLeft: 0 },
              visible: {
                opacity: [0, 0, 0, 1, 1, 0],
                width: ["0px", "0px", "0px", "auto", "auto", "0px"],
                marginLeft: ["0px", "0px", "0px", "6px", "6px", "0px"],
                transition: {
                  times: [0, 0.45, 0.55, 0.65, 0.9, 1],
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                },
              },
            }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="inline-block overflow-hidden whitespace-nowrap"
          >
            on these.
          </motion.span>
        </p>
      </motion.div>

      {/* OUTER CONTAINER  */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative rounded-2xl flex flex-col gap-4 p-4"
        style={{
          background: "rgba(247,250,255,0.9)",
          border: "1px solid rgba(57,125,187,0.08)",
          boxShadow: "0 2px 12px rgba(15,23,42,0.05)",
        }}
      >
        {/* Funnel — top right of outer container */}
        <div
          className="absolute"
          style={{ top: -52, right: 28, pointerEvents: "none", zIndex: 10 }}
        >
          <FunnelSVG />
        </div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.07, delayChildren: 0.15 },
            },
          }}
          className="grid gap-3"
          style={{ gridTemplateColumns: "repeat(6, 1fr)" }}
        >
          {values.map((value, i) => (
            <ValueCard key={value.title} value={value} delay={i * 0.06} />
          ))}
        </motion.div>

        {/* Build plate bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.55 }}
          className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl"
          style={{
            background: "#ffffff",
            border: "1px solid rgba(57,125,187,0.10)",
          }}
        >
          <MapPin
            size={13}
            strokeWidth={1.5}
            style={{ color: "rgba(57,125,187,0.5)" }}
          />
          <span
            className="text-sm font-mono tracking-wide"
            style={{ color: "var(--text-page-muted)" }}
          >
            Build plate — one facility, Nashik, since 2016
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
