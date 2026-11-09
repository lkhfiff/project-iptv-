"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { getMovieById, getTMDBImageUrl, CURATED_TMDB_MOVIES } from "@/services/tmdb";
import { WhatsAppButton } from "@/components/WhatsAppButton";

interface MovieDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default function MovieDetailsPage({ params }: MovieDetailsPageProps) {
  const resolvedParams = use(params);
  const movie = getMovieById(resolvedParams.id);

  const title = movie.title || movie.name || "Untitled Cinema";
  const year = movie.release_date ? new Date(movie.release_date).getFullYear() : "2024";
  const hours = movie.runtime ? Math.floor(movie.runtime / 60) : 2;
  const minutes = movie.runtime ? movie.runtime % 60 : 15;
  const runtimeDisplay = `${hours}h ${minutes}m`;

  const similarMovies = CURATED_TMDB_MOVIES.filter((m) => m.id !== movie.id).slice(0, 4);

  return (
    <div className="min-h-screen pb-20 space-y-12">
      {/* 1. Full Bleed Cinematic Backdrop Header */}
      <div className="relative w-full min-h-[70vh] sm:min-h-[80vh] flex items-end overflow-hidden pt-28 pb-12">
        <Image
          src={getTMDBImageUrl(movie.backdrop_path, "original")}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Ambient Dark Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050508] via-[#050508]/80 to-transparent" />

        {/* Hero Title & Primary Metadata */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <div className="max-w-2xl space-y-4">
            <Link
              href="/movies"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors py-1"
            >
              <Icon icon="ph:arrow-left-bold" width={14} />
              <span>Back to 4K Movies</span>
            </Link>

            {movie.tagline && (
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-orange-400">
                {movie.tagline}
              </p>
            )}

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-none drop-shadow-2xl">
              {title}
            </h1>

            {/* Badges Bar */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-zinc-300">
              <span className="flex items-center gap-1 text-amber-400 font-bold bg-black/50 px-2 py-0.5 rounded-md border border-white/10">
                <Icon icon="ph:star-fill" width={13} className="text-amber-400" />
                {movie.vote_average.toFixed(1)} TMDB
              </span>
              <span>•</span>
              <span className="text-white font-bold">{year}</span>
              <span>•</span>
              <span>{runtimeDisplay}</span>
              <span>•</span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-white font-bold text-[10px]">
                4K UHD • HDR10+
              </span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-white font-bold text-[10px]">
                DOLBY ATMOS
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <WhatsAppButton
                variant="pill"
                size="lg"
                showPingDot
                customMessage={`Hello AETHER+! I want to stream "${title}" (${year}) in 4K UHD. Please provide my instant subscription setup.`}
                label={`Stream "${title}" on WhatsApp`}
              />

              <Link
                href="/pricing"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/15 backdrop-blur-md transition-all active:scale-95"
              >
                View Subscription Passes
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Details Content Body */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column: Poster & Quick Specs */}
          <div className="space-y-6">
            <div className="relative aspect-[2/3] w-full max-w-sm mx-auto rounded-3xl overflow-hidden bg-zinc-900 border border-white/15 shadow-2xl">
              <Image
                src={getTMDBImageUrl(movie.poster_path, "w780")}
                alt={title}
                fill
                sizes="(max-width: 1024px) 320px, 400px"
                className="object-cover"
              />
            </div>

            {/* Hardware & Stream Compatibility Box */}
            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3 text-xs">
              <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
                Streaming Telemetry
              </h4>
              <div className="space-y-2 font-mono text-[11px]">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-zinc-500">Codec</span>
                  <span className="text-white">HEVC / H.265 10-Bit</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-zinc-500">Audio Channels</span>
                  <span className="text-amber-400 font-bold">Dolby Atmos 7.1 TrueHD</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-zinc-500">Anti-Freeze</span>
                  <span className="text-emerald-400 font-bold">Node 9.9 Active</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-zinc-500">Subtitles</span>
                  <span className="text-white">Multi-Language CC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right 2 Columns: Overview, Genres, Cast */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider text-xs">
                Synopsis
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {movie.overview}
              </p>
            </div>

            {/* Genres */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                Genres
              </h3>
              <div className="flex flex-wrap gap-2">
                {movie.genres?.map((g) => (
                  <span
                    key={g.id}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300"
                  >
                    {g.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Cast Information */}
            {movie.credits?.cast && (
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  Featured Cast Members
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {movie.credits.cast.map((actor) => (
                    <div
                      key={actor.id}
                      className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1"
                    >
                      <h5 className="text-xs font-bold text-white truncate">
                        {actor.name}
                      </h5>
                      <p className="text-[11px] text-orange-400/90 truncate">
                        {actor.character}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Similar Titles Shelf */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                Similar Cinema Titles
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {similarMovies.map((sim) => (
                  <Link
                    key={sim.id}
                    href={`/movies/${sim.id}`}
                    className="group space-y-1.5"
                  >
                    <div className="relative aspect-[2/3] w-full rounded-xl overflow-hidden bg-zinc-900 border border-white/10 group-hover:border-orange-500/50 transition-all">
                      <Image
                        src={getTMDBImageUrl(sim.poster_path, "w342")}
                        alt={sim.title}
                        fill
                        sizes="160px"
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h5 className="text-xs font-semibold text-white truncate group-hover:text-orange-400">
                      {sim.title}
                    </h5>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* TMDB Attribution notice */}
        <div className="pt-8 border-t border-white/5 text-center text-[11px] text-zinc-500">
          This product uses the TMDB API but is not endorsed or certified by TMDB. All movie artwork and metadata courtesy of The Movie Database.
        </div>
      </div>
    </div>
  );
}
