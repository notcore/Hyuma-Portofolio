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
    <div className="flex justify-center items-center h-screen w-screen">
        <span className="text-4xl font-minecraft">Hello world</span>
    </div>
  );
}