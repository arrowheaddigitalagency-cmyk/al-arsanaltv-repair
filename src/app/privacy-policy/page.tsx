import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileActionBar from "@/components/layout/MobileActionBar";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `Privacy Policy and data protection terms for ${siteConfig.name} doorstep TV repair services in UAE.`,
};

export default function PrivacyPolicy() {
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
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 font-mono">
                {siteConfig.name.toUpperCase()} // LEGAL COMPLIANCE
              </p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-600 space-y-6 text-sm sm:text-base leading-relaxed">
            <p>
              At <strong>{siteConfig.legalName}</strong> (operating as <strong>{siteConfig.name}</strong>, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your information when you interact with our website (<strong>{siteConfig.domain}</strong>) and book our doorstep TV repair services across Dubai, Sharjah, and Ajman.
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
              1. Information We Collect
            </h2>
            <p>
              We collect information solely to provide accurate doorstep television diagnosis, repair, and customer support:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Contact Details:</strong> Your name, phone number, and physical residential address or location pin for technician dispatch.</li>
              <li><strong>Appliance Information:</strong> Television brand, screen size, model number, observed fault descriptions, and photos or videos shared for remote diagnosis.</li>
              <li><strong>Communications:</strong> Call logs, SMS messages, and WhatsApp conversations necessary for repair coordination and scheduling.</li>
            </ul>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
              2. How We Use Your Information
            </h2>
            <p>
              Your personal information is used exclusively to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Dispatch qualified mobile technicians to your doorstep at your requested time.</li>
              <li>Provide cost estimates, diagnosis explanations, and repair warranty records.</li>
              <li>Process customer service callbacks and follow-ups.</li>
              <li>Analyze web traffic and measure advertising effectiveness (e.g., Google Ads and Google Analytics).</li>
            </ul>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
              3. Analytics &amp; Conversion Tracking
            </h2>
            <p>
              We may utilize web analytics tools such as Google Analytics and Google Ads conversion tracking cookies. These tools collect anonymized usage information (such as pages viewed, browser type, and click events on phone or WhatsApp buttons) to help us optimize user experience. No sensitive banking or personal identity information is shared with advertising platforms.
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
              4. Data Retention &amp; Security
            </h2>
            <p>
              We retain customer service records (such as warranty dates and part replacement details) for the duration of the service guarantee. We employ reasonable technical and administrative precautions to safeguard your contact details from unauthorized access, disclosure, or alteration.
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
              5. Your Rights
            </h2>
            <p>
              You have the right to request access to, correction of, or deletion of your personal contact records from our scheduling database at any time by contacting our support desk.
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
              6. Contact Information
            </h2>
            <p>
              For any questions regarding this Privacy Policy or our data handling practices, please contact us:
            </p>
            <p className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm font-mono">
              <strong>{siteConfig.legalName}</strong><br />
              Brand: {siteConfig.name}<br />
              Email: {siteConfig.email}<br />
              Phone: {siteConfig.phoneDisplay}<br />
              Workshop / Lab: {siteConfig.address}<br />
              Service Coverage: Dubai, Sharjah, Ajman, United Arab Emirates
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <MobileActionBar />
    </div>
  );
}
