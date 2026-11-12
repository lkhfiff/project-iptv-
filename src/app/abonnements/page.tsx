"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { SUBSCRIPTION_PLANS } from "@/data/pricing";
import { PricingCard } from "@/components/PricingCard";
import { SITE_CONFIG } from "@/data/config";

export default function AbonnementsPage() {
  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-6 sm:px-10 text-zinc-900 dark:text-white transition-colors">
      {/* 1. Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-5xl font-light text-zinc-950 dark:text-white tracking-tight">
          Nos Abonnements IPTV
        </h1>

        <p className="text-zinc-600 dark:text-[#a0a0a0] text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
          Quatre formules compactes et transparentes. Accédez à l&apos;intégralité de notre bouquet : 28 500+ chaînes mondiales, 135 000+ films &amp; séries en 4K UHD, retransmissions sportives et technologie Anti-Freeze™ 9.9.
        </p>

        <div className="pt-2 flex justify-center">
          <Link
            href="/essai-gratuit"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 border border-black/10 dark:border-white/15 text-zinc-900 dark:text-white text-xs font-medium transition-all"
          >
            <Icon icon="ph:timer" width={14} />
            <span>Vous hésitez ? Demandez un Essai Gratuit 24H</span>
          </Link>
        </div>
      </div>

      {/* 2. 4 Compact Pricing Cards */}
      <div data-animate="pricing-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
        {SUBSCRIPTION_PLANS.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>

      {/* 3. Comparison Matrix Table */}
      <div data-animate="section" className="rounded-3xl bg-white dark:bg-[#151515] border border-black/10 dark:border-white/10 p-6 sm:p-10 space-y-6 shadow-xl shadow-black/5 dark:shadow-none">
        <div className="space-y-1">
          <h2 data-animate="title" className="text-xl sm:text-2xl font-light text-zinc-950 dark:text-white tracking-tight">
            Tableau Comparatif Détaillé
          </h2>
          <p className="text-xs text-zinc-600 dark:text-[#a0a0a0] font-light">
            Comparez les fonctionnalités, le nombre d&apos;écrans et la priorité serveur selon la durée choisie.
          </p>
        </div>

        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-black/10 dark:border-white/10 text-zinc-500 dark:text-[#a0a0a0]">
                <th className="py-3 pr-4 font-medium">Spécifications Techniques</th>
                <th className="py-3 px-3 text-center font-medium">1 Mois</th>
                <th className="py-3 px-3 text-center font-medium">3 Mois</th>
                <th className="py-3 px-3 text-center font-medium">6 Mois</th>
                <th className="py-3 px-3 text-center text-zinc-950 dark:text-white font-semibold">
                  12 Mois (Recommandé)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 dark:divide-white/5 font-light">
              <tr>
                <td className="py-3.5 pr-4 text-zinc-950 dark:text-white font-normal">Chaînes Directes Mondiales</td>
                <td className="py-3.5 px-3 text-center text-zinc-700 dark:text-[#f2f2f2]">28 500+</td>
                <td className="py-3.5 px-3 text-center text-zinc-700 dark:text-[#f2f2f2]">28 500+</td>
                <td className="py-3.5 px-3 text-center text-zinc-700 dark:text-[#f2f2f2]">28 500+</td>
                <td className="py-3.5 px-3 text-center text-zinc-950 dark:text-white font-medium">28 500+ (4K Prioritaire)</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-zinc-950 dark:text-white font-normal">Films &amp; Séries VOD</td>
                <td className="py-3.5 px-3 text-center text-zinc-700 dark:text-[#f2f2f2]">135 000+</td>
                <td className="py-3.5 px-3 text-center text-zinc-700 dark:text-[#f2f2f2]">135 000+</td>
                <td className="py-3.5 px-3 text-center text-zinc-700 dark:text-[#f2f2f2]">135 000+</td>
                <td className="py-3.5 px-3 text-center text-zinc-950 dark:text-white font-medium">135 000+ (4K HDR)</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-zinc-950 dark:text-white font-normal">Nombre d&apos;Écrans / Connexions</td>
                <td className="py-3.5 px-3 text-center text-zinc-700 dark:text-[#f2f2f2]">1 Écran</td>
                <td className="py-3.5 px-3 text-center text-zinc-700 dark:text-[#f2f2f2]">1 Écran</td>
                <td className="py-3.5 px-3 text-center text-zinc-700 dark:text-[#f2f2f2]">2 Écrans</td>
                <td className="py-3.5 px-3 text-center text-zinc-950 dark:text-white font-medium">Multi-Écrans Inclus</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-zinc-950 dark:text-white font-normal">Technologie Anti-Freeze™ 9.9</td>
                <td className="py-3.5 px-3 text-center text-zinc-700 dark:text-[#f2f2f2]">Standard</td>
                <td className="py-3.5 px-3 text-center text-zinc-700 dark:text-[#f2f2f2]">Standard</td>
                <td className="py-3.5 px-3 text-center text-zinc-700 dark:text-[#f2f2f2]">Prioritaire</td>
                <td className="py-3.5 px-3 text-center text-zinc-950 dark:text-white font-medium">Cluster Dédié 10Gbps</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-zinc-950 dark:text-white font-normal">Assistance Conciergerie VIP</td>
                <td className="py-3.5 px-3 text-center text-zinc-700 dark:text-[#f2f2f2]">Ligne Dédiée 24/7</td>
                <td className="py-3.5 px-3 text-center text-zinc-700 dark:text-[#f2f2f2]">Ligne Dédiée 24/7</td>
                <td className="py-3.5 px-3 text-center text-zinc-700 dark:text-[#f2f2f2]">Ligne Prioritaire</td>
                <td className="py-3.5 px-3 text-center text-zinc-950 dark:text-white font-medium">Configuration à Distance VIP</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Reseller link banner */}
      <div className="rounded-3xl bg-white dark:bg-[#151515] border border-black/10 dark:border-white/10 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-black/5 dark:shadow-none">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-xl font-light text-zinc-950 dark:text-white">Vous souhaitez revendre nos abonnements ?</h3>
          <p className="text-xs text-zinc-600 dark:text-[#a0a0a0] font-light">
            Découvrez nos packs de crédits revendeurs grossistes avec marges supérieures à 300%.
          </p>
        </div>
        <Link
          href="/revendeur"
          className="px-6 py-3 rounded-full bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-[#f2f2f2] text-xs font-semibold whitespace-nowrap transition-all shadow-md active:scale-95"
        >
          Découvrir l&apos;Espace Revendeur
        </Link>
      </div>
    </div>
  );
}

