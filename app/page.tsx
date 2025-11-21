"use client";

import { useRef, ChangeEvent, useState, useEffect } from "react";
import PortofolioText from "@/components/pages/Opening/PortofolioText"; 
import TagPortofolio from "@/components/pages/Opening/TagPortofolio";
import TextSmall from "@/components/pages/Opening/SmallText";
import AchivmentLoading from "@/components/pages/Opening/AchivmentLoading/index";
import AchivmentSuccess from "@/components/pages/Opening/AchivmentSuccess";
import Ticket from "@/components/pages/Opening/Ticket";
import Aura from "@/components/pages/Opening/Aura";
import BlurOverlay from "@/components/ui/BlurOverlay";

export default function Home() {

  const UrlPortofolioText = "/assets/svg/text/portofolioText.svg";

  useEffect(() => {
  document.body.classList.add("overflow-hidden");
  return () => {
    document.body.classList.remove("overflow-hidden"); // dihapus pas komponen unmount / pindah halaman
  };
}, []);


  return (
    <div className="bg-white  overflow-hidden h-screen w-screen flex flex-col items-center justify-center">

      <div className="grid -mt-25 sm:-mt-1 grid-cols-1 max-w-[60%] relative">
        <img 
          src="/assets/svg/shape/portofolio-star.svg"
          className="absolute animate-spin-slow-one z-10 -right-5 w-[50px] md:w-auto"
        />
        <div className="absolute z-20 backdrop-brightness-150 -right-5 backdrop-blur-[3px] md:backdrop-blur-[6px] bg-white-[30%] w-[50px] md:w-[90px] md:h-[40px] shadow-sm h-[20px] rounded-full border-[0.5] border-white mt-6 md:mt-9">
          <div className="w-[18px] h-[18px] m-[2px] md:m-1 md:w-[38px] md:h-[38px] rounded-full bg-[#019ED8] border-[0.8] border-white">
            
          </div>
        </div>
        <TagPortofolio  />
        <PortofolioText Url={UrlPortofolioText}/>
        <TextSmall />
       
        <img 
          src="/assets/svg/shape/portofolio-star.svg"
          className="absolute animate-spin-slow-two z-30 bottom-2 -left-5 w-[50px] md:w-auto"
        />
      </div>
      <BlurOverlay />
      <AchivmentLoading />
      <AchivmentSuccess />
      <Aura />
      <Ticket />
    </div>
  );
}
