"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { SITE_CONFIG } from "@/data/config";

interface SetupGuide {
  id: string;
  name: string;
  category: string;
  icon: string;
  time: string;
  difficulty: string;
  recommendedApps: string[];
  image: string;
  steps: string[];
  proTip: string;
}

const GUIDES: SetupGuide[] = [
  {
    id: "smart-tv",
    name: "Smart TV Samsung & LG",
    category: "Téléviseurs Connectés",
    icon: "ph:television-bold",
    time: "2 Minutes",
    difficulty: "Très Facile",
    recommendedApps: ["IBO Player Pro (Recommandé)", "Flix IPTV", "Smart IPTV (SIPTV)", "Nanomid"],
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=800&auto=format&fit=crop",
    steps: [
      "Allumez votre Smart TV et ouvrez le magasin d'applications (Samsung Smart Hub ou LG Content Store).",
      "Dans la barre de recherche, tapez 'IBO Player Pro' ou 'Flix IPTV' puis installez l'application.",
      "Ouvrez l'application : notez l'adresse MAC et le Device Key qui s'affichent à l'écran de votre téléviseur.",
      "Envoyez votre adresse MAC à notre support WhatsApp : nous activons et injectons votre bouquet 4K à distance instantanément !",
    ],
    proTip: "Une fois configurée, redémarrez simplement l'application pour charger les logos des chaînes et le guide EPG.",
  },
  {
    id: "firestick",
    name: "Amazon Fire TV & Firestick 4K",
    category: "Boîtiers Streaming",
    icon: "ph:flame-bold",
    time: "2 Minutes",
    difficulty: "Facile",
    recommendedApps: ["TiviMate Premium (Recommandé)", "IPTV Smarters Pro", "XCIPTV", "Downloader"],
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800&auto=format&fit=crop",
    steps: [
      "Sur votre Firestick, rendez-vous dans l'Appstore Amazon et téléchargez l'application gratuite 'Downloader'.",
      "Ouvrez Downloader, saisissez le code de téléchargement rapide (ex: code TiviMate ou Smarters) pour lancer l'installation.",
      "Ouvrez l'application IPTV installée et sélectionnez 'Ajouter une playlist' via 'Xtream Codes API'.",
      "Saisissez le Nom du serveur, votre Identifiant et votre Mot de passe reçus par WhatsApp.",
    ],
    proTip: "Activez le mode 'Tunneling matériel' dans les paramètres de TiviMate pour une fluidité absolue en 4K 60FPS sans saccade.",
  },
  {
    id: "android-tv",
    name: "Android TV & Google TV (Shield, Chromecast, Sony)",
    category: "Système Android",
    icon: "ph:android-logo-bold",
    time: "2 Minutes",
    difficulty: "Facile",
    recommendedApps: ["TiviMate IPTV", "Sparkle TV", "IPTV Smarters Pro", "OTT Navigator"],
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop",
    steps: [
      "Ouvrez le Google Play Store sur votre TV ou boîtier Android.",
      "Recherchez 'TiviMate IPTV' ou 'IPTV Smarters Pro' et cliquez sur Installer.",
      "Lancez l'application et choisissez la connexion via 'Xtream Codes'.",
      "Indiquez l'URL du serveur fournie par NOUDINE avec vos codes d'accès personnalisés.",
    ],
    proTip: "Pour les utilisateurs de Nvidia Shield Pro, activez l'Upscaling par IA de la Shield pour sublimer les flux Full HD en 4K.",
  },
  {
    id: "apple-tv",
    name: "Apple TV 4K & iPhone / iPad (tvOS / iOS)",
    category: "Écosystème Apple",
    icon: "ph:apple-logo-bold",
    time: "1 Minute 30s",
    difficulty: "Ultra Facile",
    recommendedApps: ["Snappier IPTV", "IPTVX (Interface type Apple)", "GSE Smart IPTV", "iPlayTV"],
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=800&auto=format&fit=crop",
    steps: [
      "Sur votre Apple TV ou appareil iOS, ouvrez l'App Store officiel.",
      "Téléchargez 'Snappier IPTV' ou 'IPTVX'.",
      "Choisissez 'Xtream Codes API' ou scannez le QR Code fourni par votre conciergerie.",
      "Profitez immédiatement de l'interface fluide avec son spatial Dolby Atmos.",
    ],
    proTip: "L'application Snappier synchronise automatiquement vos favoris et votre historique entre votre iPhone, iPad et Apple TV via iCloud.",
  },
  {
    id: "mag-formuler",
    name: "Boîtiers MAG & Formuler (Stalker Portal)",
    category: "Boîtiers Spécialisés",
    icon: "ph:hard-drive-bold",
    time: "3 Minutes",
    difficulty: "Intermédiaire",
    recommendedApps: ["Portail Stalker Intégré", "MyTVOnline 2 / 3 (Formuler)"],
    image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?q=80&w=800&auto=format&fit=crop",
    steps: [
      "Allumez votre boîtier MAG ou Formuler et allez dans Paramètres > Serveurs > Portails.",
      "Nommez le portail 'NOUDINE IPTV' et renseignez l'URL du portail Stalker transmise par nos techniciens.",
      "Relevez votre adresse MAC (commençant généralement par 00:1A:79:...) inscrite sous le boîtier.",
      "Transmettez cette adresse MAC à notre équipe WhatsApp pour autorisation instantanée.",
    ],
    proTip: "Redémarrez le boîtier électriquement une fois l'adresse MAC activée par nos serveurs.",
  },
  {
    id: "pc-mac",
    name: "Ordinateurs PC Windows & macOS",
    category: "Bureau & Laptop",
    icon: "ph:laptop-bold",
    time: "2 Minutes",
    difficulty: "Facile",
    recommendedApps: ["IPTV Smarters Pro PC/Mac", "VLC Media Player", "SFVIP Player"],
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop",
    steps: [
      "Téléchargez l'application officielle IPTV Smarters Pro pour Windows ou macOS sur notre lien direct.",
      "Installez le logiciel et lancez-le.",
      "Connectez-vous avec vos identifiants Xtream Codes transmis lors de votre souscription.",
      "Naviguez en plein écran ou en mode fenêtré tout en continuant votre travail.",
    ],
    proTip: "Dans VLC, ouvrez simplement le flux réseau (Ctrl+N ou Cmd+N) et collez votre lien M3U fourni pour un visionnage sans installation logicielle.",
  },
];

export default function DevicesPage() {
  const [activeTab, setActiveTab] = useState<string>("smart-tv");

  const currentGuide = GUIDES.find((g) => g.id === activeTab) || GUIDES[0];

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold tracking-wider uppercase">
            <Icon icon="ph:wrench-bold" width={14} />
            <span>Tutoriels d&apos;Installation</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Comment Configurer Votre IPTV sur Tous Vos Appareils
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Suivez nos guides étape par étape. Aucune connaissance technique nécessaire : votre abonnement est opérationnel en 2 minutes. Notre support WhatsApp reste disponible pour vous aider en direct.
          </p>
        </div>

        {/* Device selector bar */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2">
          {GUIDES.map((g) => {
            const isActive = g.id === activeTab;
            return (
              <button
                key={g.id}
                onClick={() => setActiveTab(g.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 shrink-0 border ${
                  isActive
                    ? "bg-sky-500 text-black border-sky-400 shadow-xl shadow-sky-500/25"
                    : "bg-[#0f0f14] text-zinc-300 hover:text-white border-white/[0.06] hover:bg-[#15151c]"
                }`}
              >
                <Icon icon={g.icon} width={18} />
                <span>{g.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Guide Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#0f0f14] border border-white/[0.08] rounded-3xl p-6 sm:p-10 shadow-2xl">
          {/* Left Column: Steps */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  {currentGuide.category}
                </span>
                <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-white/[0.05] text-zinc-300 border border-white/10 flex items-center gap-1">
                  <Icon icon="ph:clock-bold" width={12} className="text-sky-400" />
                  <span>Durée : {currentGuide.time}</span>
                </span>
                <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Difficulté : {currentGuide.difficulty}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Installation sur {currentGuide.name}
              </h2>
            </div>

            {/* Steps List */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                Étapes à Suivre :
              </h3>
              <div className="space-y-3">
                {currentGuide.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-black/40 border border-white/[0.04] flex items-start gap-3.5"
                  >
                    <div className="w-7 h-7 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                      0{idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Tip Box */}
            <div className="p-4 rounded-2xl bg-sky-500/[0.04] border border-sky-500/20 flex items-start gap-3">
              <Icon icon="ph:lightbulb-bold" width={20} className="text-sky-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wide">
                  Astuce Optimale :
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {currentGuide.proTip}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Apps & Support Helper */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black/60 border border-white/10 shadow-xl">
              <Image
                src={currentGuide.image}
                alt={currentGuide.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f14] via-transparent to-transparent opacity-80" />
            </div>

            {/* Recommended Apps */}
            <div className="p-6 rounded-2xl bg-black/40 border border-white/[0.06] space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Applications Compatibles Certifiées :
              </h4>
              <div className="space-y-2">
                {currentGuide.recommendedApps.map((app, idx) => (
                  <div
                    key={idx}
                    className="px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs text-zinc-200"
                  >
                    <span>{app}</span>
                    <Icon icon="ph:check-bold" width={14} className="text-sky-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Assistance Banner */}
            <div className="p-6 rounded-2xl bg-[#15151c] border border-sky-500/30 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                <Icon icon="ph:whatsapp-logo-fill" width={16} />
                <span>Assistance à distance en direct</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Vous rencontrez une difficulté ? Notre équipe technique vous assiste en moins de 2 minutes sur WhatsApp pour finaliser votre installation.
              </p>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  `Bonjour ! J'ai besoin d'aide pour configurer mon IPTV sur : ${currentGuide.name}. Merci !`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-400 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-500/20"
              >
                <Icon icon="ph:whatsapp-logo-bold" width={16} />
                <span>Aide à l&apos;Installation WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
