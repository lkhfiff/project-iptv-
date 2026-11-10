"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useLanguage } from "@/context/LanguageContext";

export function FeaturesGrid() {
  const { t } = useLanguage();

  const features = [
    {
      icon: "ph:video-camera-bold",
      title: "Qualité Native 4K UHD & FHD 60FPS",
      description:
        "Profitez d'un flux sans compression avec des débits allant jusqu'à 25 Mbps, support HDR10+ et audio immersif Dolby Atmos sur les grands événements sportifs.",
      tag: "Ultra HD",
    },
    {
      icon: "ph:shield-check-bold",
      title: "Technologie Anti-Freeze™ 9.9",
      description:
        "Fini les micro-coupures et les ralentissements lors des soirées de Ligue des Champions. Notre réseau CDN décentralisé équilibre la charge en temps réel.",
      tag: "Zéro Coupure",
    },
    {
      icon: "ph:calendar-check-bold",
      title: "Guide des Programmes EPG Intégré",
      description:
        "Consultez les grilles TV électroniques en direct, les résumés des émissions et la programmation des matchs à venir directement dans votre lecteur.",
      tag: "Temps Réel",
    },
    {
      icon: "ph:clock-counter-clockwise-bold",
      title: "Catch-Up & Replay 7 Jours",
      description:
        "Vous avez raté le début d'un match ou votre émission favorite ? Rembobinez le direct et accédez au replay complet des 7 derniers jours sur toutes les chaînes.",
      tag: "Replay Inclus",
    },
    {
      icon: "ph:devices-bold",
      title: "Compatibilité Multi-Écrans & Multi-OS",
      description:
        "Smart TV (Samsung, LG), Firestick, Android TV, Apple TV, iPhone, boîtiers MAG ou PC : une seule configuration simple et instantanée sur tous vos écrans.",
      tag: "Tous Appareils",
    },
    {
      icon: "ph:headset-bold",
      title: "Assistance VIP Réactive 24/7",
      description:
        "Une équipe de techniciens dédiée répond à vos questions en moins de 2 minutes sur WhatsApp, vous guide pour l'installation et résout tout problème technique.",
      tag: "WhatsApp VIP",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#07070a]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-sky-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold tracking-wider uppercase">
            <Icon icon="ph:sparkle-fill" width={13} />
            <span>Pourquoi Choisir NOUDINE IPTV</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {t.features.title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            {t.features.subtitle}
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="relative p-7 sm:p-8 rounded-3xl bg-[#0f0f14] border border-white/[0.06] hover:border-sky-500/40 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl shadow-black/40 hover:shadow-sky-500/10"
            >
              <div className="flex items-center justify-between pb-6">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-black transition-all duration-300">
                  <Icon icon={feat.icon} width={26} />
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-zinc-300">
                  {feat.tag}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
