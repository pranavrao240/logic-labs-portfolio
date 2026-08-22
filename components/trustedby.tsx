"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useInView } from "framer-motion";

const trustedBy = [
  "Distributors",
  "Educational Institutions",
  "OEM Partners",
  "Design Studios",
  "Maker Communities",
  "R&D Labs",
  "Architects",
  "Healthcare Teams",
  "Aerospace Researchers",
  "Independent Creators",
];

const BATCH_SIZE = 5;
const STAGGER_MS = 150; // delay between each item appearing / disappearing
const IN_DUR_MS = 550; // each item's fade-in duration
const OUT_DUR_MS = 280; // each item's fade-out duration
const HOLD_MS = 2200; // how long a fully-visible batch stays before exiting
const GAP_MS = 40; // gap between last item fading out and next batch starting

function getBatches<T>(items: T[], size: number): T[][] {
  const batches: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    batches.push(items.slice(i, i + size));
  }
  return batches;
}

const batches = getBatches(trustedBy, BATCH_SIZE);

type ItemState = "hidden" | "entering" | "visible" | "exiting";

interface AnimatedItem {
  text: string;
  state: ItemState;
  delay: number;
}

export function TrustedBy() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  const [batchIndex, setBatchIndex] = useState(0);
  const [items, setItems] = useState<AnimatedItem[]>([]);
  const cycleRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mountedRef = useRef(true);

  const clearTimer = () => {
    if (cycleRef.current) {
      clearTimeout(cycleRef.current);
      cycleRef.current = null;
    }
  };

  const delay = (ms: number) =>
    new Promise<void>((res) => {
      cycleRef.current = setTimeout(res, ms);
    });

  const runCycle = useCallback(async (startIndex: number) => {
    let idx = startIndex;

    while (mountedRef.current) {
      const batch = batches[idx];

      // Build items in "hidden" state
      setItems(
        batch.map((text, i) => ({
          text,
          state: "hidden",
          delay: i * STAGGER_MS,
        })),
      );
      setBatchIndex(idx);

      await delay(16); // one frame — let DOM settle
      if (!mountedRef.current) break;

      // Trigger entrance one by one
      setItems(
        batch.map((text, i) => ({
          text,
          state: "entering",
          delay: i * STAGGER_MS,
        })),
      );

      // Wait for all items to finish entering
      const totalIn = (batch.length - 1) * STAGGER_MS + IN_DUR_MS;
      await delay(totalIn);
      if (!mountedRef.current) break;

      setItems(
        batch.map((text, i) => ({
          text,
          state: "visible",
          delay: 0,
        })),
      );

      // Hold
      await delay(HOLD_MS);
      if (!mountedRef.current) break;

      // Trigger exit one by one (same order as entrance)
      setItems(
        batch.map((text, i) => ({
          text,
          state: "exiting",
          delay: i * STAGGER_MS,
        })),
      );

      const totalOut = (batch.length - 1) * STAGGER_MS + OUT_DUR_MS;
      await delay(totalOut);
      if (!mountedRef.current) break;

      // Brief gap before next batch
      await delay(GAP_MS);
      if (!mountedRef.current) break;

      idx = (idx + 1) % batches.length;
    }
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      clearTimer();
    };
  }, []);

  useEffect(() => {
    if (inView) {
      runCycle(0);
    } else {
      mountedRef.current = false;
      clearTimer();
      mountedRef.current = true;
      setItems([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div ref={ref} className="w-full">
      {/* Label */}
      <p
        className="text-xs uppercase tracking-[0.28em] mb-8 font-medium text-center transition-opacity duration-500"
        style={{
          color: "var(--text-muted)",
          opacity: inView ? 1 : 0,
        }}
      >
        Trusted by
      </p>

      {/* Items row */}
      <div
        className="flex items-center justify-center flex-wrap md:flex-nowrap"
        style={{ minHeight: "56px" }}
      >
        {items.map((item, i) => {
          const entering =
            item.state === "entering" || item.state === "visible";
          const exiting = item.state === "exiting";

          const transitionDelay = `${item.delay}ms`;
          const inTransition = `opacity ${IN_DUR_MS}ms cubic-bezier(0.22,1,0.36,1) ${transitionDelay}, transform ${IN_DUR_MS}ms cubic-bezier(0.22,1,0.36,1) ${transitionDelay}, filter ${IN_DUR_MS}ms cubic-bezier(0.22,1,0.36,1) ${transitionDelay}`;
          const outTransition = `opacity ${OUT_DUR_MS}ms cubic-bezier(0.22,1,0.36,1) ${transitionDelay}, transform ${OUT_DUR_MS}ms cubic-bezier(0.22,1,0.36,1) ${transitionDelay}, filter ${OUT_DUR_MS}ms cubic-bezier(0.22,1,0.36,1) ${transitionDelay}`;

          return (
            <div
              key={i}
              className="relative flex items-center"
              style={{
                opacity: entering ? 1 : 0,
                transform: exiting
                  ? "translateY(-8px)"
                  : entering
                    ? "translateY(0)"
                    : "translateY(10px)",
                filter: entering
                  ? "blur(0px)"
                  : exiting
                    ? "blur(4px)"
                    : "blur(6px)",
                transition: exiting ? outTransition : inTransition,
              }}
            >
              {i > 0 && (
                <span
                  className="mx-4 md:mx-6 inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{
                    background: "var(--primary-color)",
                    opacity: 0.45,
                  }}
                />
              )}
              <span
                className="text-base md:text-xl lg:text-2xl font-mono whitespace-nowrap select-none"
                style={{
                  color: "var(--text-page-secondary)",
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                }}
              >
                {item.text}
              </span>
            </div>
          );
        })}
      </div>

      {/* Batch indicator dots */}
      <div
        className="flex items-center justify-center gap-1.5 mt-6 transition-opacity duration-500"
        style={{ opacity: inView ? 1 : 0 }}
      >
        {batches.map((_, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              width: i === batchIndex ? "20px" : "6px",
              height: "6px",
              borderRadius: "999px",
              background:
                i === batchIndex
                  ? "var(--primary-color)"
                  : "rgba(15,23,42,0.18)",
              transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
