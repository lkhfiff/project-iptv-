export interface ChannelItem {
  id: string;
  name: string;
  logo: string;
  category: "Sports" | "Cinema" | "News" | "Documentary" | "Entertainment" | "Kids";
  country: string;
  countryCode: string;
  streamUrl: string; // Authorized HLS or placeholder demo
  status: "live" | "maintenance" | "drm-protected";
  resolution: string;
  bitrate: string;
  currentProgram: string;
  nextProgram: string;
}

export const CHANNELS_DATA: ChannelItem[] = [
  {
    id: "sky-sports-f1",
    name: "Sky Sports F1 UHD",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Sky_Sports_F1_logo_2020.svg/320px-Sky_Sports_F1_logo_2020.svg.png",
    category: "Sports",
    country: "United Kingdom",
    countryCode: "UK",
    streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    status: "live",
    resolution: "4K UHD 60FPS",
    bitrate: "22.5 Mbps",
    currentProgram: "Formula 1: Qualifying Live from Silverstone",
    nextProgram: "Ted's Notebook & Paddock Analysis",
  },
  {
    id: "bein-sports-1",
    name: "beIN Sports MENA 1 4K",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/BeIN_Sports_Logo.svg/320px-BeIN_Sports_Logo.svg.png",
    category: "Sports",
    country: "Arab World",
    countryCode: "MENA",
    streamUrl: "https://test-streams.mux.dev/test_001/stream.m3u8",
    status: "live",
    resolution: "Pure 4K HDR",
    bitrate: "24.0 Mbps",
    currentProgram: "UEFA Champions League: Matchday Hub",
    nextProgram: "Post-Match Reaction & Highlights",
  },
  {
    id: "canal-plus-4k",
    name: "Canal+ 4K UHD",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Canal%2B_2016.svg/320px-Canal%2B_2016.svg.png",
    category: "Cinema",
    country: "France",
    countryCode: "FR",
    streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    status: "live",
    resolution: "Dolby Vision 4K",
    bitrate: "19.8 Mbps",
    currentProgram: "Le Grand Cinéma: Gladiator II (4K Premiere)",
    nextProgram: "Canal Football Club Édition Spéciale",
  },
  {
    id: "tnt-sports-1",
    name: "TNT Sports 1 Ultimate 4K",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/TNT_Sports_logo.svg/320px-TNT_Sports_logo.svg.png",
    category: "Sports",
    country: "United Kingdom",
    countryCode: "UK",
    streamUrl: "https://test-streams.mux.dev/test_001/stream.m3u8",
    status: "live",
    resolution: "4K UHD 60FPS",
    bitrate: "21.2 Mbps",
    currentProgram: "Premier League Live: Match of the Weekend",
    nextProgram: "The Football Show Live",
  },
  {
    id: "hbo-max-live",
    name: "HBO Max 4K Live",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/HBO_Max_Logo.svg/320px-HBO_Max_Logo.svg.png",
    category: "Entertainment",
    country: "United States",
    countryCode: "US",
    streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    status: "live",
    resolution: "4K Dolby Atmos",
    bitrate: "22.0 Mbps",
    currentProgram: "The Penguin - Season Finale",
    nextProgram: "House of the Dragon Marathon",
  },
  {
    id: "movistar-laliga",
    name: "Movistar+ LaLiga 4K",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Movistar%2B_logo.svg/320px-Movistar%2B_logo.svg.png",
    category: "Sports",
    country: "Spain",
    countryCode: "ES",
    streamUrl: "https://test-streams.mux.dev/test_001/stream.m3u8",
    status: "live",
    resolution: "4K UHD 60FPS",
    bitrate: "20.5 Mbps",
    currentProgram: "El Clásico: Directo Bernabéu",
    nextProgram: "El Post de LaLiga con Resúmenes",
  },
  {
    id: "nat-geo-4k",
    name: "National Geographic Wild 4K",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/National_Geographic_Wild_logo.svg/320px-National_Geographic_Wild_logo.svg.png",
    category: "Documentary",
    country: "United States",
    countryCode: "US",
    streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    status: "live",
    resolution: "4K HDR10+",
    bitrate: "18.5 Mbps",
    currentProgram: "Predators of the Serengeti in 4K HDR",
    nextProgram: "Deep Blue: Secrets of the Trench",
  },
  {
    id: "sky-sport-bundesliga",
    name: "Sky Sport Bundesliga 1 UHD",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Sky_Sport_Bundesliga_Logo_2020.svg/320px-Sky_Sport_Bundesliga_Logo_2020.svg.png",
    category: "Sports",
    country: "Germany",
    countryCode: "DE",
    streamUrl: "https://test-streams.mux.dev/test_001/stream.m3u8",
    status: "live",
    resolution: "4K 60FPS",
    bitrate: "21.0 Mbps",
    currentProgram: "Bundesliga Konferenz am Samstag",
    nextProgram: "Alle Spiele, Alle Tore UHD",
  },
];
