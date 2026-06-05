import H3 from "@/components/ui/typografi/H3";
import Paragraph from "@/components/ui/typografi/Paragraph";
import BlogImage from "@/components/ui/BlogImage";

export default function Langkah5() {
  return (
    <section className="space-y-3">
      <div className="space-y-1">
        <H3>   5. Beri identitas pada router</H3>
        <Paragraph>
             Setelah melakukan reset konfigurasi pada router, melakukan langkah memberi identitas pada router.
        </Paragraph>
      </div>
      <BlogImage src="jaringanlan/5.webp" alt="memberi identitas router" />
    </section>
  );
}
