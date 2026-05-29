"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import TagTitle from "@/components/ui/TagTitle";
import { TextAnimate } from "@/components/ui/text-animate";
import Title from "@/components/ui/Title";

// ─── Types ────────────────────────────────────────────────────────────────────

type ExperienceItem = {
  id: number;
  title: string;
  year: string;
  points: string[];
  photos: string[];
};

// ─── Dummy Data ───────────────────────────────────────────────────────────────

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Freelance web developer",
    year: "2025 - sekarang",
    points: [
        "Mengembangkan dan membangun website sesuai kebutuhan klien",
    "Menerjemahkan desain UI/UX menjadi tampilan website yang responsif",
    "Berkomunikasi dengan klien untuk revisi dan peningkatan fitur",
       "Menangani revisi klien untuk menjaga kualitas hasil"
    ],
    photos: [
    ],
  },
  {
    id: 2,
    title: "PKL - Utama Komputer",
    year: "2025",
    points: [
      "Menerapkan kedisiplinan tinggi dan manajemen waktu yang ketat dalam menyelesaikan target operasional harian toko demi menjaga kepuasan pelanggan.",
      "Mengikuti Alur Bisnis Internal toko mulai dari penerimaan unit rusak dari pelanggan, pencatatan keluhan, hingga manajemen logistik pengantaran barang secara tepat waktu dan aman.",
      "Membantu teknisi senior dalam melakukan perawatan berkala (maintenance), pembersihan komponen internal hardware, serta troubleshooting ringan pada perangkat komputer klien.",
      "Bekerja sesuai prosedur dan target operasional harian.",
    ],
    photos: [],
  },
  {
    id: 3,
    title: "Lulusan SMK jurusan Teknik Komputer Jaringan",
    year: "2026",
    points: [
      "Menyelesaikan pendidikan dengan fokus pada jaringan komputer dan sistem",
      "Mempelajari dasar database, web development, dan troubleshooting jaringan serta proses bisnis dan kewiraushaan",
      "Menjaga kedisiplinan dalam menyelesaikan tugas dengan tepat waktu dan sesuai target",
    ],
    photos: [
    ],
  },
];

// ─── Timeline Item ────────────────────────────────────────────────────────────

const TimelineItem = ({
  item,
  index,
  isLast,
}: {
  item: ExperienceItem;
  index: number;
  isLast: boolean;
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [lineHeight, setLineHeight] = useState(0);
  const [photoOpen, setPhotoOpen] = useState(false);

  useEffect(() => {
    if (!contentRef.current || isLast) return;

    const updateHeight = () => {
      setLineHeight(contentRef.current?.offsetHeight ?? 0);
    };

    updateHeight();

    const ro = new ResizeObserver(updateHeight);
    ro.observe(contentRef.current);
    return () => ro.disconnect();
  }, [isLast, photoOpen]);

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const passed = entry.boundingClientRect.top < 0;
        setActive(entry.isIntersecting || passed);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      id="experience"
      ref={itemRef}
      className="flex gap-6 md:gap-10 items-start"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
    >
      {/* ── Kiri: nomor + garis ── */}
      <div className="flex flex-col items-center flex-shrink-0 w-10">
        {/* lingkaran nomor — flat, no shadow */}
        <div
          className={`w-10 h-10 font-minecraft rounded-sm flex items-center justify-center text-sm font-semibold border-2 transition-all duration-500 z-10 select-none ${
            active
              ? "bg-blue-600 border-blue-600 text-white"
              : "bg-white border-slate-200 text-slate-400"
          }`}
        >
          {String(index + 1).padStart(2)}
        </div>

        {!isLast && (
          <div
            className="w-px bg-slate-200 relative overflow-hidden flex-shrink-0"
            style={{ height: lineHeight > 0 ? lineHeight - 8 : 80 }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full bg-blue-500"
              initial={{ height: "0%" }}
              animate={{ height: active ? "100%" : "0%" }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
            />
          </div>
        )}
      </div>

      <div ref={contentRef} className="pb-10 flex-1 min-w-0">
        {/* header */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <h3 className="font-coolvetica md:text-2xl text-xl">
            {item.title}
          </h3>
          <span className="text-xs text-white bg-blue-600 border border-blue-200 px-2 py-0.5 rounded-full">
            {item.year}
          </span>
        </div>

        {/* poin-poin */}
        <ul className="space-y-2 mb-4">
          {item.points.map((point, i) => (
            <li
              key={i}
              className="flex gap-2.5 text-sm "
            >
              <span className="text-blue-600 font-semibold flex-shrink-0 tabular-nums">
                {String(i + 1).padStart(2,)}.
              </span>
              {point}
            </li>
          ))}
        </ul>

        {item.photos.length > 0 && (
          <div>
            <button
              onClick={() => setPhotoOpen((v) => !v)}
              className="inline-flex items-center hover:text-blue-600 text-xs gap-1 border border-blue-600 bg-blue-600 hover:bg-blue-100 px-3 py-1.5 rounded-sm text-white transition-colors"
            >
             
              {photoOpen ? "Tutup foto" : `Lihat foto (${item.photos.length})`}
            </button>

            <AnimatePresence>
              {photoOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.photos.map((src, i) => (
                      <div
                        key={i}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 flex-shrink-0"
                      >
                        <img
                          src={src}
                          alt={`${item.title} foto ${i + 1}`}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const Experience = () => {
  return (
    <div className="max-w-[100%]">
      <TagTitle title="Home" bagian="Experience" color="blue" />
      <Title className="font-minecraft">Activities</Title>
      <TextAnimate animation="blurIn" by="word">
        Perjalanan dan pengalaman yang saya dapat selama ini
      </TextAnimate>

      <div className="mt-10 md:mt-14">
        {experiences.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            index={index}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
