import { Download } from "lucide-react";

const DownloadCV = () => {
  return (
   <div className=" my-3 border-black/[0.07]">
        <a
          href="/download/CV - Dava Elyanta.pdf"
          download
          className="relative group/cv inline-flex items-center gap-2 w-full border border-blue-200 bg-white hover:bg-blue-600 px-3 py-2 rounded-sm transition-colors"
        >
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-600 group-hover/cv:border-white transition-colors" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-blue-600 group-hover/cv:border-white transition-colors" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-blue-600 group-hover/cv:border-white transition-colors" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-600 group-hover/cv:border-white transition-colors" />
          <span className=" text-[11px] text-blue-600 group-hover/cv:text-white transition-colors mx-auto">
            Download CV
          </span>
        </a>
      </div>
  );
};

export default DownloadCV;