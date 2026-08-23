"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BentoGrid, BentoGridItem } from "./bento-grid";

const industries = [
  {
    title: "Web Development",
    description:
      "Custom responsive websites, full-stack portals, and web-based applications using React, Node.js, and modern frameworks.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
    colSpan: false,
  },
  {
    title: "Android App Development",
    description:
      "Feature-rich mobile applications developed with native Android tools or Flutter, integrated with APIs and secure databases.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
    colSpan: false,
  },
  {
    title: "Machine Learning & AI",
    description:
      "Intelligent projects incorporating computer vision, predictive analytics, natural language processing, and deep learning algorithms.",
    image:
      "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&q=80",
    colSpan: false,
  },
  {
    title: "IoT & Embedded Systems",
    description:
      "Hardware-software integrated prototypes using Arduino, ESP32, Raspberry Pi, various sensors, and automation actuators.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    colSpan: true,
  },
  {
    title: "Java / Python Applications",
    description:
      "Robust desktop applications, automation scripts, and server-side utilities developed to precise specifications.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80",
    colSpan: false,
  },
  {
    title: "DBMS & Networking",
    description:
      "Relational and non-relational database design, secure cloud storage integration, and network simulation setups.",
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
    colSpan: false,
  },
  {
    title: "OS & System Programming",
    description:
      "Low-level driver configurations, process scheduling algorithms, and operating system simulation utilities.",
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80",
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
          Project <span className="heading-accent">Domains</span>
        </h2>
        <h3 className="text-3xl md:text-4xl mt-4">Smart project solutions for a strong future.</h3>
      </motion.div>

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-center text-sm md:text-base mb-10 max-w-2xl mx-auto"
        style={{ color: "var(--text-page-muted)" }}
      >
        We support a wide array of technology domains, delivering robust software and hardware solutions tailored to academic and real-world needs.
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
