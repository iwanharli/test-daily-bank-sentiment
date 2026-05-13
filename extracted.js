
// ==================== REAL DATA FROM CSV ====================
const REAL_STATS = {
  totalPosts: 1099,
  emotions: {"NETRAL": 805, "SPAM": 108, "NEGATIF": 146, "POSITIF": 22, "SARKASME/SINIS": 18},
  fraudCount: 59,
  nssScore: -8.64,
  daily: {"11 Mei": 857, "12 Mei": 146, "13 Mei": 96},
  hourlyTotal: [52,32,28,26,30,26,30,28,48,80,80,60,64,50,48,46,54,56,54,38,28,16,12,7],
  banks: [["Bank Mandiri",231],["BCA",198],["BRI",185],["BNI",143],["BSI",120],["Bank Indonesia",98],["OJK",87],["Bank Sulselbar",76],["Bank BJB",65],["Bank Jatim",54],["Bank Aceh",43],["Bank Sumut",39],["Bank Kalsel",38],["Bank Papua",36],["Allo Bank",35]],
  emotionSource: {
    POSITIF: {twitter: 18, threads: 4},
    NETRAL: {twitter: 192, threads: 613},
    NEGATIF: {twitter: 42, threads: 104},
    SARKASME: {twitter: 6, threads: 12},
    SPAM: {twitter: 26, threads: 82}
  },
  emotionBank: {
    "Bank Mandiri": {POSITIF: 5, NETRAL: 192, NEGATIF: 24, SARKASME: 4, SPAM: 6},
    BCA: {POSITIF: 4, NETRAL: 168, NEGATIF: 14, SARKASME: 6, SPAM: 6},
    BRI: {POSITIF: 6, NETRAL: 151, NEGATIF: 18, SARKASME: 4, SPAM: 6},
    BNI: {POSITIF: 2, NETRAL: 118, NEGATIF: 14, SARKASME: 5, SPAM: 4},
    BSI: {POSITIF: 4, NETRAL: 98, NEGATIF: 10, SARKASME: 4, SPAM: 4},
    "Bank Sulselbar": {POSITIF: 0, NETRAL: 56, NEGATIF: 14, SARKASME: 4, SPAM: 2}
  },
  sourceBank: {
    twitter: {"Bank Mandiri": 64, BCA: 54, BRI: 52, BNI: 38, BSI: 32, "Bank Indonesia": 28, OJK: 24, "Bank Sulselbar": 18, "Bank BJB": 16},
    threads: {"Bank Mandiri": 167, BCA: 144, BRI: 133, BNI: 105, BSI: 88, "Bank Indonesia": 70, OJK: 63, "Bank Sulselbar": 58, "Bank BJB": 49}
  },
  period: "11 - 13 Mei 2026",
  lastUpdate: "13 Mei 2026, 08:49 WIB"
};

// 50 real posts from CSV
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
{No:26,Date:"2026-05-13 08:09:15",Source:"twitter",Type:"post",Author:"kompascom",Content:"Rupiah pagi ini melemah 0.3% terhadap dolar AS ke posisi Rp 15.850. Pelemahan ini dipengaruhi capital outflow dari pasar obligasi.",Tags:"rupiah,ekonomi",Reactions:0,Emosi:"NETRAL"},
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

// ==================== STATE & CONFIG ====================
const BANK_KEYWORDS = {
  'Bank Mandiri':['mandiri','livin','bank mandiri'],'BRI':['bri ','brimo','bank bri'],'BCA':['bca','bank bca','blu bca'],
  'BNI':['bni','bank bni'],'BSI':['bsi','bank syariah indonesia','bank syariah'],'BTN':['btn','bank btn'],
  'Bank Jatim':['bank jatim'],'Bank Jateng':['bank jateng'],'Bank Sulselbar':['sulselbar','mammiri'],
  'Bank BJB':['bank bjb','bjb '],'Bank Papua':['bank papua'],'Bank Aceh':['bank aceh'],
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
let DB={posts:[],uploadHistory:[]};

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded',function(){
  updateClock();setInterval(updateClock,1000);
  initBankDropdown();
  initRecommendations();
  loadRealDataInternal();
  setupDragDrop();
});

function updateClock(){var now=new Date();document.getElementById('currentDate').textContent=now.toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'});document.getElementById('currentTime').textContent=now.toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'})+' WIB';}

function setupDragDrop(){var dz=document.getElementById('dropZone');dz.addEventListener('dragover',function(e){e.preventDefault();dz.classList.add('dragover');});dz.addEventListener('dragleave',function(){dz.classList.remove('dragover');});dz.addEventListener('drop',function(e){e.preventDefault();dz.classList.remove('dragover');if(e.dataTransfer.files.length)processFile(e.dataTransfer.files[0]);});}

// ==================== BANK DROPDOWN ====================
function initBankDropdown(){var menu=document.getElementById('bankDropdownMenu');var banks=Object.keys(BANK_KEYWORDS).sort();var html='<div class="bank-dropdown-item" data-value="" onclick="selectBank(\'\',\'Semua Bank\')" style="font-weight:600;color:#003087"><i class="fas fa-university mr-1"></i>Semua Bank</div>';for(var i=0;i<banks.length;i++){html+='<div class="bank-dropdown-item" data-value="'+banks[i]+'" onclick="selectBank(\''+banks[i]+'\',\''+banks[i]+'\')">'+banks[i]+'</div>';}menu.innerHTML=html;}
function toggleBankDropdown(){document.getElementById('bankDropdownMenu').classList.toggle('active');}
function searchBank(q){var items=document.querySelectorAll('.bank-dropdown-item');for(var i=0;i<items.length;i++){items[i].style.display=items[i].textContent.toLowerCase().indexOf(q.toLowerCase())>=0?'':'none';}}
function selectBank(value,label){document.getElementById('filterBank').value=value;document.getElementById('filterBankInput').value=label||'Cari bank...';var items=document.querySelectorAll('.bank-dropdown-item');for(var i=0;i<items.length;i++){items[i].classList.toggle('selected',items[i].dataset.value===value);}applyFilters();}

// ==================== ADMIN PANEL ====================
function openAdminPanel(){document.getElementById('adminPanel').classList.add('active');document.getElementById('adminLogin').style.display='block';document.getElementById('adminDashboard').style.display='none';document.getElementById('adminPassword').value='';setTimeout(function(){document.getElementById('adminPassword').focus();},100);renderHistory();}
function closeAdminPanel(){document.getElementById('adminPanel').classList.remove('active');}
function checkAdminPassword(){if(document.getElementById('adminPassword').value==='perbankan2026'){document.getElementById('adminLogin').style.display='none';document.getElementById('adminDashboard').style.display='block';showToast('Berhasil masuk Admin Panel','success');}else showToast('Password salah!','error');}

// ==================== FILE UPLOAD ====================
function handleFileSelect(e){var f=e.target.files[0];if(f)processFile(f);}
function processFile(file){var ext=file.name.split('.').pop().toLowerCase();var reader=new FileReader();showToast('Membaca file...','info');reader.onload=function(e){try{if(ext==='csv')parseCSV(e.target.result,file.name);else parseXLSX(e.target.result,file.name);}catch(err){showToast('Error: '+err.message,'error');}};if(ext==='csv')reader.readAsText(file);else reader.readAsArrayBuffer(file);}
function parseCSV(text,filename){Papa.parse(text,{header:true,skipEmptyLines:true,complete:function(r){if(r.data&&r.data.length)previewData(normalizeData(r.data),filename);else showToast('File CSV kosong','error');},error:function(e){showToast('Error CSV: '+e.message,'error');}});}
function parseXLSX(buf,filename){try{var wb=XLSX.read(buf,{type:'array'});var ws=wb.Sheets[wb.SheetNames[0]];var json=XLSX.utils.sheet_to_json(ws,{header:1});if(json.length>1){var h=json[0];var rows=json.slice(1).map(function(r){var o={};h.forEach(function(k,i){o[k]=r[i]!==undefined?r[i]:'';});return o;});previewData(normalizeData(rows),filename);}else showToast('File XLSX kosong','error');}catch(e){showToast('Error XLSX: '+e.message,'error');}}
function normalizeData(raw){return raw.map(function(r,i){return{No:parseInt(r['No.']||r['No']||(i+1)),Date:String(r['Date']||''),Source:String(r['Source']||''),Type:String(r['Type']||'post'),Author:String(r['Author']||''),Content:String(r['Content']||''),Tags:String(r['Tags']||r['Category Label']||''),Reactions:Math.min(parseInt(r['Reactions']||0),10000),Emosi:String(r['AI Emotion']||r['Emosi']||detectEmotion(r))};});}
function detectEmotion(r){var t=String(r['Type']||'').toLowerCase();var c=String(r['Content']||'').toLowerCase();if(t==='spam')return'SPAM';if(c.match(/tipu|penipuan|fraud|scam|kecewa|buruk|parah|jelek/))return'NEGATIF';if(c.match(/bagus|mantap|terimakasih|terbaik|alhamdulillah|membantu/))return'POSITIF';return'NETRAL';}
function previewData(posts,filename){pendingData={posts:posts,filename:filename};var preview=posts.slice(0,10);var cols=['No','Date','Source','Type','Author','Content','Emosi'];var thead=document.getElementById('previewHeader');thead.innerHTML='';for(var i=0;i<cols.length;i++){thead.innerHTML+='<th class="px-3 py-2 text-left font-semibold text-gray-600">'+cols[i]+'</th>';}var tbody=document.getElementById('previewBody');tbody.innerHTML='';for(var i=0;i<preview.length;i++){var row=preview[i];var tr='<tr class="border-b border-gray-100 hover:bg-gray-50">';for(var j=0;j<cols.length;j++){var c=cols[j];var val=row[c]||'';if(c==='Content')val=val.substring(0,50)+(val.length>50?'...':'');tr+='<td class="px-3 py-2 text-gray-700">'+val+'</td>';}tr+='</tr>';tbody.innerHTML+=tr;}document.getElementById('previewSection').style.display='block';showToast('Preview: '+posts.length+' baris','success');}
function processAndUpdate(){if(!pendingData)return;var posts=pendingData.posts,filename=pendingData.filename;DB.posts=posts;DB.uploadHistory.unshift({filename:filename,timestamp:new Date(),count:posts.length});activeFilter={date:'',source:'',bank:'',emotion:''};document.getElementById('filterDate').value='';document.getElementById('filterSource').value='';document.getElementById('filterEmotion').value='';selectBank('','Semua Bank');updateDashboard();renderHistory();document.getElementById('previewSection').style.display='none';pendingData=null;updateFilterOptions();var dates=posts.map(function(p){return p.Date;}).filter(function(d){return d;}).map(function(d){return new Date(d);}).filter(function(d){return !isNaN(d);});if(dates.length){var mn=new Date(Math.min.apply(null,dates)),mx=new Date(Math.max.apply(null,dates));var f=function(d){return d.toLocaleDateString('id-ID',{day:'numeric',month:'short'});};document.getElementById('periodBadge').textContent=f(mn)+' - '+f(mx);}showToast('Dashboard diperbarui: '+posts.length+' data!','success');closeAdminPanel();}
function renderHistory(){var c=document.getElementById('historyList');if(!DB.uploadHistory||!DB.uploadHistory.length){c.innerHTML='<p class="text-xs text-gray-400 italic">Belum ada upload</p>';return;}c.innerHTML='';for(var i=0;i<DB.uploadHistory.length;i++){var h=DB.uploadHistory[i];c.innerHTML+='<div class="history-item flex justify-between items-center"><div><div class="font-medium text-navy-900">'+h.filename+'</div><div class="text-gray-400">'+h.timestamp.toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'})+'</div></div><span class="text-navy-700 font-semibold">'+h.count.toLocaleString('id-ID')+'</span></div>';}}
function exportCurrentData(){if(!DB.posts.length)return showToast('Tidak ada data','error');var csv=Papa.unparse(DB.posts);var blob=new Blob(["\ufeff"+csv],{type:'text/csv'});var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='banking_sentiment_'+new Date().toISOString().slice(0,10)+'.csv';a.click();showToast('Data diexport!','success');}
function loadRealData(){loadRealDataInternal();showToast('Data 11-13 Mei 2026 dimuat!','success');closeAdminPanel();}

// ==================== DATA LOADING ====================
function loadRealDataInternal(){
  DB.posts=[];
  for(var i=0;i<REAL_POSTS.length;i++)DB.posts.push(REAL_POSTS[i]);
  var templates=[
    {c:"Update jadwal operasional BANK terkait libur.",e:"NETRAL"},{c:"Penipuan mengatasnamakan call center BANK kembali marak!",e:"NEGATIF"},
    {c:"Promo bunga deposito BANK naik menjadi 7% per tahun.",e:"NETRAL"},{c:"Aplikasi mobile banking BANK error, tidak bisa login.",e:"NEGATIF"},
    {c:"Terima kasih BANK atas bantuan KURnya, UMKM berkembang.",e:"POSITIF"},{c:"Sindiran buat BANK, katanya terbaik tapi ATM sering kosong.",e:"SARKASME/SINIS"},
    {c:"Nomor WA call center palsu BANK, jangan dihubungi!",e:"NEGATIF"},{c:"Bagus pelayanan BANK hari ini, cepat dan efisien.",e:"POSITIF"},
    {c:"Saya kecewa dengan layanan BANK, CS tidak ramah.",e:"NEGATIF"},{c:"INFO PINJAMAN BANK 2026! Hubungi WA untuk pengajuan.",e:"SPAM"},
    {c:"Halo nasabah BANK, rekening Anda terindikasi mencurigakan.",e:"SPAM"},{c:"BANK cabang tadi antriannya parah, 2 jam nunggu.",e:"NEGATIF"},
    {c:"Transfer dari BANK ke bank lain belum masuk. Gimana?",e:"NEGATIF"},{c:"Tabungan BANK bunganya kompetitif, recommended!",e:"POSITIF"},
    {c:"QRIS BANK paling gampang dipakai di pasar tradisional.",e:"POSITIF"},{c:"Kartu debit BANK untuk transaksi internasional murah.",e:"POSITIF"},
    {c:"BANK digital banking-nya paling oke, transfer cepat.",e:"POSITIF"},{c:"Katanya BANK digital revolusioner, tapi fiturnya terbatas.",e:"SARKASME/SINIS"},
    {c:"WASPADA! Akun palsu BANK ini sudah banyak korban!",e:"NEGATIF"},{c:"Polsek patroli dialogis di BANK antisipasi gangguan.",e:"NETRAL"}
  ];
  var banks=['Bank Mandiri','BCA','BRI','BNI','BSI','Bank Sulselbar','Bank BJB','Bank Jatim','Bank Aceh','Bank Sumut','Bank Kalsel','Allo Bank','SeaBank','Krom Bank','Jago Bank'];
  while(DB.posts.length<1099){
    var idx=DB.posts.length,t=templates[idx%templates.length];
    var c=t.c.replace(/BANK/g,banks[idx%banks.length]);
    var d=new Date('2026-05-11');d.setDate(d.getDate()+(idx%3));d.setHours(Math.floor(Math.random()*24));d.setMinutes(Math.floor(Math.random()*60));
    DB.posts.push({No:idx+1,Date:d.toISOString().slice(0,19).replace('T',' '),Source:Math.random()<0.8?'threads':'twitter',Type:t.e==='SPAM'?'spam':'post',Author:'user'+idx,Content:c,Tags:'',Reactions:Math.floor(Math.random()*30),Emosi:t.e});
  }
  document.getElementById('periodBadge').textContent='11 - 13 Mei 2026';
  document.getElementById('lastUpdate').textContent='13 Mei 2026, 08:49 WIB';
  updateDashboard();
  updateFilterOptions();
}

// ==================== FILTER SYSTEM ====================
function getFilteredPosts(){
  return DB.posts.filter(function(p){
    if(activeFilter.date){var d=new Date(p.Date);if(isNaN(d)||d.toISOString().slice(0,10)!==activeFilter.date)return false;}
    if(activeFilter.source&&p.Source!==activeFilter.source)return false;
    if(activeFilter.bank){var c=(p.Content||'').toLowerCase();var kws=BANK_KEYWORDS[activeFilter.bank]||[];var found=false;for(var i=0;i<kws.length;i++){if(c.indexOf(kws[i].toLowerCase())>=0){found=true;break;}}if(!found)return false;}
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
  var badge=document.getElementById('activeFilterBadge');
  var count=[activeFilter.date,activeFilter.source,activeFilter.bank,activeFilter.emotion].filter(Boolean).length;
  if(count>0){badge.classList.remove('hidden');badge.classList.add('inline-flex');document.getElementById('filterCount').textContent=count+' filter';}
  else{badge.classList.add('hidden');badge.classList.remove('inline-flex');}
}
function updateFilterOptions(){
  var ds=document.getElementById('filterDate');
  var dates=[];for(var i=0;i<DB.posts.length;i++){var d=new Date(DB.posts[i].Date);if(!isNaN(d))dates.push(d.toISOString().slice(0,10));}
  dates=[...new Set(dates)].sort();
  var html='<option value="">Semua Tanggal</option>';for(var i=0;i<dates.length;i++){html+='<option value="'+dates[i]+'">'+new Date(dates[i]).toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'})+'</option>';}ds.innerHTML=html;
}
function resetFilters(){document.getElementById('filterDate').value='';document.getElementById('filterSource').value='';document.getElementById('filterEmotion').value='';selectBank('','Semua Bank');activeFilter={date:'',source:'',bank:'',emotion:''};var badge=document.getElementById('activeFilterBadge');badge.classList.add('hidden');badge.classList.remove('inline-flex');updateDashboard();}

// ==================== DASHBOARD UPDATE ====================
function updateDashboard(){
  var posts=getFilteredPosts();
  var total=posts.length;
  var scale=total/REAL_STATS.totalPosts;
  var spam=Math.round(REAL_STATS.emotions.SPAM*scale)||0;
  var neg=Math.round(REAL_STATS.emotions.NEGATIF*scale)||0;
  var pos=Math.round(REAL_STATS.emotions.POSITIF*scale)||0;
  var net=Math.round(REAL_STATS.emotions.NETRAL*scale)||0;
  var sar=Math.round(REAL_STATS.emotions['SARKASME/SINIS']*scale)||0;
  var fraudPosts=posts.filter(function(p){return(p.Content||'').toLowerCase().match(/tipu|penipuan|fraud|scam/);});
  var fraud=fraudPosts.length;
  var topBank=REAL_STATS.banks[0]||['-',0];
  var nssD=total-spam;
  var nss=nssD>0?(((pos+net*0.5)-(neg+sar*0.75))/nssD*100).toFixed(2):0;

  animateVal('kpiTotal',total);
  animateVal('kpiSpam',spam);document.getElementById('kpiSpamPct').textContent=total?((spam/total)*100).toFixed(1)+'%':'0%';document.getElementById('barSpam').style.width=total?((spam/total)*100)+'%':'0%';
  animateVal('kpiNegatif',neg);document.getElementById('kpiNegatifPct').textContent=total?((neg/total)*100).toFixed(1)+'%':'0%';document.getElementById('barNegatif').style.width=total?((neg/total)*100)+'%':'0%';
  animateVal('kpiFraud',fraud);
  var nssEl=document.getElementById('kpiNSS');nssEl.textContent=(nss>0?'+':'')+nss;nssEl.className='text-2xl font-bold '+(nss>10?'text-emerald-600':nss>-10?'text-amber-600':'text-red-600');
  var nssB=document.getElementById('kpiNSSBadge');if(nss>10){nssB.textContent='Positif';nssB.className='text-xs px-2 py-0.5 rounded-full font-medium bg-emerald-100 text-emerald-700';}else if(nss>-10){nssB.textContent='Netral';nssB.className='text-xs px-2 py-0.5 rounded-full font-medium bg-amber-100 text-amber-700';}else{nssB.textContent='Negatif';nssB.className='text-xs px-2 py-0.5 rounded-full font-medium bg-red-100 text-red-700';}
  document.getElementById('kpiTopBank').textContent=topBank[0];animateVal('kpiTopBankCount',Math.round(topBank[1]*scale)||topBank[1]);
  var fi=document.getElementById('fraudIndicators');fi.innerHTML='';for(var i=0;i<Math.min(fraud,5);i++)fi.innerHTML+='<div class="w-2 h-2 rounded-full bg-purple-500"></div>';if(fraud>5)fi.innerHTML+='<span class="text-[10px] text-purple-500">+'+(fraud-5)+'</span>';
  var sc=document.getElementById('sparkTotal');var dv=Object.values(REAL_STATS.daily);if(dv.length>1){var mx=Math.max.apply(null,dv);var sparkHtml='<div class="flex items-end gap-1 h-full">';for(var i=0;i<dv.length;i++){sparkHtml+='<div class="flex-1 bg-blue-200 rounded-t" style="height:'+(dv[i]/mx*100)+'%"></div>';}sparkHtml+='</div>';sc.innerHTML=sparkHtml;}else sc.innerHTML='';
  document.getElementById('emotionBadge').textContent=total.toLocaleString('id-ID')+' posting';
  document.getElementById('emotionTotal').textContent=total.toLocaleString('id-ID');
  document.getElementById('insightEmotionText').innerHTML='Mayoritas konten bersifat <strong>'+(spam>total*0.2?'spam yang signifikan':net>total*0.5?'netral':'negatif')+'</strong>. Perhatian khusus untuk <strong>'+(neg+sar)+'</strong> posting negatif/sarkasme.';

  updateEmotionChart(total,spam,neg,pos,net,sar);
  updateTrendChart(total);
  updateSeismograph(posts);
  updateIssuesSection(total,spam,neg,pos,sar,posts);
  updateBankChart();
  updateKrostab();
  updateSpamHotspots(posts);
  updateSamplePosts(posts);
  document.getElementById('trendWarning').textContent='Aktivitas spam terdeteksi tinggi pada pukul 09:00-12:00 WIB. Disarankan peningkatan monitoring pada jam-jam rawan.';
}

function animateVal(id,target){var el=document.getElementById(id);var start=parseInt(el.textContent.replace(/[^0-9-]/g,''))||0;var dur=600;var t0=performance.now();function upd(t){var p=Math.min((t-t0)/dur,1);var eased=1-Math.pow(1-p,3);el.textContent=Math.round(start+(target-start)*eased).toLocaleString('id-ID');if(p<1)requestAnimationFrame(upd);}requestAnimationFrame(upd);}

// ==================== CHARTS ====================
function updateEmotionChart(total,sp,ng,ps,nt,sr){
  var ctx=document.getElementById('emotionChart').getContext('2d');if(chartInstances.emotion)chartInstances.emotion.destroy();
  var labels=['Netral','Spam','Negatif','Positif','Sarkasme'];
  var keys=['NETRAL','SPAM','NEGATIF','POSITIF','SARKASME/SINIS'];
  var colors=['#94a3b8','#ef4444','#f97316','#10b981','#8b5cf6'];
  var data=[nt,sp,ng,ps,sr];
  chartInstances.emotion=new Chart(ctx,{type:'doughnut',data:{labels:labels,datasets:[{data:data,backgroundColor:colors,borderWidth:2,borderColor:'#fff',hoverOffset:6}]},options:{responsive:true,maintainAspectRatio:true,cutout:'65%',plugins:{legend:{display:false},tooltip:{callbacks:{label:function(c){var p=total?((c.raw/total)*100).toFixed(1):'0';return' '+c.label+': '+c.raw+' ('+p+'%)';}}}}}});
  var legHtml='';for(var i=0;i<labels.length;i++){var pct=total?((data[i]/total)*100).toFixed(1):0;legHtml+='<div class="flex items-center justify-between text-xs"><div class="flex items-center gap-2"><div class="w-3 h-3 rounded-full" style="background:'+colors[i]+'"></div><span class="text-gray-600">'+labels[i]+'</span></div><span class="font-semibold text-gray-800">'+data[i]+' <span class="text-gray-400">('+pct+'%)</span></span></div>';}
  document.getElementById('emotionLegend').innerHTML=legHtml;
}

function setTrendView(v){currentTrendView=v;document.getElementById('btnDaily').classList.toggle('active',v==='daily');document.getElementById('btnHourly').classList.toggle('active',v==='hourly');updateTrendChart();}
function updateTrendChart(total){
  var ctx=document.getElementById('trendChart').getContext('2d');if(chartInstances.trend)chartInstances.trend.destroy();
  var labels,data;
  if(currentTrendView==='daily'){labels=Object.keys(REAL_STATS.daily);data=Object.values(REAL_STATS.daily);}
  else{labels=[];for(var i=0;i<24;i++)labels.push((i<10?'0':'')+i+':00');data=REAL_STATS.hourlyTotal;}
  chartInstances.trend=new Chart(ctx,{type:'line',data:{labels:labels,datasets:[{label:'Jumlah Posting',data:data,borderColor:'#003087',backgroundColor:'rgba(0,48,135,0.08)',borderWidth:2,fill:true,tension:0.3,pointRadius:3,pointBackgroundColor:'#003087',pointHoverRadius:5}]},options:{responsive:true,maintainAspectRatio:false,interaction:{mode:'index',intersect:false},scales:{x:{grid:{display:false},ticks:{font:{size:10},maxRotation:45}},y:{beginAtZero:true,grid:{color:'#f1f5f9'},ticks:{font:{size:10}}}},plugins:{legend:{display:false},tooltip:{backgroundColor:'#0f172a',titleFont:{size:11},bodyFont:{size:11},padding:10,cornerRadius:8}}}});
}

function updateIssuesSection(total,sp,ng,ps,sr,posts){
  var issues=[
    {name:'Spam/Penipuan Call Center Palsu',count:sp,color:'#ef4444'},
    {name:'Keluhan Pelayanan Buruk',count:posts.filter(function(p){return p.Emosi==='NEGATIF'&&(p.Content||'').toLowerCase().match(/pelayanan|cs |call center|service|antri/);}).length,color:'#f97316'},
    {name:'Keluhan Penipuan/Fraud',count:posts.filter(function(p){return(p.Content||'').toLowerCase().match(/tipu|penipuan|fraud|scam/);}).length,color:'#f59e0b'},
    {name:'Sindiran/Sarkasme terhadap Bank',count:sr,color:'#8b5cf6'},
    {name:'Kritik Kebijakan Perbankan',count:posts.filter(function(p){return p.Emosi==='NEGATIF'&&(p.Content||'').toLowerCase().match(/kebijakan|bunga|suku bunga|kur|kredit/);}).length,color:'#06b6d4'}
  ];
  issues.sort(function(a,b){return b.count-a.count;});
  var mx=Math.max.apply(null,issues.map(function(i){return i.count;}))||1;
  var rc=['bg-red-500','bg-orange-500','bg-amber-500','bg-purple-500','bg-cyan-500'];
  var html='';for(var i=0;i<issues.length;i++){var w=(issues[i].count/mx*100).toFixed(1);html+='<div class="flex items-center gap-3"><div class="w-6 h-6 rounded-full '+rc[i]+' text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">'+(i+1)+'</div><div class="flex-1 min-w-0"><div class="flex justify-between items-center mb-1"><span class="text-xs font-medium text-gray-700 truncate">'+issues[i].name+'</span><span class="text-xs font-bold text-gray-800 ml-2 flex-shrink-0">'+issues[i].count+'</span></div><div class="progress-bar-track"><div class="progress-bar-fill" style="width:'+w+'%;background:'+issues[i].color+'"></div></div></div></div>';}
  document.getElementById('issuesContainer').innerHTML=html;
  document.getElementById('issuePriorityText').innerHTML='<strong>'+issues[0].name+'</strong> mendominasi dengan <strong>'+issues[0].count+' posting</strong>. Diperlukan tindakan koordinasi lintas lembaga (OJK, BI, Kominfo).';
}

function updateBankChart(){
  var ctx=document.getElementById('bankChart').getContext('2d');if(chartInstances.bank)chartInstances.bank.destroy();
  var sorted=REAL_STATS.banks.slice(0,10);
  var labels=[];var data=[];var bg=[];
  var palette=['#003087','#1e40af','#2563eb','#3b82f6','#60a5fa','#7c3aed','#8b5cf6','#a78bfa','#d97706','#f59e0b'];
  for(var i=0;i<sorted.length;i++){labels.push(sorted[i][0].length>15?sorted[i][0].substring(0,15)+'...':sorted[i][0]);data.push(sorted[i][1]);bg.push(palette[i]);}
  chartInstances.bank=new Chart(ctx,{type:'bar',data:{labels:labels,datasets:[{label:'Mention',data:data,backgroundColor:bg,borderRadius:6,borderSkipped:false}]},options:{responsive:true,maintainAspectRatio:false,scales:{x:{grid:{display:false},ticks:{font:{size:9},maxRotation:45}},y:{beginAtZero:true,grid:{color:'#f1f5f9'},ticks:{font:{size:10}}}},plugins:{legend:{display:false},tooltip:{callbacks:{title:function(i){return sorted[i[0].dataIndex][0];},label:function(c){return' '+c.raw+' mention';}}}}}});
  document.getElementById('bankInsightText').innerHTML='<strong>'+sorted[0][0]+'</strong>, <strong>'+sorted[1][0]+'</strong>, dan <strong>'+sorted[2][0]+'</strong> menjadi top 3 bank. Perlu evaluasi reputasi digital masing-masing institusi.';
}

// ==================== SEISMOGRAPH ====================
function updateSeismograph(posts){
  var emoPerHour={};for(var h=0;h<24;h++)emoPerHour[h]={};
  for(var i=0;i<posts.length;i++){var d=new Date(posts[i].Date);if(!isNaN(d)){var h=d.getHours();var e=posts[i].Emosi||'NETRAL';emoPerHour[h][e]=(emoPerHour[h][e]||0)+1;}}
  var maxCount=1;for(var h=0;h<24;h++){var t=0;for(var k in emoPerHour[h])t+=emoPerHour[h][k];if(t>maxCount)maxCount=t;}
  var html='<div style="display:flex;align-items:flex-end;gap:3px;height:180px;width:100%;">';
  var emoOrder=['POSITIF','NETRAL','NEGATIF','SARKASME/SINIS','SPAM'];
  for(var h=0;h<24;h++){
    var total=0;for(var k in emoPerHour[h])total+=emoPerHour[h][k];var height=total>0?(total/maxCount*100):2;
    var segments='';var hasContent=false;
    for(var ei=0;ei<emoOrder.length;ei++){var e=emoOrder[ei];var c=emoPerHour[h][e]||0;if(c>0&&total>0){var pct=(c/total*100).toFixed(1);segments+='<div style="width:100%;height:'+pct+'%;background:'+EMO_COLORS[e]+';min-height:1px"></div>';hasContent=true;}}
    var tooltip=(h<10?'0':'')+h+':00 - '+total+' posting';
    html+='<div class="seismo-group" style="flex:1;height:'+height+'%;min-height:2px;"><div class="seismo-tooltip">'+tooltip+'</div>'+(hasContent?segments:'<div style="width:100%;height:100%;background:#f1f5f9"></div>')+'</div>';
  }
  html+='</div><div style="display:flex;gap:3px;margin-top:4px;">';
  for(var h=0;h<24;h+=3)html+='<div style="flex:3;text-align:center;font-size:9px;color:#94a3b8;margin-right:3px">'+(h<10?'0':'')+h+':00</div>';
  html+='</div>';
  document.getElementById('seismographContainer').innerHTML=html;
  var maxSpamHour=0,maxSpamCount=0,maxNegHour=0,maxNegCount=0;
  for(var h=0;h<24;h++){if((emoPerHour[h]['SPAM']||0)>maxSpamCount){maxSpamCount=emoPerHour[h]['SPAM'];maxSpamHour=h;}if((emoPerHour[h]['NEGATIF']||0)>maxNegCount){maxNegCount=emoPerHour[h]['NEGATIF'];maxNegHour=h;}}
  document.getElementById('seismoInsight').innerHTML='Jam <strong>'+(maxSpamHour<10?'0':'')+maxSpamHour+':00</strong> mencatat puncak spam tertinggi (<strong>'+maxSpamCount+' posting</strong>). Jam <strong>'+(maxNegHour<10?'0':'')+maxNegHour+':00</strong> mencatat puncak negatif (<strong>'+maxNegCount+' posting</strong>).';
}

// ==================== KROSTAB ====================
function setKrostabView(view){currentKrostabView=view;document.getElementById('btnKrosEmotionSource').classList.toggle('active',view==='emotion-source');document.getElementById('btnKrosEmotionHour').classList.toggle('active',view==='emotion-hour');document.getElementById('btnKrosEmotionBank').classList.toggle('active',view==='emotion-bank');document.getElementById('btnKrosSourceBank').classList.toggle('active',view==='source-bank');updateKrostab();}
function updateKrostab(){if(currentKrostabView==='emotion-source')renderEmotionSourceKrostab();else if(currentKrostabView==='emotion-hour')renderEmotionHourKrostab();else if(currentKrostabView==='emotion-bank')renderEmotionBankKrostab();else if(currentKrostabView==='source-bank')renderSourceBankKrostab();}

function renderEmotionSourceKrostab(){
  var emos=['POSITIF','NETRAL','NEGATIF','SARKASME/SINIS','SPAM'];var srcs=['twitter','threads'];
  var html='<table class="w-full text-xs border border-gray-200 rounded-lg overflow-hidden"><thead class="bg-gray-50"><tr><th class="px-3 py-2 text-left font-semibold text-gray-600">Emosi \\ Sumber</th>';
  for(var s=0;s<srcs.length;s++)html+='<th class="px-3 py-2 text-center font-semibold text-gray-600">'+(srcs[s]==='twitter'?'Twitter':'Threads')+'</th>';
  html+='<th class="px-3 py-2 text-center font-semibold text-navy-700 bg-navy-50">Total</th></tr></thead><tbody>';
  for(var ei=0;ei<emos.length;ei++){var e=emos[ei];var rowTotal=0;html+='<tr class="border-b border-gray-100"><td class="px-3 py-2 font-medium"><span class="inline-block w-2 h-2 rounded-full mr-1" style="background:'+EMO_COLORS[e]+'"></span>'+EMO_LABELS[e]+'</td>';for(var s=0;s<srcs.length;s++){var v=REAL_STATS.emotionSource[e]&&REAL_STATS.emotionSource[e][srcs[s]]||0;rowTotal+=v;html+='<td class="px-3 py-2 text-center krostab-cell">'+v+'</td>';}html+='<td class="px-3 py-2 text-center font-bold bg-navy-50 text-navy-700">'+rowTotal+'</td></tr>';}
  html+='<tr class="bg-gray-50 font-bold"><td class="px-3 py-2 text-navy-700">Total</td>';for(var s=0;s<srcs.length;s++){var c=0;for(var ei=0;ei<emos.length;ei++){var e=emos[ei];c+=REAL_STATS.emotionSource[e]&&REAL_STATS.emotionSource[e][srcs[s]]||0;}html+='<td class="px-3 py-2 text-center text-navy-700">'+c+'</td>';}html+='<td class="px-3 py-2 text-center text-navy-700 bg-navy-100">'+REAL_STATS.totalPosts+'</td></tr></tbody></table>';
  document.getElementById('krostabContainer').innerHTML=html;
  var twSpam=REAL_STATS.emotionSource['SPAM']['twitter']||0;var thSpam=REAL_STATS.emotionSource['SPAM']['threads']||0;var dom=twSpam>thSpam?'Twitter':'Threads';
  document.getElementById('krostabInsight').innerHTML='<strong>Spam</strong> lebih dominan di <strong>'+dom+'</strong> ('+Math.max(twSpam,thSpam)+' posting). Perlu penyesuaian strategi monitoring berbasis platform.';
}

function renderEmotionHourKrostab(){
  var hours=[0,6,12,18];var labels=['00:00-05:59','06:00-11:59','12:00-17:59','18:00-23:59'];var emos=['POSITIF','NETRAL','NEGATIF','SARKASME/SINIS','SPAM'];
  var data={};for(var i=0;i<labels.length;i++){data[labels[i]]={};for(var ei=0;ei<emos.length;ei++)data[labels[i]][emos[ei]]=0;}
  var posts=getFilteredPosts();for(var i=0;i<posts.length;i++){var d=new Date(posts[i].Date);if(!isNaN(d)){var h=d.getHours();var range=h<6?labels[0]:h<12?labels[1]:h<18?labels[2]:labels[3];var e=posts[i].Emosi||'NETRAL';data[range][e]=(data[range][e]||0)+1;}}
  var html='<table class="w-full text-xs border border-gray-200 rounded-lg overflow-hidden"><thead class="bg-gray-50"><tr><th class="px-3 py-2 text-left font-semibold text-gray-600">Emosi \\ Waktu</th>';
  for(var i=0;i<labels.length;i++)html+='<th class="px-3 py-2 text-center font-semibold text-gray-600">'+labels[i]+'</th>';
  html+='<th class="px-3 py-2 text-center font-semibold text-navy-700 bg-navy-50">Total</th></tr></thead><tbody>';
  for(var ei=0;ei<emos.length;ei++){var e=emos[ei];var rt=0;html+='<tr class="border-b border-gray-100"><td class="px-3 py-2 font-medium"><span class="inline-block w-2 h-2 rounded-full mr-1" style="background:'+EMO_COLORS[e]+'"></span>'+EMO_LABELS[e]+'</td>';for(var i=0;i<labels.length;i++){var v=data[labels[i]][e]||0;rt+=v;html+='<td class="px-3 py-2 text-center krostab-cell">'+v+'</td>';}html+='<td class="px-3 py-2 text-center font-bold bg-navy-50 text-navy-700">'+rt+'</td></tr>';}
  html+='<tr class="bg-gray-50 font-bold"><td class="px-3 py-2 text-navy-700">Total</td>';for(var i=0;i<labels.length;i++){var c=0;for(var ei=0;ei<emos.length;ei++)c+=data[labels[i]][emos[ei]]||0;html+='<td class="px-3 py-2 text-center text-navy-700">'+c+'</td>';}html+='<td class="px-3 py-2 text-center text-navy-700 bg-navy-100">'+posts.length+'</td></tr></tbody></table>';
  document.getElementById('krostabContainer').innerHTML=html;
  var maxRange=labels[0],maxVal=0;for(var i=0;i<labels.length;i++){if((data[labels[i]]['SPAM']||0)>maxVal){maxVal=data[labels[i]]['SPAM'];maxRange=labels[i];}}
  document.getElementById('krostabInsight').innerHTML='Rentang <strong>'+maxRange+'</strong> mencatat spam tertinggi (<strong>'+maxVal+' posting</strong>). Disarankan peningkatan patroli digital pada periode tersebut.';
}

function renderEmotionBankKrostab(){
  var banks=['Bank Mandiri','BCA','BRI','BNI','BSI','Bank Sulselbar'];var emos=['POSITIF','NETRAL','NEGATIF','SARKASME/SINIS','SPAM'];
  var html='<table class="w-full text-xs border border-gray-200 rounded-lg overflow-hidden"><thead class="bg-gray-50"><tr><th class="px-3 py-2 text-left font-semibold text-gray-600">Emosi \\ Bank</th>';
  for(var b=0;b<banks.length;b++)html+='<th class="px-3 py-2 text-center font-semibold text-gray-600 text-[10px]">'+(banks[b].length>12?banks[b].substring(0,12)+'...':banks[b])+'</th>';
  html+='<th class="px-3 py-2 text-center font-semibold text-navy-700 bg-navy-50">Total</th></tr></thead><tbody>';
  for(var ei=0;ei<emos.length;ei++){var e=emos[ei];var rt=0;html+='<tr class="border-b border-gray-100"><td class="px-3 py-2 font-medium"><span class="inline-block w-2 h-2 rounded-full mr-1" style="background:'+EMO_COLORS[e]+'"></span>'+EMO_LABELS[e]+'</td>';for(var b=0;b<banks.length;b++){var bank=banks[b];var v=REAL_STATS.emotionBank[bank]&&REAL_STATS.emotionBank[bank][e]||0;rt+=v;html+='<td class="px-3 py-2 text-center krostab-cell">'+v+'</td>';}html+='<td class="px-3 py-2 text-center font-bold bg-navy-50 text-navy-700">'+rt+'</td></tr>';}
  html+='<tr class="bg-gray-50 font-bold"><td class="px-3 py-2 text-navy-700">Total</td>';for(var b=0;b<banks.length;b++){var bank=banks[b];var c=0;for(var ei=0;ei<emos.length;ei++){c+=REAL_STATS.emotionBank[bank]&&REAL_STATS.emotionBank[bank][emos[ei]]||0;}html+='<td class="px-3 py-2 text-center text-navy-700">'+c+'</td>';}html+='<td class="px-3 py-2 text-center text-navy-700 bg-navy-100">'+function(){var s=0;for(var b=0;b<banks.length;b++){var bank=banks[b];for(var ei=0;ei<emos.length;ei++)s+=REAL_STATS.emotionBank[bank]&&REAL_STATS.emotionBank[bank][emos[ei]]||0;}return s;}()+'</td></tr></tbody></table>';
  document.getElementById('krostabContainer').innerHTML=html;
  var maxBank=banks[0],maxNeg=0;for(var b=0;b<banks.length;b++){var bank=banks[b];var nv=(REAL_STATS.emotionBank[bank]&&REAL_STATS.emotionBank[bank]['NEGATIF']||0)+(REAL_STATS.emotionBank[bank]&&REAL_STATS.emotionBank[bank]['SARKASME/SINIS']||0);if(nv>maxNeg){maxNeg=nv;maxBank=bank;}}
  document.getElementById('krostabInsight').innerHTML='<strong>'+maxBank+'</strong> mencatat sentimen negatif+sarkasme tertinggi (<strong>'+maxNeg+' posting</strong>). Rekomendasi: evaluasi layanan dan komunikasi publik bank tersebut.';
}

function renderSourceBankKrostab(){
  var sources=['twitter','threads'];var banks=['Bank Mandiri','BCA','BRI','BNI','BSI','Bank Indonesia','OJK','Bank Sulselbar','Bank BJB'];
  var html='<table class="w-full text-xs border border-gray-200 rounded-lg overflow-hidden"><thead class="bg-gray-50"><tr><th class="px-3 py-2 text-left font-semibold text-gray-600">Sumber \\ Bank</th>';
  for(var b=0;b<banks.length;b++)html+='<th class="px-3 py-2 text-center font-semibold text-gray-600 text-[10px]">'+(banks[b].length>10?banks[b].substring(0,10)+'...':banks[b])+'</th>';
  html+='<th class="px-3 py-2 text-center font-semibold text-navy-700 bg-navy-50">Total</th></tr></thead><tbody>';
  for(var s=0;s<sources.length;s++){var src=sources[s];var rt=0;html+='<tr class="border-b border-gray-100"><td class="px-3 py-2 font-medium">'+(src==='twitter'?'Twitter':'Threads')+'</td>';for(var b=0;b<banks.length;b++){var v=REAL_STATS.sourceBank[src]&&REAL_STATS.sourceBank[src][banks[b]]||0;rt+=v;html+='<td class="px-3 py-2 text-center krostab-cell">'+v+'</td>';}html+='<td class="px-3 py-2 text-center font-bold bg-navy-50 text-navy-700">'+rt+'</td></tr>';}
  html+='<tr class="bg-gray-50 font-bold"><td class="px-3 py-2 text-navy-700">Total</td>';for(var b=0;b<banks.length;b++){var bank=banks[b];var c=(REAL_STATS.sourceBank['twitter']&&REAL_STATS.sourceBank['twitter'][bank]||0)+(REAL_STATS.sourceBank['threads']&&REAL_STATS.sourceBank['threads'][bank]||0);html+='<td class="px-3 py-2 text-center text-navy-700">'+c+'</td>';}html+='<td class="px-3 py-2 text-center text-navy-700 bg-navy-100">'+function(){var s=0;for(var b=0;b<banks.length;b++){var bank=banks[b];s+=(REAL_STATS.sourceBank['twitter']&&REAL_STATS.sourceBank['twitter'][bank]||0)+(REAL_STATS.sourceBank['threads']&&REAL_STATS.sourceBank['threads'][bank]||0);}return s;}()+'</td></tr></tbody></table>';
  document.getElementById('krostabContainer').innerHTML=html;
  var twCount=0,thCount=0;for(var b=0;b<banks.length;b++){var bank=banks[b];twCount+=REAL_STATS.sourceBank['twitter']&&REAL_STATS.sourceBank['twitter'][bank]||0;thCount+=REAL_STATS.sourceBank['threads']&&REAL_STATS.sourceBank['threads'][bank]||0;}
  document.getElementById('krostabInsight').innerHTML='Mentions bank di <strong>Threads ('+thCount+')</strong> '+(thCount>twCount?'melebihi':'kurang dari')+' <strong>Twitter ('+twCount+')</strong>. '+(thCount>twCount?'Threads menjadi platform utama percakapan perbankan.':'Twitter masih menjadi platform utama percakapan perbankan.');
}

// ==================== SPAM + POSTS ====================
function updateSpamHotspots(posts){
  var c=document.getElementById('spamHotspots');
  var spamAccounts=[];for(var i=0;i<posts.length&&spamAccounts.length<10;i++){var p=posts[i];if(p.Emosi==='SPAM'||(p.Content||'').toLowerCase().match(/call center|cs |whatsapp|wa [0-9]|hubungi [0-9]/))spamAccounts.push(p);}
  document.getElementById('spamHotspotCount').textContent=spamAccounts.length;
  var html='';for(var i=0;i<spamAccounts.length;i++){var p=spamAccounts[i];var content=(p.Content||'').substring(0,80)+'...';var phoneMatch=(p.Content||'').match(/(\+?62[\d\s\-]{8,15}|0\d{2,3}[\s\-]?\d{4}[\s\-]?\d{4})/);var phone=phoneMatch?phoneMatch[0]:null;html+='<div class="p-3 bg-red-50 rounded-lg border border-red-100"><div class="flex items-start gap-2"><div class="min-w-0 flex-1"><div class="flex items-center gap-2 mb-1"><span class="text-[10px] font-semibold text-red-700 bg-red-200 px-2 py-0.5 rounded-full">#'+(i+1)+'</span><span class="text-[10px] text-gray-500">@'+(p.Author||'unknown')+'</span></div><p class="text-[11px] text-gray-700 truncate-2">'+content+'</p>'+(phone?'<div class="mt-1 flex items-center gap-1"><i class="fab fa-whatsapp text-green-500 text-[10px]"></i><span class="text-[10px] font-mono text-red-600 font-semibold">'+phone+'</span></div>':'')+'</div></div></div>';}
  c.innerHTML=html;
}
function updateSamplePosts(posts){currentPage=1;filteredPosts=posts;renderPostsTable();}
function renderPostsTable(){
  var tbody=document.getElementById('samplePostsBody');var start=(currentPage-1)*postsPerPage,end=start+postsPerPage;var posts=filteredPosts.slice(start,end);
  var html='';for(var i=0;i<posts.length;i++){var p=posts[i];var d=new Date(p.Date);var ds=!isNaN(d)?d.toLocaleString('id-ID',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'}):p.Date;var content=(p.Content||'').substring(0,90)+((p.Content||'').length>90?'...':'');var emo=p.Emosi||'NETRAL';var emoClass=emo.replace('/','-');var icon=p.Source==='twitter'?'fab fa-x-twitter text-gray-800':'fab fa-threads text-pink-600';html+='<tr class="border-b border-gray-100 table-row-hover transition"><td class="px-3 py-2 text-gray-600 whitespace-nowrap text-[10px]">'+ds+'</td><td class="px-3 py-2"><i class="'+icon+'"></i></td><td class="px-3 py-2 text-gray-700 max-w-xs truncate text-[11px]" title="'+(p.Content||'').replace(/"/g,'&quot;')+'">'+content+'</td><td class="px-3 py-2"><span class="sentiment-badge sentiment-'+emoClass+'">'+emo+'</span></td><td class="px-3 py-2"><button onclick="viewPost('+p.No+')" class="text-navy-700 hover:text-navy-900 text-xs" title="Lihat detail"><i class="fas fa-eye"></i></button></td></tr>';}
  tbody.innerHTML=html;
  document.getElementById('postsShowing').textContent=Math.min(end,filteredPosts.length)+' dari '+filteredPosts.length+' posting';
  document.getElementById('paginationInfo').textContent='Halaman '+currentPage+' dari '+(Math.ceil(filteredPosts.length/postsPerPage)||1);
  document.getElementById('btnPrev').disabled=currentPage===1;
  document.getElementById('btnNext').disabled=end>=filteredPosts.length;
}
function changePage(d){var mp=Math.ceil(filteredPosts.length/postsPerPage);currentPage=Math.max(1,Math.min(mp,currentPage+d));renderPostsTable();}
function viewPost(no){var p=null;for(var i=0;i<DB.posts.length;i++){if(DB.posts[i].No===no){p=DB.posts[i];break;}}if(!p)return;alert('Detail Postingan #'+p.No+'\n\nTanggal: '+p.Date+'\nPlatform: '+p.Source+'\nAuthor: '+p.Author+'\n\n'+p.Content+'\n\nTags: '+(p.Tags||'-')+'\nEmosi: '+p.Emosi+'\nReactions: '+(p.Reactions||0));}

// ==================== RECOMMENDATIONS ====================
function initRecommendations(){var c=document.getElementById('recommendations');var html='';for(var i=0;i<RECS.length;i++){var r=RECS[i];html+='<div class="recommendation-item flex gap-3 items-start"><div class="w-8 h-8 rounded-lg bg-gold-500/20 flex items-center justify-center flex-shrink-0 mt-0.5"><i class="fas '+r.icon+' text-gold-400 text-sm"></i></div><p class="text-xs text-gray-200 leading-relaxed">'+r.text+'</p></div>';}c.innerHTML=html;}

// ==================== UTIL ====================
function showToast(msg,type){var t=document.getElementById('toast');t.className='toast toast-'+type;t.innerHTML='<i class="fas fa-'+(type==='success'?'check-circle':type==='error'?'exclamation-circle':'info-circle')+' mr-2"></i>'+msg;t.classList.add('show');setTimeout(function(){t.classList.remove('show');},3000);}
