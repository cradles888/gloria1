'use client'
import Image from 'next/image'
import { useState } from 'react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <div className='container-padding mx-auto my-4 px-4 lg:px-0'>
            {/* Десктопная версия (md и выше) */}
            <header className='hidden lg:flex w-full gap-6'>
                <img src="/logo.svg" alt='logo'/>
                <div className='flex bg-header items-center rounded-4xl px-8 justify-between w-full py-2'>
                    <div className='flex items-center text-white gap-6'>
                        {/* <a className='min-w-max' href="#">Юннатов</a> */}
                        <a className='min-w-max' href="#">Покупка квартиры</a>
                        <a className='min-w-max' href="#">О нас</a>
                        <a className='min-w-max' href="#">Новости</a>
                        <a className='min-w-max' href="#">Построенные объекты</a>
                    </div>
                    <div className='flex gap-4 items-center text-white'>
                        <span className='min-w-max'>+7(8162) 623-800</span>
                        <img src="/pin_fill.svg" alt="pin-fill" />
                    </div>
                </div>
            </header>

            {/* Мобильная версия с аккордеоном (до md) */}
            <div className='lg:hidden'>
                <div className='flex items-center justify-between'>
                    <img src="/logo.svg" alt='logo' className='h-8'/>
                    
                    {/* Кнопка бургер */}
                    <button 
                        onClick={toggleMenu}
                        className='flex flex-col gap-1.5 p-2'
                    >
                        <span className={`block w-6 h-0.5 bg-header transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-header transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`block w-6 h-0.5 bg-header transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>

                {/* Аккордеон меню */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 mt-6' : 'max-h-0'}`}>
                    <div className='bg-header rounded-3xl p-6'>
                        {/* Навигационные ссылки */}
                        <div className='flex flex-col gap-4 text-white mb-6'>
                            <a href="#" className='py-2 border-b border-gray-700'>Юннатов</a>
                            <a href="#" className='py-2 border-b border-gray-700'>Покупка квартиры</a>
                            <a href="#" className='py-2 border-b border-gray-700'>О нас</a>
                            <a href="#" className='py-2 border-b border-gray-700'>Новости</a>
                            <a href="#" className='py-2 border-b border-gray-700'>Построенные объекты</a>
                        </div>
                        
                        {/* Контакты */}
                        <div className='flex flex-col gap-4 text-white'>
                            <div className='flex items-center justify-between'>
                                <span className='font-medium'>+7(8162) 623-800</span>
                                <div className='flex gap-1 items-center'>
                                <img src="/pin_fill.svg" alt="pin-fill" width={'32px'}/>
                                    <p>Менделеева, 16</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;