import H3 from "@/components/ui/typografi/H3";
import Paragraph from "@/components/ui/typografi/Paragraph";
import BlogImage from "@/components/ui/BlogImage";

export default function Langkah1() {
  return (
    <section className="space-y-3">
      <div className="space-y-1">
        <H3>1 Menyusun perangkat jaringan</H3>
        <Paragraph>
          Menyusun dan menyambungkan beberapa kabel ke perangkat jaringan
          mikrotik hingga sesuai topologi dan tertata rapi agar maintenance dan
          troubleshooting kedepanya tidak membuat susah, selama menyusun
          perangkat pastikan semua lampu pada router dan switch menyala dan
          terhubung dengan listrik.
        </Paragraph>
      </div>
      <BlogImage src="jaringanlan/mikrotik.jpg" alt="memasang mikrotik" />
    </section>
  );
}
