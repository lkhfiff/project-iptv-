"use client";

import React from "react";
import { Icon } from "@iconify/react";

interface CategoryMarqueeItem {
  name: string;
  category: string;
  quality: string;
  icon: string;
}

const CATEGORIES_ROW1: CategoryMarqueeItem[] = [
  { name: "Sport & Matchs en Direct", category: "Football, F1, UFC, Tennis, NBA", quality: "4K UHD 60FPS", icon: "ph:soccer-ball-bold" },
  { name: "Cinéma & Nouveautés", category: "Box-Office Récent & Classiques", quality: "Dolby Vision", icon: "ph:film-slate-bold" },
  { name: "Séries & Saisons VOD", category: "Intégrales & Épisodes Hebdo", quality: "4K HDR", icon: "ph:television-simple-bold" },
  { name: "Jeunesse & Enfants", category: "Dessins Animés & Éducatif Sans Pub", quality: "FHD 1080p", icon: "ph:baby-bold" },
  { name: "Actualités Mondiales 24/7", category: "Info en Direct France & International", quality: "Full HD", icon: "ph:newspaper-bold" },
  { name: "Documentaires & Découverte", category: "Nature, Sciences, Histoire & Cosmos", quality: "4K HDR", icon: "ph:planet-bold" },
];

const CATEGORIES_ROW2: CategoryMarqueeItem[] = [
  { name: "Événements PPV & Soirées Live", category: "Grands Combats & Soirées Exclusives", quality: "4K 60FPS", icon: "ph:broadcast-bold" },
  { name: "Divertissement & Talk-Shows", category: "Émissions Populaires & Replay", quality: "Full HD", icon: "ph:sparkle-bold" },
  { name: "Chaînes Internationales", category: "France, UK, USA, Monde Arabe, Europe", quality: "4K / FHD", icon: "ph:globe-hemisphere-west-bold" },
  { name: "Musique & Concerts Live", category: "Variété, Électro, Festivals", quality: "Dolby 5.1", icon: "ph:music-notes-bold" },
  { name: "Sports Mécaniques & Vitesse", category: "Formule 1, MotoGP, Rallye WRC", quality: "60 FPS", icon: "ph:steering-wheel-bold" },
  { name: "Bouquets Régionaux & Locaux", category: "Chaînes Généralistes & Thématiques", quality: "1080p", icon: "ph:television-bold" },
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
            {[...CATEGORIES_ROW1, ...CATEGORIES_ROW1].map((item, idx) => (
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
            {[...CATEGORIES_ROW2, ...CATEGORIES_ROW2].map((item, idx) => (
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
