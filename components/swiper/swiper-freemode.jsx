"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    FreeMode
} from "swiper/modules";

// Стили Swiper
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import { useState } from "react";
import Card from "@/components/unnatov/ui/card";

const freemodeSlider = ({ data }) => {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [swiperInstance, setSwiperInstance] = useState(null);

    return (
        <div className="relative">
            <Swiper
                modules={[FreeMode, Navigation]}
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                onSwiper={(swiper) => {
                    setSwiperInstance(swiper);
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
                onSlideChange={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1.5,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                className="mySwiper"
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Card
                            title={item.title}
                            desc={item.desc}
                            imageUrl={item.image}
                            imageAlt={item.alt}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            
            <button
                onClick={() => swiperInstance?.slidePrev()}
                className={`
                    absolute left-4 top-1/2 -translate-y-1/2
                    z-20 w-11 h-11 rounded-full
                    flex items-center justify-center
                    transition-all duration-200 shadow-sm
                    ${isBeginning
                        ? "bg-gray-100 cursor-not-allowed opacity-50"
                        : "bg-white border border-gray-200 hover:bg-gray-50 hover:shadow-md active:scale-95 cursor-pointer"
                    }
                `}
                disabled={isBeginning}
                aria-label="Предыдущий"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={isBeginning ? "opacity-40" : ""}
                >
                    <path
                        d="M15 18L9 12L15 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            <button
                onClick={() => swiperInstance?.slideNext()}
                className={`
                    absolute right-4 top-1/2 -translate-y-1/2
                    z-20 w-11 h-11 rounded-full
                    flex items-center justify-center
                    transition-all duration-200 shadow-sm
                    ${isEnd
                        ? "bg-gray-100 cursor-not-allowed opacity-50"
                        : "bg-white border border-gray-200 hover:bg-gray-50 hover:shadow-md active:scale-95 cursor-pointer"
                    }
                `}
                disabled={isEnd}
                aria-label="Следующий"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={isEnd ? "opacity-40" : ""}
                >
                    <path
                        d="M9 18L15 12L9 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </div>
    );
};

export default freemodeSlider;