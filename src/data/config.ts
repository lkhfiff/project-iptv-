export interface SiteConfig {
  brandName: string;
  brandShort: string;
  brandTagline: string;
  brandDescription: string;
  businessName: string;
  conciergeDisplayName: string;
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
  brandName: "NOUDINE",
  brandShort: "NOUDINE",
  brandTagline: "Le Sommet du Streaming Cinématographique",
  brandDescription:
    "Plateforme de divertissement ultra-premium. Accédez à plus de 28 500 chaînes directes mondiales, 135 000 films et séries en 4K UHD, retransmissions sportives et technologie Anti-Freeze™ 9.9.",
  businessName: "NOUDINE Streaming",
  conciergeDisplayName: "Conciergerie VIP NOUDINE",
  whatsappDisplayName: "Conciergerie VIP NOUDINE",
  whatsappNumber: "212600123456",
  whatsappDisplayNumber: "+212 600-123456",
  whatsappFormattedPhone: "+212 600-123456",
  supportEmail: "vip@noudine.tv",
  metrics: {
    channelsCount: "28,500+",
    vodCount: "135,000+",
    uptimePercentage: "99.99%",
    resolution: "4K UHD / 60FPS",
    antiFreezeVersion: "Anti-Freeze™ 9.9",
  },
};

/**
 * Generates an official direct subscription order link with pre-filled details.
 */
export function generateSubscriptionOrderUrl(params: {
  planTitle: string;
  duration: string;
  price: string;
  connections?: number | string;
  additionalNotes?: string;
}): string {
  const { planTitle, duration, price, connections = 1, additionalNotes } = params;

  let message = `Bonjour l'équipe ${SITE_CONFIG.brandName} !\n\n`;
  message += `Je souhaite activer mon abonnement :\n`;
  message += `• Formule : ${planTitle}\n`;
  message += `• Durée : ${duration}\n`;
  message += `• Tarif : ${price}\n`;
  message += `• Écrans : ${connections} Appareil(s)\n`;
  if (additionalNotes) {
    message += `• Détails / Appareil : ${additionalNotes}\n`;
  }
  message += `\nMerci de me transmettre mes accès instantanés.`;

  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Backward-compatible alias
export const generateWhatsAppSubscriptionUrl = generateSubscriptionOrderUrl;

export function generateDirectContactUrl(inquiry = "Accès VIP"): string {
  const message = `Bonjour ${SITE_CONFIG.conciergeDisplayName} !\n\nJe souhaite obtenir des informations concernant : ${inquiry}. Merci !`;
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Backward-compatible alias
export const generateWhatsAppContactUrl = generateDirectContactUrl;
