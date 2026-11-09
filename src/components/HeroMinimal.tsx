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

// =========================================================================
// OFFICIAL STREAMING NETWORK LOGOS (Netflix, beIN SPORTS, Apple TV+, Canal+, Disney+, Prime Video, HBO Max)
// =========================================================================

function NetflixLogoBadge() {
  return (
    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/90 border border-red-600/50 shadow-xl backdrop-blur-md">
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#E50914] shrink-0" aria-label="Netflix">
        <path d="M5.398 0v24c1.17-.478 2.34-.956 3.51-1.434V0H5.398zm9.694 0v9.553l-4.108-7.97H7.472v18.736l3.51-1.434V9.323l4.108 7.97h3.512V0h-3.51z" />
      </svg>
      <span className="text-[10px] font-black tracking-wider text-[#E50914] uppercase font-sans">
        NETFLIX
      </span>
    </div>
  );
}

function BeinSportsLogoBadge() {
  return (
    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/90 border border-purple-500/50 shadow-xl backdrop-blur-md">
      <span className="text-[11px] font-black tracking-tight text-white font-sans">
        beIN
      </span>
      <span className="text-[8px] font-extrabold tracking-wider px-1 py-0.5 rounded bg-[#6A1B9A] text-white uppercase">
        SPORTS
      </span>
    </div>
  );
}

function AppleTvLogoBadge() {
  return (
    <div className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/90 border border-white/30 shadow-xl backdrop-blur-md">
      <svg viewBox="0 0 170 170" className="w-3.5 h-3.5 fill-white shrink-0" aria-label="Apple">
        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.69-7.85-11.97-14.42-6.1-9.35-10.8-19.78-14.11-31.31-3.3-11.52-4.96-22.37-4.96-32.54 0-14.65 3.59-26.68 10.77-36.08 7.18-9.4 16.29-14.18 27.33-14.34 4.58 0 9.87 1.25 15.87 3.75 6 2.5 10.12 3.75 12.35 3.75 1.95 0 6.27-1.31 12.95-3.92 6.68-2.61 12.28-3.79 16.81-3.53 13.8.76 24.38 5.76 31.74 15-12.06 7.28-17.98 17.28-17.76 30 0 10.22 4.02 18.9 12.06 26.04 4.13 3.69 8.8 6.3 14.02 7.82-2.83 8.26-6.42 16.74-10.77 25.44zm-28.7-118.82c.11 2.94-.76 6.08-2.61 9.4-1.85 3.32-4.46 6.2-7.82 8.65-3.8 2.72-7.72 4.35-11.74 4.9-0.33-1.63-.44-3.26-.33-4.9.33-3.26 1.47-6.52 3.42-9.78 1.96-3.26 4.62-5.98 7.98-8.15 3.59-2.28 7.28-3.69 11.1-4.24z" />
      </svg>
      <span className="text-[11px] font-bold text-white tracking-tight font-sans">tv+</span>
    </div>
  );
}

function CanalPlusLogoBadge() {
  return (
    <div className="flex items-center px-2 py-0.5 rounded bg-black border border-white/40 shadow-xl backdrop-blur-md">
      <span className="text-[10px] font-black tracking-wider text-white font-sans uppercase">
        CANAL<span className="text-white">+</span>
      </span>
    </div>
  );
}

function DisneyPlusLogoBadge() {
  return (
    <div className="flex items-center gap-0.5 px-2.5 py-1 rounded-md bg-black/90 border border-blue-500/50 shadow-xl backdrop-blur-md">
      <span className="text-[11px] font-black italic tracking-wide text-[#3B82F6] font-serif">
        Disney<span className="text-white not-italic font-sans font-bold">+</span>
      </span>
    </div>
  );
}

function PrimeVideoLogoBadge() {
  return (
    <div className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/90 border border-[#00A8E1]/50 shadow-xl backdrop-blur-md">
      <span className="text-[10px] font-bold tracking-tight text-white font-sans">prime</span>
      <span className="text-[10px] font-light text-[#00A8E1] font-sans">video</span>
      <svg viewBox="0 0 40 12" className="w-3.5 h-1.5 fill-[#00A8E1] shrink-0">
        <path d="M0 6 Q20 12 36 2 L38 5 L40 0 L34 1 L36 3 Q19 10 0 6 Z" />
      </svg>
    </div>
  );
}

function HboMaxLogoBadge() {
  return (
    <div className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/90 border border-indigo-500/50 shadow-xl backdrop-blur-md">
      <span className="text-[11px] font-black text-white font-sans tracking-tight">HBO</span>
      <span className="text-[8px] font-bold px-1 rounded bg-indigo-600 text-white tracking-wider uppercase">
        MAX
      </span>
    </div>
  );
}

// =========================================================================
// LARGE PROMINENT CENTER BRAND EMBLEMS (TRANSFORMS CARDS INTO STREAMING BRAND HUBS)
// =========================================================================

function NetflixCenterBrand() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="w-12 h-12 rounded-2xl bg-black/85 border border-red-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(229,9,20,0.7)] backdrop-blur-md mb-2 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(229,9,20,0.9)] transition-all duration-300">
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#E50914] drop-shadow-md">
          <path d="M5.398 0v24c1.17-.478 2.34-.956 3.51-1.434V0H5.398zm9.694 0v9.553l-4.108-7.97H7.472v18.736l3.51-1.434V9.323l4.108 7.97h3.512V0h-3.51z" />
        </svg>
      </div>
      <span className="text-xs sm:text-sm font-black tracking-[0.2em] text-[#E50914] drop-shadow-[0_2px_12px_rgba(229,9,20,0.9)] font-sans uppercase">
        NETFLIX
      </span>
      <span className="text-[9px] font-mono tracking-widest text-zinc-300 uppercase mt-0.5 opacity-90">
        CINÉMA &amp; SÉRIES
      </span>
    </div>
  );
}

function BeinSportsCenterBrand() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="px-3 py-2 rounded-2xl bg-black/85 border border-purple-500/50 flex items-center gap-1.5 shadow-[0_0_30px_rgba(106,27,154,0.8)] backdrop-blur-md mb-1.5 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(106,27,154,1)] transition-all duration-300">
        <span className="text-base font-black tracking-tight text-white font-sans">
          beIN
        </span>
        <span className="text-[10px] font-black tracking-wider px-1.5 py-0.5 rounded bg-[#6A1B9A] text-white uppercase shadow-md">
          SPORTS
        </span>
      </div>
      <span className="text-[9px] font-mono tracking-widest text-purple-300 uppercase opacity-95">
        DIRECT 4K 60FPS
      </span>
    </div>
  );
}

function AppleTvCenterBrand() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="w-12 h-12 rounded-2xl bg-black/85 border border-white/40 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.4)] backdrop-blur-md mb-2 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] transition-all duration-300">
        <svg viewBox="0 0 170 170" className="w-6 h-6 fill-white drop-shadow-md">
          <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.69-7.85-11.97-14.42-6.1-9.35-10.8-19.78-14.11-31.31-3.3-11.52-4.96-22.37-4.96-32.54 0-14.65 3.59-26.68 10.77-36.08 7.18-9.4 16.29-14.18 27.33-14.34 4.58 0 9.87 1.25 15.87 3.75 6 2.5 10.12 3.75 12.35 3.75 1.95 0 6.27-1.31 12.95-3.92 6.68-2.61 12.28-3.79 16.81-3.53 13.8.76 24.38 5.76 31.74 15-12.06 7.28-17.98 17.28-17.76 30 0 10.22 4.02 18.9 12.06 26.04 4.13 3.69 8.8 6.3 14.02 7.82-2.83 8.26-6.42 16.74-10.77 25.44zm-28.7-118.82c.11 2.94-.76 6.08-2.61 9.4-1.85 3.32-4.46 6.2-7.82 8.65-3.8 2.72-7.72 4.35-11.74 4.9-0.33-1.63-.44-3.26-.33-4.9.33-3.26 1.47-6.52 3.42-9.78 1.96-3.26 4.62-5.98 7.98-8.15 3.59-2.28 7.28-3.69 11.1-4.24z" />
        </svg>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-xs font-bold text-white tracking-tight drop-shadow-md">
          Apple TV
        </span>
        <span className="text-xs font-bold text-white/80">+</span>
      </div>
      <span className="text-[9px] font-mono tracking-widest text-zinc-300 uppercase mt-0.5 opacity-90">
        ORIGINALS
      </span>
    </div>
  );
}

function CanalPlusCenterBrand() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="px-3.5 py-1.5 rounded-xl bg-black border border-white/50 shadow-[0_0_30px_rgba(255,255,255,0.4)] backdrop-blur-md mb-2 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] transition-all duration-300">
        <span className="text-sm sm:text-base font-black tracking-widest text-white font-sans uppercase">
          CANAL<span className="text-white">+</span>
        </span>
      </div>
      <span className="text-[9px] font-mono tracking-widest text-zinc-300 uppercase opacity-90">
        CINÉMA RÉCENT
      </span>
    </div>
  );
}

function DisneyPlusCenterBrand() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="px-3.5 py-2 rounded-2xl bg-black/85 border border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.7)] backdrop-blur-md mb-1.5 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.9)] transition-all duration-300">
        <span className="text-base sm:text-lg font-black italic tracking-wide text-[#3B82F6] font-serif drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]">
          Disney<span className="text-white not-italic font-sans font-bold">+</span>
        </span>
      </div>
      <span className="text-[9px] font-mono tracking-widest text-blue-200 uppercase opacity-95">
        UNIVERS COMPLET
      </span>
    </div>
  );
}

function PrimeVideoCenterBrand() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="px-3.5 py-2 rounded-2xl bg-black/85 border border-[#00A8E1]/50 shadow-[0_0_30px_rgba(0,168,225,0.7)] backdrop-blur-md mb-1.5 flex flex-col items-center group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(0,168,225,0.9)] transition-all duration-300">
        <div className="flex items-center gap-1">
          <span className="text-xs font-bold tracking-tight text-white font-sans">prime</span>
          <span className="text-xs font-light text-[#00A8E1] font-sans">video</span>
        </div>
        <svg viewBox="0 0 40 12" className="w-5 h-2 fill-[#00A8E1] mt-0.5">
          <path d="M0 6 Q20 12 36 2 L38 5 L40 0 L34 1 L36 3 Q19 10 0 6 Z" />
        </svg>
      </div>
      <span className="text-[9px] font-mono tracking-widest text-cyan-300 uppercase opacity-95">
        BLOCKBUSTERS 4K
      </span>
    </div>
  );
}

function HboMaxCenterBrand() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="px-3.5 py-1.5 rounded-2xl bg-black/85 border border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.7)] backdrop-blur-md mb-1.5 flex items-center gap-1.5 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(99,102,241,0.9)] transition-all duration-300">
        <span className="text-sm sm:text-base font-black text-white font-sans tracking-tight">HBO</span>
        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-indigo-600 text-white tracking-widest uppercase">
          MAX
        </span>
      </div>
      <span className="text-[9px] font-mono tracking-widest text-indigo-300 uppercase opacity-95">
        EXCLUSIVITÉS 4K
      </span>
    </div>
  );
}

function renderCenterBrand(network: string) {
  switch (network) {
    case "NETFLIX":
      return <NetflixCenterBrand />;
    case "beIN SPORTS":
      return <BeinSportsCenterBrand />;
    case "APPLE TV+":
      return <AppleTvCenterBrand />;
    case "CANAL+":
      return <CanalPlusCenterBrand />;
    case "DISNEY+":
      return <DisneyPlusCenterBrand />;
    case "PRIME VIDEO":
      return <PrimeVideoCenterBrand />;
    case "HBO MAX":
      return <HboMaxCenterBrand />;
    default:
      return null;
  }
}

function renderNetworkBadge(network: string) {
  switch (network) {
    case "NETFLIX":
      return <NetflixLogoBadge />;
    case "beIN SPORTS":
      return <BeinSportsLogoBadge />;
    case "APPLE TV+":
      return <AppleTvLogoBadge />;
    case "CANAL+":
      return <CanalPlusLogoBadge />;
    case "DISNEY+":
      return <DisneyPlusLogoBadge />;
    case "PRIME VIDEO":
      return <PrimeVideoLogoBadge />;
    case "HBO MAX":
      return <HboMaxLogoBadge />;
    default:
      return (
        <span className="px-2 py-0.5 rounded bg-black/85 text-[9px] font-bold uppercase text-white border border-white/20">
          {network}
        </span>
      );
  }
}

interface GalleryCardItem {
  id: string;
  title: string;
  category: string;
  network: string;
  backdrop: string;
  poster: string;
  fallback: string;
  heightClass: string;
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
  const [currentSrc, setCurrentSrc] = React.useState(item.poster);
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
      onClick={onClick}
      className={`group relative shrink-0 cursor-pointer select-none rounded-2xl md:rounded-3xl overflow-hidden border border-white/20 hover:border-white/60 transition-all duration-500 hover:!scale-105 hover:!translate-y-[-14px] hover:!rotate-0 hover:z-50 shadow-2xl shadow-black/80 w-36 sm:w-48 md:w-56 ${item.heightClass}`}
    >
      {/* Background Image (Guaranteed 200, unoptimized, with fallback) */}
      <Image
        src={currentSrc}
        alt={item.title}
        fill
        unoptimized
        onError={() => {
          if (currentSrc !== item.fallback) {
            setCurrentSrc(item.fallback);
          }
        }}
        sizes="(max-width: 640px) 150px, (max-width: 1024px) 200px, 240px"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.70] contrast-[1.05] group-hover:brightness-[0.82]"
      />

      {/* Cinematic dark vignette & gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 opacity-90 group-hover:opacity-85 transition-opacity" />

      {/* 1. Top Corner Brand Badge */}
      <div className="absolute top-3 left-3 z-20">
        {renderNetworkBadge(item.network)}
      </div>

      <div className="absolute top-3 right-3 z-20">
        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/70 text-white border border-white/15 backdrop-blur-md">
          4K
        </span>
      </div>

      {/* 2. PROMINENT CENTER BRAND EMBLEM (Transforms Cards into Streaming Brand Cards) */}
      <div className="absolute inset-0 flex items-center justify-center p-3 z-10 pointer-events-none">
        {renderCenterBrand(item.network)}
      </div>

      {/* 3. Bottom Title & Content Details */}
      <div className="absolute bottom-3 left-3.5 right-3.5 z-20 space-y-0.5">
        <span className="text-[10px] uppercase font-mono tracking-wider text-[#a0a0a0] block truncate">
          {item.category}
        </span>
        <h4 className="text-xs sm:text-sm font-semibold text-white truncate drop-shadow-md">
          {item.title}
        </h4>
      </div>
    </motion.div>
  );
}

export function HeroMinimal({ onSelectMedia }: HeroMinimalProps) {
  // 7 cinematic cards featuring authentic verified images and official entertainment logos
  const galleryItems: GalleryCardItem[] = [
    {
      id: "gal-1",
      title: "Dune: Part Two",
      category: "NETFLIX • 4K UHD",
      network: "NETFLIX",
      backdrop: "https://image.tmdb.org/t/p/w1280/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
      poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
      fallback: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
      heightClass: "h-64 sm:h-72 md:h-80",
      movie: CURATED_TMDB_MOVIES[0],
    },
    {
      id: "gal-2",
      title: "UEFA Champions League",
      category: "beIN SPORTS • 4K 60FPS",
      network: "beIN SPORTS",
      backdrop: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1280&auto=format&fit=crop",
      poster: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600&auto=format&fit=crop",
      fallback: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop",
      heightClass: "h-72 sm:h-80 md:h-88",
      movie: CURATED_TMDB_MOVIES[1],
    },
    {
      id: "gal-3",
      title: "Silo",
      category: "APPLE TV+ • 4K ORIGINAL",
      network: "APPLE TV+",
      backdrop: "https://image.tmdb.org/t/p/w1280/r2QXomqKjkKHVtYGGtkf2l2Y7go.jpg",
      poster: "https://image.tmdb.org/t/p/w500/r2QXomqKjkKHVtYGGtkf2l2Y7go.jpg",
      fallback: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
      heightClass: "h-60 sm:h-68 md:h-76",
      movie: CURATED_TMDB_SERIES[0],
    },
    {
      id: "gal-4",
      title: "Gladiator II",
      category: "CANAL+ • EXCLUSIVITÉ",
      network: "CANAL+",
      backdrop: "https://image.tmdb.org/t/p/w1280/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
      poster: "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
      fallback: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop",
      heightClass: "h-68 sm:h-76 md:h-84",
      movie: CURATED_TMDB_MOVIES[2],
    },
    {
      id: "gal-5",
      title: "Shōgun",
      category: "DISNEY+ • 4K HDR",
      network: "DISNEY+",
      backdrop: "https://image.tmdb.org/t/p/w1280/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg",
      poster: "https://image.tmdb.org/t/p/w500/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg",
      fallback: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
      heightClass: "h-72 sm:h-80 md:h-88",
      movie: CURATED_TMDB_SERIES[1],
    },
    {
      id: "gal-6",
      title: "Interstellar",
      category: "PRIME VIDEO • IMAX 4K",
      network: "PRIME VIDEO",
      backdrop: "https://image.tmdb.org/t/p/w1280/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
      poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      fallback: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
      heightClass: "h-64 sm:h-72 md:h-80",
      movie: CURATED_TMDB_MOVIES[3],
    },
    {
      id: "gal-7",
      title: "Severance",
      category: "HBO MAX • 4K EXCLUSIF",
      network: "HBO MAX",
      backdrop: "https://image.tmdb.org/t/p/w1280/lFf6LLrQjYldcZItzOkGmMMigP7.jpg",
      poster: "https://image.tmdb.org/t/p/w500/lFf6LLrQjYldcZItzOkGmMMigP7.jpg",
      fallback: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
      heightClass: "h-60 sm:h-68 md:h-76",
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
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-[11px] font-mono tracking-wider"
        >
          <Icon icon="ph:television" width={13} />
          <span>Plateforme Cinématographique • 4K UHD &amp; Dolby Atmos</span>
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
      </div>

      {/* 3. Floating Overlapping Image Gallery (Curved 3D Arc matching reference) */}
      <div className="relative z-10 w-full pt-8 sm:pt-12 pb-4 perspective-container overflow-hidden">
        <div className="w-full flex items-end justify-center gap-2.5 sm:gap-4 md:gap-5 px-4 sm:px-8 overflow-x-auto no-scrollbar scroll-smooth py-6 [transform-style:preserve-3d]">
          {galleryItems.map((item, idx) => (
            <GalleryCard
              key={item.id}
              item={item}
              idx={idx}
              onClick={() => handleCardClick(item)}
            />
          ))}
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
