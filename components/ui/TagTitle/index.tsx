type props = {
    title: string;
    color: string;
}

const TagTitle = ( {title, color} : props ) => {
    return(
        <div className="flex justify-start my-5 items-center">
            <div className={`text-${color}-600 font-coolvetica text-5xl font-semibold`}>#</div>
            <h1 className={`text-3xl ml-1 font-bold`}>{title}</h1>
        </div>
    )
}

export default TagTitle;