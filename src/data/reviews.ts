export interface SubscriberReview {
  id: string;
  author: string;
  country: string;
  flag: string;
  rating: number;
  date: string;
  device: string;
  review: string;
  badge?: string;
  verified: boolean;
}

export const SUBSCRIBER_REVIEWS: SubscriberReview[] = [
  {
    id: "rev-1",
    author: "Marcus Vance",
    country: "United Kingdom",
    flag: "🇬🇧",
    rating: 5,
    date: "2 days ago",
    device: "Apple TV 4K • TiviMate",
    review:
      "I watched the Manchester City vs Real Madrid semifinal in pure 4K 60FPS on my 77\" LG OLED. Not a single micro-stutter or buffer the entire 90 minutes plus extra time. The WhatsApp setup took literally 3 minutes.",
    badge: "Champions League Streamer",
    verified: true,
  },
  {
    id: "rev-2",
    author: "Jean-Pierre Laurent",
    country: "France",
    flag: "🇫🇷",
    rating: 5,
    date: "4 days ago",
    device: "Firestick 4K Max",
    review:
      "Toutes les chaînes Canal+ et beIN en 4K UHD avec le son 5.1. L'assistance sur WhatsApp est tout simplement incroyable, ils m'ont envoyé les identifiants Xtream immédiatement.",
    badge: "Verified Cinema Subscriber",
    verified: true,
  },
  {
    id: "rev-3",
    author: "Tariq Al-Mansoor",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    rating: 5,
    date: "1 week ago",
    device: "Samsung Smart TV (IBO Player)",
    review:
      "Best service I have tested in 6 years. All beIN 4K channels crystal clear with Arabic & English audio commentary options. EPG TV guide works without any manual playlist editing.",
    badge: "12-Month VIP Member",
    verified: true,
  },
  {
    id: "rev-4",
    author: "Carlos Gomez",
    country: "Spain",
    flag: "🇪🇸",
    rating: 5,
    date: "1 week ago",
    device: "Formuler Z11 Pro Max",
    review:
      "Movistar LaLiga 4K sin ningún corte durante El Clásico. La calidad de imagen es idéntica a la señal de satélite directa. Servicio de diez puntos.",
    badge: "La Liga VIP",
    verified: true,
  },
  {
    id: "rev-5",
    author: "David Miller",
    country: "United States",
    flag: "🇺🇸",
    rating: 5,
    date: "2 weeks ago",
    device: "Nvidia Shield TV Pro",
    review:
      "Audio passthrough for Dolby Atmos works flawlessly. The on-demand movies library is enormous and they actually added a movie I requested on WhatsApp within 18 hours.",
    badge: "Audiophile Home Theater",
    verified: true,
  },
];

