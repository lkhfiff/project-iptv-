"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { CURATED_TMDB_MOVIES, CURATED_TMDB_SERIES, getTMDBImageUrl } from "@/services/tmdb";
import { MediaItem } from "@/data/media";

interface HeroMinimalProps {
  onSelectMedia?: (item: MediaItem) => void;
}

export function HeroMinimal({ onSelectMedia }: HeroMinimalProps) {
  // 7 cinematic cards featuring the requested entertainment network badges (Netflix, beIN Sports, Apple TV+, Canal+, Disney+, Prime Video, HBO)
  const galleryItems = [
    {
      id: "gal-1",
      title: "Dune: Part Two",
      category: "Cinéma • 4K UHD",
      network: "NETFLIX",
      networkBadge: "border-red-500/40 text-red-400 bg-black/85",
      backdrop: getTMDBImageUrl(CURATED_TMDB_MOVIES[0].backdrop_path, "w1280"),
      poster: getTMDBImageUrl(CURATED_TMDB_MOVIES[0].poster_path, "w500"),
      heightClass: "h-64 sm:h-72 md:h-80",
      movie: CURATED_TMDB_MOVIES[0],
    },
    {
      id: "gal-2",
      title: "UEFA Champions League",
      category: "Live Sports • 4K 60FPS",
      network: "beIN SPORTS",
      networkBadge: "border-purple-500/40 text-purple-300 bg-black/85",
      backdrop: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1280&auto=format&fit=crop",
      poster: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=500&auto=format&fit=crop",
      heightClass: "h-72 sm:h-80 md:h-88",
      movie: CURATED_TMDB_MOVIES[1],
    },
    {
      id: "gal-3",
      title: "Silo",
      category: "Série Originale • 4K",
      network: "APPLE TV+",
      networkBadge: "border-white/30 text-white bg-black/85",
      backdrop: getTMDBImageUrl(CURATED_TMDB_SERIES[0].backdrop_path, "w1280"),
      poster: getTMDBImageUrl(CURATED_TMDB_SERIES[0].poster_path, "w500"),
      heightClass: "h-60 sm:h-68 md:h-76",
      movie: CURATED_TMDB_SERIES[0],
    },
    {
      id: "gal-4",
      title: "Gladiator II",
      category: "Exclusivité • Dolby Vision",
      network: "CANAL+",
      networkBadge: "border-zinc-400/40 text-white bg-black/85",
      backdrop: getTMDBImageUrl(CURATED_TMDB_MOVIES[2].backdrop_path, "w1280"),
      poster: getTMDBImageUrl(CURATED_TMDB_MOVIES[2].poster_path, "w500"),
      heightClass: "h-68 sm:h-76 md:h-84",
      movie: CURATED_TMDB_MOVIES[2],
    },
    {
      id: "gal-5",
      title: "Shōgun",
      category: "Série Phare • 4K HDR",
      network: "DISNEY+",
      networkBadge: "border-blue-400/40 text-blue-300 bg-black/85",
      backdrop: getTMDBImageUrl(CURATED_TMDB_SERIES[1].backdrop_path, "w1280"),
      poster: getTMDBImageUrl(CURATED_TMDB_SERIES[1].poster_path, "w500"),
      heightClass: "h-72 sm:h-80 md:h-88",
      movie: CURATED_TMDB_SERIES[1],
    },
    {
      id: "gal-6",
      title: "Interstellar",
      category: "Chef-d'œuvre • IMAX 4K",
      network: "PRIME VIDEO",
      networkBadge: "border-cyan-400/40 text-cyan-300 bg-black/85",
      backdrop: getTMDBImageUrl(CURATED_TMDB_MOVIES[3].backdrop_path, "w1280"),
      poster: getTMDBImageUrl(CURATED_TMDB_MOVIES[3].poster_path, "w500"),
      heightClass: "h-64 sm:h-72 md:h-80",
      movie: CURATED_TMDB_MOVIES[3],
    },
    {
      id: "gal-7",
      title: "Severance",
      category: "Thriller Psychologique • 4K",
      network: "HBO MAX",
      networkBadge: "border-indigo-400/40 text-indigo-300 bg-black/85",
      backdrop: getTMDBImageUrl(CURATED_TMDB_SERIES[2].backdrop_path, "w1280"),
      poster: getTMDBImageUrl(CURATED_TMDB_SERIES[2].poster_path, "w500"),
      heightClass: "h-60 sm:h-68 md:h-76",
      movie: CURATED_TMDB_SERIES[2],
    },
  ];

  const streamingNetworks = [
    { name: "NETFLIX", icon: "simple-icons:netflix" },
    { name: "beIN SPORTS", icon: "ph:trophy" },
    { name: "APPLE TV+", icon: "simple-icons:appletv" },
    { name: "CANAL+", icon: "ph:television" },
    { name: "DISNEY+", icon: "simple-icons:disneyplus" },
    { name: "PRIME VIDEO", icon: "simple-icons:primevideo" },
    { name: "DAZN", icon: "ph:broadcast" },
    { name: "SKY SPORTS", icon: "ph:shield-chevron" },
  ];

  const handleCardClick = (item: (typeof galleryItems)[0]) => {
    if (!onSelectMedia) return;
    const m = item.movie;
    const media: MediaItem = {
      id: `hero-gal-${m.id}`,
      title: m.title || m.name || item.title,
      type: m.media_type === "tv" ? "series" : "movie",
      category: item.category,
      genres: m.genres ? m.genres.map((g) => g.name) : ["Cinéma"],
      year: m.release_date
        ? new Date(m.release_date).getFullYear()
        : m.first_air_date
        ? new Date(m.first_air_date).getFullYear()
        : 2024,
      rating: m.vote_average ? `${m.vote_average.toFixed(1)} / 10` : "8.5 / 10",
      duration: m.runtime ? `${m.runtime}m` : "4K UHD",
      quality: "4K UHD",
      audio: "Dolby Atmos",
      posterUrl: item.poster,
      backdropUrl: item.backdrop,
      synopsis: m.overview,
    };
    onSelectMedia(media);
  };

  return (
    <div className="hero-cinema relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#080808] pt-28 pb-8">
      {/* 1. Full-screen Cinematic Photographic Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=2560&auto=format&fit=crop"
          alt="Atmosphère Cinématographique NOUDINE"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.80] contrast-[1.08]"
        />
        {/* Subtle dark vignette overlay for typography readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/50 to-black/30 dark:from-[#080808]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-[#080808]/90" />
      </div>

      {/* 2. Centered Typography (Matching Atelier Arc composition with NOUDINE brand) */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-4 pt-10 sm:pt-14">
        {/* Network Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-[11px] font-mono tracking-wider"
        >
          <Icon icon="ph:television" width={13} />
          <span>Bouquet International 4K • Netflix • beIN • Canal+ • Apple TV+</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white font-sans"
        >
          NOUDINE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs sm:text-sm text-[#f2f2f2]/90 max-w-lg mx-auto font-light leading-relaxed tracking-wide"
        >
          Cinéma ultra-haute définition, retransmissions sportives en direct et bouquets mondiaux pour téléviseurs d&apos;exception.
        </motion.p>

        {/* Minimal Pill Buttons (Matching "Portfolio" / "Approach" in reference) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="pt-2 flex items-center justify-center gap-3"
        >
          <a
            href="#featured"
            className="px-6 py-2.5 rounded-full bg-white text-black hover:bg-[#f2f2f2] text-xs font-semibold shadow-xl transition-all active:scale-95 flex items-center gap-1.5"
          >
            <span>Explorer le Cinéma</span>
            <Icon icon="ph:arrow-down" width={12} />
          </a>
          <Link
            href="/abonnements"
            className="px-6 py-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md text-xs font-medium border border-white/15 transition-all active:scale-95 flex items-center gap-1.5"
          >
            <span>Nos Abonnements</span>
            <Icon icon="ph:arrow-up-right" width={12} />
          </Link>
        </motion.div>

        {/* Streaming Networks Minimal Logo Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="pt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[10px] font-mono tracking-widest text-[#a0a0a0]"
        >
          {streamingNetworks.map((net) => (
            <div
              key={net.name}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 hover:border-white/30 hover:text-white transition-colors"
            >
              <Icon icon={net.icon} width={13} className="text-white" />
              <span>{net.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 3. Floating Overlapping Image Gallery (Curved 3D Arc matching reference) */}
      <div className="relative z-10 w-full pt-8 sm:pt-12 pb-4 perspective-container overflow-hidden">
        <div className="w-full flex items-end justify-center gap-2.5 sm:gap-4 md:gap-5 px-4 sm:px-8 overflow-x-auto no-scrollbar scroll-smooth py-6 [transform-style:preserve-3d]">
          {galleryItems.map((item, idx) => {
            const offset = idx - 3;
            const rotateY = offset * -4.5;
            const translateY = Math.abs(offset) * 8 - (offset === 0 ? 8 : 0);
            const scale = offset === 0 ? 1.03 : 1 - Math.abs(offset) * 0.03;
            const zIndex = 40 - Math.abs(offset) * 5;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.15 + idx * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  transform: `perspective(1200px) rotateY(${rotateY}deg) translateY(${translateY}px) scale(${scale})`,
                  zIndex,
                }}
                onClick={() => handleCardClick(item)}
                className={`group relative shrink-0 cursor-pointer select-none rounded-2xl md:rounded-3xl overflow-hidden border border-white/20 hover:border-white/60 transition-all duration-500 hover:!scale-105 hover:!translate-y-[-14px] hover:!rotate-0 hover:z-50 shadow-2xl shadow-black/80 w-36 sm:w-48 md:w-56 ${item.heightClass}`}
              >
                {/* Official Network Badge on the Card (Netflix, beIN Sports, Apple TV+, Canal+, Disney+, Prime Video) */}
                <div className="absolute top-3 left-3 z-20">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[9px] font-bold tracking-wider uppercase border backdrop-blur-md shadow-md ${item.networkBadge}`}
                  >
                    {item.network}
                  </span>
                </div>

                <Image
                  src={item.poster || item.backdrop}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 150px, (max-width: 1024px) 200px, 240px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.92] group-hover:brightness-100"
                />

                {/* Card gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Title & metadata inside the card */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 space-y-0.5">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#a0a0a0]">
                    {item.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-semibold text-white truncate drop-shadow-md">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Utility Bar (Exact match with reference "Visiter le site" & bottom icon) */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-2 flex items-center justify-between">
          <a
            href="#featured"
            className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#151515]/75 hover:bg-[#202020]/95 backdrop-blur-xl border border-white/15 text-white text-xs font-medium transition-all shadow-xl active:scale-95 group"
          >
            <Icon
              icon="ph:arrow-up-right"
              width={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
            <span>Visiter le catalogue</span>
          </a>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block font-mono text-[11px] text-[#a0a0a0] px-3 py-1 rounded-full bg-white/5 border border-white/10">
              Anti-Freeze™ 9.9 CDN Cluster
            </span>
            <Link
              href="/essai-gratuit"
              className="w-10 h-10 rounded-2xl bg-[#151515]/75 hover:bg-[#202020]/95 backdrop-blur-xl border border-white/15 flex items-center justify-center text-white transition-all shadow-xl active:scale-95 group"
              aria-label="Essai Gratuit 24h"
              title="Demander un Essai Gratuit 24h"
            >
              <Icon
                icon="ph:sparkle"
                width={17}
                className="group-hover:rotate-12 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
