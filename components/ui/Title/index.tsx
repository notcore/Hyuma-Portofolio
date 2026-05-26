type props = {
    children: React.ReactNode;
    className?: string;
}

const Title = ( { children,className } : props ) => {

    return(
        <h2 className={`text-4xl md:text-6xl ${className} font-bold`}>{children}</h2>
    )
}

export default Title;