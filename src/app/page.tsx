"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { HeroMinimal } from "@/components/HeroMinimal";
import { BentoFeatures } from "@/components/BentoFeatures";
import { HomeAbout } from "@/components/home/HomeAbout";
import { IPTVServicesSection } from "@/components/home/IPTVServicesSection";
import { PricingCard } from "@/components/PricingCard";
import { useMediaModal } from "@/components/SiteLayout";
import { LiveTVTimeline } from "@/components/home/LiveTVTimeline";
import { SUBSCRIPTION_PLANS } from "@/data/pricing";
import { generateWhatsAppContactUrl } from "@/data/config";

export default function HomePage() {
  const { openModal } = useMediaModal();

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 overflow-x-clip bg-[#faf9f6] text-zinc-900 dark:bg-[#080808] dark:text-white transition-colors duration-300">
      {/* 1. Full-Screen Hero & Floating Image Gallery (Matching the reference screenshot) */}
      <HeroMinimal onSelectMedia={openModal} />

      {/* 2. Asymmetric Bento Features Grid (Matching Flowblox Reference Structure) */}
      <BentoFeatures />

      {/* 3. Compact & Elegant About Section */}
      <HomeAbout />

      {/* 04. IPTV Services & Offers Section */}
      <IPTVServicesSection />

      {/* 05. Live TV — Vertical Scroll Timeline Redesign */}
      <LiveTVTimeline />

      {/* 06. Subscription Plans — Redesigned Compact Monochromatic Cards */}
      <section id="pricing" data-animate="section" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-zinc-500 dark:text-[#a0a0a0]">
            06 / Formules
          </span>
          <h2 data-animate="title" className="text-2xl sm:text-4xl font-light text-zinc-950 dark:text-white tracking-tight">
            Nos Abonnements
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#a0a0a0] font-light leading-relaxed">
            Formules compactes, claires et sans engagement. Provisionnement et activation de votre flux en moins de{" "}
            <span data-animate="counter" data-target="3">3</span> minutes.
          </p>
        </div>

        <div data-animate="pricing-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {SUBSCRIPTION_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      {/* 07. Devices — Minimal Ecosystem Strip */}
      <section data-animate="section" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-zinc-500 dark:text-[#a0a0a0]">
            07 / Compatibilité
          </span>
          <h3 data-animate="title" className="text-xl sm:text-2xl font-light text-zinc-950 dark:text-white">
            Écosystème Matériel Universel
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-600 dark:text-[#a0a0a0]">
          {[
            "Apple TV 4K",
            "Amazon Fire TV Stick",
            "Samsung Tizen Smart TV",
            "LG webOS Smart TV",
            "Android TV & Shield",
            "MAG Box & Formuler",
            "iPhone & iPad",
            "Mac & Windows PC",
          ].map((device) => (
            <Link
              key={device}
              href="/devices"
              className="px-4 py-2 rounded-full bg-white dark:bg-[#151515] border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 text-zinc-800 dark:text-white/90 text-xs shadow-sm transition-colors"
            >
              {device}
            </Link>
          ))}
        </div>
      </section>

      {/* 10. Contact — Direct Concierge CTA */}
      <section data-animate="section" className="max-w-5xl mx-auto px-6 sm:px-10">
        <div className="p-8 sm:p-14 rounded-3xl bg-white dark:bg-[#151515] border border-black/10 dark:border-white/15 text-center space-y-6 shadow-2xl shadow-black/5 dark:shadow-none">
          <span className="text-xs uppercase font-mono tracking-widest text-zinc-500 dark:text-[#a0a0a0]">
            08 / Accès &amp; Assistance
          </span>
          <h2 data-animate="title" className="text-2xl sm:text-4xl font-light tracking-tight text-zinc-950 dark:text-white max-w-xl mx-auto">
            Découvrez le Streaming Cinématographique NOUDINE.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#a0a0a0] max-w-md mx-auto font-light leading-relaxed">
            Contactez notre conciergerie pour recevoir vos identifiants ou demander votre accès de démonstration gratuit 24h.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href={generateWhatsAppContactUrl("Activation Immédiate")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-[#f2f2f2] text-xs font-semibold tracking-wide transition-all shadow-lg active:scale-95 inline-flex items-center gap-2"
            >
              <Icon icon="ph:paper-plane-tilt" width={16} />
              <span>Contacter la Conciergerie VIP</span>
            </a>
            <Link
              href="/essai-gratuit"
              className="px-6 py-3 rounded-full bg-black/5 hover:bg-black/10 text-zinc-900 dark:bg-white/10 dark:hover:bg-white/15 dark:text-white text-xs font-medium border border-black/10 dark:border-white/15 transition-all inline-flex items-center gap-2"
            >
              <Icon icon="ph:timer" width={14} />
              <span>Demander un Essai Gratuit 24H</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
