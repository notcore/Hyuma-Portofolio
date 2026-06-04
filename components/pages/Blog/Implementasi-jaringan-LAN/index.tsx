// components/projects/blog/content/inker-business-website.tsx
//
// ✏️  File ini BEBAS diisi component React apapun.
// Header (title, cover, tanggal, tech) sudah dirender otomatis oleh page.tsx.
// Ekspor satu default component, itu saja.

"use client"
import { useState } from "react";
import { 
  AlertTriangle, 
  Check, 
  Circle, 
  ExternalLink, 
  ChevronDown,
  ChevronUp,
  Info,
  Copy,
  Check as CheckIcon
} from "lucide-react";

const alatDanBahan = [
  {
    no: 1,
    name: "PC Client",
    qty: 1,
    specs: ["Intel Core i3-7100 @ 3.90GHz", "RAM 4GB", "HDD 1TB"],
  },
  {
    no: 2,
    name: "PC Server",
    qty: 1,
    specs: ["Intel Core i3-7100 @ 3.90GHz", "RAM 4GB", "HDD 1TB"],
  },
  {
    no: 3,
    name: "Switch",
    qty: 1,
    specs: ["8 Port", "10/100 Mbps"],
  },
  {
    no: 4,
    name: "Router",
    qty: 1,
    specs: ["5 Port", "Support DHCP"],
  },
  {
    no: 5,
    name: "Kabel UTP",
    qty: 3,
    specs: ["1 Meter", "Cat5e"],
  },
  {
    no: 6,
    name: "Konektor RJ-45",
    qty: 6,
    specs: ["Cat5e"],
  },
  {
    no: 7,
    name: "Crimping Tool",
    qty: 1,
    specs: ["Mendukung Konektor RJ45"],
  },
  {
    no: 8,
    name: "Cable Tester",
    qty: 1,
    specs: ["Mendukung Kabel UTP dan RJ45"],
  },
  {
    no: 9,
    name: "Koneksi Internet",
    qty: 1,
    specs: ["ISP"],
  },
];

// ── Terminal Component ────────────────────────────────────────────────────────

const TerminalBlock = ({ command }: { command: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
<div className="bg-slate-50 hover:bg-slate-200/50 my-4 rounded-sm border border-slate-100 overflow-hidden max-w-2xl">
  {/* title bar */}
  <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 border-b border-slate-200">
    <div className="flex items-center gap-1.5">
      <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
      <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
    </div>
    <span className="text-[11px] text-slate-500 font-mono">terminal</span>
  </div>
  
  {/* command line */}
  <div className="pl-4 pr-3 py-2 flex w-full items-center gap-2 font-mono text-sm">
    <div className="flex items-center gap-2 flex-1">
      <span className="text-blue-600 select-none">$</span>
      <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent font-medium">
        {command}
      </span>
    </div>
    
    {/* tombol copy mentok kanan, sejajar, dan ber-margin pas (pr-3 & border minimalis) */}
    <button
      onClick={handleCopy}
      className="flex items-center gap-1 border border-slate-200 hover:border-slate-300 bg-slate-100/50 rounded-sm p-1.5 text-[11px] text-slate-400 hover:text-slate-600 transition-colors"
    >
      {copied ? (
        <CheckIcon className="w-3 h-3 text-slate-200" />
      ) : (
        <Copy className="w-3 h-3" />
      )}
    </button>
  </div>
</div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────

const InkerBlogContent = () => {
  const [isTroubleOpen, setIsTroubleOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  const toggleQuestion = (q: string) => {
    setActiveQuestion(activeQuestion === q ? null : q);
  };

  return (
    <div className="space-y-12 max-w-3xl mx-auto py-4 text-slate-900">
      
      {/* ── Section: Tujuan ── */}
      <section className="space-y-2">
        <h2 className="font-coolvetica text-xl text-slate-900 border-b pb-1">
          Tujuan.
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Dokumentasi ini berisi proses praktik UKK TKJ mulai dari perancangan
          alat dan bahan, topologi jaringan sederhana dengan pengalamatan IP
          manual hingga implementasi konfigurasi router, dan switch pada
          mikrotik agar tercapai konektivitas antar perangkat PC Server dan
          Client. Selain itu, dokumentasi ini juga memuat analisis penyelesaian
          masalah jaringan yang diberikan penguji sebagai bukti kompetensi
          troubleshooting dan pemahaman teknis konfigurasi jaringan komputer.
        </p>
      </section>

      <div className="pt-2 border-t border-slate-100">
        <h2 className="font-coolvetica text-2xl text-slate-900">
          Proses persiapan
        </h2>
      </div>

      {/* ── Section: Alat & Bahan ── */}
      <section className="space-y-3">
        <h2 className="font-coolvetica text-xl text-slate-900">
          Alat dan bahan
        </h2>
        <div className="overflow-x-auto rounded-lg">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-slate-50 text-slate-500 uppercase text-xs text-left">
                <th className="w-12 px-4 py-2 text-center">no</th>
                <th className="px-4 py-2">ALAT DAN BAHAN</th>
                <th className="w-16 px-4 py-2 text-center">jumlah</th>
                <th className="px-4 py-2">spesifikasi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600 text-sm">
              {alatDanBahan.map((item) => (
                <tr key={item.no} className="hover:bg-slate-50/50">
                  <td className="px-4 py-2.5 text-center font-mono text-slate-400">
                    {item.no}
                  </td>
                  <td className="px-4 py-2.5 font-medium text-slate-900">{item.name}</td>
                  <td className="px-4 py-2.5 text-center text-slate-900">{item.qty}</td>
                  <td className="px-4 py-2.5">
                    <div className="flex flex-wrap gap-1">
                      {item.specs.map((spec, index) => (
                        <span 
                          key={index} 
                          className="text-xs bg-slate-50 rounded px-1.5 py-0.5 text-slate-500"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Section: Keselamatan Kerja ── */}
      <section className="rounded-sm flex items-start gap-3">
        <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
        <div className="space-y-1">
          <h2 className="font-coolvetica text-lg text-orange-600 leading-none">
            Keselamatan kerja.
          </h2>
          <p className="text-sm text-black font-semibold leading-relaxed">
            Dalam Praktek ini keselamatan kerja tetap digunakan seperti menghindari kontak langsung dengan ground saat mencabut/memasang kabel yang memiliki aliran listrik dan berhati-hati saat menggunakan alat terutama waktu melakukan krimping kabel RJ45.
          </p>
        </div>
      </section>

      {/* ── Section: Topologi ── */}
      <section className="space-y-2">
        <h2 className="font-coolvetica text-xl text-slate-900">
          Topologi.
        </h2>
        <p className="text-sm text-slate-500">
          rancangan topologi jaringan LAN
        </p>
        <div className="rounded-sm p-1 bg-white">
          <img 
            className="w-full h-auto rounded-sm" 
            src="/assets/img/blog/jaringanlan/topologi.png" 
            alt="topologi jaringan LAN"
          />
        </div>
        <div className="text-xs text-slate-400 flex items-center gap-2 justify-end">
          <a href="https://www.figma.com/" className="hover:text-slate-900 flex items-center gap-0.5">
            didesign menggunakan figma <ExternalLink className="w-3 h-3" />
          </a>
          <span>•</span>
          <a href="https://lucide.dev/icons/" className="hover:text-slate-900 flex items-center gap-0.5">
            icon lucide react <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </section>

      <div className="pt-2 border-t border-slate-100">
        <h1 className="font-coolvetica text-2xl text-slate-900">
          Langkah Kerja pemasangan dan konfigurasi jaringan LAN
        </h1>
      </div>

      {/* ── Langkah 1 ── */}
      <section className="space-y-3">
        <div className="space-y-1">
          <h2 className="font-coolvetica text-lg text-slate-900">
            1 Menyusun perangkat jaringan
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Menyusun dan menyambungkan beberapa kabel ke perangkat jaringan mikrotik hingga sesuai topologi dan tertata rapi agar 
maintenance dan troubleshooting kedepanya tidak membuat susah, selama menyusun perangkat pastikan semua lampu pada router dan switch menyala dan terhubung dengan listrik.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden aspect-video-wide max-w-2xl">
          <img
            src="/assets/img/blog/jaringanlan/mikrotik.jpg"
            alt="menyusun perangkat jaringan"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ── Langkah 2 ── */}
      <section className="space-y-3">
        <div className="space-y-1">
          <h2 className="font-coolvetica text-lg text-slate-900">
            2. membuka winbox
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Membuka software winbox untuk memulai konfigurasi jaringan pada perangkat mikrotik yang telah disusun sebelumnya
          </p>
        </div>
        <div className="rounded-lg overflow-hidden aspect-video-wide max-w-2xl">
          <img
            src="/assets/img/blog/jaringanlan/2.webp"
            alt="membuka winbox"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ── Langkah 3 (Dengan Nested Dropdown) ── */}
      <section className="space-y-4">
        <div className="space-y-3">
          <div className="space-y-1">
            <h2 className="font-coolvetica text-lg text-slate-900">
              3. masuk ke perangkat router
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Masuk ke perangkat jaringan router mikrotik menggunakan Mac address untuk memulai mengkonfigurasi jaringan.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden aspect-video-wide max-w-2xl">
            <img
              src="/assets/img/blog/jaringanlan/3.webp"
              alt="masuk ke perangkat router"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Dropdown Tingkat 1: Troubleshooting Guide */}
        <div className="border-t border-slate-200 pt-2 max-w-2xl">
          <button 
            onClick={() => {
              setIsTroubleOpen(!isTroubleOpen);
              setActiveQuestion(null);
            }}
            className="w-full flex items-center justify-between text-left py-2 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors"
          >
            <span className="font-coolvetica text-base">Troubleshooting</span>
            {isTroubleOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {isTroubleOpen && (
            <div className="space-y-2 pt-2 border-t border-slate-100 mt-1">
              
              {/* Dropdown Tingkat 2: Pertanyaan 1 */}
              <div className="border-b border-slate-100 pb-1">
                <button
                  onClick={() => toggleQuestion("q1")}
                  className="w-full flex items-center justify-between text-left py-1.5 text-xs font-medium text-slate-800 hover:text-slate-600"
                >
                  <span>bagaimana jika perangkat router tidak terdeteksi?</span>
                  {activeQuestion === "q1" ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                </button>
                {activeQuestion === "q1" && (
                  <ul className="list-decimal pl-4 pb-2 pt-1 text-xs text-slate-500 space-y-1.5 leading-relaxed">
                    <li>pastikan router terkoneksi dengan PC anda</li>
                    <li>pastikan kabel RJ45 benar-benar terhubung dan lampu indikator menyala</li>
                    <li>pastikan kabel RJ45 tidak memiliki cacat atau kesalahan pembuatan, dan jika dicek menggunakan tester lampu berhasil menyala dengan urut</li>
                    <li>pastikan port router tidak memiliki cacat</li>
                  </ul>
                )}
              </div>

              {/* Dropdown Tingkat 2: Pertanyaan 2 */}
              <div className="border-b border-slate-100 pb-1">
                <button
                  onClick={() => toggleQuestion("q2")}
                  className="w-full flex items-center justify-between text-left py-1.5 text-xs font-medium text-slate-800 hover:text-slate-600"
                >
                  <span>tidak bisa masuk kedalam konfigurasi?</span>
                  {activeQuestion === "q2" ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                </button>
                {activeQuestion === "q2" && (
                  <ul className="list-decimal pl-4 pb-2 pt-1 text-xs text-slate-500 space-y-1.5 leading-relaxed">
                    <li>pastikan anda masuk menggunakan mac address</li>
                    <li>copot kabel RJ45 pada PC yang tersambung ke router lalu pasang ulang</li>
                    <li>update atau reset ulang winbox</li>
                    <li>pastikan kabel RJ45 tidak memiliki cacat atau kesalahan pembuatan, dan jika dicek menggunakan tester lampu berhasil menyala dengan urut</li>
                  </ul>
                )}
              </div>

            </div>
          )}
        </div>
      </section>

      {/* ── Langkah 4 ── */}
      <section className="space-y-3">
        <div className="space-y-1">
          <h2 className="font-coolvetica text-lg text-slate-900">
            4. Reset konfigurasi router
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Melakukan reset pada router untuk mencegah terjadinya konflik jika terdapat konfigurasi sebelumnya, lalu melakukan masuk ulang kedalam konfigurasi perangkat jaringan router.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden aspect-video-wide max-w-2xl">
          <img
            src="/assets/img/blog/jaringanlan/4.webp"
            alt="reset konfigurasi router"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="space-y-3">
        <div className="space-y-1">
          <h2 className="font-coolvetica text-lg text-slate-900">
            5. Beri identitas pada router
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Setelah melakukan reset konfigurasi pada router, melakukan langkah memberi identitas pada router.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden aspect-video-wide max-w-2xl">
          <img
            src="/assets/img/blog/jaringanlan/5.webp"
            alt="beri identitas router"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="space-y-3">
        <div className="space-y-1">
          <h2 className="font-coolvetica text-lg text-slate-900">
            6. membuat DHCP client
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Melakukan Konfigurasi pada DHCP client agar IP pada ether 1 yang tersambung ke internet mendapatkan IP address secara otomatis dari ISP.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden aspect-video-wide max-w-2xl">
          <img
            src="/assets/img/blog/jaringanlan/6.webp"
            alt="membuat DHCP client"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="space-y-3">
        <div className="space-y-1">
          <h2 className="font-coolvetica text-lg text-slate-900">
            7. Konfigurasi IP untuk ether 2
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Mengkonfigurasi IP address untuk ether 2 yang tersambung ke PC Server.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden aspect-video-wide max-w-2xl">
          <img
            src="/assets/img/blog/jaringanlan/7.webp"
            alt="konfigurasi IP ether 2"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="space-y-3">
        <div className="space-y-1">
          <h2 className="font-coolvetica text-lg text-slate-900">
            8. Konfigurasi IP untuk ether 3
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Mengkonfigurasi IP address untuk ether 3 yang tersambung ke PC Client.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden aspect-video-wide max-w-2xl">
          <img
            src="/assets/img/blog/jaringanlan/8.webp"
            alt="konfigurasi IP ether 3"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="space-y-3">
        <div className="space-y-1">
          <h2 className="font-coolvetica text-lg text-slate-900">
            9. Konfigurasi NAT firewall
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Melakukan konfigurasi pada NAT Firewall agar internet dari ether 1 bisa digunakan.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden aspect-video-wide max-w-2xl">
          <img
            src="/assets/img/blog/jaringanlan/9.webp"
            alt="konfigurasi NAT firewall"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ── Langkah 10 ── */}
      <section className="space-y-3">
        <div className="space-y-1">
          <h2 className="font-coolvetica text-lg text-slate-900">
            10. Melakukan konfigurasi pada PC server (windows 10)
          </h2>
          <div className="rounded-sm border p-3 flex items-start gap-2">
            <Info className="w-4 h-4 text-black mt-0.5 flex-shrink-0" />
            <div className="space-y-1">
              <h2 className="font-coolvetica text-base text-black leading-none">
                Note.
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Dikarenakan konfigurasi sebelumnya sengaja dibuat agar semua pc tidak mendapatkan IP secara otomatis disini perlu mengubah ip PC server dan client secara manual melalui control panel.
              </p>
            </div>
          </div>
        </div>        
        <div className="space-y-1">
          <div className="rounded-lg overflow-hidden aspect-video-wide max-w-2xl">
            <img
              src="/assets/img/blog/jaringanlan/10.webp"
              alt="control panel"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">search "control panel".</p>
        </div>
        <div className="space-y-1">
          <div className="rounded-lg overflow-hidden aspect-video-wide max-w-2xl">
            <img
              src="/assets/img/blog/jaringanlan/11.webp"
              alt="network and internet"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">buka menu "Network and internet".</p>
        </div>
        <div className="space-y-1">
          <div className="rounded-lg overflow-hidden aspect-video-wide max-w-2xl">
            <img
              src="/assets/img/blog/jaringanlan/12.webp"
              alt="network and sharing center"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">Buka menu "Network and sharing center".</p>
        </div>
        <div className="space-y-1">
          <div className="rounded-lg overflow-hidden aspect-video-wide max-w-2xl">
            <img
              src="/assets/img/blog/jaringanlan/13.webp"
              alt="change adapter setting"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">Buka menu "change adapter setting".</p>
        </div>
        <div className="space-y-1">
          <div className="rounded-lg overflow-hidden aspect-video-wide max-w-2xl">
            <img
              src="/assets/img/blog/jaringanlan/14.webp"
              alt="buka adapter"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">Buka adapter 1 yang tersambung dengan router.</p>
        </div>
        <div className="space-y-1">
          <div className="rounded-lg overflow-hidden aspect-video-wide max-w-2xl">
            <img
              src="/assets/img/blog/jaringanlan/15.webp"
              alt="properties IPv4"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">lalu masuk ke menu properties kemudian Internet Protocol Version 4.</p>
        </div>
        <div className="space-y-1">
          <div className="rounded-lg overflow-hidden aspect-video-wide max-w-2xl">
            <img
              src="/assets/img/blog/jaringanlan/16.webp"
              alt="ubah IP address server"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">
            Melakukan perubahan IP address untuk PC server dengan cara mengubah isi dari input IP address, subnet mask dan default gateway sesuai yang telah di konfigurasi pada mikrotik untuk ether 2 yang tersambung ke PC server.
          </p>
        </div>
      </section>

      {/* ── Langkah 11 ── */}
      <section className="space-y-3">
        <div className="space-y-1">
          <h2 className="font-coolvetica text-lg text-slate-900">
            11. Melakukan perubahan IP address untuk PC server
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Melakukan pengecekkan IP pada PC Server untuk memastikan IP telah benar-benar berhasil dikonfigurasi dengan cara membuka terminal pada windows lalu mengetikkan perintah berikut.
          </p>
          <TerminalBlock command="ipconfig" />
        </div>
        <div className="rounded-lg overflow-hidden aspect-video-wide max-w-2xl">
          <img
            src="/assets/img/blog/jaringanlan/17.webp"
            alt="ipconfig PC server"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ── Langkah 12 ── */}
      <section className="space-y-3">
        <div className="space-y-1">
          <h2 className="font-coolvetica text-lg text-slate-900">
            12. Melakukan konfigurasi pada PC Client (windows 11)
          </h2>
          <div className="rounded-sm border p-3 flex items-start gap-2">
            <Info className="w-4 h-4 text-black mt-0.5 flex-shrink-0" />
            <div className="space-y-1">
              <h2 className="font-coolvetica text-base text-black leading-none">
                Note.
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Dikarenakan konfigurasi sebelumnya sengaja dibuat agar semua pc tidak mendapatkan IP secara otomatis disini perlu mengubah ip PC server dan client secara manual melalui settings untuk windows 11.
              </p>
            </div>
          </div>
        </div>        
        <div className="space-y-1">
          <div className="rounded-lg overflow-hidden aspect-video-wide max-w-2xl">
            <img
              src="/assets/img/blog/jaringanlan/18.webp"
              alt="pengaturan windows 11"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">Buka Pengaturan windows 11.</p>
          <p className="text-sm text-slate-500 leading-relaxed">lalu masuk ke menu Network dan masuk ke menu Internet untuk membuka menu konfigurasi IP.</p>
        </div>
        <div className="space-y-1">
          <div className="rounded-lg overflow-hidden aspect-video-wide max-w-2xl">
            <img
              src="/assets/img/blog/jaringanlan/19.webp"
              alt="setting IP manual client"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">Setting pc menjadi manual.</p>
          <p className="text-sm text-slate-500 leading-relaxed">lalu isi input IP Address dan lain-lain sesuai isi dari konfigurasi IP address mikrotik pada ether 3 yang tersambung ke PC Client.</p>
        </div>
        <div className="space-y-2">
          <div className="rounded-lg overflow-hidden aspect-video-wide max-w-2xl">
            <img
              src="/assets/img/blog/jaringanlan/20.webp"
              alt="ipconfig PC client"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">Buka terminal windows.</p>
          <p className="text-sm text-slate-500 leading-relaxed">Lakukan pengecekkan dengan mengetik perintah berikut untuk memastikan IP yang telah dibuat benar dan telah terdeteksi.</p>
          <TerminalBlock command="ipconfig" />
        </div>
      </section>

      {/* Langkah 13 */}
        <section className="space-y-3">
        <div className="space-y-1">
          <h2 className="font-coolvetica text-lg text-slate-900">
            13. Melakukan perubahan IP address untuk PC server
          </h2>
          <div>
          <div>
          <p className="text-sm text-slate-500 leading-relaxed">
            Ping dari client ke server
          </p>
          <TerminalBlock command="ping 192.168.12.2" />
          </div>
          <div className="rounded-lg overflow-hidden aspect-video-wide max-w-2xl">
            <img
              src="/assets/img/blog/jaringanlan/21.webp"
              alt="ipconfig PC server"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
          <div>
          <div>
          <p className="text-sm text-slate-500 leading-relaxed">
            Ping dari server ke client
          </p>
          <TerminalBlock command="ping 192.168.12.2" />
          </div>
          <div className="rounded-lg overflow-hidden aspect-video-wide max-w-2xl">
            <img
              src="/assets/img/blog/jaringanlan/22.webp"
              alt="ipconfig PC server"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        </div>
      </section>
        <section className="space-y-3">
        <div className="space-y-1">
          <h2 className="font-coolvetica text-lg text-slate-900">
            Kesimpulan
          </h2>
          <div>
          <p className="text-sm text-slate-500 leading-relaxed">
            Berdasarkan praktik UKK TKJ dengan topologi jaringan sederhana (1 router, 1 switch, 1 PC client, dan 1 PC server), dapat disimpulkan bahwa konfigurasi pengalamatan IP manual, pengaturan firewall dasar, serta troubleshooting konektivitas telah berhasil diimplementasikan sesuai standar kompetensi. Seluruh perangkat terhubung secara optimal dengan verifikasi melalui uji ping antar-perangkat dan akses internet, membuktikan pemahaman teknis dalam administrasi jaringan skala kecil serta kemampuan problem solving sesuai skenario ujian. 
          </p>
        </div>
        </div>
      </section>
    </div>
  );
};

export default InkerBlogContent;