"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(12);
  const [statusText, setStatusText] = useState("INITIALIZING MOBILE LAB FLEET...");
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Disable body scroll while preloader is active
    document.body.style.overflow = "hidden";

    const stages = [
      { progress: 38, text: "CALIBRATING OSCILLOSCOPES & MULTIMETERS...", delay: 200 },
      { progress: 68, text: "CONNECTING TO DUBAI, SHARJAH & AJMAN UNITS...", delay: 450 },
      { progress: 92, text: "LOADING COMPONENT REPAIR MATRIX...", delay: 700 },
      { progress: 100, text: "LAB DIAGNOSTIC CONSOLE READY", delay: 950 },
    ];

    const timeouts: NodeJS.Timeout[] = [];

    stages.forEach(({ progress: p, text, delay }) => {
      const t = setTimeout(() => {
        setProgress(p);
        setStatusText(text);
      }, delay);
      timeouts.push(t);
    });

    // Fade out after completion
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
      document.body.style.overflow = "";
    }, 1150);
    timeouts.push(fadeTimer);

    // Remove from DOM
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 1600);
    timeouts.push(removeTimer);

    return () => {
      document.body.style.overflow = "";
      timeouts.forEach(clearTimeout);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050A14] text-white select-none transition-all duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none scale-102" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* Background Tech Grid & Glow Orbs */}
      <div className="absolute inset-0 tech-grid-dark opacity-40 pointer-events-none" />
      <div className="absolute w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute w-64 h-64 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />

      {/* Center Preloader Container */}
      <div className="relative z-10 flex flex-col items-center px-6 max-w-sm w-full text-center">
        
        {/* Glowing Logo Card */}
        <div className="relative mb-6 p-4 px-6 rounded-3xl bg-white shadow-[0_0_50px_rgba(0,102,255,0.35)] border border-white/90 flex items-center justify-center">
          <div className="relative w-48 sm:w-56 h-14">
            <Image
              src="/images/rtl-logo-bg.png"
              alt="RoyalTechLabs"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Pulse Ring */}
          <span className="absolute -inset-1.5 rounded-[26px] border border-cyan-400/40 animate-ping pointer-events-none opacity-30" />
        </div>

        {/* Status Text */}
        <div className="h-5 flex items-center justify-center">
          <span className="text-[11px] font-display tracking-widest text-cyan-400 uppercase font-bold animate-pulse">
            {statusText}
          </span>
        </div>

        {/* Precision Progress Bar */}
        <div className="mt-4 w-full h-1.5 rounded-full bg-slate-800/90 overflow-hidden border border-slate-700/50 relative shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-[#0052EA] via-[#00A3FF] to-cyan-400 rounded-full transition-all duration-300 ease-out shadow-[0_0_12px_#00E5FF]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Telemetry Counter Row */}
        <div className="mt-2.5 w-full flex items-center justify-between text-[10px] font-display font-semibold tracking-wider text-slate-400">
          <span>TELEMETRY SYNC</span>
          <span className="text-cyan-300 font-bold">{progress}%</span>
          <span>UAE FLEET</span>
        </div>

      </div>

      {/* Subtle Scanlines */}
      <div className="absolute inset-0 tv-scanlines pointer-events-none opacity-15" />
    </div>
  );
}
