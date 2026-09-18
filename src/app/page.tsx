import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import MobileActionBar from "@/components/layout/MobileActionBar";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import BrandMarquee from "@/components/sections/BrandMarquee";
import TrustStrip from "@/components/sections/TrustStrip";
import ServicesShowcase from "@/components/sections/ServicesShowcase";
import LabDiagnosticMoment from "@/components/sections/LabDiagnosticMoment";
import ProblemDiagnostic from "@/components/sections/ProblemDiagnostic";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import ServiceAreas from "@/components/sections/ServiceAreas";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import ContactCTA from "@/components/sections/ContactCTA";
import CallbackForm from "@/components/sections/CallbackForm";
import FAQ from "@/components/sections/FAQ";

export default function HomePage() {
  return (
    <>
      {/* 1. Top Telemetry Urgency Bar */}
      <TopBar />

      {/* 3. Sticky Glassmorphic Navigation */}
      <Navbar />

      {/* Main Conversion Flow with Safe Mobile Padding */}
      <main className="pb-mobile-bar">
        {/* Hero Section with Asymmetric Layout & Generated Visual */}
        <Hero />

        {/* Major Brand Telemetry Marquee */}
        <BrandMarquee />

        {/* 5-Item Value Strip */}
        <TrustStrip />

        {/* Editorial Asymmetric Services Showcase with Unique Generated Images */}
        <ServicesShowcase />

        {/* SIGNATURE ROYALTECHLABS BRAND MOMENT: "Your TV. Diagnosed Like Technology Should Be." */}
        <LabDiagnosticMoment />

        {/* Interactive Problem Diagnostic Console with TV Display Simulator */}
        <ProblemDiagnostic />

        {/* Story-Driven Electronics Laboratory Workstation Section */}
        <WhyChooseUs />

        {/* 3-Stage Service Journey ("From Black Screen to 4K Picture") */}
        <Process />

        {/* Service Coverage Console with Real-Time Neighborhood Search */}
        <ServiceAreas />

        {/* Verified Technical Statistics with GSAP Count-Up */}
        <Stats />

        {/* Verified UAE Customer Reviews */}
        <Testimonials />

        {/* Direct Call vs WhatsApp Intake Feature */}
        <ContactCTA />

        {/* Validated Callback Request Console */}
        <CallbackForm />

        {/* SEO-Rich Accessible FAQ Accordion */}
        <FAQ />
      </main>

      {/* Comprehensive Technical Footer (with Still Having TV Problems banner) */}
      <Footer />

      {/* Fixed Mobile Conversion Dock (50% Call Now / 50% WhatsApp) */}
      <MobileActionBar />

      {/* Desktop Floating WhatsApp Launcher */}
      <FloatingWhatsApp />
    </>
  );
}
