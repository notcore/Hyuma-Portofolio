type props = {
  title: string;
  color: string;
  colorText: string;
  detailSkill: string;
  detailDeskripsi: string;
};

const Label = ({
  title,
  detailSkill = "judul",
  detailDeskripsi = "deskripsi",
}: props) => {

    
  return (
    <div className="relative group inline-block">
      
      <button
        className="peer bg-blue-500 text-white rounded-sm px-3 py-1 border border-blue-300"
      >
        {title}
      </button>

      <div className="absolute pointer-events-none select-none grid group-hover:opacity-100 opacity-0 peer-hover:opacity-100 peer-active:opacity-100 peer-focus:opacity-100 transition duration-300 w-40 bg-white/20 backdrop-blur-[6px] p-3 -mt-26 rounded-md -ml-5 border">
        
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-600"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blue-600"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-600"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-600"></div>

        <span className="font-semibold">{detailSkill}</span>
        <span className="text-sm">{detailDeskripsi}</span>
      </div>

    </div>
  );
};

export default Label;