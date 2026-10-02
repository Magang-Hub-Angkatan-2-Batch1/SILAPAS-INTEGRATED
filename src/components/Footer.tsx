import React from 'react';
import { OfficialLogo } from './OfficialLogo';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  ShieldCheck,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Video,
  ExternalLink,
  Heart
} from 'lucide-react';
import { OFFICE_SCHEDULE } from '../data/servicesData';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#081528] text-slate-300 border-t-2 border-amber-500/40">
      {/* Top Footer Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Instansi & Profil */}
          <div className="space-y-4 lg:col-span-1">
            <div className="bg-slate-900/80 p-3 rounded-2xl border border-amber-400/20 inline-block">
              <OfficialLogo size="sm" showText={false} />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white tracking-wide">
                SILAPAS-INTEGRATED
              </h3>
              <p className="text-xs text-amber-400 font-semibold mt-0.5">
                Lapas Perempuan Kelas III Pangkal Pinang
              </p>
              <p className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">
                Kementerian Imigrasi dan Pemasyarakatan RI
              </p>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sistem portal digital informasi layanan kehumasan, pengelolaan Barang Milik Negara (BMN), dan Jurnal Kinerja Harian SDM aparatur yang akuntabel, transparan, dan terpadu.
            </p>
            <div className="pt-2 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Satker WBK Menuju WBBM
              </span>
            </div>
          </div>

          {/* Col 2: Alamat Kantor & Lokasi */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-slate-700/60 pb-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              Alamat Kantor Lapas
            </h4>
            <div className="text-xs space-y-2 text-slate-300 leading-relaxed">
              <p className="font-semibold text-white">
                Lembaga Pemasyarakatan Perempuan Kelas III Pangkal Pinang
              </p>
              <p>
                Jl. Sanggul Dewa No.1, Batin Tikal, Kota Pangkal Pinang, Kepulauan Bangka Belitung, Indonesia
              </p>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Lapas+Perempuan+Kelas+III+Pangkal+Pinang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 hover:underline font-medium"
                >
                  <span>Buka Peta Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Jam Layanan Publik (Mandated strictly by user prompt) */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-slate-700/60 pb-2">
              <Clock className="w-4 h-4 text-amber-400" />
              Jam Layanan Publik
            </h4>
            <div className="space-y-2 text-xs">
              <div className="p-2 rounded-lg bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="font-bold text-white block">Senin - Kamis</span>
                  <span className="text-[11px] text-slate-400">Layanan Informasi & BMN</span>
                </div>
                <span className="text-amber-400 font-mono font-bold bg-amber-400/10 px-2 py-1 rounded">
                  08:00 - 15:00 WIB
                </span>
              </div>

              <div className="p-2 rounded-lg bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="font-bold text-white block">Jum'at</span>
                  <span className="text-[11px] text-slate-400">Layanan Publik & Koordinasi</span>
                </div>
                <span className="text-amber-400 font-mono font-bold bg-amber-400/10 px-2 py-1 rounded">
                  08:00 - 14:00 WIB
                </span>
              </div>

              <div className="p-2 rounded-lg bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="font-bold text-white block">Sabtu</span>
                  <span className="text-[11px] text-slate-400">Layanan Khusus / Terjadwal</span>
                </div>
                <span className="text-amber-400 font-mono font-bold bg-amber-400/10 px-2 py-1 rounded">
                  08:00 - 12:00 WIB
                </span>
              </div>

              <p className="text-[11px] text-slate-400 italic pt-1">
                *Hari Minggu & Libur Nasional: Pelayanan kantor tatap muka libur, layanan aduan online tetap dimonitor.
              </p>
            </div>
          </div>

          {/* Col 4: Tautan Media Sosial Resmi */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-slate-700/60 pb-2">
              <Instagram className="w-4 h-4 text-amber-400" />
              Media Sosial Resmi
            </h4>
            <p className="text-xs text-slate-400">
              Ikuti publikasi, berita pembinaan, dan siaran pers resmi melalui saluran media sosial kami:
            </p>
            <div className="grid grid-cols-1 gap-1.5 text-xs">
              <a
                href="https://www.instagram.com/lapasperempuanpangkalpinang?stkn=eGFlZno1ZWoxcTg2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-rose-400" />
                <span className="truncate">Instagram Resmi (@lapasperempuanpangkalpinang)</span>
              </a>

              <a
                href="https://www.facebook.com/share/1Ltj6AkW4Q/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4 text-blue-400" />
                <span className="truncate">Facebook Resmi</span>
              </a>

              <a
                href="https://youtube.com/@lapasperempuanpangkalpinan1027?si=9cR5dRN3_dDZVK0K"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <Youtube className="w-4 h-4 text-red-400" />
                <span className="truncate">YouTube Resmi</span>
              </a>

              <a
                href="https://x.com/lpp_pkpinang1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4 text-emerald-400" />
                <span className="truncate">X / Twitter Resmi (@lpp_pkpinang1)</span>
              </a>

              <a
                href="https://www.tiktok.com/@lapasperempuanpkp?_r=1&_t=ZS-99pAuUMCHdU"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <Video className="w-4 h-4 text-purple-400" />
                <span className="truncate">TikTok Resmi (@lapasperempuanpkp)</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#050e1b] py-4 px-4 sm:px-6 text-center text-xs text-slate-400 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            &copy; {new Date().getFullYear()}{' '}
            <strong className="text-white">
              Humas Lapas Perempuan Kelas III Pangkal Pinang
            </strong>
            . Hak Cipta Dilindungi.
          </div>
          <div className="text-[11px] text-slate-400 flex items-center gap-2">
            <span>SILAPAS-INTEGRATED v2.5</span>
            <span>&bull;</span>
            <span className="text-amber-400 font-medium">Layanan BMN &bull; SDM &bull; Kehumasan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
