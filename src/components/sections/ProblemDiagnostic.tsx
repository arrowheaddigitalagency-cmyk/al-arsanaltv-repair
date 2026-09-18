"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig, type ProblemDiagnosticItem } from "@/config/site";
import Button from "@/components/ui/Button";
import ConcentricRipples from "@/components/ui/ConcentricRipples";
import {
  AlertTriangle,
  Tv,
  CheckCircle,
  Wrench,
  HelpCircle,
  Sparkles,
  Activity,
  Cpu,
} from "lucide-react";

export default function ProblemDiagnostic() {
  const [selectedProblem, setSelectedProblem] = useState<ProblemDiagnosticItem>(
    siteConfig.problems[0]
  );

  return (
    <section id="diagnostic" className="py-16 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Concentric Diagnostic Ripple Rings Effect (from Image 3) */}
      <ConcentricRipples position="top-right" opacity={0.75} />
      <ConcentricRipples position="bottom-left" opacity={0.6} />

      {/* Ambient Blue Glow Orbs & Light Tech Grid */}
      <div className="absolute inset-0 tech-grid-pattern opacity-35 pointer-events-none" />
      <div className="absolute -top-32 -left-20 w-[450px] h-[450px] bg-gradient-to-br from-[#0052EA]/8 via-cyan-400/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-20 w-[500px] h-[500px] bg-gradient-to-tl from-blue-600/7 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-display font-bold tracking-wider mb-3">
            <Activity className="w-3.5 h-3.5 text-blue-600" />
            <span>INTERACTIVE FAULT TELEMETRY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-display">
            What&apos;s Wrong With Your TV?
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-600 font-sans">
            Select your symptom below to trigger our digital diagnostic simulator and view probable causes and doorstep solutions.
          </p>
        </div>

        {/* Console Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 8 Diagnostic Symptom Selectors (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            <div className="flex items-center justify-between text-xs font-display font-bold tracking-wider text-slate-500 mb-1 px-1">
              <span>SELECT TELEMETRY SYMPTOM:</span>
              <span>8 CONDITIONS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {siteConfig.problems.map((prob) => {
                const isSelected = selectedProblem.id === prob.id;
                return (
                  <button
                    key={prob.id}
                    type="button"
                    onClick={() => setSelectedProblem(prob)}
                    className={`flex items-center justify-between p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-[#050B14] border-cyan-500 shadow-md text-white ring-1 ring-cyan-500"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-3 h-3 rounded-full shrink-0 ${
                          isSelected ? "bg-cyan-400 ring-4 ring-cyan-400/30" : "bg-slate-300"
                        }`}
                      />
                      <div>
                        <div className={`text-sm font-bold leading-tight font-display ${isSelected ? "text-white" : "text-slate-900"}`}>
                          {prob.symptom}
                        </div>
                        <div className={`text-xs font-sans mt-0.5 ${isSelected ? "text-cyan-300 font-medium" : "text-slate-500"}`}>
                          {prob.tag}
                        </div>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] font-display font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        isSelected
                          ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/30"
                          : prob.severity === "High"
                          ? "bg-rose-100 text-rose-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {prob.severity}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: RoyalTechLabs Digital Diagnostic Screen & Analysis (7 cols) */}
          <div className="lg:col-span-7 lg:sticky lg:top-24 self-start">
            <div className="rounded-3xl bg-[#060B14] border border-blue-900/40 p-5 sm:p-7 shadow-2xl text-white">
              
              {/* Simulated TV Display Bezel */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-950 border-2 border-slate-800 flex flex-col justify-between p-4 sm:p-6 select-none shadow-inner">
                
                {/* Fault Visual Simulator based on selected problem */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                  
                  {selectedProblem.visualEffect === "black-screen" && (
                    <div className="absolute inset-0 bg-black flex flex-col items-center justify-center text-slate-400 p-4 text-center">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.18)_0%,rgba(0,0,0,0.92)_55%,rgba(0,0,0,0.99)_100%)]" />
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full border border-cyan-400/40 bg-cyan-500/10 flex items-center justify-center mb-3 shadow-[0_0_25px_rgba(6,182,212,0.3)]">
                          <Tv className="w-8 h-8 text-cyan-300 animate-pulse" />
                        </div>
                        <span className="text-xs font-display text-cyan-300 font-bold tracking-wider px-3 py-1 rounded bg-slate-900/90 border border-cyan-500/30">
                          [FLASHLIGHT TEST: AUDIO STREAM ACTIVE // 0 NITS BACKLIGHT]
                        </span>
                        <span className="text-[11px] text-slate-300 mt-2 max-w-md bg-black/60 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-slate-800 font-sans">
                          Flashlight beam directed at panel reveals faint working image. Backlight array circuit failure confirmed.
                        </span>
                      </div>
                    </div>
                  )}

                  {selectedProblem.visualEffect === "no-power" && (
                    <div className="absolute inset-0 bg-neutral-950 flex flex-col items-center justify-center text-rose-400 font-display text-center p-4">
                      <Image
                        src="/images/service-power-supply.jpg"
                        alt="TV Power Supply Circuit Board"
                        fill
                        className="object-cover object-center opacity-40 mix-blend-luminosity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/80" />
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/80 border border-rose-500/50 text-rose-400 text-xs font-bold mb-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                          <span>MAINS: 230V AC DETECTED // 5V STANDBY RAIL: 0.00V</span>
                        </div>
                        <span className="text-[11px] text-slate-300 mt-1 max-w-sm font-sans">
                          Blown primary bridge rectifier or shorted switching MOSFET in power board
                        </span>
                      </div>
                    </div>
                  )}

                  {selectedProblem.visualEffect === "vertical-lines" && (
                    <div className="absolute inset-0 bg-slate-950">
                      <Image
                        src="/images/diagnostic-glitch.jpg"
                        alt="TV panel vertical line failure"
                        fill
                        className="object-cover object-center opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/60" />
                      <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-[10.5px] font-display font-semibold text-cyan-300 bg-slate-950/85 px-3 py-1.5 rounded-lg border border-cyan-500/40">
                        <span>T-CON LVDS SIGNAL CORRUPTION DETECTED</span>
                        <span className="text-rose-400 font-bold">COF BONDING FAILURE</span>
                      </div>
                    </div>
                  )}

                  {selectedProblem.visualEffect === "color-distortion" && (
                    <div className="absolute inset-0 bg-slate-950">
                      <Image
                        src="/images/diagnostic-color-distortion.jpg"
                        alt="TV color distortion gamma failure"
                        fill
                        className="object-cover object-center opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/60" />
                      <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-[10.5px] font-display font-semibold text-amber-300 bg-slate-950/85 px-3 py-1.5 rounded-lg border border-amber-500/40">
                        <span>GAMMA VOLTAGE REFERENCE OUT OF SPEC</span>
                        <span className="text-cyan-300 font-bold">COLOR MATRIX ABNORMAL</span>
                      </div>
                    </div>
                  )}

                  {selectedProblem.visualEffect === "flickering" && (
                    <div className="absolute inset-0 bg-slate-950">
                      <Image
                        src="/images/diagnostic-backlight-test.jpg"
                        alt="TV Backlight flickering ripple test"
                        fill
                        className="object-cover object-center opacity-80 animate-pulse"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/60" />
                      <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-[10.5px] font-display font-semibold text-amber-300 bg-slate-950/85 px-3 py-1.5 rounded-lg border border-amber-500/40">
                        <span>PWM BACKLIGHT DRIVER VOLTAGE UNSTABLE</span>
                        <span className="text-rose-400 font-bold">HIGH RIPPLE DETECTED</span>
                      </div>
                    </div>
                  )}

                  {selectedProblem.visualEffect === "hdmi" && (
                    <div className="absolute inset-0 bg-slate-950">
                      <Image
                        src="/images/diagnostic-test-pattern.jpg"
                        alt="SMPTE broadcast test pattern TV HDMI diagnosis"
                        fill
                        className="object-cover object-center opacity-85"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/60" />
                      <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-[10.5px] font-display font-semibold text-cyan-300 bg-slate-950/85 px-3 py-1.5 rounded-lg border border-cyan-500/40">
                        <span>HDMI TMDS DATA CLOCK: 0 Hz</span>
                        <span className="text-rose-400 font-bold">HDCP HANDSHAKE FAILED</span>
                      </div>
                    </div>
                  )}

                  {selectedProblem.visualEffect === "no-sound" && (
                    <div className="absolute inset-0 bg-slate-950">
                      <Image
                        src="/images/service-qled-4k.jpg"
                        alt="4K Video Signal OK, audio failure"
                        fill
                        className="object-cover object-center opacity-50"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/80" />
                      <div className="relative z-10 flex flex-col items-center p-4 text-center">
                        <div className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1 font-display">
                          4K Video Signal OK
                        </div>
                        <div className="flex items-center gap-2 text-rose-400 font-display text-xs bg-rose-950/70 border border-rose-500/40 px-3 py-1 rounded-full mt-2 font-semibold">
                          <AlertTriangle className="w-4 h-4 shrink-0" />
                          <span>D-CLASS AUDIO AMPLIFIER IC OPEN CIRCUIT // 0W OUTPUT</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedProblem.visualEffect === "no-wifi" && (
                    <div className="absolute inset-0 bg-slate-950">
                      <Image
                        src="/images/service-smart-tv.jpg"
                        alt="Smart TV SoC Logic Board Diagnosis"
                        fill
                        className="object-cover object-center opacity-45"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/80" />
                      <div className="relative z-10 flex flex-col items-center p-4 text-center">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-cyan-400/40 flex items-center justify-center mb-2 text-cyan-300">
                          <Cpu className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-display text-cyan-300 font-bold tracking-wider">
                          SMART TV OS BOOTLOOP / WI-FI MODULE OFFLINE
                        </span>
                        <span className="text-[11px] text-slate-300 mt-1 max-w-sm font-sans">
                          NAND Flash firmware partition check failed or 3.3V Wi-Fi module power rail absent
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Scanlines & Header HUD */}
                <div className="absolute inset-0 tv-scanlines pointer-events-none opacity-25" />

                <div className="relative z-10 flex items-center justify-between text-[11px] font-display font-semibold tracking-wider text-slate-400 border-b border-slate-800 pb-2">
                  <span className="text-cyan-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    SIMULATOR: {selectedProblem.symptom}
                  </span>
                  <span className="text-slate-400 font-bold tracking-widest text-[10px]">ROYALTECHLABS DIAGNOSTICS</span>
                </div>

                <div className="relative z-10 flex items-center justify-between text-[11px] font-display font-semibold tracking-wider text-slate-400 border-t border-slate-800 pt-2">
                  <span className="text-emerald-400 font-bold">DOORSTEP REPAIRABLE: YES</span>
                  <span className="text-slate-300">98% FIXED AT HOME</span>
                </div>
              </div>

              {/* Technical Analysis Output */}
              <div className="mt-6 space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-cyan-400 mb-1">
                    <Wrench className="w-3.5 h-3.5" />
                    <span>ENGINEERING EVALUATION</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {selectedProblem.description}
                  </p>
                </div>

                {/* Probable Causes */}
                <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-900/40">
                  <span className="text-xs font-display font-bold uppercase tracking-wider text-slate-300 block mb-2">
                    PROBABLE SUBSYSTEM CAUSES:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-sans">
                    {selectedProblem.probableCauses.map((cause, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{cause}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended Action */}
                <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/90 p-3 rounded-xl border border-slate-800 font-sans">
                  <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>
                    <strong className="text-white font-semibold font-display">Recommended Action:</strong>{" "}
                    {selectedProblem.recommendedAction}
                  </span>
                </div>

                {/* Conversion CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch gap-3">
                  <Button
                    variant="call"
                    size="md"
                    source="problem_diagnostic"
                    className="flex-1"
                  >
                    Call Lab Technician
                  </Button>

                  <Button
                    variant="whatsapp"
                    size="md"
                    source="problem_diagnostic"
                    whatsappMessage={selectedProblem.prefilledWhatsApp}
                    className="flex-1"
                  >
                    Send Issue via WhatsApp
                  </Button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
