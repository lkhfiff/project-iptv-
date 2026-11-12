"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { SubscriptionPlan } from "@/data/pricing";
import { generateWhatsAppSubscriptionUrl } from "@/data/config";

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
      data-animate="pricing-card"
      data-pricing-recommended={plan.isRecommended ? "true" : "false"}
      className={`relative h-full rounded-2xl flex flex-col justify-between p-6 transition-all duration-300 ${
        plan.isRecommended
          ? "bg-white dark:bg-[#151515] border-2 border-zinc-950 dark:border-white/40 shadow-2xl shadow-black/10 dark:shadow-black/80 ring-1 ring-zinc-950/20 dark:ring-white/30"
          : "bg-white/80 dark:bg-[#121212] border border-black/10 dark:border-white/10 hover:border-black/25 dark:hover:border-white/25 shadow-xl shadow-black/5 dark:shadow-black/60"
      }`}
    >
      {/* Recommended Tag */}
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span
            className={`px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md flex items-center gap-1 ${
              plan.isRecommended
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-black/5 dark:bg-white/10 text-zinc-800 dark:text-white/80 border border-black/10 dark:border-white/15 backdrop-blur-md"
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
          <h3 className="text-base font-semibold text-zinc-950 dark:text-white tracking-tight">
            {plan.name}
          </h3>
          <span className="text-[11px] font-mono text-zinc-600 dark:text-[#a0a0a0] px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
            {plan.duration}
          </span>
        </div>

        {/* Price */}
        <div className="space-y-0.5">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-light text-zinc-950 dark:text-white tracking-tight">
              {plan.price}
            </span>
            <span className="text-xs text-zinc-600 dark:text-[#a0a0a0] font-normal">
              {plan.periodLabel}
            </span>
            {plan.originalPrice && (
              <span className="text-xs text-zinc-400 dark:text-[#a0a0a0]/60 line-through ml-auto">
                {plan.originalPrice}
              </span>
            )}
          </div>
          <p className="text-[11px] text-zinc-600 dark:text-[#a0a0a0]">
            {plan.connections === 1 ? "1 Écran Inclus" : `${plan.connections} Appareils Multi-Écrans`}
          </p>
        </div>

        {/* 4 to 5 Concise Benefits */}
        <div className="pt-3 border-t border-black/5 dark:border-white/5 space-y-2">
          {plan.benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-[#f2f2f2]/90 font-light">
              <span className="w-3.5 h-3.5 rounded-full bg-black/5 dark:bg-white/10 text-zinc-900 dark:text-white flex items-center justify-center shrink-0">
                <Icon icon="ph:check" width={10} />
              </span>
              <span className="truncate">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Compact Minimalist Direct Order CTA Button */}
      <div className="pt-5 border-t border-black/5 dark:border-white/5 mt-4">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-md active:scale-95 ${
            plan.isRecommended
              ? "bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-[#f2f2f2]"
              : "bg-black/5 hover:bg-black/10 text-zinc-900 border border-black/10 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:border-white/15"
          }`}
        >
          <Icon icon="ph:arrow-up-right" width={14} />
          <span>Activer Mon Accès</span>
        </a>
      </div>
    </div>
  );
}
