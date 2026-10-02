import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServiceCard } from './components/ServiceCard';
import { WorkflowModal } from './components/WorkflowModal';
import { SingleFileModal } from './components/SingleFileModal';
import { Footer } from './components/Footer';
import { SERVICES_DATA } from './data/servicesData';
import { ServiceCategory, ServiceItem } from './types';
import { Building2, Share2, Search, RotateCcw, ShieldCheck, Zap, Sparkles, Code2, Download } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [selectedWorkflowItem, setSelectedWorkflowItem] = useState<ServiceItem | null>(null);
  const [isSingleFileModalOpen, setIsSingleFileModalOpen] = useState(false);

  // Filter items dynamically based on search query and category
  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((item) => {
      // Category filter
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;

      // Search query filter
      if (!searchQuery.trim()) return matchesCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q) ||
        (item.features && item.features.some((f) => f.toLowerCase().includes(q))) ||
        (item.flowSteps &&
          item.flowSteps.some(
            (s) =>
              s.title.toLowerCase().includes(q) ||
              s.description.toLowerCase().includes(q)
          ));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const layananItems = useMemo(() => {
    return filteredServices.filter((s) => s.category === 'layanan');
  }, [filteredServices]);

  const sosmedItems = useMemo(() => {
    return filteredServices.filter((s) => s.category === 'sosmed');
  }, [filteredServices]);

  const handleScrollToCategory = (catId: string) => {
    if (catId === 'layanan') {
      setActiveCategory('layanan');
      const el = document.getElementById('section-layanan');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (catId === 'sosmed') {
      setActiveCategory('sosmed');
      const el = document.getElementById('section-sosmed');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (catId === 'footer') {
      const el = document.getElementById('footer');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 antialiased selection:bg-amber-400 selection:text-slate-900">
      {/* Sticky Header Navigation */}
      <Navbar
        onOpenSingleFileModal={() => setIsSingleFileModalOpen(true)}
        onScrollToCategory={handleScrollToCategory}
      />

      {/* Main Hero Section with Search Bar */}
      <Hero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        resultsCount={filteredServices.length}
        totalCount={SERVICES_DATA.length}
      />

      {/* Feature Highlights Ribbon */}
      <div className="bg-white border-b border-slate-200 py-3 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-bold text-[#0c2340]">SILAPAS Terpadu:</span>
            <span>2 Inovasi Sistem Internal & 5 Kanal Media Sosial Resmi Aktif</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSingleFileModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs text-blue-700 hover:text-blue-900 font-bold hover:underline"
            >
              <Code2 className="w-3.5 h-3.5 text-amber-600" />
              <span>Salin / Unduh Single File (.html)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
        {/* Kategori 1: Layanan & Website Lapas (BMN & SDM) */}
        {(activeCategory === 'all' || activeCategory === 'layanan') && (
          <section id="section-layanan" className="space-y-6 scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-amber-500/40 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0c2340] text-amber-400 flex items-center justify-center shadow-md">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0c2340] tracking-tight">
                    Layanan & Website Lapas
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">
                    Inovasi Sistem Tata Kelola Persediaan BMN & Jurnal Harian SDM Kepegawaian
                  </p>
                </div>
              </div>

              <span className="inline-block self-start sm:self-auto text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                {layananItems.length} Inovasi Siap Diakses
              </span>
            </div>

            {layananItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {layananItems.map((item) => (
                  <ServiceCard
                    key={item.id}
                    item={item}
                    onOpenWorkflow={(selected) => setSelectedWorkflowItem(selected)}
                  />
                ))}
              </div>
            ) : (
              <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
                Tidak ada layanan inovasi yang cocok dengan kata kunci "{searchQuery}".
              </div>
            )}
          </section>
        )}

        {/* Kategori 2: Media Sosial Resmi */}
        {(activeCategory === 'all' || activeCategory === 'sosmed') && (
          <section id="section-sosmed" className="space-y-6 scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-amber-500/40 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0c2340] text-amber-400 flex items-center justify-center shadow-md">
                  <Share2 className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0c2340] tracking-tight">
                    Media Sosial Resmi
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">
                    Kanal Publikasi, Dokumentasi Pembinaan WBP, dan Rilis Berita Kehumasan
                  </p>
                </div>
              </div>

              <span className="inline-block self-start sm:self-auto text-xs font-bold px-3 py-1 rounded-full bg-rose-50 text-rose-800 border border-rose-200">
                {sosmedItems.length} Kanal Media Resmi
              </span>
            </div>

            {sosmedItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sosmedItems.map((item) => (
                  <ServiceCard
                    key={item.id}
                    item={item}
                    onOpenWorkflow={(selected) => setSelectedWorkflowItem(selected)}
                  />
                ))}
              </div>
            ) : (
              <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
                Tidak ada media sosial yang cocok dengan kata kunci "{searchQuery}".
              </div>
            )}
          </section>
        )}

        {/* Empty Search Result State */}
        {filteredServices.length === 0 && (
          <div className="py-16 text-center bg-white rounded-2xl border border-slate-200 shadow-sm p-8 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4 text-slate-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">
              Tidak Ada Hasil Ditemukan
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Kata kunci <span className="font-semibold text-slate-700">"{searchQuery}"</span> tidak ditemukan di kategori ini. Silakan coba kata kunci lain seperti "BMN", "SDM", "Instagram", "Form", dll.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-sm transition"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset Semua Pencarian</span>
            </button>
          </div>
        )}
      </main>

      {/* Interactive Workflow & Simulator Modal */}
      <WorkflowModal
        item={selectedWorkflowItem}
        onClose={() => setSelectedWorkflowItem(null)}
      />

      {/* Standalone Single File Code Modal */}
      <SingleFileModal
        isOpen={isSingleFileModalOpen}
        onClose={() => setIsSingleFileModalOpen(false)}
      />

      {/* Official Footer */}
      <Footer />
    </div>
  );
}
