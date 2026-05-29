"use client";

import { useState } from "react";
import AchivmentWelcome from "@/components/pages/Core/Achivment/AchivmentLoading";
import AchivmentPhoto from "@/components/pages/Core/Achivment/AchivmentPhoto";
import BlurOverlay from "@/components/ui/BlurOverlay";
import TagTitle from "@/components/ui/TagTitle";
import AboutMe from "@/components/pages/Core/Section/Introduce";
import Label from "@/components/ui/Label";
import Photo from "@/components/pages/Core/Section/Photo";
import Experience from "@/components/pages/Core/Section/Experience";
import Projects from "@/components/pages/Core/Section/Projects";
import Layout from "@/components/ui/Layout";
import Contact from "@/components/pages/Core/Section/Contact";

export default function CorePage() {
  const [photoRevealed, setPhotoRevealed] = useState(false);

  return (
    <Layout>
      <div className="flex flex-col gap-24 px-6 md:px-12 xl:px-20 py-16">

        {/* About */}
        <section
          id="about"
          className=" grid md:flex"
        >
          <div className="flex-1 max-w-[400px]">
            <TagTitle title="Home" bagian="about me" color="blue" />
            <AboutMe />
            <div className="flex flex-wrap mt-4  gap-2">
              <Label detailSkill="web developer" detailDeskripsi="PHP, Javascript" title="Developer" color="blue-600" colorText="white" />
              <Label detailSkill="Basic Network" detailDeskripsi="Cisco, Mikrotik" title="Networking" color="green-600" colorText="white" />
              <Label detailSkill="admin data" detailDeskripsi="Excel, word" title="Office" color="green-600" colorText="white" />
            </div>
            
          </div>

         <Photo className="w-[240px]  h-[300px] relative" onRevealed={() => setPhotoRevealed(true)} />
        </section>

        {/* Experience */}
        <section id="experience" className="min-h-screen">
          <Experience />
        </section>

        {/* Projects */}
        <section id="projects" className="min-h-screen">
          <Projects />
        </section>

        {/* Contact */}
        <section id="contact" className="min-h-[40vh]">
          <Contact />
        </section>

      </div>

      <BlurOverlay />
    </Layout>
  );
}