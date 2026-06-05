import H3 from "@/components/ui/typografi/H3";
import Paragraph from "@/components/ui/typografi/Paragraph";
import BlogImage from "@/components/ui/BlogImage";
import { AccordionSection, AccordionItem } from "@/components/ui/TroubleShooting";

const troubleshootingItems: AccordionItem[] = [
  {
    id: "q1",
    question: "bagaimana jika perangkat router tidak terdeteksi?",
    answers: [
      "pastikan router terkoneksi dengan PC anda",
      "pastikan kabel RJ45 benar-benar terhubung dan lampu indikator menyala",
      "pastikan kabel RJ45 tidak memiliki cacat atau kesalahan pembuatan, dan jika dicek menggunakan tester lampu berhasil menyala dengan urut",
      "pastikan port router tidak memiliki cacat",
    ],
  },
  {
    id: "q2",
    question: "tidak bisa masuk kedalam konfigurasi?",
    answers: [
      "pastikan anda masuk menggunakan mac address",
      "copot kabel RJ45 pada PC yang tersambung ke router lalu pasang ulang",
      "update atau reset ulang winbox",
      "pastikan kabel RJ45 tidak memiliki cacat atau kesalahan pembuatan, dan jika dicek menggunakan tester lampu berhasil menyala dengan urut",
    ],
  },
];

export default function Langkah3() {
  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <H3>3. masuk ke perangkat router</H3>
        <Paragraph>
          Masuk ke perangkat jaringan router mikrotik menggunakan Mac address
          untuk memulai mengkonfigurasi jaringan.
        </Paragraph>
      </div>

      <BlogImage src="jaringanlan/3.webp" alt="masuk ke perangkat router" />

      <AccordionSection
        title="Troubleshooting"
        items={troubleshootingItems}
        showAnswerNumbers
      />
    </section>
  );
}