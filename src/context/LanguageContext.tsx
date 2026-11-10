"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "fr" | "en" | "ar";

export interface Translations {
  nav: {
    home: string;
    channels: string;
    pricing: string;
    devices: string;
    freeTrial: string;
    faq: string;
    contact: string;
    orderNow: string;
  };
  hero: {
    badge: string;
    headline: string;
    headlineHighlight: string;
    subtitle: string;
    ctaTrial: string;
    ctaPricing: string;
    trust4k: string;
    trustNoFreeze: string;
    trustSupport: string;
    trustChannels: string;
  };
  features: {
    title: string;
    subtitle: string;
  };
  channels: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    all: string;
    sports: string;
    cinema: string;
    series: string;
    kids: string;
    news: string;
    docs: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    toggle1Screen: string;
    toggle2Screens: string;
    popular: string;
    choosePlan: string;
    guarantee: string;
  };
  trial: {
    title: string;
    subtitle: string;
    nameLabel: string;
    phoneLabel: string;
    deviceLabel: string;
    submitBtn: string;
    instantActivation: string;
  };
  common: {
    channelsCount: string;
    vodCount: string;
    uptime: string;
    happyClients: string;
    support247: string;
    antiFreeze: string;
  };
}

const TRANSLATIONS: Record<Language, Translations> = {
  fr: {
    nav: {
      home: "Accueil",
      channels: "Chaînes",
      pricing: "Tarifs",
      devices: "Appareils & Tutos",
      freeTrial: "Essai Gratuit",
      faq: "FAQ",
      contact: "Contact",
      orderNow: "Activer Mon Accès",
    },
    hero: {
      badge: "SERVEURS ULTRA-RAPIDES 10 GBPS • SANS COUPURE",
      headline: "Toutes vos chaînes.",
      headlineHighlight: "Une seule application.",
      subtitle:
        "Accédez à plus de 28 500 chaînes directes mondiales en 4K UHD, tous les événements sportifs sans latence et 135 000 films et séries VOD.",
      ctaTrial: "Essai Gratuit 24H",
      ctaPricing: "Voir les Tarifs",
      trust4k: "4K Ultra HD & 60 FPS",
      trustNoFreeze: "Technologie Anti-Freeze™ 9.9",
      trustSupport: "Support VIP 24/7 WhatsApp",
      trustChannels: "+28 500 Chaînes Directes",
    },
    features: {
      title: "L'Infrastructure IPTV la Plus Stable d'Europe",
      subtitle: "Conçu pour les passionnés de sport et de cinéma exigeant une fluidité absolue sans coupure.",
    },
    channels: {
      title: "Un Catalogue Mondial Inégalé",
      subtitle: "Explorez nos bouquets premium classés par catégories et pays avec flux haute fidélité.",
      searchPlaceholder: "Rechercher une chaîne, un bouquet, un pays...",
      all: "Toutes",
      sports: "Sport",
      cinema: "Cinéma",
      series: "Séries VOD",
      kids: "Enfants",
      news: "Actualités",
      docs: "Documentaires",
    },
    pricing: {
      title: "Des Tarifs Clairs, Zéro Engagement",
      subtitle: "Activation instantanée en 3 minutes sur tous vos appareils après validation.",
      toggle1Screen: "1 Écran",
      toggle2Screens: "2 Écrans Simultanés",
      popular: "Le Plus Populaire",
      choosePlan: "Choisir ce Plan",
      guarantee: "Garantie Satisfait ou Remboursé sous 7 jours",
    },
    trial: {
      title: "Demandez Votre Test Gratuit 24H",
      subtitle: "Testez la qualité de nos serveurs sans engagement. Vos accès sont envoyés immédiatement sur WhatsApp.",
      nameLabel: "Nom / Prénom",
      phoneLabel: "Numéro WhatsApp (avec indicatif pays)",
      deviceLabel: "Votre Appareil Principal",
      submitBtn: "Recevoir Mes Accès Immédiatement",
      instantActivation: "Activation automatique en moins de 3 minutes",
    },
    common: {
      channelsCount: "28 500+ Chaînes",
      vodCount: "135 000+ VOD",
      uptime: "99.9% Uptime",
      happyClients: "48 000+ Clients",
      support247: "Assistance VIP 24/7",
      antiFreeze: "Anti-Freeze™ 9.9",
    },
  },
  en: {
    nav: {
      home: "Home",
      channels: "Channels",
      pricing: "Pricing",
      devices: "Devices & Setup",
      freeTrial: "Free Trial",
      faq: "FAQ",
      contact: "Contact",
      orderNow: "Get Instant Access",
    },
    hero: {
      badge: "10 GBPS ULTRA-FAST SERVERS • BUFFER-FREE",
      headline: "All your channels.",
      headlineHighlight: "One single app.",
      subtitle:
        "Access over 28,500 live world channels in 4K UHD, all sports events with zero latency, and 135,000+ VOD movies and series.",
      ctaTrial: "24h Free Trial",
      ctaPricing: "View Plans",
      trust4k: "4K Ultra HD & 60 FPS",
      trustNoFreeze: "Anti-Freeze™ 9.9 Tech",
      trustSupport: "24/7 WhatsApp VIP Support",
      trustChannels: "+28,500 Live Channels",
    },
    features: {
      title: "The Most Stable IPTV Network",
      subtitle: "Engineered for sports and cinema lovers who demand absolute fluidity without buffering.",
    },
    channels: {
      title: "Unrivaled Global Lineup",
      subtitle: "Browse premium bouquets sorted by categories and countries with high-bitrate streams.",
      searchPlaceholder: "Search channel, package, country...",
      all: "All",
      sports: "Sports",
      cinema: "Cinema",
      series: "VOD Series",
      kids: "Kids",
      news: "News",
      docs: "Documentaries",
    },
    pricing: {
      title: "Transparent Plans, No Commitment",
      subtitle: "Instant 3-minute activation on all your devices upon order validation.",
      toggle1Screen: "1 Screen",
      toggle2Screens: "2 Simultaneous Screens",
      popular: "Most Popular",
      choosePlan: "Choose Plan",
      guarantee: "7-Day Money-Back Guarantee",
    },
    trial: {
      title: "Request Your 24H Free Test",
      subtitle: "Test our server speed with zero risk. Your credentials are sent directly via WhatsApp.",
      nameLabel: "Full Name",
      phoneLabel: "WhatsApp Number (with country code)",
      deviceLabel: "Your Primary Device",
      submitBtn: "Receive My Access Now",
      instantActivation: "Automatic setup within 3 minutes",
    },
    common: {
      channelsCount: "28,500+ Channels",
      vodCount: "135,000+ VOD",
      uptime: "99.9% Uptime",
      happyClients: "48,000+ Happy Users",
      support247: "24/7 VIP Support",
      antiFreeze: "Anti-Freeze™ 9.9",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      channels: "القنوات",
      pricing: "الأسعار",
      devices: "الأجهزة والتشغيل",
      freeTrial: "تجربة مجانية",
      faq: "الأسئلة الشائعة",
      contact: "اتصل بنا",
      orderNow: "تفعيل اشتراكي الآن",
    },
    hero: {
      badge: "خوادم فائقة السرعة 10 جيجابت • بدون أي تقطيع",
      headline: "جميع قنواتك المفضلة.",
      headlineHighlight: "في تطبيق واحد متكامل.",
      subtitle:
        "شاهد أكثر من 28,500 قناة عالمية بجودة 4K UHD، مع جميع المباريات الرياضية بدون تأخير وأكثر من 135,000 فيلم ومسلسل.",
      ctaTrial: "تجربة مجانية 24 ساعة",
      ctaPricing: "باقات الاشتراك",
      trust4k: "جودة 4K UHD و 60 إطار",
      trustNoFreeze: "تقنية مانع التقطيع Anti-Freeze 9.9",
      trustSupport: "دعم فني واتساب 24/7",
      trustChannels: "+28,500 قناة مباشرة",
    },
    features: {
      title: "الشبكة الأكثر استقراراً وقوة للبث المباشر",
      subtitle: "مصممة خصيصاً لعشاق الرياضة والسينما الباحثين عن أعلى ثبات دون أي انقطاع.",
    },
    channels: {
      title: "مكتبة قنوات عالمية لا تضاهى",
      subtitle: "استكشف باقاتنا المصنفة حسب الدول والفئات بجودة بث فائقة النقاء.",
      searchPlaceholder: "ابحث عن قناة، باقة، أو دولة...",
      all: "الكل",
      sports: "رياضة",
      cinema: "سينما",
      series: "مسلسلات",
      kids: "أطفال",
      news: "أخبار",
      docs: "وثائقيات",
    },
    pricing: {
      title: "أسعار واضحة وبدون التزامات خفية",
      subtitle: "تفعيل فوري خلال 3 دقائق على جميع أجهزتك بعد تأكيد الطلب.",
      toggle1Screen: "جهاز واحد",
      toggle2Screens: "جهازين في نفس الوقت",
      popular: "الأكثر طلباً",
      choosePlan: "اختر هذه الباقة",
      guarantee: "ضمان استرداد خلال 7 أيام",
    },
    trial: {
      title: "اطلب تجربتك المجانية لمدة 24 ساعة",
      subtitle: "جرب كفاءة خوادمنا مجاناً. سيتم إرسال بيانات الدخول فوراً عبر الواتساب.",
      nameLabel: "الاسم الكامل",
      phoneLabel: "رقم الواتساب (مع رمز الدولة)",
      deviceLabel: "نوع جهازك الرئيسي",
      submitBtn: "استلم بيانات الدخول فوراً",
      instantActivation: "تفعيل تلقائي خلال أقل من 3 دقائق",
    },
    common: {
      channelsCount: "+28,500 قناة",
      vodCount: "+135,000 فيديو",
      uptime: "ثبات 99.9%",
      happyClients: "+48,000 عميل راضٍ",
      support247: "دعم متميز 24/7",
      antiFreeze: "مانع التقطيع 9.9",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "fr",
  setLanguage: () => {},
  t: TRANSLATIONS.fr,
  isRTL: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("noudine_lang") as Language;
      if (saved && (saved === "fr" || saved === "en" || saved === "ar")) {
        setLanguageState(saved);
        updateHtmlAttributes(saved);
      }
    } catch {
      // ignore
    }
  }, []);

  const updateHtmlAttributes = (lang: Language) => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      if (lang === "ar") {
        document.documentElement.dir = "rtl";
      } else {
        document.documentElement.dir = "ltr";
      }
    }
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("noudine_lang", lang);
    } catch {
      // ignore
    }
    updateHtmlAttributes(lang);
  };

  const isRTL = language === "ar";
  const t = TRANSLATIONS[language] || TRANSLATIONS.fr;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
