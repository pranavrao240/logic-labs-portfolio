"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { services } from "@/data";
import { ArrowUpRight } from "lucide-react";

const ServiceImage: React.FC<{ service: (typeof services)[number] }> = ({
  service,
}) => (
  <div className="w-full max-w-sm group">
    <div
      className="relative overflow-hidden rounded-2xl aspect-square"
      style={{
        background: "var(--background-card)",
        border: "1px solid var(--border-default)",
      }}
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ opacity: 0.88 }}
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            `https://picsum.photos/seed/${service.id}/400/400`;
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(15,23,42,0.30) 0%, transparent 55%)",
        }}
      />
      <div
        className="absolute bottom-4 right-4 w-9 h-9 rounded-full flex items-center justify-center"
        style={{
          background: "var(--background-card)",
          border: "1px solid var(--border-default)",
          backdropFilter: "blur(8px)",
        }}
      >
        <span
          className="text-xs font-mono"
          style={{ color: "var(--text-muted)" }}
        >
          0{service.id}
        </span>
      </div>
    </div>
  </div>
);

const ServiceText: React.FC<{
  service: (typeof services)[number];
  align: "left" | "right";
}> = ({ service, align }) => (
  <div
    className={`w-full flex flex-col gap-5 ${align === "right"
      ? "items-start text-left md:items-end md:text-right"
      : "items-start text-left"
      }`}
  >
    <span
      className="text-[11px] tracking-[0.25em] uppercase font-mono"
      style={{ color: "var(--text-page-muted)" }}
    >
      Service / 0{service.id}
    </span>
    <h3
      className="text-2xl md:text-[2rem] leading-[1.15] font-light split-heading"
      style={{ letterSpacing: "-0.02em" }}
    >
      {service.title}
    </h3>
    <div
      className={`h-px w-16 rounded-full self-start ${align === "right" ? "md:self-end" : ""}`}
      style={{ background: "var(--divider-mid)" }}
    />
    <p
      className="text-lg leading-[1.75]"
      style={{ color: "var(--text-page-secondary)" }}
    >
      {service.description}
    </p>
    <a href="#contact" className="cta-button text-sm mt-2 group">
      {/* <span className="inline-block transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:translate-x-[140%] group-hover:opacity-0">
        Learn More
      </span> */}
      <span className="btn-label">Learn More</span>
      {/* <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center opacity-0 -translate-x-[90px] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:translate-x-[-50%] group-hover:opacity-100">
        <ArrowUpRight size={26} />
      </span> */}
      <span className="btn-icon">
        <ArrowUpRight size={26} />
      </span>
    </a>
  </div>
);

const MobileDivider: React.FC = () => (
  <div className="flex items-center gap-0 md:hidden w-full my-2 relative h-10">
    <div
      className="flex-1 h-px"
      style={{
        background:
          "linear-gradient(to right, transparent, var(--spine-mid-color, rgba(57,125,187,0.35)))",
      }}
    />
    <div className="relative flex-shrink-0 w-3 h-3">
      <div
        className="w-3 h-3 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(57,125,187,0.9) 0%, rgba(57,125,187,0.25) 60%, transparent 100%)",
          boxShadow: "0 0 12px 4px var(--node-shadow, rgba(57,125,187,0.3))",
        }}
      />
    </div>
    <div
      className="flex-1 h-px"
      style={{
        background:
          "linear-gradient(to left, transparent, var(--spine-mid-color, rgba(57,125,187,0.35)))",
      }}
    />
  </div>
);

const DesktopSpine: React.FC<{ isInView: boolean }> = ({ isInView }) => (
  <div className="hidden md:flex relative flex-col items-center self-stretch flex-shrink-0">
    <div className="absolute inset-x-0 inset-y-0 flex justify-center">
      <div
        className="w-px h-full"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, var(--spine-glow-color) 20%, var(--spine-mid-color) 50%, var(--spine-glow-color) 80%, transparent 100%)`,
        }}
      />
    </div>
    <motion.div
      className="relative z-10 my-auto"
      initial={{ opacity: 0, scale: 0 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{ duration: 0.45, delay: 0.3 }}
    >
      <div
        className="w-3 h-3 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(57,125,187,0.9) 0%, rgba(57,125,187,0.25) 60%, transparent 100%)",
          boxShadow: "0 0 12px 4px var(--node-shadow)",
        }}
      />
    </motion.div>
  </div>
);

const ServiceRow: React.FC<{
  service: (typeof services)[number];
  isLast: boolean;
}> = ({ service, isLast }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  const isLeft = service.side === "left";

  return (
    <div ref={ref} className="w-full">
      <div className="flex flex-col gap-5 md:hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ServiceImage service={service} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        >
          <ServiceText service={service} align="left" />
        </motion.div>
        {!isLast && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <MobileDivider />
          </motion.div>
        )}
      </div>

      <div
        className="hidden md:grid items-center mb-24 last:mb-0"
        style={{ gridTemplateColumns: "minmax(0,1fr) 64px minmax(0,1fr)" }}
      >
        <motion.div
          className="flex justify-end pr-10"
          initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: isLeft ? -80 : 80 }
          }
          transition={{
            duration: 0.75,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.05,
          }}
        >
          {isLeft ? (
            <ServiceImage service={service} />
          ) : (
            <ServiceText service={service} align="right" />
          )}
        </motion.div>

        <DesktopSpine isInView={isInView} />

        <motion.div
          className="flex justify-start pl-10"
          initial={{ opacity: 0, x: isLeft ? 80 : -80 }}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: isLeft ? 80 : -80 }
          }
          transition={{
            duration: 0.75,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.15,
          }}
        >
          {isLeft ? (
            <ServiceText service={service} align="left" />
          ) : (
            <ServiceImage service={service} />
          )}
        </motion.div>
      </div>
    </div>
  );
};

const SectionHeading: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="w-full max-w-4xl mx-auto text-center mb-16 md:mb-24"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="split-heading text-5xl md:text-7xl font-light tracking-tighter mb-6">
        Our <span className="heading-accent">Services</span>
      </h2>
      <p
        className="text-xl leading-relaxed max-w-3xl mx-auto"
        style={{ color: "var(--text-page-secondary)" }}
      >
        Comprehensive solutions for rapid prototyping, precision manufacturing,
        and industrial-grade 3D printing workflows.
      </p>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => (
  <section
    className="site-section relative flex flex-col items-center px-6 md:px-8 py-16 md:py-28"
    id="services"
  >
    <div className="relative z-10 w-full max-w-[1400px] mx-auto">
      <SectionHeading />
      <div className="flex flex-col gap-10 md:block">
        {services.map((service, i) => (
          <ServiceRow
            key={service.id}
            service={service}
            isLast={i === services.length - 1}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
