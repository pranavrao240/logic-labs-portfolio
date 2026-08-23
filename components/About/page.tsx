"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { AboutHeader } from "./AboutHeader";

import { AboutMission } from "./AboutMission";
import { MobileTeamCarousel, DesktopTeamLayout } from "./AboutTeam";
import { AboutValues } from "./AboutValues";
import IndustriesSection from "./industires";
import { AboutSupplyChain } from "./AboutSupplyChain";
import { WhatWeDo } from "./WhatWeDo";
import { WhenAndWhere } from "./whenAndWhere";
import { Timeline } from "./timeline";
import { FoundersDesk } from "./founderDesk";
function useFadeUp(margin = "-80px") {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: false,
  });
  return { ref, inView };
}

export default function AboutSection() {
  const [, setHoveredCard] = useState<number | null>(null);
  const teamFade = useFadeUp();

  return (
    <section
      className="site-section relative w-full px-6 md:px-8 pt-0 pb-10 md:pb-32"
      id="about"
    >
      <div className="section-divider mb-20" />

      <div className="max-w-7xl mx-auto">
        <AboutHeader />

        <AboutMission />

        <WhatWeDo />
        <AboutValues />
        <WhenAndWhere />
        <FoundersDesk />
        <section className="site-section px-6 pt-20 md:pt-28">
          <div className="max-w-7xl mx-auto">
            <IndustriesSection />
          </div>
        </section>
      </div>
    </section>
  );
}
