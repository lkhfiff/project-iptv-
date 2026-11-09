import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteLayout } from "@/components/SiteLayout";
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
  title: `${SITE_CONFIG.brandName} | The Pinnacle of Cinematic IPTV Streaming`,
  description: SITE_CONFIG.brandDescription,
  keywords: [
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
    title: `${SITE_CONFIG.brandName} - Ultra Premium IPTV`,
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050508] text-[#f4f4f6]">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
