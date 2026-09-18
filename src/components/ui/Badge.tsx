import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "green" | "dark" | "outline" | "pulse";
  size?: "sm" | "md";
  className?: string;
}

export default function Badge({
  children,
  variant = "blue",
  size = "md",
  className = "",
}: BadgeProps) {
  const sizeClass = size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3.5 py-1 text-xs font-semibold";

  let variantStyle = "";
  let pulseDot = null;

  switch (variant) {
    case "pulse":
      variantStyle = "bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-xs";
      pulseDot = (
        <span className="relative flex h-2 w-2 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      );
      break;
    case "green":
      variantStyle = "bg-emerald-500/10 text-emerald-700 border border-emerald-500/20";
      break;
    case "dark":
      variantStyle = "bg-slate-900 text-slate-200 border border-slate-700";
      break;
    case "outline":
      variantStyle = "bg-transparent text-slate-700 border border-slate-300";
      break;
    case "blue":
    default:
      variantStyle = "bg-blue-50 text-blue-700 border border-blue-200/60";
      break;
  }

  return (
    <span
      className={`inline-flex items-center rounded-full tracking-wide transition-all ${sizeClass} ${variantStyle} ${className}`}
    >
      {pulseDot}
      {children}
    </span>
  );
}
