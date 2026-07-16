
import { Code2, Network, Server, Briefcase } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─────────────────────────────────────────────
// Mode
// ─────────────────────────────────────────────
export type Mode = "programming" | "jaringan" ;
// | "server" | "office";

export type ProjectBlog = {
  coverImage?: string;  
  readTime?: string;   
  publishedAt?: string; 
};

export type ProjectItem = {
  id: number;
  slug: string;
  title: string;
  year: string;
  description: string;
  techs: string[];
  link?: string;
  repo?: string;
  photo?: string;
  status?: "online" | "offline" | "warning";
  ipRange?: string;
  uptime?: string;
  cpu?: number;
  ram?: number;
  client?: string;
  role?: string;
  blog?: ProjectBlog;
};

export type ModeConfig = {
  label: string;
  Icon: LucideIcon;
  activeColor: string;
};

export const modeConfig: Record<Mode, ModeConfig> = {
  programming: { label: "dev",        Icon: Code2,     activeColor: "text-blue-600"    },
  jaringan:    { label: "Network",    Icon: Network,   activeColor: "text-blue-400"    },
  // server:      { label: "OS",         Icon: Server,    activeColor: "text-cyan-400"    },
  // office:      { label: "Office",     Icon: Briefcase, activeColor: "text-green-400"   },
};

export const projectsData: Record<Mode, ProjectItem[]> = {
  programming: [
    {
      id: 1,
      slug: "membuat-website-client",
      title: "Membuat website client",
      year: "2025",
      description: "Membuat website portofolio seorang desainer grafis.",
      techs: ["NextJs", "React", "Tailwind CSS"],
      link: "https://colorfull-nine.vercel.app",
      repo: "https://github.com/notcore",
      photo: "/assets/img/projects/freelance.webp",
    },
    {
      id: 2,
      slug: "inker-business-website",
      title: "Inker: Business Website",
      year: "2026",
      description: "Tahap design untuk pembuatan website SOP & Client management.",
      techs: ["Laravel", "TailwindCSS"],
      repo: "https://github.com/notcore",
      photo: "/assets/img/projects/inker.webp",
    },
    {
      id: 3,
      slug: "portfolio-website",
      title: "Portfolio Website",
      year: "2026",
      description: "Membuat website portofolio personal sederhana.",
      techs: ["NextJs", "TypeScript", "TailwindCSS"],
      link: "https://hyuma-portofolio.vercel.app",
      repo: "https://github.com/notcore",
      photo: "/assets/img/projects/portofolio.webp",
    },
  ],

  jaringan: [
    {
      id: 1,
      slug: "Implementasi-jaringan-LAN",
      title: "Implementasi jaringan LAN",
      year: "2025",
      description: "Dokumentasi ini berisi proses praktik UKK TKJ mulai dari perancangan alat dan bahan, topologi jaringan sederhana dengan pengalamatan IP manual hingga implementasi konfigurasi router, dan switch pada mikrotik agar tercapai konektivitas antar perangkat PC Server dan Client.",
      techs: ["Winbox","Mikrotik"],
      photo: "/assets/img/projects/router.webp",
      status: "online",
      ipRange: "192.168.1.0/24",
      blog: { readTime: "7 min read", publishedAt: "April 2025" },
    },
    {
      id: 2,
      slug: "Membuat-virtual-lab",
      title: "Membuat virtual lab",
      year: "2026",
      description: "Dokumentasi ini berisi proses pembuatan virtual lab di Virtual Machine menggunakan winbox, RoutesOS, dan Alpine OS.",
      techs: ["Winbox","Mikrotik","VirtualMachine"],
      photo: "/assets/img/projects/virtual.webp",
      status: "online",
      ipRange: "192.168.1.0/24",
      // blog: { readTime: "7 min read", publishedAt: "Maret 2026" },
    },
  ],

  // server: [
  //   {
  //     id: 1,
  //     slug: "docker-compose-stack",
  //     title: "Docker Compose Stack",
  //     year: "2025",
  //     description: "Setup container stack untuk staging dan production environment multi-service.",
  //     techs: ["Docker", "Nginx", "Postgres"],
  //     repo: "https://github.com/notcore",
  //     uptime: "99.9%",
  //     cpu: 34,
  //     ram: 61,
  //     blog: { readTime: "8 min read", publishedAt: "Mei 2025" },
  //   },
  //   {
  //     id: 2,
  //     slug: "cicd-pipeline",
  //     title: "CI/CD Pipeline",
  //     year: "2025",
  //     description: "Pipeline deployment otomatis dengan GitHub Actions ke VPS self-hosted.",
  //     techs: ["GitHub Actions", "SSH", "Linux"],
  //     repo: "https://github.com/notcore",
  //     uptime: "98.7%",
  //     cpu: 12,
  //     ram: 44,
  //   },
  //   {
  //     id: 3,
  //     slug: "backup-automation",
  //     title: "Backup Automation",
  //     year: "2026",
  //     description: "Sistem backup terjadwal ke object storage dengan enkripsi dan notifikasi.",
  //     techs: ["Bash", "Rclone", "Cron"],
  //     repo: "https://github.com/notcore",
  //     uptime: "100%",
  //     cpu: 5,
  //     ram: 28,
  //   },
  // ],

  // office: [
  //   {
  //     id: 1,
  //     slug: "administrasi-surat-dinas",
  //     title: "Administrasi Surat Dinas",
  //     year: "2025",
  //     description: "Pengelolaan surat masuk dan keluar dinas secara digital.",
  //     techs: ["Microsoft Word", "Excel", "Google Drive"],
  //     client: "Instansi Pemerintah",
  //     role: "Staff Administrasi",
  //   },
  //   {
  //     id: 2,
  //     slug: "laporan-keuangan-bulanan",
  //     title: "Laporan Keuangan Bulanan",
  //     year: "2025",
  //     description: "Rekap dan penyusunan laporan keuangan operasional bulanan.",
  //     techs: ["Excel", "Google Sheets"],
  //     client: "Internal",
  //     role: "Operator Keuangan",
  //     blog: { readTime: "3 min read", publishedAt: "Agustus 2025" },
  //   },
  //   {
  //     id: 3,
  //     slug: "dokumentasi-kegiatan",
  //     title: "Dokumentasi Kegiatan",
  //     year: "2026",
  //     description: "Penyusunan dokumentasi dan notulensi kegiatan rapat dan acara kantor.",
  //     techs: ["Canva", "Google Docs", "PowerPoint"],
  //     client: "Internal",
  //     role: "Dokumentasi",
  //   },
  // ],
};