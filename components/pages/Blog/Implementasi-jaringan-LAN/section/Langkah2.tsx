import H3 from "@/components/ui/typografi/H3";
import Paragraph from "@/components/ui/typografi/Paragraph";
import BlogImage from "@/components/ui/BlogImage";

export default function Langkah2() {
  return (
    <section className="space-y-3">
      <div className="space-y-1">
        <H3> 2. membuka winbox</H3>
        <Paragraph>
           Membuka software winbox untuk memulai konfigurasi jaringan pada perangkat mikrotik yang telah disusun sebelumnya.
        </Paragraph>
      </div>
      <BlogImage src="jaringanlan/2.webp" alt="membuka winbox" />
    </section>
  );
}
