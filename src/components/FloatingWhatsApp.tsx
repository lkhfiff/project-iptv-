"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X, Sparkles } from "lucide-react";
import { generateWhatsAppContactUrl, SITE_CONFIG } from "@/data/config";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show polite tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = generateWhatsAppContactUrl("Instant Setup & VIP Inquiry");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Concierge Speech Bubble */}
      {showTooltip && !isDismissed && (
        <div className="mb-3 max-w-[280px] p-3.5 rounded-2xl bg-zinc-950/90 border border-emerald-500/30 backdrop-blur-xl shadow-2xl text-xs text-white relative animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsDismissed(true);
            }}
            className="absolute top-2 right-2 text-zinc-400 hover:text-white p-1"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-emerald-400 uppercase tracking-wider text-[10px]">
              VIP Concierge Online
            </span>
          </div>
          <p className="text-zinc-300 leading-relaxed">
            Need instant activation or a free test line? Chat directly with our senior IPTV engineer.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 inline-flex items-center gap-1.5 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors"
          >
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Start WhatsApp Chat &rarr;</span>
          </a>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with VIP Support"
        className="group relative flex items-center gap-3 px-4 py-3.5 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 hover:bg-[#20ba59] active:scale-95 transition-all duration-300"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-6 h-6 fill-white text-transparent transition-transform group-hover:scale-110" />
        <span className="hidden sm:inline font-bold text-sm tracking-wide pr-1">
          VIP WhatsApp
        </span>
      </a>
    </div>
  );
}

