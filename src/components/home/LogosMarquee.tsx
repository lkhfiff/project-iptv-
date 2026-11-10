"use client";

import React from "react";
import { Icon } from "@iconify/react";

interface MarqueeItem {
  name: string;
  category: string;
  quality: string;
  icon: string;
}

const MARQUEE_ITEMS_ROW1: MarqueeItem[] = [
  { name: "beIN SPORTS 4K", category: "Ligue des Champions", quality: "4K UHD 60FPS", icon: "ph:soccer-ball-bold" },
  { name: "CANAL+ 4K", category: "Cinéma & Premier League", quality: "Dolby Vision", icon: "ph:film-slate-bold" },
  { name: "SKY SPORTS F1", category: "Formule 1 & Moto GP", quality: "Pure 4K 60FPS", icon: "ph:steering-wheel-bold" },
  { name: "RMC SPORT", category: "UFC PPV & Boxe", quality: "FHD 1080p", icon: "ph:boxing-glove-bold" },
  { name: "DAZN 1", category: "Ligue 1 & Serie A", quality: "4K UHD", icon: "ph:trophy-bold" },
  { name: "TNT SPORTS 1", category: "Premier League Live", quality: "4K Ultimate", icon: "ph:broadcast-bold" },
  { name: "EUROSPORT 1 & 2", category: "Tennis & Cyclisme", quality: "60 FPS", icon: "ph:bicycle-bold" },
  { name: "MOVISTAR+ LALIGA", category: "El Clásico & Liga", quality: "4K HDR", icon: "ph:football-bold" },
];

const MARQUEE_ITEMS_ROW2: MarqueeItem[] = [
  { name: "TF1 4K & M6 HDR", category: "Généraliste France", quality: "4K UHD", icon: "ph:television-bold" },
  { name: "HBO MAX LIVE", category: "Séries & Blockbusters", quality: "Dolby Atmos", icon: "ph:popcorn-bold" },
  { name: "BBC ONE & ITV", category: "Royaume-Uni", quality: "Full HD", icon: "ph:flag-bold" },
  { name: "OSN & ROTANA", category: "Moyen-Orient & Maghreb", quality: "FHD 1080p", icon: "ph:star-four-bold" },
  { name: "DISNEY JUNIOR", category: "Jeunesse & Enfants", quality: "FHD Sans Pub", icon: "ph:baby-bold" },
  { name: "NATIONAL GEOGRAPHIC", category: "Documentaires", quality: "4K HDR", icon: "ph:planet-bold" },
  { name: "NETFLIX VOD 4K", category: "Films & Séries 2025", quality: "Ultra HD", icon: "ph:video-camera-bold" },
  { name: "DISNEY+ VOD", category: "Marvel & Star Wars", quality: "4K Atmos", icon: "ph:sparkle-bold" },
];

export function LogosMarquee() {
  return (
    <section className="relative py-12 overflow-hidden border-y border-white/[0.05] bg-[#050508]/60">
      {/* Background gradients for soft edge fades */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-[#07070a] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-[#07070a] to-transparent z-10 pointer-events-none" />

      <div className="space-y-4">
        {/* Row 1: Leftward */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-left flex items-center gap-4">
            {[...MARQUEE_ITEMS_ROW1, ...MARQUEE_ITEMS_ROW1].map((item, idx) => (
              <div
                key={`row1-${idx}`}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#0f0f14] border border-white/[0.06] hover:border-sky-500/30 transition-all select-none group shrink-0"
              >
                <div className="w-8 h-8 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                  <Icon icon={item.icon} width={18} />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white group-hover:text-sky-400 transition-colors">
                    {item.name}
                  </div>
                  <div className="text-[10px] text-zinc-400">
                    {item.category} • <span className="text-sky-400/80 font-mono">{item.quality}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-right flex items-center gap-4">
            {[...MARQUEE_ITEMS_ROW2, ...MARQUEE_ITEMS_ROW2].map((item, idx) => (
              <div
                key={`row2-${idx}`}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#0f0f14] border border-white/[0.06] hover:border-sky-500/30 transition-all select-none group shrink-0"
              >
                <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Icon icon={item.icon} width={18} />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {item.name}
                  </div>
                  <div className="text-[10px] text-zinc-400">
                    {item.category} • <span className="text-cyan-400/80 font-mono">{item.quality}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
