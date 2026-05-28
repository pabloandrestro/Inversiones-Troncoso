import React from "react";

interface IdentityLogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export default function IdentityLogo({ className = "h-16", showSubtitle = true }: IdentityLogoProps) {
  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      {/* Brand Icon (The Double T structural tower forming vertical skyscrapers & dynamic alignment) */}
      <svg
        viewBox="0 0 350 200"
        className="w-full h-auto max-w-[150px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left 'T' - Deep Charcoal/Graphite Column Structure */}
        <path
          d="M174.5 25H138V42.5H148V130V150H158V85H163V150H174.5V25Z"
          fill="#404040"
          className="dark:fill-slate-300"
        />
        <path
          d="M138 25L138 42.5H102V25H138Z"
          fill="#404040"
          className="dark:fill-slate-300"
        />
        {/* Supporting Charcoal Blocks (Skyscraper background) */}
        <rect x="110" y="110" width="10" height="40" rx="1" fill="#262626" className="dark:fill-slate-400" />
        <rect x="123" y="100" width="10" height="50" rx="1" fill="#262626" className="dark:fill-slate-400 animate-pulse" />

        {/* Right 'T' - Golden Luxury Structure with gradient shine */}
        <defs>
          <linearGradient id="gold-luxury" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#baa484" />
            <stop offset="50%" stopColor="#a68d6a" />
            <stop offset="100%" stopColor="#7a6241" />
          </linearGradient>
          <linearGradient id="gold-soft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d1bda2" />
            <stop offset="100%" stopColor="#a68d6a" />
          </linearGradient>
        </defs>

        <path
          d="M176.5 25H213V42.5H203V85H191.5V60H188.5V150H176.5V25Z"
          fill="url(#gold-luxury)"
        />
        <path
          d="M213 25L213 42.5H249V25H213Z"
          fill="url(#gold-luxury)"
        />
        {/* Supporting Golden Blocks (Skyscraper background) */}
        <rect x="230" y="110" width="10" height="40" rx="1" fill="url(#gold-soft)" />
        <rect x="217" y="100" width="10" height="50" rx="1" fill="url(#gold-soft)" />

        {/* Curved Horizon Underline */}
        <path
          d="M70 162C140 152 210 152 280 162"
          stroke="#a68d6a"
          strokeWidth="3"
          strokeLinecap="round"
          className="dark:stroke-amber-500"
        />
      </svg>

      {/* Main Corporate Typography */}
      <div className="text-center mt-2">
        <h2 className="text-[11px] leading-tight font-light font-sans tracking-[0.4em] text-slate-500 uppercase">
          Inversiones
        </h2>
        <h1 className="text-2xl font-semibold font-display italic tracking-[0.1em] text-slate-200 mt-1 leading-none uppercase">
          Troncoso
        </h1>
        {showSubtitle && (
          <div className="flex items-center justify-center gap-2 mt-3 text-[8.5px] tracking-[0.22em] text-amber-500 font-medium font-mono uppercase">
            <span>Inversión</span>
            <span className="text-[6px] text-slate-600">•</span>
            <span>Desarrollo</span>
            <span className="text-[6px] text-slate-600">•</span>
            <span>Futuro</span>
          </div>
        )}
      </div>
    </div>
  );
}
