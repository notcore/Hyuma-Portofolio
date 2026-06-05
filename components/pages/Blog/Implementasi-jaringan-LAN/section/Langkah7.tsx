import H3 from "@/components/ui/typografi/H3";
import Paragraph from "@/components/ui/typografi/Paragraph";
import BlogImage from "@/components/ui/BlogImage";

export default function Langkah7() {
  return (
    <section className="space-y-3">
      <div className="space-y-1">
        <H3>7. Konfigurasi IP untuk ether 2</H3>
        <Paragraph>
              Mengkonfigurasi IP address untuk ether 2 yang tersambung ke PC Server.
        </Paragraph>
      </div>
      <BlogImage src="jaringanlan/7.webp" alt="konfigurasi-ether2" />
    </section>
  );
}
