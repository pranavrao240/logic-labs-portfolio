"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { teamMembers } from "@/data";
import { cardStyle, cardHoverStyle } from "./AboutShared";

export function TeamCard({
  member,
  index,
  onEnter,
  onLeave,
}: {
  member: (typeof teamMembers)[0];
  index: number;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
        },
      }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseEnter={() => {
        setHovered(true);
        onEnter();
      }}
      onMouseLeave={() => {
        setHovered(false);
        onLeave();
      }}
      className="relative rounded-2xl p-6 overflow-hidden cursor-default"
      style={hovered ? { ...cardStyle, ...cardHoverStyle } : cardStyle}
    >
      <div
        className="absolute top-0 left-4 right-4 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(57,125,187,0.3), transparent)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
      <div className="relative mb-5 aspect-square rounded-xl overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{
            transform: hovered ? "scale(1.06)" : "scale(1)",
            opacity: hovered ? 0.9 : 0.78,
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(15,23,42,0.08)" }}
        />
      </div>
      <h3
        className="text-xl font-light tracking-tighter mb-1"
        style={{ color: "var(--text-primary)" }}
      >
        {member.name}
      </h3>
      <p
        className="text-xs uppercase tracking-widest mb-3"
        style={{ color: "var(--text-muted)" }}
      >
        {member.role}
      </p>
      <div
        className="w-8 h-px mb-3"
        style={{ background: "var(--border-hover)" }}
      />
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        {member.bio}
      </p>
    </motion.div>
  );
}

export function MobileTeamCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const goTo = (next: number, dir: 1 | -1) => {
    setDirection(dir);
    setCurrent(next);
  };
  const prev = () =>
    goTo((current - 1 + teamMembers.length) % teamMembers.length, -1);
  const next = () => goTo((current + 1) % teamMembers.length, 1);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 150 : -150,
      y: -80,
      opacity: 0,
      rotate: dir > 0 ? 6 : -6,
      scale: 0.88,
    }),
    center: {
      x: 0,
      y: 0,
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] as const },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      y: 55,
      opacity: 0,
      rotate: dir > 0 ? -4 : 4,
      scale: 0.94,
      transition: { duration: 0.32, ease: [0.4, 0, 1, 1] as const },
    }),
  };

  const member = teamMembers[current];

  return (
    <div className="md:hidden relative overflow-hidden">
      <div className="flex justify-center gap-2 mb-5">
        {teamMembers.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              background:
                i === current
                  ? "var(--primary-color)"
                  : "var(--text-page-muted)",
              transform: i === current ? "scale(1.3)" : "scale(1)",
              opacity: i === current ? 1 : 0.45,
            }}
          />
        ))}
      </div>
      <div className="relative" style={{ minHeight: 460 }}>
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="rounded-2xl p-6 overflow-hidden"
            style={cardStyle}
          >
            <div
              className="relative mb-5 rounded-xl overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                style={{ opacity: 0.82 }}
              />
            </div>
            <h3
              className="text-xl font-light tracking-tighter mb-1"
              style={{ color: "var(--text-primary)" }}
            >
              {member.name}
            </h3>
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: "var(--text-muted)" }}
            >
              {member.role}
            </p>
            <div
              className="w-8 h-px mb-3"
              style={{ background: "var(--border-hover)" }}
            />
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {member.bio}
            </p>
            <div className="flex items-center gap-2 justify-end mt-5">
              {[
                { fn: prev, Icon: ChevronLeft },
                { fn: next, Icon: ChevronRight },
              ].map(({ fn, Icon }, i) => (
                <button
                  key={i}
                  onClick={fn}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 active:scale-90"
                  style={{
                    border: "1px solid var(--border-default)",
                    background: "var(--background-card-hover)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function DesktopTeamLayout({
  isInView,
  onEnter,
  onLeave,
}: {
  isInView: boolean;
  onEnter: (i: number) => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
      className="hidden md:grid md:grid-cols-3 gap-6"
    >
      {teamMembers.map((member, i) => (
        <TeamCard
          key={member.name}
          member={member}
          index={i}
          onEnter={() => onEnter(i)}
          onLeave={onLeave}
        />
      ))}
    </motion.div>
  );
}
