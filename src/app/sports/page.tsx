"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { CURATED_LIVE_MATCHES, LiveMatch } from "@/data/sports";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function SportsPage() {
  const [matches, setMatches] = useState<LiveMatch[]>(CURATED_LIVE_MATCHES);
  const [activeTab, setActiveTab] = useState<"ALL" | "LIVE" | "UPCOMING">("ALL");

  useEffect(() => {
    // Attempt fetch from server-side sports route
    fetch("/api/sports")
      .then((res) => res.json())
      .then((data) => {
        if (data.matches && data.matches.length > 0) {
          setMatches(data.matches);
        }
      })
      .catch(() => {});
  }, []);

  const filteredMatches = matches.filter((m) => {
    if (activeTab === "ALL") return true;
    return m.status === activeTab;
  });

  return (
    <div className="pt-28 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-xs font-bold uppercase tracking-widest">
          <Icon icon="ph:trophy-fill" width={14} />
          <span>Real-Time Sports Center</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Live Scores & Match Schedules
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
          Track official match fixtures, live score telemetry, and broadcast channels across the Champions League, Premier League, La Liga, Formula 1, and UFC.
        </p>

        <div className="pt-2 flex justify-center gap-3">
          <WhatsAppButton
            variant="pill"
            size="md"
            label="Get Sports Pass on WhatsApp"
            customMessage="Hello! I want to subscribe to watch upcoming live sports and football derbies."
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2">
        {(
          [
            { id: "ALL", label: "All Events" },
            { id: "LIVE", label: "In Progress (Live)" },
            { id: "UPCOMING", label: "Upcoming Fixtures" },
          ] as const
        ).map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeTab === tab.id
                ? "bg-white text-black font-extrabold shadow-md"
                : "bg-white/5 text-zinc-400 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Matches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredMatches.map((match) => (
          <div
            key={match.id}
            className="p-6 rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-orange-500/30 transition-all flex flex-col justify-between space-y-5 shadow-xl"
          >
            {/* Top Match Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <Icon icon="ph:shield-chevron-fill" width={16} className="text-orange-400" />
                <span className="text-xs font-bold text-zinc-300">{match.competition}</span>
              </div>

              {match.status === "LIVE" ? (
                <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-wider animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  LIVE {match.minute}
                </span>
              ) : (
                <span className="text-[11px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-white/5">
                  {match.kickoffTime}
                </span>
              )}
            </div>

            {/* Score / Teams Row */}
            <div className="flex items-center justify-between gap-4 py-2">
              <div className="flex-1 text-center space-y-2">
                <h4 className="text-base sm:text-lg font-bold text-white">
                  {match.homeTeam.name}
                </h4>
              </div>

              <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 font-mono text-xl sm:text-2xl font-black text-white shrink-0">
                {match.status === "LIVE" ? (
                  <>
                    <span className="text-orange-400">{match.homeTeam.score}</span>
                    <span className="text-zinc-600">-</span>
                    <span className="text-orange-400">{match.awayTeam.score}</span>
                  </>
                ) : (
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                    VS
                  </span>
                )}
              </div>

              <div className="flex-1 text-center space-y-2">
                <h4 className="text-base sm:text-lg font-bold text-white">
                  {match.awayTeam.name}
                </h4>
              </div>
            </div>

            {/* Bottom Venue & Broadcast Info */}
            <div className="pt-3 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="text-zinc-400">
                <span className="text-zinc-500 block text-[10px]">Broadcast Feed:</span>
                <span className="text-emerald-400 font-medium">{match.channelBroadcast}</span>
              </div>

              <WhatsAppButton
                variant="outline"
                size="sm"
                customMessage={`Hello! I want to watch the match "${match.homeTeam.name} vs ${match.awayTeam.name}" live in 4K on my TV.`}
                label="Stream Match on WhatsApp"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
