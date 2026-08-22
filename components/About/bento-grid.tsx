import React from "react";

function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-3 md:auto-rows-[20rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento relative row-span-1 flex flex-col overflow-hidden rounded-xl cursor-default",
        className,
      )}
      style={{
        background: "var(--background-card)",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 2px 10px rgba(10,16,30,0.2)",
        transition:
          "background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.background = "var(--background-card)";
        el.style.borderColor = "rgba(56,189,248,0.32)";
        el.style.boxShadow =
          "0 0 0 1px rgba(56,189,248,0.10), 0 12px 36px rgba(10,16,30,0.45)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.background = "var(--background-card)";
        el.style.borderColor = "rgba(255,255,255,0.07)";
        el.style.boxShadow = "0 2px 10px rgba(10,16,30,0.2)";
      }}
    >
      {/* top glow line on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background:
            "linear-gradient(to right, transparent 5%, rgba(56,189,248,0.65) 50%, transparent 95%)",
        }}
      />

      {/* image area — flex-1 so it fills remaining height */}
      {header && (
        <div className="w-full flex-1 min-h-0 overflow-hidden">{header}</div>
      )}

      {/* text area — fixed bottom, no flex-shrink */}
      <div
        className="flex-shrink-0 px-4 py-3 transition-transform duration-200 group-hover/bento:translate-x-1"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div
          className="text-sm font-medium tracking-tight mb-1"
        >
          {title}
        </div>
        <div
          className="text-xs leading-relaxed text-black/50"

        >
          {description}
        </div>
      </div>
    </div>
  );
};
