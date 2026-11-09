"use client";

import React, { useState, useMemo } from "react";
import { Icon } from "@iconify/react";
import { SUPPORTED_DEVICES } from "@/data/devices";
import { DeviceSetupCard } from "@/components/DeviceSetupCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";

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
          <Icon icon="ph:device-mobile-camera-fill" width={14} />
          <span>Universal Hardware Compatibility</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Supported Devices & Setup Guides
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
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? "bg-white text-black font-bold shadow-md"
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
    </div>
  );
}
