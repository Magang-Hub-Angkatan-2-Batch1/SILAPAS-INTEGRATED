import React, { useState } from 'react';
import { X, Copy, Check, Download, Code2, ExternalLink, Sparkles } from 'lucide-react';

export const SINGLE_FILE_HTML_CODE = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SILAPAS-INTEGRATED | Layanan Kehumasan, BMN & SDM Lapas</title>
  <meta name="description" content="Sistem Informasi Layanan Kehumasan, BMN, dan SDM Lapas Perempuan Kelas III Pangkal Pinang, Kementerian Imigrasi dan Pemasyarakatan Republik Indonesia.">
  
  <!-- Tailwind CSS via CDN (Resmi & Siap Pakai) -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            govNavy: '#0c2340',
            govNavyDark: '#071629',
            govBlue: '#1a365d',
            govGold: '#f59e0b',
            govGoldDark: '#d97706',
          }
        }
      }
    }
  </script>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <style>
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
    .card-hover {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .card-hover:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 25px -5px rgba(12, 35, 64, 0.15), 0 8px 10px -6px rgba(12, 35, 64, 0.1);
    }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 antialiased flex flex-col min-h-screen">

  <!-- TOP BAR RESMI -->
  <div class="bg-govNavyDark text-slate-200 text-xs py-2 px-4 sm:px-6 border-b border-amber-500/20">
    <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
      <div class="flex items-center gap-2">
        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
          PORTAL RESMI
        </span>
        <span class="text-slate-300 text-[11px] sm:text-xs">
          Kementerian Imigrasi dan Pemasyarakatan Republik Indonesia
        </span>
      </div>
      <div class="flex items-center gap-4 text-[11px] text-slate-300 font-medium">
        <div class="flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span id="live-time-indicator">Layanan Buka (08:00 - 15:00 WIB)</span>
        </div>
      </div>
    </div>
  </div>

  <!-- HEADER NAVBAR -->
  <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <!-- Logo Emblem -->
        <div class="w-12 h-12 rounded-xl bg-govNavy flex items-center justify-center p-1.5 border border-amber-400 shadow-md">
          <svg viewBox="0 0 100 100" class="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50 14 L 74 24 C 74 52 50 78 50 86 C 50 78 26 52 26 24 Z" fill="#0c2340" stroke="#f59e0b" stroke-width="4"/>
            <polygon points="50,22 52.5,29 59.5,29 54,33 56,40 50,36 44,40 46,33 40.5,29 47.5,29" fill="#fbbf24"/>
            <line x1="50" y1="36" x2="50" y2="70" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/>
            <line x1="33" y1="46" x2="67" y2="46" stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M 27 54 Q 33 62 39 54 Z" fill="#fbbf24"/>
            <path d="M 61 54 Q 67 62 73 54 Z" fill="#fbbf24"/>
          </svg>
        </div>
        <div>
          <div class="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-600">
            KEMENTERIAN IMIGRASI DAN PEMASYARAKATAN RI
          </div>
          <div class="text-sm sm:text-base font-extrabold text-govNavy leading-tight">
            Lapas Perempuan Kelas III Pangkal Pinang
          </div>
        </div>
      </div>

      <nav class="flex items-center gap-2 text-xs font-bold">
        <a href="#kategori-layanan" class="hidden sm:inline-block px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition">Layanan Lapas</a>
        <a href="#kategori-sosmed" class="hidden sm:inline-block px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition">Media Sosial</a>
        <a href="#kontak-jam" class="px-3 py-2 rounded-lg bg-slate-100 text-govNavy hover:bg-slate-200 transition">Jam Layanan</a>
      </nav>
    </div>
  </header>

  <!-- HERO SECTION -->
  <section class="bg-gradient-to-b from-govNavyDark via-govNavy to-[#123668] text-white py-12 sm:py-16 px-4 sm:px-6 relative overflow-hidden border-b border-amber-500/30">
    <div class="max-w-4xl mx-auto text-center relative z-10">
      
      <!-- Sub-label Instansi -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/70 border border-amber-400/40 text-amber-300 text-xs font-bold mb-4">
        <span>★ PORTAL HUB INFORMASI RESMI ★</span>
      </div>

      <!-- Judul & Subjudul Permintaan User -->
      <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
        SILAPAS<span class="text-amber-400">-INTEGRATED</span>
      </h1>
      <h2 class="text-base sm:text-xl font-semibold text-blue-100 mb-6">
        (Sistem Informasi Layanan Kehumasan, BMN, dan SDM Lapas)
      </h2>
      <p class="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
        Pusat layanan informasi digital terintegrasi untuk mendukung percepatan tata kelola persediaan BMN, jurnal harian kinerja pegawai SDM, serta keterbukaan informasi publik Lapas Perempuan Kelas III Pangkal Pinang.
      </p>

      <!-- SEARCH BAR (FITUR PENCARIAN INSTAN JS) -->
      <div class="max-w-xl mx-auto mb-6">
        <div class="relative">
          <input 
            type="text" 
            id="searchInput" 
            placeholder="Cari layanan BMN, SDM, Instagram, Facebook, TikTok..." 
            class="w-full px-5 py-3.5 pl-12 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-sm font-medium shadow-xl border-2 border-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-400/30"
          >
          <span class="absolute left-4 top-3.5 text-amber-500 font-bold text-lg">🔍</span>
          <button id="clearSearchBtn" class="hidden absolute right-3 top-3 text-slate-400 hover:text-slate-600 text-sm font-bold bg-slate-100 rounded-full w-6 h-6 flex items-center justify-center">✕</button>
        </div>
        <div id="searchCounter" class="text-xs text-blue-200 mt-2 text-left px-2 hidden">
          Menampilkan hasil pencarian...
        </div>
      </div>

      <!-- FILTER TABS KATEGORI -->
      <div class="flex flex-wrap items-center justify-center gap-2">
        <button onclick="filterCategory('all')" id="btn-all" class="cat-filter-btn active px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-amber-500 text-slate-950 shadow-md">Semua (7)</button>
        <button onclick="filterCategory('layanan')" id="btn-layanan" class="cat-filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/15">Layanan & Website Lapas (2)</button>
        <button onclick="filterCategory('sosmed')" id="btn-sosmed" class="cat-filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/15">Media Sosial Resmi (5)</button>
      </div>
    </div>
  </section>

  <!-- MAIN CONTENT CONTAINER -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full space-y-12">

    <!-- KATEGORI 1: LAYANAN & WEBSITE LAPAS (INOVASI BMN & SDM) -->
    <section id="kategori-layanan" class="category-block">
      <div class="flex items-center gap-3 mb-6 pb-2 border-b-2 border-amber-500/30">
        <div class="w-8 h-8 rounded-lg bg-govNavy text-amber-400 flex items-center justify-center font-bold text-sm shadow">
          🏛️
        </div>
        <div>
          <h2 class="text-xl font-extrabold text-govNavy">Kategori: Layanan & Website Lapas</h2>
          <p class="text-xs text-slate-500">Inovasi Tata Kelola Persediaan BMN & Jurnal Kinerja Harian SDM</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <!-- KARTU 1: INOVASI BMN - SISTEM PENGAJUAN PERSEDIAAN -->
        <div class="service-card card-hover bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between"
             data-title="SISTEM PENGAJUAN PERSEDIAAN INOVASI BMN GOOGLE FORM EXCEL PDF"
             data-category="layanan">
          <div class="h-1.5 w-full bg-gradient-to-r from-amber-400 to-amber-600"></div>
          <div class="p-6">
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
                INOVASI BMN
              </span>
              <span class="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                Google Form & Database
              </span>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-govNavy mb-2">
              SISTEM PENGAJUAN PERSEDIAAN
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
              Otomasi pengajuan dan penyaluran barang persediaan kantor Lapas. Terintegrasi mulai dari pengisian formulir, verifikasi pimpinan, pengurangan otomatis database persediaan, pencatatan log aktivitas, hingga penerbitan rekap Excel & PDF resmi.
            </p>

            <!-- Alur 7 Tahapan BMN Sesuai Prompt User -->
            <div class="bg-amber-50/60 p-3.5 rounded-xl border border-amber-200 text-xs mb-4 space-y-1.5">
              <div class="font-bold text-amber-900 text-[11px] uppercase tracking-wider mb-1">
                Alur Kerja Terintegrasi (7 Langkah):
              </div>
              <ol class="list-decimal list-inside space-y-1 text-slate-700">
                <li><strong class="text-slate-900">Mengisi Form Pengajuan</strong> (Menu Google Form)</li>
                <li><strong class="text-slate-900">Mengecek Form Pengajuan</strong> (Verifikasi BMN)</li>
                <li><strong class="text-slate-900">Sistem Pengecekan</strong> (Ditolak / Disetujui)</li>
                <li><strong class="text-slate-900">Menyetujui Form Pengajuan</strong> (Validasi Pejabat)</li>
                <li><strong class="text-slate-900">Mengurangi Persediaan</strong> (Database berkurang otomatis)</li>
                <li><strong class="text-slate-900">Mencatat Aktivitas</strong> (Buku Kendali Transaksi)</li>
                <li><strong class="text-slate-900">Lanjut ke Excel & File PDF</strong> (Ekspor Laporan SBBK)</li>
              </ol>
            </div>
          </div>

          <div class="p-5 pt-0 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
            <button onclick="openSimulation('bmn')" class="flex-1 py-2.5 px-4 rounded-xl border-2 border-govNavy text-govNavy font-bold text-xs hover:bg-govNavy hover:text-white transition text-center">
              Lihat Alur & Detail
            </button>
            <button onclick="openSimulation('bmn')" class="flex-1 py-2.5 px-4 rounded-xl bg-govNavy hover:bg-govBlue text-amber-300 font-bold text-xs shadow-md transition text-center flex items-center justify-center gap-1">
              Akses Sekarang ➔
            </button>
          </div>
        </div>

        <!-- KARTU 2: INOVASI PENGELOLA SDM - JURNAL HARIAN PEGAWAI -->
        <div class="service-card card-hover bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between"
             data-title="JURNAL HARIAN PEGAWAI INOVASI PENGELOLA SDM GOOGLE FORM SPREADSHEET FILTERING OUTPUT 1 SHEET NAMA NIP"
             data-category="layanan">
          <div class="h-1.5 w-full bg-gradient-to-r from-blue-600 to-indigo-700"></div>
          <div class="p-6">
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200">
                INOVASI PENGELOLA SDM
              </span>
              <span class="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                Google Form ke Spreadsheet
              </span>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-govNavy mb-2">
              JURNAL HARIAN PEGAWAI
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
              Inovasi pencatatan aktivitas harian aparatur Lapas Perempuan Pangkal Pinang. Data isian form secara cerdas dialirkan ke Spreadsheet, diproses melalui filtering ke Output 1, dan menghasilkan sheet terpisah untuk setiap pegawai sesuai Nama dan NIP.
            </p>

            <!-- Menu 6 Isian & Output Sesuai Prompt User -->
            <div class="bg-blue-50/60 p-3.5 rounded-xl border border-blue-200 text-xs mb-4 space-y-1.5">
              <div class="font-bold text-blue-900 text-[11px] uppercase tracking-wider mb-1">
                6 Parameter Menu Isian & Output:
              </div>
              <ul class="list-disc list-inside space-y-1 text-slate-700">
                <li><strong class="text-slate-900">Kolom Wajib:</strong> Nama, Jabatan, NIP, Tanggal, Keterangan, Uraian Kegiatan</li>
                <li><strong class="text-slate-900">Proses:</strong> Otomasi Filtering ke Output 1</li>
                <li><strong class="text-slate-900">Hasil Akhir:</strong> Masing-masing pegawai memiliki Sheet terpisah sesuai Nama dan NIP</li>
              </ul>
            </div>
          </div>

          <div class="p-5 pt-0 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
            <button onclick="openSimulation('sdm')" class="flex-1 py-2.5 px-4 rounded-xl border-2 border-govNavy text-govNavy font-bold text-xs hover:bg-govNavy hover:text-white transition text-center">
              Lihat Alur & Detail
            </button>
            <button onclick="openSimulation('sdm')" class="flex-1 py-2.5 px-4 rounded-xl bg-govNavy hover:bg-govBlue text-amber-300 font-bold text-xs shadow-md transition text-center flex items-center justify-center gap-1">
              Akses Sekarang ➔
            </button>
          </div>
        </div>

      </div>
    </section>

    <!-- KATEGORI 2: MEDIA SOSIAL RESMI -->
    <section id="kategori-sosmed" class="category-block">
      <div class="flex items-center gap-3 mb-6 pb-2 border-b-2 border-amber-500/30">
        <div class="w-8 h-8 rounded-lg bg-govNavy text-amber-400 flex items-center justify-center font-bold text-sm shadow">
          📢
        </div>
        <div>
          <h2 class="text-xl font-extrabold text-govNavy">Kategori: Media Sosial Resmi</h2>
          <p class="text-xs text-slate-500">Saluran Resmi Kehumasan Lapas Perempuan Kelas III Pangkal Pinang</p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- INSTAGRAM -->
        <div class="service-card card-hover bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between"
             data-title="INSTAGRAM RESMI LAPAS PEREMPUAN PANGKAL PINANG @LAPASPEREMPUANPANGKALPINANG SOSIAL MEDIA"
             data-category="sosmed">
          <div class="h-1.5 w-full bg-gradient-to-r from-rose-500 to-pink-500"></div>
          <div class="p-5">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 font-bold text-lg">
                📸
              </div>
              <div>
                <span class="text-[10px] font-bold uppercase text-slate-400">Media Sosial Resmi</span>
                <h3 class="text-base font-bold text-slate-900 leading-tight">Instagram Resmi</h3>
                <p class="text-xs text-rose-600 font-semibold">@lapasperempuanpangkalpinang</p>
              </div>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">
              Informasi kegiatan harian, dokumentasi pembinaan kemandirian narapidana, rilis pers kehumasan, dan pengumuman jam kunjungan.
            </p>
          </div>
          <div class="p-4 pt-0">
            <a href="https://www.instagram.com/lapasperempuanpangkalpinang?stkn=eGFlZno1ZWoxcTg2" target="_blank" rel="noopener noreferrer" class="w-full py-2.5 px-4 rounded-xl bg-govNavy hover:bg-govBlue text-white hover:text-amber-300 font-bold text-xs shadow transition flex items-center justify-center gap-1.5">
              Akses Sekarang ↗
            </a>
          </div>
        </div>

        <!-- FACEBOOK -->
        <div class="service-card card-hover bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between"
             data-title="FACEBOOK RESMI LAPAS PEREMPUAN KELAS III PANGKALPINANG SOSIAL MEDIA"
             data-category="sosmed">
          <div class="h-1.5 w-full bg-gradient-to-r from-blue-600 to-blue-800"></div>
          <div class="p-5">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 font-bold text-lg">
                📘
              </div>
              <div>
                <span class="text-[10px] font-bold uppercase text-slate-400">Media Sosial Resmi</span>
                <h3 class="text-base font-bold text-slate-900 leading-tight">Facebook Resmi</h3>
                <p class="text-xs text-blue-600 font-semibold">Lapas Perempuan Kelas III Pangkalpinang</p>
              </div>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">
              Halaman Facebook resmi untuk publikasi artikel berita, transparansi kinerja satuan kerja, serta interaksi dan layanan informasi publik.
            </p>
          </div>
          <div class="p-4 pt-0">
            <a href="https://www.facebook.com/share/1Ltj6AkW4Q/" target="_blank" rel="noopener noreferrer" class="w-full py-2.5 px-4 rounded-xl bg-govNavy hover:bg-govBlue text-white hover:text-amber-300 font-bold text-xs shadow transition flex items-center justify-center gap-1.5">
              Akses Sekarang ↗
            </a>
          </div>
        </div>

        <!-- YOUTUBE -->
        <div class="service-card card-hover bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between"
             data-title="YOUTUBE RESMI LAPAS PEREMPUAN PANGKAL PINANG @LAPASPEREMPUANPANGKALPINAN1027 SOSIAL MEDIA"
             data-category="sosmed">
          <div class="h-1.5 w-full bg-gradient-to-r from-red-600 to-rose-700"></div>
          <div class="p-5">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 font-bold text-lg">
                ▶️
              </div>
              <div>
                <span class="text-[10px] font-bold uppercase text-slate-400">Media Sosial Resmi</span>
                <h3 class="text-base font-bold text-slate-900 leading-tight">YouTube Resmi</h3>
                <p class="text-xs text-red-600 font-semibold">@lapasperempuanpangkalpinan1027</p>
              </div>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">
              Kanal video resmi memuat liputan audio-visual, profil instansi WBK, talkshow pembinaan, dan karya warga binaan wanita.
            </p>
          </div>
          <div class="p-4 pt-0">
            <a href="https://youtube.com/@lapasperempuanpangkalpinan1027?si=9cR5dRN3_dDZVK0K" target="_blank" rel="noopener noreferrer" class="w-full py-2.5 px-4 rounded-xl bg-govNavy hover:bg-govBlue text-white hover:text-amber-300 font-bold text-xs shadow transition flex items-center justify-center gap-1.5">
              Akses Sekarang ↗
            </a>
          </div>
        </div>

        <!-- X / TWITTER -->
        <div class="service-card card-hover bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between"
             data-title="X TWITTER RESMI LAPAS PEREMPUAN PANGKAL PINANG @LPP_PKPINANG1 SOSIAL MEDIA"
             data-category="sosmed">
          <div class="h-1.5 w-full bg-gradient-to-r from-emerald-500 to-teal-700"></div>
          <div class="p-5">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-xl bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-800 font-bold text-lg">
                𝕏
              </div>
              <div>
                <span class="text-[10px] font-bold uppercase text-slate-400">Media Sosial Resmi</span>
                <h3 class="text-base font-bold text-slate-900 leading-tight">X / Twitter Resmi</h3>
                <p class="text-xs text-emerald-700 font-semibold">@lpp_pkpinang1</p>
              </div>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">
              Penyebaran informasi cepat, update terkini, jadwal pengumuman, dan transparansi kehumasan bagi publik dan warganet.
            </p>
          </div>
          <div class="p-4 pt-0">
            <a href="https://x.com/lpp_pkpinang1" target="_blank" rel="noopener noreferrer" class="w-full py-2.5 px-4 rounded-xl bg-govNavy hover:bg-govBlue text-white hover:text-amber-300 font-bold text-xs shadow transition flex items-center justify-center gap-1.5">
              Akses Sekarang ↗
            </a>
          </div>
        </div>

        <!-- TIKTOK -->
        <div class="service-card card-hover bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between"
             data-title="TIKTOK RESMI LAPAS PEREMPUAN PKP @LAPASPEREMPUANPKP SOSIAL MEDIA"
             data-category="sosmed">
          <div class="h-1.5 w-full bg-gradient-to-r from-purple-500 to-indigo-600"></div>
          <div class="p-5">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 font-bold text-lg">
                🎵
              </div>
              <div>
                <span class="text-[10px] font-bold uppercase text-slate-400">Media Sosial Resmi</span>
                <h3 class="text-base font-bold text-slate-900 leading-tight">TikTok Resmi</h3>
                <p class="text-xs text-purple-600 font-semibold">@lapasperempuanpkp</p>
              </div>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">
              Konten video edukatif dan kreatif mengenai pembinaan kepribadian, tata boga, kerajinan tangan, dan humanisme pemasyarakatan.
            </p>
          </div>
          <div class="p-4 pt-0">
            <a href="https://www.tiktok.com/@lapasperempuanpkp?_r=1&_t=ZS-99pAuUMCHdU" target="_blank" rel="noopener noreferrer" class="w-full py-2.5 px-4 rounded-xl bg-govNavy hover:bg-govBlue text-white hover:text-amber-300 font-bold text-xs shadow transition flex items-center justify-center gap-1.5">
              Akses Sekarang ↗
            </a>
          </div>
        </div>

      </div>
    </section>

    <!-- NO RESULTS FEEDBACK -->
    <div id="noResultsState" class="hidden py-12 text-center bg-white rounded-2xl border border-slate-200 p-8">
      <div class="text-4xl mb-3">🔍</div>
      <h3 class="text-lg font-bold text-slate-800">Layanan tidak ditemukan</h3>
      <p class="text-xs text-slate-500 mt-1">Coba gunakan kata kunci lain seperti "BMN", "SDM", "Instagram", dsb.</p>
      <button onclick="resetSearch()" class="mt-4 px-4 py-2 bg-amber-500 text-slate-950 text-xs font-bold rounded-xl shadow">
        Reset Pencarian
      </button>
    </div>

  </main>

  <!-- FOOTER RESMI (SESUAI KRITERIA PROMPT USER) -->
  <footer id="kontak-jam" class="bg-govNavyDark text-slate-300 border-t-2 border-amber-500/40 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Identitas Instansi -->
        <div class="space-y-3">
          <h4 class="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2">
            SILAPAS-INTEGRATED
          </h4>
          <p class="text-xs text-slate-300 leading-relaxed">
            Sistem Informasi Layanan Kehumasan, BMN, dan SDM Lapas Perempuan Kelas III Pangkal Pinang, Kementerian Imigrasi dan Pemasyarakatan Republik Indonesia.
          </p>
          <div class="text-[11px] text-amber-400 font-medium">
            Mewujudkan Pelayanan Pemasyarakatan yang Akuntabel, Transparan, dan Humanis.
          </div>
        </div>

        <!-- Alamat Kantor -->
        <div class="space-y-3">
          <h4 class="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2">
            Alamat Kantor Lapas
          </h4>
          <p class="text-xs text-slate-300 leading-relaxed">
            <strong>Lapas Perempuan Kelas III Pangkal Pinang</strong><br>
            Jl. Sanggul Dewa No.1, Batin Tikal, Kota Pangkal Pinang, Kepulauan Bangka Belitung, Indonesia
          </p>
        </div>

        <!-- Jam Layanan Publik (Mandated by user prompt) -->
        <div class="space-y-3">
          <h4 class="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2">
            Jam Layanan Publik
          </h4>
          <div class="space-y-1.5 text-xs text-slate-300">
            <div class="flex justify-between items-center bg-slate-900/60 p-2 rounded">
              <span class="font-semibold text-white">Hari Senin - Kamis:</span>
              <span class="text-amber-400 font-bold font-mono">08:00 - 15:00 WIB</span>
            </div>
            <div class="flex justify-between items-center bg-slate-900/60 p-2 rounded">
              <span class="font-semibold text-white">Jum'at:</span>
              <span class="text-amber-400 font-bold font-mono">08:00 - 14:00 WIB</span>
            </div>
            <div class="flex justify-between items-center bg-slate-900/60 p-2 rounded">
              <span class="font-semibold text-white">Sabtu:</span>
              <span class="text-amber-400 font-bold font-mono">08:00 - 12:00 WIB</span>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Copyright -->
    <div class="bg-[#040e1b] py-4 px-4 text-center text-xs text-slate-400 border-t border-slate-800">
      &copy; 2025 <strong class="text-white">Humas Lapas Perempuan Kelas III Pangkal Pinang</strong>. Hak Cipta Dilindungi.
    </div>
  </footer>

  <!-- MODAL DETAIL SIMULASI SISTEM (BMN / SDM) -->
  <div id="simulationModal" class="hidden fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl max-w-2xl w-full p-6 relative max-h-[85vh] overflow-y-auto border border-slate-300 shadow-2xl">
      <button onclick="closeSimulation()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-xl font-bold">✕</button>
      <div id="modalContent"></div>
    </div>
  </div>

  <!-- JAVASCRIPT LOGIC (PENCARIAN INSTAN, FILTER, MODAL) -->
  <script>
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    const searchCounter = document.getElementById('searchCounter');
    const noResultsState = document.getElementById('noResultsState');
    const cards = document.querySelectorAll('.service-card');
    let currentCategory = 'all';

    // Instant Search
    searchInput.addEventListener('input', function() {
      const query = this.value.toLowerCase().trim();
      clearSearchBtn.style.display = query ? 'flex' : 'none';
      filterCards();
    });

    clearSearchBtn.addEventListener('click', function() {
      searchInput.value = '';
      clearSearchBtn.style.display = 'none';
      filterCards();
    });

    function resetSearch() {
      searchInput.value = '';
      clearSearchBtn.style.display = 'none';
      currentCategory = 'all';
      updateFilterButtons();
      filterCards();
    }

    function filterCategory(cat) {
      currentCategory = cat;
      updateFilterButtons();
      filterCards();
    }

    function updateFilterButtons() {
      document.querySelectorAll('.cat-filter-btn').forEach(btn => {
        btn.classList.remove('bg-amber-500', 'text-slate-950', 'shadow-md');
        btn.classList.add('bg-white/10', 'text-white');
      });
      const activeBtn = document.getElementById('btn-' + currentCategory);
      if (activeBtn) {
        activeBtn.classList.remove('bg-white/10', 'text-white');
        activeBtn.classList.add('bg-amber-500', 'text-slate-950', 'shadow-md');
      }
    }

    function filterCards() {
      const query = searchInput.value.toLowerCase().trim();
      let visibleCount = 0;

      cards.forEach(card => {
        const text = (card.getAttribute('data-title') || '').toLowerCase();
        const category = card.getAttribute('data-category');

        const matchesQuery = !query || text.includes(query);
        const matchesCat = (currentCategory === 'all') || (category === currentCategory);

        if (matchesQuery && matchesCat) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      // Show/Hide No Results
      if (visibleCount === 0) {
        noResultsState.classList.remove('hidden');
      } else {
        noResultsState.classList.add('hidden');
      }

      if (query) {
        searchCounter.classList.remove('hidden');
        searchCounter.innerHTML = 'Menampilkan <strong>' + visibleCount + '</strong> tautan sesuai kata kunci "<em>' + query + '</em>"';
      } else {
        searchCounter.classList.add('hidden');
      }
    }

    // Modal Simulation Handler
    function openSimulation(type) {
      const modal = document.getElementById('simulationModal');
      const content = document.getElementById('modalContent');

      if (type === 'bmn') {
        content.innerHTML = \`
          <h3 class="text-xl font-bold text-govNavy mb-2">INOVASI BMN: SISTEM PENGAJUAN PERSEDIAAN</h3>
          <p class="text-xs text-slate-600 mb-4">Alur lengkap pemrosesan Google Form &rarr; Persetujuan &rarr; Database &rarr; Excel & PDF:</p>
          <div class="space-y-2.5 text-xs text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div class="p-2 bg-white rounded border flex items-center gap-2"><strong>1. Mengisi Form Pengajuan:</strong> Pengusul seksi mengisi data Google Form barang diminta.</div>
            <div class="p-2 bg-white rounded border flex items-center gap-2"><strong>2. Mengecek Form Pengajuan:</strong> Verifikator BMN memeriksa stok fisik di gudang.</div>
            <div class="p-2 bg-white rounded border flex items-center gap-2"><strong>3. Pengecekan Ditolak / Disetujui:</strong> Sistem menentukan validitas permohonan.</div>
            <div class="p-2 bg-white rounded border flex items-center gap-2"><strong>4. Menyetujui Form Pengajuan:</strong> Pejabat PPK memberikan otorisasi persetujuan.</div>
            <div class="p-2 bg-white rounded border flex items-center gap-2"><strong>5. Mengurangi Persediaan:</strong> Database stok persediaan otomatis terpotong sesuai kuota.</div>
            <div class="p-2 bg-white rounded border flex items-center gap-2"><strong>6. Mencatat Aktivitas:</strong> Mutasi dicatat dalam riwayat buku persediaan.</div>
            <div class="p-2 bg-white rounded border flex items-center gap-2"><strong>7. Output Excel & PDF:</strong> Diterbitkan dokumen SBBK format PDF dan rekap spreadsheet.</div>
          </div>
          <div class="mt-6 flex justify-end gap-2">
            <button onclick="closeSimulation()" class="px-4 py-2 bg-slate-200 text-slate-800 text-xs font-bold rounded-lg">Tutup</button>
            <button onclick="alert('Membuka Formulir Pengajuan Persediaan BMN'); closeSimulation();" class="px-4 py-2 bg-govNavy text-amber-300 text-xs font-bold rounded-lg">Buka Google Form BMN</button>
          </div>
        \`;
      } else {
        content.innerHTML = \`
          <h3 class="text-xl font-bold text-govNavy mb-2">INOVASI SDM: JURNAL HARIAN PEGAWAI</h3>
          <p class="text-xs text-slate-600 mb-4">Alur sistem Google Form ke Spreadsheet &rarr; Filtering ke Output 1 &rarr; Sheet Terpisah per Nama & NIP:</p>
          <div class="space-y-2.5 text-xs text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div class="p-2 bg-white rounded border"><strong>1. Isian Menu Form:</strong> Nama, Jabatan, NIP, Tanggal, Keterangan, Uraian Kegiatan.</div>
            <div class="p-2 bg-white rounded border"><strong>2. Sinkronisasi Spreadsheet:</strong> Data tersimpan aman pada Google Spreadsheet Cloud.</div>
            <div class="p-2 bg-white rounded border"><strong>3. Filtering ke Output 1:</strong> Formula otomatis menyortir dan memvalidasi log harian.</div>
            <div class="p-2 bg-white rounded border"><strong>4. Sheet Terpisah Pegawai:</strong> Masing-masing aparatur memiliki sheet khusus per Nama dan NIP untuk penilaian kinerja.</div>
          </div>
          <div class="mt-6 flex justify-end gap-2">
            <button onclick="closeSimulation()" class="px-4 py-2 bg-slate-200 text-slate-800 text-xs font-bold rounded-lg">Tutup</button>
            <button onclick="alert('Membuka Form Jurnal Harian Pegawai'); closeSimulation();" class="px-4 py-2 bg-govNavy text-amber-300 text-xs font-bold rounded-lg">Buka Form Jurnal SDM</button>
          </div>
        \`;
      }
      modal.classList.remove('hidden');
    }

    function closeSimulation() {
      document.getElementById('simulationModal').classList.add('hidden');
    }
  </script>
</body>
</html>`;

interface SingleFileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SingleFileModal: React.FC<SingleFileModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(SINGLE_FILE_HTML_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([SINGLE_FILE_HTML_CODE], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = 'silapas-integrated-single-file.html';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0c2340] to-[#1a365d] text-white p-5 sm:p-6 flex items-start justify-between gap-4 border-b border-amber-400/40">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Kode Lengkap Single-File (HTML + Tailwind CDN + JS)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2">
              <Code2 className="w-6 h-6 text-amber-400" />
              File Tunggal Mandiri (Single File)
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              File HTML mandiri murni siap pakai langsung tanpa Node.js. Cukup simpan sebagai <code>.html</code> dan klik dua kali untuk membuka di browser apapun.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-7 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-amber-50 border border-amber-200 p-3.5 rounded-xl text-xs text-amber-900">
            <div>
              <strong>Kriteria Terpenuhi:</strong> Tailwind CSS via CDN, pencarian instan JS, alur inovasi BMN & SDM, link media sosial resmi, serta footer jam layanan & hak cipta.
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0c2340] text-amber-300 font-bold hover:bg-slate-800 transition"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Tersalin!' : 'Salin Semua Kode'}</span>
              </button>

              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh .html</span>
              </button>
            </div>
          </div>

          {/* Code Viewer Preview */}
          <div className="relative rounded-xl bg-slate-900 border border-slate-700 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-800 text-slate-400 text-xs font-mono border-b border-slate-700">
              <span>silapas-integrated-single-file.html</span>
              <span>HTML5 + Tailwind CSS CDN + Vanilla JS</span>
            </div>
            <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto max-h-[50vh] leading-relaxed select-all">
              {SINGLE_FILE_HTML_CODE}
            </pre>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold transition"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
