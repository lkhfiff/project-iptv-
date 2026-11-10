"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { WhatsAppButton } from "./WhatsAppButton";

interface ChannelStream {
  id: string;
  name: string;
  category: string;
  country: string;
  flag: string;
  currentShow: string;
  nextShow: string;
  resolution: string;
  bitrate: string;
  fps: string;
  previewImage: string;
}

const DEMO_CHANNELS: ChannelStream[] = [
  {
    id: "sky-pl",
    name: "Sky Sports Premier League UHD",
    category: "Football",
    country: "United Kingdom",
    flag: "UK",
    currentShow: "Premier League: Liverpool vs Manchester City (Live 4K)",
    nextShow: "Matchday Post-Game Analysis & Highlights",
    resolution: "3840x2160p (4K UHD)",
    bitrate: "22.4 Mbps",
    fps: "60.0 FPS",
    previewImage: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "bein-4k",
    name: "beIN Sports MENA 1 4K",
    category: "Sports",
    country: "Arab World",
    flag: "MENA",
    currentShow: "Champions League: Round of 16 Live Action",
    nextShow: "Studio Al-Masaa with International Pundits",
    resolution: "Pure 4K UHD",
    bitrate: "21.8 Mbps",
    fps: "60.0 FPS",
    previewImage: "https://images.unsplash.com/photo-1489944445391-11dd35574ca6?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "canal-4k",
    name: "Canal+ 4K UHD France",
    category: "Cinema",
    country: "France",
    flag: "FR",
    currentShow: "Le Film du Soir: Blockbuster Hollywood en 4K HDR",
    nextShow: "Canal Football Club Édition Spéciale",
    resolution: "Dolby Vision HDR",
    bitrate: "19.5 Mbps",
    fps: "50.0 FPS",
    previewImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "movistar-laliga",
    name: "Movistar+ LaLiga 4K",
    category: "Football",
    country: "Spain",
    flag: "ES",
    currentShow: "El Clásico: Real Madrid vs FC Barcelona",
    nextShow: "El Día Después Resumen y Goles",
    resolution: "4K UHD HDR",
    bitrate: "20.2 Mbps",
    fps: "60.0 FPS",
    previewImage: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "hbo-us",
    name: "HBO Max Live 4K US",
    category: "Originals",
    country: "United States",
    flag: "US",
    currentShow: "House of the Dragon - Season 3 Premiere",
    nextShow: "The Last of Us: Behind the Scenes",
    resolution: "4K Dolby Vision",
    bitrate: "24.0 Mbps",
    fps: "24.0 Cinematic",
    previewImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1600&auto=format&fit=crop",
  },
];

export function LiveChannelPlayerSimulator() {
  const [activeChannel, setActiveChannel] = useState<ChannelStream>(DEMO_CHANNELS[0]);
  const [isZapping, setIsZapping] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const switchChannel = (channel: ChannelStream) => {
    if (channel.id === activeChannel.id) return;
    setIsZapping(true);
    setTimeout(() => {
      setActiveChannel(channel);
      setIsZapping(false);
    }, 700);
  };

  return (
    <div className="rounded-3xl overflow-hidden bg-zinc-950/90 border border-white/10 shadow-2xl space-y-6 p-6 sm:p-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-red-500">
              Interactive 4K Stream Simulator
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Test Our 0.8s Ultra-Fast Channel Zapping
          </h3>
        </div>

        <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/5 text-zinc-400 border border-white/10 shrink-0">
          Latency: <strong className="text-emerald-400">1.2s</strong> • Zero Buffer
        </span>
      </div>

      {/* Main TV Screen Simulator */}
      <div className="relative w-full aspect-video sm:aspect-[21/9] rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl group">
        {/* Loading / Zapping state */}
        {isZapping ? (
          <div className="absolute inset-0 bg-black flex flex-col items-center justify-center space-y-3 z-30 animate-in fade-in duration-100">
            <div className="w-10 h-10 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" />
            <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              Zapping stream in 0.8s...
            </p>
          </div>
        ) : (
          <>
            {/* Background Stream Artwork */}
            <Image
              src={activeChannel.previewImage}
              alt={activeChannel.name}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-102"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" />

            {/* Top OSD Bar */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white z-20">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15">
                <span className="text-base">{activeChannel.flag}</span>
                <span className="font-bold tracking-tight">{activeChannel.name}</span>
                <span className="text-zinc-500">|</span>
                <span className="text-emerald-400 font-bold">{activeChannel.resolution}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono text-zinc-300">
                  {activeChannel.bitrate} • {activeChannel.fps}
                </span>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-8 h-8 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/15 flex items-center justify-center text-white transition-all active:scale-95"
                  aria-label="Toggle sound"
                >
                  {isMuted ? (
                    <Icon icon="ph:speaker-x-bold" width={16} />
                  ) : (
                    <Icon icon="ph:speaker-high-bold" width={16} className="text-emerald-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Bottom Stream OSD & CTA */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-20">
              <div className="space-y-1.5 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-red-600 text-white font-extrabold text-[10px] tracking-wider uppercase animate-pulse-live">
                    LIVE FEED
                  </span>
                  <span className="text-xs text-amber-400 font-bold">
                    Now Playing
                  </span>
                </div>
                <h4 className="text-base sm:text-xl font-black text-white drop-shadow-md">
                  {activeChannel.currentShow}
                </h4>
                <p className="text-xs text-zinc-300 drop-shadow line-clamp-1">
                  Up Next: <span className="text-zinc-400">{activeChannel.nextShow}</span>
                </p>
              </div>

              <div className="shrink-0">
                <WhatsAppButton
                  variant="luxury"
                  size="sm"
                  customMessage={`Bonjour NOUDINE ! J'ai testé votre lecteur sur la chaîne "${activeChannel.name}". Je souhaite obtenir mes identifiants complets.`}
                  label="Stream This Channel Now"
                />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Channel Switcher Buttons */}
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
          Switch Between Showcase Channels:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {DEMO_CHANNELS.map((ch) => {
            const isSelected = ch.id === activeChannel.id;
            return (
              <button
                key={ch.id}
                onClick={() => switchChannel(ch)}
                className={`p-3 rounded-2xl text-left transition-all border flex flex-col justify-between space-y-2 cursor-pointer ${
                  isSelected
                    ? "bg-orange-500/15 border-orange-500 text-white shadow-lg shadow-orange-500/10 scale-102"
                    : "bg-white/[0.02] border-white/10 text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl">{ch.flag}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-zinc-300">
                    {ch.resolution.split(" ")[0]}
                  </span>
                </div>
                <div>
                  <h5 className="text-xs font-bold truncate text-white">
                    {ch.name}
                  </h5>
                  <p className="text-[10px] text-zinc-400 truncate">{ch.category}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
