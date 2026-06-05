import { ExternalLink } from "lucide-react";
import { Children } from "react";

type props = {
  href: String;
  children: React.ReactNode;
};

const Sumber = ({ href, children }: props) => {
  return (
    <a
      href="https://www.figma.com/"
      className="hover:text-slate-900 flex items-center gap-0.5"
    >
      {children} <ExternalLink className="w-3 h-3" />
    </a>
  );
};

export default Sumber;
