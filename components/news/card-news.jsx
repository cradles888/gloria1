import Button from '@/components/ui/button'

const cardNews = ({date, isLike, image, alt, title, desc}) => {
    const truncateText = (text, maxLength = 30) => {
        if (!text) return '';
        if (text.length <= maxLength) return text;
        
        let truncated = text.substring(0, maxLength);
        const lastSpace = truncated.lastIndexOf(' ');
        
        if (lastSpace > maxLength * 0.7) {
            truncated = truncated.substring(0, lastSpace);
        }
        
        return `${truncated}...`;
    };

    const truncatedDesc = truncateText(desc);
    
    return(
        <article className=" select-none
            grid content-between relative rounded-4xl overflow-hidden px-4 py-6 
            w-full h-full min-h-[350px]
            lg:h-[414px]
            transition-all duration-300 hover:shadow-xl
        ">
            <section className="flex justify-start items-center">
                <section className="block text-center items-center bg-white rounded-lg px-2 py-1 text-dark text-xs sm:text-sm">
                    {date}
                </section>
            </section>
            
            <img
                className="absolute inset-0 -z-10 w-full h-full object-cover"
                src={image}
                alt={alt}
            />
            
            <div className="grid justify-items-start text-white gap-2 relative z-10">
                <p className="text-xl font-medium line-clamp-2">{title}</p>
                <p className="text-base line-clamp-3">{truncatedDesc}</p>
                <Button text='Читать' size='sm_l' variant='accent' className='mt-2 text-lg' />
            </div>
            
            <div className="bg-gradient-to-b from-black/40 via-black/20 -z-10 to-transparent h-20 w-full absolute top-0"></div>
            <div className="bg-gradient-to-t from-black/80 via-black/60 -z-10 to-transparent h-55 w-full absolute bottom-0"></div>
        </article>
    );
}

export default cardNews;