import H3 from "@/components/ui/typografi/H3";
import Paragraph from "@/components/ui/typografi/Paragraph";
import BlogImage from "@/components/ui/BlogImage";

export default function Langkah6() {
  return (
    <section className="space-y-3">
      <div className="space-y-1">
        <H3>  6. membuat DHCP client</H3>
        <Paragraph>
             Melakukan Konfigurasi pada DHCP client agar IP pada ether 1 yang tersambung ke internet mendapatkan IP address secara otomatis dari ISP.
        </Paragraph>
      </div>
      <BlogImage src="jaringanlan/6.webp" alt="membuat DHCP client" />
    </section>
  );
}
