import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'inovasi-bmn',
    category: 'layanan',
    categoryLabel: 'Layanan & Website Lapas',
    title: 'SISTEM PENGAJUAN PERSEDIAAN',
    subtitle: 'INOVASI BMN (Barang Milik Negara)',
    badgeText: 'Inovasi BMN',
    badgeColor: 'amber',
    description: 'Sistem otomasi permintaan dan pengelolaan barang persediaan kantor Lapas terintegrasi, mulai dari formulir digital hingga otomatisasi pengurangan database stok persediaan, pencatatan log aktivitas, dan cetak laporan PDF.',
    icon: 'Boxes',
    linkUrl: '#',
    externalPlatform: 'Google Form & Database System',
    stats: 'Multi-Step Verification',
    accentColor: 'amber',
    features: [
      'Otomasi pengurangan stok database',
      'Verifikasi persetujuan pimpinan berjenjang',
      'Ekspor rekapitulasi Excel & dokumen resmi PDF'
    ],
    flowSteps: [
      {
        step: 1,
        title: 'Mengisi Form Pengajuan',
        description: 'Petugas/seksi pengusul menginput rincian kebutuhan barang persediaan melalui Google Form terintegrasi.',
        iconName: 'FileEdit',
        badge: 'Pengusul'
      },
      {
        step: 2,
        title: 'Mengecek Form Pengajuan',
        description: 'Pengelola BMN melakukan verifikasi kelengkapan administrasi dan ketersediaan stok fisik riil di gudang.',
        iconName: 'SearchCheck',
        badge: 'Pengelola BMN'
      },
      {
        step: 3,
        title: 'Pengecekan: Disetujui / Ditolak',
        description: 'Sistem memberikan validasi kelayakan pengajuan berdasarkan kuota kebutuhan unit kerja dan kondisi stok.',
        iconName: 'ShieldAlert',
        badge: 'Validasi Sistem'
      },
      {
        step: 4,
        title: 'Menyetujui Form Pengajuan',
        description: 'Pejabat berwenang / PPK menyetujui form pengajuan persediaan yang telah terverifikasi sah.',
        iconName: 'CheckCircle2',
        badge: 'Persetujuan Pejabat'
      },
      {
        step: 5,
        title: 'Mengurangi Persediaan (Database)',
        description: 'Proses otomatis mengurangi database volume pada saldo buku persediaan secara real-time tanpa duplikasi.',
        iconName: 'Database',
        badge: 'Otomatisasi DB'
      },
      {
        step: 6,
        title: 'Mencatat Aktivitas',
        description: 'Pencatatan riwayat transaksi pengeluaran barang dan mutasi log ke dalam buku kendali BMN.',
        iconName: 'ClipboardList',
        badge: 'Audit Trail'
      },
      {
        step: 7,
        title: 'Ekspor ke Excel & File PDF',
        description: 'Sistem mengonversi rekapitulasi ke format spreadsheet Excel dan menerbitkan Surat Bukti Barang Keluar (SBBK) PDF siap cetak.',
        iconName: 'FileDown',
        badge: 'Output Resmi'
      }
    ]
  },
  {
    id: 'inovasi-sdm',
    category: 'layanan',
    categoryLabel: 'Layanan & Website Lapas',
    title: 'JURNAL HARIAN PEGAWAI',
    subtitle: 'INOVASI PENGELOLA SDM (Kepegawaian)',
    badgeText: 'Inovasi SDM',
    badgeColor: 'blue',
    description: 'Sistem pencatatan kinerja dan aktivitas harian aparatur Lapas Perempuan Pangkal Pinang. Data yang diinput melalui Google Form secara otomatis di-filter dan dikelompokkan ke dalam sheet terpisah sesuai Nama dan NIP pegawai.',
    icon: 'UserCheck',
    linkUrl: '#',
    externalPlatform: 'Google Form & Spreadsheet Cloud',
    stats: 'Real-time Sheet Sorting',
    accentColor: 'blue',
    features: [
      'Input form terstandardisasi 6 parameter wajib',
      'Penyaringan otomatis (Filtering ke Output 1)',
      'Lembar terpisah (Separate Sheet) per Nama & NIP'
    ],
    flowSteps: [
      {
        step: 1,
        title: 'Mengisi Formulir Jurnal Harian',
        description: 'Pegawai menginput 6 kolom data wajib: Nama Pegawai, Jabatan, NIP, Tanggal Pelaksanaan, Keterangan, dan Uraian Lengkap Kegiatan.',
        iconName: 'FileText',
        badge: 'Input Pegawai'
      },
      {
        step: 2,
        title: 'Sinkronisasi ke Spreadsheet Cloud',
        description: 'Data isian formulir otomatis terkirim dan tersimpan aman secara real-time pada master sheet respon utama.',
        iconName: 'Sheet',
        badge: 'Cloud Sync'
      },
      {
        step: 3,
        title: 'Filtering ke Output 1',
        description: 'Algoritma query formula menyaring, memvalidasi format tanggal dan mengelompokkan baris data menurut data kepegawaian.',
        iconName: 'Filter',
        badge: 'Filter Engine'
      },
      {
        step: 4,
        title: 'Sheet Terpisah per Nama & NIP',
        description: 'Hasil akhir menghasilkan arsip portofolio individual: masing-masing pegawai memiliki sheet terpisah sesuai Nama dan NIP untuk penilaian SKP.',
        iconName: 'FolderCheck',
        badge: 'Output Per Pegawai'
      }
    ]
  },
  {
    id: 'sosmed-instagram',
    category: 'sosmed',
    categoryLabel: 'Media Sosial Resmi',
    title: 'Instagram Resmi',
    subtitle: '@lapasperempuanpangkalpinang',
    badgeText: 'Sosial Media',
    badgeColor: 'rose',
    description: 'Akun Instagram resmi Lapas Perempuan Kelas III Pangkal Pinang. Temukan dokumentasi foto, reels pembinaan warga binaan, dan informasi kegiatan humas terkini.',
    icon: 'Instagram',
    linkUrl: 'https://www.instagram.com/lapasperempuanpangkalpinang?stkn=eGFlZno1ZWoxcTg2',
    externalPlatform: 'Instagram Official',
    stats: 'Feed & Story Publikasi',
    accentColor: 'rose',
    features: ['Galeri foto kegiatan', 'Informasi kunjungan tatap muka', 'Sorotan program kerja']
  },
  {
    id: 'sosmed-facebook',
    category: 'sosmed',
    categoryLabel: 'Media Sosial Resmi',
    title: 'Facebook Resmi',
    subtitle: 'Lapas Perempuan Kelas III Pangkalpinang',
    badgeText: 'Sosial Media',
    badgeColor: 'blue',
    description: 'Halaman resmi Facebook sebagai ruang komunikasi publik, transparansi instansi, penyebaran berita kegiatan, dan respon interaktif masyarakat.',
    icon: 'Facebook',
    linkUrl: 'https://www.facebook.com/share/1Ltj6AkW4Q/',
    externalPlatform: 'Facebook Page Official',
    stats: 'Berita & Artikel Publik',
    accentColor: 'blue',
    features: ['Berita siaran pers resmi', 'Album dokumentasi kegiatan', 'Forum komunikasi publik']
  },
  {
    id: 'sosmed-youtube',
    category: 'sosmed',
    categoryLabel: 'Media Sosial Resmi',
    title: 'YouTube Resmi',
    subtitle: '@lapasperempuanpangkalpinan1027',
    badgeText: 'Sosial Media',
    badgeColor: 'rose',
    description: 'Kanal video resmi memuat liputan profil satuan kerja, dokumentasi karya pembinaan kemandirian narapidana wanita, serta podcast pemasyarakatan.',
    icon: 'Youtube',
    linkUrl: 'https://youtube.com/@lapasperempuanpangkalpinan1027?si=9cR5dRN3_dDZVK0K',
    externalPlatform: 'YouTube Channel Official',
    stats: 'Video Profile & Liputan',
    accentColor: 'rose',
    features: ['Video profil instansi', 'Dokumentasi inovasi layanan', 'Podcast & talkshow humas']
  },
  {
    id: 'sosmed-x',
    category: 'sosmed',
    categoryLabel: 'Media Sosial Resmi',
    title: 'X / Twitter Resmi',
    subtitle: '@lpp_pkpinang1',
    badgeText: 'Sosial Media',
    badgeColor: 'emerald',
    description: 'Kanal media sosial X resmi untuk diseminasi informasi cepat, pengumuman jadwal layanan penting, tanggapan informasi, dan transparansi kinerja publik.',
    icon: 'Twitter',
    linkUrl: 'https://x.com/lpp_pkpinang1',
    externalPlatform: 'X (Twitter) Official',
    stats: 'Pembaruan Cepat',
    accentColor: 'emerald',
    features: ['Siaran berita kilat', 'Pengumuman jam layanan', 'Interaksi netizen & publik']
  },
  {
    id: 'sosmed-tiktok',
    category: 'sosmed',
    categoryLabel: 'Media Sosial Resmi',
    title: 'TikTok Resmi',
    subtitle: '@lapasperempuanpkp',
    badgeText: 'Sosial Media',
    badgeColor: 'purple',
    description: 'Kanal video pendek interaktif dan edukatif seputar pembinaan, kerajinan tangan warga binaan, dan sisi positif pemasyarakatan yang humanis.',
    icon: 'Video',
    linkUrl: 'https://www.tiktok.com/@lapasperempuanpkp?_r=1&_t=ZS-99pAuUMCHdU',
    externalPlatform: 'TikTok Official',
    stats: 'Konten Kreatif & Edukasi',
    accentColor: 'purple',
    features: ['Video singkat edukasi', 'Showcase produk kemandirian', 'Kampanye anti korupsi & gratifikasi']
  }
];

export const OFFICE_SCHEDULE = [
  { days: 'Senin - Kamis', hours: '08:00 - 15:00 WIB', note: 'Layanan Pengaduan & Informasi' },
  { days: 'Jum\'at', hours: '08:00 - 14:00 WIB', note: 'Layanan & Koordinasi Instansi' },
  { days: 'Sabtu', hours: '08:00 - 12:00 WIB', note: 'Layanan Terbatas / Khusus' },
  { days: 'Minggu & Libur Nasional', hours: 'Tutup', note: 'Layanan Online / Tiket Terjadwal' }
];
