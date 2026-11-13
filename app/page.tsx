'use client';

import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Bird,
  Bug,
  Check,
  ChevronDown,
  Cloud,
  Droplets,
  ExternalLink,
  Flame,
  Globe2,
  HeartPulse,
  Leaf,
  Menu,
  Mountain,
  PawPrint,
  Play,
  RefreshCw,
  Share2,
  ShieldCheck,
  Sparkles,
  Sprout,
  Sun,
  ThermometerSun,
  Trees,
  Users,
  Waves,
  Wind,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const forestImage =
  'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2200&q=85';
const smokeImage =
  'https://images.unsplash.com/photo-1751709851583-d12755eb65ea?auto=format&fit=crop&w=1800&q=85';
const burnedImage =
  'https://images.unsplash.com/photo-1751709851583-d12755eb65ea?auto=format&fit=crop&w=1800&q=85';

const navItems = [
  ['Hutan', 'hutan'],
  ['Kebakaran', 'kebakaran'],
  ['Dampak', 'manusia'],
  ['Geografi & iklim', 'geografi'],
  ['Indonesia', 'indonesia'],
  ['Kuis', 'kuis'],
] as const;

type Stage = {
  name: string;
  label: string;
  title: string;
  copy: string;
  image: string;
  overlay: string;
};

const stages: Stage[] = [
  {
    name: 'Hutan sehat',
    label: 'TAHAP 01 · KEHIDUPAN',
    title: 'Rumah bagi ribuan kehidupan.',
    copy: 'Kanopi yang rapat memberi naungan. Akar membantu menjaga tanah. Air, udara, tumbuhan, hewan, dan manusia terhubung dalam satu sistem kehidupan.',
    image: forestImage,
    overlay: 'rgba(8, 35, 20, .10)',
  },
  {
    name: 'Awal gangguan',
    label: 'TAHAP 02 · ANCAMAN',
    title: 'Keseimbangan mulai terganggu.',
    copy: 'Saat vegetasi terbakar, asap dan panas mulai mengganggu makhluk hidup. Api dapat merambat dari satu bagian kawasan ke bagian lain, bergantung pada kondisi lingkungan.',
    image: smokeImage,
    overlay: 'rgba(85, 49, 25, .35)',
  },
  {
    name: 'Kawasan terbakar',
    label: 'TAHAP 03 · KEHANCURAN',
    title: 'Habitat berubah menjadi abu.',
    copy: 'Pohon, semak, serasah, dan organisme tanah dapat rusak. Satwa kehilangan tempat berlindung dan sumber makanan. Asap membawa partikel yang dapat mengganggu kesehatan.',
    image: burnedImage,
    overlay: 'rgba(42, 23, 17, .58)',
  },
  {
    name: 'Masa pemulihan',
    label: 'TAHAP 04 · SETELAH API',
    title: 'Padam bukan berarti pulih.',
    copy: 'Tanah, air, vegetasi, dan satwa memerlukan waktu untuk pulih. Pemulihan bergantung pada tingkat kerusakan, jenis ekosistem, serta perlindungan kawasan setelah kebakaran.',
    image: burnedImage,
    overlay: 'rgba(24, 29, 25, .66)',
  },
];

type Impact = {
  id: string;
  label: string;
  title: string;
  text: string;
  detail: string;
  fact: string;
  Icon: LucideIcon;
};

const impacts: Impact[] = [
  {
    id: 'people',
    label: 'Manusia',
    title: 'Asap tidak berhenti di tepi hutan.',
    text: 'Asap kebakaran membawa campuran gas dan partikel kecil. Sebagian partikel dapat masuk jauh ke saluran pernapasan.',
    detail:
      'Paparan asap dapat menyebabkan mata dan tenggorokan perih, batuk, sesak, serta memperburuk asma. Partikel halus PM2.5 juga dikaitkan dengan dampak pada jantung dan pembuluh darah. Anak-anak, lansia, ibu hamil, dan orang dengan penyakit tertentu termasuk kelompok yang lebih rentan.',
    fact: 'Dampaknya bisa terasa jauh dari lokasi kebakaran karena asap dapat terbawa angin.',
    Icon: HeartPulse,
  },
  {
    id: 'animals',
    label: 'Satwa',
    title: 'Rumah satwa ikut menghilang.',
    text: 'Hutan menyediakan makanan, tempat berlindung, ruang berkembang biak, dan jalur pergerakan bagi satwa.',
    detail:
      'Kebakaran dapat menghancurkan sarang dan tempat berlindung, mengurangi sumber makanan, serta memaksa satwa berpindah. Hewan yang bergerak ke area permukiman atau jalan dapat menghadapi konflik dan bahaya baru.',
    fact: 'Hilangnya satu habitat dapat memengaruhi banyak spesies sekaligus.',
    Icon: PawPrint,
  },
  {
    id: 'plants',
    label: 'Tumbuhan',
    title: 'Bukan hanya pohon besar yang hilang.',
    text: 'Kebakaran dapat merusak pohon, semak, anakan, biji, dan lapisan tumbuhan bawah.',
    detail:
      'Tumbuhan yang mati membuat tutupan lahan berkurang. Regenerasi alami dapat terhambat ketika sumber biji, akar, atau kondisi tanah ikut rusak. Hutan yang sering terbakar juga bisa berubah komposisi spesiesnya.',
    fact: 'Menanam pohon baru tidak otomatis mengembalikan ekosistem hutan yang kompleks.',
    Icon: Sprout,
  },
  {
    id: 'soil',
    label: 'Tanah',
    title: 'Lapisan pelindung tanah ikut rusak.',
    text: 'Serasah, akar, dan bahan organik membantu tanah tetap terlindungi dan menyimpan unsur hara.',
    detail:
      'Panas dapat mengubah bahan organik dan organisme tanah. Ketika tutupan hilang, tanah lebih mudah terpapar hujan dan angin. Di kondisi tertentu, permukaan tanah juga dapat menjadi lebih sulit menyerap air.',
    fact: 'Tanah yang tampak diam sebenarnya dipenuhi organisme yang menjaga siklus hara.',
    Icon: Mountain,
  },
  {
    id: 'water',
    label: 'Air',
    title: 'Aliran air ikut berubah.',
    text: 'Hutan membantu menahan air hujan, memperlambat aliran permukaan, dan menjaga kawasan tangkapan air.',
    detail:
      'Setelah vegetasi rusak, air hujan dapat mengalir lebih cepat di permukaan. Sedimen dan abu bisa terbawa ke sungai, meningkatkan kekeruhan dan mengganggu kualitas habitat perairan. Besarnya dampak bergantung pada topografi, jenis tanah, dan intensitas hujan.',
    fact: 'Risiko banjir dan erosi dapat meningkat pada wilayah yang kehilangan tutupan vegetasi dan rentan secara fisik.',
    Icon: Droplets,
  },
  {
    id: 'air',
    label: 'Udara',
    title: 'Udara bersih berubah menjadi kabut asap.',
    text: 'Pembakaran biomassa melepaskan partikel dan berbagai gas ke atmosfer.',
    detail:
      'Asap dapat mengurangi jarak pandang dan mengganggu aktivitas harian. Partikel PM2.5 sangat kecil sehingga dapat masuk ke bagian dalam paru-paru. Komposisi asap bergantung pada bahan yang terbakar dan kondisi pembakaran.',
    fact: 'Warna langit yang berkabut bukan ukuran lengkap untuk mengetahui keamanan udara.',
    Icon: Wind,
  },
  {
    id: 'climate',
    label: 'Iklim',
    title: 'Karbon yang tersimpan dapat kembali ke udara.',
    text: 'Pepohonan dan tanah menyimpan karbon. Ketika terbakar, sebagian karbon dilepaskan ke atmosfer.',
    detail:
      'Karbon dioksida dan gas rumah kaca lain dari kebakaran menambah emisi. Hilangnya hutan juga mengurangi kapasitas kawasan untuk menyerap dan menyimpan karbon pada masa depan. Ini berkontribusi pada pemanasan global, tetapi satu kebakaran tidak langsung mengubah suhu seluruh planet secara terukur.',
    fact: 'Perubahan iklim dan kebakaran dapat saling memperkuat di wilayah tertentu.',
    Icon: Globe2,
  },
];

const chainNodes = [
  {
    title: 'Pohon berkurang',
    subtitle: 'Tutupan vegetasi hilang',
    text: 'Naungan dan perlindungan permukaan tanah berkurang. Akar yang biasanya membantu mengikat tanah juga dapat rusak.',
    Icon: Trees,
  },
  {
    title: 'Tanah terbuka',
    subtitle: 'Lebih mudah terpapar',
    text: 'Tanah yang terbuka lebih rentan terhadap pukulan air hujan, aliran permukaan, dan erosi.',
    Icon: Mountain,
  },
  {
    title: 'Air berubah',
    subtitle: 'Sedimen masuk sungai',
    text: 'Limpasan dan sedimen dapat meningkat. Kualitas air serta habitat organisme perairan bisa terganggu.',
    Icon: Waves,
  },
  {
    title: 'Udara tercemar',
    subtitle: 'Asap dan partikel',
    text: 'Asap membawa polutan yang dapat menyebar mengikuti angin dan mengganggu kesehatan serta jarak pandang.',
    Icon: Cloud,
  },
  {
    title: 'Iklim terdampak',
    subtitle: 'Emisi karbon bertambah',
    text: 'Gas rumah kaca yang dilepas berkontribusi pada pemanasan global. Hilangnya hutan juga mengurangi simpanan karbon.',
    Icon: Globe2,
  },
];

const myths = [
  {
    myth: 'Semua kebakaran hutan terjadi secara alami.',
    fact: 'Tidak benar. Petir dapat memicu sebagian kebakaran di kondisi tertentu, tetapi aktivitas manusia juga menjadi penyebab penting di banyak wilayah. Penyebab setiap kejadian perlu diperiksa berdasarkan bukti.',
  },
  {
    myth: 'Kalau api di permukaan padam, semuanya sudah aman.',
    fact: 'Belum tentu. Pada lahan gambut, bara dapat bertahan di bawah permukaan dan kembali muncul. Penanganan harus memastikan tidak ada titik pembakaran yang tersisa.',
  },
  {
    myth: 'Kebakaran hanya merusak pohon.',
    fact: 'Dampaknya lebih luas: satwa, organisme tanah, kualitas air, udara, kesehatan manusia, ekonomi, hingga emisi gas rumah kaca.',
  },
  {
    myth: 'Asap hanya berbahaya bagi orang yang tinggal dekat hutan.',
    fact: 'Asap dapat terbawa angin ke wilayah yang jauh. Dampak yang dirasakan bergantung pada konsentrasi polutan, lama paparan, dan kondisi individu.',
  },
  {
    myth: 'Hutan yang terbakar pasti pulih dalam beberapa bulan.',
    fact: 'Waktu pemulihan berbeda-beda. Kerusakan tanah, jenis ekosistem, frekuensi kebakaran, dan gangguan lanjutan dapat membuat prosesnya jauh lebih lama.',
  },
  {
    myth: 'Titik panas satelit sama dengan luas area terbakar.',
    fact: 'Tidak. Hotspot adalah deteksi anomali termal dari satelit. Titik itu bukan batas api dan tidak berarti seluruh area piksel terbakar. Data perlu ditafsirkan bersama informasi lain.',
  },
];

const questions = [
  {
    question: 'Apa fungsi utama akar dan tutupan tumbuhan bagi tanah?',
    options: [
      'Membuat tanah selalu panas',
      'Membantu melindungi dan mengikat tanah',
      'Menghentikan semua hujan',
      'Menghilangkan semua mikroorganisme',
    ],
    answer: 1,
    explanation:
      'Akar membantu mengikat tanah, sementara tutupan tumbuhan dan serasah mengurangi paparan langsung terhadap hujan dan aliran permukaan.',
  },
  {
    question: 'Apa yang dimaksud PM2.5?',
    options: [
      'Partikel udara sangat halus berukuran 2,5 mikrometer atau lebih kecil',
      'Jenis gas yang hanya muncul di laut',
      'Ukuran suhu api',
      'Nama satelit pemantau hutan',
    ],
    answer: 0,
    explanation:
      'PM2.5 adalah partikel halus dengan diameter aerodinamis 2,5 mikrometer atau lebih kecil. Partikel ini dapat masuk jauh ke saluran pernapasan.',
  },
  {
    question: 'Mengapa kebakaran gambut dapat sulit dipadamkan?',
    options: [
      'Gambut tidak mengandung bahan organik',
      'Api hanya berada di daun',
      'Bara dapat bertahan dan merambat di bawah permukaan',
      'Air hujan selalu membuat gambut terbakar',
    ],
    answer: 2,
    explanation:
      'Gambut yang mengering dapat terbakar di bawah permukaan sehingga bara tersembunyi dan sulit dijangkau.',
  },
  {
    question: 'Apa arti hotspot dari satelit?',
    options: [
      'Peta pasti seluruh area terbakar',
      'Deteksi anomali termal yang perlu diverifikasi',
      'Jumlah pohon yang mati',
      'Prediksi pasti arah api',
    ],
    answer: 1,
    explanation:
      'Hotspot adalah indikasi anomali termal. Tidak semua deteksi berarti kebakaran, dan luas piksel bukan berarti seluruh permukaan di dalamnya terbakar.',
  },
  {
    question: 'Dampak kebakaran hutan terhadap satwa antara lain ...',
    options: [
      'Habitat dan sumber makanan berkurang',
      'Semua satwa otomatis pindah dengan aman',
      'Rantai makanan menjadi lebih kuat',
      'Tidak ada perubahan pada satwa',
    ],
    answer: 0,
    explanation:
      'Kebakaran dapat menghancurkan habitat, sarang, tempat berlindung, dan sumber makanan sehingga satwa harus berpindah atau menghadapi risiko lain.',
  },
  {
    question: 'Bagaimana kebakaran berkontribusi terhadap perubahan iklim?',
    options: [
      'Menghilangkan semua gas rumah kaca',
      'Menghentikan pemanasan global',
      'Melepaskan karbon dan gas rumah kaca ke atmosfer',
      'Membuat laut langsung membeku',
    ],
    answer: 2,
    explanation:
      'Pembakaran biomassa melepaskan karbon dioksida dan gas lain. Hilangnya hutan juga mengurangi kemampuan menyimpan karbon di masa depan.',
  },
  {
    question: 'Apa yang dapat terjadi ketika tanah kehilangan tutupan vegetasi?',
    options: [
      'Erosi berpotensi meningkat',
      'Tanah tidak lagi terkena gravitasi',
      'Semua air hujan menguap seketika',
      'Sungai selalu menjadi lebih bersih',
    ],
    answer: 0,
    explanation:
      'Tanah terbuka lebih rentan terhadap pukulan hujan dan aliran permukaan. Risiko erosi dipengaruhi juga oleh lereng, tanah, dan curah hujan.',
  },
  {
    question: 'Apa langkah penting untuk mengurangi risiko kebakaran di lahan gambut?',
    options: [
      'Mengeringkan gambut lebih dalam',
      'Menjaga tata air dan kelembapan gambut',
      'Membakar semak setiap musim kemarau',
      'Menghilangkan semua vegetasi penutup',
    ],
    answer: 1,
    explanation:
      'Menjaga kondisi hidrologi dan muka air gambut membantu mengurangi pengeringan yang membuat gambut lebih mudah terbakar.',
  },
  {
    question: 'Mengapa penanaman pohon saja belum tentu cukup untuk memulihkan hutan?',
    options: [
      'Karena pohon tidak berhubungan dengan ekosistem',
      'Karena pemulihan juga perlu tanah, air, habitat, dan keanekaragaman hayati',
      'Karena semua jenis pohon sama',
      'Karena hutan tidak membutuhkan satwa',
    ],
    answer: 1,
    explanation:
      'Pemulihan ekosistem juga perlu memperbaiki kondisi tanah dan air, melindungi spesies asli, serta memulihkan hubungan antarorganisme.',
  },
  {
    question: 'Apa perbedaan hotspot dan luas area terbakar?',
    options: [
      'Keduanya selalu sama',
      'Hotspot adalah indikasi titik anomali termal, luas terbakar adalah area yang benar-benar terdampak',
      'Luas terbakar selalu dihitung dari satu foto',
      'Hotspot hanya muncul di laut',
    ],
    answer: 1,
    explanation:
      'Keduanya adalah jenis informasi yang berbeda. Hotspot membantu pemantauan, sedangkan pemetaan luas terbakar memerlukan analisis area dan verifikasi.',
  },
];

const historicData = [
  { year: '2015', value: 2611411, label: '2,61 jt ha' },
  { year: '2016', value: 438368, label: '438 rb ha' },
  { year: '2017', value: 165484, label: '165 rb ha' },
  { year: '2018', value: 529267, label: '529 rb ha' },
  { year: '2019', value: 1649258, label: '1,65 jt ha' },
];

const sources = [
  {
    org: 'ORGANISASI KESEHATAN DUNIA · WHO',
    title: 'Wildfires',
    desc: 'Penjelasan tentang polusi asap kebakaran, PM2.5, serta dampak terhadap kesehatan.',
    url: 'https://www.who.int/news-room/fact-sheets/detail/wildfires-and-health',
  },
  {
    org: 'BMKG · INDONESIA',
    title: 'Informasi Kebakaran Hutan dan Lahan',
    desc: 'Pemantauan hotspot, sebaran asap, dan indikator cuaca terkait karhutla.',
    url: 'https://www.bmkg.go.id/cuaca/karhutla',
  },
  {
    org: 'KEMENTERIAN LINGKUNGAN HIDUP',
    title: 'Pencegahan Karhutla dan Lahan Gambut',
    desc: 'Penjelasan pengelolaan air gambut dan pencegahan kebakaran dari pemerintah.',
    url: 'https://kemenlh.go.id/news/detail/pencegahan-kebakaran-hutan-dan-lahan-dimulai-dari-desa-dan-lahan-gambut',
  },
  {
    org: 'NASA · LANCE',
    title: 'Fire Information for Resource Management System',
    desc: 'Data aktif kebakaran dan anomali termal satelit. Hotspot bukan batas area yang terbakar.',
    url: 'https://firms.modaps.eosdis.nasa.gov/',
  },
  {
    org: 'KEMENTERIAN LHK · STATISTIK',
    title: 'Statistik Lingkungan Hidup dan Kehutanan 2023',
    desc: 'Publikasi statistik resmi, termasuk tabel luas kebakaran hutan dan lahan menurut provinsi.',
    url: 'https://statistik.menlhk.go.id/sisklhkX/assets/publikasi/file/Statistik_2023_FIX-dikompresi1.pdf',
  },
  {
    org: 'IPB UNIVERSITY',
    title: 'Mengapa Karhutla di Gambut Sulit Padam?',
    desc: 'Penjelasan ahli tentang bara yang dapat bertahan di bawah permukaan gambut.',
    url: 'https://www.ipb.ac.id/news/index/2026/08/mengapa-karhutla-di-gambut-sulit-padam-pakar-ipb-ungkap-faktor-dan-solusinya',
  },
  {
    org: 'KEMENTERIAN LINGKUNGAN HIDUP',
    title: 'Larangan Pembukaan Lahan dengan Cara Membakar',
    desc: 'Surat Edaran Nomor 16 Tahun 2026 tentang larangan membuka lahan dengan membakar.',
    url: 'https://www.kemenlh.go.id/news/detail/surat-edaran-nomor-16-tahun-2026-dilarang-membuka-lahan-dengan-cara-membakar',
  },
  {
    org: 'KLHK · DATA KASUS HISTORIS',
    title: 'Data Luas Kebakaran Hutan dan Lahan 2015–2023',
    desc: 'Ringkasan data historis yang dikutip dari data KLHK, dengan catatan perbedaan seri dan metode.',
    url: 'https://news.detik.com/berita/d-7147094/jurus-klhk-kendalikan-deforestasi-dan-karhutla-di-indonesia',
  },
];

const peatLayers = [
  {
    label: 'Permukaan',
    title: 'Vegetasi dan serasah',
    text: 'Bagian paling atas berisi tumbuhan, akar, daun gugur, dan bahan organik. Ketika kering, material ini dapat menjadi bahan yang mudah terbakar.',
  },
  {
    label: 'Lapisan gambut',
    title: 'Bahan organik yang menumpuk',
    text: 'Gambut terbentuk dari sisa tumbuhan yang menumpuk dalam kondisi tergenang dan terurai sangat lambat. Lapisan ini menyimpan banyak karbon.',
  },
  {
    label: 'Air tanah',
    title: 'Kelembapan adalah pelindung',
    text: 'Muka air yang terjaga menjaga gambut tetap basah. Pengeringan melalui drainase dapat membuat lapisan gambut lebih mudah terbakar.',
  },
];

function SectionHeading({
  number,
  kicker,
  title,
  intro,
}: {
  number: string;
  kicker: string;
  title: React.ReactNode;
  intro: string;
}) {
  return (
    <div className="section-heading reveal">
      <div>
        <div className="section-kicker">{number} / {kicker}</div>
        <h2>{title}</h2>
      </div>
      <p className="section-intro">{intro}</p>
    </div>
  );
}

function IconBox({ Icon }: { Icon: LucideIcon }) {
  return (
    <span className="icon-box">
      <Icon size={20} strokeWidth={1.7} />
    </span>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);
  const [activeImpact, setActiveImpact] = useState('people');
  const [activeChain, setActiveChain] = useState(0);
  const [dryness, setDryness] = useState(55);
  const [fuel, setFuel] = useState(55);
  const [wind, setWind] = useState(45);
  const [ignition, setIgnition] = useState(true);
  const [peatLayer, setPeatLayer] = useState(1);
  const [openMyth, setOpenMyth] = useState<number | null>(null);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);
  const [bestScore, setBestScore] = useState<number | null>(null);
  const [toast, setToast] = useState('');

  useEffect(() => {
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -35px 0px' },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const stored = window.localStorage.getItem('karhutla-best-score');
    if (stored !== null) setBestScore(Number(stored));
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(''), 2600);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const selectedImpact = impacts.find((impact) => impact.id === activeImpact) ?? impacts[0];
  const selectedStage = stages[stage];
  const riskScore = ignition ? Math.round((dryness * 0.35 + fuel * 0.35 + wind * 0.3)) : 0;
  const riskLabel = !ignition
    ? 'Belum ada sumber penyalaan'
    : riskScore >= 70
      ? 'Kondisi sangat mendukung'
      : riskScore >= 45
        ? 'Kondisi perlu diwaspadai'
        : 'Kondisi relatif lebih rendah';
  const currentQuestion = questions[quizIndex];

  async function shareSite() {
    const shareData = {
      title: 'Bahaya Kebakaran Hutan',
      text: 'Pelajari bagaimana kebakaran hutan berdampak pada manusia, ekosistem, tanah, air, udara, dan iklim.',
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareData.url);
        setToast('Tautan berhasil disalin.');
      } else {
        setToast('Browser ini belum mendukung fitur berbagi.');
      }
    } catch {
      setToast('Berbagi dibatalkan atau tidak tersedia.');
    }
  }

  async function shareFact() {
    const text =
      'Tahukah kamu? Asap kebakaran hutan dapat terbawa angin hingga jauh dari lokasi api. Partikel halus di dalamnya dapat mengganggu kesehatan. Sumber: WHO — Wildfires. ' +
      window.location.origin +
      '/#manusia';
    try {
      if (navigator.share) {
        await navigator.share({ title: 'Fakta Kebakaran Hutan', text });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
        setToast('Fakta berhasil disalin untuk dibagikan.');
      } else {
        setToast('Fitur berbagi tidak tersedia di browser ini.');
      }
    } catch {
      setToast('Berbagi dibatalkan.');
    }
  }

  function downloadFactCard() {
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1920;
    const context = canvas.getContext('2d');
    if (!context) {
      setToast('Kartu tidak dapat dibuat di browser ini.');
      return;
    }
    const gradient = context.createLinearGradient(0, 0, 1080, 1920);
    gradient.addColorStop(0, '#244a34');
    gradient.addColorStop(1, '#111815');
    context.fillStyle = gradient;
    context.fillRect(0, 0, 1080, 1920);
    context.strokeStyle = 'rgba(229,239,220,.25)';
    context.lineWidth = 2;
    context.beginPath();
    context.arc(890, 300, 230, 0, Math.PI * 2);
    context.stroke();
    context.beginPath();
    context.arc(890, 300, 275, 0, Math.PI * 2);
    context.stroke();
    context.fillStyle = '#d2e5be';
    context.font = 'bold 28px Arial';
    context.fillText('FAKTA LINGKUNGAN  /  01', 90, 150);
    context.fillStyle = '#fffaf0';
    context.font = '72px Georgia';
    const lines = ['Asap kebakaran', 'tidak berhenti', 'di tepi hutan.'];
    lines.forEach((line, index) => context.fillText(line, 90, 690 + index * 96));
    context.fillStyle = '#d5dfd4';
    context.font = '34px Arial';
    context.fillText('Asap dapat terbawa angin ke wilayah jauh.', 90, 1110);
    context.fillText('Partikel halus di dalamnya bisa mengganggu', 90, 1165);
    context.fillText('kesehatan pernapasan dan jantung.', 90, 1220);
    context.fillStyle = '#eda16e';
    context.font = 'bold 27px Arial';
    context.fillText('SUMBER: WHO — WILDFIRES AND HEALTH', 90, 1720);
    context.fillStyle = '#aebdaf';
    context.font = '24px Arial';
    context.fillText('BAHAYA KEBAKARAN HUTAN', 90, 1790);
    const link = document.createElement('a');
    link.download = 'fakta-bahaya-kebakaran-hutan.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    setToast('Kartu edukasi berhasil dibuat.');
  }

  function nextQuestion() {
    if (quizAnswer === null) return;
    if (quizIndex === questions.length - 1) {
      const finalScore = quizScore + (quizAnswer === currentQuestion.answer ? 1 : 0);
      setQuizScore(finalScore);
      setQuizDone(true);
      const previous = bestScore ?? 0;
      if (finalScore > previous) {
        setBestScore(finalScore);
        window.localStorage.setItem('karhutla-best-score', String(finalScore));
      }
      return;
    }
    if (quizAnswer === currentQuestion.answer) setQuizScore((score) => score + 1);
    setQuizIndex((index) => index + 1);
    setQuizAnswer(null);
  }

  function restartQuiz() {
    setQuizIndex(0);
    setQuizAnswer(null);
    setQuizScore(0);
    setQuizDone(false);
  }

  return (
    <main>
      <div className="progress-track" aria-hidden="true">
        <div className="progress-fill" style={{ width: progress + '%' }} />
      </div>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="Bahaya Kebakaran Hutan — beranda">
            <span className="brand-mark"><Leaf size={18} /></span>
            <span>HUTAN KITA<small>SEBUAH DOKUMENTER EDUKASI</small></span>
          </a>
          <nav className="desktop-nav" aria-label="Navigasi utama">
            {navItems.map(([label, id]) => (
              <a href={'#' + id} key={id}>{label}</a>
            ))}
          </nav>
          <a className="nav-cta" href="#hutan">Jelajahi cerita <ArrowRight size={14} /></a>
          <button
            className="mobile-menu-button"
            aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
        <nav className={'mobile-menu' + (menuOpen ? ' open' : '')} aria-label="Navigasi mobile">
          {navItems.map(([label, id]) => (
            <a href={'#' + id} key={id} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a href="#referensi" onClick={() => setMenuOpen(false)}>Sumber informasi</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-dot" /> SEBUAH CERITA TENTANG KEHIDUPAN DAN KEHILANGAN</div>
          <h1>Hutan adalah <em>napas</em> kehidupan.</h1>
          <p className="hero-copy">
            Tapi ketika hutan terbakar, yang hilang bukan hanya pepohonan.
            Udara yang kita hirup, air yang kita gunakan, satwa yang hidup,
            dan keseimbangan lingkungan ikut terancam.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#hutan">Mulai perjalanan <ArrowDown size={15} /></a>
            <a className="button-ghost" href="#kebakaran"><Play size={14} /> Lihat perubahan</a>
          </div>
        </div>
        <div className="hero-bottom">
          <span>01 — Hutan yang hidup</span>
          <span><span className="scroll-line" /> GULIR UNTUK MENJELAJAHI</span>
        </div>
      </section>

      <section className="section section-light anchor" id="hutan">
        <div className="section-inner">
          <SectionHeading
            number="01"
            kicker="Sebelum api datang"
            title={<>Hutan, sebuah dunia yang <em>hidup.</em></>}
            intro="Sebelum memahami kerusakannya, kita perlu mengenal apa yang sebenarnya dilindungi oleh hutan. Hutan bukan sekadar kumpulan pohon, melainkan rumah bagi kehidupan dan sistem alam yang saling terhubung."
          />
          <div className="grid-3">
            <article className="info-card reveal">
              <IconBox Icon={Trees} />
              <div className="mini-label">01 / Habitat</div>
              <h3>Rumah bagi keanekaragaman hayati</h3>
              <p>Hutan menyediakan tempat hidup, berkembang biak, berlindung, dan mencari makan bagi tumbuhan, hewan, jamur, serta mikroorganisme.</p>
            </article>
            <article className="info-card reveal">
              <IconBox Icon={Droplets} />
              <div className="mini-label">02 / Air dan tanah</div>
              <h3>Penjaga siklus air</h3>
              <p>Daun, akar, dan tanah hutan membantu mengatur aliran air, menjaga kelembapan, mengurangi erosi, dan mendukung daerah tangkapan air.</p>
            </article>
            <article className="info-card reveal">
              <IconBox Icon={Globe2} />
              <div className="mini-label">03 / Iklim</div>
              <h3>Penyimpan karbon alami</h3>
              <p>Pohon menyerap karbon dioksida ketika tumbuh dan menyimpan karbon pada batang, akar, daun, serta bahan organik tanah.</p>
            </article>
          </div>
          <div className="grid-2" style={{ marginTop: 18 }}>
            <div className="info-card reveal" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
              <IconBox Icon={Sun} />
              <div><h3>Menjaga suhu dan kelembapan</h3><p>Naungan pohon mengurangi paparan matahari langsung ke tanah. Penguapan air dari tumbuhan juga membantu membentuk kondisi mikroklimat yang lebih sejuk dan lembap.</p></div>
            </div>
            <div className="info-card reveal" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
              <IconBox Icon={Sprout} />
              <div><h3>Menopang kehidupan manusia</h3><p>Hutan menyediakan sumber pangan, bahan alami, mata pencaharian, nilai budaya, serta perlindungan lingkungan bagi jutaan orang.</p></div>
            </div>
          </div>
          <p className="body-copy" style={{ marginTop: 30 }}>
            <strong>Bayangkan hutan sebagai sebuah jaringan.</strong> Jika satu bagian rusak, bagian lain dapat ikut merasakan akibatnya. Karena itu, menjaga hutan berarti menjaga hubungan antara tanah, air, udara, tumbuhan, hewan, dan manusia.
          </p>
        </div>
      </section>

      <section className="transition-panel anchor" id="kebakaran">
        <div className="transition-content reveal">
          <div className="eyebrow"><span className="eyebrow-dot" style={{ background: '#f0a06b' }} /> 02 / SAAT KESEIMBANGAN TERGANGGU</div>
          <h2>Namun, satu kebakaran dapat mengubah <em>segalanya.</em></h2>
          <p>
            Api yang tidak terkendali dapat mengubah hutan hidup menjadi lanskap yang rusak.
            Dampaknya tidak berhenti ketika nyala api padam. Ada tanah yang kehilangan pelindung,
            satwa yang kehilangan rumah, dan asap yang dapat menjangkau wilayah jauh.
          </p>
          <a className="button-ghost" href="#perubahan">Lihat perubahan hutan <ArrowDown size={14} /></a>
        </div>
      </section>

      <section className="section section-dark anchor" id="perubahan">
        <div className="section-inner">
          <SectionHeading
            number="03"
            kicker="Geser untuk melihat"
            title={<>Satu kawasan. <em>Empat keadaan.</em></>}
            intro="Geser pengatur tahap untuk melihat bagaimana kondisi suatu kawasan dapat berubah. Ini adalah rangkaian visual ilustratif, bukan rekaman satu lokasi yang sama."
          />
          <div className="comparison reveal">
            <div
              className="scene-image"
              role="img"
              aria-label={selectedStage.name}
              style={{ backgroundImage: 'linear-gradient(' + selectedStage.overlay + ',' + selectedStage.overlay + '), url(' + selectedStage.image + ')' }}
            >
              <div className="scene-label">
                <span>{selectedStage.label}</span>
                <strong>{selectedStage.name}</strong>
              </div>
            </div>
            <div className="scene-content">
              <div className="stage-number">0{stage + 1} / 04</div>
              <h3 className="stage-title">{selectedStage.title}</h3>
              <p className="stage-copy">{selectedStage.copy}</p>
              <div className="range-wrap">
                <label className="mini-label" htmlFor="forest-stage">PILIH TAHAP PERUBAHAN</label>
                <input
                  id="forest-stage"
                  type="range"
                  min="0"
                  max="3"
                  step="1"
                  value={stage}
                  onChange={(event) => setStage(Number(event.target.value))}
                  aria-valuetext={selectedStage.name}
                />
                <div className="range-labels"><span>Hutan sehat</span><span>Awal gangguan</span><span>Terbakar</span><span>Pemulihan</span></div>
              </div>
              <div className="divider" />
              <p className="body-copy"><strong>Perlu diingat:</strong> tidak semua ekosistem merespons kebakaran dengan cara yang sama. Dampak dipengaruhi jenis hutan, intensitas, lama kejadian, kondisi cuaca, dan frekuensi kebakaran.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-paper anchor" id="penyebab">
        <div className="section-inner">
          <SectionHeading
            number="04"
            kicker="Memahami pemicunya"
            title={<>Bagaimana kebakaran <em>bisa terjadi?</em></>}
            intro="Api membutuhkan sumber penyalaan, bahan yang dapat terbakar, dan kondisi yang memungkinkan pembakaran berlangsung. Penyebab dan tingkat risiko berbeda di setiap lokasi."
          />
          <div className="grid-3">
            <article className="info-card reveal">
              <IconBox Icon={Users} />
              <h3>Aktivitas manusia</h3>
              <p>Pembukaan lahan dengan membakar, kelalaian, dan aktivitas lain yang menimbulkan sumber api dapat memicu kebakaran yang tidak terkendali.</p>
            </article>
            <article className="info-card reveal">
              <IconBox Icon={Sun} />
              <h3>Cuaca kering</h3>
              <p>Musim kemarau panjang, kelembapan rendah, dan suhu tinggi dapat mengeringkan vegetasi sehingga lebih mudah terbakar.</p>
            </article>
            <article className="info-card reveal">
              <IconBox Icon={Zap} />
              <h3>Petir dan kondisi alam</h3>
              <p>Petir dapat menjadi pemicu di sejumlah wilayah, terutama ketika vegetasi sedang kering. Namun, penyebab setiap kejadian harus dibuktikan.</p>
            </article>
          </div>
          <div className="callout reveal" style={{ marginTop: 22 }}>
            <div><h3>Cuaca bukan satu-satunya penyebab.</h3><p>Kondisi panas dan kering meningkatkan kerentanan, tetapi sumber penyalaan dan pengelolaan lahan juga berperan besar. Perubahan iklim dapat menggeser kondisi cuaca rawan kebakaran di beberapa kawasan.</p></div>
            <a className="button-primary" href="#simulator">Coba simulasi <ArrowRight size={14} /></a>
          </div>
          <div className="section-heading" style={{ marginTop: 90, marginBottom: 24 }}>
            <div><div className="section-kicker">Eksperimen edukasi</div><h2 style={{ fontSize: 'clamp(30px,4vw,46px)' }}>Ketika beberapa faktor <em>bertemu.</em></h2></div>
            <p className="section-intro">Atur kondisi ilustratif berikut. Lihat bagaimana kekeringan, bahan bakar vegetasi, dan angin dapat memengaruhi tingkat dukungan lingkungan terhadap kebakaran.</p>
          </div>
          <div className="simulator reveal anchor" id="simulator">
            <div className="dark-card sim-controls">
              <div className="sim-control"><label htmlFor="dryness">Kondisi kekeringan</label><output>{dryness}%</output><input id="dryness" type="range" min="0" max="100" value={dryness} onChange={(e) => setDryness(Number(e.target.value))} /></div>
              <div className="sim-control"><label htmlFor="fuel">Ketersediaan vegetasi kering</label><output>{fuel}%</output><input id="fuel" type="range" min="0" max="100" value={fuel} onChange={(e) => setFuel(Number(e.target.value))} /></div>
              <div className="sim-control"><label htmlFor="wind">Kondisi angin</label><output>{wind}%</output><input id="wind" type="range" min="0" max="100" value={wind} onChange={(e) => setWind(Number(e.target.value))} /></div>
              <button className="impact-option" style={{ marginTop: 4 }} onClick={() => setIgnition((value) => !value)} aria-pressed={ignition}>
                <span>{ignition ? <Flame size={17} /> : <ShieldCheck size={17} />}</span>
                <span>{ignition ? 'Sumber penyalaan ada dalam simulasi' : 'Tidak ada sumber penyalaan dalam simulasi'}</span>
                <span style={{ marginLeft: 'auto' }}>{ignition ? <Check size={16} /> : <X size={16} />}</span>
              </button>
            </div>
            <div className="sim-result">
              <span className="mini-label">HASIL ILUSTRASI</span>
              <div className="risk-gauge"><strong>{ignition ? riskScore + '/100' : '—'}</strong><span className="pill">{riskLabel}</span></div>
              <div className="risk-bar"><span style={{ width: (ignition ? riskScore : 0) + '%' }} /></div>
              <p className="body-copy" style={{ marginTop: 18 }}>{!ignition ? 'Tanpa sumber penyalaan, kondisi cuaca dan vegetasi saja tidak berarti kebakaran otomatis terjadi.' : riskScore >= 70 ? 'Dalam ilustrasi ini, kondisi kering, bahan vegetasi, dan angin secara bersamaan membuat lingkungan lebih mendukung penyebaran api.' : 'Perubahan satu faktor dapat mengubah kondisi. Pemantauan dan pencegahan tetap penting bahkan ketika skor ilustrasi lebih rendah.'}</p>
              <div className="notice">Simulasi konseptual untuk belajar, bukan alat prediksi, bukan angka probabilitas, dan tidak dapat digunakan untuk menilai keselamatan lokasi nyata.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark anchor" id="manusia">
        <div className="section-inner">
          <SectionHeading
            number="05"
            kicker="Dampak bagi manusia"
            title={<>Ketika asap mengganggu <em>kehidupan.</em></>}
            intro="Dampak karhutla tidak hanya dirasakan oleh orang yang berada dekat api. Asap dapat berpindah mengikuti angin dan menurunkan kualitas udara di daerah lain."
          />
          <div className="impact-layout reveal">
            <div className="impact-options" role="tablist" aria-label="Pilih dampak kebakaran">
              {impacts.map((impact) => (
                <button
                  key={impact.id}
                  className={'impact-option' + (activeImpact === impact.id ? ' active' : '')}
                  onClick={() => setActiveImpact(impact.id)}
                  role="tab"
                  aria-selected={activeImpact === impact.id}
                >
                  <span><impact.Icon size={17} /></span>{impact.label}
                </button>
              ))}
            </div>
            <div className="impact-detail" role="tabpanel">
              <IconBox Icon={selectedImpact.Icon} />
              <h3>{selectedImpact.title}</h3>
              <p>{selectedImpact.text}</p>
              <p>{selectedImpact.detail}</p>
              <small>◈ {selectedImpact.fact}</small>
            </div>
          </div>
          <div className="grid-2" style={{ marginTop: 20 }}>
            <article className="dark-card reveal"><div className="mini-label">KEHIDUPAN SEHARI-HARI</div><h3 style={{ marginTop: 12 }}>Sekolah, perjalanan, dan aktivitas dapat terhenti.</h3><p>Jarak pandang yang menurun dapat mengganggu transportasi. Kualitas udara yang buruk bisa membuat aktivitas luar ruang dibatasi dan kegiatan belajar terganggu.</p></article>
            <article className="dark-card reveal"><div className="mini-label">EKONOMI DAN SOSIAL</div><h3 style={{ marginTop: 12 }}>Kerugian menjalar ke banyak keluarga.</h3><p>Lahan pertanian dan usaha dapat rusak, mata pencaharian terganggu, biaya kesehatan meningkat, dan sebagian warga mungkin perlu mengungsi dari wilayah berbahaya.</p></article>
          </div>
        </div>
      </section>

      <section className="section section-paper anchor" id="ekosistem">
        <div className="section-inner">
          <SectionHeading
            number="06"
            kicker="Dampak terhadap ekosistem"
            title={<>Ketika rumah bagi kehidupan <em>menghilang.</em></>}
            intro="Ekosistem bekerja sebagai jaringan. Tumbuhan, hewan, tanah, air, jamur, dan mikroorganisme saling bergantung. Kebakaran dapat mengganggu banyak hubungan sekaligus."
          />
          <div className="grid-3">
            <article className="info-card reveal"><IconBox Icon={Bird} /><h3>Satwa kehilangan tempat hidup</h3><p>Hilangnya sarang, sumber makanan, dan tempat berlindung memaksa satwa berpindah. Perpindahan ini dapat menambah konflik dengan manusia.</p></article>
            <article className="info-card reveal"><IconBox Icon={Leaf} /><h3>Vegetasi dan regenerasi rusak</h3><p>Pohon muda, biji, akar, dan tumbuhan bawah dapat ikut terdampak. Kemampuan hutan untuk tumbuh kembali bergantung pada tingkat kerusakan dan kondisi setelah api.</p></article>
            <article className="info-card reveal"><IconBox Icon={Activity} /><h3>Rantai makanan terganggu</h3><p>Jika tumbuhan berkurang, herbivora kehilangan sumber makanan. Ketika populasi mangsa terganggu, predator dan organisme lain ikut terdampak.</p></article>
          </div>
          <div className="section-heading" style={{ marginTop: 82, marginBottom: 22 }}>
            <div><div className="section-kicker">Jelajahi hubungan kehidupan</div><h2 style={{ fontSize: 'clamp(30px,4vw,46px)' }}>Satu bagian hilang, <em>yang lain ikut berubah.</em></h2></div>
            <p className="section-intro">Pilih setiap tahap untuk melihat hubungan sederhana dalam rantai makanan hutan. Contoh ini dibuat sebagai ilustrasi, karena rantai makanan nyata jauh lebih kompleks.</p>
          </div>
          <div className="chain reveal">
            {[
              { title: 'Tumbuhan', sub: 'Produsen', body: 'Membuat makanan dengan energi matahari dan menjadi dasar bagi banyak rantai makanan.', Icon: Sprout },
              { title: 'Serangga', sub: 'Konsumen kecil', body: 'Sebagian serangga memakan daun, nektar, atau bagian tumbuhan lainnya.', Icon: Bug },
              { title: 'Katak / burung kecil', sub: 'Konsumen', body: 'Beberapa hewan memakan serangga dan menjadi makanan bagi predator berikutnya.', Icon: Bird },
              { title: 'Ular', sub: 'Predator', body: 'Ular tertentu memangsa katak, tikus, atau burung kecil sesuai jenis dan habitatnya.', Icon: Activity },
              { title: 'Elang', sub: 'Predator puncak', body: 'Predator puncak bergantung pada keberadaan mangsa dan habitat yang sehat.', Icon: Bird },
            ].map((node, index) => (
              <button className={'chain-item' + (activeChain === index ? ' selected' : '')} key={node.title} onClick={() => setActiveChain(index)} aria-pressed={activeChain === index}>
                <node.Icon size={20} color="#e7a071" />
                <strong>{node.title}</strong>
                <small>{node.sub}</small>
                {index < 4 && <ArrowRight className="chain-arrow" size={15} />}
              </button>
            ))}
          </div>
          <div className="dark-card reveal" style={{ marginTop: 14 }}>
            <div className="mini-label">BAGIAN YANG DIPILIH</div>
            <h3 style={{ marginTop: 10 }}>{['Tumbuhan menjadi dasar kehidupan', 'Serangga menghubungkan tumbuhan dan pemangsa', 'Pemakan serangga bergantung pada habitat', 'Predator membutuhkan mangsa dan ruang hidup', 'Predator puncak juga bergantung pada keseimbangan ekosistem'][activeChain]}</h3>
            <p>{['Jika vegetasi hilang, sumber makanan dan tempat berlindung bagi organisme lain dapat berkurang.', 'Ketika tumbuhan rusak, serangga pemakan tumbuhan dan penyerbuk dapat ikut kehilangan sumber daya.', 'Jika serangga berkurang, beberapa hewan pemakan serangga kehilangan sumber makanan.', 'Penurunan mangsa dapat membuat predator berpindah atau kesulitan mencari makanan.', 'Hewan di puncak rantai makanan tidak berdiri sendiri; kelangsungan hidupnya bergantung pada seluruh jaringan di bawahnya.'][activeChain]}</p>
          </div>
        </div>
      </section>

      <section className="section section-dark anchor" id="geografi">
        <div className="section-inner">
          <SectionHeading
            number="07"
            kicker="Dampak geografis dan lingkungan"
            title={<>Api mengubah hubungan <em>tanah, air, dan udara.</em></>}
            intro="Kebakaran dapat mengubah kondisi fisik suatu wilayah. Dampaknya paling jelas pada kawasan yang terbakar, kemudian dapat menyebar mengikuti aliran air dan pergerakan atmosfer."
          />
          <div className="chain reveal">
            {chainNodes.map((node, index) => (
              <button className={'chain-item' + (activeChain === index ? ' selected' : '')} key={node.title} onClick={() => setActiveChain(index)}>
                <node.Icon size={21} color="#e7a071" />
                <strong>{node.title}</strong>
                <small>{node.subtitle}</small>
                {index < chainNodes.length - 1 && <ArrowRight className="chain-arrow" size={15} />}
              </button>
            ))}
          </div>
          <div className="dark-card reveal" style={{ marginTop: 14 }}>
            <div className="mini-label">HUBUNGAN YANG DIPILIH</div>
            <h3 style={{ marginTop: 10 }}>{chainNodes[activeChain].title}: {chainNodes[activeChain].subtitle}</h3>
            <p>{chainNodes[activeChain].text}</p>
          </div>
          <div className="grid-2" style={{ marginTop: 28 }}>
            <article className="dark-card reveal">
              <div className="mini-label">01 / SUHU LOKAL</div>
              <h3 style={{ marginTop: 12 }}>Area terbuka dapat terasa lebih panas.</h3>
              <p>Hilangnya tajuk pohon mengurangi naungan dan dapat mengubah evapotranspirasi. Tanah yang terbuka menerima lebih banyak radiasi matahari sehingga suhu permukaan pada lokasi tertentu bisa meningkat.</p>
            </article>
            <article className="dark-card reveal">
              <div className="mini-label">02 / TANAH</div>
              <h3 style={{ marginTop: 12 }}>Erosi dan perubahan sifat tanah.</h3>
              <p>Panas dapat mengubah lapisan organik dan organisme tanah. Saat pelindung vegetasi hilang, tanah lebih rentan terkikis. Pada kondisi tertentu, sifat penyerapan air juga dapat berubah.</p>
            </article>
            <article className="dark-card reveal">
              <div className="mini-label">03 / AIR</div>
              <h3 style={{ marginTop: 12 }}>Sedimen dapat masuk ke sungai.</h3>
              <p>Abu dan tanah yang terlepas dapat terbawa aliran permukaan. Kekeruhan dan sedimentasi dapat meningkat, memengaruhi habitat air serta kualitas sumber air.</p>
            </article>
            <article className="dark-card reveal">
              <div className="mini-label">04 / ATMOSFER</div>
              <h3 style={{ marginTop: 12 }}>Asap dapat bergerak lintas wilayah.</h3>
              <p>Angin dapat membawa asap melampaui lokasi kebakaran. Konsentrasi polutan yang diterima suatu daerah bergantung pada sumber emisi, cuaca, jarak, dan kondisi atmosfer.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-paper anchor" id="iklim">
        <div className="section-inner">
          <SectionHeading
            number="08"
            kicker="Kebakaran dan iklim"
            title={<>Siklus yang bisa <em>saling memperkuat.</em></>}
            intro="Hubungan antara kebakaran dan perubahan iklim berlangsung dua arah. Penting membedakan pengaruh pada lokasi kebakaran dari kontribusinya terhadap iklim global."
          />
          <div className="grid-2">
            <article className="info-card reveal"><IconBox Icon={Flame} /><h3>Kebakaran menambah emisi</h3><p>Pembakaran biomassa melepaskan karbon dioksida dan gas lain. Jika hutan rusak, simpanan karbon yang ada dapat berkurang dan kemampuan menyimpan karbon di masa depan ikut menurun.</p></article>
            <article className="info-card reveal"><IconBox Icon={ThermometerSun} /><h3>Iklim dapat mengubah risiko</h3><p>Di beberapa wilayah, suhu yang meningkat dan perubahan pola hujan dapat memperpanjang kondisi kering. Ini dapat meningkatkan peluang cuaca yang mendukung kebakaran, bersama faktor pengelolaan lahan dan sumber penyalaan.</p></article>
          </div>
          <div className="callout reveal" style={{ marginTop: 20, background: 'linear-gradient(110deg, #633d2c, #30231d)' }}>
            <div><h3>Skala dampak tidak selalu sama.</h3><p><strong style={{ color: '#fff0df' }}>Lokal:</strong> suhu permukaan, naungan, dan kualitas udara di lokasi terdampak. <strong style={{ color: '#fff0df' }}>Regional:</strong> asap, gangguan aktivitas, dan kualitas udara lintas daerah. <strong style={{ color: '#fff0df' }}>Global:</strong> kontribusi emisi gas rumah kaca secara akumulatif.</p></div>
          </div>
          <div className="body-copy reveal" style={{ marginTop: 24 }}>
            Satu kejadian kebakaran tidak otomatis menaikkan suhu seluruh planet secara langsung. Namun, emisi dari banyak kebakaran yang terakumulasi dapat menambah pemanasan global, terutama ketika terjadi bersamaan dengan sumber emisi lainnya.
          </div>
        </div>
      </section>

      <section className="section section-dark anchor" id="gambut">
        <div className="section-inner">
          <SectionHeading
            number="09"
            kicker="Ekosistem gambut"
            title={<>Api yang tidak selalu <em>terlihat.</em></>}
            intro="Lahan gambut menyimpan bahan organik dalam lapisan tanah. Saat gambut mengering, kebakaran dapat merambat bukan hanya di atas permukaan, tetapi juga di bawah tanah."
          />
          <div className="peat-visual reveal">
            <div className="peat-art" aria-label="Ilustrasi penampang lapisan lahan gambut">
              <div className="peat-sky" />
              <div className="peat-tree" style={{ left: '28%' }} />
              <div className="peat-tree" style={{ left: '72%', height: 95 }} />
              <div className="peat-smoke" />
              <div className="peat-layer l1">LAPISAN VEGETASI & SERASAH</div>
              <div className="peat-layer l2">LAPISAN GAMBUT / BAHAN ORGANIK</div>
              <div className="peat-layer l3">TANAH LEMBAP & MUKA AIR TANAH</div>
            </div>
            <div className="peat-info">
              <div className="mini-label">PENAMPANG SEDERHANA · PILIH LAPISAN</div>
              <h3>{peatLayers[peatLayer].title}</h3>
              <p>{peatLayers[peatLayer].text}</p>
              <div className="peat-tabs" role="tablist" aria-label="Lapisan gambut">
                {peatLayers.map((layer, index) => <button key={layer.label} className={peatLayer === index ? 'active' : ''} onClick={() => setPeatLayer(index)} role="tab" aria-selected={peatLayer === index}>{layer.label}</button>)}
              </div>
            </div>
          </div>
          <div className="grid-2" style={{ marginTop: 20 }}>
            <article className="dark-card reveal"><h3>Mengapa menyimpan karbon?</h3><p>Gambut terbentuk dari sisa tumbuhan yang menumpuk dalam kondisi basah dan terurai lambat. Ketika kering dan terbakar, sebagian besar karbon yang tersimpan dapat dilepaskan ke atmosfer.</p></article>
            <article className="dark-card reveal"><h3>Mengapa sulit dipadamkan?</h3><p>Bara dapat bertahan di bawah permukaan dan sumber panasnya tidak selalu terlihat. Karena itu, pemadaman memerlukan pemeriksaan menyeluruh dan pengelolaan kondisi air gambut.</p></article>
          </div>
        </div>
      </section>

      <section className="section section-paper anchor" id="jangka-panjang">
        <div className="section-inner">
          <SectionHeading
            number="10"
            kicker="Setelah api padam"
            title={<>Dampak tidak berhenti <em>di hari itu.</em></>}
            intro="Kebakaran dapat menimbulkan dampak langsung dan dampak yang baru terlihat dalam jangka panjang. Kecepatan pemulihan tidak sama di setiap jenis ekosistem."
          />
          <div className="grid-2">
            <article className="info-card reveal">
              <div className="mini-label">JANGKA PENDEK</div><h3 style={{ marginTop: 12 }}>Hari hingga bulan</h3>
              <p>Kabut asap, penurunan kualitas udara, gangguan pernapasan, jarak pandang berkurang, kerusakan vegetasi, gangguan sekolah dan transportasi, serta kerusakan habitat secara langsung.</p>
            </article>
            <article className="info-card reveal">
              <div className="mini-label">JANGKA PANJANG</div><h3 style={{ marginTop: 12 }}>Bulan hingga bertahun-tahun</h3>
              <p>Perubahan kondisi tanah, erosi, perubahan komposisi spesies, gangguan siklus air, hilangnya keanekaragaman hayati, serta berkurangnya simpanan karbon.</p>
            </article>
          </div>
          <div className="section-heading" style={{ marginTop: 78, marginBottom: 24 }}>
            <div><div className="section-kicker">Gambaran perjalanan</div><h2 style={{ fontSize: 'clamp(30px,4vw,46px)' }}>Pemulihan adalah <em>proses.</em></h2></div>
            <p className="section-intro">Urutan berikut merupakan gambaran umum, bukan jadwal baku. Ekosistem tertentu dapat pulih lebih cepat, lebih lambat, atau berubah menjadi tipe vegetasi berbeda.</p>
          </div>
          <div className="timeline reveal">
            {[
              { year: 'Awal', title: 'Penanganan dan perlindungan', desc: 'Memastikan api benar-benar terkendali, melindungi masyarakat, dan mencegah kebakaran susulan.' },
              { year: 'Berikutnya', title: 'Pemulihan kondisi lahan', desc: 'Menjaga tanah dan sumber air, mengendalikan erosi, dan mengelola tata air gambut bila diperlukan.' },
              { year: 'Bertahap', title: 'Regenerasi ekosistem', desc: 'Memberi ruang bagi regenerasi alami dan memulihkan vegetasi dengan spesies yang sesuai.' },
              { year: 'Jangka panjang', title: 'Pemantauan dan perlindungan', desc: 'Memantau tumbuhan, satwa, air, dan tanah agar pemulihan berlangsung dan kerusakan tidak berulang.' },
            ].map((item) => <div className="timeline-card" key={item.year}><strong>{item.year}</strong><h3>{item.title}</h3><p>{item.desc}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section section-dark anchor" id="indonesia">
        <div className="section-inner">
          <SectionHeading
            number="11"
            kicker="Indonesia dan karhutla"
            title={<>Indonesia punya cerita yang <em>harus dipelajari.</em></>}
            intro="Karhutla berulang terjadi di berbagai wilayah Indonesia. Riwayatnya menunjukkan pentingnya pencegahan, pengawasan kawasan rawan, dan pengelolaan lahan yang bertanggung jawab."
          />
          <div className="grid-2">
            <div className="dark-card reveal">
              <div className="mini-label">DATA HISTORIS · LUAS KARHUTLA</div>
              <h3 style={{ marginTop: 12 }}>Luas area terbakar berubah dari tahun ke tahun.</h3>
              <p>Grafik berikut memakai satu seri data yang dikutip dari data KLHK untuk 2015–2019. Nilai dibulatkan pada label; lihat sumber untuk metode dan konteks pengumpulan datanya.</p>
              <div className="data-chart" role="img" aria-label="Grafik luas kebakaran hutan dan lahan tahun 2015 hingga 2019">
                {historicData.map((item) => <div className="chart-col" key={item.year}><span className="chart-value">{item.label}</span><div className="chart-bar-wrap"><div className="chart-bar" style={{ height: Math.max(8, (item.value / 2611411) * 100) + '%' }} /></div><span className="chart-year">{item.year}</span></div>)}
              </div>
              <p className="data-footnote">Satuan: hektare (ha). Seri historis yang dikutip menyebut 2015: 2.611.411 ha; 2016: 438.368 ha; 2017: 165.484 ha; 2018: 529.267 ha; 2019: 1.649.258 ha. Sumber: ringkasan data KLHK yang diberitakan pada 2024. Angka dapat berbeda dari publikasi lain karena revisi, metode pemetaan, dan cakupan.</p>
              <a href="https://news.detik.com/berita/d-7147094/jurus-klhk-kendalikan-deforestasi-dan-karhutla-di-indonesia" className="button-ghost" target="_blank" rel="noreferrer" style={{ marginTop: 14, width: 'fit-content' }}>Buka sumber data <ExternalLink size={13} /></a>
            </div>
            <div className="dark-card reveal">
              <div className="mini-label">PELAJARAN DARI SEJARAH</div>
              <h3 style={{ marginTop: 12 }}>Tiga periode yang menjadi pengingat.</h3>
              <div className="timeline" style={{ gridTemplateColumns: '1fr', marginTop: 23, gap: 18 }}>
                {[
                  { year: '1997–1998', title: 'Kebakaran besar dan kabut asap', desc: 'Periode kebakaran luas yang berdampak lintas wilayah, termasuk pada kesehatan, kegiatan ekonomi, dan lingkungan.' },
                  { year: '2015', title: 'Kebakaran dan krisis asap', desc: 'Kebakaran besar kembali menimbulkan kabut asap dan gangguan kehidupan masyarakat di sejumlah kawasan.' },
                  { year: '2019', title: 'Karhutla kembali meluas', desc: 'Luas kebakaran kembali tinggi dalam seri data KLHK yang banyak dirujuk. Pencegahan dan pengelolaan lahan tetap menjadi kebutuhan penting.' },
                ].map((item) => <div className="timeline-card" key={item.year}><strong>{item.year}</strong><h3>{item.title}</h3><p>{item.desc}</p></div>)}
              </div>
            </div>
          </div>
          <div className="callout reveal" style={{ marginTop: 20, background: 'linear-gradient(110deg, #653c2c, #2b211d)' }}>
            <div><h3>Catatan kondisi terkini</h3><p>BMKG pada 5 November 2026 melaporkan hotspot berkepercayaan tinggi di sejumlah provinsi dan mengingatkan bahwa hotspot tidak selalu berarti kebakaran. Periksa pemantauan terbaru melalui kanal resmi, karena situasi dapat berubah cepat.</p></div>
            <a className="button-primary" href="https://www.bmkg.go.id/cuaca/karhutla" target="_blank" rel="noreferrer">Pantauan BMKG <ArrowUpRight size={14} /></a>
          </div>
          <div className="dark-card reveal" style={{ marginTop: 14 }}>
            <div className="mini-label">PANTAUAN SATELIT</div>
            <h3 style={{ marginTop: 10 }}>Hotspot bukan peta pasti luas kebakaran.</h3>
            <p>NASA FIRMS menampilkan anomali termal yang dideteksi satelit. Deteksi dapat berkaitan dengan api, asap panas, aktivitas pertanian, atau sumber panas lain. Ukuran piksel satelit bukan berarti seluruh area di dalam piksel terbakar.</p>
            <a className="button-ghost" href="https://firms.modaps.eosdis.nasa.gov/map/" target="_blank" rel="noreferrer" style={{ marginTop: 14, width: 'fit-content' }}>Lihat NASA FIRMS <ExternalLink size={13} /></a>
          </div>
        </div>
      </section>

      <section className="section section-paper anchor" id="pencegahan">
        <div className="section-inner">
          <SectionHeading
            number="12"
            kicker="Pencegahan"
            title={<>Mencegah selalu lebih baik daripada <em>memulihkan.</em></>}
            intro="Pencegahan memerlukan kerja bersama. Masyarakat, pemerintah, dunia usaha, peneliti, dan media memiliki peran yang saling melengkapi."
          />
          <div className="grid-3">
            <article className="info-card reveal"><IconBox Icon={Users} /><h3>Peran masyarakat</h3><p>Tidak membuka lahan dengan membakar, menjaga lingkungan, mengikuti informasi resmi, dan melaporkan indikasi kebakaran kepada petugas setempat.</p></article>
            <article className="info-card reveal"><IconBox Icon={ShieldCheck} /><h3>Peran pemerintah</h3><p>Memperkuat pengawasan, sistem peringatan dini, edukasi, penegakan aturan, kesiapsiagaan, dan koordinasi pemadaman serta pemulihan.</p></article>
            <article className="info-card reveal"><IconBox Icon={Trees} /><h3>Peran perusahaan</h3><p>Mengelola lahan secara bertanggung jawab, tidak membuka lahan dengan membakar, menjaga kawasan bernilai konservasi, dan membangun pencegahan yang terukur.</p></article>
          </div>
          <div className="callout reveal" style={{ marginTop: 20 }}>
            <div><h3>Jangan mendekati api untuk merekam.</h3><p>Jika melihat kebakaran, utamakan keselamatan. Jaga jarak, hindari area berasap, dan sampaikan informasi lokasi kepada petugas atau layanan darurat setempat. Jangan mencoba memadamkan kebakaran hutan sendiri.</p></div>
            <a className="button-primary" href="https://www.bmkg.go.id/cuaca/karhutla" target="_blank" rel="noreferrer">Cek informasi resmi <ArrowUpRight size={14} /></a>
          </div>
        </div>
      </section>

      <section className="section section-forest anchor" id="pemulihan">
        <div className="section-inner">
          <SectionHeading
            number="13"
            kicker="Pemulihan ekosistem"
            title={<>Alam bisa pulih, tetapi perlu <em>waktu dan perlindungan.</em></>}
            intro="Memulihkan hutan bukan sekadar menanam bibit. Kita juga perlu memulihkan tanah, air, habitat, keanekaragaman hayati, dan hubungan antarorganisme."
          />
          <div className="grid-3">
            <article className="dark-card reveal"><IconBox Icon={Sprout} /><h3>Regenerasi alami</h3><p>Memberi ruang bagi tumbuhan lokal tumbuh kembali ketika kondisi tanah, sumber biji, dan lingkungan masih mendukung.</p></article>
            <article className="dark-card reveal"><IconBox Icon={Droplets} /><h3>Memulihkan tata air</h3><p>Menjaga kelembapan kawasan, terutama pada lahan gambut, serta melindungi aliran air dan tanah dari kerusakan lanjutan.</p></article>
            <article className="dark-card reveal"><IconBox Icon={PawPrint} /><h3>Melindungi habitat</h3><p>Memulihkan ruang hidup satwa, memantau keanekaragaman hayati, dan mengurangi gangguan selama ekosistem berkembang kembali.</p></article>
          </div>
          <div className="divider" />
          <div className="body-copy reveal"><strong>Pemulihan perlu disesuaikan dengan ekosistem setempat.</strong> Menanam spesies yang tidak sesuai dapat menciptakan masalah baru. Karena itu, restorasi sebaiknya mengikuti kajian lingkungan dan melibatkan masyarakat lokal yang memahami kawasan tersebut.</div>
        </div>
      </section>

      <section className="section section-light" id="fakta">
        <div className="section-inner">
          <SectionHeading
            number="14"
            kicker="Bawa pengetahuan ini"
            title={<>Satu fakta kecil bisa memulai <em>percakapan besar.</em></>}
            intro="Pilih fakta singkat, bagikan, atau buat kartu vertikal yang bisa disimpan untuk konten edukasi media sosial."
          />
          <div className="grid-2">
            <div className="fact-card reveal">
              <span className="fact-eyebrow">FAKTA LINGKUNGAN / 01</span>
              <div><strong>Asap kebakaran tidak berhenti di tepi hutan.</strong><p>Asap dapat terbawa angin hingga jauh. Partikel halus di dalamnya dapat mengganggu kesehatan.</p></div>
              <div className="fact-actions">
                <button onClick={shareFact}><Share2 size={13} /> Bagikan fakta</button>
                <button onClick={downloadFactCard}><ArrowDown size={13} /> Buat kartu 9:16</button>
              </div>
            </div>
            <div className="info-card reveal" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div><div className="mini-label">TANTANGAN KECIL</div><h3 style={{ font: '400 31px/1.12 Georgia,serif', marginTop: 15 }}>Bisakah kamu membedakan mitos dan fakta?</h3><p style={{ marginTop: 12 }}>Enam pernyataan di bawah ini menguji pemahaman umum tentang karhutla. Ketuk setiap kartu untuk membuka penjelasannya.</p></div>
              <a className="button-primary" href="#mitos" style={{ width: 'fit-content', marginTop: 20 }}>Mulai eksplorasi <ArrowDown size={14} /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark anchor" id="mitos">
        <div className="section-inner">
          <SectionHeading
            number="15"
            kicker="Mitos vs fakta"
            title={<>Jangan sampai salah <em>memahami.</em></>}
            intro="Informasi yang keliru dapat membuat kita meremehkan bahaya atau salah membaca data. Ketuk kartu untuk membuka penjelasan singkat."
          />
          <div className="myth-grid reveal">
            {myths.map((item, index) => (
              <button className="myth-card" key={item.myth} onClick={() => setOpenMyth(openMyth === index ? null : index)} aria-expanded={openMyth === index}>
                <span className="myth-tag">{openMyth === index ? 'FAKTA' : 'MITOS / PERNYATAAN'} · 0{index + 1}</span>
                <div>
                  <strong>{item.myth}</strong>
                  {openMyth === index && <p>{item.fact}</p>}
                </div>
                <span className="turn-label">{openMyth === index ? 'Tutup penjelasan' : 'Ketuk untuk melihat fakta'} <ChevronDown size={13} /></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-paper anchor" id="kuis">
        <div className="section-inner">
          <SectionHeading
            number="16"
            kicker="Uji pemahaman"
            title={<>Seberapa jauh kamu mengenal <em>karhutla?</em></>}
            intro="Jawab sepuluh pertanyaan singkat tentang hutan, kesehatan, ekosistem, gambut, dan iklim. Setiap jawaban dilengkapi penjelasan."
          />
          <div className="quiz-shell reveal">
            <aside className="quiz-aside">
              <span className="pill"><Sparkles size={12} /> KUIS EDUKASI</span>
              <h3>Belajar sambil menguji diri.</h3>
              <p>Jawaban yang salah bukan masalah. Baca penjelasannya, lalu coba lagi sampai kamu semakin memahami hubungan antara hutan dan kehidupan.</p>
              <div className="divider" />
              <div className="mini-label">SKOR TERBAIK TERSIMPAN</div>
              <div style={{ marginTop: 8, font: '400 38px Georgia,serif', color: '#e7ad80' }}>{bestScore === null ? '—' : bestScore + '/10'}</div>
              <p style={{ fontSize: 11, marginTop: 5 }}>Tersimpan di perangkat ini saja.</p>
            </aside>
            <div className="quiz-panel">
              {!quizDone ? (
                <>
                  <div className="quiz-meta"><span>PERTANYAAN {quizIndex + 1} DARI {questions.length}</span><span>SKOR SEMENTARA: {quizScore}</span></div>
                  <div className="quiz-progress"><span style={{ width: (((quizIndex + 1) / questions.length) * 100) + '%' }} /></div>
                  <h3>{currentQuestion.question}</h3>
                  <div className="quiz-options">
                    {currentQuestion.options.map((option, index) => (
                      <button key={option} className={quizAnswer === index ? 'chosen' : ''} onClick={() => setQuizAnswer(index)} aria-pressed={quizAnswer === index}>
                        <span style={{ display: 'inline-block', width: 25, color: '#78906f' }}>{String.fromCharCode(65 + index)}.</span>{option}
                      </button>
                    ))}
                  </div>
                  {quizAnswer !== null && <div className="quiz-explanation"><strong>{quizAnswer === currentQuestion.answer ? 'Benar!' : 'Belum tepat.'}</strong> {currentQuestion.explanation}</div>}
                  <button className="quiz-next" onClick={nextQuestion} disabled={quizAnswer === null} style={{ opacity: quizAnswer === null ? .45 : 1 }}>
                    {quizIndex === questions.length - 1 ? 'Lihat hasil akhir' : 'Pertanyaan berikutnya'} <ArrowRight size={14} style={{ verticalAlign: 'middle', marginLeft: 5 }} />
                  </button>
                </>
              ) : (
                <div className="quiz-result">
                  <div className="mini-label">HASIL KUIS KAMU</div>
                  <strong>{quizScore}/10</strong>
                  <p>{quizScore >= 8 ? 'Hebat! Kamu sudah memahami banyak hubungan antara kebakaran hutan dan kehidupan.' : quizScore >= 5 ? 'Awal yang bagus. Baca lagi bagian yang penjelasannya belum kamu kuasai.' : 'Tidak apa-apa. Kembali ke materi, pelajari penjelasannya, lalu coba sekali lagi.'}</p>
                  <button className="quiz-next" onClick={restartQuiz}><RefreshCw size={14} style={{ verticalAlign: 'middle', marginRight: 6 }} /> Ulangi kuis</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark anchor" id="referensi">
        <div className="section-inner">
          <SectionHeading
            number="17"
            kicker="Baca lebih lanjut"
            title={<>Pengetahuan yang baik perlu <em>sumber yang jelas.</em></>}
            intro="Materi ini disusun untuk edukasi umum. Gunakan referensi berikut untuk membaca data, pemantauan, dan penjelasan ilmiah lebih lanjut."
          />
          <div className="reference-grid reveal">
            {sources.map((source) => (
              <a className="reference-card" href={source.url} target="_blank" rel="noreferrer" key={source.title}>
                <small>{source.org}</small>
                <strong>{source.title}</strong>
                <span>{source.desc}</span>
                <ArrowUpRight size={15} />
              </a>
            ))}
          </div>
          <div className="notice" style={{ marginTop: 22 }}>
            Catatan data: grafik 2015–2019 menggunakan satu seri historis yang dikutip dari data KLHK. Publikasi resmi yang berbeda dapat menunjukkan angka berbeda karena pembaruan, cakupan wilayah, dan metode pemetaan. Data hotspot satelit juga tidak sama dengan luas area terbakar. Periksa tanggal publikasi dan definisi indikator sebelum membandingkan angka.
          </div>
        </div>
      </section>

      <section className="section section-light" id="penutup">
        <div className="section-inner">
          <div className="section-heading reveal" style={{ gridTemplateColumns: '1fr', maxWidth: 850 }}>
            <div>
              <div className="section-kicker">Satu bumi · Banyak kehidupan</div>
              <h2>Jangan tunggu sampai hutan hanya menjadi <em>kenangan.</em></h2>
              <p className="section-intro" style={{ marginTop: 20, maxWidth: 650 }}>
                Menjaga hutan berarti menjaga kehidupan manusia, satwa, tumbuhan, air, udara, dan masa depan. Perubahan besar selalu membutuhkan tindakan bersama — dimulai dari pemahaman yang benar.
              </p>
            </div>
          </div>
          <div className="callout reveal">
            <div><h3>Mulai dari hal kecil, jaga hutan kita.</h3><p>Bagikan pengetahuan ini, dukung pengelolaan lingkungan yang bertanggung jawab, dan jangan menormalisasi pembakaran lahan.</p></div>
            <button className="button-primary" onClick={shareSite}>Bagikan website <Share2 size={14} /></button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <a className="brand" href="#top"><span className="brand-mark"><Leaf size={18} /></span><span>HUTAN KITA<small>SEBUAH DOKUMENTER EDUKASI</small></span></a>
              <p>Website edukasi interaktif untuk memahami bahaya kebakaran hutan dan lahan, serta hubungan antara hutan dan kehidupan.</p>
            </div>
            <div className="footer-links">
              <a href="#hutan">Mengenal hutan</a>
              <a href="#manusia">Dampak manusia</a>
              <a href="#geografi">Dampak geografis</a>
              <a href="#gambut">Lahan gambut</a>
              <a href="#pencegahan">Pencegahan</a>
              <a href="#referensi">Referensi</a>
              <a href="https://www.bmkg.go.id/cuaca/karhutla" target="_blank" rel="noreferrer">Pemantauan BMKG ↗</a>
            </div>
          </div>
          <div className="footer-bottom"><span>© 2026 · BAHAYA KEBAKARAN HUTAN</span><span>Dibuat untuk edukasi dan kepedulian lingkungan.</span></div>
        </div>
      </footer>

      {toast && <div className="toast" role="status">{toast}</div>}
      <button className="back-top" aria-label="Kembali ke atas" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUp size={18} /></button>
    </main>
  );
}
