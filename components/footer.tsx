"use client";

import React from "react";
import Image from "next/image";
import { LocationCard } from "./LocationCard";

const BRANDS = [
  {
    name: "FibReel",
    href: "https://fibreel.com",
    desc: "Premium 3D printing filaments — PLA, PETG, ABS, Carbon, TPU & more.",
  },
  {
    name: "Imprime3D",
    href: "https://imprime3d.in",
    desc: "3D printing & scanning services — prototypes to production runs.",
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
              <Image
                src="/logo_with_text.png"
                alt="Rever Industries"
               width={120}
    height={120}
    className="!w-24 !h-auto"
              />
              
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-page-muted)" }}
            >
              Parent company of{" "}
              <a
                href="https://fibreel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 underline underline-offset-2"
                style={{
                  color: "var(--primary-color)",
                  textDecorationColor: "rgba(57,125,187,0.35)",
                }}
              >
                FibReel
              </a>{" "}
              and{" "}
              <a
                href="https://imprime3d.in"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 underline underline-offset-2"
                style={{
                  color: "var(--primary-color)",
                  textDecorationColor: "rgba(57,125,187,0.35)",
                }}
              >
                Imprime3D
              </a>
              .<br />

              <br />
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

          {/* Col 2 — Brands */}
          <div className="flex flex-col gap-4">
            <p
              className="text-sm font-mono tracking-[0.22em] uppercase font-semibold"
              style={{ color: "var(--text-page-primary)" }}
            >
              Our Brands
            </p>
            <div className="flex flex-col gap-4">
              {BRANDS.map((brand) => (
                <a
                  key={brand.name}
                  href={brand.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-0.5 transition-opacity duration-200"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    className="text-sm font-medium transition-colors duration-200"
                    style={{ color: "var(--primary-color)" }}
                  >
                    {brand.name} ↗
                  </span>
                  <span
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--text-page-muted)" }}
                  >
                    {brand.desc}
                  </span>
                </a>
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
              Building India's 3D future,
              <br />
              layer by layer.
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
            © {new Date().getFullYear()} Rever Industries. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
}
