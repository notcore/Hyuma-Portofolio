import H2 from "@/components/ui/typografi/H2";
import Paragraph from "@/components/ui/typografi/Paragraph";

const Tujuan = () => {
    return(
         <section className="space-y-2">
                <H2>
                  Tujuan.
                </H2>
                <Paragraph>
                  Dokumentasi ini berisi proses praktik UKK TKJ mulai dari perancangan
                  alat dan bahan, topologi jaringan sederhana dengan pengalamatan IP
                  manual hingga implementasi konfigurasi router, dan switch pada
                  mikrotik agar tercapai konektivitas antar perangkat PC Server dan
                  Client. Selain itu, dokumentasi ini juga memuat analisis penyelesaian
                  masalah jaringan yang diberikan penguji sebagai bukti kompetensi
                  troubleshooting dan pemahaman teknis konfigurasi jaringan komputer.
                </Paragraph>
              </section>
        
    )
}
export default Tujuan;