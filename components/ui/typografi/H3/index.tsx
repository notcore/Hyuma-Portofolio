

type props = {
    className?: string
      children: React.ReactNode;
}

const H3 = ({className,children}: props) => {
    return(
        <h3 className={`font-coolvetica text-lg leading-none ${className}`}>
            {children}
        </h3>
    )
}

export default H3;