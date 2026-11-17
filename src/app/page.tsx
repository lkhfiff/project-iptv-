"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { HeroMinimal } from "@/components/HeroMinimal";
import { BentoFeatures } from "@/components/BentoFeatures";
import { HomeAbout } from "@/components/home/HomeAbout";
import { IPTVServicesSection } from "@/components/home/IPTVServicesSection";
import { useMediaModal } from "@/components/SiteLayout";
import { LiveTVTimeline } from "@/components/home/LiveTVTimeline";
import { generateWhatsAppContactUrl } from "@/data/config";

export default function HomePage() {
  const { openModal } = useMediaModal();

  return (
    <div className="space-y-24 sm:space-y-32 pb-0 overflow-x-clip bg-[#faf9f6] text-zinc-900 dark:bg-[#080808] dark:text-white transition-colors duration-300">
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

      {/* 06. Contact — Full 100vh Hero Direct Concierge CTA */}
      <section
        data-animate="section"
        className="w-full min-h-[90vh] sm:min-h-[100vh] flex flex-col items-center justify-center px-6 sm:px-10 pt-24 pb-16 sm:py-20 text-center select-none"
      >
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
          <h2
            data-animate="title"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-light tracking-tight text-zinc-950 dark:text-white leading-[1.12]"
          >
            Découvrez le Streaming Cinématographique NOUDINE.
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-[#a0a0a0] max-w-2xl mx-auto font-light leading-relaxed">
            Contactez notre conciergerie pour recevoir vos identifiants ou demander votre accès de démonstration gratuit 24h.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href={generateWhatsAppContactUrl("Activation Immédiate")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-[#f2f2f2] text-sm sm:text-base font-semibold tracking-wide transition-all shadow-xl hover:scale-105 active:scale-95 inline-flex items-center gap-2.5"
            >
              <Icon icon="ph:paper-plane-tilt" width={18} />
              <span>Contacter la Conciergerie VIP</span>
            </a>
            <Link
              href="/essai-gratuit"
              className="px-8 py-4 rounded-full bg-zinc-200/80 hover:bg-zinc-300/80 text-zinc-900 border border-zinc-300 dark:bg-white/10 dark:hover:bg-white/15 dark:text-white dark:border-white/15 text-sm sm:text-base font-medium transition-all shadow-sm hover:scale-105 active:scale-95 inline-flex items-center gap-2.5"
            >
              <Icon icon="ph:timer" width={18} className="text-zinc-900 dark:text-white" />
              <span className="text-zinc-900 dark:text-white font-medium">Demander un Essai Gratuit 24H</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
