export interface LiveMatch {
  id: string;
  competition: string;
  competitionLogo: string;
  status: "LIVE" | "UPCOMING" | "FINISHED";
  minute?: string;
  homeTeam: {
    name: string;
    logo: string;
    score?: number;
  };
  awayTeam: {
    name: string;
    logo: string;
    score?: number;
  };
  kickoffTime: string;
  venue: string;
  channelBroadcast: string;
}

export const CURATED_LIVE_MATCHES: LiveMatch[] = [
  {
    id: "match-ucl-1",
    competition: "UEFA Champions League",
    competitionLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/UEFA_Champions_League_logo_2.svg/320px-UEFA_Champions_League_logo_2.svg.png",
    status: "LIVE",
    minute: "72'",
    homeTeam: {
      name: "Real Madrid",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/320px-Real_Madrid_CF.svg.png",
      score: 2,
    },
    awayTeam: {
      name: "Manchester City",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/320px-Manchester_City_FC_badge.svg.png",
      score: 1,
    },
    kickoffTime: "Tonight 20:00 GMT",
    venue: "Santiago Bernabéu, Madrid",
    channelBroadcast: "TNT Sports 1 Ultimate 4K • beIN Sports 4K",
  },
  {
    id: "match-pl-1",
    competition: "English Premier League",
    competitionLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/320px-Premier_League_Logo.svg.png",
    status: "LIVE",
    minute: "54'",
    homeTeam: {
      name: "Liverpool FC",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/320px-Liverpool_FC.svg.png",
      score: 1,
    },
    awayTeam: {
      name: "Arsenal FC",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/320px-Arsenal_FC.svg.png",
      score: 1,
    },
    kickoffTime: "Today 16:30 GMT",
    venue: "Anfield, Liverpool",
    channelBroadcast: "Sky Sports Premier League UHD",
  },
  {
    id: "match-elclasico-1",
    competition: "La Liga Santander",
    competitionLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/LaLiga_logo_2023.svg/320px-LaLiga_logo_2023.svg.png",
    status: "UPCOMING",
    homeTeam: {
      name: "FC Barcelona",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/320px-FC_Barcelona_%28crest%29.svg.png",
    },
    awayTeam: {
      name: "Atletico Madrid",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Atletico_Madrid_2017_logo.svg/320px-Atletico_Madrid_2017_logo.svg.png",
    },
    kickoffTime: "Sunday 20:00 CET",
    venue: "Estadi Olímpic, Barcelona",
    channelBroadcast: "Movistar+ LaLiga 4K • DAZN 1 Bar 4K",
  },
  {
    id: "match-f1-monaco",
    competition: "Formula 1 Grand Prix",
    competitionLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/320px-F1.svg.png",
    status: "UPCOMING",
    homeTeam: {
      name: "Monaco Grand Prix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/320px-F1.svg.png",
    },
    awayTeam: {
      name: "Circuit de Monaco (78 Laps)",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/320px-F1.svg.png",
    },
    kickoffTime: "Race Sunday 14:00 CET",
    venue: "Monte Carlo, Monaco",
    channelBroadcast: "Sky Sports F1 UHD • Canal+ 4K",
  },
  {
    id: "match-ufc-312",
    competition: "UFC Championship Main Card",
    competitionLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/320px-UFC_Logo.svg.png",
    status: "UPCOMING",
    homeTeam: {
      name: "Alex Pereira (C)",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/320px-UFC_Logo.svg.png",
    },
    awayTeam: {
      name: "Israel Adesanya",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/320px-UFC_Logo.svg.png",
    },
    kickoffTime: "Saturday 03:00 GMT",
    venue: "T-Mobile Arena, Las Vegas",
    channelBroadcast: "TNT Sports Box Office UHD • ESPN+ PPV",
  },
];

