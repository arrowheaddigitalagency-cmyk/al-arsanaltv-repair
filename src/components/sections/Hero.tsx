"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.fromTo(".hero-telemetry-badge", { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.4 })
        .fromTo(".hero-headline", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.2")
        .fromTo(".hero-copy", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.45 }, "-=0.25")
        .fromTo(".hero-cta-box", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.45 }, "-=0.25")
        .fromTo(".hero-visual-container", { opacity: 0, scale: 0.96, y: 10 }, { opacity: 1, scale: 1, y: 0, duration: 0.6 }, "-=0.35");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#EBF3FF] via-[#F4F8FE] to-[#FFFFFF] text-slate-900 pt-3 pb-5 sm:pt-4 sm:pb-6 lg:pt-5 lg:pb-7 border-b border-blue-100/80"
    >
      {/* High-Performance Ambient Auras (GPU-accelerated, Zero Repaint Lag) */}
      <div className="absolute inset-0 tech-grid-pattern opacity-45 pointer-events-none" />
      <div 
        className="absolute top-0 left-0 w-[500px] h-[450px] pointer-events-none opacity-70"
        style={{
          background: "radial-gradient(circle at 25% 25%, rgba(0, 82, 234, 0.11) 0%, rgba(0, 229, 255, 0.05) 50%, transparent 70%)",
        }}
      />
      <div 
        className="absolute top-1/4 right-0 w-[450px] h-[450px] pointer-events-none opacity-60"
        style={{
          background: "radial-gradient(circle at 80% 35%, rgba(0, 163, 255, 0.09) 0%, rgba(0, 82, 234, 0.03) 55%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-center">
          
          {/* LEFT: 58% Hierarchy - Compact Editorial Copy, Frosted Badge & High-Conversion CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Glassy Telemetry Status Pill & Limited Offer */}
            <div className="hero-telemetry-badge mb-2 sm:mb-2.5 flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md border border-blue-200/80 text-[#0052EA] text-[10.5px] font-display font-bold shadow-xs tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0052EA]"></span>
                </span>
                <span>ROYALTECHLABS // MOBILE DIAGNOSTIC FLEET ON-CALL</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-800 text-[10.5px] font-display font-bold shadow-xs tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                <span>SPECIAL: UP TO 20% OFF TODAY</span>
              </div>
            </div>

            {/* Authoritative Editorial Headline with Ultra-Compact Height */}
            <h1 className="hero-headline text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-extrabold tracking-tight text-slate-950 leading-[1.14]">
              Laboratory-Grade TV Repair. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052EA] via-[#0066FF] to-[#00A3FF]">
                At Your Living Room Doorstep.
              </span>
            </h1>

            {/* Concise Supporting Technical Intent Copy */}
            <p className="hero-copy mt-2 sm:mt-2.5 text-xs sm:text-[13px] lg:text-[13.5px] text-slate-600 max-w-lg font-normal leading-relaxed">
              Don&apos;t risk moving an 85-inch television. RoyalTechLabs dispatches fully equipped mobile laboratory units directly to your villa or apartment in Dubai, Sharjah, and Ajman. Precision component-level repair for <strong className="text-slate-900 font-semibold">OLED, QLED, LED, and 4K Smart TVs</strong>.
            </p>

            {/* Primary Conversion Action Group */}
            <div className="hero-cta-box mt-3 sm:mt-4 flex flex-col items-start gap-2 w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
                <Button
                  variant="call"
                  size="md"
                  source="hero_primary"
                  className="text-xs sm:text-sm py-2.5 px-5 shadow-lg shadow-blue-500/25 border border-blue-400/40"
                >
                  CALL TECHNICIAN • {siteConfig.phoneDisplay}
                </Button>

                <Button
                  variant="whatsapp"
                  size="md"
                  source="hero_secondary"
                  whatsappMessage="Hi RoyalTechLabs, I need urgent doorstep repair for my TV in Dubai/Sharjah/Ajman."
                  className="text-xs sm:text-sm py-2.5 px-5 shadow-lg shadow-emerald-500/25 border border-emerald-400/40"
                >
                  WHATSAPP DIAGNOSIS
                </Button>
              </div>

              <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-600 pt-0.5">
                <span className="text-amber-600 font-bold">★ Limited Offer:</span>
                <span>Up to 20% OFF on all component repairs across UAE</span>
              </div>
            </div>

          </div>

          {/* RIGHT: Visual Hierarchy - Clean Glassy Frame with Pristine Hero Technician Photo */}
          <div className="lg:col-span-5 relative mt-3 lg:mt-0 flex justify-center">
            <div className="hero-visual-container relative w-full max-w-[420px] lg:max-w-[440px] rounded-2xl p-2.5 bg-white/85 backdrop-blur-xl border border-white/95 shadow-[0_12px_40px_rgba(0,82,234,0.1)] ring-1 ring-blue-500/10">
              
              {/* Image Frame - Pure, Clean, High-Def Photo */}
              <div className="relative aspect-[16/10] max-h-[260px] sm:max-h-[280px] rounded-xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-inner group">
                <Image
                  src="/images/hero-technician.jpg"
                  alt="RoyalTechLabs certified technician inspecting TV circuitry in modern Dubai living room"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 440px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
