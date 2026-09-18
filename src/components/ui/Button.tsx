"use client";

import React from "react";
import { Phone, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { trackCallClick, trackWhatsAppClick, type ConversionSource } from "@/utils/tracking";
import { siteConfig } from "@/config/site";

interface BaseButtonProps {
  children?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
}

interface ActionButtonProps extends BaseButtonProps {
  variant: "call" | "whatsapp" | "primary" | "secondary" | "outline" | "ghost";
  source: ConversionSource | string;
  whatsappMessage?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  showIcon?: boolean;
}

export default function Button({
  children,
  variant,
  size = "md",
  fullWidth = false,
  className = "",
  source,
  whatsappMessage,
  href,
  onClick,
  type = "button",
  disabled = false,
  showIcon = true,
}: ActionButtonProps) {
  // Base sizing and typography
  const sizeClasses = {
    sm: "px-3.5 py-2 text-xs font-semibold rounded-lg gap-1.5",
    md: "px-5 py-2.5 text-sm font-semibold rounded-xl gap-2",
    lg: "px-6 py-3.5 text-base font-bold rounded-xl gap-2.5",
    xl: "px-8 py-4 text-lg font-bold rounded-2xl gap-3",
  }[size];

  const widthClass = fullWidth ? "w-full" : "w-auto";

  // Specialized styling variants
  let variantClasses = "";
  let icon = null;
  let computedHref = href;

  if (variant === "call") {
    variantClasses =
      "bg-[#0056FF] text-white hover:bg-[#0046D1] shadow-lg shadow-blue-500/25 active:scale-[0.98] transition-all duration-200 border border-blue-400/20";
    if (showIcon) icon = <Phone className="w-4 h-4 shrink-0 fill-current" />;
    computedHref = computedHref || siteConfig.phoneHref;
  } else if (variant === "whatsapp") {
    variantClasses =
      "bg-[#25D366] text-white hover:bg-[#1EBE5D] shadow-lg shadow-emerald-500/25 active:scale-[0.98] transition-all duration-200 border border-emerald-400/30";
    if (showIcon) icon = <WhatsAppIcon className="w-4 h-4 shrink-0 fill-current" />;
    computedHref = computedHref || siteConfig.getWhatsAppLink(whatsappMessage);
  } else if (variant === "primary") {
    variantClasses =
      "bg-[#070E1D] text-white hover:bg-[#0F1C35] active:scale-[0.98] transition-all duration-200 shadow-md";
    if (showIcon && !children) icon = <ArrowRight className="w-4 h-4 shrink-0" />;
  } else if (variant === "secondary") {
    variantClasses =
      "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm active:scale-[0.98] transition-all duration-200";
  } else if (variant === "outline") {
    variantClasses =
      "bg-transparent text-white border border-white/25 hover:bg-white/10 active:scale-[0.98] transition-all duration-200";
  } else {
    variantClasses = "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 transition-colors";
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (variant === "call") {
      trackCallClick(source);
    } else if (variant === "whatsapp") {
      trackWhatsAppClick(source, whatsappMessage);
    }
    if (onClick) {
      onClick();
    }
  };

  const combinedClass = `inline-flex items-center justify-center font-sans tracking-tight select-none whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${sizeClasses} ${variantClasses} ${widthClass} ${className}`;

  if (computedHref) {
    const isExternal = computedHref.startsWith("http") || computedHref.startsWith("tel:");
    return (
      <a
        href={computedHref}
        target={computedHref.startsWith("http") ? "_blank" : undefined}
        rel={computedHref.startsWith("http") ? "noopener noreferrer" : undefined}
        onClick={handleClick}
        className={combinedClass}
      >
        {icon}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={`${combinedClass} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}
