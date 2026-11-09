"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
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
} from "@/data/media";
import { SUBSCRIPTION_PLANS } from "@/data/pricing";
import { SITE_CONFIG, generateWhatsAppContactUrl } from "@/data/config";

export default function HomePage() {
  const { openModal } = useMediaModal();

  return (
    <div className="space-y-14 sm:space-y-20 pb-20 overflow-hidden">
      {/* 1. Cinematic Hero matching Apple TV+ reference */}
      <Hero onSelectMedia={openModal} />

      {/* 2. "Up Next on AETHER+" (Exact Apple TV+ widescreen shelf from reference image) */}
      <ContentCarousel
        title="Up Next on AETHER+"
        subtitle="The finest cinematic releases, original productions, and critically acclaimed shows."
        items={TRENDING_MOVIES}
        onSelectMedia={openModal}
        viewAllHref="/movies"
        aspectRatio="wide"
      />

      {/* 3. Redesigned Compact Subscription Passes */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/10 text-orange-400 border border-orange-500/20">
            <Icon icon="ph:sparkle-fill" width={12} />
            <span>Redesigned Subscription Passes</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Choose Your Streaming Pass
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            No contracts. Instant automated WhatsApp provisioning within 3 minutes of contact.
          </p>
        </div>

        {/* 4 Compact, Equal-Height Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {SUBSCRIPTION_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

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
              Premier League, Champions League, Formula 1, UFC Pay-Per-Views, and NBA in buttery-smooth 60 frames per second.
            </p>
          </div>

          <Link
            href="/sports"
            className="text-xs sm:text-sm font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1 shrink-0"
          >
            <span>Full Sports Schedule</span>
            <Icon icon="ph:arrow-right-bold" width={13} />
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
        badge="Critically Acclaimed"
        title="Popular Television Series"
        subtitle="Complete multi-season television epics with full episodes, uninterrupted streaming, and crisp subtitles."
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
              Stream live national and premium sports channels from the US, UK, France, Arab World, Spain, Germany, and beyond.
            </p>
          </div>

          <Link
            href="/live-tv"
            className="text-xs sm:text-sm font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1 shrink-0"
          >
            <span>Explore All 28k Channels</span>
            <Icon icon="ph:arrow-right-bold" width={13} />
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

      {/* 8. Verified Customer Reviews */}
      <ReviewCarousel />

      {/* 9. FAQ Section */}
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

      {/* 10. Final High-Impact WhatsApp CTA Banner */}
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
                className="px-8 py-3.5 rounded-full bg-black text-white font-black text-sm shadow-2xl hover:bg-zinc-900 active:scale-95 transition-all inline-flex items-center gap-2"
              >
                <span>Order On WhatsApp Now</span>
                <Icon icon="ph:arrow-right-bold" width={14} />
              </a>
              <a
                href={generateWhatsAppContactUrl("Request 24h Free Test Line")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-black/10 hover:bg-black/20 text-black font-bold text-xs transition-all border border-black/20"
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
