"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Tv,
  Film,
  Trophy,
  Globe,
  Radio,
  ArrowRight,
  Flame,
  CheckCircle2,
  Clock,
  Smartphone,
  ChevronRight,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { ContentCarousel } from "@/components/ContentCarousel";
import { PricingCard } from "@/components/PricingCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ChannelPackageCard } from "@/components/ChannelPackageCard";
import { LiveSportsCard } from "@/components/LiveSportsCard";
import { ReviewCarousel } from "@/components/ReviewCarousel";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useMediaModal } from "@/components/SiteLayout";
import {
  TRENDING_MOVIES,
  POPULAR_SERIES,
  LIVE_SPORTS_EVENTS,
  INTERNATIONAL_TV_PACKAGES,
  KIDS_AND_FAMILY,
  MediaItem,
} from "@/data/media";
import { SUBSCRIPTION_PLANS } from "@/data/pricing";
import { SITE_CONFIG, generateWhatsAppContactUrl } from "@/data/config";

export default function HomePage() {
  const { openModal } = useMediaModal();

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-hidden">
      {/* 1. Cinematic Hero with Apple TV+ Spotlight */}
      <Hero onSelectMedia={openModal} />

      {/* 2. Key Technology Pillars / Metrics Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          <div className="p-4 sm:p-6 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md flex flex-col justify-between space-y-2 hover:border-orange-500/30 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-orange-500/10 text-orange-400 flex items-center justify-center">
              <Tv className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {SITE_CONFIG.metrics.channelsCount}
              </div>
              <p className="text-xs text-zinc-400 font-medium">Live Global Channels</p>
            </div>
            <span className="text-[10px] text-zinc-500">True 1080p & 4K 60FPS</span>
          </div>

          <div className="p-4 sm:p-6 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md flex flex-col justify-between space-y-2 hover:border-orange-500/30 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {SITE_CONFIG.metrics.vodCount}
              </div>
              <p className="text-xs text-zinc-400 font-medium">4K Movies & Complete Series</p>
            </div>
            <span className="text-[10px] text-zinc-500">Updated Daily with Subtitles</span>
          </div>

          <div className="p-4 sm:p-6 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md flex flex-col justify-between space-y-2 hover:border-emerald-500/30 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {SITE_CONFIG.metrics.uptimePercentage}
              </div>
              <p className="text-xs text-zinc-400 font-medium">Anti-Freeze™ 9.9 Cluster</p>
            </div>
            <span className="text-[10px] text-zinc-500">Zero-Buffer 10Gbps Network</span>
          </div>

          <div className="p-4 sm:p-6 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md flex flex-col justify-between space-y-2 hover:border-purple-500/30 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                &lt; 3 Mins
              </div>
              <p className="text-xs text-zinc-400 font-medium">Instant WhatsApp Setup</p>
            </div>
            <span className="text-[10px] text-zinc-500">24/7 Human VIP Concierge</span>
          </div>
        </div>
      </section>

      {/* 3. Trending Movies Carousel */}
      <ContentCarousel
        badge="Cinema In Uncompressed 4K"
        title="Trending Blockbuster Movies"
        subtitle="The latest Hollywood, international releases, and original cinema in pure 4K HDR10+ and Dolby Atmos."
        items={TRENDING_MOVIES}
        onSelectMedia={openModal}
        viewAllHref="/movies"
        aspectRatio="poster"
      />

      {/* 4. Live Sports Showcase Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600/10 text-red-500 border border-red-600/20">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              Live Sports Arena
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Every Match. Every Championship. 60 FPS.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
              Premier League, Champions League, Formula 1, UFC Pay-Per-Views, and NBA in buttery-smooth 60 frames per second with zero stutter.
            </p>
          </div>

          <Link
            href="/sports"
            className="text-xs sm:text-sm font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1 shrink-0"
          >
            <span>Full Sports Schedule</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {LIVE_SPORTS_EVENTS.map((event) => (
            <LiveSportsCard key={event.id} item={event} onSelect={openModal} />
          ))}
        </div>
      </section>

      {/* 5. Popular Series Carousel */}
      <ContentCarousel
        badge="Binge-Worthy Television"
        title="Critically Acclaimed Series"
        subtitle="Complete multi-season television epics with full episodes, uninterrupted streaming, and crisp subtitle synchronization."
        items={POPULAR_SERIES}
        onSelectMedia={openModal}
        viewAllHref="/series"
        aspectRatio="poster"
      />

      {/* 6. International TV Bouquets */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div className="space-y-1">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/10 text-orange-400 border border-orange-500/20">
              Worldwide Broadcasters
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Over 28,000 Live Global Channels
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
              Stream live national and premium sports channels from the US, UK, France, Arab World, Spain, Germany, and beyond with complete 7-day EPG guides.
            </p>
          </div>

          <Link
            href="/live-tv"
            className="text-xs sm:text-sm font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1 shrink-0"
          >
            <span>Explore All 28k Channels</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {INTERNATIONAL_TV_PACKAGES.slice(0, 4).map((pkg) => (
            <ChannelPackageCard key={pkg.code} {...pkg} />
          ))}
        </div>
      </section>

      {/* 7. Kids & Family Carousel */}
      <ContentCarousel
        badge="Family & Entertainment"
        title="Kids, Animation & Nature Documentaries"
        subtitle="Curated family-friendly entertainment, Disney classics, 4K nature epics, and timeless animated adventures."
        items={KIDS_AND_FAMILY}
        onSelectMedia={openModal}
        aspectRatio="wide"
      />

      {/* 8. Cinematic Features / Anti-Freeze Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-black border border-white/10 p-8 sm:p-12 lg:p-16">
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                Next-Gen Streaming Engine
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Engineered For Pure Cinema. <br />
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                  Zero Buffering.
                </span>
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Most IPTV services crumble when millions tune into big matches. We built {SITE_CONFIG.brandName} differently. Our decentralized Anti-Freeze™ 9.9 content delivery network dynamically balances traffic across 18 tier-one European & North American data centers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>0.8s Channel Zapping</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Switch between sports channels with instantaneous playback.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Dolby Vision & Atmos</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Bit-perfect multichannel surround audio and 10-bit color.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>14-Day EPG Guide</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Complete TV schedules and catch-up on popular networks.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Multi-Device Sync</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Seamless viewing across Firestick, Apple TV, Smart TVs, and mobile.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <WhatsAppButton
                  variant="luxury"
                  size="lg"
                  label="Claim 24h Free VIP Test"
                  isTrial
                />
                <Link
                  href="/about"
                  className="text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white flex items-center gap-1.5"
                >
                  <span>Read Infrastructure Specs</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Visual Specs Terminal */}
            <div className="p-6 rounded-3xl bg-black/60 border border-white/10 backdrop-blur-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-zinc-400 font-mono">
                <span>// AETHER+ SERVER TELEMETRY</span>
                <span className="text-emerald-400 font-bold">ALL SYSTEMS NOMINAL</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center p-2.5 rounded-xl bg-white/[0.02]">
                  <span className="text-zinc-400">Global Active Streams:</span>
                  <span className="text-white font-bold">42,891 Connections</span>
                </div>
                <div className="flex justify-between items-center p-2.5 rounded-xl bg-white/[0.02]">
                  <span className="text-zinc-400">Network Throughput:</span>
                  <span className="text-amber-400 font-bold">342.8 Gbps Allocated</span>
                </div>
                <div className="flex justify-between items-center p-2.5 rounded-xl bg-white/[0.02]">
                  <span className="text-zinc-400">Stream Codec:</span>
                  <span className="text-white font-bold">H.265 / HEVC 10-Bit Main 10</span>
                </div>
                <div className="flex justify-between items-center p-2.5 rounded-xl bg-white/[0.02]">
                  <span className="text-zinc-400">Average Buffer Time:</span>
                  <span className="text-emerald-400 font-bold">0.02 ms (Zero Buffer)</span>
                </div>
                <div className="flex justify-between items-center p-2.5 rounded-xl bg-white/[0.02]">
                  <span className="text-zinc-400">EPG Sync Protocol:</span>
                  <span className="text-white font-bold">XMLTV High-Speed API v2</span>
                </div>
              </div>

              <div className="pt-2">
                <div className="p-3 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-xs text-orange-300 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Encrypted SSL streams guarantee zero ISP throttling on all networks.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Pricing Section with WhatsApp Integration */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-orange-500/10 text-orange-400 border border-orange-500/20">
            Transparent Cinema Pricing
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Choose Your Streaming Pass
          </h2>
          <p className="text-xs sm:text-base text-zinc-400">
            No contracts. No hidden hardware fees. Instant automated WhatsApp provisioning within 3 minutes of contact.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {SUBSCRIPTION_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* WhatsApp Guarantee Banner */}
        <div className="p-6 rounded-3xl bg-zinc-950/80 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white flex items-center gap-2 justify-center sm:justify-start">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Risk-Free 7-Day Satisfaction Guarantee</span>
            </h4>
            <p className="text-xs text-zinc-400">
              Not completely blown away by our 4K picture quality? Simply text our WhatsApp concierge within 7 days for a full refund.
            </p>
          </div>
          <WhatsAppButton
            variant="outline"
            size="md"
            label="Inquire via WhatsApp"
            customMessage="Hello! I have questions before choosing a subscription plan for my TV."
          />
        </div>
      </section>

      {/* 10. Supported Devices Quick Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Seamless On All Your Favorite Screens
          </h3>
          <p className="text-xs text-zinc-400">
            Install in 2 minutes with our tested guides and recommended applications.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-semibold text-zinc-300">
          {[
            "Amazon Firestick 4K",
            "Apple TV 4K (tvOS)",
            "Samsung Smart TV (Tizen)",
            "LG Smart TV (webOS)",
            "Android TV / Google TV",
            "Nvidia Shield Pro",
            "iPhone & iPad",
            "Android Mobile",
            "MAG Box & Formuler",
            "PC & Mac",
          ].map((device) => (
            <Link
              key={device}
              href="/devices"
              className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 hover:border-orange-500/40 hover:bg-white/5 transition-all"
            >
              {device}
            </Link>
          ))}
        </div>
      </section>

      {/* 11. Verified Customer Reviews */}
      <ReviewCarousel />

      {/* 12. FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
            Everything You Need To Know
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Clear answers about device setup, anti-freeze technology, channel line-up, and instant WhatsApp delivery.
          </p>
        </div>

        <FAQAccordion />
      </section>

      {/* 13. Final High-Impact WhatsApp CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-orange-600 via-amber-600 to-amber-700 p-8 sm:p-12 lg:p-16 text-black shadow-2xl shadow-orange-500/20">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-black/15 text-black font-extrabold text-xs uppercase tracking-widest">
              Ready In 3 Minutes
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Ready to Upgrade Your Living Room to 4K Cinema?
            </h2>
            <p className="text-black/85 text-sm sm:text-base font-medium leading-relaxed">
              Connect directly with our senior IPTV concierge on WhatsApp. Get your playlist credentials, test streams, and personalized remote setup guide immediately.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={generateWhatsAppContactUrl("Instant VIP Subscription Setup")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-black text-white font-black text-base shadow-2xl hover:bg-zinc-900 active:scale-95 transition-all inline-flex items-center gap-2"
              >
                <span>Order On WhatsApp Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={generateWhatsAppContactUrl("Request 24h Free Test Line")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full bg-black/10 hover:bg-black/20 text-black font-bold text-sm transition-all border border-black/20"
              >
                Request Free 24h Test
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
