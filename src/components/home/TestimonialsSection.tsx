"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

interface TestimonialItem {
  name: string;
  location: string;
  flag: string;
  rating: number;
  date: string;
  quote: string;
  verified: boolean;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Alexandre D.",
    location: "Paris, France",
    flag: "🇫🇷",
    rating: 5,
    date: "Il y a 3 jours",
    quote:
      "Abonné depuis 8 mois sur Apple TV 4K avec TiviMate. Zéro coupure pendant le choc PSG-Bayern et le Clasico. La qualité 4K 60FPS est bluffante, bien meilleure que mon ancien fournisseur.",
    verified: true,
  },
  {
    name: "Thomas V.",
    location: "Bruxelles, Belgique",
    flag: "🇧🇪",
    rating: 5,
    date: "Il y a 5 jours",
    quote:
      "Test gratuit reçu en 2 minutes sur WhatsApp, installé immédiatement sur Firestick. Le bouquet beIN et Canal+ est ultra-fluide avec le son Dolby Atmos. J'ai pris le pass 12 mois sans hésiter.",
    verified: true,
  },
  {
    name: "Karim M.",
    location: "Genève, Suisse",
    flag: "🇨🇭",
    rating: 5,
    date: "La semaine dernière",
    quote:
      "Le support WhatsApp est extraordinaire : réponse en moins d'une minute un dimanche soir pour m'aider à configurer ma Smart TV LG. Plus de 28 000 chaînes sans aucun décalage audio.",
    verified: true,
  },
  {
    name: "Marc-Antoine L.",
    location: "Montréal, Canada",
    flag: "🇨🇦",
    rating: 5,
    date: "Il y a 2 semaines",
    quote:
      "Toutes les chaînes françaises, anglaises et américaines en direct. Même avec le décalage horaire, les replays et la VOD 4K fonctionnent à la perfection. Service irréprochable.",
    verified: true,
  },
  {
    name: "Yassine B.",
    location: "Casablanca, Maroc",
    flag: "🇲🇦",
    rating: 5,
    date: "Il y a 2 semaines",
    quote:
      "Les serveurs sont d'une stabilité impressionnante sur les matchs de Premier League et Ligue des Champions. Technologie Anti-Freeze très efficace, pas un seul freeze à signaler !",
    verified: true,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#050508] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            <Icon icon="ph:star-fill" width={13} />
            <span>Avis Vérifiés • Note 4.9/5</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Ce Que Disent Nos Abonnés
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light">
            Plus de 48 000 utilisateurs quotidiens font confiance à notre infrastructure pour leurs soirées sport et cinéma.
          </p>
        </div>

        {/* Carousel / Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-7 sm:p-8 rounded-3xl bg-[#0f0f14] border border-white/[0.06] hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl shadow-black/40 group hover:-translate-y-1"
            >
              {/* Stars & Date */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Icon key={i} icon="ph:star-fill" width={16} />
                  ))}
                </div>
                <span className="text-[11px] text-zinc-500">{item.date}</span>
              </div>

              {/* Quote */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Author & Country */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors">
                    {item.name}
                  </div>
                  <div className="text-xs text-zinc-400 flex items-center gap-1.5 pt-0.5">
                    <span>{item.flag}</span>
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <Icon icon="ph:check-circle-fill" width={13} />
                  <span>Abonné Vérifié</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
