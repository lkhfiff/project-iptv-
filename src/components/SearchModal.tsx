"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { TRENDING_MOVIES, POPULAR_SERIES, LIVE_SPORTS_EVENTS, INTERNATIONAL_TV_PACKAGES, MediaItem } from "@/data/media";
import { generateWhatsAppContactUrl } from "@/data/config";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMedia?: (item: MediaItem) => void;
}

export function SearchModal({ isOpen, onClose, onSelectMedia }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<"all" | "movie" | "series" | "sport" | "channel">("all");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  const allItems: MediaItem[] = useMemo(() => {
    return [...TRENDING_MOVIES, ...POPULAR_SERIES, ...LIVE_SPORTS_EVENTS];
  }, []);

  const filteredResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allItems.filter((item) => {
      const matchesFilter = selectedFilter === "all" || item.type === selectedFilter;
      if (!q) return matchesFilter;
      return (
        matchesFilter &&
        (item.title.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.genres.some((g) => g.toLowerCase().includes(q)))
      );
    });
  }, [allItems, query, selectedFilter]);

  const filteredChannels = useMemo(() => {
    if (selectedFilter !== "all" && selectedFilter !== "channel") return [];
    const q = query.trim().toLowerCase();
    if (!q) return INTERNATIONAL_TV_PACKAGES.slice(0, 4);
    return INTERNATIONAL_TV_PACKAGES.filter((pkg) =>
      pkg.country.toLowerCase().includes(q) ||
      pkg.notableChannels.some((ch) => ch.toLowerCase().includes(q))
    );
  }, [query, selectedFilter]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl rounded-3xl bg-zinc-950 border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[80vh] z-10">
        {/* Search Header */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10 bg-white/[0.02]">
          <Icon icon="ph:magnifying-glass-bold" width={20} className="text-white/80 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 28,000+ channels, 4K movies, TV series, or sports..."
            className="w-full bg-transparent text-white placeholder-zinc-500 text-sm sm:text-base focus:outline-none"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-zinc-400 hover:text-white p-1 cursor-pointer"
            >
              <Icon icon="ph:x-bold" width={16} />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/10 text-zinc-300 hover:text-white cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 px-6 py-3 border-b border-white/5 overflow-x-auto no-scrollbar text-xs">
          {(
            [
              { id: "all", label: "All Catalog" },
              { id: "movie", label: "4K Movies" },
              { id: "series", label: "TV Series" },
              { id: "sport", label: "Live Sports" },
              { id: "channel", label: "TV Channels" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-3 py-1.5 rounded-full transition-all shrink-0 cursor-pointer ${
                selectedFilter === tab.id
                  ? "bg-white text-black font-bold shadow-md"
                  : "bg-white/5 text-zinc-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Results Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {filteredResults.length === 0 && filteredChannels.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-zinc-500">
                <Icon icon="ph:magnifying-glass" width={24} />
              </div>
              <p className="text-zinc-400 font-medium">No direct match found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                Demandez n&apos;importe quel contenu directement à notre conciergerie VIP !
              </p>
            </div>
          ) : (
            <>
              {filteredResults.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold tracking-wider uppercase text-zinc-400">
                    Cinema & Broadcast ({filteredResults.length})
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {filteredResults.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          if (onSelectMedia) {
                            onSelectMedia(item);
                            onClose();
                          }
                        }}
                        className="group flex gap-3 p-2.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/30 transition-all cursor-pointer"
                      >
                        <div className="relative w-16 h-20 rounded-xl overflow-hidden shrink-0 bg-zinc-900">
                          <Image
                            src={item.posterUrl}
                            alt={item.title}
                            fill
                            sizes="64px"
                            className="object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                          <div>
                            <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 font-medium mb-0.5">
                              <span className="px-1.5 py-0.5 rounded bg-white/10 text-white font-bold">
                                {item.quality}
                              </span>
                              <span>{item.year}</span>
                              <span>•</span>
                              <span className="text-white flex items-center gap-1 font-mono">
                                <Icon icon="ph:star-fill" width={10} />
                                {item.rating}
                              </span>
                            </div>
                            <h5 className="text-sm font-semibold text-white truncate group-hover:text-white transition-colors">
                              {item.title}
                            </h5>
                          </div>
                          <p className="text-xs text-zinc-400 truncate">{item.category}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
