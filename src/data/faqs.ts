export interface FAQItem {
  id: string;
  category: "Setup & Delivery" | "Quality & Anti-Freeze" | "Channels & Sports" | "Ordering & Support";
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    category: "Setup & Delivery",
    question: "How fast is my subscription delivered after messaging on WhatsApp?",
    answer:
      "Subscription credentials and setup links are delivered instantly via our dedicated WhatsApp concierge team. In 99% of cases, your line is provisioned and tested within 2 to 5 minutes of your confirmation. Our team walks you through device setup step-by-step until your screen is streaming.",
  },
  {
    id: "faq-2",
    category: "Ordering & Support",
    question: "Why do you handle orders through WhatsApp instead of a standard checkout?",
    answer:
      "We believe in human-assisted luxury service. WhatsApp enables 1-on-1 personalized setup assistance tailored to your exact TV model and country. It allows our technicians to test your connection before you start, provide instant remote configuration, and offer immediate 24/7 support whenever you need assistance or channel updates.",
  },
  {
    id: "faq-3",
    category: "Quality & Anti-Freeze",
    question: "What is your Anti-Freeze™ 9.9 technology and how does it prevent buffering?",
    answer:
      "Unlike conventional IPTV providers that rely on single overwhelmed upstream servers, AETHER+ utilizes a decentralized content delivery network (CDN) spanning 18 high-capacity data centers across Europe, North America, and Asia. When high-traffic events occur (such as the Champions League Final or El Clásico), traffic is dynamically load-balanced with H.265/HEVC high-efficiency encoding, eliminating freezing and packet drop.",
  },
  {
    id: "faq-4",
    category: "Channels & Sports",
    question: "Which sports competitions and channels are included?",
    answer:
      "Every subscription includes all major sports networks in true 4K 60FPS: Premier League, UEFA Champions League, La Liga, Serie A, Bundesliga, Ligue 1, Formula 1, MotoGP, UFC PPV Main Cards, NBA, NFL RedZone, NHL, MLB, Tennis Grand Slams, and Golf. We carry Sky Sports, TNT Sports Ultimate, beIN Sports 4K, DAZN, ESPN+, Canal+ Sport, and Movistar+ with multiple language commentary options.",
  },
  {
    id: "faq-5",
    category: "Channels & Sports",
    question: "How frequently are movies and series updated?",
    answer:
      "Our VOD cinema library is updated daily. New cinema releases and streaming platform originals are added within 24 hours of release with multiple audio tracks and multi-language subtitles. Furthermore, subscribers can message our WhatsApp concierge anytime with a movie or series request, and our ingest team will add it within 24 hours.",
  },
  {
    id: "faq-6",
    category: "Quality & Anti-Freeze",
    question: "What internet speed do I need for smooth 4K streaming?",
    answer:
      "We recommend a minimum stable speed of 15 Mbps for Full HD (1080p) streams, and 30 to 50 Mbps for pure 4K UHD 60FPS and Dolby Vision content. We always advise connecting your streaming device via Ethernet cable or 5GHz Wi-Fi for optimal stability.",
  },
  {
    id: "faq-7",
    category: "Setup & Delivery",
    question: "Can I use my subscription on multiple devices simultaneously?",
    answer:
      "Yes! Our 1-Month and 3-Month plans default to 1 active device (with multi-connection add-on available), while our 6-Month and 12-Month Ultimate VIP plans include 2 to 3 multi-room simultaneous connections so your family can watch different channels on different TVs at the same time.",
  },
  {
    id: "faq-8",
    category: "Ordering & Support",
    question: "Do you offer a money-back satisfaction guarantee?",
    answer:
      "Yes. We stand firmly behind our streaming quality. If our servers experience unresolvable technical issues or fail to deliver on your supported device within the first 7 days, our WhatsApp concierge will refund your order in full with no questions asked.",
  },
  {
    id: "faq-9",
    category: "Setup & Delivery",
    question: "Do I need a VPN to use AETHER+ IPTV?",
    answer:
      "A VPN is generally NOT required because our servers use encrypted HTTPS / SSL transport streams that bypass ISP throttling. However, if your local ISP implements strict streaming blocks or you prefer complete anonymity, our service is 100% compatible with all major VPNs (NordVPN, ExpressVPN, Surfshark, etc.).",
  },
];

