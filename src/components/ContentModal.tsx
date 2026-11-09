"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { MediaItem } from "@/data/media";
import { WhatsAppButton } from "@/components/WhatsAppButton";

interface ContentModalProps {
  item: MediaItem | null;
  onClose: () => void;
}

export function ContentModal({ item, onClose }: ContentModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (item) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl rounded-3xl bg-zinc-950 border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] z-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all active:scale-95 cursor-pointer"
          aria-label="Close modal"
        >
          <Icon icon="ph:x-bold" width={16} />
        </button>

        {/* Media Backdrop Header */}
        <div className="relative w-full h-72 sm:h-96 shrink-0 bg-zinc-900">
          <Image
            src={item.backdropUrl || item.posterUrl}
            alt={item.title}
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/30 to-transparent" />

          {/* Badge & Floating info */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {item.isLive && (
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/90 text-white text-xs font-bold tracking-wider animate-pulse-live">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  LIVE BROADCAST
                </span>
              )}
              {item.badge && (
                <span className="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs font-bold uppercase tracking-wider">
                  {item.badge}
                </span>
              )}
              <span className="px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-md text-white text-xs font-bold">
                {item.quality}
              </span>
              {item.audio && (
                <span className="px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1">
                  <Icon icon="ph:speaker-high-fill" width={13} className="text-amber-300" />
                  {item.audio}
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
              {item.title}
            </h2>
          </div>
        </div>

        {/* Details & Action Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          {/* Metadata bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-zinc-400 border-b border-white/5 pb-4">
            <span className="flex items-center gap-1 text-amber-400 font-bold">
              <Icon icon="ph:star-fill" width={14} className="text-amber-400" />
              {item.rating}
            </span>
            <span>•</span>
            <span className="font-semibold text-white">{item.year}</span>
            {item.duration && (
              <>
                <span>•</span>
                <span>{item.duration}</span>
              </>
            )}
            {item.seasons && (
              <>
                <span>•</span>
                <span>{item.seasons} Full Seasons</span>
              </>
            )}
            <span>•</span>
            <div className="flex items-center gap-1.5">
              {item.genres.map((g) => (
                <span
                  key={g}
                  className="px-2 py-0.5 rounded-full bg-white/5 text-zinc-300 text-[11px]"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>

          {/* Synopsis */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-bold text-zinc-400 tracking-wider">
              Synopsis & Overview
            </h4>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {item.synopsis}
            </p>
          </div>

          {/* Hardware & Streaming Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-zinc-500 block">Encoding</span>
              <span className="font-semibold text-white">H.265 / HEVC 10-Bit</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-zinc-500 block">Frame Rate</span>
              <span className="font-semibold text-white">60 FPS Cinematic</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-zinc-500 block">Anti-Freeze</span>
              <span className="font-semibold text-emerald-400">Zero-Buffer 9.9</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-zinc-500 block">Subtitles</span>
              <span className="font-semibold text-white">Multi-Language CC</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <WhatsAppButton
              variant="luxury"
              size="lg"
              fullWidth
              customMessage={`Hello AETHER+! I would like to watch "${item.title}" (${item.category}). Please activate my IPTV subscription so I can stream it in 4K.`}
              label={`Stream "${item.title}" via WhatsApp`}
            />

            <a
              href="/pricing"
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-sm font-semibold text-center transition-colors shrink-0"
            >
              View Subscription Passes &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
