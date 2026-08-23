
"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
];

const LIGHT = {
  bg: "white",
  bgScrolled: "rgba(189, 189, 189, 0.2)",
  border: "rgba(15,23,42,0.10)",
  text: "var(--text-page-primary)",
  muted: "var(--text-page-muted)",
  drawerBg: "rgba(210,222,238,0.97)",
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-[100]"
        style={{
          background: scrolled ? LIGHT.bgScrolled : LIGHT.bg,
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: `1px solid ${LIGHT.border}`,
          transition: "background 0.35s ease",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-[68px] flex items-center justify-between gap-4">

          <a
            href="#"
            style={{ textDecoration: "none" }}
            className="select-none flex-shrink-0 flex items-center gap-3"
          >
            <div className="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" fill="#0f172a" />
                <polygon points="50,12 82,31 82,69 50,88 18,69 18,31" fill="#1e293b" />
                <path d="M40 32 V68 H60" stroke="#f57c20" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight leading-none" style={{ color: "#0f172a" }}>
                  Logic<span style={{ color: "#f57c20" }}>Labs</span>
                </span>
                <span className="text-[9px] font-mono tracking-widest uppercase mt-0.5" style={{ color: "rgba(15,23,42,0.45)" }}>
                  INNOVATE · BUILD · SOLVE
                </span>
              </div>
            </div>
            <span
              className="hidden lg:block w-px h-8 flex-shrink-0"
              style={{ background: "rgba(15,23,42,0.12)" }}
            />
            <div className="hidden lg:flex flex-col justify-center gap-1">
              <span
                className="text-xs font-mono tracking-[0.06em] uppercase leading-none font-bold"
                style={{ color: "var(--primary-color)" }}
              >
                Reliable · Trusted · Original
              </span>
            </div>
          </a>


          {/* CENTER: Nav links + brand logos */}
          <div className="hidden md:flex items-center gap-2 flex-1 justify-center">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative px-3 py-2 rounded-lg transition-colors duration-200 whitespace-nowrap"
                  style={{
                    color: isActive ? "var(--primary-color)" : LIGHT.muted,
                    background: isActive ? "rgba(57,125,187,0.10)" : "transparent",
                    textDecoration: "none",
                    fontWeight: isActive ? 600 : 500,
                    fontSize: "0.82rem",
                    fontFamily: "monospace",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLAnchorElement).style.color = LIGHT.text;
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLAnchorElement).style.color = LIGHT.muted;
                  }}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: "var(--primary-color)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                </a>
              );
            })}

            <span
              className="w-px h-6 mx-2 flex-shrink-0"
              style={{ background: "rgba(15,23,42,0.12)" }}
            />

            <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 text-slate-700">
              Software
            </span>

            <span className="w-2 flex-shrink-0" />

            <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#f57c20]/10 text-[#d86008]">
              Hardware
            </span>
          </div>

          {/* RIGHT: CTA */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-mono tracking-widest uppercase font-medium transition-all duration-200"
              style={{
                background: "var(--primary-color)",
                color: "#fff",
                border: "1px solid rgba(57,125,187,0.5)",
                textDecoration: "none",
                boxShadow: "0 2px 12px rgba(57,125,187,0.18)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "var(--primary-color-hover)";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "var(--primary-color)";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(0)";
              }}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((p) => !p)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200"
            style={{
              background: "rgba(15,23,42,0.07)",
              border: "1px solid rgba(15,23,42,0.12)",
              color: LIGHT.text,
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[68px] left-0 right-0 z-[99] md:hidden"
            style={{
              background: LIGHT.drawerBg,
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: `1px solid ${LIGHT.border}`,
            }}
          >
            <div className="flex flex-col px-6 py-3 gap-1">
              <div
                className="px-4 py-2 text-[10px] font-mono uppercase"
                style={{ color: "var(--primary-color)" }}
              >
                Reliable · Trusted · Premium
              </div>
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-sm font-mono tracking-widest uppercase rounded-lg transition-colors duration-150"
                    style={{
                      color: isActive ? "var(--primary-color)" : LIGHT.muted,
                      background: isActive ? "rgba(57,125,187,0.10)" : "transparent",
                      fontWeight: isActive ? 600 : 400,
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-1 px-4 py-3 text-sm font-mono tracking-widest uppercase rounded-lg text-center font-medium"
                style={{
                  background: "var(--primary-color)",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}