type props = {
    children: React.ReactNode;
    className?: string;
}

const Title = ( { children,className } : props ) => {

    return(
        <h2 className={`text-3xl lg:text-4xl font-coolvetica`}>{children}</h2>
    )
}

export default Title;