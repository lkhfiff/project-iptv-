"use client";

import React, { useState, useMemo } from "react";
import { Tv, Search, Sparkles, Filter, Star } from "lucide-react";
import { POPULAR_SERIES, KIDS_AND_FAMILY, MediaItem } from "@/data/media";
import { ContentCard } from "@/components/ContentCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useMediaModal } from "@/components/SiteLayout";

export default function SeriesPage() {
  const { openModal } = useMediaModal();
  const [selectedGenre, setSelectedGenre] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const allSeries: MediaItem[] = useMemo(() => {
    return [
      ...POPULAR_SERIES,
      ...KIDS_AND_FAMILY.filter((item) => item.type === "series"),
    ];
  }, []);

  const genres = ["All", "Fantasy", "Sci-Fi", "Crime", "Tech", "Drama", "Kids"];

  const filteredSeries = useMemo(() => {
    return allSeries.filter((series) => {
      const matchesGenre =
        selectedGenre === "All" ||
        series.genres.includes(selectedGenre) ||
        series.category.includes(selectedGenre);
      const matchesSearch =
        series.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        series.synopsis.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesGenre && matchesSearch;
    });
  }, [allSeries, selectedGenre, searchQuery]);

  return (
    <div className="pt-28 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest">
          <Tv className="w-3.5 h-3.5" />
          Complete Multi-Season Box Sets
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Binge-Worthy Television Series
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
          Every episode, every season, seamlessly organized with episode titles, synopses, and multi-language audio and subtitle tracks.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
        {/* Genre buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          {genres.map((g) => (
            <button
              key={g}
              onClick={() => setSelectedGenre(g)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedGenre === g
                  ? "bg-orange-500 text-black font-bold shadow-md shadow-orange-500/20"
                  : "bg-white/5 text-zinc-400 hover:text-white"
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search series titles..."
            className="w-full bg-white/5 border border-white/10 rounded-full pl-9 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
          />
        </div>
      </div>

      {/* Series Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {filteredSeries.map((series) => (
          <ContentCard
            key={series.id}
            item={series}
            onSelect={openModal}
            aspectRatio="poster"
          />
        ))}
      </div>

      {/* Series Request Banner */}
      <div className="rounded-3xl bg-zinc-950/90 border border-orange-500/30 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 text-center sm:text-left">
          <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider justify-center sm:justify-start">
            <Sparkles className="w-4 h-4" />
            <span>Missing a TV Show or Mini-Series?</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Request Complete Seasons via WhatsApp
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl">
            Our library updates daily. Request any series across Apple TV+, Netflix, HBO Max, Amazon Prime, or Disney+ for rapid addition.
          </p>
        </div>

        <WhatsAppButton
          variant="pill"
          size="lg"
          label="Request Series on WhatsApp"
          customMessage="Hello! I would like to request a TV series to be added to the AETHER+ library."
        />
      </div>
    </div>
  );
}

