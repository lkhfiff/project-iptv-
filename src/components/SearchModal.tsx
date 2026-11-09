"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Search, X, Film, Tv, Trophy, Radio, Play, ExternalLink, Sparkles } from "lucide-react";
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

  // Handle ESC key
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

  // Consolidate searchable pool
  const allItems: MediaItem[] = useMemo(() => {
    return [...TRENDING_MOVIES, ...POPULAR_SERIES, ...LIVE_SPORTS_EVENTS];
  }, []);

  // Filter items
  const filteredResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allItems.filter((item) => {
      const matchesFilter = selectedFilter === "all" || item.type === selectedFilter;
      if (!q) return matchesFilter;
      const matchesQuery =
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.genres.some((g) => g.toLowerCase().includes(q)) ||
        item.synopsis.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [allItems, query, selectedFilter]);

  // Channel results from international TV packages
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
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl rounded-3xl bg-zinc-950/95 border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[80vh] z-10">
        {/* Search Header */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10 bg-white/[0.02]">
          <Search className="w-5 h-5 text-orange-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 28,000+ channels, 4K movies, series, or live sports..."
            className="w-full bg-transparent text-white placeholder-zinc-500 text-base sm:text-lg focus:outline-none"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-zinc-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/10 text-zinc-300 hover:text-white hover:bg-white/15"
          >
            ESC
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 px-6 py-3 border-b border-white/5 overflow-x-auto no-scrollbar text-xs">
          <span className="text-zinc-500 font-medium mr-1">Filter:</span>
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
              className={`px-3 py-1.5 rounded-full transition-all shrink-0 ${
                selectedFilter === tab.id
                  ? "bg-orange-500 text-black font-bold shadow-md shadow-orange-500/20"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
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
                <Search className="w-6 h-6" />
              </div>
              <p className="text-zinc-400 font-medium">No direct match found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                Our catalog contains 135,000+ titles. Request this stream instantly via our WhatsApp concierge!
              </p>
              <a
                href={generateWhatsAppContactUrl(`Searching for title: ${query}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 pt-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Request Title on WhatsApp &rarr;</span>
              </a>
            </div>
          ) : (
            <>
              {/* Media Items */}
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
                        className="group flex gap-3 p-2.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-orange-500/30 transition-all cursor-pointer"
                      >
                        <div className="relative w-16 h-20 rounded-xl overflow-hidden shrink-0 bg-zinc-900">
                          <Image
                            src={item.posterUrl}
                            alt={item.title}
                            fill
                            sizes="64px"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
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
                              <span className="text-amber-400">★ {item.rating}</span>
                            </div>
                            <h5 className="text-sm font-semibold text-white truncate group-hover:text-orange-400 transition-colors">
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

              {/* Channels & Packages */}
              {filteredChannels.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold tracking-wider uppercase text-zinc-400">
                    International Channel Packages
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {filteredChannels.map((pkg) => (
                      <div
                        key={pkg.code}
                        className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{pkg.flag}</span>
                          <div>
                            <h5 className="text-sm font-semibold text-white">{pkg.country}</h5>
                            <p className="text-xs text-zinc-400">{pkg.channelsCount}</p>
                          </div>
                        </div>
                        <a
                          href={generateWhatsAppContactUrl(`Inquiring about ${pkg.country} TV channels`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        >
                          View List &rarr;
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 border-t border-white/10 bg-black/40 flex items-center justify-between text-xs text-zinc-500">
          <span>Press ESC or click outside to dismiss</span>
          <span>AETHER+ Real-Time Content Index</span>
        </div>
      </div>
    </div>
  );
}

