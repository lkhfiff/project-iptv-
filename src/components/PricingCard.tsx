"use client";

import React, { useState } from "react";
import { Check, Sparkles, Shield, Zap, Tv, Clock, Star } from "lucide-react";
import { SubscriptionPlan } from "@/data/pricing";
import { WhatsAppButton } from "./WhatsAppButton";

interface PricingCardProps {
  plan: SubscriptionPlan;
  isAnnualDefault?: boolean;
}

export function PricingCard({ plan }: PricingCardProps) {
  // Allow user to select connection count if the plan supports multiple options
  const [selectedConnectionIndex, setSelectedConnectionIndex] = useState(
    plan.supportedConnectionsOptions.length > 1 ? (plan.isBestValue ? 1 : 0) : 0
  );

  const activeOption = plan.supportedConnectionsOptions[selectedConnectionIndex] || {
    connections: plan.defaultConnections,
    price: plan.price,
    label: `${plan.defaultConnections} Device`,
  };

  return (
    <div
      className={`relative rounded-3xl flex flex-col justify-between transition-all duration-300 ${
        plan.isBestValue
          ? "bg-gradient-to-b from-zinc-900/90 via-zinc-950 to-black border-2 border-orange-500/70 shadow-2xl shadow-orange-500/20 scale-[1.02] md:scale-105 z-10"
          : plan.isPopular
          ? "bg-zinc-950/80 border border-amber-500/40 shadow-xl shadow-amber-500/10 hover:border-amber-400"
          : "bg-zinc-950/60 border border-white/10 hover:border-white/20 shadow-xl"
      }`}
    >
      {/* Recommended / Savings Ribbon */}
      {plan.savingsBadge && (
        <div className="absolute -top-3.5 inset-x-0 flex justify-center">
          <span
            className={`px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5 ${
              plan.isBestValue
                ? "bg-gradient-to-r from-orange-500 to-amber-500 text-black shadow-orange-500/40"
                : "bg-white/10 border border-white/20 text-white backdrop-blur-md"
            }`}
          >
            {plan.isBestValue && <Sparkles className="w-3.5 h-3.5 fill-black" />}
            {plan.savingsBadge}
          </span>
        </div>
      )}

      {/* Top Header Card */}
      <div className="p-6 sm:p-8 space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {plan.durationLabel}
            </h3>
            {plan.isBestValue && (
              <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded-full">
                FLAGSHIP PASS
              </span>
            )}
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed min-h-[36px]">
            {plan.tagline}
          </p>
        </div>

        {/* Pricing Display */}
        <div className="pt-2 border-t border-white/5 space-y-1">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              {activeOption.price}
            </span>
            {plan.originalPrice && (
              <span className="text-sm font-semibold text-zinc-500 line-through">
                {plan.originalPrice}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span className="text-emerald-400 font-semibold">{plan.perMonthPrice} / month</span>
            <span>•</span>
            <span>Billed {plan.durationLabel}</span>
          </div>
        </div>

        {/* Connection Selector (1 Device / 2 Devices / 3 Devices) */}
        {plan.supportedConnectionsOptions.length > 1 && (
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between text-xs text-zinc-400 font-medium">
              <span>Simultaneous Connections:</span>
              <span className="text-white font-bold">{activeOption.connections} Device(s)</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/10">
              {plan.supportedConnectionsOptions.map((opt, idx) => (
                <button
                  key={opt.connections}
                  onClick={() => setSelectedConnectionIndex(idx)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-semibold transition-all ${
                    idx === selectedConnectionIndex
                      ? "bg-orange-500 text-black shadow-md font-bold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {opt.connections} {opt.connections === 1 ? "Screen" : "Screens"}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Deliver Specs Pill */}
        <div className="flex items-center gap-3 text-xs text-zinc-400 bg-white/[0.02] p-2.5 rounded-xl border border-white/5">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-orange-400" />
            <span>Instant &lt; 3 min</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Anti-Freeze™ 9.9</span>
          </div>
        </div>

        {/* Features Checklist */}
        <div className="space-y-3 pt-2">
          <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
            Included Privileges:
          </p>
          <ul className="space-y-2.5">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span className="leading-tight">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Action Button */}
      <div className="p-6 sm:p-8 pt-0">
        <WhatsAppButton
          variant={plan.isBestValue ? "luxury" : "primary"}
          size="lg"
          fullWidth
          showPingDot={plan.isBestValue}
          plan={{
            name: `${plan.name} (${plan.durationLabel})`,
            duration: plan.durationLabel,
            price: activeOption.price,
            connections: activeOption.connections,
            notes: "Setup for Smart TV / Firestick / Apple TV",
          }}
          label={`Subscribe ${plan.durationLabel} via WhatsApp`}
        />

        <p className="text-[11px] text-center text-zinc-500 mt-2.5">
          Zero commitment. Pre-filled WhatsApp message. Instant activation.
        </p>
      </div>
    </div>
  );
}

