import { Clock, Home, Zap, ShieldCheck, Award } from "lucide-react";

export default function TrustStrip() {
  const trustPoints = [
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Anytime Emergency Calls",
    },
    {
      icon: Home,
      title: "Doorstep Service",
      description: "Fixed in Your Living Room",
    },
    {
      icon: Zap,
      title: "Fast Response",
      description: "Rapid UAE Deployment",
    },
    {
      icon: ShieldCheck,
      title: "Quality Parts",
      description: "Tested Brand Components",
    },
    {
      icon: Award,
      title: "Certified Techs",
      description: "12+ Years Experience",
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-6 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight">
                    {point.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
