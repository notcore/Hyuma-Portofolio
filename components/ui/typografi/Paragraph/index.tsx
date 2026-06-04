import { Children } from "react";

type props = {
    text? : string;
    className?: string;
      children: React.ReactNode;
}

const Paragraph = ({text,className,children}: props) => {
    return(
        <p className={`text-sm text-slate-600 leading-relaxed ${className}`}>
            {text}
            {children}
        </p>
    )
}

export default Paragraph;