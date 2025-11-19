type Props = {
    Url : string;
};

const PortofolioText = ( { Url }: Props ) => {
    return(
    <>
        <img
            src={Url}
            alt="Portofolio"
            className="w-full h-auto -mt-12"
        />
    </>
    )
}

export default PortofolioText;