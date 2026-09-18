"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [visible, setVisible] = useState<boolean>(true);
  const [isFading, setIsFading] = useState<boolean>(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setVisible(false);
      return;
    }

    // Step 1: Begin smooth fade after progress bar fills
    const timer1 = setTimeout(() => {
      setIsFading(true);
    }, 1100);

    // Step 2: Unmount preloader
    const timer2 = setTimeout(() => {
      setVisible(false);
    }, 1450);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white select-none transition-opacity duration-350 ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center max-w-xs px-4">
        
        {/* Official Brand Logo (Matching Screenshot) */}
        <div className="relative w-48 sm:w-56 h-14 sm:h-16 mb-6 transition-transform">
          <Image
            src="/images/rtl-logo-bg.png"
            alt="RoyalTechLabs"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Gradient Progress Bar (Matching Screenshot: Blue -> Purple -> Green/Cyan) */}
        <div className="w-52 sm:w-60 h-1.5 rounded-full bg-slate-100 overflow-hidden relative shadow-inner">
          <div className="h-full rounded-full bg-gradient-to-r from-[#0052EA] via-[#6366F1] to-[#10B981] animate-preload-fill" />
        </div>

        {/* Loading Text (Matching Screenshot) */}
        <p className="mt-4 text-[10.5px] sm:text-[11px] font-mono font-bold tracking-[0.25em] text-slate-400 uppercase">
          LOADING DOORSTEP SERVICE...
        </p>

      </div>

      <style jsx>{`
        @keyframes preload-fill {
          0% {
            width: 0%;
          }
          40% {
            width: 60%;
          }
          80% {
            width: 90%;
          }
          100% {
            width: 100%;
          }
        }
        .animate-preload-fill {
          animation: preload-fill 1.05s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
}
