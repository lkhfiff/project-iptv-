export interface SubscriptionPlan {
  id: string;
  name: string;
  tagline: string;
  durationMonths: number;
  durationLabel: string;
  price: string;
  originalPrice?: string;
  perMonthPrice: string;
  savingsBadge?: string;
  isPopular?: boolean;
  isBestValue?: boolean;
  defaultConnections: number;
  supportedConnectionsOptions: {
    connections: number;
    price: string;
    label: string;
  }[];
  features: string[];
  specs: {
    channels: string;
    vod: string;
    resolution: string;
    antiFreeze: string;
    deliveryTime: string;
    epg: boolean;
    catchup: boolean;
  };
}

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: "plan-1-month",
    name: "Starter Pass",
    tagline: "Ideal for testing our cinema servers and experiencing pristine 4K quality.",
    durationMonths: 1,
    durationLabel: "1 Month",
    price: "$14.99",
    originalPrice: "$19.99",
    perMonthPrice: "$14.99",
    savingsBadge: "Trial Favorite",
    isPopular: false,
    isBestValue: false,
    defaultConnections: 1,
    supportedConnectionsOptions: [
      { connections: 1, price: "$14.99", label: "1 Device" },
      { connections: 2, price: "$21.99", label: "2 Devices (Multi-Room)" },
    ],
    features: [
      "28,500+ Live Worldwide Channels",
      "135,000+ VOD Movies & Complete TV Shows",
      "True 4K UHD, 1080p 60fps & HDR10+ Streams",
      "All Premium Sports & Pay-Per-View Events",
      "Anti-Freeze™ 9.9 Zero-Buffering CDN",
      "7-Day Electronic Program Guide (EPG)",
      "Instant Automated Delivery in < 3 Minutes",
      "Free Setup Guide for TiviMate, Smart TV & Firestick",
      "24/7 Dedicated WhatsApp Support",
    ],
    specs: {
      channels: "28,500+",
      vod: "135,000+",
      resolution: "4K UHD / 60FPS",
      antiFreeze: "Version 9.9 Enabled",
      deliveryTime: "Instant (< 3 min)",
      epg: true,
      catchup: true,
    },
  },
  {
    id: "plan-3-months",
    name: "Season Pass",
    tagline: "Great for sports seasons, tournaments, and continuous entertainment.",
    durationMonths: 3,
    durationLabel: "3 Months",
    price: "$34.99",
    originalPrice: "$49.99",
    perMonthPrice: "$11.66",
    savingsBadge: "Save 25%",
    isPopular: false,
    isBestValue: false,
    defaultConnections: 1,
    supportedConnectionsOptions: [
      { connections: 1, price: "$34.99", label: "1 Device" },
      { connections: 2, price: "$49.99", label: "2 Devices (Multi-Room)" },
    ],
    features: [
      "28,500+ Live Worldwide Channels",
      "135,000+ VOD Movies & Complete TV Shows",
      "True 4K UHD, 1080p 60fps & HDR10+ Streams",
      "All Premium Sports & Pay-Per-View Events",
      "Priority High-Bandwidth European & US Nodes",
      "7-Day Electronic Program Guide (EPG)",
      "Instant Automated Delivery in < 3 Minutes",
      "Full Device Compatibility (Apple TV, Firestick, Android)",
      "24/7 VIP WhatsApp Assistance",
    ],
    specs: {
      channels: "28,500+",
      vod: "135,000+",
      resolution: "4K UHD / 60FPS",
      antiFreeze: "Version 9.9 Enabled",
      deliveryTime: "Instant (< 3 min)",
      epg: true,
      catchup: true,
    },
  },
  {
    id: "plan-6-months",
    name: "Premier Pass",
    tagline: "Our highly demanded half-year pass with upgraded priority streaming channels.",
    durationMonths: 6,
    durationLabel: "6 Months",
    price: "$54.99",
    originalPrice: "$79.99",
    perMonthPrice: "$9.16",
    savingsBadge: "Save 40%",
    isPopular: true,
    isBestValue: false,
    defaultConnections: 1,
    supportedConnectionsOptions: [
      { connections: 1, price: "$54.99", label: "1 Device" },
      { connections: 2, price: "$74.99", label: "2 Devices (Multi-Room)" },
      { connections: 3, price: "$94.99", label: "3 Devices (Whole Home)" },
    ],
    features: [
      "28,500+ Live Worldwide Channels",
      "135,000+ VOD Movies & Complete TV Shows",
      "True 4K UHD, 1080p 60fps & HDR10+ Streams",
      "All Premium Sports & Pay-Per-View Events Included",
      "Anti-Freeze™ 9.9 Cluster with 99.99% Uptime SLA",
      "7-Day Electronic Program Guide (EPG) + Catch-Up",
      "VOD Request Access (Request new releases in WhatsApp)",
      "Multi-Room Simultaneous Streaming Available",
      "VIP Dedicated Account Concierge via WhatsApp",
    ],
    specs: {
      channels: "28,500+",
      vod: "135,000+",
      resolution: "4K UHD / 60FPS",
      antiFreeze: "Tier 1 Priority Nodes",
      deliveryTime: "Instant (< 2 min)",
      epg: true,
      catchup: true,
    },
  },
  {
    id: "plan-12-months",
    name: "Ultimate VIP Cinema Pass",
    tagline: "The complete flagship experience. Maximum savings, dedicated 10Gbps CDN nodes, and whole-home streaming.",
    durationMonths: 12,
    durationLabel: "12 Months",
    price: "$79.99",
    originalPrice: "$159.99",
    perMonthPrice: "$6.66",
    savingsBadge: "Best Value • 55% Off",
    isPopular: false,
    isBestValue: true,
    defaultConnections: 2,
    supportedConnectionsOptions: [
      { connections: 1, price: "$69.99", label: "1 Device" },
      { connections: 2, price: "$79.99", label: "2 Devices (Included)" },
      { connections: 3, price: "$104.99", label: "3 Devices (Family Pack)" },
    ],
    features: [
      "28,500+ Live Worldwide Channels in Uncompressed Quality",
      "135,000+ 4K UHD Movies & Complete Television Series",
      "2 Devices Included Simultaneously at No Extra Cost",
      "All Pay-Per-View, Champions League, UFC, F1 & NBA Passes",
      "Dedicated 10Gbps Private CDN Server Allocation",
      "Dolby Atmos 7.1 Audio & HDR10+ / Dolby Vision Streams",
      "Complete 14-Day EPG Guide & Catch-up on Major Channels",
      "Priority VIP WhatsApp Line with 1-on-1 Remote Setup",
      "Unlimited VOD Requests with 24h Movie Addition Guarantee",
      "100% Money-Back Satisfaction Guarantee (7 Days)",
    ],
    specs: {
      channels: "28,500+",
      vod: "135,000+",
      resolution: "Pure 4K UHD & Dolby Vision",
      antiFreeze: "Dedicated 10Gbps Cluster",
      deliveryTime: "Instant Automated VIP Setup",
      epg: true,
      catchup: true,
    },
  },
];

