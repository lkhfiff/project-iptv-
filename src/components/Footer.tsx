"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { SITE_CONFIG, generateDirectContactUrl } from "@/data/config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#080808] dark:bg-[#080808] border-t border-white/10 pt-16 pb-12 overflow-hidden text-[#a0a0a0] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <span className="text-2xl font-light tracking-[0.25em] text-white font-sans">
                NOUDINE
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#a0a0a0] leading-relaxed max-w-sm font-light">
              {SITE_CONFIG.brandDescription}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span>18 Nœuds CDN Actifs • 99.99% Uptime Garanti</span>
            </div>

            <div className="pt-2">
              <a
                href={generateDirectContactUrl("Contact Direct Conciergerie")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black hover:bg-[#f2f2f2] text-xs font-semibold tracking-wide transition-all shadow-md active:scale-95"
              >
                <Icon icon="ph:paper-plane-tilt" width={15} />
                <span>Contacter la Conciergerie VIP</span>
              </a>
            </div>
          </div>

          {/* Entertainment */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Catalogue &amp; Médias
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <Link href="/live-tv" className="hover:text-white transition-colors">
                  Chaînes Directes (28k+)
                </Link>
              </li>
              <li>
                <Link href="/movies" className="hover:text-white transition-colors">
                  Films 4K Ultra HD
                </Link>
              </li>
              <li>
                <Link href="/series" className="hover:text-white transition-colors">
                  Séries &amp; Épisodes Complets
                </Link>
              </li>
              <li>
                <Link href="/sports" className="hover:text-white transition-colors">
                  Sports en Direct &amp; Derbies
                </Link>
              </li>
              <li>
                <Link href="/devices" className="hover:text-white transition-colors">
                  Appareils Compatibles
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Rapide */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/abonnements" className="hover:text-white transition-colors">
                  Nos Abonnements
                </Link>
              </li>
              <li>
                <Link href="/essai-gratuit" className="hover:text-white transition-colors text-white underline underline-offset-4">
                  Essai Gratuit 24H
                </Link>
              </li>
              <li>
                <Link href="/revendeur" className="hover:text-white transition-colors">
                  Revendeur IPTV (Packs Grossiste)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Conciergerie
                </Link>
              </li>
            </ul>
          </div>

          {/* Concierge Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Ligne Directe VIP
            </h4>
            <div className="space-y-2 text-xs font-light">
              <p className="text-[#a0a0a0]">
                Activation instantanée, aide à la configuration à distance et assistance prioritaire 7j/7.
              </p>
              <div className="pt-1">
                <span className="text-[#a0a0a0]/60 block text-[11px] font-mono">Ligne Client :</span>
                <span className="font-mono text-white text-xs font-semibold">
                  {SITE_CONFIG.whatsappFormattedPhone}
                </span>
              </div>
              <div className="pt-1">
                <span className="text-[#a0a0a0]/60 block text-[11px] font-mono">Disponibilité :</span>
                <span className="text-white font-medium">24h / 24 • 7j / 7 Mondial</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 border-t border-white/10 space-y-4">
          <p className="text-[11px] text-[#a0a0a0]/60 leading-relaxed font-light">
            Avertissement : {SITE_CONFIG.businessName} est une interface de divertissement. Les métadonnées et affiches sont fournies par The Movie Database (TMDB). Tous les logos et marques appartiennent à leurs propriétaires respectifs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a0a0a0]">
            <p className="font-light">
              &copy; {currentYear} {SITE_CONFIG.brandName}. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4 text-[11px] font-mono text-[#a0a0a0]/70">
              <span>Anti-Freeze™ 9.9</span>
              <span>•</span>
              <span>Transport Chiffré SSL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
