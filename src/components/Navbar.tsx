"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { SITE_CONFIG } from "@/data/config";
import { useLanguage, Language } from "@/context/LanguageContext";

export interface NavbarProps {
  onSelectMedia?: (item?: any) => void;
}

export function Navbar({ onSelectMedia }: NavbarProps = {}) {
  const pathname = usePathname();
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
    setLangDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY && !mobileMenuOpen) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.channels, href: "/chaines" },
    { label: t.nav.pricing, href: "/tarifs" },
    { label: t.nav.devices, href: "/appareils" },
    { label: t.nav.freeTrial, href: "/essai-gratuit" },
    { label: t.nav.faq, href: "/faq" },
    { label: t.nav.contact, href: "/contact" },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "ar", label: "العربية", flag: "🇲🇦" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 transform ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled || mobileMenuOpen
            ? "bg-[#07070a]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/60 py-3.5"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group tracking-tight"
          >
            <span className="text-xl sm:text-2xl font-black tracking-widest text-white group-hover:text-sky-400 transition-colors uppercase">
              {SITE_CONFIG.brandName}
            </span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-400 border border-sky-500/30">
              IPTV
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs xl:text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? "text-sky-400 font-semibold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-sky-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Language Switcher + CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-xs font-medium text-zinc-300 hover:text-white transition-colors"
                aria-label="Changer de langue"
              >
                <Icon icon="ph:globe" width={15} className="text-sky-400" />
                <span className="uppercase">{language}</span>
                <Icon icon="ph:caret-down" width={12} />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 py-1.5 rounded-xl bg-[#0f0f14] border border-white/10 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3.5 py-2 text-xs transition-colors ${
                        language === lang.code
                          ? "text-sky-400 bg-sky-500/10 font-semibold"
                          : "text-zinc-300 hover:bg-white/[0.05] hover:text-white"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </span>
                      {language === lang.code && (
                        <Icon icon="ph:check-bold" width={12} />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Trial CTA button */}
            <Link
              href="/essai-gratuit"
              className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-semibold text-white transition-all duration-200"
            >
              {t.nav.freeTrial}
            </Link>

            {/* Primary Order CTA */}
            <Link
              href="/tarifs"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-black font-bold text-xs shadow-lg shadow-sky-500/25 transition-all duration-200 active:scale-95 group"
            >
              <span>{t.nav.orderNow}</span>
              <Icon
                icon="ph:arrow-right-bold"
                width={12}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2.5 lg:hidden">
            {/* Quick Lang Switch */}
            <button
              onClick={() => {
                const nextLang: Language =
                  language === "fr" ? "en" : language === "en" ? "ar" : "fr";
                setLanguage(nextLang);
              }}
              className="px-2 py-1 rounded bg-white/[0.05] border border-white/[0.08] text-[11px] font-semibold text-sky-400 uppercase"
            >
              {language}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.08] text-zinc-300 hover:text-white"
              aria-label="Toggle menu"
            >
              <Icon
                icon={mobileMenuOpen ? "ph:x-bold" : "ph:list-bold"}
                width={20}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#07070a]/95 backdrop-blur-2xl lg:hidden pt-24 px-6 pb-10 flex flex-col justify-between animate-in fade-in duration-200">
          <nav className="space-y-4">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2.5 text-base font-semibold transition-colors ${
                    isActive ? "text-sky-400" : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="space-y-3 pt-6 border-t border-white/[0.08]">
            <Link
              href="/essai-gratuit"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-3 text-center rounded-xl bg-white/[0.08] text-white font-semibold text-sm border border-white/10"
            >
              {t.nav.freeTrial}
            </Link>
            <Link
              href="/tarifs"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-3 text-center rounded-xl bg-sky-500 text-black font-bold text-sm shadow-lg shadow-sky-500/25"
            >
              {t.nav.orderNow}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
