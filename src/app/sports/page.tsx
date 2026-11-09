"use client";

import React, { useState, useMemo } from "react";
import { Trophy, Flame, Play, Tv, ShieldCheck, Zap, ArrowRight, Radio } from "lucide-react";
import { LIVE_SPORTS_EVENTS, HERO_SLIDES, MediaItem } from "@/data/media";
import { LiveSportsCard } from "@/components/LiveSportsCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useMediaModal } from "@/components/SiteLayout";

export default function SportsPage() {
  const { openModal } = useMediaModal();
  const [selectedSport, setSelectedSport] = useState<string>("All");

  const allSports: MediaItem[] = useMemo(() => {
    return [
      ...LIVE_SPORTS_EVENTS,
      ...HERO_SLIDES.filter((h) => h.type === "sport"),
    ];
  }, []);

  const sportsFilters = ["All", "Football", "Combat Sports", "Motorsport", "Basketball"];

  const filteredSports = useMemo(() => {
    return allSports.filter((item) => {
      if (selectedSport === "All") return true;
      if (selectedSport === "Football") {
        return (
          item.category.includes("Premier League") ||
          item.category.includes("La Liga") ||
          item.category.includes("Sports") ||
          item.genres.includes("Football")
        );
      }
      return item.category.includes(selectedSport) || item.genres.includes(selectedSport);
    });
  }, [allSports, selectedSport]);

  const sportsChannels = [
    { name: "Sky Sports Main Event UHD", specs: "4K 60FPS • Dolby Atmos", region: "UK" },
    { name: "Sky Sports Premier League UHD", specs: "4K 60FPS • Multi-Cam", region: "UK" },
    { name: "Sky Sports F1 UHD", specs: "4K 60FPS • Onboard Feeds", region: "UK" },
    { name: "TNT Sports 1 Ultimate 4K", specs: "4K UHD • HDR10+", region: "UK" },
    { name: "beIN Sports MENA 4K", specs: "Pure 4K • English/Arabic", region: "MENA" },
    { name: "DAZN 1 Bar 4K", specs: "4K UHD • Low Latency", region: "ES / DE" },
    { name: "Movistar+ LaLiga 4K", specs: "4K UHD 60FPS", region: "ES" },
    { name: "Canal+ Sport 360 UHD", specs: "4K UHD • French", region: "FR" },
    { name: "ESPN 4K US", specs: "4K UHD 60FPS", region: "US" },
    { name: "NBC Sports 4K", specs: "4K UHD • Premier League", region: "US" },
    { name: "Optus Sport 1-5 4K", specs: "4K 60FPS", region: "AU" },
    { name: "Sportsnet 4K", specs: "4K UHD • NHL & MLB", region: "CA" },
  ];

  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-xs font-bold uppercase tracking-widest">
          <Flame className="w-3.5 h-3.5 text-red-500" />
          Zero-Lag 60FPS Sports Streaming
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Live Sports & Pay-Per-View Arena
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
          Never miss another goal, knockout, or checkered flag. Experience football, Formula 1, UFC, and NBA with no delay, no buffering, and stadium ambient audio.
        </p>

        <div className="pt-2 flex justify-center gap-3">
          <WhatsAppButton
            variant="luxury"
            size="md"
            label="Instant Sports Setup via WhatsApp"
            customMessage="Hello! I want an IPTV subscription primarily to watch live football and sports in 4K."
          />
        </div>
      </div>

      {/* Sport Category Filter */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar py-2">
        {sportsFilters.map((sf) => (
          <button
            key={sf}
            onClick={() => setSelectedSport(sf)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              selectedSport === sf
                ? "bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105"
                : "bg-white/5 text-zinc-400 hover:text-white"
            }`}
          >
            {sf}
          </button>
        ))}
      </div>

      {/* Featured Sports Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSports.map((event) => (
          <LiveSportsCard key={event.id} item={event} onSelect={openModal} />
        ))}
      </div>

      {/* Premium Sports Channels Grid */}
      <div className="rounded-3xl bg-zinc-950/80 border border-white/10 p-6 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Dedicated 4K Sports Broadcasting Channels
            </h2>
            <p className="text-xs text-zinc-400">
              Included with every AETHER+ subscription at no extra pay-per-view fee.
            </p>
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            All Feeds Active
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {sportsChannels.map((channel, i) => (
            <div
              key={i}
              className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between hover:border-orange-500/30 transition-all"
            >
              <div className="space-y-0.5">
                <h4 className="text-xs sm:text-sm font-semibold text-white">
                  {channel.name}
                </h4>
                <p className="text-[10px] text-zinc-400">{channel.specs}</p>
              </div>
              <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-bold text-zinc-300">
                {channel.region}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Zero Buffering Sports Guarantee */}
      <div className="rounded-3xl bg-gradient-to-r from-zinc-900 to-black border border-white/10 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl text-center md:text-left">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider justify-center md:justify-start">
            <ShieldCheck className="w-4 h-4" />
            <span>Anti-Freeze™ 9.9 Matchday Cluster</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Never Miss The 90th Minute Penalty.
          </h3>
          <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
            While generic IPTV services suffer from severe lag during high-stakes finals, our dedicated 10Gbps sports nodes ensure your stream remains completely fluid from kickoff to extra time.
          </p>
        </div>

        <WhatsAppButton
          variant="luxury"
          size="lg"
          label="Get Instant Sports Pass on WhatsApp"
          customMessage="Hello! I want to get the AETHER+ sports pass to watch upcoming live matches without lag."
        />
      </div>
    </div>
  );
}

