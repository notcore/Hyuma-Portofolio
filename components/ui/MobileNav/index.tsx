"use client";

import { useState } from "react";
import { User, Briefcase, Code2, Award, Mail, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import DownloadCV from "@/components/ui/Download";

const navItems = [
  { icon: User,      label: "About",      id: "about" },
  { icon: Briefcase, label: "Experience", id: "experience" },
  { icon: Code2,     label: "Projects",   id: "projects" },
  { icon: Award,     label: "Certificate",   id: "certificate" },
  { icon: Mail,      label: "Contact",    id: "contact" },
];

export default function MobileNav({ active }: { active: string }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <div className="lg:hidden">
      {/* Topbar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-white/80 backdrop-blur-md border-b border-black/[0.07] flex items-center justify-between px-5">
        <p className="font-coolvetica text-lg">Dava Elyanta</p>

        <button
          onClick={() => setOpen((v) => !v)}
          className="relative w-8 h-8 flex items-center justify-center rounded-md border border-black/[0.09] text-neutral-500 hover:bg-neutral-50 transition-colors"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute"
              >
                <X size={15} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute"
              >
                <Menu size={15} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </header>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-16 left-4 right-4 z-50 bg-white border border-black/[0.08] rounded-xl shadow-lg shadow-black/[0.06] overflow-hidden"
          >
            {/* Profile mini */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-black/[0.07]">
              <div className="w-8 h-8 rounded-full bg-[#f0f0ee] border border-black/[0.09] overflow-hidden flex-shrink-0">
                <img
                  src="/assets/img/profile/profile.webp"
                  alt="Dava"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[13px] font-medium text-neutral-800 leading-none mb-0.5">Dava Elyanta</p>
                <p className="text-[11px] text-neutral-400">Fresh Graduate</p>
              </div>
              <DownloadCV />
            </div>

            {/* Nav items */}
            <ul className="p-2">
              {navItems.map(({ icon: Icon, label, id }, i) => {
                const isActive = active === id;
                return (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                  >
                    <button
                      onClick={() => scrollTo(id)}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors",
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "hover:bg-neutral-50 text-neutral-500"
                      )}
                    >
                      <Icon size={15} className="flex-shrink-0" />
                      <span className="text-[13px] font-medium">{label}</span>
                      {isActive && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600" />
                      )}
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}