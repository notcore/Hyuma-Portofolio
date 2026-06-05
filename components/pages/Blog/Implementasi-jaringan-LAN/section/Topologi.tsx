
import H3 from "@/components/ui/typografi/H3";
import Paragraph from "@/components/ui/typografi/Paragraph";
import BlogImage from "@/components/ui/BlogImage";
import Sumber from "@/components/ui/Sumber"

export default function Topologi(){
    return(
         <section className="space-y-2">
                <H3>
                  Topologi.
                </H3>
                <Paragraph>
                  rancangan topologi jaringan LAN
                </Paragraph>
                <BlogImage src="jaringanlan/topologi.png" alt="topologi"/>
                <div className="text-xs text-slate-400 flex items-center gap-2 justify-end">
                <Sumber href="www.figma.com">didesign menggunakan figma</Sumber>
                  <span>•</span>
                  <Sumber href="https://lucide.dev/icons/">Icon Lucide react</Sumber>
                </div>
              </section>
    )
}