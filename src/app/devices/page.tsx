"use client";

import React, { useState, useMemo } from "react";
import { Smartphone, Tv, HardDrive, Laptop, Cpu, Flame, Sparkles, CheckCircle2 } from "lucide-react";
import { SUPPORTED_DEVICES, DeviceGuide } from "@/data/devices";
import { DeviceSetupCard } from "@/components/DeviceSetupCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { generateWhatsAppContactUrl } from "@/data/config";

export default function DevicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Devices" },
    { id: "streaming-box", label: "Streaming Sticks & Boxes" },
    { id: "smart-tv", label: "Samsung & LG Smart TVs" },
    { id: "mobile", label: "iOS & Android Mobile" },
    { id: "dedicated-box", label: "MAG & Formuler" },
    { id: "computer", label: "PC & Mac" },
  ];

  const filteredDevices = useMemo(() => {
    if (selectedCategory === "all") return SUPPORTED_DEVICES;
    return SUPPORTED_DEVICES.filter((d) => d.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest">
          <Tv className="w-3.5 h-3.5" />
          Universal Hardware Compatibility
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Supported Devices & Quick Setup Guides
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
          AETHER+ works natively on every major television, media streamer, tablet, and smartphone. With our 2-minute step-by-step setup guides, you will be streaming in no time.
        </p>

        <div className="pt-2 flex justify-center gap-3">
          <WhatsAppButton
            variant="luxury"
            size="md"
            label="Get 1-on-1 Remote Setup Help"
            customMessage="Hello! Can you help me setup my IPTV subscription on my device?"
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar py-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat.id
                ? "bg-orange-500 text-black font-bold shadow-md shadow-orange-500/20"
                : "bg-white/5 text-zinc-400 hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Device Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDevices.map((device) => (
          <DeviceSetupCard key={device.id} device={device} />
        ))}
      </div>

      {/* Top Recommended IPTV Players Comparison */}
      <div className="rounded-3xl bg-zinc-950/80 border border-white/10 p-6 sm:p-10 space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Our Certified IPTV Player Applications
          </h2>
          <p className="text-xs text-zinc-400">
            We continuously benchmark streaming players to ensure zero lag, instantaneous EPG downloads, and pure 60fps rendering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-500/20 text-orange-400">
              GOLD STANDARD
            </span>
            <h3 className="font-bold text-white text-base">TiviMate IPTV</h3>
            <p className="text-xs text-zinc-400">
              The benchmark for Firestick & Android TV. Native modern UI, multi-screen, and smooth channel surfing.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/10 text-white">
              MOST COMPATIBLE
            </span>
            <h3 className="font-bold text-white text-base">IPTV Smarters Pro</h3>
            <p className="text-xs text-zinc-400">
              Available on iOS, Android, Windows, Mac, and Samsung TVs. Easy login with Xtream Codes API.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/10 text-white">
              SMART TV BEST
            </span>
            <h3 className="font-bold text-white text-base">IBO Player Pro</h3>
            <p className="text-xs text-zinc-400">
              Fast hardware acceleration on LG webOS and Samsung Tizen with remote MAC address playlist binding.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/10 text-white">
              APPLE TV UI
            </span>
            <h3 className="font-bold text-white text-base">IPTVX & Snappier</h3>
            <p className="text-xs text-zinc-400">
              Designed specifically for Apple TV tvOS with native Apple aesthetic, spatial audio, and iCloud sync.
            </p>
          </div>
        </div>
      </div>

      {/* Remote Setup VIP Concierge */}
      <div className="rounded-3xl bg-gradient-to-r from-orange-600/20 via-amber-600/20 to-transparent border border-orange-500/30 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl text-center md:text-left">
          <h3 className="text-2xl font-black text-white">
            Need Help Installing on Your TV?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300">
            Our engineers can guide you through every step via WhatsApp voice or text chat. We can even upload playlists to your Smart TV remotely!
          </p>
        </div>

        <WhatsAppButton
          variant="pill"
          size="lg"
          label="Chat with Setup Engineer"
          customMessage="Hello! I need assistance installing AETHER+ on my TV."
        />
      </div>
    </div>
  );
}

