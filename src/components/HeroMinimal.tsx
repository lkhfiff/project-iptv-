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
  cardBg: string;
  brandKey: string;
  movie: TMDBMovie;
}

interface RealBrandIcon {
  name: string;
  logo?: string;
  icon?: string;
  width?: number;
  height?: number;
}

const ROW_1_ICONS: RealBrandIcon[] = [
  { name: "Netflix", logo: "/brands/netflix-transparent.png", width: 85, height: 28 },
  { name: "Canal+", logo: "/brands/canalplus.png", width: 95, height: 28 },
  { name: "Disney+", logo: "/brands/disneyplus-transparent.png", width: 75, height: 32 },
  { name: "Apple TV+", logo: "/brands/appletv-transparent.png", width: 55, height: 32 },
  { name: "Prime Video", logo: "/brands/primevideo.png", width: 85, height: 26 },
  { name: "HBO Max", logo: "/brands/hbomax.png", width: 85, height: 24 },
  { name: "Paramount+", icon: "simple-icons:paramountplus", width: 32, height: 32 },
  { name: "Peacock", icon: "simple-icons:peacock", width: 32, height: 32 },
  { name: "Hulu", icon: "simple-icons:hulu", width: 44, height: 22 },
];

const ROW_2_ICONS: RealBrandIcon[] = [
  { name: "beIN SPORTS", logo: "/brands/beinsports-transparent.png", width: 75, height: 32 },
  { name: "DAZN", icon: "simple-icons:dazn", width: 34, height: 34 },
  { name: "Formula 1", icon: "simple-icons:f1", width: 48, height: 26 },
  { name: "UFC", icon: "simple-icons:ufc", width: 50, height: 24 },
  { name: "ESPN", icon: "simple-icons:espn", width: 52, height: 24 },
  { name: "NBA", icon: "simple-icons:nba", width: 34, height: 34 },
  { name: "Canal+", logo: "/brands/canalplus.png", width: 95, height: 28 },
  { name: "WWE", icon: "simple-icons:wwe", width: 36, height: 36 },
  { name: "Eurosport", icon: "ph:trophy-bold", width: 30, height: 30 },
];

const ROW_3_ICONS: RealBrandIcon[] = [
  { name: "YouTube", icon: "simple-icons:youtube", width: 38, height: 38 },
  { name: "Twitch", icon: "simple-icons:twitch", width: 30, height: 30 },
  { name: "Spotify", icon: "simple-icons:spotify", width: 30, height: 30 },
  { name: "Crunchyroll", icon: "simple-icons:crunchyroll", width: 32, height: 32 },
  { name: "Warner Bros", icon: "simple-icons:warnerbros", width: 34, height: 34 },
  { name: "PlayStation", icon: "simple-icons:playstation", width: 34, height: 34 },
  { name: "Netflix", logo: "/brands/netflix-transparent.png", width: 85, height: 28 },
  { name: "Apple TV+", logo: "/brands/appletv-transparent.png", width: 55, height: 32 },
  { name: "Prime Video", logo: "/brands/primevideo.png", width: 85, height: 26 },
  { name: "Disney+", logo: "/brands/disneyplus-transparent.png", width: 75, height: 32 },
];

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
      data-brand={item.brandKey}
      style={{
        "--i": i,
        "--i-abs": iAbs,
        "--stagger": idx,
        "--card-bg": item.cardBg,
        zIndex,
      } as React.CSSProperties}
      onClick={onClick}
      className="card group relative shrink-0 cursor-pointer select-none rounded-[20px] overflow-hidden w-32 sm:w-40 md:w-48 lg:w-52 flex items-center justify-center"
    >
      {/* Pure Transparent Logo sitting directly on the card's background */}
      <div className="relative w-full h-full flex items-center justify-center p-3">
        <Image
          src={item.poster}
          alt={item.title}
          fill
          unoptimized
          priority
          sizes="(max-width: 640px) 140px, (max-width: 1024px) 190px, 220px"
          className="object-contain transition-transform duration-300 ease-out group-hover:scale-105"
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
      backdrop: "/brands/netflix.png",
      poster: "/brands/netflix.png",
      fallback: "/brands/netflix.png",
      cardBg: "#000000",
      brandKey: "netflix",
      movie: CURATED_TMDB_MOVIES[0],
    },
    {
      id: "gal-2",
      title: "beIN SPORTS",
      category: "Live Sports",
      network: "beIN SPORTS",
      backdrop: "/brands/beinsports.png",
      poster: "/brands/beinsports.png",
      fallback: "/brands/beinsports.png",
      cardBg: "#5c2c90",
      brandKey: "beinsports",
      movie: CURATED_TMDB_MOVIES[1],
    },
    {
      id: "gal-3",
      title: "Apple TV+",
      category: "Apple Originals",
      network: "APPLE TV+",
      backdrop: "/brands/appletv.png",
      poster: "/brands/appletv.png",
      fallback: "/brands/appletv.png",
      cardBg: "#1a1a1a",
      brandKey: "appletv",
      movie: CURATED_TMDB_SERIES[0],
    },
    {
      id: "gal-4",
      title: "CANAL+",
      category: "Cinéma & Séries",
      network: "CANAL+",
      backdrop: "/brands/canalplus.png",
      poster: "/brands/canalplus.png",
      fallback: "/brands/canalplus.png",
      cardBg: "#000000",
      brandKey: "canalplus",
      movie: CURATED_TMDB_MOVIES[2],
    },
    {
      id: "gal-5",
      title: "Disney+",
      category: "Univers Disney",
      network: "DISNEY+",
      backdrop: "/brands/disneyplus.png",
      poster: "/brands/disneyplus.png",
      fallback: "/brands/disneyplus.png",
      cardBg: "#04202e",
      brandKey: "disneyplus",
      movie: CURATED_TMDB_SERIES[1],
    },
    {
      id: "gal-6",
      title: "Prime Video",
      category: "Amazon Blockbusters",
      network: "PRIME VIDEO",
      backdrop: "/brands/primevideo.png",
      poster: "/brands/primevideo.png",
      fallback: "/brands/primevideo.png",
      cardBg: "#0b1520",
      brandKey: "primevideo",
      movie: CURATED_TMDB_MOVIES[3],
    },
    {
      id: "gal-7",
      title: "HBO Max",
      category: "Max Originals",
      network: "HBO MAX",
      backdrop: "/brands/hbomax.png",
      poster: "/brands/hbomax.png",
      fallback: "/brands/hbomax.png",
      cardBg: "#3b0a8c",
      brandKey: "hbomax",
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

      {/* 4. IPTV Brands 3-Line Infinite Scrolling (Without BG, Without P, Pure Real Icons) */}
      <div className="relative z-10 w-full pt-8 pb-4 overflow-hidden border-t border-black/5 dark:border-white/5 space-y-4 sm:space-y-5">
        <div className="relative w-full overflow-hidden">
          {/* Edge fade gradients */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#faf9f6] dark:from-[#080808] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#faf9f6] dark:from-[#080808] to-transparent z-10 pointer-events-none" />

          {/* LINE 1: Normal Speed */}
          <div className="animate-marquee-right-normal flex items-center gap-10 sm:gap-14 md:gap-16 py-1 select-none">
            {[...ROW_1_ICONS, ...ROW_1_ICONS, ...ROW_1_ICONS, ...ROW_1_ICONS].map((brand, idx) => (
              <div
                key={`row1-${brand.name}-${idx}`}
                className="flex items-center justify-center shrink-0 opacity-75 hover:opacity-100 transition-all duration-300 hover:scale-110"
              >
                {brand.logo ? (
                  <div className="relative h-6 sm:h-7 w-auto flex items-center justify-center">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={brand.width || 80}
                      height={brand.height || 28}
                      unoptimized
                      className="object-contain filter dark:brightness-100 max-h-7 sm:max-h-8 w-auto"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white">
                    <Icon icon={brand.icon || "ph:television-bold"} width={brand.width || 32} height={brand.height || 32} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* LINE 2: Slightly Slower Speed */}
          <div className="animate-marquee-right-slow flex items-center gap-10 sm:gap-14 md:gap-16 py-1 select-none">
            {[...ROW_2_ICONS, ...ROW_2_ICONS, ...ROW_2_ICONS, ...ROW_2_ICONS].map((brand, idx) => (
              <div
                key={`row2-${brand.name}-${idx}`}
                className="flex items-center justify-center shrink-0 opacity-75 hover:opacity-100 transition-all duration-300 hover:scale-110"
              >
                {brand.logo ? (
                  <div className="relative h-6 sm:h-7 w-auto flex items-center justify-center">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={brand.width || 80}
                      height={brand.height || 28}
                      unoptimized
                      className="object-contain filter dark:brightness-100 max-h-7 sm:max-h-8 w-auto"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white">
                    <Icon icon={brand.icon || "ph:television-bold"} width={brand.width || 32} height={brand.height || 32} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* LINE 3: Slightly Faster Speed */}
          <div className="animate-marquee-right-fast flex items-center gap-10 sm:gap-14 md:gap-16 py-1 select-none">
            {[...ROW_3_ICONS, ...ROW_3_ICONS, ...ROW_3_ICONS, ...ROW_3_ICONS].map((brand, idx) => (
              <div
                key={`row3-${brand.name}-${idx}`}
                className="flex items-center justify-center shrink-0 opacity-75 hover:opacity-100 transition-all duration-300 hover:scale-110"
              >
                {brand.logo ? (
                  <div className="relative h-6 sm:h-7 w-auto flex items-center justify-center">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={brand.width || 80}
                      height={brand.height || 28}
                      unoptimized
                      className="object-contain filter dark:brightness-100 max-h-7 sm:max-h-8 w-auto"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white">
                    <Icon icon={brand.icon || "ph:television-bold"} width={brand.width || 32} height={brand.height || 32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
