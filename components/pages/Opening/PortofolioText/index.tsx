type Props = {
    Url : string;
};

const PortofolioText = ( { Url }: Props ) => {
    return(
    <>
        <img
            src={Url}
            alt="Portofolio"
            className="w-full h-auto scale-y-120 select-none pointer-events-none"
        />
    </>
    )
}

export default PortofolioText;