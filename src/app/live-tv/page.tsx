"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Search, Tv, Globe, Radio, Play, CheckCircle2, Volume2, Sparkles, ArrowRight } from "lucide-react";
import { INTERNATIONAL_TV_PACKAGES } from "@/data/media";
import { ChannelPackageCard } from "@/components/ChannelPackageCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LiveChannelPlayerSimulator } from "@/components/LiveChannelPlayerSimulator";
import { NetworkSpeedTester } from "@/components/NetworkSpeedTester";
import { generateWhatsAppContactUrl } from "@/data/config";

// Simulated Live EPG Guide items
const MOCK_EPG_SCHEDULE = [
  {
    channel: "Sky Sports Premier League UHD",
    category: "Sports",
    currentShow: "Super Sunday: Pre-Match Tactical Build-up",
    timeRemaining: "42 min remaining",
    progress: 65,
    resolution: "4K UHD 60FPS",
    audio: "Dolby Atmos",
    country: "UK",
  },
  {
    channel: "TNT Sports 1 Ultimate 4K",
    category: "Sports",
    currentShow: "UEFA Champions League Matchday Live",
    timeRemaining: "18 min remaining",
    progress: 80,
    resolution: "4K UHD 60FPS",
    audio: "5.1 Surround",
    country: "UK",
  },
  {
    channel: "beIN Sports MENA 1 4K",
    category: "Sports",
    currentShow: "Studio Tahlili: European Football Central",
    timeRemaining: "30 min remaining",
    progress: 50,
    resolution: "Pure 4K",
    audio: "Arabic / English",
    country: "AR",
  },
  {
    channel: "Canal+ 4K UHD France",
    category: "Cinema",
    currentShow: "Le Grand Cinéma: Dune Part Two (4K HDR)",
    timeRemaining: "1h 14m remaining",
    progress: 35,
    resolution: "Dolby Vision",
    audio: "VF & VOST",
    country: "FR",
  },
  {
    channel: "HBO Max Live 4K US",
    category: "Cinema",
    currentShow: "House of the Dragon - Season Premiere",
    timeRemaining: "22 min remaining",
    progress: 72,
    resolution: "4K UHD",
    audio: "Dolby Atmos",
    country: "US",
  },
  {
    channel: "Movistar+ LaLiga 4K",
    category: "Sports",
    currentShow: "Directo Gol: La Jornada en Detalle",
    timeRemaining: "55 min remaining",
    progress: 25,
    resolution: "4K 60FPS",
    audio: "Spanish",
    country: "ES",
  },
];

export default function LiveTVPage() {
  const [selectedCountry, setSelectedCountry] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBouquets = useMemo(() => {
    return INTERNATIONAL_TV_PACKAGES.filter((pkg) => {
      const matchesCountry = selectedCountry === "ALL" || pkg.code === selectedCountry;
      const matchesSearch =
        pkg.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.notableChannels.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCountry && matchesSearch;
    });
  }, [selectedCountry, searchQuery]);

  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest">
          <Tv className="w-3.5 h-3.5" />
          28,500+ Uncompressed Live Feeds
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Worldwide Live Television
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
          Access the world&apos;s most comprehensive live TV directory. Every channel is captured at full original bitrate with 7-day electronic program guide (EPG) and instant catch-up.
        </p>

        <div className="pt-2 flex justify-center gap-3">
          <WhatsAppButton
            isTrial
            variant="luxury"
            size="md"
            label="Get 24h Free Channel Test"
          />
          <WhatsAppButton
            variant="outline"
            size="md"
            label="Request Specific Channel"
            customMessage="Hello! Can you confirm if you have this specific channel in your IPTV list?"
          />
        </div>
      </div>

      {/* Interactive 4K Channel Stream Simulator */}
      <LiveChannelPlayerSimulator />

      {/* Real-Time EPG Guide Preview */}
      <div className="rounded-3xl bg-zinc-950/80 border border-white/10 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Electronic Program Guide (EPG) • Broadcasting Now
            </h2>
          </div>
          <span className="text-xs text-zinc-500 font-mono">
            UPDATED EVERY 60 SECONDS
          </span>
        </div>

        {/* EPG Channel List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MOCK_EPG_SCHEDULE.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-orange-500/30 transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/10 text-white uppercase">
                  {item.country} • {item.category}
                </span>
                <span className="text-[10px] text-amber-400 font-bold px-1.5 py-0.5 rounded bg-black/40">
                  {item.resolution}
                </span>
              </div>

              <div>
                <h3 className="text-sm font-bold text-white truncate">
                  {item.channel}
                </h3>
                <p className="text-xs text-zinc-400 font-medium truncate mt-0.5">
                  {item.currentShow}
                </p>
              </div>

              {/* Progress bar */}
              <div className="space-y-1">
                <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-orange-500 h-1.5 rounded-full"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-zinc-500">
                  <span>In progress</span>
                  <span>{item.timeRemaining}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Network Speed & Stream Latency Checker */}
      <NetworkSpeedTester />

      {/* Filter and Search Bar */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Country buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            <button
              onClick={() => setSelectedCountry("ALL")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCountry === "ALL"
                  ? "bg-orange-500 text-black font-bold"
                  : "bg-white/5 text-zinc-400 hover:text-white"
              }`}
            >
              All Bouquets
            </button>
            {INTERNATIONAL_TV_PACKAGES.map((pkg) => (
              <button
                key={pkg.code}
                onClick={() => setSelectedCountry(pkg.code)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  selectedCountry === pkg.code
                    ? "bg-orange-500 text-black font-bold"
                    : "bg-white/5 text-zinc-400 hover:text-white"
                }`}
              >
                <span>{pkg.flag}</span>
                <span>{pkg.country.split(" ")[0]}</span>
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search channels or bouquets..."
              className="w-full bg-white/5 border border-white/10 rounded-full pl-9 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>

        {/* Bouquets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBouquets.map((pkg) => (
            <ChannelPackageCard key={pkg.code} {...pkg} />
          ))}
        </div>
      </div>

      {/* Bottom WhatsApp VIP line */}
      <div className="rounded-3xl bg-zinc-950 border border-white/10 p-8 text-center space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          Looking for a specific channel package or niche country?
        </h3>
        <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto">
          We support over 65 countries worldwide. Message our team on WhatsApp with the channels you want, and we will send you the exact preview playlist.
        </p>
        <div className="pt-2">
          <WhatsAppButton
            variant="pill"
            size="lg"
            label="Inquire About Channels on WhatsApp"
            customMessage="Hello! I would like to check if you offer specific channels in your package."
          />
        </div>
      </div>
    </div>
  );
}
