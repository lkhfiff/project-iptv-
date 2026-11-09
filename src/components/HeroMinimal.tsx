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
  // 7 cinematic cards matching the reference gallery layout
  const galleryItems = [
    {
      id: "gal-1",
      title: "Dune: Part Two",
      category: "Sci-Fi • 4K",
      backdrop: getTMDBImageUrl(CURATED_TMDB_MOVIES[0].backdrop_path, "w1280"),
      poster: getTMDBImageUrl(CURATED_TMDB_MOVIES[0].poster_path, "w500"),
      heightClass: "h-64 sm:h-72 md:h-80",
      movie: CURATED_TMDB_MOVIES[0],
    },
    {
      id: "gal-2",
      title: "Oppenheimer",
      category: "Drama • 4K",
      backdrop: getTMDBImageUrl(CURATED_TMDB_MOVIES[1].backdrop_path, "w1280"),
      poster: getTMDBImageUrl(CURATED_TMDB_MOVIES[1].poster_path, "w500"),
      heightClass: "h-72 sm:h-80 md:h-88",
      movie: CURATED_TMDB_MOVIES[1],
    },
    {
      id: "gal-3",
      title: "Silo",
      category: "Series • 4K",
      backdrop: getTMDBImageUrl(CURATED_TMDB_SERIES[0].backdrop_path, "w1280"),
      poster: getTMDBImageUrl(CURATED_TMDB_SERIES[0].poster_path, "w500"),
      heightClass: "h-60 sm:h-68 md:h-76",
      movie: CURATED_TMDB_SERIES[0],
    },
    {
      id: "gal-4",
      title: "Gladiator II",
      category: "Action • 4K",
      backdrop: getTMDBImageUrl(CURATED_TMDB_MOVIES[2].backdrop_path, "w1280"),
      poster: getTMDBImageUrl(CURATED_TMDB_MOVIES[2].poster_path, "w500"),
      heightClass: "h-68 sm:h-76 md:h-84",
      movie: CURATED_TMDB_MOVIES[2],
    },
    {
      id: "gal-5",
      title: "Shōgun",
      category: "Drama • 4K",
      backdrop: getTMDBImageUrl(CURATED_TMDB_SERIES[1].backdrop_path, "w1280"),
      poster: getTMDBImageUrl(CURATED_TMDB_SERIES[1].poster_path, "w500"),
      heightClass: "h-72 sm:h-80 md:h-88",
      movie: CURATED_TMDB_SERIES[1],
    },
    {
      id: "gal-6",
      title: "Interstellar",
      category: "Sci-Fi • 4K",
      backdrop: getTMDBImageUrl(CURATED_TMDB_MOVIES[3].backdrop_path, "w1280"),
      poster: getTMDBImageUrl(CURATED_TMDB_MOVIES[3].poster_path, "w500"),
      heightClass: "h-64 sm:h-72 md:h-80",
      movie: CURATED_TMDB_MOVIES[3],
    },
    {
      id: "gal-7",
      title: "Severance",
      category: "Series • 4K",
      backdrop: getTMDBImageUrl(CURATED_TMDB_SERIES[2].backdrop_path, "w1280"),
      poster: getTMDBImageUrl(CURATED_TMDB_SERIES[2].poster_path, "w500"),
      heightClass: "h-60 sm:h-68 md:h-76",
      movie: CURATED_TMDB_SERIES[2],
    },
  ];

  const handleCardClick = (item: (typeof galleryItems)[0]) => {
    if (!onSelectMedia) return;
    const m = item.movie;
    const media: MediaItem = {
      id: `hero-gal-${m.id}`,
      title: m.title || m.name || item.title,
      type: m.media_type === "tv" ? "series" : "movie",
      category: m.genres && m.genres[0] ? m.genres[0].name : "Cinema",
      genres: m.genres ? m.genres.map((g) => g.name) : ["Cinema"],
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
    <div className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#080808] pt-28 pb-6">
      {/* 1. Full-screen Cinematic Photographic Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=2560&auto=format&fit=crop"
          alt="Cinematic Atmosphere"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.85] contrast-[1.05]"
        />
        {/* Subtle dark vignette overlay for typography readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/45 to-black/25" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-[#080808]/90" />
      </div>

      {/* 2. Centered Typography (Matching "Atelier Arc" composition in reference) */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-4 pt-12 sm:pt-16">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white font-sans"
        >
          Aether Arc
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs sm:text-sm text-[#f2f2f2]/85 max-w-lg mx-auto font-light leading-relaxed tracking-wide"
        >
          Bespoke cinematic television and uncompressed 4K streaming for modern homes and thoughtful entertainment.
        </motion.p>

        {/* Minimal Pill Buttons (Matching "Portfolio" / "Approach" in reference) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="pt-2 flex items-center justify-center gap-3"
        >
          <a
            href="#featured"
            className="px-6 py-2 rounded-full bg-white text-black hover:bg-[#f2f2f2] text-xs font-semibold shadow-lg transition-all active:scale-95"
          >
            Explore Cinema
          </a>
          <a
            href="#pricing"
            className="px-6 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md text-xs font-medium border border-white/15 transition-all active:scale-95"
          >
            Subscriptions
          </a>
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
                <Image
                  src={item.poster || item.backdrop}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 150px, (max-width: 1024px) 200px, 240px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.92] group-hover:brightness-100"
                />

                {/* Card gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

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

        {/* Bottom Utility Bar (Exact match with reference "Visiter le site" & bottom lens icon) */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-2 flex items-center justify-between">
          <a
            href="#featured"
            className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#151515]/70 hover:bg-[#202020]/90 backdrop-blur-xl border border-white/15 text-white text-xs font-medium transition-all shadow-xl active:scale-95 group"
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
            <a
              href="#pricing"
              className="w-10 h-10 rounded-2xl bg-[#151515]/70 hover:bg-[#202020]/90 backdrop-blur-xl border border-white/15 flex items-center justify-center text-white transition-all shadow-xl active:scale-95 group"
              aria-label="Search and Plans"
            >
              <Icon
                icon="ph:sparkle"
                width={17}
                className="group-hover:rotate-12 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
