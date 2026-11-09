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
      className="group relative rounded-3xl overflow-hidden bg-zinc-950/80 border border-white/10 hover:border-orange-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 cursor-pointer flex flex-col justify-between"
    >
      {/* Background Artwork */}
      <div className="relative w-full h-48 sm:h-56 overflow-hidden">
        <Image
          src={item.backdropUrl || item.posterUrl}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 500px"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

        {/* Live Pill / Tournament Header */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-bold text-amber-400 border border-white/10 flex items-center gap-1.5">
            <Icon icon="ph:trophy-fill" width={14} />
            <span>{match?.tournament || item.category}</span>
          </span>

          {item.isLive ? (
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white text-[11px] font-black tracking-wider animate-pulse-live shadow-lg shadow-red-600/30">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              LIVE 4K
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded-full bg-orange-500/80 text-black text-[10px] font-black uppercase tracking-wider">
              {item.year}
            </span>
          )}
        </div>

        {/* Center Hover Play Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 rounded-full bg-orange-500 text-black flex items-center justify-center shadow-lg shadow-orange-500/50">
            <Icon icon="ph:play-fill" width={20} className="ml-0.5" />
          </div>
        </div>
      </div>

      {/* Match Details Body */}
      <div className="p-5 sm:p-6 space-y-4">
        {match ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between font-bold text-base sm:text-lg text-white">
              <span className="truncate pr-2">{match.teamHome}</span>
              <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-orange-400 font-mono shrink-0">
                VS
              </span>
              <span className="truncate pl-2 text-right">{match.teamAway}</span>
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-400 pt-1 border-t border-white/5">
              <span>Kickoff: {match.time}</span>
              <span className="text-emerald-400 font-medium truncate max-w-[180px]">
                {match.channel}
              </span>
            </div>
          </div>
        ) : (
          <div className="space-y-1">
            <h3 className="font-bold text-base text-white group-hover:text-orange-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-xs text-zinc-400 line-clamp-2">{item.synopsis}</p>
          </div>
        )}

        {/* Card CTA */}
        <div className="pt-2" onClick={(e) => e.stopPropagation()}>
          <WhatsAppButton
            variant="luxury"
            size="sm"
            fullWidth
            customMessage={`Hello AETHER+! I want to watch the match "${item.title}" live in 4K. Please setup my IPTV subscription.`}
            label="Watch Live on WhatsApp"
          />
        </div>
      </div>
    </div>
  );
}
