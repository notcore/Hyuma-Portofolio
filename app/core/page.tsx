"use client";
import AchivmentWelcome from "@/components/pages/AboutMe/AchivmentLoading";
import BlurOverlay from "@/components/ui/BlurOverlay";
import TagTitle from "@/components/ui/TagTitle";   
import SubTitle from "@/components/pages/AboutMe/SubTitle";
import Label from "@/components/ui/Label";
import { style } from "motion/react-m";
import Cloud1 from "@/public/assets/img/cloud/cloud1.png";
import Image from "next/image";
import Test from "@/public/assets/download.webp";

export default function CorePage(){
    return (
  <div
  className="w-screen min-h-screen overflow-x-hidden bg-cover bg-top bg-repeat-y bg-scroll flex flex-col items-start justify-start"
//   style={{ backgroundImage: "url('/assets/svg/background/background2.svg')" }}
  >

            <div className="w-[90%] min-h-screen mx-5 xl:mx-40 md:mx-10 relative h-screen grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center">
                <div className="relative mt-20 md:mt-0 mx-4">
                    <TagTitle title="Home" bagian="about me" color="blue" />
                    <SubTitle />
                    <div className="flex flex-wrap mt-4 gap-2">
                        <Label detailSkill="web developer" detailDeskripsi="PHP, Javascript" title="Developer" color="blue-600" colorText="white"/>
                        <Label detailSkill="Basic Network" detailDeskripsi="Cisco, Mikrotik" title="Networking" color="green-600" colorText="white"/>
                        <Label detailSkill="admin data" detailDeskripsi="Excel, word" title="Office" color="green-600" colorText="white"/>
                    </div>
                </div>
            </div>
            <BlurOverlay />
            <AchivmentWelcome />
        </div>
    )
}