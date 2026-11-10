"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { SITE_CONFIG } from "@/data/config";

interface FAQItem {
  id: string;
  category: "activation" | "quality" | "channels" | "payments";
  question: string;
  answer: string;
}

const FAQS_DATA: FAQItem[] = [
  {
    id: "f-1",
    category: "activation",
    question: "Sous quel délai mon abonnement IPTV est-il activé ?",
    answer:
      "Vos identifiants de connexion (Xtream Codes API et lien M3U) sont générés et transmis immédiatement sur WhatsApp ou par email dans les 2 à 5 minutes suivant votre commande. Nos techniciens s'assurent que votre flux est actif avant validation.",
  },
  {
    id: "f-2",
    category: "quality",
    question: "Comment fonctionne la technologie Anti-Freeze™ 9.9 ?",
    answer:
      "Les serveurs IPTV ordinaires subissent des saturations durant les grands rendez-vous sportifs (Ligue des Champions, Clasico). NOUDINE s'appuie sur une infrastructure décentralisée de 18 clusters CDN européens avec basculement automatique de flux et encodage matériel H.265/HEVC pour éliminer les micro-coupures.",
  },
  {
    id: "f-3",
    category: "channels",
    question: "Quelles compétitions sportives et chaînes sont incluses ?",
    answer:
      "Tous les bouquets majeurs sont diffusés en 4K UHD 60FPS : beIN Sports, Canal+, Sky Sports, TNT Sports, DAZN, RMC Sport, Eurosport, Movistar+, SSC. Vous suivez la Ligue des Champions, Premier League, La Liga, Serie A, Ligue 1, Formule 1, MotoGP, UFC PPV et NBA sans aucun supplément.",
  },
  {
    id: "f-4",
    category: "activation",
    question: "Quelles applications recommandez-vous sur Smart TV et Firestick ?",
    answer:
      "Sur Amazon Firestick et boîtiers Android TV, nous préconisons TiviMate Premium ou IPTV Smarters Pro. Sur Smart TV Samsung et LG, nous recommandons IBO Player Pro ou Flix IPTV. Notre guide d'installation détaille chaque étape.",
  },
  {
    id: "f-5",
    category: "quality",
    question: "Quelle vitesse de connexion internet est recommandée ?",
    answer:
      "Une connexion stable de 15 Mbps est suffisante pour le Full HD (1080p). Pour les flux 4K UHD 60FPS et le son spatial Dolby Atmos, un débit de 30 à 50 Mbps en fibre optique ou Wi-Fi 5GHz est conseillé.",
  },
  {
    id: "f-6",
    category: "activation",
    question: "Puis-je regarder sur plusieurs écrans en même temps ?",
    answer:
      "Oui ! Vous pouvez choisir notre option '2 Écrans Simultanés' pour que deux personnes de votre foyer puissent visionner des programmes différents en simultané sur deux téléviseurs ou appareils distincts.",
  },
  {
    id: "f-7",
    category: "channels",
    question: "À quelle fréquence la bibliothèque de films et séries (VOD) est-elle mise à jour ?",
    answer:
      "Notre catalogue VOD de plus de 135 000 titres est actualisé chaque jour. Les sorties cinéma et les nouveaux épisodes de séries exclusives (Netflix, Apple TV+, Disney+, HBO Max, Prime Video) sont mis à disposition sous 24 heures en 4K UHD avec pistes multilingues et sous-titres.",
  },
  {
    id: "f-8",
    category: "payments",
    question: "Quels modes de paiement acceptez-vous ?",
    answer:
      "Nous acceptons les cartes bancaires sécurisées (Visa, Mastercard), PayPal et les crypto-monnaies (Bitcoin, USDT, Ethereum). Tous les paiements bénéficient d'un cryptage SSL 256 bits.",
  },
  {
    id: "f-9",
    category: "payments",
    question: "Proposez-vous une garantie de remboursement ?",
    answer:
      "Absolument. Nous offrons une garantie satisfait ou remboursé sous 7 jours. Si notre service ne répond pas à vos attentes techniques, notre support effectue le remboursement sans condition.",
  },
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ "f-1": true, "f-2": true });

  const categories = [
    { key: "all", label: "Toutes les questions" },
    { key: "activation", label: "Installation & Activation" },
    { key: "quality", label: "Qualité & Anti-Freeze" },
    { key: "channels", label: "Chaînes & Sports" },
    { key: "payments", label: "Paiements & Garanties" },
  ];

  const filteredFaqs = useMemo(() => {
    return FAQS_DATA.filter((item) => {
      const matchSearch =
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCat =
        activeCategory === "all" || item.category === activeCategory;
      return matchSearch && matchCat;
    });
  }, [searchTerm, activeCategory]);

  const toggle = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Structured Data Schema for FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS_DATA.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-10 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold tracking-wider uppercase">
            <Icon icon="ph:question-bold" width={14} />
            <span>Centre d&apos;Aide &amp; FAQ</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Foire Aux Questions
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-xl mx-auto leading-relaxed">
            Retrouvez toutes les réponses concernant l&apos;installation, la compatibilité de vos appareils et les fonctionnalités de notre abonnement IPTV.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Icon
            icon="ph:magnifying-glass-bold"
            width={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
          />
          <input
            type="text"
            placeholder="Rechercher une question (ex: Firestick, vitesse, débit, délai, remboursement)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#0f0f14] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-sky-500 transition-colors shadow-lg"
          />
        </div>

        {/* Categories pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                activeCategory === cat.key
                  ? "bg-sky-500 text-black shadow-md shadow-sky-500/25"
                  : "bg-white/[0.04] text-zinc-400 hover:text-white border border-white/[0.06]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion Questions */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#0f0f14] border border-white/[0.06] hover:border-sky-500/30 transition-colors overflow-hidden shadow-lg"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 select-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-sky-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-sky-500/10" : ""
                    }`}
                  >
                    <Icon icon="ph:caret-down-bold" width={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/[0.04]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="p-8 rounded-3xl bg-[#0f0f14] border border-white/[0.08] text-center space-y-4">
          <h3 className="text-xl font-bold text-white">
            Vous avez une question spécifique ?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto">
            Notre équipe conciergerie est connectée 24h/24 et 7j/7 sur WhatsApp pour vous guider en temps réel.
          </p>
          <div className="pt-2">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                "Bonjour ! J'ai une question concernant vos abonnements IPTV. Merci !"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs shadow-lg transition-all"
            >
              <Icon icon="ph:whatsapp-logo-fill" width={18} />
              <span>Poser ma question sur WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
