'use client'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const HeaderWhiteLogo = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <div className='container-padding mx-auto my-4 px-4 lg:px-0'>
            {/* Десктопная версия (md и выше) */}
            <header className='hidden lg:flex w-full gap-6'>
                <Link className='content-center' href={'/'}>
                    <img src="/logo2.svg" alt='logo'/>
                </Link>
                <div className='flex bg-[#4C4C4C] items-center rounded-4xl px-8 justify-between w-full py-2'>
                    <div className='flex items-center text-white gap-6'>
                        <a className='min-w-max' href="/apartments">Покупка квартиры</a>
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

            {/* Мобильная версия */}
            <div className='lg:hidden'>
                <div className='flex items-center justify-between'>
                    <Link className='content-center' href={'/'}>
                        <img src="/logo2.svg" alt='logo2' className='h-14 relative z-20'/>
                    </Link>
                    
                    {/* Кнопка бургер */}
                    <button 
                        onClick={() => setIsMenuOpen(true)}
                        className='flex relative z-20 flex-col gap-1.5 p-2 w-14 h-14 bg-white rounded-4xl justify-center items-center'
                        aria-label="Открыть меню"
                    >
                        <span className='block w-6 h-0.5 bg-header'></span>
                        <span className='block w-6 h-0.5 bg-header'></span>
                        <span className='block w-6 h-0.5 bg-header'></span>
                    </button>
                </div>

                {/* Модальное окно меню с анимацией */}
                <Transition show={isMenuOpen} as={Fragment}>
                    <Dialog 
                        onClose={() => setIsMenuOpen(false)}
                        className="relative z-10 lg:hidden"
                    >
                        {/* Анимация затемнения (серый фон) */}
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-[#4C4C4C]" aria-hidden="true" />
                        </Transition.Child>

                        {/* Анимация панели меню */}
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 -translate-y-full"
                            enterTo="opacity-100 translate-y-0"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 -translate-y-full"
                        >
                            <Dialog.Panel className="fixed inset-0 overflow-y-auto p-6 pt-36">
                                {/* Навигационные ссылки */}
                                <div className='flex flex-col gap-4 text-white mb-6'>
                                    <a 
                                        href="/unnatov" 
                                        className='py-2 border-b border-dark40'
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Юннатов
                                    </a>
                                    <a 
                                        href="/apartments" 
                                        className='py-2 border-b border-dark40'
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Покупка квартиры
                                    </a>
                                    <a 
                                        href="#" 
                                        className='py-2 border-b border-dark40'
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        О нас
                                    </a>
                                    <a 
                                        href="#" 
                                        className='py-2 border-b border-dark40'
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Новости
                                    </a>
                                    <a 
                                        href="#" 
                                        className='py-2 border-b border-dark40'
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Построенные объекты
                                    </a>
                                </div>
                                
                                {/* Контакты */}
                                <div className='flex flex-col gap-4 text-white'>
                                    <div className='grid gap-2 sm:flex items-center justify-between'>
                                        <span className='font-medium'>+7(8162) 623-800</span>
                                        <a 
                                            href='https://yandex.ru/maps/-/CPRsqWy-' 
                                            className='flex gap-1 items-center'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <img src="/pin_fill.svg" alt="pin-fill" width={'32px'}/>
                                            <p>Менделеева, 16</p>
                                        </a>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </Dialog>
                </Transition>
            </div>
        </div>
    )
}

export default HeaderWhiteLogo;