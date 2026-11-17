"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

interface StatItem {
  index: string;
  end: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
}

const STATS_DATA: StatItem[] = [
  {
    index: "01",
    end: 28500,
    suffix: "+",
    label: "Chaînes Internationales",
    sublabel: "Direct 4K UHD & 60 FPS",
  },
  {
    index: "02",
    end: 135000,
    suffix: "+",
    label: "Films & Séries VOD",
    sublabel: "Master 4K HDR & Dolby Audio",
  },
  {
    index: "03",
    end: 99.99,
    decimals: 2,
    suffix: "%",
    label: "Disponibilité Réseau (SLA)",
    sublabel: "Garantie Anti-Freeze™ 9.9",
  },
  {
    index: "04",
    end: 18,
    label: "Data Centers Privés",
    sublabel: "Interconnexion 10 Gbps directe",
  },
  {
    index: "05",
    end: 15,
    prefix: "< ",
    suffix: "ms",
    label: "Latence Moyenne",
    sublabel: "Streaming instantané sans buffer",
  },
  {
    index: "06",
    end: 45000,
    suffix: "+",
    label: "Membres VIP Actifs",
    sublabel: "France, Europe & Monde",
  },
];

function AnimatedCounter({
  end,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 2.2,
  start = false,
}: {
  end: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  start?: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(easeProgress * end);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [start, end, duration]);

  const formatted =
    decimals > 0
      ? count.toFixed(decimals)
      : Math.floor(count).toLocaleString("fr-FR").replace(/\u202F/g, " ");

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export function StatisticsTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  // SCROLL PROGRESS: Pure white line fills dynamically with scroll
  const { scrollYProgress } = useScroll({
    target: timelineContainerRef,
    offset: ["start 65%", "end 65%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 32,
    restDelta: 0.001,
  });

  const lineProgressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      aria-label="Statistiques et indicateurs clés NOUDINE"
      className="w-full bg-[#080808] text-white py-20 sm:py-28 select-none relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 relative">
        
        {/* =========================================================
            1. CONTINUOUS VERTICAL WHITE TIMELINE TIED TO SCROLL
            - Pure white line, completely clean with NO points/dots
            - Desktop: Center track (left: 50%)
            - Mobile: Left track (left: 24px)
            ========================================================= */}
        <div
          aria-hidden="true"
          className="absolute top-6 bottom-6 left-6 md:left-1/2 -translate-x-1/2 w-[2px] pointer-events-none z-10"
        >
          {/* Base Inactive Track (Subtle white filament) */}
          <div className="absolute inset-0 w-full bg-white/10 rounded-full" />

          {/* Dynamic Scroll-Filled Pure White Progress Line */}
          <motion.div
            style={{ height: lineProgressHeight }}
            className="absolute top-0 left-0 w-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)] rounded-full origin-top"
          />
        </div>

        {/* =========================================================
            2. VERTICAL TIMELINE OF 6 STATISTICS (WITHOUT POINTS/MARKERS)
            ========================================================= */}
        <div
          ref={timelineContainerRef}
          className="space-y-16 sm:space-y-24 relative z-10"
        >
          {STATS_DATA.map((stat, i) => {
            const isLeft = i % 2 === 0;
            const delayStep = 0.15 + i * 0.12;

            return (
              <div
                key={stat.index}
                className="relative flex items-start md:items-center group cursor-default"
              >
                {/* ---------------------------------------------------
                    CONTENT LAYOUT:
                    - Mobile: Left offset (pl-14)
                    - Desktop: 2-column alternating grid
                    --------------------------------------------------- */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center pl-14 md:pl-0">
                  {/* Left Column (Desktop) */}
                  <div
                    className={`${
                      isLeft
                        ? "md:col-start-1 md:text-right"
                        : "hidden md:block" // Empty on desktop for right-side items
                    }`}
                  >
                    {isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -24 }
                        }
                        transition={{
                          duration: 0.6,
                          delay: delayStep + 0.1,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="space-y-2 md:ml-auto md:max-w-md"
                      >
                        {/* Large Elegant White Number */}
                        <div className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-none font-sans">
                          <AnimatedCounter
                            end={stat.end}
                            decimals={stat.decimals}
                            prefix={stat.prefix}
                            suffix={stat.suffix}
                            start={isInView}
                          />
                        </div>

                        {/* Description */}
                        <div className="text-sm sm:text-base font-medium text-white/95 leading-snug">
                          {stat.label}
                        </div>

                        {/* Subtle Supporting Text */}
                        <div className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                          {stat.sublabel}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Right Column (Desktop & All Mobile) */}
                  <div
                    className={`${
                      isLeft
                        ? "md:hidden" // Hidden on desktop when placed on left
                        : "md:col-start-2 md:text-left"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: 24 }}
                      animate={
                        isInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: 24 }
                      }
                      transition={{
                        duration: 0.6,
                        delay: delayStep + 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="space-y-2 md:mr-auto md:max-w-md text-left"
                    >
                      {/* Large Elegant White Number */}
                      <div className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-none font-sans">
                        <AnimatedCounter
                          end={stat.end}
                          decimals={stat.decimals}
                          prefix={stat.prefix}
                          suffix={stat.suffix}
                          start={isInView}
                        />
                      </div>

                      {/* Description */}
                      <div className="text-sm sm:text-base font-medium text-white/95 leading-snug">
                        {stat.label}
                      </div>

                      {/* Subtle Supporting Text */}
                      <div className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                        {stat.sublabel}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
