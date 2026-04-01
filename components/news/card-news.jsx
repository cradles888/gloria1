import Button from '@/components/ui/button'

const cardNews = ({date, imageUrl, imageAlt, title, desc}) => {
    const truncateText = (text, maxLength = 70) => {
        if (!text) return '';
        if (text.length <= maxLength) return text;
        
        let truncated = text.substring(0, maxLength);
        const lastSpace = truncated.lastIndexOf(' ');
        
        if (lastSpace > maxLength * 0.7) {
            truncated = truncated.substring(0, lastSpace);
        }
        
        return `${truncated}... `;
    };

    const truncatedDesc = truncateText(desc);
    
    return (
        <article className='grid h-full w-full bg-dark10 rounded-xl overflow-hidden cursor-pointer'>
            <img 
                className='w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover' 
                src={imageUrl} 
                alt={imageAlt} 
            />
            <section className='grid gap-2 p-4 sm:p-5 flex-1'>
                <h3 className='text-dark text-lg font-medium leading-[115%] line-clamp-2 min-h-[4rem]'>
                    {title}
                </h3>
                <p className='text-dark50 text-sm line-clamp-3 min-h-[4rem]'>
                    {truncatedDesc}
                </p>
                <section className='block mt-auto pt-2'>
                    <p className='bg-white/80 inline-block py-1 px-2 rounded-lg text-xs'>
                        {date}
                    </p>
                </section>
            </section>
        </article>
    );
}

export default cardNews;