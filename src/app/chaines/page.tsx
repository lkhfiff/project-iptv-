"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useLanguage } from "@/context/LanguageContext";

interface ChannelItem {
  id: string;
  name: string;
  category: "sport" | "cinema" | "series" | "kids" | "news" | "docs";
  country: string;
  countryCode: string;
  resolution: string;
  fps: string;
  bitrate: string;
  currentProgram: string;
}

const ALL_CHANNELS: ChannelItem[] = [
  // Sport France & Europe
  { id: "ch-1", name: "beIN SPORTS 1 4K UHD", category: "sport", country: "France", countryCode: "FR", resolution: "4K UHD", fps: "60 FPS", bitrate: "24.5 Mbps", currentProgram: "Ligue des Champions Direct" },
  { id: "ch-2", name: "beIN SPORTS 2 HD", category: "sport", country: "France", countryCode: "FR", resolution: "FHD 1080p", fps: "60 FPS", bitrate: "18.0 Mbps", currentProgram: "Liga Espagnole Match du Soir" },
  { id: "ch-3", name: "CANAL+ Sport 4K", category: "sport", country: "France", countryCode: "FR", resolution: "4K UHD", fps: "60 FPS", bitrate: "24.0 Mbps", currentProgram: "Premier League Live : Top 6" },
  { id: "ch-4", name: "CANAL+ Foot UHD", category: "sport", country: "France", countryCode: "FR", resolution: "4K UHD", fps: "60 FPS", bitrate: "23.5 Mbps", currentProgram: "Soir de Ligue des Champions" },
  { id: "ch-5", name: "RMC Sport 1 HD", category: "sport", country: "France", countryCode: "FR", resolution: "FHD 1080p", fps: "60 FPS", bitrate: "16.5 Mbps", currentProgram: "UFC Soirée Combats" },
  { id: "ch-6", name: "DAZN 1 France 4K", category: "sport", country: "France", countryCode: "FR", resolution: "4K UHD", fps: "60 FPS", bitrate: "22.0 Mbps", currentProgram: "Ligue 1 McDonald's" },
  { id: "ch-7", name: "Eurosport 1 4K", category: "sport", country: "France", countryCode: "FR", resolution: "4K UHD", fps: "60 FPS", bitrate: "21.0 Mbps", currentProgram: "Grand Chelem Tennis & Cyclisme" },

  // Sport UK & US
  { id: "ch-8", name: "Sky Sports Main Event 4K", category: "sport", country: "Royaume-Uni", countryCode: "UK", resolution: "4K UHD", fps: "60 FPS", bitrate: "25.0 Mbps", currentProgram: "Super Sunday Live" },
  { id: "ch-9", name: "Sky Sports F1 UHD", category: "sport", country: "Royaume-Uni", countryCode: "UK", resolution: "4K UHD", fps: "60 FPS", bitrate: "25.0 Mbps", currentProgram: "Formula 1 Grand Prix Weekend" },
  { id: "ch-10", name: "TNT Sports 1 Ultimate 4K", category: "sport", country: "Royaume-Uni", countryCode: "UK", resolution: "4K UHD", fps: "60 FPS", bitrate: "24.5 Mbps", currentProgram: "UEFA Europa League Live" },
  { id: "ch-11", name: "ESPN+ USA 4K", category: "sport", country: "États-Unis", countryCode: "US", resolution: "4K UHD", fps: "60 FPS", bitrate: "22.5 Mbps", currentProgram: "NBA Saturday Night Prime" },

  // Arab Sports & General
  { id: "ch-12", name: "beIN SPORTS MENA 1 4K", category: "sport", country: "Monde Arabe", countryCode: "AR", resolution: "Pure 4K", fps: "60 FPS", bitrate: "25.0 Mbps", currentProgram: "استوديو دوري أبطال أوروبا مباشر" },
  { id: "ch-13", name: "SSC Sports 1 HD", category: "sport", country: "Arabie Saoudite", countryCode: "SA", resolution: "FHD 1080p", fps: "60 FPS", bitrate: "18.0 Mbps", currentProgram: "دوري روشن السعودي للمحترفين" },
  { id: "ch-14", name: "Abu Dhabi Sports 1 Premium", category: "sport", country: "Émirats", countryCode: "AE", resolution: "FHD 1080p", fps: "60 FPS", bitrate: "17.0 Mbps", currentProgram: "كأس رئيس الدولة مباشر" },

  // Cinema France & Europe
  { id: "ch-15", name: "CANAL+ 4K UHD", category: "cinema", country: "France", countryCode: "FR", resolution: "Dolby Vision", fps: "50 FPS", bitrate: "24.0 Mbps", currentProgram: "Le Grand Cinéma : Première Exclusivité" },
  { id: "ch-16", name: "CANAL+ Box-Office 4K", category: "cinema", country: "France", countryCode: "FR", resolution: "4K UHD", fps: "50 FPS", bitrate: "23.0 Mbps", currentProgram: "Blockbusters Récents 2025" },
  { id: "ch-17", name: "Ciné+ Premier 4K", category: "cinema", country: "France", countryCode: "FR", resolution: "4K UHD", fps: "50 FPS", bitrate: "21.0 Mbps", currentProgram: "Grands Succès du Box-Office" },
  { id: "ch-18", name: "HBO Max 4K Live", category: "series", country: "États-Unis", countryCode: "US", resolution: "4K Atmos", fps: "60 FPS", bitrate: "24.0 Mbps", currentProgram: "The Penguin - Épisode Inédit" },
  { id: "ch-19", name: "Apple TV+ Originals Live", category: "series", country: "États-Unis", countryCode: "US", resolution: "Dolby Vision", fps: "60 FPS", bitrate: "25.0 Mbps", currentProgram: "Séries Originales 4K HDR" },

  // Enfants / Kids
  { id: "ch-20", name: "Disney Junior HD", category: "kids", country: "France", countryCode: "FR", resolution: "FHD 1080p", fps: "50 FPS", bitrate: "12.0 Mbps", currentProgram: "Spidey et ses Amis Extraordinaires" },
  { id: "ch-21", name: "Cartoon Network HD", category: "kids", country: "France", countryCode: "FR", resolution: "FHD 1080p", fps: "50 FPS", bitrate: "12.5 Mbps", currentProgram: "Gumball & Teen Titans Go!" },
  { id: "ch-22", name: "Nickelodeon 4K", category: "kids", country: "International", countryCode: "INT", resolution: "4K UHD", fps: "50 FPS", bitrate: "18.0 Mbps", currentProgram: "Bob l'Éponge & Pat' Patrouille" },

  // News & Documentaries
  { id: "ch-23", name: "National Geographic 4K", category: "docs", country: "International", countryCode: "INT", resolution: "4K HDR", fps: "60 FPS", bitrate: "22.0 Mbps", currentProgram: "Les Secrets Oubliés des Civilisations" },
  { id: "ch-24", name: "Discovery Science 4K", category: "docs", country: "International", countryCode: "INT", resolution: "4K UHD", fps: "60 FPS", bitrate: "21.5 Mbps", currentProgram: "Voyage au Cœur des Galaxies" },
  { id: "ch-25", name: "BBC News Live", category: "news", country: "Royaume-Uni", countryCode: "UK", resolution: "FHD 1080p", fps: "50 FPS", bitrate: "14.0 Mbps", currentProgram: "Live Global News & Market Analysis" },
  { id: "ch-26", name: "BFM TV HD & CNews", category: "news", country: "France", countryCode: "FR", resolution: "FHD 1080p", fps: "50 FPS", bitrate: "13.0 Mbps", currentProgram: "Édition Spéciale en Direct" },
  { id: "ch-27", name: "Al Jazeera HD Live", category: "news", country: "Monde Arabe", countryCode: "AR", resolution: "FHD 1080p", fps: "50 FPS", bitrate: "14.5 Mbps", currentProgram: "بث مباشر وتغطية إخبارية على مدار الساعة" },
];

export default function ChannelsPage() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCountry, setSelectedCountry] = useState("all");

  const categories = [
    { key: "all", label: "Toutes les catégories", icon: "ph:squares-four-bold" },
    { key: "sport", label: "Sport & Live", icon: "ph:soccer-ball-bold" },
    { key: "cinema", label: "Cinéma", icon: "ph:film-slate-bold" },
    { key: "series", label: "Séries VOD", icon: "ph:television-simple-bold" },
    { key: "kids", label: "Enfants & Jeunesse", icon: "ph:baby-bold" },
    { key: "docs", label: "Documentaires", icon: "ph:planet-bold" },
    { key: "news", label: "Actualités 24/7", icon: "ph:newspaper-bold" },
  ];

  const countries = [
    { key: "all", label: "Tous les pays" },
    { key: "France", label: "France 🇫🇷" },
    { key: "Royaume-Uni", label: "Royaume-Uni 🇬🇧" },
    { key: "États-Unis", label: "États-Unis 🇺🇸" },
    { key: "Monde Arabe", label: "Monde Arabe 🇸🇦" },
    { key: "International", label: "International 🌍" },
  ];

  const filteredChannels = useMemo(() => {
    return ALL_CHANNELS.filter((ch) => {
      const matchSearch =
        ch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ch.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ch.currentProgram.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCat =
        selectedCategory === "all" || ch.category === selectedCategory;
      const matchCountry =
        selectedCountry === "all" || ch.country === selectedCountry;
      return matchSearch && matchCat && matchCountry;
    });
  }, [searchTerm, selectedCategory, selectedCountry]);

  return (
    <div className="py-12 sm:py-16 space-y-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 space-y-10">
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold tracking-wider uppercase">
            <Icon icon="ph:broadcast-bold" width={14} />
            <span>Catalogue Officiel NOUDINE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Plus de 28 500 Chaînes Directes en 4K UHD
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Consultez notre sélection de bouquets mondiaux triés sur le volet. Flux garantis sans latence, encodage H.265/HEVC et son Dolby Atmos.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-6 rounded-3xl bg-[#0f0f14] border border-white/[0.08] space-y-6 shadow-xl shadow-black/60">
          {/* Search Input */}
          <div className="relative">
            <Icon
              icon="ph:magnifying-glass-bold"
              width={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
            />
            <input
              type="text"
              placeholder="Rechercher une chaîne, un match, un bouquet (ex: beIN, Canal, Premier League)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-black/60 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>

          {/* Categories Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  selectedCategory === cat.key
                    ? "bg-sky-500 text-black shadow-md shadow-sky-500/25"
                    : "bg-white/[0.04] text-zinc-400 hover:text-white border border-white/[0.06]"
                }`}
              >
                <Icon icon={cat.icon} width={14} />
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Country Selector */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-xs text-zinc-500 font-medium shrink-0 mr-1">
              Filtrer par pays :
            </span>
            {countries.map((cnt) => (
              <button
                key={cnt.key}
                onClick={() => setSelectedCountry(cnt.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors shrink-0 ${
                  selectedCountry === cnt.key
                    ? "bg-white/10 text-white border border-white/20 font-bold"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {cnt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
          <span>{filteredChannels.length} chaînes affichées sur cet échantillon</span>
          <Link
            href="/essai-gratuit"
            className="text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1"
          >
            <span>Tester l&apos;ensemble des 28 500 chaînes gratuitement</span>
            <Icon icon="ph:arrow-right" width={13} />
          </Link>
        </div>

        {/* Channel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChannels.map((channel) => (
            <div
              key={channel.id}
              className="p-6 rounded-2xl bg-[#0f0f14] border border-white/[0.06] hover:border-sky-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg shadow-black/50 space-y-4"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                    SIGNAL DIRECT 100%
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 text-[10px] font-mono font-bold">
                    {channel.resolution}
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-white/[0.05] text-zinc-400 border border-white/10 text-[10px] font-mono">
                    {channel.fps}
                  </span>
                </div>
              </div>

              {/* Title & Country */}
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white group-hover:text-sky-400 transition-colors">
                  {channel.name}
                </h3>
                <div className="text-xs text-zinc-400 flex items-center gap-2">
                  <Icon icon="ph:map-pin" width={12} className="text-sky-400" />
                  <span>{channel.country}</span>
                  <span className="text-zinc-600">•</span>
                  <span className="font-mono text-zinc-400">{channel.bitrate}</span>
                </div>
              </div>

              {/* Program Box */}
              <div className="p-3 rounded-xl bg-black/50 border border-white/[0.04] space-y-1">
                <div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wide flex items-center gap-1">
                  <Icon icon="ph:clock" width={11} />
                  <span>Programme Actuel</span>
                </div>
                <div className="text-xs font-semibold text-zinc-200 line-clamp-1">
                  {channel.currentProgram}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] text-zinc-500">Anti-Freeze 9.9 Inclus</span>
                <Link
                  href="/essai-gratuit"
                  className="px-3.5 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500 text-sky-400 hover:text-black font-bold text-xs border border-sky-500/20 transition-all flex items-center gap-1.5"
                >
                  <span>Demander l&apos;accès</span>
                  <Icon icon="ph:arrow-right-bold" width={11} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
