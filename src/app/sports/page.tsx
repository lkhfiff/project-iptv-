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
    <div className="pt-28 pb-20 space-y-12 max-w-7xl mx-auto px-6 sm:px-10 text-white">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
          Live Scores &amp; Match Schedules
        </h1>
        <p className="text-[#a0a0a0] text-xs sm:text-sm max-w-lg mx-auto font-light leading-relaxed">
          Track official match fixtures, live score telemetry, and broadcast channels across the Champions League, Premier League, La Liga, Formula 1, and UFC.
        </p>

        <div className="pt-2 flex justify-center gap-3">
          <WhatsAppButton
            variant="pill"
            size="md"
            label="Obtenir le Pass Sports 4K"
            customMessage="Bonjour ! Je souhaite souscrire pour suivre les matchs de football et sports en direct."
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
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
              activeTab === tab.id
                ? "bg-white text-black font-semibold shadow-md"
                : "bg-white/5 text-[#a0a0a0] hover:text-white"
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
            className="p-6 rounded-3xl bg-[#151515] border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between space-y-5 shadow-xl"
          >
            {/* Top Match Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <Icon icon="ph:shield-chevron" width={16} className="text-white" />
                <span className="text-xs font-medium text-[#f2f2f2]">{match.competition}</span>
              </div>

              {match.status === "LIVE" ? (
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-black text-[10px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                  LIVE {match.minute}
                </span>
              ) : (
                <span className="text-[11px] font-mono text-[#a0a0a0] px-2 py-0.5 rounded bg-white/5 border border-white/10">
                  {match.kickoffTime}
                </span>
              )}
            </div>

            {/* Score / Teams Row */}
            <div className="flex items-center justify-between gap-4 py-2">
              <div className="flex-1 text-center space-y-1">
                <h4 className="text-base sm:text-lg font-light text-white">
                  {match.homeTeam.name}
                </h4>
              </div>

              <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 font-mono text-xl sm:text-2xl font-light text-white shrink-0">
                {match.status === "LIVE" ? (
                  <>
                    <span className="text-white font-semibold">{match.homeTeam.score}</span>
                    <span className="text-[#a0a0a0]">:</span>
                    <span className="text-white font-semibold">{match.awayTeam.score}</span>
                  </>
                ) : (
                  <span className="text-xs font-medium text-[#a0a0a0] uppercase tracking-widest">
                    VS
                  </span>
                )}
              </div>

              <div className="flex-1 text-center space-y-1">
                <h4 className="text-base sm:text-lg font-light text-white">
                  {match.awayTeam.name}
                </h4>
              </div>
            </div>

            {/* Bottom Venue & Broadcast Info */}
            <div className="pt-3 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="text-[#a0a0a0]">
                <span className="text-[#a0a0a0]/60 block text-[10px]">Broadcast Feed:</span>
                <span className="text-white font-medium">{match.channelBroadcast}</span>
              </div>

              <WhatsAppButton
                variant="outline"
                size="sm"
                customMessage={`Bonjour ! Je souhaite regarder le match "${match.homeTeam.name} vs ${match.awayTeam.name}" en direct en 4K.`}
                label="Suivre le Match en Direct"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
