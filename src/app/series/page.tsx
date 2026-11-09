"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { CURATED_TMDB_SERIES, TMDBMovie, getTMDBImageUrl } from "@/services/tmdb";
import { SITE_CONFIG } from "@/data/config";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useMediaModal } from "@/components/SiteLayout";
import { MediaItem } from "@/data/media";

export default function SeriesPage() {
  const { openModal } = useMediaModal();
  const [seriesList, setSeriesList] = useState<TMDBMovie[]>(CURATED_TMDB_SERIES);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/api/tmdb/trending/tv/week")
      .then((res) => res.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          setSeriesList(data.results);
        }
      })
      .catch(() => {});
  }, []);

  const filteredSeries = useMemo(() => {
    return seriesList.filter((s) => {
      const title = s.name || s.title || "";
      return (
        title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.overview.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [seriesList, searchQuery]);

  return (
    <div className="pt-28 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest">
          <Icon icon="ph:stack-fill" width={14} />
          <span>Complete Multi-Season Box Sets</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Binge-Worthy TV Series
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
          From Apple TV+ originals like Silo & Severance to critically acclaimed drama like Shōgun and Succession. Every episode in uncompressed 4K HDR.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-end border-b border-white/5 pb-4">
        <div className="relative w-full sm:w-72">
          <Icon
            icon="ph:magnifying-glass-bold"
            width={16}
            className="text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2"
          />
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
        {filteredSeries.map((show) => {
          const title = show.name || show.title || "Untitled Show";
          const year = show.first_air_date ? new Date(show.first_air_date).getFullYear() : "2024";

          const mediaItem: MediaItem = {
            id: `tmdb-tv-${show.id}`,
            title,
            type: "series",
            category: show.genres && show.genres[0] ? show.genres[0].name : "Television Series",
            genres: show.genres ? show.genres.map((g) => g.name) : ["Drama"],
            year,
            rating: show.vote_average ? `${show.vote_average.toFixed(1)} / 10` : "8.6 / 10",
            duration: show.number_of_seasons ? `${show.number_of_seasons} Seasons` : "Complete Series",
            quality: "4K UHD",
            audio: "Dolby Atmos",
            posterUrl: getTMDBImageUrl(show.poster_path, "w500"),
            backdropUrl: getTMDBImageUrl(show.backdrop_path, "w1280"),
            synopsis: show.overview,
            seasons: show.number_of_seasons || 2,
          };

          return (
            <div
              key={show.id}
              onClick={() => openModal(mediaItem)}
              className="group cursor-pointer select-none space-y-2"
            >
              <div className="relative w-full aspect-[2/3] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 group-hover:border-orange-500/50 transition-all duration-300 group-hover:scale-103 group-hover:shadow-2xl">
                <Image
                  src={getTMDBImageUrl(show.poster_path, "w500")}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 180px, 260px"
                  className="object-cover transition-transform duration-500 group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90" />

                <div className="absolute top-2.5 right-2.5">
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-black/60 text-white border border-white/10">
                    4K
                  </span>
                </div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5">
                  <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                    <Icon icon="ph:star-fill" width={11} />
                    {show.vote_average ? show.vote_average.toFixed(1) : "8.5"}
                  </span>
                </div>
              </div>

              <div className="space-y-0.5 px-0.5">
                <h4 className="text-xs sm:text-sm font-semibold text-white truncate group-hover:text-orange-400 transition-colors">
                  {title}
                </h4>
                <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                  <span>{year}</span>
                  {show.number_of_seasons && <span>• {show.number_of_seasons} Seasons</span>}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* VOD Request Banner */}
      <div className="rounded-3xl bg-[#151515] border border-white/10 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-light text-white">
            Une série ou saison introuvable ?
          </h3>
          <p className="text-[#a0a0a0] text-xs sm:text-sm max-w-xl font-light">
            Transmettez le titre de la série à notre conciergerie VIP. Notre système d&apos;ingestion l&apos;ajoute au catalogue en moins de 24h.
          </p>
        </div>

        <WhatsAppButton
          variant="solid"
          size="lg"
          label="Demander une Série"
          customMessage={`Bonjour ! Je souhaite demander l'ajout d'une série au catalogue ${SITE_CONFIG.brandName}.`}
        />
      </div>
    </div>
  );
}
