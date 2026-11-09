"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Sparkles, Star, ChevronRight, Shield, Volume2, Info, ArrowUpRight } from "lucide-react";
import { HERO_SLIDES, MediaItem } from "@/data/media";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { generateWhatsAppSubscriptionUrl } from "@/data/config";

interface HeroProps {
  onSelectMedia: (item: MediaItem) => void;
}

export function Hero({ onSelectMedia }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentSlide = HERO_SLIDES[currentIndex];

  // Auto advance every 7 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-end overflow-hidden pt-24 pb-12 sm:pb-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Carousel with Fade Transitions */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? "opacity-100 z-0 scale-100" : "opacity-0 -z-10 scale-105 pointer-events-none"
          }`}
          style={{ transition: "opacity 1s ease-in-out, transform 8s ease-out" }}
        >
          <Image
            src={slide.backdropUrl}
            alt={slide.title}
            fill
            sizes="100vw"
            priority={idx === 0}
            className="object-cover object-center"
          />
          {/* Subtle Ambient Vignettes & Fades */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050508] via-[#050508]/60 to-transparent" />
          <div className="absolute inset-0 bg-radial-vignette opacity-60" />
        </div>
      ))}

      {/* Hero Foreground Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            {currentSlide.isLive ? (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/90 text-white text-xs font-bold tracking-widest uppercase animate-pulse-live shadow-lg shadow-red-600/30">
                <span className="w-2 h-2 rounded-full bg-white" />
                LIVE 4K • NO DELAY
              </span>
            ) : (
              <span className="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs font-bold tracking-widest uppercase backdrop-blur-md">
                {currentSlide.badge || "AETHER+ CINEMA PREMIERE"}
              </span>
            )}

            <span className="px-2.5 py-0.5 rounded-md bg-white/10 backdrop-blur-md text-white text-xs font-bold border border-white/15">
              {currentSlide.quality}
            </span>

            {currentSlide.audio && (
              <span className="hidden sm:flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white/10 backdrop-blur-md text-zinc-300 text-xs font-medium border border-white/10">
                <Volume2 className="w-3 h-3 text-amber-400" />
                {currentSlide.audio}
              </span>
            )}

            <span className="flex items-center gap-1 text-xs text-amber-400 font-bold px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-sm">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              {currentSlide.rating}
            </span>
          </div>

          {/* Subtitle / Franchise */}
          {currentSlide.subtitle && (
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-amber-400/90 drop-shadow">
              {currentSlide.subtitle}
            </p>
          )}

          {/* Large Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] drop-shadow-xl">
            {currentSlide.title}
          </h1>

          {/* Categories & Genres */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-zinc-300">
            <span className="font-semibold text-white">{currentSlide.category}</span>
            <span>•</span>
            <span>{currentSlide.duration}</span>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              {currentSlide.genres.slice(0, 3).map((g) => (
                <span key={g} className="px-2 py-0.5 rounded-full bg-white/5 text-zinc-300 text-xs">
                  {g}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl line-clamp-3 drop-shadow">
            {currentSlide.synopsis}
          </p>

          {/* Hero CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Explore / Modal Button */}
            <button
              onClick={() => onSelectMedia(currentSlide)}
              className="px-6 py-3.5 rounded-full bg-white text-black font-bold text-sm flex items-center gap-2 hover:bg-zinc-200 transition-all shadow-xl shadow-white/10 active:scale-95 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-black ml-0.5" />
              <span>Explore Stream Preview</span>
            </button>

            {/* View Subscriptions Button */}
            <Link
              href="/pricing"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm backdrop-blur-md border border-white/15 flex items-center gap-2 transition-all active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span>View Subscriptions</span>
            </Link>

            {/* Direct WhatsApp Instant Access */}
            <WhatsAppButton
              variant="luxury"
              size="md"
              customMessage={`Hello AETHER+! I want to start streaming "${currentSlide.title}" on my TV. Please provide my instant activation.`}
              label="Instant Setup"
            />
          </div>
        </div>

        {/* Thumbnail Slide Switcher (Apple TV+ style) */}
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(idx)}
                className={`group relative text-left rounded-xl overflow-hidden transition-all duration-300 shrink-0 ${
                  idx === currentIndex
                    ? "ring-2 ring-orange-500 scale-102 shadow-lg shadow-orange-500/20"
                    : "opacity-50 hover:opacity-85"
                }`}
              >
                <div className="relative w-28 sm:w-36 h-14 sm:h-18 bg-zinc-900">
                  <Image
                    src={slide.backdropUrl}
                    alt={slide.title}
                    fill
                    sizes="144px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-x-2 bottom-1.5">
                    <p className="text-[10px] font-bold text-white truncate drop-shadow">
                      {slide.title}
                    </p>
                  </div>
                </div>
                {/* Progress line if active */}
                {idx === currentIndex && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500" />
                )}
              </button>
            ))}
          </div>

          {/* Quick Stats Pill */}
          <div className="hidden lg:flex items-center gap-6 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-zinc-300 font-medium">Anti-Freeze™ 9.9 Active</span>
            </div>
            <div className="text-zinc-500">|</div>
            <div>
              <span className="text-white font-bold">28,500+</span> Channels Live
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

