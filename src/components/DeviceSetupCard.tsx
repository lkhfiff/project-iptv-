"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { DeviceGuide } from "@/data/devices";
import { WhatsAppButton } from "./WhatsAppButton";

interface DeviceSetupCardProps {
  device: DeviceGuide;
}

export function DeviceSetupCard({ device }: DeviceSetupCardProps) {
  const [showSteps, setShowSteps] = useState(false);

  return (
    <div className="group rounded-3xl overflow-hidden bg-zinc-950/70 border border-white/10 hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between hover:shadow-xl">
      {/* Device Image Header */}
      <div className="relative w-full h-44 sm:h-52 overflow-hidden">
        <Image
          src={device.image}
          alt={device.name}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          {device.badge && (
            <span className="px-2.5 py-1 rounded-full bg-orange-500/90 text-black text-[10px] font-black uppercase tracking-wider">
              {device.badge}
            </span>
          )}
          <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-semibold text-zinc-300 border border-white/10 flex items-center gap-1">
            <Icon icon="ph:clock-bold" width={11} className="text-orange-400" />
            <span>{device.setupTime}</span>
          </span>
        </div>

        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="font-extrabold text-xl text-white tracking-tight drop-shadow">
            {device.name}
          </h3>
        </div>
      </div>

      {/* Device Info */}
      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            {device.description}
          </p>

          <div className="space-y-1.5 pt-1">
            <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">
              Recommended Players:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {device.recommendedApps.map((app, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-medium text-zinc-300"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Accordion / Step-by-Step Toggle */}
        <div className="pt-3 border-t border-white/5 space-y-3">
          <button
            onClick={() => setShowSteps(!showSteps)}
            className="w-full flex items-center justify-between text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors py-1 cursor-pointer"
          >
            <span>{showSteps ? "Hide Setup Steps" : "View Step-by-Step Setup Guide"}</span>
            <Icon
              icon="ph:caret-down-bold"
              width={14}
              className={`transition-transform duration-200 ${showSteps ? "rotate-180" : ""}`}
            />
          </button>

          {showSteps && (
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5 animate-in fade-in duration-200">
              {device.steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                  <span className="w-4 h-4 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 font-bold text-[10px] mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-snug">{step}</span>
                </div>
              ))}
            </div>
          )}

          <WhatsAppButton
            variant="luxury"
            size="sm"
            fullWidth
            customMessage={`Hello AETHER+! I want to setup your IPTV service on my ${device.name}. Please guide me with playlist URL and credentials.`}
            label={`Setup on ${device.name.split(" ")[0]} via WhatsApp`}
          />
        </div>
      </div>
    </div>
  );
}
