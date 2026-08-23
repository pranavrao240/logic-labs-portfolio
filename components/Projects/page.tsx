"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data";
import { ProjectScrollItem } from "./components";

const SectionHeader: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });

  return (
    <div ref={ref} className="text-center w-full max-w-3xl mx-auto px-6 mb-6">
      <h2 className="split-heading text-5xl md:text-7xl font-light tracking-tighter mb-5 overflow-hidden whitespace-nowrap">
        {["Featured", "Projects"].map((word, i) => (
          <motion.span
            key={word}
            className={`inline-block mr-4 ${i === 1 ? "heading-accent" : ""}`}
            initial={{ opacity: 0, y: 52 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 52 }}
            transition={{
              duration: 0.65,
              delay: 0.1 + i * 0.13,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {word}
          </motion.span>
        ))}
      </h2>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
        transition={{ duration: 0.6, delay: 0.36, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-lg md:text-xl max-w-xl mx-auto leading-relaxed pb-10 md:pb-0"
        style={{ color: "var(--text-page-secondary, #64748b)" }}
      >
        Custom software and hardware prototypes delivered with complete source code and explanation.
      </motion.p>
    </div>
  );
};

const ProjectsSection: React.FC = () => (
  <section
    className="site-section relative flex flex-col items-center pt-20 pb-10 overflow-x-hidden"
    id="projects"
  >
    <div className="section-divider mb-14" />
    <SectionHeader />
    <div className="w-full max-w-5xl mx-auto">
      {projects.map((project, i) => (
        <ProjectScrollItem key={project.number} {...project} index={i} />
      ))}
    </div>
  </section>
);

export default ProjectsSection;
