const cardWB = ({
    title,
    text,
    image,
    alt
}) => {
    return (
        <div className="relative rounded-4xl w-full min-h-100 md:h-[40vh] lg:w-1/2 lg:min-h-[600px] overflow-hidden">
            <div className="absolute z-10 inset-0 flex flex-col justify-start my-4 p-6">
                <p className="text-white text-2xl sm:text-3xl md:text-3xl xl:text-4xl font-medium mb-2">{title}</p>
                <p className="text-white/90 text-base md:text-xl">{text}</p>
            </div>
            <img
                className="absolute inset-0 w-full h-full object-cover bg-top-left"
                src={image}
                alt={alt}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent"></div>
<a href="#" 
   className="w-13 h-13 md:w-16 md:h-16 rounded-full absolute bottom-8 right-6 bg-white z-10 flex justify-center items-center  duration-50  active:scale-95 active:bg-accent cursor-pointer group">
    <img src="/arrow-right.svg" 
         alt="next" 
         className="w-8 h-6 md:w-9 md:h-7 duration-200 group-hover:translate-x-1 group-active:translate-x-0"/>
</a>
        </div>
    );
}
export default cardWB;