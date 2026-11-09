"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
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
  notableChannels,
  previewImage,
}: ChannelPackageCardProps) {
  const conciergeUrl = generateWhatsAppContactUrl(
    `Bouquet de chaînes : ${country} (${channelsCount})`
  );

  return (
    <div className="group relative rounded-3xl overflow-hidden bg-[#151515] border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between hover:shadow-xl">
      <div className="relative w-full h-40 overflow-hidden">
        <Image
          src={previewImage}
          alt={country}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/50 to-transparent" />

        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs font-mono font-bold text-white">
              {code}
            </span>
            <div>
              <h3 className="font-semibold text-base sm:text-lg text-white leading-tight drop-shadow">
                {country}
              </h3>
              <p className="text-xs text-[#a0a0a0] font-mono">{channelsCount}</p>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded bg-white/15 backdrop-blur-md text-[10px] font-mono text-white uppercase">
            BOUQUET {code}
          </span>
        </div>
      </div>

      <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#a0a0a0]">
            Chaînes Principales :
          </span>
          <div className="flex flex-wrap gap-1.5">
            {notableChannels.map((ch, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-[11px] font-medium text-[#f2f2f2]"
              >
                {ch}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-white/5">
          <a
            href={conciergeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black text-xs font-semibold transition-all duration-200 border border-white/10"
          >
            <span>Consulter la Liste {country} &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
