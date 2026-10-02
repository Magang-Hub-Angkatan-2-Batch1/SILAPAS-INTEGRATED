import React from 'react';
import { Search, X, Sparkles, Building2, Share2, Layers, CheckCircle } from 'lucide-react';
import { ServiceCategory } from '../types';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: ServiceCategory;
  setActiveCategory: (category: ServiceCategory) => void;
  resultsCount: number;
  totalCount: number;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  resultsCount,
  totalCount,
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#0a1b33] via-[#0d274c] to-[#0f3468] text-white pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b border-amber-500/30">
      {/* Background subtle geometric patterns & glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Ministry Badge & Official Sub-header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-amber-400/40 text-amber-300 text-xs font-semibold mb-6 shadow-inner backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
          <span>KEMENTERIAN IMIGRASI DAN PEMASYARAKATAN REPUBLIK INDONESIA</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3 drop-shadow-sm font-['Plus_Jakarta_Sans',sans-serif]">
          SILAPAS<span className="text-amber-400">-INTEGRATED</span>
        </h1>

        {/* Sub-Title */}
        <h2 className="text-base sm:text-xl md:text-2xl font-semibold text-blue-100/90 max-w-3xl mb-4 leading-relaxed">
          (Sistem Informasi Layanan Kehumasan, BMN, dan SDM Lapas)
        </h2>

        {/* Context description */}
        <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-normal">
          Pusat terpadu akses inovasi tata kelola Barang Milik Negara (BMN), Jurnal Harian Aparatur SDM, serta kanal informasi & media sosial resmi Lapas Perempuan Kelas III Pangkal Pinang.
        </p>

        {/* Instant Search Bar Section */}
        <div className="w-full max-w-2xl mx-auto mb-6">
          <div className="relative flex items-center">
            <div className="absolute left-4 pointer-events-none text-slate-400">
              <Search className="w-5 h-5 text-amber-400" />
            </div>
            <input
              id="search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari layanan, sistem BMN, Jurnal SDM, Instagram, TikTok..."
              className="w-full pl-12 pr-12 py-3.5 sm:py-4 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-sm sm:text-base font-medium shadow-xl border-2 border-amber-400/50 focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20 focus:outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                title="Hapus pencarian"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Search Result Feedback */}
          {searchQuery && (
            <div className="mt-2.5 flex items-center justify-between text-xs px-2 text-blue-200">
              <span>
                Menampilkan <strong className="text-amber-300">{resultsCount}</strong> dari {totalCount} tautan/layanan untuk kata kunci <span className="underline italic">"{searchQuery}"</span>
              </span>
              <button
                onClick={() => setSearchQuery('')}
                className="text-amber-300 hover:underline font-semibold"
              >
                Reset
              </button>
            </div>
          )}
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <button
            id="tab-all"
            onClick={() => setActiveCategory('all')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30 ring-2 ring-amber-300'
                : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/15'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Semua Layanan & Media ({totalCount})</span>
          </button>

          <button
            id="tab-layanan"
            onClick={() => setActiveCategory('layanan')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === 'layanan'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30 ring-2 ring-amber-300'
                : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/15'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Layanan & Website Lapas (2 Inovasi)</span>
          </button>

          <button
            id="tab-sosmed"
            onClick={() => setActiveCategory('sosmed')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === 'sosmed'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30 ring-2 ring-amber-300'
                : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/15'
            }`}
          >
            <Share2 className="w-4 h-4" />
            <span>Media Sosial Resmi (5 Kanal)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
