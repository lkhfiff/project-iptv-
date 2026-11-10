"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { SITE_CONFIG, generateDirectContactUrl } from "@/data/config";
import { useTheme } from "@/context/ThemeContext";
import { SearchModal } from "./SearchModal";
import { MediaItem } from "@/data/media";

interface NavbarProps {
  onSelectMedia?: (item: MediaItem) => void;
}

export function Navbar({ onSelectMedia }: NavbarProps) {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 250);
  };

  const conciergeUrl = generateDirectContactUrl("Accès Concierge VIP");

  const subscriptionSublinks = [
    { label: "1 Mois • 12 €", href: "/abonnements#pricing", subtitle: "Formule Découverte" },
    { label: "3 Mois • 25 €", href: "/abonnements#pricing", subtitle: "Trimestriel Essentiel" },
    { label: "6 Mois • 39 €", href: "/abonnements#pricing", subtitle: "Semestriel Populaire" },
    { label: "12 Mois • 59 €", href: "/abonnements#pricing", subtitle: "Recommandé • VIP Pass", isRecommended: true },
    { label: "Voir tous les abonnements", href: "/abonnements", subtitle: "Tableau comparatif complet" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 px-6 sm:px-10 lg:px-14 py-4 sm:py-5 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-white/90 dark:bg-[#080808]/90 backdrop-blur-xl border-b border-black/5 dark:border-white/5 shadow-lg shadow-black/5 dark:shadow-black/40"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* 1. Left Menu Links */}
          <nav className="hidden lg:flex items-center gap-7 flex-1 justify-start">
            <Link
              href="/"
              className={`text-xs tracking-wider transition-colors ${
                pathname === "/"
                  ? "text-zinc-950 dark:text-white font-semibold"
                  : "text-zinc-600 dark:text-[#a0a0a0] hover:text-black dark:hover:text-white"
              }`}
            >
              Accueil
            </Link>

            {/* abonnements ⌵ with Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/abonnements"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`text-xs tracking-wider transition-colors flex items-center gap-1 ${
                  pathname.startsWith("/abonnements") || pathname.startsWith("/pricing")
                    ? "text-zinc-950 dark:text-white font-semibold"
                    : "text-zinc-600 dark:text-[#a0a0a0] hover:text-black dark:hover:text-white"
                }`}
              >
                <span>Abonnements</span>
                <Icon
                  icon="ph:caret-down"
                  width={11}
                  className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </Link>

              {/* Sub-menu Dropdown */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-3 w-64 rounded-2xl bg-white/95 dark:bg-[#151515]/95 backdrop-blur-2xl border border-black/10 dark:border-white/12 p-2 shadow-2xl space-y-1 animate-in fade-in zoom-in-95 duration-150 z-50">
                  <div className="px-3 py-1.5 text-[10px] uppercase font-mono tracking-wider text-zinc-500 dark:text-[#a0a0a0]/60 border-b border-black/5 dark:border-white/5">
                    Formules Disponibles
                  </div>
                  {subscriptionSublinks.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      onClick={() => setDropdownOpen(false)}
                      className={`block px-3 py-2 rounded-xl text-xs transition-colors ${
                        sub.isRecommended
                          ? "bg-black/5 dark:bg-white/10 text-zinc-950 dark:text-white font-semibold"
                          : "text-zinc-700 dark:text-[#f2f2f2] hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{sub.label}</span>
                        {sub.isRecommended && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-black text-white dark:bg-white dark:text-black font-bold">
                            TOP
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-zinc-500 dark:text-[#a0a0a0] block font-light">
                        {sub.subtitle}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/essai-gratuit"
              className={`text-xs tracking-wider transition-colors flex items-center gap-1.5 ${
                pathname === "/essai-gratuit"
                  ? "text-zinc-950 dark:text-white font-semibold"
                  : "text-zinc-600 dark:text-[#a0a0a0] hover:text-black dark:hover:text-white"
              }`}
            >
              <span>Essai Gratuit</span>
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-white animate-pulse" />
            </Link>
          </nav>

          {/* 2. Brand Logo Dead Center - NOUDINE */}
          <Link
            href="/"
            className="flex items-center justify-center shrink-0 group select-none transition-opacity hover:opacity-85 px-4"
          >
            <span className="text-xl sm:text-2xl font-light tracking-[0.25em] text-zinc-950 dark:text-white font-sans">
              NOUDINE
            </span>
          </Link>

          {/* 3. Right Menu Links & Pill CTA */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7 flex-1 justify-end">
            <Link
              href="/revendeur"
              className={`text-xs tracking-wider transition-colors ${
                pathname === "/revendeur"
                  ? "text-zinc-950 dark:text-white font-semibold"
                  : "text-zinc-600 dark:text-[#a0a0a0] hover:text-black dark:hover:text-white"
              }`}
            >
              Revendeur IPTV
            </Link>

            <Link
              href="/contact"
              className={`text-xs tracking-wider transition-colors ${
                pathname === "/contact"
                  ? "text-zinc-950 dark:text-white font-semibold"
                  : "text-zinc-600 dark:text-[#a0a0a0] hover:text-black dark:hover:text-white"
              }`}
            >
              Contact
            </Link>

            <button
              onClick={() => setSearchModalOpen(true)}
              className="text-zinc-600 dark:text-[#a0a0a0] hover:text-black dark:hover:text-white p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer transition-colors"
              aria-label="Rechercher"
            >
              <Icon icon="ph:magnifying-glass" width={16} />
            </button>

            <button
              onClick={toggleTheme}
              className="text-zinc-600 dark:text-[#a0a0a0] hover:text-black dark:hover:text-white p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer transition-colors"
              aria-label="Thème"
              title={theme === "dark" ? "Mode Clair" : "Mode Sombre"}
            >
              <Icon icon={theme === "dark" ? "ph:sun-dim" : "ph:moon"} width={16} />
            </button>

            {/* Pill CTA button with arrow inside circle */}
            <Link
              href="/abonnements"
              className="pl-4 pr-1.5 py-1.5 rounded-full bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-[#f2f2f2] text-xs font-semibold tracking-wide transition-all shadow-lg active:scale-95 flex items-center gap-2.5 group/btn"
            >
              <span>Activer Mon Accès</span>
              <span className="w-6 h-6 rounded-full bg-white text-black dark:bg-black dark:text-white flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform">
                <Icon icon="ph:arrow-right" width={11} />
              </span>
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setSearchModalOpen(true)}
              className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white flex items-center justify-center"
              aria-label="Rechercher"
            >
              <Icon icon="ph:magnifying-glass" width={15} />
            </button>

            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white flex items-center justify-center"
              aria-label="Thème"
            >
              <Icon icon={theme === "dark" ? "ph:sun-dim" : "ph:moon"} width={15} />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white flex items-center justify-center cursor-pointer"
              aria-label="Menu"
            >
              <Icon icon={mobileMenuOpen ? "ph:x" : "ph:list"} width={16} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 max-w-7xl mx-auto bg-white/95 dark:bg-[#151515]/95 backdrop-blur-2xl border border-black/10 dark:border-white/10 rounded-2xl p-4 space-y-2 animate-in fade-in duration-200">
            <Link
              href="/"
              className={`block px-4 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                pathname === "/"
                  ? "bg-black text-white dark:bg-white dark:text-black font-semibold"
                  : "text-zinc-600 dark:text-[#a0a0a0]"
              }`}
            >
              Accueil
            </Link>
            <Link
              href="/abonnements"
              className={`block px-4 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                pathname.startsWith("/abonnements")
                  ? "bg-black text-white dark:bg-white dark:text-black font-semibold"
                  : "text-zinc-600 dark:text-[#a0a0a0]"
              }`}
            >
              Nos Abonnements
            </Link>
            <Link
              href="/essai-gratuit"
              className={`block px-4 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                pathname === "/essai-gratuit"
                  ? "bg-black text-white dark:bg-white dark:text-black font-semibold"
                  : "text-zinc-600 dark:text-[#a0a0a0]"
              }`}
            >
              Essai Gratuit 24H
            </Link>
            <Link
              href="/revendeur"
              className={`block px-4 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                pathname === "/revendeur"
                  ? "bg-black text-white dark:bg-white dark:text-black font-semibold"
                  : "text-zinc-600 dark:text-[#a0a0a0]"
              }`}
            >
              Revendeur IPTV
            </Link>
            <Link
              href="/contact"
              className={`block px-4 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                pathname === "/contact"
                  ? "bg-black text-white dark:bg-white dark:text-black font-semibold"
                  : "text-zinc-600 dark:text-[#a0a0a0]"
              }`}
            >
              Contact &amp; Conciergerie
            </Link>
            <div className="pt-2">
              <Link
                href="/abonnements"
                className="w-full py-2.5 rounded-xl bg-black text-white dark:bg-white dark:text-black font-semibold text-xs flex items-center justify-center gap-2"
              >
                <span>Activer Mon Accès</span>
                <Icon icon="ph:arrow-right" width={13} />
              </Link>
            </div>
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
