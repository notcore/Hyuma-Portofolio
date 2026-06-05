import H3 from "@/components/ui/typografi/H3";
import Paragraph from "@/components/ui/typografi/Paragraph";
import BlogAlert from "@/components/ui/BlogAlert";
import BlogImage from "@/components/ui/BlogImage";
import TerminalBlock from "@/components/ui/Terminal";
import { Info } from "lucide-react";

const steps = [
  {
    src: "jaringanlan/18.webp",
    alt: "pengaturan windows 11",
    captions: [
      "Buka Pengaturan windows 11.",
      "lalu masuk ke menu Network dan masuk ke menu Internet untuk membuka menu konfigurasi IP.",
    ],
  },
  {
    src: "jaringanlan/19.webp",
    alt: "setting IP manual client",
    captions: [
      "Setting pc menjadi manual.",
      "lalu isi input IP Address dan lain-lain sesuai isi dari konfigurasi IP address mikrotik pada ether 3 yang tersambung ke PC Client.",
    ],
  },
  {
    src: "jaringanlan/20.webp",
    alt: "ipconfig PC client",
    captions: [
      "Buka terminal windows.",
      "Lakukan pengecekkan dengan mengetik perintah berikut untuk memastikan IP yang telah dibuat benar dan telah terdeteksi.",
    ],
    terminal: "ipconfig",
  },
];

export default function Langkah12() {
  return (
    <section className="space-y-3">
      <div className="space-y-1">
        <H3>12. Melakukan konfigurasi pada PC Client (windows 11)</H3>
        <BlogAlert Icon={Info} title="Note." color="text-black">
          Dikarenakan konfigurasi sebelumnya sengaja dibuat agar semua pc tidak
          mendapatkan IP secara otomatis disini perlu mengubah ip PC server dan
          client secara manual melalui settings untuk windows 11.
        </BlogAlert>
      </div>

      {steps.map((step) => (
        <div key={step.src} className="space-y-1">
          <BlogImage src={step.src} alt={step.alt} />
          {step.captions.map((caption, i) => (
            <Paragraph key={i}>{caption}</Paragraph>
          ))}
          {step.terminal && <TerminalBlock command={step.terminal} />}
        </div>
      ))}
    </section>
  );
}