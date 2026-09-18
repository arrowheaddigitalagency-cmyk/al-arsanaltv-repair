import React from "react";

interface ConcentricRipplesProps {
  className?: string;
  position?: "top-right" | "top-left" | "center" | "bottom-right" | "bottom-left";
  opacity?: number;
}

export default function ConcentricRipples({
  className = "",
  position = "top-right",
  opacity = 0.85,
}: ConcentricRipplesProps) {
  const positionClasses = {
    "top-right": "top-0 right-0 translate-x-1/3 -translate-y-1/4",
    "top-left": "top-0 left-0 -translate-x-1/3 -translate-y-1/4",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "bottom-right": "bottom-0 right-0 translate-x-1/3 translate-y-1/4",
    "bottom-left": "bottom-0 left-0 -translate-x-1/3 translate-y-1/4",
  }[position];

  return (
    <div
      aria-hidden="true"
      className={`absolute pointer-events-none overflow-hidden select-none z-0 ${positionClasses} ${className}`}
      style={{ opacity }}
    >
      <div className="relative w-[650px] h-[650px] sm:w-[850px] sm:h-[850px] lg:w-[1000px] lg:h-[1000px]">
        {/* Soft Radial Center Blue Glow */}
        <div className="absolute inset-0 bg-radial from-blue-500/10 via-cyan-400/5 to-transparent rounded-full blur-2xl" />

        {/* Precision Concentric Rings SVG */}
        <svg
          viewBox="0 0 1000 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <circle cx="500" cy="500" r="80" stroke="rgba(0, 82, 234, 0.12)" strokeWidth="1.5" />
          <circle cx="500" cy="500" r="140" stroke="rgba(0, 82, 234, 0.10)" strokeWidth="1.5" />
          <circle cx="500" cy="500" r="210" stroke="rgba(0, 82, 234, 0.08)" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="500" cy="500" r="280" stroke="rgba(0, 82, 234, 0.08)" strokeWidth="1.5" />
          <circle cx="500" cy="500" r="360" stroke="rgba(0, 82, 234, 0.06)" strokeWidth="1.5" />
          <circle cx="500" cy="500" r="440" stroke="rgba(0, 82, 234, 0.05)" strokeWidth="1.5" strokeDasharray="6 6" />
          <circle cx="500" cy="500" r="520" stroke="rgba(0, 82, 234, 0.04)" strokeWidth="1.5" />
          <circle cx="500" cy="500" r="600" stroke="rgba(0, 82, 234, 0.03)" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
}
