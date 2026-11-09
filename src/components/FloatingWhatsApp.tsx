"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { generateDirectContactUrl, SITE_CONFIG } from "@/data/config";

export function FloatingWhatsApp() {
  const conciergeUrl = generateDirectContactUrl("Support Concierge Direct");

  return (
    <aside aria-label="Support conciergerie" className="fixed bottom-5 right-5 z-40">
      <a
        href={conciergeUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter la conciergerie VIP"
        title="Contacter la conciergerie VIP NOUDINE"
        className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-white text-black hover:bg-[#f2f2f2] dark:bg-white dark:text-black dark:hover:bg-[#e8e8e8] shadow-2xl shadow-black/50 active:scale-95 transition-all duration-200 border border-white/20"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-60" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-black" />
        </span>
        <Icon icon="ph:chat-circle-dots" width={18} className="shrink-0" />
        <span className="hidden sm:inline text-xs font-semibold tracking-wide pr-1">
          Conciergerie VIP
        </span>
      </a>
    </aside>
  );
}

// Re-export as FloatingConcierge
export const FloatingConcierge = FloatingWhatsApp;
