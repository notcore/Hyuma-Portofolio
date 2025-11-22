"use client";
import AchivmentWelcome from "@/components/pages/AboutMe/AchivmentLoading";
import BlurOverlay from "@/components/ui/BlurOverlay";
import TagTitle from "@/components/ui/TagTitle";   
import SubTitle from "@/components/pages/AboutMe/SubTitle";
import Label from "@/components/ui/Label";
import { style } from "motion/react-m";

export default function CorePage(){
    return (
  <div
  className="w-screen min-h-screen overflow-x-hidden bg-cover bg-top bg-repeat-y bg-scroll flex flex-col items-start justify-start"
  style={{ backgroundImage: "url('/assets/svg/background/background2.svg')" }}
  >

            <div className="w-[90%] mx-10 h-screen grid grid-cols-1 sm:grid-cols-2 place-content-center place-items-center">
                <div className="relative">
                    <TagTitle title="About me" color="blue" />
                    <SubTitle />
                    <div className="flex flex-wrap mt-4 gap-2">
                                <p className={`bg-blue-600 text-white px-3 py-1 text-xl rounded-full`}>Web Developer</p>         <p className={`bg-green-500 text-white px-3 py-1 text-xl rounded-full`}>Networking</p>
                    </div>
                    <img
                        src="/assets/svg/shape/pixel-wavy.svg"
                        className="absolute sm:-left-90 -left-40 animate-wavy h-auto"
                    ></img>
                    <img
                        src="/assets/svg/shape/pixel-cloud.svg"
                        className="absolute sm:-right-[90%] -right-40 -top-35 animate-wavy h-auto"
                    ></img>
                </div>
                
            </div>
            <BlurOverlay />
            <AchivmentWelcome />
        </div>
    )
}