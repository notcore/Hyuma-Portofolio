type props = {
    alt?: string;
    src: string;
    className?: string;
}

const BlogImage = ( {alt, src, className} : props ) => {
    return(
        <div className="rounded-sm p-1 bg-white">
          <img 
            className={`w-full h-auto rounded-sm ${className}`} 
            src={`/assets/img/blog/${src}`} 
            alt={ alt ? ( 'dokumentasi' ) : ( alt ) }
          />
        </div>
    )
}

export default BlogImage;