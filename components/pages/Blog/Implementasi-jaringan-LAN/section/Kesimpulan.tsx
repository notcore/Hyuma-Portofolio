import H2 from "@/components/ui/typografi/H2";
import Paragraph from "@/components/ui/typografi/Paragraph";

export default function Kesimpulan() {
  return (
    <section className="space-y-3">
      <div className="space-y-1">
        <H2> Kesimpulan</H2>
        <Paragraph>
            Berdasarkan praktik UKK TKJ dengan topologi jaringan sederhana (1 router, 1 switch, 1 PC client, dan 1 PC server), dapat disimpulkan bahwa konfigurasi pengalamatan IP manual, pengaturan firewall dasar, serta troubleshooting konektivitas telah berhasil diimplementasikan sesuai standar kompetensi. Seluruh perangkat terhubung secara optimal dengan verifikasi melalui uji ping antar-perangkat dan akses internet, membuktikan pemahaman teknis dalam administrasi jaringan skala kecil serta kemampuan problem solving sesuai skenario ujian. 
        </Paragraph>
      </div>
    </section>
  );
}