"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import {
  Tv,
  Zap,
  Cpu,
  SunMedium,
  Wifi,
  Sparkles,
  Activity,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SubsystemData {
  id: string;
  label: string;
  fullName: string;
  tag: string;
  pin: { top: string; left: string };
  icon: typeof Tv;
  accentColor: string;
  borderColor: string;
  glowColor: string;
  voltage: string;
  clockRate: string;
  temperature: string;
  livingRoomSymptom: string;
  labDiagnosis: string;
  typicalSavings: string;
}

const subsystems: SubsystemData[] = [
  {
    id: "display",
    label: "T-CON & Display Timing",
    fullName: "Timing Controller (T-CON) & COF Gate Drivers",
    tag: "PROTOCOL: TCON-GATE-01",
    pin: { top: "45%", left: "48%" },
    icon: Tv,
    accentColor: "text-cyan-400",
    borderColor: "border-cyan-400/50",
    glowColor: "shadow-cyan-500/30",
    voltage: "VGH: 28.5V DC • VGL: -6.2V DC",
    clockRate: "120Hz / 144Hz LVDS Sync",
    temperature: "38.2°C Nominal",
    livingRoomSymptom: "Vertical colored bars, ghosting, solarized colors, or white screen with audio playing.",
    labDiagnosis: "Direct micro-bonding bypass of degraded COF ribbons and voltage rail level-shifter IC repair.",
    typicalSavings: "Saves up to 75% vs. throwing away the TV panel",
  },
  {
    id: "power",
    label: "Power Supply (SMPS)",
    fullName: "Switch-Mode Power Supply & PFC Inverter",
    tag: "PROTOCOL: SMPS-HIGHVOLT-02",
    pin: { top: "28%", left: "22%" },
    icon: Zap,
    accentColor: "text-amber-400",
    borderColor: "border-amber-400/50",
    glowColor: "shadow-amber-500/30",
    voltage: "230V AC IN → 12.8V / 24.5V DC Rail",
    clockRate: "65kHz Switching Frequency",
    temperature: "44.6°C Nominal",
    livingRoomSymptom: "TV completely dead, clicking relay sound 3 times, or tripping your home DB breaker.",
    labDiagnosis: "Replacement of heat-fatigued 450V low-ESR filter capacitors and blown primary switching MOSFETs.",
    typicalSavings: "Fixed in 45 mins at your doorstep without new board cost",
  },
  {
    id: "mainboard",
    label: "Mainboard & SoC",
    fullName: "Digital Signal Processor & eMMC Memory Core",
    tag: "PROTOCOL: MAIN-SOC-03",
    pin: { top: "35%", left: "75%" },
    icon: Cpu,
    accentColor: "text-emerald-400",
    borderColor: "border-emerald-400/50",
    glowColor: "shadow-emerald-500/30",
    voltage: "Logic Core: 1.15V DC • I/O: 3.3V DC",
    clockRate: "Quad-Core 1.8GHz ARM Cortex",
    temperature: "49.1°C Under Load",
    livingRoomSymptom: "TV frozen on Samsung / LG / Sony logo, boot-looping, or unresponsive to remote control.",
    labDiagnosis: "EEPROM firmware re-flash via ISP direct programmer and BGA thermal reflow on video SoC.",
    typicalSavings: "Preserves original TV motherboard and factory calibrations",
  },
  {
    id: "backlight",
    label: "LED Backlight Array",
    fullName: "Constant-Current Direct-Lit LED Arrays",
    tag: "PROTOCOL: LED-ARRAY-04",
    pin: { top: "72%", left: "35%" },
    icon: SunMedium,
    accentColor: "text-blue-400",
    borderColor: "border-blue-400/50",
    glowColor: "shadow-blue-500/30",
    voltage: "Array V-Drop: 78.4V DC Constant-Current",
    clockRate: "High-Speed PWM Dimming",
    temperature: "41.0°C Nominal",
    livingRoomSymptom: "Pitch-black screen while sound is active; faint flashlight picture; purple/blue haze.",
    labDiagnosis: "Full swap with 100% genuine aluminum-substrate LED strips with upgraded thermal dissipation.",
    typicalSavings: "1-2 hour doorstep fix with comprehensive written warranty",
  },
  {
    id: "connectivity",
    label: "Wi-Fi 6 & HDMI Ports",
    fullName: "Wireless Transceiver & HDMI 2.1 eARC Subsystem",
    tag: "PROTOCOL: RF-HDMI-05",
    pin: { top: "68%", left: "82%" },
    icon: Wifi,
    accentColor: "text-purple-400",
    borderColor: "border-purple-400/50",
    glowColor: "shadow-purple-500/30",
    voltage: "RF Rail: 3.3V DC • HDMI 5V Sense",
    clockRate: "2.4GHz / 5GHz Dual-Band + BT 5.2",
    temperature: "32.5°C Ambient",
    livingRoomSymptom: "Wi-Fi turned off and won't turn on, Netflix/YouTube drops, HDMI port no signal from PS5/Apple TV.",
    labDiagnosis: "Direct replacement of onboard Wi-Fi module ribbon and HDMI ESD protection diode array.",
    typicalSavings: "Immediate doorstep fix restoring all 4K streaming",
  },
];

export default function LabDiagnosticMoment() {
  const [activeId, setActiveId] = useState<string>("display");
  const sectionRef = useRef<HTMLDivElement>(null);

  const currentSubsystem = subsystems.find((s) => s.id === activeId) || subsystems[0];
  const ActiveIcon = currentSubsystem.icon;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".diag-screen-frame", { opacity: 0, scale: 0.96, duration: 0.8 })
        .from(".diag-scan-beam", { top: "0%", duration: 2.2, repeat: -1, ease: "linear" }, "-=0.4")
        .from(".diag-readout-box", { opacity: 0, y: 15, duration: 0.6 }, "-=0.3");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#040812] text-white py-16 sm:py-24 border-y border-blue-950"
    >
      {/* Background Tech Grid & Cyan Radiant Ambience */}
      <div className="absolute inset-0 tech-grid-dark opacity-35 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-radial from-blue-600/15 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold mb-3.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>REALISTIC HARDWARE TELEMETRY CONSOLE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Inside Your Television. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300">
              Diagnosed With Component-Level Precision.
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            No blind guessing. No unnecessary whole-panel swapping. Click any subsystem below to see how our master electronics technicians test and fix the exact circuit board inside your TV.
          </p>
        </div>

        {/* Subsystem Interactive Selector Buttons */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2 mb-6">
          {subsystems.map((sub, idx) => {
            const isSelected = sub.id === activeId;
            const SubIcon = sub.icon;
            const isLastOdd = idx === subsystems.length - 1 && subsystems.length % 2 !== 0;
            return (
              <button
                key={sub.id}
                onClick={() => setActiveId(sub.id)}
                className={`inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-mono font-bold transition-all ${
                  isLastOdd ? "col-span-2 sm:col-auto" : ""
                } ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 border border-cyan-400 scale-102"
                    : "bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/80"
                }`}
              >
                <SubIcon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? "text-cyan-200" : "text-slate-400"}`} />
                <span className="truncate">{sub.label}</span>
              </button>
            );
          })}
        </div>

        {/* Centerpiece: Real-World TV Chassis Workbench Inspection */}
        <div className="diag-screen-frame relative rounded-3xl bg-slate-950 border border-cyan-500/30 shadow-[0_0_60px_rgba(0,82,234,0.15)] overflow-hidden">
          
          {/* Top Console Telemetry Bar */}
          <div className="px-4 py-2.5 bg-[#070E1E] border-b border-blue-900/40 flex flex-wrap items-center justify-between text-[11px] font-mono gap-2">
            <div className="flex items-center gap-2 text-cyan-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="font-bold">ROYALTECHLABS TELEMETRY // BENCH INSPECTION ACTIVE</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <span>PROBE: {currentSubsystem.voltage}</span>
              <span className="text-blue-400 hidden sm:inline">•</span>
              <span className="hidden sm:inline text-emerald-400 font-semibold">{currentSubsystem.temperature}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Column: Authentic TV Hardware Workbench Photo with Live Overlays */}
            <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto min-h-[300px] sm:min-h-[360px] overflow-hidden bg-slate-950">
              <Image
                src="/images/service-oled-repair.jpg"
                alt="Certified TV technician diagnosing exposed television chassis on electronics workbench"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />

              {/* Realistic TV Scanline Overlay */}
              <div className="absolute inset-0 tv-scanlines opacity-25 pointer-events-none" />

              {/* Moving Diagnostic Laser Beam */}
              <div className="diag-scan-beam absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#00E5FF] pointer-events-none" />

              {/* Physical Subsystem Pins overlaid directly on the workbench hardware */}
              {subsystems.map((sub) => {
                const isSelected = sub.id === activeId;
                const isRightSide = parseInt(sub.pin.left) >= 48;
                return (
                  <button
                    key={sub.id}
                    onClick={() => setActiveId(sub.id)}
                    style={{ top: sub.pin.top, left: sub.pin.left }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group focus:outline-none`}
                    aria-label={`Inspect ${sub.fullName}`}
                  >
                    <span className="relative flex items-center justify-center">
                      {/* Pulse Wave */}
                      <span
                        className={`animate-ping absolute inline-flex h-8 w-8 rounded-full opacity-75 ${
                          isSelected ? "bg-cyan-400" : "bg-blue-500 opacity-40"
                        }`}
                      ></span>

                      {/* Center Pin Disc */}
                      <span
                        className={`relative flex items-center justify-center w-6 h-6 rounded-full border-2 text-[10px] font-bold font-mono transition-transform ${
                          isSelected
                            ? "bg-cyan-400 text-slate-950 border-white scale-125 shadow-lg shadow-cyan-400/50"
                            : "bg-slate-900/90 text-cyan-300 border-cyan-400/60 hover:scale-115"
                        }`}
                      >
                        +
                      </span>

                      {/* Tooltip Label (Dynamically placed left or right so it NEVER overflows the container) */}
                      <span
                        className={`absolute top-1/2 -translate-y-1/2 whitespace-nowrap px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-wider uppercase backdrop-blur-md transition-opacity pointer-events-none ${
                          isRightSide ? "right-8 text-right" : "left-8 text-left"
                        } ${
                          isSelected
                            ? "bg-cyan-950/95 text-cyan-300 border border-cyan-400/60 opacity-100 shadow-lg shadow-cyan-950/80"
                            : "bg-slate-950/85 text-slate-300 border border-slate-700 opacity-0 group-hover:opacity-100"
                        }`}
                      >
                        {sub.label}
                      </span>
                    </span>
                  </button>
                );
              })}

              {/* Bottom HUD Overlay */}
              <div className="absolute bottom-3 left-3 bg-slate-950/85 backdrop-blur-md border border-cyan-500/40 px-2.5 py-1 rounded-md text-[10px] font-mono text-cyan-300 flex items-center gap-1.5 z-10">
                <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
                <span>ACTIVE HARDWARE PIN: {currentSubsystem.tag}</span>
              </div>
            </div>

            {/* Right Column: Live Diagnostic Telemetry Readout Console */}
            <div className="diag-readout-box lg:col-span-5 p-5 sm:p-6 lg:p-7 bg-[#070E1F]/95 backdrop-blur-xl flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-blue-900/40">
              <div>
                {/* Header Subsystem Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono font-bold text-cyan-400 tracking-wider">
                    {currentSubsystem.tag}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>DIAGNOSABLE AT HOME</span>
                  </span>
                </div>

                {/* Subsystem Name */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-900/40 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-sm shrink-0">
                    <ActiveIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                      {currentSubsystem.fullName}
                    </h3>
                    <p className="text-xs font-mono text-cyan-300/80 mt-0.5">
                      Targeted Component-Level Testing
                    </p>
                  </div>
                </div>

                {/* Live Operating Telemetry Matrix */}
                <div className="mt-4 p-3 rounded-xl bg-slate-900/80 border border-blue-900/60 grid grid-cols-2 gap-2.5 text-xs font-mono">
                  <div>
                    <span className="text-[10px] text-slate-400 block">VOLTAGE RAIL</span>
                    <span className="text-white font-bold text-[11px] sm:text-xs">{currentSubsystem.voltage}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">SIGNAL FREQUENCY</span>
                    <span className="text-white font-bold text-[11px] sm:text-xs">{currentSubsystem.clockRate}</span>
                  </div>
                </div>

                {/* Living Room Symptom Analysis */}
                <div className="mt-4 space-y-2.5">
                  <div className="p-3 rounded-xl bg-red-950/30 border border-red-500/30 text-xs">
                    <div className="flex items-center gap-1.5 text-red-300 font-bold font-mono text-[11px] mb-1">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                      <span>COMMON LIVING ROOM SYMPTOM:</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-[11.5px]">
                      {currentSubsystem.livingRoomSymptom}
                    </p>
                  </div>

                  {/* Laboratory Component-Level Fix */}
                  <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs">
                    <div className="flex items-center gap-1.5 text-emerald-300 font-bold font-mono text-[11px] mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>ROYALTECHLABS REPAIR RESOLUTION:</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-[11.5px]">
                      {currentSubsystem.labDiagnosis}
                    </p>
                    <div className="mt-2 text-[10.5px] font-mono text-cyan-300 font-semibold">
                      ✓ {currentSubsystem.typicalSavings}
                    </div>
                  </div>
                </div>
              </div>

              {/* Subsystem WhatsApp Action */}
              <div className="mt-5 pt-4 border-t border-blue-900/50 flex flex-col sm:flex-row items-center gap-2.5">
                <Button
                  variant="whatsapp"
                  size="md"
                  source="diagnostic_console"
                  whatsappMessage={`Hi RoyalTechLabs, my TV has an issue related to: ${currentSubsystem.fullName} (${currentSubsystem.livingRoomSymptom}). Can a technician check it today?`}
                  className="w-full text-xs font-bold py-2.5"
                >
                  WhatsApp This Symptom
                </Button>

                <Button
                  variant="call"
                  size="md"
                  source="diagnostic_console"
                  className="w-full sm:w-auto text-xs font-bold py-2.5 px-4"
                >
                  Call Now
                </Button>
              </div>

            </div>

          </div>

        </div>

        {/* Resolution Quality Banner */}
        <div className="mt-10 text-center max-w-2xl mx-auto">
          <p className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
            &ldquo;Accurate diagnosis first. Fast component-level repair second.&rdquo;
          </p>
          <p className="mt-1 text-xs sm:text-sm text-slate-300">
            Never pay for an entire screen or motherboard when a specific micro-component can be restored.
          </p>
        </div>

      </div>
    </section>
  );
}
