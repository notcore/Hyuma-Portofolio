"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { modeConfig } from "@/components/ui/Types";
import type { ProjectItem, Mode } from "@/components/ui/Types";

// warna badge tech & aksen per mode
const modeAccent: Record<Mode, { tech: string; badge: string; readMore: string; border: string }> = {
  programming: {
    tech:     "border-blue-100 text-blue-600 bg-blue-50",
    badge:    "bg-blue-600",
    readMore: "text-blue-700 bg-blue-50 hover:bg-blue-100 border-blue-100",
    border:   "hover:border-blue-300",
  },
  jaringan: {
    tech:     "border-blue-100 text-blue-400 bg-blue-50",
    badge:    "bg-blue-400",
    readMore: "text-blue-500 bg-blue-50 hover:bg-blue-100 border-blue-100",
    border:   "hover:border-blue-300",
  },
  // server: {
  //   tech:     "border-cyan-100 text-cyan-700 bg-cyan-50",
  //   badge:    "bg-cyan-400",
  //   readMore: "text-cyan-700 bg-cyan-50 hover:bg-cyan-100 border-cyan-100",
  //   border:   "hover:border-cyan-300",
  // },
  // office: {
  //   tech:     "border-green-100 text-green-700 bg-green-50",
  //   badge:    "bg-green-600",
  //   readMore: "text-green-700 bg-green-50 hover:bg-green-100 border-green-100",
  //   border:   "hover:border-green-300",
  // },
};

type Props = {
  item: ProjectItem;
  index: number;
  mode: Mode;
};

const ProjectCard = ({ item, index, mode }: Props) => {
  const [imgError, setImgError] = useState(false);
  const accent = modeAccent[mode];
  const { Icon } = modeConfig[mode];

  return (
    <motion.div
      className={`group flex flex-col border border-slate-200 rounded-lg overflow-hidden bg-white
        transition-colors duration-300 ${accent.border}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
    >
      {/* ── Thumbnail ── */}
      <div className="relative w-full h-35 md:h-40 bg-slate-50 overflow-hidden flex-shrink-0 flex items-center justify-center">
        {item.photo && !imgError ? (
          <>
            <img
              src={item.photo}
              alt={item.title}
              loading="lazy"
              onError={() => setImgError(true)}
              className="absolute inset-0 w-full h-full object-cover opacity-100
                transition-transform duration-500 group-hover:scale-105"
            />
          </>
        ) : (
          /* fallback — icon mode + nomor */
          <div className="flex flex-col items-center gap-1 opacity-20">
            <Icon size={28} />
            <span className="font-mono text-xs">{String(index + 1).padStart(2, "0")}</span>
          </div>
        )}

        {/* year badge */}
        <span className={`absolute top-2 right-2 text-[10px] font-medium text-white px-2 py-0.5 rounded-full ${accent.badge}`}>
          {item.year}
        </span>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <h3 className="font-coolvetica text-lg leading-snug line-clamp-2 text-slate-900">
          {item.title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed flex-1 line-clamp-3">
          {item.description}
        </p>

        {/* tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {item.techs.map((tech) => (
            <span key={tech} className={`text-[10px] px-2 py-0.5 rounded-sm border font-medium ${accent.tech}`}>
              {tech}
            </span>
          ))}
        </div>

        {/* links */}
        <div className="flex items-center gap-2 pt-1 border-t border-slate-100">
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-slate-500 hover:text-slate-800 hover:underline transition-colors"
            >
              Live demo ↗
            </a>
          )}
          {item.repo && (
            <a
              href={item.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-slate-400 hover:text-slate-600 hover:underline transition-colors"
            >
              GitHub ↗
            </a>
          )}

          {/* Read more — hanya muncul kalau ada blog */}
          {item.blog && (
            <Link
              href={`/projects/${item.slug}`}
              className={`ml-auto flex items-center gap-1 text-[11px] font-medium border px-2.5 py-1 rounded-full transition-colors ${accent.readMore}`}
            >
              <BookOpen size={11} />
              dokumentasi klik disini
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;