import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteLayout } from "@/components/SiteLayout";
import { ThemeProvider } from "@/context/ThemeContext";
import { SITE_CONFIG } from "@/data/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${SITE_CONFIG.brandName} | Le Sommet du Streaming Cinématographique 4K`,
  description: SITE_CONFIG.brandDescription,
  keywords: [
    "NOUDINE",
    "IPTV",
    "4K Streaming",
    "Live TV",
    "Dolby Atmos",
    "Sports Streams",
    "TiviMate",
    "Firestick IPTV",
    "Apple TV IPTV",
  ],
  authors: [{ name: SITE_CONFIG.brandName }],
  openGraph: {
    title: `${SITE_CONFIG.brandName} - Streaming Cinématographique Ultra-Premium`,
    description: SITE_CONFIG.brandDescription,
    siteName: SITE_CONFIG.brandName,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#faf9f6] text-zinc-900 dark:bg-[#080808] dark:text-white transition-colors duration-300">
        <ThemeProvider>
          <SiteLayout>{children}</SiteLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
