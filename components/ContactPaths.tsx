"use client";

import React from "react";
import { Code, Cpu, Handshake, LucideIcon } from "lucide-react";

// Types

export type PathKey = "print" | "filament" | "partnership";

export interface FieldDef {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

export interface InquiryPath {
  key: PathKey;
  icon: LucideIcon;
  label: string;
  brand: string;
  tagline: string;
  accentColor: string;
  borderColor: string;
  fields: FieldDef[];
  responseTime: string;
  cta: string;
  toEmail: string;
}

// Path Data

export const PATHS: InquiryPath[] = [
  {
    key: "print",
    icon: Code,
    label: "Software Development Projects",
    brand: "Software",
    tagline: "Get custom web applications, mobile apps, Machine Learning, or AI systems.",
    accentColor: "#397dbb",
    borderColor: "hsla(205,89%,46%,.22)",
    toEmail: "projects@logiclabs.in",
    responseTime: "Within 24 working hours",
    cta: "Request a Software Project Quote",
    fields: [
      {
        name: "name",
        label: "Your Name",
        type: "text",
        placeholder: "Full name",
        required: true,
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "you@example.com",
        required: true,
      },
      {
        name: "phone",
        label: "Phone / WhatsApp",
        type: "tel",
        placeholder: "+91 98XXX XXXXX",
      },
      {
        name: "material",
        label: "Preferred Technology",
        type: "select",
        options: [
          "Not sure — advise me",
          "React.js / Node.js Full Stack",
          "Python / Machine Learning / AI",
          "Android / Flutter Mobile App",
          "Java / Python Desktop Application",
          "DBMS / SQL / Networking Simulation",
        ],
      },
      {
        name: "quantity",
        label: "Project Scope",
        type: "select",
        options: [
          "Academic Mini / Final Year Project",
          "Startup MVP / Commercial Application",
          "Custom Software Prototype / Scripting",
        ],
      },
      {
        name: "message",
        label: "Project Requirements",
        type: "textarea",
        placeholder:
          "Describe your project requirements. List key features, databases, or modules you need. You can share syllabus/guidelines after we connect.",
        required: true,
      },
    ],
  },
  {
    key: "filament",
    icon: Cpu,
    label: "Hardware & IoT Projects",
    brand: "Hardware",
    tagline: "Embedded systems, IoT prototypes, robotics, automation & sensor integration.",
    accentColor: "#2f6da5",
    borderColor: "hsla(205,72%,40%,.22)",
    toEmail: "hardware@logiclabs.in",
    responseTime: "Within 24 working hours",
    cta: "Request a Hardware Project Quote",
    fields: [
      {
        name: "name",
        label: "Your Name",
        type: "text",
        placeholder: "Full name",
        required: true,
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "you@example.com",
        required: true,
      },
      {
        name: "phone",
        label: "Phone / WhatsApp",
        type: "tel",
        placeholder: "+91 98XXX XXXXX",
      },
      {
        name: "orderType",
        label: "Preferred Platform",
        type: "select",
        options: [
          "Not sure — advise me",
          "Arduino (Uno/Nano/Mega)",
          "ESP32 / ESP8266 (WiFi / Bluetooth)",
          "Raspberry Pi / Single Board Computer",
          "Robotics (Motors, Chassis, Sensors)",
          "Automation (Relays, Plcs)",
        ],
      },
      {
        name: "filamentType",
        label: "Project Scope",
        type: "select",
        options: [
          "Academic Mini / Final Year Project",
          "Industrial Prototype / IoT MVP",
          "Custom Hardware Prototype",
        ],
      },
      {
        name: "message",
        label: "Project Requirements",
        type: "textarea",
        placeholder:
          "Describe your hardware project. List sensors, actuators, or microcontrollers you prefer, or describe the problem statement.",
        required: true,
      },
    ],
  },
  {
    key: "partnership",
    icon: Handshake,
    label: "General Inquiries & Handover",
    brand: "General",
    tagline: "Commercial handovers, startup deployment, class batches, viva support, or other questions.",
    accentColor: "#1a5a8a",
    borderColor: "hsla(205,60%,35%,.22)",
    toEmail: "support@logiclabs.in",
    responseTime: "Within 24 working hours",
    cta: "Contact Support / Inquiry",
    fields: [
      {
        name: "name",
        label: "Your Name",
        type: "text",
        placeholder: "Full name",
        required: true,
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "you@example.com",
        required: true,
      },
      {
        name: "phone",
        label: "Phone / WhatsApp",
        type: "tel",
        placeholder: "+91 93598 78663",
      },
      {
        name: "partnershipType",
        label: "Inquiry Type",
        type: "select",
        options: [
          "Commercial / Startup Proposal",
          "Academic Batch Registration",
          "Technical Handover & Deployment",
          "SRS & UML Documentation Support",
          "General Questions",
        ],
      },
      {
        name: "message",
        label: "Tell Us More",
        type: "textarea",
        placeholder:
          "Describe what you need help with. The more context you provide, the faster we can assist you.",
        required: true,
      },
    ],
  },
];

// PathTab

function PathTab({
  path,
  active,
  onClick,
}: {
  path: InquiryPath;
  active: boolean;
  onClick: () => void;
}) {
  const Icon = path.icon;
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex-1 flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all duration-300 text-center shadow-lg"
      style={{
        background: "rgba(224,242,255,0.22)",
        // border: "1px solid hsl(217 40% 28%)", // same on ALL cards
        outline: active ? "3px solid #397dbb" : "none",
        outlineOffset: "3px", // the gap that makes it float
        borderRadius: "12px",
      }}
    >
      <Icon
        size={20}
        style={{ color: "var(--primary-color)" }}
        strokeWidth={1.5}
      />
      <span
        className="text-[11px] font-mono tracking-widest uppercase leading-tight"
      // style={{ color: "rgba(255,255,255,0.92)" }}
      >
        {path.brand}
      </span>
    </button>
  );
}

//PathSelector

export function PathSelector({
  activePath,
  onChange,
}: {
  activePath: PathKey;
  onChange: (key: PathKey) => void;
}) {
  return (
    <div className="flex gap-3 w-full">
      {PATHS.map((p) => (
        <PathTab
          key={p.key}
          path={p}
          active={activePath === p.key}
          onClick={() => onChange(p.key)}
        />
      ))}
    </div>
  );
}
