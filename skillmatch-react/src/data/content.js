import {
  Bell,
  Check,
  Compass,
  Crosshair,
  FileQuestion,
  Folder,
  Image,
  Layers,
  Search,
  Scale,
  SlidersHorizontal,
  Star,
  UserCheck,
  Zap,
} from 'lucide-react';

export const problems = [
  {
    icon: FileQuestion,
    title: 'Terlalu Banyak Requirement',
    description:
      'Sulit menentukan lowongan mana yang benar-benar sesuai dengan skill yang kamu miliki.',
  },
  {
    icon: Scale,
    title: 'Sulit Menilai Kecocokan',
    description:
      'Tidak selalu mudah mengetahui apakah pengalaman dan portfolio kamu cocok dengan sebuah posisi.',
  },
  {
    icon: Compass,
    title: 'Rekomendasi Kurang Relevan',
    description:
      'Temukan pekerjaan yang lebih sesuai dengan kemampuan dan tujuan kariermu.',
  },
];

export const features = [
  {
    icon: Crosshair,
    chip: 'Intelligent Engine',
    title: 'Skill Match',
    description: 'Temukan pekerjaan berdasarkan skill yang kamu miliki.',
    previews: [
      { icon: Check, className: 'micro-tag match-tag', text: 'Figma 100%' },
      { icon: Check, className: 'micro-tag match-tag', text: 'Photography 95%' },
    ],
  },
  {
    icon: Star,
    chip: 'Personalisasi',
    title: 'Job Recommendation',
    description: 'Dapatkan rekomendasi lowongan yang relevan dengan profilmu.',
    previews: [
      {
        icon: Bell,
        className: 'micro-tag info-tag',
        text: 'Notifikasi Lowongan Relevan',
      },
    ],
  },
  {
    icon: Folder,
    chip: 'Karya Nyata',
    title: 'Portfolio Match',
    description: 'Ketahui seberapa sesuai portfolio kamu dengan posisi yang dituju.',
    previews: [
      {
        icon: Image,
        className: 'micro-tag success-tag',
        text: 'Penilaian Relevansi Proyek',
      },
    ],
  },
  {
    icon: Search,
    chip: 'Pencarian Cepat',
    title: 'Smart Search',
    description: 'Cari lowongan berdasarkan role, skill, pengalaman, dan preferensi.',
    previews: [
      {
        icon: SlidersHorizontal,
        className: 'micro-tag filter-tag',
        text: 'Multi-filter Fleksibel',
      },
    ],
  },
];

export const steps = [
  {
    number: '01',
    icon: UserCheck,
    title: 'Lengkapi Profil',
    description:
      'Tambahkan informasi tentang pengalaman dan bidang yang kamu minati.',
  },
  {
    number: '02',
    icon: Layers,
    title: 'Tambahkan Skill & Portfolio',
    description: 'Masukkan skill yang kamu kuasai dan tampilkan karya terbaikmu.',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Temukan Job Match',
    description:
      'Dapatkan rekomendasi pekerjaan yang paling relevan dengan profilmu.',
  },
];

export const jobs = [
  {
    id: 'uiux',
    initials: 'CS',
    avatarClass: 'avatar-cs',
    title: 'UI/UX Designer',
    company: 'Creative Studio',
    match: '92% Match',
    matchNote: 'Tinggi kecocokannya dengan profilmu',
    salary: 'Rp 6–8 jt',
    type: 'Remote',
    tags: ['Figma', 'UI Design', 'UX Research'],
    skills: [
      { name: 'Figma', percent: 100 },
      { name: 'UI Design', percent: 95 },
      { name: 'UX Research', percent: 85 },
    ],
    description:
      'Creative Studio mencari UI/UX Designer yang berfokus pada desain antarmuka aplikasi web dan riset user journey yang intuitif. Sangat cocok bagi desainer dengan portfolio studi kasus terstruktur.',
  },
  {
    id: 'visual',
    initials: 'PC',
    avatarClass: 'avatar-pc',
    title: 'Visual Designer',
    company: 'Pixel Creative',
    match: '87% Match',
    matchNote: 'Cocok dengan keahlian visualmu',
    salary: 'Rp 5–7 jt',
    type: 'Hybrid',
    tags: ['Branding', 'Illustrator', 'Visual Design'],
    skills: [
      { name: 'Brand Identity', percent: 90 },
      { name: 'Illustrator', percent: 90 },
      { name: 'Visual Design', percent: 85 },
    ],
    description:
      'Pixel Creative membutuhkan Visual Designer untuk menangani kampanye identitas visual merek klien digital, pembuatan aset marketing, serta ilustrasi vektor modern.',
  },
  {
    id: 'content',
    initials: 'MW',
    avatarClass: 'avatar-mw',
    title: 'Content Creator',
    company: 'MediaWorks',
    match: '84% Match',
    matchNote: 'Sesuai portfolio visual & foto',
    salary: 'Rp 5–7 jt',
    type: 'Remote',
    tags: ['Photography', 'Content', 'Social Media'],
    skills: [
      { name: 'Photography', percent: 95 },
      { name: 'Short-form Video', percent: 80 },
      { name: 'Social Strategy', percent: 80 },
    ],
    description:
      'MediaWorks mencari Content Creator yang memiliki mata fotografi kuat dan kemampuan menyusun storytelling visual untuk platform digital modern. Peluang luar biasa untuk talenta visual yang ingin berkembang.',
  },
];
