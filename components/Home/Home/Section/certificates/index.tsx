"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import TagTitle from "@/components/ui/TagTitle";
import Title from "@/components/ui/Title";
import { TextAnimate } from "@/components/ui/text-animate";

type CertItem = {
  id: number;
  title: string;
  issuer: string;
  year: string;
  tags: string[];
  photo?: string;
  link?: string;
};

const certificates: CertItem[] = [
  {
    id: 1,
    title: "Komunikasi bisnis",
    issuer: "HP Life",
    year: "2026",
    tags: ["Bisnis"],
    photo: "/assets/img/certificates/komunikasi-bisnis.webp",
    link: "https://www.life-global.org/certificate/38a60c6e-f757-4ed9-8178-cace489b08f4",
  },
  {
    id: 2,
    title: "computer hardware basic",
    issuer: "Cisco Network Academy",
    year: "2026",
    tags: ["Hardware"],
    photo: "/assets/img/certificates/computer-hardware-basic.webp",
    link: "https://www.netacad.com/certificates/?issuanceId=3ebe1a87-eaff-4074-b93c-3c371f24add7",
  },
];

const CertCard = ({ item, index, onClick }: { item: CertItem; index: number; onClick: () => void }) => (
  <motion.div
    className="group flex flex-col border border-slate-200 rounded-sm overflow-hidden bg-white
               hover:border-blue-300 transition-colors duration-300 cursor-pointer"
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.4, delay: index * 0.07 }}
    onClick={onClick}
  >
    {/* Thumbnail */}
    <div className="w-full h-auto bg-blue-50 relative overflow-hidden flex-shrink-0">
      {item.photo ? (
        <img
          src={item.photo}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-100 transition-transform duration-400"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-3xl text-blue-200">🎓</span>
        </div>
      )}
      <span className="absolute top-2 right-2 text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full">
        {item.year}
      </span>
    </div>

    {/* Body */}
    <div className="p-3 flex flex-col gap-1">
      <p className="text-sm font-medium text-slate-800 leading-snug line-clamp-2">{item.title}</p>
      <p className="text-xs text-slate-400">{item.issuer}</p>
    </div>
  </motion.div>
);

const Certificates = () => {
  const [selected, setSelected] = useState<CertItem | null>(null);

  return (
    <div className="max-w-5xl mx-auto w-full">
      <TagTitle title="Home" bagian="Certificates" color="blue" />
      <Title className="font-minecraft">Certificates</Title>
      <TextAnimate animation="blurIn" by="word">Sertifikasi yang pernah diraih</TextAnimate>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
        {certificates.map((item, i) => (
          <CertCard key={item.id} item={item} index={i} onClick={() => setSelected(item)} />
        ))}
      </div>

{/* Modal */}
<AnimatePresence>
  {selected && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelected(null)}
    >
      <motion.div
        className="relative mx-4 overflow-hidden w-auto rounded-sm border border-slate-200"
        initial={{ opacity: 0, scale: 0.95, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 8 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-black/30 hover:bg-black/50
                     text-white text-xs flex items-center justify-center"
          onClick={() => setSelected(null)}
        >✕</button>

        {/* Image */}
        {selected.photo ? (
          <img src={selected.photo} alt={selected.title} className="w-auto h-auto block" />
        ) : (
          <div className="w-72 h-48 bg-blue-50 flex items-center justify-center text-4xl text-blue-200">🎓</div>
        )}

        {/* Bottom bar */}
        {selected.link && (
          <a
            href={selected.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-4 py-3 bg-white hover:bg-slate-50 transition-colors"
          >
            <span className="text-xs text-slate-600">{selected.issuer}</span>
            <span className="text-xs text-blue-600">Buka ↗</span>
          </a>
        )}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
};

export default Certificates;