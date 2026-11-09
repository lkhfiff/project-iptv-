export interface DeviceGuide {
  id: string;
  name: string;
  category: "streaming-box" | "smart-tv" | "mobile" | "computer" | "dedicated-box";
  iconName: string;
  badge?: string;
  image: string;
  description: string;
  recommendedApps: string[];
  setupTime: string;
  difficulty: "Instant (1 min)" | "Easy (2 min)" | "Straightforward (3 min)";
  steps: string[];
}

export const SUPPORTED_DEVICES: DeviceGuide[] = [
  {
    id: "firestick",
    name: "Amazon Fire TV & Firestick 4K",
    category: "streaming-box",
    iconName: "Flame",
    badge: "Le Plus Populaire",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800&auto=format&fit=crop",
    description: "Décodage matériel parfait jusqu'en 4K 60fps HDR. Compatible avec TiviMate Premium ou IPTV Smarters Pro.",
    recommendedApps: ["TiviMate Premium (Recommandé)", "IPTV Smarters Pro", "XCIPTV", "IBO Player Pro"],
    setupTime: "2 Minutes",
    difficulty: "Easy (2 min)",
    steps: [
      "Allumez votre Firestick et installez l'application 'Downloader' depuis l'Appstore Amazon.",
      "Ouvrez Downloader et téléchargez votre application préférée (ex : code 29938 pour Smarters).",
      "Lancez l'application et saisissez vos identifiants NOUDINE (Xtream Codes ou lien M3U).",
      "Profitez de plus de 28 500 chaînes et 135 000 films et séries en 4K UHD !",
    ],
  },
  {
    id: "appletv",
    name: "Apple TV 4K (tvOS)",
    category: "streaming-box",
    iconName: "Apple",
    badge: "Référence Cinéma",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=800&auto=format&fit=crop",
    description: "Fluidité absolue 60fps avec processeur Apple Bionic, Dolby Vision et audio spatial.",
    recommendedApps: ["Snappier IPTV", "IPTVX (Interface Apple TV)", "GSE Smart IPTV", "iPlayTV"],
    setupTime: "2 Minutes",
    difficulty: "Easy (2 min)",
    steps: [
      "Ouvrez l'App Store sur votre Apple TV 4K.",
      "Téléchargez 'Snappier IPTV' ou 'IPTVX'.",
      "Saisissez vos identifiants Xtream Codes fournis par votre conciergerie.",
      "Plongez dans une expérience de streaming cinématographique ultra-fluide.",
    ],
  },
  {
    id: "smart-tv",
    name: "Smart TV (Samsung Tizen & LG webOS)",
    category: "smart-tv",
    iconName: "Tv",
    badge: "Sans Boîtier Externe",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=800&auto=format&fit=crop",
    description: "Visionnez directement sur votre téléviseur sans câble additionnel via les applications certifiées.",
    recommendedApps: ["IBO Player Pro", "Flix IPTV", "Smart IPTV (SIPTV)", "Nanomid Player"],
    setupTime: "3 Minutes",
    difficulty: "Straightforward (3 min)",
    steps: [
      "Ouvrez le Samsung Smart Hub ou le LG Content Store sur votre écran.",
      "Téléchargez 'IBO Player Pro' ou 'Flix IPTV'.",
      "Notez l'adresse MAC et Device Key affichées à l'écran de votre téléviseur.",
      "Transmettez votre adresse MAC à la conciergerie : nous activons votre liste à distance en 2 minutes !",
    ],
  },
  {
    id: "android-tv",
    name: "Android TV & Google TV (Nvidia Shield, Chromecast, Sony, Xiaomi)",
    category: "streaming-box",
    iconName: "Cpu",
    badge: "Choix Audiophile & Puriste",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop",
    description: "Performances incomparables avec passthrough Dolby Atmos et guide des programmes EPG instantané.",
    recommendedApps: ["TiviMate IPTV (Standard d'or)", "Sparkle TV", "IPTV Smarters Pro", "OTT Navigator"],
    setupTime: "2 Minutes",
    difficulty: "Easy (2 min)",
    steps: [
      "Ouvrez le Google Play Store sur votre Android TV.",
      "Installez 'TiviMate IPTV Player'.",
      "Cliquez sur 'Ajouter une liste' -> 'Xtream Codes'.",
      "Saisissez l'URL serveur, le nom d'utilisateur et le mot de passe fournis par votre conciergerie.",
    ],
  },
  {
    id: "mag-formuler",
    name: "MAG Box & Formuler (Z11 Pro, GTV)",
    category: "dedicated-box",
    iconName: "HardDrive",
    badge: "Portail Stalker Matériel",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    description: "Récepteurs IPTV dédiés avec zapping ultra-rapide et télécommande avec pavé numérique classique.",
    recommendedApps: ["MYTVOnline 3 (Formuler)", "Stalker Portal Middleware (MAG)", "Ministra Player"],
    setupTime: "1 Minute",
    difficulty: "Instant (1 min)",
    steps: [
      "Transmettez votre adresse MAC MAG / Formuler (commençant par 00:1A:79:...) à la conciergerie.",
      "Notre équipe enregistre votre adresse sur notre portail stalker haute vitesse.",
      "Saisissez l'URL de portail NOUDINE dans les paramètres de votre boîtier.",
      "Redémarrez et zappez instantanément sur l'ensemble des chaînes.",
    ],
  },
  {
    id: "mobile-tablet",
    name: "iOS & Android (iPhone, iPad, Galaxy)",
    category: "mobile",
    iconName: "Smartphone",
    badge: "Visionnage Nomade",
    image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=800&auto=format&fit=crop",
    description: "Ne manquez aucun match en déplacement. Mode Picture-in-Picture et visionnage 4G/5G fluide.",
    recommendedApps: ["GSE Smart IPTV", "IPTV Smarters Pro (iOS/Android)", "247 IPTV Player", "VLC Mobile"],
    setupTime: "1 Minute",
    difficulty: "Instant (1 min)",
    steps: [
      "Installez IPTV Smarters ou GSE Smart IPTV depuis l'App Store ou Google Play.",
      "Connectez-vous avec vos identifiants Xtream Codes fournis.",
      "Profitez de vos chaînes en direct et films en streaming où que vous soyez.",
    ],
  },
  {
    id: "pc-mac",
    name: "PC Windows & Mac",
    category: "computer",
    iconName: "Laptop",
    badge: "Multitâche & Bureau",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop",
    description: "Suivi multi-écrans des matchs de football, compatible écrans UltraWide et lecteurs vidéo natifs.",
    recommendedApps: ["Lecteur Web NOUDINE", "VLC Media Player", "IPTV Smarters Desktop", "SFVIP Player"],
    setupTime: "1 Minute",
    difficulty: "Instant (1 min)",
    steps: [
      "Ouvrez votre navigateur ou téléchargez IPTV Smarters pour Windows/macOS.",
      "Saisissez vos accès Xtream fournis lors de la commande.",
      "Bénéficiez d'une lecture 4K fluide directement sur votre écran d'ordinateur.",
    ],
  },
];
