"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { SITE_CONFIG } from "@/data/config";

export default function RevendeurPage() {
  const [selectedPack, setSelectedPack] = useState("pro");

  const resellerPacks = [
    {
      id: "starter",
      name: "Pack Débutant",
      credits: 100,
      price: "250 €",
      pricePerCredit: "2.50 € / crédit",
      badge: "Lancement",
      isPopular: false,
      benefits: [
        "100 Crédits IPTV valides sans expiration",
        "Panneau de contrôle Xtream Codes inclus",
        "Création de tests 24h gratuits illimités",
        "Création d'abonnements 1, 3, 6 et 12 mois",
        "Assistance technique dédiée 24/7",
      ],
    },
    {
      id: "pro",
      name: "Pack Business Pro",
      credits: 250,
      price: "500 €",
      pricePerCredit: "2.00 € / crédit",
      badge: "Recommandé • Le Plus Vendu",
      isPopular: true,
      benefits: [
        "250 Crédits IPTV valides sans expiration",
        "Panneau VIP avec création de sous-revendeurs",
        "Tests 24h gratuits illimités pour vos clients",
        "Priorité CDN Anti-Freeze™ 9.9 sur tous vos flux",
        "Accès à l'ensemble du catalogue 4K UHD",
        "Support VIP dédié 1-to-1 en continu",
      ],
    },
    {
      id: "master",
      name: "Pack Master VIP",
      credits: 500,
      price: "850 €",
      pricePerCredit: "1.70 € / crédit",
      badge: "Marge Maximale",
      isPopular: false,
      benefits: [
        "500 Crédits IPTV avec coût unitaire minimal",
        "Marque Blanche Totale (Vos propres DNS / Portails)",
        "Gestion illimitée de sous-revendeurs",
        "Tests 24h gratuits illimités en haute priorité",
        "Ligne directe dédiée avec le responsable infrastructure",
        "Rentabilité et marge nette supérieure à 350%",
      ],
    },
  ];

  const handleJoinReseller = (packName: string, credits: number, price: string) => {
    let message = `Bonjour ${SITE_CONFIG.businessName} !\n\n`;
    message += `Je souhaite rejoindre votre PROGRAMME REVENDEUR IPTV officiel.\n\n`;
    message += `• Pack choisi : ${packName} (${credits} Crédits)\n`;
    message += `• Montant : ${price}\n\n`;
    message += `Pouvez-vous me transmettre les modalités de paiement et activer mon panneau de gestion IPTV ? Merci !`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-6 sm:px-10 text-zinc-900 dark:text-white transition-colors">
      {/* 1. Header Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-5xl font-light text-zinc-950 dark:text-white tracking-tight">
          Devenez Revendeur IPTV
        </h1>

        <p className="text-zinc-600 dark:text-[#a0a0a0] text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
          Générez des revenus récurrents et bâtissez votre propre marque de streaming grâce à notre panneau revendeur puissant, notre infrastructure Anti-Freeze™ 9.9 et nos marges supérieures à 300%.
        </p>

        {/* Reseller stats */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono text-zinc-800 dark:text-[#f2f2f2]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-white" />
            <span>Marge Nette : &gt; 300%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-white" />
            <span>Tests Gratuits Illimités</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-white" />
            <span>100% Marque Blanche</span>
          </div>
        </div>
      </div>

      {/* 2. Credit Packs Pricing */}
      <div className="space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs uppercase font-mono tracking-widest text-zinc-500 dark:text-[#a0a0a0]">
            Tarifs Grossiste
          </span>
          <h2 className="text-2xl sm:text-3xl font-light text-zinc-950 dark:text-white tracking-tight">
            Choisissez Votre Pack de Crédits
          </h2>
          <p className="text-xs text-zinc-600 dark:text-[#a0a0a0] font-light max-w-md mx-auto">
            1 Crédit = 1 Mois d&apos;abonnement. Vos crédits n&apos;expirent jamais et restent disponibles jusqu&apos;à leur utilisation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch pt-4">
          {resellerPacks.map((pack) => (
            <div
              key={pack.id}
              className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                pack.isPopular
                  ? "bg-white dark:bg-[#181818] border-2 border-zinc-950 dark:border-white/50 shadow-2xl ring-1 ring-zinc-950/20 dark:ring-white/30"
                  : "bg-white/80 dark:bg-[#151515] border border-black/10 dark:border-white/10 hover:border-black/25 dark:hover:border-white/25 shadow-xl shadow-black/5 dark:shadow-none"
              }`}
            >
              {/* Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span
                  className={`px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md ${
                    pack.isPopular
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "bg-black/5 dark:bg-white/10 text-zinc-800 dark:text-white/80 border border-black/10 dark:border-white/15 backdrop-blur-md"
                  }`}
                >
                  {pack.badge}
                </span>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-zinc-950 dark:text-white">{pack.name}</h3>
                  <div className="flex items-baseline gap-2 pt-1">
                    <span className="text-3xl sm:text-4xl font-light text-zinc-950 dark:text-white">{pack.price}</span>
                    <span className="text-xs text-zinc-500 dark:text-[#a0a0a0] font-mono">({pack.pricePerCredit})</span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-[#a0a0a0] font-mono">
                    {pack.credits} Crédits Inclus
                  </p>
                </div>

                {/* Benefits */}
                <div className="pt-4 border-t border-black/5 dark:border-white/10 space-y-2.5">
                  {pack.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-[#f2f2f2]/90 font-light">
                      <span className="w-3.5 h-3.5 rounded-full bg-black/5 dark:bg-white/10 text-zinc-900 dark:text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Icon icon="ph:check" width={10} />
                      </span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-black/5 dark:border-white/10 mt-6">
                <button
                  type="button"
                  onClick={() => handleJoinReseller(pack.name, pack.credits, pack.price)}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md active:scale-95 ${
                    pack.isPopular
                      ? "bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-[#f2f2f2]"
                      : "bg-black/5 hover:bg-black/10 text-zinc-900 border border-black/10 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:border-white/15"
                  }`}
                >
                  <Icon icon="ph:arrow-up-right" width={16} />
                  <span>Commander le {pack.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Reseller Benefits Grid */}
      <div className="space-y-8 max-w-5xl mx-auto pt-8">
        <div className="text-center space-y-1">
          <span className="text-xs uppercase font-mono tracking-widest text-zinc-500 dark:text-[#a0a0a0]">
            Avantages Clés
          </span>
          <h2 className="text-2xl sm:text-3xl font-light text-zinc-950 dark:text-white tracking-tight">
            Pourquoi Choisir Notre Plateforme Revendeur ?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#151515] border border-black/10 dark:border-white/10 shadow-sm space-y-2">
            <div className="w-8 h-8 rounded-xl bg-black/5 dark:bg-white/10 flex items-center justify-center text-zinc-900 dark:text-white">
              <Icon icon="ph:gauge" width={18} />
            </div>
            <h4 className="text-sm font-medium text-zinc-950 dark:text-white">Panneau Ultra-Rapide</h4>
            <p className="text-xs text-zinc-600 dark:text-[#a0a0a0] font-light leading-relaxed">
              Créez, modifiez ou suspendez des comptes IPTV en quelques secondes depuis votre ordinateur ou smartphone.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#151515] border border-black/10 dark:border-white/10 shadow-sm space-y-2">
            <div className="w-8 h-8 rounded-xl bg-black/5 dark:bg-white/10 flex items-center justify-center text-zinc-900 dark:text-white">
              <Icon icon="ph:sparkle" width={18} />
            </div>
            <h4 className="text-sm font-medium text-zinc-950 dark:text-white">Tests 24h Illimités</h4>
            <p className="text-xs text-zinc-600 dark:text-[#a0a0a0] font-light leading-relaxed">
              Générez autant de tests 24 heures gratuits que vous le souhaitez pour convaincre vos prospects sans dépenser de crédits.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#151515] border border-black/10 dark:border-white/10 shadow-sm space-y-2">
            <div className="w-8 h-8 rounded-xl bg-black/5 dark:bg-white/10 flex items-center justify-center text-zinc-900 dark:text-white">
              <Icon icon="ph:shield-check" width={18} />
            </div>
            <h4 className="text-sm font-medium text-zinc-950 dark:text-white">Anti-Freeze™ 9.9 Stable</h4>
            <p className="text-xs text-zinc-600 dark:text-[#a0a0a0] font-light leading-relaxed">
              Vos clients bénéficient d&apos;une stabilité garantie même lors des grands matchs de football et soirées Ligue des Champions.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#151515] border border-black/10 dark:border-white/10 shadow-sm space-y-2">
            <div className="w-8 h-8 rounded-xl bg-black/5 dark:bg-white/10 flex items-center justify-center text-zinc-900 dark:text-white">
              <Icon icon="ph:tag" width={18} />
            </div>
            <h4 className="text-sm font-medium text-zinc-950 dark:text-white">100% Marque Blanche</h4>
            <p className="text-xs text-zinc-600 dark:text-[#a0a0a0] font-light leading-relaxed">
              Notre nom n&apos;apparaît nulle part. Vous commercialisez vos abonnements sous votre propre nom avec votre propre marque.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#151515] border border-black/10 dark:border-white/10 shadow-sm space-y-2">
            <div className="w-8 h-8 rounded-xl bg-black/5 dark:bg-white/10 flex items-center justify-center text-zinc-900 dark:text-white">
              <Icon icon="ph:device-mobile-camera" width={18} />
            </div>
            <h4 className="text-sm font-medium text-zinc-950 dark:text-white">Toutes Applications Supportées</h4>
            <p className="text-xs text-zinc-600 dark:text-[#a0a0a0] font-light leading-relaxed">
              Compatible IPTV Smarters, TiviMate, IBO Player, XCIPTV, Smart IPTV, Formuler, MAG et liens M3U universels.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#151515] border border-black/10 dark:border-white/10 shadow-sm space-y-2">
            <div className="w-8 h-8 rounded-xl bg-black/5 dark:bg-white/10 flex items-center justify-center text-zinc-900 dark:text-white">
              <Icon icon="ph:headset" width={18} />
            </div>
            <h4 className="text-sm font-medium text-zinc-950 dark:text-white">Support VIP Revendeur 24/7</h4>
            <p className="text-xs text-zinc-600 dark:text-[#a0a0a0] font-light leading-relaxed">
              Un interlocuteur technique dédié pour vous accompagner, répondre à vos questions et résoudre vos demandes.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Bottom CTA Banner */}
      <div className="rounded-3xl bg-white dark:bg-[#151515] border border-black/10 dark:border-white/10 p-8 sm:p-12 text-center space-y-4 max-w-4xl mx-auto shadow-2xl shadow-black/5 dark:shadow-none">
        <h3 className="text-2xl sm:text-3xl font-light text-zinc-950 dark:text-white tracking-tight">
          Prêt à Lancer Votre Activité Revendeur ?
        </h3>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#a0a0a0] max-w-lg mx-auto font-light leading-relaxed">
          Contactez directement notre responsable revendeur pour poser vos questions, tester le panneau de démonstration ou commander votre premier pack.
        </p>

        <div className="pt-3 flex justify-center">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
              "Bonjour ! Je souhaite obtenir des informations pour devenir revendeur IPTV et tester le panneau de gestion."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-[#f2f2f2] text-xs font-semibold tracking-wide transition-all shadow-xl active:scale-95 flex items-center gap-2"
          >
            <Icon icon="ph:paper-plane-tilt" width={18} />
            <span>Contacter le Responsable Revendeur</span>
          </a>
        </div>
      </div>
    </div>
  );
}

