"use client";

import React from "react";
import { MessageCircle, ExternalLink, Zap } from "lucide-react";
import {
  SITE_CONFIG,
  generateWhatsAppSubscriptionUrl,
  generateWhatsAppContactUrl,
  generateWhatsAppTrialUrl,
} from "@/data/config";

export interface WhatsAppButtonProps {
  variant?: "primary" | "secondary" | "luxury" | "outline" | "pill" | "floating" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  label?: string;
  icon?: boolean;
  className?: string;
  fullWidth?: boolean;
  // If plan details are provided, it generates an order URL
  plan?: {
    name: string;
    duration: string;
    price: string;
    connections?: number | string;
    notes?: string;
  };
  // Or trial mode
  isTrial?: boolean;
  trialDevice?: string;
  // Or custom inquiry
  inquiryType?: string;
  // Or direct custom message
  customMessage?: string;
  children?: React.ReactNode;
  showPingDot?: boolean;
}

export function WhatsAppButton({
  variant = "primary",
  size = "md",
  label,
  icon = true,
  className = "",
  fullWidth = false,
  plan,
  isTrial = false,
  trialDevice = "Smart TV / Firestick",
  inquiryType,
  customMessage,
  children,
  showPingDot = false,
}: WhatsAppButtonProps) {
  // Determine final target URL
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
    targetUrl = generateWhatsAppTrialUrl(trialDevice);
  } else if (customMessage) {
    targetUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(customMessage)}`;
  } else {
    targetUrl = generateWhatsAppContactUrl(inquiryType || "VIP Subscription Inquiry");
  }

  // Size styling
  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs font-semibold gap-1.5 rounded-full",
    md: "px-5 py-2.5 text-sm font-semibold gap-2 rounded-full",
    lg: "px-7 py-3.5 text-base font-semibold gap-2.5 rounded-full",
    xl: "px-9 py-4 text-lg font-bold gap-3 rounded-full",
  };

  // Variant styling
  const variantStyles = {
    primary:
      "bg-gradient-to-r from-orange-500 via-amber-500 to-amber-600 text-black hover:from-orange-400 hover:to-amber-500 shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-all duration-200",
    secondary:
      "bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/15 active:scale-[0.98] transition-all duration-200",
    luxury:
      "relative bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-emerald-400 hover:to-green-500 shadow-xl shadow-green-600/30 active:scale-[0.98] transition-all duration-200 border border-emerald-400/30",
    outline:
      "border border-orange-500/60 text-orange-400 hover:bg-orange-500/10 hover:border-orange-400 active:scale-[0.98] transition-all duration-200",
    pill:
      "bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg shadow-[#25D366]/25 active:scale-[0.98] transition-all duration-200",
    floating:
      "bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl shadow-[#25D366]/40 active:scale-95 transition-all duration-300",
    ghost:
      "text-zinc-300 hover:text-white hover:bg-white/5 active:scale-[0.98] transition-all duration-200",
  };

  const defaultLabel = plan ? "Subscribe via WhatsApp" : isTrial ? "Claim 24h VIP Test" : "Connect on WhatsApp";
  const displayLabel = children || label || defaultLabel;

  return (
    <a
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center select-none cursor-pointer group text-center tracking-wide ${
        sizeStyles[size]
      } ${variantStyles[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {showPingDot && (
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
      )}

      {icon && (
        <MessageCircle className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />
      )}

      <span>{displayLabel}</span>

      {variant === "luxury" && (
        <Zap className="w-3.5 h-3.5 ml-0.5 text-amber-200 opacity-80 shrink-0" />
      )}
    </a>
  );
}

