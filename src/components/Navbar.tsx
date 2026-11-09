"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { SITE_CONFIG } from "@/data/config";
import { WhatsAppButton } from "./WhatsAppButton";
import { SearchModal } from "./SearchModal";
import { MediaItem } from "@/data/media";

interface NavbarProps {
  onSelectMedia?: (item: MediaItem) => void;
}

export function Navbar({ onSelectMedia }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Watch Now", href: "/", icon: "ph:sparkle-fill" },
    { label: "Live TV", href: "/live-tv", icon: "ph:television-simple-fill" },
    { label: "Movies", href: "/movies", icon: "ph:film-strip-fill" },
    { label: "Series", href: "/series", icon: "ph:stack-fill" },
    { label: "Sport", href: "/sports", icon: "ph:trophy-fill" },
    { label: "Pricing", href: "/pricing", icon: "ph:tag-fill" },
    { label: "Devices", href: "/devices", icon: "ph:device-mobile-camera-fill" },
  ];

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 flex items-center justify-between px-4 sm:px-8 py-4 pointer-events-none">
        {/* Brand Logo */}
        <Link
          href="/"
          className="pointer-events-auto flex items-center gap-2.5 group select-none"
        >
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-700 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-all">
            <span className="text-black font-black text-lg">Æ</span>
          </div>
          <span className="hidden sm:inline font-black text-lg tracking-wider text-white">
            AETHER<span className="text-orange-500">+</span>
          </span>
        </Link>

        {/* Center: Apple TV+ Floating Capsule Navigation */}
        <nav className="pointer-events-auto hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-2xl border border-white/15 shadow-2xl shadow-black/80">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? "bg-white text-black font-bold shadow-md shadow-white/20 scale-102"
                    : "text-zinc-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}

          <button
            onClick={() => setSearchModalOpen(true)}
            className="w-8 h-8 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 flex items-center justify-center transition-all cursor-pointer ml-1"
            aria-label="Search Catalog"
            title="Search Catalog"
          >
            <Icon icon="ph:magnifying-glass-bold" width={15} />
          </button>
        </nav>

        {/* Right WhatsApp & Mobile Toggle */}
        <div className="pointer-events-auto flex items-center gap-2">
          <button
            onClick={() => setSearchModalOpen(true)}
            className="md:hidden w-9 h-9 rounded-full bg-black/60 backdrop-blur-xl border border-white/15 text-white flex items-center justify-center"
            aria-label="Search"
          >
            <Icon icon="ph:magnifying-glass-bold" width={16} />
          </button>

          <WhatsAppButton
            variant="pill"
            size="sm"
            label="Subscribe"
            showPingDot
          />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full bg-black/60 backdrop-blur-xl border border-white/15 text-white flex items-center justify-center"
            aria-label="Toggle navigation menu"
          >
            <Icon icon={mobileMenuOpen ? "ph:x-bold" : "ph:list-bold"} width={18} />
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto md:hidden fixed inset-x-4 top-20 bg-zinc-950/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-2 gap-2 text-sm font-semibold">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`p-3 rounded-2xl flex items-center gap-2 transition-all ${
                      isActive
                        ? "bg-white text-black font-bold shadow-md"
                        : "bg-white/5 text-zinc-300 hover:text-white"
                    }`}
                  >
                    <Icon icon={item.icon} width={16} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="pt-2 border-t border-white/10 space-y-2">
              <WhatsAppButton
                variant="pill"
                size="md"
                fullWidth
                label="Subscribe on WhatsApp"
              />
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
