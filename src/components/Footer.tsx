"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { SITE_CONFIG, generateWhatsAppContactUrl } from "@/data/config";
import { WhatsAppButton } from "./WhatsAppButton";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#080808] border-t border-white/10 pt-16 pb-12 overflow-hidden text-[#a0a0a0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                AETHER<span className="text-[#a0a0a0] font-light">ARC</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#a0a0a0] leading-relaxed max-w-sm">
              {SITE_CONFIG.brandDescription}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span>18 CDN Nodes Active • 99.99% Uptime SLA</span>
            </div>

            <div className="pt-2">
              <a
                href={generateWhatsAppContactUrl("Concierge Service")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black hover:bg-[#f2f2f2] text-xs font-semibold tracking-wide transition-all shadow-md active:scale-95"
              >
                <Icon icon="ph:whatsapp-logo" width={16} />
                <span>Chat with Concierge</span>
              </a>
            </div>
          </div>

          {/* Entertainment */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Entertainment
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/live-tv" className="hover:text-white transition-colors">
                  Live TV Channels (28k+)
                </Link>
              </li>
              <li>
                <Link href="/movies" className="hover:text-white transition-colors">
                  4K Ultra HD Movies
                </Link>
              </li>
              <li>
                <Link href="/series" className="hover:text-white transition-colors">
                  Binge-Worthy TV Series
                </Link>
              </li>
              <li>
                <Link href="/sports" className="hover:text-white transition-colors">
                  Live Sports &amp; Fixtures
                </Link>
              </li>
              <li>
                <Link href="/devices" className="hover:text-white transition-colors">
                  Supported Devices &amp; Apps
                </Link>
              </li>
            </ul>
          </div>

          {/* Membership */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Membership
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Subscription Plans
                </Link>
              </li>
              <li>
                <a
                  href={generateWhatsAppContactUrl("Free 24h VIP Test Line")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-white underline underline-offset-4"
                >
                  Request 24h Free VIP Test
                </a>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Anti-Freeze™ 9.9 CDN
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact VIP Concierge
                </Link>
              </li>
            </ul>
          </div>

          {/* Concierge Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              VIP WhatsApp Line
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-[#a0a0a0]">
                Direct WhatsApp activation, remote installation, and custom Xtream/M3U playlist setups.
              </p>
              <div className="pt-1">
                <span className="text-[#a0a0a0]/60 block text-[11px]">WhatsApp:</span>
                <span className="font-mono text-white text-xs font-semibold">
                  {SITE_CONFIG.whatsappFormattedPhone}
                </span>
              </div>
              <div className="pt-1">
                <span className="text-[#a0a0a0]/60 block text-[11px]">Coverage:</span>
                <span className="text-white font-medium">24/7 Global VIP Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 border-t border-white/10 space-y-4">
          <p className="text-[11px] text-[#a0a0a0]/60 leading-relaxed">
            Disclaimer: {SITE_CONFIG.businessName} is an entertainment interface. We do not host or broadcast copyrighted media files directly. All referenced trademarks, sports logos, and channel names belong to their respective proprietary holders. Movie metadata and artwork provided by The Movie Database (TMDB).
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a0a0a0]">
            <p>
              &copy; {currentYear} {SITE_CONFIG.brandName}. All rights reserved. The Pinnacle of Cinematic Streaming.
            </p>
            <div className="flex items-center gap-4 text-[11px] font-mono text-[#a0a0a0]/70">
              <span>Anti-Freeze™ 9.9</span>
              <span>•</span>
              <span>Encrypted Transport</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
