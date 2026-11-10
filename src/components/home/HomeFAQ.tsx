"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "Sous quel délai mon abonnement ou mon test gratuit est-il activé ?",
    a: "Votre ligne est activée quasi instantanément. Dès validation de votre demande, notre conciergerie VIP vous transmet vos identifiants Xtream Codes et vos liens M3U par WhatsApp ou Email en moins de 2 à 5 minutes.",
  },
  {
    q: "Qu'est-ce qui garantit l'absence de coupures pendant les grands matchs ?",
    a: "Contrairement aux serveurs IPTV traditionnels qui saturent, NOUDINE utilise la technologie propriétaire Anti-Freeze™ 9.9. Nos flux sont distribués à travers 18 clusters CDN européens avec basculement automatique de charge pour éliminer tout freeze.",
  },
  {
    q: "Quelles applications recommandez-vous sur Smart TV et Firestick ?",
    a: "Sur Amazon Firestick et Android TV, nous recommandons en priorité TiviMate Premium ou IPTV Smarters Pro. Sur Smart TV Samsung et LG, nous préconisons IBO Player Pro ou Flix IPTV. Nos techniciens vous assistent pas à pas.",
  },
  {
    q: "Puis-je regarder sur plusieurs écrans en même temps ?",
    a: "Oui, vous pouvez choisir notre option 2 Écrans Simultanés pour profiter de vos chaînes en même temps sur votre téléviseur du salon et sur une tablette ou smartphone dans une autre pièce.",
  },
  {
    q: "Quelle vitesse de connexion internet est recommandée ?",
    a: "Pour les chaînes Full HD, un débit de 15 Mbps est recommandé. Pour les chaînes 4K UHD 60FPS et le son Dolby Atmos, un débit stable de 30 à 50 Mbps en fibre ou Wi-Fi 5GHz garantit une fluidité irréprochable.",
  },
  {
    q: "Ai-je besoin d'un VPN pour utiliser mon abonnement ?",
    a: "Non, nos serveurs intègrent un protocole anti-blocage sécurisé qui fonctionne directement avec tous les fournisseurs d'accès internet (Orange, SFR, Free, Bouygues, Proximus, Swisscom, etc.) sans aucun VPN obligatoire.",
  },
];

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#07070a]">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold tracking-wider uppercase">
            <Icon icon="ph:question-bold" width={13} />
            <span>Foire Aux Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Des Réponses Claires à Vos Questions
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light">
            Tout ce que vous devez savoir avant de commencer votre abonnement ou votre essai gratuit.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0f0f14] border border-white/[0.06] hover:border-sky-500/30 transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 select-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-sky-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-sky-500/10" : ""
                    }`}
                  >
                    <Icon icon="ph:caret-down-bold" width={16} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-white/[0.04]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
