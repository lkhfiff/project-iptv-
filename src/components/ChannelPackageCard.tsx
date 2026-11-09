"use client";

import React from "react";
import Image from "next/image";
import { Tv, Sparkles, Check } from "lucide-react";
import { generateWhatsAppContactUrl } from "@/data/config";

interface ChannelPackageCardProps {
  country: string;
  code: string;
  channelsCount: string;
  flag: string;
  notableChannels: string[];
  previewImage: string;
}

export function ChannelPackageCard({
  country,
  code,
  channelsCount,
  flag,
  notableChannels,
  previewImage,
}: ChannelPackageCardProps) {
  const whatsappUrl = generateWhatsAppContactUrl(
    `Channel Bouquet: ${country} (${channelsCount})`
  );

  return (
    <div className="group relative rounded-3xl overflow-hidden bg-zinc-950/70 border border-white/10 hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-orange-500/10">
      {/* Visual Header */}
      <div className="relative w-full h-40 overflow-hidden">
        <Image
          src={previewImage}
          alt={country}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />

        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl drop-shadow">{flag}</span>
            <div>
              <h3 className="font-extrabold text-lg text-white leading-tight drop-shadow">
                {country}
              </h3>
              <p className="text-xs text-orange-400 font-bold">{channelsCount}</p>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded bg-white/15 backdrop-blur-md text-[10px] font-bold text-white uppercase">
            {code} BOUQUET
          </span>
        </div>
      </div>

      {/* Notable Channels List */}
      <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
            Featured Networks:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {notableChannels.map((ch, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-[11px] font-medium text-zinc-300 group-hover:border-orange-500/20"
              >
                {ch}
              </span>
            ))}
          </div>
        </div>

        {/* Action */}
        <div className="pt-3 border-t border-white/5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-white/5 hover:bg-orange-500 hover:text-black text-xs font-semibold text-white transition-all duration-200 border border-white/10 hover:border-orange-500"
          >
            <span>Request {country} Channel List &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}

