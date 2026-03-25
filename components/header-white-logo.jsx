'use client'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'

const HeaderWhiteLogo = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const animationTimeoutRef = useRef(null);
    const scrollPositionRef = useRef(0);

    const toggleMenu = () => {
        if (isMenuOpen) {
            // Закрытие меню
            setIsMenuOpen(false);
            document.body.style.backgroundColor = '';
            
            // Сбрасываем фон после завершения анимации
            if (animationTimeoutRef.current) {
                clearTimeout(animationTimeoutRef.current);
            }
            
            animationTimeoutRef.current = setTimeout(() => {
                document.body.style.backgroundColor = '';
                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.width = '';
                document.body.style.top = '';
                document.body.classList.remove('menu-open');
                
                // Восстанавливаем позицию скролла
                window.scrollTo(0, scrollPositionRef.current);
            }, 300);
        } else {
            // Сохраняем текущую позицию скролла перед открытием
            scrollPositionRef.current = window.scrollY;
            
            // Открытие меню - сразу меняем фон
            document.body.style.backgroundColor = '#4C4C4C';
            document.body.style.transition = 'background-color 0.3s ease';
            document.body.classList.add('menu-open');
            
            // Блокируем скролл
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.body.style.top = `-${scrollPositionRef.current}px`;
            
            setIsMenuOpen(true);
            
            if (animationTimeoutRef.current) {
                clearTimeout(animationTimeoutRef.current);
            }
        }
    };

    // Эффект для очистки при размонтировании
    useEffect(() => {
        return () => {
            if (animationTimeoutRef.current) {
                clearTimeout(animationTimeoutRef.current);
            }
            document.body.style.backgroundColor = '';
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.top = '';
            document.body.classList.remove('menu-open');
        };
    }, []);

    return(
        <div className='container-padding mx-auto my-4 px-4 lg:px-0'>
            {/* Десктопная версия (md и выше) */}
            <header className='hidden lg:flex w-full gap-6'>
                <Link className='content-center' href={'/'}>
                <img src="/logo2.svg" alt='logo'/>
                </Link>
                <div className='flex bg-[#4C4C4C] items-center rounded-4xl px-8 justify-between w-full py-2'>
                    <div className='flex items-center text-white gap-6'>
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
                    <Link className='content-center' href={'/'}>
                        <img src="/logo2.svg" alt='logo2' className='h-14 relative z-20'/>
                    </Link>
                    {/* Кнопка бургер */}
                    <button 
                        onClick={toggleMenu}
                        className='flex relative z-20 flex-col gap-1.5 p-2 w-14 h-14 bg-white rounded-4xl justify-center items-center'
                    >
                        <span className={`block w-6 h-0.5 bg-header transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-header transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`block w-6 h-0.5 bg-header transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>

                {/* Аккордеон меню */}
                <div className={` fixed inset-0 z-10 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
                    <div className='bg-[#4C4C4C] h-full pt-36 w-full p-6 overflow-y-auto'>
                        {/* Навигационные ссылки */}
                        <div className='flex flex-col gap-4 text-white mb-6'>
                            <a href="#" className='py-2 border-b border-dark40'>Юннатов</a>
                            <a href="#" className='py-2 border-b border-dark40'>Покупка квартиры</a>
                            <a href="#" className='py-2 border-b border-dark40'>О нас</a>
                            <a href="#" className='py-2 border-b border-dark40'>Новости</a>
                            <a href="#" className='py-2 border-b border-dark40'>Построенные объекты</a>
                        </div>
                        
                        {/* Контакты */}
                        <div className='flex flex-col gap-4 text-white'>
                            <div className='grid  gap-2 sm:flex items-center justify-between'>
                                <span className='font-medium'>+7(8162) 623-800</span>
                                <a href='https://yandex.ru/maps/-/CPRsqWy-' className='flex gap-1 items-center'>
                                <img src="/pin_fill.svg" alt="pin-fill" width={'32px'}/>
                                    <p>Менделеева, 16</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderWhiteLogo;