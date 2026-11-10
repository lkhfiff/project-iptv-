"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

interface DeviceItem {
  id: string;
  name: string;
  badge: string;
  apps: string[];
  setupTime: string;
  image: string;
  description: string;
  features: string[];
}

const DEVICES_DATA: DeviceItem[] = [
  {
    id: "smart-tv",
    name: "Smart TV (Samsung & LG)",
    badge: "Sans boîtier externe",
    apps: ["IBO Player Pro", "Flix IPTV", "Smart IPTV", "Nanomid Player"],
    setupTime: "2 Minutes",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1000&auto=format&fit=crop",
    description:
      "Visionnez directement sur l'application de votre téléviseur sans aucun câble supplémentaire. Synchronisation instantanée par code MAC.",
    features: [
      "Résolution 4K UHD 60FPS native",
      "Contrôle total avec la télécommande d'origine",
      "Guide EPG et zapping instantané en 0.5s",
    ],
  },
  {
    id: "firestick",
    name: "Amazon Firestick 4K & Android TV",
    badge: "Le choix le plus populaire",
    apps: ["TiviMate Premium", "IPTV Smarters Pro", "XCIPTV", "Sparkle TV"],
    setupTime: "1 Minute 30s",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop",
    description:
      "L'expérience ultime avec TiviMate. Interface ultra-fluide, gestion des favoris personnalisée et mise à l'échelle matérielle.",
    features: [
      "Compatible Firestick Lite, 4K et 4K Max",
      "Son spatial Dolby Atmos & passthrough",
      "Enregistrement et replay 7 jours",
    ],
  },
  {
    id: "mobile-tablet",
    name: "Smartphone & Tablette (iOS / Android)",
    badge: "IPTV en mobilité",
    apps: ["IPTV Smarters", "Snappier IPTV", "GSE Smart IPTV", "iPlayTV"],
    setupTime: "1 Minute",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1000&auto=format&fit=crop",
    description:
      "Emportez vos chaînes partout avec vous en 4G/5G ou Wi-Fi. Idéal pour ne manquer aucun match lors de vos déplacements.",
    features: [
      "Compatible iPhone, iPad et tous smartphones Android",
      "Diffusion AirPlay et Chromecast vers votre TV",
      "Économie de données intelligente",
    ],
  },
  {
    id: "computer",
    name: "PC Windows & macOS",
    badge: "Grand écran de bureau",
    apps: ["IPTV Smarters Pro Windows/Mac", "VLC Media Player", "SFVIP Player"],
    setupTime: "2 Minutes",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop",
    description:
      "Profitez de votre abonnement directement sur votre écran d'ordinateur avec les applications dédiées ou votre lecteur multimédia.",
    features: [
      "Multi-fenêtres et multitâche",
      "Support des liens M3U et Xtream Codes",
      "Décodage matériel CPU/GPU haute performance",
    ],
  },
];

export function DevicesSection() {
  const [activeDeviceId, setActiveDeviceId] = useState<string>("smart-tv");

  const activeDevice =
    DEVICES_DATA.find((d) => d.id === activeDeviceId) || DEVICES_DATA[0];

  return (
    <section className="py-24 relative overflow-hidden bg-[#050508] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold tracking-wider uppercase">
            <Icon icon="ph:devices-bold" width={13} />
            <span>Compatibilité Totale</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Une Seule Ligne, Tous Vos Écrans
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light">
            Installez votre abonnement NOUDINE en moins de 2 minutes sur n&apos;importe quel écran sans connaissances techniques.
          </p>
        </div>

        {/* Device Switcher Tabs */}
        <div className="flex items-center justify-center gap-3 overflow-x-auto no-scrollbar pb-2">
          {DEVICES_DATA.map((device) => {
            const isActive = device.id === activeDeviceId;
            return (
              <button
                key={device.id}
                onClick={() => setActiveDeviceId(device.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 shrink-0 border ${
                  isActive
                    ? "bg-sky-500 text-black border-sky-400 shadow-xl shadow-sky-500/20 scale-105"
                    : "bg-[#0f0f14] text-zinc-400 hover:text-white border-white/[0.06] hover:bg-[#15151c]"
                }`}
              >
                <span>{device.name}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Showcase Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0f0f14] border border-white/[0.08] rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/80">
          {/* Left Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                {activeDevice.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white pt-2">
                {activeDevice.name}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {activeDevice.description}
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-2.5 pt-2">
              {activeDevice.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200">
                  <div className="w-5 h-5 rounded-full bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0 border border-sky-500/20">
                    <Icon icon="ph:check-bold" width={11} />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Recommended Apps */}
            <div className="pt-2 space-y-2">
              <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Applications Recommandées :
              </div>
              <div className="flex flex-wrap gap-2">
                {activeDevice.apps.map((app, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-white/[0.05] border border-white/10 text-xs text-white font-medium"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/appareils"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-black font-bold text-xs shadow-lg shadow-sky-500/25 transition-all group"
              >
                <span>Voir le Guide Pas-à-Pas</span>
                <Icon icon="ph:arrow-right-bold" width={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <span className="text-xs text-zinc-400 flex items-center gap-1.5">
                <Icon icon="ph:clock-bold" width={14} className="text-sky-400" />
                <span>Configuration : ~{activeDevice.setupTime}</span>
              </span>
            </div>
          </div>

          {/* Right Mockup Image with Transition */}
          <div className="lg:col-span-6 relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black/60 border border-white/10 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDevice.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="relative w-full h-full"
              >
                <Image
                  src={activeDevice.image}
                  alt={activeDevice.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f14] via-transparent to-transparent opacity-60" />

                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-bold text-sky-400 flex items-center gap-1.5">
                  <Icon icon="ph:check-circle-fill" width={14} className="text-emerald-400" />
                  <span>Testé &amp; Certifié 100% Compatible</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
