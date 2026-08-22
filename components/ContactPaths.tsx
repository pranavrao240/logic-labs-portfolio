"use client";

import React from "react";
import { Printer, Package, Handshake, LucideIcon } from "lucide-react";

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
    icon: Printer,
    label: "3D Printing, Scanning & Injection Molding",
    brand: "Imprime3D",
    tagline: "Get a part printed, prototype made, or object scanned.",
    accentColor: "#397dbb",
    borderColor: "hsla(205,89%,46%,.22)",
    toEmail: "print@imprime3d.com",
    responseTime: "Within 24 working hours",
    cta: "Request a Print Quote",
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
      // {
      //   name: "projectType",
      //   label: "Project Type",
      //   type: "select",
      //   options: [
      //     "Single prototype",
      //     "Small batch (2–20 units)",
      //     "Production run (20+)",
      //     "3D Scanning",
      //     "Reverse engineering",
      //     "Other",
      //   ],
      // },
      {
        name: "material",
        label: "Preferred Material",
        type: "select",
        options: [
          "Not sure — suggest for me",
          "PLA",
          "PETG",
          "ABS",
          "ASA",
          "TPU / Flex",
          "Carbon Fibre composite",
          "Nylon",
          "Resin (SLA)",
        ],
      },
      {
        name: "quantity",
        label: "Quantity",
        type: "text",
        placeholder: "e.g. 1 piece or 50 units",
      },
      // {
      //   name: "timeline",
      //   label: "Timeline",
      //   type: "text",
      //   placeholder: "e.g. 2 weeks, urgent, flexible",
      // },
      {
        name: "message",
        label: "Project Description",
        type: "textarea",
        placeholder:
          "Describe your project. Include dimensions, finish requirements, or anything else relevant. STL/OBJ/STEP files can be shared after we connect.",
        required: true,
      },
    ],
  },
  {
    key: "filament",
    icon: Package,
    label: "Filament Orders & Bulk Supply",
    brand: "FibReel",
    tagline:
      "Single spool, wholesale, custom colours, or institutional supply.",
    accentColor: "#2f6da5",
    borderColor: "hsla(205,72%,40%,.22)",
    toEmail: "orders@fibreel.com",
    responseTime: "Within 24 working hours",
    cta: "Request a Filament Quote",
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
        label: "Order Type",
        type: "select",
        options: [
          "Single spool / retail",
          "Bulk (10+ kg)",
          "Institutional / lab supply",
          "Custom colour / formulation",
          "Recurring / subscription",
          "OEM / white-label",
        ],
      },
      {
        name: "filamentType",
        label: "Filament Type",
        type: "select",
        options: [
          "PLA",
          "PLA+",
          "PETG",
          "ABS",
          "ASA",
          "TPU",
          "Carbon FibReel",
          "Nylon",
          "Not sure — advise me",
        ],
      },
      {
        name: "quantity",
        label: "Quantity (kg or spools)",
        type: "text",
        placeholder: "e.g. 10 kg, 50 spools",
      },
      {
        name: "colorFinish",
        label: "Colour / Finish",
        type: "text",
        placeholder: "e.g. Matte black, custom RAL, natural",
      },
      {
        name: "deliveryLocation",
        label: "Delivery Location",
        type: "text",
        placeholder: "City, State / Country",
      },
      {
        name: "message",
        label: "Additional Details",
        type: "textarea",
        placeholder:
          "One-time or recurring? Any spec requirements? Let us know.",
      },
    ],
  },
  {
    key: "partnership",
    icon: Handshake,
    label: "Partnerships, OEM & Distribution",
    brand: "Rever Industries",
    tagline:
      "Distributor proposals, OEM supply, white-label, export, or media.",
    accentColor: "#1a5a8a",
    borderColor: "hsla(205,60%,35%,.22)",
    toEmail: "partners@reverindustries.com",
    responseTime: "2–3 working days",
    cta: "Start a Partnership Conversation",
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
        label: "Business Email",
        type: "email",
        placeholder: "you@company.com",
        required: true,
      },
      {
        name: "company",
        label: "Company & Role",
        type: "text",
        placeholder: "e.g. Acme Plastics — Procurement Head",
      },
      {
        name: "phone",
        label: "Phone / WhatsApp",
        type: "tel",
        placeholder: "+91 98XXX XXXXX",
      },
      {
        name: "partnershipType",
        label: "Nature of Partnership",
        type: "select",
        options: [
          "Distributor / reseller",
          "OEM filament supply",
          "White-label / private label",
          "Export inquiry",
          "Institutional partnership",
          "Media / press / collaboration",
          "Other",
        ],
      },
      {
        name: "region",
        label: "Region / Market",
        type: "text",
        placeholder: "e.g. Maharashtra, South India, UAE, Europe",
      },
      {
        name: "volume",
        label: "Estimated Volume / Scope",
        type: "text",
        placeholder: "e.g. 500 kg/month, 10 SKUs, national distribution",
      },
      {
        name: "message",
        label: "Tell Us More",
        type: "textarea",
        placeholder:
          "Describe the partnership you have in mind. The more context you give, the faster we can respond meaningfully.",
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
