"use client";

import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import { MapPin, Radio } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-16 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Ambient Blue Glow Orbs & Light Tech Grid */}
      <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-10 -left-20 w-[450px] h-[450px] bg-gradient-to-br from-blue-500/8 via-cyan-400/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[450px] h-[450px] bg-gradient-to-tl from-[#0052EA]/8 via-blue-400/4 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-display font-bold tracking-wider mb-3">
            <Radio className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
            <span>COVERAGE ALL OVER UAE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-display">
            Doorstep TV Repair With <br />
            <span className="text-[#0052EA]">Coverage All Over UAE</span>
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-600 font-sans">
            RoyalTechLabs mobile diagnostic fleet provides comprehensive doorstep TV repair coverage all over UAE — including Dubai, Sharjah, Ajman, and surrounding areas with rapid in-home arrival.
          </p>
        </div>

        {/* Emirate Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {siteConfig.serviceAreas.map((group) => (
            <div
              key={group.emirate}
              className="rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-7 shadow-sm hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0052EA] flex items-center justify-center font-bold">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 font-display">
                      {group.emirate}
                    </h3>
                  </div>

                  <span className="text-[10px] font-display font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                    {group.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-500 mb-4 font-sans">
                  Full doorstep coverage for residential towers, villas, and compounds.
                </p>

                {/* Area Tags with Live Dot Blinker */}
                <div className="flex flex-wrap gap-2">
                  {group.areas.map((area, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1 rounded-xl bg-white text-slate-800 border border-slate-200/80 shadow-2xs hover:border-blue-300 hover:shadow-xs transition-all font-sans"
                    >
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span>{area}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Emirate Quick Contact */}
              <div className="mt-6 pt-5 border-t border-slate-200/60 flex items-center justify-between text-xs font-display font-bold tracking-wider">
                <span className="text-slate-500 text-[11px]">FLEET ON STANDBY</span>
                <a
                  href={siteConfig.getWhatsAppLink(`Hi RoyalTechLabs, do you provide doorstep TV repair in ${group.emirate}?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                  <span>Check Coverage</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Can't see your area banner */}
        <div className="mt-12 max-w-2xl mx-auto rounded-3xl bg-[#060B14] border border-blue-900/50 p-6 sm:p-7 text-center text-white shadow-xl">
          <h4 className="text-lg font-bold tracking-tight">
            Can&apos;t see your specific community or building?
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 mt-1.5 max-w-lg mx-auto leading-relaxed">
            RoyalTechLabs provides television diagnostic &amp; repair coverage all over UAE. Send your location pin on WhatsApp for an instant technician ETA.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="whatsapp"
              size="sm"
              source="service_area"
              whatsappMessage="Hi RoyalTechLabs, here is my location. Can you send a technician to check my TV?"
            >
              Send Location On WhatsApp
            </Button>
            <Button
              variant="call"
              size="sm"
              source="service_area"
            >
              Call Dispatcher
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
