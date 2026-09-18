"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function BrandMarquee() {
  // Duplicate 4 times to ensure perfectly seamless, infinite marquee looping on all display sizes
  const brandsList = [
    ...siteConfig.brands,
    ...siteConfig.brands,
    ...siteConfig.brands,
    ...siteConfig.brands,
  ];

  return (
    <div id="brands" className="bg-white/95 backdrop-blur-md border-b border-blue-100/80 py-4 sm:py-5 overflow-hidden select-none scroll-mt-14 relative z-20">
      <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
        <p className="text-[10.5px] sm:text-xs font-display font-bold uppercase tracking-widest text-slate-500">
          CERTIFIED TECHNICAL DIAGNOSTICS &amp; REPAIR FOR ALL MAJOR TELEVISION MANUFACTURERS
        </p>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex items-center gap-4 sm:gap-6 py-1.5 will-change-transform">
          {brandsList.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex items-center justify-center px-5 sm:px-6 py-2.5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#0052EA]/70 hover:shadow-md transition-all duration-300 cursor-pointer shrink-0 group shadow-2xs h-13 sm:h-14 min-w-[130px] sm:min-w-[150px]"
              title={`${brand.name} TV Repair & Diagnostics`}
            >
              <div className="relative w-24 sm:w-28 h-7 sm:h-8 flex items-center justify-center">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} TV Repair`}
                  fill
                  sizes="120px"
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
