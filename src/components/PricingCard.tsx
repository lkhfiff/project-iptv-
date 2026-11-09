"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { SubscriptionPlan } from "@/data/pricing";
import { SITE_CONFIG, generateWhatsAppSubscriptionUrl } from "@/data/config";

interface PricingCardProps {
  plan: SubscriptionPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  const whatsappUrl = generateWhatsAppSubscriptionUrl({
    planTitle: plan.name,
    duration: plan.duration,
    price: plan.price,
    connections: plan.connections,
  });

  return (
    <div
      className={`relative h-full rounded-2xl flex flex-col justify-between p-6 transition-all duration-300 ${
        plan.isRecommended
          ? "bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-orange-500/80 shadow-2xl shadow-orange-500/10 ring-1 ring-orange-500/50"
          : "bg-zinc-950/70 border border-white/10 hover:border-orange-500/30 shadow-xl shadow-black/60"
      }`}
    >
      {/* Recommended Tag */}
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span
            className={`px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-md flex items-center gap-1 ${
              plan.isRecommended
                ? "bg-gradient-to-r from-orange-500 to-amber-500 text-black shadow-orange-500/30"
                : "bg-white/10 text-zinc-300 border border-white/15 backdrop-blur-md"
            }`}
          >
            {plan.isRecommended && <Icon icon="ph:star-fill" width={11} />}
            {plan.badge}
          </span>
        </div>
      )}

      {/* Header Info */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white tracking-tight">
            {plan.name}
          </h3>
          <span className="text-[11px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-white/5 border border-white/10">
            {plan.duration}
          </span>
        </div>

        {/* Price */}
        <div className="space-y-0.5">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-white tracking-tight">
              {plan.price}
            </span>
            <span className="text-xs text-zinc-400 font-medium">
              {plan.periodLabel}
            </span>
            {plan.originalPrice && (
              <span className="text-xs text-zinc-500 line-through ml-auto">
                {plan.originalPrice}
              </span>
            )}
          </div>
          <p className="text-[11px] text-zinc-500">
            {plan.connections === 1 ? "1 Connection Included" : `${plan.connections} Multi-Room Devices Included`}
          </p>
        </div>

        {/* 4 to 5 Concise Benefits */}
        <div className="pt-2 border-t border-white/5 space-y-2">
          {plan.benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
              <span className="w-3.5 h-3.5 rounded-full bg-orange-500/15 text-orange-400 flex items-center justify-center shrink-0">
                <Icon icon="ph:check-bold" width={9} />
              </span>
              <span className="truncate">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Compact WhatsApp CTA Button */}
      <div className="pt-5 border-t border-white/5 mt-4">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-lg active:scale-95 ${
            plan.isRecommended
              ? "bg-[#25D366] hover:bg-[#20ba59] text-white shadow-emerald-500/20"
              : "bg-white/10 hover:bg-white/20 text-white border border-white/15"
          }`}
        >
          <Icon icon="ph:whatsapp-logo-fill" width={15} />
          <span>Subscribe via WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
