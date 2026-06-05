import H3 from "@/components/ui/typografi/H3";
import Paragraph from "@/components/ui/typografi/Paragraph";
import BlogImage from "@/components/ui/BlogImage";

export default function Langkah4() {
  return (
    <section className="space-y-3">
      <div className="space-y-1">
        <H3>  4. Reset konfigurasi router</H3>
        <Paragraph>
            Melakukan reset pada router untuk mencegah terjadinya konflik jika terdapat konfigurasi sebelumnya, lalu melakukan masuk ulang kedalam konfigurasi perangkat jaringan router.
        </Paragraph>
      </div>
      <BlogImage src="jaringanlan/4.webp" alt="resert konfigurasi router" />
    </section>
  );
}
