import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import { Cpu, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#040812] text-white py-16 sm:py-24 border-t border-blue-950">
      {/* Ambient background glows */}
      <div className="absolute inset-0 tech-grid-dark opacity-35 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-gradient-to-b from-[#0052EA]/20 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center z-10">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-900/30 border border-cyan-500/40 text-cyan-400 mb-6 shadow-lg shadow-cyan-500/20">
          <Cpu className="w-7 h-7 animate-pulse" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Don&apos;t Let a Faulty TV <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300">
            Disrupt Your Home Entertainment.
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Book a certified RoyalTechLabs technician right now. 24/7 doorstep service across Dubai, Sharjah, and Ajman with genuine factory parts and component warranties.
        </p>

        {/* Dual Dominant CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="call"
            size="xl"
            source="final_cta"
            className="w-full sm:w-auto shadow-2xl shadow-blue-600/40"
          >
            CALL NOW • {siteConfig.phoneDisplay}
          </Button>

          <Button
            variant="whatsapp"
            size="xl"
            source="final_cta"
            whatsappMessage="Hi RoyalTechLabs, I need a technician dispatched to my location today."
            className="w-full sm:w-auto shadow-2xl shadow-emerald-600/40"
          >
            WHATSAPP TECHNICIAN
          </Button>
        </div>

        {/* Telemetry Footnote */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
          <span className="flex items-center gap-1.5 text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            24/7 Doorstep Service
          </span>
          <span>•</span>
          <span>Dubai • Sharjah • Ajman</span>
          <span>•</span>
          <span className="text-emerald-400 font-semibold">98% Repaired At Home</span>
        </div>
      </div>
    </section>
  );
}
