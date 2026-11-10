"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { SITE_CONFIG } from "@/data/config";

export function FinalCTA() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Bonjour ${SITE_CONFIG.brandName} ! Je souhaite demander mon test gratuit 24H pour essayer vos chaînes 4K. Merci !`
  )}`;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="relative rounded-3xl p-8 sm:p-14 md:p-16 overflow-hidden border border-sky-500/30 bg-gradient-to-br from-[#0f172a] via-[#0b1329] to-[#07070a] shadow-2xl shadow-sky-500/15 text-center space-y-8">
          {/* Background Glow Accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-bold tracking-wider uppercase">
            <Icon icon="ph:lightning-fill" width={14} />
            <span>Activation Immédiate en 3 Minutes</span>
          </div>

          {/* Title */}
          <div className="space-y-3 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Commencez Votre Essai Gratuit Maintenant
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
              Testez notre flux sans aucun engagement pendant 24 heures. Recevez vos identifiants directement sur votre WhatsApp ou par Email.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/essai-gratuit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-sky-500 hover:bg-sky-400 text-black font-extrabold text-sm sm:text-base shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 transition-all duration-300 active:scale-95 group"
            >
              <Icon icon="ph:play-circle-bold" width={20} />
              <span>Demander un Essai Gratuit 24H</span>
              <Icon
                icon="ph:arrow-right-bold"
                width={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm sm:text-base shadow-xl shadow-green-500/20 transition-all duration-300 active:scale-95"
            >
              <Icon icon="ph:whatsapp-logo-fill" width={20} />
              <span>Contacter sur WhatsApp</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 border-t border-white/[0.08]">
            <div className="flex items-center gap-1.5">
              <Icon icon="ph:check-circle-bold" width={14} className="text-emerald-400" />
              <span>Sans carte bancaire</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Icon icon="ph:check-circle-bold" width={14} className="text-emerald-400" />
              <span>Support WhatsApp 24/7</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Icon icon="ph:check-circle-bold" width={14} className="text-emerald-400" />
              <span>Garantie 0 Coupure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
