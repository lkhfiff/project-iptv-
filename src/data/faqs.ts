export interface FAQItem {
  id: string;
  category: "Setup & Delivery" | "Quality & Anti-Freeze" | "Channels & Sports" | "Ordering & Support";
  question: string;
  answer: string;
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "Setup & Delivery",
    question: "Sous quel délai mon abonnement est-il activé ?",
    answer:
      "Vos identifiants de connexion (Xtream Codes / lien M3U) sont transmis immédiatement par notre équipe conciergerie VIP. Dans 99% des cas, votre ligne est provisionnée et testée en moins de 2 à 5 minutes.",
  },
  {
    id: "faq-2",
    category: "Ordering & Support",
    question: "Pourquoi privilégier le service personnalisé par conciergerie ?",
    answer:
      "Nous privilégions un accompagnement sur mesure. Notre conciergerie vous guide pas à pas selon votre modèle de téléviseur ou d'application (TiviMate, Smarters Pro, IBO Player), teste votre flux avant démarrage et vous offre une assistance directe 24/7.",
  },
  {
    id: "faq-3",
    category: "Quality & Anti-Freeze",
    question: "Qu'est-ce que la technologie Anti-Freeze™ 9.9 ?",
    answer:
      "Contrairement aux serveurs IPTV traditionnels qui saturent lors des grands matchs, NOUDINE s'appuie sur un réseau CDN décentralisé réparti sur 18 centres de données avec répartition dynamique de charge et encodage matériel H.265/HEVC pour éliminer les micro-coupures.",
  },
  {
    id: "faq-4",
    category: "Channels & Sports",
    question: "Quelles compétitions sportives et chaînes sont incluses ?",
    answer:
      "Tous les bouquets majeurs sont inclus en 4K 60FPS : Ligue des Champions, Premier League, La Liga, Serie A, Ligue 1, Bundesliga, Formule 1, MotoGP, UFC PPV, NBA, tennis et plus encore. Vous retrouvez beIN Sports 4K, Canal+ 4K, Sky Sports, DAZN, TNT Sports et Eurosport avec choix des langues.",
  },
  {
    id: "faq-5",
    category: "Channels & Sports",
    question: "À quelle fréquence les films et séries sont-ils mis à jour ?",
    answer:
      "Notre catalogue VOD est actualisé quotidiennement. Les dernières sorties cinéma et séries exclusives (Netflix, Apple TV+, Disney+, HBO Max, Prime Video) sont ajoutées sous 24h avec pistes audio multi-langues et sous-titres.",
  },
  {
    id: "faq-6",
    category: "Quality & Anti-Freeze",
    question: "Quelle vitesse de connexion est recommandée pour la 4K ?",
    answer:
      "Une connexion stable de 15 Mbps est suffisante pour le Full HD (1080p), et 30 à 50 Mbps pour la 4K UHD 60FPS et le Dolby Vision. Nous recommandons une connexion filaire Ethernet ou Wi-Fi 5GHz.",
  },
  {
    id: "faq-7",
    category: "Setup & Delivery",
    question: "Puis-je utiliser mon abonnement sur plusieurs écrans ?",
    answer:
      "Oui. Les formules 6 Mois et 12 Mois VIP incluent le multi-écrans simultané pour que plusieurs membres de votre foyer puissent regarder des programmes différents en même temps sur des téléviseurs séparés.",
  },
  {
    id: "faq-8",
    category: "Ordering & Support",
    question: "Proposez-vous un essai gratuit avant l'achat ?",
    answer:
      "Oui, absolument. Vous pouvez demander un essai gratuit 24h sans carte bancaire et sans engagement depuis notre page Essai Gratuit pour tester notre qualité sur votre propre téléviseur.",
  },
  {
    id: "faq-9",
    category: "Setup & Delivery",
    question: "Ai-je besoin d'un VPN pour utiliser NOUDINE ?",
    answer:
      "Un VPN n'est généralement pas nécessaire car nos flux utilisent des connexions chiffrées SSL/TLS qui contournent le bridage opérateur. Cependant, notre service est 100% compatible avec tous les VPN du marché si vous préférez l'utiliser.",
  },
];

export const FAQ_ITEMS = FAQS_DATA;

