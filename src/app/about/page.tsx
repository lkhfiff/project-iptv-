"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { SITE_CONFIG } from "@/data/config";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-6 sm:px-10 text-white">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-white text-xs font-mono tracking-wider">
          <Icon icon="ph:sparkle" width={14} />
          <span>Infrastructure CDN Haute Performance</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
          À Propos de {SITE_CONFIG.brandName}
        </h1>
        <p className="text-[#a0a0a0] text-xs sm:text-sm max-w-lg mx-auto font-light leading-relaxed">
          Découvrez notre réseau de serveurs Anti-Freeze™ 9.9 déployé sur 18 centres de données à travers l&apos;Europe et l&apos;Amérique du Nord pour garantir un streaming 4K sans coupure.
        </p>
      </div>

      {/* Visual Infrastructure Story */}
      <div className="relative rounded-3xl overflow-hidden bg-[#151515] border border-white/10 p-8 sm:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#a0a0a0]">
              Architecture CDN Décentralisée
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight leading-tight">
              18 Centres de Données sur 3 Continents.
            </h2>
            <p className="text-[#f2f2f2] text-sm sm:text-base font-light leading-relaxed">
              Les fournisseurs IPTV conventionnels fonctionnent sur des serveurs virtuels mutualisés qui s&apos;effondrent lors des grands événements sportifs.
            </p>
            <p className="text-[#a0a0a0] text-xs sm:text-sm font-light leading-relaxed">
              {SITE_CONFIG.brandName} s&apos;appuie sur un réseau de distribution CDN privé avec des accords d&apos;interconnexion directe sur les principaux nœuds d&apos;échange Internet européens et américains (DE-CIX Francfort, LINX Londres, AMS-IX Amsterdam, Equinix Ashburn).
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Icon icon="ph:check" width={12} />
                </span>
                <div>
                  <h4 className="text-sm font-medium text-white">Lignes Dédiées 10Gbps Sans Congestion</h4>
                  <p className="text-xs text-[#a0a0a0] font-light">Une bande passante surprovisionnée pour éviter tout goulot d&apos;étranglement en soirée.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Icon icon="ph:check" width={12} />
                </span>
                <div>
                  <h4 className="text-sm font-medium text-white">Encodage Matériel H.265 / HEVC 10-Bit</h4>
                  <p className="text-xs text-[#a0a0a0] font-light">Une clarté d&apos;image 4K HDR pure avec 50% de consommation de données en moins.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Icon icon="ph:check" width={12} />
                </span>
                <div>
                  <h4 className="text-sm font-medium text-white">Flux Sécurisés SSL/TLS Chiffrés</h4>
                  <p className="text-xs text-[#a0a0a0] font-light">Le trafic est indiscernable d&apos;une navigation web classique, contournant le bridage FAI.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Core CDN Cluster Box */}
          <div className="p-6 rounded-3xl bg-[#080808] border border-white/10 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Icon icon="ph:hard-drives" width={18} className="text-white" />
                <span className="text-xs font-mono font-medium text-white uppercase tracking-wider">
                  Nœuds CDN Principaux
                </span>
              </div>
              <span className="text-white font-mono text-xs">
                100% OPÉRATIONNEL
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {[
                { city: "Frankfurt, Germany (DE-CIX)", latency: "4ms", load: "28%" },
                { city: "London, UK (LINX 1/2)", latency: "6ms", load: "34%" },
                { city: "Amsterdam, Netherlands (AMS-IX)", latency: "5ms", load: "31%" },
                { city: "Paris, France (France-IX)", latency: "8ms", load: "22%" },
                { city: "New York, USA (Equinix NY4)", latency: "12ms", load: "39%" },
                { city: "Dallas, USA (Infomart)", latency: "16ms", load: "25%" },
                { city: "Dubai, UAE (SmartHub)", latency: "21ms", load: "30%" },
              ].map((node, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-zinc-200">{node.city}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-zinc-400">{node.latency}</span>
                    <span className="text-amber-400 font-bold">{node.load}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
