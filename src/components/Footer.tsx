"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, Shield, Sparkles, Tv, CheckCircle2, Globe, Heart } from "lucide-react";
import { SITE_CONFIG, generateWhatsAppContactUrl } from "@/data/config";
import { WhatsAppButton } from "./WhatsAppButton";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-white/10 pt-16 pb-12 overflow-hidden text-zinc-400">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-orange-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 via-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-orange-500/30">
                <span className="text-black font-black text-lg">Æ</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xl font-black text-white tracking-wider">AETHER</span>
                <span className="text-xl font-black text-orange-500">+</span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              {SITE_CONFIG.brandDescription}
            </p>

            {/* Server Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>18 CDN Nodes Active • 99.99% Uptime SLA</span>
            </div>

            <div className="pt-2">
              <WhatsAppButton
                variant="pill"
                size="sm"
                label="Chat with Concierge"
                showPingDot
              />
            </div>
          </div>

          {/* Column 1: Streaming */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
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
                  Live Sports & Pay-Per-View
                </Link>
              </li>
              <li>
                <Link href="/devices" className="hover:text-white transition-colors">
                  Supported Devices & Apps
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Membership & Tech */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
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
                  href={generateWhatsAppContactUrl("Free 24h Test Line")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-orange-400"
                >
                  Request 24h VIP Test Line
                </a>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Anti-Freeze 9.9 Technology
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact VIP Engineers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct WhatsApp Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Instant Concierge
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-zinc-400">
                Direct WhatsApp activation, remote installation, and custom M3U/Xtream configurations.
              </p>
              <div className="pt-1">
                <span className="text-zinc-500 block">WhatsApp Direct:</span>
                <span className="font-mono text-white text-xs font-bold">
                  {SITE_CONFIG.whatsappDisplayNumber}
                </span>
              </div>
              <div className="pt-1">
                <span className="text-zinc-500 block">Operating Hours:</span>
                <span className="text-emerald-400 font-semibold">24/7/365 Global Coverage</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-8 border-t border-white/5 space-y-4">
          <p className="text-[11px] text-zinc-600 leading-relaxed">
            Disclaimer: AETHER+ is an entertainment hardware and software integration guide. We do not host or broadcast any copyrighted video content on our servers. All referenced trade names, trademarks, and channel logos belong to their respective proprietary holders.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <p>
              &copy; {currentYear} {SITE_CONFIG.brandName}. All rights reserved. Ultra-Premium Cinematic Streaming.
            </p>
            <div className="flex items-center gap-4">
              <span className="hover:text-zinc-400">Zero-Buffer Guarantee</span>
              <span>•</span>
              <span className="hover:text-zinc-400">Instant WhatsApp Provisioning</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

