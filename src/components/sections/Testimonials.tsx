"use client";

import { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/config/site";
import { Star, MapPin, CheckCircle, ShieldCheck, Quote, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import ConcentricRipples from "@/components/ui/ConcentricRipples";

export default function Testimonials() {
  const testimonials = siteConfig.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Determine items per view based on viewport width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  // Auto-play at normal, comfortable speed (every 3.8s)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Concentric Diagnostic Ripple Waves in Background (Matching Image 3) */}
      <ConcentricRipples position="top-right" opacity={0.8} />
      <ConcentricRipples position="bottom-left" opacity={0.6} />

      {/* Ambient Blue Glow Orbs */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute -top-28 -right-20 w-[450px] h-[450px] bg-gradient-to-bl from-blue-500/10 via-cyan-400/6 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-28 -left-20 w-[450px] h-[450px] bg-gradient-to-tr from-[#0052EA]/8 via-indigo-400/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-display font-bold tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>VERIFIED CUSTOMER EXPERIENCES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-display">
              Trusted in Living Rooms <br />
              <span className="text-[#0052EA]">Across Dubai, Sharjah &amp; Ajman</span>
            </h2>
          </div>

          {/* Carousel Arrow Navigation Controls */}
          <div className="flex items-center gap-2.5 self-start md:self-auto">
            <button
              type="button"
              onClick={handlePrev}
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-[#0052EA] hover:bg-blue-50/70 text-slate-700 hover:text-[#0052EA] flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
              aria-label="Previous Testimonials"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="w-10 h-10 rounded-xl bg-[#0052EA] hover:bg-[#0042BE] border border-blue-600 text-white flex items-center justify-center transition-all shadow-md shadow-blue-500/25 active:scale-95 cursor-pointer"
              aria-label="Next Testimonials"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container (with Pause on Hover) */}
        <div
          className="relative overflow-hidden py-2 -mx-2 px-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-out gap-5 sm:gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView + (itemsPerView > 1 ? 0.6 : 0))}%)`,
            }}
          >
            {testimonials.map((review) => {
              const initial = review.name.trim().charAt(0).toUpperCase();

              return (
                <div
                  key={review.id}
                  className="flex-shrink-0 flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-lg shadow-blue-500/5 hover:shadow-xl hover:border-blue-400 transition-all duration-300 select-none group"
                  style={{
                    width: itemsPerView === 1 
                      ? "100%" 
                      : itemsPerView === 2 
                        ? "calc(50% - 12px)" 
                        : "calc(33.333% - 16px)",
                  }}
                >
                  <div>
                    {/* Top Quote Icon & 5 Stars */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200/60 text-blue-500 flex items-center justify-center">
                        <Quote className="w-4 h-4 text-blue-500 rotate-180" />
                      </div>

                      <div className="flex items-center gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Service Badge */}
                    <span className="inline-block text-[10px] font-display font-bold text-[#0052EA] bg-blue-50 border border-blue-200/60 px-2.5 py-0.5 rounded-md mb-3 uppercase tracking-wider">
                      {review.service}
                    </span>

                    {/* Review Quote */}
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal italic font-sans">
                      &ldquo;{review.comment}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer Information with Circular Initial Avatar (Matching Image 3) */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-200 text-[#0052EA] flex items-center justify-center font-extrabold text-sm shadow-2xs shrink-0 font-display">
                        {initial}
                      </div>

                      <div>
                        <div className="text-sm font-bold text-slate-900 leading-tight font-display">
                          {review.name}
                        </div>
                        <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-0.5 font-sans">
                          <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                          <span>{review.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "w-7 bg-[#0052EA]"
                  : "w-2 bg-slate-200 hover:bg-slate-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 font-sans">
            * Verified customer reviews from recent doorstep calls. Written service warranty issued with every repair.
          </p>
        </div>

      </div>
    </section>
  );
}
