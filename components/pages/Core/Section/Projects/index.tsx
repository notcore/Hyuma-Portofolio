"use client";

import { useState } from "react";
import { motion } from "motion/react";
import TagTitle from "@/components/ui/TagTitle";
import { TextAnimate } from "@/components/ui/text-animate";
import Title from "@/components/ui/Title";

// ─── Types ────────────────────────────────────────────────────────────────────

type ProjectItem = {
  id: number;
  title: string;
  year: string;
  description: string;
  techs: string[];
  link?: string;
  repo?: string;
  photo?: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Membuat website client",
    year: "2025",
    description:
      "membuat website portofolio seorang desainer grafis",
    techs: ["NextJs", "React", "Tailwind CSS"],
    link: "https://colorfull-nine.vercel.app",
    repo: "https://github.com/notcore",
    photo: "/assets/img/projects/freelance.PNG",
  },
  {
    id: 2,
    title: "Inker",
    year: "2026",
    description:
      "Membuat website management client dan SOP produk",
    techs: ["Laravel", "TailwindCss"],
    repo: "https://github.com/notcore",
    photo: "/assets/img/projects/Inker.PNG",
  },
  {
    id: 3,
    title: "Portfolio Website",
    year: "2026",
    description:
      "Membuat website portofolio personal sederhana.",
    techs: ["NextJs", "TypeScript", "tailwindCSS"],
    link: "https://hyuma-portofolio.verel.app",
    repo: "https://github.com/notcore",
    photo: "/assets/img/projects/Portofolio.PNG",
  },
];

// ─── Card ─────────────────────────────────────────────────────────────────────

const ProjectCard = ({ item, index }: { item: ProjectItem; index: number }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      id="projects"
      className="group w-[100%] mx-auto flex flex-col border border-slate-200 rounded-sm overflow-hidden bg-white hover:border-blue-300 transition-colors duration-300"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
    >
      {/* Thumbnail */}
      <div className="w-full h-36 bg-slate-100 overflow-hidden flex-shrink-0 relative">
        {item.photo && !imgError ? (
          <img
            src={item.photo}
            alt={item.title}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          // placeholder kalau foto belum ada
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-minecraft text-3xl text-slate-200 select-none">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        )}

        {/* year badge */}
        <span className="absolute top-2.5 right-2.5 text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full">
          {item.year}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <h3 className="font-coolvetica text-lg leading-snug">{item.title}</h3>

        <p className="text-xs text-slate-500 leading-relaxed flex-1">
          {item.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {item.techs.map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2 py-0.5 rounded-sm border border-blue-100 text-blue-600 bg-blue-50 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        {(item.link || item.repo) && (
          <div className="flex gap-2 pt-1 border-t border-slate-100">
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-blue-600 hover:underline"
              >
                Live demo ↗
              </a>
            )}
            {item.repo && (
              <a
                href={item.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-slate-400 hover:text-slate-600 hover:underline"
              >
                GitHub ↗
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

// ─── Main ─────────────────────────────────────────────────────────────────────

const Projects = () => {
  return (
    <div className="max-w-[100%]">
      <div className="">
        <TagTitle title="Home" bagian="Projects" color="blue" />
        <Title className="font-minecraft">Projects</Title>
        <TextAnimate animation="blurIn" by="word">
          Proyek yang pernah dibangun
        </TextAnimate>
      </div>

      <div className="mt-10 md:mt-14 relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map((item, index) => (
          <ProjectCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
