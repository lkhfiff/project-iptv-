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
    name: "Starter Pass",
    duration: "1 Month",
    durationMonths: 1,
    price: "$14.99",
    periodLabel: "/month",
    connections: 1,
    benefits: [
      "28,500+ Live Worldwide Channels",
      "135,000+ VOD Movies & Series in 4K",
      "All Premium Sports & Live Events",
      "Anti-Freeze™ 9.9 Zero-Buffering",
      "Instant WhatsApp Activation",
    ],
  },
  {
    id: "plan-3m",
    name: "Quarterly Pass",
    duration: "3 Months",
    durationMonths: 3,
    price: "$34.99",
    periodLabel: "/3 months",
    originalPrice: "$44.99",
    badge: "Save 25%",
    connections: 1,
    benefits: [
      "28,500+ Live Worldwide Channels",
      "135,000+ VOD Movies & Series in 4K",
      "All Premium Sports & PPV Passes",
      "Anti-Freeze™ 9.9 Fast CDN Nodes",
      "Instant WhatsApp Activation",
    ],
  },
  {
    id: "plan-6m",
    name: "Semi-Annual",
    duration: "6 Months",
    durationMonths: 6,
    price: "$54.99",
    periodLabel: "/6 months",
    originalPrice: "$79.99",
    badge: "Save 40%",
    connections: 2,
    benefits: [
      "28,500+ Live Worldwide Channels",
      "135,000+ VOD Movies & Series in 4K",
      "2 Devices Multi-Room Streaming",
      "Anti-Freeze™ 9.9 Priority Cluster",
      "24/7 Priority WhatsApp Line",
    ],
  },
  {
    id: "plan-12m",
    name: "Annual VIP Cinema",
    duration: "12 Months",
    durationMonths: 12,
    price: "$79.99",
    periodLabel: "/year",
    originalPrice: "$159.99",
    badge: "Best Value • 50% Off",
    isRecommended: true,
    connections: 2,
    benefits: [
      "28,500+ Live Worldwide Channels in 4K",
      "135,000+ VOD Movies & TV Series",
      "2 Devices Multi-Room Included",
      "Dedicated 10Gbps Private CDN",
      "VIP Dedicated WhatsApp Concierge",
    ],
  },
];
