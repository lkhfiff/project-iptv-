"use client";

import React from "react";
import { HomeHero } from "@/components/home/HomeHero";
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
  return (
    <div className="w-full bg-[#07070a] text-white overflow-hidden">
      {/* 1. HERO */}
      <HomeHero />

      {/* 2. LOGOS MARQUEE */}
      <LogosMarquee />

      {/* 3. STATS COUNTERS */}
      <StatsCounters />

      {/* 4. FEATURES GRID */}
      <FeaturesGrid />

      {/* 5. CHANNELS SHOWCASE */}
      <ChannelsShowcase />

      {/* 6. DEVICES SECTION */}
      <DevicesSection />

      {/* 7. HOW IT WORKS */}
      <HowItWorks />

      {/* 8. PRICING */}
      <PricingSection />

      {/* 9. TESTIMONIALS */}
      <TestimonialsSection />

      {/* 10. FAQ */}
      <HomeFAQ />

      {/* 11. FINAL CTA BANNER */}
      <FinalCTA />
    </div>
  );
}
