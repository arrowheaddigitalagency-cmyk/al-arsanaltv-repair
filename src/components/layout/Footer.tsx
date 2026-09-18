import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export default function Footer() {
  return (
    <footer className="bg-[#050B17] text-slate-300 border-t border-blue-950/70 text-xs sm:text-sm relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12 sm:pb-14 relative z-10">
        
        {/* ========================================================================= */}
        {/* Top Feature Banner: "Still Having TV Problems?" (Matching user design)    */}
        {/* ========================================================================= */}
        <div className="relative rounded-3xl bg-[#091D4C] border border-blue-400/25 p-7 sm:p-9 lg:p-10 mb-14 shadow-2xl overflow-hidden">
          {/* Subtle inner radial glow */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 relative z-10">
            <div className="max-w-2xl">
              <span className="inline-block text-[#00E5FF] font-display text-[11px] sm:text-xs font-extrabold uppercase tracking-widest mb-2.5">
                FAST DOORSTEP SERVICE GUARANTEED
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight font-display">
                Still Having TV Problems?
              </h2>

              <p className="mt-2.5 text-xs sm:text-sm lg:text-base text-slate-200/90 leading-relaxed font-normal font-sans">
                Get <strong className="text-white font-bold">FREE TV Checkup</strong> with <strong className="text-white font-bold">NO Visiting / Service Charges!</strong> Certified technician at your doorstep within 30–45 mins.
              </p>
            </div>

            {/* Dual Action Buttons on Banner */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3.5 shrink-0">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center justify-center gap-2 bg-[#0052EA] hover:bg-[#0042BE] text-white font-bold text-sm sm:text-base px-6 sm:px-7 py-3 rounded-full shadow-[0_0_25px_rgba(0,82,234,0.7)] hover:shadow-[0_0_35px_rgba(0,82,234,0.9)] transition-all active:scale-95 whitespace-nowrap cursor-pointer font-display"
                aria-label={`Call ${siteConfig.phoneDisplay} now`}
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Now</span>
              </a>

              <a
                href={siteConfig.getWhatsAppLink("Hi RoyalTechLabs, I need a free TV checkup at my home.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm sm:text-base px-6 sm:px-7 py-3 rounded-full shadow-[0_0_22px_rgba(37,211,102,0.45)] hover:shadow-[0_0_32px_rgba(37,211,102,0.65)] transition-all active:scale-95 whitespace-nowrap cursor-pointer font-display"
                aria-label="WhatsApp RoyalTechLabs"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Main 4-Column Footer Navigation Grid                                      */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          
          {/* Column 1: White Brand Card (4 cols) */}
          <div className="lg:col-span-4 flex justify-start">
            <div className="bg-white rounded-2xl p-6 sm:p-7 text-slate-900 shadow-xl w-full max-w-xs border border-slate-100 flex flex-col items-center text-center">
              <a
                href="#hero"
                className="relative w-44 sm:w-52 h-14 mb-3.5 block focus-visible:outline-none cursor-pointer transition-transform hover:scale-102"
                aria-label="RoyalTechLabs Home"
              >
                <Image
                  src="/images/rtl-logo-bg.png"
                  alt="RoyalTechLabs"
                  fill
                  className="object-contain"
                />
              </a>

              <div className="w-full h-px bg-slate-200/90 mb-3" />

              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#0052EA] mb-2 font-display">
                SPECIALIZED IN HOME SERVICE
              </span>

              <p className="text-xs text-slate-600 leading-relaxed font-normal font-sans">
                Home service TV repair in Dubai, Sharjah, and Ajman for LED, OLED, 4K, 8K, QLED, and Plasma TVs. All major brands covered.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-display font-bold text-xs tracking-wider mb-4 uppercase text-cyan-300">
              QUICK LINKS
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
              <li>
                <a href="#hero" className="hover:text-cyan-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#diagnostic" className="hover:text-cyan-400 transition-colors">
                  Problems We Fix
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-cyan-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-cyan-400 transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: TV Repair Services (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-display font-bold text-xs tracking-wider mb-4 uppercase text-cyan-300">
              TV REPAIR SERVICES
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <span className="text-cyan-400">•</span> LED TV Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <span className="text-cyan-400">•</span> 4K LED &amp; QLED Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <span className="text-cyan-400">•</span> OLED TV Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <span className="text-cyan-400">•</span> Plasma TV Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <span className="text-cyan-400">•</span> Smart TV Backlight Repair
                </a>
              </li>
              <li className="pt-1.5">
                <a
                  href="#areas"
                  className="text-[#25D366] hover:text-emerald-300 font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span>• Doorstep Service in Dubai, Sharjah &amp; Ajman</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Get In Touch (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-display font-bold text-xs tracking-wider mb-4 uppercase text-cyan-300">
              GET IN TOUCH
            </h3>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-2.5 text-slate-100 hover:text-cyan-400 transition-colors font-bold"
              >
                <Phone className="w-4 h-4 text-cyan-400 shrink-0 fill-current" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>

              <a
                href={siteConfig.getWhatsAppLink("Hi RoyalTechLabs, I need TV repair assistance.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#25D366] hover:text-emerald-300 transition-colors font-semibold"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{siteConfig.address}</span>
              </div>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* Bottom Copyright & Legal Links                                            */}
        {/* ========================================================================= */}
        <div className="mt-12 pt-8 border-t border-blue-950/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <p>
            &copy; {new Date().getFullYear()} by {siteConfig.name}. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-and-conditions" className="hover:text-slate-200 transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>•</span>
            <a href="#contact" className="hover:text-slate-200 transition-colors">
              Contact Us
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
