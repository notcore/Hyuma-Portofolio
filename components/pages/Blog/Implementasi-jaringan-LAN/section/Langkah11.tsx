import H3 from "@/components/ui/typografi/H3";
import Paragraph from "@/components/ui/typografi/Paragraph";
import BlogImage from "@/components/ui/BlogImage";
import Terminal from "@/components/ui/Terminal";

export default function Langkah11() {
  return (
    <section className="space-y-3">
      <div className="space-y-1">
        <H3>11. Melakukan perubahan IP address untuk PC server</H3>
        <Paragraph>
                Melakukan pengecekkan IP pada PC Server untuk memastikan IP telah benar-benar berhasil dikonfigurasi dengan cara membuka terminal pada windows lalu mengetikkan perintah berikut.
        </Paragraph>
        <Terminal command="ipconfig" />
      </div>
      <BlogImage src="jaringanlan/17.webp" alt="perubahan-ip-addres-pc-server" />
    </section>
  );
}
