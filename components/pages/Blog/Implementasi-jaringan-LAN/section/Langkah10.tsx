import H3 from "@/components/ui/typografi/H3";
import Paragraph from "@/components/ui/typografi/Paragraph";
import BlogAlert from "@/components/ui/BlogAlert";
import BlogImage from "@/components/ui/BlogImage";
import { Info } from "lucide-react";

const steps = [
  { src: "jaringanlan/10.webp", alt: "control panel",              caption: 'search "control panel".' },
  { src: "jaringanlan/11.webp", alt: "network and internet",        caption: 'buka menu "Network and internet".' },
  { src: "jaringanlan/12.webp", alt: "network and sharing center",  caption: 'Buka menu "Network and sharing center".' },
  { src: "jaringanlan/13.webp", alt: "change adapter setting",      caption: 'Buka menu "change adapter setting".' },
  { src: "jaringanlan/14.webp", alt: "buka adapter",                caption: "Buka adapter 1 yang tersambung dengan router." },
  { src: "jaringanlan/15.webp", alt: "properties IPv4",             caption: "lalu masuk ke menu properties kemudian Internet Protocol Version 4." },
  { src: "jaringanlan/16.webp", alt: "ubah IP address server",      caption: "Melakukan perubahan IP address untuk PC server dengan cara mengubah isi dari input IP address, subnet mask dan default gateway sesuai yang telah di konfigurasi pada mikrotik untuk ether 2 yang tersambung ke PC server." },
];

export default function Langkah10() {
  return (
    <section className="space-y-3">
      <div className="space-y-1">
        <H3>10. Melakukan konfigurasi pada PC server (windows 10)</H3>
        <BlogAlert Icon={Info} title="Note." color="text-black">
          Dikarenakan konfigurasi sebelumnya sengaja dibuat agar semua pc tidak
          mendapatkan IP secara otomatis disini perlu mengubah ip PC server dan
          client secara manual melalui control panel.
        </BlogAlert>
      </div>

      {steps.map((step) => (
        <div key={step.src} className="space-y-1">
          <BlogImage src={step.src} alt={step.alt} />
          <Paragraph>{step.caption}</Paragraph>
        </div>
      ))}
    </section>
  );
}