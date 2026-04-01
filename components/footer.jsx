'use client'
import { Roboto } from "next/font/google";
import Button from '@/components/ui/Button'
import { useState } from 'react';

const Footer = () => {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (section) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return(
        <div className="container-padding mx-auto my-8 px-4 md:px-0">
            <footer className="hidden lg:grid grid-cols-[2fr_1fr_1fr_1fr] gap-8 items-start bg-header py-12 px-16 rounded-4xl">
                <div className="grid gap-12 justify-start">
                    <img src="/logo2.svg" alt="logo" />
                    <div className="grid gap-2">
                        <h3 className="text-white">По вопросам и предложениям</h3>
                        <p className="w-70 text-twopart mb-2 text-sm">Входящие звонки принимаются
                            с 8:00 до 12:00 и с 13:00 до 17:00<br/>
                            Суббота и воскресенье — выходные
                        </p>
                        <div className="flex gap-4">
                            <Button text="Сообщение" size={'sm'} variant={'accent'}/>
                            <Button text="+7 (8162) 62-38-00" size={'sm'} variant={'white'}/>
                        </div>
                    </div>
                    <div className="w-80 text-dark40 grid gap-4 text-sm">
                        <p>© ООО «Глория» Строительная компания 1999-2026г.</p>
                        <p>Строительство и продажа квартир в Великом Новгороде.
                            Сайт носит исключительно информационный характер. Информация, размещенная на сайте, не является публичной офертой.
                        </p>
                    </div>
                    <span className="w-60 text-dark40"><br/> </span>
                </div>

                <div className="grid gap-6">
                    <div className="grid gap-3 justify-start">
                        <span className="text-sm font-medium text-white">Квартиры</span>
                        <a href="#" className="text-twopart text-sm">Новостройки 2025 года</a>
                        <a href="#" className="text-twopart text-sm">Студии</a>
                        <a href="#" className="text-twopart text-sm">Двухкомнатные</a>
                        <a href="#" className="text-twopart text-sm">Трёхкомнатные</a>
                        <a href="#" className="text-twopart text-sm">Более четырёх комнат</a>
                        <a href="#" className="text-twopart text-sm">Со скидкой</a>
                    </div>
                    <div className="grid gap-3 justify-start">
                        <span className="text-sm font-medium text-white">Информация</span>
                        <a href="#" className="text-twopart text-sm">Блог</a>
                        <a href="#" className="text-twopart text-sm">Акции</a>
                        <a href="#" className="text-twopart text-sm">О компании</a>
                        <a href="#" className="text-twopart text-sm">Построенные объекты</a>
                    </div>
                    <div className="grid gap-4">
                        <span className="text-sm font-medium text-white">Наши соц.сети</span>
                        <div className="flex gap-4">
                            <img src="/vk.svg" alt="vk" />
                            <img src="/tg.svg" alt="tg" />
                        </div>
                    </div>
                </div>

                <div className="grid gap-6">
                    <div className="grid gap-3 justify-start">
                        <span className="text-sm font-medium text-white">Квартиры</span>
                        <a href="#" className="text-twopart text-sm">Новостройки 2025 года</a>
                        <a href="#" className="text-twopart text-sm">Студии</a>
                        <a href="#" className="text-twopart text-sm">Двухкомнатные</a>
                        <a href="#" className="text-twopart text-sm">Трёхкомнатные</a>
                        <a href="#" className="text-twopart text-sm">Более четырёх комнат</a>
                        <a href="#" className="text-twopart text-sm">Со скидкой</a>
                    </div>
                    <div className="grid gap-3 justify-start">
                        <span className="text-sm font-medium text-white">Связь с нами</span>
                        <a href="#" className="text-twopart text-sm">Отдел продаж (+7 911-101-10-10)</a>
                        <a href="#" className="text-twopart text-sm">Виктория (+7 911-101-10-10)</a>
                        <a href="#" className="text-twopart text-sm">Оксана (+7 911-101-10-10)</a>
                    </div>
                </div>

                <div className="grid gap-6">
                    <div className="grid gap-3 justify-start">
                        <span className="text-sm font-medium text-white">Проекты</span>
                        <a href="#" className="text-twopart text-sm">ЖК Юннатов</a>
                        <a href="#" className="text-twopart text-sm">ЖК Раздолье</a>
                        <a href="#" className="text-twopart text-sm">ЖК Шелонская</a>
                        <a href="#" className="text-twopart text-sm">ул. Речная д.10</a>
                        <a href="#" className="text-twopart text-sm">Б.Санкт-Петербургская д.98</a>
                        <a href="#" className="text-twopart text-sm">ул. Парковая 3/1-2</a>
                        <a href="#" className="text-twopart text-sm">ул. Воскр. бульвар д.10</a>
                        <a href="#" className="text-white text-sm font-medium">Больше проектов</a>
                    </div>
                </div>
            </footer>

            {/* Мобильная версия с аккордеоном (до lg) */}
            <div className="lg:hidden">
                <div className="bg-header rounded-3xl p-6">
                    <div className="mb-6">
                        <img src="/logo2.svg" alt="logo" className="mb-6" />
                        <div className="grid gap-2 mb-6">
                            <h3 className="text-white">По вопросам и предложениям</h3>
                            <p className="text-twopart text-sm">Входящие звонки принимаются
                                с 8:00 до 12:00 и с 13:00 до 17:00<br/>
                                Суббота и воскресенье — выходные
                            </p>
                        </div>
                        <div className="grid gap-y-4 sm:flex gap-3 mb-6">
                            <Button text="Сообщение" size={'sm'} variant={'accent'}/>
                            <Button text="+7 (8162) 62-38-00" size={'sm'} variant={'white'}/>
                        </div>
                    </div>

                    {/* Аккордеон */}
                    <div className="space-y-2">
                        {/* Квартиры */}
                        <div className="border-b border-gray-700">
                            <button
                                onClick={() => toggleSection('flats')}
                                className="flex items-center justify-between w-full py-3 text-white font-medium"
                            >
                                <span>Квартиры</span>
                                <svg
                                    className={`w-5 h-5 transform transition-transform duration-200 ${openSections.flats ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openSections.flats ? 'max-h-96 pb-3' : 'max-h-0'}`}>
                                <div className="flex flex-col gap-2">
                                    <a href="#" className="text-twopart text-sm py-1">Новостройки 2025 года</a>
                                    <a href="#" className="text-twopart text-sm py-1">Студии</a>
                                    <a href="#" className="text-twopart text-sm py-1">Двухкомнатные</a>
                                    <a href="#" className="text-twopart text-sm py-1">Трёхкомнатные</a>
                                    <a href="#" className="text-twopart text-sm py-1">Более четырёх комнат</a>
                                    <a href="#" className="text-twopart text-sm py-1">Со скидкой</a>
                                </div>
                            </div>
                        </div>

                        {/* Информация */}
                        <div className="border-b border-gray-700">
                            <button
                                onClick={() => toggleSection('info')}
                                className="flex items-center justify-between w-full py-3 text-white font-medium"
                            >
                                <span>Информация</span>
                                <svg
                                    className={`w-5 h-5 transform transition-transform duration-200 ${openSections.info ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openSections.info ? 'max-h-96 pb-3' : 'max-h-0'}`}>
                                <div className="flex flex-col gap-2">
                                    <a href="#" className="text-twopart text-sm py-1">Блог</a>
                                    <a href="#" className="text-twopart text-sm py-1">Акции</a>
                                    <a href="#" className="text-twopart text-sm py-1">О компании</a>
                                    <a href="#" className="text-twopart text-sm py-1">Построенные объекты</a>
                                </div>
                            </div>
                        </div>

                        {/* Проекты */}
                        <div className="border-b border-gray-700">
                            <button
                                onClick={() => toggleSection('projects')}
                                className="flex items-center justify-between w-full py-3 text-white font-medium"
                            >
                                <span>Проекты</span>
                                <svg
                                    className={`w-5 h-5 transform transition-transform duration-200 ${openSections.projects ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openSections.projects ? 'max-h-96 pb-3' : 'max-h-0'}`}>
                                <div className="flex flex-col gap-2">
                                    <a href="#" className="text-twopart text-sm py-1">ЖК Юннатов</a>
                                    <a href="#" className="text-twopart text-sm py-1">ЖК Раздолье</a>
                                    <a href="#" className="text-twopart text-sm py-1">ЖК Шелонская</a>
                                    <a href="#" className="text-twopart text-sm py-1">ул. Речная д.10</a>
                                    <a href="#" className="text-twopart text-sm py-1">Б.Санкт-Петербургская д.98</a>
                                    <a href="#" className="text-twopart text-sm py-1">ул. Парковая 3/1-2</a>
                                    <a href="#" className="text-twopart text-sm py-1">ул. Воскр. бульвар д.10</a>
                                    <a href="#" className="text-white text-sm font-medium py-1">Больше проектов</a>
                                </div>
                            </div>
                        </div>

                        {/* Связь с нами */}
                        <div className="border-b border-gray-700">
                            <button
                                onClick={() => toggleSection('contacts')}
                                className="flex items-center justify-between w-full py-3 text-white font-medium"
                            >
                                <span>Связь с нами</span>
                                <svg
                                    className={`w-5 h-5 transform transition-transform duration-200 ${openSections.contacts ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openSections.contacts ? 'max-h-96 pb-3' : 'max-h-0'}`}>
                                <div className="flex flex-col gap-2">
                                    <a href="#" className="text-twopart text-sm py-1">Отдел продаж (+7 911-101-10-10)</a>
                                    <a href="#" className="text-twopart text-sm py-1">Виктория (+7 911-101-10-10)</a>
                                    <a href="#" className="text-twopart text-sm py-1">Оксана (+7 911-101-10-10)</a>
                                </div>
                            </div>
                        </div>

                        {/* Соцсети (всегда видимы) */}
                        <div className="pt-4">
                            <span className="text-sm font-medium text-white block mb-3">Наши соц.сети</span>
                            <div className="flex gap-4">
                                <img src="/vk.svg" alt="vk" />
                                <img src="/tg.svg" alt="tg" />
                            </div>
                        </div>
                    </div>

                    {/* Нижняя часть с копирайтом */}
                    <div className="mt-8 text-dark40 grid gap-4 text-sm">
                        <p>© ООО «Глория» Строительная компания 1999-2026г.</p>
                        <p>Строительство и продажа квартир в Великом Новгороде.
                            Сайт носит исключительно информационный характер. Информация, размещенная на сайте, не является публичной офертой.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;