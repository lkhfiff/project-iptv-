"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SITE_CONFIG, generateDirectContactUrl } from "@/data/config";
import { useTheme } from "@/context/ThemeContext";
import { MediaItem } from "@/data/media";

interface NavbarProps {
  onSelectMedia?: (item: MediaItem) => void;
}

export function Navbar({ onSelectMedia }: NavbarProps) {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const conciergeUrl = generateDirectContactUrl("Accès Concierge VIP");

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

            {/* Simple direct click to Abonnements page */}
            <Link
              href="/abonnements"
              className={`text-xs tracking-wider transition-colors ${
                pathname.startsWith("/abonnements") || pathname.startsWith("/pricing")
                  ? "text-zinc-950 dark:text-white font-semibold"
                  : "text-zinc-600 dark:text-[#a0a0a0] hover:text-black dark:hover:text-white"
              }`}
            >
              Abonnements
            </Link>

            <Link
              href="/about"
              className={`text-xs tracking-wider transition-colors ${
                pathname === "/about"
                  ? "text-zinc-950 dark:text-white font-semibold"
                  : "text-zinc-600 dark:text-[#a0a0a0] hover:text-black dark:hover:text-white"
              }`}
            >
              <span>About</span>
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
              onClick={toggleTheme}
              className="text-zinc-600 dark:text-[#a0a0a0] hover:text-black dark:hover:text-white p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer transition-colors flex items-center justify-center overflow-hidden"
              aria-label="Thème"
              title={theme === "dark" ? "Mode Clair" : "Mode Sombre"}
            >
              <motion.span
                key={theme}
                initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center justify-center"
              >
                <Icon icon={theme === "dark" ? "ph:sun-dim" : "ph:moon"} width={16} />
              </motion.span>
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
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white flex items-center justify-center cursor-pointer transition-colors overflow-hidden"
              aria-label="Thème"
            >
              <motion.span
                key={theme}
                initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center justify-center"
              >
                <Icon icon={theme === "dark" ? "ph:sun-dim" : "ph:moon"} width={15} />
              </motion.span>
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
              href="/about"
              className={`block px-4 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                pathname === "/about"
                  ? "bg-black text-white dark:bg-white dark:text-black font-semibold"
                  : "text-zinc-600 dark:text-[#a0a0a0]"
              }`}
            >
              About
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
    </>
  );
}
