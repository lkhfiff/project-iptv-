"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { MediaItem } from "@/data/media";
import { ContentCard } from "./ContentCard";

interface ContentCarouselProps {
  title: string;
  subtitle?: string;
  items: MediaItem[];
  onSelectMedia: (item: MediaItem) => void;
  viewAllHref?: string;
  aspectRatio?: "poster" | "backdrop" | "wide";
  badge?: string;
}

export function ContentCarousel({
  title,
  subtitle,
  items,
  onSelectMedia,
  viewAllHref,
  aspectRatio = "poster",
  badge,
}: ContentCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    const scrollAmount = clientWidth * 0.75;
    scrollContainerRef.current.scrollTo({
      left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  const isWide = aspectRatio === "wide" || aspectRatio === "backdrop";

  return (
    <section className="relative py-6 md:py-8 space-y-4">
      {/* Section Header */}
      <div className="flex items-end justify-between px-4 sm:px-6 md:px-12">
        <div className="space-y-1">
          {badge && (
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-1">
              {badge}
            </span>
          )}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl line-clamp-1">
              {subtitle}
            </p>
          )}
        </div>

        {/* Controls and View All */}
        <div className="flex items-center gap-3">
          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="text-xs sm:text-sm font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1 transition-colors"
            >
              <span>Explore All</span>
              <Icon icon="ph:arrow-right-bold" width={13} />
            </Link>
          )}

          {/* Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-1.5">
            <button
              onClick={() => scroll("left")}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-zinc-300 hover:text-white flex items-center justify-center transition-all active:scale-95 cursor-pointer"
              aria-label="Scroll left"
            >
              <Icon icon="ph:caret-left-bold" width={14} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-zinc-300 hover:text-white flex items-center justify-center transition-all active:scale-95 cursor-pointer"
              aria-label="Scroll right"
            >
              <Icon icon="ph:caret-right-bold" width={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Scroll Area */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 sm:gap-5 overflow-x-auto no-scrollbar px-4 sm:px-6 md:px-12 scroll-smooth py-2"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className={`shrink-0 ${
              isWide ? "w-64 sm:w-80 md:w-96" : "w-40 sm:w-48 md:w-56"
            }`}
          >
            <ContentCard
              item={item}
              onSelect={onSelectMedia}
              aspectRatio={aspectRatio}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
