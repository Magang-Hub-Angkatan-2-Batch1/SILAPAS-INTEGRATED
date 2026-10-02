import React, { useState } from 'react';
import { ServiceItem } from '../types';
import {
  X,
  CheckCircle2,
  AlertCircle,
  FileSpreadsheet,
  FileDown,
  ArrowRight,
  Database,
  SearchCheck,
  Building2,
  User,
  Calendar,
  Send,
  Download,
  Filter,
  Layers,
  Sparkles
} from 'lucide-react';

interface WorkflowModalProps {
  item: ServiceItem | null;
  onClose: () => void;
}

export const WorkflowModal: React.FC<WorkflowModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  // Simulator state for BMN
  const [bmnItemName, setBmnItemName] = useState('Kertas HVS A4 80gr');
  const [bmnQty, setBmnQty] = useState('5 Rim');
  const [bmnSection, setBmnSection] = useState('Seksi Tata Usaha');
  const [bmnSimulationStatus, setBmnSimulationStatus] = useState<
    'idle' | 'submitted' | 'approved' | 'completed'
  >('idle');

  // Simulator state for SDM Jurnal Harian
  const [sdmName, setSdmName] = useState('Siti Rahmawati, S.Tr.Pas');
  const [sdmPosition, setSdmPosition] = useState('Pengelola Kepegawaian & Tata Usaha');
  const [sdmNip, setSdmNip] = useState('199408122019012001');
  const [sdmDate, setSdmDate] = useState('2025-02-18');
  const [sdmCategory, setSdmCategory] = useState('Dinas Reguler');
  const [sdmDetail, setSdmDetail] = useState('Melakukan rekonsiliasi data BMN triwulan dan updating berkas kepegawaian portal SILAPAS.');
  const [sdmSimulatedRecords, setSdmSimulatedRecords] = useState<Array<{
    nama: string;
    jabatan: string;
    nip: string;
    tanggal: string;
    keterangan: string;
    uraian: string;
  }>>([
    {
      nama: 'Siti Rahmawati, S.Tr.Pas',
      jabatan: 'Pengelola Kepegawaian & Tata Usaha',
      nip: '199408122019012001',
      tanggal: '2025-02-18',
      keterangan: 'Dinas Reguler',
      uraian: 'Penyusunan laporan administrasi berkala dan input jurnal harian terintegrasi.'
    },
    {
      nama: 'Ahmad Fauzi, S.H.',
      jabatan: 'Petugas Pengamanan & Kamtib',
      nip: '199105202017011003',
      tanggal: '2025-02-18',
      keterangan: 'Piket Jaga',
      uraian: 'Pemeriksaan keliling blok hunian dan pengawasan kegiatan kerja warga binaan.'
    }
  ]);
  const [sdmActiveTab, setSdmActiveTab] = useState<'form' | 'output1' | 'sheetPegawai'>('form');

  const handleBmnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBmnSimulationStatus('submitted');
    setTimeout(() => {
      setBmnSimulationStatus('approved');
      setTimeout(() => {
        setBmnSimulationStatus('completed');
      }, 1200);
    }, 1200);
  };

  const handleSdmSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sdmName || !sdmNip) return;
    const newRecord = {
      nama: sdmName,
      jabatan: sdmPosition,
      nip: sdmNip,
      tanggal: sdmDate,
      keterangan: sdmCategory,
      uraian: sdmDetail
    };
    setSdmSimulatedRecords([newRecord, ...sdmSimulatedRecords]);
    setSdmActiveTab('output1');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0a1b33] via-[#0d274c] to-[#123668] text-white p-5 sm:p-6 flex items-start justify-between gap-4 border-b border-amber-400/40">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold mb-2">
              <Sparkles className="w-3 h-3" />
              <span>{item.subtitle}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              {item.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {item.description}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            title="Tutup Modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 max-h-[75vh] overflow-y-auto space-y-8">
          {/* Detailed Step by Step Pipeline */}
          {item.flowSteps && item.flowSteps.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-bold text-[#0c2340] flex items-center gap-2">
                  <span className="w-2.5 h-6 bg-amber-500 rounded-sm inline-block" />
                  Alur Komprehensif Sistem ({item.flowSteps.length} Tahapan)
                </h3>
                <span className="text-xs text-slate-500 font-medium">
                  SOP Terstandarisasi Lapas Perempuan Pangkal Pinang
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {item.flowSteps.map((step) => (
                  <div
                    key={step.step}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all flex items-start gap-3.5"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#0c2340] text-amber-400 font-black text-sm flex items-center justify-center flex-shrink-0 shadow">
                      {step.step}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="font-bold text-sm text-slate-900 leading-snug">
                          {step.title}
                        </h4>
                        {step.badge && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 border border-blue-200 whitespace-nowrap">
                            {step.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interactive Simulation / Direct Form for INOVASI BMN */}
          {item.id === 'inovasi-bmn' && (
            <div className="border border-amber-300/80 bg-gradient-to-br from-amber-50/50 to-white rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-base font-extrabold text-[#0c2340] flex items-center gap-2">
                    <Database className="w-5 h-5 text-amber-600" />
                    Simulasi Alur Pengajuan Persediaan BMN
                  </h4>
                  <p className="text-xs text-slate-600">
                    Uji coba alur dari Google Form &rarr; Pengecekan Persetujuan &rarr; Pengurangan Database Persediaan &rarr; Catat Aktivitas &rarr; PDF
                  </p>
                </div>
              </div>

              <form onSubmit={handleBmnSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Barang Persediaan
                  </label>
                  <select
                    value={bmnItemName}
                    onChange={(e) => setBmnItemName(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  >
                    <option>Kertas HVS A4 80gr</option>
                    <option>Tinta Ribbon Cartridge</option>
                    <option>Map Portepel / Snelhecter</option>
                    <option>Ballpoint Standar Hitam</option>
                    <option>Buku Register Blok Lapas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Jumlah Diminta
                  </label>
                  <input
                    type="text"
                    value={bmnQty}
                    onChange={(e) => setBmnQty(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    placeholder="Contoh: 5 Rim"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Seksi / Pemohon
                  </label>
                  <select
                    value={bmnSection}
                    onChange={(e) => setBmnSection(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  >
                    <option>Seksi Tata Usaha</option>
                    <option>Seksi Kamtib (Keamanan & Ketertiban)</option>
                    <option>Seksi Binadik (Pembinaan Narapidana)</option>
                    <option>Seksi Fasilitatif & Pelayanan Publik</option>
                  </select>
                </div>

                <div className="sm:col-span-3 flex items-center justify-between gap-3 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0c2340] hover:bg-[#1a365d] text-amber-300 text-xs font-bold shadow-md transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Jalankan Simulasi Form Pengajuan</span>
                  </button>

                  {bmnSimulationStatus !== 'idle' && (
                    <button
                      type="button"
                      onClick={() => setBmnSimulationStatus('idle')}
                      className="text-xs text-slate-500 hover:text-slate-700 underline font-semibold"
                    >
                      Reset Simulasi
                    </button>
                  )}
                </div>
              </form>

              {/* Status Simulation Live Tracker */}
              {bmnSimulationStatus !== 'idle' && (
                <div className="mt-4 p-4 rounded-xl bg-white border border-amber-300 text-xs space-y-3">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Hasil Otomatisasi Siklus BMN:</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-slate-700">
                    <div className="p-2 bg-slate-50 rounded-lg border">
                      <div className="text-[10px] text-slate-500">1. Form Pengajuan</div>
                      <div className="font-bold text-emerald-700">Terekam di DB</div>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-lg border">
                      <div className="text-[10px] text-slate-500">2. Pengecekan & Verifikasi</div>
                      <div className="font-bold text-blue-700">Disetujui PPK</div>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-lg border">
                      <div className="text-[10px] text-slate-500">3. Stok Persediaan</div>
                      <div className="font-bold text-amber-700">Auto -{bmnQty}</div>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-lg border">
                      <div className="text-[10px] text-slate-500">4. Output Dokumen</div>
                      <div className="font-bold text-purple-700">Excel & PDF Terbit</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px]">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 font-semibold">
                      <FileSpreadsheet className="w-3.5 h-3.5" /> Rekap_Persediaan_BMN.xlsx
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-rose-100 text-rose-800 font-semibold">
                      <FileDown className="w-3.5 h-3.5" /> SBBK_Surat_Bukti_Barang_Keluar.pdf
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Interactive Simulation / Direct Form for INOVASI SDM */}
          {item.id === 'inovasi-sdm' && (
            <div className="border border-blue-300/80 bg-gradient-to-br from-blue-50/40 to-white rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <h4 className="text-base font-extrabold text-[#0c2340] flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-600" />
                    Simulasi Inovasi Jurnal Harian Pegawai Lapas
                  </h4>
                  <p className="text-xs text-slate-600">
                    Google Form &rarr; Spreadsheet Cloud &rarr; Filtering ke Output 1 &rarr; Sheet Terpisah per Nama & NIP
                  </p>
                </div>

                <div className="flex rounded-lg border border-slate-200 bg-white p-1 text-xs">
                  <button
                    onClick={() => setSdmActiveTab('form')}
                    className={`px-3 py-1 rounded-md font-bold transition-all ${
                      sdmActiveTab === 'form' ? 'bg-[#0c2340] text-white' : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Input Form
                  </button>
                  <button
                    onClick={() => setSdmActiveTab('output1')}
                    className={`px-3 py-1 rounded-md font-bold transition-all ${
                      sdmActiveTab === 'output1' ? 'bg-[#0c2340] text-white' : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Filtering Output 1 ({sdmSimulatedRecords.length})
                  </button>
                  <button
                    onClick={() => setSdmActiveTab('sheetPegawai')}
                    className={`px-3 py-1 rounded-md font-bold transition-all ${
                      sdmActiveTab === 'sheetPegawai' ? 'bg-[#0c2340] text-white' : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Sheet Terpisah Pegawai
                  </button>
                </div>
              </div>

              {sdmActiveTab === 'form' && (
                <form onSubmit={handleSdmSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        1. Nama Pegawai
                      </label>
                      <input
                        type="text"
                        value={sdmName}
                        onChange={(e) => setSdmName(e.target.value)}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        2. Jabatan
                      </label>
                      <input
                        type="text"
                        value={sdmPosition}
                        onChange={(e) => setSdmPosition(e.target.value)}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        3. NIP
                      </label>
                      <input
                        type="text"
                        value={sdmNip}
                        onChange={(e) => setSdmNip(e.target.value)}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        4. Tanggal
                      </label>
                      <input
                        type="date"
                        value={sdmDate}
                        onChange={(e) => setSdmDate(e.target.value)}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        5. Keterangan
                      </label>
                      <select
                        value={sdmCategory}
                        onChange={(e) => setSdmCategory(e.target.value)}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      >
                        <option>Dinas Reguler</option>
                        <option>Piket Jaga / Regu Pengamanan</option>
                        <option>Tugas Luar / Koordinasi</option>
                        <option>Piket Kunjungan WBP</option>
                        <option>Pendidikan / Pelatihan</option>
                      </select>
                    </div>
                    <div className="sm:col-span-3">
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        6. Uraian Kegiatan Harian
                      </label>
                      <textarea
                        rows={2}
                        value={sdmDetail}
                        onChange={(e) => setSdmDetail(e.target.value)}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Uraikan aktivitas kerja secara detail..."
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-800 hover:from-blue-800 hover:to-indigo-900 text-white text-xs font-bold shadow-md transition-all"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Kirim ke Jurnal & Filter Otomatis</span>
                    </button>
                  </div>
                </form>
              )}

              {sdmActiveTab === 'output1' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span className="font-semibold flex items-center gap-1 text-[#0c2340]">
                      <Filter className="w-3.5 h-3.5 text-blue-600" />
                      Hasil Filtering Master (Output 1):
                    </span>
                    <span className="text-[11px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-mono">
                      Query Google Sheet: FILTER(Responses, ...)
                    </span>
                  </div>

                  <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-inner">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-[#0c2340] text-white">
                          <th className="p-2.5">Tanggal</th>
                          <th className="p-2.5">Nama Pegawai</th>
                          <th className="p-2.5">NIP</th>
                          <th className="p-2.5">Jabatan</th>
                          <th className="p-2.5">Keterangan</th>
                          <th className="p-2.5">Uraian Kegiatan</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700">
                        {sdmSimulatedRecords.map((rec, i) => (
                          <tr key={i} className="hover:bg-blue-50/50">
                            <td className="p-2.5 font-medium whitespace-nowrap text-slate-900">{rec.tanggal}</td>
                            <td className="p-2.5 font-bold text-blue-950">{rec.nama}</td>
                            <td className="p-2.5 font-mono text-[11px] text-slate-600">{rec.nip}</td>
                            <td className="p-2.5 whitespace-nowrap text-slate-800">{rec.jabatan}</td>
                            <td className="p-2.5 whitespace-nowrap">
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                                {rec.keterangan}
                              </span>
                            </td>
                            <td className="p-2.5 text-slate-600 min-w-[200px]">{rec.uraian}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {sdmActiveTab === 'sheetPegawai' && (
                <div className="space-y-3">
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900">
                    <strong>Hasil Akhir Inovasi SDM:</strong> Sistem membuat tab/sheet terpisah secara otomatis untuk setiap pegawai berdasarkan kombinasi <strong>Nama dan NIP</strong> sehingga arsip SKP dan evaluasi kinerja pimpinan menjadi terstruktur rapi.
                  </div>

                  {/* Mock of Google Sheets tab bar */}
                  <div className="border border-slate-300 rounded-xl bg-slate-100 p-2 overflow-x-auto flex items-center gap-2">
                    <span className="text-[11px] font-bold text-slate-500 uppercase px-2">
                      Sheet Tabs:
                    </span>
                    <button className="px-3 py-1.5 rounded bg-white font-bold text-xs text-blue-900 shadow-sm border border-blue-200 flex items-center gap-1.5 whitespace-nowrap">
                      <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{sdmName} ({sdmNip})</span>
                    </button>
                    <button className="px-3 py-1.5 rounded bg-slate-200 hover:bg-white font-medium text-xs text-slate-700 whitespace-nowrap">
                      Ahmad Fauzi (199105202017011003)
                    </button>
                    <button className="px-3 py-1.5 rounded bg-slate-200 hover:bg-white font-medium text-xs text-slate-700 whitespace-nowrap">
                      Nurul Hidayah (199611042020122002)
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Lapas Perempuan Kelas III Pangkal Pinang &bull; Kemenimipas RI
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold transition-colors"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
