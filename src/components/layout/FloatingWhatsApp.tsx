"use client";

import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { trackWhatsAppClick, trackCallClick } from "@/utils/tracking";

export default function FloatingActions() {
  const handleWhatsApp = () => {
    trackWhatsAppClick("desktop_floating", "quick_desktop_launcher");
  };

  const handleCall = () => {
    trackCallClick("desktop_floating");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden lg:flex flex-col items-center gap-3 select-none">
      {/* WhatsApp Circular Button */}
      <a
        href={siteConfig.getWhatsAppLink("Hi RoyalTechLabs, I need a diagnostic visit for my TV.")}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsApp}
        className="relative flex items-center justify-center w-12 h-12 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.65)] transition-all duration-200 hover:scale-108 active:scale-95 border border-emerald-300/40 group"
        aria-label="Direct WhatsApp Contact RoyalTechLabs"
      >
        <WhatsAppIcon className="w-6 h-6 fill-current" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-slate-900/90 text-white text-[11px] font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-md">
          Chat on WhatsApp
        </span>
      </a>

      {/* Phone Call Circular Button */}
      <a
        href={siteConfig.phoneHref}
        onClick={handleCall}
        className="relative flex items-center justify-center w-12 h-12 bg-[#0052EA] hover:bg-[#0042BE] text-white rounded-full shadow-[0_4px_20px_rgba(0,82,234,0.45)] hover:shadow-[0_6px_28px_rgba(0,82,234,0.65)] transition-all duration-200 hover:scale-108 active:scale-95 border border-blue-400/40 group"
        aria-label={`Call ${siteConfig.phoneDisplay} now`}
      >
        <Phone className="w-5 h-5 fill-current" />

        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-slate-900/90 text-white text-[11px] font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-md">
          Call {siteConfig.phoneDisplay}
        </span>
      </a>
    </div>
  );
}
