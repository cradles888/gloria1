'use client'

import { useState } from "react";

const residentialComplex = (
    {
        name,
        street,
        price,
        imageUrl
    }
) => {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    const handleMouseLeave = () => {
        setIsClicked(false);
    };



    return (
        <div className="h-152 bg-no-repeat rounded-4xl grid items-end bg-cover bg-center relative cursor-pointer"
            onClick={handleClick}
            onMouseLeave={handleMouseLeave}
            style={{
                backgroundImage: `url('${imageUrl}')`,
                boxShadow: 'inset 0 -20px 20px -10px rgba(0, 0, 0, 0.5)'
            }}>
            <div className={`grid pb-6 md:flex ${isClicked ? 'opacity-0' : 'opacity-100'} h-44 md:h-38 transition-opacity duration-300 justify-between items-center px-10 rounded-b-4xl relative bg-gradient-to-t via-black/60 from-black/80 md:via-black/60 md:from-black/80 to-transparent`}>
                <div className="grid justify-start">
                    <p className="font-medium text-5xl text-white select-none">{name}</p>
                    <p className="font-medium text-2xl text-dark25 select-none">{street}</p>
                </div>
                <div>
                    <p className="text-2xl font-medium text-white select-none">{price}</p>
                </div>
            </div>
            {/* Секция с эффектом стекла */}
            <div className={`${isClicked ? 'opacity-100 bg show bg-black/5 saturate-150 border-t border-white/20 shadow-[inset_0_4px_20px_rgba(255,255,255,0.3)]' : 'opacity-0 bg'} transition-all justify-end absolute right-0 h-full w-1/2 rounded-r-4xl hidden lg:block`}>
                {/* liquid" эффект */}
                <div className="absolute inset-0 rounded-b-4xl overflow-hidden">
                    <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3)_0%,transparent_70%)] opacity-60"></div>
                </div>

                {/* Контент поверх стекла */}
                <div className={`relative z-10 xl:px-16 px-10 w-full mt-14 transform transition-all duration-300 ease-in-out ${isClicked ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                    <p className="text-black mb-8 font-medium text-2xl text-start text-white">Квартиры в {name}</p>
                    <div className="flex flex-wrap gap-16 ">
                        <div className="grid gap-4 text-start">
                            <p className="text-white lg:text-md xl:text-xl">1-комнатные</p>
                            <p className="text-white lg:text-md xl:text-xl">2-комнатные</p>
                            <p className="text-white lg:text-md xl:text-xl">3-комнатные</p>
                        </div>
                        <div className="grid gap-4 text-start">
                            <p className="text-white lg:text-md xl:text-xl">от 30.7 м²</p>
                            <p className="text-white lg:text-md xl:text-xl">от 50 м²</p>
                            <p className="text-white lg:text-md xl:text-xl">от 75.4 м²</p>
                        </div>
                        <div className="grid gap-4 text-start">
                            <p className="text-white lg:text-md xl:text-xl">от 5.4 млн</p>
                            <p className="text-white lg:text-md xl:text-xl">от 6.3 млн</p>
                            <p className="text-white lg:text-md xl:text-xl">от 10.3 млн</p>
                        </div>
                    </div>
                    {/* Чёрточка */}
                    <div className="h-px bg-dark40 w-[80%] my-6"></div>
                    {/*  */}
                    <div className="grid">
                        <p className="text-lg text-white font-medium">Места поблизости</p>
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] xl:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
                            <div className="grid justify-items-start gap-2 text-white">
                                <p className="font-medium text-base mt-2">Здоровье</p>
                                <p className="text-sm">— Поликлиника</p>
                                <p className="text-sm">— Станция скорой помощи</p>
                            </div>
                            <div className="grid justify-items-start gap-2 text-white">
                                <p className="font-medium text-base mt-2">Учёба</p>
                                <p className="text-sm">— Пед.институт</p>
                                <p className="text-sm">— Школа, детский сад</p>
                            </div>
                             <div className="grid justify-items-start gap-2 text-white">
                                <p className="font-medium text-base mt-2">Культура</p>
                                <p className="text-sm">— Дворец культуры</p>
                                <p className="text-sm">— Кинотеатр "Россия"</p>
                            </div>
                            <div className="grid justify-items-start gap-2 text-white">
                                <p className="font-medium text-base mt-2">Спорт</p>
                                <p className="text-sm">— Дворец спорта "Химик"</p>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default residentialComplex;