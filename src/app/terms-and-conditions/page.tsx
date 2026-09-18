import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileActionBar from "@/components/layout/MobileActionBar";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${siteConfig.name}`,
  description: `Terms and conditions for doorstep TV repair services by ${siteConfig.name} in Dubai, Sharjah, and Ajman.`,
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <TopBar />
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 pb-mobile-bar">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0052EA] hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0052EA] flex items-center justify-center border border-blue-200">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Terms &amp; Conditions
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 font-mono">
                {siteConfig.name.toUpperCase()} // TERMS OF SERVICE
              </p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-600 space-y-6 text-sm sm:text-base leading-relaxed">
            <p>
              Welcome to <strong>{siteConfig.name}</strong> operated by <strong>{siteConfig.legalName}</strong>. By accessing our website or requesting our doorstep TV repair services, you agree to comply with and be bound by the following terms and conditions.
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
              1. Service Scope &amp; Doorstep Diagnosis
            </h2>
            <p>
              We provide on-site technical inspection, troubleshooting, and repair for televisions (OLED, QLED, LED, and Smart TVs) across designated service zones in Dubai, Sharjah, and Ajman. Preliminary estimates given over the phone or WhatsApp are non-binding approximations based on reported symptoms. An accurate diagnosis requires on-site testing by our technician.
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
              2. Repair Authorization &amp; Estimates
            </h2>
            <p>
              No repair work will commence without your explicit approval of the diagnostic findings and quotation. If you authorize the repair, our technician will proceed using genuine-specification or tested replacement components.
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
              3. Replacement Parts &amp; Service Warranty
            </h2>
            <p>
              Replaced hardware components (such as LED backlight strips, power supply boards, and mainboards) carry a specified limited service warranty against manufacturing defects, detailed on your service invoice. The warranty does not cover:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Physical accidental damage (drops, liquid spills, screen impacts).</li>
              <li>Power surge damage caused by unstable building mains wiring.</li>
              <li>Unauthorized tampering or third-party disassembly after our visit.</li>
            </ul>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
              4. Customer Responsibilities
            </h2>
            <p>
              The customer is responsible for ensuring clear, safe access to the television set and power outlets in their residence, as well as providing valid permission for building entry (security or gate passes where required in gated communities or residential towers).
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
              5. Limitation of Liability
            </h2>
            <p>
              While our technicians exercise utmost professional care, televisions with pre-existing hairline panel micro-fractures, degraded internal ribbon bonds, or extensive corrosion may display further deterioration during testing. {siteConfig.legalName} shall not be liable for pre-existing internal material degradation that cannot be safely restored.
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
              6. Trademark Disclaimer
            </h2>
            <p>
              All television brand names, model names, and trademarks (including Samsung, LG, Sony, TCL, Hisense, and others) referenced on this website are the property of their respective trademark holders. RoyalTechLabs operates as an independent electronics repair and service laboratory.
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
              7. Inquiries
            </h2>
            <p>
              If you have any questions regarding these terms, please contact our dispatch desk at <strong>{siteConfig.phoneDisplay}</strong> or by email at <strong>{siteConfig.email}</strong>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <MobileActionBar />
    </div>
  );
}
