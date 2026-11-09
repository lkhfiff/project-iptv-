"use client";

import React from "react";
import Image from "next/image";
import { Shield, Sparkles, Server, Cpu, Globe, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { SITE_CONFIG, generateWhatsAppContactUrl } from "@/data/config";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          The Pursuit of Streaming Perfection
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          About {SITE_CONFIG.brandName}
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
          We were tired of low-bitrate feeds, endless buffering loops during big football derbies, and fake &quot;4K&quot; labels that looked like 720p. We engineered {SITE_CONFIG.brandName} to be the definitive cinematic streaming platform for discerning viewers.
        </p>
      </div>

      {/* Visual Infrastructure Story */}
      <div className="relative rounded-3xl overflow-hidden bg-zinc-950 border border-white/10 p-8 sm:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              Decentralized CDN Architecture
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              18 Data Centers Across 3 Continents.
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Conventional IPTV providers run on single resold virtual private servers that collapse when thousands of viewers tune into the same stream.
            </p>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              {SITE_CONFIG.brandName} operates a custom Content Delivery Network with direct peering agreements at major European and North American Internet Exchange points (DE-CIX Frankfurt, LINX London, AMS-IX Amsterdam, Equinix Ashburn).
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Pure 10Gbps Uplink Dedicated Nodes</h4>
                  <p className="text-xs text-zinc-400">Over-provisioned bandwidth prevents bottlenecking at peak evening hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">H.265 / HEVC 10-Bit Hardware Encoding</h4>
                  <p className="text-xs text-zinc-400">Higher compression efficiency means pristine 4K HDR quality with 50% less bandwidth overhead.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Encrypted SSL/TLS Transport Streams</h4>
                  <p className="text-xs text-zinc-400">Your streaming data looks like normal encrypted web traffic, bypassing ISP bandwidth throttling completely.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Server Topology Box */}
          <div className="p-6 rounded-3xl bg-black/80 border border-white/10 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-orange-400" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Core CDN Cluster Locations
                </span>
              </div>
              <span className="text-emerald-400 font-mono text-xs font-bold">
                100% HEALTHY
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

            <p className="text-[11px] text-zinc-500 text-center font-mono">
              Dynamic BGP Anycast routing sends your stream to the closest cluster.
            </p>
          </div>
        </div>
      </div>

      {/* Human VIP Concierge Promise */}
      <div className="rounded-3xl bg-zinc-950/80 border border-white/10 p-8 sm:p-12 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-black text-white">
          Why We Choose WhatsApp For Personalized Service
        </h3>
        <p className="text-zinc-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
          Instead of frustrating automated ticketing bots or abandoned email support desks, every AETHER+ client receives access to our senior engineering team on WhatsApp. Whether you need a bouquet customized, a device set up remotely, or a rare film added to the on-demand library, we reply in minutes.
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-4">
          <WhatsAppButton
            variant="luxury"
            size="lg"
            label="Chat With Senior Engineer on WhatsApp"
            customMessage="Hello! I would like to learn more about AETHER+ infrastructure and service."
          />
        </div>
      </div>
    </div>
  );
}

