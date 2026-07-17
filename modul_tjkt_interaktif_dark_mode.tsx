import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, ChevronRight, ChevronLeft, CheckCircle2, XCircle, 
  Menu, X, Volume2, VolumeX, Monitor, Cpu, Globe, ShieldCheck, 
  Cloud, HardDrive, Wifi, Code, Sun, Moon, LayoutDashboard
} from 'lucide-react';

// --- DATA MATERI LENGKAP ---
const chapters = [
  {
    id: 1,
    title: "TEKNOLOGI INFORMASI",
    subtitle: "Mengenal Dunia Digital yang Mengubah Peradaban Manusia",
    icon: <Monitor className="w-5 h-5" />,
    content: [
      { type: "intro", text: "Bayangkan... Dahulu seseorang harus berjalan berkilo-kilometer untuk mengirim kabar. 📨 Surat butuh berhari-hari. Namun hari ini... 📱 Kita dapat berbicara dengan siapa saja di seluruh dunia. 🤖 Bahkan bertanya kepada Artificial Intelligence. Semua ini lahir dari 🚀 Teknologi Informasi (TI)." },
      { type: "concept", title: "A. APA ITU TEKNOLOGI?", text: "Berasal dari bahasa Yunani: Techne (Keahlian/Keterampilan) & Logos (Ilmu Pengetahuan). \n\nTeknologi adalah: Ilmu yang digunakan manusia untuk menciptakan alat atau sistem yang dapat mempermudah pekerjaan dan meningkatkan kualitas hidup. \n\n🌍 Contoh: Dulu mengambil air dari sumur 🪣, sekarang mesin pompa air 🚰. Dulu menghitung dengan sempoa 🧮, sekarang komputer 💻." },
      { type: "concept", title: "B. DATA & C. INFORMASI", text: "📦 DATA adalah: Fakta mentah yang belum memiliki arti dan belum diolah (Contoh: Angka 90, 85, huruf, suara, gambar).\n\n📈 INFORMASI adalah: Data yang telah diproses sehingga memiliki arti dan dapat digunakan untuk mengambil keputusan (Contoh: Rata-rata 85 = ✅ Lulus).\n\n👨‍🍳 Analogi: Beras (Data) -> Dimasak (Proses) -> Nasi Goreng (Informasi)." },
      { type: "concept", title: "D. TEKNOLOGI INFORMASI & KOMPONENNYA", text: "Teknologi Informasi adalah teknologi yang digunakan untuk mengumpulkan, mengolah, menyimpan, mengirimkan, dan menyebarkan informasi.\n\nSiklus: 📥 Input → ⚙ Process → 📤 Output → 💾 Storage → 🌐 Distribution.\n\nKomponen Utama:\n1️⃣ HARDWARE: Perangkat fisik (Monitor, Keyboard, RAM).\n2️⃣ SOFTWARE: Program yang mengatur komputer (Windows, Word).\n3️⃣ BRAINWARE: Manusia yang menggunakan sistem komputer." }
    ],
    quiz: [
      { 
        question: "Teknologi Informasi adalah....", 
        options: ["Teknologi untuk membuat komputer", "Teknologi internet", "Teknologi untuk mengolah dan menyebarkan informasi", "Teknologi jaringan komputer"], 
        answer: 2 
      }
    ]
  },
  {
    id: 2,
    title: "SEJARAH KOMPUTER",
    subtitle: "Dari Mesin Raksasa Hingga Kecerdasan Buatan",
    icon: <HardDrive className="w-5 h-5" />,
    content: [
      { type: "intro", text: "Komputer pertama 🏠 ukurannya sebesar rumah, beratnya 30 TON, cepat panas, dan boros listrik. Bagaimana bisa sekecil smartphone sekarang? Inilah perjalanan evolusi komputer." },
      { type: "concept", title: "Perjalanan Generasi Komputer", text: "💡 Gen 1 (1940-1956): Vacuum Tube (Tabung Vakum). Sebesar rumah, cepat panas (Contoh: ENIAC).\n🔋 Gen 2 (1956-1963): Transistor. Lebih kecil, cepat, dan dingin.\n⚙ Gen 3 (1964-1971): IC (Integrated Circuit). Ratusan transistor dalam satu chip kecil.\n🧠 Gen 4 (1971-Sekarang): Mikroprosesor. Sebuah chip yang berisi CPU lengkap dalam satu rangkaian.\n🤖 Gen 5 (Sekarang & Masa Depan): Artificial Intelligence (AI). Komputer mampu meniru kecerdasan manusia." }
    ],
    quiz: [
      { question: "Komponen utama komputer generasi pertama adalah....", options: ["IC", "Mikroprosesor", "Vacuum Tube", "AI"], answer: 2 },
      { question: "Apa yang dimaksud Mikroprosesor?", options: ["Perangkat input", "Chip yang berisi CPU", "Media penyimpanan", "Kabel jaringan"], answer: 1 }
    ]
  },
  {
    id: 3,
    title: "PERANGKAT KERAS (HARDWARE)",
    subtitle: "Mengenal Organ Tubuh Komputer",
    icon: <Cpu className="w-5 h-5" />,
    content: [
      { type: "intro", text: "Mengapa komputer bisa menyala? Mengapa game bisa berjalan? Karena ada komponen fisik yang saling bekerja sama seperti organ tubuh manusia." },
      { type: "concept", title: "Hardware Ibarat Tubuh Manusia", text: "🧠 CPU = Otak\n👀 Monitor = Mata\n⌨ Keyboard = Tangan\n💾 Harddisk = Ingatan jangka panjang\n📝 RAM = Ingatan jangka pendek (Meja belajar)." },
      { type: "concept", title: "Jenis Hardware", text: "1️⃣ Input Device: Memasukkan data (Keyboard, Mouse, Mic).\n2️⃣ Process Device: Mengolah data (CPU, Motherboard). CPU memiliki ALU (Menghitung) dan Control Unit (Pengatur).\n3️⃣ Output Device: Menampilkan hasil (Monitor, Printer, Speaker).\n4️⃣ Storage Device: Menyimpan data (HDD, SSD, Flashdisk). SSD ⚡ jauh lebih cepat dan senyap dibanding HDD yang memakai piringan." }
    ],
    quiz: [
      { question: "Fungsi utama RAM adalah...", options: ["Menyimpan data permanen", "Menyimpan data sementara", "Menghubungkan internet", "Menampilkan gambar"], answer: 1 },
      { question: "Manakah yang termasuk output device?", options: ["Keyboard", "Mouse", "Monitor", "Scanner"], answer: 2 }
    ]
  },
  {
    id: 4,
    title: "SISTEM BILANGAN & DATA",
    subtitle: "Bahasa Rahasia Komputer (Biner)",
    icon: <Code className="w-5 h-5" />,
    content: [
      { type: "intro", text: "Komputer tidak mengenal Bahasa Indonesia, gambar, atau video. Komputer hanya mengenal angka 0️⃣ dan 1️⃣. Bagaimana cara kerjanya?" },
      { type: "concept", title: "Sistem Bilangan Komputer", text: "Komputer hanya mengenal 0 dan 1 karena listrik hanya punya 2 kondisi (1=Ada arus, 0=Tidak ada arus).\n\n🟢 Biner: Basis 2 (0, 1)\n🟠 Oktal: Basis 8 (0-7)\n🔵 Desimal: Basis 10 (0-9)\n🟣 Heksadesimal: Basis 16 (0-9, A-F. Contoh: #FFFFFF = Putih)." },
      { type: "concept", title: "Satuan Data Digital", text: "BIT = Satuan terkecil (0 atau 1).\nBYTE = 8 Bit (1 huruf = 1 byte).\n\nUrutan: BIT ➡ BYTE ➡ KB ➡ MB ➡ GB ➡ TB.\n1 KB = 1024 Byte\n1 MB = 1024 KB\n1 GB = 1024 MB." }
    ],
    quiz: [
      { question: "Sistem bilangan yang digunakan komputer adalah...", options: ["Desimal", "Oktal", "Biner", "Hexadesimal"], answer: 2 },
      { question: "2048 KB sama dengan...", options: ["1 MB", "2 MB", "4 MB", "8 MB"], answer: 1 }
    ]
  },
  {
    id: 6,
    title: "JARINGAN KOMPUTER",
    subtitle: "LAN, MAN, dan WAN",
    icon: <Globe className="w-5 h-5" />,
    content: [
      { type: "intro", text: "Bagaimana pesan WhatsApp bisa sampai ke temanmu dalam hitungan detik? Jawabannya adalah Jaringan Komputer." },
      { type: "concept", title: "Jangkauan Jaringan", text: "🏠 LAN (Local Area Network): Area kecil seperti rumah, lab sekolah, kantor.\n🏙 MAN (Metropolitan Area Network): Menghubungkan antar sekolah/kantor dalam satu kota (10-50 km).\n🌍 WAN (Wide Area Network): Area sangat luas antar negara/benua. Contoh WAN terbesar adalah INTERNET." }
    ],
    quiz: [
      { question: "Jaringan yang digunakan dalam sebuah lab sekolah disebut...", options: ["WAN", "MAN", "LAN", "PAN"], answer: 2 },
      { question: "Jaringan komputer terbesar di dunia adalah...", options: ["LAN", "MAN", "Internet", "Bluetooth"], answer: 2 }
    ]
  },
  {
    id: 10,
    title: "CYBER SECURITY",
    subtitle: "Ilmu Bertahan Hidup di Dunia Digital",
    icon: <ShieldCheck className="w-5 h-5" />,
    content: [
      { type: "intro", text: "Cyber Security adalah upaya melindungi komputer, jaringan, dan data dari ancaman siber. Aset paling berharga saat ini adalah 📦 DATA." },
      { type: "concept", title: "Jenis Malware & Ancaman", text: "🦠 Virus: Menggandakan diri & merusak file.\n🪱 Worm: Menyebar sendiri lewat jaringan tanpa bantuan user.\n🐴 Trojan: Menyamar sebagai program baik (Kuda Troya).\n🔒 Ransomware: Mengunci/enkripsi file dan meminta 💰 tebusan.\n🎣 Phishing: Menipu pengguna agar memberikan data (Password/OTP) lewat link palsu.\n🧱 Firewall: Tembok penyaring koneksi masuk & keluar." }
    ],
    quiz: [
      { question: "Malware yang menyamar sebagai program baik disebut...", options: ["Trojan", "Worm", "Virus", "Firewall"], answer: 0 },
      { question: "Proses mengubah data menjadi kode rahasia disebut...", options: ["Booting", "Scanning", "Enkripsi", "Backup"], answer: 2 }
    ]
  },
  {
    id: 15,
    title: "TOPOLOGI JARINGAN",
    subtitle: "Merancang Arsitektur Aliran Data",
    icon: <Wifi className="w-5 h-5" />,
    content: [
      { type: "intro", text: "Topologi menentukan bagaimana perangkat dalam jaringan dihubungkan. Tata letak yang salah bisa membuat jaringan lambat dan mudah rusak." },
      { type: "concept", title: "Bentuk-Bentuk Topologi", text: "⭐ STAR: Semua perangkat terhubung ke satu Switch pusat (Paling populer, mudah diperbaiki).\n🚌 BUS: Memakai satu kabel utama (Backbone). Jika putus, semua mati.\n⭕ RING: Membentuk lingkaran, data berputar memakai Token.\n🕸 MESH: Setiap perangkat saling terhubung langsung (Sangat aman, tapi mahal).\n🌳 TREE: Gabungan Star dan Bus (bercabang seperti pohon)." }
    ],
    quiz: [
      { question: "Topologi yang menggunakan perangkat pusat (Switch) disebut...", options: ["Bus", "Ring", "Star", "Mesh"], answer: 2 },
      { question: "Kabel utama pada Topologi Bus disebut...", options: ["UTP", "Backbone", "RJ45", "Token"], answer: 1 }
    ]
  },
  {
    id: 29,
    title: "CLOUD COMPUTING & IoT",
    subtitle: "Masa Depan Komputasi Modern",
    icon: <Cloud className="w-5 h-5" />,
    content: [
      { type: "intro", text: "Dulu komputer harus berada di depan mata. Kini, sumber daya komputer berada ribuan kilometer jauhnya. Benda-benda di sekitar kita pun saling terhubung." },
      { type: "concept", title: "Cloud Computing", text: "☁ Cloud Computing memungkinkan kita memakai sumber daya komputer via internet. Disimpan di Data Center (Gedung berisi ribuan server).\n\n🏢 IaaS (Infrastructure as a Service): Menyewa server mentah (VPS).\n🍳 PaaS (Platform as a Service): Platform untuk membuat aplikasi.\n🍽 SaaS (Software as a Service): Software siap pakai (Gmail, Zoom, Canva)." },
      { type: "concept", title: "IoT (Internet of Things)", text: "📱 Benda-benda fisik yang terhubung ke internet dan saling bertukar data.\nContoh: Smart Home (Lampu otomatis, CCTV, AC pintar yang dikontrol dari HP).\n🧠 Mikrokontroler (Contoh: ESP32) bekerja sebagai otak yang membaca 👁 Sensor dan mengendalikan alat." }
    ],
    quiz: [
      { question: "Komputer yang menyediakan layanan disebut...", options: ["Client", "Server", "Router", "Switch"], answer: 1 },
      { question: "IoT merupakan singkatan dari...", options: ["Internet of Technology", "Internet of Things", "Internet of Topology", "Internet of Traffic"], answer: 1 }
    ]
  },
  {
    id: 30,
    title: "KARIER & MASA DEPAN TJKT",
    subtitle: "Revolusi Industri 5.0",
    icon: <BookOpen className="w-5 h-5" />,
    content: [
      { type: "intro", text: "TJKT bukan sekadar pasang kabel atau servis PC. TJKT adalah gerbang menuju dunia teknologi! 🌍 Industri 5.0 adalah era dimana Manusia 👨 dan Teknologi/AI 🤖 bekerja BERSAMA." },
      { type: "concept", title: "Profesi Anak TJKT", text: "🌐 Network Engineer: Mendesain & mengatur jaringan/router.\n🛡 Cyber Security: Melindungi data & ethical hacking.\n☁ Cloud Engineer: Mengelola server & cloud infrastructure.\n🤖 AI Engineer: Melatih model AI & Machine Learning.\n\n💡 Soft skill penting: Komunikasi, Kerja Sama, Problem Solving, dan kemauan terus belajar." }
    ],
    quiz: [
      { question: "Revolusi Industri 5.0 merupakan...", options: ["Era mesin uap", "Era listrik", "Era manusia dan teknologi bekerja bersama", "Era komputer pertama"], answer: 2 },
      { question: "Profesi yang bertugas mengelola jaringan adalah...", options: ["Dokter", "Network Engineer", "Pilot", "Arsitek"], answer: 1 }
    ]
  }
];

// --- SOUND ENGINE (Web Audio API) ---
const SoundEngine = {
  ctx: null,
  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  },
  playTone(freq, type, duration, vol) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    gain.gain.setValueAtTime(vol, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  },
  click() { this.playTone(600, 'sine', 0.1, 0.05); },
  correct() { 
    this.playTone(800, 'sine', 0.1, 0.05); 
    setTimeout(() => this.playTone(1200, 'sine', 0.15, 0.05), 100);
  },
  wrong() {
    this.playTone(300, 'sawtooth', 0.2, 0.05);
    setTimeout(() => this.playTone(200, 'sawtooth', 0.3, 0.05), 150);
  }
};


export default function App() {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [quizState, setQuizState] = useState({}); 
  const [scrollProgress, setScrollProgress] = useState(0);

  const currentChapter = chapters[activeChapterIndex];
  const contentRef = useRef(null);

  // Scroll Progress Logic
  const handleScroll = () => {
    if (contentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      const windowHeight = scrollHeight - clientHeight;
      const currentProgress = windowHeight > 0 ? (scrollTop / windowHeight) * 100 : 0;
      setScrollProgress(currentProgress);
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
      setScrollProgress(0);
    }
  }, [activeChapterIndex]);

  const handleInteraction = () => {
    if (soundEnabled) SoundEngine.init();
  };

  const playClick = () => soundEnabled && SoundEngine.click();
  const playCorrect = () => soundEnabled && SoundEngine.correct();
  const playWrong = () => soundEnabled && SoundEngine.wrong();

  const handleChapterSelect = (index) => {
    handleInteraction();
    playClick();
    setActiveChapterIndex(index);
    setSidebarOpen(false);
  };

  const handleQuizAnswer = (chapId, quizIdx, selectedOptionIdx, correctOptionIdx) => {
    handleInteraction();
    const isCorrect = selectedOptionIdx === correctOptionIdx;
    if (isCorrect) playCorrect();
    else playWrong();

    setQuizState(prev => ({
      ...prev,
      [`${chapId}_${quizIdx}`]: isCorrect ? 'correct' : 'wrong'
    }));
  };

  // --- THEME VARIABLES ---
  const theme = {
    bg: isDarkMode ? 'bg-[#0f172a]' : 'bg-slate-50', // darker slate for dark mode
    text: isDarkMode ? 'text-slate-200' : 'text-slate-800',
    textMuted: isDarkMode ? 'text-slate-400' : 'text-slate-500',
    sidebarBg: isDarkMode ? 'bg-[#020617]' : 'bg-slate-900',
    headerBg: isDarkMode ? 'bg-[#0f172a]/90' : 'bg-white/90',
    headerBorder: isDarkMode ? 'border-slate-800' : 'border-slate-200',
    cardBg: isDarkMode ? 'bg-[#1e293b]' : 'bg-white',
    cardBorder: isDarkMode ? 'border-slate-700' : 'border-slate-200',
    btnPrimary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/30 shadow-lg',
    btnOutline: isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50',
    quizContainer: isDarkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-blue-50/50 border-blue-100',
    quizBtn: isDarkMode ? 'bg-[#1e293b] hover:bg-slate-700 border-slate-700 text-slate-300' : 'bg-white hover:bg-slate-50 border-slate-300 text-slate-700'
  };

  return (
    <div className={`flex h-screen font-sans transition-colors duration-300 selection:bg-blue-500/30 ${theme.bg} ${theme.text}`}>
      
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 z-20 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => { playClick(); setSidebarOpen(false); }}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-30 w-72 ${theme.sidebarBg} text-slate-300 transform transition-transform duration-300 ease-in-out flex flex-col shadow-2xl
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:relative md:translate-x-0 border-r ${isDarkMode ? 'border-slate-800' : 'border-slate-900'}
      `}>
        <div className="p-6 flex justify-between items-center border-b border-slate-800/50 bg-black/20">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-900/50">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white leading-tight">TJKT SPMB</h1>
              <p className="text-xs font-medium text-blue-400">Modul Interaktif 2026</p>
            </div>
          </div>
          <button className="md:hidden text-slate-400 hover:text-white p-1" onClick={() => { playClick(); setSidebarOpen(false); }}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1.5 custom-scrollbar">
          <p className="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 mt-2">Daftar Materi</p>
          {chapters.map((chap, idx) => {
            const isActive = activeChapterIndex === idx;
            return (
              <button
                key={chap.id}
                onClick={() => handleChapterSelect(idx)}
                className={`w-full text-left px-4 py-3.5 rounded-xl flex items-center gap-3 transition-all duration-200 group
                  ${isActive 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-900/40' 
                    : 'hover:bg-white/5 text-slate-400 hover:text-slate-100'}`}
              >
                <div className={`p-2 rounded-lg transition-colors ${isActive ? 'bg-white/20' : 'bg-slate-800 group-hover:bg-slate-700'}`}>
                  {React.cloneElement(chap.icon, { className: `w-4 h-4 ${isActive ? 'text-white' : 'text-blue-400'}` })}
                </div>
                <div>
                  <div className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                    Bab {chap.id}
                  </div>
                  <div className={`text-sm font-semibold leading-tight truncate ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {chap.title}
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Sidebar Footer Controls */}
        <div className="p-4 border-t border-slate-800/50 bg-black/10 flex gap-2">
          <button 
            onClick={() => { handleInteraction(); playClick(); setSoundEnabled(!soundEnabled); }}
            className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-bold transition-all
              ${soundEnabled ? 'bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20' : 'bg-slate-800 text-slate-500 hover:bg-slate-700'}`}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            {soundEnabled ? 'SFX ON' : 'SFX OFF'}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        
        {/* Progress Bar (Top) */}
        <div className="absolute top-0 left-0 w-full h-1 z-50 bg-transparent">
          <div 
            className="h-full bg-blue-500 transition-all duration-150 ease-out" 
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Header */}
        <header className={`h-16 border-b flex items-center justify-between px-4 sm:px-8 shrink-0 z-10 backdrop-blur-md transition-colors duration-300 ${theme.headerBg} ${theme.headerBorder}`}>
          <div className="flex items-center gap-3">
            <button className={`md:hidden p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-600'}`} onClick={() => { playClick(); setSidebarOpen(true); }}>
              <Menu className="w-5 h-5" />
            </button>
            <div className="hidden sm:flex items-center gap-2">
              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-widest ${isDarkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                Bab {currentChapter.id}
              </span>
              <span className={`text-sm font-semibold truncate ${theme.textMuted}`}>
                {currentChapter.title}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button 
              onClick={() => { playClick(); setIsDarkMode(!isDarkMode); }}
              className={`p-2 rounded-full border transition-all duration-300
                ${isDarkMode ? 'bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700' : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200'}`}
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button 
                disabled={activeChapterIndex === 0}
                onClick={() => handleChapterSelect(activeChapterIndex - 1)}
                className={`p-2 sm:px-4 sm:py-2 text-sm font-bold border rounded-lg transition-all flex items-center gap-1.5 disabled:opacity-30 disabled:cursor-not-allowed ${theme.btnOutline}`}
              >
                <ChevronLeft className="w-4 h-4" /> <span className="hidden sm:inline">Prev</span>
              </button>
              <button 
                disabled={activeChapterIndex === chapters.length - 1}
                onClick={() => handleChapterSelect(activeChapterIndex + 1)}
                className={`p-2 sm:px-4 sm:py-2 text-sm font-bold border-transparent rounded-lg transition-all flex items-center gap-1.5 disabled:opacity-30 disabled:cursor-not-allowed ${theme.btnPrimary}`}
              >
                <span className="hidden sm:inline">Next</span> <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        {/* Scrollable Article */}
        <article 
          ref={contentRef} 
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto p-4 sm:p-8 scroll-smooth custom-scrollbar"
        >
          <div className="max-w-3xl mx-auto space-y-10 pb-24 pt-4">
            
            {/* Title Section */}
            <div className="text-center space-y-5 mb-14 animate-fade-in-up">
              <div className={`inline-flex items-center justify-center p-4 rounded-2xl mb-2 transition-colors ${isDarkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                {React.cloneElement(currentChapter.icon, { className: "w-8 h-8" })}
              </div>
              <h1 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {currentChapter.title}
              </h1>
              <p className={`text-lg sm:text-xl font-medium transition-colors ${theme.textMuted}`}>
                "{currentChapter.subtitle}"
              </p>
            </div>

            {/* Content Blocks */}
            <div className="space-y-6">
              {currentChapter.content.map((block, idx) => {
                const isIntro = block.type === 'intro';
                
                // Styling for different block types
                let blockStyle = `${theme.cardBg} ${theme.cardBorder} border shadow-sm`;
                let textStyle = `${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`;
                let titleStyle = `${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`;

                if (isIntro) {
                  blockStyle = `bg-gradient-to-br from-blue-600 to-indigo-700 border-transparent shadow-lg shadow-blue-900/20`;
                  textStyle = `text-blue-50 font-medium`;
                }

                return (
                  <div 
                    key={idx} 
                    className={`p-6 sm:p-8 rounded-3xl transition-colors duration-300 ${blockStyle} animate-fade-in`} 
                    style={{animationDelay: `${idx * 80}ms`}}
                  >
                    {block.title && (
                      <h2 className={`text-xl sm:text-2xl font-bold mb-5 flex items-center gap-3 ${titleStyle}`}>
                        <span className="w-1.5 h-6 bg-blue-500 rounded-full block"></span>
                        {block.title}
                      </h2>
                    )}
                    <div className={`prose prose-lg max-w-none whitespace-pre-wrap leading-relaxed ${textStyle} ${isDarkMode ? 'prose-strong:text-white' : 'prose-strong:text-slate-900'}`}>
                      {block.text}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Interactive Quiz Section */}
            {currentChapter.quiz && currentChapter.quiz.length > 0 && (
              <div className={`mt-16 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden border transition-colors duration-300 ${theme.quizContainer}`}>
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                
                <h3 className={`text-2xl font-extrabold mb-8 flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                  <span className="text-3xl bg-white/10 p-2 rounded-xl">🎯</span> Uji Pemahaman
                </h3>
                
                <div className="space-y-8">
                  {currentChapter.quiz.map((q, qIdx) => {
                    const status = quizState[`${currentChapter.id}_${qIdx}`];
                    return (
                      <div key={qIdx} className={`rounded-2xl p-6 border transition-colors ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-blue-100 shadow-sm'}`}>
                        <p className={`text-lg font-bold mb-5 leading-snug ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                          {qIdx + 1}. {q.question}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {q.options.map((opt, optIdx) => {
                            // Determine button state styling
                            let btnStyle = theme.quizBtn;
                            
                            if (status === 'correct' && optIdx === q.answer) {
                              btnStyle = isDarkMode 
                                ? "bg-emerald-500/20 border-emerald-500 text-emerald-400 font-bold ring-2 ring-emerald-500/30"
                                : "bg-emerald-50 border-emerald-500 text-emerald-700 font-bold ring-2 ring-emerald-500/30";
                            } else if (status === 'wrong' && optIdx === q.answer) {
                              btnStyle = isDarkMode
                                ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-400/80"
                                : "bg-emerald-50/50 border-emerald-300 text-emerald-600";
                            } else if (status !== undefined && optIdx !== q.answer) {
                               btnStyle = isDarkMode
                                ? "opacity-40 border-slate-800 text-slate-500 bg-transparent cursor-not-allowed"
                                : "opacity-50 border-slate-200 text-slate-400 bg-slate-50 cursor-not-allowed";
                            }

                            return (
                              <button
                                key={optIdx}
                                disabled={status !== undefined}
                                onClick={() => handleQuizAnswer(currentChapter.id, qIdx, optIdx, q.answer)}
                                className={`text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 flex justify-between items-center group
                                  ${btnStyle} 
                                  ${status === undefined ? 'hover:-translate-y-0.5 hover:shadow-md' : ''}`}
                              >
                                <span className="text-[15px] font-medium leading-tight">
                                  <span className="opacity-60 mr-2 font-bold">{String.fromCharCode(65 + optIdx)}.</span> 
                                  {opt}
                                </span>
                                {status === 'correct' && optIdx === q.answer && <CheckCircle2 className="w-5 h-5 shrink-0" />}
                                {status === 'wrong' && optIdx === q.answer && <CheckCircle2 className="w-5 h-5 shrink-0 opacity-50" />}
                              </button>
                            );
                          })}
                        </div>
                        
                        {/* Feedback Messages */}
                        {status === 'wrong' && (
                          <div className={`mt-5 p-4 rounded-xl flex items-start gap-3 text-sm font-medium animate-pulse ${isDarkMode ? 'bg-red-500/10 border border-red-500/20 text-red-400' : 'bg-red-50 border border-red-200 text-red-600'}`}>
                            <XCircle className="w-5 h-5 shrink-0 mt-0.5" /> 
                            <p>Jawaban kurang tepat. Perhatikan kembali materi di atas dan coba pahami konsepnya.</p>
                          </div>
                        )}
                        {status === 'correct' && (
                          <div className={`mt-5 p-4 rounded-xl flex items-center gap-3 text-sm font-medium animate-bounce-short ${isDarkMode ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400' : 'bg-emerald-50 border border-emerald-200 text-emerald-600'}`}>
                            <CheckCircle2 className="w-5 h-5 shrink-0" /> 
                            <p>Tepat sekali! Pertahankan pemahamanmu.</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </article>
      </main>

      {/* Basic Inline Styles for Animations and Scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceShort {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          opacity: 0;
          animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-bounce-short {
          animation: bounceShort 0.5s cubic-bezier(0.16, 1, 0.3, 1) 2;
        }
        
        /* Custom Scrollbar for a cleaner UI */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(148, 163, 184, 0.3); /* slate-400 with opacity */
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(148, 163, 184, 0.5);
        }
      `}} />
    </div>
  );
}
