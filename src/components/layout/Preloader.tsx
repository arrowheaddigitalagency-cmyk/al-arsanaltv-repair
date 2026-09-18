"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePreloader } from "@/context/PreloaderContext";

export default function Preloader() {
  const { completePreloader } = usePreloader();
  const [mounted, setMounted] = useState<boolean>(true);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(10);
  const [statusText, setStatusText] = useState<string>("INITIALIZING MOBILE DIAGNOSTIC LAB...");

  useEffect(() => {
    // Lock body scroll while preloader is active
    document.body.style.overflow = "hidden";

    // Progress increments for authentic laboratory diagnostics feel
    const stages = [
      { p: 35, text: "CALIBRATING OSCILLOSCOPES & POWER PROBES...", delay: 220 },
      { p: 68, text: "SYNCING FLEET: DUBAI, SHARJAH & AJMAN...", delay: 500 },
      { p: 92, text: "LOADING LABORATORY TELEMETRY MATRIX...", delay: 780 },
      { p: 100, text: "DIAGNOSTIC LAB CONSOLE READY", delay: 1050 },
    ];

    const timeouts: NodeJS.Timeout[] = [];

    stages.forEach(({ p, text, delay }) => {
      const t = setTimeout(() => {
        setProgress(p);
        setStatusText(text);
      }, delay);
      timeouts.push(t);
    });

    // Step 1: Trigger smooth fade out & notify hero section to appear
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
      completePreloader();
      document.body.style.overflow = "";
    }, 1250);
    timeouts.push(fadeTimer);

    // Step 2: Fully unmount preloader from DOM after fade completes
    const unmountTimer = setTimeout(() => {
      setMounted(false);
    }, 1850);
    timeouts.push(unmountTimer);

    return () => {
      document.body.style.overflow = "";
      timeouts.forEach(clearTimeout);
    };
  }, [completePreloader]);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-all duration-600 ease-out select-none ${
        isFadingOut
          ? "opacity-0 pointer-events-none scale-102"
          : "opacity-100 scale-100"
      }`}
      aria-hidden="true"
    >
      {/* Subtle Ambient Glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle at 50% 45%, rgba(0, 82, 234, 0.08) 0%, rgba(0, 229, 255, 0.03) 40%, transparent 70%)"
        }}
      />
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6 text-center">
        
        {/* Brand Logo with Gentle Elevation */}
        <div className="relative w-52 sm:w-64 h-16 sm:h-20 mb-6 p-2 rounded-2xl bg-white shadow-[0_10px_35px_rgba(0,82,234,0.12)] border border-blue-100/90 flex items-center justify-center">
          <Image
            src="/images/rtl-logo-bg.png"
            alt="RoyalTechLabs"
            fill
            priority
            className="object-contain p-1"
          />
        </div>

        {/* Dynamic Status Text */}
        <div className="h-5 flex items-center justify-center mb-3">
          <p className="text-[10.5px] sm:text-[11px] font-display font-bold tracking-[0.2em] text-[#0052EA] uppercase animate-pulse">
            {statusText}
          </p>
        </div>

        {/* High-Precision Progress Bar */}
        <div className="w-56 sm:w-64 h-2 rounded-full bg-slate-100 overflow-hidden relative shadow-inner border border-slate-200/80">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#0052EA] via-[#0088FF] to-[#00E5FF] transition-all duration-300 ease-out shadow-[0_0_12px_rgba(0,163,255,0.6)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Telemetry Counter Row */}
        <div className="mt-2.5 w-56 sm:w-64 flex items-center justify-between text-[10px] font-display font-semibold tracking-wider text-slate-400">
          <span>DOORSTEP LAB</span>
          <span className="text-[#0052EA] font-bold text-xs">{progress}%</span>
          <span>UAE FLEET</span>
        </div>

      </div>
    </div>
  );
}
