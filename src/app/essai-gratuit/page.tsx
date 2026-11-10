"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { SITE_CONFIG } from "@/data/config";

export default function EssaiGratuitPage() {
  const [device, setDevice] = useState("Amazon Firestick 4K");
  const [app, setApp] = useState("IPTV Smarters Pro");
  const [name, setName] = useState("");

  const devicesList = [
    { id: "firestick", name: "Amazon Firestick 4K / Lite", icon: "ph:fire-bold" },
    { id: "smart-tv", name: "Smart TV (Samsung / LG)", icon: "ph:television-bold" },
    { id: "apple-tv", name: "Apple TV 4K", icon: "ph:apple-logo-bold" },
    { id: "android", name: "Android Box / Xiaomi / Shield", icon: "ph:android-logo-bold" },
    { id: "mag", name: "MAG / Formuler (Stalker / MAC)", icon: "ph:hard-drives-bold" },
    { id: "mobile-pc", name: "Smartphone (iOS / Android) / PC Windows", icon: "ph:device-mobile-bold" },
  ];

  const appsList = [
    "IPTV Smarters Pro",
    "TiviMate IPTV",
    "IBO Player",
    "Net IPTV / Bay TV",
    "XCIPTV Player",
    "Lien M3U / VLC",
    "Je ne sais pas (Guide-moi)",
  ];

  const handleRequestTrial = (e: React.FormEvent) => {
    e.preventDefault();

    let message = `Bonjour ${SITE_CONFIG.businessName} !\n\n`;
    message += `Je souhaite recevoir un ESSAI GRATUIT 24H pour tester le service IPTV.\n\n`;
    if (name.trim()) {
      message += `• Nom / Prénom : ${name.trim()}\n`;
    }
    message += `• Mon Appareil : ${device}\n`;
    message += `• Application souhaitée : ${app}\n`;
    message += `• Format souhaité : Xtream Codes & Lien M3U\n\n`;
    message += `Merci de m'envoyer mes codes d'accès gratuits ainsi que le tutoriel d'installation.`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-6 sm:px-10 text-zinc-900 dark:text-white transition-colors">
      {/* 1. Header Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-5xl font-light text-zinc-950 dark:text-white tracking-tight">
          Demandez Votre Essai Gratuit 24H
        </h1>

        <p className="text-zinc-600 dark:text-[#a0a0a0] text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
          Découvrez la qualité exceptionnelle de notre serveur en conditions réelles : plus de 28 500 chaînes directes, 135 000 films &amp; séries en 4K UHD, et retransmissions sportives avec Anti-Freeze™ 9.9 sans coupure.
        </p>

        {/* 3 Guarantees Badge */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-zinc-700 dark:text-[#f2f2f2]/90">
          <div className="flex items-center gap-1.5">
            <Icon icon="ph:check-circle-fill" width={16} className="text-zinc-950 dark:text-white" />
            <span>0 € / Aucune Carte Bancaire</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Icon icon="ph:check-circle-fill" width={16} className="text-zinc-950 dark:text-white" />
            <span>Livraison en &lt; 3 Minutes</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Icon icon="ph:check-circle-fill" width={16} className="text-zinc-950 dark:text-white" />
            <span>Sans Renouvellement Automatique</span>
          </div>
        </div>
      </div>

      {/* 2. Interactive Request Form to WhatsApp */}
      <div className="max-w-4xl mx-auto rounded-3xl bg-white dark:bg-[#151515] border border-black/10 dark:border-white/12 p-6 sm:p-10 space-y-8 shadow-2xl shadow-black/5 dark:shadow-none">
        <div className="space-y-1 border-b border-black/10 dark:border-white/10 pb-4">
          <h2 className="text-xl sm:text-2xl font-light text-zinc-950 dark:text-white tracking-tight">
            Configurez Votre Ligne de Test
          </h2>
          <p className="text-xs text-zinc-600 dark:text-[#a0a0a0] font-light">
            Sélectionnez votre matériel afin que notre conciergerie vous prépare les identifiants optimisés pour votre écran.
          </p>
        </div>

        <form onSubmit={handleRequestTrial} className="space-y-6">
          {/* Optional Name */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-zinc-900 dark:text-white block">
              Votre Prénom ou Pseudo (Facultatif)
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Thomas, Karim, Sophie..."
              className="w-full bg-zinc-50 dark:bg-[#080808] border border-black/10 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs text-zinc-950 dark:text-white placeholder-zinc-400 dark:placeholder-[#a0a0a0]/50 focus:outline-none focus:border-black/30 dark:focus:border-white/40"
            />
          </div>

          {/* Device Selection */}
          <div className="space-y-2.5">
            <label className="text-xs font-medium text-zinc-900 dark:text-white block">
              1. Choisissez votre appareil de streaming
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {devicesList.map((d) => {
                const isSelected = device === d.name;
                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setDevice(d.name)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                      isSelected
                        ? "bg-black text-white border-black font-semibold shadow-lg scale-[1.01] dark:bg-white dark:text-black dark:border-white"
                        : "bg-zinc-50 dark:bg-[#080808] border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 text-zinc-800 dark:text-[#f2f2f2]"
                    }`}
                  >
                    <Icon icon={d.icon} width={20} className={isSelected ? "text-white dark:text-black" : "text-zinc-500 dark:text-[#a0a0a0]"} />
                    <span className="text-xs truncate">{d.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* App Selection */}
          <div className="space-y-2.5">
            <label className="text-xs font-medium text-zinc-900 dark:text-white block">
              2. Application préférée installée
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {appsList.map((a) => {
                const isSelected = app === a;
                return (
                  <button
                    key={a}
                    type="button"
                    onClick={() => setApp(a)}
                    className={`px-3 py-2 rounded-xl border text-center transition-all cursor-pointer text-xs truncate ${
                      isSelected
                        ? "bg-black text-white border-black font-semibold shadow-md dark:bg-white dark:text-black dark:border-white"
                        : "bg-zinc-50 dark:bg-[#080808] border-black/10 dark:border-white/10 hover:border-black/25 dark:hover:border-white/25 text-zinc-600 dark:text-[#a0a0a0]"
                    }`}
                  >
                    {a}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Direct CTA */}
          <div className="pt-4 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-zinc-600 dark:text-[#a0a0a0]">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-900 dark:bg-white animate-pulse" />
              <span>Conciergerie en ligne • Réponse en &lt; 2 minutes</span>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-[#f2f2f2] text-xs font-semibold tracking-wide transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Icon icon="ph:paper-plane-tilt" width={18} />
              <span>Recevoir Mon Essai Gratuit 24H</span>
            </button>
          </div>
        </form>
      </div>

      {/* 3. How It Works (3 Steps) */}
      <div className="space-y-8 max-w-5xl mx-auto">
        <div className="text-center space-y-1">
          <span className="text-xs uppercase font-mono tracking-widest text-zinc-500 dark:text-[#a0a0a0]">
            Fonctionnement
          </span>
          <h2 className="text-2xl sm:text-3xl font-light text-zinc-950 dark:text-white tracking-tight">
            Comment activer votre test en 3 étapes ?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#151515] border border-black/10 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-none space-y-3">
            <div className="w-9 h-9 rounded-xl bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 flex items-center justify-center font-mono text-sm font-semibold text-zinc-950 dark:text-white">
              01
            </div>
            <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">Demande en Ligne</h3>
            <p className="text-xs text-zinc-600 dark:text-[#a0a0a0] font-light leading-relaxed">
              Cliquez sur le bouton ci-dessus pour transmettre votre demande à notre conciergerie VIP.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#151515] border border-black/10 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-none space-y-3">
            <div className="w-9 h-9 rounded-xl bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 flex items-center justify-center font-mono text-sm font-semibold text-zinc-950 dark:text-white">
              02
            </div>
            <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">Réception Immédiate</h3>
            <p className="text-xs text-zinc-600 dark:text-[#a0a0a0] font-light leading-relaxed">
              En moins de 3 minutes, un agent vous transmet vos codes Xtream (Serveur, Nom d&apos;utilisateur, Mot de passe) et votre lien M3U.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#151515] border border-black/10 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-none space-y-3">
            <div className="w-9 h-9 rounded-xl bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 flex items-center justify-center font-mono text-sm font-semibold text-zinc-950 dark:text-white">
              03
            </div>
            <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">Visionnage 4K Illimité</h3>
            <p className="text-xs text-zinc-600 dark:text-[#a0a0a0] font-light leading-relaxed">
              Connectez-vous sur votre application et profitez de l&apos;intégralité du bouquet mondial pendant 24 heures sans coupure.
            </p>
          </div>
        </div>
      </div>

      {/* 4. FAQ Test Gratuit */}
      <div className="max-w-3xl mx-auto space-y-6 pt-6">
        <h3 className="text-xl font-light text-zinc-950 dark:text-white text-center">
          Questions Fréquentes sur le Test 24H
        </h3>

        <div className="space-y-3 text-xs">
          <div className="p-4 rounded-xl bg-white dark:bg-[#151515] border border-black/10 dark:border-white/10 shadow-sm space-y-1">
            <h4 className="font-semibold text-zinc-950 dark:text-white">Le test 24H est-il vraiment 100% gratuit ?</h4>
            <p className="text-zinc-600 dark:text-[#a0a0a0] font-light">
              Oui, absolument. Nous ne vous demanderons jamais de carte bancaire pour le test. C&apos;est un accès complet de démonstration sans aucun engagement.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-[#151515] border border-black/10 dark:border-white/10 shadow-sm space-y-1">
            <h4 className="font-semibold text-zinc-950 dark:text-white">Ai-je accès à tout le catalogue pendant les 24h ?</h4>
            <p className="text-zinc-600 dark:text-[#a0a0a0] font-light">
              Oui, vous avez exactement le même flux que nos abonnés VIP : chaînes sportives en direct, cinéma 4K, séries et VOD complètes.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-[#151515] border border-black/10 dark:border-white/10 shadow-sm space-y-1">
            <h4 className="font-semibold text-zinc-950 dark:text-white">Que se passe-t-il après les 24 heures ?</h4>
            <p className="text-zinc-600 dark:text-[#a0a0a0] font-light">
              La ligne de test s&apos;arrête automatiquement. Si l&apos;expérience vous a convaincu, vous pouvez commander un abonnement de 1, 3, 6 ou 12 mois directement auprès du concierge sans réinstaller votre application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

