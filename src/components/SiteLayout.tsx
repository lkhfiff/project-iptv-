"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ContentModal } from "@/components/ContentModal";
import { SmoothScroll } from "@/components/SmoothScroll";
import { MediaItem } from "@/data/media";

interface SiteLayoutProps {
  children: React.ReactNode;
}

// Global context or exportable hook to trigger modal from any child page
export const MediaModalContext = React.createContext<{
  openModal: (item: MediaItem) => void;
}>({
  openModal: () => {},
});

export function SiteLayout({ children }: SiteLayoutProps) {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const openModal = (item: MediaItem) => {
    setSelectedMedia(item);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <MediaModalContext.Provider value={{ openModal }}>
      <SmoothScroll>
        <div
          data-scroll-progress
          aria-hidden="true"
          className="scroll-progress-bar"
        />
        <div className="relative min-h-screen bg-[#050508] text-[#f4f4f6] flex flex-col font-sans selection:bg-orange-500 selection:text-black">
          {/* Navigation */}
          <Navbar onSelectMedia={openModal} />

          {/* Page Content */}
          <main className="flex-1 w-full">{children}</main>

          {/* Global Footer */}
          <Footer />

          {/* Floating WhatsApp Action */}
          <FloatingWhatsApp />

          {/* Global Cinematic Detail Modal */}
          <ContentModal item={selectedMedia} onClose={closeModal} />
        </div>
      </SmoothScroll>
    </MediaModalContext.Provider>
  );
}

export function useMediaModal() {
  return React.useContext(MediaModalContext);
}

