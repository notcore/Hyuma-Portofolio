import H3 from "@/components/ui/typografi/H3";
import Paragraph from "@/components/ui/typografi/Paragraph";
import BlogImage from "@/components/ui/BlogImage";

export default function Langkah9() {
  return (
    <section className="space-y-3">
      <div className="space-y-1">
        <H3> 9. Konfigurasi NAT firewall</H3>
        <Paragraph>
              Melakukan konfigurasi pada NAT Firewall agar internet dari ether 1 bisa digunakan.
        </Paragraph>
      </div>
      <BlogImage src="jaringanlan/9.webp" alt="konfigurasi-ether1" />
    </section>
  );
}
