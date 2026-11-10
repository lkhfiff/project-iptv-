"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { MediaItem } from "@/data/media";
import { WhatsAppButton } from "./WhatsAppButton";

interface LiveSportsCardProps {
  item: MediaItem;
  onSelect: (item: MediaItem) => void;
}

export function LiveSportsCard({ item, onSelect }: LiveSportsCardProps) {
  const match = item.matchInfo;

  return (
    <div
      onClick={() => onSelect(item)}
      className="group relative rounded-3xl overflow-hidden bg-white dark:bg-[#151515] border border-black/10 dark:border-white/10 hover:border-black/25 dark:hover:border-white/30 transition-all duration-300 hover:shadow-2xl shadow-lg shadow-black/5 dark:shadow-none cursor-pointer flex flex-col justify-between"
    >
      {/* Background Artwork */}
      <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-black">
        <Image
          src={item.backdropUrl || item.posterUrl}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 500px"
          className="object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

        {/* Tournament & Status Header */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs text-white">
          <span className="font-medium drop-shadow flex items-center gap-1.5">
            <Icon icon="ph:trophy-fill" width={14} className="text-amber-400" />
            <span>{match?.tournament || item.category}</span>
          </span>

          {item.isLive ? (
            <span className="text-[10px] font-bold text-red-500 bg-black/70 px-2 py-0.5 rounded tracking-wide">
              DIRECT
            </span>
          ) : (
            <span className="text-[11px] text-zinc-300 drop-shadow">
              {item.year}
            </span>
          )}
        </div>

        {/* Center Hover Play Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
            <Icon icon="ph:play-fill" width={20} className="ml-0.5" />
          </div>
        </div>
      </div>

      {/* Match Details Body */}
      <div className="p-5 sm:p-6 space-y-4">
        {match ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between font-semibold text-base sm:text-lg text-zinc-950 dark:text-white">
              <span className="truncate pr-2">{match.teamHome}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-zinc-700 dark:text-zinc-300 font-mono shrink-0">
                VS
              </span>
              <span className="truncate pl-2 text-right">{match.teamAway}</span>
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-[#a0a0a0] pt-2 border-t border-black/5 dark:border-white/5 font-light">
              <span>Coup d&apos;envoi: {match.time}</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-medium truncate max-w-[180px]">
                {match.channel}
              </span>
            </div>
          </div>
        ) : (
          <div className="space-y-1">
            <h3 className="font-semibold text-base text-zinc-950 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors">
              {item.title}
            </h3>
            <p className="text-xs text-zinc-600 dark:text-[#a0a0a0] line-clamp-2 font-light leading-relaxed">
              {item.synopsis}
            </p>
          </div>
        )}

        {/* Card CTA */}
        <div className="pt-1" onClick={(e) => e.stopPropagation()}>
          <WhatsAppButton
            variant="solid"
            size="sm"
            fullWidth
            customMessage={`Bonjour ! Je souhaite suivre le match "${item.title}" en direct en 4K.`}
            label="Suivre en Direct 4K"
          />
        </div>
      </div>
    </div>
  );
}
