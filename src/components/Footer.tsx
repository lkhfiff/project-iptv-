"use client";

import React from "react";
import Link from "next/link";
import { SITE_CONFIG, generateDirectContactUrl } from "@/data/config";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterData {
  brand: string;
  description: string;
  columns: FooterColumn[];
  copyright: string;
  credits: string;
  wordmark: string;
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const data: FooterData = {
    brand: SITE_CONFIG.brandName,
    description:
      "Plateforme de divertissement ultra-premium. Accédez à plus de 28 500 chaînes directes mondiales, 135 000 films et séries en 4K UHD, retransmissions sportives et technologie Anti-Freeze™ 9.9.",
    columns: [
      {
        title: "Navigation",
        links: [
          { label: "Accueil", href: "/" },
          { label: "Abonnements VIP", href: "/abonnements" },
          { label: "Essai Gratuit 24h", href: "/essai-gratuit" },
          { label: "Contact Conciergerie", href: "/contact" },
        ],
      },
      {
        title: "Catalogue 4K",
        links: [
          { label: "Chaînes Directes (28k+)", href: "/live-tv" },
          { label: "Films 4K Ultra HD", href: "/movies" },
          { label: "Séries & Saisons VOD", href: "/series" },
          { label: "Sports & Matchs en Direct", href: "/sports" },
        ],
      },
      {
        title: "Plateforme",
        links: [
          { label: "Technologie Anti-Freeze™", href: "/#bento" },
          { label: "Appareils Compatibles", href: "/devices" },
          { label: "Packs Revendeur IPTV", href: "/revendeur" },
          { label: "Centre d'Aide & FAQ", href: "/faq" },
        ],
      },
      {
        title: "Communauté & VIP",
        links: [
          {
            label: "WhatsApp VIP Direct",
            href: generateDirectContactUrl("Contact Direct Conciergerie"),
            external: true,
          },
          { label: "Telegram Officiel", href: "https://t.me", external: true },
          { label: "Instagram VIP", href: "https://instagram.com", external: true },
          { label: "Twitter / X", href: "https://twitter.com", external: true },
        ],
      },
    ],
    copyright: `© ${currentYear} ${SITE_CONFIG.brandName}. Tous droits réservés.`,
    credits: "Infrastructure Privée 4K UHD • Transport Chiffré SSL",
    wordmark: SITE_CONFIG.brandName,
  };

  return (
    <footer
      data-animate="footer"
      className="relative w-full bg-[#0b0b0b] text-[#9ca3af] font-outfit overflow-hidden select-none transition-colors duration-300"
    >
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-12 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16">
        {/* Main Upper Row: Brand & Columns */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
          {/* Brand Info */}
          <div className="max-w-[340px] space-y-4">
            <Link
              href="/"
              className="inline-block group focus:outline-none focus:ring-1 focus:ring-white/20 rounded-md"
            >
              <span className="text-[28px] sm:text-[32px] font-bold text-white tracking-tight uppercase">
                {data.brand}
              </span>
            </Link>
            <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#9ca3af]">
              {data.description}
            </p>
          </div>

          {/* 4 Clean Columns */}
          <div className="w-full lg:w-auto grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
            {data.columns.map((column) => (
              <div key={column.title} className="space-y-4">
                <h4 className="text-white font-medium text-[15px] sm:text-[16px] tracking-tight">
                  {column.title}
                </h4>
                <ul className="space-y-3 list-none p-0 m-0">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#9ca3af] hover:text-white transition-colors duration-200 text-[14px] sm:text-[15px] leading-relaxed block"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-[#9ca3af] hover:text-white transition-colors duration-200 text-[14px] sm:text-[15px] leading-relaxed block"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="mt-20 sm:mt-24 lg:mt-28 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[13px] sm:text-[14px] text-[#71717a]">
          <p className="font-normal">{data.copyright}</p>
          <p className="font-normal">{data.credits}</p>
        </div>
      </div>

      {/* Signature Radiant White Giant Wordmark */}
      <div className="w-full overflow-hidden flex justify-center items-end select-none pointer-events-none pb-2 sm:pb-4">
        <div
          className="font-outfit font-extrabold uppercase tracking-[-0.04em] leading-[0.78] text-center whitespace-nowrap"
          style={{
            fontSize: "clamp(90px, 19.5vw, 320px)",
            background:
              "radial-gradient(ellipse 75% 85% at 50% 60%, #ffffff 0%, rgba(255, 255, 255, 0.95) 30%, rgba(255, 255, 255, 0.55) 55%, rgba(255, 255, 255, 0.2) 78%, rgba(255, 255, 255, 0.03) 94%, transparent 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            display: "inline-block",
            maxWidth: "100%",
          }}
        >
          {data.wordmark}
        </div>
      </div>
    </footer>
  );
}
