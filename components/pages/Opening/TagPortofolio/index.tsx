import { TextAnimate } from "@/components/ui/text-animate";


export function TagPortofolio() {
  return (
    <div className="sm:text-3xl text-sm flex gap-1 md:text-5xl md:mb-4 font-bold mb-8 text-start">
    <span className="font-bold text-blue-600">#</span>
      <TextAnimate animation="blurIn" as="h1" by="character" delay={1}>
        ポートフォリオ
      </TextAnimate>
    </div>

  )
}
export default TagPortofolio