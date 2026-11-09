export interface SubscriptionPlan {
  id: string;
  name: string;
  duration: string;
  durationMonths: number;
  price: string;
  periodLabel: string;
  originalPrice?: string;
  badge?: string;
  isRecommended?: boolean;
  connections: number;
  benefits: string[];
}

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: "plan-1m",
    name: "Pass Découverte",
    duration: "1 Mois",
    durationMonths: 1,
    price: "12 €",
    periodLabel: "/mois",
    connections: 1,
    benefits: [
      "28 500+ Chaînes Directes Mondiales",
      "135 000+ Films & Séries VOD en 4K",
      "Bouquets Sportifs & Événements Live",
      "Anti-Freeze™ 9.9 Sans Coupure",
      "Activation Immédiate en 2 Minutes",
    ],
  },
  {
    id: "plan-3m",
    name: "Pass Trimestriel",
    duration: "3 Mois",
    durationMonths: 3,
    price: "25 €",
    periodLabel: "/3 mois",
    originalPrice: "36 €",
    badge: "Économie 30%",
    connections: 1,
    benefits: [
      "28 500+ Chaînes Directes Mondiales",
      "135 000+ Films & Séries VOD en 4K",
      "Retransmissions Sports & Derbies",
      "Nœuds CDN Rapides Prioritaires",
      "Activation Immédiate en 2 Minutes",
    ],
  },
  {
    id: "plan-6m",
    name: "Pass Semestriel",
    duration: "6 Mois",
    durationMonths: 6,
    price: "39 €",
    periodLabel: "/6 mois",
    originalPrice: "72 €",
    badge: "Économie 45%",
    connections: 2,
    benefits: [
      "28 500+ Chaînes Directes Mondiales",
      "135 000+ Films & Séries VOD en 4K",
      "2 Écrans Multi-Room Inclus",
      "Cluster Serveur Prioritaire 10Gbps",
      "Assistance Conciergerie VIP 24/7",
    ],
  },
  {
    id: "plan-12m",
    name: "Pass Annuel VIP Cinema",
    duration: "12 Mois",
    durationMonths: 12,
    price: "59 €",
    periodLabel: "/an",
    originalPrice: "144 €",
    badge: "Meilleure Offre • Recommandé",
    isRecommended: true,
    connections: 2,
    benefits: [
      "28 500+ Chaînes Directes en 4K UHD",
      "135 000+ Films & Séries Récentes",
      "2 Écrans Simultanés Inclus",
      "Ligne Dédiée Ultra-Stable Anti-Freeze",
      "Configuration VIP 1-to-1 à Distance",
    ],
  },
];
