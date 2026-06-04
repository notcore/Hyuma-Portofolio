import { LucideIcon } from "lucide-react";
import H3 from "@/components/ui/typografi/H3";
import Paragraph from "@/components/ui/typografi/Paragraph";

type BlogAlertProps = {
  Icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  color?: string;
  className?: string;
};

export default function BlogAlert({
  Icon,
  title,
  children,
  color = "text-orange-600",
  className = "",
}: BlogAlertProps) {
  return (
    <section
      className={`rounded-sm flex items-start gap-3 ${className}`}
    >
      <Icon
        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${color}`}
      />

      <div className="space-y-1">
        <H3 className={color}>
          {title}
        </H3>

        <Paragraph className="leading-relaxed">
          {children}
        </Paragraph>
      </div>
    </section>
  );
}