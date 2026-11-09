"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { SUBSCRIPTION_PLANS } from "@/data/pricing";
import { PricingCard } from "@/components/PricingCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE_CONFIG } from "@/data/config";

export default function PricingPage() {
  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest">
          <Icon icon="ph:tag-fill" width={14} />
          <span>Transparent Cinema Pricing</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Choose Your Streaming Pass
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
          Four compact, premium plans. Every pass grants complete access to 28,500+ live channels, 135,000+ 4K movies & series, and world sports with Anti-Freeze™ 9.9.
        </p>
      </div>

      {/* 4 Compact, Elegant Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
        {SUBSCRIPTION_PLANS.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>

      {/* Comparison Matrix Table */}
      <div className="rounded-3xl bg-zinc-950/80 border border-white/10 p-6 sm:p-10 space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Technical Specification Matrix
          </h2>
          <p className="text-xs text-zinc-400">
            Compare server allocation, concurrent devices, and video codecs side by side.
          </p>
        </div>

        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 text-zinc-400">
                <th className="py-3 pr-4 font-semibold">Features & Benefits</th>
                <th className="py-3 px-3 text-center">1 Month</th>
                <th className="py-3 px-3 text-center">3 Months</th>
                <th className="py-3 px-3 text-center">6 Months</th>
                <th className="py-3 px-3 text-center text-orange-400 font-bold">
                  12 Months (VIP)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="py-3.5 pr-4 text-white font-medium">Live Channels</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">28,500+</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">28,500+</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">28,500+</td>
                <td className="py-3.5 px-3 text-center text-orange-400 font-bold">28,500+ (4K)</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-white font-medium">VOD Movies & Series</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">135,000+</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">135,000+</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">135,000+</td>
                <td className="py-3.5 px-3 text-center text-orange-400 font-bold">135,000+ (4K)</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-white font-medium">Concurrent Connections</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">1 Screen</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">1 Screen</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">2 Screens</td>
                <td className="py-3.5 px-3 text-center text-orange-400 font-bold">2-3 Screens Included</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-white font-medium">CDN Bandwidth Allocation</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">Tier 1 Edge</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">Tier 1 Edge</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">Priority Cluster</td>
                <td className="py-3.5 px-3 text-center text-orange-400 font-bold">Dedicated 10Gbps Line</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-white font-medium">WhatsApp Concierge Service</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">24/7 Support</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">24/7 Support</td>
                <td className="py-3.5 px-3 text-center text-emerald-400">Priority Line</td>
                <td className="py-3.5 px-3 text-center text-orange-400 font-bold">1-on-1 Remote Setup</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Free Test Prompt */}
      <div className="rounded-3xl bg-zinc-950 border border-white/10 p-8 sm:p-12 text-center space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          Still not sure? Test our servers free for 24 hours.
        </h3>
        <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto">
          Experience our uncompressed 4K picture quality, 0.8s channel zapping, and full sports coverage before committing.
        </p>
        <div className="pt-2">
          <WhatsAppButton
            isTrial
            variant="luxury"
            size="lg"
            label="Claim 24h Free VIP Test on WhatsApp"
          />
        </div>
      </div>
    </div>
  );
}
