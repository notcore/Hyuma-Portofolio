import { MapPin, Github, Instagram, Phone, Mail, Download, ArrowUpRight } from "lucide-react";

const socials = [
  { icon: Github,    href: "https://github.com/notcore",         label: "GitHub",    value: "notcore" },
//   { icon: Instagram, href: "https://instagram.com/mistakee._", label: "Instagram", value: "@dava.elyanta" },
  { icon: Phone,      href: "https://wa.me/6281215997620",           label: "whatsapp",  value: "6281215997620" },
  { icon: Mail,      href: "mailto:dava@email.com",              label: "Email",     value: "dava@email.com" },
];

const quickNav = [
  { label: "About",      id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects",   id: "projects" },
  { label: "Contact",    id: "contact" },
];

const skills = ["Next.js", "React", "Laravel", "Tailwind CSS", "Cisco", "Mikrotik"];

// ── Corner bracket decorator (sama kayak Label) ──────────────────────────────
const Corners = ({ className = "" }: { className?: string }) => (
  <>
    <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 ${className}`} />
    <div className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 ${className}`} />
    <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 ${className}`} />
    <div className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 ${className}`} />
  </>
);

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-black/[0.07] mt-10 px-6 md:px-10 pt-10 pb-6">

      {/* ── Grid utama ──────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

        {/* Kolom 1 — Identitas */}
        <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-3">
          <div className="relative w-10 h-10 rounded-full bg-[#f0f0ee] border border-black/[0.09] overflow-hidden">
            <img
              src="/assets/img/profile/profile.jfif"
              alt="Dava Elyanta"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-coolvetica text-xl leading-tight">Dava Elyanta</p>
            <p className="text-xs text-neutral-400 mt-0.5">Fresh Graduate</p>
          </div>
          <div className="flex items-center gap-1 text-xs text-blue-600">
            <MapPin size={10} />
            Yogyakarta, Indonesia
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed mt-1">
            Lulusan SMK Teknik Komputer Jaringan, tertarik di bidang web development dan networking.
          </p>
        </div>


        {/* Kolom 3 — Skills */}
        <div className="flex flex-col gap-3">
          <p className="text-[10px] tracking-widest uppercase text-neutral-300 font-medium">Skills</p>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((s) => (
              <span
                key={s}
                className="text-[10px] px-2 py-0.5 border border-black/[0.08] text-neutral-500 rounded-sm font-minecraft"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Kolom 4 — Kontak */}
        <div className="flex flex-col gap-3">
          <p className="text-[10px] tracking-widest uppercase text-neutral-300 font-medium">Hubungi</p>
          <ul className="flex flex-col gap-2.5">
            {socials.map(({ icon: Icon, href, label, value }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 group"
                >
                  <div className="w-6 h-6 rounded-sm border border-black/[0.08] flex items-center justify-center text-neutral-400 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all flex-shrink-0">
                    <Icon size={12} />
                  </div>
                  <span className="text-[12px] text-neutral-500 group-hover:text-blue-600 transition-colors truncate">
                    {value}
                  </span>
                  <ArrowUpRight size={10} className="ml-auto text-neutral-300 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </footer>
  );
}