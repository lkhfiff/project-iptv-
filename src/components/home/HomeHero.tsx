"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useLanguage } from "@/context/LanguageContext";

export function HomeHero() {
  const { t } = useLanguage();
  const [imageError, setImageError] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll parallax for side words
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const leftWordX = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, -120]
  );
  const rightWordX = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, 120]
  );

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 pb-10 select-none"
      style={{
        backgroundColor: "var(--hero-bg, #050507)",
        color: "var(--hero-text, #ffffff)",
      }}
    >
      {/* Subtle radial glow behind center subject */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] sm:h-[650px] rounded-full pointer-events-none -z-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(14, 165, 233, 0.18) 0%, rgba(14, 165, 233, 0.04) 50%, transparent 75%)",
          filter: "blur(40px)",
        }}
      />

      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none -z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* TOP / CENTER: 3 Giant Words & Overlapping Cutout Subject */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto flex flex-col items-center justify-center">
        {/* DESKTOP & TABLET: Horizontal Staggered Spread */}
        <div className="relative w-full min-h-[480px] sm:min-h-[580px] lg:min-h-[640px] flex items-center justify-center">
          {/* 3 GIANT WORDS (LAYER: z-10 BEHIND SUBJECT) */}
          <div className="absolute inset-0 z-10 flex flex-col justify-between pointer-events-none">
            {/* Word 1: Left */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ x: leftWordX }}
              className="text-left"
            >
              <h1 className="hero-giant-word text-white font-bold">
                Toutes vos chaînes.
              </h1>
              <p className="hidden lg:block text-xs uppercase tracking-[0.25em] text-zinc-500 font-semibold mt-1">
                Sport 4K • Cinéma Récent • VOD Illimitée
              </p>
            </motion.div>

            {/* Word 2: Center with Accent Cyan-Blue Gradient */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-center my-auto"
            >
              <span className="hero-giant-word font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 drop-shadow-[0_0_35px_rgba(14,165,233,0.35)]">
                Zéro coupure.
              </span>
            </motion.div>

            {/* Word 3: Right */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ x: rightWordX }}
              className="text-right"
            >
              <h1 className="hero-giant-word text-white font-bold">
                Une seule app.
              </h1>
              <p className="hidden lg:block text-xs uppercase tracking-[0.25em] text-zinc-500 font-semibold mt-1">
                Smart TV • Android • iOS • Firestick • PC
              </p>
            </motion.div>
          </div>

          {/* CENTER CUTOUT SUBJECT (LAYER: z-20 IN FRONT OF TEXT) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 w-full max-w-[500px] sm:max-w-[680px] lg:max-w-[820px] aspect-[16/9] flex items-center justify-center pointer-events-auto"
          >
            {!imageError ? (
              <div className="relative w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
                <Image
                  src="/hero-devices-mockup.png"
                  alt="NOUDINE IPTV Multi-Device 4K Streaming Setup"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 820px"
                  onError={() => setImageError(true)}
                />
              </div>
            ) : (
              /* Fallback gradient placeholder if image is unavailable: never a broken icon */
              <div className="w-full h-full rounded-3xl bg-gradient-to-tr from-[#0a0a12] via-[#0f172a] to-[#07070a] border border-white/[0.08] flex flex-col items-center justify-center p-8 text-center shadow-2xl">
                <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-4">
                  <Icon icon="ph:television-bold" width={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Multi-Écrans 4K Ultra HD
                </h3>
                <p className="text-xs text-zinc-400 max-w-sm">
                  Flux ultra haute fidélité sans latence sur Smart TV, smartphones, tablettes et PC.
                </p>
              </div>
            )}
          </motion.div>

          {/* FLOATING GLASS CARD LEFT (LAYER: z-30) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={
              shouldReduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 1, y: [-8, 8, -8] }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="hidden md:flex absolute -bottom-6 left-2 lg:left-6 z-30 flex-col gap-2 p-4 sm:p-5 rounded-2xl bg-[#0f0f14]/80 backdrop-blur-xl border border-white/[0.08] shadow-2xl shadow-black/80 max-w-[270px]"
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                DIRECT 4K
              </span>
              <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                <Icon icon="ph:star-fill" width={13} />
                <span>4.8</span>
              </div>
            </div>

            <div>
              <div className="text-xs sm:text-sm font-bold text-white">
                Qualité du flux 4K • 60 FPS
              </div>
              <p className="text-[11px] text-zinc-400 mt-0.5">
                Latence &lt; 0.8s • 3.8k avis clients
              </p>
            </div>
          </motion.div>

          {/* FLOATING INFO CARD RIGHT (LAYER: z-30) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={
              shouldReduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 1, y: [8, -8, 8] }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
            className="hidden md:flex absolute -bottom-6 right-2 lg:right-6 z-30 flex-col gap-2 p-4 sm:p-5 rounded-2xl bg-[#0f0f14]/80 backdrop-blur-xl border border-white/[0.08] shadow-2xl shadow-black/80 max-w-[270px] text-right"
          >
            <div className="flex items-center justify-end gap-1.5">
              <span className="text-[11px] font-mono font-semibold text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20">
                SERVEURS 10 GBPS
              </span>
            </div>

            <div>
              <div className="text-xs sm:text-sm font-bold text-white">
                28 500 chaînes • 135 000 VOD
              </div>
              <p className="text-[11px] text-zinc-400 mt-0.5">
                Technologie Anti-Freeze™ 9.9
              </p>
            </div>
          </motion.div>
        </div>

        {/* MOBILE (≤ 768px): Centered Cards Grid */}
        <div className="grid grid-cols-2 gap-3 w-full mt-6 md:hidden z-30">
          <div className="p-3.5 rounded-2xl bg-[#0f0f14]/90 border border-white/[0.08] backdrop-blur-md">
            <div className="flex items-center gap-1 text-amber-400 text-xs font-bold mb-1">
              <Icon icon="ph:star-fill" width={12} />
              <span>4.8 ★</span>
            </div>
            <div className="text-xs font-bold text-white">Qualité 4K 60FPS</div>
            <p className="text-[10px] text-zinc-400">Zéro coupure garantie</p>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#0f0f14]/90 border border-white/[0.08] backdrop-blur-md">
            <div className="text-[10px] font-mono text-sky-400 font-bold mb-1">
              10 GBPS SERVEURS
            </div>
            <div className="text-xs font-bold text-white">+28 500 Chaînes</div>
            <p className="text-[10px] text-zinc-400">135k Films & Séries</p>
          </div>
        </div>

        {/* BOTTOM ACTIONS: CTAs Positioned at Bottom Right / Full width on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-4 border-t border-white/[0.06] z-30"
        >
          {/* Left mini status note */}
          <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Serveurs opérationnels à 99.9% • Activation immédiate</span>
          </div>

          {/* Right CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            {/* Secondary Ghost Button */}
            <Link
              href="/tarifs"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-white/[0.1] hover:border-sky-500/40 text-white hover:text-sky-300 font-semibold text-xs tracking-wide uppercase transition-all duration-300 active:scale-95"
            >
              <span>{t.hero.ctaPricing || "Voir les tarifs"}</span>
            </Link>

            {/* Primary Pill Button in Accent Blue */}
            <Link
              href="/essai-gratuit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-sky-500 hover:bg-sky-400 text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 transition-all duration-300 active:scale-95 group"
            >
              <span>{t.hero.ctaTrial || "ESSAI GRATUIT 24H"}</span>
              <Icon
                icon="ph:arrow-up-right-bold"
                width={15}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM ROW: Thin Trust Line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 border-t border-white/[0.04] flex flex-wrap items-center justify-center gap-3 sm:gap-8 text-[11px] sm:text-xs text-zinc-400 font-medium z-20"
      >
        <span className="flex items-center gap-1.5">
          <Icon icon="ph:check-circle-fill" width={14} className="text-sky-400" />
          4K Ultra HD & 60 FPS
        </span>
        <span className="text-zinc-700 hidden sm:inline">•</span>
        <span className="flex items-center gap-1.5">
          <Icon icon="ph:shield-check-fill" width={14} className="text-sky-400" />
          Technologie Anti-Freeze™ 9.9
        </span>
        <span className="text-zinc-700 hidden sm:inline">•</span>
        <span className="flex items-center gap-1.5">
          <Icon icon="ph:whatsapp-logo-fill" width={14} className="text-emerald-400" />
          Support VIP 24/7 WhatsApp
        </span>
        <span className="text-zinc-700 hidden sm:inline">•</span>
        <span className="flex items-center gap-1.5">
          <Icon icon="ph:broadcast-bold" width={14} className="text-sky-400" />
          +28 500 Chaînes Mondiales
        </span>
      </motion.div>
    </section>
  );
}
