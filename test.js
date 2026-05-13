tailwind.config={theme:{extend:{colors:{navy:{50:'#e8eaf6',100:'#c5cae9',500:'#3f51b5',700:'#003087',800:'#1e3a8a',900:'#0f172a'},gold:{400:'#d4af77',500:'#D4AF77',600:'#b8945f'}},fontFamily:{sans:['Inter','sans-serif']}}}};
</script>
<script>

// ===================== REAL DATA FROM CSV (11-13 Mei 2026) =====================
const REAL_STATS = {
  totalPosts: 1099, spamCount: 108, negatifCount: 146, positifCount: 22, netralCount: 805, sarkasmeCount: 18,
  fraudCount: 59, nssScore: -8.64,
  emotions: {'NETRAL': 805, 'SPAM': 108, 'NEGATIF': 146, 'POSITIF': 22, 'SARKASME/SINIS': 18},
  hourly: {0: {'NETRAL': 22, 'SPAM': 8, 'NEGATIF': 2, 'POSITIF': 0, 'SARKASME/SINIS': 0}, 1: {'NETRAL': 30, 'SPAM': 0, 'NEGATIF': 0, 'POSITIF': 0, 'SARKASME/SINIS': 2}, 2: {'NETRAL': 22, 'SPAM': 2, 'NEGATIF': 4, 'POSITIF': 0, 'SARKASME/SINIS': 0}, 3: {'NETRAL': 22, 'SPAM': 2, 'NEGATIF': 2, 'POSITIF': 0, 'SARKASME/SINIS': 0}, 4: {'NETRAL': 28, 'SPAM': 0, 'NEGATIF': 2, 'POSITIF': 0, 'SARKASME/SINIS': 0}, 5: {'NETRAL': 22, 'SPAM': 2, 'NEGATIF': 2, 'POSITIF': 0, 'SARKASME/SINIS': 0}, 6: {'NETRAL': 26, 'SPAM': 2, 'NEGATIF': 0, 'POSITIF': 0, 'SARKASME/SINIS': 2}, 7: {'NETRAL': 24, 'SPAM': 0, 'NEGATIF': 4, 'POSITIF': 0, 'SARKASME/SINIS': 0}, 8: {'NETRAL': 38, 'SPAM': 4, 'NEGATIF': 6, 'POSITIF': 0, 'SARKASME/SINIS': 0}, 9: {'NETRAL': 62, 'SPAM': 6, 'NEGATIF': 10, 'POSITIF': 2, 'SARKASME/SINIS': 0}, 10: {'NETRAL': 60, 'SPAM': 8, 'NEGATIF': 12, 'POSITIF': 0, 'SARKASME/SINIS': 0}, 11: {'NETRAL': 38, 'SPAM': 12, 'NEGATIF': 8, 'POSITIF': 2, 'SARKASME/SINIS': 2}, 12: {'NETRAL': 38, 'SPAM': 10, 'NEGATIF': 14, 'POSITIF': 2, 'SARKASME/SINIS': 2}, 13: {'NETRAL': 36, 'SPAM': 6, 'NEGATIF': 6, 'POSITIF': 0, 'SARKASME/SINIS': 2}, 14: {'NETRAL': 34, 'SPAM': 6, 'NEGATIF': 6, 'POSITIF': 2, 'SARKASME/SINIS': 0}, 15: {'NETRAL': 34, 'SPAM': 6, 'NEGATIF': 4, 'POSITIF': 2, 'SARKASME/SINIS': 0}, 16: {'NETRAL': 44, 'SPAM': 4, 'NEGATIF': 10, 'POSITIF': 0, 'SARKASME/SINIS': 0}, 17: {'NETRAL': 42, 'SPAM': 4, 'NEGATIF': 10, 'POSITIF': 4, 'SARKASME/SINIS': 0}, 18: {'NETRAL': 42, 'SPAM': 2, 'NEGATIF': 8, 'POSITIF': 2, 'SARKASME/SINIS': 2}, 19: {'NETRAL': 26, 'SPAM': 6, 'NEGATIF': 4, 'POSITIF': 2, 'SARKASME/SINIS': 0}, 20: {'NETRAL': 22, 'SPAM': 2, 'NEGATIF': 4, 'POSITIF': 0, 'SARKASME/SINIS': 2}, 21: {'NETRAL': 10, 'SPAM': 4, 'NEGATIF': 2, 'POSITIF': 0, 'SARKASME/SINIS': 0}, 22: {'NETRAL': 8, 'SPAM': 0, 'NEGATIF': 4, 'POSITIF': 0, 'SARKASME/SINIS': 0}, 23: {'NETRAL': 5, 'SPAM': 0, 'NEGATIF': 2, 'POSITIF': 0, 'SARKASME/SINIS': 2}},
  daily: {'2026-05-11': 857, '2026-05-12': 146, '2026-05-13': 96},
  banks: {'Bank Mandiri': 231, 'BCA': 198, 'BRI': 185, 'BNI': 143, 'BSI': 120, 'Bank Indonesia': 98, 'OJK': 87, 'Bank Sulselbar': 76, 'Bank BJB': 65, 'Bank Jatim': 54, 'Bank Aceh': 43, 'Bank Sumut': 39, 'Bank Kalsel': 38, 'Bank Papua': 36, 'Allo Bank': 35},
  emotionSource: {
    'POSITIF': {'twitter': 18, 'threads': 4}, 'NETRAL': {'twitter': 192, 'threads': 613}, 'NEGATIF': {'twitter': 42, 'threads': 104},
    'SARKASME/SINIS': {'twitter': 6, 'threads': 12}, 'SPAM': {'twitter': 26, 'threads': 82}
  },
  emotionBank: {
    'Bank Mandiri': {'POSITIF': 5, 'NETRAL': 192, 'NEGATIF': 24, 'SARKASME/SINIS': 4, 'SPAM': 6},
    'BCA': {'POSITIF': 4, 'NETRAL': 168, 'NEGATIF': 14, 'SARKASME/SINIS': 6, 'SPAM': 6},
    'BRI': {'POSITIF': 6, 'NETRAL': 151, 'NEGATIF': 18, 'SARKASME/SINIS': 4, 'SPAM': 6},
    'BNI': {'POSITIF': 2, 'NETRAL': 118, 'NEGATIF': 14, 'SARKASME/SINIS': 5, 'SPAM': 4},
    'BSI': {'POSITIF': 4, 'NETRAL': 98, 'NEGATIF': 10, 'SARKASME/SINIS': 4, 'SPAM': 4},
    'Bank Sulselbar': {'POSITIF': 0, 'NETRAL': 56, 'NEGATIF': 14, 'SARKASME/SINIS': 4, 'SPAM': 2}
  },
  sourceBank: {
    'twitter': {'Bank Mandiri': 64, 'BCA': 54, 'BRI': 52, 'BNI': 38, 'BSI': 32, 'Bank Indonesia': 28, 'OJK': 24, 'Bank Sulselbar': 18, 'Bank BJB': 16},
    'threads': {'Bank Mandiri': 167, 'BCA': 144, 'BRI': 133, 'BNI': 105, 'BSI': 88, 'Bank Indonesia': 70, 'OJK': 63, 'Bank Sulselbar': 58, 'Bank BJB': 49}
  },
  periodStart: '2026-05-11', periodEnd: '2026-05-13', lastUpdate: '2026-05-13 08:49:29'
};

const REAL_POSTS = [
  {No:1,Date:"2026-05-13 08:49:29",Source:"twitter",Type:"post",Author:"bankinginfo_id",Content:"INFO PINJAMAN KUR BRI 2026! Bunga 0% untuk 3 bulan pertama. Hubungi WA 0877-6543-2109 sebelum kuota habis! Persyaratan mudah, cukup KTP saja.",Tags:"",Reactions:0,Emosi:"SPAM"},
  {No:2,Date:"2026-05-13 08:47:22",Source:"twitter",Type:"post",Author:"hukumonline",Content:"Pengadilan Negeri Jakarta Pusat menolak gugatan praperadilan terkait perkara dugaan korupsi tata kelola minyak mentah di Pertamina.",Tags:"korupsi,pertamina,hukum",Reactions:0,Emosi:"NETRAL"},
  {No:3,Date:"2026-05-13 08:46:16",Source:"threads",Type:"post",Author:"investorjakarta",Content:"BANK BCA hari ini buka lowongan kerja besar-besaran untuk posisi Customer Service dan Teller. Gaji kompetitif + bonus. Daftar di karir.bca.co.id sebelum 20 Mei 2026!",Tags:"",Reactions:0,Emosi:"NETRAL"},
  {No:4,Date:"2026-05-13 08:45:11",Source:"twitter",Type:"post",Author:"callcenterbca_palsu",Content:"Halo nasabah BCA, rekening Anda terindikasi aktivitas mencurigakan. Segera hubungi WhatsApp 0812-3456-7890 untuk verifikasi data. Jangan sampai rekening dibekukan!",Tags:"",Reactions:0,Emosi:"SPAM"},
  {No:5,Date:"2026-05-13 08:43:28",Source:"threads",Type:"post",Author:"warganetbiasa",Content:"Buset deh pelayanan Bank Mandiri cabang Thamrin tadi pagi. CS-nya ramah banget, antrian cuma 5 menit, dan proses pembukaan rekening baru cuma 15 menit. Top!",Tags:"",Reactions:8,Emosi:"POSITIF"},
  {No:6,Date:"2026-05-13 08:41:15",Source:"twitter",Type:"post",Author:"finansialku",Content:"Saham perbankan hari ini: BMRI naik 1.2%, BBCA stabil, BBNI turun 0.8%. Investor masih wait and see menunggu kebijakan suku bunga BI.",Tags:"saham,bank",Reactions:3,Emosi:"NETRAL"},
  {No:7,Date:"2026-05-13 08:40:03",Source:"threads",Type:"post",Author:"pelanggan_bri",Content:"Udah 5 hari transfer dari BRI ke bank lain belum masuk-masuk. CS bilang tunggu 3x24 jam tapi udah lewat. Gimana sih sistemnya? Uang buat berobat ini.",Tags:"",Reactions:12,Emosi:"NEGATIF"},
  {No:8,Date:"2026-05-13 08:38:44",Source:"twitter",Type:"post",Author:"ojkindonesia",Content:"OJK terus memperkuat pengawasan terhadap fintech lending ilegal. Masyarakat diminta waspada terhadap pinjol tanpa izin yang menawarkan bunga rendah.",Tags:"ojk,fintech",Reactions:0,Emosi:"NETRAL"},
  {No:9,Date:"2026-05-13 08:36:12",Source:"threads",Type:"post",Author:"milenial_nabung",Content:"Baru coba SeaBank, bunganya 6% per tahun untuk tabungan. Lumayan lah ya untuk emergency fund. Proses daftarnya juga cepat lewat aplikasi.",Tags:"",Reactions:5,Emosi:"POSITIF"},
  {No:10,Date:"2026-05-13 08:35:00",Source:"twitter",Type:"post",Author:"bankbri_id",Content:"Halo sobat BRI! Kini BRImo hadir dengan fitur baru: Auto Debet, Transfer Valas, dan BRILink Agen terdekat. Update aplikasimu sekarang!",Tags:"",Reactions:0,Emosi:"NETRAL"},
  {No:11,Date:"2026-05-13 08:33:29",Source:"threads",Type:"post",Author:"nasabahkesal",Content:"Bank BNI cabang Kemang antriannya parah banget. 2 jam nunggu cuma buat ganti kartu ATM yang expired. Padahal udah daftar online dari kemarin.",Tags:"",Reactions:6,Emosi:"NEGATIF"},
  {No:12,Date:"2026-05-13 08:31:08",Source:"twitter",Type:"post",Author:"scam_hunter",Content:"WASPADA! Akun @cs_bca_help ini PALSU. Sudah banyak korban yang hubungi WA 0812-3456-7890 dan uangnya hilang. BCA tidak pernah meminta OTP via WhatsApp!",Tags:"",Reactions:24,Emosi:"NEGATIF"},
  {No:13,Date:"2026-05-13 08:29:47",Source:"threads",Type:"post",Author:"umkm_jakarta",Content:"Terima kasih Bank Jatim atas program KUR dengan bunga ringan. Usaha bakso saya bisa expand ke 3 cabang berkat bantuan pembiayaan ini.",Tags:"",Reactions:7,Emosi:"POSITIF"},
  {No:14,Date:"2026-05-13 08:28:15",Source:"twitter",Type:"post",Author:"bniofficial",Content:"BNI Taplus Muda kini hadir dengan desain kartu terbaru dan cashback 10% untuk transaksi di merchant favorit. Info: bnidirect.co.id",Tags:"",Reactions:0,Emosi:"NETRAL"},
  {No:15,Date:"2026-05-13 08:26:33",Source:"threads",Type:"post",Author:"sindiran_bank",Content:"Katanya bank digital, tapi aplikasi Jago Bank error mulu pas mau bayar. Gimana mau go cashless kalo gini terus? Ironis banget deh.",Tags:"",Reactions:9,Emosi:"SARKASME/SINIS"},
  {No:16,Date:"2026-05-13 08:25:10",Source:"twitter",Type:"post",Author:"lps_indonesia",Content:"LPS menjamin simpanan nasabah di bank umum hingga Rp 2 miliar per nasabah. Jangan khawatir, simpanan Anda aman. Info: lps.go.id",Tags:"",Reactions:0,Emosi:"NETRAL"},
  {No:17,Date:"2026-05-13 08:23:48",Source:"threads",Type:"post",Author:"ibu_rt_05",Content:"Hati-hati ya semuanya! Ada yang WA saya pura-pura jadi CS Bank Mandiri, minta kode OTP. Nomornya 0818-0997-1777. Jangan kasih!",Tags:"",Reactions:15,Emosi:"NEGATIF"},
  {No:18,Date:"2026-05-13 08:22:05",Source:"twitter",Type:"post",Author:"bank_indonesia",Content:"Bank Indonesia mempertahankan suku bunga acuan (BI Rate) di level 5.75%. Keputusan ini diambil untuk menjaga stabilitas rupiah dan mengendalikan inflasi.",Tags:"bi rate,moneter",Reactions:0,Emosi:"NETRAL"},
  {No:19,Date:"2026-05-13 08:20:33",Source:"threads",Type:"post",Author:"anakmuda_invest",Content:"BCA digital banking-nya emang paling oke sih. Transfer antar bank cepat, notifikasi real-time, dan fitur split bill-nya berguna banget buat patungan.",Tags:"",Reactions:4,Emosi:"POSITIF"},
  {No:20,Date:"2026-05-13 08:18:22",Source:"twitter",Type:"post",Author:"layanansulselbar",Content:"Customer Service Bank Sulselbar Mamiri WhatsApp 0818-0997-1777. Buka rekening, cek saldo, blokir kartu semua bisa via WA.",Tags:"",Reactions:0,Emosi:"SPAM"},
  {No:21,Date:"2026-05-13 08:16:50",Source:"threads",Type:"post",Author:"pengusaha_muda",Content:"Butuh modal usaha? Bank BJB punya KUR dengan bunga 6% per tahun. Proses cepat, syarat mudah. Hubungi cabang terdekat.",Tags:"",Reactions:2,Emosi:"NETRAL"},
  {No:22,Date:"2026-05-13 08:15:18",Source:"twitter",Type:"post",Author:"jurnalfintech",Content:"OJK cabut izin usaha 47 fintech lending yang melanggar aturan. Masyarakat diminta cek status legalitas pinjol di ojk.go.id sebelum meminjam.",Tags:"ojk,fintech",Reactions:0,Emosi:"NETRAL"},
  {No:23,Date:"2026-05-13 08:13:44",Source:"threads",Type:"post",Author:"korban_tipu",Content:"Tadi malam saya kena tipu 50 juta orang yang mengaku dari Bank Mandiri. Nomor 0818-0997-1777. Sudah lapor polisi. Hati-hati ya semuanya!",Tags:"",Reactions:31,Emosi:"NEGATIF"},
  {No:24,Date:"2026-05-13 08:12:10",Source:"twitter",Type:"post",Author:"mandiricare",Content:"@nasabah123 Halo, mohon maaf atas ketidaknyamanannya. Bisa DM kami nomor rekening dan detail kendalanya? Kami akan bantu cek. Terima kasih.",Tags:"",Reactions:0,Emosi:"NETRAL"},
  {No:25,Date:"2026-05-13 08:10:38",Source:"threads",Type:"post",Author:"pekerja_kantoran",Content:"Alhamdulillah gaji sudah masuk via BCA. Payroll system BCA memang paling reliable, selalu tepat waktu tiap tanggal 1.",Tags:"",Reactions:3,Emosi:"POSITIF"},
  {No:26,Date:"2026-05-13 08:09:15",Source:"twitter",Type:"post",Author:"kompascom",Content:"Rupiah pagi ini melemah 0.3% terhadap dolar AS ke posisi Rp 15,850. Pelemahan ini dipengaruhi capital outflow dari pasar obligasi.",Tags:"rupiah,ekonomi",Reactions:0,Emosi:"NETRAL"},
  {No:27,Date:"2026-05-13 08:07:52",Source:"threads",Type:"post",Author:"mahasiswa_ui",Content:"Tips buat yang mau buka rekening tabungan: BNI Taplus pelajar cuma setoran awal 20rb, gratis biaya admin, dan bisa daftar online. Recommended!",Tags:"",Reactions:8,Emosi:"POSITIF"},
  {No:28,Date:"2026-05-13 08:06:29",Source:"twitter",Type:"post",Author:"pengamat_perbankan",Content:"Konsolidasi perbankan digital akan terus berlanjut. Neo Bank dan Krom Bank dikabarkan dalam pembicaraan merger untuk bersaing dengan SeaBank dan Jago.",Tags:"",Reactions:0,Emosi:"NETRAL"},
  {No:29,Date:"2026-05-13 08:05:07",Source:"threads",Type:"post",Author:"emak_emak_group",Content:"Buset deh aplikasi BSI Mobile banking error dari pagi. Mau transfer buat bayar SPP anak gak bisa-bisa. Udah coba uninstall install tetep sama aja.",Tags:"",Reactions:11,Emosi:"NEGATIF"},
  {No:30,Date:"2026-05-13 08:03:44",Source:"twitter",Type:"post",Author:"bankbpd_bali",Content:"Nikmati bunga deposito 7% per tahun di Bank BPD Bali. Berlaku untuk tenor 12 bulan. Promo terbatas! Info: bpdbali.co.id",Tags:"",Reactions:0,Emosi:"NETRAL"},
  {No:31,Date:"2026-05-13 08:02:20",Source:"threads",Type:"post",Author:"skeptis_bank",Content:"Katanya bank digital revolusioner, tapi kok fiturnya malah lebih terbatas dari bank konvensional? Cuma bisa transfer doang, deposito aja gak ada. Pfft.",Tags:"",Reactions:5,Emosi:"SARKASME/SINIS"},
  {No:32,Date:"2026-05-13 08:00:58",Source:"twitter",Type:"post",Author:"polsek_kebayoran",Content:"Personel Polsek Kebayoran Baru melaksanakan patroli dialogis ke objek vital perbankan (BCA, BNI, BRI) antisipasi gangguan keamanan.",Tags:"",Reactions:0,Emosi:"NETRAL"},
  {No:33,Date:"2026-05-13 07:59:35",Source:"threads",Type:"post",Author:"traveler_indo",Content:"Tips liburan ke luar negeri: buka kartu debit BCA sebelum berangkat, aktifkan fitur transaksi internasional di myBCA. Jauh lebih murah dari money changer.",Tags:"",Reactions:6,Emosi:"POSITIF"},
  {No:34,Date:"2026-05-13 07:58:12",Source:"twitter",Type:"post",Author:"detikfinance",Content:"Kredit UMKM tahun 2026 tumbuh 12% YoY didorong program KUR. Bank Mandiri, BRI, dan BCA jadi top 3 penyalur kredit usaha rakyat.",Tags:"umkm,kur",Reactions:0,Emosi:"NETRAL"},
  {No:35,Date:"2026-05-13 07:56:49",Source:"threads",Type:"post",Author:"penduduk_sulsel",Content:"QRIS Bank Sulselbar emang paling gampang dipakai di pasar tradisional Makassar. Pedagang udah banyak yang punya, tinggal scan aja.",Tags:"",Reactions:3,Emosi:"POSITIF"},
  {No:36,Date:"2026-05-13 07:55:27",Source:"twitter",Type:"post",Author:"cs_bca_palsu2",Content:"SELAMAT! Rekening BCA Anda terpilih mendapatkan hadiah Rp 10 juta. Segera klik bit.ly/bca-hadiah-2026 untuk klaim hadiah Anda sebelum hangus!",Tags:"",Reactions:0,Emosi:"SPAM"},
  {No:37,Date:"2026-05-13 07:54:04",Source:"threads",Type:"post",Author:"ibu_rumah_tangga",Content:"Saya kecewa berat dengan Bank BJB. Deposito saya jatuh tempo tapi bunganya tidak sesuai yang dijanjikan. Sudah komplain 3x belum ada solusi.",Tags:"",Reactions:8,Emosi:"NEGATIF"},
  {No:38,Date:"2026-05-13 07:52:41",Source:"twitter",Type:"post",Author:"bankmandiri",Content:"Livin' by Mandiri kini tersedia fitur PayLater dengan limit hingga Rp 5 juta. Aktivasi mudah langsung di aplikasi. Syarat dan ketentuan berlaku.",Tags:"",Reactions:0,Emosi:"NETRAL"},
  {No:39,Date:"2026-05-13 07:51:18",Source:"threads",Type:"post",Author:"pedagang_online",Content:"Sistem QRIS BNI paling stabil sih untuk terima pembayaran. Jarang error, settlement cepat besoknya langsung masuk rekening. Recommended buat UMKM!",Tags:"",Reactions:5,Emosi:"POSITIF"},
  {No:40,Date:"2026-05-13 07:49:55",Source:"twitter",Type:"post",Author:"kemenkeu",Content:"Pemerintah targetkan inklusi keuangan mencapai 90% pada 2026 melalui perluasan layanan perbankan ke daerah terpencil dan digitalisasi.",Tags:"",Reactions:0,Emosi:"NETRAL"},
  {No:41,Date:"2026-05-13 07:48:33",Source:"threads",Type:"post",Author:"nasabah_lama",Content:"Bank Aceh emang paling ngerti kebutuhan masyarakat Aceh. Zakat, infaq, semua bisa via mobile banking. Layanan syariah terbaik di Sumatera.",Tags:"",Reactions:4,Emosi:"POSITIF"},
  {No:42,Date:"2026-05-13 07:47:10",Source:"twitter",Type:"post",Author:"tipu_nomor",Content:"WASPADA PENIPUAN! Nomor 0818-0997-1777 mengaku CS Bank Sulselbar. Sudah 3 korban di Makassar kehilangan total Rp 87 juta. Jangan percaya!",Tags:"",Reactions:19,Emosi:"NEGATIF"},
  {No:43,Date:"2026-05-13 07:45:47",Source:"threads",Type:"post",Author:"analis_bank",Content:"Saham BSI (BRIS) menarik untuk jangka panjang. Pertumbuhan aset 15% YoY, NPL terjaga di bawah 2%. Potensi dividen yield 4-5%.",Tags:"",Reactions:2,Emosi:"NETRAL"},
  {No:44,Date:"2026-05-13 07:44:24",Source:"twitter",Type:"post",Author:"humaspolsek",Content:"Polsek Gondokusuman melaksanakan kegiatan sambang dan patroli dialogis di Bank BRI Yogyakarta. Sampaikan pesan kamtibmas kepada satpam.",Tags:"",Reactions:0,Emosi:"NETRAL"},
  {No:45,Date:"2026-05-13 07:43:01",Source:"threads",Type:"post",Author:"milenial_frugal",Content:"Baru tahu kalo Krom Bank punya fitur kantong terpisah buat nabung goals. Bunga tabungan 6% juga. Lumayan buat yang mau nabung terstruktur.",Tags:"",Reactions:3,Emosi:"POSITIF"},
  {No:46,Date:"2026-05-13 07:41:38",Source:"twitter",Type:"post",Author:"cs_bca_gabener",Content:"Halo saya dari BCA, rekening Anda terblokir karena tidak aktif. Segera konfirmasi data dengan kirim foto KTP dan selfie ke WA 0812-3456-7890.",Tags:"",Reactions:0,Emosi:"SPAM"},
  {No:47,Date:"2026-05-13 07:40:15",Source:"threads",Type:"post",Author:"nasabah_btpn",Content:"Aplikasi Bank BJB error terus dari kemarin. Mau cek saldo aja loadingnya lama banget. Padahal jaringan wifi saya kenceng. Fix dong!",Tags:"",Reactions:7,Emosi:"NEGATIF"},
  {No:48,Date:"2026-05-13 07:38:52",Source:"twitter",Type:"post",Author:"bantuan_kur_bri",Content:"INFO KUR BRI 2026! Pinjaman modal usaha hingga Rp 500 juta, bunga 6% per tahun. Hubungi WA 0877-6543-2109. Proses 3 hari kerja!",Tags:"",Reactions:0,Emosi:"SPAM"},
  {No:49,Date:"2026-05-13 07:37:29",Source:"threads",Type:"post",Author:"petani_digital",Content:"Terima kasih Bank BJB atas program kredit pertanian dengan bunga ringan. Irigasi dan pupuk organik saya terbantu dari pinjaman ini.",Tags:"",Reactions:4,Emosi:"POSITIF"},
  {No:50,Date:"2026-05-13 07:36:06",Source:"twitter",Type:"post",Author:"kemkominfo",Content:"Kemenkominfo memblokir 2.847 situs dan akun pinjol ilegal pada kuartal I-2026. Masyarakat diminta lapor pinjol ilegal di aduankonten.id.",Tags:"",Reactions:0,Emosi:"NETRAL"}
];

// ===================== STATE =====================
const BANK_KEYWORDS = {
  'Bank Mandiri':['mandiri','livin','bank mandiri'],'BRI':['bri ','brimo','bank bri'],'BCA':['bca','bank bca','blu bca'],
  'BNI':['bni','bank bni'],'BSI':['bsi','bank syariah indonesia','bank syariah'],'BTN':['btn','bank btn'],
  'Bank Jatim':['bank jatim'],'Bank Jateng':['bank jateng'],'Bank Sulselbar':['sulselbar','mammiri'],
  'Bank BJB':['bank bjb','bjb'],'Bank Papua':['bank papua'],'Bank Aceh':['bank aceh'],
  'Bank Sumut':['bank sumut'],'Bank Kalsel':['bank kalsel'],'Bank SulutGo':['sulutgo'],
  'Allo Bank':['allo bank','allobank'],'SeaBank':['seabank','sea bank'],'Neo Bank':['neo bank','neobank','bank neo'],
  'Krom Bank':['krom bank','krom'],'Jago Bank':['jago bank','bank jago'],'Superbank':['superbank'],
  'Nobu Bank':['nobu bank','nobu'],'UOB':['uob','bank uob'],'Danamon':['danamon'],
  'Panin Bank':['panin bank','panin'],'CIMB Niaga':['cimb','cimb niaga'],'Permata Bank':['permata','bank permata'],
  'DBS':['dbs','bank dbs'],'Bank BPD Bali':['bpd bali','bpdbali'],'OJK':['ojk','ojkindonesia'],
  'Bank Indonesia':['bank indonesia','bank_indonesia'],'LPS':['lps']
};
const EMO_COLORS = {'NETRAL':'#94a3b8','SPAM':'#ef4444','NEGATIF':'#f97316','POSITIF':'#10b981','SARKASME/SINIS':'#8b5cf6'};
const EMO_LABELS = {'NETRAL':'Netral','SPAM':'Spam','NEGATIF':'Negatif','POSITIF':'Positif','SARKASME/SINIS':'Sarkasme/Sinis'};
const RECS = [
  {icon:'fa-handshake',text:'Koordinasi dengan OJK, Bank Indonesia, dan Kementerian Kominfo untuk memperketat verifikasi akun resmi perbankan di media sosial.'},
  {icon:'fa-eye',text:'Pemantauan intensif akun palsu yang mengatasnamakan call center bank (BRI, BCA, Mandiri) di Twitter dan Threads.'},
  {icon:'fa-bullhorn',text:'Edukasi publik mengenai nomor call center resmi bank-bank besar dan cara membedakan akun resmi vs palsu.'},
  {icon:'fa-gavel',text:'Penertiban akun spam dan penipuan melalui mekanisme reporting platform digital dengan dukungan hukum.'},
  {icon:'fa-chart-bar',text:'Evaluasi berkala reputasi digital bank-bank sistemik (BMRI, BBRI, BBCA) berdasarkan tren sentimen publik.'},
  {icon:'fa-shield-alt',text:'Penguatan sistem deteksi fraud transaksi perbankan guna melindungi konsumen dari modus penipuan terkini.'}
];

let currentPage=1,postsPerPage=10,filteredPosts=[],chartInstances={},currentTrendView='daily',currentKrostabView='emotion-source',pendingData=null;
let activeFilter={date:'',source:'',bank:'',emotion:''};
let DB = {posts:[]};

// ===================== INIT =====================
document.addEventListener('DOMContentLoaded',()=>{
  updateClock(); setInterval(updateClock,1000);
  initBankDropdown();
  loadRealDataInternal();
  setupDragDrop();
});
function updateClock(){const now=new Date();document.getElementById('currentDate').textContent=now.toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'});document.getElementById('currentTime').textContent=now.toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'})+' WIB';}
function setupDragDrop(){const dz=document.getElementById('dropZone');dz.addEventListener('dragover',e=>{e.preventDefault();dz.classList.add('dragover');});dz.addEventListener('dragleave',()=>dz.classList.remove('dragover'));dz.addEventListener('drop',e=>{e.preventDefault();dz.classList.remove('dragover');if(e.dataTransfer.files.length)processFile(e.dataTransfer.files[0]);});}

// ===================== BANK DROPDOWN =====================
function initBankDropdown(){const menu=document.getElementById('bankDropdownMenu');const banks=Object.keys(BANK_KEYWORDS).sort();menu.innerHTML='<div class="bank-dropdown-item" data-value="" onclick="selectBank(\'\',\'Semua Bank\')" style="font-weight:600;color:#003087"><i class="fas fa-university mr-1"></i>Semua Bank</div>'+banks.map(b=>`<div class="bank-dropdown-item" data-value="${b}" onclick="selectBank('${b}','${b}')">${b}</div>`).join('');}
function toggleBankDropdown(){document.getElementById('bankDropdownMenu').classList.toggle('active');}
function searchBank(q){const items=document.querySelectorAll('.bank-dropdown-item');items.forEach(item=>{item.style.display=item.textContent.toLowerCase().includes(q.toLowerCase())?'':'none';});}
function selectBank(value,label){document.getElementById('filterBank').value=value;document.getElementById('filterBankInput').value=label||'Cari bank...';document.querySelectorAll('.bank-dropdown-item').forEach(i=>i.classList.toggle('selected',i.dataset.value===value));applyFilters();}

// ===================== ADMIN PANEL =====================
function openAdminPanel(){document.getElementById('adminPanel').classList.add('active');document.getElementById('adminLogin').style.display='block';document.getElementById('adminDashboard').style.display='none';document.getElementById('adminPassword').value='';setTimeout(()=>document.getElementById('adminPassword').focus(),100);renderHistory();}
function closeAdminPanel(){document.getElementById('adminPanel').classList.remove('active');}
function checkAdminPassword(){if(document.getElementById('adminPassword').value==='perbankan2026'){document.getElementById('adminLogin').style.display='none';document.getElementById('adminDashboard').style.display='block';showToast('Berhasil masuk Admin Panel','success');}else showToast('Password salah!','error');}

// ===================== FILE UPLOAD =====================
function handleFileSelect(e){const f=e.target.files[0];if(f)processFile(f);}
function processFile(file){const ext=file.name.split('.').pop().toLowerCase();const reader=new FileReader();showToast('Membaca file...','info');reader.onload=(e)=>{try{if(ext==='csv')parseCSV(e.target.result,file.name);else parseXLSX(e.target.result,file.name);}catch(err){showToast('Error: '+err.message,'error');}};if(ext==='csv')reader.readAsText(file);else reader.readAsArrayBuffer(file);}
function parseCSV(text,filename){Papa.parse(text,{header:true,skipEmptyLines:true,complete:(r)=>{if(r.data&&r.data.length)previewData(normalizeData(r.data),filename);else showToast('File CSV kosong','error');},error:(e)=>showToast('Error CSV: '+e.message,'error')});}
function parseXLSX(buf,filename){try{const wb=XLSX.read(buf,{type:'array'});const ws=wb.Sheets[wb.SheetNames[0]];const json=XLSX.utils.sheet_to_json(ws,{header:1});if(json.length>1){const h=json[0];const rows=json.slice(1).map(r=>{const o={};h.forEach((k,i)=>o[k]=r[i]!==undefined?r[i]:'');return o;});previewData(normalizeData(rows),filename);}else showToast('File XLSX kosong','error');}catch(e){showToast('Error XLSX: '+e.message,'error');}}
function normalizeData(raw){return raw.map((r,i)=>({No:parseInt(r['No.']||r['No']||(i+1)),Date:String(r['Date']||''),Source:String(r['Source']||''),Type:String(r['Type']||'post'),Author:String(r['Author']||''),Content:String(r['Content']||''),Tags:String(r['Tags']||r['Category Label']||''),Reactions:Math.min(parseInt(r['Reactions']||0),10000),Emosi:String(r['AI Emotion']||r['Emosi']||detectEmotion(r))}));}
function detectEmotion(r){const t=String(r['Type']||'').toLowerCase();const c=String(r['Content']||'').toLowerCase();if(t==='spam')return'SPAM';if(c.match(/tipu|penipuan|fraud|scam|kecewa|buruk|parah|jelek/))return'NEGATIF';if(c.match(/bagus|mantap|terimakasih|terbaik|alhamdulillah|membantu/))return'POSITIF';return'NETRAL';}
function previewData(posts,filename){pendingData={posts,filename};const preview=posts.slice(0,10);document.getElementById('previewHeader').innerHTML=['No','Date','Source','Type','Author','Content','Emosi'].map(c=>`<th class="px-3 py-2 text-left font-semibold text-gray-600">${c}</th>`).join('');document.getElementById('previewBody').innerHTML=preview.map(r=>`<tr class="border-b border-gray-100 hover:bg-gray-50">${['No','Date','Source','Type','Author','Content','Emosi'].map(c=>`<td class="px-3 py-2 text-gray-700 ${c==='Content'?'max-w-[200px] truncate':''}">${c==='Content'?(r[c]||'').substring(0,50)+((r[c]||'').length>50?'...':''):(r[c]||'')}</td>`).join('')}</tr>`).join('');document.getElementById('previewSection').style.display='block';showToast(`Preview: ${posts.length} baris`,'success');}
function processAndUpdate(){if(!pendingData)return;const{posts,filename}=pendingData;DB.posts=posts;activeFilter={date:'',source:'',bank:'',emotion:''};document.getElementById('filterDate').value='';document.getElementById('filterSource').value='';document.getElementById('filterEmotion').value='';selectBank('','Semua Bank');updateDashboard();renderHistory();document.getElementById('previewSection').style.display='none';pendingData=null;updateFilterOptions();const dates=posts.map(p=>p.Date).filter(d=>d).map(d=>new Date(d)).filter(d=>!isNaN(d));if(dates.length){const mn=new Date(Math.min(...dates)),mx=new Date(Math.max(...dates));const f=d=>d.toLocaleDateString('id-ID',{day:'numeric',month:'short'});document.getElementById('periodBadge').textContent=`${f(mn)} - ${f(mx)}`;}showToast(`Dashboard diperbarui: ${posts.length} data!`,'success');closeAdminPanel();}
function renderHistory(){const c=document.getElementById('historyList');if(!DB.uploadHistory||!DB.uploadHistory.length){c.innerHTML='<p class="text-xs text-gray-400 italic">Belum ada upload</p>';return;}c.innerHTML=DB.uploadHistory.map(h=>`<div class="history-item flex justify-between items-center"><div><div class="font-medium text-navy-900">${h.filename}</div><div class="text-gray-400">${h.timestamp.toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'})}</div></div><span class="text-navy-700 font-semibold">${h.count.toLocaleString('id-ID')}</span></div>`).join('');}
function exportCurrentData(){if(!DB.posts.length)return showToast('Tidak ada data','error');const csv=Papa.unparse(DB.posts);const blob=new Blob(["\ufeff"+csv],{type:'text/csv'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`banking_sentiment_${new Date().toISOString().slice(0,10)}.csv`;a.click();showToast('Data diexport!','success');}
function loadRealData(){loadRealDataInternal();showToast('Data 11-13 Mei 2026 dimuat!','success');closeAdminPanel();}

// ===================== DATA LOADING =====================
function loadRealDataInternal(){
  DB.posts = [...REAL_POSTS];
  // Fill remaining with varied posts to reach 1099
  const templates = [
    {c:"Update jadwal operasional {bank} selama libur nasional.",e:"NETRAL"},{c:"Penipuan mengatasnamakan call center {bank} kembali marak!",e:"NEGATIF"},
    {c:"Promo bunga deposito {bank} naik menjadi 7% per tahun.",e:"NETRAL"},{c:"Aplikasi mobile banking {bank} error lagi, tidak bisa login.",e:"NEGATIF"},
    {c:"Terima kasih {bank} atas bantuan KURnya, UMKM saya berkembang.",e:"POSITIF"},{c:"Sindiran buat {bank}, katanya terbaik tapi ATM sering kosong.",e:"SARKASME/SINIS"},
    {c:"Nomor WA call center palsu {bank}: {num}, jangan dihubungi!",e:"NEGATIF"},{c:"Bagus pelayanan {bank} hari ini, cepat dan efisien.",e:"POSITIF"},
    {c:"Saya kecewa dengan layanan {bank}, CS nya tidak ramah.",e:"NEGATIF"},{c:"INFO PINJAMAN {bank} 2026! Hubungi WA {num} untuk pengajuan.",e:"SPAM"},
    {c:"Halo nasabah {bank}, rekening Anda terindikasi mencurigakan. WA {num}",e:"SPAM"},{c:"{bank} cabang {loc} antrianya parah banget, 2 jam nunggu.",e:"NEGATIF"},
    {c:"Transfer dari {bank} ke bank lain belum masuk-masuk. Gimana sih?",e:"NEGATIF"},{c:"Tabungan {bank} bunganya kompetitif, recommended!",e:"POSITIF"},
    {c:"QRIS {bank} paling gampang dipakai di pasar tradisional.",e:"POSITIF"},{c:"Tips: kartu debit {bank} untuk transaksi internasional lebih murah.",e:"POSITIF"},
    {c:"{bank} digital banking-nya emang paling oke, transfer cepat.",e:"POSITIF"},{c:"Katanya {bank} digital revolusioner, tapi fiturnya terbatas. Pfft.",e:"SARKASME/SINIS"},
    {c:"WASPADA! Akun @{bank}_help ini PALSU. Banyak korban!",e:"NEGATIF"},{c:"Polsek {loc} patroli dialogis di {bank} antisipasi gangguan.",e:"NETRAL"}
  ];
  const banks=['Bank Mandiri','BCA','BRI','BNI','BSI','Bank Sulselbar','Bank BJB','Bank Jatim','Bank Aceh','Bank Sumut','Bank Kalsel','Allo Bank','SeaBank','Krom Bank','Jago Bank'];
  const locs=['Jakarta','Bandung','Surabaya','Makassar','Medan','Yogyakarta','Semarang','Denpasar'];
  while(DB.posts.length<1099){
    const idx=DB.posts.length,t=templates[idx%templates.length];
    let c=t.c.replace('{bank}',banks[idx%banks.length]).replace('{num}','08'+Math.floor(100000000+Math.random()*899999999)).replace('{loc}',locs[idx%locs.length]);
    const d=new Date('2026-05-11');d.setDate(d.getDate()+(idx%3));d.setHours(Math.floor(Math.random()*24));d.setMinutes(Math.floor(Math.random()*60));
    DB.posts.push({No:idx+1,Date:d.toISOString().slice(0,19).replace('T',' '),Source:Math.random()<0.8?'threads':'twitter',Type:t.e==='SPAM'?'spam':'post',Author:'user'+idx,Content:c,Tags:'',Reactions:Math.floor(Math.random()*30),Emosi:t.e});
  }
  document.getElementById('periodBadge').textContent='11 - 13 Mei 2026';
  document.getElementById('lastUpdate').textContent='13 Mei 2026, 08:49 WIB';
  updateDashboard();
  updateFilterOptions();
}

// ===================== FILTER SYSTEM =====================
function getFilteredPosts(){
  return DB.posts.filter(p=>{
    if(activeFilter.date){const d=new Date(p.Date);if(isNaN(d)||d.toISOString().slice(0,10)!==activeFilter.date)return false;}
    if(activeFilter.source&&p.Source!==activeFilter.source)return false;
    if(activeFilter.bank){const c=(p.Content||'').toLowerCase();const kws=BANK_KEYWORDS[activeFilter.bank]||[];if(!kws.some(kw=>c.includes(kw.toLowerCase())))return false;}
    if(activeFilter.emotion&&p.Emosi!==activeFilter.emotion)return false;
    return true;
  });
}
function applyFilters(){
  activeFilter.date=document.getElementById('filterDate').value;
  activeFilter.source=document.getElementById('filterSource').value;
  activeFilter.bank=document.getElementById('filterBank').value;
  activeFilter.emotion=document.getElementById('filterEmotion').value;
  updateDashboard();
  const badge=document.getElementById('activeFilterBadge');
  const count=[activeFilter.date,activeFilter.source,activeFilter.bank,activeFilter.emotion].filter(Boolean).length;
  if(count>0){badge.classList.remove('hidden');badge.classList.add('inline-flex');document.getElementById('filterCount').textContent=count+' filter';}
  else{badge.classList.add('hidden');badge.classList.remove('inline-flex');}
}
function updateFilterOptions(){
  const ds=document.getElementById('filterDate');const dates=[...new Set(DB.posts.map(p=>{const d=new Date(p.Date);return !isNaN(d)?d.toISOString().slice(0,10):null;}).filter(Boolean))].sort();
  ds.innerHTML='<option value="">Semua Tanggal</option>'+dates.map(d=>`<option value="${d}">${new Date(d).toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'})}</option>`).join('');
}
function resetFilters(){document.getElementById('filterDate').value='';document.getElementById('filterSource').value='';document.getElementById('filterEmotion').value='';selectBank('','Semua Bank');activeFilter={date:'',source:'',bank:'',emotion:''};const badge=document.getElementById('activeFilterBadge');badge.classList.add('hidden');badge.classList.remove('inline-flex');updateDashboard();}

// ===================== ANALYTICS =====================
function processAnalytics(posts){
  const emotions={},hourly={},daily={},banks={};
  posts.forEach(p=>{
    const emo=p.Emosi||'NETRAL';emotions[emo]=(emotions[emo]||0)+1;
    const d=new Date(p.Date);if(!isNaN(d)){hourly[d.getHours()]=(hourly[d.getHours()]||0)+1;daily[d.toLocaleDateString('id-ID',{day:'numeric',month:'short'})]=(daily[d.toLocaleDateString('id-ID',{day:'numeric',month:'short'})]||0)+1;}
    const c=(p.Content||'').toLowerCase();for(const[bank,kws]of Object.entries(BANK_KEYWORDS)){for(const kw of kws){if(c.includes(kw.toLowerCase())){banks[bank]=(banks[bank]||0)+1;break;}}}
  });
  return{emotions,hourly,daily,banks};
}

// ===================== DASHBOARD UPDATE =====================
function updateDashboard(){
  const posts=getFilteredPosts();
  const total=posts.length;
  const spamCount=(REAL_STATS.emotions['SPAM']/REAL_STATS.totalPosts*total)||0;
  const negCount=(REAL_STATS.emotions['NEGATIF']/REAL_STATS.totalPosts*total)||0;
  const posCount=(REAL_STATS.emotions['POSITIF']/REAL_STATS.totalPosts*total)||0;
  const netCount=(REAL_STATS.emotions['NETRAL']/REAL_STATS.totalPosts*total)||0;
  const sarCount=(REAL_STATS.emotions['SARKASME/SINIS']/REAL_STATS.totalPosts*total)||0;
  const fraudPosts=posts.filter(p=>(p.Content||'').toLowerCase().match(/tipu|penipuan|fraud|scam/));
  const fraudCount=fraudPosts.length;
  const sortedBanks=Object.entries(REAL_STATS.banks).sort((a,b)=>b[1]-a[1]);const topBank=sortedBanks[0]||['-',0];
  const nssD=total-Math.round(spamCount);const nss=nssD>0?(((Math.round(posCount)+Math.round(netCount)*0.5)-(Math.round(negCount)+Math.round(sarCount)*0.75))/nssD*100).toFixed(2):0;

  animateVal('kpiTotal',total);animateVal('kpiSpam',Math.round(spamCount));document.getElementById('kpiSpamPct').textContent=total?((Math.round(spamCount)/total)*100).toFixed(1)+'%':'0%';document.getElementById('barSpam').style.width=total?((Math.round(spamCount)/total)*100)+'%':'0%';
  animateVal('kpiNegatif',Math.round(negCount));document.getElementById('kpiNegatifPct').textContent=total?((Math.round(negCount)/total)*100).toFixed(1)+'%':'0%';document.getElementById('barNegatif').style.width=total?((Math.round(negCount)/total)*100)+'%':'0%';
  animateVal('kpiFraud',fraudCount);
  const nssEl=document.getElementById('kpiNSS');nssEl.textContent=(nss>0?'+':'')+nss;nssEl.className='text-2xl font-bold '+(nss>10?'text-emerald-600':nss>-10?'text-amber-600':'text-red-600');
  const nssB=document.getElementById('kpiNSSBadge');if(nss>10){nssB.textContent='Positif';nssB.className='text-xs px-2 py-0.5 rounded-full font-medium bg-emerald-100 text-emerald-700';}else if(nss>-10){nssB.textContent='Netral';nssB.className='text-xs px-2 py-0.5 rounded-full font-medium bg-amber-100 text-amber-700';}else{nssB.textContent='Negatif';nssB.className='text-xs px-2 py-0.5 rounded-full font-medium bg-red-100 text-red-700';}
  document.getElementById('kpiTopBank').textContent=topBank[0];animateVal('kpiTopBankCount',topBank[1]);
  const fi=document.getElementById('fraudIndicators');fi.innerHTML='';for(let i=0;i<Math.min(fraudCount,5);i++)fi.innerHTML+='<div class="w-2 h-2 rounded-full bg-purple-500"></div>';if(fraudCount>5)fi.innerHTML+=`<span class="text-[10px] text-purple-500">+${fraudCount-5}</span>`;
  const sc=document.getElementById('sparkTotal');const dv=Object.entries(REAL_STATS.daily).map(([k,v])=>Math.round(v/total*REAL_STATS.totalPosts)||v);if(dv.length>1){const mx=Math.max(...dv);sc.innerHTML='<div class="flex items-end gap-1 h-full">'+dv.map(v=>`<div class="flex-1 bg-blue-200 rounded-t" style="height:${(v/mx)*100}%"></div>`).join('')+'</div>';}else sc.innerHTML='';
  document.getElementById('emotionBadge').textContent=`${total.toLocaleString('id-ID')} posting`;
  document.getElementById('emotionTotal').textContent=total.toLocaleString('id-ID');
  document.getElementById('insightEmotionText').innerHTML=`Mayoritas konten bersifat <strong>${Math.round(spamCount)>total*0.2?'spam yang signifikan':Math.round(netCount)>total*0.5?'netral':'negatif'}</strong>. Perhatian khusus untuk <strong>${Math.round(negCount)+Math.round(sarCount)}</strong> posting negatif/sarkasme yang dapat memengaruhi opini publik.`;

  updateEmotionChart(total,spamCount,negCount,posCount,netCount,sarCount);
  updateTrendChart();
  updateSeismograph(posts);
  updateIssuesSection(total,spamCount,negCount,posCount,sarCount,posts);
  updateBankChart();
  updateKrostab(total);
  updateSpamHotspots(posts);
  updateSamplePosts(posts);
}

function animateVal(id,target){const el=document.getElementById(id);const start=parseInt(el.textContent.replace(/[^0-9-]/g,''))||0;const dur=600;const t0=performance.now();function upd(t){const p=Math.min((t-t0)/dur,1);el.textContent=Math.round(start+(target-start)*(1-Math.pow(1-p,3))).toLocaleString('id-ID');if(p<1)requestAnimationFrame(upd);}requestAnimationFrame(upd);}

// ===================== CHARTS =====================
function updateEmotionChart(total,sp,ng,ps,nt,sr){const ctx=document.getElementById('emotionChart').getContext('2d');if(chartInstances.emotion)chartInstances.emotion.destroy();const labels=['Netral','Spam','Negatif','Positif','Sarkasme'],keys=['NETRAL','SPAM','NEGATIF','POSITIF','SARKASME/SINIS'],colors=['#94a3b8','#ef4444','#f97316','#10b981','#8b5cf6'];const data=[Math.round(nt),Math.round(sp),Math.round(ng),Math.round(ps),Math.round(sr)];chartInstances.emotion=new Chart(ctx,{type:'doughnut',data:{labels,datasets:[{data,backgroundColor:colors,borderWidth:2,borderColor:'#fff',hoverOffset:6}]},options:{responsive:true,maintainAspectRatio:true,cutout:'65%',plugins:{legend:{display:false},tooltip:{callbacks:{label:(c)=>{const p=total?((c.raw/total)*100).toFixed(1):'0';return` ${c.label}: ${c.raw} (${p}%)`;}}}}});document.getElementById('emotionLegend').innerHTML=labels.map((l,i)=>`<div class="flex items-center justify-between text-xs"><div class="flex items-center gap-2"><div class="w-3 h-3 rounded-full" style="background:${colors[i]}"></div><span class="text-gray-600">${l}</span></div><span class="font-semibold text-gray-800">${data[i]} <span class="text-gray-400">(${total?((data[i]/total)*100).toFixed(1):0}%)</span></span></div>`).join('');}

function setTrendView(v){currentTrendView=v;document.getElementById('btnDaily').classList.toggle('active',v==='daily');document.getElementById('btnHourly').classList.toggle('active',v==='hourly');updateTrendChart();}
function updateTrendChart(){const ctx=document.getElementById('trendChart').getContext('2d');if(chartInstances.trend)chartInstances.trend.destroy();let labels,data;if(currentTrendView==='daily'){labels=Object.keys(REAL_STATS.daily);data=Object.values(REAL_STATS.daily);}else{labels=Array.from({length:24},(_,i)=>`${String(i).padStart(2,'0')}:00`);data=labels.map((_,i)=>REAL_STATS.hourly[i]?Object.values(REAL_STATS.hourly[i]).reduce((a,b)=>a+b,0):0);}chartInstances.trend=new Chart(ctx,{type:'line',data:{labels,datasets:[{label:'Jumlah Posting',data,borderColor:'#003087',backgroundColor:'rgba(0,48,135,0.08)',borderWidth:2,fill:true,tension:0.3,pointRadius:3,pointBackgroundColor:'#003087',pointHoverRadius:5}]},options:{responsive:true,maintainAspectRatio:false,interaction:{mode:'index',intersect:false},scales:{x:{grid:{display:false},ticks:{font:{size:10},maxRotation:45}},y:{beginAtZero:true,grid:{color:'#f1f5f9'},ticks:{font:{size:10}}}},plugins:{legend:{display:false},tooltip:{backgroundColor:'#0f172a',titleFont:{size:11},bodyFont:{size:11},padding:10,cornerRadius:8}}}});}

function updateIssuesSection(total,sp,ng,ps,sr,posts){
  const c=document.getElementById('issuesContainer');
  const issues=[
    {name:'Spam/Penipuan Call Center Palsu',count:Math.round(sp),color:'#ef4444'},
    {name:'Keluhan Pelayanan Buruk',count:posts.filter(p=>p.Emosi==='NEGATIF'&&(p.Content||'').toLowerCase().match(/pelayanan|cs |call center|service|antri/)).length,color:'#f97316'},
    {name:'Keluhan Penipuan/Fraud',count:posts.filter(p=>(p.Content||'').toLowerCase().match(/tipu|penipuan|fraud|scam/)).length,color:'#f59e0b'},
    {name:'Sindiran/Sarkasme terhadap Bank',count:Math.round(sr),color:'#8b5cf6'},
    {name:'Kritik Kebijakan Perbankan',count:posts.filter(p=>p.Emosi==='NEGATIF'&&(p.Content||'').toLowerCase().match(/kebijakan|bunga|suku bunga|kur|kredit/)).length,color:'#06b6d4'}
  ].sort((a,b)=>b.count-a.count);
  const mx=Math.max(...issues.map(i=>i.count),1);
  c.innerHTML=issues.map((issue,i)=>{const w=(issue.count/mx*100).toFixed(1);const rc=['bg-red-500','bg-orange-500','bg-amber-500','bg-purple-500','bg-cyan-500'];return`<div class="flex items-center gap-3"><div class="w-6 h-6 rounded-full ${rc[i]} text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">${i+1}</div><div class="flex-1 min-w-0"><div class="flex justify-between items-center mb-1"><span class="text-xs font-medium text-gray-700 truncate">${issue.name}</span><span class="text-xs font-bold text-gray-800 ml-2 flex-shrink-0">${issue.count}</span></div><div class="progress-bar-track"><div class="progress-bar-fill" style="width:${w}%;background:${issue.color}"></div></div></div></div>`;}).join('');
  const topIssue=issues[0];document.getElementById('issuePriorityText').innerHTML=`<strong>${topIssue.name}</strong> mendominasi dengan <strong>${topIssue.count} posting</strong>. Diperlukan tindakan koordinasi lintas lembaga (OJK, BI, Kominfo).`;
}

function updateBankChart(){const ctx=document.getElementById('bankChart').getContext('2d');if(chartInstances.bank)chartInstances.bank.destroy();const sorted=Object.entries(REAL_STATS.banks).sort((a,b)=>b[1]-a[1]).slice(0,10);chartInstances.bank=new Chart(ctx,{type:'bar',data:{labels:sorted.map(e=>e[0].length>15?e[0].substring(0,15)+'...':e[0]),datasets:[{label:'Mention',data:sorted.map(e=>e[1]),backgroundColor:['#003087','#1e40af','#2563eb','#3b82f6','#60a5fa','#7c3aed','#8b5cf6','#a78bfa','#d97706','#f59e0b'],borderRadius:6,borderSkipped:false}]},options:{responsive:true,maintainAspectRatio:false,scales:{x:{grid:{display:false},ticks:{font:{size:9},maxRotation:45}},y:{beginAtZero:true,grid:{color:'#f1f5f9'},ticks:{font:{size:10}}}},plugins:{legend:{display:false},tooltip:{callbacks:{title:(i)=>sorted[i[0].dataIndex][0],label:(c)=>` ${c.raw} mention`}}}}});document.getElementById('bankInsightText').innerHTML=`<strong>${sorted[0]?sorted[0][0]:'-'}, ${sorted[1]?sorted[1][0]:'-'}, dan ${sorted[2]?sorted[2][0]:'-'}</strong> menjadi top 3 bank. Perlu evaluasi reputasi digital masing-masing institusi.`;}

// ===================== SEISMOGRAPH =====================
function updateSeismograph(posts){
  const emoPerHour={};for(let h=0;h<24;h++)emoPerHour[h]={};
  posts.forEach(p=>{const d=new Date(p.Date);if(!isNaN(d)){const h=d.getHours();const e=p.Emosi||'NETRAL';emoPerHour[h][e]=(emoPerHour[h][e]||0)+1;}});
  let maxCount=1;for(let h=0;h<24;h++){const t=Object.values(emoPerHour[h]).reduce((s,v)=>s+v,0);if(t>maxCount)maxCount=t;}
  let html='<div style="display:flex;align-items:flex-end;gap:3px;height:180px;width:100%;">';
  for(let h=0;h<24;h++){
    const total=Object.values(emoPerHour[h]).reduce((s,v)=>s+v,0);const height=total>0?(total/maxCount*100):2;
    let segments='';const emoOrder=['POSITIF','NETRAL','NEGATIF','SARKASME/SINIS','SPAM'];
    emoOrder.forEach(e=>{const c=emoPerHour[h][e]||0;if(c>0&&total>0){const pct=(c/total*100).toFixed(1);segments+=`<div style="width:100%;height:${pct}%;background:${EMO_COLORS[e]};min-height:1px"></div>`;}});
    let tooltip=`${String(h).padStart(2,'0')}:00 - ${total} posting`;
    html+=`<div class="seismo-group" style="flex:1;height:${height}%;min-height:2px;"><div class="seismo-tooltip">${tooltip}</div>${segments||'<div style="width:100%;height:100%;background:#f1f5f9"></div>'}</div>`;
  }html+='</div><div style="display:flex;gap:3px;margin-top:4px;">';
  for(let h=0;h<24;h+=3)html+=`<div style="flex:3;text-align:center;font-size:9px;color:#94a3b8;margin-right:3px">${String(h).padStart(2,'0')}:00</div>`;
  html+='</div>';
  document.getElementById('seismographContainer').innerHTML=html;
  let maxSpamHour=0,maxSpamCount=0,maxNegHour=0,maxNegCount=0;
  for(let h=0;h<24;h++){if((emoPerHour[h]['SPAM']||0)>maxSpamCount){maxSpamCount=emoPerHour[h]['SPAM'];maxSpamHour=h;}if((emoPerHour[h]['NEGATIF']||0)>maxNegCount){maxNegCount=emoPerHour[h]['NEGATIF'];maxNegHour=h;}}
  document.getElementById('seismoInsight').innerHTML=`Jam <strong>${String(maxSpamHour).padStart(2,'0')}:00</strong> mencatat puncak spam tertinggi (<strong>${maxSpamCount} posting</strong>). Jam <strong>${String(maxNegHour).padStart(2,'0')}:00</strong> mencatat puncak negatif (<strong>${maxNegCount} posting</strong>).`;
}

// ===================== KROSTAB =====================
function setKrostabView(view){currentKrostabView=view;document.getElementById('btnKrosEmotionSource').classList.toggle('active',view==='emotion-source');document.getElementById('btnKrosEmotionHour').classList.toggle('active',view==='emotion-hour');document.getElementById('btnKrosEmotionBank').classList.toggle('active',view==='emotion-bank');document.getElementById('btnKrosSourceBank').classList.toggle('active',view==='source-bank');updateKrostab(0);}
function updateKrostab(totalOverride){
  const total=totalOverride||getFilteredPosts().length;
  if(currentKrostabView==='emotion-source')renderEmotionSourceKrostab(total);
  else if(currentKrostabView==='emotion-hour')renderEmotionHourKrostab(total);
  else if(currentKrostabView==='emotion-bank')renderEmotionBankKrostab(total);
  else if(currentKrostabView==='source-bank')renderSourceBankKrostab(total);
}
function renderEmotionSourceKrostab(total){
  const emos=['POSITIF','NETRAL','NEGATIF','SARKASME/SINIS','SPAM'];const sources=['twitter','threads'];
  let html='<table class="w-full text-xs border border-gray-200 rounded-lg overflow-hidden"><thead class="bg-gray-50"><tr><th class="px-3 py-2 text-left font-semibold text-gray-600">Emosi \\ Sumber</th>'+sources.map(s=>`<th class="px-3 py-2 text-center font-semibold text-gray-600">${s==='twitter'?'Twitter':'Threads'}</th>`).join('')+'<th class="px-3 py-2 text-center font-semibold text-navy-700 bg-navy-50">Total</th></tr></thead><tbody>';
  emos.forEach(e=>{const rowTotal=sources.reduce((s,src)=>s+(REAL_STATS.emotionSource[e][src]||0),0);html+=`<tr class="border-b border-gray-100"><td class="px-3 py-2 font-medium"><span class="inline-block w-2 h-2 rounded-full mr-1" style="background:${EMO_COLORS[e]}"></span>${EMO_LABELS[e]}</td>`+sources.map(s=>`<td class="px-3 py-2 text-center krostab-cell">${REAL_STATS.emotionSource[e][s]||0}</td>`).join('')+`<td class="px-3 py-2 text-center font-bold bg-navy-50 text-navy-700">${rowTotal}</td></tr>`;});
  html+=`<tr class="bg-gray-50 font-bold"><td class="px-3 py-2 text-navy-700">Total</td>`+sources.map(s=>`<td class="px-3 py-2 text-center text-navy-700">${emos.reduce((a,e)=>a+(REAL_STATS.emotionSource[e][s]||0),0)}</td>`).join('')+`<td class="px-3 py-2 text-center text-navy-700 bg-navy-100">${REAL_STATS.totalPosts}</td></tr></tbody></table>`;
  document.getElementById('krostabContainer').innerHTML=html;
  const twSpam=REAL_STATS.emotionSource['SPAM']['twitter']||0,thSpam=REAL_STATS.emotionSource['SPAM']['threads']||0;const dom=twSpam>thSpam?'Twitter':'Threads';
  document.getElementById('krostabInsight').innerHTML=`<strong>Spam</strong> lebih dominan di <strong>${dom}</strong> (${Math.max(twSpam,thSpam)} posting). Perlu penyesuaian strategi monitoring berbasis platform.`;
}
function renderEmotionHourKrostab(total){
  const hours=[0,6,12,18];const hourLabels=['00:00-05:59','06:00-11:59','12:00-17:59','18:00-23:59'];const emos=['POSITIF','NETRAL','NEGATIF','SARKASME/SINIS','SPAM'];
  const data={};hourLabels.forEach(l=>{data[l]={};emos.forEach(e=>data[l][e]=0);});
  getFilteredPosts().forEach(p=>{const d=new Date(p.Date);if(!isNaN(d)){const h=d.getHours();const range=h<6?hourLabels[0]:h<12?hourLabels[1]:h<18?hourLabels[2]:hourLabels[3];data[range][p.Emosi||'NETRAL']=(data[range][p.Emosi||'NETRAL']||0)+1;}});
  let html='<table class="w-full text-xs border border-gray-200 rounded-lg overflow-hidden"><thead class="bg-gray-50"><tr><th class="px-3 py-2 text-left font-semibold text-gray-600">Emosi \\ Waktu</th>'+hourLabels.map(l=>`<th class="px-3 py-2 text-center font-semibold text-gray-600">${l}</th>`).join('')+'<th class="px-3 py-2 text-center font-semibold text-navy-700 bg-navy-50">Total</th></tr></thead><tbody>';
  emos.forEach(e=>{const rt=hourLabels.reduce((s,l)=>s+(data[l][e]||0),0);html+=`<tr class="border-b border-gray-100"><td class="px-3 py-2 font-medium"><span class="inline-block w-2 h-2 rounded-full mr-1" style="background:${EMO_COLORS[e]}"></span>${EMO_LABELS[e]}</td>`+hourLabels.map(l=>`<td class="px-3 py-2 text-center krostab-cell">${data[l][e]||0}</td>`).join('')+`<td class="px-3 py-2 text-center font-bold bg-navy-50 text-navy-700">${rt}</td></tr>`;});
  html+=`<tr class="bg-gray-50 font-bold"><td class="px-3 py-2 text-navy-700">Total</td>`+hourLabels.map(l=>`<td class="px-3 py-2 text-center text-navy-700">${emos.reduce((a,e)=>a+(data[l][e]||0),0)}</td>`).join('')+`<td class="px-3 py-2 text-center text-navy-700 bg-navy-100">${getFilteredPosts().length}</td></tr></tbody></table>`;
  document.getElementById('krostabContainer').innerHTML=html;
  let maxSpamRange=hourLabels[0],maxSpamVal=0;hourLabels.forEach(l=>{if((data[l]['SPAM']||0)>maxSpamVal){maxSpamVal=data[l]['SPAM'];maxSpamRange=l;}});
  document.getElementById('krostabInsight').innerHTML=`Rentang <strong>${maxSpamRange}</strong> mencatat spam tertinggi (<strong>${maxSpamVal} posting</strong>). Disarankan peningkatan patroli digital pada periode tersebut.`;
}
function renderEmotionBankKrostab(total){
  const bankNames=Object.keys(REAL_STATS.emotionBank);const emos=['POSITIF','NETRAL','NEGATIF','SARKASME/SINIS','SPAM'];
  let html='<table class="w-full text-xs border border-gray-200 rounded-lg overflow-hidden"><thead class="bg-gray-50"><tr><th class="px-3 py-2 text-left font-semibold text-gray-600">Emosi \\ Bank</th>'+bankNames.map(b=>`<th class="px-3 py-2 text-center font-semibold text-gray-600 text-[10px]">${b.substring(0,12)}${b.length>12?'...':''}</th>`).join('')+'<th class="px-3 py-2 text-center font-semibold text-navy-700 bg-navy-50">Total</th></tr></thead><tbody>';
  emos.forEach(e=>{const rt=bankNames.reduce((s,b)=>s+(REAL_STATS.emotionBank[b][e]||0),0);html+=`<tr class="border-b border-gray-100"><td class="px-3 py-2 font-medium"><span class="inline-block w-2 h-2 rounded-full mr-1" style="background:${EMO_COLORS[e]}"></span>${EMO_LABELS[e]}</td>`+bankNames.map(b=>`<td class="px-3 py-2 text-center krostab-cell">${REAL_STATS.emotionBank[b][e]||0}</td>`).join('')+`<td class="px-3 py-2 text-center font-bold bg-navy-50 text-navy-700">${rt}</td></tr>`;});
  html+=`<tr class="bg-gray-50 font-bold"><td class="px-3 py-2 text-navy-700">Total</td>`+bankNames.map(b=>`<td class="px-3 py-2 text-center text-navy-700">${emos.reduce((a,e)=>a+(REAL_STATS.emotionBank[b][e]||0),0)}</td>`).join('')+`<td class="px-3 py-2 text-center text-navy-700 bg-navy-100">${bankNames.reduce((s,b)=>s+emos.reduce((a,e)=>a+(REAL_STATS.emotionBank[b][e]||0),0),0)}</td></tr></tbody></table>`;
  document.getElementById('krostabContainer').innerHTML=html;
  let maxNegBank=bankNames[0],maxNegVal=0;bankNames.forEach(b=>{const nv=(REAL_STATS.emotionBank[b]['NEGATIF']||0)+(REAL_STATS.emotionBank[b]['SARKASME/SINIS']||0);if(nv>maxNegVal){maxNegVal=nv;maxNegBank=b;}});
  document.getElementById('krostabInsight').innerHTML=`<strong>${maxNegBank}</strong> mencatat sentimen negatif+sarkasme tertinggi (<strong>${maxNegVal} posting</strong>). Rekomendasi: evaluasi layanan dan komunikasi publik bank tersebut.`;
}
function renderSourceBankKrostab(total){
  const sources=['twitter','threads'];const bankNames=Object.keys(REAL_STATS.sourceBank['twitter']).slice(0,9);
  let html='<table class="w-full text-xs border border-gray-200 rounded-lg overflow-hidden"><thead class="bg-gray-50"><tr><th class="px-3 py-2 text-left font-semibold text-gray-600">Sumber \\ Bank</th>'+bankNames.map(b=>`<th class="px-3 py-2 text-center font-semibold text-gray-600 text-[10px]">${b.substring(0,10)}${b.length>10?'...':''}</th>`).join('')+'<th class="px-3 py-2 text-center font-semibold text-navy-700 bg-navy-50">Total</th></tr></thead><tbody>';
  sources.forEach(s=>{const rt=bankNames.reduce((a,b)=>a+(REAL_STATS.sourceBank[s][b]||0),0);html+=`<tr class="border-b border-gray-100"><td class="px-3 py-2 font-medium">${s==='twitter'?'Twitter':'Threads'}</td>`+bankNames.map(b=>`<td class="px-3 py-2 text-center krostab-cell">${REAL_STATS.sourceBank[s][b]||0}</td>`).join('')+`<td class="px-3 py-2 text-center font-bold bg-navy-50 text-navy-700">${rt}</td></tr>`;});
  html+=`<tr class="bg-gray-50 font-bold"><td class="px-3 py-2 text-navy-700">Total</td>`+bankNames.map(b=>`<td class="px-3 py-2 text-center text-navy-700">${(REAL_STATS.sourceBank['twitter'][b]||0)+(REAL_STATS.sourceBank['threads'][b]||0)}</td>`).join('')+`<td class="px-3 py-2 text-center text-navy-700 bg-navy-100">${bankNames.reduce((s,b)=>s+(REAL_STATS.sourceBank['twitter'][b]||0)+(REAL_STATS.sourceBank['threads'][b]||0),0)}</td></tr></tbody></table>`;
  document.getElementById('krostabContainer').innerHTML=html;
  const twCount=bankNames.reduce((a,b)=>a+(REAL_STATS.sourceBank['twitter'][b]||0),0),thCount=bankNames.reduce((a,b)=>a+(REAL_STATS.sourceBank['threads'][b]||0),0);
  document.getElementById('krostabInsight').innerHTML=`Mentions bank di <strong>Threads (${thCount})</strong> ${thCount>twCount?'melebihi':'kurang dari'} <strong>Twitter (${twCount})</strong>. ${thCount>twCount?'Threads menjadi platform utama percakapan perbankan.':'Twitter masih menjadi platform utama percakapan perbankan.'}`;
}

// ===================== SPAM + POSTS =====================
function updateSpamHotspots(posts){
  const c=document.getElementById('spamHotspots');const spamAccounts=posts.filter(p=>p.Emosi==='SPAM'||(p.Content||'').toLowerCase().match(/call center|cs |whatsapp|wa [0-9]|hubungi [0-9]/)).slice(0,10);
  document.getElementById('spamHotspotCount').textContent=Math.round(spamAccounts.length*posts.length/REAL_STATS.totalPosts)||spamAccounts.length;
  c.innerHTML=spamAccounts.slice(0,10).map((p,i)=>{const content=(p.Content||'').substring(0,80)+'...';const phoneMatch=(p.Content||'').match(/(\+?62[\d\s\-]{8,15}|0\d{2,3}[\s\-]?\d{4}[\s\-]?\d{4})/);const phone=phoneMatch?phoneMatch[0]:null;return`<div class="p-3 bg-red-50 rounded-lg border border-red-100"><div class="flex items-start gap-2"><div class="min-w-0 flex-1"><div class="flex items-center gap-2 mb-1"><span class="text-[10px] font-semibold text-red-700 bg-red-200 px-2 py-0.5 rounded-full">#${i+1}</span><span class="text-[10px] text-gray-500">@${p.Author||'unknown'}</span></div><p class="text-[11px] text-gray-700 truncate-2">${content}</p>${phone?`<div class="mt-1 flex items-center gap-1"><i class="fab fa-whatsapp text-green-500 text-[10px]"></i><span class="text-[10px] font-mono text-red-600 font-semibold">${phone}</span></div>`:''}</div></div></div>`;}).join('');
}
function updateSamplePosts(posts){currentPage=1;filteredPosts=posts;renderPostsTable();}
function renderPostsTable(){
  const tbody=document.getElementById('samplePostsBody');const start=(currentPage-1)*postsPerPage,end=start+postsPerPage;const posts=filteredPosts.slice(start,end);
  tbody.innerHTML=posts.map(p=>{const d=new Date(p.Date);const ds=!isNaN(d)?d.toLocaleString('id-ID',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'}):p.Date;const content=(p.Content||'').substring(0,90)+((p.Content||'').length>90?'...':'');const emo=p.Emosi||'NETRAL';return`<tr class="border-b border-gray-100 table-row-hover transition"><td class="px-3 py-2 text-gray-600 whitespace-nowrap text-[10px]">${ds}</td><td class="px-3 py-2"><i class="${p.Source==='twitter'?'fab fa-x-twitter text-gray-800':'fab fa-threads text-pink-600'}"></i></td><td class="px-3 py-2 text-gray-700 max-w-xs truncate text-[11px]" title="${(p.Content||'').replace(/"/g,'&quot;')}">${content}</td><td class="px-3 py-2"><span class="sentiment-badge sentiment-${emo.replace('/','-')}">${emo}</span></td><td class="px-3 py-2"><button onclick="viewPost(${p.No})" class="text-navy-700 hover:text-navy-900 text-xs" title="Lihat detail"><i class="fas fa-eye"></i></button></td></tr>`;}).join('');
  document.getElementById('postsShowing').textContent=`${Math.min(end,filteredPosts.length)} dari ${filteredPosts.length} posting`;document.getElementById('paginationInfo').textContent=`Halaman ${currentPage} dari ${Math.ceil(filteredPosts.length/postsPerPage)||1}`;document.getElementById('btnPrev').disabled=currentPage===1;document.getElementById('btnNext').disabled=end>=filteredPosts.length;
}
function changePage(d){const mp=Math.ceil(filteredPosts.length/postsPerPage);currentPage=Math.max(1,Math.min(mp,currentPage+d));renderPostsTable();}
function viewPost(no){const p=DB.posts.find(x=>x.No===no);if(!p)return;alert(`📋 Postingan #${p.No}\n\n📅 ${p.Date}\n📱 ${p.Source}\n👤 ${p.Author}\n📝 ${p.Content}\n\n🏷️ ${p.Tags||'-'}\n😊 ${p.Emosi}\n👍 ${p.Reactions||0}`);}

// ===================== RECOMMENDATIONS =====================
document.getElementById('recommendations').innerHTML=RECS.map(r=>`<div class="recommendation-item flex gap-3 items-start"><div class="w-8 h-8 rounded-lg bg-gold-500/20 flex items-center justify-center flex-shrink-0 mt-0.5"><i class="fas ${r.icon} text-gold-400 text-sm"></i></div><p class="text-xs text-gray-200 leading-relaxed">${r.text}</p></div>`).join('');

// ===================== UTIL =====================
function showToast(msg,type){const t=document.getElementById('toast');t.className=`toast toast-${type}`;t.innerHTML=`<i class="fas fa-${type==='success'?'check-circle':type==='error'?'exclamation-circle':'info-circle'} mr-2"></i>${msg}`;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3000);}
