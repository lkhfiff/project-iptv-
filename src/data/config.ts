export interface SiteConfig {
  brandName: string;
  brandShort: string;
  brandTagline: string;
  brandDescription: string;
  businessName: string;
  whatsappDisplayName: string;
  whatsappNumber: string; // e.g. "212600123456" for wa.me
  whatsappDisplayNumber: string;
  whatsappFormattedPhone: string;
  supportEmail: string;
  metrics: {
    channelsCount: string;
    vodCount: string;
    uptimePercentage: string;
    resolution: string;
    antiFreezeVersion: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  brandName: "AETHER+",
  brandShort: "AETHER+",
  brandTagline: "The Pinnacle of Cinematic Streaming",
  brandDescription:
    "An ultra-premium streaming platform. Access over 28,000 live channels, 135,000+ on-demand 4K movies & complete series, and world sports with Anti-Freeze™ 9.9 technology.",
  businessName: "AETHER+ Streaming",
  whatsappDisplayName: "Chat with AETHER+ Concierge",
  whatsappNumber: "212600123456",
  whatsappDisplayNumber: "+212 600-123456",
  whatsappFormattedPhone: "+212 600-123456",
  supportEmail: "vip@aetherstream.tv",
  metrics: {
    channelsCount: "28,500+",
    vodCount: "135,000+",
    uptimePercentage: "99.99%",
    resolution: "4K UHD / 60FPS",
    antiFreezeVersion: "Anti-Freeze™ 9.9",
  },
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

  let message = `Hello ${SITE_CONFIG.businessName}!\n\nI would like to purchase a subscription:\n`;
  message += `• Plan: ${planTitle}\n`;
  message += `• Duration: ${duration}\n`;
  message += `• Price: ${price}\n`;
  message += `• Connections: ${connections} Device(s)\n`;
  if (additionalNotes) {
    message += `• Device/Notes: ${additionalNotes}\n`;
  }
  message += `\nPlease provide me with instant activation instructions. Thank you!`;

  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function generateWhatsAppContactUrl(inquiry = "VIP Setup Inquiry"): string {
  const message = `Hello ${SITE_CONFIG.whatsappDisplayName}!\n\nI would like to inquire about: ${inquiry}. Please provide more details.`;
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
