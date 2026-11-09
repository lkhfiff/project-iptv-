"use client";

import React from "react";
import { Star, ShieldCheck, CheckCircle2, MessageCircle } from "lucide-react";
import { SUBSCRIBER_REVIEWS } from "@/data/reviews";
import { WhatsAppButton } from "./WhatsAppButton";

export function ReviewCarousel() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
            <span className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span>4.9 / 5.0 Average Rating (3,400+ Active Subscribers)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified Cinematic Feedback
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
            Real feedback from home theater enthusiasts and sports fans streaming daily across the globe.
          </p>
        </div>

        <WhatsAppButton
          variant="outline"
          size="sm"
          label="Read More On WhatsApp"
          customMessage="Hello! I would like to read feedback and test AETHER+ IPTV."
        />
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SUBSCRIBER_REVIEWS.slice(0, 3).map((rev) => (
          <div
            key={rev.id}
            className="p-6 rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-orange-500/30 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{rev.flag}</span>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{rev.author}</span>
                      {rev.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      )}
                    </h4>
                    <span className="text-[10px] text-zinc-400">{rev.country} • {rev.date}</span>
                  </div>
                </div>

                <div className="flex">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                &ldquo;{rev.review}&rdquo;
              </p>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500">
              <span className="font-mono text-zinc-400">{rev.device}</span>
              {rev.badge && (
                <span className="px-2 py-0.5 rounded bg-white/5 text-orange-400 font-semibold text-[10px]">
                  {rev.badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

