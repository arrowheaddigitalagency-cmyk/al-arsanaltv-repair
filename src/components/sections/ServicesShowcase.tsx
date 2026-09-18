"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  Check,
  ArrowUpRight,
  ShieldCheck,
  Clock,
  Wrench,
} from "lucide-react";

export default function ServicesShowcase() {
  const featuredServices = siteConfig.services.filter((s) => s.featured);
  const technicalTiles = siteConfig.services.filter((s) => !s.featured);

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-display font-bold tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5 text-blue-600" />
            <span>LABORATORY SERVICE MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15] font-display">
            Engineering-Grade TV Repair. <br />
            <span className="text-[#0052EA]">Component-Level Precision.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Every television model has distinct circuit architectures. RoyalTechLabs treats OLED, QLED, LED, and Smart TV systems with dedicated diagnostic protocols, avoiding costly whole-assembly replacement.
          </p>
        </div>

        {/* 1. Asymmetric Featured Spotlights (Alternating Image & Content) */}
        <div className="space-y-8 mb-12">
          {featuredServices.map((service, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={service.id}
                className={`rounded-3xl bg-white border border-slate-200 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-center group transition-all duration-300 hover:border-blue-300 hover:shadow-xl`}
              >
                {/* Visual Half */}
                <div
                  className={`lg:col-span-6 relative aspect-[16/10] sm:aspect-[16/11] lg:aspect-auto lg:h-full min-h-[300px] overflow-hidden bg-slate-900 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle TV scanline overlay */}
                  <div className="absolute inset-0 tv-scanlines pointer-events-none opacity-20" />

                  {/* Corner Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#050B14]/85 backdrop-blur-md text-cyan-300 border border-cyan-400/40 text-xs font-display font-bold uppercase tracking-wider">
                      <span>{service.badge || "SPECIALIZED"}</span>
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-display font-semibold text-slate-300 border border-slate-700">
                    {service.turnaround}
                  </div>
                </div>

                {/* Content Half */}
                <div
                  className={`lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 font-display font-semibold mb-2">
                      <span>PROTOCOL: {service.id.toUpperCase()}</span>
                      <span className="text-emerald-600 font-semibold flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Doorstep Service
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight group-hover:text-[#0052EA] transition-colors font-display">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                      {service.longDesc}
                    </p>

                    {/* Common Fixes */}
                    <div className="mt-6 pt-5 border-t border-slate-100">
                      <p className="text-xs font-display font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                        Typical Doorstep Technical Fixes:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.commonFixes.map((fix, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                            <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>{fix}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Dual Conversion CTA */}
                  <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                    <Button
                      variant="call"
                      size="md"
                      source="service_card"
                      className="w-full sm:w-auto flex-1"
                    >
                      Call Technician
                    </Button>

                    <Button
                      variant="whatsapp"
                      size="md"
                      source="service_card"
                      whatsappMessage={`Hi RoyalTechLabs, I need expert help with ${service.title}.`}
                      className="w-full sm:w-auto flex-1"
                    >
                      WhatsApp Issue
                    </Button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Specialized Repair Subsystems Grid */}
        <div className="mt-12">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-display">
              Component &amp; Subsystem Laboratories
            </h3>
            <span className="text-xs font-display font-semibold text-slate-500 hidden sm:inline">
              6 SPECIALIZED REPAIR TILES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalTiles.map((tile) => (
              <div
                key={tile.id}
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Visual Header */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 border-b border-slate-100">
                    <Image
                      src={tile.imageSrc}
                      alt={tile.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-2 right-2 bg-slate-950/80 px-2 py-0.5 rounded text-[10px] font-display font-semibold text-slate-300">
                      {tile.turnaround}
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-[#0052EA] transition-colors flex items-center justify-between font-display">
                      <span>{tile.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                      {tile.shortDesc}
                    </p>

                    <div className="mt-3.5 flex flex-wrap gap-1.5 font-sans">
                      {tile.commonFixes.map((fix, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium"
                        >
                          {fix}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Conversion Actions */}
                <div className="p-5 pt-0 flex items-center gap-2">
                  <Button
                    variant="call"
                    size="sm"
                    source="service_card"
                    className="flex-1 text-xs py-2"
                  >
                    Call
                  </Button>
                  <Button
                    variant="whatsapp"
                    size="sm"
                    source="service_card"
                    whatsappMessage={`Hi RoyalTechLabs, I need repair for: ${tile.title}`}
                    className="flex-1 text-xs py-2"
                  >
                    WhatsApp
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
