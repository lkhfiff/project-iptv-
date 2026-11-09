"use client";

import React from "react";
import { Icon } from "@iconify/react";
import {
  SITE_CONFIG,
  generateSubscriptionOrderUrl,
  generateDirectContactUrl,
} from "@/data/config";

export interface WhatsAppButtonProps {
  variant?: "primary" | "secondary" | "luxury" | "outline" | "pill" | "compact" | "solid";
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
  variant = "solid",
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
    targetUrl = generateSubscriptionOrderUrl({
      planTitle: plan.name,
      duration: plan.duration,
      price: plan.price,
      connections: plan.connections ?? 1,
      additionalNotes: plan.notes,
    });
  } else if (isTrial) {
    const msg = `Bonjour ${SITE_CONFIG.conciergeDisplayName} !\n\nJe souhaite recevoir un Essai VIP Gratuit 24H pour tester le flux 4K sur mon appareil. Merci !`;
    targetUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  } else if (customMessage) {
    targetUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(customMessage)}`;
  } else {
    targetUrl = generateDirectContactUrl(inquiryType || "Accès Concierge VIP");
  }

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs font-semibold gap-1.5 rounded-full",
    md: "px-5 py-2.5 text-xs font-semibold gap-2 rounded-full",
    lg: "px-7 py-3 text-sm font-semibold gap-2.5 rounded-full",
  };

  const variantStyles = {
    solid:
      "bg-white text-black hover:bg-[#f2f2f2] shadow-lg shadow-black/30 active:scale-95 transition-all",
    pill:
      "bg-white text-black hover:bg-[#f2f2f2] shadow-lg shadow-black/30 active:scale-95 transition-all",
    primary:
      "bg-white text-black hover:bg-[#f2f2f2] shadow-lg shadow-black/30 active:scale-95 transition-all",
    secondary:
      "bg-white/10 hover:bg-white/20 text-white border border-white/15 backdrop-blur-md active:scale-95 transition-all",
    luxury:
      "bg-white text-black hover:bg-[#f2f2f2] shadow-xl shadow-black/40 active:scale-95 transition-all",
    outline:
      "border border-white/30 text-white hover:bg-white/10 active:scale-95 transition-all",
    compact:
      "bg-white/10 hover:bg-white/20 text-white text-[11px] px-3 py-1 rounded-lg border border-white/10 active:scale-95 transition-all",
  };

  const defaultLabel = plan
    ? "Activer Mon Accès"
    : isTrial
    ? "Essai Gratuit 24H"
    : "Conciergerie VIP";

  const displayLabel = children || label || defaultLabel;

  return (
    <a
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center select-none cursor-pointer tracking-wide ${
        sizeStyles[size]
      } ${variantStyles[variant as keyof typeof variantStyles] || variantStyles.solid} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {showPingDot && (
        <span className="relative flex h-2 w-2 mr-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
        </span>
      )}

      {icon && <Icon icon="ph:arrow-up-right" width={14} className="shrink-0" />}

      <span>{displayLabel}</span>
    </a>
  );
}

// Re-export as DirectOrderButton for semantic clarity
export const DirectOrderButton = WhatsAppButton;
