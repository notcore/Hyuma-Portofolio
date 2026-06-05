import { Children } from "react";

type props = {
    className?: string;
      children: React.ReactNode;
}

const Paragraph = ({className,children}: props) => {
    return(
        <p className={`text-sm text-slate-600 leading-relaxed ${className}`}>
            {children}
        </p>
    )
}

export default Paragraph;