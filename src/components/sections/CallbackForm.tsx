"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { trackCallbackSubmit } from "@/utils/tracking";
import Button from "@/components/ui/Button";
import CustomSelect from "@/components/ui/CustomSelect";
import ConcentricRipples from "@/components/ui/ConcentricRipples";
import {
  Phone,
  Clock,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send,
  Cpu,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export default function CallbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "Dubai",
    brand: "Samsung",
    problem: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      setStatus("success");
      return;
    }

    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      setStatus("error");
      return;
    }

    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMessage("Please enter a valid UAE phone number (e.g. 050 123 4567).");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: siteConfig.web3formsKey,
          subject: `New TV Repair Callback Request - ${formData.brand} (${formData.area})`,
          from_name: "RoyalTechLabs Callback Console",
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          location_area: formData.area,
          tv_brand: formData.brand,
          issue_description: formData.problem.trim() || "Not specified by user",
          botcheck: formData.honeypot,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        trackCallbackSubmit({
          area: formData.area,
          brand: formData.brand,
        });
        setStatus("success");
      } else {
        setErrorMessage(result.message || "Failed to transmit request. Please call or WhatsApp us directly.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error connecting to dispatch server. Please call or WhatsApp us directly.");
      setStatus("error");
    }
  };

  const areaOptions = [
    { value: "Dubai", label: "Dubai (All Areas)" },
    { value: "Dubai Marina / JLT", label: "Dubai Marina / JLT / JBR" },
    { value: "Downtown / Business Bay", label: "Downtown / Business Bay" },
    { value: "Deira / Bur Dubai", label: "Deira / Bur Dubai" },
    { value: "Sharjah", label: "Sharjah (All Areas)" },
    { value: "Sharjah - Industrial Area 6", label: "Sharjah - Industrial Area 6" },
    { value: "Al Majaz / Al Nahda", label: "Al Majaz / Al Nahda (Sharjah)" },
    { value: "Ajman", label: "Ajman (All Areas)" },
    { value: "Al Nuaimiya / Rashidiya", label: "Al Nuaimiya / Rashidiya (Ajman)" },
  ];

  const brandOptions = [
    { value: "LED TV Repair", label: "LED TV Repair" },
    { value: "OLED TV Repair", label: "OLED TV Repair" },
    { value: "LCD TV Repair", label: "LCD TV Repair" },
    { value: "Smart TV Repair", label: "Smart TV Repair" },
    { value: "Plasma TV Repair", label: "Plasma TV Repair" },
    { value: "TV Motherboard Repair", label: "TV Motherboard Repair" },
    { value: "Samsung", label: "Samsung TV" },
    { value: "LG", label: "LG TV" },
    { value: "Sony", label: "Sony BRAVIA" },
    { value: "TCL / Hisense", label: "TCL / Hisense" },
    { value: "Other", label: "Other / Not Listed" },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Concentric Diagnostic Ripple Rings Effect from Image 3 */}
      <ConcentricRipples position="top-right" opacity={0.75} />
      <ConcentricRipples position="bottom-left" opacity={0.5} />

      {/* Ambient Blue Glow Orbs & Light Tech Grid */}
      <div className="absolute inset-0 tech-grid-pattern opacity-35 pointer-events-none" />
      <div className="absolute top-10 -left-20 w-[450px] h-[450px] bg-gradient-to-br from-blue-500/8 via-cyan-400/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[450px] h-[450px] bg-gradient-to-tl from-[#0052EA]/8 via-blue-400/4 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left: Contact Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold mb-3">
                <Cpu className="w-3.5 h-3.5 text-blue-600" />
                <span>DIRECT LAB DISPATCH</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Need Immediate Help?
              </h2>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                If your television problem is urgent or you want a technician today, calling or WhatsApp messaging is fastest. Or submit your details and our technical supervisor will call you back.
              </p>

              <div className="mt-8 space-y-3.5">
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0052EA] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-semibold text-slate-500">24/7 PHONE SUPPORT</div>
                    <a
                      href={siteConfig.phoneHref}
                      className="text-base font-bold text-slate-900 hover:text-[#0052EA] transition-colors"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-semibold text-slate-500">DIRECT WHATSAPP LAB</div>
                    <a
                      href={siteConfig.getWhatsAppLink("Hi RoyalTechLabs, I need a callback about my TV.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0052EA] flex items-center justify-center shrink-0 border border-blue-200/60">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-semibold text-slate-500">WORKSHOP / LAB LOCATION</div>
                    <div className="text-sm font-bold text-slate-900 leading-snug">
                      {siteConfig.address}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-semibold text-slate-500">HOURS OF OPERATION</div>
                    <div className="text-sm font-bold text-slate-900">
                      24 Hours / 7 Days (Including All UAE Holidays)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-slate-500" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-semibold text-slate-500">COVERAGE REGION</div>
                    <div className="text-sm font-bold text-slate-900">
                      Dubai • Sharjah • Ajman Doorstep Service
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Request an Engineer Callback
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-500">
              Submit your inquiry and a RoyalTechLabs supervisor will call you within 15 minutes.
            </p>

            {status === "success" ? (
              <div className="mt-6 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-emerald-950">
                  Callback Request Received!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800 mt-2 max-w-md mx-auto">
                  Thank you, <strong className="font-semibold">{formData.name}</strong>. An engineer will call your number ({formData.phone}) shortly.
                </p>

                <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Button
                    variant="call"
                    size="sm"
                    source="callback_form"
                  >
                    Or Call Us Directly
                  </Button>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        name: "",
                        phone: "",
                        area: "Dubai",
                        brand: "Samsung",
                        problem: "",
                        honeypot: "",
                      });
                    }}
                    className="text-xs text-slate-500 underline hover:text-slate-700"
                  >
                    Submit another request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                
                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website_url">Do not fill this</label>
                  <input
                    type="text"
                    id="website_url"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {status === "error" && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="user-name" className="block text-xs font-bold text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      id="user-name"
                      type="text"
                      required
                      placeholder="e.g. Mohammed Khan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0052EA]"
                    />
                  </div>

                  <div>
                    <label htmlFor="user-phone" className="block text-xs font-bold text-slate-700 mb-1">
                      UAE Phone Number *
                    </label>
                    <input
                      id="user-phone"
                      type="tel"
                      required
                      placeholder="050 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0052EA]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <CustomSelect
                    id="user-area"
                    label="YOUR LOCATION / EMIRATE *"
                    options={areaOptions}
                    value={formData.area}
                    onChange={(val) => setFormData({ ...formData, area: val })}
                  />

                  <CustomSelect
                    id="user-brand"
                    label="TV TYPE / BRAND"
                    options={brandOptions}
                    value={formData.brand}
                    onChange={(val) => setFormData({ ...formData, brand: val })}
                  />
                </div>

                <div>
                  <label htmlFor="user-problem" className="block text-xs font-bold text-slate-700 mb-1">
                    Observed Problem / Symptoms (Optional)
                  </label>
                  <textarea
                    id="user-problem"
                    rows={3}
                    placeholder="e.g., Screen went dark during use but sound works; or red standby light blinks 6 times."
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0052EA]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#0052EA] hover:bg-[#0042BE] text-white font-bold text-base shadow-lg shadow-blue-500/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Transmitting Details...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Request Free Callback</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-400 text-center mt-2">
                  🔒 Your contact information is kept strictly confidential and used exclusively for your repair coordination.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
