"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { SITE_CONFIG } from "@/data/config";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [device, setDevice] = useState("Amazon Firestick 4K");
  const [inquiryType, setInquiryType] = useState("Nouvel Abonnement IPTV 4K");
  const [customNotes, setCustomNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let message = `Bonjour l'équipe ${SITE_CONFIG.brandName} !\n\n`;
    if (name.trim()) message += `• Nom / Prénom : ${name.trim()}\n`;
    message += `• Appareil : ${device}\n`;
    message += `• Sujet : ${inquiryType}\n`;
    if (customNotes.trim()) {
      message += `• Message : ${customNotes.trim()}\n`;
    }
    message += `\nMerci de m'orienter vers la meilleure solution.`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-6 sm:px-10 text-zinc-900 dark:text-white transition-colors">
      {/* 1. Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 text-zinc-900 dark:text-white text-xs font-mono tracking-wider">
          <Icon icon="ph:headset" width={14} />
          <span>Conciergerie VIP 24/7 • Ligne Directe</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-light text-zinc-950 dark:text-white tracking-tight">
          Contactez Notre Conciergerie
        </h1>

        <p className="text-zinc-600 dark:text-[#a0a0a0] text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
          Une question sur nos bouquets, une demande d&apos;essai gratuit 24h, ou besoin d&apos;assistance pour l&apos;installation de votre application ? Notre équipe vous répond immédiatement.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info Sidebar */}
        <div className="space-y-4">
          <div className="p-6 rounded-3xl bg-white dark:bg-[#151515] border border-black/10 dark:border-white/10 space-y-4 shadow-xl shadow-black/5 dark:shadow-none">
            <h3 className="font-semibold text-zinc-950 dark:text-white text-base">Canaux Directs</h3>

            <div className="space-y-3 text-xs">
              <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/5 border border-black/5 dark:border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-zinc-950 dark:text-white font-medium">
                  <Icon icon="ph:paper-plane-tilt" width={16} />
                  <span>Conciergerie en Ligne 24/7</span>
                </div>
                <p className="text-zinc-600 dark:text-[#a0a0a0] font-light">
                  Activation instantanée, aide à l&apos;installation et support technique.
                </p>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                      "Bonjour ! J'ai besoin d'une assistance pour mon abonnement IPTV."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-[#f2f2f2] text-xs font-semibold shadow-md active:scale-95"
                  >
                    <Icon icon="ph:paper-plane-tilt" width={14} />
                    <span>Lancer la Conversation Directe</span>
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 space-y-1">
                <span className="text-zinc-500 dark:text-[#a0a0a0]/70 block text-[11px] font-mono">Ligne Client :</span>
                <span className="text-zinc-950 dark:text-white font-mono font-semibold text-xs">
                  {SITE_CONFIG.whatsappDisplayNumber}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 space-y-1">
                <span className="text-zinc-500 dark:text-[#a0a0a0]/70 block text-[11px] font-mono">Email Support :</span>
                <span className="text-zinc-950 dark:text-white font-mono text-xs">
                  {SITE_CONFIG.supportEmail}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 space-y-1">
                <span className="text-zinc-500 dark:text-[#a0a0a0]/70 block text-[11px] font-mono">Disponibilité :</span>
                <span className="text-zinc-950 dark:text-white font-medium">
                  7 Jours sur 7 • 24 Heures sur 24
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Message Composer */}
        <div className="lg:col-span-2 rounded-3xl bg-white dark:bg-[#151515] border border-black/10 dark:border-white/10 p-6 sm:p-10 space-y-6 shadow-xl shadow-black/5 dark:shadow-none">
          <div className="space-y-1 border-b border-black/10 dark:border-white/10 pb-4">
            <h2 className="text-xl sm:text-2xl font-light text-zinc-950 dark:text-white tracking-tight">
              Transmettre Votre Demande
            </h2>
            <p className="text-xs text-zinc-600 dark:text-[#a0a0a0] font-light">
              Remplissez les détails ci-dessous. En cliquant sur le bouton, votre message sera transmis directement à un conseiller technique.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-900 dark:text-white">
                  Votre Nom ou Prénom (Facultatif)
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex : Alexandre"
                  className="w-full bg-zinc-50 dark:bg-[#080808] border border-black/10 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs text-zinc-950 dark:text-white placeholder-zinc-400 dark:placeholder-[#a0a0a0]/50 focus:outline-none focus:border-black/30 dark:focus:border-white/40"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-900 dark:text-white">
                  Votre Appareil
                </label>
                <select
                  value={device}
                  onChange={(e) => setDevice(e.target.value)}
                  className="w-full bg-zinc-50 dark:bg-[#080808] border border-black/10 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs text-zinc-950 dark:text-white focus:outline-none focus:border-black/30 dark:focus:border-white/40"
                >
                  <option value="Amazon Firestick 4K">Amazon Firestick 4K</option>
                  <option value="Smart TV Samsung / LG">Smart TV Samsung / LG</option>
                  <option value="Apple TV 4K">Apple TV 4K</option>
                  <option value="Android Box / Shield TV">Android Box / Shield TV</option>
                  <option value="MAG / Formuler Box">MAG / Formuler Box</option>
                  <option value="PC Windows / Mac">PC Windows / Mac</option>
                  <option value="Smartphone (iOS / Android)">Smartphone (iOS / Android)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-900 dark:text-white">
                Objet de votre demande
              </label>
              <select
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                className="w-full bg-zinc-50 dark:bg-[#080808] border border-black/10 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs text-zinc-950 dark:text-white focus:outline-none focus:border-black/30 dark:focus:border-white/40"
              >
                <option value="Nouvel Abonnement IPTV 4K">Souscrire un Nouvel Abonnement (1, 3, 6, 12 Mois)</option>
                <option value="Demande d'Essai Gratuit 24H">Demande d&apos;Essai Gratuit 24H</option>
                <option value="Programme Revendeur IPTV">Devenir Revendeur IPTV (Packs Crédits)</option>
                <option value="Aide à la Configuration">Aide à la Configuration / Tutoriel</option>
                <option value="Autre Demande">Autre Question</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-900 dark:text-white">
                Votre Message ou Question
              </label>
              <textarea
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                rows={4}
                placeholder="Précisez votre demande ou vos questions particulières..."
                className="w-full bg-zinc-50 dark:bg-[#080808] border border-black/10 dark:border-white/10 rounded-xl p-4 text-xs text-zinc-950 dark:text-white placeholder-zinc-400 dark:placeholder-[#a0a0a0]/50 focus:outline-none focus:border-black/30 dark:focus:border-white/40"
              />
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-[#f2f2f2] text-xs font-semibold tracking-wide transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Icon icon="ph:paper-plane-tilt" width={18} />
                <span>Envoyer ma Demande Immédiatement</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
