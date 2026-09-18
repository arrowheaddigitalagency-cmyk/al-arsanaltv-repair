"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import { Menu, X, Phone, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Problems", href: "#diagnostic" },
    { label: "Process", href: "#how-it-works" },
    { label: "Areas", href: "#areas" },
    { label: "Why Us", href: "#why-us" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-xs border-b border-blue-100/90 py-1 sm:py-1.5"
          : "bg-white/85 backdrop-blur-md border-b border-blue-100/60 py-1.5 sm:py-2"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-3 xl:gap-6">
        
        {/* Left: Brand Identity (Bigger, High-Impact Logo) */}
        <Link
          href="/#hero"
          onClick={(e) => {
            const hero = document.getElementById("hero");
            if (hero) {
              e.preventDefault();
              hero.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="flex items-center group focus-visible:outline-none shrink-0 whitespace-nowrap py-0.5 cursor-pointer"
          aria-label="RoyalTechLabs - Return to Hero"
        >
          <div className="relative h-11 sm:h-12 lg:h-13 w-44 sm:w-52 lg:w-60 transition-transform group-hover:scale-103">
            <Image
              src="/images/rtl-logo-bg.png"
              alt="RoyalTechLabs - Doorstep TV Repair"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Center: Desktop Navigation Links (Concise, Clean, SEO-Friendly Single Line) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 flex-nowrap shrink">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-2.5 xl:px-3.5 py-1.5 text-xs xl:text-[13.5px] font-display font-semibold tracking-tight text-slate-700 hover:text-[#0052EA] rounded-lg hover:bg-blue-50/70 transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Desktop Call & WhatsApp Actions (Strictly Single Line) */}
        <div className="hidden md:flex items-center gap-2 xl:gap-2.5 shrink-0 whitespace-nowrap">
          <Button
            variant="call"
            size="sm"
            source="navbar"
            className="hidden sm:inline-flex py-2 px-3 xl:px-3.5 text-xs font-bold whitespace-nowrap"
          >
            {siteConfig.phoneDisplay}
          </Button>

          <Button
            variant="whatsapp"
            size="sm"
            source="navbar"
            whatsappMessage="Hi RoyalTechLabs, I need to book an expert doorstep technician for my TV."
            className="py-2 px-3 xl:px-3.5 text-xs font-bold whitespace-nowrap"
          >
            WhatsApp Lab
          </Button>
        </div>

        {/* Mobile: Direct Phone Trigger + Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={siteConfig.phoneHref}
            className="w-8 h-8 rounded-lg bg-[#0052EA] text-white flex items-center justify-center shadow-xs"
            aria-label="Call RoyalTechLabs Now"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-8 h-8 rounded-lg text-slate-700 hover:bg-slate-100 flex items-center justify-center"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-blue-100 bg-white/95 backdrop-blur-xl shadow-xl px-4 pt-3 pb-5">
          <div className="flex flex-col space-y-1.5 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-[#0052EA] hover:bg-blue-50/60"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
            <Button
              variant="call"
              size="md"
              fullWidth
              source="navbar"
            >
              Call {siteConfig.phoneDisplay}
            </Button>
            <Button
              variant="whatsapp"
              size="md"
              fullWidth
              source="navbar"
              whatsappMessage="Hi RoyalTechLabs, I need immediate doorstep repair."
            >
              WhatsApp Support
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
