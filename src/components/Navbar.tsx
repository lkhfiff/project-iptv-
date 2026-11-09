"use client";

import React, { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Live TV", href: "/live-tv" },
    { label: "Movies", href: "/movies" },
    { label: "Series", href: "/series" },
    { label: "Sports", href: "/sports" },
    { label: "Pricing", href: "/pricing" },
  ];

  const whatsappUrl = generateWhatsAppContactUrl("VIP Concierge");

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 px-4 sm:px-8 py-5 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo on Left */}
          <Link
            href="/"
            className="flex items-center gap-2 group select-none transition-opacity hover:opacity-80"
          >
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white font-sans">
              AETHER<span className="text-[#a0a0a0] font-light">ARC</span>
            </span>
          </Link>

          {/* Centered Transparent Floating Pill Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#151515]/75 backdrop-blur-2xl border border-white/12 shadow-2xl">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs tracking-wide transition-all duration-200 ${
                    isActive
                      ? "text-black bg-white font-semibold shadow-md"
                      : "text-[#a0a0a0] hover:text-white hover:bg-white/5 font-medium"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <button
              onClick={() => setSearchModalOpen(true)}
              className="text-[#a0a0a0] hover:text-white p-1.5 ml-1 rounded-full hover:bg-white/5 cursor-pointer transition-colors"
              aria-label="Search"
            >
              <Icon icon="ph:magnifying-glass" width={15} />
            </button>
          </nav>

          {/* WhatsApp Button on Right */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setSearchModalOpen(true)}
              className="md:hidden w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center"
              aria-label="Search"
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
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center cursor-pointer"
              aria-label="Toggle navigation"
            >
              <Icon icon={mobileMenuOpen ? "ph:x" : "ph:list"} width={16} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 max-w-7xl mx-auto bg-[#151515]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 space-y-2 animate-in fade-in duration-200">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    isActive ? "bg-white/10 text-white" : "text-[#a0a0a0] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
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
