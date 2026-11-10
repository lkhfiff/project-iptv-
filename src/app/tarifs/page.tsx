"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { SITE_CONFIG, generateSubscriptionOrderUrl } from "@/data/config";

export default function PricingPage() {
  const [screens, setScreens] = useState<1 | 2>(1);

  const plans = [
    {
      id: "plan-1m",
      title: "1 Mois Découverte",
      duration: "1 Mois",
      price1Screen: "12 €",
      price2Screens: "19 €",
      period: "/mois",
      originalPrice: "19 €",
      badge: "Formule Découverte",
      isPopular: false,
      features: [
        "28 500+ Chaînes Directes en 4K UHD",
        "135 000+ Films & Séries VOD",
        "Bouquets Sportifs & Retransmissions Live",
        "Technologie Anti-Freeze™ 9.9",
        "Assistance WhatsApp VIP 24/7",
        `${screens} Écran${screens > 1 ? "s Simultanés" : " Actif"}`,
      ],
    },
    {
      id: "plan-3m",
      title: "3 Mois Trimestriel",
      duration: "3 Mois",
      price1Screen: "25 €",
      price2Screens: "39 €",
      period: "/3 mois",
      originalPrice: "36 €",
      badge: "Économie 30%",
      isPopular: false,
      features: [
        "28 500+ Chaînes Directes en 4K UHD",
        "135 000+ Films & Séries VOD",
        "Priorité Bande Passante CDN 10 Gbps",
        "Replay 7 Jours & Guide EPG",
        "Technologie Anti-Freeze™ 9.9",
        `${screens} Écran${screens > 1 ? "s Simultanés" : " Actif"}`,
      ],
    },
    {
      id: "plan-6m",
      title: "6 Mois Semestriel",
      duration: "6 Mois",
      price1Screen: "39 €",
      price2Screens: "55 €",
      period: "/6 mois",
      originalPrice: "72 €",
      badge: "Économie 45%",
      isPopular: false,
      features: [
        "28 500+ Chaînes Directes en 4K UHD",
        "135 000+ Films & Séries VOD",
        "Serveur Ultra-Rapide Dédié",
        "Toutes Compétitions Sportives Live",
        "Support Prioritaire par Téléphone & WhatsApp",
        `${screens} Écran${screens > 1 ? "s Simultanés" : " Actif"}`,
      ],
    },
    {
      id: "plan-12m",
      title: "12 Mois Pass Annuel VIP",
      duration: "12 Mois",
      price1Screen: "59 €",
      price2Screens: "79 €",
      period: "/an",
      originalPrice: "144 €",
      badge: "Le Plus Populaire • Recommandé",
      isPopular: true,
      features: [
        "28 500+ Chaînes Directes en 4K UHD & 60FPS",
        "135 000+ Films & Séries VOD 4K",
        "Cluster CDN VIP avec Uptime 99.9%",
        "Configuration à Distance Offerte 1-to-1",
        "Mises à Jour Quotidiennes des Contenus",
        `${screens} Écran${screens > 1 ? "s Simultanés" : " Actif"} Inclus`,
      ],
    },
  ];

  const comparisonFeatures = [
    { name: "Qualité 4K UHD & 60 FPS", p1: true, p3: true, p6: true, p12: true },
    { name: "Nombre de Chaînes (+28 500)", p1: true, p3: true, p6: true, p12: true },
    { name: "Catalogue VOD (+135 000)", p1: true, p3: true, p6: true, p12: true },
    { name: "Technologie Anti-Freeze™ 9.9", p1: true, p3: true, p6: true, p12: true },
    { name: "Replay 7 Jours & EPG Direct", p1: false, p3: true, p6: true, p12: true },
    { name: "Bande Passante Prioritaire 10Gbps", p1: false, p3: true, p6: true, p12: true },
    { name: "Assistance VIP WhatsApp 24/7", p1: true, p3: true, p6: true, p12: true },
    { name: "Configuration à distance assistée", p1: false, p3: false, p6: true, p12: true },
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 space-y-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold tracking-wider uppercase">
            <Icon icon="ph:tag-bold" width={14} />
            <span>Offres &amp; Abonnements IPTV</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Des Formules Claires, Zéro Frais Cachés
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Profitez du meilleur service IPTV d&apos;Europe. Activation en 3 minutes après commande par WhatsApp ou Email.
          </p>

          {/* Screen Switcher */}
          <div className="pt-4 flex justify-center">
            <div className="p-1.5 rounded-2xl bg-[#0f0f14] border border-white/10 flex items-center gap-1">
              <button
                onClick={() => setScreens(1)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  screens === 1
                    ? "bg-sky-500 text-black shadow-md shadow-sky-500/25"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <Icon icon="ph:device-mobile-bold" width={16} />
                <span>1 Écran Actif</span>
              </button>
              <button
                onClick={() => setScreens(2)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  screens === 2
                    ? "bg-sky-500 text-black shadow-md shadow-sky-500/25"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <Icon icon="ph:devices-bold" width={16} />
                <span>2 Écrans Simultanés</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan) => {
            const currentPrice =
              screens === 1 ? plan.price1Screen : plan.price2Screens;
            const orderUrl = generateSubscriptionOrderUrl({
              planTitle: plan.title,
              duration: plan.duration,
              price: currentPrice,
              connections: screens,
            });

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl transition-all duration-300 ${
                  plan.isPopular
                    ? "bg-[#0f0f18] border-2 border-sky-400 shadow-2xl shadow-sky-500/20 lg:-translate-y-4"
                    : "bg-[#0f0f14] border border-white/[0.08] hover:border-white/20 hover:-translate-y-1"
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 text-black font-black text-[11px] uppercase tracking-wider shadow-lg shadow-sky-500/30 whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-5">
                  <div className="space-y-1">
                    {!plan.isPopular && (
                      <span className="text-[11px] font-semibold text-sky-400 uppercase tracking-wide">
                        {plan.badge}
                      </span>
                    )}
                    <h3 className="text-xl font-black text-white">
                      {plan.title}
                    </h3>
                  </div>

                  <div className="space-y-1 border-b border-white/[0.08] pb-5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-white">
                        {currentPrice}
                      </span>
                      <span className="text-xs text-zinc-400">
                        {plan.period}
                      </span>
                    </div>
                    {plan.originalPrice && (
                      <div className="text-xs text-zinc-500 line-through">
                        Prix normal : {plan.originalPrice}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2.5 pt-1">
                    {plan.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2.5 text-xs text-zinc-300"
                      >
                        <Icon
                          icon="ph:check-bold"
                          width={14}
                          className="text-sky-400 shrink-0 mt-0.5"
                        />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <a
                    href={orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 group ${
                      plan.isPopular
                        ? "bg-sky-500 hover:bg-sky-400 text-black shadow-lg shadow-sky-500/30 font-extrabold"
                        : "bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10"
                    }`}
                  >
                    <Icon icon="ph:whatsapp-logo-bold" width={16} />
                    <span>Choisir ce Plan</span>
                    <Icon
                      icon="ph:arrow-right-bold"
                      width={12}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                  <div className="text-[10px] text-zinc-500 text-center pt-2">
                    Activation instantanée &lt; 3 minutes
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Table */}
        <div className="pt-10 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Tableau Comparatif Détaillé
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Découvrez en un clin d&apos;œil ce qui est inclus dans chaque formule.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/[0.08] bg-[#0f0f14]">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/[0.08] text-zinc-400 bg-white/[0.02]">
                  <th className="p-4 sm:p-5 font-semibold text-white">Fonctionnalités</th>
                  <th className="p-4 sm:p-5 text-center font-semibold">1 Mois</th>
                  <th className="p-4 sm:p-5 text-center font-semibold">3 Mois</th>
                  <th className="p-4 sm:p-5 text-center font-semibold">6 Mois</th>
                  <th className="p-4 sm:p-5 text-center font-bold text-sky-400">12 Mois VIP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {comparisonFeatures.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-5 font-medium text-zinc-200">
                      {row.name}
                    </td>
                    <td className="p-4 sm:p-5 text-center">
                      {row.p1 ? (
                        <Icon icon="ph:check-bold" width={16} className="text-sky-400 mx-auto" />
                      ) : (
                        <Icon icon="ph:minus" width={16} className="text-zinc-600 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 sm:p-5 text-center">
                      {row.p3 ? (
                        <Icon icon="ph:check-bold" width={16} className="text-sky-400 mx-auto" />
                      ) : (
                        <Icon icon="ph:minus" width={16} className="text-zinc-600 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 sm:p-5 text-center">
                      {row.p6 ? (
                        <Icon icon="ph:check-bold" width={16} className="text-sky-400 mx-auto" />
                      ) : (
                        <Icon icon="ph:minus" width={16} className="text-zinc-600 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 sm:p-5 text-center bg-sky-500/[0.03]">
                      <Icon icon="ph:check-bold" width={18} className="text-sky-400 mx-auto font-black" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Free trial teaser */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-sky-950/40 via-[#0f0f18] to-sky-950/40 border border-sky-500/20 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Vous hésitez encore ? Testez gratuitement pendant 24H
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto">
            Nous mettons à votre disposition une ligne d&apos;essai complète pour vérifier la stabilité de nos flux sur vos chaînes favorites.
          </p>
          <div className="pt-2">
            <Link
              href="/essai-gratuit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black hover:bg-zinc-200 font-bold text-xs shadow-lg transition-all"
            >
              <span>Demander mon test 24H gratuit</span>
              <Icon icon="ph:arrow-right-bold" width={13} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

