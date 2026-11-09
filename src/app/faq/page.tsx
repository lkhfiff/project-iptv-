"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function FAQPage() {
  return (
    <div className="pt-28 pb-20 space-y-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest">
          <Icon icon="ph:question-fill" width={14} />
          <span>Answers & Guidance</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
          Find instant answers regarding installation, anti-freeze streaming servers, device compatibility, multi-connections, and WhatsApp subscription ordering.
        </p>

        <div className="pt-2 flex justify-center gap-3">
          <WhatsAppButton
            variant="luxury"
            size="md"
            label="Ask Us on WhatsApp 24/7"
            customMessage="Hello! I have a question regarding AETHER+ IPTV that isn't answered in the FAQ."
          />
        </div>
      </div>

      <FAQAccordion />
    </div>
  );
}
