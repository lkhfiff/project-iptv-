"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { getSeriesById, getTMDBImageUrl, CURATED_TMDB_SERIES } from "@/services/tmdb";
import { WhatsAppButton } from "@/components/WhatsAppButton";

interface SeriesDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default function SeriesDetailsPage({ params }: SeriesDetailsPageProps) {
  const resolvedParams = use(params);
  const show = getSeriesById(resolvedParams.id);

  const title = show.name || show.title || "Untitled Series";
  const year = show.first_air_date ? new Date(show.first_air_date).getFullYear() : "2024";

  const otherSeries = CURATED_TMDB_SERIES.filter((s) => s.id !== show.id).slice(0, 4);

  return (
    <div className="min-h-screen pb-20 space-y-12">
      {/* 1. Full Bleed Cinematic Backdrop Header */}
      <div className="relative w-full min-h-[70vh] sm:min-h-[80vh] flex items-end overflow-hidden pt-28 pb-12">
        <Image
          src={getTMDBImageUrl(show.backdrop_path, "original")}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050508] via-[#050508]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <div className="max-w-2xl space-y-4">
            <Link
              href="/series"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors py-1"
            >
              <Icon icon="ph:arrow-left-bold" width={14} />
              <span>Back to TV Series</span>
            </Link>

            {show.tagline && (
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-orange-400">
                {show.tagline}
              </p>
            )}

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-none drop-shadow-2xl">
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-zinc-300">
              <span className="flex items-center gap-1 text-amber-400 font-bold bg-black/50 px-2 py-0.5 rounded-md border border-white/10">
                <Icon icon="ph:star-fill" width={13} className="text-amber-400" />
                {show.vote_average.toFixed(1)} TMDB
              </span>
              <span>•</span>
              <span className="text-white font-bold">{year}</span>
              <span>•</span>
              <span>{show.number_of_seasons || 2} Seasons</span>
              <span>•</span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-white font-bold text-[10px]">
                4K UHD
              </span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-white font-bold text-[10px]">
                DOLBY VISION
              </span>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <WhatsAppButton
                variant="pill"
                size="lg"
                showPingDot
                customMessage={`Bonjour ! Je souhaite visionner la série "${title}" en 4K.`}
                label={`Visionner "${title}" en 4K`}
              />

              <Link
                href="/abonnements"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/15 backdrop-blur-md transition-all active:scale-95"
              >
                Voir les Formules
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Details Body */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Poster */}
          <div className="space-y-6">
            <div className="relative aspect-[2/3] w-full max-w-sm mx-auto rounded-3xl overflow-hidden bg-zinc-900 border border-white/15 shadow-2xl">
              <Image
                src={getTMDBImageUrl(show.poster_path, "w780")}
                alt={title}
                fill
                sizes="(max-width: 1024px) 320px, 400px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Synopsis, Cast, Similar */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider text-xs">
                Series Synopsis
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {show.overview}
              </p>
            </div>

            {/* Cast */}
            {show.credits?.cast && (
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  Starring Cast
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {show.credits.cast.map((actor) => (
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

            {/* Similar Series */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                Recommended Television Series
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {otherSeries.map((s) => (
                  <Link
                    key={s.id}
                    href={`/series/${s.id}`}
                    className="group space-y-1.5"
                  >
                    <div className="relative aspect-[2/3] w-full rounded-xl overflow-hidden bg-zinc-900 border border-white/10 group-hover:border-orange-500/50 transition-all">
                      <Image
                        src={getTMDBImageUrl(s.poster_path, "w342")}
                        alt={s.name || s.title || ""}
                        fill
                        sizes="160px"
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h5 className="text-xs font-semibold text-white truncate group-hover:text-orange-400">
                      {s.name || s.title}
                    </h5>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

