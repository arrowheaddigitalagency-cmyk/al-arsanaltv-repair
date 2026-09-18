import React from "react";
import { siteConfig } from "@/config/site";
import { Phone, Radio, ShieldCheck } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#EDF4FF]/90 backdrop-blur-md text-slate-700 border-b border-blue-200/60 text-xs py-1.5 px-3 sm:px-6 lg:px-8 select-none relative z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-y-1 gap-x-4 whitespace-nowrap">
        {/* Left: Mobile Lab Telemetry Indicator */}
        <div className="flex items-center gap-2 sm:gap-3 whitespace-nowrap">
          <div className="flex items-center gap-1.5 bg-white/90 text-[#0052EA] px-2.5 py-0.5 rounded-full border border-blue-200 shadow-2xs font-mono text-[11px] font-bold shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0052EA]"></span>
            </span>
            <span>MOBILE LAB ACTIVE</span>
          </div>

          <span className="hidden md:inline text-blue-300">•</span>

          <span className="hidden sm:inline text-slate-600 font-medium whitespace-nowrap">
            24/7 Doorstep Service Across <strong className="text-slate-900 font-semibold">Dubai • Sharjah • Ajman</strong>
          </span>
        </div>

        {/* Right: Emergency Line */}
        <div className="flex items-center gap-3 sm:gap-4 ml-auto text-slate-600 whitespace-nowrap">
          <div className="hidden lg:flex items-center gap-1.5 text-slate-600 font-mono text-[11px] whitespace-nowrap">
            <Radio className="w-3.5 h-3.5 text-[#0052EA] animate-pulse shrink-0" />
            <span>Avg. Arrival: 30–60 Mins</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-slate-600 text-[11px] whitespace-nowrap">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Component-Level Warranty</span>
          </div>

          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-1.5 font-bold text-[#0052EA] hover:text-blue-700 transition-colors bg-white/95 px-2.5 py-0.5 rounded-md border border-blue-200 shadow-2xs text-xs whitespace-nowrap shrink-0"
          >
            <Phone className="w-3 h-3 fill-current text-[#0052EA] shrink-0" />
            <span>{siteConfig.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
