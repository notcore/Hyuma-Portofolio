

type props = {
    className?: string;
      children: React.ReactNode;
}

const H2 = ({className,children}: props) => {
    return(
      <div className="pt-2 border-t border-slate-100">
        <h2 className={`font-coolvetica text-2xl text-slate-900  ${className}`}>
          {children}
        </h2>
      </div>
    )
}

export default H2;