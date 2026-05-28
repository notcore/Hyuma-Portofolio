"use client";

import { useState } from "react";
import AchivmentWelcome from "@/components/pages/AboutMe/AchivmentLoading";
import AchivmentPhoto from "@/components/pages/AboutMe/AchivmentPhoto";
import BlurOverlay from "@/components/ui/BlurOverlay";
import TagTitle from "@/components/ui/TagTitle";
import SubTitle from "@/components/pages/AboutMe/SubTitle";
import Label from "@/components/ui/Label";
import Photo from "@/components/pages/AboutMe/Photo";

export default function CorePage() {
  const [photoRevealed, setPhotoRevealed] = useState(false);

  return (
    <div
      className="w-screen relative overflow-hidden min-h-screen overflow-x-hidden bg-cover bg-top bg-repeat-y bg-scroll flex flex-col items-center justify-center"
      // style={{ backgroundImage: "url('/assets/svg/background/background2.svg')" }}
    >
      <div className="mt-10 w-auto mx-5 md:mt-0 min-h-screen xl:mx-40 relative grid grid-cols-1 gap-12 md:gap-20 md:flex md:mx-auto place-content-center place-items-center">
        <div className="relative mt-20 md:mt-0 md:ml-auto mx-4">
          <TagTitle title="Home" bagian="about me" color="blue" />
          <SubTitle />
          <div className="flex flex-wrap mt-4 gap-2">
            <Label detailSkill="web developer" detailDeskripsi="PHP, Javascript" title="Developer" color="blue-600" colorText="white" />
            <Label detailSkill="Basic Network" detailDeskripsi="Cisco, Mikrotik" title="Networking" color="green-600" colorText="white" />
            <Label detailSkill="admin data" detailDeskripsi="Excel, word" title="Office" color="green-600" colorText="white" />
          </div>
        </div>

        <Photo
          ClassName="mt-20 w-1/3"
          onRevealed={() => setPhotoRevealed(true)}
        />
      </div>

      <BlurOverlay />
      <AchivmentWelcome />

      {/* Muncul setelah photo selesai di-scratch */}
      {photoRevealed && <AchivmentPhoto />}
    </div>
  );
}