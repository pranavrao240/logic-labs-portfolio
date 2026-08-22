"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PathSelector, type PathKey } from "./ContactPaths";
import { FormPanel, InfoPanel } from "./Contactform";
import { ContactSectionHeader } from "./contactHeader";
async function submitToAPI(
  path: PathKey,
  fields: Record<string, string>,
): Promise<void> {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path, fields }),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error((data as { error?: string }).error ?? "Submission failed");
  }
}

export function Contact() {
  const [activePath, setActivePath] = useState<PathKey>("print");
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(sectionRef, { once: false, margin: "-80px" });

  const handlePathChange = (key: PathKey) => {
    setActivePath(key);
    setFormData({});
    setStatus("idle");
  };
  const handleField = (name: string, val: string) =>
    setFormData((prev) => ({ ...prev, [name]: val }));
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await submitToAPI(activePath, formData);
      setStatus("sent");
      setFormData({});
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("[Contact]", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="site-section relative flex flex-col items-center px-0 py-10"
    >
      <div className="section-divider mb-16 md:mb-20 w-full" />

     <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8">
        <ContactSectionHeader />
        {/* ── Path tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.45, delay: 0.22 }}
          className="mb-8 pt-2"
        >
          <PathSelector activePath={activePath} onChange={handlePathChange} />
        </motion.div>

        {/* ── Two-column: wide form left, compact info right ── */}
        <div className="grid lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px] gap-6 xl:gap-10 items-stretch">
          <div className="flex flex-col h-full">
            <FormPanel
              activePath={activePath}
              formData={formData}
              onField={handleField}
              onSubmit={handleSubmit}
              status={status}
            />
          </div>
          <div className="flex flex-col h-full">
            <InfoPanel activePath={activePath} />
          </div>
        </div>

        {/* ── Closing line — full width, below both panels ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 pt-8 text-center"
          style={{ borderTop: "1px solid rgba(15,23,42,0.14)" }}
        >
          <p
            className="text-base md:text-lg font-light italic"
            style={{ color: "var(--text-page-muted)" }}
          >
            Every great print starts with a conversation.{" "}
            <span
              style={{
                color: "var(--primary-color)",
                fontStyle: "normal",
                fontWeight: 500,
              }}
            >
              Let's start ours.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
