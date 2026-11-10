"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { CURATED_TMDB_MOVIES, CURATED_TMDB_SERIES, TMDBMovie, getTMDBImageUrl } from "@/services/tmdb";
import { MediaItem } from "@/data/media";

interface HeroMinimalProps {
  onSelectMedia?: (item: MediaItem) => void;
}

interface GalleryCardItem {
  id: string;
  title: string;
  category: string;
  network: string;
  backdrop: string;
  poster: string;
  fallback: string;
  bgClass: string;
  movie: TMDBMovie;
}

function GalleryCard({
  item,
  idx,
  onClick,
}: {
  item: GalleryCardItem;
  idx: number;
  onClick: () => void;
}) {
  const i = idx - 3;
  const iAbs = Math.abs(i);
  const zIndex = 25 + iAbs * 5;

  return (
    <div
      key={item.id}
      data-i={i}
      data-index={idx}
      style={{
        "--i": i,
        "--i-abs": iAbs,
        "--stagger": idx,
        zIndex,
      } as React.CSSProperties}
      onClick={onClick}
      className={`group relative shrink-0 cursor-pointer select-none rounded-[20px] overflow-hidden border border-black/10 hover:border-black/30 dark:border-white/20 dark:hover:border-white/60 shadow-xl shadow-black/15 dark:shadow-black/80 w-32 sm:w-40 md:w-48 lg:w-52 ${item.bgClass} flex items-center justify-center`}
    >
      {/* Pure Brand Image (600x900 portrait card artwork with the exact matching brand background color) */}
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src={item.poster}
          alt={item.title}
          fill
          unoptimized
          priority
          sizes="(max-width: 640px) 140px, (max-width: 1024px) 190px, 220px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
    </div>
  );
}

export function HeroMinimal({ onSelectMedia }: HeroMinimalProps) {
  // 7 pure cinematic brand cards with concave panoramic amphitheater curve
  const galleryItems: GalleryCardItem[] = [
    {
      id: "gal-1",
      title: "Netflix",
      category: "Streaming 4K",
      network: "NETFLIX",
      backdrop: "/brands/card-netflix.png",
      poster: "/brands/card-netflix.png",
      fallback: "/brands/card-netflix.png",
      bgClass: "bg-[#1f272e]",
      movie: CURATED_TMDB_MOVIES[0],
    },
    {
      id: "gal-2",
      title: "beIN SPORTS",
      category: "Live Sports",
      network: "beIN SPORTS",
      backdrop: "/brands/card-beinsports.png",
      poster: "/brands/card-beinsports.png",
      fallback: "/brands/card-beinsports.png",
      bgClass: "bg-[#3d2b35]",
      movie: CURATED_TMDB_MOVIES[1],
    },
    {
      id: "gal-3",
      title: "Apple TV+",
      category: "Apple Originals",
      network: "APPLE TV+",
      backdrop: "/brands/card-appletv.png",
      poster: "/brands/card-appletv.png",
      fallback: "/brands/card-appletv.png",
      bgClass: "bg-[#26342d]",
      movie: CURATED_TMDB_SERIES[0],
    },
    {
      id: "gal-4",
      title: "CANAL+",
      category: "Cinéma & Séries",
      network: "CANAL+",
      backdrop: "/brands/card-canalplus.png",
      poster: "/brands/card-canalplus.png",
      fallback: "/brands/card-canalplus.png",
      bgClass: "bg-[#383127]",
      movie: CURATED_TMDB_MOVIES[2],
    },
    {
      id: "gal-5",
      title: "Disney+",
      category: "Univers Disney",
      network: "DISNEY+",
      backdrop: "/brands/card-disneyplus.png",
      poster: "/brands/card-disneyplus.png",
      fallback: "/brands/card-disneyplus.png",
      bgClass: "bg-[#34243b]",
      movie: CURATED_TMDB_SERIES[1],
    },
    {
      id: "gal-6",
      title: "Prime Video",
      category: "Amazon Blockbusters",
      network: "PRIME VIDEO",
      backdrop: "/brands/card-primevideo.png",
      poster: "/brands/card-primevideo.png",
      fallback: "/brands/card-primevideo.png",
      bgClass: "bg-[#26342d]",
      movie: CURATED_TMDB_MOVIES[3],
    },
    {
      id: "gal-7",
      title: "HBO Max",
      category: "Max Originals",
      network: "HBO MAX",
      backdrop: "/brands/card-hbomax.png",
      poster: "/brands/card-hbomax.png",
      fallback: "/brands/card-hbomax.png",
      bgClass: "bg-[#3d2b35]",
      movie: CURATED_TMDB_SERIES[2],
    },
  ];

  const handleCardClick = (item: GalleryCardItem) => {
    if (!onSelectMedia) return;
    const m = item.movie;
    const media: MediaItem = {
      id: `hero-gal-${m.id}`,
      title: m.title || m.name || item.title,
      type: m.media_type === "tv" ? "series" : "movie",
      category: item.category,
      genres: m.genres ? m.genres.map((g: { id?: number; name: string }) => g.name) : ["Cinéma"],
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
    <div className="hero-cinema relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#faf9f6] dark:bg-[#080808] transition-colors duration-300 pt-28 pb-12">
      {/* 2. Hero Headline & Subtitle matching Flowblox reference structure */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-4 pt-10 sm:pt-14">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-zinc-950 dark:text-white leading-[1.15]"
        >
          <span className="font-serif italic font-normal block sm:inline">L&apos;Excellence Cinématographique, </span>
          <span className="font-sans font-bold block sm:inline">Sublimée en 4K Ultra HD</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs sm:text-sm md:text-base text-zinc-600 dark:text-[#a0a0a0] max-w-xl mx-auto font-light leading-relaxed"
        >
          Plus de 28 500 chaînes directes mondiales, 135 000 films et séries en 4K HDR avec la technologie Anti-Freeze™ 9.9 — activés en 3 minutes.
        </motion.p>

        {/* Single Center Pill CTA Button with arrow matching reference */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="pt-2 flex justify-center"
        >
          <Link
            href="/essai-gratuit"
            className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-[#f2f2f2] font-semibold text-xs sm:text-sm shadow-2xl transition-all active:scale-95 group"
          >
            <span>Demander un Essai Gratuit 24H</span>
            <span className="w-7 h-7 rounded-full bg-white text-black dark:bg-black dark:text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <Icon icon="ph:arrow-right" width={13} />
            </span>
          </Link>
        </motion.div>
      </div>

      {/* 3. Concave Panoramic 3D Cards Arc (Exact geometry matching Flowblox reference) */}
      <div className="relative z-10 w-full pt-10 sm:pt-14 pb-6 overflow-hidden perspective-container">
        <div className="w-full flex items-center justify-center gap-3 sm:gap-4 md:gap-5 px-4 sm:px-8 overflow-x-auto no-scrollbar scroll-smooth py-8 [transform-style:preserve-3d]">
          {galleryItems.map((item, idx) => (
            <GalleryCard
              key={item.id}
              item={item}
              idx={idx}
              onClick={() => handleCardClick(item)}
            />
          ))}
        </div>
      </div>

      {/* 4. Three Feature Columns directly below the cards (Matching reference layout) */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 pt-4 pb-2 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 text-center border-t border-black/5 dark:border-white/5">
        <div className="space-y-1.5">
          <h3 className="text-sm sm:text-base font-semibold text-zinc-950 dark:text-white tracking-tight">
            Diffusion 4K &amp; Dolby Atmos
          </h3>
          <p className="text-xs text-zinc-600 dark:text-[#a0a0a0] font-light leading-relaxed">
            Flux non compressés en 60 FPS avec son spatial immersif sur l&apos;ensemble de vos téléviseurs et boîtiers.
          </p>
        </div>
        <div className="space-y-1.5">
          <h3 className="text-sm sm:text-base font-semibold text-zinc-950 dark:text-white tracking-tight">
            Technologie Anti-Freeze™ 9.9
          </h3>
          <p className="text-xs text-zinc-600 dark:text-[#a0a0a0] font-light leading-relaxed">
            Cluster CDN privé ultra-rapide garantissant 99.9% de disponibilité sans coupure pendant les grands événements sportifs.
          </p>
        </div>
        <div className="space-y-1.5">
          <h3 className="text-sm sm:text-base font-semibold text-zinc-950 dark:text-white tracking-tight">
            Activation VIP en 3 Minutes
          </h3>
          <p className="text-xs text-zinc-600 dark:text-[#a0a0a0] font-light leading-relaxed">
            Vos identifiants Xtream Codes et liens M3U générés immédiatement par notre conciergerie active 24/7.
          </p>
        </div>
      </div>
    </div>
  );
}
