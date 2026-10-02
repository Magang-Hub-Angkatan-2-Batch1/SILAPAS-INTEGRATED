import React, { useState, useEffect } from 'react';
import { OfficialLogo } from './OfficialLogo';
import { Clock, Code, ExternalLink, ShieldCheck, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenSingleFileModal: () => void;
  onScrollToCategory: (cat: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSingleFileModal,
  onScrollToCategory,
}) => {
  const [wibTime, setWibTime] = useState<string>('');
  const [isOpenOffice, setIsOpenOffice] = useState<boolean>(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Calculate WIB (UTC+7)
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const wibDate = new Date(utc + 3600000 * 7);

      const hours = wibDate.getHours();
      const minutes = wibDate.getMinutes();
      const day = wibDate.getDay(); // 0 = Sunday, 1 = Monday, ... 6 = Saturday

      const timeStr = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} WIB`;
      setWibTime(timeStr);

      // Check office hours based on user guidelines:
      // Senin - Kamis: 08:00 - 15:00 WIB
      // Jum'at: 08:00 - 14:00 WIB
      // Sabtu: 08:00 - 12:00 WIB
      // Minggu: Tutup
      let open = false;
      const currentMinutes = hours * 60 + minutes;

      if (day >= 1 && day <= 4) {
        // Monday - Thursday 08:00 - 15:00
        open = currentMinutes >= 8 * 60 && currentMinutes < 15 * 60;
      } else if (day === 5) {
        // Friday 08:00 - 14:00
        open = currentMinutes >= 8 * 60 && currentMinutes < 14 * 60;
      } else if (day === 6) {
        // Saturday 08:00 - 12:00
        open = currentMinutes >= 8 * 60 && currentMinutes < 12 * 60;
      } else {
        open = false;
      }
      setIsOpenOffice(open);
    };

    updateTime();
    const timer = setInterval(updateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      {/* Top micro announcement bar */}
      <div className="bg-[#0b1f3a] text-slate-200 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <ShieldCheck className="w-3 h-3 text-amber-400" />
              Portal Resmi
            </span>
            <span className="hidden sm:inline text-slate-300">
              Hub Informasi Terintegrasi BMN, SDM & Kehumasan
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-300">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{wibTime || '08:00 WIB'}</span>
              <span className={`inline-block w-2 h-2 rounded-full ${isOpenOffice ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}`} />
              <span className={isOpenOffice ? 'text-emerald-400 font-medium' : 'text-rose-400 font-medium'}>
                {isOpenOffice ? 'Layanan Buka' : 'Layanan Tutup'}
              </span>
            </div>
            <div className="hidden md:flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3 text-amber-400" />
              <span>Pangkal Pinang, Kep. Babel</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <OfficialLogo size="md" />

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <nav className="hidden lg:flex items-center gap-1 text-xs font-semibold text-slate-600 mr-2">
            <button
              onClick={() => onScrollToCategory('layanan')}
              className="px-3 py-1.5 rounded-lg hover:bg-slate-100 hover:text-[#0b1f3a] transition-colors"
            >
              Layanan Lapas
            </button>
            <button
              onClick={() => onScrollToCategory('sosmed')}
              className="px-3 py-1.5 rounded-lg hover:bg-slate-100 hover:text-[#0b1f3a] transition-colors"
            >
              Media Sosial
            </button>
            <button
              onClick={() => onScrollToCategory('footer')}
              className="px-3 py-1.5 rounded-lg hover:bg-slate-100 hover:text-[#0b1f3a] transition-colors"
            >
              Jam & Lokasi
            </button>
          </nav>

          {/* Single File Code Button */}
          <button
            id="btn-single-file-modal"
            onClick={onOpenSingleFileModal}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all transform active:scale-95"
            title="Lihat dan Salin Kode HTML Single File (Tailwind CDN) seperti yang diminta dalam prompt"
          >
            <Code className="w-4 h-4 text-slate-950" />
            <span className="hidden xs:inline font-bold">Single-File HTML</span>
            <span className="text-[10px] bg-slate-950 text-amber-300 font-mono px-1.5 py-0.2 rounded font-bold">
              CDN
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
