"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ChevronDown,
  ArrowUpRight,
  Check,
  Copy,
} from "lucide-react";
import { PATHS, type PathKey, type FieldDef } from "./ContactPaths";

//Contact details

const CONTACT_DETAILS = [
  {
    icon: MapPin,
    label: "Address",
    lines: [
      "Logic Labs",
      "Nashik, Maharashtra, India",
    ],
  },
  {
    icon: Mail,
    label: "Email",
    lines: [
      "support@logiclabs.in — General",
      "projects@logiclabs.in — Software Projects",
      "hardware@logiclabs.in — Hardware & IoT",
    ],
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    lines: [
      "+91 93598 78663",
    ],
  },
  { icon: Clock, label: "Hours", lines: ["Mon – Sat, 10:00 AM – 7:00 PM IST"] },
];

//  SelectField

function SelectField({
  label,
  name,
  options,
  value,
  onChange,
}: {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-[10px] uppercase tracking-widest font-mono"
        style={{ color: "black" }}
      >
        {label}
      </label>
      <div ref={ref} className="relative">
        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          className="w-full flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm text-left transition-colors duration-200"
          style={{
            background: "rgba(224,242,255,0.22)",
            border: `1px solid ${open ? "black" : " rgba(224,242,255,0.22)"}`,
            color: "grey",
            fontFamily: "inherit",
          }}
        >
          <span className="truncate pr-2">{value || `Select…`}</span>
          <ChevronDown
            size={14}
            style={{
              flexShrink: 0,
              color: "grey",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
            }}
          />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -4, scaleY: 0.95 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -4, scaleY: 0.95 }}
              transition={{ duration: 0.13 }}
              className="absolute left-0 right-0 top-full mt-1 rounded-xl overflow-hidden z-50"
              style={{
                background: "hsl(217 33% 13%)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.50)",
                transformOrigin: "top",
              }}
            >
              {options.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                  }}
                  className="w-full text-left px-3.5 py-2 text-xs transition-colors duration-150"
                  style={{
                    color:
                      opt === value
                        ? "var(--primary-color)"
                        : "rgba(255,255,255,0.72)",
                    background:
                      opt === value ? "rgba(57,125,187,0.12)" : "transparent",
                    fontFamily: "inherit",
                  }}
                  onMouseEnter={(e) => {
                    if (opt !== value)
                      (e.target as HTMLElement).style.background =
                        "rgba(255,255,255,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.background =
                      opt === value ? "rgba(57,125,187,0.12)" : "transparent";
                  }}
                >
                  {opt}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

//TextField

function TextField({
  def,
  value,
  onChange,
}: {
  def: FieldDef;
  value: string;
  onChange: (val: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const baseStyle: React.CSSProperties = {
    background: "rgba(224,242,255,0.22)",
    border: `1px solid ${focused ? "black" : "rgba(224,242,255,0.22)"}`,
    color: "black",
    borderRadius: "0.5rem",
    padding: "5px 5px",
    width: "100%",
    outline: "none",
    fontSize: "0.875rem",
    transition: "border-color 0.2s ease",
    fontFamily: "inherit",
  };
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] uppercase tracking-widest font-mono">
        {def.label}
        {def.required && (
          <span style={{ color: "var(--primary-color)" }}> *</span>
        )}
      </label>
      {def.type === "textarea" ? (
        <textarea
          name={def.name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={def.placeholder}
          rows={2}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{ ...baseStyle, resize: "none" }}
        />
      ) : (
        <input
          type={def.type}
          name={def.name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={def.placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={baseStyle}
        />
      )}
    </div>
  );
}

//ContactCard

function ContactCard({
  item,
  delay,
  inView,
}: {
  item: (typeof CONTACT_DETAILS)[0];
  delay: number;
  inView: boolean;
}) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.4, delay }}
      className="flex gap-3 p-3 rounded-lg"
      style={{
        // background: "rgba(224,242,255,0.22)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center mt-0.5"
        style={{
          // background: "rgba(57,125,187,0.10)",
          border: "1px solid rgba(57,125,187,0.18)",
        }}
      >
        <Icon size={13} style={{ color: "#397dbb" }} strokeWidth={1.5} />
      </div>
      <div>
        <p className="text-[9px] uppercase tracking-widest font-mono mb-0.5">
          {item.label}
        </p>
        {item.lines.map((line, i) => (
          <div key={i} className="flex items-center gap-1">
            <p className="text-[11px] leading-relaxed">{line}</p>
            {(item.label === "Phone / WhatsApp" || item.label === "Email") && (
              <button
                onClick={() => navigator.clipboard.writeText(line)}
                className="p-1 hover:bg-gray-200 rounded"
                aria-label={
                  item.label === "Phone / WhatsApp"
                    ? "Copy phone"
                    : "Copy email"
                }
              >
                <Copy size={12} />
              </button>
            )}
          </div>
        ))}
        {/* Conditional copy button for address */}
        {item.label === "Address" && (
          <button
            onClick={() => navigator.clipboard.writeText(item.lines.join("\n"))}
            className="p-1 hover:bg-gray-200 rounded mt-1"
            aria-label="Copy address"
          >
            <Copy size={12} />
          </button>
        )}
      </div>
    </motion.div>
  );
}
//form panel

export function FormPanel({
  activePath,
  formData,
  onField,
  onSubmit,
  status,
}: {
  activePath: PathKey;
  formData: Record<string, string>;
  onField: (name: string, val: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  status: "idle" | "sending" | "sent" | "error";
}) {
  const path = PATHS.find((p) => p.key === activePath)!;

  const topFields = path.fields.slice(0, 2);
  const restFields = path.fields.slice(2);

  const gridFields: FieldDef[] = [];
  const fullFields: FieldDef[] = [];
  restFields.forEach((f) => {
    if (f.type === "textarea") fullFields.push(f);
    else gridFields.push(f);
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activePath}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -14 }}
        transition={{ duration: 0.35 }}
        className="rounded-2xl overflow-hidden"
        style={{
          background: "rgba(224,242,255,0.22)",
          border: `1px solid ${path.borderColor}`,
          boxShadow:
            "inset 0 -1px hsl(217,33%,10%), 0 4px 24px rgba(0,0,0,0.30)",
        }}
      >
        {/* Header */}
        <div
          className="px-6 pt-4 pb-4"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p
            className="text-[12px] font-mono tracking-[0.25em] uppercase mb-1"
            // style={{ color: "rgba(255,255,255,0.30)" }}
          >
            {path.brand}
          </p>
          <h3
            className="text-xl md:text-xl font-light tracking-tighter"
            // style={{ color: "rgba(255,255,255,0.92)" }}
          >
            {path.label}
          </h3>
          <p
            className="text-xs mt-1"
            // style={{ color: "rgba(255,255,255,0.40)" }}
          >
            {path.tagline}
          </p>
        </div>

        {/* Fields */}
        <form onSubmit={onSubmit} className="px-6 py-1 flex flex-col gap-4">
          {/* Row 1: Name + Email */}
          <div className="grid grid-cols-2 gap-2">
            {topFields.map((def) => (
              <TextField
                key={def.name}
                def={def}
                value={formData[def.name] ?? ""}
                onChange={(val) => onField(def.name, val)}
              />
            ))}
          </div>

          {gridFields.length > 0 && (
            <div className="grid grid-cols-2 gap-2">
              {gridFields.map((def) =>
                def.type === "select" ? (
                  <SelectField
                    key={def.name}
                    label={def.label}
                    name={def.name}
                    options={def.options!}
                    value={formData[def.name] ?? ""}
                    onChange={(val) => onField(def.name, val)}
                  />
                ) : (
                  <TextField
                    key={def.name}
                    def={def}
                    value={formData[def.name] ?? ""}
                    onChange={(val) => onField(def.name, val)}
                  />
                ),
              )}
            </div>
          )}

          {/* Textarea fields — full width */}
          {fullFields.map((def) => (
            <TextField
              key={def.name}
              def={def}
              value={formData[def.name] ?? ""}
              onChange={(val) => onField(def.name, val)}
            />
          ))}

          <p
            className="text-[10px] font-mono"
            // style={{ color: "rgba(255,255,255,0.24)" }}
          >
            ⏱ Typical response: {path.responseTime}
          </p>

          <motion.button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            whileHover={status === "idle" ? { scale: 1.02, y: -1 } : {}}
            whileTap={status === "idle" ? { scale: 0.97 } : {}}
            className="cta-button w-full justify-center mb-10"
            style={{
              opacity: status === "sending" ? 0.7 : 1,
              cursor: status === "sending" ? "wait" : "pointer",
            }}
          >
            <span className="btn-label flex items-center gap-2">
              {status === "sent" ? (
                <>
                  <Check size={15} /> Sent!
                </>
              ) : status === "error" ? (
                "Error — try again"
              ) : status === "sending" ? (
                "Sending…"
              ) : (
                path.cta
              )}
            </span>
            <span className="btn-icon">
              {status === "sent" ? (
                <Check size={18} />
              ) : (
                <ArrowUpRight size={18} />
              )}
            </span>
          </motion.button>

          {status === "error" && (
            <p className="text-xs text-center" style={{ color: "#f87171" }}>
              Something went wrong. Email us directly at {path.toEmail}
            </p>
          )}
        </form>
      </motion.div>
    </AnimatePresence>
  );
}

// InfoPanel

export function InfoPanel({ activePath }: { activePath: PathKey }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });

  return (
    <div ref={ref} className="flex flex-col gap-3">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="rounded-2xl px-5 py-10 flex flex-col gap-3 "
        style={{
          background: "rgba(224,242,255,0.22)",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow:
            "inset 0 -1px hsl(217,33%,10%), 0 4px 16px rgba(0,0,0,0.20)",
        }}
      >
        <p
          className="text-lg font-mono tracking-[0.25em] uppercase"
          // style={{ color: "rgba(255,255,255,0.30)" }}
        >
          Reach us directly
        </p>
        {CONTACT_DETAILS.map((item, i) => (
          <ContactCard
            key={item.label}
            item={item}
            delay={0.1 + i * 0.06}
            inView={inView}
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {activePath === "filament" && (
          <motion.div
            initial={{ opacity: 0, y: 8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: 8, height: 0 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-xl p-[1px] overflow-hidden"
          >
            {/* The infinite rotating brand gradient border */}
            <div
              className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite]"
              style={{
                background:
                  "conic-gradient(from 90deg at 50% 50%, #f57c20 0%, #1a73e8 25%, #f57c20 50%, #1a73e8 75%, #f57c20 100%)",
              }}
            />

            {/* Content container */}
            <div
              className="relative rounded-[11px] p-4 w-full h-full"
              style={{
                background: "white",
              }}
            >
              <p
                className="text-[10px] font-mono tracking-widest uppercase mb-1.5"
                style={{ color: "var(--primary-color)" }}
              >
                Under 10 kg? Shop direct
              </p>
              <p className="text-[11px] mb-2.5" style={{ color: "black" }}>
                Fastest route for small orders:
              </p>
              <div className="flex flex-col gap-1.5">
                {["fibreel.com", "Amazon India", "FibReel Facebook Store"].map(
                  (store) => (
                    <a
                      key={store}
                      href="#"
                      className="text-[11px] flex items-center gap-1.5 transition-colors duration-150"
                      style={{ color: "black" }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "black")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color =
                          "rgba(36, 28, 78, 0.94)")
                      }
                    >
                      <ArrowUpRight size={11} />
                      {store}
                    </a>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-[10px] text-center font-light italic px-2"
        style={{ color: "rgba(255,255,255,0.18)" }}
      >
        Every great print starts with a conversation. Let's start ours.
      </motion.p>
    </div>
  );
}
