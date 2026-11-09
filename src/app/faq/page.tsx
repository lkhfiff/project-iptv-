"use client";

import React from "react";
import { HelpCircle, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { generateWhatsAppContactUrl } from "@/data/config";

export default function FAQPage() {
  return (
    <div className="pt-28 pb-20 space-y-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest">
          <HelpCircle className="w-3.5 h-3.5" />
          Answers & Guidance
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

      {/* Accordion Component */}
      <FAQAccordion />

      {/* Trust & Guarantee Banner */}
      <div className="rounded-3xl bg-zinc-950 border border-white/10 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-base font-bold text-white flex items-center gap-2 justify-center sm:justify-start">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span>7-Day Money-Back Guarantee</span>
          </h4>
          <p className="text-xs text-zinc-400 max-w-md">
            If our service fails to deliver the promised picture quality or stability on your hardware within the first 7 days, we issue an immediate full refund.
          </p>
        </div>

        <WhatsAppButton
          variant="outline"
          size="md"
          label="Message Support"
          customMessage="Hello! I would like to learn more about the 7-day guarantee."
        />
      </div>
    </div>
  );
}

