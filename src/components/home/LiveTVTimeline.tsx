"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
  useInView,
} from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

interface TimelineStep {
  stepNumber: string;
  title: string;
  description: string;
  category: string;
  badge: string;
}

const TIMELINE_STEPS: TimelineStep[] = [
  {
    stepNumber: "01",
    title: "Sky Sports F1 UHD",
    description:
      "Formule 1 en direct en qualité UHD, qualifications et courses sans latence.",
    category: "UK • SPORTS",
    badge: "4K",
  },
  {
    stepNumber: "02",
    title: "beIN Sports MENA 1 4K",
    description:
      "UEFA Champions League et tous les grands matchs en 4K fluide.",
    category: "MENA • SPORTS",
    badge: "Pure",
  },
  {
    stepNumber: "03",
    title: "Canal+ 4K UHD",
    description:
      "Cinéma, séries et événements exclusifs avec le son Dolby.",
    category: "FR • CINÉMA",
    badge: "Dolby",
  },
  {
    stepNumber: "04",
    title: "TNT Sports 1 Ultimate 4K",
    description:
      "Premier League en direct, qualité Ultimate et zéro buffering.",
    category: "UK • SPORTS",
    badge: "4K",
  },
];

export function LiveTVTimeline() {
  const prefersReducedMotion = useReducedMotion();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState<number>(0);

  // InView detection to trigger the section background animation
  const isInView = useInView(sectionRef, {
    margin: "-5% 0px -5% 0px",
    amount: 0.05,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Theme inversion logic:
  // In LIGHT MODE: The background changes with animation to BLACK (isDarkSection = true)
  // In DARK MODE: The background changes with animation to WHITE (isDarkSection = false)
  const isLightMode = mounted ? theme === "light" : false;
  const isDarkSection = isLightMode ? isInView : !isInView;

  // Scroll Progress linked to the timeline container
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 60%", "end 60%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 35,
    restDelta: 0.001,
  });

  const lineProgressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const travelDotTop = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // Detect which step is active based on IntersectionObserver
  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-step-index"));
            if (!isNaN(index)) {
              setActiveStep(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -20% 0px",
        threshold: 0.35,
      }
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Determine section background and text classes
  const sectionBgClass = isDarkSection
    ? "bg-black text-white"
    : isLightMode
    ? "bg-[#faf9f6] text-[#0a0a0a]"
    : "bg-white text-[#0a0a0a]";

  return (
    <section
      ref={sectionRef}
      id="live-tv"
      aria-label="Chaînes en direct et satellites"
      className={`relative w-full font-outfit py-28 sm:py-36 px-6 sm:px-10 lg:px-16 overflow-hidden select-none transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${sectionBgClass}`}
    >
      {/* 1. Section Header (Centered Intro) */}
      <div className="max-w-5xl mx-auto text-center space-y-4 mb-20 sm:mb-28">
        <h2
          className={`text-[clamp(48px,9vw,120px)] font-extrabold leading-[1] tracking-[-0.03em] max-w-5xl mx-auto transition-colors duration-700 ${
            isDarkSection ? "text-white" : "text-[#0a0a0a]"
          }`}
        >
          Chaînes en direct, zéro coupure.
        </h2>
      </div>

      {/* 2. Vertical Timeline Container */}
      <div ref={timelineRef} className="relative max-w-6xl mx-auto">
        {/* Continuous Center Track (Mobile: Left side 24px / Desktop: Center 50%) */}
        <div
          aria-hidden="true"
          className={`absolute top-4 bottom-4 left-6 md:left-1/2 -translate-x-1/2 w-[2px] pointer-events-none transition-colors duration-700 ${
            isDarkSection ? "bg-white/20" : "bg-[#e5e5e5]"
          }`}
        >
          {/* Top Anchor Big Dot (12px) */}
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full transition-colors duration-700 ${
              isDarkSection ? "bg-white" : "bg-[#0a0a0a]"
            }`}
          />

          {/* Bottom Anchor Big Dot (12px) */}
          <div
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full transition-colors duration-700 ${
              isDarkSection ? "bg-white" : "bg-[#0a0a0a]"
            }`}
          />

          {/* Dynamic Scroll-Filled Line Progress */}
          <motion.div
            style={{ height: lineProgressHeight }}
            className={`absolute top-0 left-0 w-full origin-top transition-colors duration-700 ${
              isDarkSection ? "bg-white" : "bg-[#0a0a0a]"
            }`}
          />

          {/* Traveling Progress Dot that tracks user's scroll */}
          <motion.div
            style={{ top: travelDotTop }}
            className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full ring-4 shadow-md z-20 pointer-events-none transition-all duration-700 ${
              isDarkSection
                ? "bg-white ring-black"
                : "bg-[#0a0a0a] ring-white"
            }`}
          />
        </div>

        {/* 3. Steps Ordered List (Semantic <ol>) */}
        <ol className="relative space-y-16 sm:space-y-24 list-none m-0 p-0">
          {TIMELINE_STEPS.map((step, idx) => {
            const isRightSide = idx % 2 === 0;
            const isActive = activeStep === idx;

            return (
              <li
                key={step.stepNumber}
                ref={(el) => {
                  stepRefs.current[idx] = el;
                }}
                data-step-index={idx}
                className="relative min-h-[70vh] flex flex-col justify-center"
              >
                {/* Step Marker Dot On The Line */}
                <div
                  aria-hidden="true"
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 pointer-events-none"
                >
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-500 ease-out ${
                      isDarkSection
                        ? isActive
                          ? "bg-white scale-125 ring-4 ring-black"
                          : idx < activeStep
                          ? "bg-white scale-100"
                          : "bg-black border-2 border-white/30 scale-90"
                        : isActive
                        ? "bg-[#0a0a0a] scale-125 ring-4 ring-white"
                        : idx < activeStep
                        ? "bg-[#0a0a0a] scale-100"
                        : "bg-white border-2 border-[#d4d4d4] scale-90"
                    }`}
                  />
                </div>

                {/* Step Content Block */}
                <motion.div
                  initial={
                    prefersReducedMotion
                      ? false
                      : { opacity: 0, y: 40 }
                  }
                  whileInView={{
                    opacity: isActive ? 1 : 0.4,
                    y: 0,
                  }}
                  animate={{
                    opacity: isActive ? 1 : 0.4,
                  }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center pl-16 md:pl-0 transition-opacity duration-500"
                >
                  {/* Left Column (Desktop) */}
                  <div
                    className={`${
                      isRightSide
                        ? "hidden md:block"
                        : "md:col-start-1 md:text-right"
                    } space-y-4`}
                  >
                    {!isRightSide && (
                      <div className="space-y-4 md:ml-auto md:max-w-lg">
                        {/* 1. Small Label: "— 02" */}
                        <div
                          className={`flex items-center gap-2 md:justify-end text-sm font-mono font-semibold tracking-wider transition-colors duration-700 ${
                            isDarkSection ? "text-zinc-400" : "text-[#777]"
                          }`}
                        >
                          <span className="hidden md:inline">—</span>
                          <span>{step.stepNumber}</span>
                          <span className="md:hidden">—</span>
                        </div>

                        {/* 2. Giant Bold Title */}
                        <h3
                          className={`text-[clamp(36px,5.5vw,76px)] font-extrabold tracking-[-0.03em] leading-[1.05] transition-colors duration-700 ${
                            isDarkSection ? "text-white" : "text-[#0a0a0a]"
                          }`}
                        >
                          {step.title}
                        </h3>

                        {/* 3. Description Paragraph */}
                        <p
                          className={`text-base sm:text-lg leading-[1.7] max-w-[420px] md:ml-auto transition-colors duration-700 ${
                            isDarkSection ? "text-zinc-300" : "text-[#555]"
                          }`}
                        >
                          {step.description}
                        </p>

                        {/* 4. Small Pill Row Below */}
                        <div className="pt-2 flex items-center gap-3 md:justify-end">
                          <span
                            className={`text-xs font-mono font-semibold tracking-wider uppercase transition-colors duration-700 ${
                              isDarkSection ? "text-zinc-400" : "text-[#777]"
                            }`}
                          >
                            {step.category}
                          </span>
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-700 ${
                              isDarkSection
                                ? "bg-white text-black"
                                : "bg-[#0a0a0a] text-white"
                            }`}
                          >
                            {step.badge}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column (Desktop & All Mobile) */}
                  <div
                    className={`${
                      isRightSide
                        ? "md:col-start-2 md:text-left"
                        : "md:hidden"
                    } space-y-4 text-left`}
                  >
                    <div className="space-y-4 md:mr-auto md:max-w-lg">
                      {/* 1. Small Label: "01 —" */}
                      <div
                        className={`flex items-center gap-2 text-sm font-mono font-semibold tracking-wider transition-colors duration-700 ${
                          isDarkSection ? "text-zinc-400" : "text-[#777]"
                        }`}
                      >
                        <span>{step.stepNumber}</span>
                        <span>—</span>
                      </div>

                      {/* 2. Giant Bold Title */}
                      <h3
                        className={`text-[clamp(36px,5.5vw,76px)] font-extrabold tracking-[-0.03em] leading-[1.05] transition-colors duration-700 ${
                          isDarkSection ? "text-white" : "text-[#0a0a0a]"
                        }`}
                      >
                        {step.title}
                      </h3>

                      {/* 3. Description Paragraph */}
                      <p
                        className={`text-base sm:text-lg leading-[1.7] max-w-[420px] transition-colors duration-700 ${
                          isDarkSection ? "text-zinc-300" : "text-[#555]"
                        }`}
                      >
                        {step.description}
                      </p>

                      {/* 4. Small Pill Row Below */}
                      <div className="pt-2 flex items-center gap-3">
                        <span
                          className={`text-xs font-mono font-semibold tracking-wider uppercase transition-colors duration-700 ${
                            isDarkSection ? "text-zinc-400" : "text-[#777]"
                          }`}
                        >
                          {step.category}
                        </span>
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-700 ${
                            isDarkSection
                              ? "bg-white text-black"
                              : "bg-[#0a0a0a] text-white"
                          }`}
                        >
                          {step.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* 4. Centered Bottom CTA Button */}
      <div className="mt-24 sm:mt-32 text-center flex justify-center">
        <Link
          href="/live-tv"
          className={`group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-full text-sm sm:text-base font-bold tracking-wide transition-all duration-700 shadow-xl active:scale-95 focus:outline-none ${
            isDarkSection
              ? "bg-white text-black hover:bg-zinc-200 border-2 border-white"
              : "bg-[#0a0a0a] text-white hover:bg-zinc-800 border-2 border-[#0a0a0a]"
          }`}
        >
          <span>Ouvrir le Lecteur Live TV</span>
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
