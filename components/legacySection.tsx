// "use client";

// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import dynamic from "next/dynamic";
// import { Users, MapPin, Star, Package, LucideIcon } from "lucide-react";
// import type { Globe3DConfig, GlobeMarker } from "./About/3d-globe";
// import { AboutStats } from "./About/AboutStats";
// import { TrustedBy } from "./trustedby";
// import { CertPanel } from "./Certpanel";

// const Globe3D = dynamic(
//   () => import("./About/3d-globe").then((m) => m.Globe3D),
//   { ssr: false },
// );

// const channels = [
//   {
//     icon: Package,
//     title: "D2C",
//     sub: "Direct to creator — shop.reverindustries.com",
//   },
//   { icon: Users, title: "B2C", sub: "Amazon, Flipkart & 10+ marketplaces" },
//   {
//     icon: MapPin,
//     title: "B2B",
//     sub: "OEM supply, bulk & institutional orders",
//   },
// ];

// const exportCountries = ["USA", "Germany", "Turkey", "Philippines"];

// const exportMarkers: GlobeMarker[] = [
//   {
//     lat: 27.7172,
//     lng: 85.324,
//     src: "https://flagcdn.com/w40/np.png",
//     label: "Nepal",
//   },

//   {
//     lat: 37.0902,
//     lng: -95.7129,
//     src: "https://flagcdn.com/w40/us.png",
//     label: "USA",
//   },

//   {
//     lat: 51.1657,
//     lng: 10.4515,
//     src: "https://flagcdn.com/w40/de.png",
//     label: "Germany",
//   },

//   {
//     lat: 38.9637,
//     lng: 35.2433,
//     src: "https://flagcdn.com/w40/tr.png",
//     label: "Turkey",
//   },
//   {
//     lat: 12.8797,
//     lng: 121.774,
//     src: "https://flagcdn.com/w40/ph.png",
//     label: "Philippines",
//   },
// ];

// const globeConfig: Globe3DConfig = {
//   autoRotateSpeed: 1.5,
//   bumpScale: 2,
//   enableZoom: false,
//   enablePan: false,
//   ambientIntensity: 0.7,
//   pointLightIntensity: 1.4,
// };

// function CertBadge({
//   code,
//   label,
//   index,
//   inView,
// }: {
//   code: string;
//   label: string;
//   index: number;
//   inView: boolean;
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 16 }}
//       animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
//       transition={{ duration: 0.45, delay: 0.4 + index * 0.08 }}
//       className="flex items-center gap-3 px-6 md:px-8 py-3.5 rounded-xl"
//       style={{
//         background: "rgba(224,242,255,0.22)",
//         border: "1px solid rgba(255,255,255,0.07)",
//       }}
//     >
//       <div
//         className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
//         style={{
//           background: "rgba(56,189,248,0.12)",
//           border: "1px solid rgba(56,189,248,0.28)",
//         }}
//       >
//         <svg width="11" height="11" viewBox="0 0 10 10" fill="none">
//           <path
//             d="M2 5.2L4 7.2L8 3"
//             stroke="#38bdf8"
//             strokeWidth="1.4"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </div>
//       <div className="flex-1 min-w-0">
//         <div className="text-sm font-semibold tracking-wide">{code}</div>
//         <div className="text-xs mt-0.5 text-black/50">{label}</div>
//       </div>
//     </motion.div>
//   );
// }

// function ChannelRow({
//   icon: Icon,
//   title,
//   sub,
//   index,
//   inView,
// }: {
//   icon: LucideIcon;
//   title: string;
//   sub: string;
//   index: number;
//   inView: boolean;
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 16 }}
//       animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
//       transition={{ duration: 0.4, delay: 0.7 + index * 0.07 }}
//       className="flex items-center gap-3"
//     >
//       <div
//         className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
//         style={{
//           background: "rgba(56,189,248,0.08)",
//           border: "1px solid rgba(56,189,248,0.18)",
//         }}
//       >
//         <Icon size={14} style={{ color: "#38bdf8" }} strokeWidth={1.5} />
//       </div>
//       <div>
//         <span
//           className="text-xs font-semibold"
//           style={{ color: "var(--text-page-secondary)" }}
//         >
//           {title}
//         </span>
//         <span
//           className="text-xs ml-2"
//           style={{ color: "var(--text-page-muted)" }}
//         >
//           {sub}
//         </span>
//       </div>
//     </motion.div>
//   );
// }

// export default function LegacySection() {
//   const ref = useRef<HTMLDivElement>(null);
//   const inView = useInView(ref, { once: false, margin: "-80px" });

//   return (
//     <section
//       id="legacySection"
//       ref={ref}
//       className="site-section relative w-full px-6 md:px-8 py-20 md:py-28 z-20"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
//           transition={{ duration: 0.75 }}
//           className="text-center mb-4"
//         >
//           <h2 className="split-heading text-5xl md:text-7xl font-light tracking-tighter">
//             A decade in.{" "}
//             <span className="heading-accent">Just getting started.</span>
//           </h2>
//         </motion.div>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6, delay: 0.15 }}
//           className="text-center text-sm md:text-base mb-16 max-w-xl mx-auto"
//           style={{ color: "var(--text-page-muted)" }}
//         >
//           We've never been the loudest brand in the room. We've been the one
//           that showed up reliably, year after year, for a community that's grown
//           with us.
//         </motion.p>

//         <AboutStats />

//         <div
//           className="w-full h-px mb-12"
//           style={{
//             background:
//               "linear-gradient(to right, transparent, rgba(15,23,42,0.18) 20%, rgba(15,23,42,0.18) 80%, transparent)",
//           }}
//         />

//         {/* Globe + Certs */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-start">
//           {/* LEFT: Globe card */}
//           <motion.div
//             initial={{ opacity: 0, x: -24 }}
//             animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
//             transition={{ duration: 0.6, delay: 0.35 }}
//             className="flex flex-col rounded-2xl overflow-hidden"
//             style={{
//               background: "linear-gradient(to bottom rgba(224,242,255,0.22), )",
//               backdropFilter: "blur(12px)",
//               WebkitBackdropFilter: "blur(12px)",
//               border: "1px solid rgba(80,160,255,0.16)",
//               boxShadow:
//                 "0 10px 40px rgba(0,0,0,0.22), inset 0 1px rgba(255,255,255,0.04)",
//             }}
//           >
//             <div className="px-6 md:px-8 pt-6 pb-4">
//               <p
//                 className="text-xs uppercase tracking-widest mb-3 font-medium"
//                 style={{ color: "rgba(8, 25, 32, 0.7)" }}
//               >
//                 Exported to
//               </p>
//               <div className="flex flex-wrap gap-2 mb-3">
//                 {exportCountries.map((country, i) => (
//                   <motion.span
//                     key={country}
//                     initial={{ opacity: 0, y: 6 }}
//                     animate={
//                       inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }
//                     }
//                     transition={{ duration: 0.35, delay: 0.4 + i * 0.06 }}
//                     className="px-3 py-1 rounded-full text-xs font-medium tracking-wide"
//                     style={{
//                       background: "rgba(56,189,248,0.10)",
//                       border: "1px solid rgba(56,189,248,0.24)",
//                       color: "rgba(11, 16, 19, 0.9)",
//                     }}
//                   >
//                     {country}
//                   </motion.span>
//                 ))}
//               </div>
//               <p className="text-xs text-balck/50">
//                 Made in India, shipped vacuum-sealed worldwide.
//               </p>
//             </div>

//             <div
//               className="w-full h-px mx-0"
//               style={{
//                 background:
//                   "linear-gradient(to right, transparent, hsla(205,89%,46%,.18) 30%, hsla(205,89%,46%,.18) 70%, transparent)",
//               }}
//             />

//             <div
//               className="w-full flex items-center justify-center"
//               style={{ height: "min(380px, 76vw)" }}
//             >
//               <Globe3D
//                 markers={exportMarkers}
//                 config={globeConfig}
//                 className="w-full h-full"
//               />
//             </div>
//           </motion.div>

//           {/* RIGHT: Certs + rating + channels */}
//           <motion.div
//             initial={{ opacity: 0, x: 24 }}
//             animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
//             transition={{ duration: 0.6, delay: 0.35 }}
//             className="flex flex-col gap-6 pt-7"
//           >
//             <div>
//               <p
//                 className="text-xs uppercase tracking-widest mb-3 font-medium"
//                 style={{ color: "var(--text-muted)" }}
//               >
//                 Certifications
//               </p>
//               <div className="flex flex-col gap-2">
//                 <CertPanel inView={inView} />
//               </div>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={
//                 inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
//               }
//               transition={{ duration: 0.4, delay: 0.65 }}
//               className="flex items-center gap-6 px-8 py-6 rounded-2xl"
//               style={{
//                 background: "hsl(217 33% 17%)",
//                 border: "1px solid rgba(56,189,248,0.14)",
//                 minHeight: "120px",
//               }}
//             >
//               {/* LEFT: score */}
//               <div>
//                 <div className="flex items-baseline gap-2">
//                   <span
//                     className="text-6xl font-light tracking-tighter"
//                     style={{ color: "#ffffff" }}
//                   >
//                     4.8
//                   </span>
//                   <Star size={22} fill="#fbbf24" stroke="none" />
//                 </div>
//                 <p
//                   className="text-sm mt-1"
//                   style={{ color: "rgba(255,255,255,0.55)" }}
//                 >
//                   Average across 200+ verified reviews
//                 </p>
//               </div>

//               {/* RIGHT: logos only */}
//               <div className="ml-auto flex flex-col items-end gap-3">
//                 <div
//                   className="flex items-center justify-center rounded-xl overflow-hidden"
//                   style={{
//                     width: "80px",
//                     height: "40px",
//                     background: "rgba(255,255,255,0.95)",
//                   }}
//                 >
//                   <img
//                     src="/google1.png"
//                     alt="Google"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                     }}
//                   />
//                 </div>
//                 <div
//                   className="flex items-center justify-center rounded-xl overflow-hidden"
//                   style={{
//                     width: "80px",
//                     height: "40px",
//                     background: "rgba(255,255,255,0.95)",
//                   }}
//                 >
//                   <img
//                     src="/justdial.png"
//                     alt="JustDial"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                     }}
//                   />
//                 </div>
//               </div>
//             </motion.div>

//             <div>
//               <p
//                 className="text-xs uppercase tracking-widest mb-3 font-medium"
//                 style={{ color: "var(--text-muted)" }}
//               >
//                 Active channels
//               </p>
//               <div className="flex flex-col gap-3">
//                 {channels.map((ch, i) => (
//                   <ChannelRow
//                     key={ch.title}
//                     {...ch}
//                     index={i}
//                     inView={inView}
//                   />
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         <div
//           className="w-full h-px mb-12"
//           style={{
//             background:
//               "linear-gradient(to right, transparent, rgba(15,23,42,0.18) 20%, rgba(15,23,42,0.18) 80%, transparent)",
//           }}
//         />

//         {/* ── Trusted By — premium batch flip ── */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={inView ? { opacity: 1 } : { opacity: 0 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//           className="md:-mb-22 mb-0"
//         >
//           <TrustedBy />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { Users, MapPin, Star, Package, LucideIcon, Landmark } from "lucide-react";
import type { Globe3DConfig, GlobeMarker } from "./About/3d-globe";
import { AboutStats } from "./About/AboutStats";
import { TrustedBy } from "./trustedby";
import { CertPanel } from "./Certpanel";

const Globe3D = dynamic(
  () => import("./About/3d-globe").then((m) => m.Globe3D),
  { ssr: false },
);

const channels = [
  { icon: Package, title: "Software", sub: "Web, Mobile, ML & system programming solutions" },
  { icon: Users, title: "Hardware", sub: "Arduino, ESP32, Raspberry Pi & sensor integration" },
  { icon: MapPin, title: "Support", sub: "One-on-one final viva guidance and explanation" },
  { icon: Landmark, title: "Documentation", sub: "Complete SRS, UML diagrams, and project reports" },
];

const exportCountries = ["USA", "Germany", "Turkey", "Philippines"];

const exportMarkers: GlobeMarker[] = [
  { lat: 27.7172, lng: 85.324, src: "https://flagcdn.com/w40/np.png", label: "Nepal" },
  { lat: 37.0902, lng: -95.7129, src: "https://flagcdn.com/w40/us.png", label: "USA" },
  { lat: 51.1657, lng: 10.4515, src: "https://flagcdn.com/w40/de.png", label: "Germany" },
  { lat: 38.9637, lng: 35.2433, src: "https://flagcdn.com/w40/tr.png", label: "Turkey" },
  { lat: 12.8797, lng: 121.774, src: "https://flagcdn.com/w40/ph.png", label: "Philippines" },
];

// Base config — autoRotateSpeed is tuned per-breakpoint below so labels
// have more time to separate visually on smaller screens.
const globeConfigBase: Omit<Globe3DConfig, "autoRotateSpeed"> = {
  bumpScale: 2,
  enableZoom: false,
  enablePan: false,
  ambientIntensity: 0.7,
  pointLightIntensity: 1.4,
};

function CertBadge({
  code, label, index, inView,
}: {
  code: string; label: string; index: number; inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
      transition={{ duration: 0.45, delay: 0.4 + index * 0.08 }}
      className="flex items-center gap-3 px-4 py-3.5 rounded-xl"
      style={{
        background: "rgba(224,242,255,0.22)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div
        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
        style={{
          background: "rgba(56,189,248,0.12)",
          border: "1px solid rgba(56,189,248,0.28)",
        }}
      >
        <svg width="11" height="11" viewBox="0 0 10 10" fill="none">
          <path
            d="M2 5.2L4 7.2L8 3"
            stroke="#38bdf8"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold tracking-wide">{code}</div>
        <div className="text-xs mt-0.5 text-black/50">{label}</div>
      </div>
    </motion.div>
  );
}

function ChannelRow({
  icon: Icon, title, sub, index, inView,
}: {
  icon: LucideIcon; title: string; sub: string; index: number; inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
      transition={{ duration: 0.4, delay: 0.7 + index * 0.07 }}
      className="flex items-center gap-3"
    >
      <div
        className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
        style={{
          background: "rgba(56,189,248,0.08)",
          border: "1px solid rgba(56,189,248,0.18)",
        }}
      >
        <Icon size={14} style={{ color: "#38bdf8" }} strokeWidth={1.5} />
      </div>
      <div>
        <span className="text-xs font-semibold" style={{ color: "var(--text-page-secondary)" }}>
          {title}
        </span>
        <span className="text-xs ml-2" style={{ color: "var(--text-page-muted)" }}>
          {sub}
        </span>
      </div>
    </motion.div>
  );
}

export default function LegacySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  // Slow the globe down on small screens so the flag labels have more
  // room to drift apart before the next one rotates into view, instead
  // of bunching up near the same longitude.
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const globeConfig: Globe3DConfig = useMemo(
    () => ({
      ...globeConfigBase,
      autoRotateSpeed: isMobile ? 0.6 : 1.5,
    }),
    [isMobile],
  );

  return (
    <section
      id="legacySection"
      ref={ref}
      className="site-section relative w-full px-6 md:px-8 py-20 md:py-28 z-20"
    >
      <div className="max-w-7xl px-6 md:px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.75 }}
          className="text-center mb-4"
        >
          <h2 className="split-heading text-5xl md:text-7xl font-light tracking-tighter">
            A decade in.{" "}
            <span className="heading-accent">Just getting started.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center text-sm md:text-base mb-16 max-w-xl mx-auto"
          style={{ color: "var(--text-page-muted)" }}
        >
          We've never been the loudest brand in the room. We've been the one
          that showed up reliably, year after year, for a community that's grown
          with us.
        </motion.p>

        <AboutStats />

        <div
          className="w-full h-px mb-12"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(15,23,42,0.18) 20%, rgba(15,23,42,0.18) 80%, transparent)",
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-start">
          {/* LEFT: Globe card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col rounded-2xl overflow-hidden"
            style={{
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(80,160,255,0.16)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.22), inset 0 1px rgba(255,255,255,0.04)",
            }}
          >
            <div className="px-6 pt-6 pb-4">
              <p
                className="text-xs uppercase tracking-widest mb-3 font-medium"
                style={{ color: "rgba(8, 25, 32, 0.7)" }}
              >
                Exported to
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {exportCountries.map((country, i) => (
                  <motion.span
                    key={country}
                    initial={{ opacity: 0, y: 6 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                    transition={{ duration: 0.35, delay: 0.4 + i * 0.06 }}
                    className="px-3 py-1 rounded-full text-xs font-medium tracking-wide"
                    style={{
                      background: "rgba(56,189,248,0.10)",
                      border: "1px solid rgba(56,189,248,0.24)",
                      color: "rgba(11, 16, 19, 0.9)",
                    }}
                  >
                    {country}
                  </motion.span>
                ))}
              </div>
              <p className="text-xs text-black/50">
                Made in India, shipped vacuum-sealed worldwide.
              </p>
            </div>

            <div
              className="w-full h-px"
              style={{
                background:
                  "linear-gradient(to right, transparent, hsla(205,89%,46%,.18) 30%, hsla(205,89%,46%,.18) 70%, transparent)",
              }}
            />

            {/*
              Mobile/tablet get an explicit, smaller height instead of
              inheriting whatever the canvas defaults to — this is what
              was leaving a big empty gap under the sphere on phones.
              overflow-hidden also keeps a label pill from poking past
              the card edge on narrow widths.
            */}
            <div className="relative w-full h-[260px] sm:h-[340px] md:h-[520px] flex items-center justify-center overflow-hidden">
              <Globe3D markers={exportMarkers} config={globeConfig} className="w-full h-full" />
            </div>
          </motion.div>

          {/* RIGHT: Certs + rating + channels */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col gap-6 pt-3 "
          >
            <div>
              <p
                className="text-sm uppercase tracking-widest mb-3 font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                Certifications
              </p>
              <div className="flex flex-col gap-4">
                <CertPanel inView={inView} />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: 0.65 }}
              className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 px-6 py-6 rounded-2xl"
              style={{
                background: "hsl(217 33% 17%)",
                border: "1px solid rgba(56,189,248,0.14)",
                minHeight: "120px",
              }}
            >
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="text-6xl font-light tracking-tighter" style={{ color: "#ffffff" }}>
                    4.8
                  </span>
                  <Star size={22} fill="#fbbf24" stroke="none" />
                </div>
                <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Average across 200+ verified reviews
                </p>
              </div>
              {/*
                object-contain + inner padding instead of cover — cover
                was free to crop whichever edge of each logo didn't match
                the box's aspect ratio. Stacking under the score on
                narrow phones (flex-col above) instead of cramming both
                into one row gives the logos breathing room too.
              */}
              <div className="flex items-center gap-4 sm:ml-auto sm:gap-5">
                <div
                  className="flex items-center justify-center rounded-xl"
                  style={{ width: "92px", height: "48px", background: "rgba(255,255,255,0.95)", padding: "8px" }}
                >
                  <img
                    src="/google1.png"
                    alt="Google"
                    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                  />
                </div>
                <div
                  className="flex items-center justify-center rounded-xl"
                  style={{ width: "92px", height: "48px", background: "rgba(255,255,255,0.95)", padding: "8px" }}
                >
                  <img
                    src="/justdial.png"
                    alt="JustDial"
                    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                  />
                </div>
              </div>
            </motion.div>

            <div>
              <p
                className="text-sm uppercase tracking-widest mb-3 pt-4 font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                Active channels
              </p>
              <div className="flex flex-col gap-3">
                {channels.map((ch, i) => (
                  <ChannelRow key={ch.title} {...ch} index={i} inView={inView} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div
          className="w-full h-px mb-12"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(15,23,42,0.18) 20%, rgba(15,23,42,0.18) 80%, transparent)",
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="md:-mb-22 mb-0"
        >
          <TrustedBy />
        </motion.div>
      </div>
    </section>
  );
}
