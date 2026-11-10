"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SITE_CONFIG } from "@/data/config";
import { useLanguage } from "@/context/LanguageContext";

export function HomeHero() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center overflow-hidden pt-12 pb-20">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Grid Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 text-center space-y-8 z-10">
        {/* Top Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-semibold tracking-wider uppercase"
        >
          <Icon icon="ph:broadcast-fill" width={14} className="text-sky-400" />
          <span>{t.hero.badge}</span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-2"
        >
          <h1 className="headline-fluid font-black text-white tracking-tight">
            <span>{t.hero.headline} </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500">
              {t.hero.headlineHighlight}
            </span>
          </h1>
        </motion.div>

        {/* Short Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="subheadline-fluid text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Two CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <Link
            href="/essai-gratuit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-sky-500 hover:bg-sky-400 text-black font-extrabold text-sm sm:text-base shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 transition-all duration-300 active:scale-95 group"
          >
            <Icon icon="ph:play-circle-bold" width={20} />
            <span>{t.hero.ctaTrial}</span>
            <Icon
              icon="ph:arrow-right-bold"
              width={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/tarifs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#0f0f14] hover:bg-[#15151c] text-white font-bold text-sm sm:text-base border border-white/10 hover:border-sky-500/30 transition-all duration-300 active:scale-95"
          >
            <span>{t.hero.ctaPricing}</span>
            <Icon icon="ph:arrow-down-right-bold" width={16} className="text-zinc-400" />
          </Link>
        </motion.div>

        {/* Trust Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-medium text-zinc-400 border-t border-white/[0.06] max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-2">
            <Icon icon="ph:check-circle-fill" width={16} className="text-sky-400" />
            <span>{t.hero.trust4k}</span>
          </div>
          <span className="text-zinc-700 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <Icon icon="ph:shield-check-fill" width={16} className="text-sky-400" />
            <span>{t.hero.trustNoFreeze}</span>
          </div>
          <span className="text-zinc-700 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <Icon icon="ph:headset-fill" width={16} className="text-sky-400" />
            <span>{t.hero.trustSupport}</span>
          </div>
          <span className="text-zinc-700 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <Icon icon="ph:television-simple-fill" width={16} className="text-sky-400" />
            <span>{t.hero.trustChannels}</span>
          </div>
        </motion.div>

        {/* Visual Device Showcase Collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="relative pt-10 max-w-5xl mx-auto"
        >
          {/* Main Smart TV Center Frame */}
          <div className="relative rounded-2xl md:rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-white/10 to-white/0 border border-white/10 shadow-2xl shadow-sky-950/40">
            <div className="relative aspect-[16/9] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#0c0c12]">
              <Image
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop"
                alt="Retransmission Sportive 4K UEFA Champions League"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1100px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-transparent to-transparent opacity-80" />

              {/* TV Interface Overlay */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-bold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  DIRECT • 4K UHD 60FPS
                </span>
                <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-medium text-sky-400">
                  Canal+ Sport 4K / beIN Sports 1
                </span>
              </div>

              {/* TV Program Bar at Bottom */}
              <div className="absolute bottom-4 inset-x-4 sm:bottom-6 sm:inset-x-6 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between text-left">
                <div className="space-y-0.5">
                  <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                    <span>UEFA Champions League — Phase Finale</span>
                    <span className="px-1.5 py-0.5 rounded bg-sky-500 text-[9px] font-extrabold text-black">
                      4K HDR
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-300">
                    Serveur CDN Paris #04 • Bitrate : 24.2 Mbps • Latence : 0.8s
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    100% STABLE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Phone Mockup Left */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-4 sm:-left-8 w-32 sm:w-48 aspect-[9/16] rounded-2xl p-1.5 bg-[#0f0f14] border border-white/15 shadow-2xl overflow-hidden hidden sm:block"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-black">
              <Image
                src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=600&auto=format&fit=crop"
                alt="Mobile IPTV Streaming"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-2 inset-x-2 text-[10px] text-white font-semibold leading-tight">
                TiviMate / iOS
              </div>
            </div>
          </motion.div>

          {/* Floating Tablet Mockup Right */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -right-4 sm:-right-8 w-40 sm:w-56 aspect-[4/3] rounded-2xl p-2 bg-[#0f0f14] border border-white/15 shadow-2xl overflow-hidden hidden sm:block"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-black">
              <Image
                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=600&auto=format&fit=crop"
                alt="Tablet Multi-Screen"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-2 inset-x-2 text-[10px] text-white font-semibold leading-tight">
                Multi-Écran 4K
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
