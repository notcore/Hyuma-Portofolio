import H3 from "@/components/ui/typografi/H3";
import Paragraph from "@/components/ui/typografi/Paragraph";
import BlogImage from "@/components/ui/BlogImage";
import TerminalBlock from "@/components/ui/Terminal";
import { AccordionSection, AccordionItem } from "@/components/ui/TroubleShooting";

const troubleshootingItems: AccordionItem[] = [
  {
    id: "q1",
    question: 'mengatasi "request timed out"',
    answers: [
      "Pastikan kedua perangkat berada dalam subnet yang sama sesuai konfigurasi jaringan yang telah dibuat sebelumnya",
      "Periksa kembali penulisan IP address, pastikan tidak ada kesalahan angka atau typo",
      "Lakukan pengecekan menggunakan perintah ipconfig pada kedua PC untuk memastikan IP sudah sesuai dengan konfigurasi yang diberikan di router",
      "Pastikan kabel LAN terhubung dengan baik dan tidak longgar",
      "Cek kondisi port pada switch atau router, pastikan lampu indikator aktif dan koneksi terdeteksi",
      "Pastikan firewall dikedua PC tidak memblokir akses",
    ],
  },
];

const steps = [
  {
    src: "jaringanlan/21.webp",
    alt: "ping dari client ke server",
    caption: "Ping dari client ke server",
    command: "ping 192.168.11.2",
  },
  {
    src: "jaringanlan/22.webp",
    alt: "ping dari server ke client",
    caption: "Ping dari server ke client",
    command: "ping 192.168.12.2",
  },
];

export default function Langkah13() {
  return (
    <section className="space-y-3">
      <H3>13. Melakukan perubahan IP address untuk PC server</H3>

      {steps.map((step) => (
        <div key={step.src} className="space-y-1">
          <Paragraph>{step.caption}</Paragraph>
          <TerminalBlock command={step.command} />
          <BlogImage src={step.src} alt={step.alt} />
        </div>
      ))}

      <AccordionSection
        title="Troubleshooting"
        items={troubleshootingItems}
        showAnswerNumbers
      />
    </section>
  );
}