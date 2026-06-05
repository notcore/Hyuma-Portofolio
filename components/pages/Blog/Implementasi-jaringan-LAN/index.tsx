// components/projects/blog/content/inker-business-website.tsx
//
// ✏️  File ini BEBAS diisi component React apapun.
// Header (title, cover, tanggal, tech) sudah dirender otomatis oleh page.tsx.
// Ekspor satu default component, itu saja.

"use client";
import {
  AlertTriangle,
  Check as CheckIcon,
} from "lucide-react";
import H2 from "@/components/ui/typografi/H2";
import BlogAlert from "@/components/ui/BlogAlert";

import Tujuan from "./section/Tujuan";
import AlatDanBahan from "./section/AlatDanBahan";
import Topologi from "./section/Topologi";
import Langkah1 from "./section/Langkah1";
import Langkah2 from "./section/Langkah2";
import Langkah3 from "./section/Langkah3";
import Langkah4 from "./section/Langkah4";
import Langkah5 from "./section/Langkah5";
import Langkah6 from "./section/Langkah6";
import Langkah7 from "./section/Langkah7";
import Langkah8 from "./section/Langkah8";
import Langkah9 from "./section/Langkah9";
import Langkah10 from "./section/Langkah10";
import Langkah11 from "./section/Langkah11";
import Langkah12 from "./section/Langkah12";
import Langkah13 from "./section/Langkah13";
import Kesimpulan from "./section/Kesimpulan";

const JaringanLan = () => {

  return (
    <div className="space-y-12 max-w-3xl mx-auto py-4 text-slate-900">
      {/* ── Section: Tujuan ── */}
      <Tujuan />

      <H2>Proses persiapan</H2>

      {/* ── Section: Alat & Bahan ── */}
      <AlatDanBahan />

      {/* ── Section: Keselamatan Kerja ── */}
      <BlogAlert Icon={AlertTriangle} title="Keselamatan kerja">
        Dalam Praktek ini keselamatan kerja tetap digunakan seperti menghindari
        kontak langsung dengan ground saat mencabut/memasang kabel yang memiliki
        aliran listrik dan berhati-hati saat menggunakan alat terutama waktu
        melakukan krimping kabel RJ45.
      </BlogAlert>

      {/* ── Section: Topologi ── */}
      <Topologi />

      <H2>Langkah Kerja pemasangan dan konfigurasi jaringan LAN</H2>

      {/* ── Langkah 1 ── */}
      <Langkah1 />

      {/* ── Langkah 2 ── */}
      <Langkah2 />

      {/* ── Langkah 3 ── */}
      <Langkah3 />

      {/* ── Langkah 4 ── */}
      <Langkah4 />

      {/* Langkah 5 */}
      <Langkah5 />

      {/* Langkah 6 */}
      <Langkah6 />

      {/* Langkah 7 */}
      <Langkah7 />

      {/* Langkah 8 */}
      <Langkah8 />

      {/* Langkah 9 */}
      <Langkah9 />

      {/* ── Langkah 10 ── */}
      <Langkah10 />

      {/* ── Langkah 11 ── */}
      <Langkah11 />

      {/* ── Langkah 12 ── */}
      <Langkah12 />

      {/* Langkah 13 */}
      <Langkah13 />

      <Kesimpulan />
    </div>
  );
};

export default JaringanLan;
