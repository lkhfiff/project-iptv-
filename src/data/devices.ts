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
    badge: "Most Popular Device",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800&auto=format&fit=crop",
    description: "Flawless hardware decoding up to 4K 60fps HDR. Perfect match with TiviMate Premium or IPTV Smarters Pro.",
    recommendedApps: ["TiviMate Premium (Recommended)", "IPTV Smarters Pro", "XCIPTV", "IBO Player Pro"],
    setupTime: "2 Minutes",
    difficulty: "Easy (2 min)",
    steps: [
      "Turn on your Firestick and install the 'Downloader' app from the Amazon Appstore.",
      "Open Downloader and enter the app code sent to you via WhatsApp after purchase.",
      "Launch the installed app, enter your AETHER+ Xtream Codes or M3U link.",
      "Enjoy 28,000+ channels and 130,000+ movies in pure 4K!",
    ],
  },
  {
    id: "appletv",
    name: "Apple TV 4K (tvOS)",
    category: "streaming-box",
    iconName: "Apple",
    badge: "Cinematic Reference",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=800&auto=format&fit=crop",
    description: "Experience the smoothest 60fps interface with Apple A15 Bionic processing, Dolby Vision and spatial audio.",
    recommendedApps: ["Snappier IPTV", "IPTVX (Apple TV UI)", "GSE Smart IPTV", "iPlayTV"],
    setupTime: "2 Minutes",
    difficulty: "Easy (2 min)",
    steps: [
      "Open the App Store on your Apple TV 4K.",
      "Search and download 'Snappier IPTV' or 'IPTVX'.",
      "Scan the QR code or enter your Xtream Codes API credentials sent via WhatsApp.",
      "Immerse yourself in our cinematic streaming experience.",
    ],
  },
  {
    id: "smart-tv",
    name: "Smart TVs (Samsung Tizen & LG webOS)",
    category: "smart-tv",
    iconName: "Tv",
    badge: "No Extra Box Needed",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=800&auto=format&fit=crop",
    description: "Stream directly through your television without any additional dongles or wires using certified smart TV applications.",
    recommendedApps: ["IBO Player Pro", "Flix IPTV", "Smart IPTV (SIPTV)", "Nanomid Player"],
    setupTime: "3 Minutes",
    difficulty: "Straightforward (3 min)",
    steps: [
      "Open Samsung Smart Hub or LG Content Store on your TV.",
      "Search for and install 'IBO Player Pro' or 'Flix IPTV'.",
      "Copy down your TV's MAC Address and Device Key shown on the TV screen.",
      "Send your MAC Address to our WhatsApp agent — we upload and activate your playlist remotely!",
    ],
  },
  {
    id: "android-tv",
    name: "Android TV & Google TV (Nvidia Shield, Chromecast, Sony, Xiaomi)",
    category: "streaming-box",
    iconName: "Cpu",
    badge: "Audiophile & Purist Pick",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop",
    description: "Unmatched performance with Dolby Atmos passthrough, frame rate matching, and intuitive cable-like EPG guides.",
    recommendedApps: ["TiviMate IPTV (Gold Standard)", "Sparkle TV", "IPTV Smarters Pro", "OTT Navigator"],
    setupTime: "2 Minutes",
    difficulty: "Easy (2 min)",
    steps: [
      "Open Google Play Store on your Android TV.",
      "Search for and install 'TiviMate IPTV Player'.",
      "Click 'Add Playlist' -> 'Xtream Codes'.",
      "Input the server URL, username, and password provided by WhatsApp concierge.",
    ],
  },
  {
    id: "mag-formuler",
    name: "MAG Box & Formuler (Z11 Pro, GTV)",
    category: "dedicated-box",
    iconName: "HardDrive",
    badge: "Hardware Stalker Portal",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    description: "Dedicated hardware IPTV receivers with ultra-fast channel zapping and classic remote control numbers.",
    recommendedApps: ["MYTVOnline 3 (Formuler)", "Stalker Portal Middleware (MAG)", "Ministra Player"],
    setupTime: "1 Minute",
    difficulty: "Instant (1 min)",
    steps: [
      "Send your MAG / Formuler MAC address (starts with 00:1A:79:...) to our WhatsApp concierge.",
      "Our team registers your MAC address on our dedicated stalker portal.",
      "Input our Portal URL into your device settings.",
      "Reboot your device and start channel surfing instantly.",
    ],
  },
  {
    id: "mobile-tablet",
    name: "iOS & Android (iPhone, iPad, Galaxy)",
    category: "mobile",
    iconName: "Smartphone",
    badge: "Stream Anywhere",
    image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=800&auto=format&fit=crop",
    description: "Never miss a match or episode on the move. Download in seconds with offline support and picture-in-picture.",
    recommendedApps: ["GSE Smart IPTV", "IPTV Smarters Pro (iOS/Android)", "247 IPTV Player", "VLC Mobile"],
    setupTime: "1 Minute",
    difficulty: "Instant (1 min)",
    steps: [
      "Install IPTV Smarters or GSE Smart IPTV from App Store or Google Play.",
      "Login with your Xtream Codes API credentials.",
      "Stream live channels or download VODs over 4G/5G and Wi-Fi.",
    ],
  },
  {
    id: "pc-mac",
    name: "PC, Mac & Web Player",
    category: "computer",
    iconName: "Laptop",
    badge: "Workstation Viewing",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop",
    description: "Multi-window sports tracking, ultrawide monitor support, and direct web browser streaming with no install required.",
    recommendedApps: ["AETHER Web Player", "VLC Media Player", "IPTV Smarters Desktop", "SFVIP Player"],
    setupTime: "1 Minute",
    difficulty: "Instant (1 min)",
    steps: [
      "Open your preferred browser or download IPTV Smarters for Windows/macOS.",
      "Enter the web player link or Xtream credentials provided upon WhatsApp purchase.",
      "Enjoy full HD/4K playback directly on your computer.",
    ],
  },
];

