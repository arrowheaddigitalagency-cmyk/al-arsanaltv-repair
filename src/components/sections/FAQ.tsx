"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import ConcentricRipples from "@/components/ui/ConcentricRipples";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-gradient-to-b from-[#F0F6FF] via-[#F8FAFF] to-white border-b border-blue-100 relative overflow-hidden">
      {/* Concentric Diagnostic Ripple Waves in Background */}
      <ConcentricRipples position="top-right" opacity={0.7} />
      <ConcentricRipples position="bottom-left" opacity={0.5} />

      {/* Ambient Blue Glow Orbs */}
      <div className="absolute top-10 -left-20 w-[420px] h-[420px] bg-gradient-to-br from-[#0052EA]/10 via-cyan-400/8 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[450px] h-[450px] bg-gradient-to-tl from-blue-600/8 via-sky-400/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Blue Accents */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-[#0052EA] text-xs font-mono font-bold mb-3.5 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#0052EA]" />
            <span>KNOWLEDGE BASE &amp; FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Frequently Asked <span className="text-[#0052EA]">Questions</span>
          </h2>
          <p className="mt-3.5 text-base text-slate-600">
            Straightforward answers about our doorstep diagnosis protocols, pricing transparency, and warranty.
          </p>
        </div>

        {/* Accordion with Blue Touch */}
        <div className="space-y-3.5">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-blue-400 bg-gradient-to-r from-blue-50/60 via-white to-white ring-2 ring-blue-500/15 shadow-md shadow-blue-500/5"
                    : "border-blue-100/90 bg-white hover:border-blue-300 hover:shadow-xs"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-5 sm:px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0052EA] group"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                      isOpen ? "text-[#0052EA]" : "text-slate-900 group-hover:text-[#0052EA]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen
                        ? "bg-[#0052EA] text-white rotate-180 shadow-md shadow-blue-500/30"
                        : "bg-blue-50 border border-blue-200 text-[#0052EA] group-hover:bg-blue-100"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-blue-100/70">
                    <div className="border-l-2 border-[#0052EA] pl-3.5 my-1.5 bg-blue-50/50 py-2.5 rounded-r-xl text-slate-700">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Banner with Blue Glow */}
        <div className="mt-12 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-[#06122C] via-[#091D4C] to-[#06122C] border border-blue-400/30 text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl shadow-blue-900/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/30 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0">
              <MessageSquare className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Have a specific question about your TV model?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Our lab engineers can give you instant advice over phone or WhatsApp.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
            <Button
              variant="call"
              size="sm"
              source="faq"
              className="flex-1 sm:flex-initial"
            >
              Call Engineer
            </Button>
            <Button
              variant="whatsapp"
              size="sm"
              source="faq"
              whatsappMessage="Hi RoyalTechLabs, I have a question regarding my TV model."
              className="flex-1 sm:flex-initial"
            >
              WhatsApp
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
