"use client";

import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/data/config";

export function HomeAbout() {
  return (
    <section
      id="about"
      data-animate="section"
      className="w-full min-h-[100vh] min-h-[100dvh] flex flex-col items-center justify-center px-6 sm:px-10 py-12 text-center select-none"
    >
      <div className="max-w-3xl md:max-w-4xl mx-auto space-y-8 sm:space-y-10">
        {/* 1. Editorial Manifesto Statement */}
        <p
          data-animate="title"
          className="text-xl sm:text-3xl md:text-4xl lg:text-[42px] font-light text-zinc-900 dark:text-zinc-100 leading-relaxed sm:leading-[1.4] tracking-tight"
        >
          <span className="font-medium text-zinc-950 dark:text-white">{SITE_CONFIG.brandName}</span> — la maison du streaming d&apos;exception, des passionnés de cinéma et des grands directs qui nous font vibrer. Une infrastructure privée haute fidélité pensée pour offrir la perfection visuelle en 4K UHD sans la moindre interruption.
        </p>

        {/* 2. Minimalist Capsule Pill Button */}
        <div className="pt-2 flex justify-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 text-xs sm:text-sm font-medium tracking-wide shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            <span className="text-zinc-400 dark:text-zinc-500 font-normal text-sm leading-none group-hover:text-white dark:group-hover:text-black transition-colors">
              +
            </span>
            <span>Découvrir notre univers</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
