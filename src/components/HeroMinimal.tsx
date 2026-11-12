"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Icon } from "@iconify/react";
import { CURATED_TMDB_MOVIES, CURATED_TMDB_SERIES, TMDBMovie, getTMDBImageUrl } from "@/services/tmdb";
import { useTheme } from "@/context/ThemeContext";
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
  lightLogo?: string;
  icon?: string;
  padded?: boolean;
}

const ROW_1_ICONS: RealBrandIcon[] = [
  { name: "Netflix", logo: "/brands/netflix-transparent.png" },
  { name: "Canal+", logo: "/brands/canalplus.png" },
  { name: "Disney+", logo: "/brands/disneyplus-transparent.png", lightLogo: "/brands/disneyplus-light.png", padded: true },
  { name: "Apple TV+", logo: "/brands/appletv-transparent.png", lightLogo: "/brands/appletv-light.png", padded: true },
  { name: "Prime Video", logo: "/brands/primevideo.png", lightLogo: "/brands/primevideo-light.png" },
  { name: "HBO Max", logo: "/brands/hbomax.png", lightLogo: "/brands/hbomax-light.png" },
  { name: "Paramount+", icon: "simple-icons:paramountplus" },
  { name: "Starz", icon: "simple-icons:starz" },
  { name: "Hulu", icon: "simple-icons:hulu" },
];

const ROW_2_ICONS: RealBrandIcon[] = [
  { name: "beIN SPORTS", logo: "/brands/beinsports-transparent.png", lightLogo: "/brands/beinsports-light.png", padded: true },
  { name: "DAZN", icon: "simple-icons:dazn" },
  { name: "Formula 1", icon: "simple-icons:f1" },
  { name: "UFC", icon: "simple-icons:ufc" },
  { name: "Premier League", icon: "simple-icons:premierleague" },
  { name: "NBA", icon: "simple-icons:nba" },
  { name: "Canal+", logo: "/brands/canalplus.png" },
  { name: "WWE", icon: "simple-icons:wwe" },
  { name: "Eurosport", icon: "ph:trophy-bold" },
];

const ROW_3_ICONS: RealBrandIcon[] = [
  { name: "YouTube", icon: "simple-icons:youtube" },
  { name: "Twitch", icon: "simple-icons:twitch" },
  { name: "Spotify", icon: "simple-icons:spotify" },
  { name: "Crunchyroll", icon: "simple-icons:crunchyroll" },
  { name: "Warner Bros", icon: "simple-icons:warnerbros" },
  { name: "PlayStation", icon: "simple-icons:playstation" },
  { name: "Netflix", logo: "/brands/netflix-transparent.png" },
  { name: "Apple TV+", logo: "/brands/appletv-transparent.png", lightLogo: "/brands/appletv-light.png", padded: true },
  { name: "Prime Video", logo: "/brands/primevideo.png", lightLogo: "/brands/primevideo-light.png" },
  { name: "Disney+", logo: "/brands/disneyplus-transparent.png", lightLogo: "/brands/disneyplus-light.png", padded: true },
];

function MarqueeGroup({
  items,
  rowKey,
  ariaHidden = false,
}: {
  items: RealBrandIcon[];
  rowKey: string;
  ariaHidden?: boolean;
}) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  // Repeat 3x per group so a single group always exceeds 100vw up to 2560px+
  const repeatedItems = [...items, ...items, ...items];

  return (
    <ul className="marquee__group" aria-hidden={ariaHidden || undefined}>
      {repeatedItems.map((brand, idx) => {
        const logoSrc = isLight && brand.lightLogo ? brand.lightLogo : brand.logo;
        const applyPadded = !isLight && brand.padded;

        return (
          <li key={`${rowKey}-${idx}`} className="marquee__item">
            {logoSrc ? (
              <Image
                src={logoSrc}
                alt={ariaHidden ? "" : brand.name}
                width={160}
                height={64}
                loading="eager"
                unoptimized
                className={`marquee__logo-img filter dark:brightness-100 ${
                  applyPadded ? "marquee__logo-img--padded" : ""
                }`}
              />
            ) : (
              <span className="marquee__logo-svg text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white">
                <Icon icon={brand.icon || "ph:television-bold"} />
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function MarqueeRow({
  items,
  duration,
  rowKey,
}: {
  items: RealBrandIcon[];
  duration: string;
  rowKey: string;
}) {
  return (
    <div className="marquee">
      <div
        className="marquee__track marquee__track--reverse"
        style={{ "--duration": duration } as React.CSSProperties}
      >
        <MarqueeGroup items={items} rowKey={`${rowKey}-a`} />
        <MarqueeGroup items={items} rowKey={`${rowKey}-b`} ariaHidden />
      </div>
    </div>
  );
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
      data-brand={item.brandKey}
      style={{
        "--i": i,
        "--i-abs": iAbs,
        "--stagger": idx,
        "--card-bg": item.cardBg,
        zIndex,
      } as React.CSSProperties}
      onClick={onClick}
      className="card group shrink-0 cursor-pointer select-none overflow-hidden flex items-center justify-center"
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

const HERO_SERIF_WORDS = ["L\u2019Excellence", "Cinématographique,"];
const HERO_SANS_WORDS = ["Sublimée", "en", "4K", "Ultra", "HD"];

export function HeroMinimal({ onSelectMedia }: HeroMinimalProps) {
  const prefersReducedMotion = useReducedMotion();
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
    <div className="hero-cinema relative w-full min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#faf9f6] dark:bg-[#080808] transition-colors duration-300 pt-28 pb-12">
      {/* 2. Hero Headline & Subtitle matching Flowblox reference structure */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-4 pt-10 sm:pt-14">
        {/* Subtle ambient cinema spotlight behind headline (non-intrusive, GPU only) */}
        <motion.div
          aria-hidden="true"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="hero-title-glow pointer-events-none absolute left-1/2 top-8 sm:top-10 -translate-x-1/2 w-[280px] sm:w-[520px] h-[120px] sm:h-[170px] rounded-full blur-3xl -z-10"
        />

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-zinc-950 dark:text-white leading-[1.15] [perspective:800px]">
          <span className="font-serif italic font-normal block sm:inline">
            {HERO_SERIF_WORDS.map((word, idx) => (
              <React.Fragment key={word}>
                <span className="inline-block overflow-hidden align-bottom px-[0.06em] -mx-[0.06em] pt-[0.08em] -mt-[0.08em] pb-[0.14em] -mb-[0.14em]">
                  <motion.span
                    className="inline-block will-change-transform"
                    initial={
                      prefersReducedMotion
                        ? false
                        : { y: "115%", opacity: 0, rotateX: 28, filter: "blur(6px)" }
                    }
                    animate={{ y: "0%", opacity: 1, rotateX: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.75,
                      delay: 0.02 + idx * 0.09,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                </span>{" "}
              </React.Fragment>
            ))}
          </span>
          <span className="font-sans font-bold block sm:inline">
            {HERO_SANS_WORDS.map((word, idx) => (
              <React.Fragment key={word}>
                <span className="inline-block overflow-hidden align-bottom px-[0.04em] -mx-[0.04em] pt-[0.08em] -mt-[0.08em] pb-[0.14em] -mb-[0.14em]">
                  <motion.span
                    className="inline-block will-change-transform"
                    initial={
                      prefersReducedMotion
                        ? false
                        : { y: "115%", opacity: 0, rotateX: 28, filter: "blur(6px)" }
                    }
                    animate={{ y: "0%", opacity: 1, rotateX: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.75,
                      delay: 0.2 + idx * 0.065,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
                {idx < HERO_SANS_WORDS.length - 1 ? " " : ""}
              </React.Fragment>
            ))}
          </span>
        </h1>

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs sm:text-sm md:text-base text-zinc-600 dark:text-[#a0a0a0] max-w-xl mx-auto font-light leading-relaxed"
        >
          Plus de 28 500 chaînes directes mondiales, 135 000 films et séries en 4K HDR avec la technologie Anti-Freeze™ 9.9 — activés en 3 minutes.
        </motion.p>

        {/* Single Center Pill CTA Button with arrow matching reference */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.62,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="pt-2 flex justify-center"
        >
          <Link
            href="/essai-gratuit"
            className="hero-cta-btn relative overflow-hidden inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-[#f2f2f2] font-semibold text-xs sm:text-sm shadow-2xl transition-all duration-300 hover:-translate-y-0.5 active:scale-95 group"
          >
            <span className="relative z-10">Demander un Essai Gratuit 24H</span>
            <span className="relative z-10 w-7 h-7 rounded-full bg-white text-black dark:bg-black dark:text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-105">
              <Icon icon="ph:arrow-right" width={13} />
            </span>
          </Link>
        </motion.div>
      </div>

      {/* 3. Concave Panoramic 3D Cards Arc (Exact geometry centered on viewport) */}
      <div className="carousel-section perspective-container relative z-10 mt-6 sm:mt-8">
        <div className="carousel-track">
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
      <div className="marquee-section relative z-10 w-full pt-10 sm:pt-12 pb-6 sm:pb-8 overflow-hidden border-t border-black/5 dark:border-white/5">
        <div className="space-y-6 sm:space-y-8">
          <MarqueeRow items={ROW_1_ICONS} duration="34s" rowKey="row1" />
          <MarqueeRow items={ROW_2_ICONS} duration="42s" rowKey="row2" />
          <MarqueeRow items={ROW_3_ICONS} duration="26s" rowKey="row3" />
        </div>
      </div>
    </div>
  );
}
