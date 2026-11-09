"use client";

import React from "react";
import { Icon } from "@iconify/react";
import {
  SITE_CONFIG,
  generateWhatsAppSubscriptionUrl,
  generateWhatsAppContactUrl,
} from "@/data/config";

export interface WhatsAppButtonProps {
  variant?: "primary" | "secondary" | "luxury" | "outline" | "pill" | "compact";
  size?: "sm" | "md" | "lg";
  label?: string;
  icon?: boolean;
  className?: string;
  fullWidth?: boolean;
  plan?: {
    name: string;
    duration: string;
    price: string;
    connections?: number | string;
    notes?: string;
  };
  isTrial?: boolean;
  inquiryType?: string;
  customMessage?: string;
  children?: React.ReactNode;
  showPingDot?: boolean;
}

export function WhatsAppButton({
  variant = "pill",
  size = "md",
  label,
  icon = true,
  className = "",
  fullWidth = false,
  plan,
  isTrial = false,
  inquiryType,
  customMessage,
  children,
  showPingDot = false,
}: WhatsAppButtonProps) {
  let targetUrl = "";

  if (plan) {
    targetUrl = generateWhatsAppSubscriptionUrl({
      planTitle: plan.name,
      duration: plan.duration,
      price: plan.price,
      connections: plan.connections ?? 1,
      additionalNotes: plan.notes,
    });
  } else if (isTrial) {
    const msg = `Hello ${SITE_CONFIG.whatsappDisplayName}!\n\nI would like to request a 24-Hour VIP 4K Test on my TV/device. Please provide test playlist credentials.`;
    targetUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  } else if (customMessage) {
    targetUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(customMessage)}`;
  } else {
    targetUrl = generateWhatsAppContactUrl(inquiryType || "VIP Concierge Inquiry");
  }

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs font-semibold gap-1.5 rounded-full",
    md: "px-5 py-2.5 text-xs font-bold gap-2 rounded-full",
    lg: "px-7 py-3 text-sm font-bold gap-2.5 rounded-full",
  };

  const variantStyles = {
    pill:
      "bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg shadow-[#25D366]/25 active:scale-95 transition-all",
    primary:
      "bg-orange-500 hover:bg-orange-400 text-black shadow-lg shadow-orange-500/20 active:scale-95 transition-all",
    secondary:
      "bg-white/10 hover:bg-white/20 text-white border border-white/15 backdrop-blur-md active:scale-95 transition-all",
    luxury:
      "bg-gradient-to-r from-orange-500 to-amber-500 text-black hover:from-orange-400 hover:to-amber-400 shadow-xl shadow-orange-500/25 active:scale-95 transition-all",
    outline:
      "border border-orange-500/60 text-orange-400 hover:bg-orange-500/10 active:scale-95 transition-all",
    compact:
      "bg-white/10 hover:bg-white/20 text-white text-[11px] px-3 py-1 rounded-lg border border-white/10 active:scale-95 transition-all",
  };

  const defaultLabel = plan
    ? "Subscribe on WhatsApp"
    : isTrial
    ? "24h VIP Test"
    : SITE_CONFIG.whatsappDisplayName;

  const displayLabel = children || label || defaultLabel;

  return (
    <a
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center select-none cursor-pointer tracking-wide ${
        sizeStyles[size]
      } ${variantStyles[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {showPingDot && (
        <span className="relative flex h-2 w-2 mr-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
        </span>
      )}

      {icon && <Icon icon="ph:whatsapp-logo-fill" width={16} className="shrink-0" />}

      <span>{displayLabel}</span>
    </a>
  );
}
