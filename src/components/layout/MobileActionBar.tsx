"use client";

import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig } from "@/config/site";
import { trackCallClick, trackWhatsAppClick } from "@/utils/tracking";

export default function MobileActionBar() {
  const handleCall = () => {
    trackCallClick("mobile_bottom_bar");
  };

  const handleWhatsApp = () => {
    trackWhatsAppClick("mobile_bottom_bar", "bottom_sticky_action");
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-[#050B14]/95 backdrop-blur-lg border-t border-cyan-500/30 p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(0,0,0,0.6)]">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* Left 50%: CALL NOW */}
        <a
          href={siteConfig.phoneHref}
          onClick={handleCall}
          className="flex items-center justify-center gap-2 bg-[#0052EA] text-white font-bold text-sm sm:text-base py-3.5 px-3 rounded-2xl shadow-lg shadow-blue-500/25 active:scale-98 transition-all border border-blue-400/30 whitespace-nowrap"
          aria-label={`Call ${siteConfig.phoneDisplay} now`}
        >
          <Phone className="w-4 h-4 fill-current shrink-0 text-cyan-300" />
          <span className="tracking-tight">CALL NOW</span>
        </a>

        {/* Right 50%: WHATSAPP */}
        <a
          href={siteConfig.getWhatsAppLink("Hi RoyalTechLabs, I need urgent doorstep diagnosis for my TV.")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsApp}
          className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-sm sm:text-base py-3.5 px-3 rounded-2xl shadow-lg shadow-emerald-500/25 active:scale-98 transition-all border border-emerald-400/40 whitespace-nowrap"
          aria-label="Contact RoyalTechLabs on WhatsApp"
        >
          <WhatsAppIcon className="w-4.5 h-4.5 fill-current shrink-0" />
          <span className="tracking-tight">WHATSAPP</span>
        </a>
      </div>
    </div>
  );
}
