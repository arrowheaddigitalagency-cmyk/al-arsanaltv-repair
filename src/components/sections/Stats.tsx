"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const counters = document.querySelectorAll<HTMLElement>(".stat-counter-value");

      counters.forEach((counter) => {
        const targetValue = parseFloat(counter.getAttribute("data-target") || "0");
        const isDecimal = targetValue % 1 !== 0;

        gsap.to(
          { val: 0 },
          {
            val: targetValue,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: counter,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            onUpdate: function () {
              const current = this.targets()[0].val;
              counter.textContent = isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString();
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {siteConfig.stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-xs"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center font-display">
                <span className="stat-counter-value text-[#0052EA]" data-target={stat.value}>
                  {stat.value}
                </span>
                <span className="text-[#0052EA]">{stat.suffix}</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-2 font-display">
                {stat.label}
              </div>
              <div className="text-[11px] font-sans text-slate-500 mt-0.5">
                {stat.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
