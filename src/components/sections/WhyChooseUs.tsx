import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ConcentricRipples from "@/components/ui/ConcentricRipples";
import { siteConfig } from "@/config/site";
import {
  Wrench,
  Radio,
  ShieldCheck,
  Cpu,
  Home,
  Zap,
} from "lucide-react";

export default function WhyChooseUs() {
  const standards = [
    {
      num: "01",
      icon: Cpu,
      title: "Component-Level Precision vs Assembly Swapping",
      description: "Generic service shops replace entire multi-thousand dirham boards. RoyalTechLabs diagnoses individual blown MOSFETs, capacitors, and ICs, saving up to 60% of repair cost.",
    },
    {
      num: "02",
      icon: Radio,
      title: "Rapid Doorstep Mobile Units",
      description: "Our fleet of mobile service vans is stationed across prime Dubai, Sharjah, and Ajman hubs to reach your residence within 30 to 60 minutes.",
    },
    {
      num: "03",
      icon: ShieldCheck,
      title: "100% Genuine Aluminum LED Strips & Factory Parts",
      description: "We install only tested, genuine-specification parts with optimal thermal dissipation, backed by an official written service warranty.",
    },
    {
      num: "04",
      icon: Wrench,
      title: "Transparent Fixed Estimates Before Work",
      description: "Zero surprise fees. You receive a complete explanation of the fault with an upfront quotation before our technician proceeds.",
    },
    {
      num: "05",
      icon: Home,
      title: "Zero Dangerous Screen Transportation",
      description: "Fragile large-format screens crack easily when transported in passenger vehicles. 98% of repairs are safely performed inside your home.",
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Concentric Diagnostic Ripple Rings Effect (from Image 3) */}
      <ConcentricRipples position="top-left" opacity={0.7} />
      <ConcentricRipples position="bottom-right" opacity={0.6} />

      {/* Ambient Blue Glow Orbs & Subtle Technical Grid */}
      <div className="absolute inset-0 tech-grid-pattern opacity-35 pointer-events-none" />
      <div className="absolute -top-32 -right-20 w-[480px] h-[480px] bg-gradient-to-bl from-blue-500/8 via-cyan-400/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-[450px] h-[450px] bg-gradient-to-tr from-blue-600/7 via-indigo-400/4 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-400/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Laboratory Workstation Visual (5 cols) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="rounded-3xl bg-[#070D1A] border border-blue-900/50 p-4 sm:p-5 text-white shadow-2xl overflow-hidden relative">
              
              {/* Lab Workstation Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                <Image
                  src="/images/lab-workstation.jpg"
                  alt="RoyalTechLabs certified engineer performing component-level TV circuit micro-soldering and oscilloscope diagnostics"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Lab Telemetry Specs Box */}
              <div className="mt-5 p-4 rounded-xl bg-blue-950/40 border border-blue-800/40 text-xs font-sans space-y-2">
                <div className="flex items-center justify-between text-cyan-300">
                  <span className="font-display font-semibold">TESTING STANDARDS:</span>
                  <span className="font-bold font-display">DIGITAL OSCILLOSCOPE</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="font-display font-semibold">DOORSTEP RESOLUTION:</span>
                  <span className="font-bold text-emerald-400 font-display">98% COMPLETED IN-HOME</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="font-display font-semibold">WARRANTY COVERAGE:</span>
                  <span className="font-bold text-blue-300 font-display">WRITTEN CERTIFICATE</span>
                </div>
              </div>

              {/* Quick Contact Footer */}
              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400 font-display font-semibold tracking-wider">SPEAK TO A LAB SPECIALIST</div>
                  <div className="text-sm font-bold text-white font-display">{siteConfig.phoneDisplay}</div>
                </div>

                <Button
                  variant="call"
                  size="sm"
                  source="why_choose_us"
                >
                  Call Lab
                </Button>
              </div>

            </div>
          </div>

          {/* Right: Story-driven Standards & Advantages (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-display font-bold tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5 text-blue-600" />
              <span>THE ROYALTECHLABS DIFFERENCE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight font-display">
              Electronics Expertise. <br />
              <span className="text-[#0052EA]">You Can Verify In Real-Time.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans">
              We treat your valuable television with meticulous engineering discipline. Here is why UAE homeowners trust RoyalTechLabs over generic neighborhood handymen.
            </p>

            {/* 5 Numbered Principles */}
            <div className="mt-8 space-y-4 font-sans">
              {standards.map((item) => (
                <div
                  key={item.num}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs hover:border-blue-300 hover:bg-blue-50/20 transition-all group"
                >
                  <span className="font-display text-base sm:text-lg font-extrabold text-[#0052EA] shrink-0 mt-0.5">
                    {item.num}
                  </span>

                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0052EA] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
