"use client";

import React from "react";
import { Check, Sparkles, ShieldCheck, Zap, HelpCircle, ArrowRight } from "lucide-react";
import { SUBSCRIPTION_PLANS } from "@/data/pricing";
import { PricingCard } from "@/components/PricingCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { generateWhatsAppContactUrl } from "@/data/config";

export default function PricingPage() {
  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          No Contracts • Instant Activation
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Select Your IPTV Subscription Plan
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
          Every plan includes our complete library of 28,500+ live TV channels, 135,000+ VOD blockbusters, and 4K 60FPS sports. When you choose a plan, WhatsApp opens with your pre-configured order.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {SUBSCRIPTION_PLANS.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>

      {/* Comparison Matrix Table */}
      <div className="rounded-3xl bg-zinc-950/80 border border-white/10 p-6 sm:p-10 space-y-6">
        <div className="space-y-1 text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Detailed Plan Comparison Matrix
          </h2>
          <p className="text-xs text-zinc-400">
            Compare every technical feature and server allocation tier side-by-side.
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
                <td className="py-3.5 pr-4 text-white font-medium">Live Worldwide Channels</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">28,500+</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">28,500+</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">28,500+</td>
                <td className="py-3.5 px-3 text-center text-orange-400 font-bold">28,500+ Uncompressed</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-white font-medium">VOD Movies & TV Shows</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">135,000+</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">135,000+</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">135,000+</td>
                <td className="py-3.5 px-3 text-center text-orange-400 font-bold">135,000+ (4K UHD)</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-white font-medium">Max Video Quality</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">4K / 1080p 60fps</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">4K / 1080p 60fps</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">4K HDR10+</td>
                <td className="py-3.5 px-3 text-center text-orange-400 font-bold">Dolby Vision & Atmos</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-white font-medium">Included Connections</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">1 Device</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">1 Device</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">1-2 Devices</td>
                <td className="py-3.5 px-3 text-center text-orange-400 font-bold">2 Devices Included</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-white font-medium">Server Infrastructure</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">Standard Tier 1</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">High-Bandwidth</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">Priority Cluster</td>
                <td className="py-3.5 px-3 text-center text-orange-400 font-bold">Dedicated 10Gbps Node</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-white font-medium">VOD Request Guarantee</td>
                <td className="py-3.5 px-3 text-center text-zinc-500">Standard</td>
                <td className="py-3.5 px-3 text-center text-zinc-500">Standard</td>
                <td className="py-3.5 px-3 text-center text-emerald-400">48h Ingest</td>
                <td className="py-3.5 px-3 text-center text-orange-400 font-bold">24h Priority Ingest</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-white font-medium">WhatsApp VIP Concierge</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">24/7 Support</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">24/7 Support</td>
                <td className="py-3.5 px-3 text-center text-emerald-400">Priority Line</td>
                <td className="py-3.5 px-3 text-center text-orange-400 font-bold">1-on-1 Remote Setup</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-white font-medium">Money-Back Guarantee</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">7 Days</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">7 Days</td>
                <td className="py-3.5 px-3 text-center text-zinc-300">7 Days</td>
                <td className="py-3.5 px-3 text-center text-orange-400 font-bold">7 Days Full Refund</td>
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
          Experience our uncompressed 4K picture quality, 0.8s channel zapping, and full sports coverage before committing to any pass.
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

