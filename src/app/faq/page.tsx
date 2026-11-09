"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function FAQPage() {
  return (
    <div className="pt-28 pb-20 space-y-16 max-w-4xl mx-auto px-6 sm:px-10 text-white">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-white text-xs font-mono tracking-wider">
          <Icon icon="ph:question" width={14} />
          <span>Foire Aux Questions</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
          Questions Fréquentes
        </h1>
        <p className="text-[#a0a0a0] text-xs sm:text-sm max-w-lg mx-auto font-light leading-relaxed">
          Retrouvez toutes les réponses concernant l&apos;activation des codes Xtream/M3U, la technologie Anti-Freeze™ 9.9, les applications compatibles et l&apos;essai gratuit 24h.
        </p>

        <div className="pt-2 flex justify-center gap-3">
          <WhatsAppButton
            variant="solid"
            size="md"
            label="Poser une Question au Support 24/7"
            customMessage="Bonjour ! J'ai une question concernant le service IPTV."
          />
        </div>
      </div>

      <FAQAccordion />
    </div>
  );
}
