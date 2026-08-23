"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/footer";
import { ArrowUpRight, Award, BookOpen, CheckCircle, Clock } from "lucide-react";

const AboutSection = dynamic(() => import("@/components/About/page"));
const Testimonials = dynamic(() =>
  import("@/components/Testimonials").then((mod) => mod.Testimonials),
);
const Contact = dynamic(() =>
  import("@/components/Contact").then((mod) => mod.Contact),
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div
        className="fixed inset-0 w-full h-screen flex items-center justify-center z-[9999]"
        style={{ background: "#0c2340" }}
      >
        <div
          className="text-2xl md:text-3xl font-bold tracking-[0.25em] text-white animate-pulse"
          style={{ fontFamily: "monospace" }}
        >
          LOGIC LABS
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen" style={{ background: "var(--background)" }}>
      <Navbar />

      {/* ── HERO SECTION: Smart Projects, Strong Future ── */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center overflow-hidden pt-28 pb-20 px-6" style={{ background: "linear-gradient(to bottom, #0c2340 0%, #081628 100%)" }}>
        {/* Glow decorative effects */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-[#f57c20]/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#1a73e8]/10 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto z-10 flex flex-col items-center gap-6">
          {/* Logo with tagline */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-2 mb-2"
          >
            <div className="flex items-center gap-3">
              <svg width="44" height="44" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" fill="#ffffff" />
                <polygon points="50,12 82,31 82,69 50,88 18,69 18,31" fill="#0c2340" />
                <path d="M40 32 V68 H60" stroke="#f57c20" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-3xl font-extrabold tracking-tight leading-none text-white">
                Logic<span style={{ color: "#f57c20" }}>Labs</span>
              </span>
            </div>
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-white/60">
              INNOVATE · BUILD · SOLVE
            </span>
          </motion.div>

          {/* Slogan */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-none text-white max-w-3xl"
          >
            SMART PROJECTS
            <br />
            <span style={{ color: "#f57c20" }}>STRONG FUTURE</span>
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base font-mono tracking-[0.2em] uppercase text-white/80 border-y border-white/20 py-2.5 px-6 inline-block"
          >
            ACADEMIC PROTOTYPES &amp; STARTUP SOLUTIONS
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl font-light text-slate-300 max-w-2xl leading-relaxed mt-2"
          >
            High Quality Projects. On-Time Delivery. 100% Satisfaction. 
            We design, develop, and document custom solutions as per your requirements.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-semibold transition-all duration-200"
              style={{ background: "#f57c20", color: "#fff", border: "1px solid #f57c20" }}
            >
              Get Started
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 border border-white/30 text-white hover:bg-white/10"
            >
              Explore Domains
            </a>
          </motion.div>

          {/* Highlights Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-white/70 text-sm font-mono"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f57c20]" />
              Projects in Range ₹10K - 15K
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f57c20]" />
              Custom Solutions as per your need
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Key Advantages Grid ── */}
      <section className="site-section py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                title: "ON-TIME DELIVERY",
                sub: "Your Deadline, Our Priority",
                desc: "We ensure timely delivery for student submissions and commercial launch timelines.",
              },
              {
                icon: BookOpen,
                title: "COMPLETE DOCUMENTATION",
                sub: "SRS, Diagrams & Reports",
                desc: "Get full project reports including SRS, UML/flow diagrams, modules, and more.",
              },
              {
                icon: CheckCircle,
                title: "100% ORIGINAL & UNIQUE",
                sub: "Custom Projects, Zero Copy",
                desc: "Custom developed source code tailored exactly to your problem statement.",
              },
              {
                icon: Award,
                title: "SUPPORT & DEPLOYMENT",
                sub: "Handovers & Viva Guidance",
                desc: "We provide complete explanation, source code handovers, deployment support, and viva guidance.",
              },
            ].map((adv, idx) => {
              const IconComponent = adv.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#f57c20]/10 flex items-center justify-center text-[#f57c20]">
                    <IconComponent size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-800 tracking-tight">
                      {adv.title}
                    </h3>
                    <h4 className="text-xs font-semibold text-slate-400 mb-2">
                      {adv.sub}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Project Divisions (Software & Hardware) ── */}
      <section className="site-section py-20 px-6 bg-white" id="divisions">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xs font-mono tracking-[0.25em] text-[#f57c20] uppercase font-bold mb-2">PROJECT DIVISIONS</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800">
              We take both <span style={{ color: "#f57c20" }}>Software</span> &amp; <span style={{ color: "#1a73e8" }}>Hardware</span> Projects
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Software card */}
            <div className="bg-[#f57c20]/5 rounded-3xl p-8 border border-[#f57c20]/10 flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-bold text-slate-800 mb-2">Software Projects</h4>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Complete design, coding, testing, and deployment of web, mobile, and system-level applications.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Web Applications", "Mobile Applications", "Desktop Applications", "AI / ML Projects", "Data Analytics"].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f57c20]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#contact" className="inline-flex items-center gap-1 text-sm font-bold text-[#f57c20] hover:underline">
                Inquire for Software Project <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Hardware card */}
            <div className="bg-[#1a73e8]/5 rounded-3xl p-8 border border-[#1a73e8]/10 flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-bold text-slate-800 mb-2">Hardware Projects</h4>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Prototype assembly, microcontroller programming, circuit designing, and physical sensor integrations.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Embedded Systems", "IoT Projects", "Robotics", "Automation Systems", "Sensor Based Projects"].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1a73e8]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#contact" className="inline-flex items-center gap-1 text-sm font-bold text-[#1a73e8] hover:underline">
                Inquire for Hardware Project <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <Testimonials />
      <Contact />

      <Footer />
    </div>
  );
}
