export interface SiteConfig {
  brandName: string;
  brandShort: string;
  brandTagline: string;
  brandDescription: string;
  whatsappNumber: string; // international format without spaces or symbols for wa.me e.g. "212600123456"
  whatsappDisplayNumber: string;
  supportEmail: string;
  telegramUrl: string;
  metrics: {
    channelsCount: string;
    vodCount: string;
    uptimePercentage: string;
    resolution: string;
    antiFreezeVersion: string;
    activeUsers: string;
  };
  navigation: {
    label: string;
    href: string;
    badge?: string;
  }[];
}

export const SITE_CONFIG: SiteConfig = {
  brandName: "AETHER+",
  brandShort: "AETHER+",
  brandTagline: "The Pinnacle of Cinematic Television",
  brandDescription:
    "An ultra-premium streaming ecosystem engineered for purists. Access over 28,000 live global channels, 130,000+ on-demand blockbusters in uncompressed 4K HDR, and every major sports championship with zero buffering.",
  whatsappNumber: "212600123456",
  whatsappDisplayNumber: "+212 600-123456",
  supportEmail: "concierge@aetherstream.tv",
  telegramUrl: "https://t.me/aetherstream",
  metrics: {
    channelsCount: "28,500+",
    vodCount: "135,000+",
    uptimePercentage: "99.99%",
    resolution: "4K UHD / 60FPS",
    antiFreezeVersion: "Anti-Freeze™ 9.9",
    activeUsers: "42,000+",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Live TV", href: "/live-tv", badge: "28k+" },
    { label: "Movies", href: "/movies" },
    { label: "Series", href: "/series" },
    { label: "Sports", href: "/sports", badge: "LIVE" },
    { label: "Pricing", href: "/pricing" },
    { label: "Devices", href: "/devices" },
    { label: "FAQ", href: "/faq" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

/**
 * Generates an official WhatsApp subscription order link with pre-filled details.
 */
export function generateWhatsAppSubscriptionUrl(params: {
  planTitle: string;
  duration: string;
  price: string;
  connections?: number | string;
  additionalNotes?: string;
}): string {
  const { planTitle, duration, price, connections = 1, additionalNotes } = params;

  let message = `Hello ${SITE_CONFIG.brandName}! I am interested in purchasing your IPTV subscription.\n\n`;
  message += `✦ Plan: ${planTitle}\n`;
  message += `✦ Duration: ${duration}\n`;
  message += `✦ Price: ${price}\n`;
  message += `✦ Active Connections: ${connections} Device(s)\n`;
  if (additionalNotes) {
    message += `✦ Device / Notes: ${additionalNotes}\n`;
  }
  message += `\nPlease provide me with instant activation instructions and payment details. Thank you!`;

  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates a general WhatsApp contact inquiry link.
 */
export function generateWhatsAppContactUrl(inquiryType = "General Inquiry"): string {
  const message = `Hello ${SITE_CONFIG.brandName} Concierge Team,\n\nI have a question regarding ${inquiryType}. Could you please assist me with activation and compatibility?`;
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates a WhatsApp Free Trial or Test request link.
 */
export function generateWhatsAppTrialUrl(deviceType = "Smart TV / Firestick"): string {
  const message = `Hello ${SITE_CONFIG.brandName}! I would like to request a 24-Hour VIP 4K Test on my device (${deviceType}). Please send me test playlist credentials.`;
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

