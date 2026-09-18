import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { Radio } from "lucide-react";

export default function ConversionBreak() {
  return (
    <section className="relative overflow-hidden bg-[#070E1D] text-white py-14 sm:py-16 border-y border-slate-800">
      {/* Background Animated Radar Motif */}
      <div className="absolute inset-0 tech-grid-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-blue-500/10 animate-radar pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-blue-400/20 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs font-semibold mb-4">
          <Radio className="w-3.5 h-3.5 animate-pulse" />
          <span>No Lugging Heavy TVs To Repair Shops</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
          TV Acting Up? Get It Fixed Without Carrying It Anywhere.
        </h2>

        <p className="mt-3.5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
          Save your time and prevent screen transport cracks. Our mobile technical unit arrives at your home anywhere in Dubai, Sharjah, or Ajman with testing instruments ready.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="call"
            size="lg"
            source="conversion_break"
            className="w-full sm:w-auto shadow-xl shadow-blue-600/30"
          >
            CALL NOW • {siteConfig.phoneDisplay}
          </Button>

          <Button
            variant="whatsapp"
            size="lg"
            source="conversion_break"
            whatsappMessage="Hi RoyalTechLabs, I'd like a technician to check my TV at home."
            className="w-full sm:w-auto shadow-xl shadow-emerald-600/30"
          >
            WHATSAPP TECHNICIAN
          </Button>
        </div>
      </div>
    </section>
  );
}
