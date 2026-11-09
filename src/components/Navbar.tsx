"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { SITE_CONFIG, generateWhatsAppContactUrl } from "@/data/config";
import { SearchModal } from "./SearchModal";
import { MediaItem } from "@/data/media";

interface NavbarProps {
  onSelectMedia?: (item: MediaItem) => void;
}

export function Navbar({ onSelectMedia }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 250);
  };

  const whatsappUrl = generateWhatsAppContactUrl("Concierge Service");

  const subscriptionSublinks = [
    { label: "1 Mois • 12 €", href: "/abonnements#pricing", subtitle: "Formule Découverte" },
    { label: "3 Mois • 25 €", href: "/abonnements#pricing", subtitle: "Trimestriel Essentiel" },
    { label: "6 Mois • 39 €", href: "/abonnements#pricing", subtitle: "Semestriel Populaire" },
    { label: "12 Mois • 59 €", href: "/abonnements#pricing", subtitle: "Recommandé • VIP Pass", isRecommended: true },
    { label: "Voir tous les abonnements", href: "/abonnements", subtitle: "Tableau comparatif complet" },
  ];

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 px-4 sm:px-8 py-4 sm:py-5 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo on Left */}
          <Link
            href="/"
            className="flex items-center gap-2 group select-none transition-opacity hover:opacity-85"
          >
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white font-sans">
              AETHER<span className="text-[#a0a0a0] font-light">ARC</span>
            </span>
          </Link>

          {/* Centered Transparent Floating Pill Navigation - EXACTLY MATCHING USER REFERENCE */}
          <nav className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#151515]/75 backdrop-blur-2xl border border-white/12 shadow-2xl">
            {/* 1. Accueil */}
            <Link
              href="/"
              className={`px-3.5 py-1.5 rounded-full text-xs tracking-wide transition-all duration-200 ${
                pathname === "/"
                  ? "text-black bg-white font-semibold shadow-md"
                  : "text-[#a0a0a0] hover:text-white hover:bg-white/5 font-medium"
              }`}
            >
              Accueil
            </Link>

            {/* 2. abonnements ⌵ (with Dropdown) */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/abonnements"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`px-3.5 py-1.5 rounded-full text-xs tracking-wide transition-all duration-200 flex items-center gap-1 ${
                  pathname.startsWith("/abonnements") || pathname.startsWith("/pricing")
                    ? "text-black bg-white font-semibold shadow-md"
                    : "text-[#a0a0a0] hover:text-white hover:bg-white/5 font-medium"
                }`}
              >
                <span>abonnements</span>
                <Icon
                  icon="ph:caret-down"
                  width={12}
                  className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </Link>

              {/* Sub-menu Dropdown */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-[#151515]/95 backdrop-blur-2xl border border-white/12 p-2 shadow-2xl space-y-1 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 text-[10px] uppercase font-mono tracking-wider text-[#a0a0a0]/60 border-b border-white/5">
                    Formules Disponibles
                  </div>
                  {subscriptionSublinks.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      onClick={() => setDropdownOpen(false)}
                      className={`block px-3 py-2 rounded-xl text-xs transition-colors ${
                        sub.isRecommended
                          ? "bg-white/10 text-white font-semibold"
                          : "text-[#f2f2f2] hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{sub.label}</span>
                        {sub.isRecommended && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-white text-black font-bold">
                            TOP
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-[#a0a0a0] block font-light">
                        {sub.subtitle}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Essai Gratuit */}
            <Link
              href="/essai-gratuit"
              className={`px-3.5 py-1.5 rounded-full text-xs tracking-wide transition-all duration-200 flex items-center gap-1.5 ${
                pathname === "/essai-gratuit"
                  ? "text-black bg-white font-semibold shadow-md"
                  : "text-[#a0a0a0] hover:text-white hover:bg-white/5 font-medium"
              }`}
            >
              <span>Essai Gratuit</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </Link>

            {/* 4. Revendeur IPTV */}
            <Link
              href="/revendeur"
              className={`px-3.5 py-1.5 rounded-full text-xs tracking-wide transition-all duration-200 ${
                pathname === "/revendeur"
                  ? "text-black bg-white font-semibold shadow-md"
                  : "text-[#a0a0a0] hover:text-white hover:bg-white/5 font-medium"
              }`}
            >
              Revendeur IPTV
            </Link>

            {/* 5. Contact */}
            <Link
              href="/contact"
              className={`px-3.5 py-1.5 rounded-full text-xs tracking-wide transition-all duration-200 ${
                pathname === "/contact"
                  ? "text-black bg-white font-semibold shadow-md"
                  : "text-[#a0a0a0] hover:text-white hover:bg-white/5 font-medium"
              }`}
            >
              Contact
            </Link>

            {/* Search Icon */}
            <button
              onClick={() => setSearchModalOpen(true)}
              className="text-[#a0a0a0] hover:text-white p-1.5 ml-1 rounded-full hover:bg-white/5 cursor-pointer transition-colors"
              aria-label="Rechercher films et séries"
            >
              <Icon icon="ph:magnifying-glass" width={15} />
            </button>
          </nav>

          {/* WhatsApp Button on Right */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setSearchModalOpen(true)}
              className="md:hidden w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center"
              aria-label="Rechercher"
            >
              <Icon icon="ph:magnifying-glass" width={15} />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-white text-black hover:bg-[#f2f2f2] text-xs font-semibold tracking-wide transition-all shadow-md active:scale-95 flex items-center gap-1.5"
            >
              <Icon icon="ph:whatsapp-logo" width={15} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center cursor-pointer"
              aria-label="Menu"
            >
              <Icon icon={mobileMenuOpen ? "ph:x" : "ph:list"} width={16} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 max-w-7xl mx-auto bg-[#151515]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 space-y-2 animate-in fade-in duration-200">
            <Link
              href="/"
              className={`block px-4 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                pathname === "/" ? "bg-white text-black font-semibold" : "text-[#a0a0a0]"
              }`}
            >
              Accueil
            </Link>

            <div className="space-y-1 pl-2 border-l border-white/10">
              <Link
                href="/abonnements"
                className={`block px-4 py-2 rounded-xl text-xs font-medium transition-colors ${
                  pathname.startsWith("/abonnements") ? "text-white font-semibold" : "text-[#a0a0a0]"
                }`}
              >
                abonnements ⌵
              </Link>
              <div className="grid grid-cols-2 gap-1.5 pl-4 pb-2">
                <Link href="/abonnements#pricing" className="text-[11px] text-[#a0a0a0] hover:text-white py-1">
                  • 1 Mois (12 €)
                </Link>
                <Link href="/abonnements#pricing" className="text-[11px] text-[#a0a0a0] hover:text-white py-1">
                  • 3 Mois (25 €)
                </Link>
                <Link href="/abonnements#pricing" className="text-[11px] text-[#a0a0a0] hover:text-white py-1">
                  • 6 Mois (39 €)
                </Link>
                <Link href="/abonnements#pricing" className="text-[11px] text-white font-medium py-1">
                  • 12 Mois (59 €)
                </Link>
              </div>
            </div>

            <Link
              href="/essai-gratuit"
              className={`block px-4 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                pathname === "/essai-gratuit" ? "bg-white text-black font-semibold" : "text-[#a0a0a0]"
              }`}
            >
              Essai Gratuit
            </Link>

            <Link
              href="/revendeur"
              className={`block px-4 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                pathname === "/revendeur" ? "bg-white text-black font-semibold" : "text-[#a0a0a0]"
              }`}
            >
              Revendeur IPTV
            </Link>

            <Link
              href="/contact"
              className={`block px-4 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                pathname === "/contact" ? "bg-white text-black font-semibold" : "text-[#a0a0a0]"
              }`}
            >
              Contact
            </Link>
          </div>
        )}
      </header>

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectMedia={onSelectMedia}
      />
    </>
  );
}
