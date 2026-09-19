import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import ConcentricRipples from "@/components/ui/ConcentricRipples";
import {
  PhoneCall,
  Activity,
  CheckCircle2,
  ArrowRight,
  Radio,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function Process() {
  const steps = [
    {
      step: "01",
      icon: PhoneCall,
      label: "INTAKE & TELEMETRY",
      title: "Direct Call or WhatsApp Diagnosis",
      description:
        "Share your TV brand, screen size, and observed symptom (black screen, no power, or lines). Our lab supervisor gives an upfront preliminary assessment and schedules an immediate doorstep dispatch.",
      pill: "Under 3-Min Response",
      highlight: "No Booking Fees",
    },
    {
      step: "02",
      icon: Activity,
      label: "MOBILE LAB DISPATCH",
      title: "Doorstep Precision Testing",
      description:
        "A certified RoyalTechLabs technician arrives at your Dubai, Sharjah, or Ajman residence equipped with digital multimeters, oscilloscopes, and testing boards to pinpoint the exact micro-component fault without guessing.",
      pill: "30–60 Min Arrival",
      highlight: "On-Site Laboratory Diagnostics",
    },
    {
      step: "03",
      icon: CheckCircle2,
      label: "REPAIR & CALIBRATION",
      title: "On-Site Fix & 4K Quality Test",
      description:
        "We replace faulty micro-components, power supply circuits, or LED arrays directly in your living room, followed by comprehensive 4K video, audio, and HDMI input quality verification and official written warranty documentation.",
      pill: "Written Guarantee",
      highlight: "98% Fixed At Home",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 relative">
      {/* Background Decor Contained Without Breaking Sticky on Parent */}
      <div className="absolute inset-0 overflow-clip pointer-events-none">
        <ConcentricRipples position="top-right" opacity={0.7} />
        <ConcentricRipples position="bottom-left" opacity={0.5} />
        <div className="absolute inset-0 tech-grid-pattern opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Sticky Split Grid on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Sticky Stage Indicator & Live Dispatch Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-display font-bold tracking-wider mb-3">
              <Radio className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
              <span>THE SERVICE JOURNEY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight font-display">
              From Black Screen to 4K Picture. <br />
              <span className="text-[#0052EA]">Three Precision Stages.</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal font-sans">
              No dangerous transport, no weeks of waiting in third-party repair workshops. Transparent doorstep restoration directly inside your living room.
            </p>

            {/* Sticky Live Telemetry Card */}
            <div className="mt-8 p-6 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-blue-500/5">
              <div className="flex items-center gap-2 text-xs font-display font-bold text-slate-700 mb-3 tracking-wider">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-700">MOBILE LAB UNITS ON-CALL NOW</span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-600 mb-5 font-sans">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#0052EA] shrink-0" />
                  <span>Typical arrival time: <strong className="text-slate-900 font-semibold font-display">30–60 Minutes</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0052EA] shrink-0" />
                  <span>Coverage: <strong className="text-slate-900 font-semibold font-display">Dubai • Sharjah • Ajman</strong></span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <Button
                  variant="call"
                  size="sm"
                  source="sticky_process"
                  className="w-full justify-center"
                >
                  Call {siteConfig.phoneDisplay}
                </Button>

                <Button
                  variant="whatsapp"
                  size="sm"
                  source="sticky_process"
                  whatsappMessage="Hi RoyalTechLabs, I need a technician dispatched to my location today."
                  className="w-full justify-center"
                >
                  WhatsApp Lab
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Sticky Scrolling Stages with High-Tech Aesthetics */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10 pb-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              const stickyOffsets = ["lg:sticky lg:top-28 z-10", "lg:sticky lg:top-36 z-20", "lg:sticky lg:top-44 z-30"];
              return (
                <div
                  key={item.step}
                  className={`relative flex flex-col bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-xl shadow-blue-500/5 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 group backdrop-blur-md ${stickyOffsets[idx] || "lg:sticky lg:top-28"}`}
                >
                  {/* Step Top Header */}
                  <div className="flex items-start justify-between gap-3 mb-4 sm:mb-5">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0052EA] shrink-0 group-hover:scale-105 group-hover:bg-[#0052EA] group-hover:text-white transition-all duration-300 shadow-xs">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>

                      <div className="min-w-0">
                        <span className="text-[10px] sm:text-[10.5px] font-display font-bold tracking-widest text-[#0052EA] uppercase block">
                          {item.label}
                        </span>
                        <span className="text-xs font-sans font-semibold text-slate-600 block">
                          {item.highlight}
                        </span>
                      </div>
                    </div>

                    <span className="font-display text-[11px] sm:text-xs font-extrabold px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200 shadow-2xs shrink-0 whitespace-nowrap">
                      STAGE {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2.5 font-display">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-normal font-sans">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 font-sans">
                    <span className="text-xs font-display font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/80 shrink-0">
                      {item.pill}
                    </span>

                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0052EA] group-hover:translate-x-1 transition-transform font-display shrink-0">
                      <span>Certified Doorstep Protocol</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
