"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { CURATED_TMDB_MOVIES, TMDBMovie, getTMDBImageUrl } from "@/services/tmdb";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useMediaModal } from "@/components/SiteLayout";
import { MediaItem } from "@/data/media";

export default function MoviesPage() {
  const { openModal } = useMediaModal();
  const [movies, setMovies] = useState<TMDBMovie[]>(CURATED_TMDB_MOVIES);
  const [selectedGenre, setSelectedGenre] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [dataSource, setDataSource] = useState("curated-tmdb");

  useEffect(() => {
    fetch("/api/tmdb/trending/movie/week")
      .then((res) => res.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          setMovies(data.results);
          setDataSource("live-tmdb");
        }
      })
      .catch(() => {});
  }, []);

  const genres = ["All", "Science Fiction", "Action", "Adventure", "Drama", "Crime", "Horror"];

  const filteredMovies = useMemo(() => {
    return movies.filter((m) => {
      const title = m.title || m.name || "";
      const matchesSearch =
        title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.overview.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGenre =
        selectedGenre === "All" ||
        (m.genres && m.genres.some((g) => g.name.toLowerCase().includes(selectedGenre.toLowerCase())));
      return matchesSearch && matchesGenre;
    });
  }, [movies, searchQuery, selectedGenre]);

  return (
    <div className="pt-28 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Ultra-High-Definition Movies
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
          Powered by real metadata, posters, and cast information from The Movie Database (TMDB). Experience Hollywood premieres and timeless cinema in bit-perfect 4K HDR.
        </p>

        {dataSource === "curated-tmdb" && (
          <div className="inline-flex items-center gap-1.5 text-[11px] text-zinc-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
            <Icon icon="ph:info-bold" width={13} className="text-orange-400" />
            <span>Using verified curated TMDB movie records. Configure TMDB_API_KEY in .env.local for live daily API sync.</span>
          </div>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          {genres.map((g) => (
            <button
              key={g}
              onClick={() => setSelectedGenre(g)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedGenre === g
                  ? "bg-white text-black font-bold shadow-md"
                  : "bg-white/5 text-zinc-400 hover:text-white"
              }`}
            >
              {g}
            </button>
          ))}
        </div>

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
            placeholder="Search TMDB titles..."
            className="w-full bg-white/5 border border-white/10 rounded-full pl-9 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
          />
        </div>
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
        {filteredMovies.map((movie) => {
          const title = movie.title || movie.name || "Untitled";
          const year = movie.release_date
            ? new Date(movie.release_date).getFullYear()
            : movie.first_air_date
            ? new Date(movie.first_air_date).getFullYear()
            : "2024";

          // Adapt to MediaItem format for modal
          const mediaItem: MediaItem = {
            id: `tmdb-${movie.id}`,
            title,
            type: "movie",
            category: movie.genres && movie.genres[0] ? movie.genres[0].name : "Feature Film",
            genres: movie.genres ? movie.genres.map((g) => g.name) : ["Cinema"],
            year,
            rating: movie.vote_average ? `${movie.vote_average.toFixed(1)} / 10` : "8.5 / 10",
            duration: movie.runtime ? `${movie.runtime}m` : "4K Release",
            quality: "4K UHD",
            audio: "Dolby Atmos",
            posterUrl: getTMDBImageUrl(movie.poster_path, "w500"),
            backdropUrl: getTMDBImageUrl(movie.backdrop_path, "w1280"),
            synopsis: movie.overview,
          };

          return (
            <div
              key={movie.id}
              onClick={() => openModal(mediaItem)}
              className="group cursor-pointer select-none space-y-2"
            >
              <div className="relative w-full aspect-[2/3] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 group-hover:border-orange-500/50 transition-all duration-300 group-hover:scale-103 group-hover:shadow-2xl">
                <Image
                  src={getTMDBImageUrl(movie.poster_path, "w500")}
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
                    {movie.vote_average ? movie.vote_average.toFixed(1) : "8.5"}
                  </span>
                </div>
              </div>

              <div className="space-y-0.5 px-0.5">
                <h4 className="text-xs sm:text-sm font-semibold text-white truncate group-hover:text-orange-400 transition-colors">
                  {title}
                </h4>
                <p className="text-[11px] text-zinc-400">{year}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* TMDB Attribution Footer Note */}
      <div className="pt-8 border-t border-white/5 text-center space-y-2">
        <p className="text-[11px] text-zinc-500">
          This product uses the TMDB API but is not endorsed or certified by TMDB. All movie titles, descriptions, and artwork are property of their respective copyright holders.
        </p>
      </div>
    </div>
  );
}
