"use client";

import { useState } from "react";
import BlurOverlay from "@/components/ui/BlurOverlay";
import TagTitle from "@/components/ui/TagTitle";
import AboutMe from "@/components/Home/Home/Section/Introduce";
import Label from "@/components/ui/Label";
import Profile from "@/components/Home/Home/Section/Profile";
import Experience from "@/components/Home/Home/Section/Experience";
import Projects from "@/components/Home/Home/Section/Projects";
import Layout from "@/components/ui/Layout";
import Contact from "@/components/Home/Home/Section/Contact";
import DownloadCV from "@/components/ui/Download";

export default function CorePage() {
  const [photoRevealed, setPhotoRevealed] = useState(false);

  return (
    <Layout>
      <div className="flex flex-col gap-24 px-6 md:px-12 xl:px-20 py-16">
        <section
          id="about"
          className="flex flex-col md:flex-row md:items-end md:gap-12"
        >
          <div className="flex-1 mx-auto md:mx-0 max-w-[480px]">
            <TagTitle title="Home" bagian="about me" color="blue" />
            <AboutMe />
            <div className="grid ">
              <div className="flex flex-wrap mt-4 gap-2">
                <Label
                  detailSkill="web developer"
                  detailDeskripsi="PHP, Javascript"
                  title="Developer"
                  color="blue-600"
                  colorText="white"
                />
                <Label
                  detailSkill="Basic Network"
                  detailDeskripsi="Cisco, Mikrotik"
                  title="Networking"
                  color="green-600"
                  colorText="white"
                />
                <Label
                  detailSkill="admin data"
                  detailDeskripsi="Excel, word"
                  title="Office"
                  color="green-600"
                  colorText="white"
                />
              </div>
              <div className="lg:hidden max-w-[290px]">
                <DownloadCV />
              </div>
            </div>
          </div>

          <Profile className="-mx-6 md:mx-0" />
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
