"use client";

import { User, Briefcase, Code2, Mail, MapPin, Phone, Instagram, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import DownloadCV from "@/components/ui/Download"

const navItems = [
  { icon: User,      label: "About",      id: "about" },
  { icon: Briefcase, label: "Experience", id: "experience" },
  { icon: Code2,     label: "Projects",   id: "projects" },
  { icon: Mail,      label: "Contact",    id: "contact" },
];

const contacts = [
  {
    icon: Phone,
    label: "whatsapp",
    value: "6281215997620",
    href: "https://wa.me/6281215997620",
  },
  {
    icon: Mail,
    label: "Email",
    value: "davaelyanta@email.com",
    href: "mailto:davaelyanta@email.com",
  },
];

export default function Sidebar({ active }: { active: string }) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="w-[252px] ml-[10%] min-w-[252px] fixed top-0 left-0 h-screen bg-white border-r border-black/[0.08] flex-col hidden lg:flex">

      {/* Profile */}
      <div className="px-[22px] pt-[26px] pb-[18px]">
        <div className="w-14 h-14 rounded-full bg-[#f0f0ee] border border-black/[0.09] overflow-hidden mb-[13px]">
          <img
            src="/assets/img/profile/profile.webp"
            alt="Dava Elyanta"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="font-coolvetica text-2xl leading-tight">Dava Elyanta</p>
        <p className="text-sm text-neutral-400 mb-2.5">Fresh Graduate</p>
        <div className="flex items-center gap-1 text-sm text-blue-600">
          <MapPin size={11} />
          Yogyakarta, Indonesia
        </div>
        
      <DownloadCV />
      </div>

      {/* Nav */}
      <nav className="p-3 border-t border-black/[0.07]">
        <ul className="flex flex-col gap-px">
          {navItems.map(({ icon: Icon, label, id }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className="relative w-full flex items-center gap-2.5 px-2.5 py-[7px] rounded-[7px] text-left hover:bg-neutral-50 transition-colors group"
                >
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-3.5 bg-blue-600 rounded-r-sm" />
                  )}
                  <Icon
                    size={14}
                    className={cn(
                      "flex-shrink-0 transition-colors",
                      isActive ? "text-blue-600" : "text-neutral-300 group-hover:text-neutral-500"
                    )}
                  />
                  <span className={cn(
                    "text-[13px] transition-colors",
                    isActive ? "text-blue-600 font-medium" : "text-neutral-400 group-hover:text-neutral-600"
                  )}>
                    {label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Kontak */}
      <div className="flex-1 px-[22px] py-4 border-t border-black/[0.07] flex flex-col gap-3">
        {contacts.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/contact flex items-center gap-2.5 hover:text-blue-600 transition-colors"
          >
            <div className="relative">
              <div className="w-7 h-7 rounded-[6px] border border-black/[0.09] flex items-center justify-center text-neutral-400 group-hover/contact:border-blue-200 group-hover/contact:bg-blue-50 group-hover/contact:text-blue-600 transition-all">
                <Icon size={13} />
              </div>
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-neutral-300 leading-none mb-0.5">{label}</p>
              <p className="text-[12px] text-neutral-500 group-hover/contact:text-blue-600 transition-colors truncate">
                {value}
              </p>
            </div>
          </a>
        ))}
      </div>


    </aside>
  );
}