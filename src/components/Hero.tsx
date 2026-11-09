"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { HERO_SLIDES, MediaItem } from "@/data/media";
import { WhatsAppButton } from "@/components/WhatsAppButton";

interface HeroProps {
  onSelectMedia: (item: MediaItem) => void;
}

export function Hero({ onSelectMedia }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentSlide = HERO_SLIDES[currentIndex];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden pt-28 pb-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Cinematic Artwork Carousel */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex
              ? "opacity-100 z-0 scale-100"
              : "opacity-0 -z-10 scale-105 pointer-events-none"
          }`}
          style={{ transition: "opacity 1s ease-in-out, transform 10s ease-out" }}
        >
          <Image
            src={slide.backdropUrl}
            alt={slide.title}
            fill
            sizes="100vw"
            priority={idx === 0}
            className="object-cover object-right md:object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-black/40" />
        </div>
      ))}

      {/* Hero Content (Positioned exactly like Apple TV+ in the screenshot) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl space-y-5">
          {/* Featured Title (Big bold tracked font like SILO in reference) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-[0.08em] uppercase leading-none drop-shadow-2xl">
            {currentSlide.title.split(":")[0]}
          </h1>

          {/* Category & TV-MA Rating Badge (Exact Apple TV+ style) */}
          <div className="flex items-center gap-2.5 text-sm font-semibold text-zinc-300">
            <span>{currentSlide.category}</span>
            <span className="px-2 py-0.5 rounded border border-white/30 text-[11px] font-bold tracking-wider text-white uppercase backdrop-blur-sm">
              TV-MA
            </span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-[11px] font-bold text-amber-300">
              {currentSlide.quality}
            </span>
            {currentSlide.isLive && (
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-600 text-white text-xs font-bold animate-pulse-live">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                LIVE 60FPS
              </span>
            )}
          </div>

          {/* Short description */}
          <p className="text-sm sm:text-base text-zinc-300/90 leading-relaxed max-w-xl drop-shadow line-clamp-3">
            {currentSlide.synopsis}
          </p>

          {/* Action Buttons (Frosted pill button "Go to Show" + WhatsApp) */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={() => onSelectMedia(currentSlide)}
              className="px-8 py-3.5 rounded-2xl bg-white/20 hover:bg-white/30 text-white font-bold text-sm backdrop-blur-md border border-white/20 shadow-xl transition-all duration-200 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <Icon icon="ph:play-fill" width={16} />
              <span>Go to Show</span>
            </button>

            <WhatsAppButton
              variant="solid"
              size="lg"
              showPingDot
              customMessage={`Bonjour ! Je souhaite commencer à visionner "${currentSlide.title}" en 4K sur mon téléviseur.`}
              label="Activer Mon Accès"
            />
          </div>
        </div>
      </div>

      {/* Pagination Dots (Apple TV+ bottom center indicator from screenshot) */}
      <div className="absolute bottom-6 inset-x-0 flex justify-center items-center gap-2 z-20">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIndex
                ? "w-7 h-1.5 bg-white shadow-md shadow-white/50"
                : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
