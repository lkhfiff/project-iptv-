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
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
          Appareils &amp; Guides d&apos;Installation
        </h1>
        <p className="text-[#a0a0a0] text-xs sm:text-sm max-w-lg mx-auto font-light leading-relaxed">
          Notre service fonctionne nativement sur toutes les Smart TV, boîtiers de streaming, tablettes et smartphones avec une configuration en moins de 2 minutes.
        </p>

        <div className="pt-2 flex justify-center gap-3">
          <WhatsAppButton
            variant="solid"
            size="md"
            label="Assistance Installation à Distance"
            customMessage="Bonjour ! Pouvez-vous m'aider à configurer mon abonnement IPTV sur mon appareil ?"
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
