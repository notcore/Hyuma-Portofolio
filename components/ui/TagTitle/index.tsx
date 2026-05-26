import { ChevronRight } from "lucide-react";

type props = {
    title: string;
    color: string;
    bagian: string;
}

const TagTitle = ( {title, color, bagian} : props ) => {
    return(
        <div className="flex justify-start my-5 items-center">
            <div><ChevronRight className={`text-${color}-600 font-coolvetica text-sm font-semibold`}/></div>
            <h1 className={`text-sm ml-1 uppercase`}>{title} / <span className={`text-${color}-600`}>{bagian}</span></h1>
        </div>
    )
}

export default TagTitle;