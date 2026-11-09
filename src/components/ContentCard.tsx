"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { MediaItem } from "@/data/media";

interface ContentCardProps {
  item: MediaItem;
  onSelect: (item: MediaItem) => void;
  aspectRatio?: "poster" | "backdrop" | "wide";
  showCategory?: boolean;
}

export function ContentCard({
  item,
  onSelect,
  aspectRatio = "poster",
  showCategory = true,
}: ContentCardProps) {
  const isWide = aspectRatio === "backdrop" || aspectRatio === "wide";

  if (isWide) {
    // Exact Apple TV+ Up Next Landscape Card Style (from reference screenshot)
    return (
      <div
        onClick={() => onSelect(item)}
        className="group cursor-pointer select-none space-y-2 text-left"
      >
        {/* 16:9 Landscape Video Container */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 group-hover:border-white/30 transition-all duration-300 group-hover:scale-103 group-hover:shadow-2xl group-hover:shadow-black/80">
          <Image
            src={item.backdropUrl || item.posterUrl}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 280px, 420px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-106"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

          {/* Top-Right Badge */}
          <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-bold text-white tracking-wider border border-white/10">
              {item.quality}
            </span>
          </div>

          {/* Bottom-Left Logo Overlay inside artwork (like SILO, platonic in Apple TV+) */}
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
            <div className="max-w-[75%]">
              <span className="text-base sm:text-lg font-black text-white tracking-wider drop-shadow-lg uppercase leading-tight line-clamp-1">
                {item.title}
              </span>
            </div>
            <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              <Icon icon="ph:play-fill" width={11} className="ml-0.5" />
            </div>
          </div>
        </div>

        {/* Text Details Beneath the Card (Just like in the Apple TV+ reference) */}
        <div className="space-y-0.5 px-0.5">
          <h4 className="text-sm font-semibold text-white truncate group-hover:text-white transition-colors">
            {item.title}
          </h4>
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span>{item.category}</span>
            <span>•</span>
            <span className="text-white/90 flex items-center gap-1">
              <Icon icon="ph:star-fill" width={12} />
              {item.rating}
            </span>
            {item.seasons && (
              <>
                <span>•</span>
                <span>{item.seasons} Seasons</span>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Vertical Poster Style
  return (
    <div
      onClick={() => onSelect(item)}
      className="group relative cursor-pointer select-none rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-black/80 hover:-translate-y-1.5"
    >
      <div className="relative w-full aspect-[2/3] overflow-hidden">
        <Image
          src={item.posterUrl}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 240px, (max-width: 1024px) 320px, 400px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-106"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1">
          <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-bold text-white tracking-wider border border-white/10">
            {item.quality}
          </span>
          {item.isLive && (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-bold tracking-wider animate-pulse-live">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              LIVE
            </span>
          )}
          {item.badge && !item.isLive && (
            <span className="px-2 py-0.5 rounded-md bg-white text-[10px] font-bold text-black tracking-wider">
              {item.badge}
            </span>
          )}
        </div>

        {/* Center Hover Action */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
          <div className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center shadow-xl">
            <Icon icon="ph:play-fill" width={16} className="ml-0.5" />
          </div>
        </div>

        {/* Bottom Details */}
        <div className="absolute bottom-3 left-3 right-3 space-y-1">
          <div className="flex items-center justify-between text-[11px] text-zinc-400">
            {showCategory && <span className="truncate">{item.category}</span>}
            <span className="flex items-center gap-1 text-white/90 font-semibold shrink-0">
              <Icon icon="ph:star-fill" width={11} />
              {item.rating}
            </span>
          </div>

          <h3 className="text-sm font-bold text-white truncate group-hover:text-white transition-colors">
            {item.title}
          </h3>

          <div className="flex items-center gap-2 text-[10px] text-zinc-400">
            <span>{item.year}</span>
            {item.duration && (
              <>
                <span>•</span>
                <span>{item.duration}</span>
              </>
            )}
            {item.seasons && (
              <>
                <span>•</span>
                <span>{item.seasons} Seasons</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
