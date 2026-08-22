"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BentoGrid, BentoGridItem } from "./bento-grid";

const industries = [
  {
    title: "Engineering & Manufacturing",
    description:
      "Functional prototypes, jigs, fixtures, and end-use parts in Carbon FibReel, ABS, and PETG.",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
    colSpan: false,
  },
  {
    title: "Automotive & Mobility",
    description:
      "UV-resistant ASA for exterior parts, flame-retardant ABS for under-the-hood components, and rapid prototyping for design iterations.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    colSpan: false,
  },
  {
    title: "Robotics & Automation",
    description:
      "Lightweight, durable parts for chassis, mounts, and custom enclosures, printed in multi-material and dual-extrusion FDM.",
    image:
      "https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?q=80&w=2725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    colSpan: false,
  },
  {
    title: "Education & Research",
    description:
      "Safe, affordable PLA and PETG for school labs, university makerspaces, and research projects. Trusted by institutions across India.",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    colSpan: false,
  },
  {
    title: "Electronics & Electrical",
    description:
      "Flame-retardant Fab ABS FR for housings and enclosures where safety standards aren't optional.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    colSpan: true,
  },
  {
    title: "Architecture & Interior Design",
    description:
      "Scale models, custom fixtures, and bespoke decor in Silk PLA, translucent PLA, and standard ranges.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    colSpan: false,
  },

  {
    title: "Consumer Products & Design",
    description:
      "TPU for soft-touch parts, phone cases, and footwear. Premium PLA for finished consumer goods.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80",
    colSpan: true,
  },

  {
    title: "Art, Sculpture & Cultural Craft",
    description:
      "Glow-in-the-dark, silk-finish, and exotic colors for artists, sculptors, and Indian festival craft — from Ganesh idols to bespoke installations.",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
    colSpan: false,
  },
  {
    title: "Footwear & Wearables",
    description:
      "Flexible TPU with 500–1000% elongation for shoes, custom soles, and wearable accessories.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    colSpan: false,
  },
];

function ImageHeader({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="w-full h-full overflow-hidden"
      style={{ minHeight: "12rem" }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover/bento:scale-105"
        style={{ display: "block" }}
      />
    </div>
  );
}

export default function IndustriesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false });

  return (
    <div ref={ref}>
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.75 }}
        className="text-center mb-4"
      >
        <h2 className="split-heading text-xl md:text-xl font-light tracking-tighter">
          Industries We <span className="heading-accent">Serve</span>
        </h2>
        <h3 className="text-3xl md:text-4xl mt-4">Wherever ideas need to take shape.</h3>
      </motion.div>

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-center text-sm md:text-base mb-10 max-w-2xl mx-auto"
        style={{ color: "var(--text-page-muted)" }}
      >
        Our filaments and printing services support workflows across a wide range of industries, from solo makers in their garages to teams running production lines.
      </motion.p>

      {/* Bento grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, delay: 0.25 }}
      >
        <BentoGrid>
          {industries.map((industry) => (
            <BentoGridItem
              key={industry.title}
              title={industry.title}
              description={industry.description}
              header={<ImageHeader src={industry.image} alt={industry.title} />}
              className={industry.colSpan ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </motion.div>
    </div>
  );
}
