"use client";

import React from "react";
import { HeroMinimal } from "@/components/HeroMinimal";
import { useMediaModal } from "@/components/SiteLayout";
import { LogosMarquee } from "@/components/home/LogosMarquee";
import { StatsCounters } from "@/components/home/StatsCounters";
import { FeaturesGrid } from "@/components/home/FeaturesGrid";
import { ChannelsShowcase } from "@/components/home/ChannelsShowcase";
import { DevicesSection } from "@/components/home/DevicesSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PricingSection } from "@/components/home/PricingSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  const { openModal } = useMediaModal();

  return (
    <div className="w-full bg-[#07070a] text-white overflow-hidden">
      {/* 0. HERO SECTION — Kept untouched, pixel for pixel */}
      <HeroMinimal onSelectMedia={openModal} />

      {/* SECTIONS BELOW THE HERO (in exact requested order) */}
      {/* 1. Logos/categories marquee */}
      <LogosMarquee />

      {/* 2. Stats counters */}
      <StatsCounters />

      {/* 3. Features grid (6 cards) */}
      <FeaturesGrid />

      {/* 4. Channels showcase */}
      <ChannelsShowcase />

      {/* 5. Devices section */}
      <DevicesSection />

      {/* 6. How it works */}
      <HowItWorks />

      {/* 7. Pricing */}
      <PricingSection />

      {/* 8. Testimonials */}
      <TestimonialsSection />

      {/* 9. FAQ */}
      <HomeFAQ />

      {/* 10. Final CTA banner */}
      <FinalCTA />
    </div>
  );
}
