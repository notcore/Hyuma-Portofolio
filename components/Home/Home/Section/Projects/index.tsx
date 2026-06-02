"use client";

import { useState } from "react";
import { motion } from "motion/react";
import TagTitle from "@/components/ui/TagTitle";
import { TextAnimate } from "@/components/ui/text-animate";
import Title from "@/components/ui/Title";


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


const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Membuat website client",
    year: "2025",
    description: "membuat website portofolio seorang desainer grafis",
    techs: ["NextJs", "React", "Tailwind CSS"],
    link: "https://colorfull-nine.vercel.app",
    repo: "https://github.com/notcore",
    photo: "/assets/img/projects/freelance.PNG",
  },
  {
    id: 2,
    title: "Inker: Busines website",
    year: "2026",
    description: "tahap design untuk pembuatan website SOP & Client management",
    techs: ["Laravel", "TailwindCss"],
    repo: "https://github.com/notcore",
    photo: "/assets/img/projects/Inker.PNG",
  },
  {
    id: 3,
    title: "Portfolio Website",
    year: "2026",
    description: "Membuat website portofolio personal sederhana.",
    techs: ["NextJs", "TypeScript", "tailwindCSS"],
    link: "https://hyuma-portofolio.verel.app",
    repo: "https://github.com/notcore",
    photo: "/assets/img/projects/Portofolio.PNG",
  },
];


const ProjectCard = ({ item, index }: { item: ProjectItem; index: number }) => {
  const [imgError, setImgError] = useState(false);
  const [tapped, setTapped] = useState(false);

  return (
    <motion.div
      className={`group flex flex-col mx-5 border border-slate-200 rounded-sm overflow-hidden bg-white transition-colors duration-300
        ${tapped ? "border-blue-300" : "hover:border-blue-300"}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      onTouchStart={() => setTapped(true)}
      onTouchEnd={() => setTimeout(() => setTapped(false), 600)}
    >
      {/* thumbnail */}
      <div className="w-full relative h-30 bg-slate-100 overflow-hidden flex-shrink-0">
        <img
          src="/assets/img/gradient/card-gradient-blue.webp"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        {item.photo && !imgError ? (
          <div
            className={`absolute  -bottom-5 left-2 w-[75%] h-[85%] will-change-transform
              transition-transform duration-500 [transition-timing-function:cubic-bezier(0.34,1.2,0.64,1)]
              rounded-md border-4 border-zinc-800
              group-hover:-translate-y-5 group-hover:translate-x-[14%] group-hover:scale-110
              ${tapped ? "-translate-y-5 translate-x-[14%] scale-110" : ""}`}
          >
            <div className="w-20 h-2 bg-zinc-800 left-[37%] md:left-[34%] rounded-b-md absolute" />
            <img
              src={item.photo}
              alt={item.title}
              loading="lazy"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-minecraft text-3xl text-slate-200 select-none">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        )}

        <span className="absolute top-2.5 right-2.5 text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full">
          {item.year}
        </span>
      </div>

      {/* Body — sama persis, tidak diubah */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <h3 className="font-coolvetica text-lg leading-snug line-clamp-2">{item.title}</h3>
        <p className="text-xs text-slate-500 leading-relaxed flex-1 line-clamp-3">{item.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {item.techs.map((tech) => (
            <span key={tech} className="text-[10px] px-2 py-0.5 rounded-sm border border-blue-100 text-blue-600 bg-blue-50 font-medium">
              {tech}
            </span>
          ))}
        </div>
        {(item.link || item.repo) && (
          <div className="flex gap-2 pt-1 border-t border-slate-100">
            {item.link && (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[11px] text-blue-600 hover:underline">
                Live demo ↗
              </a>
            )}
            {item.repo && (
              <a href={item.repo} target="_blank" rel="noopener noreferrer" className="text-[11px] text-slate-400 hover:text-slate-600 hover:underline">
                GitHub ↗
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};


const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto w-full">
      <div className="">
        <TagTitle title="Home" bagian="Projects" color="blue" />
        <Title className="font-minecraft">Projects</Title>
        <TextAnimate animation="blurIn" by="word">
          Proyek yang pernah dibangun
        </TextAnimate>
      </div>

      <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map((item, index) => (
          <ProjectCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
