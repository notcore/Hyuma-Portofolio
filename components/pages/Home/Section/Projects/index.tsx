"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import TagTitle from "@/components/ui/TagTitle";
import { TextAnimate } from "@/components/ui/text-animate";
import Title from "@/components/ui/Title";
import { projectsData } from "@/components/ui/Types";
import type { Mode } from "@/components/ui/Types";
import ModeToggle from "@/components/ui/ModeToggle";
import ProjectCard from "@/components/ui/ProjectCard";

const Projects = () => {
  const [mode, setMode] = useState<Mode>("programming");

  return (
    <div className="max-w-5xl mx-auto w-full">
      {/* heading */}
      <div>
        <TagTitle title="Home" bagian="Projects" color="blue" />
        <Title className="font-minecraft">Projects</Title>
        <TextAnimate animation="blurIn" by="word">
          Proyek yang pernah dibangun
        </TextAnimate>
      </div>

      {/* toggle */}
      <div className="mt-8 md:mt-10">
        <ModeToggle active={mode} onChange={setMode} />
      </div>

      {/* grid */}
      <div className="mt-6 min-h-[260px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {projectsData[mode].map((item, index) => (
              <ProjectCard key={item.id} item={item} index={index} mode={mode} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;