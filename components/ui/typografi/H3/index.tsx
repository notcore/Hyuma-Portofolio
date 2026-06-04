

type props = {
    text? : string;
    className: string
      children: React.ReactNode;
}

const H3 = ({text,className,children}: props) => {
    return(
        <h3 className={`font-coolvetica text-lg leading-none ${className}`}>
            {text}
            {children}
        </h3>
    )
}

export default H3;