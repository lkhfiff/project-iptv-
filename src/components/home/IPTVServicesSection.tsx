"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Icon } from "@iconify/react";
import {
  generateSubscriptionOrderUrl,
  generateDirectContactUrl,
  SITE_CONFIG,
} from "@/data/config";

interface IPTVServiCard {
  id: string;
  categoryNumber?: string;
  title: string;
  badge?: string;
  ribbon?: string;
  description: string;
  rating?: number;
  price: string;
  pricePeriod?: string;
  image: string;
  fallbackIcon: string;
  buttonText: string;
  href: string;
}

/**
 * Clean, Flat, Monochromatic IPTV Visual Display
 * 100% Black & White styling, straight, borderless, with subtle silver/white ambient glow.
 */
function FlatIPTVVisual({ card }: { card: IPTVServiCard }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative py-2 sm:py-4 flex items-center justify-center w-full">
      {/* Flat, Straight, Cinematic IPTV Display Screen (No tilt, 100% straight, pure clean background) */}
      <div className="group/card relative w-full aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-black/5 dark:shadow-2xl dark:shadow-black/70 transition-all duration-500 ease-out select-none cursor-pointer hover:-translate-y-1.5 border border-black/10 dark:border-white/10 bg-zinc-100 dark:bg-[#121212]">
        {!hasError ? (
          <img
            src={card.image}
            alt={card.title}
            loading="lazy"
            onError={() => setHasError(true)}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105 filter brightness-[0.94] dark:brightness-[0.90] group-hover/card:brightness-100"
          />
        ) : (
          /* Monochromatic Error Fallback Container */
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-300 dark:from-[#1c1c1c] dark:via-[#121212] dark:to-[#080808] p-6 text-center select-none">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 shadow-inner border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/10 text-zinc-900 dark:text-white">
              <Icon icon={card.fallbackIcon} width={32} />
            </div>
            <span className="text-sm font-semibold text-zinc-900 dark:text-white tracking-wide">
              {card.title}
            </span>
            <span className="text-[11px] font-mono text-zinc-500 dark:text-[#a0a0a0] mt-1 uppercase tracking-widest">
              {SITE_CONFIG.brandName} IPTV
            </span>
          </div>
        )}

        {/* Diagonal Soft Gloss Sheen */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 dark:from-black/20 via-transparent to-white/10" />
      </div>
    </div>
  );
}

export function IPTVServicesSection() {
  const prefersReducedMotion = useReducedMotion();

  const cards: IPTVServiCard[] = [
    {
      id: "card-1m",
      categoryNumber: "01",
      title: "Abonnement 1 Mois",
      description:
        "Accès à +15 000 chaînes live, films et séries en qualité HD, sans coupure.",
      rating: 4.8,
      price: "10€",
      pricePeriod: "/ mois",
      image:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1000&q=80",
      fallbackIcon: "ph:television-simple-bold",
      buttonText: "Commander cette offre",
      href: generateSubscriptionOrderUrl({
        planTitle: "Abonnement 1 Mois HD",
        duration: "1 Mois",
        price: "10€",
      }),
    },
    {
      id: "card-12m",
      categoryNumber: "02",
      title: "Abonnement 12 Mois",
      ribbon: "-60%",
      description:
        "Notre offre la plus populaire : qualité 4K Ultra HD, VOD illimité et support prioritaire.",
      rating: 4.9,
      price: "49€",
      pricePeriod: "/ an",
      image:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1000&q=80",
      fallbackIcon: "ph:sparkle-bold",
      buttonText: "Commander cette offre",
      href: generateSubscriptionOrderUrl({
        planTitle: "Abonnement 12 Mois 4K VIP",
        duration: "12 Mois",
        price: "49€",
      }),
    },
    {
      id: "card-sports",
      categoryNumber: "03",
      title: "Pack Sports Premium",
      description:
        "Tous les matchs en direct : Ligue 1, Premier League, Liga, UFC et beIN Sports.",
      rating: 4.7,
      price: "15€",
      pricePeriod: "/ mois",
      image:
        "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1000&q=80",
      fallbackIcon: "ph:trophy-bold",
      buttonText: "Commander cette offre",
      href: generateDirectContactUrl("Pack Sports Premium 15€"),
    },
    {
      id: "card-reseller",
      categoryNumber: "04",
      title: "Revendeur / Panel IPTV",
      description:
        "Devenez revendeur avec un panel complet, crédits à prix réduit et support dédié.",
      rating: 4.8,
      price: "À partir de 50€",
      pricePeriod: "",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
      fallbackIcon: "ph:hard-drives-bold",
      buttonText: "Commander cette offre",
      href: "/revendeur",
    },
  ];

  return (
    <section
      id="services-iptv"
      className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-24 sm:space-y-32 select-none overflow-hidden"
    >
      {cards.map((card, idx) => {
        // Alternating zigzag logic:
        // Even indices (0: Card 1, 2: Card 3) -> Visual Left, Content Right
        // Odd indices (1: Card 2, 3: Card 4) -> Content Left, Visual Right
        const isVisualLeft = idx % 2 === 0;

        return (
          <motion.div
            key={card.id}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
          >
            {/* VISUAL COLUMN (Straight, Flat, Non-tilted IPTV Display with smooth entrance) */}
            <motion.div
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, x: isVisualLeft ? -45 : 45, scale: 0.95 }
              }
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`lg:col-span-6 order-1 ${
                isVisualLeft ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <FlatIPTVVisual card={card} />
            </motion.div>

            {/* CONTENT COLUMN (Title, Description, Price, Black & White Button with staggered glide) */}
            <motion.div
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, x: isVisualLeft ? 45 : -45 }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.85,
                delay: 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`lg:col-span-6 order-2 ${
                isVisualLeft ? "lg:order-2" : "lg:order-1"
              } space-y-6 text-left`}
            >
              {/* Plan Title & Ribbon */}
              <div className="flex items-center gap-3">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-zinc-950 dark:text-white tracking-tight">
                  {card.title}
                </h3>
                {card.ribbon && (
                  <span className="px-2.5 py-0.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
                    {card.ribbon}
                  </span>
                )}
              </div>

              {/* Exact Short Description */}
              <p className="text-sm sm:text-base text-zinc-600 dark:text-[#a0a0a0] font-light leading-relaxed max-w-xl">
                {card.description}
              </p>

              {/* Monochromatic Price Row */}
              <div className="pt-1">
                <div className="font-mono">
                  <span className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white">
                    {card.price}
                  </span>
                  {card.pricePeriod && (
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 ml-1">
                      {card.pricePeriod}
                    </span>
                  )}
                </div>
              </div>

              {/* Clean Black & White Capsule Button matching Flowblox & Hero style */}
              <div className="pt-2">
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-4 pl-6 pr-2 py-2 rounded-full bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-[#f2f2f2] text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl group/btn"
                >
                  <span>{card.buttonText}</span>
                  <span className="w-8 h-8 rounded-full bg-white text-black dark:bg-black dark:text-white flex items-center justify-center font-bold transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:scale-105 shadow-md">
                    <Icon icon="ph:arrow-right" width={14} />
                  </span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </section>
  );
}
