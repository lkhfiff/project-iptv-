"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { HeroMinimal } from "@/components/HeroMinimal";
import { BentoFeatures } from "@/components/BentoFeatures";
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
    <div className="space-y-24 sm:space-y-32 pb-24 overflow-hidden bg-[#faf9f6] text-zinc-900 dark:bg-[#080808] dark:text-white transition-colors duration-300">
      {/* 1. Full-Screen Hero & Floating Image Gallery (Matching the reference screenshot) */}
      <HeroMinimal onSelectMedia={openModal} />

      {/* 2. Asymmetric Bento Features Grid (Matching Flowblox Reference Structure) */}
      <BentoFeatures />

      {/* 02. Trending Movies — Horizontal Poster Gallery */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
        <div className="flex items-end justify-between border-b border-black/10 dark:border-white/10 pb-6">
          <div className="space-y-1">
            <span className="text-xs uppercase font-mono tracking-widest text-zinc-500 dark:text-[#a0a0a0]">
              02 / Galerie Cinématographique
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-zinc-950 dark:text-white tracking-tight">
              Films &amp; Box-Office
            </h2>
          </div>
          <Link
            href="/movies"
            className="text-xs font-medium text-zinc-600 dark:text-[#a0a0a0] hover:text-black dark:hover:text-white transition-colors flex items-center gap-1"
          >
            <span>Tout Afficher</span>
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
              <div className="relative aspect-[2/3] w-full rounded-2xl overflow-hidden bg-black border border-black/10 dark:border-white/10 group-hover:border-black/30 dark:group-hover:border-white/40 transition-all duration-400 group-hover:-translate-y-1 group-hover:shadow-xl shadow-md">
                <Image
                  src={getTMDBImageUrl(movie.poster_path, "w500")}
                  alt={movie.title}
                  fill
                  sizes="(max-width: 640px) 160px, 240px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-106 filter brightness-95"
                />
                <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-black/70 text-[10px] font-mono text-white border border-white/10">
                  4K
                </div>
              </div>

              <div className="space-y-0.5 px-0.5">
                <h4 className="text-xs font-medium text-zinc-900 dark:text-white truncate">
                  {movie.title}
                </h4>
                <p className="text-[11px] font-mono text-zinc-500 dark:text-[#a0a0a0] flex items-center gap-1">
                  <Icon icon="ph:star-fill" width={10} className="text-amber-500" />
                  <span>{movie.vote_average.toFixed(1)}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 03. Popular Series — Elegant Cards */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
        <div className="flex items-end justify-between border-b border-black/10 dark:border-white/10 pb-6">
          <div className="space-y-1">
            <span className="text-xs uppercase font-mono tracking-widest text-zinc-500 dark:text-[#a0a0a0]">
              03 / Séries Phares
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-zinc-950 dark:text-white tracking-tight">
              Séries &amp; Productions Originales
            </h2>
          </div>
          <Link
            href="/series"
            className="text-xs font-medium text-zinc-600 dark:text-[#a0a0a0] hover:text-black dark:hover:text-white transition-colors flex items-center gap-1"
          >
            <span>Tout Afficher</span>
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
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-black/10 dark:border-white/10 group-hover:border-black/30 dark:group-hover:border-white/40 transition-all duration-400 group-hover:-translate-y-1 group-hover:shadow-xl shadow-md">
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

              <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-[#a0a0a0] px-1 font-mono">
                <span>{show.number_of_seasons} Saisons</span>
                <span className="flex items-center gap-1 text-zinc-900 dark:text-white">
                  <Icon icon="ph:star-fill" width={10} className="text-amber-500" />
                  <span>{show.vote_average.toFixed(1)}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 04. Live TV — Minimal Channel Directory Preview */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
        <div className="flex items-end justify-between border-b border-black/10 dark:border-white/10 pb-6">
          <div className="space-y-1">
            <span className="text-xs uppercase font-mono tracking-widest text-zinc-500 dark:text-[#a0a0a0]">
              04 / Flux Télévisés
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-zinc-950 dark:text-white tracking-tight">
              Chaînes en Direct &amp; Satellites
            </h2>
          </div>
          <Link
            href="/live-tv"
            className="text-xs font-medium text-zinc-600 dark:text-[#a0a0a0] hover:text-black dark:hover:text-white transition-colors flex items-center gap-1"
          >
            <span>Ouvrir le Lecteur Live TV</span>
            <Icon icon="ph:arrow-right" width={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CHANNELS_DATA.slice(0, 4).map((ch) => (
            <Link
              key={ch.id}
              href="/live-tv"
              className="p-5 rounded-2xl bg-white dark:bg-[#151515] border border-black/10 dark:border-white/10 hover:border-black/25 dark:hover:border-white/30 shadow-md shadow-black/5 dark:shadow-none transition-all space-y-3 block group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-zinc-500 dark:text-[#a0a0a0]">
                  {ch.countryCode} • {ch.category}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 text-zinc-900 dark:text-white">
                  {ch.resolution.split(" ")[0]}
                </span>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-zinc-950 dark:text-white truncate">
                  {ch.name}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-[#a0a0a0] truncate mt-0.5 font-light">
                  En cours: {ch.currentProgram}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 05. Sports — Live Fixtures & Categories */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
        <div className="flex items-end justify-between border-b border-black/10 dark:border-white/10 pb-6">
          <div className="space-y-1">
            <span className="text-xs uppercase font-mono tracking-widest text-zinc-500 dark:text-[#a0a0a0]">
              05 / Calendrier Sportif
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 dark:text-white tracking-tight">
              Compétitions &amp; Grands Matchs
            </h2>
          </div>
          <Link
            href="/sports"
            className="text-xs font-medium text-zinc-600 dark:text-[#a0a0a0] hover:text-black dark:hover:text-white transition-colors flex items-center gap-1"
          >
            <span>Programme Sportif Intégral</span>
            <Icon icon="ph:arrow-right" width={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CURATED_LIVE_MATCHES.slice(0, 2).map((match) => (
            <div
              key={match.id}
              className="p-6 rounded-3xl bg-white dark:bg-[#151515] border border-black/10 dark:border-white/10 shadow-md shadow-black/5 dark:shadow-none flex flex-col justify-between space-y-6"
            >
              <div className="flex items-center justify-between border-b border-black/5 dark:border-white/5 pb-3">
                <span className="text-xs font-mono text-zinc-500 dark:text-[#a0a0a0] uppercase">
                  {match.competition}
                </span>
                {match.status === "LIVE" ? (
                  <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-[10px] font-bold">
                    LIVE {match.minute}
                  </span>
                ) : (
                  <span className="text-xs font-mono text-zinc-500 dark:text-[#a0a0a0]">
                    {match.kickoffTime}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between text-base sm:text-lg font-light text-zinc-950 dark:text-white">
                <span className="truncate pr-2">{match.homeTeam.name}</span>
                <span className="font-mono text-xs px-2.5 py-1 rounded-lg bg-black/5 dark:bg-white/5 text-zinc-700 dark:text-[#a0a0a0]">
                  VS
                </span>
                <span className="truncate pl-2 text-right">{match.awayTeam.name}</span>
              </div>

              <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-[#a0a0a0] pt-2 border-t border-black/5 dark:border-white/5">
                <span>{match.venue}</span>
                <span className="text-zinc-950 dark:text-white font-mono text-[11px]">{match.channelBroadcast}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 06. Subscription Plans — Redesigned Compact Monochromatic Cards */}
      <section id="pricing" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-zinc-500 dark:text-[#a0a0a0]">
            06 / Formules
          </span>
          <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 dark:text-white tracking-tight">
            Nos Abonnements
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#a0a0a0] font-light leading-relaxed">
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
          <span className="text-xs uppercase font-mono tracking-widest text-zinc-500 dark:text-[#a0a0a0]">
            07 / Compatibilité
          </span>
          <h3 className="text-xl sm:text-2xl font-light text-zinc-950 dark:text-white">
            Écosystème Matériel Universel
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-600 dark:text-[#a0a0a0]">
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
              className="px-4 py-2 rounded-full bg-white dark:bg-[#151515] border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 text-zinc-800 dark:text-white/90 text-xs shadow-sm transition-colors"
            >
              {device}
            </Link>
          ))}
        </div>
      </section>

      {/* 08. Contact — Direct Concierge CTA */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10">
        <div className="p-8 sm:p-14 rounded-3xl bg-white dark:bg-[#151515] border border-black/10 dark:border-white/15 text-center space-y-6 shadow-2xl shadow-black/5 dark:shadow-none">
          <span className="text-xs uppercase font-mono tracking-widest text-zinc-500 dark:text-[#a0a0a0]">
            08 / Accès &amp; Assistance
          </span>
          <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-zinc-950 dark:text-white max-w-xl mx-auto">
            Découvrez le Streaming Cinématographique NOUDINE.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#a0a0a0] max-w-md mx-auto font-light leading-relaxed">
            Contactez notre conciergerie pour recevoir vos identifiants ou demander votre accès de démonstration gratuit 24h.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href={generateWhatsAppContactUrl("Activation Immédiate")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-[#f2f2f2] text-xs font-semibold tracking-wide transition-all shadow-lg active:scale-95 inline-flex items-center gap-2"
            >
              <Icon icon="ph:paper-plane-tilt" width={16} />
              <span>Contacter la Conciergerie VIP</span>
            </a>
            <Link
              href="/essai-gratuit"
              className="px-6 py-3 rounded-full bg-black/5 hover:bg-black/10 text-zinc-900 dark:bg-white/10 dark:hover:bg-white/15 dark:text-white text-xs font-medium border border-black/10 dark:border-white/15 transition-all inline-flex items-center gap-2"
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
