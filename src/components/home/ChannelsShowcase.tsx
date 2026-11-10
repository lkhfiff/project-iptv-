"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useLanguage } from "@/context/LanguageContext";

interface ChannelShowcaseItem {
  id: string;
  name: string;
  category: "sport" | "cinema" | "series" | "kids" | "news" | "docs";
  country: string;
  countryCode: string;
  resolution: string;
  fps: string;
  currentProgram: string;
  bitrate: string;
  accentColor: string;
}

const CHANNELS_SHOWCASE_DATA: ChannelShowcaseItem[] = [
  // Sport
  {
    id: "bein-1-4k",
    name: "beIN SPORTS 1 4K",
    category: "sport",
    country: "France & MENA",
    countryCode: "FR / AR",
    resolution: "4K UHD",
    fps: "60 FPS",
    currentProgram: "Ligue des Champions : PSG vs Bayern Munich (Direct)",
    bitrate: "24.5 Mbps",
    accentColor: "from-purple-600/20 to-purple-900/10",
  },
  {
    id: "canal-sport-4k",
    name: "CANAL+ Sport 4K",
    category: "sport",
    country: "France",
    countryCode: "FR",
    resolution: "4K UHD",
    fps: "60 FPS",
    currentProgram: "Premier League : Manchester City vs Liverpool",
    bitrate: "22.8 Mbps",
    accentColor: "from-emerald-600/20 to-emerald-900/10",
  },
  {
    id: "sky-sports-f1",
    name: "Sky Sports F1 UHD",
    category: "sport",
    country: "Royaume-Uni",
    countryCode: "UK",
    resolution: "4K UHD",
    fps: "60 FPS",
    currentProgram: "Grand Prix de Monaco : Essais Libres & Qualifications",
    bitrate: "25.0 Mbps",
    accentColor: "from-red-600/20 to-red-900/10",
  },
  {
    id: "rmc-sport-1",
    name: "RMC Sport 1 Live",
    category: "sport",
    country: "France",
    countryCode: "FR",
    resolution: "Full HD",
    fps: "60 FPS",
    currentProgram: "UFC 312 : Combat pour le Titre Poids Lourds",
    bitrate: "16.5 Mbps",
    accentColor: "from-blue-600/20 to-blue-900/10",
  },
  {
    id: "dazn-1-4k",
    name: "DAZN 1 Ultra HD",
    category: "sport",
    country: "Europe",
    countryCode: "EU",
    resolution: "4K UHD",
    fps: "60 FPS",
    currentProgram: "Serie A : Inter Milan vs Juventus Turin",
    bitrate: "21.0 Mbps",
    accentColor: "from-amber-600/20 to-amber-900/10",
  },

  // Cinema & Series
  {
    id: "canal-cinema-4k",
    name: "CANAL+ Grand Cinéma",
    category: "cinema",
    country: "France",
    countryCode: "FR",
    resolution: "Dolby Vision",
    fps: "4K 24p",
    currentProgram: "Dune: Deuxième Partie (Inédit TV)",
    bitrate: "23.5 Mbps",
    accentColor: "from-indigo-600/20 to-indigo-900/10",
  },
  {
    id: "hbo-max-channel",
    name: "HBO Max 4K Live",
    category: "series",
    country: "États-Unis",
    countryCode: "US",
    resolution: "4K Atmos",
    fps: "4K 24p",
    currentProgram: "The Last of Us : Saison Complète en Marathon",
    bitrate: "24.0 Mbps",
    accentColor: "from-purple-700/20 to-purple-950/10",
  },
  {
    id: "cine-premier-4k",
    name: "Ciné+ Premier 4K",
    category: "cinema",
    country: "France",
    countryCode: "FR",
    resolution: "4K UHD",
    fps: "50 FPS",
    currentProgram: "Oppenheimer (Version Intégrale Restaurée)",
    bitrate: "20.2 Mbps",
    accentColor: "from-rose-600/20 to-rose-900/10",
  },
  {
    id: "apple-tv-live",
    name: "Apple TV+ Originals Hub",
    category: "series",
    country: "International",
    countryCode: "INT",
    resolution: "Dolby Vision",
    fps: "4K 60FPS",
    currentProgram: "Severance : Épisode Spécial Réalisateur",
    bitrate: "26.0 Mbps",
    accentColor: "from-zinc-600/20 to-zinc-900/10",
  },

  // Kids
  {
    id: "disney-channel-hd",
    name: "Disney Junior & Disney+",
    category: "kids",
    country: "France & Europe",
    countryCode: "FR / EU",
    resolution: "Full HD 1080p",
    fps: "50 FPS",
    currentProgram: "La Maison Magique de Mickey (Sans Publicité)",
    bitrate: "12.0 Mbps",
    accentColor: "from-cyan-600/20 to-cyan-900/10",
  },
  {
    id: "cartoon-network-hd",
    name: "Cartoon Network HD",
    category: "kids",
    country: "France",
    countryCode: "FR",
    resolution: "Full HD 1080p",
    fps: "50 FPS",
    currentProgram: "Teen Titans Go! — Les Nouvelles Aventures",
    bitrate: "12.5 Mbps",
    accentColor: "from-yellow-600/20 to-yellow-900/10",
  },

  // News & Docs
  {
    id: "nat-geo-4k",
    name: "National Geographic 4K",
    category: "docs",
    country: "International",
    countryCode: "INT",
    resolution: "4K HDR",
    fps: "60 FPS",
    currentProgram: "Planète Terre : Les Abysses Inexplorés",
    bitrate: "22.0 Mbps",
    accentColor: "from-amber-600/20 to-amber-900/10",
  },
  {
    id: "discovery-science-4k",
    name: "Discovery Science UHD",
    category: "docs",
    country: "États-Unis & Europe",
    countryCode: "US / EU",
    resolution: "4K UHD",
    fps: "60 FPS",
    currentProgram: "Les Secrets du Cosmos & Télescope James Webb",
    bitrate: "21.5 Mbps",
    accentColor: "from-teal-600/20 to-teal-900/10",
  },
  {
    id: "bbc-news-hd",
    name: "BBC News Live 24/7",
    category: "news",
    country: "Royaume-Uni",
    countryCode: "UK",
    resolution: "Full HD",
    fps: "50 FPS",
    currentProgram: "World Business Report & Global Live Coverage",
    bitrate: "14.0 Mbps",
    accentColor: "from-red-600/20 to-red-900/10",
  },
];

export function ChannelsShowcase() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("all");

  const tabs = [
    { key: "all", label: t.channels.all, icon: "ph:squares-four-bold" },
    { key: "sport", label: t.channels.sports, icon: "ph:soccer-ball-bold" },
    { key: "cinema", label: t.channels.cinema, icon: "ph:film-slate-bold" },
    { key: "series", label: t.channels.series, icon: "ph:television-simple-bold" },
    { key: "kids", label: t.channels.kids, icon: "ph:baby-bold" },
    { key: "docs", label: t.channels.docs, icon: "ph:planet-bold" },
  ];

  const filtered =
    activeTab === "all"
      ? CHANNELS_SHOWCASE_DATA
      : CHANNELS_SHOWCASE_DATA.filter((item) => item.category === activeTab);

  return (
    <section className="py-24 relative overflow-hidden bg-[#07070a] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 space-y-12">
        {/* Header with Title + Link to full channel list */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold tracking-wider uppercase">
              <Icon icon="ph:broadcast-bold" width={13} />
              <span>Bouquets TV en Direct</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {t.channels.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-light max-w-xl">
              {t.channels.subtitle}
            </p>
          </div>

          <Link
            href="/chaines"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-semibold text-xs tracking-wide transition-all self-start md:self-auto group"
          >
            <span>Explorer les 28 500+ Chaînes</span>
            <Icon
              icon="ph:arrow-right-bold"
              width={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 ${
                  isActive
                    ? "bg-sky-500 text-black shadow-lg shadow-sky-500/25"
                    : "bg-[#0f0f14] text-zinc-300 hover:text-white hover:bg-[#15151c] border border-white/[0.06]"
                }`}
              >
                <Icon icon={tab.icon} width={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((ch) => (
              <motion.div
                key={ch.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="relative p-6 rounded-2xl bg-[#0f0f14] border border-white/[0.06] hover:border-sky-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg shadow-black/50"
              >
                {/* Header info */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                      DIRECT ACTIF
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 font-bold">
                      {ch.resolution}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.05] text-zinc-400 border border-white/10">
                      {ch.fps}
                    </span>
                  </div>
                </div>

                {/* Body Channel Details */}
                <div className="pt-4 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-sky-400 transition-colors">
                        {ch.name}
                      </h3>
                      <p className="text-xs text-zinc-400 flex items-center gap-1.5 pt-0.5">
                        <Icon icon="ph:map-pin" width={12} className="text-sky-400" />
                        <span>{ch.country}</span>
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-300 group-hover:scale-105 group-hover:bg-sky-500/10 group-hover:text-sky-400 transition-all shrink-0">
                      <Icon icon="ph:television-bold" width={20} />
                    </div>
                  </div>

                  {/* Current Program Box */}
                  <div className="p-3 rounded-xl bg-black/40 border border-white/[0.04] space-y-1">
                    <div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wide flex items-center gap-1">
                      <Icon icon="ph:clock" width={11} />
                      <span>En cours de diffusion</span>
                    </div>
                    <div className="text-xs font-semibold text-zinc-200 line-clamp-1">
                      {ch.currentProgram}
                    </div>
                  </div>

                  {/* Footer Meta */}
                  <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-400">
                    <span className="font-mono">Débit : {ch.bitrate}</span>
                    <Link
                      href="/essai-gratuit"
                      className="text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1 transition-colors"
                    >
                      <span>Tester le flux</span>
                      <Icon icon="ph:arrow-right" width={12} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
