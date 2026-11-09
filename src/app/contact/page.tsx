"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { SITE_CONFIG } from "@/data/config";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [device, setDevice] = useState("Amazon Firestick 4K");
  const [inquiryType, setInquiryType] = useState("New 4K Subscription");
  const [customNotes, setCustomNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let message = `Hello ${SITE_CONFIG.businessName} Team!\n\n`;
    if (name) message += `• My Name: ${name}\n`;
    message += `• Device: ${device}\n`;
    message += `• Inquiry: ${inquiryType}\n`;
    if (customNotes) {
      message += `• Details / Questions: ${customNotes}\n`;
    }
    message += `\nPlease guide me with the next steps. Thank you!`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
          <Icon icon="ph:whatsapp-logo-fill" width={14} />
          <span>VIP Concierge Line 24/7</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Connect With {SITE_CONFIG.businessName}
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
          Need instant playlist delivery, a free 24-hour test line, or device configuration help? Our team is live on WhatsApp with average response times under 2 minutes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info Sidebar */}
        <div className="space-y-4">
          <div className="p-6 rounded-3xl bg-zinc-950/80 border border-white/10 space-y-4">
            <h3 className="font-bold text-white text-base">Direct Channels</h3>

            <div className="space-y-3 text-xs">
              <div className="p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 space-y-1.5">
                <div className="flex items-center gap-2 text-[#25D366] font-bold">
                  <Icon icon="ph:whatsapp-logo-fill" width={16} />
                  <span>{SITE_CONFIG.whatsappDisplayName}</span>
                </div>
                <p className="text-zinc-300">
                  Instant activation, M3U/Xtream setup, and live tech support.
                </p>
                <div className="pt-2">
                  <WhatsAppButton
                    variant="pill"
                    size="sm"
                    label="Open WhatsApp Chat"
                  />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="text-zinc-500 block">WhatsApp Number:</span>
                <span className="text-white font-mono font-bold text-sm">
                  {SITE_CONFIG.whatsappDisplayNumber}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="text-zinc-500 block">Email Desk:</span>
                <span className="text-white font-mono text-xs">
                  {SITE_CONFIG.supportEmail}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="text-zinc-500 block">Availability:</span>
                <span className="text-emerald-400 font-bold">
                  24 Hours / 7 Days a Week (Worldwide)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Message Composer to WhatsApp */}
        <div className="lg:col-span-2 rounded-3xl bg-zinc-950/90 border border-white/10 p-6 sm:p-10 space-y-6">
          <div className="space-y-1 border-b border-white/5 pb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Compose Your WhatsApp Setup Request
            </h2>
            <p className="text-xs text-zinc-400">
              Fill in your device details below. Clicking &ldquo;Send to WhatsApp&rdquo; will launch WhatsApp with your message pre-formatted.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-300">
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alexander"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-300">
                  Inquiry Purpose
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-4 py-3 text-xs text-white focus:outline-none focus:border-orange-500"
                >
                  <option value="New 4K Subscription">New 4K Subscription (1-12 Months)</option>
                  <option value="Request 24h Free VIP Test Line">Request 24h Free VIP Test Line</option>
                  <option value="Technical Setup Help on Device">Technical Setup Help on Device</option>
                  <option value="Specific Channel / Bouquet Availability">Specific Channel / Bouquet Availability</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-300">
                Your Primary Streaming Device
              </label>
              <select
                value={device}
                onChange={(e) => setDevice(e.target.value)}
                className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-4 py-3 text-xs text-white focus:outline-none focus:border-orange-500"
              >
                <option value="Amazon Fire TV / Firestick 4K">Amazon Fire TV / Firestick 4K</option>
                <option value="Apple TV 4K (tvOS)">Apple TV 4K (tvOS)</option>
                <option value="Samsung Smart TV (Tizen)">Samsung Smart TV (Tizen)</option>
                <option value="LG Smart TV (webOS)">LG Smart TV (webOS)</option>
                <option value="Android TV / Google TV / Shield">Android TV / Google TV / Shield</option>
                <option value="MAG Box / Formuler">MAG Box / Formuler</option>
                <option value="iPhone / iPad">iPhone / iPad</option>
                <option value="Android Mobile / Tablet">Android Mobile / Tablet</option>
                <option value="Windows PC / Mac">Windows PC / Mac</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-300">
                Message / Specific Requirements
              </label>
              <textarea
                rows={4}
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                placeholder="Let us know what favorite channels you want, or what player app you prefer (e.g. TiviMate, IBO Player, IPTV Smarters)..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs tracking-wide shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"
              >
                <Icon icon="ph:whatsapp-logo-fill" width={18} />
                <span>Launch WhatsApp Request &rarr;</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
