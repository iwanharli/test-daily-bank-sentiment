# Daily Banking Sentiment Monitor

Dashboard monitoring sentimen perbankan harian berbasis media sosial, dirancang untuk **Penasehat Khusus Presiden Bidang Perbankan RI**.

## Deskripsi

Aplikasi ini menganalisis percakapan publik di Twitter dan Threads terkait sektor perbankan Indonesia. Data diproses dan divisualisasikan dalam bentuk dashboard interaktif dengan berbagai indikator kunci.

## Fitur

- **KPI Cards** — Total posting, spam, sentimen negatif, fraud, Net Sentiment Score (NSS), dan top bank
- **Distribusi Emosi** — Donut chart: Netral, Positif, Negatif, Spam, Sarkasme/Sinis
- **Tren Harian & Per Jam** — Line chart volume percakapan
- **Seismograph Emosi** — Visualisasi gelombang emosi per jam sebagai deteksi dini
- **Isu Utama** — Top 5 permasalahan terdeteksi otomatis
- **Bank Paling Disebut** — Bar chart Top 10 bank berdasarkan frekuensi mention
- **Analisis Krostab** — Cross-tabulation: Emosi×Sumber, Emosi×Jam, Emosi×Bank, Sumber×Bank
- **Spam Hotspots** — Deteksi akun dan nomor telepon terindikasi penipuan
- **Sample Postingan** — Tabel paginasi dengan detail konten
- **Rekomendasi Aksi** — Langkah strategis otomatis berbasis hasil analisis
- **Admin Panel** — Upload data CSV/XLSX, export, dan riwayat upload

## Teknologi

- HTML5 + Vanilla JavaScript
- [Tailwind CSS](https://tailwindcss.com/) (via CDN)
- [Chart.js](https://www.chartjs.org/) — visualisasi data
- [PapaParse](https://www.papaparse.com/) — parsing CSV
- [SheetJS (xlsx)](https://sheetjs.com/) — parsing Excel
- Font Awesome — ikon

## Struktur File

```
├── index.html        # Dashboard utama (self-contained)
├── stats_data.js     # Data statistik & sample postingan real
├── extracted.js      # Dataset postingan lengkap hasil ekstraksi
├── test.js           # File eksperimen
├── wrapped.js        # Versi alternatif data
└── README.md
```

## Cara Pakai

1. Buka `index.html` langsung di browser (tidak perlu server)
2. Dashboard otomatis memuat data periode **11–13 Mei 2026**
3. Gunakan filter di bagian atas untuk menyaring berdasarkan tanggal, sumber, bank, atau emosi

### Upload Data Baru

1. Klik tombol **Admin** di pojok kanan atas
2. Masukkan password: `perbankan2026`
3. Upload file **CSV** atau **XLSX** dengan kolom: `Date`, `Source`, `Author`, `Content`, `AI Emotion`
4. Klik **Process & Update** untuk memperbarui dashboard

## Data

- **Periode**: 11 – 13 Mei 2026
- **Total Posting**: 1.099
- **Platform**: Twitter, Threads
- **Kategori Emosi**: NETRAL, POSITIF, NEGATIF, SARKASME/SINIS, SPAM
- **Bank yang Dipantau**: 30+ bank (Mandiri, BCA, BRI, BNI, BSI, bank daerah, bank digital, dll.)

## Lisensi

Untuk keperluan internal pemerintah. Tidak untuk distribusi publik.
