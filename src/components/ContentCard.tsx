"use client";

import React from "react";
import Image from "next/image";
import { Star, Play, Info, Volume2 } from "lucide-react";
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
  const isBackdrop = aspectRatio === "backdrop" || aspectRatio === "wide";

  return (
    <div
      onClick={() => onSelect(item)}
      className="group relative cursor-pointer select-none rounded-2xl overflow-hidden bg-zinc-900/60 border border-white/5 hover:border-orange-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1.5"
    >
      {/* Image container */}
      <div
        className={`relative w-full overflow-hidden ${
          isBackdrop ? "aspect-video" : "aspect-[2/3]"
        }`}
      >
        <Image
          src={isBackdrop ? item.backdropUrl || item.posterUrl : item.posterUrl}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 240px, (max-width: 1024px) 320px, 400px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-108"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

        {/* Top Badges */}
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
            <span className="px-2 py-0.5 rounded-md bg-orange-500/80 backdrop-blur-md text-[10px] font-bold text-black tracking-wider">
              {item.badge}
            </span>
          )}
        </div>

        {/* Center Hover Action Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
          <div className="w-12 h-12 rounded-full bg-orange-500/90 text-black flex items-center justify-center shadow-lg shadow-orange-500/40 backdrop-blur-sm">
            <Play className="w-5 h-5 fill-black ml-0.5" />
          </div>
        </div>

        {/* Bottom Details */}
        <div className="absolute bottom-3 left-3 right-3 space-y-1">
          <div className="flex items-center justify-between text-[11px] text-zinc-400">
            {showCategory && <span className="truncate">{item.category}</span>}
            <span className="flex items-center gap-1 text-amber-400 font-semibold shrink-0">
              <Star className="w-3 h-3 fill-amber-400" />
              {item.rating}
            </span>
          </div>

          <h3 className="text-sm font-bold text-white truncate group-hover:text-orange-400 transition-colors">
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

