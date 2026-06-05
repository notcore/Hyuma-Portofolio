import H3 from "@/components/ui/typografi/H3";
import Paragraph from "@/components/ui/typografi/Paragraph";
import BlogImage from "@/components/ui/BlogImage";

export default function Langkah8() {
  return (
    <section className="space-y-3">
      <div className="space-y-1">
        <H3> 8. Konfigurasi IP untuk ether 3</H3>
        <Paragraph>
              Mengkonfigurasi IP address untuk ether 3 yang tersambung ke PC Client.
        </Paragraph>
      </div>
      <BlogImage src="jaringanlan/8.webp" alt="konfigurasi-ether1" />
    </section>
  );
}
