type props = {
    title: string;
    color: string;
    colorText: string
}

const Label = ( {title, color="blue-600",colorText="white"} : props ) => {

    return(
        <p className={`bg-${color} text-${colorText} px-3 py-1 text-xl rounded-full`}>{title}</p>
    )

}

export default Label;