// "use client";

// import { useRef, ChangeEvent, useState, useEffect } from "react";
// import PortofolioText from "@/components/pages/Opening/PortofolioText"; 
// import TagPortofolio from "@/components/pages/Opening/TagPortofolio";
// import TextSmall from "@/components/pages/Opening/SmallText";
// import AchivmentLoading from "@/components/pages/Opening/AchivmentLoading/index";
// import AchivmentSuccess from "@/components/pages/Opening/AchivmentSuccess";
// import Ticket from "@/components/pages/Opening/Ticket";
// import Aura from "@/components/pages/Opening/Aura";
// import BlurOverlay from "@/components/ui/BlurOverlay";

// import Image from "next/image";

// // refrensi https://www.behance.net/gallery/238528403/Digital-portfolio-Yulia-Li?tracking_source=search_projects|portfolio+website&l=4

// export default function Home() {

//   const Background = "/assets/img/cloud/background.jpg";
//   const UrlPortofolioText = "/assets/img/text/intro.png";

//   useEffect(() => {
//   document.body.classList.add("overflow-hidden");
//   return () => {
//     document.body.classList.remove("overflow-hidden");
//   };
// }, []);


//   return (
//     <div className="bg-white overflow-hidden h-screen w-screen flex flex-col font-poppins items-center justify-center">
      
//       <div className="max-w-scren">
//         <Image 
//           src={Background} 
//           fill 
//           alt="background" 
//           className="max-w-screen object-cover brightness-120 " 
//         />
//       </div>

//       <div className="grid -mt-25 sm:-mt-1 grid-cols-1 max-w-[60%] relative">
        
//         <TagPortofolio  />
//         <PortofolioText Url={UrlPortofolioText}/>
//         <TextSmall />
  
//       </div>
//       <BlurOverlay />
//       <AchivmentLoading />
//       <AchivmentSuccess />
//       <Aura />
//       <Ticket />
//     </div>
//   );
// }
