"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export function BentoFeatures() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
      {/* 1. Centered Section Header matching Flowblox Editorial Style */}
      <div className="text-center space-y-3.5 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-zinc-950 dark:text-white leading-[1.15]">
          <span className="font-serif italic font-normal block sm:inline">Tout Ce Dont Votre </span>
          <span className="font-sans font-bold block sm:inline">Divertissement A Besoin</span>
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-zinc-600 dark:text-[#a0a0a0] font-light max-w-2xl mx-auto leading-relaxed">
          Une plateforme de streaming haute fidélité combinant plus de 28 500 chaînes directes mondiales,
          cinéma 4K HDR illimité et technologie Anti-Freeze™ 9.9.
        </p>
      </div>

      {/* 2. Asymmetric 4-Card Bento Grid (Matching Flowblox Reference Structure) */}
      <div className="space-y-5 sm:space-y-6">
        {/* ROW 1: Wide Cinema Photo Card (Left ~65%) + Oatmeal Tinted Card (Right ~35%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Card 1: Wide Cinema Image Card */}
          <div className="lg:col-span-8 group relative rounded-[28px] overflow-hidden bg-black min-h-[320px] sm:min-h-[360px] md:min-h-[390px] flex flex-col justify-end p-8 sm:p-10 border border-black/10 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-none cursor-pointer">
            <Image
              src="/bento-cinema-opt.jpg"
              alt="Cinéma & Séries 4K Ultra HD"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.78]"
            />
            {/* Deep Vignette Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Content Overlaid at Bottom-Left */}
            <div className="relative z-10 space-y-2 max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                Cinéma &amp; Séries en 4K Ultra HD
              </h3>
              <p className="text-xs sm:text-sm text-zinc-200 font-light leading-relaxed">
                Plus de 135 000 films et séries en accès illimité : toutes les dernières sorties cinéma mondiales,
                créations exclusives Netflix, HBO Max, Disney+, Canal+ et Apple TV+ en qualité master non compressée.
              </p>
            </div>
          </div>

          {/* Card 2: Oatmeal / Warm Sand Tinted Card */}
          <div className="lg:col-span-4 rounded-[28px] bg-[#ebe5dd] dark:bg-[#1a1c1e] p-8 sm:p-10 flex flex-col justify-between min-h-[320px] sm:min-h-[360px] md:min-h-[390px] border border-black/5 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-none transition-all duration-300 hover:shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/10 flex items-center justify-center text-zinc-900 dark:text-white">
              <Icon icon="ph:broadcast-fill" width={24} />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-zinc-950 dark:text-white tracking-tight">
                Technologie Anti-Freeze™ 9.9
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#a0a0a0] font-light leading-relaxed">
                Cluster CDN mondial dédié éliminant les latences et coupures lors des plus grands directs sportifs et finales européennes.
              </p>
            </div>
          </div>
        </div>

        {/* ROW 2: Caramel / Taupe Card (Left ~35%) + Sage Forest Green Card with Portrait (Right ~65%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Card 3: Caramel / Taupe Tinted Card */}
          <div className="lg:col-span-4 rounded-[28px] bg-[#bfa794] dark:bg-[#2b221b] p-8 sm:p-10 flex flex-col justify-between min-h-[320px] sm:min-h-[360px] md:min-h-[390px] border border-black/5 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-none text-white transition-all duration-300 hover:shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-white/20 dark:bg-white/10 flex items-center justify-center text-white">
              <Icon icon="ph:devices-fill" width={24} />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                Multi-Écrans Sans Limite
              </h3>
              <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed">
                Compatible Smart TV (Samsung, LG), Firestick 4K, Apple TV, Android, MAG, TiviMate, PC et smartphone avec installation guidée en 2 minutes.
              </p>
            </div>
          </div>

          {/* Card 4: Wide Sage Forest Green Card with Portrait */}
          <div className="lg:col-span-8 relative rounded-[28px] bg-[#4e5d4a] dark:bg-[#1a231a] overflow-hidden min-h-[320px] sm:min-h-[360px] md:min-h-[390px] flex items-stretch border border-black/5 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-none text-white">
            {/* Left Content */}
            <div className="relative z-10 p-8 sm:p-10 flex flex-col justify-end max-w-sm sm:max-w-md h-full">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                    Activation VIP en 3 Minutes
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed">
                    Vos identifiants Xtream Codes et liens M3U générés immédiatement par notre équipe dédiée sur WhatsApp avec assistance personnalisée.
                  </p>
                </div>

                <div className="pt-1">
                  <Link
                    href="/essai-gratuit"
                    className="inline-flex items-center gap-3 pl-5 pr-2 py-2 rounded-full bg-white text-zinc-950 hover:bg-zinc-100 font-semibold text-xs sm:text-sm shadow-xl transition-all active:scale-95 group"
                  >
                    <span>Tester 24H Sans Engagement</span>
                    <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                      <Icon icon="ph:arrow-right" width={12} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Smiling Portrait (Matching Flowblox Reference Structure) */}
            <div className="absolute right-0 bottom-0 h-full w-[46%] sm:w-[42%] md:w-[38%] pointer-events-none overflow-hidden select-none">
              <Image
                src="/bento-portrait-opt.jpg"
                alt="Support Client VIP"
                fill
                sizes="(max-width: 640px) 180px, 320px"
                className="object-cover object-top"
              />
              {/* Seamless blending gradients */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#4e5d4a] via-[#4e5d4a]/40 to-transparent dark:from-[#1a231a] dark:via-[#1a231a]/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4e5d4a]/80 via-transparent to-transparent dark:from-[#1a231a]/80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

