"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { generateWhatsAppContactUrl, SITE_CONFIG } from "@/data/config";

export function FloatingWhatsApp() {
  const whatsappUrl = generateWhatsAppContactUrl("Instant Concierge Support");

  return (
    <aside aria-label="Support chat" className="fixed bottom-5 right-5 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${SITE_CONFIG.businessName} on WhatsApp`}
        title={`Chat with ${SITE_CONFIG.businessName}`}
        className="group flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl shadow-[#25D366]/30 active:scale-95 transition-all duration-200 border border-emerald-400/20"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
        </span>
        <Icon icon="ph:whatsapp-logo-fill" width={20} className="shrink-0" />
        <span className="hidden sm:inline text-xs font-bold tracking-tight pr-1">
          {SITE_CONFIG.whatsappDisplayName}
        </span>
      </a>
    </aside>
  );
}
