"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { CHANNELS_DATA, ChannelItem } from "@/data/channels";
import { HLSPlayer } from "@/components/HLSPlayer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { generateWhatsAppContactUrl } from "@/data/config";

export default function LiveTVPage() {
  const [activeChannel, setActiveChannel] = useState<ChannelItem>(CHANNELS_DATA[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedCountry, setSelectedCountry] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Sports", "Cinema", "Entertainment", "Documentary"];
  const countries = ["All", "UK", "US", "FR", "ES", "MENA", "DE"];

  const filteredChannels = useMemo(() => {
    return CHANNELS_DATA.filter((ch) => {
      const matchesCat = selectedCategory === "All" || ch.category === selectedCategory;
      const matchesCountry = selectedCountry === "All" || ch.countryCode === selectedCountry;
      const matchesSearch =
        ch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ch.currentProgram.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesCountry && matchesSearch;
    });
  }, [selectedCategory, selectedCountry, searchQuery]);

  return (
    <div className="pt-28 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest">
          <Icon icon="ph:television-simple-fill" width={14} />
          <span>28,500+ Live Global Channels</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Authorized Live Television Feeds
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
          Watch premium live sports, 4K cinema, and international networks powered by low-latency HLS.js streaming.
        </p>
      </div>

      {/* Main HLS.js Player Showcase */}
      <div className="space-y-4">
        <HLSPlayer
          src={activeChannel.streamUrl}
          title={activeChannel.currentProgram}
          channelName={activeChannel.name}
          poster="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1600&auto=format&fit=crop"
        />

        {/* Selected Channel Information Bar */}
        <div className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 p-2 flex items-center justify-center shrink-0">
              <Icon icon="ph:broadcast-bold" width={24} className="text-orange-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">{activeChannel.name}</h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/10 text-emerald-400">
                  {activeChannel.resolution}
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Now: <span className="text-white font-medium">{activeChannel.currentProgram}</span>
              </p>
            </div>
          </div>

          <WhatsAppButton
            variant="pill"
            size="sm"
            customMessage={`Hello AETHER+! I want full access to stream "${activeChannel.name}" in 4K on my device.`}
            label={`Stream ${activeChannel.name} via WhatsApp`}
          />
        </div>
      </div>

      {/* Channel Filters & Directory */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-white text-black font-bold shadow-md"
                    : "bg-white/5 text-zinc-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-64">
            <Icon
              icon="ph:magnifying-glass-bold"
              width={16}
              className="text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search channels..."
              className="w-full bg-white/5 border border-white/10 rounded-full pl-9 pr-4 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredChannels.map((channel) => {
            const isSelected = channel.id === activeChannel.id;
            return (
              <div
                key={channel.id}
                onClick={() => setActiveChannel(channel)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? "bg-orange-500/15 border-orange-500 text-white shadow-xl shadow-orange-500/10 scale-102"
                    : "bg-zinc-950/70 border-white/10 hover:border-white/25 hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                      {channel.countryCode} • {channel.category}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-zinc-300">
                    {channel.resolution.split(" ")[0]}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white truncate">
                    {channel.name}
                  </h4>
                  <p className="text-xs text-zinc-400 truncate mt-0.5">
                    {channel.currentProgram}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500">
                  <span>Next: {channel.nextProgram.split(" ")[0]}...</span>
                  <span className="text-orange-400 font-semibold flex items-center gap-1">
                    <Icon icon="ph:play-fill" width={10} /> Tune In
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
