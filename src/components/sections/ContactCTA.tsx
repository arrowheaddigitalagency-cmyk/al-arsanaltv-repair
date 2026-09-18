import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import { Headphones, Camera, Clock, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export default function ContactCTA() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold mb-3">
            <Headphones className="w-3.5 h-3.5 text-blue-600" />
            <span>DIRECT TECHNICIAN ACCESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Your TV Fault Could Be One Call Away <br className="hidden sm:inline" />
            <span className="text-[#0052EA]">From Being Solved.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Connect immediately with a RoyalTechLabs supervisor. Select your preferred channel below.
          </p>
        </div>

        {/* Split Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Card 1: Direct Phone Call */}
          <div className="relative rounded-3xl bg-white border-2 border-blue-200 p-7 sm:p-9 flex flex-col justify-between shadow-xl shadow-blue-500/5 hover:border-[#0052EA] transition-all">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#0052EA] text-white flex items-center justify-center shadow-lg shadow-blue-500/30 mb-6">
                <Headphones className="w-7 h-7" />
              </div>

              <span className="text-[11px] font-mono font-bold tracking-widest text-[#0052EA] uppercase">
                CHANNEL 01 // INSTANT VOICE
              </span>

              <h3 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
                Speak Directly with a Lab Technician
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Describe your television fault directly over the phone. We will provide an upfront diagnostic assessment, an accurate estimate, and dispatch a mobile unit to your home.
              </p>

              <div className="mt-6 space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#0052EA] shrink-0" />
                  <span>Available 24 Hours, 7 Days a Week</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0052EA] shrink-0" />
                  <span>Free Initial Telephonic Consultation</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <Button
                variant="call"
                size="lg"
                fullWidth
                source="dual_feature_card"
              >
                Call {siteConfig.phoneDisplay}
              </Button>
            </div>
          </div>

          {/* Card 2: WhatsApp Media Diagnostic */}
          <div className="relative rounded-3xl bg-white border-2 border-emerald-200 p-7 sm:p-9 flex flex-col justify-between shadow-xl shadow-emerald-500/5 hover:border-[#25D366] transition-all">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 mb-6">
                <Camera className="w-7 h-7" />
              </div>

              <span className="text-[11px] font-mono font-bold tracking-widest text-emerald-600 uppercase">
                CHANNEL 02 // MEDIA INTAKE
              </span>

              <h3 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
                Send TV Model &amp; Issue Photo / Video
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Snap a 5-second video or picture of your TV screen showing the fault and take a photo of the back sticker model number. Instant preliminary diagnosis via WhatsApp.
              </p>

              <div className="mt-6 space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <WhatsAppIcon className="w-4 h-4 text-emerald-600 shrink-0 fill-current" />
                  <span>Instant Photo &amp; Video Inspection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Average Reply Time: Under 3 Minutes</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <Button
                variant="whatsapp"
                size="lg"
                fullWidth
                source="dual_feature_card"
                whatsappMessage="Hi RoyalTechLabs, I am sending a photo/video of my TV problem. Please advise on repair."
              >
                Chat on WhatsApp Now
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
