"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { HeroMinimal } from "@/components/HeroMinimal";
import { PricingCard } from "@/components/PricingCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { useMediaModal } from "@/components/SiteLayout";
import {
  CURATED_TMDB_MOVIES,
  CURATED_TMDB_SERIES,
  getTMDBImageUrl,
} from "@/services/tmdb";
import { CHANNELS_DATA } from "@/data/channels";
import { CURATED_LIVE_MATCHES } from "@/data/sports";
import { SUBSCRIPTION_PLANS } from "@/data/pricing";
import { SITE_CONFIG, generateWhatsAppContactUrl } from "@/data/config";
import { MediaItem } from "@/data/media";

export default function HomePage() {
  const { openModal } = useMediaModal();

  const handleOpenMovie = (m: (typeof CURATED_TMDB_MOVIES)[0]) => {
    const item: MediaItem = {
      id: `tmdb-${m.id}`,
      title: m.title || m.name || "Untitled",
      type: "movie",
      category: m.genres && m.genres[0] ? m.genres[0].name : "Cinema",
      genres: m.genres ? m.genres.map((g) => g.name) : ["Cinema"],
      year: m.release_date ? new Date(m.release_date).getFullYear() : 2024,
      rating: m.vote_average ? `${m.vote_average.toFixed(1)} / 10` : "8.5 / 10",
      duration: m.runtime ? `${m.runtime}m` : "4K UHD",
      quality: "4K UHD",
      audio: "Dolby Atmos",
      posterUrl: getTMDBImageUrl(m.poster_path, "w500"),
      backdropUrl: getTMDBImageUrl(m.backdrop_path, "w1280"),
      synopsis: m.overview,
    };
    openModal(item);
  };

  const handleOpenSeries = (s: (typeof CURATED_TMDB_SERIES)[0]) => {
    const item: MediaItem = {
      id: `tmdb-tv-${s.id}`,
      title: s.name || s.title || "Untitled Series",
      type: "series",
      category: s.genres && s.genres[0] ? s.genres[0].name : "Series",
      genres: s.genres ? s.genres.map((g) => g.name) : ["Drama"],
      year: s.first_air_date ? new Date(s.first_air_date).getFullYear() : 2024,
      rating: s.vote_average ? `${s.vote_average.toFixed(1)} / 10` : "8.6 / 10",
      duration: s.number_of_seasons ? `${s.number_of_seasons} Seasons` : "4K UHD",
      quality: "4K UHD",
      audio: "Dolby Atmos",
      posterUrl: getTMDBImageUrl(s.poster_path, "w500"),
      backdropUrl: getTMDBImageUrl(s.backdrop_path, "w1280"),
      synopsis: s.overview,
      seasons: s.number_of_seasons || 2,
    };
    openModal(item);
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 overflow-hidden bg-[#080808] text-white">
      {/* 1. Full-Screen Hero & Floating Image Gallery (Matching the reference screenshot) */}
      <HeroMinimal onSelectMedia={openModal} />

      {/* 01. Featured Entertainment — Editorial Style */}
      <section id="featured" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-1">
            <span className="text-xs uppercase font-mono tracking-widest text-[#a0a0a0]">
              01 / Editorial Spotlight
            </span>
            <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white">
              Featured Entertainment
            </h2>
          </div>
          <Link
            href="/movies"
            className="text-xs font-medium text-[#a0a0a0] hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span>Explore Complete Archive</span>
            <Icon icon="ph:arrow-right" width={13} />
          </Link>
        </div>

        {/* Large Editorial Diptych */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Main Large Feature */}
          <div
            onClick={() => handleOpenMovie(CURATED_TMDB_MOVIES[0])}
            className="group relative rounded-3xl overflow-hidden bg-[#151515] border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[440px]"
          >
            <div className="relative w-full h-80 overflow-hidden">
              <Image
                src={getTMDBImageUrl(CURATED_TMDB_MOVIES[0].backdrop_path, "w1280")}
                alt={CURATED_TMDB_MOVIES[0].title}
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.88]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent" />
            </div>

            <div className="p-8 space-y-3 relative z-10">
              <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-[#a0a0a0]">
                <span>Science Fiction</span>
                <span>•</span>
                <span>4K UHD • Dolby Atmos</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-white">
                  <Icon icon="ph:star-fill" width={11} />
                  <span>{CURATED_TMDB_MOVIES[0].vote_average}</span>
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                {CURATED_TMDB_MOVIES[0].title}
              </h3>
              <p className="text-xs text-[#a0a0a0] line-clamp-2 leading-relaxed font-light">
                {CURATED_TMDB_MOVIES[0].overview}
              </p>
            </div>
          </div>

          {/* Secondary Editorial Column */}
          <div className="flex flex-col gap-6 justify-between">
            {CURATED_TMDB_MOVIES.slice(1, 3).map((item) => (
              <div
                key={item.id}
                onClick={() => handleOpenMovie(item)}
                className="group relative rounded-3xl overflow-hidden bg-[#151515] border border-white/10 hover:border-white/30 transition-all duration-300 p-6 flex flex-col sm:flex-row gap-6 cursor-pointer flex-1 items-center"
              >
                <div className="relative w-full sm:w-48 h-40 rounded-2xl overflow-hidden shrink-0 bg-black">
                  <Image
                    src={getTMDBImageUrl(item.backdrop_path, "w500")}
                    alt={item.title}
                    fill
                    sizes="200px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-[#a0a0a0]">
                    Release {new Date(item.release_date || "").getFullYear()} • 4K HDR
                  </div>
                  <h4 className="text-lg font-medium text-white tracking-tight group-hover:text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#a0a0a0] line-clamp-2 leading-relaxed font-light">
                    {item.overview}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02. Trending Movies — Horizontal Poster Gallery */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
        <div className="flex items-end justify-between border-b border-white/10 pb-6">
          <div className="space-y-1">
            <span className="text-xs uppercase font-mono tracking-widest text-[#a0a0a0]">
              02 / Cinema Gallery
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
              Trending Blockbusters
            </h2>
          </div>
          <Link
            href="/movies"
            className="text-xs font-medium text-[#a0a0a0] hover:text-white transition-colors flex items-center gap-1"
          >
            <span>View All</span>
            <Icon icon="ph:arrow-right" width={13} />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {CURATED_TMDB_MOVIES.map((movie) => (
            <div
              key={movie.id}
              onClick={() => handleOpenMovie(movie)}
              className="group cursor-pointer select-none space-y-2.5"
            >
              <div className="relative aspect-[2/3] w-full rounded-2xl overflow-hidden bg-[#151515] border border-white/10 group-hover:border-white/40 transition-all duration-400 group-hover:-translate-y-1 group-hover:shadow-xl">
                <Image
                  src={getTMDBImageUrl(movie.poster_path, "w500")}
                  alt={movie.title}
                  fill
                  sizes="(max-width: 640px) 160px, 240px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-106 filter brightness-95"
                />
                <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-black/60 text-[10px] font-mono text-white border border-white/10">
                  4K
                </div>
              </div>

              <div className="space-y-0.5 px-0.5">
                <h4 className="text-xs font-medium text-white truncate group-hover:text-white">
                  {movie.title}
                </h4>
                <p className="text-[11px] font-mono text-[#a0a0a0] flex items-center gap-1">
                  <Icon icon="ph:star-fill" width={10} className="text-white" />
                  <span>{movie.vote_average.toFixed(1)}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 03. Popular Series — Elegant Cards */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
        <div className="flex items-end justify-between border-b border-white/10 pb-6">
          <div className="space-y-1">
            <span className="text-xs uppercase font-mono tracking-widest text-[#a0a0a0]">
              03 / Television
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
              Acclaimed Television Series
            </h2>
          </div>
          <Link
            href="/series"
            className="text-xs font-medium text-[#a0a0a0] hover:text-white transition-colors flex items-center gap-1"
          >
            <span>View All</span>
            <Icon icon="ph:arrow-right" width={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CURATED_TMDB_SERIES.map((show) => (
            <div
              key={show.id}
              onClick={() => handleOpenSeries(show)}
              className="group cursor-pointer select-none space-y-3"
            >
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-[#151515] border border-white/10 group-hover:border-white/40 transition-all duration-400 group-hover:-translate-y-1 group-hover:shadow-xl">
                <Image
                  src={getTMDBImageUrl(show.backdrop_path, "w780")}
                  alt={show.name || show.title}
                  fill
                  sizes="320px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-106 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-xs font-semibold text-white drop-shadow">
                    {show.name || show.title}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-[#a0a0a0] px-1 font-mono">
                <span>{show.number_of_seasons} Seasons</span>
                <span className="flex items-center gap-1 text-white">
                  <Icon icon="ph:star-fill" width={10} />
                  <span>{show.vote_average.toFixed(1)}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 04. Live TV — Minimal Channel Directory Preview */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
        <div className="flex items-end justify-between border-b border-white/10 pb-6">
          <div className="space-y-1">
            <span className="text-xs uppercase font-mono tracking-widest text-[#a0a0a0]">
              04 / Broadcast Feeds
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
              Authorized Live Channels
            </h2>
          </div>
          <Link
            href="/live-tv"
            className="text-xs font-medium text-[#a0a0a0] hover:text-white transition-colors flex items-center gap-1"
          >
            <span>Launch Live TV Player</span>
            <Icon icon="ph:arrow-right" width={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CHANNELS_DATA.slice(0, 4).map((ch) => (
            <Link
              key={ch.id}
              href="/live-tv"
              className="p-5 rounded-2xl bg-[#151515] border border-white/10 hover:border-white/30 transition-all space-y-3 block group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-[#a0a0a0]">
                  {ch.countryCode} • {ch.category}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white">
                  {ch.resolution.split(" ")[0]}
                </span>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white truncate group-hover:text-white">
                  {ch.name}
                </h4>
                <p className="text-xs text-[#a0a0a0] truncate mt-0.5 font-light">
                  Now: {ch.currentProgram}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 05. Sports — Live Fixtures & Categories */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
        <div className="flex items-end justify-between border-b border-white/10 pb-6">
          <div className="space-y-1">
            <span className="text-xs uppercase font-mono tracking-widest text-[#a0a0a0]">
              05 / Matchday Hub
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
              Championship Sports
            </h2>
          </div>
          <Link
            href="/sports"
            className="text-xs font-medium text-[#a0a0a0] hover:text-white transition-colors flex items-center gap-1"
          >
            <span>Full Matchday Schedule</span>
            <Icon icon="ph:arrow-right" width={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CURATED_LIVE_MATCHES.slice(0, 2).map((match) => (
            <div
              key={match.id}
              className="p-6 rounded-3xl bg-[#151515] border border-white/10 flex flex-col justify-between space-y-6"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-xs font-mono text-[#a0a0a0] uppercase">
                  {match.competition}
                </span>
                {match.status === "LIVE" ? (
                  <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white text-black text-[10px] font-bold">
                    LIVE {match.minute}
                  </span>
                ) : (
                  <span className="text-xs font-mono text-[#a0a0a0]">
                    {match.kickoffTime}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between text-base sm:text-lg font-light text-white">
                <span className="truncate pr-2">{match.homeTeam.name}</span>
                <span className="font-mono text-xs px-2.5 py-1 rounded-lg bg-white/5 text-[#a0a0a0]">
                  VS
                </span>
                <span className="truncate pl-2 text-right">{match.awayTeam.name}</span>
              </div>

              <div className="flex items-center justify-between text-xs text-[#a0a0a0] pt-2 border-t border-white/5">
                <span>{match.venue}</span>
                <span className="text-white font-mono text-[11px]">{match.channelBroadcast}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 06. Subscription Plans — Redesigned Compact Monochromatic Cards */}
      <section id="pricing" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-[#a0a0a0]">
            06 / Formules
          </span>
          <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
            Nos Abonnements
          </h2>
          <p className="text-xs sm:text-sm text-[#a0a0a0] font-light leading-relaxed">
            Formules compactes, claires et sans engagement. Provisionnement et activation de votre flux en moins de 3 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {SUBSCRIPTION_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      {/* 07. Devices — Minimal Ecosystem Strip */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-[#a0a0a0]">
            07 / Compatibilité
          </span>
          <h3 className="text-xl sm:text-2xl font-light text-white">
            Écosystème Matériel Universel
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-[#a0a0a0]">
          {[
            "Apple TV 4K",
            "Amazon Fire TV Stick",
            "Samsung Tizen Smart TV",
            "LG webOS Smart TV",
            "Android TV & Shield",
            "MAG Box & Formuler",
            "iPhone & iPad",
            "Mac & Windows PC",
          ].map((device) => (
            <Link
              key={device}
              href="/devices"
              className="px-4 py-2 rounded-full bg-[#151515] border border-white/10 hover:border-white/30 text-white/90 text-xs transition-colors"
            >
              {device}
            </Link>
          ))}
        </div>
      </section>

      {/* 08. Contact — Direct Concierge CTA */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10">
        <div className="p-8 sm:p-14 rounded-3xl bg-[#151515] border border-white/15 text-center space-y-6">
          <span className="text-xs uppercase font-mono tracking-widest text-[#a0a0a0]">
            08 / Accès &amp; Assistance
          </span>
          <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white max-w-xl mx-auto">
            Découvrez le Streaming Cinématographique NOUDINE.
          </h2>
          <p className="text-xs sm:text-sm text-[#a0a0a0] max-w-md mx-auto font-light leading-relaxed">
            Contactez notre conciergerie pour recevoir vos identifiants ou demander votre accès de démonstration gratuit 24h.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href={generateWhatsAppContactUrl("Activation Immédiate")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full bg-white text-black hover:bg-[#f2f2f2] text-xs font-semibold tracking-wide transition-all shadow-lg active:scale-95 inline-flex items-center gap-2"
            >
              <Icon icon="ph:paper-plane-tilt" width={16} />
              <span>Contacter la Conciergerie VIP</span>
            </a>
            <Link
              href="/essai-gratuit"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-medium border border-white/15 transition-all inline-flex items-center gap-2"
            >
              <Icon icon="ph:timer" width={14} />
              <span>Demander un Essai Gratuit 24H</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
