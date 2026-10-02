import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const OfficialLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const iconDimensions = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
  }[size];

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* Official Crest Shield Emblem */}
      <div className={`relative ${iconDimensions} flex-shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#0c2340] via-[#1a365d] to-[#0f284e] p-1.5 shadow-md border border-amber-400/40`}>
        {/* Decorative inner gold ring */}
        <div className="absolute inset-0.5 rounded-xl border border-amber-300/30 pointer-events-none" />
        
        {/* Vector SVG of Ministry Shield & Scales of Justice & Star */}
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Gold Laurel Wreath Left & Right */}
          <path d="M 22 75 C 12 55 16 35 28 20" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="1 5" />
          <path d="M 78 75 C 88 55 84 35 72 20" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="1 5" />

          {/* Central Shield */}
          <path
            d="M 50 14 L 74 24 C 74 52 50 78 50 86 C 50 78 26 52 26 24 Z"
            fill="#0f2b48"
            stroke="#f59e0b"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Golden Star at top */}
          <polygon
            points="50,22 52.5,29 59.5,29 54,33 56,40 50,36 44,40 46,33 40.5,29 47.5,29"
            fill="#fbbf24"
          />

          {/* Scales of Justice (Timbangan Pengayoman) */}
          <line x1="50" y1="36" x2="50" y2="70" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
          <line x1="33" y1="46" x2="67" y2="46" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="50" cy="46" r="2.5" fill="#fef3c7" />

          {/* Left Pan */}
          <line x1="33" y1="46" x2="33" y2="56" stroke="#fbbf24" strokeWidth="1.5" />
          <path d="M 27 56 Q 33 63 39 56 Z" fill="#fbbf24" />

          {/* Right Pan */}
          <line x1="67" y1="46" x2="67" y2="56" stroke="#fbbf24" strokeWidth="1.5" />
          <path d="M 61 56 Q 67 63 73 56 Z" fill="#fbbf24" />

          {/* Base */}
          <ellipse cx="50" cy="72" rx="10" ry="2.5" fill="#fbbf24" />
        </svg>

        {/* Small gold corner accents */}
        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-amber-400 rounded-full" />
      </div>

      {showText && (
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-amber-600 dark:text-amber-400">
            KEMENTERIAN IMIGRASI DAN PEMASYARAKATAN
          </span>
          <span className="text-xs md:text-sm font-extrabold text-[#0c2340] tracking-tight">
            REPUBLIK INDONESIA
          </span>
          <span className="text-[11px] md:text-xs text-slate-600 font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
            Lapas Perempuan Kelas III Pangkal Pinang
          </span>
        </div>
      )}
    </div>
  );
};
