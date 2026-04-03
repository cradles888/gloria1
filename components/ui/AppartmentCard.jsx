import { formatted } from '@/utils/formatPrice'

const AppartmentCard = ({
    view,
    id,
    rooms,
    sqm,
    price,
    priceSqm,
    imageUrl,
    imageAlt,
    position,
    floor,
    floorTotal,
}) => {

    const formattedPrice = formatted(price)
    const formattedSqm = formatted(sqm)
    const formattedPriceSqm = formatted(priceSqm)
    if (view === 'grid') {
        return (
            <article className="bg-dark10 p-6 rounded-3xl cursor-pointer">
                <header className="grid gap-1">
                    <div className="flex justify-between">
                        <p className="text-2xl text-dark font-medium">{rooms} комнаты, {formattedSqm}&nbsp;м<sup>2</sup></p>
                        <div className="justify-items-end">
                            <p className="text-base bg-dark15 rounded-lg text-dark px-2 py-1">№{id}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <p className="text-2xl text-accent font-medium">{formattedPrice}</p>
                        <p className="text-xl text-dark80">·</p>
                        <p className="text-sm text-dark80">{formattedPriceSqm} м<sup>2</sup></p>
                    </div>

                    <div>
                        <p className="text-sm text-dark80">Ипотека от 37 832 ₽ в мес.</p>
                    </div>
                </header>


                <div className="my-16 flex justify-center 2xl:justify-start">
                    <img className="mix-blend-multiply w-75 md:w-70 lg:w-auto" src={imageUrl} alt={imageAlt} />
                </div>

                <footer className="flex items-center gap-1">
                    <p className="text-dark text-base">Позиция {position}</p>
                    <p className="text-xl text-dark80">·</p>
                    <p className="text-dark text-base">Этаж {floor} из {floorTotal}</p>
                </footer>
            </article>
        );
    } return (

        <article className='md:grid flex flex-col md:grid-cols-[1fr_1fr_0.6fr_1fr_0.4fr] gap-6 md:gap-auto xl:grid-cols-[1fr_1.3fr_1fr_1.3fr_1fr] bg-dark10 p-8 rounded-3xl'>
            <section className='content-center'>
                <img
                    className='mix-blend-multiply justify-self-center-safe w-75 md:w-50'
                    src={imageUrl}
                    alt={imageAlt} />
            </section>

            <section className='hidden md:flex flex-col gap-1 justify-center'>
                <section className="flex gap-4">
                    <h3 className="text-base md:text-lg lg:text-xl xl:text-[26px] text-dark font-medium">{rooms} комнаты, {formattedSqm}&nbsp;м<sup>2</sup></h3>
                </section>
                <section className="grid lg:flex items-center gap-1">
                    <p className="text-base md:text-lg lg:text-2xl xl:text-[28px] text-accent font-medium">{formattedPrice}</p>
                    <p className="text-2xl hidden lg:block text-dark80">·</p>
                    <p className="text-xs lg:text-sm xl:text-base text-dark80">{formattedPriceSqm} м<sup>2</sup></p>
                </section>
                <section className='pt-2 lg:pt-0'>
                    <p className="text-xs lg:text-sm xl:text-base text-dark80">Ипотека от 37 832 ₽ в мес.</p>
                </section>
            </section>

            <section className='hidden md:grid gap-2 lg:flex content-center lg:items-center lg:gap-1'>
                <p className="text-dark text-xs lg:text-sm xl:text-base">Позиция {position}</p>
                <p className="text-xl text-dark80 hidden lg:block">·</p>
                <p className="text-dark text-xs lg:text-sm xl:text-base">Этаж {floor} из {floorTotal}</p>
            </section>
            <section className='hidden md:block border-2 border-[#F28918] rounded-2xl text-center text-dark/40 content-center'>Преимущества</section>
            <section className='flex justify-end items-center'>
                <p className="text-xs lg:text-sm xl:text-base bg-dark/10 rounded-lg text-dark px-2 py-1">№{id}</p>
            </section>

            <section className='flex justify-between md:hidden'>
                <section className='flex flex-col gap-2'>
                    <p className='text-dark80 text-sm'>Количество комнат:</p>
                    <p className='text-dark80 text-sm'>Площадь</p>
                    <p className='text-dark80 text-sm'>Стоимость:</p>
                    <p className='text-dark80 text-sm'>Стоимость за м<sup>2</sup>:</p>
                    <p className='text-dark80 text-sm'>Ипотека от (в месяц):</p>
                    <p className='text-dark80 text-sm'>Позиция:</p>
                    <p className='text-dark80 text-sm'>Этаж из {floorTotal}:</p>
                </section>
                <div className='grid'>
                <section className='flex flex-col gap-2 items-end'>
                    
                        <p className="text-sm text-dark font-medium">{rooms} комнаты</p>
                        <p className='text-sm text-dark font-medium'>{formattedSqm} м<sup>2</sup></p>
                    
                    
                        <p className="text-sm text-dark font-medium">{formattedPrice} ₽</p>
                        <p className="text-sm text-dark">{formattedPriceSqm} ₽</p>
                    
                    
                        <p className="text-sm text-dark">37 832 ₽</p>

                </section>

                <section className='flex flex-col gap-2 items-end'>
                    <p className="text-dark text-sm">{position}</p>
                    <p className="text-dark text-sm">{floor}</p>
                </section>
                </div>
            </section>
        </article>
    );
};




export default AppartmentCard;