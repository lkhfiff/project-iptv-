"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SITE_CONFIG, generateSubscriptionOrderUrl } from "@/data/config";
import { useLanguage } from "@/context/LanguageContext";

export function PricingSection() {
  const { t } = useLanguage();
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
      badge: "Sans Engagement",
      isPopular: false,
      features: [
        "28 500+ Chaînes Directes en 4K UHD",
        "135 000+ Films & Séries VOD",
        "Tous les Bouquets Sportifs Inclus",
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
      period: "/trimestre",
      originalPrice: "36 €",
      badge: "Économie 30%",
      isPopular: false,
      features: [
        "28 500+ Chaînes Directes en 4K UHD",
        "135 000+ Films & Séries VOD",
        "Priorité Bande Passante 10 Gbps",
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
      title: "12 Mois Pass VIP",
      duration: "12 Mois",
      price1Screen: "59 €",
      price2Screens: "79 €",
      period: "/an",
      originalPrice: "144 €",
      badge: "Meilleure Offre • Recommandé",
      isPopular: true,
      features: [
        "28 500+ Chaînes Directes en 4K UHD & 60FPS",
        "135 000+ Films & Séries VOD 4K",
        "Cluster CDN VIP avec Uptime 99.9%",
        "Configuration à Distance Offerte",
        "Mises à Jour Quotidiennes des Contenus",
        `${screens} Écran${screens > 1 ? "s Simultanés" : " Actif"} Inclus`,
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-[#07070a]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-sky-500/10 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 space-y-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold tracking-wider uppercase">
            <Icon icon="ph:tag-bold" width={13} />
            <span>Tarification Transparente</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {t.pricing.title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light">
            {t.pricing.subtitle}
          </p>

          {/* 1 Screen vs 2 Screens Switcher */}
          <div className="pt-4 flex justify-center">
            <div className="p-1.5 rounded-2xl bg-[#0f0f14] border border-white/10 flex items-center gap-1">
              <button
                onClick={() => setScreens(1)}
                className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  screens === 1
                    ? "bg-sky-500 text-black shadow-md shadow-sky-500/25"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <Icon icon="ph:device-mobile-bold" width={16} />
                <span>{t.pricing.toggle1Screen}</span>
              </button>
              <button
                onClick={() => setScreens(2)}
                className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  screens === 2
                    ? "bg-sky-500 text-black shadow-md shadow-sky-500/25"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <Icon icon="ph:devices-bold" width={16} />
                <span>{t.pricing.toggle2Screens}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, idx) => {
            const currentPrice =
              screens === 1 ? plan.price1Screen : plan.price2Screens;
            const orderUrl = generateSubscriptionOrderUrl({
              planTitle: plan.title,
              duration: plan.duration,
              price: currentPrice,
              connections: screens,
            });

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl transition-all duration-300 ${
                  plan.isPopular
                    ? "bg-[#0f0f18] border-2 border-sky-400 shadow-2xl shadow-sky-500/20 lg:-translate-y-4"
                    : "bg-[#0f0f14] border border-white/[0.08] hover:border-white/20 hover:-translate-y-1"
                }`}
              >
                {/* Popular Badge */}
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
                    <h3 className="text-lg font-bold text-white">
                      {plan.title}
                    </h3>
                  </div>

                  {/* Pricing Display */}
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
                        Prix régulier : {plan.originalPrice}
                      </div>
                    )}
                  </div>

                  {/* Features Checklist */}
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

                {/* CTA Order Button */}
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
                    <span>{t.pricing.choosePlan}</span>
                    <Icon
                      icon="ph:arrow-right-bold"
                      width={12}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                  <div className="text-[10px] text-zinc-500 text-center pt-2">
                    Livraison instantanée par WhatsApp
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantee Footer */}
        <div className="pt-4 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs text-zinc-400">
            <Icon icon="ph:shield-check-bold" width={16} className="text-emerald-400" />
            <span>{t.pricing.guarantee}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
