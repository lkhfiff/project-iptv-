"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Menu,
  X,
  Tv,
  Film,
  Trophy,
  Sparkles,
  HelpCircle,
  Smartphone,
  Info,
  PhoneCall,
  Flame,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/config";
import { WhatsAppButton } from "./WhatsAppButton";
import { SearchModal } from "./SearchModal";
import { MediaItem } from "@/data/media";

interface NavbarProps {
  onSelectMedia?: (item: MediaItem) => void;
}

export function Navbar({ onSelectMedia }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = SITE_CONFIG.navigation;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-black/75 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
            : "py-5 bg-gradient-to-b from-black/80 via-black/40 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group select-none shrink-0"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 via-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-orange-500/25 group-hover:scale-105 transition-transform duration-300">
                <span className="text-black font-black text-lg tracking-tighter">Æ</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-xl font-black tracking-wider text-white">
                    AETHER
                  </span>
                  <span className="text-xl font-black text-orange-500">+</span>
                </div>
                <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-semibold -mt-1">
                  Cinematic IPTV
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                      isActive
                        ? "text-white bg-white/15 shadow-sm"
                        : "text-zinc-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="ml-1.5 px-1.5 py-0.2 rounded-full text-[9px] font-bold uppercase bg-orange-500/20 text-orange-400 border border-orange-500/30">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Search Button */}
              <button
                onClick={() => setSearchModalOpen(true)}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-zinc-300 hover:text-white flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                aria-label="Search Catalog"
                title="Search 28,000+ Channels & VODs"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Free Trial / Test CTA on Desktop */}
              <div className="hidden sm:block">
                <WhatsAppButton
                  isTrial
                  variant="outline"
                  size="sm"
                  label="24h Test"
                />
              </div>

              {/* Subscribe CTA Button */}
              <WhatsAppButton
                variant="pill"
                size="sm"
                label="WhatsApp"
                showPingDot
              />

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center justify-center active:scale-95 transition-all"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[72px] bg-zinc-950/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl p-6 space-y-5 animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
            {/* Search Quick Bar */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setSearchModalOpen(true);
              }}
              className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-zinc-400 text-sm"
            >
              <div className="flex items-center gap-2.5">
                <Search className="w-4 h-4 text-orange-400" />
                <span>Search 28,000+ channels & 4K titles...</span>
              </div>
              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-white/10 text-white">
                Find
              </span>
            </button>

            {/* Links List */}
            <div className="grid grid-cols-2 gap-2 text-sm font-semibold">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                      isActive
                        ? "bg-orange-500/15 border border-orange-500/30 text-orange-400"
                        : "bg-white/[0.02] border border-white/5 text-zinc-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-400">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* WhatsApp Actions inside mobile menu */}
            <div className="pt-2 space-y-2.5 border-t border-white/10">
              <WhatsAppButton
                variant="pill"
                size="md"
                fullWidth
                showPingDot
                label="Subscribe Now on WhatsApp"
              />
              <WhatsAppButton
                isTrial
                variant="outline"
                size="md"
                fullWidth
                label="Request 24h Free Trial on WhatsApp"
              />
            </div>

            {/* Status Footer in Mobile Menu */}
            <div className="flex items-center justify-between text-xs text-zinc-500 pt-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                18 CDN Servers Online
              </span>
              <span>Anti-Freeze™ 9.9</span>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectMedia={onSelectMedia}
      />
    </>
  );
}

