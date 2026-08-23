"use client";

import React from "react";
import Image from "next/image";
import { LocationCard } from "./LocationCard";

const DOMAINS = [
  {
    name: "Software Projects",
    desc: "Responsive web apps, mobile applications, machine learning, and AI models.",
  },
  {
    name: "Hardware Projects",
    desc: "Embedded systems, IoT, robotics, automation, and sensor integrations.",
  },
];

const BADGES = ["ISO 9001:2015", "CE", "RoHS", "Made in India 🇮🇳"];

export function Footer() {
  return (
    <footer className="site-section">
      {/* Top divider */}
      <div
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(15,23,42,0.18) 20%, rgba(15,23,42,0.18) 80%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="pb-10 justify-center">
          <LocationCard />
        </div>
        {/* ── Main 3-col grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {/* Col 1 — Company */}
          <div className="flex flex-col gap-4">
            {/* Logo + name */}
            <div className="flex items-center gap-2.5">
              <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" fill="#0f172a" />
                <polygon points="50,12 82,31 82,69 50,88 18,69 18,31" fill="#1e293b" />
                <path d="M40 32 V68 H60" stroke="#f57c20" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-lg font-bold tracking-tight leading-none" style={{ color: "#0f172a" }}>
                Logic<span style={{ color: "#f57c20" }}>Labs</span>
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-page-muted)" }}
            >
              Specializing in custom BE &amp; Diploma Engineering Projects.
              High-quality Software &amp; Hardware prototyping with full documentation.
            </p>
            <div className="flex flex-wrap gap-2">
              {BADGES.map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-mono tracking-wide px-2.5 py-1 rounded-md"
                  style={{
                    color: "var(--text-page-muted)",
                    border: "1px solid rgba(15,23,42,0.14)",
                    background: "rgba(15,23,42,0.04)",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2 — Project Domains */}
          <div className="flex flex-col gap-4">
            <p
              className="text-sm font-mono tracking-[0.22em] uppercase font-semibold"
              style={{ color: "var(--text-page-primary)" }}
            >
              Project Domains
            </p>
            <div className="flex flex-col gap-4">
              {DOMAINS.map((domain) => (
                <div
                  key={domain.name}
                  className="flex flex-col gap-0.5"
                >
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--primary-color)" }}
                  >
                    {domain.name}
                  </span>
                  <span
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--text-page-muted)" }}
                  >
                    {domain.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3 — Tagline + credits */}
          <div className="flex flex-col gap-4">
            <p
              className="text-sm font-mono tracking-[0.22em] uppercase font-semibold"
              style={{ color: "var(--text-page-primary)" }}
            >
              The mission
            </p>
            <p
              className="text-sm font-light italic leading-relaxed"
              style={{ color: "var(--text-page-muted)" }}
            >
              Smart Projects,
              <br />
              Strong Future.
            </p>
            <div
              className="mt-auto pt-4"
              style={{ borderTop: "1px solid rgba(15,23,42,0.10)" }}
            >
              <p
                className="text-xs"
                style={{ color: "var(--text-page-muted)", opacity: 0.7 }}
              >
                Managed &amp; created by{" "}
                <a
                  href="https://swado.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200"
                  style={{
                    color: "var(--primary-color)",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  Swado Tech
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="mt-10 pt-5 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(15,23,42,0.10)" }}
        >
          <p
            className="text-xs font-mono"
            style={{ color: "var(--text-page-muted)", opacity: 0.55 }}
          >
            © {new Date().getFullYear()} Logic Labs. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
}
