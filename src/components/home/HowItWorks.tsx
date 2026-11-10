"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choisissez Votre Formule",
      subtitle: "1, 3, 6 ou 12 mois selon vos envies",
      description:
        "Sélectionnez le forfait adapté à votre foyer (1 ou 2 écrans simultanés) ou commencez par demander un test 24H gratuit pour vérifier la qualité de nos flux.",
      icon: "ph:credit-card-bold",
      accent: "text-sky-400",
      border: "border-sky-500/20",
      bg: "bg-sky-500/10",
    },
    {
      number: "02",
      title: "Recevez Vos Accès en 3 Minutes",
      subtitle: "Transmission instantanée par WhatsApp ou Email",
      description:
        "Dès votre commande validée, notre conciergerie génère vos identifiants Xtream Codes, votre lien M3U sécurisé et vous accompagne pas-à-pas.",
      icon: "ph:whatsapp-logo-bold",
      accent: "text-emerald-400",
      border: "border-emerald-500/20",
      bg: "bg-emerald-500/10",
    },
    {
      number: "03",
      title: "Installez et Profitez Immédiatement",
      subtitle: "Sur Smart TV, Firestick, Téléphone ou PC",
      description:
        "Téléchargez l'application recommandée (TiviMate, Smarters Pro, IBO Player) et plongez dans 28 500 chaînes 4K et 135 000 VOD sans aucune coupure.",
      icon: "ph:television-simple-bold",
      accent: "text-cyan-400",
      border: "border-cyan-500/20",
      bg: "bg-cyan-500/10",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#07070a]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold tracking-wider uppercase">
            <Icon icon="ph:lightning-bold" width={13} />
            <span>Mise en Service Express</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Comment Ça Marche ?
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light">
            De la commande à votre premier match en 4K UHD, tout est automatisé en moins de 3 minutes chrono.
          </p>
        </div>

        {/* 3 Steps with Connector */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-sky-500/20 via-emerald-500/20 to-cyan-500/20 -translate-y-8 z-0 pointer-events-none" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative z-10 p-8 rounded-3xl bg-[#0f0f14] border border-white/[0.06] hover:border-sky-500/40 transition-all duration-300 group hover:-translate-y-2 shadow-xl shadow-black/50"
            >
              {/* Step Number & Icon */}
              <div className="flex items-center justify-between pb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${step.border} ${step.bg} ${step.accent} group-hover:scale-110 transition-transform`}>
                  <Icon icon={step.icon} width={26} />
                </div>
                <span className="text-3xl font-black font-mono text-white/10 group-hover:text-sky-500/30 transition-colors">
                  {step.number}
                </span>
              </div>

              {/* Text */}
              <div className="space-y-2.5">
                <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
                  {step.title}
                </h3>
                <div className="text-xs font-semibold text-zinc-400">
                  {step.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed pt-1">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center pt-4">
          <Link
            href="/essai-gratuit"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-sky-500 hover:bg-sky-400 text-black font-extrabold text-sm shadow-xl shadow-sky-500/25 transition-all duration-300 group"
          >
            <span>Démarrer Maintenant avec un Test Gratuit</span>
            <Icon icon="ph:arrow-right-bold" width={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
