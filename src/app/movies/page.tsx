"use client";

import React, { useState, useMemo } from "react";
import { Film, Search, Sparkles, Filter, Star, Volume2 } from "lucide-react";
import { TRENDING_MOVIES, KIDS_AND_FAMILY, MediaItem } from "@/data/media";
import { ContentCard } from "@/components/ContentCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useMediaModal } from "@/components/SiteLayout";

export default function MoviesPage() {
  const { openModal } = useMediaModal();
  const [selectedGenre, setSelectedGenre] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const allMovies: MediaItem[] = useMemo(() => {
    return [
      ...TRENDING_MOVIES,
      ...KIDS_AND_FAMILY.filter((item) => item.type === "movie"),
    ];
  }, []);

  const genres = ["All", "Sci-Fi", "Action", "Historical", "Thriller", "Horror", "Drama", "Animation"];

  const filteredMovies = useMemo(() => {
    return allMovies.filter((movie) => {
      const matchesGenre =
        selectedGenre === "All" ||
        movie.genres.includes(selectedGenre) ||
        movie.category.includes(selectedGenre);
      const matchesSearch =
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.synopsis.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesGenre && matchesSearch;
    });
  }, [allMovies, selectedGenre, searchQuery]);

  return (
    <div className="pt-28 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest">
          <Film className="w-3.5 h-3.5" />
          135,000+ Movies In 4K HDR
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Ultra-High-Definition Cinema
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
          From the latest theatrical premieres to timeless cinematic classics. Every title encoded in bit-perfect 4K UHD, HDR10+, and Dolby Atmos 7.1 surround sound.
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
            placeholder="Search movie titles, genres..."
            className="w-full bg-white/5 border border-white/10 rounded-full pl-9 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
          />
        </div>
      </div>

      {/* Movie Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {filteredMovies.map((movie) => (
          <ContentCard
            key={movie.id}
            item={movie}
            onSelect={openModal}
            aspectRatio="poster"
          />
        ))}
      </div>

      {/* VOD Request Banner */}
      <div className="rounded-3xl bg-zinc-950/90 border border-orange-500/30 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 text-center sm:text-left">
          <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider justify-center sm:justify-start">
            <Sparkles className="w-4 h-4" />
            <span>24h VOD Request Guarantee</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Can&apos;t find a specific movie or director?
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl">
            As an AETHER+ member, simply send the title to our WhatsApp concierge. Our automation ingest team will add it to the library within 24 hours.
          </p>
        </div>

        <WhatsAppButton
          variant="pill"
          size="lg"
          label="Request Movie on WhatsApp"
          customMessage="Hello! I would like to request a movie to be added to the AETHER+ VOD library."
        />
      </div>
    </div>
  );
}

